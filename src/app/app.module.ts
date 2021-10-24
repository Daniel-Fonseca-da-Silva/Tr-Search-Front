import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logos';
import { HeaderComponent } from './headers';
import { FooterComponent } from './footers';
import { SearchComponent } from './searches';
import { UserComponent } from './users';
import { CommonComponent } from './users-common';
import { CorporateComponent } from './users-corporate';
import { UserCorpComponent } from './users-corp-cad';
import { UserComComponent } from './users-com-cad';
import { EstablishmentComponent } from './establishments';

import { SearchModule } from './searches';
import { AboutComponent } from './abouts';
import { ConfigComponent } from './configs';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
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
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
