import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLandingFromComponentComponent } from './new-landing-from-component.component';

describe('NewLandingFromComponentComponent', () => {
  let component: NewLandingFromComponentComponent;
  let fixture: ComponentFixture<NewLandingFromComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLandingFromComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLandingFromComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
