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
import { AutoComplete } from 'primeng/autocomplete';
import { SelectModule } from 'primeng/select';
import { StyleClassModule } from 'primeng/styleclass';
import { BadgeModule } from 'primeng/badge';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DatePickerModule } from 'primeng/datepicker';
import { FluidModule } from 'primeng/fluid';

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
    ToastModule,
    CalendarModule,
    AutoComplete,
    BadgeModule,
    StyleClassModule,
    DatePickerModule,
    FluidModule,
    SelectModule
  ],
  templateUrl: './administracion-incidencias.component.html',
  styleUrl: './administracion-incidencias.component.css',
  providers: [MessageService],
})
export class AdministracionIncidenciasComponent {
  @ViewChild('dt') table!: Table;

  filtroForm!: FormGroup;
  mostrarAsignarUsuario = false;
  mostrarEliminar = false;
  mostrarContrasenia = false;
  mostrarExito = false;
  usuariosFiltrados: any[] = [];
  usuarioAsignado: any = null;
  contrasenia = '';

  incidenciaSeleccionada: any = null;

  incidencias = [
    {
      id: '12542',
      titulo: 'Solucion compatibilidad de plataforma',
      tipo: 'Alto',
      estado: 'en proceso',
      asignado: 'Stalyn asitimbay',
    },
    {
      id: '23542',
      titulo: 'Nuevo metodo de escaneo de barras',
      tipo: 'Crítico',
      estado: 'finalizado',
      asignado: 'Stalyn asitimbay',
    },
    {
      id: '98742',
      titulo: 'Proyecto gestion de usuario para veterinaria',
      tipo: 'Medio',
      estado: 'en proceso',
      asignado: 'Pendiente',
    },
    {
      id: '00001',
      titulo: 'Proyecto gestion de usuario para veterinaria',
      tipo: 'Bajo',
      estado: 'cancelado',
      asignado: 'Stalyn asitimbay',
    },
  ];

  prioridades = [
    { label: 'Baja', value: 'Bajo' },
    { label: 'Media', value: 'Medio' },
    { label: 'Alta', value: 'Alto' },
    { label: 'Crítica', value: 'Crítico' },
  ];

  Modulos_afectado = [
    { label: 'Usuarios', value: 'Usuarios' },
    { label: 'Productos', value: 'Productos' },
    { label: 'Transacciones', value: 'Transacciones' },
    { label: 'Reportes', value: 'Reportes' },
    { label: 'Dashboard', value: 'Dashboard' },
    { label: 'Inventario', value: 'Inventario' },
    { label: 'Autenticación', value: 'Autenticación' },
    { label: 'Notificaciones', value: 'Notificaciones' }
  ];

  tipos = [
    { label: 'Funcionalidad', value: 'Funcionalidad' },
    { label: 'Error', value: 'Error' },
    { label: 'Mejora', value: 'Mejora' },
  ];

  usuarios = [
    { nombre: 'Stalyn Asitimbay' },
    { nombre: 'Luis Castillo' },
    { nombre: 'Juan Pérez' },
    { nombre: 'Ana Torres' },
    { nombre: 'Martha Loor' },
  ];

  constructor(private fb: FormBuilder, private messageService: MessageService) {}

  ngOnInit() {
    this.filtroForm = this.fb.group({
      id: [''],
      titulo: [''],
      prioridad: [''],
      estado: [''],
      usuario: [''],
      tipo: [''],
      fechaInicio: [{ value: '' }],
      fechaFin: [{ value: '' }],
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
  if (!this.usuarioAsignado) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Campo requerido',
      detail: 'Usuario no valido seleccione uno correcto',
    });
    return;
  }

  if (this.incidenciaSeleccionada) {
    this.incidenciaSeleccionada.asignado = this.usuarioAsignado.nombre;
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

  getEstadoColor(
    estado: string
  ):
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast' {
    switch (estado?.toLowerCase()) {
      case 'en proceso':
        return 'info';
      case 'finalizado':
        return 'success';
      case 'cancelado':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  filtrarUsuarios(event: any) {
  const query = event.query.toLowerCase();
  this.usuariosFiltrados = this.usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(query)
  );
}
}
