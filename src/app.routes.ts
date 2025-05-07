import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AppLayout,
    children: [
      { path: '', component: Dashboard },{ path: '', component: Dashboard },
      {path : 'pages', loadChildren: () => import('./app/admin/pages.routes')},
    ]
  },

  {
    path: 'landing',
    loadChildren: () => import('./app/landing/landing.routes').then(m => m.landingRoutes)
  },

  { path: 'error', loadComponent: () => import('./app/shared/components/error.component').then(m => m.ErrorComponent), },
  { path: 'denegado', loadComponent: () => import('./app/shared/components/access-denied.component').then(m => m.AccessDeniedComponent), },
  { path: 'auth', loadChildren: () => import('./app/admin/auth/login.route') },

  { path: '', redirectTo: 'landing/home', pathMatch: 'full' },

  {
    path: '**', redirectTo: 'login' // o puedes redirigir a un componente de error
  }
];
