import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';
import { timeout, retry, catchError } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PhotoUploadCropComponent } from 'src/app/photo-upload-crop/photo-upload-crop.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AskDeleteDialogComponent } from './ask-delete-dialog/ask-delete-dialog.component';
import { Observable, Observer } from 'rxjs';
import { ChatServiceService } from 'src/app/chat-service.service';

declare var FB: any;
@Component({
  selector: 'app-my-profile-photo-upload',
  templateUrl: './my-profile-photo-upload.component.html',
  styleUrls: ['./my-profile-photo-upload.component.css']
})
export class MyProfilePhotoUploadComponent implements OnInit {

  constructor(public router: Router,
              private activatedRoute: ActivatedRoute,
              public spinner: NgxSpinnerService,
              public http: HttpClient,
              private chatService: ChatServiceService,
              public ngxNotificationService: NgxNotificationService,
              public breakPointObserver: BreakpointObserver,
              private dialog: MatDialog) { }
  public message: string;
  userId: any;
  userIsLead: any;
  suc: any = [];
  BackimgURL;
  carouselSize;
  personalProfileData: any;
  backimagePath;
  private fetchedFbProfilePic = null;

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

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((routeData: any) => {
      console.log(routeData);
      if (routeData && routeData.params) {
        if (routeData.params.id && routeData.params.isLead) {
          this.userId = routeData.params.id;
          this.userIsLead = routeData.params.isLead;
        }
      }
    });
    this.getUserProfileData();
  }
  backTomyProfile() {
    // this.router.navigateByUrl(`chat/my-profile-new/${this.userId}/${this.userIsLead}`);
    window.history.back();
  }

  deletePhoto(index: number) {
      const currentImg = this.getProfilesPhotoName(this.personalProfileData.carousel,
        this.personalProfileData.unapprove_carousel,
        this.personalProfileData.photo, index);

      if (currentImg) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.hasBackdrop = true;
      this.breakPointObserver.observe([
        '(min-width: 1024px)'
      ]).subscribe(
        result => {
          if (result.matches) {
            console.log('screen is greater than  1024px');
            dialogConfig.minWidth = '30vw';
            dialogConfig.maxHeight = '80vh';
            dialogConfig.disableClose = false;
          } else {
            console.log('screen is less than  1024px');
            dialogConfig.minWidth = '96vw';
            dialogConfig.maxHeight = '80vh';
            dialogConfig.disableClose = false;
          }
        }
      );
      dialogConfig.id = 'askDelete';
      dialogConfig.data = currentImg;
      const dialogRef = this.dialog.open(AskDeleteDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        (response: any) => {
            if (response) {
              this.getUserProfileData(true);
            }
        }
      );
        }
  }

  getProfilesPhoto(
    num: string, // carousel
    numUnapprove: string, // unapprove_carousel
    num2: string, // photo
    index: number // index
  ): string {
    if (num !== '[]' && num && num !== 'null') {
      const carousel: any = JSON.parse(num);
      // if an image is present in unapprove_carousel for the particular index.
      // we will give preference to unapprove_carousel first.
      if (numUnapprove !== '[]' && numUnapprove && numUnapprove !== 'null') {
        const carouselUnapproved: any = JSON.parse(numUnapprove);
        if (carouselUnapproved[index]) {
          return (
            'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' +
            carouselUnapproved[index]
          );
        } else {
          if (carousel[index]) {
            return (
              'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' +
              carousel[index]
            );
          } else {
            return '../../../assets/plus.svg';
          }
        }
      } else {
        if (carousel[index]) {
          return (
            'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' +
            carousel[index]
          );
        } else {
          return '../../../assets/plus.svg';

        }
      }
    } else if (num2) {
      return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + num2;
    } else {
      return '../../../assets/plus.svg';

    }
  }
  getProfilesPhotoName(
    num: string, // carousel
    numUnapprove: string, // unapprove_carousel
    num2: string, // photo
    index: number // index
  ): string {
    if (num !== '[]' && num && num !== 'null') {
      const carousel: any = JSON.parse(num);
      // if an image is present in unapprove_carousel for the particular index.
      // we will give preference to unapprove_carousel first.
      if (numUnapprove !== '[]' && numUnapprove && numUnapprove !== 'null') {
        const carouselUnapproved: any = JSON.parse(numUnapprove);
        if (carouselUnapproved[index]) {
          return (
            carouselUnapproved[index]
          );
        } else {
          if (carousel[index]) {
            return (
              carousel[index]
            );
          } else {
            return null;
          }
        }
      } else {
        if (carousel[index]) {
          return (
            carousel[index]
          );
        } else {
          return null;

        }
      }
    } else {
      return null;
    }
  }
  getCarouselCount() {
    const num = this.personalProfileData.carousel;
    if (num !== '[]' && num && num !== 'null') {
      const carousel: object = JSON.parse(num);
      if (carousel) {
        const size = Object.keys(carousel);
        console.log(size.length);
        return this.carouselSize = size.length;
      }
    } else {
      return this.carouselSize = 1;
    }
  }
  previewBack(files, index) {
    console.log(index);
    if (files.length === 0) {
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }
      const reader = new FileReader();
      this.backimagePath = files[0];
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.BackimgURL = reader.result;
        this.uploadPhoto(this.backimagePath, index);
      };
    }
  }
  uploadPhoto(data, index) {
    this.spinner.show();
    const uploadData = new FormData();
    uploadData.append('id', localStorage.getItem('id'));
    uploadData.append('index', index);
    uploadData.append('image', data);
    uploadData.append('is_lead', localStorage.getItem('is_lead'));

    return this.http
      .post(
        'https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture',
        uploadData
      )
      .subscribe(
        (suc) => {
          this.suc = suc;
          console.log('photos', suc);
          if (this.suc.pic_upload_status === 'Y') {
            this.spinner.hide();
            console.log('photo upload successful');
            document.querySelector('#imgProfile' + String(index)).setAttribute('src', this.suc.profile_pic_url);
            this.ngxNotificationService.success('Photo Uploaded Succesfully!');
          } else {
            this.spinner.hide();
            this.ngxNotificationService.error('Photo Upload Unsuccesful!');
          }
        },
        (err) => {
          this.ngxNotificationService.error('Photo could not be Uploaded!');
          // console.log(err);
          console.log(err);
        }
      );
  }
  getUserProfileData(updateData: boolean = false) {
      this.spinner.show();
      this.chatService.getUserProfile(updateData)
        .subscribe(
          (data: any) => {
            console.log(data);
            this.personalProfileData = data.profile ? data.profile : null;
            this.getCarouselCount();
            this.spinner.hide();
          },
          (error: any) => {
            this.spinner.hide();
            console.log(error);
            this.ngxNotificationService.error('Something Went Wrong');
          }
        );
  }
  openPhotoUploadCrop(index: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.minWidth = '70vw';
          dialogConfig.minHeight = '10vh';
          dialogConfig.maxHeight = '90vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.minHeight = '10vh';
          dialogConfig.maxHeight = '90vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.id = 'photoUploadCrop';
    const dialogRef = this.dialog.open(PhotoUploadCropComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      // this.uploadPhoto(data, 1);
      console.log('data recieved in the photo upload component', data);
      this.uploadPhoto(data, index);
    });
  }

    // upload facebook image by first downloading it and then uploading it
    getImage(imageUrl: string, index) {
      this.getBase64ImageFromURL(imageUrl).subscribe((base64Data: string) => {
        this.base64TrimmedURL = base64Data;
        this.createBlobImageFileAndShow(index);
      });
    }
  
    getBase64ImageFromURL(url: string): Observable<string> {
      return new Observable((observer: Observer<string>) => {
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
      // Replace extension according to your media type like this
      return date + '.' + text + '.jpeg';
    }


  checKAndUploadFromFacebook() {
    FB.getLoginStatus((response) => {   // Called after the JS SDK has been initialized.
      this.statusChangeCallback(response);        // Returns the login status.

    });
  }

   //  get facebook login status
   statusChangeCallback(value) {
    console.log(`value is ${value.status}`);

    if (value.status !== 'connected') {
      // tslint:disable-next-line: max-line-length
      window.location.href = `https://www.facebook.com/v8.0/dialog/oauth?client_id=449447648971731&redirect_uri=https://hansmatrimony.com/fourReg&scope=email,public_profile,user_photos,user_gender,user_birthday,user_hometown,user_location`;
    } else {
      localStorage.setItem('fb_token', value.authResponse.accessToken);
      this.getFbData();
    }
  }

  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  getFbData() {
    console.log('Welcome!  Fetching your information.... ');

    // fetch user image
    FB.api('/me/picture',
      'GET',
      { height: '600', width: '400', redirect: 'false' }, (response) => {
        console.log(response.data.url);
        if (response.data.url) {
          this.fetchedFbProfilePic = {
            url: response.data.url,
            user_id: null,
            access_token: null
          };
        }
        this.getFacebookPics();
      });

    // fetch user data
    FB.api('/me',
      'GET',
      { fields: 'email, address, first_name, gender, last_name, birthday, hometown,location' }, (response) => {
        console.log(response);
        this.spinner.hide();
      });
  }

  // get pics from facebook
  getFacebookPics() {
    // fetch user photos
    (window as any).FB.api('/me/albums',
      'GET',
      { fields: 'link,name' }, (response) => {
        console.log('album', response);
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
                  { fields: 'link' }, (res) => {
                    console.log('Photos', res);
                    if (res.data.length > 0) {
                      res.data.forEach((element, index) => {
                        if (index < 7) {
                          if (element && element.id) {
                            (window as any).FB.api(`/${element.id}/picture`,
                              'GET',
                              { redirect: 'false' }, (picRes) => {
                                console.log(picRes);
                                if (picRes.data && picRes.data.url) {
                                  this.setPhotosToEmptyFields(index, picRes.data.url);
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

  setPhotosToEmptyFields(index: any, url: any) {
    const currentImg = this.getProfilesPhotoName(this.personalProfileData.carousel,
      this.personalProfileData.unapprove_carousel,
      this.personalProfileData.photo, index);

    if (!currentImg) {
      this.getImage(url, index);
      }
  }
}