import { Component } from '@angular/core';
import { SelectorOpcionesComponent } from "../../components/SelectorOpciones.component";
import { CampoInputComponent } from "../../components/InputFiled.component";
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-ambiente',
  standalone: true,
  imports: [SelectorOpcionesComponent, CampoInputComponent],
  templateUrl: './ambiente.component.html',
  styleUrl: './ambiente.component.css'
})
export class AmbienteComponent {
  horaTemporal: string = '';

  versionAngularSeleccionado: string = '16';
  versionesAngular: SelectItem[] = [
    { label: 'Angular 15', value: '15' },
    { label: 'Angular 16', value: '16' },
    { label: 'Angular 17', value: '17' }
  ];

  versionStrapiSeleccionado: string = '4.6';
  versionesStrapi: SelectItem[] = [
    { label: 'Strapi v4.5', value: '4.5' },
    { label: 'Strapi v4.6', value: '4.6' },
    { label: 'Strapi v4.7', value: '4.7' }
  ];

  modoDespligueSeleccionado: string = 'qa';
  modosDespligues: SelectItem[] = [
    { label: 'Desarrollo', value: 'dev' },
    { label: 'Pruebas', value: 'qa' },
    { label: 'Producción', value: 'prod' }
  ];

}
