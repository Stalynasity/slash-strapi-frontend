// sugerencia.model.ts
export interface Recomendacion {
  descripcion: string;
  similitud: number;
  referencia: string;
}

export interface SugerenciaInteligente {
  id: string;
  incidencia_id: string;
  fecha_generacion: string;
  algoritmo: string;
  recomendaciones: Recomendacion[];
}




export interface Detalle_sugerencia {
  id: string;
  incidencia_id: string;
  similitud: string;
  incidencia_similar: string;
  solucion_aplicada: string;
  Responsable: string;
  }
