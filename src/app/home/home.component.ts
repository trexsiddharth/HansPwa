import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { A2HSDialogComponent } from './a2-hsdialog/a2-hsdialog.component';



declare var Razorpay: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 clickToggle = false;
 isLogin = 'false';
 callbackDetails: any;
 events: string[] = [];
  opened: boolean;
  socialInfo: string;
  eventA2HS;

  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, public dialog: MatDialog,
              public router: Router, private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {

  }
  register() {
    this.spinner.show();
    this.router.navigateByUrl('register');
  }

  onboarding() {
    this.spinner.show();
    this.router.navigateByUrl('chat');
      }
  ngOnInit() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.eventA2HS = e;
      console.log('prompted', this.eventA2HS);
      this.openPromptDialog();
    });
    this.openPromptDialog();
  }

  openPromptDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      promptData: this.eventA2HS,
    };
    let dialogRef = this.dialog.open(A2HSDialogComponent, dialogConfig);
    this.eventA2HS.prompt();
  }


  subscription() {
    this.spinner.show();
    this.router.navigateByUrl('/subscription');
  }
  callBack(phone) {
    console.log(phone.value);
    return this.http.post('https://partner.hansmatrimony.com/api/callBack', {['phone']: phone.value}).subscribe(
     (data: any) => {
       console.log(data);
       this.ngxNotificationService.success('Thank you for showing your interest, We will call you right back!', 'danger');
     });
 }
  myFunction() {
    this.clickToggle = true;
   }

}
