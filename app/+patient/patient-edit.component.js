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
var data_service_1 = require('../shared/services/data.service');
var PatientEditComponent = (function () {
    function PatientEditComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.patient = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: 0,
            age: 0,
            dateOfBirth: '',
            mobile: '',
            otherPhone: '',
            ssn: '',
            occupation: '',
            patientStatus: 0,
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            addressLine4: '',
            city: '',
            state: '',
            zip: '',
            countryId: 0
        };
    }
    PatientEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.router.routerState.parent(this.route).snapshot.params['id'];
        this.patientId = id;
        this.dataService.getPatient(id).subscribe(function (patient) {
            //Quick and dirty clone used in case user cancels out of form
            var pat = JSON.stringify(patient);
            _this.patient = JSON.parse(pat);
        });
    };
    PatientEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.dataService.updatePatient(this.patientId, this.patient)
            .subscribe(function (status) {
            _this.router.navigate(['/patients/' + _this.patientId]);
        });
    };
    PatientEditComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    PatientEditComponent = __decorate([
        core_1.Component({
            selector: 'my-app-patient-edit',
            templateUrl: 'patient-edit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, data_service_1.DataService])
    ], PatientEditComponent);
    return PatientEditComponent;
}());
exports.PatientEditComponent = PatientEditComponent;
//# sourceMappingURL=patient-edit.component.js.map