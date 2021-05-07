import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificacionpizzaComponent } from './modificacionpizza.component';

describe('ModificacionpizzaComponent', () => {
  let component: ModificacionpizzaComponent;
  let fixture: ComponentFixture<ModificacionpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificacionpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificacionpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
