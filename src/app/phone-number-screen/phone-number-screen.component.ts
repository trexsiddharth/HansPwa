import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
import { catchError, switchMap, retry, share, takeUntil } from 'rxjs/operators';
import { Observable, timer, Subject } from 'rxjs';

@Component({
  selector: 'app-phone-number-screen',
  templateUrl: './phone-number-screen.component.html',
  styleUrls: ['./phone-number-screen.component.css']
})
export class PhoneNumberScreenComponent implements OnInit {
  numberCheck;
  phoneNumber: FormGroup;
  loginRegister;
  authData;
  pollingCount = 0;
  // stop true caller polling
  stopPolling = new Subject();


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

    // open true caller for login if installed
    this.callTruecaller();
  }


submitPhone(otpStatus: boolean) {

this.spinner.show();
localStorage.setItem('is_lead', '');
if (this.phoneNumber.value.phone && this.phoneNumber.value.phone !== '' && !localStorage.getItem('fcm_app')) {
  // tslint:disable-next-line: max-line-length
this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : this.phoneNumber.value.phone
, ['fcm_id'] : this.notification.getCurrentToken()}}).subscribe(res => {
console.log(res);
this.authData = res;
if (res.registered === 1) {
  if (otpStatus) {
    this.openVerificationDialog(res.is_lead);
  } else {
  localStorage.setItem('mobile_number', this.phoneNumber.value.phone);
  localStorage.setItem('is_lead', res.is_lead);
  localStorage.setItem('id', res.id);
  localStorage.setItem('authData', JSON.stringify(res));
  this.router.navigateByUrl('chat');
  }
} else {
  localStorage.setItem('RegisterNumber', this.phoneNumber.value.phone);
  this.analyticsEvent('Four Page Registration Page Zero');
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
  if (otpStatus) {
    this.openVerificationDialog(res.is_lead);
  } else {
  localStorage.setItem('mobile_number', this.phoneNumber.value.phone);
  localStorage.setItem('is_lead', res.is_lead);
  localStorage.setItem('id', res.id);
  localStorage.setItem('authData', JSON.stringify(res));
  this.router.navigateByUrl('chat');
  }
} else {
  localStorage.setItem('RegisterNumber', this.phoneNumber.value.phone);
  this.analyticsEvent('Four Page Registration Page Zero');
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

  // check and login through true caller
  callTruecaller() {
    // tslint:disable-next-line: max-line-length
    const randomNumber = Math.floor(Math.random() * 100000000) + 1000000;
    (window as any).location = `truecallersdk://truesdk/web_verify?requestNonce=${randomNumber}&partnerKey=0Jsfr258a371a13bd4fbf905228721f9fa2c2&partnerName=Hans Matrimony&lang=en&title=Login&skipOption=USE ANOTHER MOBILE NUMBER`;

    setTimeout(() => {

  if (document.hasFocus()) {
    console.log('True caller not found');
     // Truecaller app not present on the device and you redirect the user
     // to your alternate verification page
  } else {
    this.getUserFromTrueCaller(randomNumber).pipe(
      catchError(e => {
        throw new Error('True Caller Not Responding');
    })
    )
    .subscribe(
      (response) => {
        this.pollingCount++;
        console.log(response);
        if (this.pollingCount < 10) {
        if (response.status === 1) {
              console.log(response.data);
              const trueData = JSON.parse(response.data);
              if (trueData.phoneNumbers && trueData.phoneNumbers[0]) {
                  console.log(trueData);
                this.submitPhone(false);
              }
              this.stopPolling.next();
          } else if (response.status !== 0) {
            this.ngxNotificationService.error('True Caller Not Responding');
            this.stopPolling.next();
          }
        } else {
          this.stopPolling.next();
        }
      },
      err => {
        this.ngxNotificationService.error('True Caller Not Responding');
        console.log(err);
        this.stopPolling.next();
      }
    );
     // Truecaller app present on the device and the profile overlay opens
     // The user clicks on verify & you'll receive the user's access token to fetch the profile on your
     // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
  }
}, 600);
  }

  getUserFromTrueCaller(requestId): Observable<any> {
    return timer(1, 3000).pipe(
       switchMap(() => this.http.get(`https://partner.hansmatrimony.com/api/getTrueCallerResponse?requestId=${requestId}`)),
       retry(),
       share(),
       takeUntil(this.stopPolling)
    );
   }

   setTruecallerData(trueData) {
    this.phoneNumber.setValue({
      phone: trueData.phoneNumbers[0]
    });
   }

}

