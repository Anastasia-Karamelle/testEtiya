import { Component, OnInit } from '@angular/core';
import { MainInfo, User } from '../entities/userInterface';
import { Address } from '../entities/addressInterface';
import { WriteUserInfoService } from '../services/write-user-info.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [WriteUserInfoService]
})
export class CreateUserComponent implements OnInit {
page: { num: number };

constructor(private writeUserInfoService: WriteUserInfoService) {}
  ngOnInit() {
    this.page = { num: 0 };
  }
}
