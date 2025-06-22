import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterWidget } from './component/footerwidget';
import { TopbarWidget } from './components/topbarwidget.component';



@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterModule, TopbarWidget, FooterWidget],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 min-h-screen flex flex-col">
    <topbar-widget class="py-5 px-6 mx-0 md:mx-10 lg:mx-16 xl:mx-20 lg:px-0 flex items-center justify-between relative lg:static" />
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>

      <footer-widget />
    </div>
  `
})
export class LandingLayout {}
