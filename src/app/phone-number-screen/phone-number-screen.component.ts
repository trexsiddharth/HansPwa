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
  authData;


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
      localStorage.removeItem('id');
      localStorage.removeItem('gender');
      localStorage.removeItem('mobile_number');
      localStorage.removeItem('is_lead');
      localStorage.removeItem('RegisterNumber');
    }
    this.spinner.hide();
  }


  submitPhone() {

this.spinner.show();
localStorage.setItem('is_lead', '');
if (this.phoneNumber.value.phone && this.phoneNumber.value.phone !== '' && !localStorage.getItem('fcm_app')) {
  // tslint:disable-next-line: max-line-length
this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : this.phoneNumber.value.phone
, ['fcm_id'] : this.notification.getCurrentToken()}}).subscribe(res => {
console.log(res);
this.authData = res;
if (res.registered === 1) {
  this.openVerificationDialog(res.is_lead);
  // localStorage.setItem('mobile_number', this.phoneNumber.value.phone);
  // localStorage.setItem('is_lead', res.is_lead);
  // localStorage.setItem('id', res.id);
  // this.router.navigateByUrl('chat');
} else {
  localStorage.setItem('RegisterNumber', this.phoneNumber.value.phone);
  this.analyticsEvent('Registered through Four Page Registration Page Zero');
   // gtag app + web
  (window as any).gtag('config', 'G-1ES443XD0F' , {
    user_id: this.phoneNumber.value.phone
  });
  this.ngxNotificationService.info('You are not registered with us, Kindly register');
  this.router.navigateByUrl('fourReg');
}
this.spinner.hide();
}, err => {
this.spinner.hide();
console.log(err);
});
}  else if (this.phoneNumber.value.phone && this.phoneNumber.value.phone !== '' && localStorage.getItem('fcm_app')) {
  this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : this.phoneNumber.value.phone
, ['fcm_app'] : localStorage.getItem('fcm_app')}}).subscribe(res => {
console.log(res);
this.authData = res;
if (res.registered === 1) {
  this.openVerificationDialog(res.is_lead);
  // localStorage.setItem('mobile_number', this.phoneNumber.value.phone);
  // localStorage.setItem('is_lead', res.is_lead);
  // localStorage.setItem('id', res.id);
  // this.router.navigateByUrl('chat');
} else {
  localStorage.setItem('RegisterNumber', this.phoneNumber.value.phone);
  this.analyticsEvent('Registered through Four Page Registration Page Zero');
   // gtag app + web
  (window as any).gtag('config', 'G-1ES443XD0F' , {
    user_id: this.phoneNumber.value.phone
  });
  this.ngxNotificationService.info('You are not registered with us, Kindly register');
  this.router.navigateByUrl('fourReg');
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
            localStorage.setItem('authData', JSON.stringify(this.authData));
            localStorage.setItem('mobile_number', this.phoneNumber.value.phone);
            localStorage.setItem('is_lead', data.is_lead);
            localStorage.setItem('id', this.authData.id);
            this.router.navigateByUrl('chat');
          } else { return; }
        }
      }
    );
  }

  analyticsEvent(event) {
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

