"use strict";
/**
 * Created by NetSri on 30/06/2016.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS
])
    .then(function (success) { return console.log('AppComponent bootstrapped!'); }, function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map