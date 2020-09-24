import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';
import { timeout, retry, catchError } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PhotoUploadCropComponent } from 'src/app/photo-upload-crop/photo-upload-crop.component';
import { BreakpointObserver } from '@angular/cdk/layout';
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
    public ngxNotificationService: NgxNotificationService,
    public breakPointObserver: BreakpointObserver,
    private dialog: MatDialog,) { }

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
  public message: string;
  userId: any;
  userIsLead: any;
  suc: any = [];
  BackimgURL;
  carouselSize;
  personalProfileData: any;
  backimagePath;

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
    }
    else {
      return '../../../assets/plus.svg';

    }
  }
  getCarouselCount() {
    let num = this.personalProfileData.carousel;
    if (num !== '[]' && num && num !== 'null') {
      const carousel: object = JSON.parse(num);
      if (carousel) {
        let size = Object.keys(carousel);
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
            console.log("photo upload successful")
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
  getUserProfileData() {
    if (this.userId || localStorage.getItem('id')) {
      this.spinner.show();
      const myprofileData = new FormData();
      myprofileData.append(
        'id',
        this.userId ? this.userId : localStorage.getItem('id')
      );
      myprofileData.append('contacted', '1');
      myprofileData.append(
        'is_lead',
        this.userIsLead ? this.userIsLead : localStorage.getItem('is_lead')
      );
      // tslint:disable-next-line: max-line-length
      return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', myprofileData).pipe(
        timeout(7000),
        retry(2),
        catchError((e) => {
          this.ngxNotificationService.error(
            'Server Time Out, Try Again Later'
          );
          throw new Error('Server Timeout ' + e);
        })
      )
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
    } else {
      this.ngxNotificationService.error('No user found');
    }
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
          dialogConfig.minWidth = '40vw';
          dialogConfig.minHeight = '10vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.minHeight = '10vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.id = 'photoUploadCrop';
    const dialogRef = this.dialog.open(PhotoUploadCropComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      //this.uploadPhoto(data, 1);
      console.log('data recieved in the photo upload component', data);
      this.uploadPhoto(data, index);
    });
  }
}
