import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from '../notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-number-screen',
  templateUrl: './phone-number-screen.component.html',
  styleUrls: ['./phone-number-screen.component.css']
})
export class PhoneNumberScreenComponent implements OnInit {
  numberCheck: string;
  phoneNumber;


  constructor(private _formBuilder: FormBuilder, private http: HttpClient,
              private spinner: NgxSpinnerService, public notification: NotificationsService, private router: Router ) {
    this.phoneNumber = this._formBuilder.group({
      phone: ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {
    document.querySelector('body').style.backgroundImage = 'none';
    document.querySelector('body').style.background = '#34b7f1';
  }
  submitPhone() {
    this.spinner.show();
  // tslint:disable-next-line: max-line-length
    this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : this.phoneNumber.value.phone, ['fcm_id'] : this.notification.getCurrentToken()}}).subscribe(res => {
    console.log(res);
    if (res.registered === 1) {
      this.router.navigateByUrl('chat');
    }
    this.spinner.hide();
  }, err => {
    this.spinner.hide();
    console.log(err);
  });
  }

}
