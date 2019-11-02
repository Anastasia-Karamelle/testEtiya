import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from './../services/login.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginService]
})

export class HeaderComponent implements OnInit { 
	userName = ""; 
	loginIn: boolean = false;
	showAlert: boolean = false;
    loginForm: FormGroup; 
	constructor(private loginService: LoginService){} 
	ngOnInit() {
        this.loginForm = new FormGroup({ 
            "userName": new FormControl("", [
                Validators.required, 
                Validators.minLength(2), 
                Validators.maxLength(12)
            ]),
            "userPass": new FormControl("", [
                Validators.required, 
                Validators.minLength(4), 
                Validators.maxLength(15) 
            ]), 
        });
    }
 
	login(){
        const user = this.loginService.login(this.loginForm.value.userName, this.loginForm.value.userPass); 
        if(!user){
        	this.showAlert = true;
        	this.loginIn = false;
            this.loginForm.reset(); 
        	return; 
        }  
        this.showAlert = false;
        this.loginIn = true;
        this.userName = this.loginForm.value.userName;
        localStorage.setItem('loginUser', JSON.stringify(user)); 
        this.loginForm.reset(); 
    }

    logOut(){
        this.loginService.logOut();
    	this.userName = ""; 
    	this.loginIn = false;
    }
}
