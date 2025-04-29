import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard.component';
import { LandingLayout } from './app/landing/LandingLayout';
import { LandingHomePage } from './app/landing/home/home';

export const routes: Routes = [
  {
    path: 'admin',
    component: AppLayout,
    children: [
      { path: '', component: Dashboard },{ path: '', component: Dashboard },
      {path : 'pages', loadChildren: () => import('./app/pages/pages.routes')},
    ]
  },
  // { path: 'landing', component: LandingLayout },

  {
    path: 'landing',
    loadChildren: () => import('./app/landing/landing.routes').then(m => m.landingRoutes)
  },

  { path: 'error', loadComponent: () => import('./app/shared/components/error.component').then(m => m.ErrorComponent), },
  { path: 'denegado', loadComponent: () => import('./app/shared/components/access-denied.component').then(m => m.AccessDeniedComponent), },
  { path: 'auth', loadChildren: () => import('./app/pages/auth/login.route') },

  {
    path: '**', redirectTo: 'login' // o puedes redirigir a un componente de error
  }
];
