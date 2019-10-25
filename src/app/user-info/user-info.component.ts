import { Component, OnInit } from '@angular/core';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { TableMainIfoComponent } from './table-main-ifo/table-main-ifo.component';
import { TableAddressInfoComponent } from './table-address-info/table-address-info.component';
import { User } from './../entities/userInterface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
	findedUsers: User[];

	constructor() { } 
  	ngOnInit() { }
  	onFilter(users: User[]){
  		this.findedUsers = users;
  		console.log('Parent: ', this.findedUsers);
  	}
}
