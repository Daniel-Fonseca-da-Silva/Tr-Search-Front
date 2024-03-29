import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './index';
import { LoadingModule } from '../loading';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from '../header';
import { SearchModule } from '../search';
import { JumbotronModule } from '../jumbotron';
import { SearchEstablishmentModule } from '../search-establishment';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HeaderModule,
    LoadingModule,
    SearchModule,
    JumbotronModule,
    SearchEstablishmentModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
