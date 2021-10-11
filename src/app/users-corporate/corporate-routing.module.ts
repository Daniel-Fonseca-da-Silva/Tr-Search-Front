import { Routes } from '@angular/router';

import { CorporateComponent } from './index';

export const CorporateRoutes: Routes = [
    {
        path: 'corporate',
        redirectTo: 'corporate-user'
    },
    {
        path: 'corporate-user',
        component: CorporateComponent
    }
];

