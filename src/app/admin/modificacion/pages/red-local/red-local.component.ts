import { Component } from '@angular/core';
import { SelectorOpcionesComponent } from "../../components/SelectorOpciones.component";
import { CampoInputComponent } from "../../components/InputFiled.component";
import { ToggleSettingCardComponent } from "../../components/ToggleSettingCard.component";

@Component({
  selector: 'app-red-local',
  standalone: true,
  imports: [SelectorOpcionesComponent, CampoInputComponent, ToggleSettingCardComponent],
  templateUrl: './red-local.component.html',
  styleUrl: './red-local.component.css'
})
export class RedLocalComponent {
  strapiIPAddress : string = '';
  activeInternet : boolean = false;
  IPList : string = ''
}
