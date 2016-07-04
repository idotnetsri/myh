/**
 * Created by NetSri on 04/07/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { IPatientReview } from '../shared/interfaces/IPatientReview';
import { DataService } from '../shared/services/data.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
    selector: 'my-app-patient-details',
    templateUrl: './app/+patient/patient-details.component.html',
    directives: [ ROUTER_DIRECTIVES ],
    pipes: [ CapitalizePipe ]
})
export class PatientDetailsComponent implements OnInit {

    patient: IPatientReview;

    constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() {
        const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
        this.dataService.getPatient(id)
            .subscribe((patient: IPatientReview) => this.patient = patient);
    }
}