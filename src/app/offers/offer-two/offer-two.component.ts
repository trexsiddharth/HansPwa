import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-offer-two',
  templateUrl: './offer-two.component.html',
  styleUrls: ['./offer-two.component.css']
})
export class OfferTwoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OfferTwoComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              public languageService: LanguageService) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  userPhoto() {
    if (localStorage.getItem('profile_photo')) {
      return localStorage.getItem('profile_photo')
    } else {
      if (this.data.data.profile.gender === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    }
  }

  getProfilePhoto(): string {
    console.log(this.data.data.profile);
    if (this.data.data.profile && this.data.data.family) {
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + this.data.data.profile.photo;
    } else if (this.data.data.profile.carousel) {
      const carousel: object = JSON.parse(this.data.data.profile.carousel);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' +   carousel[keys[0]];
    } else {
      if (this.data.data.profile.gender === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    }
  }

}
