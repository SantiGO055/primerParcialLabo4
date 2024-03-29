import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorSeleccionadoComponent } from './repartidor-seleccionado.component';

describe('RepartidorSeleccionadoComponent', () => {
  let component: RepartidorSeleccionadoComponent;
  let fixture: ComponentFixture<RepartidorSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartidorSeleccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartidorSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
