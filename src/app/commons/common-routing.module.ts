import { Routes } from '@angular/router';

import { CommonComponent } from './index';

export const CommonRoutes: Routes = [
    {
        path: 'common',
        redirectTo: 'commons/common'
    },
    {
        path: 'commons/common',
        component: CommonComponent
    }
];

