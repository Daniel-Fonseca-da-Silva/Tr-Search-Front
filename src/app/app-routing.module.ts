import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchRoutes } from './searches';
import { UserRoutes } from './users';
import { AboutRoutes } from './abouts';
import { ConfigRoutes } from './configs';
import { CommonRoutes } from './users-common';
import { CorporateRoutes } from './users-corporate';
import { UserComRoutes } from './users-com-cad';
import { UserCorpRoutes } from './users-corp-cad';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchers/search',
    pathMatch: 'full'
  },
  ...SearchRoutes,
  ...UserRoutes,
  ...AboutRoutes,
  ...ConfigRoutes,
  ...CommonRoutes,
  ...CorporateRoutes,
  ...UserComRoutes,
  ...UserCorpRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
