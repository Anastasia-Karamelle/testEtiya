import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MainInfo } from '../../entities/userInterface';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {
	@Input() page: { num: number };
	@Input() mainInfo: MainInfo;
	singUpForm: FormGroup;

	constructor() { };
	ngOnInit() { 	
		this.singUpForm = new FormGroup({ 
		    "firstName": new FormControl("", [ 
		    ]),
		    "lastName": new FormControl("", [ 
		    ]),
		    "userName": new FormControl("", [ 
		    ]),
		    "phone": new FormControl("", [ 
		    ]),
		    "email": new FormControl("", [
	    			Validators.required,
	    			Validators.email
		    ]),
		    "password": new FormControl("", [ 
		    ]), 
		});
	}; 
	next(){  
		if(this.singUpForm.invalid)return;
		Object.assign(this.mainInfo, this.singUpForm.value); 
		this.page.num = 1; 	
		console.log(this.singUpForm.value); 
	}
} 