/**
 * Created by NetSri on 07/07/2016.
 */
export class NewPatient {
    constructor(
        public firstName: string,
        public lastName: string,
        public gender: number,
        public age: number,
        public dateOfBirth: string,
        public mobile: string,
        public addressLine1: string,
        public city: string,
        public otherPhone?: string,
        public ssn?: string,
        public addressLine2?: string,
        public state?: string,
        public zip?: string,
        public occupation?:string,
        public imageUrl?: string,
        public countryCode?: string
    ) {  }
}
