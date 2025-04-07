import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/auth/login.route').then(m => m.LOGIN_ROUTES),
  },
  {
    path: 'error',
    loadComponent: () => import('./shared/components/error.component').then(m => m.ErrorComponent),
  },
  {
    path: 'denegado',
    loadComponent: () => import('./shared/components/access-denied.component').then(m => m.AccessDeniedComponent),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login' // o puedes redirigir a un componente de error
  }
];
