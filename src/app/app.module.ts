import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './searches/search/search.component';
import { UserComponent } from './components/user/user.component';
import { CommonComponent } from './components/common/common.component';
import { CorporateComponent } from './components/corporate/corporate.component';
import { UserCorpComponent } from './components/user-corp/user-corp.component';
import { UserComComponent } from './components/user-com/user-com.component';
import { EstablishmentComponent } from './components/establishment/establishment.component';

import { SearchModule } from './searches';

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
    EstablishmentComponent
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
