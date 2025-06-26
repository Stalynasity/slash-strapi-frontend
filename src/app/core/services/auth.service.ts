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

  private jsonHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
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
   * Login: Guarda el token tanto en localStorage como en sessionStorage.
   */
  login(data: LoginRequest): Observable<LoginResponse> {
    if (data.identifier === 'admin' && data.password === 'admin') {
      const fakeResponse: LoginResponse = {
        jwt: 'fake-jwt-token',
        user: {
          id: 1,
          username: 'admin',
          email: 'admin@example.com',
        },
      };
      localStorage.setItem('token', fakeResponse.jwt);
      sessionStorage.setItem('token', fakeResponse.jwt); // Guardando en sessionStorage
      localStorage.setItem('user', JSON.stringify(fakeResponse.user));
      return new Observable<LoginResponse>((observer) => {
        observer.next(fakeResponse);
        observer.complete();
      });
    }

    return this.http
      .post<LoginResponse>(
        this.loginUrl,
        JSON.stringify(data),
        { headers: this.jsonHeaders }
      )
      .pipe(
        tap((res) => {
          // Guarda el token en localStorage y sessionStorage
          localStorage.setItem('token', res.jwt);
          sessionStorage.setItem('token', res.jwt); // Guardando en sessionStorage
          localStorage.setItem('user', JSON.stringify(res.user));
        })
      );
  }

  /**
   * Devuelve el token almacenado en sessionStorage
   */
  getToken(): string | null {
    return sessionStorage.getItem('token') || localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token') || !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.removeItem('userProfile');
    this._userProfile = null;
  }
}
