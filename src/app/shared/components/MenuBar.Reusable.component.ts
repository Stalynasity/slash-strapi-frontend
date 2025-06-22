import { Component, Input, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'component-menubar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  template: `
    <div class="flex justify-center mt-4">
      <div class="inline-flex gap-2 bg-[var(--surface-card)] rounded-lg p-2 shadow-sm">
        <button
          *ngFor="let tab of tabs"
          class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
          [ngClass]="{
            'bg-[var(--primary-color)] text-[var(--primary-contrast-color)]': activeComponent === tab.component,
            'text-[var(--text-color-secondary)] hover:bg-[var(--surface-hover)]': activeComponent !== tab.component
          }"
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
  styles: [`
    button {
      outline: none;
      border: none;
    }
  `]
})
export class ReusableMenubarComponent {
  @Input() tabs: { label: string; icon: string; component: Type<any> }[] = [];

  activeComponent: Type<any> | null = null;

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.activeComponent = this.tabs[0].component;
    }
  }
}
