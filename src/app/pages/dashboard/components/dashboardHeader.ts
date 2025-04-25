import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 flex-wrap mb-6">
          <!-- Título -->
          <div>
              <h2 class="text-2xl font-semibold text-surface-900 dark:text-white">Bug Tracker</h2>
              <p class="text-gray-500 text-sm">Monitor and manage development issues</p>
          </div>

          <!-- Buscador y botón alineados -->
          <div class="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <!-- Buscador -->
              <div class="relative flex-1 lg:flex-none w-full lg:w-80">
                  <i
                        class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        (click)="search(onSearch.value)"
                  ></i>
                  <input
                      #onSearch
                      type="text"
                      placeholder="Search..."
                      class="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                      (keydown.enter)="search(onSearch.value)"
                  />
              </div>

              <!-- Botón -->
              <button
                  pButton
                  label="New Report"
                  icon="pi pi-plus"
                  class="px-6 py-2 bg-[var(--primary-color)] text-white rounded-md hover:bg-[var(--primary-color-hover)] transition-shadow shadow-md border border-[var(--primary-color)]"
              ></button>
          </div>
      </div>
  `
})
export class DashboardHeader {
  search(value: string) {
    console.log('Buscando:', value);
    // Aquí va tu lógica real (ej: filtrar tabla, llamar API, etc.)
  }
}
