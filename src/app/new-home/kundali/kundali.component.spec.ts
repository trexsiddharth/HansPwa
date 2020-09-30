import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KundaliComponent } from './kundali.component';

describe('KundaliComponent', () => {
  let component: KundaliComponent;
  let fixture: ComponentFixture<KundaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KundaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
