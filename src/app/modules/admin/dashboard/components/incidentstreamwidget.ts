import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../../../layout/service/layout.service';



@Component({
    standalone: true,
    selector: 'app-incident-stream-widget',
    imports: [ChartModule],
    template: `
    <div class="card mb-4">
        <div class="font-semibold text-xl mb-4">Flujo de Reportes de Incidencias</div>
        <p-chart type="bar" [data]="chartData" [options]="chartOptions" class="h-80" />
    </div>`
})
export class IncidentStreamWidget {
    chartData: any;
    chartOptions: any;
    subscription!: Subscription;

    constructor(public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const borderColor = documentStyle.getPropertyValue('--surface-border');
        const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

        this.chartData = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Errores Reportados',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                    data: [25, 45, 32, 60],
                    barThickness: 32
                },
                {
                    type: 'bar',
                    label: 'Errores Resueltos',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
                    data: [10, 30, 28, 50],
                    barThickness: 32
                },
                {
                    type: 'bar',
                    label: 'Errores Pendientes',
                    backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                    data: [15, 15, 4, 10],
                    borderRadius: {
                        topLeft: 8,
                        topRight: 8,
                        bottomLeft: 0,
                        bottomRight: 0
                    },
                    borderSkipped: false,
                    barThickness: 32
                }
            ]
        };

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: 'transparent',
                        borderColor: 'transparent'
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textMutedColor
                    },
                    grid: {
                        color: borderColor,
                        borderColor: 'transparent',
                        drawTicks: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
