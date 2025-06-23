import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, AppMenuitem],
  template: `
    <ul class="layout-menu text-[15px]">
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
    </ul>
  `,
})
export class AppMenu {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Principal',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/admin']
          },
          {
            label: 'Incidencias',
            icon: 'pi pi-fw pi-exclamation-triangle',
            routerLink: ['/admin/incidencias']
          },
          {
            label: 'Documentación',
            icon: 'pi pi-fw pi-book',
            routerLink: ['/admin/documentacion']
          },
          {
            label: 'Análisis de Código',
            icon: 'pi pi-fw pi-code',
            routerLink: ['/admin/analisis-codigo']
          },
          {
            label: 'Sugerencias Inteligentes',
            icon: 'pi pi-fw pi-lightbulb',
            routerLink: ['/admin/sugerencias-inteligentes']
          },
          {
            label: 'Reportes',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/admin/reportes']
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Configuración',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Gestión de Usuarios',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-user',
                routerLink: ['/admin/user']
              },
              {
                label: 'Accesos Temporales',
                icon: 'pi pi-fw pi-clock',
                routerLink: ['/admin/auth/access']
              }
            ]
          },
          {
            label: 'Configuración Global',
            icon: 'pi pi-fw pi-sliders-h',
            routerLink: ['/admin/configuracion-global']
          },
          {
            label: 'Parametrizaciones',
            icon: 'pi pi-fw pi-sliders-h',
            routerLink: ['/admin/parametrizacion']
          }
        ]
      }
    ];
  }
}
