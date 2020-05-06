import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-offer-two',
  templateUrl: './offer-two.component.html',
  styleUrls: ['./offer-two.component.css']
})
export class OfferTwoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OfferTwoComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
