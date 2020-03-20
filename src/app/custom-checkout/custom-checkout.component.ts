import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SubscriptionserviceService } from '../subscriptionservice.service';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';

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
  constructor(private subscriptionService: SubscriptionserviceService, private http: HttpClient,
              private spinner: NgxSpinnerService, private ngxNotificationService: NgxNotificationService, ) { }

  ngOnInit() {

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

}
