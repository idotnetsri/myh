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
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            gender: [0, Validators.required],
            age: ["", Validators.required],
            dateOfBirth: ["", Validators.required],
            mobile: ["", Validators.required],
            otherPhone: ["",Validators.maxLength(15)],
            addressLine1: ["", Validators.required],
            addressLine2: [""],
            city: [""],
            ssn: [""],
            state: [""],
            zip: [""],
            occupation: [""],
            imageUrl: [""],
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
}