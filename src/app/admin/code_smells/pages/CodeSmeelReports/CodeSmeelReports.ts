// code-smell-reports.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-code-smell-reports',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
  <div class="card space-y-6">

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm text-left border-collapse">
          <thead class="text-gray-500 border-b">
            <tr>
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Title</th>
              <th class="px-4 py-2">Type</th>
              <th class="px-4 py-2">Severity</th>
              <th class="px-4 py-2">File</th>
              <th class="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-800">
            <tr *ngFor="let report of reports" class="border-b hover:bg-gray-50">
              <td class="px-4 py-2">{{ report.id }}</td>
              <td class="px-4 py-2">{{ report.title }}</td>
              <td class="px-4 py-2">
                <span class="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">
                  {{ report.type }}
                </span>
              </td>
              <td class="px-4 py-2">
                <span class="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">
                  {{ report.severity }}
                </span>
              </td>
              <td class="px-4 py-2">{{ report.file }}</td>
              <td class="px-4 py-2 text-center">
                <button pButton icon="pi pi-eye" label="View" class="p-button-sm p-button-outlined"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class CodeSmellReportsComponent {
  activeTab = 'Code Smell Reports';

  reports = [
    {
      id: 'CS-001',
      title: 'Método excesivamente largo en AuthService',
      type: 'Long Method',
      severity: 'Alta',
      file: 'src/services/AuthService.ts'
    }
  ];
}
