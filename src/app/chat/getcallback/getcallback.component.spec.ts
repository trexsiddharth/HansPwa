import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcallbackComponent } from './getcallback.component';

describe('GetcallbackComponent', () => {
  let component: GetcallbackComponent;
  let fixture: ComponentFixture<GetcallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
