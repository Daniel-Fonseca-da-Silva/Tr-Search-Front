import { Routes } from '@angular/router';

import { ConfigComponent } from './index';

export const ConfigRoutes: Routes = [
    {
        path: 'config',
        redirectTo: 'configuration'
    },
    {
        path: 'configuracao',
        redirectTo: 'configuration'
    },
    {
        path: 'configuration',
        component: ConfigComponent
    }
];
