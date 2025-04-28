import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'component-campo-input',
    standalone: true,
    imports: [CommonModule, FormsModule, InputTextModule],
    template: `
        <div class="field mb-4">
            <label *ngIf="label" class="block mb-2 text-surface-900 font-bold dark:text-gray-300">
                {{ label }}
            </label>
            <input pInputText [type]="type" [placeholder]="placeholder" [ngModel]="value" (ngModelChange)="valueChange.emit($event)" class="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            <div class="text-sm text-gray-500">{{ description }}</div>
        </div>
    `
})
export class CampoInputComponent {
    /** Texto de la etiqueta superior */
    @Input() label?: string;
    /** Placeholder del input */
    @Input() placeholder: string = '';
    @Input() description: string = '';
    /** Tipo de campo: text, email, password... */
    @Input() type: string = 'text';
    /** Valor ligado con ngModel */
    @Input() value: any;
    @Output() valueChange = new EventEmitter<any>();
}
