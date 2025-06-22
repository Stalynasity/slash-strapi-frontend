import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableMenubarComponent } from '../../shared/components/MenuBar.Reusable.component';
import { NuevaDocumentacionComponent } from './nueva-documentacion/nueva-documentacion.component';
import { ListaDocumentacionComponent } from './lista-documentacion/lista-documentacion.component';


@Component({
    selector: 'app-documentacion-module',
    standalone: true,
    imports: [CommonModule, ReusableMenubarComponent],
    template: `
        <div class="mb-6">
            <component-menubar [tabs]="tabs"></component-menubar>
        </div>
    `,
    providers: []
})
export class DocumentacionModuleComponent {
    // Constructor

    tabs = [
        { label: 'Documentacion', icon: 'pi pi-pencil', component: ListaDocumentacionComponent },
        { label: 'Nueva documentacion', icon: 'pi pi-shield', component: NuevaDocumentacionComponent },
    ];
}
