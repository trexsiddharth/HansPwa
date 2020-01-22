import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var Razorpay: any;
@Injectable({
  providedIn: 'root'
})
export class SubscriptionserviceService {
  constructor( private http: HttpClient ) {
   }
  payNowT(amt, type, plan, name, email, phone) {
    let notes = {service: ''};
    let keyId;
    if (amt === 3100) {
      notes.service = 'Limited';
    } else
    if (amt === 5100) {
      notes.service = 'Supreme';
    } else
    if (amt === 81000) {
      notes.service = 'Premium';
    }
    if (type === 'test') {
      keyId = 'rzp_test_yoGDlvEoQBRXkL';
      // key secret = ldssg0DvQNi6AXA0iJZ7Inzj;
    } else
    if (type === 'live') {
      keyId = 'rzp_live_e6JpOKoIUEouZT';
    }
    const key = keyId;

    let options = {
      'key': key,
      'amount': amt * 100,
      'name': ' Hans Matrimony',
      'description': 'Order #',

      'handler': function(response) {
          console.log(response);
          if (plan === 0) {
            alert('Payment Successfull \n' + 'Your Payment ID: ' + response.razorpay_payment_id);
          } else {
            alert('Payment Successfull \n' + ' We will get back to you shortly \n' + 'Your Payment ID: ' + response.razorpay_payment_id);
          }

         },
      'prefill': {
          'name':  name,
          'email': email,
          'contact': phone,

      },
      'notes': notes,
      'theme': {
          'color': 'blue'
      }
  };
  const rzp = new Razorpay(options);
    rzp.open();
}
payNowCustom(amt, type, plan, name, email, phone,mode,orderId,cust_id) {
  let notes = {service: ''};
  let keyId;
  if (amt === 3100) {
    notes.service = 'Limited';
  } else
  if (amt === 5100) {
    notes.service = 'Supreme';
  } else
  if (amt === 81000) {
    notes.service = 'Premium';
  }
  if (type === 'test') {
    keyId = 'rzp_test_37I1EC7DpM6Dqq';
    // key secret = WoNRYehcPCDC5s4w6J8MUjqn;
  } else
  if (type === 'live') {
    keyId = 'rzp_live_e6JpOKoIUEouZT';
  }
  const key = keyId;

  let options = {
    'key': key,
    'amount': amt * 100,
    "currency": "INR",
    'name': ' Hans Matrimony',
    'description': 'Order #' + orderId,
    'customer_id': cust_id,
    'order_id': orderId,
    'recurring': 1,

    'handler': function(response) {
        console.log(response);
        if (plan === 0) {
          alert('Payment Successfull \n' + 'Your Payment ID: ' + response.razorpay_payment_id);
          this.authorizeFirstPayment(response);
        } else {
          alert('Payment Successfull \n' + ' We will get back to you shortly \n' + 'Your Payment ID: ' + response.razorpay_payment_id);
        }

       },
    'prefill': {
        'name':  name,
        'email': email,
        'contact': phone,
        'method': mode,

    },
    'notes': notes,
    'theme': {
        'color': 'blue'
    }
};
const rzp = new Razorpay(options);
  rzp.open();
}
authorizeFirstPayment(response){
  let formData = new FormData();
  formData.append('id', localStorage.getItem('id'));
  formData.append('payment_id', response.razorpay_payment_id);
  this.http.post('http://partner.hansmatrimony.com/api/authorizeFirstPayment', formData).subscribe(
    data => {
        console.log(data);
    },
    err => {
      console.log(err);
    }
  );
}
}
