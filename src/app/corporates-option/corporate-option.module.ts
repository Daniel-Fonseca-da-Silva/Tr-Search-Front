import { Routes } from '@angular/router';

import { CorporateOptionComponent } from './index';

export const CorporateOptionRoutes: Routes = [
    {
        path: 'corporate-option',
        redirectTo: 'corporate-option'
    },
    {
        path: 'usuário-opção',
        redirectTo: 'corporate-option'
    },
    {
        path: 'corporate-option',
        component: CorporateOptionComponent
    }
];
