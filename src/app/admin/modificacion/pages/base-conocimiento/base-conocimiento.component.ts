import { Component } from '@angular/core';
import { ToggleSettingCardComponent } from "../../components/ToggleSettingCard.component";

@Component({
  selector: 'app-base-conocimiento',
  standalone: true,
  imports: [ToggleSettingCardComponent],
  templateUrl: './base-conocimiento.component.html',
  styleUrl: './base-conocimiento.component.css'
})
export class BaseConocimientoComponent {
  // Estado de “Modo solo lectura para ciertos usuarios”
  enabledReadOnly: boolean = false;
  // Estado de “Ciclo de validación y aprobación”
  enabledApprovalCycle: boolean = false;
}
