import { Component, OnInit } from '@angular/core';
import {MainInfo, User} from '../../entities/userInterface';
import { Address } from '../../entities/addressInterface';
import { WriteUserInfoService } from '../../services/write-user-info.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  mainInfo;
  addressInfo;
  showAlert = false;
  constructor(private writeUserInfoService: WriteUserInfoService) {}

  ngOnInit() {
    this.mainInfo = JSON.parse(localStorage.getItem('mainInfo'));
    this.addressInfo = JSON.parse(localStorage.getItem('addressInfo'));
    this.mainInfo.isAdmin = 'User';
  }
  save() {
    const fullUserInfo = { ...this.mainInfo};
    fullUserInfo.address = [];
    fullUserInfo.address.push(this.addressInfo);
    fullUserInfo.id = this.writeUserInfoService.getLastId();
    fullUserInfo.isAdmin = false;
    this.writeUserInfoService.writeUserInfo(fullUserInfo);
    this.showAlert = true;
    localStorage.removeItem('mainInfo');
    localStorage.removeItem('addressInfo');

  }
  cancel() {
    localStorage.removeItem('mainInfo');
    localStorage.removeItem('addressInfo');
    window.location.replace('/');
  }
}
