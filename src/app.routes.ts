import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {path: '', component: Dashboard }
    ]
  },
  {
    path: 'error',
    loadComponent: () => import('./app/shared/components/error.component').then(m => m.ErrorComponent),
  },
  {
    path: 'denegado',
    loadComponent: () => import('./app/shared/components/access-denied.component').then(m => m.AccessDeniedComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('./app/pages/auth/login.route')
  },
  {
    path: '**',
    redirectTo: 'login' // o puedes redirigir a un componente de error
  }
];
