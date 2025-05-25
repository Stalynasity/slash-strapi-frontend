import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/request/login-request.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://35.209.121.70:1337/api';
  private loginUrl = `${this.baseUrl}/auth/local?populate=*`;

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<any> {
    return this.http.post<any>(this.loginUrl, data);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
