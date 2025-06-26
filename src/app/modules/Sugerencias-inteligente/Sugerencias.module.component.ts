import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaIncidenciaComponent } from './busqueda-incidencia/busqueda-incidencia.component';
import { SugerenciasInteligentesComponent } from './sugerencias-inteligentes/sugerencias-inteligentes.component';
import { BusquedaIncidenciaResposne } from '../../core/models/response/SugerenciaIncidenciaResponse';

@Component({
  selector: 'app-sugerencia',
  standalone: true,
  imports: [
    CommonModule,
    BusquedaIncidenciaComponent,
    SugerenciasInteligentesComponent,
  ],
  template: `
    <app-busqueda-incidencia (onBuscarSugerencias)="onBuscar($event)"></app-busqueda-incidencia>

    <br />
    <app-sugerencias-inteligentes
      *ngIf="mostrarSugerencias && incidenciaSeleccionada"
      [incidencia]="incidenciaSeleccionada">
    </app-sugerencias-inteligentes>
  `,
  providers: [],
})
export class SugerenciaModuleComponent {
  mostrarSugerencias = false;
  incidenciaSeleccionada: BusquedaIncidenciaResposne | null = null;

  onBuscar(incidencia: BusquedaIncidenciaResposne) {
  this.incidenciaSeleccionada = incidencia;
  this.mostrarSugerencias = true;
}
}
