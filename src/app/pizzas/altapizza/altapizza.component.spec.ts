import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltapizzaComponent } from './altapizza.component';

describe('AltapizzaComponent', () => {
  let component: AltapizzaComponent;
  let fixture: ComponentFixture<AltapizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltapizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltapizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
