import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { DashboardHeader } from "./components/dashboardHeader";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsWidget, RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget, DashboardHeader],
  template: `
        <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12">
            <app-dashboard-header />
        </div>
            <div class="col-span-12">
                <app-stats-widget />
            </div>
            <div class="col-span-12">
              <app-recent-sales-widget />
          </div>
            <div class="col-span-12 xl:col-span-6">
                <app-best-selling-widget />
                <!-- aca podemos poner alado con el otro -->
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div>
        </div>
    `
})
export class Dashboard { }
