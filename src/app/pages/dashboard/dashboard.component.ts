import { Component } from '@angular/core';
import { IssuesSummaryWidget } from './components/issuessummarywidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { IncidentStreamWidget } from './components/incidentstreamwidget';
import { DashboardHeader } from "./components/dashboardHeader";
import { RecentActivityWidget } from './components/recentactivitywidget';
import { ProjectsProgressWidget } from './components/projectsprogresswidget';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsWidget, RecentSalesWidget, IncidentStreamWidget, IssuesSummaryWidget, DashboardHeader, RecentActivityWidget, ProjectsProgressWidget],
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
              <app-recent-activity-widget />
              <app-incident-stream-widget/>
                <!-- aca podemos poner alado con el otro -->
            </div>
            <div class="col-span-12 xl:col-span-6">
              <app-issues-summary-widget />
              <app-projects-progress-widget />
            </div>
        </div>
    `
})
export class Dashboard { }
