import { Component } from '@angular/core';
import { ToggleSettingCardComponent } from "../../components/ToggleSettingCard.component";
import { SelectorOpcionesComponent } from "../../components/SelectorOpciones.component";
import { SelectItem } from 'primeng/api';
import { CampoInputComponent } from "../../components/InputFiled.component";

@Component({
  selector: 'app-ia',
  standalone: true,
  imports: [ToggleSettingCardComponent, SelectorOpcionesComponent, CampoInputComponent],
  templateUrl: './ia.component.html',
  styleUrl: './ia.component.css'
})
export class IaComponent {
  enabledReadOnly : boolean = false
  usuario = '';

  iaEngines: SelectItem[] = [
    { label: 'OpenAI GPT-4',      value: 'gpt-4' },
    { label: 'OpenAI GPT-3.5',    value: 'gpt-3.5' },
    { label: 'Google PaLM',       value: 'palm' }
  ];

  selectedEngine: string  = 'gpt-4';

  frecuenciaSeleccionada: string = 'diario';
  frecuencias: SelectItem[] = [
    { label: 'Diario',   value: 'diario' },
    { label: 'Semanal',  value: 'semanal' },
    { label: 'Mensual',  value: 'mensual' },
    { label: 'Anual',    value: 'anual' }
  ];
}
