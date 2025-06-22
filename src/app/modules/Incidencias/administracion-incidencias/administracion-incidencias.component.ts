import { Component, input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Calendar } from 'primeng/calendar';
@Component({
  selector: 'app-administracion-incidencias',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    DropdownModule,
    CalendarModule,
    AutoCompleteModule
  ],
  templateUrl: './administracion-incidencias.component.html',
  styleUrl: './administracion-incidencias.component.css'
})
export class AdministracionIncidenciasComponent {
  @ViewChild('dt') table!: Table;

  filtroForm!: FormGroup;
  mostrarAsignarUsuario = false;
  mostrarEliminar = false;
  mostrarContrasenia = false;
  mostrarExito = false;

  usuarioAsignado = '';
  contrasenia = '';

  incidenciaSeleccionada: any = null;

  incidencias = [
    { id: '12542', titulo: 'Solucion compatibilidad de plataforma', tipo: 'Alto', estado: 'en proceso', asignado: 'Stalyn asitimabay' },
    { id: '23542', titulo: 'Nuevo metodo de escaneo de barras', tipo: 'Crítico', estado: 'finalizado', asignado: 'Stalyn asitimabay' },
    { id: '98742', titulo: 'Proyecto gestion de usuario para veterinaria', tipo: 'Medio', estado: 'en proceso', asignado: 'Pendiente' },
    { id: '00001', titulo: 'Proyecto gestion de usuario para veterinaria', tipo: 'Bajo', estado: 'cancelado', asignado: 'Stalyn asitimabay' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filtroForm = this.fb.group({
      id: [''],
      titulo: [''],
      prioridad: [''],
      estado: [''],
      usuario: [''],
      tipo: [''],
      fechaInicio: [''],
      fechaFin: [''],
    });
  }

  filtrar() {
    console.log('Filtrando con:', this.filtroForm.value);
  }

  abrirAsignarUsuario(incidencia: any) {
    this.incidenciaSeleccionada = incidencia;
    this.usuarioAsignado = incidencia.asignado || '';
    this.mostrarAsignarUsuario = true;
  }

  cancelarAsignacion() {
    this.usuarioAsignado = '';
    this.mostrarAsignarUsuario = false;
  }

  aceptarAsignacion() {
    if (this.incidenciaSeleccionada) {
      this.incidenciaSeleccionada.asignado = this.usuarioAsignado;
    }
    this.mostrarAsignarUsuario = false;
  }

  confirmarEliminacion(incidencia: any) {
    this.incidenciaSeleccionada = incidencia;
    this.mostrarEliminar = true;
  }

  validarContrasenia() {
    this.mostrarEliminar = false;
    this.mostrarContrasenia = true;
  }

  eliminarIncidencia() {
    this.incidencias = this.incidencias.filter(
      (i) => i.id !== this.incidenciaSeleccionada.id
    );
    this.mostrarContrasenia = false;
    this.mostrarExito = true;
  }
}

