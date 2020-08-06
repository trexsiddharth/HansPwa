import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilePhotoUploadComponent } from './my-profile-photo-upload.component';

describe('MyProfilePhotoUploadComponent', () => {
  let component: MyProfilePhotoUploadComponent;
  let fixture: ComponentFixture<MyProfilePhotoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfilePhotoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilePhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
