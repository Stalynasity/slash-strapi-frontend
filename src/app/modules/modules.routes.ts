import { ListaReportesComponent } from './Reportes/lista-reportes/lista-reportes.component';
import { Routes } from '@angular/router';
import { BusquedaIncidenciaComponent } from './Sugerencias-inteligente/busqueda-incidencia/busqueda-incidencia.component';



export default [
  { path: '', redirectTo: 'incidencias', pathMatch:'full' },
  { path: 'incidencias', loadChildren: () => import('./Incidencias/incidencias.routes') },
  { path: 'documentacion' , loadChildren: () => import('./Documentacion/documentacion.routes') },
  { path : 'analisis-codigo', loadComponent: () => import('./Analisis-codigo/page/AnalisisCodigoPage.component')},
  { path : 'sugerencias-inteligente', loadChildren: () => import('./Sugerencias-inteligente/Sugerencias-inteligente.routes') },
  { path : 'reportes', component: ListaReportesComponent},


] as Routes;
