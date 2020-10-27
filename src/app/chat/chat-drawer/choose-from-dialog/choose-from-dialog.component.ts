import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { AnalyticsService } from 'src/app/analytics.service';
import { SubscriptionserviceService } from 'src/app/subscriptionservice.service';
import { TodaysPaymentPopupComponent } from 'src/app/todays-payment-popup/todays-payment-popup.component';
import { RateUsDialogComponent } from '../../rate-us-dialog/rate-us-dialog.component';

@Component({
  selector: 'app-choose-from-dialog',
  templateUrl: './choose-from-dialog.component.html',
  styleUrls: ['./choose-from-dialog.component.css']
})
export class ChooseFromDialogComponent implements OnInit {


  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private ngxNotification: NgxNotificationService,
              private dialog: MatDialog,
              private analyticsService: AnalyticsService,
              private breakPointObserver: BreakpointObserver,
              public dialogRef: MatDialogRef<RateUsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private subscriptionservice: SubscriptionserviceService) { }

// subscriptions offers
  plan = 0;
  benefit;
  value;
  amount;
  plans: any = [];
  plansOnline: any = [];
  price: any;
  credits;
  selectedContainer: number;

  ngOnInit() {

    if (true) {
      this.subscriptionservice.loadRazorPayScript();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http.get('https://partner.hansmatrimony.com/api/getWebsitePlan', { headers }).subscribe((res: any) => {
        this.plans = res;
        for (let i = 0; i < this.plans.length; i++) {
          if (this.plans[i].plan_type === 'Self Service Plan') {
            this.plansOnline.push(this.plans[i]);
            if (!localStorage.getItem('showRemarrigePlan')) {
               this.plansOnline =  (this.plansOnline as []).filter((item: any) => !(item.plan_name as string).includes('Re-Marriage'));
            }
          }
        }
        console.log(this.plansOnline);
        this.spinner.hide();
      }, (err: any) => {
        this.spinner.hide();
      });

    }
  }

  closeDialog() {
    this.dialogRef.close();
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

  setAmount(index: number) {
    return this.plansOnline[index].amount - (this.plansOnline[index].amount * this.plansOnline[index].discount / 100);
  }
  setContent(index: number) {
    const content = this.plansOnline[index].content.split(';');
    return content;
  }
  container(index: number) {
    this.price = this.setAmount(index);
    this.credits = this.plansOnline[index].contacts;
    this.selectedContainer = index + 1;
    this.plan = 0;
    this.openTodaysPopupAd();
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
