import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajapizzaComponent } from './bajapizza.component';

describe('BajapizzaComponent', () => {
  let component: BajapizzaComponent;
  let fixture: ComponentFixture<BajapizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajapizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajapizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
