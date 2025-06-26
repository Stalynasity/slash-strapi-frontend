import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { BusquedaIncidenciaResposne, SugerenciaResponse } from '../models/response/SugerenciaIncidenciaResponse';

@Injectable({ providedIn: 'root' })
export class SugerenciasInteligentesService {
  private baseUrl = 'https://tubackend.com/api'; // ✅ cambia esto por tu backend real

  constructor(private http: HttpClient) {}

  // getIncidenciaPorCodigo(codigo: string): Observable<BusquedaIncidenciaResposne | null> {
  //   return this.http.get<BusquedaIncidenciaResposne>(`${this.baseUrl}/incidencias/${codigo}`).pipe(
  //     catchError(() => of(null)) // si no encuentra, retorna null
  //   );
  // }

  getIncidenciaPorCodigo(
    codigo: string
  ): Observable<BusquedaIncidenciaResposne | null> {
    const datosSimulados: BusquedaIncidenciaResposne[] = [
      {
        id: 'INC-001',
        titulo: 'Error al guardar usuario sin correo',
        descripcion:
          'Se produce un error cuando el campo de correo está vacío.',
      },
      {
        id: 'INC-002',
        titulo: 'Problema de inicio de sesión',
        descripcion:
          'Fallo al ingresar con usuarios con caracteres especiales.',
      },
    ];

    const resultado = datosSimulados.find((i) => i.id === codigo.trim());
    return of(resultado ?? null).pipe(delay(1000)); // simula 1s de espera
  }


  // NUEVO MÉTODO SIMULADO: obtener sugerencias por ID de incidencia
  getSugerenciasPorIncidenciaId(id: string): Observable<SugerenciaResponse[]> {
    const sugerencias: SugerenciaResponse[] = [
      {
        descripcion: 'Validación incompleta al guardar formulario',
        similitud: 90,
        solucion: 'Agregar validación en frontend y backend',
        estado: 'Pendiente'
      },
      {
        descripcion: 'Campo requerido no manejado correctamente',
        similitud: 85,
        solucion: 'Validar campo antes de guardar en DB',
        estado: 'Asociado'
      }
    ];

    return of(sugerencias).pipe(delay(500)); // simula espera de red
  }


}
