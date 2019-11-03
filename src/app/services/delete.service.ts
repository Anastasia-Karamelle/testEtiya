import { Injectable } from '@angular/core';
import { User } from '../entities/userInterface';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor() { }

  deleteAddress(user: User, id): User {
    const fullInfoUsers = JSON.parse(localStorage.getItem('fullInfoUsers'));
    const targetUser = fullInfoUsers.findIndex((el) => {
      return el.id === user.id;
    });
    const addressIndex = fullInfoUsers[targetUser].address.findIndex((el) => {
      return el.idAddress === id;
    });
    fullInfoUsers[targetUser].address.splice(addressIndex, 1);
    localStorage.setItem('fullInfoUsers', JSON.stringify(fullInfoUsers));

    return fullInfoUsers[targetUser];
   }

  deleteUser(id: number): User[] {

    const fullInfoUsers = JSON.parse(localStorage.getItem('fullInfoUsers'));
    const targetUser = fullInfoUsers.findIndex((el) => {
      return el.id === id;
    });
    fullInfoUsers.splice(targetUser, 1);
    localStorage.setItem('fullInfoUsers', JSON.stringify(fullInfoUsers));

    return fullInfoUsers;
  }
}
