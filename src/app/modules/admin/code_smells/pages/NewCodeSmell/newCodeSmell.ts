// new-code-smell.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-new-code-smell',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TextareaModule
  ],
  templateUrl: './newCodeSmell.html',
})
export class NewCodeSmellComponent {
  form = {
    titulo: '',
    tipo: null,
    patron: null,
    severidad: null,
    proyecto: null,
    archivo: '',
    descripcion: '',
    solucion: ''
  };

  showError = false;

  tipos = [
    { label: 'Código Duplicado', value: 'duplicado' },
    { label: 'Código Muerto', value: 'muerto' }
  ];

  patrones = [
    { label: 'Método Largo', value: 'largo' },
    { label: 'Clase God Object', value: 'god' }
  ];

  severidades = [
    { label: 'Alta', value: 'alta' },
    { label: 'Media', value: 'media' },
    { label: 'Baja', value: 'baja' }
  ];

  proyectos = [
    { label: 'Core App', value: 'core' },
    { label: 'API Usuarios', value: 'api_users' }
  ];

  enviar() {
    const { titulo, tipo, patron, severidad, proyecto, descripcion, solucion } = this.form;
    this.showError = !titulo || !tipo || !patron || !severidad || !proyecto || !descripcion || !solucion;
    if (!this.showError) {
      console.log('Enviado:', this.form);
    }
  }

  guardar() {
    console.log('Guardando borrador...', this.form);
  }
}
