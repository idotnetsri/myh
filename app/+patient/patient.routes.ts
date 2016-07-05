/**
 * Created by NetSri on 04/07/2016.
 */
import { RouterConfig } from '@angular/router';

import { PatientComponent }   from './patient.component';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientEditComponent } from './patient-edit.component';
import { NewPatientComponent } from './patient-new.component';

export const PatientRoutes: RouterConfig = [
    {
        path: 'patients/:id',
        component: PatientComponent,
        children: [
            { path:'details', component: PatientDetailsComponent },
            { path:'edit', component: PatientEditComponent },
            { path:'new', component: NewPatientComponent }
        ]
    }
];

