/**
 * Created by NetSri on 01/07/2016.
 */
import { RouterConfig } from '@angular/router';

import { PatientsComponent } from './patients.component';

export const PatientsRoutes: RouterConfig = [
    // { path: '', terminal: true, redirectTo: '/patients' },
    { path: 'patients', component: PatientsComponent}
];