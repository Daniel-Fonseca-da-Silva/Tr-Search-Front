import { Routes } from '@angular/router';

import { UserComponent } from './index';

export const UserRoutes: Routes = [
    {
        path: 'users',
        redirectTo: 'user'
    },
    {
        path: 'usuario',
        redirectTo: 'user'
    },
    {
        path: 'user',
        component: UserComponent
    }
];
