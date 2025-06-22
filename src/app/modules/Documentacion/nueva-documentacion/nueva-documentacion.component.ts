import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-nueva-documentacion',
  standalone: true,
  imports: [DialogModule, CommonModule, ReactiveFormsModule, InputTextModule, TextareaModule, ButtonModule, SelectModule, FileUploadModule, ToastModule ],
  templateUrl: './nueva-documentacion.component.html',
  styleUrl: './nueva-documentacion.component.css',
  providers: [MessageService]
})
export class NuevaDocumentacionComponent implements OnInit {
  formulario!: FormGroup;
  uploadedFiles: any[] = [];
  mostrarDialogo = false;

  opcionesImpacto = [
    { label: 'Bajo', value: 'bajo' },
    { label: 'Medio', value: 'medio' },
    { label: 'Alto', value: 'alto' },
    { label: 'Crítico', value: 'critico' }
  ];

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      causaRaiz: [''],
      impacto: [''],
      version: [''],
      recomendaciones: [''],
      solucion: ['']
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
