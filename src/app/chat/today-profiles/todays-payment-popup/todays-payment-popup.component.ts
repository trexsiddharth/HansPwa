import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionserviceService } from 'src/app/subscriptionservice.service';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { AnalyticsService } from 'src/app/analytics.service';

@Component({
  selector: 'app-todays-payment-popup',
  templateUrl: './todays-payment-popup.component.html',
  styleUrls: ['./todays-payment-popup.component.css'],
})
export class TodaysPaymentPopupComponent implements OnInit {
  seconds = 59;
  minutes = 0;

  plans: any = [];
  show1 = true;
  show2 = false;
  points: any;
  formData: any;
  price: any;
  credits;
  selectedContainer: number;
  carouselSize;
  chooseMethod = false;

  plan = 0;
  benefit;
  value;
  amount;
  mId;
  oId;
  txnToken;
  images = [
    '../../../assets/popupone.png',
    '../../../assets/popuptwo.png',
    '../../../assets/popupthree.png',
  ];
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(
    public dialogRef: MatDialogRef<TodaysPaymentPopupComponent>,
    public languageService: LanguageService,
    private subscriptionservice: SubscriptionserviceService,
    private http: HttpClient,
    private analyticsService: AnalyticsService,
    private ngxNotificationService: NgxNotificationService
  ) { }
  ngOnInit() {
    this.subscriptionservice.loadRazorPayScript();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get('https://partner.hansmatrimony.com/api/getWebsitePlan', { headers })
      .subscribe(
        (res: any) => {
          this.plans = res;
          console.log(this.plans);
          //console.log(this.plans[0].content.split(" ")[0]);
        },
        (err: any) => {
          this.subscriptionservice.loadRazorPayScript();
        }
      );

    if (localStorage.getItem('id')) {
      this.getCredits();
    }

    this.setTimer();
    setTimeout(() => {
      this.closeDialog();
    }, 100000);
  }
  getImagePhoto(index: number) {
    this.images[index];
  }

  closeDialog() {
    localStorage.removeItem('oId');
    localStorage.removeItem('selected_plan');
    this.dialogRef.close();
  }

  getCredits() {
    return this.http
      .post(
        'https://partner.hansmatrimony.com/api/getWhatsappPoint?id=' +
        localStorage.getItem('id'),
        { params: { ['id']: localStorage.getItem('id') } }
      )
      .subscribe(
        (data: any) => {
          this.points = data.whatsapp_points;
          console.log(this.points);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getRazorPay(
    amt: any,
    type: any,
    plan: any,
    name: any,
    email: any,
    phone: any
  ) {
    if (plan === 0) {
      return this.subscriptionservice.payNowT(
        amt,
        type,
        0,
        name,
        email,
        phone,
        this.credits
      );
    } else {
      return this.subscriptionservice.payNowT(
        amt,
        type,
        1,
        name,
        email,
        phone,
        this.credits
      );
    }
  }


  HandlePayment() {
    if (this.price) {
      if (localStorage.getItem('mobile_number')) {
        console.log(localStorage.getItem('mobile_number'));
        this.getRazorPay(
          this.price,
          'live',
          0,
          '',
          '',
          localStorage.getItem('mobile_number')
        );
      } else {
        this.getRazorPay(this.price, 'live', 0, '', '', '');
      }
      this.closeDialog();
      this.analyticsService.googleAnalytics(
        'RazorPay Payement Gateway Opened For ' + this.price
      );

    } else {
      this.ngxNotificationService.error('Something Went Wrong');
    }
  }
  setTimer() {
    this.minutes = Math.floor(Math.random() * 20) + 10;
    console.log(this.seconds);
    const timer = setInterval(() => {
      this.seconds = this.seconds - 1;
      if (this.seconds === -1 && this.minutes !== 0) {
        this.seconds = 60;
        this.minutes = this.minutes - 1;
      } else if (this.minutes === 0 && this.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  goBack() {
    localStorage.removeItem('oId');
    localStorage.removeItem('selected_plan');
    this.chooseMethod = false;
  }
  setAmount(index: number) {
    return this.plans[index].amount - (this.plans[index].amount * this.plans[index].discount / 100);
  }
  setContent(index: number) {
    let content = this.plans[index].content.split('\n');
    return content;
  }
  container(index: number) {
    this.price = this.setAmount(index);
    this.credits = this.plans[index].content.split(" ")[0];
    this.selectedContainer = index;
    localStorage.setItem('selected_plan', 'plan ' + String(index));
    this.chooseMethod = true;
    this.getPaytmOrderId();
    this.subscriptionViewed();
  }
  container1() {
    this.price = '2800';
    this.credits = '45';
    localStorage.setItem('selected_plan', 'plan 1');
    this.selectedContainer = 1;
    console.log('plan 1 selected');
    // this.HandlePayment();
    this.chooseMethod = true;
    this.getPaytmOrderId();
    this.subscriptionViewed();

  }
  container2() {
    this.price = '4500';
    this.credits = '90';
    localStorage.setItem('selected_plan', 'plan 2');
    this.selectedContainer = 2;
    console.log('plan 2 selected');
    // this.HandlePayment();
    this.chooseMethod = true;
    this.getPaytmOrderId();
    this.subscriptionViewed();
  }
  container3() {
    this.price = '1';
    this.credits = '45';
    localStorage.setItem('selected_plan', 'plan 3');
    this.selectedContainer = 3;
    console.log('plan 3 selected');
    // this.HandlePayment();
    this.chooseMethod = true;
    this.getPaytmOrderId();
    this.subscriptionViewed();
  }

  getPaytmOrderId() {
    const formData = new FormData();
    formData.append('mobile', localStorage.getItem('mobile_number'));
    formData.append('amount', this.price);
    this.http.post('https://partner.hansmatrimony.com/api/order', formData).subscribe(
      (data: any) => {
        console.log(data);
        if (data) {
          const paytmData = JSON.parse(data.response);
          this.oId = data.order_id;
          localStorage.setItem('oId', data.order_id);
          this.txnToken = paytmData.body.txnToken;
          // testing mId
          // this.mId = 'bkjPis66135619933053';
          // production mId
          this.mId = 'Twango57803369412564';
        }
      },
      err => {
        console.log('error', err);
      }
    );
  }

  onPaytm() {
    this.analyticsService.googleAnalytics(
      'Paytm Payement Gateway Opened For ' + this.price
    );
    const form = document.getElementById('pay');
    // tslint:disable-next-line: max-line-length
    // staging/ testing url
    // (form as any).action = `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=bkjPis66135619933053&orderId=${this.oId}`;
    // production url
    (form as any).action = `https://securegw.paytm.in/theia/api/v1/showPaymentPage?mid=Twango57803369412564&orderId=${this.oId}`;
    (form as any).submit();
  }

  subscriptionViewed() {
    const formData = new FormData();
    formData.append('mobile', localStorage.getItem('mobile_number'));
    this.http.post('https://partner.hansmatrimony.com/api/isSubscriptionViewed', formData).subscribe(
      (data: any) => {
        console.log(data);
        this.analyticsService.googleAnalytics('Subscription Seen');
        this.analyticsService.facebookAnalytics('InitiateCheckout');
      }
    );
  }
}
