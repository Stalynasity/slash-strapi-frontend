import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

interface ErrorAssigned {
    id: string;
    title: string;
    type: 'Bug' | 'Code Smell';
    priority: 'High' | 'Medium' | 'Low';
    status: 'Open' | 'In Progress' | 'Resolved';
}

@Component({
    selector: 'app-errores-asignados',
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule, TableModule, TagModule],
    templateUrl: './errores_asignados.html',
})
export class ErroresAsignados {
    errores: ErrorAssigned[] = [
        { id: 'BUG-001', title: 'Error en login', type: 'Bug', priority: 'High', status: 'Open' },
        { id: 'CS-002', title: 'Duplicación de código en módulo usuario', type: 'Code Smell', priority: 'Medium', status: 'In Progress' },
        { id: 'BUG-003', title: 'Fallo en validación de formulario', type: 'Bug', priority: 'Low', status: 'Resolved' }
    ];

    constructor() {}

    getPrioritySeverity(priority: string) {
      switch (priority) {
          case 'High': return 'danger';
          case 'Medium': return 'warn'; // <-- AQUÍ
          case 'Low': return 'success';
          default: return 'info';
      }
  }

  getStatusSeverity(status: string) {
      switch (status) {
          case 'Open': return 'danger';
          case 'In Progress': return 'warn'; // <-- AQUÍ
          case 'Resolved': return 'success';
          default: return 'info';
      }
  }
}
