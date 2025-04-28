import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';

@Component({
    selector: 'app-detalle-errores',
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule, TagModule, DividerModule],
    template: `
        <div class="card p-6 shadow-md rounded-md">
            <h2 class="text-2xl font-semibold mb-4 text-surface-900 dark:text-white">Detalle del Error</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-gray-500 text-sm mb-1">ID del Error</label>
                    <p class="text-lg font-medium">{{ error?.id || '-' }}</p>
                </div>

                <div>
                    <label class="block text-gray-500 text-sm mb-1">Título</label>
                    <p class="text-lg font-medium">{{ error?.title || '-' }}</p>
                </div>

                <div>
                    <label class="block text-gray-500 text-sm mb-1">Tipo</label>
                    <p-tag [value]="error?.type" [severity]="error?.type === 'Bug' ? 'danger' : 'warn'"></p-tag>
                </div>

                <div>
                    <label class="block text-gray-500 text-sm mb-1">Prioridad</label>
                    <p-tag [value]="error?.priority" [severity]="getPrioritySeverity(error?.priority)"></p-tag>
                </div>

                <div>
                    <label class="block text-gray-500 text-sm mb-1">Estado</label>
                    <p-tag [value]="error?.status" [severity]="getStatusSeverity(error?.status)"></p-tag>
                </div>

                <div>
                    <label class="block text-gray-500 text-sm mb-1">Fecha de Reporte</label>
                    <p class="text-lg font-medium">{{ error?.reportedAt || '-' }}</p>
                </div>
            </div>

            <p-divider class="my-6" />

            <div>
                <label class="block text-gray-500 text-sm mb-2">Descripción Detallada</label>
                <p class="text-base leading-relaxed text-surface-700 dark:text-surface-200">
                    {{ error?.description || 'No hay descripción disponible.' }}
                </p>
            </div>

            <div class="flex justify-end mt-6 gap-4">
                <button pButton pRipple label="Editar" icon="pi pi-pencil" class="bg-primary text-white rounded-md"> </button>
                <button pButton pRipple label="Volver" icon="pi pi-arrow-left" severity="secondary" class="rounded-md"> </button>
            </div>
        </div>
    `
})
export class DetalleErrores {
    // Este input lo conectarías pasando el error seleccionado
    @Input() error: {
        id: string;
        title: string;
        type: 'Bug' | 'Code Smell';
        priority: 'High' | 'Medium' | 'Low';
        status: 'Open' | 'In Progress' | 'Resolved';
        description: string;
        reportedAt: string;
    } | null = null;

    constructor() {}

    getPrioritySeverity(priority?: string) {
        switch (priority) {
            case 'High': return 'danger';
            case 'Medium': return 'warn';
            case 'Low': return 'success';
            default: return 'info';
        }
    }

    getStatusSeverity(status?: string) {
        switch (status) {
            case 'Open': return 'danger';
            case 'In Progress': return 'warn';
            case 'Resolved': return 'success';
            default: return 'info';
        }
    }
}
