import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubscriptionserviceService } from '../subscriptionservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SubscriptionDialogComponent } from './subscription-dialog/subscription-dialog.component';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  plans: any = [];
  show1  = true;
  show2  = false;
  points: any;
  registrationFees: any;
  innerWidth: any;
  dialogData: any;
  formData: any;
  price: any;
  selectedContainer: number;


  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private subscriptionService: SubscriptionserviceService, private matDialog: MatDialog,
              private spinner: NgxSpinnerService, private ngxNotificationService: NgxNotificationService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get('https://partner.hansmatrimony.com/api/subscription', {headers}).subscribe((res: any) => {
      this.plans = res;
      this.spinner.hide();
      this.container1();
      console.log(this.plans);
    }, (err: any) => {
      this.spinner.hide();
      this.ngxNotificationService.error('Something went wrong', 'danger');
    });

    if (localStorage.getItem('id')) {
      this.getCredits();
    }
  }

  togglePersonalized() {
    if (this.show1 === true) {
      this.show1 = false;
      return this.show2 = true;
    }
  }
  toggleOnline() {
    if (this.show2 === true) {
      this.show2 = false;
      return this.show1 = true;
    }
  }

  getCredits() {
    // tslint:disable-next-line: max-line-length
    return this.http.post('https://partner.hansmatrimony.com/api/getWhatsappPoint?id=' + localStorage.getItem('id'), {params: {['id']: localStorage.getItem('id')}}).subscribe(
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
      return this.subscriptionService.payNowT(amt, type, 0, name, email, phone);
     } else {
          // tslint:disable-next-line: no-unused-expression
          return this.subscriptionService.payNowT(amt, type, 1, name, email, phone);
     }
   }

   changeButtonOnline() {
     if (this.show2 === true) {
      this.container1();
      return 'buttonPersonalised';
     } else {return 'buttonOnline'; }
   }
   changeButtonPersonalized() {
    if (this.show2 === true) {
      return 'buttonOnline';
    } else {return 'buttonPersonalised'; }
   }

   @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  console.log(this.innerWidth);
}

   openDialog(plan: String, benefits: String, value: String , price: String) {
    const dialogConfig = new MatDialogConfig();
    if (this.innerWidth >= 1024) {
      dialogConfig.minWidth = this.innerWidth - 200;
      dialogConfig.minHeight = 600;
    } else {
    dialogConfig.minWidth = this.innerWidth - 50;
    }
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
        plan,
        benefit: benefits,
        value,
        price
      };
    const dialogRef = this.matDialog.open(SubscriptionDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log(data);
        this.dialogData = data;
        this.formData = this.dialogData.formData;
        this.price = this.dialogData.price;
        this.getRazorPay(this.price, 'live', 0, this.formData.name, this.formData.email, this.formData.mobile);

        (window as any).ga('send', 'event', 'Subscription', 'Plan Opted' + this.price, {
          hitCallback: () => {
            console.log('Tracking Subscription successful');
          }});
      }
  );
  }
  container1() {
    this.selectedContainer = 1;
    document.getElementById('container1').style.background = '#56a2f5';
    document.getElementById('container1').style.color = 'white';
    document.getElementById('button1').style.color = 'white';
    document.getElementById('button1').style.background = '#56a2f5';
    document.getElementById('container2').style.background = '#f3f3f3';
    document.getElementById('container2').style.color = 'black';
    document.getElementById('button2').style.color = 'black';
    document.getElementById('button2').style.background = '#6ba8a9';
    document.getElementById('container3').style.background = '#f3f3f3';
    document.getElementById('container3').style.color = 'black';
    document.getElementById('button3').style.color = 'black';
    document.getElementById('button3').style.background = '#6ba8a9';
  }
  container2() {
    this.selectedContainer = 2;
    document.getElementById('container2').style.background = '#56a2f5';
    document.getElementById('container2').style.color = 'white';
    document.getElementById('button2').style.color = 'white';
    document.getElementById('button2').style.background = '#56a2f5';
    document.getElementById('container1').style.background = '#f3f3f3';
    document.getElementById('container1').style.color = 'black';
    document.getElementById('button1').style.color = 'black';
    document.getElementById('button1').style.background = '#6ba8a9';
    document.getElementById('container3').style.background = '#f3f3f3';
    document.getElementById('container3').style.color = 'black';
    document.getElementById('button3').style.color = 'black';
    document.getElementById('button3').style.background = '#6ba8a9';
  }
  container3() {
    this.selectedContainer = 3;
    document.getElementById('container3').style.background = '#56a2f5';
    document.getElementById('container3').style.color = 'white';
    document.getElementById('button3').style.color = 'white';
    document.getElementById('button3').style.background = '#56a2f5';
    document.getElementById('container2').style.background = '#f3f3f3';
    document.getElementById('container2').style.color = 'black';
    document.getElementById('button2').style.color = 'black';
    document.getElementById('button2').style.background = '#6ba8a9';
    document.getElementById('container1').style.background = '#f3f3f3';
    document.getElementById('container1').style.color = 'black';
    document.getElementById('button1').style.color = 'black';
    document.getElementById('button1').style.background = '#6ba8a9';
  }

}

