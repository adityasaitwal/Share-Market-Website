import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativesMarketComponent } from './derivatives-market.component';

describe('DerivativesMarketComponent', () => {
  let component: DerivativesMarketComponent;
  let fixture: ComponentFixture<DerivativesMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DerivativesMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DerivativesMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
