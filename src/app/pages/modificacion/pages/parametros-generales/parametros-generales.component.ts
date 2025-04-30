import { Component } from '@angular/core';
import { SelectorOpcionesComponent } from '../../components/SelectorOpciones.component';
import { ToggleSettingCardComponent } from '../../components/ToggleSettingCard.component';
import { SelectItem } from 'primeng/api';

@Component({
    selector: 'app-parametros-generales',
    standalone: true,
    imports: [SelectorOpcionesComponent, ToggleSettingCardComponent],
    templateUrl: './parametros-generales.component.html',
    styleUrl: './parametros-generales.component.css'
})
export class ParametrosGeneralesComponent {
    enableAuditLog: boolean = false;


    idiomaSeleccionado: string = 'ES';
    idiomas: SelectItem[] = [{ label: 'Español', value: 'ES' }, { label: 'Ingles', value: 'IN' }];

    zonaHorariaSeleccionada: string = 'EC';
    zonasHorarias: SelectItem[] = [
      { label: 'Ecuador', value: 'EC' },
      { label: 'Mexico', value: 'MX' }
    ];
}
