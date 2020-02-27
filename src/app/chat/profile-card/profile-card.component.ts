import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';
import { timeout, retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {  NotificationsService } from '../../notifications.service';
import { ChatServiceService } from '../../chat-service.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { Router } from '@angular/router';
import { SubscriptionserviceService } from '../../subscriptionservice.service';
import { MatTooltip, MatDialogConfig, MatDialog } from '@angular/material';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { A2HSDialogComponent } from '../a2-hsdialog/a2-hsdialog.component';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';


@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  item;
  Data;
  contactNumber;
  points = 0;
  paidStatus;
  exhaustedStatus;
  type;
  button;
  photo;
  carousel;
  carouselSize;
  count = 1;
  @Output() changeTab = new EventEmitter < any > ();
  @Output() setProfileImage = new EventEmitter <any> ();
   // Height
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private ngxNotificationService: NgxNotificationService,
              public notification: NotificationsService,
              public chatService: ChatServiceService,
              public itemService: FindOpenHistoryProfileService,
              public router: Router,
              private dialog: MatDialog,
              public subscriptionService: SubscriptionserviceService ) { }


  ngOnInit() {
    this.contactNumber = this.chatService.getContactNumber();
    console.log(this.contactNumber);

    this.checkUrl().subscribe(
      data => {
        console.log(data);
        const text: string = data.apiwha_autoreply;
        const id = data.id;
        if (data && data.is_premium && data.is_premium === '1') {
          this.itemService.setIsPersonalized(true);
        } else {
          this.itemService.setIsPersonalized(false);
        }
        // set profile image (circular in top bar)
        this.setProfileImage.emit(data.photo);
        
        console.log(text);
        console.log(id);
        localStorage.setItem('id', id);
        this.paidStatus = data.paid_status;
        console.log(this.paidStatus);
        this.getCredits();
        if (text.match('SHOW')) {
            this.chatService.Analytics('login', 'login', 'logged In');
            this.chatService.setLoginStatus(true);
            // if (this.langChanged === true) {
            //         this.changeLanguage(this.currentContact, localStorage.getItem('language')).subscribe(
            //           (data: any) => {
            //             console.log(data);
            //           },
            //           (error: any) => {
            //             console.log(error);
            //           }
            //           );
            //         this.langChanged = false;
            //       }
            // this.repeatMEssage('SHOW', this.currentContact);
            this.getNextMessageOrProfile('SHOW');
      }
    }, err => {
        console.log(err);
      }
    );
    }

  checkUrl(): Observable<any> {
    if (localStorage.getItem('fcm_app')) {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : this.contactNumber, ['fcm_id'] : this.notification.getCurrentToken(), ['fcm_app']: localStorage.getItem('fcm_app')}});
    } else {
// tslint:disable-next-line: max-line-length
return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : this.contactNumber, ['fcm_id'] : this.notification.getCurrentToken()}});
    }
  }
  chatRequest(data): Observable<any> {
    if (data && this.contactNumber && data !== '' && this.contactNumber !== '') {
     this.Data = {
       from : this.contactNumber,
        to : this.contactNumber,
        event : 'INBOX',
        text : data,
        channel_name : 'app'
     };

     const myJSON = JSON.stringify(this.Data);
     console.log(myJSON);

     const data1 = new FormData();
     data1.append('data', myJSON);

     // tslint:disable-next-line: max-line-length
     return this.http.post<any>(' https://partner.hansmatrimony.com/api/sendMessages' , data1 ).pipe(timeout(7000), retry(2), catchError(e => {
         throw new Error('Server Timeout ' +  e);
     }));
    }
  }

  getNextMessageOrProfile(reply: string) {
    const modal = document.getElementById('myModal');
    if (modal.style.display !== 'none') {
      modal.style.display = 'none';
    }

    if (this.points === 0 && reply.toLowerCase() !== 'yes') {
      this.getData(reply);
    } else if (this.points > 0) {
      this.getData(reply);
    } else {
      this.openMessageDialog(this.item);
    }
  }

  getData(reply) {
    const previousItem = this.item;
    this.chatRequest(reply).subscribe(
      data => {
        console.log(data);
        if (data.type === 'profile') {
          this.type = 'profile';
          this.item = data.apiwha_autoreply;
          setTimeout(() => {
            // TT -> ToolTip
          if ( localStorage.getItem('cancelTT') !== 'cancel' && this.count < 4 && document.getElementById('heading')) {
              document.getElementById('heading').click();
              this.count++;
            } else {
              if (localStorage.getItem('cancelTT') !== 'cancel') {
              localStorage.setItem('cancelTT', 'cancel');
              }
            }
          }, 1000);
          } else {
            this.type = 'message';
            this.item = data.apiwha_autoreply;
          }

        switch (reply) {
          case 'YES':
            if (this.points > 0) {
            this.ngxNotificationService.success('Profile Contacted Successfully');
            }
            break;
            case 'SHORTLIST':
              this.ngxNotificationService.success('Profile Shortlisted Successfully');
              break;
            case 'NO':
              this.ngxNotificationService.success('Profile Rejected Successfully');
              break;

          default:
            break;
        }
        if (this.points > 0 && reply === 'YES') {
          this.itemService.setItem(previousItem);
          this.changeTab.emit('1');
          } else {
            if (document.getElementById('profileImage')) {
              document.getElementById('profileImage').scrollIntoView({behavior: 'smooth'});
            }
          }
        this.getCredits();
        this.spinner.hide();
      }, err => {
        console.log(err);
      }
    );
  }

  getCredits() {
    const creditsData = new FormData();
    creditsData.append('id', localStorage.getItem('id'));
    if (localStorage.getItem('is_lead')) {
    creditsData.append('is_lead', localStorage.getItem('is_lead'));
    } else {
      this.checkUrl().subscribe(res => {
        console.log(res);

        creditsData.append('is_lead', res.is_lead);
        localStorage.setItem('is_lead', res.is_lead);
    },
    err => {
        console.log(err);
    });
    }
   // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getWhatsappPoint', creditsData).subscribe(
     (data: any) => {
       this.points = data.whatsapp_points;
       this.itemService.setCredits(data.whatsapp_points);
       console.log('credits', this.points);

       // for exhausted profile status
       if (this.paidStatus === 'Paid' && this.points === 0) {
          console.log('this is a exhausted profile');
          this.exhaustedStatus = true;
          this.spinner.hide();
        }
     },
    (error: any) => {
      this.ngxNotificationService.error('We couldn\'t get your credits, trying again');
      console.log(error);
      this.spinner.hide();
    }
   );
  }

  setAge(birthDate: string) {
    if (birthDate != null) {
      return String(Math.floor((Date.now() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365))) + ' Yrs';
    } else {
      return '';
    }
  }

  setHeight(height: any) {
    if (height && height !== '') {
      return this.Heights[this.Heights1.indexOf(height)];
    } else {
      return '';
    }
  }
  setIncome(value: string): string {
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

getProfilePhoto(photo: any, carous: any, gen: string, index: string): string {
  if (carous === null || carous === 'null') {
    if (photo === null) {
    if (gen === 'Male') {
      return '../../assets/male_pic.png';
    } else {
      return '../../assets/female_pic.png';
    }
  } else {
    return photo;
  }
  } else {
    const carousel: object = JSON.parse(carous);
    const keys = Object.keys(carousel);
    // console.log(carousel[index]);
    return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
  }
}
 onErrorProfilePhoto(gender, index) {
   const imageSrc = document.querySelectorAll('#profileImage')[index];
   if (gender === 'Male') {
    imageSrc.setAttribute('src', '../../assets/male_pic.png');
  } else {
    imageSrc.setAttribute('src', '../../assets/female_pic.png');
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
openImageModal(carous: string, src: string, name: string, index: any) {
  if (carous && carous !== '') {
    const carousel: object = JSON.parse(carous);
    const keys = Object.keys(carousel);
    // console.log(carousel[index]);
    this.setModal('http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]]);
  } else if ( src && src !== '') {
    this.setModal(src);
  }
}

setModal(image) {
 const modal = document.getElementById('myModal');
 const modalImg: HTMLElement = document.getElementById('img01');
 const captionText = document.getElementById('caption');

 modal.style.display = 'block';
 modalImg.setAttribute('src', image);
 captionText.innerHTML = name;

  // Get the <span> element that closes the modal
 const span = document.getElementById('closeModal');

// When the user clicks on <span> (x), close the modal
 span.onclick = () => {
modal.style.display = 'none';
};
}
setDate(date: string) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('en-AU').format(newDate);
}
setManglik(value: string) {
  if (value === 'No') {
    return 'Non Manglik';
  } else {
    return value;
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
    }
  }

    // button 1-> Meri pasand, button-2 -> plan expired, button-3 -> no credits, button-4-> No Compatibilty
    // button-4 -> show more
  setMessageText(text: string) {
    switch (text) {
          case '👉We have already shared 6 profiles with you.\n \n Please come back tomorrow to see more profiles':
          this.button = '1';
          break;
          case '👉 हम आपको आज 6 रिश्ते दिखा चुके हैं। \n\n👉कृपया और रिश्ते देखने के लिए कल पुनः यहाँ पधारें।':
          this.button = '1';
          break;
          case 'Sorry! Your plan has expired. \n\n👉Please renew your plan or contact our customer care for help.':
          this.button = '2';
          break;
          case `माफ़ कीजिये! आपके प्रोफाइल की समय सीमा समाप्त हो गयी है। \n\n👉सुविधाएँ जारी रखने के लिए कृपया पुनः \'प्लान खरीदें\'
           या हमारे कस्टमर केयर पर संपर्क करें।`:
          this.button = '2';
          break;
          case '👉You have 0 contact numbers left. To contact this match, \'Buy A Plan\'':
            this.button = '3';
            break;
            case '👉आपके पास शेष कॉन्टैक्ट नंबर 0 हैं। इन्हें कॉन्टैक्ट करने के लिए \'प्लान खरीदें\'':
            this.button = '3';
            break;
            case ' We are looking for your perfect matches. Come back after 2 days to see more profiles.':
            this.button = '4';
            break;
            case 'हम आपके लिए उत्तम रिश्ते तलाश रहें हैं। कृपया 2 दिनों बाद पुनः यहाँ पधारें।':
            this.button = '4';
            break;
            case 'I am sorry I dont understand.\n \n👉 Please buy a plan or click to see more profiles.':
              this.button = '5';
              break;
              case 'माफ़ कीजिये। मुझे समझ नहीं आया। \n\n👉कृपया \'प्लान खरीदें\' या अगला रिश्ता देखें।':
              this.button = '5';
              break;
      default:
        break;
    }
  }
  callHans() {
    window.open('tel:9697989697');
  }
  showPlan() {
  this.router.navigateByUrl('subscription');
  }
  showLikedProfile() {
    this.changeTab.emit('2');
  }
  showProfilesLikedMe() {
    this.changeTab.emit('3');
  }
  buyPlan(plan: any) {
    this.subscriptionService.payNowT(plan, 'live', 0, '', '', this.contactNumber);
  }

  showTooltips(tooltip: NgbTooltip, tooltip2: NgbTooltip, tooltip3: NgbTooltip) {
      tooltip.open();
      tooltip2.open();
      tooltip3.open();
  }
  getProfilesLeft(left: any) {
    console.log(left);
    if (this.points) {
      console.log(this.points);
      if (this.points > 0) {
      return (6 - Number(left)).toString() + '/ 6';
    } else {
      return (10 - Number(left)).toString() + '/ 10';
    }
  }
}

openMessageDialog(shareItem) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.hasBackdrop = true;
  dialogConfig.height = '600px';
  dialogConfig.width = '700px';
  dialogConfig.disableClose = true;
  dialogConfig.data = {
    profile: shareItem
  };
  const dialogRef = this.dialog.open(MessageDialogComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(data => {
    if (data && data.response === 'NO') {
    this.getNextMessageOrProfile('NO');
    }
  });
}

}

