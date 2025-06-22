import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-solution-management',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './solutionmanagement.html',
})
export class SolutionManagementComponent {
    solutions = [
        { id: 2, title: 'API endpoint returns 500 error', solutionType: 'AI Generated', complexity: 'medium', time: '45 minutes', status: 'Pending', created: '2025-03-14' },
        { id: 3, title: 'CSS overflow issue on mobile', solutionType: 'Manual', complexity: 'low', time: '20 minutes', status: 'Approved', created: '2025-03-12' },
        { id: 5, title: 'Authentication token not refreshing', solutionType: 'AI Generated', complexity: 'high', time: '2 hours', status: 'Pending', created: '2025-03-08' },
    ];

    complexityClass(value: string) {
        return {
            'bg-yellow-100 text-yellow-800': value === 'medium',
            'bg-red-100 text-red-700': value === 'high',
            'bg-green-100 text-green-700': value === 'low'
        };
    }

    statusClass(status: string) {
        return {
            'bg-yellow-100 text-yellow-800': status === 'Pending',
            'bg-green-100 text-green-700': status === 'Approved'
        };
    }
}
