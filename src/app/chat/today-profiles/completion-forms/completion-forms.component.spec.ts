import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionFormsComponent } from './completion-forms.component';

describe('CompletionFormsComponent', () => {
  let component: CompletionFormsComponent;
  let fixture: ComponentFixture<CompletionFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
