export interface BusquedaIncidenciaResposne {
  id: string;
  titulo: string;
  descripcion: string;
}

export interface SugerenciaResponse {
  descripcion: string;
  similitud: number;
  solucion: string;
  estado?: string;
}
