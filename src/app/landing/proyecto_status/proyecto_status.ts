import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-proyecto-status',
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule, ProgressBarModule, CardModule],
    template: `
        <div class="card p-6 shadow-md rounded-md">
            <h2 class="text-2xl font-semibold mb-6 text-surface-900 dark:text-white">Estado General del Proyecto</h2>

            <div class="flex flex-col gap-6">
                <div>
                    <div class="flex justify-between mb-2">
                        <span class="text-surface-800 dark:text-surface-0 font-medium">Errores Resueltos</span>
                        <span class="text-gray-500 text-sm">{{ resolvedIssues }}/{{ totalIssues }}</span>
                    </div>
                    <p-progressBar [value]="resolvedPercentage"></p-progressBar>
                </div>

                <div>
                    <div class="flex justify-between mb-2">
                        <span class="text-surface-800 dark:text-surface-0 font-medium">Code Smells Eliminados</span>
                        <span class="text-gray-500 text-sm">{{ smellsFixed }}/{{ totalSmells }}</span>
                    </div>
                    <p-progressBar [value]="smellsPercentage" styleClass="bg-primary"></p-progressBar>
                </div>

                <div class="flex justify-between mt-6">
                    <span class="text-gray-600 dark:text-gray-300 text-sm">Última actualización: {{ lastUpdate | date:'short' }}</span>
                    <button
                        pButton
                        pRipple
                        label="Actualizar Estado"
                        class="bg-primary text-white rounded-md"
                        (click)="refreshStatus()"
                    ></button>
                </div>
            </div>
        </div>
    `
})
export class ProyectStatus {
    resolvedIssues = 120;
    totalIssues = 150;
    smellsFixed = 90;
    totalSmells = 100;
    lastUpdate = new Date();

    constructor() {}

    get resolvedPercentage() {
        return (this.resolvedIssues / this.totalIssues) * 100;
    }

    get smellsPercentage() {
        return (this.smellsFixed / this.totalSmells) * 100;
    }

    refreshStatus() {
        // Simula actualización de datos
        this.lastUpdate = new Date();
        alert('Estado actualizado correctamente 🚀');
    }
}
