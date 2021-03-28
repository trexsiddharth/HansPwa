import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompatibilityVerifyComponent } from './full-page-five.component';

describe('CompatibilityVerifyComponent', () => {
  let component: CompatibilityVerifyComponent;
  let fixture: ComponentFixture<CompatibilityVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompatibilityVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompatibilityVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
