import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../service/layout.service';
import { AppConfigurator } from './app.configurator';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
  template: ` <div class="layout-topbar">
    <div class="layout-topbar-logo-container">
      <button
        class="layout-menu-button layout-topbar-action"
        (click)="layoutService.onMenuToggle()"
      >
        <i class="pi pi-bars"></i>
      </button>
      <a class="layout-topbar-logo" routerLink="/admin/dashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="100%"
          height="10%"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm-4.22 4.22l1.42 1.42 2.83-2.83-1.42-1.42zm8.48 0l1.42 1.42-2.83 2.83-1.42-1.42z"
            fill="var(--primary-color)"
          />
        </svg>

        <span>Slash</span>
      </a>
    </div>

    <div class="layout-topbar-actions">
      <div class="layout-config-menu">
        <button
          type="button"
          class="layout-topbar-action"
          (click)="toggleDarkMode()"
        >
          <i
            [ngClass]="{
              'pi ': true,
              'pi-moon': layoutService.isDarkTheme(),
              'pi-sun': !layoutService.isDarkTheme()
            }"
          ></i>
        </button>
        <div class="relative">
          <app-configurator />
        </div>
      </div>

      <button
        class="layout-topbar-menu-button layout-topbar-action"
        pStyleClass="@next"
        enterFromClass="hidden"
        enterActiveClass="animate-scalein"
        leaveToClass="hidden"
        leaveActiveClass="animate-fadeout"
        [hideOnOutsideClick]="true"
      >
        <i class="pi pi-ellipsis-v"></i>
      </button>

      <!-- Info de usuario -->
        <div class="text-right hidden md:block">
          <small class="text-xs text-gray-500">Administrador</small><br />
          <span class="font-medium text-sm">Stalyn David Asitimabay Shigla</span>
        </div>

        <!-- Cerrar sesión -->
        <button class="layout-topbar-action" pTooltip="Cerrar sesión" (click)="cerrarSesion()">
          <i class="pi pi-sign-out"></i>
        </button>

      <!-- <div class="layout-topbar-actions">
        <div class="layout-topbar-menu hidden lg:block">
          <div class="layout-topbar-menu-content">
            <button type="button" class="layout-topbar-action">
              <i class="pi pi-user"></i>
              <span>Profile</span>
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>`,
})
export class AppTopbar {
  items!: MenuItem[];

  constructor(public layoutService: LayoutService) {}

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }

  cerrarSesion() {
    // Aquí puedes limpiar el token y redirigir
    console.log('Cerrando sesión...');
  }
}
