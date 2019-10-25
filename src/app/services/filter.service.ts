import { Injectable } from '@angular/core';
import { mainInfo } from './../entities/userInterface';
import { User } from './../entities/userInterface';
import userInfo from './../entities/userInfo';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
 
	constructor() {}

	filter(criteria: User){
		let result = userInfo;

		if(criteria.firstName){
			result = result.filter((value: User) => {
	      		return value.firstName === criteria.firstName;
	    	});
		}
		if(criteria.lastName){
			result = result.filter((value: User) => {
	      		return value.lastName === criteria.lastName;
	    	});
		}
		if(criteria.userName){
			result = result.filter((value: User) => {
	      		return value.userName === criteria.userName;
	    	});
		}
		if(criteria.phone){
			result = result.filter((value: User) => {
	      		return value.phone === criteria.phone;
	    	});
		}
		if(criteria.email){
			result = result.filter((value: User) => {
	      		return value.email === criteria.email;
	    	});
		}
		return result;
	}
}
