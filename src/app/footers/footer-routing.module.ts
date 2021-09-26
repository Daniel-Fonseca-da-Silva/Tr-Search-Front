import { Routes } from '@angular/router';

import { FooterComponent } from './index';

export const FooterRoutes: Routes = [
    {
        path: 'footer',
        redirectTo: 'footers/footer'
    },
    {
        path: 'footers/footer',
        component: FooterComponent
    }
];
