import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginUserRegularFormComponent } from './index';
import { LoadingModule } from '../loading';

@NgModule({
  declarations: [
    LoginUserRegularFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoadingModule
  ],
  exports: [
    LoginUserRegularFormComponent
  ]
})
export class LoginUserRegularFormModule { }
