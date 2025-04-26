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
import { User } from '../../core/models/user.model';


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
    template: `
        <div class="mb-6">
            <h2 class="text-2xl font-semibold text-surface-900 dark:text-white">Gestión de Usuarios</h2>
            <p class="text-gray-500 text-sm">Administra los usuarios, asigna roles y proyectos.</p>
        </div>

        <div class="card">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-semibold">Usuarios del Sistema</h3>
                <button pButton label="Agregar Usuario" icon="pi pi-user-plus" (click)="openNew()" class="p-button-sm"></button>
            </div>

            <p-table [value]="users()" [paginator]="true" [rows]="5" responsiveLayout="scroll">
                <ng-template pTemplate="header">
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Proyectos</th>
                        <th>Acciones</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-user>
                    <tr>
                        <td class="font-semibold">{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.role }}</td>
                        <td>
                            <p-tag [value]="user.status" [severity]="user.status === 'Activo' ? 'success' : 'danger'"></p-tag>
                        </td>
                        <td>
                            <ng-container *ngFor="let project of user.projects">
                                <span class="bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-xs mr-2">{{ project }}</span>
                            </ng-container>
                        </td>
                        <td>
                            <button pButton icon="pi pi-pencil" class="p-button-rounded p-button-text" (click)="editUser(user)"></button>
                            <button pButton icon="pi pi-trash" class="p-button-rounded p-button-text text-red-500" (click)="confirmDelete(user)"></button>
                        </td>
                    </tr>

                </ng-template>
            </p-table>
        </div>

        <p-dialog [(visible)]="userDialog" [modal]="true" [style]="{ width: '450px' }" header="Usuario">
            <ng-container *ngIf="selectedUser">
              <div class="flex flex-col gap-4">
                <input type="text" pInputText [(ngModel)]="selectedUser.name" placeholder="Nombre" />
                <input type="email" pInputText [(ngModel)]="selectedUser.email" placeholder="Correo" />
                <input type="text" pInputText [(ngModel)]="selectedUser.role" placeholder="Rol" />
              </div>
            </ng-container>
            <ng-template pTemplate="footer">
                <button pButton label="Cancelar" (click)="hideDialog()" class="p-button-text"></button>
                <button pButton label="Guardar" (click)="saveUser()" class="p-button-primary"></button>
            </ng-template>
        </p-dialog>

        <p-confirmdialog></p-confirmdialog>
    `,
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
