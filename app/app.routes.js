"use strict";
/**
 * Created by NetSri on 01/07/2016.
 */
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var about_component_1 = require('./about/about.component');
var dash_component_1 = require('./dash/dash.component');
var msgs_component_1 = require('./messages/msgs.component');
var patients_routes_1 = require('./patients/patients.routes');
var patient_routes_1 = require('./+patient/patient.routes');
var checkinq_component_1 = require("./checkinq/checkinq.component");
var routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'dash',
        component: dash_component_1.DashComponent
    },
    {
        path: 'checkinq',
        component: checkinq_component_1.CheckinQComponent
    },
    {
        path: 'mymessages',
        component: msgs_component_1.MsgsComponent
    },
    {
        path: '',
        redirectTo: '/about',
        terminal: true
    }
].concat(patients_routes_1.PatientsRoutes, patient_routes_1.PatientRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map