import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  ComentarioIncidencia,
  Incidencia,
} from '../../../core/models/incidentes.model';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { IncidenciaService } from '../../../core/services/Incidencia.service';
import { TabsModule } from 'primeng/tabs';
import { Timeline, TimelineModule } from 'primeng/timeline';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ver-incidencias',
  standalone: true,
  imports: [
    CommonModule,
    TagModule,
    CardModule,
    TabsModule,
    ButtonModule,
    TimelineModule,
    TextareaModule,
    FormsModule,
    Timeline,
  ],
  templateUrl: './ver-incidencias.component.html',
  styleUrls: ['./ver-incidencias.component.css'],
})
export class VerIncidenciasComponent implements OnInit {
  incidencia?: Incidencia;
  comentarios: ComentarioIncidencia[] = [
    {
      id: 'COM001',
      incidencia_id: 'INC005',
      usuario_id: 'USR002',
      usuario_nombre: 'María Fernández',
      contenido:
        'Revisé el módulo de login y efectivamente falta la validación en el backend.',
      fecha: '2025-06-22T10:15:00Z',
    },
    {
      id: 'COM002',
      incidencia_id: 'INC005',
      usuario_id: 'USR003',
      usuario_nombre: 'Carlos Ruiz',
      contenido:
        'Puedo encargarme de implementar la verificación del campo contraseña.',
      fecha: '2025-06-22T11:05:00Z',
    },
    {
      id: 'COM003',
      incidencia_id: 'INC005',
      usuario_id: 'USR001',
      usuario_nombre: 'Stalyn Asitimabay',
      contenido: 'Gracias, estaré revisando los cambios una vez estén listos.',
      fecha: '2025-06-22T12:30:00Z',
    },
    {
      id: 'COM004',
      incidencia_id: 'INC005',
      usuario_id: 'USR004',
      usuario_nombre: 'Ana Torres',
      contenido: 'Verifiqué en staging y aún permite claves vacías.',
      fecha: '2025-06-22T13:00:00Z',
    },
    {
      id: 'COM005',
      incidencia_id: 'INC005',
      usuario_id: 'USR005',
      usuario_nombre: 'Diego Mendoza',
      contenido: 'Ya subí un PR con la validación del campo.',
      fecha: '2025-06-22T13:15:00Z',
    },
    {
      id: 'COM006',
      incidencia_id: 'INC005',
      usuario_id: 'USR006',
      usuario_nombre: 'Lucía Ortega',
      contenido: '¿Se notificó al equipo de QA sobre esto?',
      fecha: '2025-06-22T13:30:00Z',
    },
    {
      id: 'COM007',
      incidencia_id: 'INC005',
      usuario_id: 'USR007',
      usuario_nombre: 'José Palacios',
      contenido: 'QA está al tanto, validaremos mañana en el primer bloque.',
      fecha: '2025-06-22T13:45:00Z',
    },
    {
      id: 'COM008',
      incidencia_id: 'INC005',
      usuario_id: 'USR008',
      usuario_nombre: 'Gabriela Salazar',
      contenido:
        '¿Se considera también validar el campo con expresión regular?',
      fecha: '2025-06-22T14:00:00Z',
    },
    {
      id: 'COM009',
      incidencia_id: 'INC005',
      usuario_id: 'USR009',
      usuario_nombre: 'Juan Esteban',
      contenido: 'Buena sugerencia, lo agrego al commit.',
      fecha: '2025-06-22T14:20:00Z',
    },
    {
      id: 'COM010',
      incidencia_id: 'INC005',
      usuario_id: 'USR010',
      usuario_nombre: 'Sofía Herrera',
      contenido:
        'Favor revisar si afecta el flujo de registro con clave temporal.',
      fecha: '2025-06-22T14:35:00Z',
    },
    {
      id: 'COM011',
      incidencia_id: 'INC005',
      usuario_id: 'USR011',
      usuario_nombre: 'Carlos Benítez',
      contenido: 'No encontré errores en la vista móvil.',
      fecha: '2025-06-22T14:50:00Z',
    },
    {
      id: 'COM012',
      incidencia_id: 'INC005',
      usuario_id: 'USR012',
      usuario_nombre: 'Natalia Ríos',
      contenido: 'Ya está mergeado el PR, se puede hacer test en QA.',
      fecha: '2025-06-22T15:00:00Z',
    },
    {
      id: 'COM013',
      incidencia_id: 'INC005',
      usuario_id: 'USR013',
      usuario_nombre: 'Marco Lara',
      contenido: '¿Hay test unitarios agregados?',
      fecha: '2025-06-22T15:15:00Z',
    },
    {
      id: 'COM014',
      incidencia_id: 'INC005',
      usuario_id: 'USR014',
      usuario_nombre: 'Estefanía Guzmán',
      contenido: 'Sí, cubren los casos de claves vacías y campos nulos.',
      fecha: '2025-06-22T15:25:00Z',
    },
    {
      id: 'COM015',
      incidencia_id: 'INC005',
      usuario_id: 'USR015',
      usuario_nombre: 'Ricardo León',
      contenido: 'Se probó con inputs maliciosos, sin errores hasta ahora.',
      fecha: '2025-06-22T15:40:00Z',
    },
    {
      id: 'COM016',
      incidencia_id: 'INC005',
      usuario_id: 'USR016',
      usuario_nombre: 'Andrea Vega',
      contenido: 'Agradezco que hayan considerado seguridad desde el backend.',
      fecha: '2025-06-22T15:55:00Z',
    },
    {
      id: 'COM017',
      incidencia_id: 'INC005',
      usuario_id: 'USR017',
      usuario_nombre: 'Pedro Cedeño',
      contenido: '¿Se actualizó la documentación del endpoint?',
      fecha: '2025-06-22T16:05:00Z',
    },
    {
      id: 'COM018',
      incidencia_id: 'INC005',
      usuario_id: 'USR018',
      usuario_nombre: 'Daniela Muñoz',
      contenido: 'Sí, está en el README y en Postman.',
      fecha: '2025-06-22T16:20:00Z',
    },
    {
      id: 'COM019',
      incidencia_id: 'INC005',
      usuario_id: 'USR019',
      usuario_nombre: 'Jorge Pérez',
      contenido: 'Marcaré la incidencia como pendiente de cierre.',
      fecha: '2025-06-22T16:35:00Z',
    },
    {
      id: 'COM020',
      incidencia_id: 'INC005',
      usuario_id: 'USR020',
      usuario_nombre: 'Valentina Andrade',
      contenido: 'Falta probar en Firefox, tengo resultados de Chrome y Edge.',
      fecha: '2025-06-22T16:45:00Z',
    },
    {
      id: 'COM021',
      incidencia_id: 'INC005',
      usuario_id: 'USR021',
      usuario_nombre: 'Roberto Vargas',
      contenido: 'Firefox pasó la prueba también, sin errores.',
      fecha: '2025-06-22T17:00:00Z',
    },
    {
      id: 'COM022',
      incidencia_id: 'INC005',
      usuario_id: 'USR022',
      usuario_nombre: 'Camila Jácome',
      contenido: 'Buen trabajo equipo 👏',
      fecha: '2025-06-22T17:10:00Z',
    },
    {
      id: 'COM023',
      incidencia_id: 'INC005',
      usuario_id: 'USR023',
      usuario_nombre: 'Luis Herrera',
      contenido: 'Listo para cerrar después de deploy a producción.',
      fecha: '2025-06-22T17:20:00Z',
    },
    {
      id: 'COM024',
      incidencia_id: 'INC005',
      usuario_id: 'USR024',
      usuario_nombre: 'Carla Sánchez',
      contenido: 'Verifiqué en producción. Todo ok.',
      fecha: '2025-06-22T18:00:00Z',
    },
    {
      id: 'COM025',
      incidencia_id: 'INC005',
      usuario_id: 'USR025',
      usuario_nombre: 'Enrique Mora',
      contenido: 'Incidencia cerrada exitosamente 🚀',
      fecha: '2025-06-22T18:15:00Z',
    },
  ];

  nuevoComentario: string = '';

  constructor(
    private route: ActivatedRoute,
    private incidenciaService: IncidenciaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.incidenciaService.getIncidenciaPorId(id).subscribe((data) => {
        this.incidencia = data;
      });
    }
  }

  getSeveridadEstado(
    estado: string
  ):
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'secondary'
    | 'contrast'
    | undefined {
    switch (estado?.toLowerCase()) {
      case 'pendiente':
        return 'warn';
      case 'asignada':
        return 'info';
      case 'cerrada':
        return 'success';
      case 'bloqueada':
        return 'danger';
      default:
        return 'secondary';
    }
  }

  agregarComentario(): void {
    if (!this.nuevoComentario.trim() || !this.incidencia?.id) return;

    const nuevo: ComentarioIncidencia = {
      id: crypto.randomUUID(),
      incidencia_id: this.incidencia.id,
      usuario_id: 'USR001',
      usuario_nombre: 'Stalyn Asitimabay', // ejemplo fijo
      contenido: this.nuevoComentario.trim(),
      fecha: new Date().toISOString(),
    };

    this.comentarios.unshift(nuevo);
    this.nuevoComentario = '';
  }
}
