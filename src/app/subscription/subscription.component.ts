import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscriptionserviceService } from '../subscriptionservice.service';
import {  MatDialogConfig } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  plans: any = [];
  show1  = true;
  show2  = false;
  points: any;
  registrationFees: any;
  innerWidth: any;
  dialogData: any;
  formData: any;
  price: any;
  selectedContainer: number;
  currentOnlineStatus;
  currentPersonalizedStatus;
  active = 'online';

  plan;
  benefit;
  value;
  amount;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private subscriptionService: SubscriptionserviceService,
              private spinner: NgxSpinnerService, private ngxNotificationService: NgxNotificationService) { }

  ngOnInit() {
    this.loadRazorPayScript();
    this.innerWidth = window.innerWidth;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get('https://partner.hansmatrimony.com/api/subscription', {headers}).subscribe((res: any) => {
      this.plans = res;
      this.spinner.hide();
      this.container1();
      console.log(this.plans);
    }, (err: any) => {
      this.spinner.hide();
      this.ngxNotificationService.error('Something went wrong', 'danger');
    });

    if (localStorage.getItem('id')) {
      this.getCredits();
    }
  }

  loadRazorPayScript() {
    const razor = document.getElementById('razorPay');
    if (!razor) {
      const fileName = document.createElement('script');
      fileName.async = true;
      fileName.setAttribute('type', 'text/javascript');
      fileName.setAttribute('src', 'https://checkout.razorpay.com/v1/checkout.js');
      fileName.id = 'razorPay';
      document.body.appendChild(fileName);
    }
  }

  togglePersonalized() {
    this.active = 'personalized';
    this.selectedContainer = 4;
  }
  toggleOnline() {
    this.active = 'online';
    this.selectedContainer = 1;
  }

  getCredits() {
    // tslint:disable-next-line: max-line-length
    return this.http.post('https://partner.hansmatrimony.com/api/getWhatsappPoint?id=' + localStorage.getItem('id'), {params: {['id']: localStorage.getItem('id')}}).subscribe(
      (data: any) => {
         this.points = data.whatsapp_points;
         console.log(this.points);
      },
     (error: any) => {
       console.log(error);
     }
    );
   }

   getRazorPay(amt: any, type: any, plan: any, name: any, email: any, phone: any) {
     // plan = 0 for online plans and plan = 1 for personalized plans
     if (plan === 0) {
      return this.subscriptionService.payNowT(amt, type, 0, name, email, phone);
     } else {
          // tslint:disable-next-line: no-unused-expression
          return this.subscriptionService.payNowT(amt, type, 1, name, email, phone);
     }
   }

   @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
}

Analytics(type: string, category: string, action: string) {
  (window as any).ga('send', 'event', category, action, {
    hitCallback: () => {

      console.log('Tracking ' + type + ' successful');

    }

  });
}

   openDialog() {
     if (this.price) {
    if (localStorage.getItem('mobile_number')) {
      this.getRazorPay(this.price, 'live', 0, '', '', localStorage.getItem('mobile_number'));
      } else {
        this.getRazorPay(this.price, 'live', 0, '', '', '');
      }
    this.Analytics('RazorPay Payement Gateway', 'RazorPay Payement Gateway Opened',
     'Payement Gateway Opened For ' + this.price );
     } else {
        this.ngxNotificationService.error('Something Went Wrong');
     }
  }

  container1() {
    this.price = '3500';
    this.selectedContainer = 1;
   
  }
  container2() {
    this.price = '5500';
    this.selectedContainer = 2;
   
  }
  container3() {
    this.price = '5500';
    this.selectedContainer = 3;
    
  }

  container4() {
    this.price = '5500';
    this.selectedContainer = 4;
    
  }

  container5() {
    this.price = '19000';
    this.selectedContainer = 5;

  }
  container6() {
    this.price = '25000';
    this.selectedContainer = 6;

  }
  container7() {
    this.price = '31000';
    this.selectedContainer = 7;
  }
  container8() {
    this.price = '11000';
    this.selectedContainer = 8;
  }

}

