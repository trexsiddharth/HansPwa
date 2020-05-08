import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-app-download-dialog',
  templateUrl: './app-download-dialog.component.html',
  styleUrls: ['./app-download-dialog.component.css']
})
export class AppDownloadDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AppDownloadDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }


  closeDialog() {
    this.dialogRef.close();
  }

  openPlaystore() {
    this.dialogRef.close();
    window.open('https://play.google.com/store/apps/details?id=com.twango.me');
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
