import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-lista-reportes',
  standalone: true,
  imports: [
    DatePickerModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    TableModule,
    TagModule,
    TooltipModule,
    ChartModule,
    DropdownModule,
    SelectModule,
  ],
  templateUrl: './lista-reportes.component.html',
  styleUrl: './lista-reportes.component.css',
})
export class ListaReportesComponent {
  constructor() {
    this.initChartOptions();
  }

  filtros = {
    desde: null as Date | null,
    hasta: null as Date | null,
    modulo: '',
    estado: '',
  };

  lineChartOptions: any;

  agrupacionTemporal: 'dia' | 'mes' | 'anio' = 'dia';

  modulosDisponibles = [
    { label: 'Todos', value: '' },
    { label: 'Login', value: 'Login' },
    { label: 'Inventario', value: 'Inventario' },
    { label: 'Ventas', value: 'Ventas' },
    { label: 'Reportes', value: 'Reportes' },
    { label: 'Facturación', value: 'Facturación' },
  ];

  estadosDisponibles = [
    { label: 'Todos', value: '' },
    { label: 'Pendiente', value: 'Pendiente' },
    { label: 'En proceso', value: 'En proceso' },
    { label: 'Resuelto', value: 'Resuelto' },
    { label: 'Bloqueada', value: 'Bloqueada' },
    { label: 'Cerrada', value: 'Cerrada' },
  ];

  tipoGrafico: 'line' | 'bar' | 'pie' = 'line';


  lineData: any;

  // lineChartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       position: 'bottom'
  //     }
  //   }
  // };

  initChartOptions(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.lineChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--p-primary-500'),
          borderColor: documentStyle.getPropertyValue('--p-primary-500'),
          tension: 0.4,
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
          borderColor: documentStyle.getPropertyValue('--p-primary-200'),
          tension: 0.4,
        },
      ],
    };
  }

  todasIncidencias = [
    {
      codigo: 'INC-001',
      titulo: 'Pantalla congelada',
      modulo: 'Usuarios',
      estado: 'Cerrada',
      fecha: '2025-03-04',
    },
    {
      codigo: 'INC-002',
      titulo: 'Problemas con reporte PDF',
      modulo: 'Facturaci\u00f3n',
      estado: 'Bloqueada',
      fecha: '2025-06-05',
    },
    {
      codigo: 'INC-003',
      titulo: 'Pantalla congelada',
      modulo: 'Reportes',
      estado: 'Resuelto',
      fecha: '2025-04-11',
    },
    {
      codigo: 'INC-004',
      titulo: 'Problemas con reporte PDF',
      modulo: 'Ventas',
      estado: 'En proceso',
      fecha: '2025-05-03',
    },
    {
      codigo: 'INC-005',
      titulo: 'Usuario no encontrado',
      modulo: 'Login',
      estado: 'Pendiente',
      fecha: '2025-02-21',
    },
    {
      codigo: 'INC-006',
      titulo: 'Fallo en autenticaci\u00f3n',
      modulo: 'Login',
      estado: 'Pendiente',
      fecha: '2025-03-07',
    }
  ];

  misIncidencias = this.todasIncidencias.slice(0, 3);

  buscarReportes(): void {
    const desde = this.filtros.desde ? new Date(this.filtros.desde) : null;
    const hasta = this.filtros.hasta ? new Date(this.filtros.hasta) : null;
    const modulo = this.filtros.modulo.toLowerCase();



    const filtradas = this.todasIncidencias.filter((inc) => {
      const fecha = new Date(inc.fecha);
      const cumpleFecha =
        (!desde || fecha >= desde) && (!hasta || fecha <= hasta);
      const cumpleModulo = !modulo || inc.modulo.toLowerCase().includes(modulo);
      return cumpleFecha && cumpleModulo;
    });

    const agrupado: { [clave: string]: { [estado: string]: number } } = {};

    filtradas.forEach((inc) => {
      const fecha = new Date(inc.fecha);
      let clave = '';
      switch (this.agrupacionTemporal) {
        case 'anio':
          clave = fecha.getFullYear().toString();
          break;
        case 'mes':
          clave = `${fecha.getFullYear()}-${String(
            fecha.getMonth() + 1
          ).padStart(2, '0')}`;
          break;
        default:
          clave = fecha.toISOString().split('T')[0];
          break;
      }

      if (!agrupado[clave]) agrupado[clave] = {};
      agrupado[clave][inc.estado] = (agrupado[clave][inc.estado] || 0) + 1;
    });

    const fechasOrdenadas = Object.keys(agrupado).sort();
    const estadosUnicos = new Set<string>();
    fechasOrdenadas.forEach((f) =>
      Object.keys(agrupado[f]).forEach((e) => estadosUnicos.add(e))
    );

    const datasets = Array.from(estadosUnicos).map((estado) => ({
      label: estado,
      data: fechasOrdenadas.map((f) => agrupado[f][estado] || 0),
      fill: false,
      tension: 0.3,
      borderColor: this.getColorEstado(estado),
    }));

    this.lineData = {
      labels: fechasOrdenadas,
      datasets,
    };
  }

  resetFiltros(): void {
    this.filtros = {
      desde: null,
      hasta: null,
      modulo: '',
      estado: '',
    };
    this.buscarReportes();
  }

  verSugerencias(incidencia: any): void {
    console.log(`🔍 Ver sugerencias para ${incidencia.codigo}`);
  }

  documentarIncidencia(incidencia: any): void {
    console.log(`📝 Documentar incidencia ${incidencia.codigo}`);
  }

  generarSolucionIA(incidencia: any): void {
    console.log(`🤖 Generar solución IA para ${incidencia.codigo}`);
  }

  getSeveridadEstado(
    estado: string
  ): 'success' | 'info' | 'warn' | 'danger' | 'secondary' {
    switch (estado.toLowerCase()) {
      case 'pendiente':
        return 'warn';
      case 'en proceso':
        return 'info';
      case 'resuelto':
      case 'cerrada':
        return 'success';
      case 'bloqueada':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  getColorEstado(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'pendiente':
        return '#f59e0b'; // amarillo
      case 'resuelto':
        return '#10b981'; // verde
      case 'en proceso':
        return '#3b82f6'; // azul
      case 'bloqueada':
        return '#ef4444'; // rojo
      default:
        return '#9ca3af'; // gris
    }
  }
}
