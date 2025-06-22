import { Routes } from '@angular/router';
import { parametrizacion as ParametrizacionPage } from './parametrizacion/parametrizacion';
import { user_management as UserManagementPage } from './gestion_usuario/user_management';
import { ModificacionComponent as ModificacionPage } from './modificacion/modificacion.component';
import { Dashboard as DashboardPage} from './dashboard/dashboard.component'


export default [
  { path: '', redirectTo: 'dashboard', pathMatch:'full' },
  { path: 'user', component: UserManagementPage },
  { path: 'parametrizacion', component: ParametrizacionPage },
  { path: 'modifications', component: ModificacionPage },
  { path: 'dashboard', component: DashboardPage },
] as Routes;
