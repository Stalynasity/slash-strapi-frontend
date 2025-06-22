import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TextareaModule } from 'primeng/textarea'; // <-- el nuevo correcto
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-comentario-seguimiento',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule, RippleModule, TextareaModule, AvatarModule],
    templateUrl: './comentario_seguimiento.html',
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
