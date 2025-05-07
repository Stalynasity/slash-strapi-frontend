import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionHeader } from './components/configuracion-header.component';
import { SeguridadComponent } from './pages/seguridad/seguridad.component';
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
import { MenubarComponent } from './components/menubar.component';

@Component({
    selector: 'app-gestion',
    standalone: true,
    imports: [CommonModule, MenubarComponent, ConfiguracionHeader],
    template: `
        <div class="mb-6">
            <app-configuracion-header></app-configuracion-header>
            <component-menubar></component-menubar>
        </div>
    `,
    providers: []
})
export class ModificacionComponent {
}
