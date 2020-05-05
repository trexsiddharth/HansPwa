import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-offer-one',
  templateUrl: './offer-one.component.html',
  styleUrls: ['./offer-one.component.css']
})
export class OfferOneComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OfferOneComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
