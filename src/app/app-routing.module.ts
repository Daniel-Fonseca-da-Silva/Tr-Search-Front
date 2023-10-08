import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginUserRegularFormComponent } from './login-user-regular-form';
import { ChooseLoginComponent } from './choose-login';
import { LoginUserCorporateFormComponent } from './login-user-corporate-form';
import { CreateUserRegularFormComponent } from './create-user-regular-form';

const routes: Routes = [
  { path: 'choose-router', component: ChooseLoginComponent },
  { path: 'regular-user-login', component: LoginUserRegularFormComponent },
  { path: 'regular-corporate-login', component: LoginUserCorporateFormComponent },
  { path: 'create-regular-user', component: CreateUserRegularFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
