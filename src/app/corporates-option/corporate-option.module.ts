import { Routes } from '@angular/router';

import { CorporateOptionComponent } from './index';

export const CorporateOptionRoutes: Routes = [
    {
        path: 'corporate_option',
        redirectTo: 'corporate-option'
    },
    {
        path: 'usuário_opção',
        redirectTo: 'corporate-option'
    },
    {
        path: 'corporate-option',
        component: CorporateOptionComponent
    }
];
