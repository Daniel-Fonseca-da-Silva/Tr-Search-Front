import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './index';
import { LoadingModule } from '../loading';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
