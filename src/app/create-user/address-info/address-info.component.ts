import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AddressType, Country, Address } from './../../entities/addressInterface'; 
import { CountryService } from './../../services/county.service'; 

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css'],
  providers: [CountryService]
})
export class AddressInfoComponent implements OnInit {
	@Input() page: { num: number };	
	@Input() adderessInfo: Address;  
	@Output() writeInfo = new EventEmitter<boolean>();
	addressType2: string[] = Object.values(AddressType);
	singUpForm2: FormGroup;
	chooseCountry: string;
	chooseType: string;
	country: Country;
  
	constructor(private countryService: CountryService){} 
    ngOnInit(){
		this.singUpForm2 = new FormGroup({ 
		    "type": new FormControl("", [
	    			Validators.required
		    ]),
		    "country": new FormControl("", [
	    			Validators.required
		    ]),
		    "street": new FormControl("", [
	    			Validators.required
		    ]),
		    "building": new FormControl("", [
		    		Validators.required, 
		    		Validators.pattern("[0-9]*")
			]),
		    "flat": new FormControl("", [
		    		Validators.required, 
		    		Validators.pattern("[0-9]*")
			]),
		    "city": new FormControl("", [
	                Validators.required,  
		    ]),
		    "code": new FormControl("", [
		    		Validators.required, 
		    		Validators.pattern("[0-9]*") 
			])
		});

        this.countryService.getAllCountry().subscribe((data:Country) => {
        	this.country = data; 
        }); 
    }
    onCountryChoose(name: string){ 
    	this.chooseCountry = name;
    }
    onTypeAddressChoose(type: string){
    	this.chooseType = type;
    }
    submit(){
    	if(this.singUpForm2.invalid)return; 
    	Object.assign(this.adderessInfo, this.singUpForm2.value);
    	this.page.num = 2; 
    	this.writeInfo.emit(false);
    	console.log(this.singUpForm2.value);  
    }
}
