import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/modules/admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AppLayout,
    loadChildren: () => import('./app/modules/admin/admin.routes'),
  },
  {
    path: 'landing',
    loadChildren: () => import('./app/modules/user/user.routes'),
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
    loadChildren: () => import('./app/modules/auth/auth.routes'),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
