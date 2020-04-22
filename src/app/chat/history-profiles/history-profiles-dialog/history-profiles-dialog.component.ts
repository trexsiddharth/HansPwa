import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationsService } from 'src/app/notifications.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';

@Component({
  selector: 'app-history-profiles-dialog',
  templateUrl: './history-profiles-dialog.component.html',
  styleUrls: ['./history-profiles-dialog.component.css']
})
export class HistoryProfilesDialogComponent implements OnInit {

  carouselSize;
  // Height
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
  item;
  index;
  type;

  constructor(private http: HttpClient, private ngxNotificationService: NgxNotificationService,
              private spinner: NgxSpinnerService,
              public notification: NotificationsService,
              public itemService: FindOpenHistoryProfileService,
              public dialogRef: MatDialogRef<HistoryProfilesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
                this.item = data.profile;
                this.index = data.index;
                this.type = data.type;
              }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }
  profileReAnswer(item: any, answer: string) {
    this.dialogRef.close({
      profile: item,
      ans: answer,
      index: this.index
    });

  }
  getQualification(degree, education) {
    return education != null && education !== '' ? education : degree;
    }
    setHouseType(type) {
      if (type) {
        switch (type) {
          case 'Y':
            return 'Owned';
            case 'N':
              return 'Rented';
          default:
            break;
        }
      } else {
        return '';
      }
    }

    setIncome(value: string): String {
      if (value != null) {
        if (Number(value) > 1000) {
          return String((Number(value) / 100000));
        } else {
          return value;
        }
  
      } else {
        return '';
      }
    }
    toTitleCase(str) {
      if (str) {
        return str.replace(
          /\w\S*/g,
          (txt) => {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      );
      } else {
        return '';
      }
  }
  getCredits() {
    const creditsData = new FormData();
    creditsData.append('id', localStorage.getItem('id'));
    creditsData.append('is_lead', localStorage.getItem('is_lead'));
   // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getWhatsappPoint', creditsData).subscribe(
     (data: any) => {
       const points = data.whatsapp_points;
       this.itemService.setCredits(data.whatsapp_points);
       console.log('credits', points);
     },
    (error: any) => {
      this.ngxNotificationService.error('We couldn\'t get your credits, trying again');
      console.log(error);
      this.spinner.hide();
    }
   );
  }

  call(num: any) {
    window.open('tel:' + num);
  }

  slideAndOpenProfile(item: any, slide: any) {
    this.itemService.setItem(item);
    this.itemService.changeTab(slide);
  }
  setDate(date: string) {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-AU').format(newDate);
  }
  setHeight(height: any) {
    if (height && height !== '') {
      return this.Heights[this.Heights1.indexOf(height)];
    } else {
      return '';
    }
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
    } else {
      return work;
    }
  }

  onLoadProfileError(gender: string, id: any) {
    if (gender === 'Male') {
     id.setAttribute('src', '../../assets/male_pic.png');
   } else {
     id.setAttribute('src', '../../assets/female_pic.png');
   }
   }
   onLoadComplete(id: any) {
     id.setAttribute('src', '../../assets/male_pic.png');
   }
   getProfilePhotoLarge(photo: any, carous: any, gen: string, index: string): string {
     if (carous === null || carous === 'null') {
       if (photo === null) {
       if (gen === 'Male') {
         return '../../assets/male_pic.png';
       } else {
         return '../../assets/female_pic.png';
       }
     } else {
       return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + photo;
     }
     } else {
       const carousel: object = JSON.parse(carous);
       const keys = Object.keys(carousel);
       // console.log(carousel[index]);
       if (carousel[keys[index]].toString().match('jeevansathi')) {
         return carousel[keys[index]];
       } else {
       return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
       }
     }
   }
   getImagesCount(num: string) {
     if (num !== '[]' && num && num !== 'null') {
        const carouselObject: object = JSON.parse(num);
        if (carouselObject) {
           const size = Object.keys(carouselObject).length;
           const arr: any[]  = [];
           for (let index = 0; index < size; index++) {
             arr.push(index);
           }
           return  arr;
       }
     } else {
       this.carouselSize = [1];
       return this.carouselSize;
     }
   }
   setName(value: string, type: any): string {
     if (type === 1) {
       if (value != null) {
         if (value.split(' ')) {
           const name = value.split(' ');
           return name[0];
         } else {
           return value;
         }
       } else {
         return '';
       }
     } else {
       return value;
     }
   }
 
   setAge(birthDate: string) {
     if (birthDate != null) {
       return String(Math.floor((Date.now() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365))) + ' Yrs';
     } else {
       return '';
     }
   }

}
