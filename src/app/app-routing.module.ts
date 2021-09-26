import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchRoutes } from './searches';
import { UserRoutes } from './users';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchers/search',
    pathMatch: 'full'
  },
  ...SearchRoutes,
  ...UserRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
