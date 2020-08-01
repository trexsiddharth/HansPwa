import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';
import { LanguageService } from 'src/app/language.service';
import { SubscriptionserviceService } from 'src/app/subscriptionservice.service';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private spinner: NgxSpinnerService,
    private ngxNotificationService: NgxNotificationService
  ) {}
  ngOnInit() {
    this.subscriptionservice.loadRazorPayScript();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .get('https://partner.hansmatrimony.com/api/subscription', { headers })
      .subscribe(
        (res: any) => {
          this.plans = res;
          //this.container1();
          console.log(this.plans);
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
    this.dialogRef.close();
    localStorage.setItem('oId', null);
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
  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {
        console.log('Tracking ' + type + ' successful');
      },
    });
    // gtag app + web
    (window as any).gtag('event', category, {
      action: action,
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
      this.Analytics(
        'RazorPay Payement Gateway',
        'RazorPay Payement Gateway Opened',
        'Payement Gateway Opened For ' + this.price
      );

      this.facebookAnalytics('InitiateCheckout');
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
    this.chooseMethod = false;
    localStorage.setItem('oId', null);
  }

  container1() {
    this.price = '2800';
    this.credits = '45';
    this.selectedContainer = 1;
    console.log('plan 1 selected');
    // this.HandlePayment();
    this.chooseMethod = true;
    this.getPaytmOrderId();
  }
  container2() {
    this.price = '5500';
    this.credits = '90';
    this.selectedContainer = 2;
    console.log('plan 2 selected');
    // this.HandlePayment();
    this.chooseMethod = true;
    this.getPaytmOrderId();
  }
  container3() {
    this.price = '8500';
    this.credits = '45';
    this.selectedContainer = 3;
    console.log('plan 3 selected');
    // this.HandlePayment();
    this.chooseMethod = true;
    this.getPaytmOrderId();
  }

  getPaytmOrderId() {
    const formData = new FormData();
    formData.append('mobile', '9910395820');
    formData.append('amount', this.price);
    this.http.post('https://partner.hansmatrimony.com/api/order', formData).subscribe(
      (data: any) => {
        console.log(data);
        if (data) {
            const paytmData = JSON.parse(data.response);
            this.oId = data.order_id;
            localStorage.setItem('oId', data.order_id);
            this.txnToken = paytmData.body.txnToken;
            this.mId = 'bkjPis66135619933053';
        }
      },
      err => {
        console.log('error', err);
      }
    );
  }

  getTransactionStatus() {
    const formData = new FormData();
    formData.append('orderId', localStorage.getItem('oId'));

    this.http.post('https://partner.hansmatrimony.com/api/transactionStatus', formData).subscribe(
      (data: any) => {
          console.log(data);
          localStorage.setItem('oId', null);
          alert('Payment Successful');
      },
      err => {
        console.log(err);
      }
    );
}

onPaytm() {
  const form = document.getElementById('pay');
            // tslint:disable-next-line: max-line-length
  (form as any).action = `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=bkjPis66135619933053&orderId=${this.oId}`;
  (form as any).submit();
}

}
