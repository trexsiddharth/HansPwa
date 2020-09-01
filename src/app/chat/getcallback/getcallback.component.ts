import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpClient } from "@angular/common/http";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OkdialogComponent } from './okdialog/okdialog.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgxNotificationService } from 'ngx-kc-notification';
@Component({
  selector: 'app-getcallback',
  templateUrl: './getcallback.component.html',
  styleUrls: ['./getcallback.component.css']
})
export class GetcallbackComponent implements OnInit {

  constructor(public router: Router,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    public dialogRef: MatDialog,
    private breakPointObserver: BreakpointObserver,
    private ngxNotificationService: NgxNotificationService,) { }

  ngOnInit() {
  }
  query: string = "I'm interested in Hans Matrimony's services.\nI would love to know more about them so please give a call back regarding the same.";
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
    const dialogRef = this.dialogRef.open(OkdialogComponent, dialogConfig);

  }
  getCallback() {
    console.log(this.query);
    this.spinner.show();
    const interestForm = new FormData();
    interestForm.append('id', localStorage.getItem('id'));
    interestForm.append('is_lead', localStorage.getItem('is_lead'));
    interestForm.append('comment', this.query);

    this.http.post<any>('https://partner.hansmatrimony.com/api/updateCallBack', interestForm).subscribe(
      data => {
        console.log(data);
        if (data.status === '1' || data.status === 1) {
          this.analyticsEvent('Requested For A Callback From Chat Drawer');
          // this.ngxNotificationService.success('We will get back to soon!!');
          this.spinner.hide();
          this.openOkDialog();
        } else {
          this.ngxNotificationService.error('Something Went Wrong, Please try again later');
          this.spinner.hide();
        }
      },
      err => {
        console.log(err);
        this.ngxNotificationService.error('Something Went Wrong, Please try again later');
        this.spinner.hide();
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
