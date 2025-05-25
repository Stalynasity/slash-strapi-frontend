// code-smell-reports.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-code-smell-reports',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './CodeSmeelReports.html',
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
