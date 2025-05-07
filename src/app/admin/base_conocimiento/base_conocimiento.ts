import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-base_conocimiento',
    standalone: true,
    imports: [
        CommonModule, FormsModule, ButtonModule, InputTextModule, CardModule
    ],
    template: `
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-800">Base de conocimiento</h1>
          <p class="text-gray-500">Documentación centralizada y recursos para proyectos</p>
        </div>
        <button pButton icon="pi pi-plus" label="Artículo Nuevo" class="p-button-dark p-button-sm"></button>
      </div>

      <div class="mb-6">
        <input
          type="text"
          pInputText
          [(ngModel)]="search"
          placeholder="Buscar en la base de conocimiento..."
          class="w-full max-w-md"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          *ngFor="let item of filteredItems"
          class="bg-white border rounded-lg shadow hover:shadow-md transition p-4 flex flex-col justify-between"
        >
          <div>
            <img *ngIf="item.image" [src]="item.image" alt="{{ item.title }}" class="w-full h-36 object-cover rounded-md mb-4" />
            <h2 class="text-lg font-semibold text-gray-900">{{ item.title }}</h2>
            <p class="text-sm text-gray-600 mt-1">{{ item.description }}</p>
            <a href="#" class="text-sm text-blue-600 hover:underline mt-2 inline-block">Ver sección completa</a>
          </div>
          <div class="flex flex-wrap gap-2 mt-4">
            <button
              *ngFor="let action of item.actions"
              pButton
              [label]="action"
              class="p-button-sm p-button-outlined"
            ></button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class base_conocimiento {
  items = [
    {
      title: 'Bug Management',
      description: 'Documentación y guías sobre manejo de bugs',
      image: 'assets/img/bug.jpg',
      actions: ['Registrar Bug', 'Ver Bugs']
    },
    {
      title: 'Code Smells',
      description: 'Identificación y solución de problemas de código',
      image: 'assets/img/code.jpg',
      actions: ['Registrar Code Smell', 'Ver Code Smells']
    },
    {
      title: 'Gestión de Incidentes',
      description: 'Procesos y protocolos para manejo de incidentes',
      image: 'assets/img/incidents.jpg',
      actions: ['Registrar Incidente', 'Ver Incidentes']
    },
    {
      title: 'Sprint Planning',
      description: 'Sprint goals, backlog items and task breakdowns',
      image: 'assets/img/sprint.jpg',
      actions: ['Crear Sprint', 'Sprint Activo']
    },
    {
      title: 'Design Thinking',
      description: 'User research, personas and journey maps',
      image: 'assets/img/design.jpg',
      actions: ['Personas', 'Journey Maps']
    }
    // Puedes seguir agregando más tarjetas aquí
  ];

  search= '';

  get filteredItems() {
    return this.items.filter(item =>
      item.title.toLowerCase().includes(this.search.toLowerCase()) ||
      item.description.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}

