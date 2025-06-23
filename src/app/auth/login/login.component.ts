import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../app/core/services/auth.service';            // ← IMPORTA
import { LoginRequest } from '../../../app/core/models/request/login-request.model'; // ← IMPORTA
import { AppConfigurator } from '../../layout/component/app.configurator';  // ruta correcta
import { environment } from '../../../../../slash-strapi-frontend/src/environments/environment';
import { tap, delay } from 'rxjs/operators';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UserProfile } from '../../core/models/request/UserProfile-request.model';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RippleModule,
    AppConfigurator,
    ToastModule
  ],
  providers: [
    MessageService,
    // ... otros providers
  ],
  templateUrl: './login.html',
})
export class Login implements AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;

  usuario = '';
  contrasena = '';
  mostrarPassword = false;
  passwordVisible = false;
  loading = false;
  error = '';
  // URL de la API administrativa (p.ej. Strapi admin)
  private readonly adminApiToken = environment.adminApiToken;


  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,      // ← INYECTA
    private http: HttpClient

  ) { }

  ngAfterViewInit() {
    this.attemptPlay();
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.attemptPlay());
  }

  private attemptPlay() {
    const videoEl = this.videoPlayer.nativeElement;
    videoEl.load();
    videoEl.play().catch(err => console.warn('Autoplay falló:', err));
  }

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
    const payload: LoginRequest = {
      identifier: this.usuario,
      password: this.contrasena
    };

    // 2) Úsalo en tu handler de error:
    this.authService.login(payload).subscribe({
      next: res => {
        // 1) Muestra el toast
        this.messageService.add({
          severity: 'success',
          summary: '¡Login exitoso!',
          detail: `Bienvenido, ${res.user.username}`,
          life: 2000,       // dura 2 segundos
          key: 'tl'
        });

        const userId = res.user.id;

        // 2) Navega tras 2s, que coincide con la vida del toast
        // Espera 2s para que termine el toast y luego pide el perfil:
        this.fetchUserProfile(userId).pipe(
          delay(2000)
        ).subscribe({
          next: () => {
            this.router.navigate(['admin/dashboard']);
            this.loading = false;
          },
          error: err => {
            console.error(err);
            this.router.navigate(['admin/dashboard']);
            this.loading = false;
          }
        });
      },
      error: err => {
        // Captura el mensaje crudo del API
        const raw = err.error?.error?.message || 'Error al iniciar sesión';
        // Tradúcelo
        const detail = this.translateError(raw);

        this.messageService.add({
          severity: 'error',
          summary: 'Login fallido',
          detail,
          life: 5000,
          key: 'tl'
        });
        this.loading = false;
      },
      complete: () => this.loading = false
    });


  }


  private translateError(rawMsg: string): string {
    const translations: Record<string, string> = {
      // Mensajes exactos que Strapi te devuelve:
      'Invalid identifier or password': 'Usuario o contraseña inválidos',
      'Missing identifier or password': 'Falta el usuario o la contraseña',
      'User not found': 'Usuario no encontrado',
      // …añade aquí tantos casos como necesites…
    };

    // Si no está en el diccionario, devolvemos el mensaje original
    return translations[rawMsg] ?? rawMsg;
  }

  private fetchUserProfile(userId: number) {
    const url = `${environment.apiUrl}/users/${userId}`;

    const jsonHeaderslogin = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.adminApiToken}`
    });


    return this.http.put<UserProfile>(
      url,
      {},
      { headers: jsonHeaderslogin }
    ).pipe(
      tap(profile => {
        sessionStorage.setItem('userProfile', JSON.stringify(profile));
      })
    );

  }

}