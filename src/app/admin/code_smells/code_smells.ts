import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableMenubarComponent } from '../../shared/components/MenuBar.Reusable.component';
import { NewCodeSmellComponent } from './pages/NewCodeSmell/newCodeSmell';
import { CodeSmellReportsComponent } from './pages/CodeSmeelReports/CodeSmeelReports';
import { SolutionManagementCodeComponent } from './pages/SolutionManagementCode/SolutionManagementCode';

@Component({
    selector: 'app-code_smells',
    standalone: true,
    imports: [
        CommonModule, ReusableMenubarComponent
    ],
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
          { label: 'New Code Smell', icon: 'pi pi-shield',  component:NewCodeSmellComponent  },
          { label: 'CodeSmellReportsComponent', icon: 'pi pi-shield', component:CodeSmellReportsComponent  },
          { label: 'SolutionManagementComponent', icon: 'pi pi-shield', component:SolutionManagementCodeComponent  },
      ];
}
