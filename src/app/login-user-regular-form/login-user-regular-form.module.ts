import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginUserRegularFormComponent } from './index';

@NgModule({
  declarations: [
    LoginUserRegularFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    LoginUserRegularFormComponent
  ]
})
export class LoginUserRegularFormModule { }
