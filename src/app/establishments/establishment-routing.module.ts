import { Routes } from '@angular/router';

import { EstablishmentComponent } from './index';

export const EstablishmentRoutes: Routes = [
    {
        path: 'establishment',
        redirectTo: 'establishments'
    },
    {
        path: 'estabelecimento',
        redirectTo: 'establishments'
    },
    {
        path: 'estabelecimentos',
        redirectTo: 'establishments'
    },
    {
        path: 'establishments',
        component: EstablishmentComponent
    }
];
