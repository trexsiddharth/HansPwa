import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
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
              public dialogRef: MatDialogRef<RateUsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }



}
