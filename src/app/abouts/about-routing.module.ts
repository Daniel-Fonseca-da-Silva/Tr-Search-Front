import { Routes } from '@angular/router';

import { AboutComponent } from './index';

export const AboutRoutes: Routes = [
    {
        path: 'sobre',
        redirectTo: 'about'
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
