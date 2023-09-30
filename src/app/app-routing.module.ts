import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserRegularFormComponent } from './login-user-regular-form';
import { ChooseLoginComponent } from './choose-login';

const routes: Routes = [
  { path: 'regular-user-login', component: LoginUserRegularFormComponent },
  { path: 'choose-router', component: ChooseLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
