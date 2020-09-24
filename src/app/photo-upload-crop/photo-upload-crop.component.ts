import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-photo-upload-crop',
  templateUrl: './photo-upload-crop.component.html',
  styleUrls: ['./photo-upload-crop.component.css']
})
export class PhotoUploadCropComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PhotoUploadCropComponent>) { }

  ngOnInit() {
    this.croppedImage$.subscribe((data: any) => {
      console.log('cropped image change event fired');
      if (this.croppedImage.value)
        this.createBlobImageFileAndShow(data);
    });
  }
  imageChangedEvent: any = '';
  croppedImage = new BehaviorSubject<string>(null);
  croppedImage$: Observable<string> = this.croppedImage.asObservable();
  dataFile: any;
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage.next(event.base64);
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  closeDialog() {
    console.log('Dialog Close called');
    this.dialogRef.close(this.dataFile);
  }
  createBlobImageFileAndShow(data): void {
    console.log(' data file created');
    this.dataURItoBlob(data.replace(/^data:image\/(png|jpg);base64,/, '')).subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName: string = this.generateName();
      this.dataFile = new File([imageBlob], imageName, {
        type: 'image/jpeg'
      });
    })
  }
  dataURItoBlob(dataURI: string): Observable<Blob> {
    return new Observable((observer: Observer<Blob>) => {
      const byteString: string = window.atob(dataURI);
      const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: 'image/jpeg' });
      observer.next(blob);
      observer.complete();
    });
  }
  generateName(): string {
    const date: number = new Date().valueOf();
    let text = '';
    const possibleText =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(
        Math.floor(Math.random() * possibleText.length)
      );
    }
    return date + '.' + text + '.jpeg';
  }
}
