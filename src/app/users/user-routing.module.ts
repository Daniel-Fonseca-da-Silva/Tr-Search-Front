import { Routes } from '@angular/router';

import { UserComponent } from './index';

export const UserRoutes: Routes = [
    {
        path: 'users',
        redirectTo: 'users/user'
    },
    {
        path: 'users/user',
        component: UserComponent
    }
];

