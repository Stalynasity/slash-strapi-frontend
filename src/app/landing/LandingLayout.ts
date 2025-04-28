import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarWidget } from './components/topbarwidget.component';
import { FooterWidget } from './components/footerwidget';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterModule, TopbarWidget, FooterWidget],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 min-h-screen flex flex-col">
      <topbar-widget class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static" />

      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>

      <footer-widget />
    </div>
  `
})
export class LandingLayout {}
