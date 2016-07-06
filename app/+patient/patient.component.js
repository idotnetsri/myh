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
 * Created by NetSri on 04/07/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var PatientComponent = (function () {
    function PatientComponent(router) {
        this.router = router;
        this.displayModeEnum = PatientDisplayModeEnum;
    }
    PatientComponent.prototype.ngOnInit = function () {
        //Next line needs a better technique. This is the easiest way
        //to get child route path that I've found so far.
        //Hoping this will be easier with later builds of router
        var path = this.router.url.split('/')[3];
        switch (path) {
            case 'details':
                this.displayMode = PatientDisplayModeEnum.Details;
                break;
            case 'edit':
                this.displayMode = PatientDisplayModeEnum.Edit;
                break;
        }
    };
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'my-app-patient',
            templateUrl: './app/+patient/patient.component.html',
            styleUrls: ['./app/+patient/patient.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
var PatientDisplayModeEnum;
(function (PatientDisplayModeEnum) {
    PatientDisplayModeEnum[PatientDisplayModeEnum["Details"] = 0] = "Details";
    PatientDisplayModeEnum[PatientDisplayModeEnum["Edit"] = 1] = "Edit";
})(PatientDisplayModeEnum || (PatientDisplayModeEnum = {}));
//# sourceMappingURL=patient.component.js.map