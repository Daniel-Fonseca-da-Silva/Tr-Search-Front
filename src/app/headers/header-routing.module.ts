import { Routes } from '@angular/router';

import { HeaderComponent } from './header';

export const HeaderRoutes: Routes = [
    {
        path: 'headers',
        redirectTo: 'header'
    },
    {
        path: 'header',
        component: HeaderComponent
    }
];
