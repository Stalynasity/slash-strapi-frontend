import { Component } from '@angular/core';
import { ToggleSettingCardComponent } from "../../components/ToggleSettingCard.component";
import { CampoInputComponent } from "../../components/InputFiled.component";
import { SelectorOpcionesComponent } from "../../components/SelectorOpciones.component";
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-respaldo',
  standalone: true,
  imports: [ToggleSettingCardComponent, CampoInputComponent, SelectorOpcionesComponent],
  templateUrl: './respaldo.component.html',
  styleUrl: './respaldo.component.css'
})
export class RespaldoComponent {
// Toggle hardcodeado por defecto
notificacionesFallos: boolean = true;

// Opciones para el select de longitud mínima de contraseña
frecuencias: SelectItem[] = [
  { label: 'Diario',  value: 'diario' },
  { label: 'Semanal', value: 'semanal' },
  { label: 'Mensual', value: 'mensual' },
  { label: 'Anual',   value: 'anual' }
];
frecuenciaSeleccionada: string = 'diario';

// Valor quemado para el límite de llamadas diarias
apiDailyLimit: number = 0;
}
