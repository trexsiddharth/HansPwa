import { Component, OnInit, Inject } from '@angular/core';
import { LanguageService } from '../language.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
otpForm: FormGroup;
seconds;
showTimer = false;
  constructor(public languageService: LanguageService,
              private http: HttpClient,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<VerifyOtpComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.languageService.setVerificationLanguage();

    this.otpForm = new FormGroup({
      otp1 : new FormControl('', [Validators.required, Validators.min(0), Validators.max(9)]),
      otp2 : new FormControl('', [Validators.required, Validators.min(0), Validators.max(9)]),
      otp3 : new FormControl('', [Validators.required, Validators.min(0), Validators.max(9)]),
      otp4 : new FormControl('', [Validators.required, Validators.min(0), Validators.max(9)])
    });

    this.sendOtp();
  }

  changePlaces(event) {
    const element = document.querySelector(`#verify${event + 1}`) as HTMLInputElement ; // get the sibling element
    console.log(event);
    if (element == null) { // check if its null
     const button =  document.querySelector('.verifyBtn') as HTMLButtonElement;
     button.focus();
    } else {
      element.focus();
    } // focus if not null
    console.log('cngd');
  }

  verifyOtp() {

    if (this.otpForm.valid) {
    const otp = new FormData();
    otp.append('otp', `${this.otpForm.value.otp1}${this.otpForm.value.otp2}${this.otpForm.value.otp3}${this.otpForm.value.otp4}`);
    otp.append('mobile', this.data.mobile);
    return this.http.post<{type: any, message: any}>('https://partner.hansmatrimony.com/api/verifyOTP', otp).subscribe(res => {
      console.log('verify res', res);
      if (res.type === 'success') {
        this.dialogRef.close({
          success: 'verified',
          is_lead: this.data.is_lead
        });
      } else {
        this.showSnackBar('Invalid OTP');
      }
    });

  } else {
    this.showSnackBar('Invalid OTP');
  }
  }

  sendOtp() {
    console.log('number', this.data.mobile);
    const formData = new FormData();
    formData.append('mobile', this.data.mobile );

    return this.http.post<{otp: any}>('https://partner.hansmatrimony.com/api/sendOTP', formData).subscribe(
      (res: any) => {
          console.log(res);
          if (res.type === 'success') {
            this.showSnackBar('Otp Sent Successfully');
            this.setTimer();
          } else {
            this.showSnackBar('Something Went Wrong, Try Again Later');
            this.dialogRef.close();
          }
      }
    );
  }

  setTimer() {
    this.seconds = 45;
    this.showTimer = true;
    const timer = setInterval(() => {
     this.seconds = this.seconds - 1;
     if (this.seconds === 0) {
        clearInterval(timer);
        this.showTimer = false;
     }
   }, 1000);
  }

  changeNumber() {
    this.dialogRef.close();
  }

  cross_click() {
    this.dialogRef.close();
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500
    });
  }

}
