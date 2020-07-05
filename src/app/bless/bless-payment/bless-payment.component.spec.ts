import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlessPaymentComponent } from './bless-payment.component';

describe('BlessPaymentComponent', () => {
  let component: BlessPaymentComponent;
  let fixture: ComponentFixture<BlessPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlessPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlessPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
