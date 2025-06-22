import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sugerencia-ia',
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule, CardModule],
    templateUrl : './sugerencia.html',
})
export class SugerenciaIA {
    suggestions = [
        { title: 'Optimización de Código', description: 'Utiliza async/await para mejorar la legibilidad del método de validación.' },
        { title: 'Refactorización Recomendada', description: 'Se sugiere dividir el componente en subcomponentes para mayor mantenibilidad.' }
    ];

    constructor() {}

    generateSuggestions() {
        // Simular una llamada IA
        this.suggestions.push({
            title: 'Automatización de Pruebas',
            description: 'Considera agregar pruebas unitarias para asegurar el comportamiento del nuevo flujo.'
        });
    }
}
