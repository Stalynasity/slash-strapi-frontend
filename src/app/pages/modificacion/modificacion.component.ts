import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar.component';
import { ConfiguracionHeader } from './components/configuracion-header.component';

@Component({
    selector: 'app-gestion',
    standalone: true,
    imports: [CommonModule, MenubarComponent, ConfiguracionHeader],
    template: `
    <div class="mb-6">
        <app-configuracion-header></app-configuracion-header>
        <component-menubar></component-menubar>
    </div> `,
    providers: []
})
export class ModificacionComponent {}
