import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-solution-management',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="card mb-6">
            <h2 class="text-2xl font-semibold text-surface-900 dark:text-white">Solution Management</h2>
            <p class="text-gray-500 text-sm mb-6">
                Review and manage AI-generated and manually created solutions for reported bugs.
            </p>

            <div class="overflow-auto border rounded">
                <table class="min-w-full text-sm text-left">
                    <thead class="bg-gray-50 text-gray-500">
                        <tr>
                            <th class="px-4 py-3">Bug</th>
                            <th class="px-4 py-3">Solution Type</th>
                            <th class="px-4 py-3">Complexity</th>
                            <th class="px-4 py-3">Time Estimate</th>
                            <th class="px-4 py-3">Status</th>
                            <th class="px-4 py-3">Created</th>
                            <th class="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let s of solutions" class="border-b">
                            <td class="px-4 py-2">
                                <div class="font-medium">#{{ s.id }}</div>
                                <div class="text-blue-700 underline cursor-pointer">{{ s.title }}</div>
                            </td>
                            <td class="px-4 py-2">
                                <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">{{ s.solutionType }}</span>
                            </td>
                            <td class="px-4 py-2">
                                <span [ngClass]="complexityClass(s.complexity)" class="rounded-full px-2 py-1 text-xs font-medium">
                                    {{ s.complexity }}
                                </span>
                            </td>
                            <td class="px-4 py-2">{{ s.time }}</td>
                            <td class="px-4 py-2">
                                <span [ngClass]="statusClass(s.status)" class="rounded-full px-2 py-1 text-xs font-medium">
                                    {{ s.status }}
                                </span>
                            </td>
                            <td class="px-4 py-2">{{ s.created }}</td>
                            <td class="px-4 py-2 text-blue-700 underline cursor-pointer">View</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
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
