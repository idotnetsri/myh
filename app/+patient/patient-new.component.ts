import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';

import { NewPatient } from '../shared/interfaces/INewPatient';

@Component({
    selector: 'my-app-patient-new',
    templateUrl: './app/+patient/patient-new.component.html' 
})
export class NewPatientComponent{

    model = new NewPatient();

    submitted = false;
    onSubmit() { this.submitted = true; }
    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    newHero() {
        this.model = new NewPatient('','',0,0,'','','','');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}