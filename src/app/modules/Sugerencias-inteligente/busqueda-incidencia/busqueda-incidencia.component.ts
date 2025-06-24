import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-busqueda-incidencia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    NgIf,
    NgFor,
    Dialog
  ],
  templateUrl: './busqueda-incidencia.component.html',
  styleUrl: './busqueda-incidencia.component.css'
})
export class BusquedaIncidenciaComponent {
verDocumentacion(arg0: { codigo: string; similitud: number; descripcion: string; descripcion_caso: string; solucion: string; responsable: string; }) {
throw new Error('Method not implemented.');
}
  codigoIncidencia: string = 'INC-001';
  mostrarDialogoSugerencia: boolean = false;
  incidencia = {
    id: 'INC-1050',
    titulo: 'Error al guardar usuario sin correo',
    descripcion: 'Se produce un fallo al intentar guardar un usuario sin haber completado el campo obligatorio de correo electrónico.'
  };


  sugerenciaAsociada = {
    descripcion: 'Error similar al guardar datos con campos vacíos.',
    similitud: 9,
    solucion: 'Agregar validación de campos requeridos en frontend y backend.'
  };

  sugerencias = [
    {
      descripcion: 'Error similar al guardar datos con campos vacíos.',
      similitud: 9,
      solucion: 'Agregar validación de campos requeridos en frontend y backend.'
    },
    {
      descripcion: 'Validación incompleta en formulario de creación de usuarios.',
      similitud: 9,
      solucion: 'Incluir middleware de validación antes de guardar en la base de datos.'
    }
  ];

  cargarIncidencia() {
    // Aquí iría lógica para cargar la incidencia usando un servicio
    console.log('Cargar incidencia:', this.codigoIncidencia);
  }

  buscarSugerencias() {
    // Aquí iría lógica para consultar sugerencias similares
    console.log('Buscando sugerencias para:', this.codigoIncidencia);
  }

  verAcciones(sugerencia: any) {
    // Mostrar más información o modal de acciones
    console.log('Acciones para:', sugerencia);
    this.mostrarDialogoSugerencia = true;
  }



  sugerencia = {
  codigo: 'INC-0001',
  similitud: 90,
  descripcion: 'Error similar al guardar datos con campos vacíos.',
  descripcion_caso: '',
  solucion: '',
  responsable: 'STALYN DAVID'
};
}
