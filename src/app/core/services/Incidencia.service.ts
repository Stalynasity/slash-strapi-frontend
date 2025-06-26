import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incidencia } from '../models/incidentes.model';
import { environment } from '../../../../src/environments/environment'; // Asegúrate de que la baseUrl esté en tu archivo environment.ts

@Injectable({ providedIn: 'root' })
export class IncidenciaService {
  private baseUrl = environment.apiUrl; // Asume que tienes esta propiedad en tu archivo environment.ts

  constructor(private http: HttpClient) {}

  // Método para obtener incidencias con paginación
  getIncidencias(page: number = 1, pageSize: number = 5): Observable<any> {
    const url = `${this.baseUrl}/incidentes?pagination[page]=${page}&pagination[pageSize]=${pageSize}&fields=id,titulo,estado,tipo,prioridad,autor,codigo&populate=*`;
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get(url, { headers });
  }

  // Método para obtener una incidencia por ID
 getIncidenciaPorId(id: string): Observable<Incidencia | undefined> {
  const url = `${this.baseUrl}/incidentes?pagination[page]=1&pagination[pageSize]=1&populate=*&filters[id]=${id}`;
  return this.http.get<any>(url).pipe(
    map((response) => {
      console.log('🌐 Respuesta cruda del backend:', response);
      return response.data?.[0];
    })
  );
}


}
