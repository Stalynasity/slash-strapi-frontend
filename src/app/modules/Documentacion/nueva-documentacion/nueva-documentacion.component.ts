import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Editor } from 'primeng/editor';

@Component({
  selector: 'app-nueva-documentacion',
  standalone: true,
  imports: [
    DropdownModule,
    DialogModule,
    FormsModule,
    TagModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    SelectModule,
    FileUploadModule,
    ToastModule,
    AutoCompleteModule,
    Editor
  ],
  templateUrl: './nueva-documentacion.component.html',
  styleUrl: './nueva-documentacion.component.css',
  providers: [MessageService],
})
export class NuevaDocumentacionComponent implements OnInit {
  formulario!: FormGroup;
  uploadedFiles: any[] = [];
  mostrarDialogo = false;
  incidenciasFiltradas: any[] = [];
  incidenciaSeleccionada: any = null;
  incidenciasAsociadas: any[] = [];

  buscarIncidencias(event: any) {
    const query = event.query.toLowerCase();
    this.incidenciasFiltradas = this.incidenciasDisponibles.filter((inc) =>
      inc.codigo.toLowerCase().includes(query)
    );
  }

    // INCIDENCIAS OPCIONALES
  // agregarIncidenciaSeleccionada() {
  //   if (
  //     this.incidenciaSeleccionada &&
  //     !this.incidenciasAsociadas.some(
  //       (i) => i.codigo === this.incidenciaSeleccionada.codigo
  //     )
  //   ) {
  //     this.incidenciasAsociadas.push(this.incidenciaSeleccionada);
  //     this.incidenciaSeleccionada = null;
  //   }
  // }

  agregarIncidenciaSeleccionada() {
  if (this.incidenciaSeleccionada && this.incidenciasAsociadas.length === 0) {
    this.incidenciasAsociadas.push(this.incidenciaSeleccionada);
    this.incidenciaSeleccionada = null;
  }
}

  eliminarIncidenciaAsociada(index: number) {
    this.incidenciasAsociadas.splice(index, 1);
  }

  opcionesImpacto = [
    { label: 'Bajo', value: 'bajo' },
    { label: 'Medio', value: 'medio' },
    { label: 'Alto', value: 'alto' },
    { label: 'Crítico', value: 'critico' },
  ];

  incidenciasDisponibles = [
    {
      codigo: 'INC-001',
      titulo: 'Error al guardar cliente',
      tipo: 'Funcional',
      estado: 'En proceso',
    },
    {
      codigo: 'INC-002',
      titulo: 'Desbordamiento en pantalla de pagos',
      tipo: 'Crítico',
      estado: 'Pendiente',
    },
    {
      codigo: 'INC-003',
      titulo: 'Carga lenta en módulo de informes',
      tipo: 'Rendimiento',
      estado: 'Finalizado',
    },
  ];

  getSeveridadEstado(
    estado: string
  ):
    | 'success'
    | 'secondary'
    | 'info'
    | 'warn'
    | 'danger'
    | 'contrast'
    | undefined {
    switch (estado) {
      case 'Resuelto':
        return 'success';
      case 'En progreso':
        return 'info';
      case 'Pendiente':
        return 'warn';
      case 'Cancelado':
        return 'danger';
      default:
        return undefined;
    }
  }

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      causaRaiz: [''],
      impacto: [''],
      version: [''],
      recomendaciones: [''],
      solucion: [''],
    });
  }

  onUpload(event: any) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }

  mostrarResumen() {
    if (this.formulario.valid) {
      this.mostrarDialogo = true;
    }
  }

  agregarSolucion() {
    console.log('Datos enviados:', this.formulario.value);
    this.mostrarDialogo = false;
    // Aquí puedes hacer tu lógica de guardado o backend
  }
}
