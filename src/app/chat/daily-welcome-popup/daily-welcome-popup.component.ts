import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-daily-welcome-popup',
  templateUrl: './daily-welcome-popup.component.html',
  styleUrls: ['./daily-welcome-popup.component.css']
})
export class DailyWelcomePopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DailyWelcomePopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
