import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgxNotificationService } from 'ngx-kc-notification';

@Component({
  selector: 'app-personalized-message-dialog',
  templateUrl: './personalized-message-dialog.component.html',
  styleUrls: ['./personalized-message-dialog.component.css']
})
export class PersonalizedMessageDialogComponent implements OnInit {
  profile;
  constructor(private ngxNotificationService: NgxNotificationService,
              public dialogRef: MatDialogRef<PersonalizedMessageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
                console.log(data);
                this.profile = data.profile.profile;
              }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }
  getDefaultbEW() {
    const user = JSON.parse(localStorage.getItem('authData'));
    return `${user.name} has liked ${this.profile.name}'s profile. We will soon share feedback from ${this.profile.name}'s family`;
  }

  call() {
    if (this.profile.mobile) {
      window.open('tel:' + this.profile.mobile);
    } else {
      this.ngxNotificationService.error('Mobile Number Not Found');
    }
    }

}
