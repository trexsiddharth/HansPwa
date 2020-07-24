import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  NgxSpinnerService
} from 'ngx-spinner';
import {
  Observable,
  from
} from 'rxjs';
import {
  NotificationsService
} from '../../notifications.service';
import {
  NotificationButton
} from 'ngx-kc-notification/lib/notification.model';
import {
  FindOpenHistoryProfileService
} from '../../find-open-history-profile.service';
import {
  Router, ActivatedRoute
} from '@angular/router';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { HistoryProfilesDialogComponent } from './history-profiles-dialog/history-profiles-dialog.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PersonalizedMessageDialogComponent } from './personalized-message-dialog/personalized-message-dialog.component';
import { Location } from '@angular/common';
import { ChatServiceService } from 'src/app/chat-service.service';



@Component({
  selector: 'app-history-profiles',
  templateUrl: './history-profiles.component.html',
  animations: [trigger('listAnimation', [
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
  styleUrls: ['./history-profiles.component.css']
})
export class HistoryProfilesComponent implements OnInit, AfterViewInit {


  profile: any[] = [];
  wholeData;
  @Input() type: any;
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
  smallSpinner = false;
  scrollLink;
  scrollFlag = false;
  title;
  section;

  constructor(private http: HttpClient, private ngxNotificationService: NgxNotificationService,
              private spinner: NgxSpinnerService,
              private dialog: MatDialog,
              public notification: NotificationsService,
              public itemService: FindOpenHistoryProfileService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private browserLocation: Location,
              private chatService: ChatServiceService,
              private breakPointObserver: BreakpointObserver) {}

  ngOnInit() {
    // url for the particular section of history
    this.activatedRoute.paramMap.subscribe(
      (routeData: any) => {
        console.log(routeData);
        if ( routeData && routeData.params && routeData.params.section) {
          this.section = routeData.params.section;
          this.type = routeData.params.section;
        }
      }
    );

    console.log(this.type);
    switch (this.type) {
      case 'contacted':
        this.title = this.itemService.getContactedCount();
        if (localStorage.getItem('contactedProfiles')) {
          this.profile = JSON.parse(localStorage.getItem('contactedProfiles'));
          console.log(this.profile);
          }
        break;
      case 'interestShown':
        this.title = this.itemService.getShortlistedCount();
        if (localStorage.getItem('sortListProfiles')) {
          this.profile = JSON.parse(localStorage.getItem('sortListProfiles'));
          console.log(this.profile);
          }
        break;
      case 'interestReceived':
        this.title = this.itemService.getShortedCount();
        if (localStorage.getItem('interestReceived')) {
          this.profile = JSON.parse(localStorage.getItem('interestReceived'));
          console.log(this.profile);
          }
        break;
      case 'rejected':
        this.title = this.itemService.getRejectedCount();
        if (localStorage.getItem('rejectedProfiles')) {
          this.profile = JSON.parse(localStorage.getItem('rejectedProfiles'));
          console.log(this.profile);
          }
        break;
      case 'mutual':
        if (localStorage.getItem('mutualProfiles')) {
          this.profile = JSON.parse(localStorage.getItem('mutualProfiles'));
          console.log(this.profile);
          }
        break;
      default:
        break;
    }

    // if stage is not null set it to null so that when we get back to chat section it opens todays profile only
    // back to chat from chat drawer options
    if (localStorage.getItem('stage')) {
      localStorage.setItem('stage', null);
    }
  }
  ngAfterViewInit(): void {
    switch (this.type) {
      case 'contacted':
        this.scrollLink = 'contactedProfiles';
        this.getHistorydata('contactedProfiles');
        break;
      case 'interestShown':
        this.scrollLink = 'sortListProfiles';
        this.getHistorydata('sortListProfiles');
        break;
      case 'interestReceived':
        this.scrollLink = 'interestReceived';
        this.getHistorydata('interestReceived');
        break;
      case 'rejected':
        this.scrollLink = 'rejectedProfiles';
        this.getHistorydata('rejectedProfiles');
        break;
      case 'mutual':
        this.scrollLink = 'mutualProfiles';
        this.getHistorydata('mutualProfiles');
        break;
      default:
        break;
    }
  }

  goBack() {
    this.browserLocation.back();
  }

  getProfilePhoto(item: any, num: any, gen: string): string {
    if (item.family) {
      if (num === null) {
        if (gen === 'Male') {
          return '../../assets/male_pic.png';
        } else {
          return '../../assets/female_pic.png';
        }
      } else {
        return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + num;
      }
    } else {
      const carousel: object = JSON.parse(item.profile.carousel);
      const keys = Object.keys(carousel);
      return carousel[keys[0]];
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

  openPersonalizedMessageDialog(item) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.maxWidth = '30vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        }
      }
    );
    dialogConfig.data = {
      profile : item,
      type: this.type
    };
    const dialogRef = this.dialog.open(PersonalizedMessageDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          this.profileReAnswer(data.profile, data.ans, data.index);
        }
      }
    );
  }

  openProfileDialog(item: any, ind: any) {
    
    if (this.type === 'interestReceived') {
      localStorage.setItem('stage', '2');
    } else if (this.type === 'interestShown') {
      localStorage.setItem('stage', '3');
    }
    if (item) {
    // section from which user is going
    item.coming = this.type;
    localStorage.setItem('open_profile', JSON.stringify(item));
    // navigate to HISTORY PROFILE DIALOG COMPONENT
    this.router.navigateByUrl('chat/open/open-profile');
  }
  }

  setId(index: any) {
    return '#' + index;
  }

  async getHistorydata(link: string) {
    if (!localStorage.getItem(link) || this.itemService.getItem()) {
      this.spinner.show();
    }
    const historyData = new FormData();
    historyData.append('id', localStorage.getItem('id'));
    if (link.match('contacted')) {
      historyData.append('contacted', '1');
    } else {
      historyData.append('contacted', '0');
    }
    if (localStorage.getItem('is_lead')) {
      historyData.append('is_lead', localStorage.getItem('is_lead'));
    } else {
      this.checkUrl(localStorage.getItem('mobile_number')).subscribe(res => {
          console.log(res);
          historyData.append('is_lead', res.is_lead);
          localStorage.setItem('is_lead', res.is_lead);
        },
        err => {
          console.log(err);
        });
    }
    // tslint:disable-next-line: max-line-length
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/' + link, historyData).subscribe(
     async (data: any) => {
        console.log(data);
        this.wholeData = data;
        if (this.itemService.getItem()) {
        this.openContactedProfile(data.data);
        }

        if (localStorage.getItem(link)) {
        // update new data only
          if (JSON.stringify(this.profile) !== JSON.stringify(data.data)) {
          await this.addRemoveNewData(data.data);
      }
      } else {
        this.profile = data.data;
        localStorage.setItem(link, JSON.stringify(data.data));
      }

        console.log(this.profile);
        this.spinner.hide();
        if (this.profile.length < 1) {
          this.getNoDataText(link);
        }

        // event: when user visits mein kisse pasand hu for first tym when profile count is more than 1
        if (link === 'interestReceived') {
          this.getInterestReceivedEventStatus(0).subscribe(
            res => {
              console.log(res);
              if (res.si_status && res.si_status === 0 && this.profile.length > 1) {
                this.Analytics('Mein Kisse Pasand Hu',
                 'Mein Kisse Pasand Hu Section Visited',
                  'Mein Kisse Pasand Hu Section Visited');
                this.getInterestReceivedEventStatus(1).subscribe(
                    data => {
                        console.log(data);
                    }
                  );
              }
            }
          );
        }
      },
      (error: any) => {
        this.spinner.hide();
        this.ngxNotificationService.error('Something Went Wrong');
        console.log(error);
      }
    );
  }

  getInterestReceivedEventStatus(status): Observable<any> {
    const formData = new FormData();
    formData.append('id', localStorage.getItem('id'));
    formData.append('is_lead', localStorage.getItem('is_lead'));
    formData.append('event_check', status);
    return this.http.post('https://partner.hansmatrimony.com/api/updateSiEvent', formData);
  }

  // updates the new data to locally stored data
  addRemoveNewData(data: any) {
    return  new Promise((res) => {
       // finding and adding the new element to the locally stored list
       const newProfilesList: any[] = [];
       (data as any[]).forEach(
        element => {
         const newProfiles =  this.profile.find(
           item => {
             if (item.family) {
              return item.profile.id === element.profile.id;
             } else {
              return item.profile.identity_number === element.profile.identity_number;
             }
           });
         if (!newProfiles) {
            //  this.profile.push(element);
            newProfilesList.push(element);
           }
        }
      );

       if (newProfilesList.length > 0) {
        this.profile = [...newProfilesList, ...this.profile];
      }

      // finding and removing the old element from the locally stored list

       this.profile.forEach(
       (item, index) => {
        const removeProfile =  (data as any[]).find(
           element => {
            if (item.family) {
              return item.profile.id === element.profile.id;
             } else {
              return item.profile.identity_number === element.profile.identity_number;
             }
           }
         );
        if (!removeProfile) {
          this.profile.splice(index, 1);
        }
       }
      );

       console.log(this.profile);
       this.updateLocalList();
       res(this.profile);
      });
  }

  openContactedProfile(data: any) {
    if (this.itemService.getItem()) {
      const prof: any = this.itemService.getItem();
      console.log(prof);
      if (prof.family) {
        this.panelOpenState = data.findIndex((item) => {
          return item.profile.id === prof.profile.id;
        });
        console.log(this.panelOpenState);
        this.openProfileDialog(data[this.panelOpenState], this.panelOpenState);
      } else if (prof.profile) {
        this.panelOpenState = data.findIndex((item) => {
          return item.profile.identity_number === prof.profile.identity_number;
        });
        console.log(this.panelOpenState);
        this.openProfileDialog(data[this.panelOpenState], this.panelOpenState);
      } else {
        this.panelOpenState = data.findIndex((item) => {
          return item.profile.identity_number === prof.identity_number;
        });
        console.log(this.panelOpenState);
        this.openProfileDialog(data[this.panelOpenState], this.panelOpenState);
      }
      this.itemService.setItem(null);
    }
  }

  updateLocalList() {
    switch (this.type) {
      case 'contacted':
          localStorage.setItem('contactedProfiles', JSON.stringify(this.profile));
          break;
      case 'interestShown':
          localStorage.setItem('sortListProfiles', JSON.stringify(this.profile));
          break;
      case 'interestReceived':
          localStorage.setItem('interestReceived', JSON.stringify(this.profile));
          break;
      case 'rejected':
        localStorage.setItem('rejectedProfiles', JSON.stringify(this.profile));
        break;
      default:
        break;
    }
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

profileReAnswer(item: any, answer: any, index: any) {

  // if main kisse pasand hu and credits are zero...on Shortlist  response show offer 2
  if (this.type === 'interestReceived' && this.itemService.getCredits().toString() === '0'
  && answer === 'SHORTLIST') {
      this.itemService.openOfferTwo(item);
      this.getData(item, answer, index);
      return;
  }

  if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
    this.itemService.getPhotoStatus() === false &&
    answer === 'SHORTLIST') {
      this.itemService.openMessageDialog(item, answer);
   } else if (this.itemService.getPersonalized() === false &&
    answer === 'YES' && !item.family ) {
      this.itemService.openMessageDialog(item, 'contacted');
   }  else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0'
   && answer === 'YES') {
    this.itemService.openMessageDialog(item, answer);
   } else {
     this.getData(item, answer, index);
   }
  }

getData(item: any, answer: any, index: any) {
    this.spinner.show();
    this.panelOpenState = null;
    const reAnswerData = new FormData();
    reAnswerData.append('mobile', localStorage.getItem('mobile_number'));
    if (item.family) {
    reAnswerData.append('id', item.profile.id);
    } else {
      reAnswerData.append('id', item.profile.identity_number);
    }
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
          this.spinner.hide();
        });
    }
    // tslint:disable-next-line: max-line-length
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/reply', reAnswerData).subscribe(
      (data: any) => {
        console.log(data);
        // update the count of all sections after response on any profile
        if (data && data.count) {
          this.itemService.saveCount(data.count);
        }
        this.Analytics('Profile Reanswered', 'Profile Reanswered From History', answer);
        this.updateProfileList(answer, localStorage.getItem('mobile_number'), index);
        this.getCredits();
      }, (error: any) => {
        console.log(error);
        this.spinner.hide();
      });
  }
Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {
        console.log('Tracking ' + type + ' successful');
      }
    });
    // gtag app + web
    (window as any).gtag('event', category , {
      action: action
    });
  }
updateProfileList(ans: any, num: any, index: any) {
    switch (this.type) {
      case 'interestShown':
        switch (ans) {
          case 'YES':
            if (this.itemService.getCredits() && this.itemService.getCredits() !== '0') {
              // this.slideAndOpenProfile(this.profile[index], 1);
              this.router.navigateByUrl(`chat/open/open-profile/${this.profile[index].profile.id}`);
              this.profile.splice(index, 1);
              // this.itemService.changeTab(1);
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
              // this.slideAndOpenProfile(this.profile[index], 1);
              this.router.navigateByUrl(`chat/open/open-profile/${this.profile[index].profile.id}`);
              this.profile.splice(this.profile[index], 1);
              // this.itemService.changeTab(1);
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

        case 'interestReceived':
          switch (ans) {
            case 'YES':
              if (this.itemService.getCredits() && this.itemService.getCredits() !== '0') {
                // this.slideAndOpenProfile(this.profile[index], 1);
                this.router.navigateByUrl(`chat/open/open-profile/${this.profile[index].profile.id}`);
                this.profile.splice(index, 1);
                // this.itemService.changeTab(1);
              } else {
                this.ngxNotificationService.error('You Dont have Enough Credits', '',
                  null, {
                    duration: 4000,
                    closeButton: true
                  });
              }
              break;
            case 'SHORTLIST':
              this.profile.splice(index, 1);
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

          case 'mutual':
        switch (ans) {
          case 'YES':
            if (this.itemService.getCredits() && this.itemService.getCredits() !== '0') {
              // this.slideAndOpenProfile(this.profile[index], 1);
              this.router.navigateByUrl(`chat/open/open-profile/${this.profile[index].profile.id}`);
              this.profile.splice(index, 1);
              // this.itemService.changeTab(1);
            } else {
              this.ngxNotificationService.error('You Dont have Enough Credits', '',
                null, {
                  duration: 4000,
                  closeButton: true
                });
            }
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    this.updateLocalList();
  }
goToSubscription() {
    this.router.navigateByUrl('subscription');
  }
call(index: any) {
  if (this.profile[index].family) {
    window.open('tel:' + this.profile[index].family.mobile);
  } else {
    this.ngxNotificationService.error('Mobile Number Not Found');
  }
  }
slideAndOpenProfile(item: any, slide: any) {
    this.spinner.show();
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
     this.spinner.hide();
   },
  (error: any) => {
    this.ngxNotificationService.error('We couldn\'t get your credits, trying again');
    console.log(error);
    this.spinner.hide();
  }
 );
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

  // get data when current page data has been completely scrolled
  getScrollData() {
    console.log('scrolled');

    if (!this.scrollFlag) {
      this.scrollFlag = true;

      if (this.wholeData.next_page_url) {
    this.smallSpinner = true;

    const historyData = new FormData();
    historyData.append('id', localStorage.getItem('id'));
    if (this.type.match('contacted')) {
      historyData.append('contacted', '1');
    } else {
      historyData.append('contacted', '0');
    }
    if (localStorage.getItem('is_lead')) {
      historyData.append('is_lead', localStorage.getItem('is_lead'));
    } else {
      this.checkUrl(localStorage.getItem('mobile_number')).subscribe(res => {
          console.log(res);
          historyData.append('is_lead', res.is_lead);
          localStorage.setItem('is_lead', res.is_lead);
        },
        err => {
          console.log(err);
        });
    }
    // tslint:disable-next-line: max-line-length
    this.http.post < any > ('https://partner.hansmatrimony.com/api/' + this.scrollLink + this.wholeData.next_page_url, historyData).subscribe(
      (data: any) => {
        console.log(data);
        this.wholeData = data;
        const newData = Object.values(data.data);
        console.log(newData);
        this.profile = this.profile.concat(newData);
        console.log(this.profile);
        this.scrollFlag = false;
        this.smallSpinner = false;

      },
      (error: any) => {
        this.spinner.hide();
        this.ngxNotificationService.error('Something Went Wrong');
        console.log(error);
      }
    );
    }
  }
  }

}
