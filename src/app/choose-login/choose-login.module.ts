import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseLoginComponent } from './choose-login';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChooseLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ChooseLoginComponent
  ]
})
export class ChooseLoginModule { }
