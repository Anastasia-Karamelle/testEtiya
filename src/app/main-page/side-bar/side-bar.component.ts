import {Component, OnDestroy, OnInit} from '@angular/core';
import { User } from '../../entities/userInterface';
import { UserLoginService } from '../../services/user-login.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {
 onLogin = false;
  private loginSubscription: Subscription;

constructor(private userLoginService: UserLoginService) {}

 ngOnInit() {
    const user = JSON.parse(localStorage.getItem('loginUser'));
    if (user) {
      this.onLogin = true;
    }
    this.loginSubscription = this.userLoginService.isLogin.subscribe((result: User) => {
      if (result) {
        this.onLogin = true;
      } else {
        this.onLogin = false;
      }
    });
 }

  ngOnDestroy(): void {
  this.loginSubscription.unsubscribe();
  }
}
