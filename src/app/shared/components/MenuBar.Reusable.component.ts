import { Component, Input, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'component-menubar',
    template: `
        <div class="flex justify-center mt-4">
          <div class="inline-flex gap-4 bg-white rounded-lg p-2 shadow">
            <button
              *ngFor="let tab of tabs"
              class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
              [class.bg-blue-100]="activeComponent === tab.component"
              [class.text-blue-700]="activeComponent === tab.component"
              [class.text-gray-500]="activeComponent !== tab.component"
              (click)="activeComponent = tab.component"
            >
              <i [class]="tab.icon + ' mr-2'"></i>{{ tab.label }}
            </button>
          </div>
        </div>

        <div class="mt-4">
            <ng-container *ngComponentOutlet="activeComponent"></ng-container>
        </div>
    `,
    standalone: true,
    imports: [CommonModule, MenubarModule]
})
export class ReusableMenubarComponent {
    @Input() tabs: { label: string; icon: string; component: Type<any> }[] = [];

    menuItems: MenuItem[] = [];
    activeComponent: Type<any> | null = null;

    ngOnInit() {
        this.menuItems = this.tabs.map(tab => ({
            label: tab.label,
            icon: tab.icon,
            command: () => (this.activeComponent = tab.component)
        }));
        if (this.tabs.length > 0) {
            this.activeComponent = this.tabs[0].component;
        }
    }
}
