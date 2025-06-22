import { ListaReportesComponent } from './Reportes/lista-reportes/lista-reportes.component';
import { Routes } from '@angular/router';
import { CodeSmellComponent } from './Analisis-codigo/code-smell/code-smell.component';
import { BusquedaIncidenciaComponent } from './Sugerencias-inteligente/busqueda-incidencia/busqueda-incidencia.component';


export default [
  { path: '', redirectTo: 'incidencias', pathMatch:'full' },

  //Incidencias
  { path: 'incidencias', loadChildren: () => import('./Incidencias/incidencias.routes') },
  { path: 'documentacion' , loadChildren: () => import('./Documentacion/documentacion.routes') },
  { path : 'analisis-codigo', component: CodeSmellComponent},
  { path : 'sugerencias-inteligente', component: BusquedaIncidenciaComponent},
  { path : 'reportes', component: ListaReportesComponent},


] as Routes;
