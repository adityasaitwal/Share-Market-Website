import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMarketComponent } from './currency-market.component';

describe('CurrencyMarketComponent', () => {
  let component: CurrencyMarketComponent;
  let fixture: ComponentFixture<CurrencyMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
