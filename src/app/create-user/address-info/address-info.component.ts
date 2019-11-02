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
	    			Validators.requiredTrue
		    ]),
		    "country": new FormControl("", [
	    			Validators.requiredTrue
		    ]),
		    "street": new FormControl("", [
	    			Validators.required,
                	Validators.minLength(2), 
                	Validators.maxLength(12),
                	Validators.pattern("^[а-яА-ЯёЁa-zA-Z]+$")
		    ]),
		    "building": new FormControl("", [
		    		Validators.required, 
		    		Validators.pattern("^[0-9]{1,3}")
			]),
		    "flat": new FormControl("", [
		    		Validators.required, 
		    		Validators.pattern("^[0-9]{1,3}")
			]),
		    "city": new FormControl("", [
	                Validators.required,
                	Validators.minLength(2), 
                	Validators.maxLength(12),
                	Validators.pattern("^[а-яА-ЯёЁa-zA-Z]+$")
		    ]),
		    "code": new FormControl("", [
		    		Validators.required, 
		    		Validators.pattern("^[0-9]{4}")
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
    prevPage(){
    	this.page.num = 0; 
    }
    submit(){
    	if(this.singUpForm2.invalid)return; 
    	Object.assign(this.adderessInfo, this.singUpForm2.value);
    	this.page.num = 2; 
    	this.writeInfo.emit(false);
    	console.log(this.singUpForm2.value);  
    }
}
