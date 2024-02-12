import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CreateUserCorporateFormComponent } from './index';
import { LoadingModule } from '../loading';


@NgModule({
  declarations: [
    CreateUserCorporateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoadingModule
  ],
  exports: [
    CreateUserCorporateFormComponent
  ]
})
export class CreateUserCorporateFormModule { }
