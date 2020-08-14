import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkdialogCsComponent } from './okdialog-cs.component';

describe('OkdialogCsComponent', () => {
  let component: OkdialogCsComponent;
  let fixture: ComponentFixture<OkdialogCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkdialogCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkdialogCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
