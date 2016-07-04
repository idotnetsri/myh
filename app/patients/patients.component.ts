/**
 * Created by NetSri on 01/07/2016.
 */
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { IPatientReview } from '../shared/interfaces/IPatientReview';
import { FilterTextboxComponent } from '../filter-textbox/filter-textbox.component';
import { PatientsCardComponent } from './patients-card.component';
import { PatientsGridComponent } from './patients-grid.component'

@Component({
    selector: 'my-app-patients',
    templateUrl: './app/patients/patients.component.html',
    directives: [ ROUTER_DIRECTIVES, FilterTextboxComponent, PatientsCardComponent, PatientsGridComponent]
})
export class PatientsComponent implements OnInit{
    pageTitle:string ='Patients';
    filterText: string;
    patients: IPatientReview[] = [];
    filteredPatients: IPatientReview[] = [];
    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.pageTitle = 'Patients';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;

        this.dataService.getPatients()
            .subscribe((patients: IPatientReview[]) => {
                this.patients = this.filteredPatients = patients;
            });
    }

    changeDisplayMode(mode: DisplayModeEnum) {
        this.displayMode = mode;
    }

    filterChanged(data: string) {
        if (data && this.patients) {
            data = data.toUpperCase();
            let props = ['fullName', 'patientCode', 'phones', 'shortAddressLine', 'visitsThisMonth'];
            let filtered = this.patients.filter(item => {
                let match = false;
                for (let prop of props) {
                    //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                    if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                };
                return match;
            });
            this.filteredPatients = filtered;
        }
        else {
            this.filteredPatients = this.patients;
        }
    }

}


enum DisplayModeEnum {
    Card = 0,
    Grid = 1,
    Map = 2
}
