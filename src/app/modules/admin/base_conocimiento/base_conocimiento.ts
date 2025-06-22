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
    templateUrl: './base_conocimiento.html',
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

