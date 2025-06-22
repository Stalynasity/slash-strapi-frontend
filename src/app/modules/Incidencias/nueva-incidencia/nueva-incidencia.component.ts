import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-nueva-incidencia',
  standalone: true,
  imports: [
    InputTextModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule,
    CommonModule,
    TextareaModule,
    FileUploadModule,
    ToastModule,
    SelectModule
  ],
  templateUrl: './nueva-incidencia.component.html',
  styleUrl: './nueva-incidencia.component.css',
  providers: [MessageService]
})
export class NuevaIncidenciaComponent {
  formulario!: FormGroup;

  uploadedFiles: any[] = [];

  opcionesPrioridad = [
    { label: 'Alta', value: 'alta' },
    { label: 'Media', value: 'media' },
    { label: 'Baja', value: 'baja' },
  ];

  opcionesModulo = [
    { label: 'Módulo A', value: 'modulo_a' },
    { label: 'Módulo B', value: 'modulo_b' },
    { label: 'Módulo C', value: 'modulo_c' },
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      titulo: [''],
      prioridad: [''],
      tipoError: [''],
      modulo: [''],
      descripcion: [''],
    });
  }

  agregarIncidencia() {
    console.log('Formulario enviado:', this.formulario.value);
    // Aquí puedes enviar al backend o mostrar modal
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
}
