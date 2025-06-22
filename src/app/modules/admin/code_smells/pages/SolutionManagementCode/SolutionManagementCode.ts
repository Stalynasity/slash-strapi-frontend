// solution-management.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-solution-management',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './SolutionManagementCode.html',
})
export class SolutionManagementCodeComponent {}
