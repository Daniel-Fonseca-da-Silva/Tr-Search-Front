import { Routes } from '@angular/router';

import { LogoComponent } from './index';

export const LogoRoutes: Routes = [
    {
        path: 'logo',
        redirectTo: 'logos/logo'
    },
    {
        path: 'logos/logo',
        component: LogoComponent
    }
];
