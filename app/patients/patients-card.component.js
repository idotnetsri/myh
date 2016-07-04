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
 * Created by NetSri on 01/07/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var capitalize_pipe_1 = require('../shared/pipes/capitalize.pipe');
var trim_pipe_1 = require('../shared/pipes/trim.pipe');
var trackby_service_1 = require('../shared/services/trackby.service');
var PatientsCardComponent = (function () {
    function PatientsCardComponent(trackby) {
        this.trackby = trackby;
        this.patients = [];
    }
    PatientsCardComponent.prototype.ngOnInit = function () {
        console.log(this.patients.length);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PatientsCardComponent.prototype, "patients", void 0);
    PatientsCardComponent = __decorate([
        core_1.Component({
            selector: 'my-app-patients-card',
            templateUrl: './app/patients/patients-card.component.html',
            styleUrls: ['./app/patients/patients.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            pipes: [capitalize_pipe_1.CapitalizePipe, trim_pipe_1.TrimPipe],
            //When using OnPush detectors, then the framework will check an OnPush
            //component when any of its input properties changes, when it fires
            //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [trackby_service_1.TrackByService])
    ], PatientsCardComponent);
    return PatientsCardComponent;
}());
exports.PatientsCardComponent = PatientsCardComponent;
//# sourceMappingURL=patients-card.component.js.map