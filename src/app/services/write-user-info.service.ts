import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../entities/userInterface';
import fullInfoUsers  from './../entities/userInfo';

@Injectable({
  providedIn: 'root'
})
export class WriteUserInfoService {

	constructor(private http: HttpClient){ }

	writeUserInfo(userInfo: User){
		fullInfoUsers.push(userInfo);
		console.log(fullInfoUsers);
	}
	getLastId(){
		return fullInfoUsers.length;
	} 
}
