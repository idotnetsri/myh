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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var patient_new_1 = require('./patient-new');
var NewPatientComponent = (function () {
    function NewPatientComponent(fb) {
        this.fb = fb;
        this.model = new patient_new_1.NewPatient('', '', 0, 0, '', '', '', '', '', '', '', '', '', '', '');
        this.infoActive = false;
        this.patientForm = fb.group({
            firstName: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(2), common_1.Validators.maxLength(100)])],
            lastName: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(2), common_1.Validators.maxLength(100)])],
            gender: [0, common_1.Validators.required],
            age: ["", common_1.Validators.required],
            dateOfBirth: ["", common_1.Validators.required],
            mobile: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(10), common_1.Validators.maxLength(15)])],
            otherPhone: ['', common_1.Validators.maxLength(15)],
            addressLine1: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(2), common_1.Validators.maxLength(100)])],
            addressLine2: ['', common_1.Validators.maxLength(100)],
            city: ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(2), common_1.Validators.maxLength(100)])],
            ssn: ['', common_1.Validators.maxLength(20)],
            state: ['', common_1.Validators.maxLength(100)],
            zip: ['', common_1.Validators.maxLength(20)],
            occupation: ['', common_1.Validators.maxLength(100)],
            imageUrl: ['', common_1.Validators.maxLength(150)],
            countryCode: ["", common_1.Validators.required],
        });
    }
    NewPatientComponent.prototype.doReg = function (event) {
        console.log(this.model);
        if (this.patientForm.dirty && this.patientForm.valid) {
            console.log(this.patientForm.value);
        }
        event.preventDefault();
    };
    NewPatientComponent.prototype.clickedInfo = function (event) {
        event.preventDefault();
        this.infoActive = !this.infoActive;
    };
    Object.defineProperty(NewPatientComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.patientForm.value); },
        enumerable: true,
        configurable: true
    });
    NewPatientComponent = __decorate([
        core_1.Component({
            selector: 'my-app-patient-new',
            templateUrl: './app/+patient/patient-new.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], NewPatientComponent);
    return NewPatientComponent;
}());
exports.NewPatientComponent = NewPatientComponent;
//# sourceMappingURL=patient-new.component.js.map