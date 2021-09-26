import { Routes } from '@angular/router';

import { UserComComponent } from './index';

export const UserComRoutes: Routes = [
    {
        path: 'usercoms',
        redirectTo: 'usercoms/usercom'
    },
    {
        path: 'usercoms/usercom',
        component: UserComComponent
    }
];

