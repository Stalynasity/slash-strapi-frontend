import { Component } from "@angular/core";

@Component({
  selector: 'app-configuracion-header',
  template: `  <h2 class="text-2xl font-semibold text-surface-900 dark:text-white">Configuración Global</h2>
  <p class="text-gray-500 text-sm">
    Gestiona todos los parámetros y configuraciones de la plataforma
  </p>
  `,
  standalone: true
})
export class ConfiguracionHeader{

}
