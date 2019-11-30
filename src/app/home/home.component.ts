import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InstallPromptService } from '../install-prompt.service';



declare var Razorpay: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 clickToggle = false;
 isLogin = 'false';
 callbackDetails: any;
 events: string[] = [];
  opened: boolean;
  socialInfo: string;
  eventA2HS;
  innerWidth;
  loginStatus = true;
  contactNumber;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, public dialog: MatDialog, private promptService: InstallPromptService,
              public router: Router, private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {

  }
  register() {
    this.spinner.show();
    this.router.navigateByUrl('register');
  }

  onboarding() {
    this.spinner.show();
    if (this.eventA2HS) {
      this.router.navigateByUrl('chat', this.eventA2HS);
    } else {
      this.router.navigateByUrl('chat');
    }
      }
  ngOnInit() {
    this.contactNumber = localStorage.getItem('mobile_number');
    if (this.contactNumber) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
    this.innerWidth = window.innerWidth;
    this.promptService.savePrompt();
  }

  subscription() {
    this.spinner.show();
    this.router.navigateByUrl('/subscription');
  }
  callBack(phone) {
    console.log(phone.value);
    // tslint:disable-next-line: max-line-length
    return this.http.post('https://partner.hansmatrimony.com/api/callBack', {['email']: 'na', ['name']: 'na', ['phone']: phone.value}).subscribe(
     (data: any) => {
       console.log(data);
       this.ngxNotificationService.success('Thank you for showing your interest, We will call you right back!');
     });
 }
  myFunction() {
    this.clickToggle = true;
   }

   logout() {
     this.loginStatus = false;
     localStorage.setItem('mobile_number', '');
     localStorage.setItem('id', '');
     this.opened = false;
   }

}
