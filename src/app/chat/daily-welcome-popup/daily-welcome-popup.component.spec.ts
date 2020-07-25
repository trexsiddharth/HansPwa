import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWelcomePopupComponent } from './daily-welcome-popup.component';

describe('DailyWelcomePopupComponent', () => {
  let component: DailyWelcomePopupComponent;
  let fixture: ComponentFixture<DailyWelcomePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyWelcomePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyWelcomePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
