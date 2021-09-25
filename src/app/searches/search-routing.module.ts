import { Routes } from '@angular/router';

import { SearchComponent } from './index';

export const SearchRoutes: Routes = [
    {
        path: 'searches',
        redirectTo: 'searchers/search'
    },
    {
        path: 'searchers/search',
        component: SearchComponent
    }
];

