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
/**
 * Created by NetSri on 01/07/2016.
 */
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
//import { ValidationService } from '../shared/services/validator.service';
var NewPatientComponent = (function () {
    function NewPatientComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.newPatientForm = this.formBuilder.group({
            'firstName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(150)]],
            'lastName': ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(150)]],
            'age': ['', forms_1.Validators.pattern('^[0-9]{1,6}$')],
            //'email': ['', [Validators.required, ValidationService.emailValidator]],
            'dateOfBirth': ['',],
            'gender': ['', forms_1.Validators.pattern('^[0-9]{1,6}$')],
            'mobile': ['', [forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(15)]],
            'otherPhone': ['', [forms_1.Validators.minLength(10), forms_1.Validators.maxLength(15)]],
            'ssn': ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(20)]],
            'occupation': ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(100)]],
            'imageUrl': ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(120)]],
            'addressLine1': ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(100)]],
            'addressLine2': ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(100)]],
            'addressLine3': ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(100)]],
            'addressLine4': ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(100)]],
            'city': ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(100)]],
            'state': ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(100)]],
            'zip': ['', [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(20)]],
            'countryId': ['', [forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{1,6}$')]]
        });
    }
    NewPatientComponent.prototype.ngOnInit = function () {
        console.log('I am in New Patient Section');
    };
    NewPatientComponent = __decorate([
        core_1.Component({
            selector: 'my-app-new-patient',
            templateUrl: './app/+patient/patient-new.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], NewPatientComponent);
    return NewPatientComponent;
}());
exports.NewPatientComponent = NewPatientComponent;
//# sourceMappingURL=patient-new.component.js.map