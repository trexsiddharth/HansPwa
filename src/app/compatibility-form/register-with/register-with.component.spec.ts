import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithComponent } from './register-with.component';

describe('RegisterWithComponent', () => {
  let component: RegisterWithComponent;
  let fixture: ComponentFixture<RegisterWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
