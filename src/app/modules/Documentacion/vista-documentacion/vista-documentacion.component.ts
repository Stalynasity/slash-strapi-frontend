import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vista-documentacion',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './vista-documentacion.component.html',
  styleUrl: './vista-documentacion.component.css'
})
export class VistaDocumentacionComponent {
  documento: any;

  constructor(private route: ActivatedRoute) {
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
  }
}
