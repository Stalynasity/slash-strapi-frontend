import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Incidencia } from '../../../core/models/incidentes.model';
import { IncidenciaService } from '../../../core/services/Incidencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-incidencias',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    TagModule,
  ],
  templateUrl: './lista-incidencias.component.html',
  styleUrls: ['./lista-incidencias.component.css'],
})
export class ListaIncidenciasComponent implements OnInit {
  @ViewChild('dt', { static: false }) table?: Table;
  formulario!: FormGroup;
  incidencias: Incidencia[] = [];

  constructor(
    private fb: FormBuilder,
    private incidenciaService: IncidenciaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      filtro: [''],
    });

    this.incidenciaService.getIncidencias().subscribe((res) => {
      // Simula nombre de autor por ID (puedes reemplazar con lógica real después)
      this.incidencias = res.map((i) => ({
        ...i,
      }));
    });
  }

  onFilter(): void {
    const valor = this.formulario.get('filtro')?.value || '';
    this.table?.filterGlobal(valor, 'contains');
  }

  getNombreAutor(id: string): string {
    const usuarios: { [key: string]: string } = {
      USR001: 'Carlos Medina',
      USR002: 'Laura Quintero',
      USR003: 'Stalyn Asitimabay',
    };
    return usuarios[id] || 'Desconocido';
  }

  getSeveridadEstado(
    estado: string
  ):
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'secondary'
    | 'contrast'
    | undefined {
    switch (estado.toLowerCase()) {
      case 'pendiente':
        return 'warn';
      case 'asignada':
        return 'info';
      case 'cerrada':
        return 'success';
      case 'bloqueada':
        return 'danger';
      default:
        return 'secondary'; // o undefined
    }
  }

  verIncidencia(incidencia: Incidencia) {
  this.router.navigate(['/models/incidencias/detalle-incidencias', incidencia.id]);
}
}
