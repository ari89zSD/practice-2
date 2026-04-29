import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFilter } from './price-filter';

describe('PriceFilter', () => {
  let component: PriceFilter;
  let fixture: ComponentFixture<PriceFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
