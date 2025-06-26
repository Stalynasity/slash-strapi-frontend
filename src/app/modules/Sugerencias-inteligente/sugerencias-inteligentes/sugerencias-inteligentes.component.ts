import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AccionesSugerenciasComponent } from '../acciones-sugerencias/acciones-sugerencias.component';
import { BusquedaIncidenciaResposne, SugerenciaResponse } from '../../../core/models/response/SugerenciaIncidenciaResponse';
import { SugerenciasInteligentesService } from '../../../core/services/SugerenciasInteligentes.service';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-sugerencias-inteligentes',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    MultiSelectModule,
    SelectModule,
    InputIconModule,
    TagModule,
    SliderModule,
    ProgressBarModule,
    ToggleButtonModule,
    ToastModule,
    RatingModule,
    RippleModule,
    IconFieldModule,
    AccionesSugerenciasComponent,
    MessageModule,
        MessagesModule, ProgressSpinnerModule
  ],
  templateUrl: './sugerencias-inteligentes.component.html',
  styleUrl: './sugerencias-inteligentes.component.css',
  providers: [ConfirmationService, MessageService],
})
export class SugerenciasInteligentesComponent implements OnInit {
  mostrarDialogoSugerencia: boolean = false;
  sugerenciaSeleccionada: any = null;
  @Input() incidencia?: BusquedaIncidenciaResposne;
  sugerencias: SugerenciaResponse[] = [];
  cargandoSugerencias = false;

  constructor(private sugerenciasService: SugerenciasInteligentesService) {}

  ngOnInit(): void {
    if (this.incidencia) {
      this.cargandoSugerencias = true;

      this.sugerenciasService.getSugerenciasPorIncidenciaId(this.incidencia.id).subscribe((data) => {
        this.sugerencias = data;
        this.cargandoSugerencias = false;
      });
    }
  }



  verAcciones(sugerencia: SugerenciaResponse) {
    this.sugerenciaSeleccionada = {
      ...sugerencia,
      codigo: this.incidencia?.id,
      descripcion_caso: '',
      responsable: 'Sistema'
    };
    this.mostrarDialogoSugerencia = true;
  }
}
