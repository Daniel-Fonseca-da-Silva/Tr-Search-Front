import { Routes } from '@angular/router';

import { CorporateComponent } from './index';

export const CorporateRoutes: Routes = [
    {
        path: 'corporate',
        redirectTo: 'corporates/corporate'
    },
    {
        path: 'corporates/corporate',
        component: CorporateComponent
    }
];

