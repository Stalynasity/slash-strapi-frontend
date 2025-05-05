import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionHeader } from './components/configuracion-header.component';
import { SeguridadComponent } from './pages/seguridad/seguridad.component';
import { ReusableMenubarComponent } from '../../shared/components/ReusableMenuBar.component';
import { BaseConocimientoComponent } from './pages/base-conocimiento/base-conocimiento.component';
import { IaComponent } from './pages/ia/ia.component';
import { QrAccesoComponent } from './pages/qr-acceso/qr-acceso.component';
import { RespaldoComponent } from './pages/respaldo/respaldo.component';
import { RedLocalComponent } from './pages/red-local/red-local.component';
import { ParametrosGeneralesComponent } from './pages/parametros-generales/parametros-generales.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AmbienteComponent } from './pages/ambiente/ambiente.component';
import { ReseteoClavesComponent } from './pages/reseteo-claves/reseteo-claves.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

@Component({
    selector: 'app-gestion',
    standalone: true,
    imports: [CommonModule, ReusableMenubarComponent, ConfiguracionHeader],
    template: `
        <div class="mb-6">
            <app-configuracion-header></app-configuracion-header>
            <component-menubar [tabs]="tabs"></component-menubar>
        </div>
    `,
    providers: []
})
export class ModificacionComponent {
    tabs = [
        { label: 'Seguridad', icon: 'pi pi-shield', component: SeguridadComponent },
        { label: 'Base de Conocimiento', icon: 'pi pi-book', component: BaseConocimientoComponent },
        { label: 'IA', icon: 'pi pi-lightbulb', component: IaComponent },
        { label: 'QR y Acceso', icon: 'pi pi-qrcode', component: QrAccesoComponent },
        { label: 'Respaldo', icon: 'pi pi-cloud-upload', component: RespaldoComponent },
        { label: 'Red Local', icon: 'pi pi-sitemap', component: RedLocalComponent },
        { label: 'Parámetros Generales', icon: 'pi pi-cog', component: ParametrosGeneralesComponent },
        { label: 'Dashboard', icon: 'pi pi-chart-line', component: DashboardComponent },
        { label: 'Ambiente', icon: 'pi pi-sun', component: AmbienteComponent },
        { label: 'Usuarios', icon: 'pi pi-users', component: UsuariosComponent },
        { label: 'Reseteo Claves', icon: 'pi pi-key', component: ReseteoClavesComponent }
    ];
}
