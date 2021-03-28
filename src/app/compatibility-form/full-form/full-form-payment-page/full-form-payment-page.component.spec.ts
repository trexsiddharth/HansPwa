import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullFormPaymentPageComponent } from './full-form-payment-page.component';

describe('FullFormPaymentPageComponent', () => {
  let component: FullFormPaymentPageComponent;
  let fixture: ComponentFixture<FullFormPaymentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullFormPaymentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullFormPaymentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
