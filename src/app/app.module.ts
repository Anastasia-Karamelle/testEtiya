import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './main-page/side-bar/side-bar.component';
import { ContentComponent } from './main-page/content/content.component';
import { MainInfoComponent } from './create-user/main-info/main-info.component';
import { AddressInfoComponent } from './create-user/address-info/address-info.component';
import { CompletedComponent } from './create-user/completed/completed.component';
import { TableMainIfoComponent } from './user-info/table-main-ifo/table-main-ifo.component';
import { TableAddressInfoComponent } from './user-info/table-address-info/table-address-info.component';
import { FilterFormComponent } from './user-info/filter-form/filter-form.component';

import { CountryService } from './services/county.service';
import { DeleteService } from './services/delete.service';
import { WriteUserInfoService } from './services/write-user-info.service';
import { FilterService } from './services/filter.service';
import {UserLoginService} from './services/user-login.service';

const appRoutes: Routes = [
    { path: '', component: MainPageComponent},
    { path: 'user/create', component: CreateUserComponent},
    { path: 'user/info', component: UserInfoComponent },
    { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserInfoComponent,
    CreateUserComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    ContentComponent,
    MainInfoComponent,
    AddressInfoComponent,
    CompletedComponent,
    TableMainIfoComponent,
    TableAddressInfoComponent,
    FilterFormComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [
    CountryService,
    FilterService,
    WriteUserInfoService,
    DeleteService,
    UserLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
