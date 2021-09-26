import { Routes } from '@angular/router';

import { UserCorpComponent } from './index';

export const UserCorpRoutes: Routes = [
    {
        path: 'usercorps',
        redirectTo: 'usercorps/usercorp'
    },
    {
        path: 'usercorps/usercorp',
        component: UserCorpComponent
    }
];

