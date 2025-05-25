import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableMenubarComponent } from '../../shared/components/MenuBar.Reusable.component';
import { NewBugReportComponent } from './pages/newbugreport/newbugreport';
import { BugReportComponent } from './pages/bugreports/bugreports';
import { SolutionManagementComponent } from './pages/solutionmanagement/solutionmanagement';

@Component({
    selector: 'app-bug-reports',
    standalone: true,
    imports: [CommonModule, ReusableMenubarComponent],
    template: `
        <div class="mb-6">
            <component-menubar [tabs]="tabs"></component-menubar>
        </div>
    `,
    providers: []
})
export class BugReport {
    // Constructor

    tabs = [
        { label: 'Nuevo Reporte de Error', icon: 'pi pi-pencil', component: NewBugReportComponent },
        { label: 'Reportes de Errores', icon: 'pi pi-shield', component: BugReportComponent },
        { label: 'Gestión de Soluciones', icon: 'pi pi-shield', component: SolutionManagementComponent }
    ];
}
