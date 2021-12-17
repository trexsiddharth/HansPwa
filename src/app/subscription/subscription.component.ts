import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscriptionserviceService } from '../subscriptionservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';

import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageService } from '.././language.service';
import { TodaysPaymentPopupComponent } from '../todays-payment-popup/todays-payment-popup.component'
import { MatDialogConfig, MatDialog } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { type } from 'os';



@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  plans: any = [];
  plansOnline: any = [];
  plansPersonlised: any = [];
  show1 = true;
  show2 = false;
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
  authData;

  plan = 0;
  benefit;
  value;
  amount;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient,
              private subscriptionService: SubscriptionserviceService,
              private spinner: NgxSpinnerService,
              private browserLocation: Location,
              private router: Router,
              private breakPointObserver: BreakpointObserver,
              private dialog: MatDialog,
              private ngxNotificationService: NgxNotificationService,
              public languageService: LanguageService,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe((data: any) => {
    //   if (data) {
    //     console.log('look here', data.parameter)
    //     this.isActive = (Number(data.parameter) === 0) ? 'online' : 'personalized';
    //   }
    // });
    if (this.router.url.match('1')) {
      this.isActive = 'personalized';
    }
    else {
      this.isActive = 'online';
    }
    if (localStorage.getItem('authData')) {
      this.authData = JSON.parse(localStorage.getItem('authData'));
    }
    this.subscriptionService.loadRazorPayScript();
    this.innerWidth = window.innerWidth;
    const authData = JSON.parse(localStorage.getItem('authData'));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get(
      `https://partner.hansmatrimony.com/api/getWebsitePlanById?id=${localStorage.getItem('id')}
      &is_lead=${localStorage.getItem('is_lead')}`, { headers }).subscribe((res: any) => {
      this.plans = res;
      if (localStorage.getItem('showRemarrigePlan') && localStorage.getItem('showRemarrigePlan') === '1') {
        for (let i = 0; i < this.plans.length; i++) {
          if (this.plans[i].plan_type === 'Self Service Plan') {
            this.plansOnline.push(this.plans[i]);
          }
          else {
            this.plansPersonlised.push(this.plans[i]);
          }
        }
      }
      else {
        if (!localStorage.getItem('low income') && localStorage.getItem('low income') !== 'true') {
          for (let i = 0; i < this.plans.length; i++) {
            if (this.plans[i].plan_name != 'Re-Marriage' &&
              this.plans[i].plan_name != 'Re-Marriage Deluxe') {
              if (this.plans[i].plan_type === 'Self Service Plan') {
                this.plansOnline.push(this.plans[i]);
              } else {
                this.plansPersonlised.push(this.plans[i]);
              }
            }
          }
        } else {
          for (let i = 0; i < this.plans.length; i++) {
            if (this.plans[i].plan_name !== 'Re-Marriage' && this.plans[i].plan_name !== 'Re-Marriage Deluxe') {
              if (this.plans[i].plan_type === 'Self Service Plan') {
                if (this.plans[i].plan_name === 'Basic' && this.plans[i].category_name !== 'Normal'
                  && (this.authData && this.authData.gender === 'Male')) {
                  this.plansOnline.push(this.plans[i]);
                } else if (this.plans[i].plan_name !== 'Basic' && this.plans[i].category_name === 'Normal') {
                  this.plansOnline.push(this.plans[i]);
                }
              }
              else {
                this.plansPersonlised.push(this.plans[i]);
              }
            }
          }
        }
      }
      console.log(this.plansOnline);
      console.log(this.plansPersonlised);
      this.spinner.hide();
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
  images = [
    '../../../assets/Banner1.jpeg',
    '../../../assets/Banner2.jpeg',
    '../../../assets/Banner3.jpeg',
  ];
  togglePersonalized() {
    this.isActive = 'personalized';
    this.selectedContainer = 5;
    //this.container5();
    console.log(this.isActive);
  }
  toggleOnline() {
    this.isActive = 'online';
    this.selectedContainer = 1;
    //this.container1();
    console.log(this.isActive);
  }

  getCredits() {
    // tslint:disable-next-line: max-line-length
    return this.http.post('https://partner.hansmatrimony.com/api/getWhatsappPoint?id=' + localStorage.getItem('id'), { params: { ['id']: localStorage.getItem('id') } }).subscribe(
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
    (window as any).fbq('track', '692972151223870', event, {
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
        this.analyticsEvent('Payement Gateway Opened For ' + this.price);

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
  openTodaysPopupAd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.maxWidth = '30vw';
          dialogConfig.minHeight = '80vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.minHeight = '70vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.data = {
      plan: this.plan,
      chooseMethod: true,
      selectedContainer: this.selectedContainer,
      price: this.price,
      credits: this.credits
    };
    dialogConfig.id = 'todaysPopup';
    const dialogRef = this.dialog.open(TodaysPaymentPopupComponent, dialogConfig);
  }
  setAmount(index: number, type: number) {
    if (type === 0) {
      return this.plansOnline[index].amount - (this.plansOnline[index].amount * this.plansOnline[index].discount / 100);
    }
    else {
      return this.plansPersonlised[index].amount - (this.plansPersonlised[index].amount * this.plansPersonlised[index].discount / 100);
    }
  }
  setContent(index: number, type: number) {
    if (type == 0) {
      let content = this.plansOnline[index].content.split(',');
      return content;
    }
    else {
      let content = this.plansPersonlised[index].content.split(';');
      return content;
    }
  }
  container(index: number, type: number) {
    this.price = this.setAmount(index, type);
    this.credits = (type == 0) ? this.plansOnline[index].contacts : this.plansPersonlised[index].contacts;
    this.selectedContainer = (type == 0) ? index + 1 : this.plansOnline.length + 1;
    this.plan = type;
    this.openTodaysPopupAd();
  }

  container1() {
    this.price = '2800';
    this.credits = '45';
    this.selectedContainer = 1;
    //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
    this.openTodaysPopupAd();
  }
  container2() {
    this.price = '4500';
    this.credits = '90';
    this.selectedContainer = 2;
    //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
    this.openTodaysPopupAd();
  }
  container3() {
    this.price = '7500';
    this.credits = '45';
    this.selectedContainer = 3;
    //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
    this.openTodaysPopupAd();
  }

  // container4() {
  //   this.price = '4500';
  //   this.credits = '45';
  //   this.selectedContainer = 4;
  //   //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
  //   this.openTodaysPopupAd();
  // }

  container4() {
    this.price = '11000';
    this.credits = '5';
    this.selectedContainer = 4;
    //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
    this.openTodaysPopupAd();
  }
  container5() {
    this.price = '17000';
    this.credits = '5';
    this.selectedContainer = 5;
    //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
    this.openTodaysPopupAd();
  }
  container6() {
    this.price = '25000';
    this.credits = '5';
    this.selectedContainer = 6;
    //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
    this.openTodaysPopupAd();
  }
  container7() {
    this.price = '31000';
    this.credits = '5';
    this.selectedContainer = 7;
    //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
    this.openTodaysPopupAd();
  }

}

