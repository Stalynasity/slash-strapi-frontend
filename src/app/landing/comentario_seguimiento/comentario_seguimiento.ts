import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TextareaModule } from 'primeng/textarea'; // <-- el nuevo correcto
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-comentario-seguimiento',
    standalone: true,
    imports: [CommonModule, ButtonModule, RippleModule, TextareaModule, AvatarModule],
    template: `
        <div class="card p-6 shadow-md rounded-md">
            <h2 class="text-2xl font-semibold mb-6 text-surface-900 dark:text-white">Comentarios y Seguimiento</h2>

            <div class="flex flex-col gap-6 mb-8">
                <div *ngFor="let comment of comments" class="flex gap-4 items-start">
                    <p-avatar label="{{ comment.user[0] }}" shape="circle" class="bg-primary text-white"></p-avatar>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-semibold text-surface-900 dark:text-surface-0">{{ comment.user }}</span>
                            <span class="text-gray-400 text-xs">{{ comment.date }}</span>
                        </div>
                        <p class="text-surface-700 dark:text-surface-200 mt-1">{{ comment.content }}</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <label class="text-gray-500 text-sm">Agregar un comentario</label>
                <textarea
                    pTextarea
                    [(ngModel)]="newComment"
                    rows="3"
                    autoResize="true"
                    class="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    placeholder="Escribe tu comentario aquí..."
                ></textarea>
                <div class="flex justify-end">
                    <button
                        pButton
                        pRipple
                        label="Publicar"
                        (click)="addComment()"
                        [disabled]="!newComment.trim()"
                        class="bg-primary text-white rounded-md"
                    ></button>
                </div>
            </div>
        </div>
    `
})
export class ComentarioSeguimiento {
    comments = [
        { user: 'Ana', date: 'Hoy', content: 'Revisé el error, falta confirmar con QA.' },
        { user: 'Carlos', date: 'Ayer', content: 'Se aplicó un fix provisional.' }
    ];

    newComment: string = '';

    constructor() {}

    addComment() {
        if (this.newComment.trim()) {
            this.comments.unshift({
                user: 'Tú',
                date: 'Ahora',
                content: this.newComment.trim()
            });
            this.newComment = '';
        }
    }
}
