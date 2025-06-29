import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Incidencia } from '../../../core/models/incidentes.model';
import { IncidenciaService } from '../../../core/services/Incidencia.service';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';

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
  providers: [

  ],
})
export class ListaIncidenciasComponent implements OnInit {
  @ViewChild('dt', { static: false }) table?: Table;
  formulario!: FormGroup;
  incidencias: Incidencia[] = [];
  totalRecords: number = 0;  // Para la paginación
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(
    private fb: FormBuilder,
    private incidenciaService: IncidenciaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      filtro: [''],
    });

    this.cargarIncidencias();
  }

  cargarIncidencias(page: number = this.currentPage): void {
    this.incidenciaService.getIncidencias(page, this.pageSize).subscribe((res) => {
      this.incidencias = res.data;  // Asumimos que `data` es la lista de incidencias
      this.totalRecords = res.meta.pagination.total;  // Total de registros para paginación
      console.log('Incidencias cargadas:', this.incidencias);
    });
  }

  onFilter(): void {
    const valor = this.formulario.get('filtro')?.value || '';
    this.table?.filterGlobal(valor, 'contains');
  }

  // Método de paginación de PrimeNG
  onPageChange(event: any): void {
    this.currentPage = event.page + 1;  // La paginación de PrimeNG empieza en 0, pero Strapi empieza en 1
    this.pageSize = event.rows;
    this.cargarIncidencias(this.currentPage);
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

