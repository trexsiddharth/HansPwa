import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysPaymentPopupComponent } from './todays-payment-popup.component';

describe('TodaysPaymentPopupComponent', () => {
  let component: TodaysPaymentPopupComponent;
  let fixture: ComponentFixture<TodaysPaymentPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaysPaymentPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysPaymentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
