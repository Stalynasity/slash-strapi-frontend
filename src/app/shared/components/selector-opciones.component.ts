import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'component-selector-opciones',
    standalone: true,
    imports: [CommonModule, FormsModule, DropdownModule],
    template: `
        <div class="field mb-4">
            <label *ngIf="label" class="block mb-2 text-surface-900 font-bold dark:text-gray-300">
                {{ label }}
            </label>
            <p-dropdown class="mb-2" [options]="options" [(ngModel)]="selected" (ngModelChange)="selectedChange.emit($event)"  [placeholder]="placeholder" [styleClass]="'w-full'"></p-dropdown>
            <div class="text-sm text-gray-500">{{ description }}</div>
        </div>
    `
})
export class SelectorOpcionesComponent {
    @Input() options: SelectItem[] = [];
    @Input() label?: string;
    @Input() description: string = '';
    @Input() placeholder: string = 'Seleccione...';
    @Input() selected: any;
    @Output() selectedChange = new EventEmitter<any>();
}
