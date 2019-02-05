import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StaffRecordsService {

  constructor(private http: HttpClient) { }

  createStaffRecord( staffId:string, firstName:string, lastName:string, staffUsername:string, mobileNumber:string,  homeNumber:string, streetAddress:string, blockNumber:string, unitNumber:string, postalCode:string, country:string, duty:string) {
    return this.http.post<any[]>('/api/createStaffRecord/' + staffId + '/' + firstName + '/' + lastName + '/' + staffUsername  + '/' + mobileNumber + '/' + homeNumber + '/' + streetAddress + '/' + blockNumber + '/' + unitNumber + '/' + postalCode + '/' + country + '/' + duty, { 'staffId':staffId, 'firstName': firstName, 'lastName':lastName, 'staffUsername':staffUsername, 'mobileNumber':mobileNumber,'homeNumber':homeNumber, 'streetAddress':streetAddress,'blockNumber':blockNumber,'unitNumber':unitNumber, 'postalCode':postalCode,'country':country,'duty':duty})
  }

  getStaffRecords() {
    return this.http.get<any[]>('./api/staffRecords');
  }

  searchStaffRecords(staffId : string) {
    return this.http.get<any[]>('./api/staffRecords' + '/' +staffId);
  }

}
