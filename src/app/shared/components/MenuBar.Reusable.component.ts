import { Component, Input, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'component-menubar',
    template: `
        <p-menubar [model]="menuItems" />
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
