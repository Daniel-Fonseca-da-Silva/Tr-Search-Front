import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserRegularFormComponent } from './index';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginUserRegularFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    LoginUserRegularFormComponent
  ]
})
export class LoginUserRegularFormModule { }
