
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
  Router, ActivatedRoute
} from '@angular/router';

import {
  MatDialog
} from '@angular/material/';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

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
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent implements OnInit {

  @ViewChild('photoModal', {static: false}) private photoModal: any;

  isCompleted5 = false;
  public imagePath;
  fullimagePath;
  frontimagePath;
  backimagePath;
  imgURL: any = '../../assets/person.svg';
  BackimgURL = '../../assets/person.svg';
  frontfile = '../../assets/person.svg';
  fullimgURL;
  fd: false;
  suc: any = [];
  currentAge: number;
  public message: string;
  id;
  isLead;




  FamilyOptions: Observable < string[] > ;
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router, private http: HttpClient,
              private ngxNotificationService: NgxNotificationService,  private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (route: any) => {
        console.log(route.params);
        if (route) {
        if (route.params.mobile) {
            localStorage.setItem('mobile_number', route.params.mobile);
            this.checkUrl(route.params.mobile).subscribe(
              (data: any) => {
                if(data.registered == 1) {
                  localStorage.setItem('authData', JSON.stringify(data))
                  this.id = data.id;
                  this.isLead = data.is_lead;
                } else {
                  this.router.navigateByUrl('fourReg')
                }
              }
            )
          }
        if (route.params.id) {
          this.id = route.params.id;
        }
        if (route.params.isLead) {
          this.isLead = route.params.isLead;
        }
      }
    });
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
    uploadData.append('id', this.id);
    uploadData.append('index', index);
    uploadData.append('image', data);
    uploadData.append('is_lead', this.isLead);

    return this.http.post('https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture', uploadData).subscribe(suc => {
      this.suc = suc;
      if (this.suc.pic_upload_status === 'Y') {
      console.log('photos', suc);
      this.spinner.hide();
      this.ngxNotificationService.success('Photo Uploaded Succesfully!');
      photoBtn.disabled = false;
      if (index === 1) {
        this.imgURL = this.suc.profile_pic_url;
      } else if (index === 2) {
        this.frontfile = this.suc.profile_pic_url;
      } else {
        this.BackimgURL = this.suc.profile_pic_url;
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



  Analytics(type: string, category: string, action: string) {
    if (!localStorage.getItem('getListId') && !localStorage.getItem('getListMobile')) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');

      }
    });

     // gtag app + web
    (window as any).gtag('event', category , {
      action: action
    });
  }
  }

  skip() {
      this.router.navigateByUrl('chat');
  }

  gtag_report_conversion() {
    (window as any).gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC'});
    return false;
  }

  checkUrl(mobile: string): Observable<any> {
    if (localStorage.getItem('fcm_app')) {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: mobile } });
    } else {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: mobile} });
    }
  }
}




