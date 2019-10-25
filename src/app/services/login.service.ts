import { Injectable } from '@angular/core';
import userInfo from './../entities/userInfo';

@Injectable({
  providedIn: 'root'
})
export class LoginService { 
	constructor() { }
	loginIn: boolean = false;
	login(userName, userPass){ 
		let result = userInfo.find( item => 
			( item.isAdmin && item.userName === userName && item.userPass === userPass )); 
		this.loginIn = true;
		return result;
	}
	logOut(){
		this.loginIn = false;
	}
	checkLogin(){
		return loginIn;
	}
}
