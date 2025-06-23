import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { SelectorOpcionesComponent } from '../../../../shared/components/selector-opciones.component';


@Component({
  selector: 'app-selector-herramienta-proyecto',
  standalone: true,
  imports: [SelectorOpcionesComponent],
  templateUrl: './selector-herramienta-proyecto.component.html',
  styleUrl: './selector-herramienta-proyecto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorHerramientaProyectoComponent {

  analisisRealizado = output<boolean>();

    realizarAnalisis (){
    this.analisisRealizado.emit(true);
  }
 }
