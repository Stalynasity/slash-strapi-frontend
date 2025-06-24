import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incidencia } from '../models/incidentes.model';
import { SugerenciaInteligente } from '../models/sugerencias-inteligentes.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SugerenciaService {
  private API_URL = 'https://api.miapp.com';

  constructor(private http: HttpClient) {}

  obtenerSugerenciasPorIncidencia(id: string): Observable<SugerenciaInteligente> {
    const mock: SugerenciaInteligente = {
      id: 'SUG001',
      incidencia_id: id,
      fecha_generacion: new Date().toISOString(),
      algoritmo: 'BERT Similaridad',
      recomendaciones: [
        {
          descripcion: 'Validar formato de correo electrónico en frontend.',
          similitud: 0.92,
          referencia: 'INC003',
        },
        {
          descripcion: 'Revisar backend para null safety en inputs.',
          similitud: 0.88,
          referencia: 'INC008',
        },
      ],
    };
    return of(mock);
  }





  //GET /sugerencias?incidencia_id=INC-001
  getIncidenciaPorCodigo(codigo: string): Observable<Incidencia> {
    return this.http.get<Incidencia>(`${this.API_URL}/incidencias/${codigo}`);
  }

  getSugerenciasPorCodigo(codigo: string): Observable<SugerenciaInteligente> {
    return this.http.get<SugerenciaInteligente>(
      `${this.API_URL}/sugerencias/${codigo}`
    );
  }

  asociarSugerencia(incidencia_id: string, referencia: string): Observable<any> {
    const body = { incidencia_id, referencia };
    return this.http.post(`${this.API_URL}/sugerencias/asociar`, body);
  }
}
