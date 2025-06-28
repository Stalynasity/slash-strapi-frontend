import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService} from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { FileUpload } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ProgressBar } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-analisis-vacio',
  standalone: true,
  imports: [FileUploadModule,ToastModule, ProgressBar, BadgeModule, CommonModule, ButtonModule, FileUpload],
  templateUrl: './analisis-vacio.component.html',
  styleUrl: './analisis-vacio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnalisisVacioComponent {
    uploadedFiles: any[] = [];

  onUpload(event: { files: any[] }) {
    // Guarda los archivos subidos para mostrarlos en la lista
    this.uploadedFiles = event.files;
  }
}
