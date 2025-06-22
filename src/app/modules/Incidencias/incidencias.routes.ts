import { Routes } from '@angular/router';


export default [
  { path: '', redirectTo: 'lista-incidencias', pathMatch: 'full' },
  {
    path: 'lista-incidencias',
    loadComponent: () =>
      import('./incidencias.component').then(
        (m) => m.IncidentesModuleComponent
      ),
  },
] as Routes;
