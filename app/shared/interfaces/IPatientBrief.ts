/**
 * Created by NetSri on 02/07/2016.
 */
export interface IPatientBrief{
    id:number,
    fullName:string,
    patientCode:string,
    age:number,
    phones:string,
    shortAddressLine:string,
    imageUrl:string,
    regDate:string,
    visitsThisMonth:number,
    totalVisits:number,
    lastVisited:string 
}