import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileNewComponent } from './my-profile-new.component';

describe('MyProfileNewComponent', () => {
  let component: MyProfileNewComponent;
  let fixture: ComponentFixture<MyProfileNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
