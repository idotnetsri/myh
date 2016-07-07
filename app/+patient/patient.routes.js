"use strict";
var patient_component_1 = require('./patient.component');
var patient_details_component_1 = require('./patient-details.component');
var patient_edit_component_1 = require('./patient-edit.component');
exports.PatientRoutes = [
    {
        path: 'patients/:id',
        component: patient_component_1.PatientComponent,
        children: [
            { path: 'details', component: patient_details_component_1.PatientDetailsComponent },
            { path: 'edit', component: patient_edit_component_1.PatientEditComponent }
        ]
    }
];
//# sourceMappingURL=patient.routes.js.map