import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchRoutes } from './searches';
import { LoginUserRoutes } from './login-users';
import { AboutRoutes } from './abouts';
import { ConfigurationRoutes } from './configurations';
import { CommonRoutes } from './users-common';
import { CorporateRoutes } from './users-corporate';
import { UserComRoutes } from './users-common-register';
import { UserCorpRoutes } from './users-corporate-register';
import { CorporateOptionRoutes } from './corporates-option';
import { EstablishmentRoutes } from './establishments';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/searchers/search',
    pathMatch: 'full'
  },
  ...SearchRoutes,
  ...LoginUserRoutes,
  ...AboutRoutes,
  ...ConfigurationRoutes,
  ...CommonRoutes,
  ...CorporateRoutes,
  ...UserComRoutes,
  ...CorporateOptionRoutes,
  ...EstablishmentRoutes,
  ...UserCorpRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
