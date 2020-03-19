import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {
  profile;
  type;
  selfImage;
  selfName;
  constructor(private router: Router, public dialogRef: MatDialogRef<MessageDialogComponent>,
              private spinner: NgxSpinnerService,
              private http: HttpClient,
              @Inject(MAT_DIALOG_DATA) public data) {
    this.profile = data.profile;
    this.selfImage = data.selfImage;
    this.selfName = data.selfName;
    this.type = data.type;
  }

  ngOnInit() {
  }

  getProfilePhoto(): string {
    if (this.profile.profile) {
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + this.profile.profile.photo;
    } else if (this.profile.photo) {
      return this.profile.photo;
    } else if (this.profile.carousel) {
      const carousel: object = JSON.parse(this.profile.carousel);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      return carousel[keys[0]];
    } else {
      if (this.profile.gender === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    }
  }

  getName(item: any) {
    if (item.profile) {
      return item.profile.name;
    } else {
      return item.name;
    }
  }
  goToSub() {
    this.dialogRef.close();
    this.router.navigateByUrl('subscription');
  }
  closeDialog() {
    this.dialogRef.close();
  }

  changeProfileImage() {
    document.querySelector<HTMLInputElement>('#backfile').click();
   }

  chooseFileForUpload(files) {
    if (files.length === 0) {
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        alert('Only images are supported.');
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        // use backimgurl to set image
        // this.BackimgURL = reader.result;
        this.uploadPhoto(files[0]);
      };
    }
  }
  uploadPhoto(data) {
    this.spinner.show();
    const uploadData = new FormData();
    uploadData.append('id', localStorage.getItem('id'));
    uploadData.append('index', '1');
    uploadData.append('image', data);
    uploadData.append('is_lead', localStorage.getItem('is_lead'));

    return this.http.post('https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture', uploadData).subscribe((suc: any) => {
      console.log('photos', suc);
      if (suc.pic_upload_status === 'Y') {
        this.spinner.hide();
        this.dialogRef.close({
          uploadStatus: 'Y'
        });
      } else {
        this.spinner.hide();
        this.dialogRef.close({
          uploadStatus: 'N'
        });
      }
   }, err => {
     // console.log(err);
     console.log(err);
    });
  }

}
