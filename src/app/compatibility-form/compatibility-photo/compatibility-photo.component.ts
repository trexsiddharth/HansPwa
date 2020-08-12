

import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Observable, Observer
} from 'rxjs';

import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  Router
} from '@angular/router';

import {
  MatDialog
} from '@angular/material/';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { FourPageService } from '../four-page.service';
import { Profile } from '../profile';
import { timeout, retry, catchError } from 'rxjs/operators';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';

export interface StateGroup {
  letter: string;
  names: string[];
}
export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-compatibility-photo',
  templateUrl: './compatibility-photo.component.html',
  styleUrls: ['./compatibility-photo.component.css']
})
export class CompatibilityPhotoComponent implements OnInit {

  @ViewChild('photoModal', { static: false }) private photoModal: any;

  isCompleted5 = false;
  public imagePath;
  fullimagePath;
  frontimagePath;
  backimagePath;
  imgURL: any;
  BackimgURL;
  frontfile;
  fullimgURL;
  fd: false;
  suc: any = [];
  currentAge: number;
  public message: string;
  photoScore = 0;



  FamilyOptions: Observable<string[]>;
  frontfile4: any;
  frontfile5: any;
  frontfile6: any;
  constructor(public dialog: MatDialog, private router: Router, private http: HttpClient,
    public fourPageService: FourPageService,
    private ngxNotificationService: NgxNotificationService,
    private spinner: NgxSpinnerService, public itemService: FindOpenHistoryProfileService) {

  }

  Cross_click() {
    this.dialog.closeAll();
  }

  preview(files, index) {
    if (files.length === 0) {
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      this.spinner.show();
      const reader = new FileReader();
      this.imagePath = files[0];
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.uploadPhoto(this.imagePath, index);

      };
    }
  }

  previewFull(files, index) {
    if (files.length === 0) {
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      this.spinner.show();
      const reader = new FileReader();
      this.fullimagePath = files[0];
      // console.log(this.fullimagePath)
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.fullimgURL = reader.result;
        this.uploadPhoto(this.fullimagePath, index);
        // console.log(this.fullimgURL);
      };
    }
  }

  previewfront(files, index) {

    if (files.length === 0) {
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      this.spinner.show();
      const reader = new FileReader();
      this.frontimagePath = files[0];
      // console.log(this.frontimagePath);
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.uploadPhoto(this.frontimagePath, index);

      };
    }
  }

  previewBack(files, index) {

    if (files.length === 0) {
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      this.spinner.show();
      const reader = new FileReader();
      this.backimagePath = files[0];
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.uploadPhoto(this.backimagePath, index);

      };
    }
  }


  uploadPhoto(data, index) {
    console.log(index);
    const photoBtn = document.getElementById('photoBtn') as HTMLButtonElement;
    photoBtn.disabled = true;
    const uploadData = new FormData();
    uploadData.append('id', localStorage.getItem('id') ? localStorage.getItem('id') : localStorage.getItem('getListId'));
    uploadData.append('index', index);
    uploadData.append('image', data);
    uploadData.append('is_lead', '1');

    return this.http.post('https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture', uploadData).subscribe(suc => {
      this.suc = suc;
      if (this.suc.pic_upload_status === 'Y') {
        console.log('photos', suc);
        this.spinner.hide();
        this.ngxNotificationService.success('Photo Uploaded Succesfully!');
        photoBtn.disabled = false;

        switch (index) {
          case 1:
            this.imgURL = this.suc.profile_pic_url;
            this.fourPageService.profile.image1 = this.suc.profile_pic_url;
            if (!this.frontfile && this.fourPageService.getUserThrough()) {
              this.uploadPhoto(data, 2);
            }
            if (!this.BackimgURL && this.fourPageService.getUserThrough()) {
              this.uploadPhoto(data, 3);
            }
            this.analyticsEvent('Image One Uploaded on Four Page Registration Page Four');
            break;

          case 2:
            this.frontfile = this.suc.profile_pic_url;
            this.fourPageService.profile.image2 = this.suc.profile_pic_url;
            this.analyticsEvent('Image Two Uploaded on Four Page Registration Page Four');
            break;

          case 3:
            this.BackimgURL = this.suc.profile_pic_url;
            this.fourPageService.profile.image3 = this.suc.profile_pic_url;
            this.analyticsEvent('Image Three Uploaded on Four Page Registration Page Four');
            if (this.fourPageService.profile.photoScore > 1) {
              this.fourPageService.form4Completed.emit(true);
            }
            break;

          default:
            break;
        }

      } else {
        this.spinner.hide();
        this.ngxNotificationService.error('Photo Upload Unsuccessful!');
      }
    }, err => {
      this.spinner.hide();
      this.ngxNotificationService.error('Photo could not be Uploaded!');
      console.log(err);
    });
  }
  base64TrimmedURL: string;
  base64DefaultURL: string;
  generatedImage: string;
  facebookImageFile: File;
  facebookImageFileSet: boolean = false;


  getImage(imageUrl: string) {
    this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
      this.base64TrimmedURL = base64Data;
      this.createBlobImageFileAndShow();
    });
  }
  getBase64ImageFromURL(url: string): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = url;
      if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = err => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement): string {
    // We create a HTML canvas object that will create a 2d image
    var canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    // This will draw image
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    let dataURL: string = canvas.toDataURL("image/png");
    this.base64DefaultURL = dataURL;
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
  createBlobImageFileAndShow(): void {
    this.dataURItoBlob(this.base64TrimmedURL).subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName: string = this.generateName();
      this.facebookImageFile = new File([imageBlob], imageName, {
        type: "image/jpeg"
      });
      this.generatedImage = window.URL.createObjectURL(this.facebookImageFile);
      this.facebookImageFileSet = true;
    });
  }
  dataURItoBlob(dataURI: string): Observable<Blob> {
    return Observable.create((observer: Observer<Blob>) => {
      const byteString: string = window.atob(dataURI);
      const arrayBuffer: ArrayBuffer = new ArrayBuffer(byteString.length);
      const int8Array: Uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([int8Array], { type: "image/jpeg" });
      observer.next(blob);
      observer.complete();
    });
  }
  generateName(): string {
    const date: number = new Date().valueOf();
    let text: string = "";
    const possibleText: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(
        Math.floor(Math.random() * possibleText.length)
      );
    }
    // Replace extension according to your media type like this
    return date + "." + text + ".jpeg";
  }

  ngOnInit() {
    this.fourPageService.getListData.subscribe(
      () => {
        if (localStorage.getItem('getListId') && localStorage.getItem('getListLeadId')) {
          this.setPhotoData(this.fourPageService.getProfile());
        }
      }
    );
    this.fourPageService.facebookProfilePicUploaded.subscribe(
      (link) => {
        if (link) {
          this.imgURL = link;
          this.getImage(this.imgURL);
        }
      }
    );
  }
  setPhotoData(userProfile: Profile) {
    console.log(userProfile);
    this.imgURL = userProfile.image1 ? userProfile.image1 : '';
    this.frontfile = userProfile.image2 ? userProfile.image2 : '';
    this.BackimgURL = userProfile.image3 ? userProfile.image3 : '';
  }

  photoScoreChanged(event) {
    console.log(event);
    this.fourPageService.profile.photoScore = event;
    if (event && event > 1) {
      this.fourPageService.form4Completed.emit(true);
    } else {
      this.fourPageService.form4Completed.emit(false);
    }
  }

  checkForPhoto() {
    if (this.facebookImageFileSet) {
      this.uploadPhoto(this.facebookImageFile, 1);
      this.itemService.setPhotoStatus(true);
    }
    if (this.fourPageService.getUserThrough() && localStorage.getItem('getListLeadId') !== '0') {
      this.fourPageService.profile.photoScore = this.photoScore;
      const userProfile = this.fourPageService.profile;
      console.log(userProfile);
      if (!userProfile.image1 || userProfile.image1 === null || userProfile.image1 === '') {
        return this.ngxNotificationService.error('Select Image 1');
      } else if (!userProfile.image2 || userProfile.image2 === null || userProfile.image2 === '') {
        return this.ngxNotificationService.error('Select Image 2');
      } else if (!userProfile.image3 || userProfile.image3 === null || userProfile.image3 === '') {
        return this.ngxNotificationService.error('Select Image 3');
      } else if (userProfile.photoScore < 1) {
        return this.ngxNotificationService.error('Give a score');
      } else if (!localStorage.getItem('getListId') || !localStorage.getItem('getListMobile')) {
        console.log(this.fourPageService.getProfile().mobile);
        localStorage.setItem('mobile_number', this.fourPageService.getProfile().mobile);
      } else {
        this.skip(1);
      }
    } else {
      this.skip(0);
    }
  }

  analyticsEvent(event) {
    if (!this.fourPageService.getUserThrough()) {
    (window as any).ga('send', 'event', event, '', {
      hitCallback: () => {

        console.log('Tracking ' + event + ' successful');

      }

    });

    // gtag app + web
    (window as any).gtag('event', event, {
      event_callback: () => {
        console.log('Tracking gtag ' + event + ' successful');
      }
    });
  }

  }

  skip(type) {
    this.fourPageService.form4Completed.emit(true);
    (window as any).fbq('track', 'FourPageRegistration', {
      value: localStorage.getItem('id'),
      content_name: localStorage.getItem('RegisterNumber'),
    });
    (window as any).fbq('track', '692972151223870', 'FourPageRegistration', {
      value: localStorage.getItem('id'),
      content_name: localStorage.getItem('RegisterNumber'),
    });

    (window as any).fbq('track', 'CompleteRegistration', {
      value: localStorage.getItem('id'),
      content_name: localStorage.getItem('RegisterNumber'),
    });
    (window as any).fbq('track', '692972151223870', 'CompleteRegistration', {
      value: localStorage.getItem('id'),
      content_name: localStorage.getItem('RegisterNumber'),
    });

    this.gtag_report_conversion();


    // 0 -> got to chat  1-> got to fifth page
    // if type is 0 and  getListLeadId === 0 send to hot leads
    if (type === 0 && !this.fourPageService.getUserThrough()) {
      this.router.navigateByUrl('chat?first');
    } else if (type === 0 && localStorage.getItem('getListLeadId') !== '1') {
      window.open('https://partner.hansmatrimony.com/hot-leads');
    }

    if (type === 0) {
      this.analyticsEvent('User Skipped Photo Upload');
    } else {
      this.analyticsEvent('Registered through Four Page Registration Page Four');
    }
  }

  gtag_report_conversion() {
    (window as any).gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC' });
    return false;
  }
}



