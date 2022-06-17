import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  url = "https://localhost:44346";

  login(data: any) {
    return this.http.post(this.url + '/api/auth/login', data);
  }
  getCurrentUser() {
    return this.http.get(this.url + '/api/user/get-current-user-data', this.generateHeader());
  }
  getAllUsers() {
    return this.http.get(this.url + '/api/all', this.generateHeader());
  }
  getAllWorkingHours() {
    return this.http.get(this.url + '/api/workingHours/all', this.generateHeader());
  }
  getAllAppointments() {
    return this.http.get(this.url + '/api/appointment/all', this.generateHeader());
  }
  getUser(data: any){
    return this.http.get(this.url + '/api/user/' + data.id, this.generateHeader());
  }
  addWorkingHour(data: any){
    return this.http.post(this.url + '/api/workingHours/add', data);
  }
  editProfile(data: any){
    return this.http.put(this.url + '/api/user/' + data.id, data, this.generateHeader());
  }
  userRegistration(data: any) {
    return this.http.post(this.url + '/api/user/register', data);
  }

  getUserFromLocalstorage() {

    let userString = localStorage.getItem('user');

    if(!userString) {
      return null;
    }

    return JSON.parse(userString);
  }

  generateHeader() : any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }
}
