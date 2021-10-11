import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logos';
import { NavbarComponent } from './navbars';
import { FooterComponent } from './footers';
import { SearchComponent } from './searches';
import { UserComponent } from './users';
import { CommonComponent } from './commons';
import { CorporateComponent } from './corporates';
import { UserCorpComponent } from './userscorp';
import { UserComComponent } from './userscom';
import { EstablishmentComponent } from './establishments';

import { SearchModule } from './searches';
import { AboutComponent } from './abouts';
import { ConfigComponent } from './configs';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    UserComponent,
    CommonComponent,
    CorporateComponent,
    UserCorpComponent,
    UserComComponent,
    EstablishmentComponent,
    AboutComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
