import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgxNotificationService } from 'ngx-kc-notification';
import { OkdialogCsComponent } from '../customer-support/okdialog-cs/okdialog-cs.component';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {

  constructor(public router: Router,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    public dialogRef: MatDialog,
    private breakPointObserver: BreakpointObserver,
    private ngxNotificationService: NgxNotificationService) { }

  ngOnInit() {
    this.getAllComplaints();
  }
  query: string = "I'm had a few issues in my profile or related to hans matrimony services so please give me a call back regarding the same.";
  complaints: any;
  selectedComplaint: any;
  backToChat() {
    // this.backToProfiles.emit('chatbot');
    this.router.navigateByUrl("/chat");
  }
  openOkDialog() {
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
          dialogConfig.minWidth = '70vw';
          dialogConfig.minHeight = '40vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    const dialogRef = this.dialogRef.open(OkdialogCsComponent, dialogConfig);

  }

  getAllComplaints() {
    this.http.get('https://partner.hansmatrimony.com/api/getComplainCategories').subscribe((res: any) => {
      this.complaints = res;
    });
    console.log(this.complaints);
  }
  getCallback() {
    console.log(this.query);
    console.log(this.selectedComplaint);
    var id: number;
    (this.complaints as any).forEach(element => {
      if (element.name == this.selectedComplaint)
        id = element.id;
    });
    console.log(id);
    //this.spinner.show();
    const interestForm = new FormData();
    interestForm.append('id', localStorage.getItem('id'));
    interestForm.append('is_lead', localStorage.getItem('is_lead'));
    interestForm.append('comments', this.query);
    interestForm.append('complain_category', String(id));

    this.http.post<any>('https://partner.hansmatrimony.com/api/registerComplaint', interestForm).subscribe(
      data => {
        console.log(data);
        if (data.status === '1') {
          this.analyticsEvent('Registered for complaint from Chat Drawer');
          //this.spinner.hide();
          this.openOkDialog();
        } else {
          this.ngxNotificationService.error('Something Went Wrong, Please try again later');
          //this.spinner.hide();
        }
      },
      err => {
        console.log(err);
        this.ngxNotificationService.error('Something Went Wrong, Please try again later');
        //this.spinner.hide();
      }
    );
  }
  analyticsEvent(event) {
    (window as any).ga('send', 'event', event, '', {
      hitCallback: () => {
        console.log('Tracking ' + event + ' successful');
      }
    });
    // gtag app + web
    (window as any).gtag('event', event, {
      event_callback: () => {
        console.log('Tracking gtag ' + event + ' successful');
      }
    });

  }
}
