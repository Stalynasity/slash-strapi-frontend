// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../../slash-strapi-frontend/src/environments/environment';

import { LoginRequest } from '../models/request/login-request.model';

interface LoginResponse {
  jwt: string;
  user: any;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl  = environment.apiUrl;
  private loginUrl = `${this.baseUrl}/auth/local`;

  // Preparamos siempre los mismos headers
  private jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {}

  /**
   * Hace login: envía un JSON puro, con los headers adecuados,
   * guarda el token y devuelve la respuesta.
   */
  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(
        this.loginUrl,
        JSON.stringify(data),
        { headers: this.jsonHeaders }
      )
      .pipe(
        tap(res => {
          // Sólo al recibir 2xx guardamos el token
          localStorage.setItem('token', res.jwt);
          localStorage.setItem('user', JSON.stringify(res.user));
        })
      );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
