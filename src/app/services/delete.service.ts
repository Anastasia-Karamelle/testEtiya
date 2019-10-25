import { Injectable } from '@angular/core';
import { UserInfo } from './../entities/userInfo';
import { User } from './../entities/userInterface';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

	constructor() { } 

	deleteAddress(user: User, id){   
		for (let key in user) { 
			for(let i = 0; i < user.address.length; i++){
				if(user.address[i].idAddress === id){
					user = user.address.splice(i, 1); 
				} 	
			} 
		}
	}
	deleteUser(users: User[], id){
		console.log(users);
		for(let i = 0; i < users.length; i++){
			if(users[i].id === id){
				users = users.splice(i, 1); 
			}
		} 
	}
}
