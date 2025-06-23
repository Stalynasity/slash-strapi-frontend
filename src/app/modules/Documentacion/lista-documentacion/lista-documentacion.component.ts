import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { TextareaModule } from 'primeng/textarea';
@Component({
  selector: 'app-lista-documentacion',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    SelectModule, TextareaModule,
    DialogModule, FileUploadModule, ToastModule, DropdownModule
  ],
  templateUrl: './lista-documentacion.component.html',
  styleUrl: './lista-documentacion.component.css',
  providers: [MessageService]
})
export class ListaDocumentacionComponent implements OnInit {
  @ViewChild('dt') table!: Table;
  formulario!: FormGroup;
  formularioEdicion!: FormGroup;
  mostrarDialogoEdicion: boolean = false;
  uploadedFiles: File[] = [];

  opcionesPrioridad = [
    { label: 'ID', value: 'id' },
    { label: 'Codigo Incidencia', value: 'incidencia_id' },
  ];

  documentos = [
  {
    id: 'DOC-1',
    incidencia_id: 'INC-001',
    causa_raiz: 'Fallo en la compatibilidad entre plataformas del sistema operativo.',
    impacto: 'Alto',
    solucion_aplicada: 'Actualización del framework y pruebas de integración.',
    recomendaciones: 'Mantener la compatibilidad hacia versiones anteriores.',
    version_afectada: 'v1.2.4',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['compatibilidad.pdf']
  },
  {
    id: 'DOC-2',
    incidencia_id: 'INC-002',
    causa_raiz: 'Error en la lectura de códigos de barras antiguos.',
    impacto: 'Crítico',
    solucion_aplicada: 'Se rediseñó el algoritmo de escaneo.',
    recomendaciones: 'Probar con diferentes tipos de códigos en QA.',
    version_afectada: 'v1.2.5',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['escaneo-barras.pdf']
  },
  {
    id: 'DOC-3',
    incidencia_id: 'INC-003',
    causa_raiz: 'Mal diseño en la gestión de usuarios.',
    impacto: 'Medio',
    solucion_aplicada: 'Reestructuración del módulo de autenticación.',
    recomendaciones: 'Realizar pruebas con múltiples roles.',
    version_afectada: 'v1.0.2',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['gestion-usuarios.pdf']
  },
  {
    id: 'DOC-4',
    incidencia_id: 'INC-004',
    causa_raiz: 'Desbordamiento en el manejo de logs.',
    impacto: 'Alto',
    solucion_aplicada: 'Rotación de logs y almacenamiento en la nube.',
    recomendaciones: 'Monitorear tamaño de logs semanalmente.',
    version_afectada: 'v1.5',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['logs-fix.pdf']
  },
  {
    id: 'DOC-5',
    incidencia_id: 'INC-005',
    causa_raiz: 'API sin autenticación correcta.',
    impacto: 'Crítico',
    solucion_aplicada: 'Implementación de OAuth2.',
    recomendaciones: 'Auditar accesos externos mensualmente.',
    version_afectada: 'v1.3.1',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['oauth-doc.pdf']
  },
  {
    id: 'DOC-6',
    incidencia_id: 'INC-006',
    causa_raiz: 'Carga lenta por consultas no optimizadas.',
    impacto: 'Medio',
    solucion_aplicada: 'Creación de índices y paginación.',
    recomendaciones: 'Revisar planes de ejecución en cada versión.',
    version_afectada: 'v1.4.0',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['mejora-bd.pdf']
  },
  {
    id: 'DOC-7',
    incidencia_id: 'INC-007',
    causa_raiz: 'Errores de validación en formularios.',
    impacto: 'Bajo',
    solucion_aplicada: 'Validaciones en frontend y backend.',
    recomendaciones: 'Agregar pruebas unitarias de formularios.',
    version_afectada: 'v1.4.2',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['validaciones-form.pdf']
  },
  {
    id: 'DOC-8',
    incidencia_id: 'INC-008',
    causa_raiz: 'Mala experiencia de usuario en móvil.',
    impacto: 'Medio',
    solucion_aplicada: 'Diseño responsive adaptado con Tailwind.',
    recomendaciones: 'Realizar pruebas en dispositivos móviles.',
    version_afectada: 'v1.5.2',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['ui-movil.pdf']
  },
  {
    id: 'DOC-9',
    incidencia_id: 'INC-009',
    causa_raiz: 'Errores en la generación de reportes PDF.',
    impacto: 'Alto',
    solucion_aplicada: 'Corrección en el motor de renderizado.',
    recomendaciones: 'Agregar pruebas visuales a CI.',
    version_afectada: 'v1.5.3',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['reportes-fix.pdf']
  },
  {
    id: 'DOC-10',
    incidencia_id: 'INC-010',
    causa_raiz: 'Problemas de sincronización entre servicios.',
    impacto: 'Crítico',
    solucion_aplicada: 'Uso de colas asincrónicas.',
    recomendaciones: 'Monitorear tiempos de respuesta.',
    version_afectada: 'v1.6.0',
    autor_documentacion: 'Stalyn Asitimbay',
    fecha_documentacion: '2025-01-01T00:00:00Z',
    adjuntos: ['sync-colas.pdf']
  }
];

  impactos = [
  { label: 'Alto', value: 'Alto' },
  { label: 'Medio', value: 'Medio' },
  { label: 'Bajo', value: 'Bajo' },
  { label: 'Crítico', value: 'Crítico' }
];


  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      filtro: [''],
      filtroCampo: ['id'], // por defecto filtra por ID
    });
    this.formularioEdicion = this.fb.group({
      id: [''],
      incidencia_id: [''],
      causa_raiz: [''],
      impacto: [''],
      solucion_aplicada: [''],
      recomendaciones: [''],
      version_afectada: [''],
      autor_documentacion: [''],
      fecha_documentacion: [''],
      adjuntos: [[]]
    });

  }

  onFilter() {
    const valor = this.formulario.get('filtro')?.value || '';
    const campo = this.formulario.get('filtroCampo')?.value || 'id';
    this.table.filter(valor, campo, 'contains');
  }

  onAdjuntoUpload(event: any) {
  const archivos = event.files.map((f: File) => f.name);
  const actuales = this.formularioEdicion.value.adjuntos || [];
  this.formularioEdicion.patchValue({ adjuntos: [...actuales, ...archivos] });
}

  verDocumento(documento: any) {
    this.router.navigate(['/models/documentacion/ver'], {
      state: { doc: documento },
    });
  }

  editarDocumento(documento: any) {
    this.formularioEdicion.patchValue({ ...documento });
    this.mostrarDialogoEdicion = true;
  }

  descargarPDF(documento: any) {
    console.log('Descargar PDF de:', documento);
  }

  guardarEdicion() {
    const valoresEditados = this.formularioEdicion.value;
    const index = this.documentos.findIndex(
      (doc) => doc.id === valoresEditados.id
    );
    if (index !== -1) {
      this.documentos[index] = valoresEditados;
    }
    this.mostrarDialogoEdicion = false;
  }
}
