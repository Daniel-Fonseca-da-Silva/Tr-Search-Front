import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar';

export const NavbarRoutes: Routes = [
    {
        path: 'navbars',
        redirectTo: 'navbars/navbar'
    },
    {
        path: 'navbars/navbar',
        component: NavbarComponent
    }
];
