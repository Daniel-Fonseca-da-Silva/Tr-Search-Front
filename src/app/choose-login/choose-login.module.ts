import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseLoginComponent } from './choose-login';
import { LoginUserRegularFormModule } from '../login-user-regular-form';


@NgModule({
  declarations: [
    ChooseLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChooseLoginComponent
  ]
})
export class ChooseLoginModule { }
