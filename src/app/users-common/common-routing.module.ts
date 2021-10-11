import { Routes } from '@angular/router';

import { CommonComponent } from './index';

export const CommonRoutes: Routes = [
    {
        path: 'common',
        redirectTo: 'common-user'
    },
    {
        path: 'common-user',
        component: CommonComponent
    }
];

