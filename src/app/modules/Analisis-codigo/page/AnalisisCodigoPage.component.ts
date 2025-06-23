import { ChangeDetectionStrategy, Component, signal, EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SelectorHerramientaProyectoComponent } from "../components/selector-herramienta-proyecto/selector-herramienta-proyecto.component";
import { AnalisisVacioComponent } from "../components/analisis-vacio/analisis-vacio.component";
import { AnalisisResultadoComponent } from "../components/analisis-resultado/analisis-resultado.component";


@Component({
  selector: 'app-analisis-codigo-page',
  standalone: true,
  imports: [TableModule, DialogModule, SelectorHerramientaProyectoComponent, AnalisisVacioComponent, AnalisisResultadoComponent],
  templateUrl: './AnalisisCodigoPage.component.html',
  styleUrl: './AnalisisCodigoPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AnalisisCodigoPageComponent {

  analisis = signal<boolean>(true)

  realizarAnalisis (value : boolean){
    this.analisis.set(value);
  }


}
