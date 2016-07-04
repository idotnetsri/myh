/**
 * Created by NetSri on 01/07/2016.
 */
import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IPatientReview } from '../shared/interfaces/IPatientReview';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../shared/pipes/trim.pipe';
import { TrackByService } from '../shared/services/trackby.service';


@Component({
    selector: 'my-app-patients-card',
    templateUrl: './app/patients/patients-card.component.html',
    styleUrls:['./app/patients/patients.component.css'],
    directives: [ ROUTER_DIRECTIVES ],
    pipes: [ CapitalizePipe, TrimPipe ],
    //When using OnPush detectors, then the framework will check an OnPush
    //component when any of its input properties changes, when it fires
    //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsCardComponent implements OnInit {

    @Input() patients: IPatientReview[] = [];

    constructor(public trackby: TrackByService) { }

    ngOnInit() {
        console.log(this.patients.length);
    }

}

