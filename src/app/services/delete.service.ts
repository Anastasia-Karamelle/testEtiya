import { Injectable } from '@angular/core'; 
import { User } from './../entities/userInterface';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

	constructor() { }

	deleteAddress(user: User, id): User {
		for (let key in user) {
			for (let i = 0; i < user.address.length; i++){
				if (user.address[i].idAddress === id) {
				 user.address.splice(i, 1);
				}
			}
		}

	  return user;
	 }
	deleteUser(users: User[], id): User[] {
		console.log(users);
		for (let i = 0; i < users.length; i++) {
			if (users[i].id === id) {
				users = users.splice(i, 1);
			}
		} 
		return users;
 	}
}
