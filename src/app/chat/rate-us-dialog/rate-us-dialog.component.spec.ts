import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateUsDialogComponent } from './rate-us-dialog.component';

describe('RateUsDialogComponent', () => {
  let component: RateUsDialogComponent;
  let fixture: ComponentFixture<RateUsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateUsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateUsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
