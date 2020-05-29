import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from 'src/app/language.service';


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
  constructor(private router: Router,
              public dialogRef: MatDialogRef<MessageDialogComponent>,
              private spinner: NgxSpinnerService,
              public languageService: LanguageService,
              private http: HttpClient,
              @Inject(MAT_DIALOG_DATA) public data) {
                console.log(data);
                this.profile = data.profile;
                this.selfImage = data.selfImage;
                this.selfName = data.selfName;
                this.type = data.type;
  }

  ngOnInit() {
  }

  onLoadProfileError(gender: string, id: any) {
    if (gender && gender === 'Male') {

     document.getElementById(id).setAttribute('src', '../../assets/male_pic.png');
   } else {
    document.getElementById(id).setAttribute('src', '../../assets/female_pic.png');
   }
   }

  getProfilePhoto(): string {
    if (this.profile.profile && this.profile.family) {
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + this.profile.profile.photo;
    } else if (this.profile.photo) {
      return this.profile.photo;
    } else if (this.profile.carousel) {
      const carousel: object = JSON.parse(this.profile.carousel);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      return carousel[keys[0]];
    } else if (this.profile.profile.carousel) {
      const carousel: object = JSON.parse(this.profile.profile.carousel);
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

  premiumInterest() {
    this.spinner.show();
    const interestForm = new FormData();
    interestForm.append('id', localStorage.getItem('id'));
    interestForm.append('is_lead', localStorage.getItem('is_lead'));
    interestForm.append('interest_profile', this.profile.identity_number);
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('is_lead'));
    console.log(this.profile.identity_number);
    this.http.post<any>('https://partner.hansmatrimony.com/api/insertPremiumInterest', interestForm).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close({
          request: true
        });
        this.spinner.hide();
      },
      err => {
        console.log(err);
        this.dialogRef.close();
        this.spinner.hide();
      }
    );
  }

}
