import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { Issue, WidgetService } from '../../../../core/services/widget.Service';

@Component({
  selector: 'app-recent-sales-widget',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, DialogModule],
  template: `
    <div class="card">
      <div class="font-semibold text-xl mb-4">Problemas recientes</div>
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
            <tr *ngFor="let issue of issues" class="border-b">
              <td class="px-4 py-2">{{ issue.id }}</td>
              <td class="px-4 py-2">{{ issue.title }}</td>
              <td class="px-4 py-2">
                <span
                  class="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs"
                  >{{ issue.type }}</span
                >
              </td>
              <td class="px-4 py-2">
                <span
                  class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                  >{{ issue.priority }}</span
                >
              </td>
              <td class="px-4 py-2">
                <span
                  class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                  >{{ issue.status }}</span
                >
              </td>
              <td class="px-4 py-2">{{ issue.owner }}</td>
              <td class="px-4 py-2">{{ issue.createdAt }}</td>
              <td class="px-4 py-2">
                <button
                  pButton
                  pRipple
                  icon="pi pi-qrcode"
                  class="p-button-sm p-button-text"
                  (click)="open(issue)"
                ></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p-dialog
        header="Detalles del Problema"
        [(visible)]="display"
        [breakpoints]="{ '900px': '75vw' }"
        [style]="{ width: '60vw' }"
        [modal]="true"
      >
        <div class="grid grid-cols-12 gap-4">
          <!-- Información principal -->
          <div class="col-span-12 md:col-span-8">
            <h2 class="text-xl font-bold mb-2">{{ selectedIssue?.title }}</h2>
            <div class="flex items-center gap-2 mb-4">
              <span class="text-gray-500 text-sm">Código:</span>
              <span class="text-blue-600 font-semibold text-sm">{{
                selectedIssue?.id
              }}</span>
            </div>
            <div class="flex items-center gap-2 mb-4">
              <span class="text-gray-500 text-sm">Responsable:</span>
              <span class="text-blue-600 font-semibold text-sm">{{
                selectedIssue?.owner
              }}</span>
            </div>
            <div class="flex items-center gap-2 mb-4">
              <span class="text-gray-500 text-sm">Fecha:</span>
              <span class="text-gray-600 text-sm">{{
                selectedIssue?.createdAt
              }}</span>
            </div>

            <h3 class="text-md font-semibold mb-2">Descripción</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              {{
                selectedIssue?.descripcion || 'No hay descripción disponible.'
              }}
            </p>

            <h3 class="text-md font-semibold mb-2">Imágenes</h3>
            <div class="flex gap-2">
              <img
                src="https://primefaces.org/cdn/primeng/images/demo/product/bug.png"
                alt="Bug evidencia"
                class="w-24 h-24 object-cover rounded shadow-md"
              />
              <!-- Aquí podrías renderizar varias imágenes -->
            </div>
          </div>

          <!-- Código QR y compartir -->
          <div class="col-span-12 md:col-span-4 flex flex-col items-center">
            <!-- QR solo si está disponible -->
            <img
              *ngIf="selectedIssue"
              [src]="qrCodeUrl"
              alt="QR"
              class="w-32 h-32 mx-auto"
            />
            <p class="text-xs text-gray-500">
              Escanea el QR para abrir en tu dispositivo móvil
            </p>

            <!-- Sección de botones de compartir SIEMPRE visible -->
            <div class="w-full flex flex-col gap-2 pt-2">
              <button
                pButton
                label="Compartir por correo"
                icon="pi pi-envelope"
                class="w-full p-button-sm p-button-outlined"
                (click)="handleShare('email')"
              ></button>

              <button
                pButton
                label="Compartir por WhatsApp"
                icon="pi pi-whatsapp"
                class="w-full p-button-sm p-button-outlined"
                (click)="handleShare('whatsapp')"
              ></button>

              <button
                pButton
                label="Compartir por Telegram"
                icon="pi pi-send"
                class="w-full p-button-sm p-button-outlined"
                (click)="handleShare('telegram')"
              ></button>
            </div>

            <p class="text-xs text-gray-400 text-center mt-4">
              Escanea el código QR para ver el incidente en tu móvil.
            </p>
          </div>
        </div>

        <ng-template #footer>
          <p-button label="Cerrar" (click)="close()"></p-button>
        </ng-template>
      </p-dialog>
    </div>
  `,
})
export class RecentSalesWidget {
  display: boolean = false;
  issues: Issue[] = [];
  selectedIssue: Issue | null = null;

  constructor(private issuesService: WidgetService) {
    this.issues = this.issuesService.getIssues();
    console.log(this.issues);
  }

  open(issue: Issue) {
    this.selectedIssue = issue;
    this.display = true;
  }

  close() {
    this.display = false;
    this.selectedIssue = null;
  }

  get qrCodeUrl(): string {
    if (!this.selectedIssue?.id) return '';
    const data = encodeURIComponent(
      window.location.origin + `/bug/${this.selectedIssue.id}`
    );
    return `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=150x150`;
  }

  handleShare(type: 'email' | 'whatsapp' | 'telegram') {
    if (!this.selectedIssue) return;

    const subject = encodeURIComponent(
      `Información del incidente ${this.selectedIssue.id}: ${this.selectedIssue.title}`
    );
    const body = encodeURIComponent(
      `Descripción: ${this.selectedIssue.descripcion}\nVer detalle del incidente.`
    );
    const urlQr = window.location.origin + `/bug/${this.selectedIssue.id}`; // Ajusta si tu ruta real es distinta

    if (type === 'email') {
      window.open(
        `mailto:?subject=${subject}&body=${body}%0A${urlQr}`,
        '_blank'
      );
    }
    if (type === 'whatsapp') {
      window.open(
        `https://wa.me/?text=${subject}%0A${body}%0A${urlQr}`,
        '_blank'
      );
    }
    if (type === 'telegram') {
      window.open(
        `https://t.me/share/url?url=${urlQr}&text=${subject}%0A${body}`,
        '_blank'
      );
    }
  }
}
