import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-issues-summary-widget',
    standalone: true,
    imports: [CommonModule, CardModule],
    template: `
    <div class="mb-4">
        <p-card header="Resumen de Incidencias" class="shadow-md rounded-md ">
            <div class="grid grid-cols-2 gap-6">
                <div class="flex flex-col items-center">
                    <span class="text-3xl font-bold text-surface-900 dark:text-surface-0">{{ totalOpen }}</span>
                    <span class="text-gray-500">Abiertas</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-3xl font-bold text-surface-900 dark:text-surface-0">{{ totalResolved }}</span>
                    <span class="text-gray-500">Resueltas</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-3xl font-bold text-surface-900 dark:text-surface-0">{{ totalInProgress }}</span>
                    <span class="text-gray-500">En Progreso</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="text-3xl font-bold text-surface-900 dark:text-surface-0">{{ totalCritical }}</span>
                    <span class="text-gray-500">Críticas</span>
                </div>
            </div>
        </p-card>
        </div>
    `
})
export class IssuesSummaryWidget {
    totalOpen = 12;
    totalResolved = 30;
    totalInProgress = 7;
    totalCritical = 3;
}
