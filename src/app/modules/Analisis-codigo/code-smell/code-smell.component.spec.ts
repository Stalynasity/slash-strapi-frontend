import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSmellComponent } from './code-smell.component';

describe('CodeSmellComponent', () => {
  let component: CodeSmellComponent;
  let fixture: ComponentFixture<CodeSmellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSmellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeSmellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
