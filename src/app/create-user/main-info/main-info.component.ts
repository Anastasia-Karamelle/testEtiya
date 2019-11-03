import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder} from '@angular/forms';
import { MainInfo } from '../../entities/userInterface';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
@Input() page: { num: number };
@Input() mainInfo: MainInfo;
singUpForm: FormGroup;

constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.singUpForm = this.formBuilder.group({
        firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20),
                Validators.pattern('^[а-яА-Яa-zA-Z]+$')
        ]),
        lastName: new FormControl('', [
          Validators.required,
                Validators.minLength(2),
                Validators.maxLength(20),
                Validators.pattern('^[а-яА-Яa-zA-Z]+$')
        ]),
        userName: new FormControl('', [
          Validators.required,
                Validators.minLength(2),
                Validators.maxLength(12),
                Validators.pattern('^[а-яА-Яa-zA-Z0-9]+$')
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{12}')
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
                Validators.minLength(4),
                Validators.maxLength(15)
        ]),
        password2: new FormControl('', [
          Validators.required,
                Validators.minLength(4),
                Validators.maxLength(15),
        ]),
    }, {
            validator: this.MustMatch('password', 'password2')
        });
    const userMainData = JSON.parse(localStorage.getItem('mainInfo'));
    if (userMainData) {
          this.singUpForm.controls.firstName.setValue(userMainData.firstName);
          this.singUpForm.controls.lastName.setValue(userMainData.lastName);
          this.singUpForm.controls.userName.setValue(userMainData.userName);
          this.singUpForm.controls.phone.setValue(userMainData.phone);
          this.singUpForm.controls.email.setValue(userMainData.email);
          this.singUpForm.controls.password.setValue(userMainData.password);
          this.singUpForm.controls.password2.setValue(userMainData.password2);
    }
  }
  MustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
              return;
          }
          if (control.value !== matchingControl.value) {
              matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
      };
  }
  next() {
    if (this.singUpForm.invalid) {return; }
    localStorage.setItem('mainInfo', JSON.stringify(this.singUpForm.value));
    this.page.num = 1;
  }
}
