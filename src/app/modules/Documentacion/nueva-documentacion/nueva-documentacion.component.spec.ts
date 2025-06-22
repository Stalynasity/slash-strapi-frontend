import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaDocumentacionComponent } from './nueva-documentacion.component';

describe('NuevaDocumentacionComponent', () => {
  let component: NuevaDocumentacionComponent;
  let fixture: ComponentFixture<NuevaDocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaDocumentacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
