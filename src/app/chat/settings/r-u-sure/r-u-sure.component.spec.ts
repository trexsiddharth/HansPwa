import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RUSureComponent } from './r-u-sure.component';

describe('RUSureComponent', () => {
  let component: RUSureComponent;
  let fixture: ComponentFixture<RUSureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RUSureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RUSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
