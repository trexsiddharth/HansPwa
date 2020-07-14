import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-rate-us-dialog',
  templateUrl: './rate-us-dialog.component.html',
  styleUrls: ['./rate-us-dialog.component.css']
})
export class RateUsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RateUsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  openPlayStore() {
      window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_self');
  }
}
