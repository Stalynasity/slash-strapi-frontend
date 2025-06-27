import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG modules
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';

// Custom components
import { ModalAsociarCodeSmellComponent } from '../modal-asociar-code-smell/modal-asociar-code-smell.component';
import { ModalNuevoCodeSmellComponent } from '../modal-nuevo-code-smell/modal-nuevo-code-smell.component';
import { MenuItem } from 'primeng/api';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

// Data interface
interface AnalisisResultado {
  id: number;
  archivo: string;
  linea: string;
  tipoSmell: string;
  nivel: string;
}

@Component({
  selector: 'app-analisis-resultado',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgClass,
    TableModule,
    DialogModule,
    CheckboxModule,
    TieredMenuModule,
    ButtonModule,
    ModalAsociarCodeSmellComponent,
    ModalNuevoCodeSmellComponent,
    PaginatorModule
  ],
  templateUrl: './analisis-resultado.component.html',
  styleUrls: ['./analisis-resultado.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalisisResultadoComponent implements OnInit {
  // --- Signals for modal visibility ---
  visibleModalAsociarCodeSmell = signal(false);
  visibleModalNuevoCodeSmell = signal(false);
  first: number = 0;
  rows: number = 10;

  // --- Menu items ---
  items: MenuItem[] = [];

  // --- Table data mockup ---
  mockupAnalisisResultado: AnalisisResultado[] = [
    { id: 1, archivo: 'AppController.cs', linea: '42',  tipoSmell: 'Long Method',  nivel: 'Medio' },
    { id: 2, archivo: 'UserService.ts',   linea: '128', tipoSmell: 'God Class',    nivel: 'Alto' },
    { id: 3, archivo: 'utils.js',         linea: '10',  tipoSmell: 'Duplicate Code', nivel: 'Bajo' },
    { id: 4, archivo: 'PaymentProcessor.java', linea: '215', tipoSmell: 'Data Clump', nivel: 'Medio' },
    { id: 5, archivo: 'OrderRepository.py',    linea: '87',  tipoSmell: 'Feature Envy', nivel: 'Alto' }
  ];

  // --- Lifecycle hooks ---
  ngOnInit(): void {
    this.initializeMenuItems();
  }

  // --- Menu initialization ---
  private initializeMenuItems(): void {
    this.items = [
      {
        label: 'Nueva incidencia',
        icon: 'pi pi-file',
        command: () => this.nuevaIncidencia()
      },
      {
        label: 'Asociar a incidencia',
        icon: 'pi pi-file-edit',
        command: () => this.asociarIncidencia()
      }
    ];
  }

  // --- Event handlers ---
  private nuevaIncidencia(): void {
    this.visibleModalNuevoCodeSmell.set(true);
  }

  private asociarIncidencia(): void {
    this.visibleModalAsociarCodeSmell.set(true);
  }
    onPageChange(event: PaginatorState) {
      this.first = event.first ?? 0;
      this.rows = event.rows ?? 10;
  }
}
