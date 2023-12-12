import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEstablishmentComponent } from './search-establishment-component';
import { LoadingModule } from '../loading';



@NgModule({
  declarations: [
    SearchEstablishmentComponent
  ],
  imports: [
    CommonModule,
    LoadingModule
  ],
  exports: [
    SearchEstablishmentComponent
  ]
})
export class SearchEstablishmentModule { }
