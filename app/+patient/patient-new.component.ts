import { Component } from '@angular/core';
import { NgForm, FormBuilder, Validators  }    from '@angular/common';

import { ValidationService } from '../shared/services/validator.service'
import { NewPatient } from './patient-new'

@Component({
    selector: 'my-app-patient-new',
    templateUrl: './app/+patient/patient-new.component.html' 
})
export class NewPatientComponent{
    patientForm:any;

    model = new NewPatient('','',0,0,'','','','','','','','','','','');

    constructor (private fb: FormBuilder) {
        this.patientForm = fb.group({
            firstName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
            lastName: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
            gender: [0, Validators.required],
            age: ["", Validators.required],
            dateOfBirth: ["", Validators.required],
            mobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(15)])],
            otherPhone: ['',Validators.maxLength(15)],
            addressLine1: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
            addressLine2: ['',Validators.maxLength(100)],
            city: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
            ssn: ['', Validators.maxLength(20)],
            state: ['', Validators.maxLength(100)],
            zip: ['', Validators.maxLength(20)],
            occupation: ['', Validators.maxLength(100)],
            imageUrl: ['', Validators.maxLength(150)],
            countryCode: ["", Validators.required],
        });
    }


    infoActive = false;

    doReg(event) {
        console.log(this.model);
        if (this.patientForm.dirty && this.patientForm.valid) {
            console.log(this.patientForm.value);
            //alert(`Password: ${this.patientForm.value.password} Email: ${this.patientForm.value.email}`);
        }
        event.preventDefault();
    }
    clickedInfo(event) {
        event.preventDefault();
        this.infoActive = !this.infoActive;
    }

    get diagnostic() { return JSON.stringify(this.patientForm.value); }
}