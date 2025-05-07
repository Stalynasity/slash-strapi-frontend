// solution-management.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-solution-management',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
<div class="card space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-800">Implemented Solutions</h1>
        <button pButton icon="pi pi-lightbulb" label="Generate AI Solution" class="p-button-sm p-button-outlined"></button>
      </div>

      <!-- Tabla de soluciones -->
      <div class="overflow-x-auto">
        <table class="min-w-full text-sm text-left border-collapse">
          <thead class="text-gray-500 border-b">
            <tr>
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Code Smell</th>
              <th class="px-4 py-2">Solución Propuesta</th>
              <th class="px-4 py-2">Estado</th>
              <th class="px-4 py-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody class="text-gray-800">
            <tr class="border-b hover:bg-gray-50">
              <td class="px-4 py-2">SOL-001</td>
              <td class="px-4 py-2">CS-001: Método excesivamente largo</td>
              <td class="px-4 py-2">Refactorizar usando el patrón Strategy</td>
              <td class="px-4 py-2">
                <span class="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">Implementada</span>
              </td>
              <td class="px-4 py-2 text-center">
                <button pButton icon="pi pi-file" label="Ver Detalles" class="p-button-sm p-button-outlined"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-lg font-semibold text-gray-700 mt-8">Soluciones Generadas por IA</h2>

      <!-- Cards de IA -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border rounded-lg p-4 shadow-sm bg-white">
          <h3 class="font-semibold text-gray-900">Extract Method Refactoring</h3>
          <p class="text-sm text-gray-600 mt-1">Break down the long method into smaller, focused methods</p>
          <div class="flex gap-2 mt-3 text-xs">
            <span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">Medium</span>
            <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">45–60 min</span>
          </div>
          <button pButton label="View Solution" class="mt-4 w-full p-button-outlined p-button-sm"></button>
        </div>

        <div class="border rounded-lg p-4 shadow-sm bg-white">
          <h3 class="font-semibold text-gray-900">Apply Strategy Pattern</h3>
          <p class="text-sm text-gray-600 mt-1">Use the Strategy pattern to handle different authentication methods</p>
          <div class="flex gap-2 mt-3 text-xs">
            <span class="bg-orange-200 text-orange-800 px-2 py-0.5 rounded">High</span>
            <span class="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">1–2 hours</span>
          </div>
          <button pButton label="View Solution" class="mt-4 w-full p-button-outlined p-button-sm"></button>
        </div>
      </div>
    </div>
  `
})
export class SolutionManagementCodeComponent {}
