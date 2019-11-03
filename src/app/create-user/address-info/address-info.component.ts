import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AddressType, Country, Address } from '../../entities/addressInterface';
import { CountryService } from '../../services/county.service';

@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css'],
  providers: [CountryService]
})
export class AddressInfoComponent implements OnInit {
@Input() page: { num: number };
@Input() addressInfo: Address = {
  addressType: undefined,
  building: '',
  city: '',
  country: '',
  flat: '',
  idAddress: '',
  postCode: '',
  street: ''
};
@Output() writeInfo = new EventEmitter<boolean>();
addressType2: string[] = Object.values(AddressType);
singUpForm2: FormGroup;
chooseCountry: string;
chooseType: string;
country: Country;

constructor(private countryService: CountryService) {
  console.log(this.addressType2);
}
  ngOnInit() {
    this.singUpForm2 = new FormGroup({
        addressType: new FormControl('', [
            Validators.required
        ]),
        country: new FormControl('', [
            Validators.required
        ]),
        street: new FormControl('', [
            Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(12),
                  Validators.pattern('^[а-яА-ЯёЁa-zA-Z]+$')
        ]),
        building: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]{1,3}')
      ]),
        flat: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]{1,3}')
      ]),
        city: new FormControl('', [
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(12),
                  Validators.pattern('^[а-яА-ЯёЁa-zA-Z]+$')
        ]),
        postCode: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]{4}')
      ])
    });
    this.countryService.getAllCountry().subscribe((data: Country) => {
          this.country = data;
    });
    const userAddressData = JSON.parse(localStorage.getItem('addressInfo'));
    if (userAddressData) {
      this.singUpForm2.controls.addressType.setValue(userAddressData.addressType);
      this.singUpForm2.controls.country.setValue(userAddressData.country);
      this.singUpForm2.controls.street.setValue(userAddressData.street);
      this.singUpForm2.controls.building.setValue(userAddressData.building);
      this.singUpForm2.controls.flat.setValue(userAddressData.flat);
      this.singUpForm2.controls.city.setValue(userAddressData.city);
      this.singUpForm2.controls.postCode.setValue(userAddressData.postCode);
    }
  }
  onCountryChoose(name: string) {
    this.chooseCountry = name;
  }
  onTypeAddressChoose(type: string) {
    this.chooseType = type;
  }
  prevPage() {
    this.page.num = 0;
    localStorage.setItem('addressInfo', JSON.stringify(this.singUpForm2.value));
  }
  submit() {
    if (this.singUpForm2.invalid) { return; }
    localStorage.setItem('addressInfo', JSON.stringify(this.singUpForm2.value));
    this.page.num = 2;
  }
}
