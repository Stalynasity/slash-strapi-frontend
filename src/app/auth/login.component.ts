import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AuthService } from '../core/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, InputTextModule, PasswordModule, ButtonModule, RippleModule],
    templateUrl: './login.html'
})
export class Login {
    usuario = '';
    contrasena = '';
    mostrarPassword = false;
    loading = false;
    error = '';

    constructor(private router: Router, private authService: AuthService) {}

    continuar() {
        this.error = '';

        if (!this.mostrarPassword) {
            this.mostrarPassword = true;
            return;
        }

        if (!this.usuario || !this.contrasena) {
            this.error = 'Completa todos los campos.';
            return;
        }

        this.loading = true;

        this.authService.login({ identifier: this.usuario, password: this.contrasena }).subscribe({
            next: (res) => {
                localStorage.setItem('token', res.jwt);
                localStorage.setItem('user', JSON.stringify(res.user));

                const isAdmin = res.user?.role?.name === 'Admin';
                this.router.navigate([isAdmin ? '/admin' : '/landing/home']);
            },
            error: (err) => {
                this.error = 'Credenciales inválidas. Intenta nuevamente.';
                this.loading = false;
            },
            complete: () => {
                this.loading = false;
            }
        });

        this.loading = true;

        setTimeout(() => {
            if (this.contrasena === '123456') {
                this.router.navigate(['/landing/home']);
            } else if (this.contrasena === 'admin') {
                this.router.navigate(['/admin']);
            }
            else {
                this.error = 'Contraseña incorrecta. Intenta nuevamente.';
            }
            this.loading = false;
        }, 800);

    //   this.authService.login({ identifier: this.usuario, password: this.contrasena }).subscribe({
    //   next: (res) => {
    //     localStorage.setItem('token', res.jwt);
    //     const isAdmin = res.user?.role?.name === 'Admin';
    //     this.router.navigate([isAdmin ? '/admin' : '/landing/home']);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //     this.error = 'Credenciales inválidas. Intenta nuevamente.';
    //     this.loading = false;
    //   },
    //   complete: () => {
    //     this.loading = false;
    //   }
    // });
    }
}
