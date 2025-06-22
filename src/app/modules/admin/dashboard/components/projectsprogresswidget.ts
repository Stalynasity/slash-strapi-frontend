import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects-progress-widget',
    standalone: true,
    imports: [CommonModule, CardModule, ProgressBarModule],
    template: `
        <p-card header="Avance de Proyectos" class="shadow-md rounded-md">
            <div class="flex flex-col gap-6">
                <div *ngFor="let project of projects">
                    <div class="flex justify-between mb-2">
                        <span class="font-semibold text-surface-900 dark:text-surface-0">{{ project.name }}</span>
                        <span class="text-gray-500 text-sm">{{ project.progress }}%</span>
                    </div>
                    <p-progressBar [value]="project.progress" styleClass="h-3 rounded-md" [showValue]="false"></p-progressBar>
                </div>
            </div>
        </p-card>
    `
})
export class ProjectsProgressWidget {
    projects = [
        { name: 'Sistema de Errores', progress: 80 },
        { name: 'Refactorización Módulo Usuario', progress: 45 },
        { name: 'Integración API de IA', progress: 65 },
        { name: 'Mejoras de Seguridad', progress: 30 }
    ];
}
