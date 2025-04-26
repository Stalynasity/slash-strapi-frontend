export interface User {
  id?: string;          // ID único
  name?: string;         // Nombre completo
  email?: string;        // Correo electrónico
  role?: string;         // Rol asignado (Ej: 'Product Owner', 'Desarrollador Frontend', etc.)
  status: 'Activo' | 'Inactivo';  // Estado del usuario
  projects: string[];   // Lista de proyectos asignados
}
