import { Routes } from '@angular/router';

import { UserCorporateRegisterComponent } from './index';

export const UserCorpRoutes: Routes = [
    {
        path: 'corporate-user-cad',
        redirectTo: 'corporate-user-register'
    },
    {
        path: 'corporate-user-register',
        component: UserCorporateRegisterComponent
    }
];

