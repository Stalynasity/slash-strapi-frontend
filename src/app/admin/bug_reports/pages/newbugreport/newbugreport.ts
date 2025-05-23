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
    template: `
        <div class="card space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <label class="font-medium block mb-2">Related Project / Requirement</label>
                    <select [(ngModel)]="bug.project" class="w-full border rounded px-3 py-2">
                        <option>Not Related</option>
                        <option>Login Flow</option>
                        <option>Payment Gateway</option>
                    </select>
                </div>
                <div class="flex justify-end items-start">
                    <button pButton icon="pi pi-plus" label="New" class="p-button-sm mt-6"></button>
                </div>
            </div>

            <div>
                <label class="font-medium block mb-2">Title</label>
                <input pInputText [(ngModel)]="bug.title" placeholder="Brief description of the bug" class="w-full" />
            </div>

            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <label class="font-medium block mb-2">Type</label>
                    <select [(ngModel)]="bug.type" class="w-full border rounded px-3 py-2">
                        <option>Bug</option>
                        <option>Code Smell</option>
                    </select>
                </div>
                <div>
                    <label class="font-medium block mb-2">Severity</label>
                    <select [(ngModel)]="bug.severity" class="w-full border rounded px-3 py-2">
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
            </div>

            <div>
                <label class="font-medium block mb-2">Module</label>
                <select [(ngModel)]="bug.module" class="w-full border rounded px-3 py-2">
                    <option>Frontend</option>
                    <option>Backend</option>
                </select>
            </div>

            <div>
                <label class="font-medium block mb-2">Affected File (optional)</label>
                <input pInputText [(ngModel)]="bug.file" placeholder="e.g., src/components/Button.tsx" class="w-full" />
            </div>

            <div>
                <label class="font-medium block mb-2">Description</label>
                <textarea
                  [(ngModel)]="bug.description"
                  rows="1"
                  class="w-full p-inputtext p-component"
                  (input)="autoResize($event)"
                ></textarea>

            </div>

            <div class="text-red-500 border border-red-300 p-3 rounded bg-red-50 flex items-center gap-2">
                <i class="pi pi-exclamation-triangle text-lg"></i>
                <span>Please ensure all required fields are filled out correctly before submitting.</span>
            </div>

            <div class="flex flex-wrap gap-3 justify-end">
                <button pButton label="Generate AI Recommendations" icon="pi pi-cog" class="p-button-outlined"> </button>
                <button pButton label="Save as Draft" class="p-button-outlined" > </button>
                <button pButton label="Submit Bug Report" class="bg-primary text-white" > </button>
            </div>
        </div>
    `
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
