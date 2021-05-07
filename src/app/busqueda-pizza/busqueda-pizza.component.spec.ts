import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPizzaComponent } from './busqueda-pizza.component';

describe('BusquedaPizzaComponent', () => {
  let component: BusquedaPizzaComponent;
  let fixture: ComponentFixture<BusquedaPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
