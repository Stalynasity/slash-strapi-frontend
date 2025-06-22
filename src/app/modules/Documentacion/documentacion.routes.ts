import { Routes } from '@angular/router';


export default [
  { path: '', redirectTo: 'lista-documentacion', pathMatch: 'full' },
  {
    path: 'lista-documentacion',
    loadComponent: () =>
      import('./documentacion.component').then(
        (m) => m.DocumentacionModuleComponent
      ),
  },
] as Routes;
