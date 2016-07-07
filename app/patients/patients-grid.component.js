"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Developer on 03/07/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var sortby_directive_1 = require('../shared/directives/sortby.directive');
var capitalize_pipe_1 = require('../shared/pipes/capitalize.pipe');
var trim_pipe_1 = require('../shared/pipes/trim.pipe');
var sorter_1 = require('../shared/utils/sorter');
var trackby_service_1 = require('../shared/services/trackby.service');
var PatientsGridComponent = (function () {
    function PatientsGridComponent(sorter, trackby) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.patients = [];
    }
    PatientsGridComponent.prototype.ngOnInit = function () {
    };
    PatientsGridComponent.prototype.sort = function (prop) {
        this.sorter.sort(this.patients, prop);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PatientsGridComponent.prototype, "patients", void 0);
    PatientsGridComponent = __decorate([
        core_1.Component({
            selector: 'my-app-patients-grid',
            templateUrl: './app/patients/patients-grid.component.html',
            styleUrls: ['./app/patients/patients.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, sortby_directive_1.SortByDirective],
            pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe],
            //When using OnPush detectors, then the framework will check an OnPush 
            //component when any of its input properties changes, when it fires 
            //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [sorter_1.Sorter, trackby_service_1.TrackByService])
    ], PatientsGridComponent);
    return PatientsGridComponent;
}());
exports.PatientsGridComponent = PatientsGridComponent;
//# sourceMappingURL=patients-grid.component.js.map