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
    templateUrl: './detalles_errores.html',
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
