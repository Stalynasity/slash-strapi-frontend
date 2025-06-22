import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-code_smellsBug',
    standalone: true,
    imports: [CommonModule, FormsModule, DropdownModule, InputTextModule, ButtonModule],
    templateUrl: './bugreports.html',
})
export class BugReportComponent {
    bug = {
        project: 'Not Related',
        title: '',
        type: 'Bug',
        severity: 'Medium',
        module: 'Frontend',
        file: '',
        description: ''
    };

    issues = [
        { id: 1, title: 'Button click not working on Firefox', module: 'frontend', severity: 'high', status: 'Open', date: '2025-03-15' },
        { id: 2, title: 'API endpoint returns 500 error', module: 'backend', severity: 'critical', status: 'In Progress', date: '2025-03-14' },
        { id: 3, title: 'CSS overflow issue on mobile', module: 'frontend', severity: 'medium', status: 'Solved', date: '2025-03-12' },
        { id: 4, title: 'Database query timeout', module: 'database', severity: 'high', status: 'Open', date: '2025-03-10' },
        { id: 5, title: 'Authentication token not refreshing', module: 'api', severity: 'high', status: 'In Progress', date: '2025-03-08' },
    ];

    statusClass(status: string) {
        return {
            'bg-red-100 text-red-700': status === 'Open',
            'bg-yellow-100 text-yellow-800': status === 'In Progress',
            'bg-green-100 text-green-700': status === 'Solved',
        };
    }
}
