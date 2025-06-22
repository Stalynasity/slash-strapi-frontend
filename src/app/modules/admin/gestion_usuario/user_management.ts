import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { User } from '../../../core/models/user.model';



@Component({
    selector: 'app-user_management',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule
    ],
    templateUrl: './user_management.html',

    providers: [MessageService, ConfirmationService]
})
export class user_management implements OnInit {
  users = signal<User[]>([]);
    userDialog = false;
    selectedUser!: User;

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    ngOnInit() {
        this.users.set([
            { id: '1', name: 'Juan Martínez', email: 'juan.martinez@empresa.com', role: 'Desarrollador Frontend', status: 'Activo', projects: ['Sistema de Bugs', 'App Web'] },
            { id: '2', name: 'María González', email: 'maria.gonzalez@empresa.com', role: 'Product Owner', status: 'Activo', projects: ['Sistema de Bugs'] },
            { id: '3', name: 'Roberto Sánchez', email: 'roberto.sanchez@empresa.com', role: 'Desarrollador Backend', status: 'Inactivo', projects: ['App Móvil', 'Sistema de Usuarios'] }
        ]);
    }

    openNew() {
        this.selectedUser = { id: '', name: '', email: '', role: '', status: 'Activo', projects: [] };
        this.userDialog = true;
    }

    editUser(user: User) {
        this.selectedUser = { ...user };
        this.userDialog = true;
    }

    hideDialog() {
        this.userDialog = false;
    }

    saveUser() {
        if (this.selectedUser.id) {
            this.users.set(this.users().map(u => (u.id === this.selectedUser.id ? this.selectedUser : u)));
            this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Usuario actualizado exitosamente' });
        } else {
            this.selectedUser.id = Math.random().toString(36).substr(2, 9);
            this.users.set([...this.users(), this.selectedUser]);
            this.messageService.add({ severity: 'success', summary: 'Agregado', detail: 'Usuario agregado exitosamente' });
        }
        this.userDialog = false;
    }

    confirmDelete(user: User) {
        this.confirmationService.confirm({
            message: `¿Seguro que deseas eliminar a ${user.name}?`,
            accept: () => {
                this.users.set(this.users().filter(u => u.id !== user.id));
                this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Usuario eliminado' });
            }
        });
    }

}
