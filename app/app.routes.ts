/**
 * Created by NetSri on 01/07/2016.
 */
import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashComponent } from './dash/dash.component';
import { MsgsComponent } from './messages/msgs.component';

import { PatientsRoutes } from './patients/patients.routes';
import { PatientRoutes } from './+patient/patient.routes';
import { CheckinQComponent } from "./checkinq/checkinq.component";


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
        path: 'dash',
        component: DashComponent
    },
    {
        path: 'checkinq',
        component: CheckinQComponent
    },
    {
        path: 'mymessages',
        component: MsgsComponent
    },
    {
        path: '',
        redirectTo: '/about',
        terminal: true
    },
    ...PatientsRoutes,
    ...PatientRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
