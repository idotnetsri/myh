/**
 * Created by NetSri on 04/07/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { IPatientUpdate } from '../shared/interfaces/IPatientUpdate';

@Component({
    selector: 'my-app-patient-edit',
    templateUrl: 'patient-edit.component.html'
})
export class PatientEditComponent implements OnInit {

    patientId:number;
    patient: IPatientUpdate =
    {
        id:0,
        firstName:'',
        lastName:'',
        gender:0,
        age:0,
        dateOfBirth:'',
        mobile:'',
        otherPhone:'',
        ssn:'',
        occupation:'',
        patientStatus:0,
        addressLine1:'',
        addressLine2:'',
        addressLine3:'',
        addressLine4:'',
        city:'',
        state:'',
        zip:'',
        countryId:0
    };

    constructor(private router: Router,
                private route: ActivatedRoute,
                private dataService: DataService) { }

    ngOnInit() {
        const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
        this.patientId = id;
        this.dataService.getPatient(id).subscribe((patient: IPatientUpdate) => {
            //Quick and dirty clone used in case user cancels out of form
            const pat = JSON.stringify(patient);
            this.patient = JSON.parse(pat);
        });
    }

    onSubmit() {
        this.dataService.updatePatient(this.patientId,this.patient)
            .subscribe((status: any) => {
                this.router.navigate(['/patients/'+this.patientId]);
            });
    }

    onCancel(event: Event) {
        event.preventDefault();
        this.router.navigate(['/']);
    }

}