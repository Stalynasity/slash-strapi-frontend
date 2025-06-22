import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-incidencias',
  standalone: true,
  imports: [
    InputTextModule,
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './lista-incidencias.component.html',
  styleUrl: './lista-incidencias.component.css',
})
export class ListaIncidenciasComponent {
  @ViewChild('dt') table!: Table;

  formulario!: FormGroup;

  incidencias = [
    { id: '12542', titulo: 'Solucion compatibilidad de plataforma', tipo: 'Alto', estado: 'asignado', creado: 'Stalyn asitimabay' },
    { id: '23542', titulo: 'Nuevo metodo de escaneo de barras', tipo: 'Crítico', estado: 'cerrado', creado: 'Stalyn asitimabay' },
    { id: '98742', titulo: 'Proyecto gestion de usuario para veterinaria', tipo: 'Medio', estado: 'Pendiente', creado: 'Stalyn asitimabay' },
    { id: '00001', titulo: 'Proyecto gestion de usuario para veterinaria', tipo: 'Bajo', estado: 'Pendiente', creado: 'Stalyn asitimabay' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      filtro: ['']
    });
  }

  onFilter() {
    const valor = this.formulario.get('filtro')?.value || '';
    this.table.filterGlobal(valor, 'contains');
  }

  verIncidencia(incidencia: any) {
    console.log('Ver incidencia:', incidencia);
  }
}
