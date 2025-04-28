import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    isLoggedIn(): boolean {
        const token = localStorage.getItem('token'); // o la lógica que uses para validar sesión
        return !!token;
    }
}
