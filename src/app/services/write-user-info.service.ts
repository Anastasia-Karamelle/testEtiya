import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../entities/userInterface';
import fullInfoUsers  from './../entities/userInfo';

@Injectable({
  providedIn: 'root'
})
export class WriteUserInfoService {

	constructor(private http: HttpClient){ }

	writeUserInfo(userInfo: User) {
	  // @ts-ignore
		fullInfoUsers.push(userInfo);
		console.log(fullInfoUsers);
	 }
	getLastId(): string {
		return '' + fullInfoUsers[fullInfoUsers.length - 1].id;
	}
}
