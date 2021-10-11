import { Routes } from '@angular/router';

import { SearchComponent } from './index';

export const SearchRoutes: Routes = [
    {
        path: 'find',
        redirectTo: 'search',
    },
    {
        path: 'busca',
        redirectTo: 'search'
    },
    {
        path: 'search',
        component: SearchComponent
    }
];

