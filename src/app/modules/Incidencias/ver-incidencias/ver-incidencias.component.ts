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

@Component({
  selector: 'app-ver-incidencias',
  standalone: true,
  imports: [
    CommonModule,
    TagModule,
    CardModule,
    TabsModule,
    ButtonModule,
    TimelineModule,
    TextareaModule,
    FormsModule,
  ],
  templateUrl: './ver-incidencias.component.html',
  styleUrls: ['./ver-incidencias.component.css'],
})
export class VerIncidenciasComponent implements OnInit {
  incidencia?: Incidencia;
  nuevoComentario: string = '';
  urlActual: string = window.location.href;

  @ViewChild('qrCanvas', { static: false }) qrCanvasRef!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private incidenciaService: IncidenciaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.incidenciaService.getIncidenciaPorId(id).subscribe((data) => {
        this.incidencia = data;
        setTimeout(() => this.generarQRCode(), 100); // Esperar a que canvas se renderice
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
}
