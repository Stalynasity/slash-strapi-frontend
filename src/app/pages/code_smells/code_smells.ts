import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableMenubarComponent } from '../../shared/components/ReusableMenuBar.component';
import { NewBugReportComponent } from '../bug_reports/pages/newbugreport/newbugreport';

@Component({
    selector: 'app-code_smells',
    standalone: true,
    imports: [
        CommonModule, ReusableMenubarComponent
    ],
    template: `
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-surface-900 dark:text-white">Nueva vista code_smells</h2>
            <p class="text-gray-500 text-sm">gloglogloglo</p>
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
          { label: 'Bug Reports', icon: 'pi pi-shield',  component:NewBugReportComponent  },
          { label: 'Solution Management', icon: 'pi pi-shield', component:NewBugReportComponent  },
      ];
}
