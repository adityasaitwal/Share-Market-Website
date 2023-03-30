import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsbComponent } from './aboutsb.component';

describe('AboutsbComponent', () => {
  let component: AboutsbComponent;
  let fixture: ComponentFixture<AboutsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
