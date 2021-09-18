import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { CommonComponent } from './components/common/common.component';
import { CorporateComponent } from './components/corporate/corporate.component';
import { UserCorpComponent } from './model/user-corp/user-corp.component';
import { UserComComponent } from './model/user-com/user-com.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
