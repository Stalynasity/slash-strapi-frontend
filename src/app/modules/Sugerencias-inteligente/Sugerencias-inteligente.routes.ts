import { Routes } from '@angular/router';

export default [
  { path: '', redirectTo: 'busqueda-incidencia', pathMatch: 'full' },
  {
    path: 'busqueda-incidencia',
    loadComponent: () =>
      import('./busqueda-incidencia/busqueda-incidencia.component').then(
        (m) => m.BusquedaIncidenciaComponent
      ),
  },
  {
    path: 'ver',
    loadComponent: () =>
      import('./ver-sugerencia-inteligente/ver-sugerencia-inteligente.component').then(
        (m) => m.VerSugerenciaInteligenteComponent
      ),
  },
] as Routes;
