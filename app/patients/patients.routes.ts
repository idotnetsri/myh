/**
 * Created by NetSri on 01/07/2016.
 */
import { RouterConfig } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { NewPatientComponent } from '../+patient/patient-new.component';

export const PatientsRoutes: RouterConfig = [
    {
        path: 'patients',
        component: PatientsComponent
    },
    {
        path: 'patients/new',
        component: NewPatientComponent
    },
];