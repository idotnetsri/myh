/**
 * Created by NetSri on 01/07/2016.
 */
import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

import { PatientsRoutes } from './patients/patients.routes';


const routes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '',
        redirectTo: '/about',
        terminal: true
    },
    ...PatientsRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
