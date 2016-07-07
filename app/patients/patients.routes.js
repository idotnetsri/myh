"use strict";
var patients_component_1 = require('./patients.component');
var patient_new_component_1 = require('../+patient/patient-new.component');
exports.PatientsRoutes = [
    {
        path: 'patients',
        component: patients_component_1.PatientsComponent
    },
    {
        path: 'patients/new',
        component: patient_new_component_1.NewPatientComponent
    },
];
//# sourceMappingURL=patients.routes.js.map