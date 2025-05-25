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
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] }]
            },
            {
                label: 'Base de Datos',
                items: [
                    { label: 'Informe de errores', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/pages/bug_reports'] },
                    { label: 'Code smells', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/pages/code_smells'] },
                    { label: 'Incidentes', icon: 'pi pi-fw pi-mobile', class: 'rotated-icon', routerLink: ['/admin/pages/incidents'] },
                    // { label: 'Gestión', icon: 'pi pi-fw pi-table', routerLink: ['/admin/pages/gestion'] },
                ]
            },
            {
                label: 'Configuracion',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/admin/pages'],
                items: [
                    {
                        label: 'Gestión de Usuarios',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Usuarios',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/admin/pages/user']
                            },
                            {
                                label: 'Time access',
                                icon: 'pi pi-fw pi-clock',
                                routerLink: ['/admin/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Configuración Global',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/admin/pages/modifications']
                    },
                    {
                        label: 'Parametrizaciónes',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['/admin/pages/parametrizacion']
                    }
                    // {
                    //     label: 'Auth',
                    //     icon: 'pi pi-fw pi-exclamation-circle',
                    //     routerLink: ['/pages/notfound']
                    // },
                    // {
                    //     label: 'Not Found',
                    //     icon: 'pi pi-fw pi-circle-off',
                    //     routerLink: ['/pages/empty']
                    // }
                ]
            },
            // {
            //     label: 'Hierarchy',
            //     items: [
            //         {
            //             label: 'Submenu 1',
            //             icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
            //                 }
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2',
            //             icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2',
            //                     icon: 'pi pi-fw pi-bookmark',
            //                     items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
            //                 }
            //             ]
            //         }
            //     ]
            // },
            {
                label: 'Conocimiento',
                items: [
                    {
                      label: 'Base de Conocimiento',
                      icon: 'pi pi-fw pi-globe',
                      routerLink: ['/admin/pages/base_conocimiento'] },
                    // {
                    //     label: 'Contactos',
                    //     icon: 'pi pi-fw pi-github',
                    //     url: 'https://github.com/Gabrieledevx',
                    //     target: '_blank'
                    // }
                    {
                        label: 'Pagina de Inicio DEV',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/landing']
                    },
                ]
            }
        ];
    }
}
