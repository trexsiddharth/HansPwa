import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProfilesComponent } from './sample-profiles.component';

describe('SampleProfilesComponent', () => {
  let component: SampleProfilesComponent;
  let fixture: ComponentFixture<SampleProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
