import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

export interface Issue {
    id: string;
    title: string;
    type: string;
    priority: string;
    status: string;
    owner: string;
    createdAt: string;
    descripcion?: string;
}

@Injectable({ providedIn: 'root' })
export class WidgetService {
    private issuesData = signal<Issue[]>([
        { id: 'BUG-001', title: 'Memory leak in user authentication', type: 'bug', priority: 'high', status: 'resolved', owner: 'John Doe', createdAt: '2024-04-18' , descripcion: 'Memory leak in user authentication module' },
        { id: 'BUG-002', title: 'Duplicate code in payment processing', type: 'code-smell', priority: 'medium', status: 'in-progress', owner: 'Jane Smith', createdAt: '2024-04-17', descripcion: 'Duplicate code in payment processing module' },
        { id: 'BUG-003', title: 'SQL injection vulnerability', type: 'security', priority: 'high', status: 'resolved', owner: 'Mike Johnson', createdAt: '2024-04-16', descripcion: 'SQL injection vulnerability in user login form' },
    ]);

    getIssues() {
        return this.issuesData();
    }
}
