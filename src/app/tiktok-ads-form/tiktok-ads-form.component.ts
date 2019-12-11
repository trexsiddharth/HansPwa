
import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  Router
} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/';
export interface StateGroup {
  letter: string;
  names: string[];
}
export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}

@Component({
  selector: 'app-tiktok-ads-form',
  templateUrl: './tiktok-ads-form.component.html',
  styleUrls: ['./tiktok-ads-form.component.css']
})

export class TiktokAdsFormComponent implements OnInit {
  @ViewChild('otpModal', {static: false}) private otpModal: any;

  gender;
  birthdayValid;
  PageOne: FormGroup;
  otpForm: FormGroup;
  numberCheck: string;
  changeNumber = false;
  isCompleted1 = false;
  otpStatus = false;
  createProfile: string[] = ['स्वयं', 'बेटा', 'बेटी', 'भाई', 'बहन', 'अन्य'];


  constructor(public dialogRef: MatDialogRef<TiktokAdsFormComponent>, private http: HttpClient,
              public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {
    this.PageOne = this._formBuilder.group({
      create: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])]
    });
  }



  Cross_click() {
    this.dialog.closeAll();
  }

  submitForm() {
    const tiktokForm = new FormData();
    tiktokForm.append('mobile', this.PageOne.value.phone);
    tiktokForm.append('looking_for', '');
    return this.http.post<any>('https://partner.hansmatrimony.com/api/tiktok' , tiktokForm ).subscribe(res => {
      console.log(res);
      if (res.success === 1) {
        this.Analytics('TikTok Submit', 'TikTok FormSubmit', 'TikTok Form Submitted');
        this.dialog.closeAll();
        this.ngxNotificationService.success('आपके रिस्पांस के लिए धन्यवाद् हम आपको जल्द संपर्क करेंगे।');
      }
    });
  }

  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');

      }

    });
  }

  ngOnInit() {
  }
}


