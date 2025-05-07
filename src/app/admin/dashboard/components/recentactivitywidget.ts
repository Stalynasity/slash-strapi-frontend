import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-recent-activity-widget',
    standalone: true,
    imports: [CommonModule, CardModule],
    template: `
    <div class="mb-4">
        <p-card header="Actividad Reciente" class="shadow-md rounded-md">
            <ul class="list-none p-0 m-0 flex flex-col gap-4">
                <li *ngFor="let activity of activities" class="flex items-start gap-4">
                    <div class="w-2 h-2 rounded-full mt-2" [ngClass]="getColor(activity.type)"></div>
                    <div>
                        <p class="text-surface-700 dark:text-surface-100 font-semibold">{{ activity.title }}</p>
                        <small class="text-gray-500">{{ activity.time }}</small>
                    </div>
                </li>
            </ul>
        </p-card>
    </div>
    `
})
export class RecentActivityWidget {
    activities = [
        { title: 'Nuevo error reportado en módulo de usuarios.', time: 'Hace 10 minutos', type: 'error' },
        { title: 'Sugerencia IA aplicada en reporte de facturación.', time: 'Hace 1 hora', type: 'info' },
        { title: 'Incidencia resuelta en API de pagos.', time: 'Hace 2 horas', type: 'success' }
    ];

    getColor(type: string) {
        switch (type) {
            case 'error': return 'bg-red-500';
            case 'info': return 'bg-blue-500';
            case 'success': return 'bg-green-500';
            default: return 'bg-gray-400';
        }
    }
}
