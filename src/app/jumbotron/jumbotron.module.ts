import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './jumbotron-component';

@NgModule({
  declarations: [
    JumbotronComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JumbotronComponent
  ]
})
export class JumbotronModule { }
