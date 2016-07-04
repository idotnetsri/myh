"use strict";
/**
 * Created by NetSri on 01/07/2016.
 */
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var about_component_1 = require('./about/about.component');
var patients_routes_1 = require('./patients/patients.routes');
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
        path: '',
        redirectTo: '/about',
        terminal: true
    }
].concat(patients_routes_1.PatientsRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map