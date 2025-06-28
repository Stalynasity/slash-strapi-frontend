import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  input,
  model,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { FormBuilder, FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-modal-nuevo-code-smell',
  standalone: true,
    imports: [
      CommonModule,
      FormsModule,
      DialogModule,
      CheckboxModule,
      AccordionModule,
      InputTextModule,
      TextareaModule,
      ButtonModule
    ],
  templateUrl: './modal-nuevo-code-smell.component.html',
  styleUrl: './modal-nuevo-code-smell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalNuevoCodeSmellComponent {
  visibleModalNuevoCodeSmell = model(false);

  guardarNuevoCodeSmell() {

  }
}
