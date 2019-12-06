
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

    const firststepdata = new URLSearchParams();
    firststepdata.set('relation', this.PageOne.value.create);
    firststepdata.set('mobile', this.PageOne.value.phone);

    // tslint:disable-next-line: max-line-length
    return this.http.post('https://partner.hansmatrimony.com/api/' + 'createZeroPageProfilePWA?' + firststepdata , null).subscribe((res: any) => {
      console.log('first', res);

      if (res.zeroth_page_status === 'Y') {
        this.dialogRef.close({'success': res.zeroth_page_status});
      }

    }, err => {
      this.spinner.hide();
      this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!', 'danger');
      console.log(err);
    });
  }


  ngOnInit() {
  }
}


