import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewCodeSmellComponent } from './pages/NewCodeSmell/newCodeSmell';
import { CodeSmellReportsComponent } from './pages/CodeSmeelReports/CodeSmeelReports';
import { SolutionManagementCodeComponent } from './pages/SolutionManagementCode/SolutionManagementCode';
import { ReusableMenubarComponent } from '../../../shared/components/MenuBar.Reusable.component';

@Component({
    selector: 'app-code_smells',
    standalone: true,
    imports: [CommonModule, ReusableMenubarComponent],
    template: `
        <div class="mb-6">
            <component-menubar [tabs]="tabs"></component-menubar>
        </div>
    `,
    providers: []
})
export class code_smells {
    // Constructor
    constructor() {
        // Constructor logic here
    }
    tabs = [
        { label: 'Nuevo Code Smell', icon: 'pi pi-shield', component: NewCodeSmellComponent },
        { label: 'Reportes de Code Smells', icon: 'pi pi-shield', component: CodeSmellReportsComponent },
        { label: 'Gestión de Soluciones', icon: 'pi pi-shield', component: SolutionManagementCodeComponent }
    ];
}
