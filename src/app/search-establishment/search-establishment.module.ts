import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEstablishmentComponent } from './search-establishment-component';
import { LoadingModule } from '../loading';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    SearchEstablishmentComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    LoadingModule
  ],
  exports: [
    SearchEstablishmentComponent
  ]
})
export class SearchEstablishmentModule { }
