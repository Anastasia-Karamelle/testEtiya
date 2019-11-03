import { Injectable } from '@angular/core';
import { User } from '../entities/userInterface';
import userInfo from '../entities/userInfo';
import {Address} from '../entities/addressInterface';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() {}

  filter(criteria: User): User[] {
      let result = JSON.parse(localStorage.getItem('fullInfoUsers'));
      if (criteria.firstName) {
        result = result.filter((value: User) => {
           return value.firstName.toLowerCase().indexOf(criteria.firstName.toLowerCase()) > -1;
        });
      }
      if (criteria.lastName) {
     result = result.filter((value: User) => {
           return value.lastName.toLowerCase().indexOf(criteria.lastName.toLowerCase()) > -1;
        });
    }
      if (criteria.userName) {
     result = result.filter((value: User) => {
           return value.userName.toLowerCase().indexOf(criteria.userName) > -1;
        });
    }
      if (criteria.phone) {
     result = result.filter((value: User) => {
           return value.phone.toLowerCase().indexOf(criteria.phone) > -1;
        });
    }
      if (criteria.email) {
     result = result.filter((value: User) => {
           return value.email.toLowerCase().indexOf(criteria.email) > -1;
        });
    }
      return result as User[] ;
  }
}
