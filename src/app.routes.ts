import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';

export const routes: Routes = [
  {
    path: 'admin',
    component: AppLayout,
    loadChildren: () => import('./app/modules/admin/admin.routes'),
  },
  {
    path: 'models',
    component: AppLayout,
    loadChildren: () => import('./app/modules/modules.routes'),
  },
  {
    path: 'error',
    loadComponent: () => import('./app/shared/components/error.component'),
  },
  {
    path: 'denied',
    loadComponent: () =>
      import('./app/shared/components/access-denied.component'),
  },
  {
    path: 'auth',
    loadChildren: () => import('./app/auth/auth.routes'),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
