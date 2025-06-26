export interface Incidencia {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: string;
  prioridad: string;
  estado: string;
  modulo_afectado: string;
  publishedAt: string; // ISO datetime
  updatedAt: string;
  autor: string;
  responsable_id: string;
  archivos_adjunto: string[]; // o ArchivoAdjunto[]
  sugerencias: string[];
  codigo: string; // o CodeSmell[]
  feedback: feedback[]; // o Feedback[]
  code_smells_relacionados: string[]; // o CodeSmell[]
}

export interface TipoError {
  id: string;
  nombre: string;
  descripcion: string;
}

export interface feedback {
  id: string;
  comentarios: string;
  autor: string;
  fechacomentario: string; // ✅ Agregado
  reputacion: string;
}
export interface EstadoIncidencia {
  id: string;
  nombre: string;
  orden: number;
}

export interface ComentarioIncidencia {
  id: string;
  incidencia_id: string;
  usuario_id: string;
  usuario_nombre: string; // ✅ Agregado
  contenido: string;
  fecha: string; // o Date
}

export interface ArchivoAdjunto {
  id: string;
  incidencia_id: string;
  nombre_archivo: string;
  ruta_archivo: string;
  tipo_mime: string;
  subido_por: string;
}

export interface HistorialIncidencia {
  id: string;
  incidencia_id: string;
  usuario_id: string;
  accion: string;
  fecha: string;
}

export interface IncidenciaDetalle extends Incidencia {
  comentarios: ComentarioIncidencia[];
  historial: HistorialIncidencia[];
  adjuntos: ArchivoAdjunto[];
}
