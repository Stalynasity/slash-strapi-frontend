import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-base_conocimiento',
    standalone: true,
    imports: [
        CommonModule
    ],
    template: `
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-surface-900 dark:text-white">Nueva vista< base conocimiento </h2>
            <p class="text-gray-500 text-sm">gloglogloglo</p>
        </div>
    `,
    providers: []
})
export class base_conocimiento {

}
