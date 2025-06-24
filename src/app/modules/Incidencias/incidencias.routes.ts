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
  {
    path: 'detalle-incidencias/:id',
    loadComponent: () =>
      import('./ver-incidencias/ver-incidencias.component').then(
        (m) => m.VerIncidenciasComponent
      ),
  },
] as Routes;
