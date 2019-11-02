import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service'; 

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
	onLogin:boolean;
	constructor(private loginService: LoginService){} 
	ngOnInit() { 
		this.onLogin = this.loginService.checkLogin();
	} 
}
