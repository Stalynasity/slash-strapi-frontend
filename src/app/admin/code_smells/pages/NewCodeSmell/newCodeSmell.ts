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
  template: `
    <div class="card space-y-6">

      <input type="text" pInputText [(ngModel)]="form.titulo" placeholder="Breve descripción del code smell" class="w-full" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p-dropdown
          class="w-full"
          [options]="tipos"
          [(ngModel)]="form.tipo"
          placeholder="Tipo"
        ></p-dropdown>

        <p-dropdown
          class="w-full"
          [options]="patrones"
          [(ngModel)]="form.patron"
          placeholder="Patrón"
        ></p-dropdown>
      </div>

      <p-dropdown
        class="w-full"
        [options]="severidades"
        [(ngModel)]="form.severidad"
        placeholder="Severidad"
      ></p-dropdown>

      <div class="flex gap-2 items-center">
        <p-dropdown
          class="flex-1"
          [options]="proyectos"
          [(ngModel)]="form.proyecto"
          placeholder="Seleccionar proyecto"
        ></p-dropdown>
        <button pButton label="Nuevo" class="p-button-outlined p-button-sm"></button>
      </div>

      <input type="text" pInputText [(ngModel)]="form.archivo" placeholder="ej. src/components/Button.tsx" class="w-full" />

      <textarea
        [(ngModel)]="form.descripcion" pTextarea
        placeholder="Descripción detallada del code smell..."
        class="w-full"
        autoResize="true"
        rows="4"
      ></textarea>

      <textarea
        [(ngModel)]="form.solucion" pTextarea
        placeholder="Propuesta de solución para refactorizar..."
        class="w-full"
        autoResize="true"
        rows="4"
      ></textarea>

      <div *ngIf="showError" class="text-red-600 text-sm border border-red-300 bg-red-50 p-3 rounded">
        ⚠️ Por favor, asegúrese de completar todos los campos requeridos antes de enviar.
      </div>

      <div class="flex justify-end gap-4 mt-4">
        <button pButton label="Guardar Borrador" class="p-button-secondary" (click)="guardar()"></button>
        <button pButton label="Enviar Reporte" class="p-button" (click)="enviar()"></button>
      </div>
    </div>
  `
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
