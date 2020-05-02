import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-personalized-message-dialog',
  templateUrl: './personalized-message-dialog.component.html',
  styleUrls: ['./personalized-message-dialog.component.css']
})
export class PersonalizedMessageDialogComponent implements OnInit {
  profile;
  constructor(public dialogRef: MatDialogRef<PersonalizedMessageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
                console.log(data);
                this.profile = data.profile.profile;
              }

  ngOnInit() {
  }

}
