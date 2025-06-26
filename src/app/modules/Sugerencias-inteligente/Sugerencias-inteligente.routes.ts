import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'sugerencia',
    pathMatch: 'full',
  },
  {
    path: 'sugerencia',
    loadComponent: () =>
      import('./Sugerencias.module.component').then(
        (m) => m.SugerenciaModuleComponent
      ),
  },
  {
    path: 'ver',
    loadComponent: () =>
      import(
        './ver-sugerencia-inteligente/ver-sugerencia-inteligente.component'
      ).then((m) => m.VerSugerenciaInteligenteComponent),
  },
] as Routes;
