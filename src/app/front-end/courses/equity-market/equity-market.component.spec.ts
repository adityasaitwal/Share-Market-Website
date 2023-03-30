import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityMarketComponent } from './equity-market.component';

describe('EquityMarketComponent', () => {
  let component: EquityMarketComponent;
  let fixture: ComponentFixture<EquityMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquityMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquityMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
