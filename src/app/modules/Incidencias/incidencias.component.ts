import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaIncidenciasComponent } from './lista-incidencias/lista-incidencias.component';
import { NuevaIncidenciaComponent } from './nueva-incidencia/nueva-incidencia.component';
import { AdministracionIncidenciasComponent } from './administracion-incidencias/administracion-incidencias.component';
import { ReusableMenubarComponent } from '../../shared/components/MenuBar.Reusable.component';


@Component({
    selector: 'app-incidencias-module',
    standalone: true,
    imports: [CommonModule, ReusableMenubarComponent],
    template: `
        <div class="mb-6">
            <component-menubar [tabs]="tabs"></component-menubar>
        </div>
    `,
    providers: []
})
export class IncidentesModuleComponent {
    // Constructor

    tabs = [
        { label: 'Incidencias', icon: 'pi pi-pencil', component: ListaIncidenciasComponent },
        { label: 'Nueva incidencia', icon: 'pi pi-shield', component: NuevaIncidenciaComponent },
        { label: 'Administracion de incidencias', icon: 'pi pi-shield', component: AdministracionIncidenciasComponent }
    ];
}
