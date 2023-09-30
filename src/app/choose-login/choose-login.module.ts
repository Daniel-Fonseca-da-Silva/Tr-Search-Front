import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseLoginComponent } from './choose-login';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ChooseLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ChooseLoginComponent
  ]
})
export class ChooseLoginModule { }
