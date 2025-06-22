import { Routes } from '@angular/router';
import { gestion as GestionPage } from './gestion/gestion';
import { parametrizacion as ParametrizacionPage } from './parametrizacion/parametrizacion';
import { incidents as IncidenciasPage } from './incidents/incidents';
import { base_conocimiento as BaseConocimientoPage } from './base_conocimiento/base_conocimiento';
import { user_management as UserManagementPage } from './gestion_usuario/user_management';
import { ModificacionComponent as ModificacionPage } from './modificacion/modificacion.component';
import { BugReport as BugReportePage } from './bug_reports/bug_reports';
import { code_smells as CodeSmellsPage } from './code_smells/code_smells';
import { Dashboard as DashboardPage} from './dashboard/dashboard.component'


export default [
  { path: '', redirectTo: 'dashboard', pathMatch:'full' },
  { path: 'user', component: UserManagementPage },
  { path: 'code_smells', component: CodeSmellsPage },
  { path: 'gestion', component: GestionPage },
  { path: 'parametrizacion', component: ParametrizacionPage },
  { path: 'bug_reports', component: BugReportePage },
  { path: 'incidents', component: IncidenciasPage },
  { path: 'base_conocimiento', component: BaseConocimientoPage },
  { path: 'modifications', component: ModificacionPage },
  { path: 'dashboard', component: DashboardPage },
] as Routes;
