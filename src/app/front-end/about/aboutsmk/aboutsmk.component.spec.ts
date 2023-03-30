import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsmkComponent } from './aboutsmk.component';

describe('AboutsmkComponent', () => {
  let component: AboutsmkComponent;
  let fixture: ComponentFixture<AboutsmkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutsmkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutsmkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
