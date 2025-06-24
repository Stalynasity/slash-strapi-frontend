import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../service/layout.service';
import { AppConfigurator } from './app.configurator';
import { SkeletonModule } from 'primeng/skeleton';
import { AuthService } from '../../core/services/auth.service';
import { UserProfile } from '../../core/models/request/UserProfile-request.model';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, SkeletonModule,],
  template: `    <div class="layout-topbar">
      <!-- Content or Skeleton -->
      <ng-container *ngIf="!loading; else skeleton">
        <div class="layout-topbar-logo-container">
          <button
            class="layout-menu-button layout-topbar-action"
            (click)="layoutService.onMenuToggle()"
          >
            <i class="pi pi-bars"></i>
          </button>
          <a routerLink="/admin/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice">
            <g transform="translate(0,1024) scale(.1,-.1)">
              <path
                d="M2055 6556 c-281 -54 -512 -273 -579 -547 -19 -76 -21 -243 -5 -321 19 -95 81 -208 160 -292 83 -89 131 -122 598 -407 184 -112 349 -219 367 -238 88 -88 60 -251 -54 -318 l-47 -28 -485 -5 -484 -5 -92 -220 c-51 -121 -93 -226 -93 -233 -1 -11 110 -12 602 -10 675 4 649 2 807 80 67 34 103 61 170 128 140 140 207 284 217 471 9 156 -18 266 -100 396 -74 119 -151 177 -588 443 -221 135 -419 257 -440 272 -58 41 -82 97 -77 174 5 75 38 130 107 179 l43 30 491 5 490 5 89 219 c49 120 88 219 86 221 -2 1 -253 5 -558 8 -443 5 -569 3 -625 -7z" />
              <path
                d="M4280 5939 c-185 -24 -323 -117 -393 -266 -26 -57 -31 -81 -35 -168 -5 -118 11 -191 60 -268 61 -95 165 -154 443 -251 232 -80 277 -117 283 -235 5 -84 -18 -137 -80 -181 -63 -46 -137 -64 -258 -65 -144 0 -250 27 -437 112 -10 4 -13 -25 -13 -129 l0 -135 98 -31 c151 -48 205 -57 362 -56 166 1 241 15 356 68 100 47 174 118 222 215 37 75 37 75 37 206 0 127 -1 132 -33 197 -65 132 -174 203 -477 308 -203 71 -259 111 -274 196 -20 112 39 193 168 230 110 33 329 6 491 -59 l60 -25 0 133 c0 153 10 139 -128 174 -145 38 -310 48 -452 30z" />
              <path d="M5140 5110 l0 -820 140 0 140 0 0 820 0 820 -140 0 -140 0 0 -820z" />
              <path
                d="M7980 5110 l0 -820 140 0 140 0 0 434 0 434 46 26 c149 83 296 86 375 7 61 -60 63 -74 66 -508 l4 -393 135 0 135 0 -3 448 c-3 390 -6 454 -21 499 -54 162 -185 248 -377 246 -125 -1 -222 -40 -320 -130 l-40 -35 0 306 0 306 -140 0 -140 0 0 -820z" />
              <path
                d="M6075 5483 c-59 -5 -213 -31 -270 -46 l-50 -13 -3 -117 c-1 -64 -1 -117 0 -117 2 0 26 7 53 15 127 39 347 57 426 35 91 -25 138 -85 146 -184 l6 -64 -184 -7 c-208 -8 -293 -22 -369 -60 -122 -62 -180 -161 -180 -310 0 -111 26 -182 89 -245 145 -145 405 -141 589 8 l52 42 0 -65 0 -65 136 0 136 0 -4 433 c-4 400 -6 437 -25 493 -52 159 -161 238 -363 263 -83 11 -104 11 -185 4z m305 -787 l0 -114 -63 -40 c-113 -71 -230 -91 -314 -52 -57 25 -83 69 -83 140 0 69 25 112 81 140 58 30 107 38 252 39 l127 1 0 -114z" />
              <path
                d="M7259 5480 c-239 -27 -369 -154 -369 -360 0 -91 22 -158 70 -213 56 -63 135 -100 298 -138 202 -47 245 -75 245 -159 0 -53 -25 -87 -81 -113 -96 -45 -318 -18 -474 57 l-49 23 3 -126 3 -126 77 -22 c155 -44 338 -52 483 -21 127 27 220 94 267 193 23 51 28 73 28 141 0 200 -91 287 -379 361 -150 39 -206 64 -227 105 -28 54 -9 119 46 151 77 46 253 40 404 -13 47 -17 87 -30 90 -30 3 0 6 54 6 120 0 139 9 127 -122 153 -99 20 -227 27 -319 17z" />
            </g>
          </svg>
          </a>
        </div>

        <div class="layout-topbar-actions">
          <div class="layout-config-menu">
            <button
              type="button"
              class="layout-topbar-action"
              (click)="toggleDarkMode()"
            >
              <i
                [ngClass]="{
                  'pi ': true,
                  'pi-moon': layoutService.isDarkTheme(),
                  'pi-sun': !layoutService.isDarkTheme()
                }"
              ></i>
            </button>
            <div class="relative">
              <app-configurator />
            </div>
          </div>

          <button
            class="layout-topbar-menu-button layout-topbar-action"
            pStyleClass="@next"
            enterFromClass="hidden"
            enterActiveClass="animate-scalein"
            leaveToClass="hidden"
            leaveActiveClass="animate-fadeout"
            [hideOnOutsideClick]="true"
          >
            <i class="pi pi-ellipsis-v"></i>
          </button>

          <div class="text-right hidden md:block">
            <small class="text-xs text-gray-500">{{ roleName }}</small><br />
            <span class="font-medium text-sm">{{ maskedEmail }}</span>
          </div>

          <button class="layout-topbar-action" pTooltip="Cerrar sesión" (click)="cerrarSesion()">
            <i class="pi pi-sign-out"></i>
          </button>
        </div>
      </ng-container>

      <!-- Skeleton Template -->
      <ng-template #skeleton>
        <div class="layout-topbar-logo-container">
          <button class="layout-menu-button layout-topbar-action" pSkeleton shape="circle" style="width:2rem; height:2rem;"></button>
          <p-skeleton width="100px" height="50px"></p-skeleton>
        </div>
        <div class="layout-topbar-actions flex items-center space-x-4">
          <button class="layout-topbar-action" pSkeleton shape="circle" style="width:1.5rem; height:1.5rem;"></button>
          <p-skeleton width="2rem" height="1rem"></p-skeleton>
          <button class="layout-topbar-action" pSkeleton shape="circle" style="width:1.5rem; height:1.5rem;"></button>
        </div>
      </ng-template>
    </div>
  `,
})
export class AppTopbar implements OnInit {
  loading = true;
  items!: MenuItem[];
  roleName: string = '';
  maskedEmail: string = '';

  constructor(public layoutService: LayoutService,  private authService: AuthService,private router: Router, ) {

  }

  ngOnInit() {
    // Simulated loading delay - replace with real data fetch
    setTimeout(() => (this.loading = false), 1000);


  // fuerza la recarga desde sessionStorage
  this.authService.loadProfileFromStorage();

  const profile = this.authService.userProfile;
  if (profile) {
    this.roleName    = profile.role.name;
   // this.maskedEmail = this.maskEmail(profile.email);
   this.maskedEmail = profile.alias;
  }
  }

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }

 cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

   private maskEmail(email: string): string {
    const [localPart, domain] = email.split('@');
    return `${localPart}@${'*'.repeat(domain.length)}`;
  }
}
