import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ButtonModule, RippleModule],
    template: `
        <div
            id="hero"
            class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
            style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
        >
            <div class="mx-6 md:mx-20 mt-0 md:mt-6">
                <h1 class="text-5xl font-bold text-gray-900 leading-tight">
                    Bienvenido a <span class="text-primary">SLASH</span>
                </h1>
                <p class="font-normal text-2xl leading-normal mt-4 text-gray-700">
                    Tu asistente inteligente para gestionar errores, mejorar la calidad del código y colaborar eficientemente.
                </p>
                <div class="flex flex-wrap gap-4 mt-8">
                    <button pButton pRipple [rounded]="true" type="button" label="Ver Mis Errores" class="!text-xl !px-5"></button>
                    <button pButton pRipple [rounded]="true" type="button" label="Explorar Proyectos" severity="secondary" class="!text-xl !px-5"></button>
                </div>
            </div>
            <div class="flex justify-center md:justify-end mt-8">
                <!-- <img src="https://primefaces.org/cdn/templates/sakai/landing/screen-1.png" alt="Hero Image" class="w-9/12 md:w-auto" /> -->
                <img src="assets/img/portada_home.png" alt="Hero Image" class="w-1/2 md:w-1/3" />
            </div>
        </div>
    `
})
export class LandingHomePage {
    constructor() {}
}
