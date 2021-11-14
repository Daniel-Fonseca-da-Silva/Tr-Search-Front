import { Routes } from '@angular/router';

import { ConfigurationComponent } from './index';

export const ConfigurationRoutes: Routes = [
    {
        path: 'configuration',
        redirectTo: 'configuration'
    },
    {
        path: 'configuração',
        redirectTo: 'configuration'
    },
    {
        path: 'config',
        redirectTo: 'configuration'
    },
    {
        path: 'configuration',
        component: ConfigurationComponent
    }
];
