import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserRegularFormComponent } from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginUserRegularFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginUserRegularFormComponent
  ]
})
export class LoginUserRegularFormModule { }
