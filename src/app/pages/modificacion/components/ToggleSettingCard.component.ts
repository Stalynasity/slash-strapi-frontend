import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
    selector: 'component-togglesetting',
    imports: [CommonModule, FormsModule, InputSwitchModule],
    standalone: true,
    template: `
        <div class="border rounded-lg border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between mb-4">
            <div>
                <div class="font-bold text-surface-900 dark:text-white mb-2">{{ title }}</div>
                <div class="text-sm text-gray-500">{{ description }}</div>
            </div>
            <p-inputSwitch [ngModel]="enabled" (ngModelChange)="onToggle($event)"></p-inputSwitch>
        </div>
    `
})
export class ToggleSettingCardComponent {
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() enabled: boolean = false;
    @Output() enabledChange = new EventEmitter<boolean>();

    onToggle(value: boolean) {
        this.enabledChange.emit(value);
    }
}
