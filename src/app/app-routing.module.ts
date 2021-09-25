import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchRoutes } from './searches';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchers/search',
    pathMatch: 'full'
  },
  ...SearchRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
