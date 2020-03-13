import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { NotificationButton } from 'ngx-kc-notification/lib/notification.model';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'src/app/notifications.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { Router } from '@angular/router';
import { timeout, retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';

@Component({
  selector: 'app-personalized-profiles',
  templateUrl: './personalized-profiles.component.html', animations: [trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ], {optional: true}),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ]),
      ], {optional: true})
    ])
  ])],
  styleUrls: ['./personalized-profiles.component.css']
})
export class PersonalizedProfilesComponent implements OnInit, AfterViewInit {
  profile: any[];
  @Input() type: any;
  @Output() share = new EventEmitter < any > ();
  @Output() stage = new EventEmitter < string > ();
  @Output() setTab = new EventEmitter < any > ();
  likeCount;
  dislikeCount;
  panelOpenState;
  button1: NotificationButton;
  noData;
  carouselSize;
  // Height
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];


  constructor(private http: HttpClient, private ngxNotificationService: NgxNotificationService, 
              private spinner: NgxSpinnerService,
              private dialog: MatDialog,
              public notification: NotificationsService, public itemService: FindOpenHistoryProfileService, private router: Router) {}

  ngOnInit() {
    this.getPersonalizedProfiles();
  }
  ngAfterViewInit(): void {
  }

  shareData(id: any, contacted: any, status) {
    const profileData = new FormData();
    profileData.append('id', id);
    profileData.append('contacted', contacted);
    profileData.append('is_lead', '0');

    console.log('id', id);
    console.log('contacted', contacted);
    console.log('is_lead', localStorage.getItem('is_lead'));
    // tslint:disable-next-line: max-line-length
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/getProfile', profileData).subscribe(
      (data: any) => {
        console.log(data);
        data.profile.comments = status;
        this.share.emit(data);
        this.stage.emit('chatbot');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getProfilePhoto(num: any, gen: string): string {
    if (num === null) {
      if (gen === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    } else {
      const carousel: object = JSON.parse(num);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      return carousel[keys[0]];
    }
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
      return carousel[keys[index]];
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

  setPanelOpenState(index: any) {
    this.panelOpenState = index;
    console.log(this.panelOpenState);
  }

  setId(index: any) {
    return '#' + index;
  }
  checkUrl(num: string): Observable < any > {
    if (localStorage.getItem('fcm_app')) {
      // tslint:disable-next-line: max-line-length
      return this.http.get < any > (' https://partner.hansmatrimony.com/api/auth', {
        params: {
          ['phone_number']: num,
          ['fcm_id']: this.notification.getCurrentToken(),
          ['fcm_app']: localStorage.getItem('fcm_app')
        }
      });
    } else {
      // tslint:disable-next-line: max-line-length
      return this.http.get < any > (' https://partner.hansmatrimony.com/api/auth', {
        params: {
          ['phone_number']: num,
          ['fcm_id']: this.notification.getCurrentToken()
        }
      });
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

  LifeStatus( work: string) {
        if (work) {
          return work;
        } else {
          return '';
        }
}

  profileReAnswer(item: any, id: any, answer: any, index: any) {
    console.log('test', this.itemService.getCredits() != null , this.itemService.getCredits().toString() === '0');
    if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0') {
     this.openMessageDialog(item, answer);
   } else {
     this.getData(id, answer, index);
   }
  }

  getData(id: any, answer: any, index: any) {
    this.panelOpenState = null;
    const reAnswerData = new FormData();
    reAnswerData.append('mobile', localStorage.getItem('mobile_number'));
    reAnswerData.append('id', id);
    reAnswerData.append('answer', answer);
    if (localStorage.getItem('is_lead')) {
      reAnswerData.append('is_lead', localStorage.getItem('is_lead'));
    } else {
      this.checkUrl(localStorage.getItem('mobile_number')).subscribe(res => {
          console.log(res);
          reAnswerData.append('is_lead', res.is_lead);
          localStorage.setItem('is_lead', res.is_lead);
        },
        err => {
          console.log(err);
        });
    }
    // tslint:disable-next-line: max-line-length
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/reply', reAnswerData).subscribe(
      (data: any) => {
        this.Analytics('Profile Reanswered', 'Profile Reanswered From History', answer);
        console.log(answer);
        console.log(localStorage.getItem('mobile_number'));
        console.log(id);
        console.log(data);
        this.getCredits();
        this.updateProfileList(answer, localStorage.getItem('mobile_number'), index);
      }, (error: any) => {
        console.log(error);
      });
  }
  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {
        console.log('Tracking ' + type + ' successful');
      }
    });
  }
  updateProfileList(ans: any, num: any, index: any) {
    switch (this.type) {
      case 'interestShown':
        switch (ans) {
          case 'YES':
            if (this.itemService.getCredits() && this.itemService.getCredits() !== '0') {
              this.slideAndOpenProfile(this.profile[index], 1);
              this.profile.splice(index, 1);
              this.setTab.emit(1);
            } else {
              this.ngxNotificationService.error('You Dont have Enough Credits', '',
                null, {
                  duration: 4000,
                  closeButton: true
                });
            }
            break;
          case 'SHORTLIST':
            this.ngxNotificationService.success('Profile Shortlisted Successfully', '', null, {
              duration: 4000
            });
            break;
          case 'NO':
            this.profile.splice(index, 1);
            this.ngxNotificationService.success('Profile Rejected Successfully', '', null, {
              duration: 4000
            });
            break;
          default:
            break;
        }
        break;
      case 'rejected':
        switch (ans) {
          case 'YES':
            if (this.itemService.getCredits() && this.itemService.getCredits() !== '0') {
              this.slideAndOpenProfile(this.profile[index], 1);
              this.profile.splice(this.profile[index], 1);
              this.setTab.emit(1);
              this.profile.splice(index, 1);
            } else {
              this.ngxNotificationService.error('You Dont have Enough Credits', '',
                null, {
                  duration: 4000,
                  closeButton: true
                });
            }
            break;
          case 'SHORTLIST':
            // this.slideAndOpenProfile(this.profile[index], 2);
            this.profile.splice(index, 1);
            // document.querySelectorAll('mat-expansion-panel')[0].scrollIntoView({behavior: 'smooth'});
            this.ngxNotificationService.success('Profile Shortlisted Successfully', '', null, {
              duration: 4000
            });
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  goToSubscription() {
    this.router.navigateByUrl('subscription');
  }
  call(num: any) {
    window.open('tel:' + num);
    this.panelOpenState = null;
  }
  slideAndOpenProfile(item: any, slide: any) {
    this.itemService.setItem(item);
    this.setTab.emit(slide);
  }
  setDate(date: string) {
    let newDate = new Date(date);
    return new Intl.DateTimeFormat('en-AU').format(newDate);
  }
  setHeight(height: any) {
    if (height && height !== '') {
      return this.Heights[this.Heights1.indexOf(height.toString())];
    } else {
      return '';
    }
  }
  disableForAWhile() {
    if (this.panelOpenState === null) {
      setTimeout(() => {
        this.panelOpenState = -1;
      }, 100);
      return true;
    } else {
      return false;
    }
  }
  setTabNames(tab: any) {
    if (localStorage.getItem('language') === null) {
      localStorage.setItem('language', 'Hindi');
    }
    switch (localStorage.getItem('language')) {
      case 'English':
        switch (tab) {
          case 0:
            return 'Today\'s Matches';
          case 1:
            return 'Contacted';
          case 2:
            return 'Liked By You';
          case 3:
            return 'Liked You';
          case 4:
            return 'Rejected';
          default:
            break;
        }
        break;
      case 'Hindi':
        switch (tab) {
          case 0:
            return 'आज के रिश्ते';
          case 1:
            return 'कोन्टक्टेड';
          case 2:
            return 'मेरी पसंद';
          case 3:
            return 'मै किसे पसंद हूँ';
          case 4:
            return 'नापसंद ';
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  setAllTabNames() {
    for (let index = 0; index < 5; index++) {
      this.setTabNames(index);
    }
  }
  getNoDataText(type: any) {
    switch (type) {
      case 'contactedProfiles':
        this.noData = '☹️ अभी आपने किसी भी रिश्ते को कॉन्टैक्ट नहीं किया है';
        break;
      case 'sortListProfiles':
        this.noData = '☹️ अभी आपने कोई रिश्ता पसंद नहीं किया है ';
        break;
      case 'interestReceived':
        this.noData = '☹️ अभी किसी रिश्ते ने आपको पसंद नहीं किया है';
        break;
      case 'rejectedProfiles':
        this.noData = '☹️ अभी आपने कोई रिश्ता नापसंद नहीं किया है';
        break;
      default:
        break;
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

openMessageDialog(shareItem, reply: string) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.hasBackdrop = true;
  dialogConfig.width = '700px';
  dialogConfig.disableClose = true;
  switch (reply.toLowerCase()) {
    case 'yes':
      dialogConfig.data = {
        profile: shareItem,
        type: reply.toLowerCase()
      };
      const dialogRefYes = this.dialog.open(MessageDialogComponent, dialogConfig);
      break;

    default:
      break;
  }
}

getPersonalizedProfiles() {
  this.spinner.show();
  const creditsData = new FormData();
  creditsData.append('TEXT', 'SHOW');
  creditsData.append('mobile', localStorage.getItem('mobile_number'));

 // tslint:disable-next-line: max-line-length
  return this.http.post<any>('https://partner.hansmatrimony.com/api/premiumPro', creditsData).pipe(timeout(7000), retry(2), catchError(e => {
    throw new Error('Server Timeout ' + e);
  })).subscribe(
   (data: any) => {
    console.log(data);
    this.profile = JSON.parse(data.message);
    console.log(this.profile);
    this.spinner.hide();
    // if (this.profile.length < 1) {
    //   this.getNoDataText(link);
    // }
    if (this.itemService.getItem()) {
      let prof: any = this.itemService.getItem();
      if (prof.profile) {
        this.panelOpenState = this.profile.findIndex((item) => {
          return item.profile.name === prof.profile.name;
        });
      } else {
        this.panelOpenState = this.profile.findIndex((item) => {
          return item.profile.name === prof.name;
        });
      }
      this.itemService.setItem(null);
    }
   },
  (error: any) => {
    this.ngxNotificationService.error('We couldn\'t get your credits, trying again');
    console.log(error);
    this.spinner.hide();
  }
 );
}
}