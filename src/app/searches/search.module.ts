import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchService } from './shared';
import { SearchComponent } from './index';

@NgModule({
  declarations: [
    // SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
