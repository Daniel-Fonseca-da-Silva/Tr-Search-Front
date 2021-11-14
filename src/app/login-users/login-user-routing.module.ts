import { Routes } from '@angular/router';

import { LoginUserComponent } from './index';

export const LoginUserRoutes: Routes = [
    {
        path: 'users',
        redirectTo: 'login-user'
    },
    {
        path: 'usuario',
        redirectTo: 'login-user'
    },
    {
        path: 'login-user',
        component: LoginUserComponent
    }
];
