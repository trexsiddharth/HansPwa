import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ask-delete-dialog',
  templateUrl: './ask-delete-dialog.component.html',
  styleUrls: ['./ask-delete-dialog.component.css']
})
export class AskDeleteDialogComponent implements OnInit {

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private ngxNotification: NgxNotificationService,
              public dialogRef: MatDialogRef<AskDeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
      if (data) {
          console.log(data);
      }
    }

ngOnInit() {
  }

  deletePhoto() {
    if (this.data) {
      const formData = new FormData();
      formData.append('id', localStorage.getItem('id'));
      formData.append('is_lead', localStorage.getItem('is_lead'));
      formData.append('photo', this.data);

      this.http.post('https://partner.hansmatrimony.com/api/deleteUserPhoto', formData).subscribe(
      (response: any) => {
          console.log(response);
          if (response.status === 1) {
            this.ngxNotification.success(response.message);
          } else {
            this.ngxNotification.error('Unable to delete');
          }
          this.dialogRef.close(formData);
      },
      err => {
        this.ngxNotification.error('Something went wrong');
      }
    );
    } else {
      this.ngxNotification.error('No Image Found');
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
