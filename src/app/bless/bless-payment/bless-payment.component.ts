import { Component, OnInit } from '@angular/core';
import { SubscriptionserviceService } from 'src/app/subscriptionservice.service';

@Component({
  selector: 'app-bless-payment',
  templateUrl: './bless-payment.component.html',
  styleUrls: ['./bless-payment.component.css']
})
export class BlessPaymentComponent implements OnInit {
  showSpinner = true;
  constructor(private subscription: SubscriptionserviceService) { }

  ngOnInit() {
    this.loadRazorPayScript();
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
      fileName.setAttribute('onload', `${this.onloadOfScript()}`);
    }
  }

  onloadOfScript() {
    setTimeout(() => {
        this.showSpinner = false;
        this.subscription.payNowT(3100, 'live', 0 , 'Siddharth', 'orksiddharth@gmail.com', 9910395820, 45);
    }, 2500);
  }

}
