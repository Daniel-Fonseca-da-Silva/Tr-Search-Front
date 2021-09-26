import { Routes } from '@angular/router';

import { EstablishmentComponent } from './index';

export const EstablishmentRoutes: Routes = [
    {
        path: 'establishment',
        redirectTo: 'establishments/establishment'
    },
    {
        path: 'establishments/establishment',
        component: EstablishmentComponent
    }
];
