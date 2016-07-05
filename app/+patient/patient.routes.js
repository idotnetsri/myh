"use strict";
var patient_component_1 = require('./patient.component');
var patient_details_component_1 = require('./patient-details.component');
var patient_edit_component_1 = require('./patient-edit.component');
var patient_new_component_1 = require('./patient-new.component');
exports.PatientRoutes = [
    {
        path: 'patients/:id',
        component: patient_component_1.PatientComponent,
        children: [
            { path: 'details', component: patient_details_component_1.PatientDetailsComponent },
            { path: 'edit', component: patient_edit_component_1.PatientEditComponent },
            { path: 'new', component: patient_new_component_1.NewPatientComponent }
        ]
    }
];
//# sourceMappingURL=patient.routes.js.map