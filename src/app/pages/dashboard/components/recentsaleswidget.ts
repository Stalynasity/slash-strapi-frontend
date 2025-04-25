import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-recent-sales-widget',
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule],
    template: `
        <div class="card">
            <div class="font-semibold text-xl mb-4">Recent Issues</div>
            <div class="overflow-auto">
                <table class="min-w-full table-auto text-sm text-left border-collapse">
                    <thead class="text-gray-500 border-b">
                        <tr>
                            <th class="px-4 py-2">ID</th>
                            <th class="px-4 py-2">Título</th>
                            <th class="px-4 py-2">Tipo</th>
                            <th class="px-4 py-2">Prioridad</th>
                            <th class="px-4 py-2">Estado</th>
                            <th class="px-4 py-2">Responsable</th>
                            <th class="px-4 py-2">Creado</th>
                            <th class="px-4 py-2">Ver</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="px-4 py-2">BUG-001</td>
                            <td class="px-4 py-2">Memory leak in user authentication</td>
                            <td class="px-4 py-2">
                                <span class="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">bug</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">high</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">resolved</span>
                            </td>
                            <td class="px-4 py-2">John Doe</td>
                            <td class="px-4 py-2">2024-04-18</td>
                            <td class="px-4 py-2">
                                <button pButton pRipple icon="pi pi-qrcode" class="p-button-sm p-button-text"></button>
                            </td>
                        </tr>
                        <tr class="border-b">
                            <td class="px-4 py-2">BUG-002</td>
                            <td class="px-4 py-2">Duplicate code in payment processing</td>
                            <td class="px-4 py-2">
                                <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">code-smell</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">medium</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">in-progress</span>
                            </td>
                            <td class="px-4 py-2">Jane Smith</td>
                            <td class="px-4 py-2">2024-04-17</td>
                            <td class="px-4 py-2"><button pButton pRipple icon="pi pi-qrcode" class="p-button-sm p-button-text"></button></td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2">BUG-003</td>
                            <td class="px-4 py-2">SQL injection vulnerability</td>
                            <td class="px-4 py-2">
                                <span class="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">security</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">high</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">resolved</span>
                            </td>
                            <td class="px-4 py-2">Mike Johnson</td>
                            <td class="px-4 py-2">2024-04-16</td>
                            <td class="px-4 py-2">
                                <button pButton pRipple icon="pi pi-qrcode" class="p-button-sm p-button-text"></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
})
export class RecentSalesWidget {}
