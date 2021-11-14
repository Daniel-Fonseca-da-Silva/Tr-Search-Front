import { Routes } from '@angular/router';

import { UserComComponent } from './index';

export const UserComRoutes: Routes = [
    {
        path: 'normal-user-cad',
        redirectTo: 'common-user-register'
    },
    {
        path: 'common-user-register',
        component: UserComComponent
    }
];

