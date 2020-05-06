import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-offer-one',
  templateUrl: './offer-one.component.html',
  styleUrls: ['./offer-one.component.css']
})
export class OfferOneComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OfferOneComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  getProfilePhoto(): string {
    console.log(this.data.data.profile);
    if (this.data.data.profile && this.data.data.family) {
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + this.data.data.profile.photo;
    } else if (this.data.data.profile.carousel) {
      const carousel: object = JSON.parse(this.data.data.profile.carousel);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      return carousel[keys[0]];
    } else {
      if (this.data.data.profile.gender === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    }
  }

}
