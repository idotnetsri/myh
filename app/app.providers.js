"use strict";
var http_1 = require('@angular/http');
var sorter_1 = require('./shared/utils/sorter');
var data_service_1 = require('./shared/services/data.service');
var app_constants_1 = require('./app.constants');
var trackby_service_1 = require('./shared/services/trackby.service');
exports.APP_PROVIDERS = [
    sorter_1.Sorter,
    data_service_1.DataService,
    trackby_service_1.TrackByService,
    app_constants_1.Configuration,
    http_1.HTTP_PROVIDERS,
];
//# sourceMappingURL=app.providers.js.map