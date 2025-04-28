import { Routes } from '@angular/router';
import { user_management } from './gestion_usuario/user_management';
import { code_smells } from './code_smells/code_smells';
import { gestion } from './gestion/gestion';
import { parametrizacion } from './parametrizacion/parametrizacion';
import { incidents } from './incidents/incidents';
import { bug_reports } from './bug_reports/bug_reports';
import { ModificacionComponent } from './modificacion/modificacion.component';

export default [
    { path: 'user', component: user_management },
    { path: 'code_smells', component: code_smells },
    { path: 'gestion', component: gestion },
    { path: 'parametrizacion', component: parametrizacion },
    { path: 'bug_reports', component: bug_reports },
    { path: 'incidents', component: incidents },
    {path: 'modifications', component: ModificacionComponent}
] as Routes;
