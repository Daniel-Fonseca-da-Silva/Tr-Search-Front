import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchRoutes } from './searches';
import { UserRoutes } from './users';
import { AboutRoutes } from './abouts';
import { ConfigRoutes } from './configs';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchers/search',
    pathMatch: 'full'
  },
  ...SearchRoutes,
  ...UserRoutes,
  ...AboutRoutes,
  ...ConfigRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
