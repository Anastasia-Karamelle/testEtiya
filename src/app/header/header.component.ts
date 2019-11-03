import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserLoginService } from '../services/user-login.service';
import { User } from '../entities/userInterface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
  userName = '';
  loginIn = false;
  showAlert = false;
  loginForm: FormGroup;
  private loginSubscription: Subscription;

  constructor(private userLoginService: UserLoginService) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
        userName: new FormControl('', [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(12)
        ]),
        userPass: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(15)
        ]),
    });

    this.loginSubscription = this.userLoginService.isLogin.subscribe((result: User) => {
      if (result === null) { return; }
      if (result === undefined) {
        this.showAlert = true;
        this.loginIn = false;
        this.loginForm.reset();
        return;
      }
      this.showAlert = false;
      this.loginIn = true;
      this.userName = this.loginForm.value.userName;
      localStorage.setItem('loginUser', JSON.stringify(result));
      this.loginForm.reset();
    });
  }

  login() {
    this.userLoginService.login(this.loginForm.value.userName, this.loginForm.value.userPass);
  }

  logOut() {
    this.userLoginService.logOut();
    this.userName = '';
    this.loginIn = false;
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}
