import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SubscriptionserviceService } from '../subscriptionservice.service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-checkout',
  templateUrl: './custom-checkout.component.html',
  styleUrls: ['./custom-checkout.component.css']
})
export class CustomCheckoutComponent implements OnInit {
  checkOutForm = new FormGroup({
    name: new FormControl(null, {validators: [Validators.required]}),
    email: new FormControl(null, {validators: [Validators.required]})
  });
  custId;
  orderId;
  mId;
  oId;
  txnToken;
  constructor(private subscriptionService: SubscriptionserviceService, private http: HttpClient,
              private router: Router,
              private spinner: NgxSpinnerService, private ngxNotificationService: NgxNotificationService, ) { }

  ngOnInit() {
    // this.subscriptionService.loadRazorPayScript();
    // this.subscriptionService.loadPayTmScript();

    if (this.router.url.match('verifyPayment')) {
      this.getTransactionStatus();
    } else {
      this.getPaytmOrderId().subscribe(
        (data: any) => {
          console.log(data);
          if (data) {
              // const formData = new FormData();
              // formData.append('orderId', `HANS_ORDER_${Math.floor(Math.random() * 10000000) + 1}`);
              // formData.append('txnToken', data.body.txnToken);
              // formData.append('mid', 'bkjPis66135619933053');
              const paytmData = JSON.parse(data.response);
              this.oId = data.order_id;
              localStorage.setItem('oId', data.order_id);
              this.txnToken = paytmData.body.txnToken;
              this.mId = 'bkjPis66135619933053';
              // tslint:disable-next-line: max-line-length
              // window.open(`https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=bkjPis66135619933053&orderId=HANS_ORDER_${Math.floor(Math.random() * 10000000) + 1}`);
          }
        },
        err => {
          console.log('error', err);
        }
      );
    }
  }

  createSubscription(payMode) {
    const formData = new FormData();
    formData.append('id', localStorage.getItem('id'));
    formData.append('mobile', localStorage.getItem('mobile_number'));
    if (payMode === 'card') {
    formData.append('payment_mode', '0');
    } else {
      formData.append('payment_mode', '1');
    }
    this.http.post('https://partner.hansmatrimony.com/api/createSubscription', formData).subscribe(
      (res: any) => {
        if (res) {
          console.log(res);
          if (res.status === 1) {
            if (res.customer_id && res.customer_id !== '' && res.order_id && res.order_id !== '') {
                this.custId = res.customer_id;
                this.orderId = res.order_id;
                this.customClickButton( payMode);
            }
          } else {
                this.ngxNotificationService.error('Something went wrong. Try again later');
          }
            } else {
              this.ngxNotificationService.error('Something went wrong. Try again later');
            }
      },
      err => {
        console.log(err);
      }
    );
  }

  customClickButton( payMode) {
      if (this.checkOutForm.invalid) { return; }
      if (this.custId && this.orderId && this.custId !== null && this.orderId !== null) {
        // tslint:disable-next-line: max-line-length
      this.subscriptionService.payNowCustom(3100, 'live', 0, this.checkOutForm.value.name, this.checkOutForm.value.email, localStorage.getItem('mobile_number'),payMode ,this.orderId,this.custId);
      } else {
        this.ngxNotificationService.error('Something went wrong, Please try again later');
      }
  }

  openPaytm() {
  // this.subscriptionService.onScriptLoad();
      const form = document.getElementById('pay');
      (form as any).action = `https://securegw-stage.paytm.in/theia/api/v1/showPaymentPage?mid=bkjPis66135619933053&orderId=${this.oId}`;
      (form as any).submit();
  }

  getPaytmOrderId(): Observable<any> {
    const formData = new FormData();
    formData.append('mobile', '9910395820');
    formData.append('amount', '100');
    return this.http.post('https://partner.hansmatrimony.com/api/order', formData);
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

}
