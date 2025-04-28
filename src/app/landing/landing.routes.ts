import { Routes } from '@angular/router';
import { LandingLayout } from './LandingLayout';
import { LandingHomePage } from './home/home';import { ErroresAsignados } from './errores_asignados/errores_asignados';
import { DetalleErrores } from './detalle_errores/detalles_errores';
import { SugerenciaIA } from './sugerencia_ia/sugerencia';
import { ProyectStatus } from './proyecto_status/proyecto_status';
1

export const landingRoutes: Routes = [
  {
    path: '',
    component: LandingLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: LandingHomePage },
      { path: 'errores_asignados', component: ErroresAsignados },
      { path: 'detalles_errores', component: DetalleErrores },
      { path: 'comentarios_seguimiento',  component: ErroresAsignados },
      { path: 'sugerencia_ia', component: SugerenciaIA },
      { path: 'proyecto_status', component: ProyectStatus },
    ]
  }
];
