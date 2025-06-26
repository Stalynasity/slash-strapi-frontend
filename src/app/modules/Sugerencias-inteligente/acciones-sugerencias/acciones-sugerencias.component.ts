import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';


@Component({
  selector: 'app-acciones-sugerencias',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,TextareaModule, InputTextModule, InputTextModule
  ],
  templateUrl: './acciones-sugerencias.component.html',
  styleUrl: './acciones-sugerencias.component.css'
})
export class AccionesSugerenciasComponent {
  @Input() visible: boolean = false;
  @Input() sugerencia: any;
  @Output() onClose = new EventEmitter<void>(); // 👈 Notificamos cierre

  cerrarDialogo() {
    this.onClose.emit(); // 👈 Emitimos evento al padre
  }

  verDocumentacion(sugerencia: any) {
    console.log('Ver documentación de:', sugerencia);
  }

  buscarSugerencias() {
    console.log('Asociar sugerencia:', this.sugerencia);
  }
}
