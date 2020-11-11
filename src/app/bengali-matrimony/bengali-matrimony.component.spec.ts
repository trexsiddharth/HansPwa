import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BengaliMatrimonyComponent } from './bengali-matrimony.component';

describe('BengaliMatrimonyComponent', () => {
  let component: BengaliMatrimonyComponent;
  let fixture: ComponentFixture<BengaliMatrimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BengaliMatrimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BengaliMatrimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
