import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = 'http://127.0.0.1:8000/api/v1/auth/login/';
  constructor(private http: HttpClient
  ) { }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  getToken() {
    return localStorage.getItem('token')

  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }


}


