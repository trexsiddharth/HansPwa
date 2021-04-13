

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
import { FourPageService } from '../../four-page.service';
import { Profile } from '../../profile';
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
  selector: 'app-full-form-photo',
  templateUrl: './full-form-photo-component.html',
  styleUrls: ['./full-form-photo-component.css']
})
export class FullFormPhotoComponent implements OnInit {

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
  clickedFacebook = false;

  FamilyOptions: Observable<string[]>;

  // for uploading facebook foto
  base64TrimmedURL: string;
  base64DefaultURL: string;
  generatedImage: string;
  facebookImageFile: File;
  facebookImageFile2: File;
  facebookImageFile3: File;
  facebookImageFile4: File;
  facebookImageFile5: File;
  facebookImageFile6: File;

  showPlansOnFirstClick = true;

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

    return this.completeRegistration(uploadData).subscribe(suc => {
      this.suc = suc;
      if (this.suc.pic_upload_status === 'Y') {
        console.log('photos', suc);
        this.spinner.hide();
        if (!this.clickedFacebook) {
          this.ngxNotificationService.success('Photo Uploaded Succesfully!');
        }

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

  private completeRegistration(firststepdata: FormData): Observable<any> {
    if (!localStorage.getItem('franchiseRegistration')) {
      return this.http.post('https://partner.hansmatrimony.com/api/uploadProfilePicture', firststepdata);
    } else {
      return this.http.post('https://partner.hansmatrimony.com/api/franchiseupdateFourthPageDetails', firststepdata);
    }
  }

// upload facebook image by first downloading it and then uploading it
  getImage(imageUrl: string, index) {
    this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
      this.base64TrimmedURL = base64Data;
      this.createBlobImageFileAndShow(index);
    });
  }

  getBase64ImageFromURL(url: string): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      const img = new Image();
      img.crossOrigin = 'Anonymous';
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
    let canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    // This will draw image
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    const dataURL: string = canvas.toDataURL('image/png');
    this.base64DefaultURL = dataURL;
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }
  createBlobImageFileAndShow(index): void {
    this.dataURItoBlob(this.base64TrimmedURL).subscribe((blob: Blob) => {
      const imageBlob: Blob = blob;
      const imageName: string = this.generateName();

        // setting and uploading facebook pics..cant be made dynamic cause blob take certain time to create file path
        // our carousel index basically starts from 1 and not 0
      switch (index) {
          case 1:
            this.facebookImageFile = new File([imageBlob], imageName, {
              type: 'image/jpeg'
            });
            this.generatedImage = window.URL.createObjectURL(this.facebookImageFile);
            setTimeout(() => {
                this.uploadPhoto(this.facebookImageFile, index);
              }, 200);
            break;
          case 2:
            this.facebookImageFile2 = new File([imageBlob], imageName, {
              type: 'image/jpeg'
            });
            this.generatedImage = window.URL.createObjectURL(this.facebookImageFile2);
            setTimeout(() => {
                this.uploadPhoto(this.facebookImageFile2, index);
              }, 200);
            break;
          case 3:
            this.facebookImageFile3 = new File([imageBlob], imageName, {
              type: 'image/jpeg'
            });
            this.generatedImage = window.URL.createObjectURL(this.facebookImageFile3);
            setTimeout(() => {
                this.uploadPhoto(this.facebookImageFile3, index);
              }, 200);
            break;
          case 4:
            this.facebookImageFile4 = new File([imageBlob], imageName, {
              type: 'image/jpeg'
            });
            this.generatedImage = window.URL.createObjectURL(this.facebookImageFile4);
            setTimeout(() => {
                this.uploadPhoto(this.facebookImageFile4, index);
              }, 200);
            break;
          case 5:
            this.facebookImageFile5 = new File([imageBlob], imageName, {
              type: 'image/jpeg'
            });
            this.generatedImage = window.URL.createObjectURL(this.facebookImageFile5);
            setTimeout(() => {
                this.uploadPhoto(this.facebookImageFile5, index);
              }, 200);
            break;
          case 6:
            this.facebookImageFile6 = new File([imageBlob], imageName, {
              type: 'image/jpeg'
            });
            this.generatedImage = window.URL.createObjectURL(this.facebookImageFile6);
            setTimeout(() => {
                this.uploadPhoto(this.facebookImageFile6, index);
              }, 200);
            break;
        
          default:
            break;
        }
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
    // Replace extension according to your media type like this
    return date + '.' + text + '.jpeg';
  }

  ngOnInit() {
    this.fourPageService.getListData.subscribe(
      () => {
        if (localStorage.getItem('getListId') && localStorage.getItem('getListLeadId')) {
          this.setPhotoData(this.fourPageService.getProfile());
        }
      }
    );
    // set current profile picture from facebook
    this.fourPageService.facebookProfilePicUploaded.subscribe(
      (link) => {
        if (link) {
          this.imgURL = link;
          this.getImage(this.imgURL, 1);
          // get profile pics from facebook
          this.getFacebookPics();
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
    if (!this.fourPageService.franchiseData) {
      if (this.showPlansOnFirstClick) {
        this.itemService.openTodaysPopupAd(true);
        this.showPlansOnFirstClick = false;
      } else {
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
    if (!this.fourPageService.franchiseData) {
      if (this.showPlansOnFirstClick) {
        this.itemService.openTodaysPopupAd(true);
        this.showPlansOnFirstClick = false;
      } else {
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
        this.analyticsEvent('Four Page Registration Page Four');
      }
    }
    } else {
      this.fourPageService.form4Completed.emit(true);
    }
  }

  gtag_report_conversion() {
    (window as any).gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC' });
    return false;
  }

  // get pics from facebook
  getFacebookPics() {
    this.clickedFacebook = true;
    this.spinner.show();
    // fetch user photos
    (window as any).FB.api('/me/albums',
    'GET',
    {fields: 'link,name'}, (response) => {
      console.log('album', response);
      this.spinner.hide();
      if (response.data.length > 0) {
        response.data.forEach(element => {
          if (element.name === 'प्रोफ़ाइल फ़ोटो' ||
           element.name === 'Profile Photo' ||
            element.name === 'Profile photo' ||
            element.name === 'profile photo' ||
            (element.name as string).includes('Profile') || (element.name as string).includes('प्रोफ़ाइल')) {
              if (element.id) {
                (window as any).FB.api(`/${element.id}/photos`,
                'GET',
                {fields: 'link'}, (res) => {
                  console.log('Photos', res);
                  if (res.data.length > 0) {
                    res.data.forEach((element, index) => {
                      if (index < 5) {
                        if (element && element.id) {
                          (window as any).FB.api(`/${element.id}/picture`,
                          'GET',
                          {redirect: 'false'}, (picRes) => {
                              console.log(picRes);
                              if (picRes.data && picRes.data.url) {
                                switch (index) {
                                  case 0:
                                    this.frontfile = picRes.data.url;
                                    this.getImage(this.frontfile, 2);
                                    break;
                                  case 1:
                                    this.BackimgURL = picRes.data.url;
                                    this.getImage(this.BackimgURL, 3);
                                    break;
                                
                                  default:
                                    this.getImage(picRes.data.url, index + 2);
                                    break;
                                }
                              }
                          });
                        }
                      } else {
                        return;
                      }
                    });
                  }
                });
               }
          }
        });
      } else {
          this.ngxNotificationService.warning('No Facebook Picture Found');
      }
    });
 }

 // fetch fb current profile pic
 fetchFbCurrentProfilePic() {
    (window as any).FB.api('/me/picture',
    'GET',
    {height: '600', width: '400', redirect: 'false'}, (response) => {
      console.log(response.data.url);
      if (response.data.url) {
        this.imgURL = response.data.url;
        this.getImage(this.imgURL, 1);
          // get more  profile pics from facebook for second and third places in image grid
        this.getFacebookPics();
      }
    });
 }

 // for facebook photos when user has not given permission on first page
 loginToFacebookToGetPhotos() {
  (window as any).FB.getLoginStatus((response) => {   // Called after the JS SDK has been initialized.
    console.log(response);
    if (response.status === 'connected') {
      localStorage.setItem('fb_token', response.authResponse.accessToken);
      this.fetchFbCurrentProfilePic();
    } else {
      (window as any).FB.login((response) => {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         this.fetchFbCurrentProfilePic();
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    }, {scope: 'email, public_profile, user_photos, user_gender,user_birthday, user_hometown, user_location'});
    }       // Returns the login status.
  });
 }
}



