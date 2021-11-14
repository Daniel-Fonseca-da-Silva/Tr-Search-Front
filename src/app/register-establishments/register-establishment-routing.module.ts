import { Routes } from '@angular/router';

import { RegisterEstablishmentComponent } from './index';

export const RegisterEstablishmentRoutes: Routes = [
    {
        path: 'establishments',
        redirectTo: 'register-establishments/register_establishment'
    },
    {
        path: 'register-establishments/register_establishment',
        component: RegisterEstablishmentComponent
    }
];
