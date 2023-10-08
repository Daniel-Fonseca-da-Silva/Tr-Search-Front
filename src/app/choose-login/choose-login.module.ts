import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChooseLoginComponent } from './index';

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
