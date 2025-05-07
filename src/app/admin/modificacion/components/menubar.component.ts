import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { SeguridadComponent } from '../pages/seguridad/seguridad.component';
import { IaComponent } from '../pages/ia/ia.component';
import { RespaldoComponent } from '../pages/respaldo/respaldo.component';
import { RedLocalComponent } from '../pages/red-local/red-local.component';
import { ParametrosGeneralesComponent } from '../pages/parametros-generales/parametros-generales.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { AmbienteComponent } from '../pages/ambiente/ambiente.component';
import { UsuariosComponent } from '../pages/usuarios/usuarios.component';
import { ReseteoClavesComponent } from '../pages/reseteo-claves/reseteo-claves.component';
import { BaseConocimientoComponent } from '../pages/base-conocimiento/base-conocimiento.component';
import { QrAccesoComponent } from '../pages/qr-acceso/qr-acceso.component';

@Component({
    selector: 'component-menubar',
    template: `
        <p-menubar [model]="items" />
        <div class="mt-4">
            <ng-container *ngComponentOutlet="activeComponent"></ng-container>
        </div>
    `,
    imports: [CommonModule, MenubarModule],
    standalone: true
})
export class MenubarComponent {
    items: MenuItem[] | undefined;
    activeComponent: Type<any> | null = null;

    ngOnInit() {
        this.items = [
            { label: 'Seguridad', icon: 'pi pi-shield', command: () => (this.activeComponent = SeguridadComponent) },
            { label: 'Base de Conocimiento', icon: 'pi pi-book', command: () => (this.activeComponent = BaseConocimientoComponent) },
            { label: 'IA', icon: 'pi pi-lightbulb', command: () => (this.activeComponent = IaComponent) },
            { label: 'QR y Acceso', icon: 'pi pi-qrcode', command: () => (this.activeComponent = QrAccesoComponent) },
            { label: 'Respaldo', icon: 'pi pi-cloud-upload', command: () => (this.activeComponent = RespaldoComponent) },
            { label: 'Red Local', icon: 'pi pi-sitemap', command: () => (this.activeComponent = RedLocalComponent) },
            { label: 'Parámetros Generales', icon: 'pi pi-cog', command: () => (this.activeComponent = ParametrosGeneralesComponent) },
            { label: 'Dashboard', icon: 'pi pi-chart-line', command: () => (this.activeComponent = DashboardComponent) },
            { label: 'Ambiente', icon: 'pi pi-sun', command: () => (this.activeComponent = AmbienteComponent) },
            { label: 'Usuarios', icon: 'pi pi-users', command: () => (this.activeComponent = UsuariosComponent) },
            { label: 'Reseteo Claves', icon: 'pi pi-key', command: () => (this.activeComponent = ReseteoClavesComponent) }
        ];
    }
}
