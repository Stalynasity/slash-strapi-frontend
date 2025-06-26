import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-reportes',
  standalone: true,
  imports: [ DatePickerModule, CardModule, ButtonModule, InputTextModule, FormsModule, CommonModule ],
  templateUrl: './lista-reportes.component.html',
  styleUrl: './lista-reportes.component.css'
})
export class ListaReportesComponent {
  filtros = {
    desde: null as Date | null,
    hasta: null as Date | null,
    modulo: ''
  };

  buscarReportes() {
    console.log('🔎 Filtros aplicados:', this.filtros);
    // Aquí llamas a tu servicio para traer datos según filtros
  }

  resetFiltros(): void {
    this.filtros = {
      desde: null,
      hasta: null,
      modulo: '',
    };
  }
}
