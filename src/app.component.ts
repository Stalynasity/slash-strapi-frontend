// src/app/app.component.ts
import { Component, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../../slash-strapi-frontend/src/app/core/services/auth.service';

import { AuthInterceptor } from '../../slash-strapi-frontend/src/app/core/interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,   // ← aquí importas el módulo HTTP
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit{
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Modern browsers: PERF_NAVIGATION_TYPE_RELOAD o entries API
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload = navEntries.length
      ? navEntries[0].type === 'reload'
      : // fallback antiguo:
        (performance as any).navigation?.type === (performance as any).navigation?.TYPE_RELOAD;

    if (isReload) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }

}