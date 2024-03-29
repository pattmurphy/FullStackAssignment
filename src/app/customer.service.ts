import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }
  getUsers() {
    return this.http.get('http://localhost:3000/api/user_route');
  }
  getUserDetails(userId) {
    return this.http.get('http://localhost:3000/api/users/' + userId);
  }
}