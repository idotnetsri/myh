/**
 * Created by NetSri on 04/07/2016.
 */
/**
 * Created by NetSri on 01/07/2016.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';


//import { ValidationService } from '../shared/services/validator.service';

@Component({
    selector: 'my-app-new-patient',
    templateUrl: './app/+patient/patient-new.component.html',
    directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
})
export class NewPatientComponent implements OnInit{
   newPatientForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {

        this.newPatientForm = this.formBuilder.group({
            'firstName': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
            'lastName': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
            'age': ['', Validators.pattern('^[0-9]{1,6}$')],
            //'email': ['', [Validators.required, ValidationService.emailValidator]],
            'dateOfBirth': ['',],
            'gender':['', Validators.pattern('^[0-9]{1,6}$')],
            'mobile' : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
            'otherPhone' : ['', [Validators.minLength(10), Validators.maxLength(15)]],
            'ssn' : ['', [Validators.minLength(5), Validators.maxLength(20)]],
            'occupation' : ['', [Validators.minLength(5), Validators.maxLength(100)]],
            'imageUrl' : ['', [Validators.minLength(5), Validators.maxLength(120)]],
            'addressLine1' : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
            'addressLine2' : ['', [Validators.minLength(5), Validators.maxLength(100)]],
            'addressLine3' : ['', [Validators.minLength(5), Validators.maxLength(100)]],
            'addressLine4' : ['', [Validators.minLength(5), Validators.maxLength(100)]],
            'city' : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
            'state' : ['', [Validators.minLength(5), Validators.maxLength(100)]],
            'zip' : ['', [Validators.minLength(5), Validators.maxLength(20)]],
            'countryId': ['', [Validators.required,  Validators.pattern('^[0-9]{1,6}$')]]
        });
    }

    ngOnInit() {
        console.log('I am in New Patient Section');
    }
}
