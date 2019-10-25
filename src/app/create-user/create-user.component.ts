import { Component, OnInit } from '@angular/core';
import { MainInfo, User } from './../entities/userInterface';
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
	fullUserInfo: User;
	mainInfo: MainInfo;
	adderessInfo: Address;
	bool = false;

	constructor(private writeUserInfoService: WriteUserInfoService) {}
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
