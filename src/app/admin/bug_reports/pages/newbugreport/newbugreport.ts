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
    templateUrl: './newbugreport.html',
})
export class NewBugReportComponent {
    bug = {
        project: 'Not Related',
        title: '',
        type: 'Bug',
        severity: 'Medium',
        module: 'Frontend',
        file: '',
        description: ''
    };
    autoResize(event: Event) {
      const target = event.target as HTMLTextAreaElement;
      target.style.height = 'auto';
      target.style.height = target.scrollHeight + 'px';
    }

}
