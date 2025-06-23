// modal-asociar-code-smell.component.ts
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

@Component({
  selector: 'app-modal-asociar-code-smell',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    CheckboxModule,
    AccordionModule,
    InputTextModule,
    TextareaModule,
  ],
  templateUrl: './modal-asociar-code-smell.component.html',
  styleUrl: './modal-asociar-code-smell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAsociarCodeSmellComponent {
  visibleModalAsociarCodeSmell = model(false);
  form = inject(FormBuilder);
}
