import { Component } from '@angular/core';
import { ToggleSettingCardComponent } from '../../components/ToggleSettingCard.component';
import { CampoInputComponent } from '../../components/InputFiled.component';

@Component({
    selector: 'app-qr-acceso',
    standalone: true,
    imports: [ToggleSettingCardComponent, CampoInputComponent],
    templateUrl: './qr-acceso.component.html',
    styleUrl: './qr-acceso.component.css'
})
export class QrAccesoComponent {
    enabledQR: boolean = false;
    enabledRestrictionRol: boolean = false;
    expirationDayQR: number = 0;
}
