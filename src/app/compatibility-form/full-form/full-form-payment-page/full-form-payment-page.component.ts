import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-kc-notification';
import { FranchiseRegistrationTable } from 'src/app/Model/FranchiseRegistrationTable';
import { SubscriptionserviceService } from 'src/app/subscriptionservice.service';
import { FourPageService } from '../../four-page.service';

@Component({
  selector: 'app-full-form-payment-page',
  templateUrl: './full-form-payment-page.component.html',
  styleUrls: ['./full-form-payment-page.component.css']
})
export class FullFormPaymentPageComponent implements OnInit {

  constructor(private fourPageService: FourPageService,
              private subscriptionservice: SubscriptionserviceService,
              private ngxNotificationService: NgxNotificationService,
              private http: HttpClient,
              private router: Router) { }

  franchiseData: FranchiseRegistrationTable = this.fourPageService.franchiseData;
  oId;
  txnToken;
  mId;
  ngOnInit() {
    this.subscriptionservice.loadRazorPayScript();
  }

  getPaytmOrderId() {
    const formData = new FormData();
    formData.append('mobile', localStorage.getItem('mobile_number'));
    formData.append('amount', this.franchiseData.registration_amount);
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

          this.onPaytm();
        }
      },
      err => {
        console.log('error', err);
      }
    );
  }

  HandlePayment() {
    if (this.franchiseData.registration_amount) {
      this.getRazorPay('1', 'live', 0);
    } else {
      this.ngxNotificationService.error('Something Went Wrong');
    }
  }

  onPaytm() {
    const form = document.getElementById('pay');
    // production url
    (form as any).action = `https://securegw.paytm.in/theia/api/v1/showPaymentPage?mid=Twango57803369412564&orderId=${this.oId}`;
    (form as any).submit();
  }

  getRazorPay(
    amt: any,
    type: any,
    plan: any
  ) {
    if (plan === 0) {
      return this.subscriptionservice.payNowT(
        amt,
        type,
        0,
        '',
        '',
        this.franchiseData.registration_mobile,
        ''
      );
    } else {
      return this.subscriptionservice.payNowT(
        amt,
        type,
        1,
        '',
        '',
        this.franchiseData.registration_mobile,
        ''
      );
    }
  }

  cashPayment() {
    if (this.franchiseData.registration_mobile) {
      this.router.navigateByUrl(`chat?mobile=${this.franchiseData.registration_mobile}`);
    }
  }

}
