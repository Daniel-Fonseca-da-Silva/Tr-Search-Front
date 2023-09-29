import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginUserRegularFormModule } from './login-user-regular-form';
import { ChooseLoginModule } from './choose-login';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    LoginUserRegularFormModule,
    ChooseLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
