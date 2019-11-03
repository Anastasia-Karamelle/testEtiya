import { Component, OnInit, } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import {User} from './entities/userInterface';
import userInfo from './entities/userInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (!localStorage.getItem('fullInfoUsers')) {
      localStorage.setItem('fullInfoUsers', JSON.stringify(userInfo));
    }
  }
}
