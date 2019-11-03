import { Component, OnInit } from '@angular/core';
import { User } from '../entities/userInterface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  findedUsers: User[];
  addresses: User;

  constructor() { }

  ngOnInit() { }

  filters(users: User[]) {
    this.findedUsers = users;
    this.addresses = undefined;
  }

  chooseUser(user: User) {
    this.addresses = user;
  }
}
