import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

  data: any = null;

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
  authData;
  constructor(
    public dialogRef: MatDialogRef<TodaysPaymentPopupComponent>, @Inject(MAT_DIALOG_DATA) data,
    public languageService: LanguageService,
    private subscriptionservice: SubscriptionserviceService,
    private http: HttpClient,
    private analyticsService: AnalyticsService,
    private ngxNotificationService: NgxNotificationService) {
    this.data = data;
  }
  async ngOnInit() {
    this.subscriptionservice.loadRazorPayScript();
    this.authData = await this.getAuthDataFirst();
    console.log(this.authData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get(`https://partner.hansmatrimony.com/api/getWebsitePlanById?id=${localStorage.getItem('id')}&is_lead=${localStorage.getItem('is_lead')}`, { headers })
      .subscribe(
        (res: any) => {
          if (localStorage.getItem('showRemarrigePlan') && localStorage.getItem('showRemarrigePlan') === '1') {
            for (const a of res) {
              if (a.plan_type === 'Self Service Plan') {
                this.plans.push(a);
              }
            }
          } else {
            for (const a of res) {
              if ((a.plan_type === 'Self Service Plan' || a.plan_type === 'Personalized Plan')
              && a.plan_name !== 'Re-Marriage' && a.category_name !== 'Low income') {
                this.plans.push(a);
              }
            }

          }
          console.log(this.plans);
        },
        (err: any) => {
          this.subscriptionservice.loadRazorPayScript();
        }
      );

    if (localStorage.getItem('id')) {
      this.getCredits();
    }
    if (this.data) {
      this.plan = this.data.plan;
      this.price = this.data.price;
      this.credits = this.data.credits;
      // this.chooseMethod = this.data.chooseMethod;
      this.selectedContainer = this.data.selectedContainer;
      localStorage.setItem('selected_plan', 'plan ' + String(this.data.selectedContainer));
      console.log('plan ' + String(this.data.selectedContainer) + ' is selected');
      this.chooseMethod = this.data.chooseMethod; // is set to true.
      this.getPaytmOrderId();
      this.subscriptionViewed();
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
    this.dialogRef.close({status: 'closed'});
  }

  getAuthDataFirst(): Promise<any> {
    return new Promise<any>((res) => {
      res(JSON.parse(localStorage.getItem('authData')));
    });
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
          this.plan,
          '',
          '',
          localStorage.getItem('mobile_number')
        );
      } else {
        this.getRazorPay(this.price, 'live', this.plan, '', '', '');
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
    const content = this.plans[index].content.split('\n');
    return content;
  }
  container(index: number) {
    this.price = this.setAmount(index);
    this.credits = this.plans[index].content.split(' ')[0];
    this.selectedContainer = index;
    localStorage.setItem('selected_plan', 'plan ' + String(index));
    localStorage.setItem('selected_plan_id', this.plans[index].id);

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
    this.price = '8500';
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
