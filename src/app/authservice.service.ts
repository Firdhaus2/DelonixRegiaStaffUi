import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  //authentication for staff users
  authUser(username: string, password: string) {
    return this.http.get('/api/authstaffuser/' + username + "/" + password);
  }

  setSecureToken(secure_token: string) {
    localStorage.setItem("LoggedIn", secure_token)
  }

  getSecureToken() {
    return localStorage.getItem("LoggedIn")
  }

  setUserRole(role: string) {
    localStorage.setItem("UserRole", role);
  }

  getUserRole() {
    return localStorage.getItem("UserRole")
  }
}
