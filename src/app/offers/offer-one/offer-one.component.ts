import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-offer-one',
  templateUrl: './offer-one.component.html',
  styleUrls: ['./offer-one.component.css']
})
export class OfferOneComponent implements OnInit {
  numberGenerated = false;
  generatedNumber;
  constructor(public dialogRef: MatDialogRef<OfferOneComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              public languageService: LanguageService) { }

  ngOnInit() {
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }

  generateRandom() {
    if (!this.numberGenerated) {
      this.generatedNumber = '+91 - ' + Math.floor((Math.random() * 10000) + 70000) + 'XXXXX';
      this.numberGenerated = true;
      return  this.generatedNumber;
    } else {
      return  this.generatedNumber;
    }
  }

  getProfilePhoto(): string {
    console.log(this.data.data.profile);
    if (this.data.data) {
      return this.data.data.photo;
    } else if (this.data.data.carousel) {
      const carousel: object = JSON.parse(this.data.data.carousel);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' +  carousel[keys[0]];
    } else {
      if (this.data.data.gender === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    }
  }

}
