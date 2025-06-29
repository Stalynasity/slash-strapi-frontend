import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComentarioIncidencia, Incidencia } from '../../../core/models/incidentes.model';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { IncidenciaService } from '../../../core/services/Incidencia.service';
import { TabsModule } from 'primeng/tabs';
import { TimelineModule } from 'primeng/timeline';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import QRious from 'qrious';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment'; 
import { DialogModule } from 'primeng/dialog'; // Asegúrate de que este pipe esté importado si lo usas en tu template
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SafeUrlPipe } from '../../../core/pipes/safe-url.pipe';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ver-incidencias',
  standalone: true,
  imports: [
    NgxExtendedPdfViewerModule,
    CommonModule,
    TagModule,
    CardModule,
    TabsModule,
    ButtonModule,
    TimelineModule,
    TextareaModule,
    FormsModule,
    DialogModule
   
  ],
  templateUrl: './ver-incidencias.component.html',
  styleUrls: ['./ver-incidencias.component.css'],
})
export class VerIncidenciasComponent implements OnInit {
  pdfBase64: string | null = null;
  pdfSafeUrl: SafeResourceUrl | null = null;

  incidencia?: Incidencia;
  nuevoComentario: string = '';
  urlActual: string = window.location.href;
  archivosAdjuntos: any[] = [];
  assetsurl: string = environment.assetsUrl;

  @ViewChild('qrCanvas', { static: false }) qrCanvasRef!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private incidenciaService: IncidenciaService,
    private location: Location,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.incidenciaService.getIncidenciaPorId(id).subscribe((data) => {
        this.incidencia = data;
        setTimeout(() => this.generarQRCode(), 100); // Esperar a que canvas se renderice

        // Solo buscar archivos si hay adjuntoincidencia y un título válido
        if (data) {
          console.log('Datos de incidencia:', data);

        this.incidenciaService
          .getArchivosAdjuntosPorIncidencia(data)
          .subscribe((archivos) => {
            this.archivosAdjuntos = archivos;
          });
      }

      
      });
    }
  }



  generarQRCode(): void {
    if (this.qrCanvasRef) {
      new QRious({
        element: this.qrCanvasRef.nativeElement,
        value: this.urlActual,
        size: 180,
      });
    }
  }
compartirEnlace(): void {
  if (navigator.share) {
    navigator
      .share({
        title: 'Incidencia',
        text: 'Revisa esta incidencia que encontré:',
        url: this.urlActual,
      })
      .then(() => console.log('✅ Compartido correctamente'))
      .catch((error) => console.error('❌ Error al compartir:', error));
  } else {
    alert('La función de compartir no está disponible en este navegador.');
  }
}

  volver(): void {
    this.location.back();
  }

  copiarEnlace(): void {
    navigator.clipboard.writeText(this.urlActual);
  }

  abrirEnlace(): void {
    window.open(this.urlActual, '_blank');
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
    {
    switch (estado?.toLowerCase()) {
      case 'pendiente':
        return 'warn';
      case 'asignada':
        return 'info';
      case 'cerrada':
        return 'success';
      case 'bloqueada':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  agregarComentario(): void {
    if (!this.nuevoComentario.trim() || !this.incidencia?.id) return;

    const nuevo: ComentarioIncidencia = {
      id: crypto.randomUUID(),
      incidencia_id: this.incidencia.id,
      usuario_id: 'USR001',
      usuario_nombre: 'Stalyn Asitimabay',
      contenido: this.nuevoComentario.trim(),
      fecha: new Date().toISOString(),
    };

    // Pendiente: integración con el backend o array local
    this.nuevoComentario = '';
  }

  archivoSeleccionado: any = null;
modalVisible = false;

abrirModal(archivo: any) {
  this.archivoSeleccionado = archivo;
  this.modalVisible = true;

  if (archivo.mime === 'application/pdf') {

     this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        archivo.urlCompleta
      );

    this.http
      .get(archivo.urlCompleta, { responseType: 'blob' })
      .subscribe((blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64 = reader.result as string;
          this.pdfBase64 = base64; // incluye el data:application/pdf;base64,...
        };
        reader.readAsDataURL(blob);
      });
  }
}

cerrarModal() {
  this.modalVisible = false;
  this.archivoSeleccionado = null;
  this.pdfSafeUrl = null; // Limpia la URL segura
}


}
