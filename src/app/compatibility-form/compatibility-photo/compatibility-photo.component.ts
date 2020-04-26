

import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Observable
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

  @ViewChild('photoModal', {static: false}) private photoModal: any;

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
  


  FamilyOptions: Observable < string[] > ;
  constructor(public dialog: MatDialog, private router: Router, private http: HttpClient,
              public fourPageService: FourPageService,
              private ngxNotificationService: NgxNotificationService,  private spinner: NgxSpinnerService) {

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
    const photoBtn = document.getElementById('photoBtn') as HTMLButtonElement;
    photoBtn.disabled = true;
    const uploadData = new FormData();
    uploadData.append('id', localStorage.getItem('id'));
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
      if (index === 1) {
        this.imgURL = this.suc.profile_pic_url;
        this.fourPageService.profile.image1 = this.suc.profile_pic_url;
      } else if (index === 2) {
        this.frontfile = this.suc.profile_pic_url;
        this.fourPageService.profile.image2 = this.suc.profile_pic_url;
      } else {
        this.BackimgURL = this.suc.profile_pic_url;
        this.fourPageService.profile.image3 = this.suc.profile_pic_url;
      }
    } else {
      this.spinner.hide();
      this.ngxNotificationService.error('Photo could not be Uploaded!');
    }
    }, err => {
      this.spinner.hide();
      this.ngxNotificationService.error('Photo could not be Uploaded!');
      console.log(err);
    });
  }

  ngOnInit() {
    if (localStorage.getItem('getListId') && localStorage.getItem('getListLeadId')) {
      this.fourPageService.getListData.subscribe(
        () => {
          this.setPhotoData(this.fourPageService.getProfile());
        }
      );
    }
  }

  setPhotoData(userProfile: Profile) {
        console.log(userProfile);
        this.imgURL = userProfile.image1 ? userProfile.image1 : '';
        this.frontfile = userProfile.image2 ? userProfile.image2 : '';
        this.BackimgURL = userProfile.image3 ? userProfile.image3 : '';
  }
 

  checkForPhoto() {
    if (this.fourPageService.getUserThrough()) {
      this.fourPageService.profile.photoScore = this.photoScore;
      let userProfile = this.fourPageService.profile;
      if (userProfile.image1 === null  || userProfile.image1 === '') {
        return this.ngxNotificationService.error('Select Image 1');
      } else if (userProfile.image2 === null  || userProfile.image2 === '') {
        return this.ngxNotificationService.error('Select Image 2');
      } else if (userProfile.image3 === null  || userProfile.image3 === '') {
        this.fourPageService.form4Completed.emit(true);
        return this.ngxNotificationService.error('Select Image 3');
      } else if (userProfile.photoScore < 1) {
        return this.ngxNotificationService.error('Give a score');
      }
    } else {
      this.skip();
    }
  }

  skip() {
    (window as any).fbq('track', 'FourPageRegistration', {
      value: 15,
      currency: 'INR',
      content_name: localStorage.getItem('RegisterNumber'),
    });
    (window as any).fbq('track', '692972151223870' , 'FourPageRegistration', {
      value: 15,
      currency: 'INR',
      content_name: localStorage.getItem('RegisterNumber'),
    });
    this.gtag_report_conversion('https://hansmatrimony.com/fourReg');
  }

  gtag_report_conversion(url) {
    (window as any).gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC'});
    return false;
  }
}



