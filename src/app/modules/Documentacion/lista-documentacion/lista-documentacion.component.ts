import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-lista-documentacion',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule, SelectModule
  ],
  templateUrl: './lista-documentacion.component.html',
  styleUrl: './lista-documentacion.component.css'
})
export class ListaDocumentacionComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  formulario!: FormGroup;

  opcionesPrioridad = [
    { label: 'ID', value: 'id' },
    { label: 'Incidencia', value: 'incidencia' },
  ];

  documentos = [
    {
      id: 'DOC-1',
      incidencia: 'Solución compatibilidad de plataforma',
      version: 'v1.2.4',
      autor: 'Stalyn Asitimbay',
      fecha: '01/01/2025'
    },
    {
      id: 'DOC-2',
      incidencia: 'Nuevo método de escaneo de barras',
      version: 'v1.2.5',
      autor: 'Stalyn Asitimbay',
      fecha: '01/01/2025'
    },
    {
      id: 'DOC-3',
      incidencia: 'Proyecto gestión de usuario para veterinaria',
      version: 'v1.0.2',
      autor: 'Stalyn Asitimbay',
      fecha: '01/01/2025'
    },
    {
      id: 'DOC-4',
      incidencia: 'Proyecto gestión de usuario para veterinaria',
      version: 'v1.5',
      autor: 'Stalyn Asitimbay',
      fecha: '01/01/2025'
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      filtro: [''],
      filtroCampo: ['id']  // por defecto filtra por ID
    });
  }

  onFilter() {
    const valor = this.formulario.get('filtro')?.value || '';
    const campo = this.formulario.get('filtroCampo')?.value || 'id';
    this.table.filter(valor, campo, 'contains');
  }

  verDocumento(documento: any) {
    console.log('Ver documento:', documento);
  }

  editarDocumento(documento: any) {
    console.log('Editar documento:', documento);
  }

  descargarPDF(documento: any) {
    console.log('Descargar PDF de:', documento);
  }
}
