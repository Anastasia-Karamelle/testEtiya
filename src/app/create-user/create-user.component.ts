import { Component, OnInit } from '@angular/core';
import { MainInfoComponent } from './main-info/main-info.component';
import { AddressInfoComponent } from './address-info/address-info.component'
import { CompletedComponent } from './completed/completed.component'
import { User } from './../entities/userInterface';
import { Address } from './../entities/addressInterface';
import { WriteUserInfoService } from './../services/write-user-info.service'; 

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [WriteUserInfoService]
})
export class CreateUserComponent implements OnInit {
	page: { num: number }; 
	fullUserInfo: User | {} = {};
	mainInfo: mainInfo | {} = {};
	adderessInfo: Address | {} = {};
	bool: boolean = false;

	constructor(private writeUserInfoService: WriteUserInfoService){} 
	ngOnInit() {
		this.page = { num: 0 };  
	} 
	writeInfo(isAdm: boolean){
		Object.assign(this.fullUserInfo, this.mainInfo, this.adderessInfo); 
 
		this.fullUserInfo.id = this.writeUserInfoService.getLastId();
		this.fullUserInfo.isAdmin = isAdm; 
 
		console.log('fullUserInfo', this.fullUserInfo);
		this.writeUserInfoService.writeUserInfo(this.fullUserInfo);
		this.bool = isAdm;
	}
}
