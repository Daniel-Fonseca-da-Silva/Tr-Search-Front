import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginUserCorporateFormComponent } from './index';


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
