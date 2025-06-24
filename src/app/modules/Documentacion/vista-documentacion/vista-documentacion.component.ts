import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute} from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { Issue } from '../../../core/services/widget.Service';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-vista-documentacion',
  standalone: true,
  imports: [ CommonModule, RouterModule, CalendarModule, RippleModule, ButtonModule, DialogModule],
  templateUrl: './vista-documentacion.component.html',
  styleUrl: './vista-documentacion.component.css'
})
export class VistaDocumentacionComponent {
  documento: any;
  selectedIssue: Issue | null = null;

  constructor(private route: ActivatedRoute,) {
    const state = history.state;
    this.documento = state?.doc || {
      id: 'N/A',
      incidencia_id: '',
      causa_raiz: '',
      impacto: '',
      solucion_aplicada: '',
      recomendaciones: '',
      version_afectada: '',
      autor_documentacion: '',
      fecha_documentacion: '',
      adjuntos: []
    };

    this.selectedIssue = this.documento;
  }

  get qrCodeUrl(): string {
    if (!this.selectedIssue?.id) return '';
    const data = encodeURIComponent(
      window.location.origin + `/bug/${this.selectedIssue.id}`
    );
    return `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=150x150`;
  }

  handleShare(type: 'email' | 'whatsapp' | 'telegram') {
    if (!this.selectedIssue) return;

    const subject = encodeURIComponent(
      `Información del incidente ${this.selectedIssue.id}: ${this.selectedIssue.title}`
    );
    const body = encodeURIComponent(
      `Descripción: ${this.selectedIssue.descripcion}\nVer detalle del incidente.`
    );
    const urlQr = window.location.origin + `/bug/${this.selectedIssue.id}`; // Ajusta si tu ruta real es distinta

    if (type === 'email') {
      window.open(
        `mailto:?subject=${subject}&body=${body}%0A${urlQr}`,
        '_blank'
      );
    }
    if (type === 'whatsapp') {
      window.open(
        `https://wa.me/?text=${subject}%0A${body}%0A${urlQr}`,
        '_blank'
      );
    }
    if (type === 'telegram') {
      window.open(
        `https://t.me/share/url?url=${urlQr}&text=${subject}%0A${body}`,
        '_blank'
      );
    }
  }
}
