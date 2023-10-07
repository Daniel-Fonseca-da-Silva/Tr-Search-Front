import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginUserCorporateFormComponent } from './login-user-corporate-form-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LoginUserCorporateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    LoginUserCorporateFormComponent
  ]
})
export class LoginUserCorporateFormModule { }
