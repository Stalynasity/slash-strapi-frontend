import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-incidents',
    standalone: true,
    imports: [
        CommonModule
    ],
    template: `
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-surface-900 dark:text-white">Nueva vista incidents</h2>
            <p class="text-gray-500 text-sm">gloglogloglo</p>
        </div>
    `,
    providers: []
})
export class incidents {
    // Constructor
    constructor() {
        // Constructor logic here
    }

}
