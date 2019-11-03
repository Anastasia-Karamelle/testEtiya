import { Injectable } from '@angular/core';
import userInfo from '../entities/userInfo';
import {User} from '../entities/userInterface';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  isLogin = new Subject<User>();

  constructor() {}

  login(userName, userPass) {
    const result = userInfo.find( item => (
      item.isAdmin && item.userName === userName && item.userPass === userPass
    ));
    // @ts-ignore
    this.isLogin.next(result as User);
  }
  logOut() {
    this.isLogin.next(null);
  }
}
