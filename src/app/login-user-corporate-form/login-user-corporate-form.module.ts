import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoginUserCorporateFormComponent } from './index';
import { LoadingModule } from '../loading';


@NgModule({
  declarations: [
    LoginUserCorporateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoadingModule
  ],
  exports: [
    LoginUserCorporateFormComponent
  ]
})
export class LoginUserCorporateFormModule { }
