import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginUserRegularFormComponent } from './login-user-regular-form';
import { ChooseLoginComponent } from './choose-login';
import { LoginUserCorporateFormComponent } from './login-user-corporate-form';
import { CreateUserRegularFormComponent } from './create-user-regular-form';
import { HomeComponent } from './home';
import { CreateUserCorporateFormComponent } from './create-user-corporate-form';
import { SearchComponent } from './search';
import { JumbotronComponent } from './jumbotron';

const routes: Routes = [
  { path: 'choose-router', component: ChooseLoginComponent },
  { path: 'regular-user-login', component: LoginUserRegularFormComponent },
  { path: 'regular-corporate-login', component: LoginUserCorporateFormComponent },
  { path: 'create-corporate-user', component: CreateUserCorporateFormComponent },
  { path: 'create-regular-user', component: CreateUserRegularFormComponent },
  { path: 'search', component: SearchComponent },
  { path: 'welcome', component: JumbotronComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
