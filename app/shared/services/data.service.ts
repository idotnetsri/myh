import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Configuration } from '../../app.constants';
import { IPatientUpdate } from '../interfaces/IPatientUpdate';
import { IPatientReview } from '../interfaces/IPatientReview';

@Injectable()
export class DataService {
    private headers: Headers;
    _baseUrl: string;
    patients: IPatientReview[];

    constructor(private http: Http, private _configuration: Configuration) {

        this._baseUrl = _configuration.ServerWithApiUrl + 'patient/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    getPatients() : Observable<IPatientReview[]> {
        if (!this.patients) {
            return this.http.get(this._baseUrl)
                .map((res: Response) => {
                    this.patients = res.json();
                    return this.patients;
                })
                .catch(this.handleError);
        }
        else {
            //return cached data
            return this.createObservable(this.patients);
        }
    }

    getPatient(id: number) : Observable<IPatientReview> {
        if (this.patients) {
            //filter using cached data
            return this.findPatientObservable(id);
        } else {
            //Query the existing Patients to find the target Patient
            return Observable.create((observer: Observer<IPatientReview>) => {
                this.getPatients().subscribe((patients: IPatientReview[]) => {
                    this.patients = patients;
                    const patient = this.filterPatients(id);
                    observer.next(patient);
                    observer.complete();
                })
            })
                .catch(this.handleError);
        }
    }

    updatePatient(id: number, itemToUpdate: IPatientUpdate): any {
        return this.http.put(this._baseUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers }).map(res => res.json());
    }

    private findPatientObservable(id: number) : Observable<IPatientReview> {
        return this.createObservable(this.filterPatients(id));
    }

    private filterPatients(id: number) : IPatientReview {
        const patients = this.patients.filter((patient) => patient.id === id);
        return (patients.length) ? patients[0] : null;
    }

    private createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    private handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
