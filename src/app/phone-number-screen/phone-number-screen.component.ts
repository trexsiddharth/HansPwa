import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {  NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-phone-number-screen',
  templateUrl: './phone-number-screen.component.html',
  styleUrls: ['./phone-number-screen.component.css']
})
export class PhoneNumberScreenComponent implements OnInit {
  
  numberCheck: string;
  phoneNumber;
  loginRegister;


  constructor(private _formBuilder: FormBuilder, private http: HttpClient, public notification: NotificationsService,
              private spinner: NgxSpinnerService, private ngxNotificationService: NgxNotificationService, private router: Router ) {
    this.phoneNumber = this._formBuilder.group({
      phone: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {
    if (localStorage.getItem('mobile_number')) {
      this.router.navigateByUrl('home');
    } else {
      document.querySelector('body').style.backgroundImage = 'none';
      document.querySelector('body').style.background = '#34b7f1';
      localStorage.setItem('id', '');
      localStorage.setItem('gender', '');
      localStorage.setItem('mobile_number', '');
    }
    this.spinner.hide();
  }

  submitPhone() {
    this.spinner.show();
  // tslint:disable-next-line: max-line-length
    this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : this.phoneNumber.value.phone, ['fcm_id'] : this.notification.getCurrentToken()}}).subscribe(res => {
    console.log(res);
    if (res.registered === 1) {
      document.querySelector('body').style.background = 'white';
      document.querySelector('body').style.backgroundImage = 'url(\'../../assets/bgicon.png\')';
      document.querySelector('body').style.backgroundSize = 'cover';
      localStorage.setItem('mobile_number', this.phoneNumber.value.phone);
      this.router.navigateByUrl('chat');
      this.loginRegister = 'Login';
    } else {
      this.ngxNotificationService.info('You are not registered with us');
      this.loginRegister = 'Register';
      localStorage.setItem('RegisterNumber', this.phoneNumber.value.phone);
    }
    this.spinner.hide();
  }, err => {
    this.spinner.hide();
    console.log(err);
  });
  }
  registerClicked() {
    this.router.navigateByUrl('reg');
  }

}
