import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxNotificationService } from 'ngx-kc-notification';

@Component({
  selector: 'app-rate-us-dialog',
  templateUrl: './rate-us-dialog.component.html',
  styleUrls: ['./rate-us-dialog.component.css']
})
export class RateUsDialogComponent implements OnInit {

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private ngxNotification: NgxNotificationService,
              public dialogRef: MatDialogRef<RateUsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  openPlayStore() {
    this.spinner.show();
    const formData = new FormData();
    formData.append('id', localStorage.getItem('id'));
    formData.append('is_lead', localStorage.getItem('is_lead'));
    this.http.post('https://partner.hansmatrimony.com/api/updateOfferCredit', formData).subscribe(
      (data: any) => {
        if (data) {
            this.spinner.hide();
            this.dialogRef.close();
            window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_self');
        }
      },
      err => {
        this.ngxNotification.error('Something Went Wrong, Try Again Later');
        this.spinner.hide();
      }
    );
  }
}
