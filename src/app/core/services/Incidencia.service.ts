import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incidencia } from '../models/incidentes.model';
import { environment } from '../../../../src/environments/environment'; // Asegúrate de que la baseUrl esté en tu archivo environment.ts

@Injectable({ providedIn: 'root' })
export class IncidenciaService {
  private baseUrl = environment.apiUrl; // Asume que tienes esta propiedad en tu archivo environment.ts

  constructor(private http: HttpClient) { }

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


  /* getArchivosAdjuntosPorIncidencia(incidencia: Incidencia): Observable<any[]> {
    const tieneAdjuntos = incidencia.adjuntoincidencia?.length > 0;
    const tituloValido = incidencia.titulo?.trim()?.length > 0;

    if (!tieneAdjuntos || !tituloValido) {
      return new Observable((observer) => {
        observer.next([]);
        observer.complete();
      });
    }

    const adjuntosIds = incidencia.adjuntoincidencia
      .filter(adj => adj.IDADJUNTOINCIDENCIA?.trim().length > 0)
      .map(adj => encodeURIComponent(adj.IDADJUNTOINCIDENCIA.trim()));

    if (adjuntosIds.length === 0) {
      return new Observable((observer) => {
        observer.next([]);
        observer.complete();
      });
    }

    // Construye la query con múltiples [$in]=
    const queryParams = adjuntosIds.map(id => `filters[caption][$in]=${id}`).join('&');

    const url = `${this.baseUrl}/upload/files?${queryParams}`;
    console.log('🌐 URL para obtener archivos adjuntos dinámicos:', url);

    return this.http.get<any[]>(url).pipe(
      map(archivos => archivos.map(archivo => ({
        ...archivo,
        urlCompleta: `${environment.assetsUrl}${archivo.url}`,
        autor: archivo?.autor ?? incidencia?.autor ?? 'Desconocido',
        fechacarga: archivo?.fechacarga ?? incidencia?.publishedAt ?? new Date().toISOString(),
      })))
    );


  } */


getArchivosAdjuntosPorIncidencia(incidencia: Incidencia): Observable<any[]> {
  const tieneAdjuntos = incidencia.adjuntoincidencia?.length > 0;
  if (!tieneAdjuntos) {
    return new Observable((observer) => {
      observer.next([]);
      observer.complete();
    });
  }

  const adjuntosIds = incidencia.adjuntoincidencia
    .filter(adj => !!adj.IDADJUNTOINCIDENCIA?.trim())
    .map(adj => encodeURIComponent(adj.IDADJUNTOINCIDENCIA.trim()));

  if (adjuntosIds.length === 0) {
    return new Observable((observer) => {
      observer.next([]);
      observer.complete();
    });
  }

  const queryParams = adjuntosIds.map(id => `filters[caption][$in]=${id}`).join('&');
  const url = `${this.baseUrl}/upload/files?${queryParams}`;

  return this.http.get<any[]>(url).pipe(
    map(files => {
      return files.map(file => {
        const relacion = incidencia.adjuntoincidencia.find(
          adj => adj.IDADJUNTOINCIDENCIA?.trim() === file.caption
        );

        return {
          ...file,
          urlCompleta: `${environment.assetsUrl}${file.url}`,
          autor: relacion?.autor ?? 'Desconocido',
          fechacarga: relacion?.fechacarga ?? new Date().toISOString(),
          descripcion: relacion?.descripcion ?? file.name,
        };
      });
    })
  );
}


}
