import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaIncidenciaComponent } from './busqueda-incidencia.component';

describe('BusquedaIncidenciaComponent', () => {
  let component: BusquedaIncidenciaComponent;
  let fixture: ComponentFixture<BusquedaIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaIncidenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
