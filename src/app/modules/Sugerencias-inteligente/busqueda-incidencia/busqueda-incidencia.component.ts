import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { InputGroupModule } from 'primeng/inputgroup';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SugerenciasInteligentesService } from '../../../core/services/SugerenciasInteligentes.service';
import { BusquedaIncidenciaResposne } from '../../../core/models/response/SugerenciaIncidenciaResponse';

@Component({
  selector: 'app-busqueda-incidencia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    PanelModule,
    InputGroupModule,
    MessageModule,
    MessagesModule, ProgressSpinnerModule
  ],
  templateUrl: './busqueda-incidencia.component.html',
  styleUrl: './busqueda-incidencia.component.css',
})
export class BusquedaIncidenciaComponent {
  constructor(private incidenciaService: SugerenciasInteligentesService) {}
  @Output() onBuscarSugerencias = new EventEmitter<BusquedaIncidenciaResposne>();

  codigoIncidencia: string = '';
  mostrarDialogoAsociados: boolean = false;
  mensajeNoEncontrado: boolean = false;
  incidencia: BusquedaIncidenciaResposne | null = null;
  cargando = false;

  incidenciasDB = [
    {
      id: 'INC-001',
      titulo: 'Error al guardar usuario sin correo',
      descripcion: 'Falla al guardar usuario cuando el campo de correo está vacío.'
    },
    {
      id: 'INC-002',
      titulo: 'Error en login',
      descripcion: 'No permite acceso si el usuario tiene caracteres especiales.'
    }
  ];

  sugerenciasAsociadas = [
    {
      descripcion: 'Error similar al guardar datos con campos vacíos.',
      similitud: 9,
      solucion: 'Agregar validación de campos requeridos en frontend y backend.',
      estado: 'Pendiente',
    }
  ];

  BuscarIncidencia() {
  const codigo = this.codigoIncidencia.trim();
  if (!codigo) return;

  this.cargando = true;
  this.incidenciaService.getIncidenciaPorCodigo(codigo).subscribe((resultado) => {
    this.cargando = false;

    if (resultado) {
      this.incidencia = resultado;
      this.mostrarDialogoAsociados = true;
      this.mensajeNoEncontrado = false;
    } else {
      this.incidencia = null;
      this.mostrarDialogoAsociados = false;
      this.mensajeNoEncontrado = true;
    }
  });
}

  buscarSugerencias() {
  if (this.incidencia) {
    this.onBuscarSugerencias.emit(this.incidencia);
  }
}

  verAsociado(sugerencia: any) {
    console.log('Ver sugerencia asociada:', sugerencia);
  }
}
