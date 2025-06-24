// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../../slash-strapi-frontend/src/environments/environment';
import { UserProfile } from '../../core/models/request/UserProfile-request.model';
import { LoginRequest } from '../models/request/login-request.model';

interface LoginResponse {
  jwt: string;
  user: any;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  profile: UserProfile | null = null;
  private baseUrl = environment.apiUrl;
  private loginUrl = `${this.baseUrl}/auth/local`;
  private _userProfile: UserProfile | null = null;

  // Preparamos siempre los mismos headers
  private jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) {
    this.loadProfileFromStorage();
  }

  loadProfileFromStorage() {
    const raw = sessionStorage.getItem('userProfile');
    this._userProfile = raw ? JSON.parse(raw) : null;
  }

  get userProfile(): UserProfile | null {
    return this._userProfile;
  }

  setUserProfile(profile: UserProfile) {
    this._userProfile = profile;
    sessionStorage.setItem('userProfile', JSON.stringify(profile));
  }

  /**
   * Hace login: envía un JSON puro, con los headers adecuados,
   * guarda el token y devuelve la respuesta.
   */
  login(data: LoginRequest): Observable<LoginResponse> {
    //////////////////////////////////////////////////////////////////////////////////////////
    // Simulación de login para el usuario admin
    // eliminar esta sección si estás usando un backend real./////////////////////////////////
    if (data.identifier === 'admin' && data.password === 'admin') {
    const fakeResponse: LoginResponse = {
      jwt: 'fake-jwt-token',
      user: {
        id: 1,
        username: 'admin',
        email: 'admin@example.com'
      }
    };
    localStorage.setItem('token', fakeResponse.jwt);
    localStorage.setItem('user', JSON.stringify(fakeResponse.user));
    return new Observable<LoginResponse>(observer => {
      observer.next(fakeResponse);
      observer.complete();
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////


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
    // Borra token y datos de usuario
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Borra el perfil guardado
    sessionStorage.removeItem('userProfile');
    // Y limpia la copia interna
    this._userProfile = null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
