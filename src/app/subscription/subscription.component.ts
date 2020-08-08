import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscriptionserviceService } from '../subscriptionservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';

import {Location} from '@angular/common';
import { Router } from '@angular/router';

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
  credits;
  selectedContainer: number;
  currentOnlineStatus;
  currentPersonalizedStatus;
  isActive = 'online';

  plan;
  benefit;
  value;
  amount;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient,
              private subscriptionService: SubscriptionserviceService,
              private spinner: NgxSpinnerService,
              private browserLocation: Location,
              private router: Router,
              private ngxNotificationService: NgxNotificationService) { }

  ngOnInit() {
    this.subscriptionService.loadRazorPayScript();
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
    });

    if (localStorage.getItem('id')) {
      this.getCredits();
    }
    if (localStorage.getItem('mobile_number')) {
      this.subscriptionViewed();
    }
  }


  togglePersonalized() {
    this.isActive = 'personalized';
    this.selectedContainer = 5;
    this.container5();
    console.log(this.isActive);
  }
  toggleOnline() {
    this.isActive = 'online';
    this.selectedContainer = 1;
    this.container1();
    console.log(this.isActive);
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
      return this.subscriptionService.payNowT(amt, type, 0, name, email, phone, this.credits);
     } else {
          // tslint:disable-next-line: no-unused-expression
          return this.subscriptionService.payNowT(amt, type, 1, name, email, phone, this.credits);
     }
   }

   @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
}

subscriptionViewed() {
  const formData = new FormData();
  formData.append('mobile', localStorage.getItem('mobile_number'));
  this.http.post('https://partner.hansmatrimony.com/api/isSubscriptionViewed', formData).subscribe(
    (data: any) => {
     console.log(data);
     this.analyticsEvent('Subscription Seen');
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

facebookAnalytics(event) {
  (window as any).fbq('track', event, {
    value: localStorage.getItem('id'),
    content_name: localStorage.getItem('mobile_number'),
  });
  (window as any).fbq('track', '692972151223870' , event, {
    value: localStorage.getItem('id'),
    content_name: localStorage.getItem('mobiler_number'),
  });
}

   openDialog() {
     if (localStorage.getItem('mobile_number')) {

     if (this.price) {
    if (localStorage.getItem('mobile_number')) {
      this.getRazorPay(this.price, 'live', 0, '', '', localStorage.getItem('mobile_number'));
      } else {
        this.getRazorPay(this.price, 'live', 0, '', '', '');
      }
    this.analyticsEvent('Payement Gateway Opened For ' + this.price );

    this.subscriptionViewed();
    

    this.facebookAnalytics('InitiateCheckout');
     } else {
        this.ngxNotificationService.error('Something Went Wrong');
     }

    } else {
      this.ngxNotificationService.warning('Please Login First');
      this.router.navigateByUrl('phone-number');
    }
  }

  goBack() {
    this.browserLocation.back();
  }

  container1() {
    this.price = '2800';
    this.credits = '45';
    this.selectedContainer = 1;
    document.getElementById('planButton').scrollIntoView({behavior: 'smooth'});
  }
  container2() {
    this.price = '4500';
    this.credits = '90';
    this.selectedContainer = 2;
    document.getElementById('planButton').scrollIntoView({behavior: 'smooth'});
  }
  container3() {
    this.price = '6500';
    this.credits = '45';
    this.selectedContainer = 3;
    document.getElementById('planButton').scrollIntoView({behavior: 'smooth'});
  }

  container4() {
    this.price = '4500';
    this.credits = '45';
    this.selectedContainer = 4;
    document.getElementById('planButton').scrollIntoView({behavior: 'smooth'});
  }

  container5() {
    this.price = '11000';
    this.credits = '5';
    this.selectedContainer = 5;
    document.getElementById('planButton').scrollIntoView({behavior: 'smooth'});

  }
  container6() {
    this.price = '17000';
    this.credits = '5';
    this.selectedContainer = 6;
    document.getElementById('planButton').scrollIntoView({behavior: 'smooth'});

  }
  container7() {
    this.price = '25000';
    this.credits = '5';
    this.selectedContainer = 7;
    document.getElementById('planButton').scrollIntoView({behavior: 'smooth'});
  }
  container8() {
    this.price = '31000';
    this.credits = '5';
    this.selectedContainer = 8;
    document.getElementById('planButton').scrollIntoView({behavior: 'smooth'});
  }

}

