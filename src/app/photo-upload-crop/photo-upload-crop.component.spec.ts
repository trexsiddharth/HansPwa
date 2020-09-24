import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoUploadCropComponent } from './photo-upload-crop.component';

describe('PhotoUploadCropComponent', () => {
  let component: PhotoUploadCropComponent;
  let fixture: ComponentFixture<PhotoUploadCropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoUploadCropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoUploadCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
