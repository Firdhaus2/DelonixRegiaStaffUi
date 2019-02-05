import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StaffAccountsService {

  constructor(private http: HttpClient) { }

  getStaffAccounts() {
    return this.http.get<any[]>('./api/staffAccounts');
  }
}
