import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSettingCardComponent } from "../../components/ToggleSettingCard.component";
import { SelectorOpcionesComponent } from "../../components/SelectorOpciones.component";
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-seguridad',
  standalone: true,
  imports: [CommonModule, FormsModule, ToggleSettingCardComponent, SelectorOpcionesComponent],
  templateUrl: './seguridad.component.html',
  styleUrl: './seguridad.component.css'
})
export class SeguridadComponent {
  enabledRoles = false;
  enabledSpecialChars = false;
  enabledRestrictValidation = false;

  logitudSeleccionada: string = '8';
  longitudes: SelectItem[] = [
    { label: '8 caracteres', value: '8' },
    { label: '12 caracteres', value: '12' },
    { label: '20 caracteres',  value: '20' }
  ];

}
