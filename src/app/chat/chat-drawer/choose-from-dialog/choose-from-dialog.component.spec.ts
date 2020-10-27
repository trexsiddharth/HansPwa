import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFromDialogComponent } from './choose-from-dialog.component';

describe('ChooseFromDialogComponent', () => {
  let component: ChooseFromDialogComponent;
  let fixture: ComponentFixture<ChooseFromDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseFromDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFromDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
