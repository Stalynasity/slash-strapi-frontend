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

// incidencia.model.ts
export interface Incidencia {
  id: string;
  titulo: string;
  descripcion: string;
}

