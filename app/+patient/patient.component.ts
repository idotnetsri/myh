/**
 * Created by NetSri on 04/07/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router,  ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app-patient',
    templateUrl: './app/+patient/patient.component.html',
    styleUrls:['./app/patient/patient.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class PatientComponent implements OnInit {

    displayMode: PatientDisplayModeEnum;
    displayModeEnum = PatientDisplayModeEnum;

    constructor(private router: Router) { }

    ngOnInit() {
        //Next line needs a better technique. This is the easiest way
        //to get child route path that I've found so far.
        //Hoping this will be easier with later builds of router
        const path = this.router.url.split('/')[3];
        switch (path) {
            case 'details':
                this.displayMode = PatientDisplayModeEnum.Details;
                break;
            case 'edit':
                this.displayMode = PatientDisplayModeEnum.Edit;
                break;
        }
    }

}

enum PatientDisplayModeEnum {
    Details=0,
    Orders=1,
    Edit=2
}
