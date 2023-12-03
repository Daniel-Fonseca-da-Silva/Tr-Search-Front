import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CreateUserRegularFormComponent } from './index';
import { LoadingModule } from '../loading';

@NgModule({
  declarations: [
    CreateUserRegularFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoadingModule
  ],
  exports: [
    CreateUserRegularFormComponent
  ]
})
export class CreateUserRegularFormModule { }
