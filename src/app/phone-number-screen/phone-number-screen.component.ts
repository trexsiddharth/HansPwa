import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {  NotificationsService } from '../notifications.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { VerifyOtpComponent } from '../verify-otp/verify-otp.component';

@Component({
  selector: 'app-phone-number-screen',
  templateUrl: './phone-number-screen.component.html',
  styleUrls: ['./phone-number-screen.component.css']
})
export class PhoneNumberScreenComponent implements OnInit {
  numberCheck;
  phoneNumber;
  loginRegister;


  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              public notification: NotificationsService,
              private spinner: NgxSpinnerService,
              private dialog: MatDialog,
              private breakPointObserver: BreakpointObserver,
              private ngxNotificationService: NgxNotificationService,
              private router: Router ) {
    this.phoneNumber = this.formBuilder.group({
      phone: [null, Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {
    this.numberCheck = null;
    if (localStorage.getItem('mobile_number')) {
      this.router.navigateByUrl('home');
    } else {
      localStorage.setItem('id', '');
      localStorage.setItem('gender', '');
      localStorage.setItem('mobile_number', '');
      localStorage.setItem('is_lead', '');
      localStorage.setItem('RegisterNumber', '');
    }
    this.spinner.hide();
  }


  submitPhone() {

this.spinner.show();
localStorage.setItem('is_lead', '');
if (this.phoneNumber.value.phone && this.phoneNumber.value.phone !== '') {
  // tslint:disable-next-line: max-line-length
this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : this.phoneNumber.value.phone, ['fcm_id'] : this.notification.getCurrentToken()}}).subscribe(res => {
console.log(res);
if (res.registered === 1) {
  // this.openVerificationDialog(res.is_lead);
  localStorage.setItem('mobile_number', this.phoneNumber.value.phone);
  localStorage.setItem('is_lead', res.is_lead);
  this.router.navigateByUrl('chat');
} else {
  this.ngxNotificationService.info('You are not registered with us, Kindly register');
  localStorage.setItem('RegisterNumber', this.phoneNumber.value.phone);
  this.router.navigateByUrl('reg');
}
this.spinner.hide();
}, err => {
this.spinner.hide();
console.log(err);
});
} else {
this.ngxNotificationService.info('Enter a valid number');
this.spinner.hide();
}

  }

  openVerificationDialog(isLead: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.maxWidth = '30vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        }
      }
    );

    dialogConfig.data = {
      mobile : this.phoneNumber.value.phone,
      is_lead: isLead
    };
    const dialogRef = this.dialog.open(VerifyOtpComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          if (data.success === 'verified') {
            localStorage.setItem('mobile_number', this.phoneNumber.value.phone);
            localStorage.setItem('is_lead', data.is_lead);
            this.router.navigateByUrl('chat');
          } else { return; }
        }
      }
    );
  }

  try() {
   
    // tslint:disable-next-line: max-line-length
    (window as any).location = `truecallersdk://truesdk/web_verify?requestNonce=${Math.floor(Math.random() * 100000000) + 1}&partnerKey=0Jsfr258a371a13bd4fbf905228721f9fa2c2&partnerName=Hans Matrimony&lang=en&title=Login&skipOption=USE ANOTHER MOBILE NUMBER`;

    setTimeout(() => {

  if ( document.hasFocus() ) {
    
    this.ngxNotificationService.error('truecaller not found');
     // Truecaller app not present on the device and you redirect the user 
     // to your alternate verification page
  } else {
    this.ngxNotificationService.error('truecaller  found');
     // Truecaller app present on the device and the profile overlay opens
     // The user clicks on verify & you'll receive the user's access token to fetch the profile on your 
     // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
  }
}, 600);
  }

}
