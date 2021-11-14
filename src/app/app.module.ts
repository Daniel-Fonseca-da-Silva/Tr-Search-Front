import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logos';
import { NavbarComponent } from './navbars';
import { FooterComponent } from './footers';
import { SearchComponent } from './searches';
import { LoginUserComponent } from './login-users';
import { CommonComponent } from './users-common';
import { CorporateComponent } from './users-corporate';
import { UserCorporateRegisterComponent } from './users-corporate-register';
import { UserComComponent } from './users-common-register';
import { RegisterEstablishmentComponent } from './register-establishments';
import { SearchModule } from './searches';
import { AboutComponent } from './abouts';
import { ConfigurationComponent } from './configurations';
import { CorporateOptionComponent } from './corporates-option';
import { EstablishmentComponent } from './establishments';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    LoginUserComponent,
    CommonComponent,
    CorporateComponent,
    UserCorporateRegisterComponent,
    UserComComponent,
    RegisterEstablishmentComponent,
    AboutComponent,
    ConfigurationComponent,
    CorporateOptionComponent,
    EstablishmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
