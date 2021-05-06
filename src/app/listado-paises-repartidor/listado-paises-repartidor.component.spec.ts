import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPaisesRepartidorComponent } from './listado-paises-repartidor.component';

describe('ListadoPaisesRepartidorComponent', () => {
  let component: ListadoPaisesRepartidorComponent;
  let fixture: ComponentFixture<ListadoPaisesRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPaisesRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPaisesRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
