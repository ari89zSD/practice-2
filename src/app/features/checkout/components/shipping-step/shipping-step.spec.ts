import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingStep } from './shipping-step';

describe('ShippingStep', () => {
  let component: ShippingStep;
  let fixture: ComponentFixture<ShippingStep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingStep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingStep);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
