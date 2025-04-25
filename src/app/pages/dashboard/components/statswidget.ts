import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-stats-widget',
    imports: [CommonModule],
    template: ` <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Total Bugs -->
        <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-900 shadow-sm">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-sm text-gray-500">Total Bugs</p>
                    <h2 class="text-2xl font-bold text-surface-900 dark:text-white">42</h2>
                    <p class="text-red-500 text-sm">-12% <span class="text-gray-500">vs last week</span></p>
                    <p class="text-gray-500 text-sm">Active issues in tracking</p>
                </div>
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="pi pi-bug text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>

        <!-- Code Smells -->
        <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-900 shadow-sm">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-sm text-gray-500">Code Smells</p>
                    <h2 class="text-2xl font-bold text-surface-900 dark:text-white">23</h2>
                    <p class="text-green-600 text-sm">+8% <span class="text-gray-500">vs last week</span></p>
                    <p class="text-gray-500 text-sm">Potential improvements needed</p>
                </div>
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="pi pi-code text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>

        <!-- Critical Issues -->
        <div class="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-900 shadow-sm">
            <div class="flex items-center justify-between mb-4">
                <div>
                    <p class="text-sm text-gray-500">Critical Issues</p>
                    <h2 class="text-2xl font-bold text-surface-900 dark:text-white">5</h2>
                    <p class="text-red-500 text-sm">-2% <span class="text-gray-500">vs last week</span></p>
                    <p class="text-gray-500 text-sm">High-priority bugs</p>
                </div>
                <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="pi pi-exclamation-triangle text-blue-500 text-xl"></i>
                </div>
            </div>
        </div>
    </div>`
})
export class StatsWidget {}
