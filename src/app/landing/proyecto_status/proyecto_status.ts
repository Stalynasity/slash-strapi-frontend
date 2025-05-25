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
    templateUrl: './proyecto_status.html',
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
