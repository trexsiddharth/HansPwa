import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {
  profile;

  constructor(private router: Router, public dialogRef: MatDialogRef<MessageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    this.profile = data.profile;
  }

  ngOnInit() {
  }

  getProfilePhoto(): string {
      if (this.profile.photo === null) {
      if (this.profile.gender === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    } else {
      return this.profile.photo;
    }
  }
  goToSub() {
    this.dialogRef.close();
    this.router.navigateByUrl('subscription');
  }
  closeDialog() {
    this.dialogRef.close({
      response: 'NO'
    });
  }

}
