import { Component, OnInit, Input, HostListener, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NgxNotificationService } from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router} from '@angular/router';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { EditPersonalDialogComponent } from '../myprofile/edit-personal-dialog/edit-personal-dialog.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Output() preferenceChanged = new EventEmitter();
  @Input() personalProfileData: any;
  @Input() familyProfileData: any;
  @Input() preferenceProfileData: any;
  @Output() backToProfiles = new EventEmitter();

  innerWidth: any;
  public message: string;
  backimagePath;
  imgURL: any;
  BackimgURL;
  suc: any = [];
  minHeight;
  maxHeight;
  carouselSize;
  currentLanguage;

  constructor(private spinner: NgxSpinnerService, public itemService: FindOpenHistoryProfileService,
              private matDialog: MatDialog, private http: HttpClient,
              private ngxNotificationService: NgxNotificationService, private router: Router) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.currentLanguage = localStorage.getItem('language');
  }


  setAge(dob: string) {
    if (dob != null) {
    return (Math.floor((Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 365)));
    } else {
      return null;
    }
  }
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
}
  getHeight(num: string) {

    switch (Number(num)) {
     case 53: return '4\'5"';
     case 54: return '4\'6"';
     case 55: return '4\'7"';
     case 56: return '4\'8"';
     case 57: return '4\'9"';
     case 58: return '4\'10"';
     case 59: return '4\'11"';
     case 60: return '5\'';
     case 61: return '5\'1"';
     case 62: return '5\'2"';
     case 63: return '5\'3"';
     case 64: return '5\'4"';
     case 65: return '5\'5"';
     case 66: return '5\'6"';
     case 67: return '5\'7"';
     case 68: return '5\'8"';
     case 69: return '5\'9"';
     case 70: return '5\'10"';
     case 71: return '5\'11"';
     case 72: return '6\'';
     case 73: return '6\'1"';
     case 74: return '6\'2"';
     case 75: return '6\'3"';
      case 76: return '6\'4"';
      case 77: return '6\'5"';
      case 78: return '6\'6"';
      case 79: return '6\'7"';
      case 80: return '6\'8"';
      case 81: return '6\'9"';
      case 82: return '6\'10"';
      case 83: return '6\'11"';
      case 84: return '7\'';
      default: return null;
  }
  }
    getProfilesPhoto(num: string, num2: string , gen: string, index: string): String {
      if (num !== '[]' && num && num !== 'null') {
        const carousel: any = JSON.parse(num);
        if (carousel[index]) {
          return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[index];
        } else {
            return '../../assets/empty_profile.jpeg';
        }
      } else if (num2) {
        return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + num2;
      } else {
        if (gen === 'Male') {
          return '../../assets/male_pic.png';
        } else {
          return '../../assets/female_pic.png';
        }
      }
      }
    openPersonalDialog() {
      const dialogConfig = new MatDialogConfig();
      if (this.innerWidth >= 1024) {
        dialogConfig.minWidth = this.innerWidth - 200;
        dialogConfig.minHeight = 600;
      } else {
      dialogConfig.minWidth = this.innerWidth - 50;
      }
      dialogConfig.disableClose = false;
      dialogConfig.hasBackdrop = true;
      dialogConfig.data = {
          personalDetails: this.personalProfileData,
          familyDetails: this.familyProfileData,
        };
      const dialogRef = this.matDialog.open(EditPersonalDialogComponent, dialogConfig);
    }

    // openFamilyDialog() {
    //   const dialogConfig = new MatDialogConfig();
    //   if (this.innerWidth >= 1024) {
    //     dialogConfig.minWidth = this.innerWidth - 200;
    //     dialogConfig.minHeight = 600;
    //   } else {
    //   dialogConfig.minWidth = this.innerWidth - 50;
    //   }
    //   dialogConfig.disableClose = false;
    //   dialogConfig.hasBackdrop = true;
    //   dialogConfig.data = {
    //       familyDetails: this.familyProfileData
    //     };
    //   const dialogRef = this.matDialog.open(EditFamilyDialogComponent, dialogConfig);
    // }

    // openPreferenceDialog() {
    //   const dialogConfig = new MatDialogConfig();
    //   if (this.innerWidth >= 1024) {
    //     dialogConfig.minWidth = this.innerWidth - 200;
    //     dialogConfig.minHeight = 600;
    //   } else {
    //   dialogConfig.minWidth = this.innerWidth - 50;
    //   }
    //   dialogConfig.disableClose = false;
    //   dialogConfig.hasBackdrop = true;
    //   dialogConfig.data = {
    //       preferencesDetails: this.preferenceProfileData
    //     };
    //   const dialogRef = this.matDialog.open(EditPreferenceDialogComponent, dialogConfig);
    //   dialogRef.afterClosed().subscribe(
    //     res => {
    //       if (res) {
    //         this.preferenceChanged.emit(res);
    //       }
    //     }
    //   );
    // }

    previewBack(files, index) {
      console.log(index);
      if (files.length === 0) {
        return;
      } else {
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
          this.message = 'Only images are supported.';
          return;
        }
        const reader = new FileReader();
        this.backimagePath = files[0];
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
          this.BackimgURL = reader.result;
          this.uploadPhoto(this.backimagePath, index);
        };
      }
    }

    uploadPhoto(data, index) {
      this.spinner.show();
      const uploadData = new FormData();
      uploadData.append('id', localStorage.getItem('id'));
      uploadData.append('index', index);
      uploadData.append('image', data);
      uploadData.append('is_lead', localStorage.getItem('is_lead'));

      return this.http.post('https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture', uploadData).subscribe(suc => {
        this.suc = suc;
        console.log('photos', suc);
        if (this.suc.pic_upload_status === 'Y') {
          this.spinner.hide();
          document.querySelectorAll('#imgProfile')[index - 1].setAttribute('src', this.BackimgURL);
          this.ngxNotificationService.success('Photo Uploaded Succesfully!');
        } else {
          this.spinner.hide();
          this.ngxNotificationService.error('Photo Upload Unsuccesful!');
        }
     }, err => {
       this.ngxNotificationService.error('Photo could not be Uploaded!');
       // console.log(err);
       console.log(err);
      });
    }
    getMotherTongue(value: string) {
      if (!value) {
        return 'Hindi-Delhi';
      } else {
        return value;
      }
    }
    getOfficeAddress(value1: string, value2: string) {
      if (value1) {
        return value1;
      } else if (value2) {
        return value2;
      } else {
        return 'N/A';
      }
    }

    getImagesCount() {
      let num = this.personalProfileData.carousel;
      if (num !== '[]' && num && num !== 'null') {
        const carousel: object = JSON.parse(num);
        if (carousel) {
          return [1, 2, 3];
        }
      } else {
        this.carouselSize = [1];
        return this.carouselSize;
      }
    }

    changeProfileImage(index: string) {
     const i = Number(index) + 1;
     console.log('current index is ' + i);
     document.querySelectorAll('#backfile')[index].click();
    }
    getIncome(value: number) {
      if (value != null) {
        if (value.toString().length >= 6) {
          return String((Number(value) / 100000));
          } else if (value.toString().length >= 5) {
            return String((Number(value) / 10000) * 12);
          } else {
            return value;
          }
        } else {return ''; }
    }
    logout() {
      // this.loginStatus = false;
      localStorage.clear();

      this.router.navigateByUrl('/home');
    }
    changeLanguage(lang: string) {
      console.log('changing language');
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/language', {params: { ['phone_number'] : localStorage.getItem('mobile_number'), ['language'] : lang}}).subscribe(
        data => {
          console.log(data);
          this.ngxNotificationService.success('Language Changed Successfully');
          this.currentLanguage = lang;
          localStorage.setItem('language', this.currentLanguage);
        }, err => {
          console.log(err);
          this.ngxNotificationService.error('something went wrong, Try again later');
        }
      );
    }
    backToChat() {
      this.backToProfiles.emit('chatbot');
    }
    setLocality(locality, city) {
      if (locality && locality !== '') {
        return locality;
      } else {
        return city;
      }

    }
    downloadMyProfile() {
        const pdfData = new FormData();
        pdfData.append('id', localStorage.getItem('id'));
        pdfData.append('profile_to_send_id', localStorage.getItem('id'));
        pdfData.append('full', '1');
        pdfData.append('is_lead', localStorage.getItem('is_lead'));

        return this.http.post < any > ('https://partner.hansmatrimony.com/api/downloadPdf', pdfData).subscribe(data => {
          console.log(data);
          if (data.status === 1) {
            const downloadLink = document.querySelectorAll < HTMLElement > ('#downLink');
            this.spinner.hide();
            this.ngxNotificationService.info('Downloading your file');
            if (data.url) {
              window.open(data.url);
            }
          }
        }, err => {
          console.log(err);
          this.ngxNotificationService.error('Error Occured');
        });
    }
    getQualification(degree, education) {
      return education != null && education !== '' ? education : degree;
      }

      setMarriageBrothers(value1: any, value2: any) {
        if (value1 != null && value1 !== '' && value1 !== 0) {
          if (value2 != null && value2 !== '' && value2 !== 0) {
            return String(Number(value1) + Number(value2)) + '| ' + value1 + ' Married';
          } else {
            return String(Number(value1) + Number(value2)) + 'Brothers';
          }
        } else {
          if (value2 != null && value2 !== '' && value2 !== 0) {
            return String(Number(value1) + Number(value2)) + 'Brothers';
          } else {
            return '0 Brothers';
          }
        }
      }
    
      setMarriageSisters(value1: any, value2: any) {
        if (value1 != null && value1 !== '' && value1 !== 0) {
          if (value2 != null && value2 !== '' && value2 !== 0) {
            return String(Number(value1) + Number(value2)) + '| ' + value1 + ' Married';
          } else {
            return String(Number(value1) + Number(value2)) + 'Sisters';
          }
        } else {
          if (value2 != null && value2 !== '' && value2 !== 0) {
            return String(Number(value1) + Number(value2)) + 'Sisters';
          } else {
            return '0 Sisters';
          }
        }
      }

      LifeStatus(person: string, work: string) {
        if (person != null && person !== '') {
          if (person.match('Alive')) {
            if (work) {
              return 'Alive | ' + work;
            } else {
              return 'Alive';
            }
          } else {
            return 'Dead';
          }
        }
      }

      navigateTo(id: string) {
        console.log(id);
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
      }
}
