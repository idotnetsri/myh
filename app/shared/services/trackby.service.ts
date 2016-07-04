import { Injectable } from '@angular/core';

import { IPatientBrief } from '../interfaces/IPatientBrief';

@Injectable()
export class TrackByService {
  
  customer(index:number, patient: IPatientBrief) {
    return patient.id;
  }
  
}