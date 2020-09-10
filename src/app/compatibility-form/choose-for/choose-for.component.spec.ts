import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseForComponent } from './choose-for.component';

describe('ChooseForComponent', () => {
  let component: ChooseForComponent;
  let fixture: ComponentFixture<ChooseForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
