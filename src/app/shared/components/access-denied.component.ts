import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col justify-center items-center h-screen text-center px-4">
      <i class="pi pi-lock text-5xl text-red-500 mb-4 animate-pulse"></i>
      <h2 class="text-2xl font-semibold mb-2">Acceso Denegado</h2>
      <p class="text-gray-600 mb-4">No tienes permisos para acceder a esta sección.</p>
      <a routerLink="/" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Volver al inicio
      </a>
    </div>
  `
})
export class AccessDeniedComponent {}
