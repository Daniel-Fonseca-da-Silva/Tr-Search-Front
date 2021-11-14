import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar';

export const HeaderRoutes: Routes = [
    {
        path: 'navbars',
        redirectTo: 'navbar'
    },
    {
        path: 'navbar',
        component: NavbarComponent
    }
];
