import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col justify-center items-center h-screen text-center">
      <i class="pi pi-exclamation-triangle text-5xl text-orange-500 mb-4"></i>
      <h2 class="text-2xl font-semibold mb-2">¡Ha ocurrido un error!</h2>
      <p>Algo salió mal. Intenta de nuevo más tarde.</p>
    </div>
  `
})
export default class ErrorComponent {}
