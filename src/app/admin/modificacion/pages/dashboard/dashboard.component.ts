import { Component } from '@angular/core';
import { SelectorOpcionesComponent } from "../../components/SelectorOpciones.component";
import { ToggleSettingCardComponent } from "../../components/ToggleSettingCard.component";
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SelectorOpcionesComponent, ToggleSettingCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    enableAuditLog: boolean = false;

    metricaSeleccionada: string = '1';
    metricas: SelectItem[] = [
        { label: 'Todas las métricas', value: '1' },
        { label: 'Metrica - 1', value: '2' }
    ];

    frecuenciaSeleccionada: string = 'diario';
    frecuenciasActualizacion: SelectItem[] = [
      { label: 'Diario',  value: 'diario' },
      { label: 'Semanal', value: 'semanal' },
      { label: 'Mensual', value: 'mensual' },
      { label: 'Anual',   value: 'anual' }
    ];
}
