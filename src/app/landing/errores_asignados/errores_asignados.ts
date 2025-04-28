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
    template: `
        <div class="card">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-2xl font-semibold text-surface-900 dark:text-white">Mis Errores Asignados</h2>
                <button pButton pRipple label="Nuevo Error" icon="pi pi-plus" class="bg-primary text-white rounded-md"></button>

            </div>

            <p-table [value]="errores" [paginator]="true" [rows]="5" responsiveLayout="scroll" class="shadow-md rounded-md">
                <ng-template pTemplate="header">
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Tipo</th>
                        <th>Prioridad</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </ng-template>

                <ng-template pTemplate="body" let-error>
                    <tr>
                        <td>{{ error.id }}</td>
                        <td>{{ error.title }}</td>
                        <td>
                            <p-tag [value]="error.type" [severity]="error.type === 'Bug' ? 'danger' : 'warn'"></p-tag>
                        </td>
                        <td>
                            <p-tag
                                [value]="error.priority"
                                [severity]="getPrioritySeverity(error.priority)">
                            </p-tag>
                        </td>
                        <td>
                            <p-tag
                                [value]="error.status"
                                [severity]="getStatusSeverity(error.status)">
                            </p-tag>
                        </td>
                        <td class="flex gap-2">
                            <button pButton icon="pi pi-eye" class="p-button-text p-button-rounded" pRipple></button>
                            <button pButton icon="pi pi-pencil" class="p-button-text p-button-rounded" pRipple></button>
                        </td>
                    </tr>
                </ng-template>
            </p-table>
        </div>
    `
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
