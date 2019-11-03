import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';



declare var Razorpay: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 clickToggle=false;
 isLogin='false';
 callbackDetails:any;
 events: string[] = [];
  opened: boolean;
  socialInfo: string;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, public router: Router, private ngxNotificationService: NgxNotificationService) {

  }
  register() {
this.router.navigateByUrl('register');
  }

  onboarding() {
    this.router.navigateByUrl('chat');
      }
  ngOnInit() {
  }
  subscription() {
    this.router.navigateByUrl('/subscription');
  }
  callBack(phone) {
    console.log(phone.value);
    return this.http.post('https://partner.hansmatrimony.com/api/callBack', {['phone']: phone.value}).subscribe(
     (data: any) => {
       console.log(data);
       this.ngxNotificationService.success('Thank you for showing your interest, We will call you right back!', 'danger');
     });
 }
  myFunction() {
    this.clickToggle = true;
   }

}
