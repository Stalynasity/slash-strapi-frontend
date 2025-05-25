import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [ButtonModule, RippleModule],
    templateUrl: './home.html',
})
export class LandingHomePage {
    constructor() {}
}
