import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, AppMenuitem],
  template: `<ul class="layout-menu">
    <ng-container *ngFor="let item of model; let i = index">
      <li
        app-menuitem
        *ngIf="!item.separator"
        [item]="item"
        [index]="i"
        [root]="true"
      ></li>
      <li *ngIf="item.separator" class="menu-separator"></li>
    </ng-container>
  </ul> `,
})
export class AppMenu {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: '',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/admin'],
          },
          {
            label: 'Incidencias',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/models/incidencias/lista-incidencias'],
          },
          {
            label: 'Documentación',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/models/documentacion'],
          },
          {
            label: 'Analsis de Código',
            icon: 'pi pi-fw pi-mobile',
            class: 'rotated-icon',
            routerLink: ['/models/analisis-codigo'],
          },
          {
            label: 'Sugerencias inteligentes',
            icon: 'pi pi-fw pi-mobile',
            class: 'rotated-icon',
            routerLink: ['/models/sugerencias-inteligente'],
          },
          {
            label: 'Reportes',
            icon: 'pi pi-fw pi-mobile',
            class: 'rotated-icon',
            routerLink: ['/models/reportes'],
          },
        ],
      },
      {
        label: 'Configuracion',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/admin'],
        items: [
          {
            label: 'Gestión de Usuarios',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-sign-in',
                routerLink: ['/admin/user'],
              },
              {
                label: 'Time access',
                icon: 'pi pi-fw pi-clock',
                routerLink: ['/admin/auth/access'],
              },
            ],
          },
          {
            label: 'Configuración Global',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/admin/modifications'],
          },
          {
            label: 'Parametrizaciónes',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/admin/parametrizacion'],
          },
        ],
      },
    ];
  }
}
