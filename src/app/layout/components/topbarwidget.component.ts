import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../core/services/auth.service';


@Component({
    selector: 'topbar-widget',
    standalone: true,
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
    template: `<a class="flex items-center cursor-pointer" href="/landing/home" (click)="navigateTo('/landing/home'); $event.preventDefault()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-12 mr-2" fill="none">
                <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm-4.22 4.22l1.42 1.42 2.83-2.83-1.42-1.42zm8.48 0l1.42 1.42-2.83 2.83-1.42-1.42z"
                    fill="var(--primary-color)"
                />
            </svg>

            <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20">SLASH</span>
        </a>

        <a pButton [text]="true" severity="secondary" [rounded]="true" pRipple class="lg:!hidden" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars !text-2xl"></i>
        </a>

        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
            <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
                <!-- <li>
                    <a (click)="navigateTo('/landing/home')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Inicio</span>
                    </a>
                </li> -->
                <li>
                    <a (click)="navigateTo('/landing/errores_asignados')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Mis Incidencias</span>
                    </a>
                </li>
                <li>
                    <a (click)="navigateTo('/landing/detalles_errores')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Detalles de Incidencia</span>
                    </a>
                </li>
                <li>
                    <a (click)="navigateTo('/landing/comentarios_seguimiento')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Seguimiento</span>
                    </a>
                </li>
                <li>
                    <a (click)="navigateTo('/landing/sugerencia_ia')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Recomendaciones de IA</span>
                    </a>
                </li>
                <li>
                    <a (click)="navigateTo('/landing/proyecto_status')" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Progreso del Proyecto</span>
                    </a>
                </li>
            </ul>
            <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
                <button pButton pRipple label="Login" routerLink="/auth/login" [rounded]="true" [text]="true"></button>
                <button pButton pRipple label="Register" routerLink="/auth/login" [rounded]="true"></button>
            </div>
        </div> `
})
export class TopbarWidget {
    constructor(public router: Router, private authService: AuthService) {}

    navigateTo(path: string) {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate([path]);
        } else {
            this.router.navigate(['/auth/login']);
        }
    }
}
