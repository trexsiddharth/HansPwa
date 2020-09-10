import { Component, OnInit, Output, EventEmitter, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';
import { timeout, retry, catchError, shareReplay } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { NotificationsService } from '../../notifications.service';
import { ChatServiceService } from '../../chat-service.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { Router, Event, ActivatedRoute } from '@angular/router';
import { SubscriptionserviceService } from '../../subscriptionservice.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { ApiwhaAutoreply } from './profile-today-model';
import { LanguageService } from 'src/app/language.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { PersistentMessageComponent } from './persistent-message/persistent-message.component'
@Component({
  selector: 'app-today-profiles',
  templateUrl: './today-profiles.component.html',
  styleUrls: ['./today-profiles.component.css']
})
export class TodayProfilesComponent implements OnInit, AfterViewInit, OnDestroy {
  item = new ApiwhaAutoreply();
  item2 = new ApiwhaAutoreply();
  itemMessage = 'Welcome To Hans Matrimony';
  Data;
  contactNumber;
  points = 0;
  paidStatus;
  exhaustedStatus;
  type = '';
  button;
  photo;
  carousel;
  carouselSize;
  count = 1;
  selfImage;
  selfName;

  shortListCount = 0;
  rejectedListCount = 0;

  actionCount = -2;

  shortList =
    [{
      'value': 0,
      'bool': false
    },
    {
      'value': 1,
      'bool': false
    },
    {
      'value': 2,
      'bool': false
    },
    ];
  rejectList =
    [
      {
        'value': 0,
        'bool': false
      },
      {
        'value': 1,
        'bool': false
      },
    ];

  section;
  about: any;
  personal;
  family;
  selectedTab = 0;
  // Height
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  // last action
  lastAction;
  showActionAnimation = false;

  //for openning short popups;
  openedPersistentPopup: boolean = false;

  profileIsLoadingSubject = new Subject<string>();
  profileIsLoading$: Observable<string> = this.profileIsLoadingSubject.asObservable().pipe(
    shareReplay()
  );
  userId;
  userIsLead;
  constructor(private http: HttpClient,
    private spinner: NgxSpinnerService,
    private ngxNotificationService: NgxNotificationService,
    public notification: NotificationsService,
    public chatService: ChatServiceService,
    public itemService: FindOpenHistoryProfileService,
    public router: Router,
    private dialog: MatDialog,
    public languageService: LanguageService,
    public subscriptionService: SubscriptionserviceService,
    private breakPointObserver: BreakpointObserver,) {
  }
  ret = [];
  getStackedCardsNumber() {
    let num = Number(this.item.profiles_left);
    console.log("look here", this.item.profiles_left);
    for (let i = 0; i < num; i++) {
      this.ret.push(i);
    }
    console.log('look here', this.ret);
  }
  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log("Scroll Event", document.body.scrollTop);
    console.log("Scroll Event", window.pageYOffset);
    // this.onScrollOfMain();
  }
  ngAfterViewInit(): void {
    // this.languageService.setCurrentLanguage('hindi');
    this.section = document.querySelector('#today-main');
    //this.HandleStackedCards();
    // if (localStorage.getItem('todaysSpecialScrollPos')) {
    //   document.getElementById("main").scrollTo(0, Number(localStorage.getItem('todaysSpecialScrollPos')));
    // }
    //this.itemService.setTutorialIndex();
  }
  ngOnInit() {
    if (this.router.url.includes('first')) {
      this.spinner.show('searchingSpinner');
    }
    this.contactNumber = this.chatService.getContactNumber();
    console.log(this.contactNumber);
    this.chatService.authorized.subscribe(
      data => {
        if (data) {
          this.userId = data.id;
          this.userIsLead = data.isLead;
          console.log(this.userId, this.userIsLead);
        }
      }
    );

    if (!localStorage.getItem('authData')) {
      this.checkUrl().subscribe(
        data => {
          console.log(data);
          localStorage.setItem('authData', JSON.stringify(data));
          const text: string = data.apiwha_autoreply;
          const id = data.id;
          if (data && data.get_status_count) {
            this.itemService.saveCount(data.get_status_count);
          }
          if (data.hasPhoto === '1') {
            this.itemService.setPhotoStatus(true);
          } else {
            //this.itemService.setPhotoStatus(false);
          }
          // for personalized users
          if (data && data.is_premium && data.is_premium === '1') {
            this.itemService.setIsPersonalized(true);
          } else {
            this.itemService.setIsPersonalized(false);
          }
          // for is_lead
          if (data && data.is_lead != null) {
            this.itemService.setIsLead(data.is_lead);
          } else {
            this.itemService.setIsLead(1);
          }


          // set profile image (circular in top bar)

          if (data) {
            this.selfImage = data.photo;
            this.selfName = data.name;
            this.chatService.authorized.emit({
              name: data.name ? data.name : '',
              photo: data.photo ? data.photo : '',
              id: data.id,
              isLead: data.is_lead
            });
            localStorage.setItem('profile_photo', data.photo);
          } else {
            this.selfImage = '../../assets/avatar.svg';
            this.selfName = 'You';
          }

          console.log(text);
          console.log(id);
          localStorage.setItem('id', id);
          this.paidStatus = data.paid_status;
          console.log(this.paidStatus);
          if (text.match('SHOW')) {
            this.chatService.Analytics('login', 'login', 'logged In');
            this.chatService.setLoginStatus(true);
            if (localStorage.getItem('todayProfile')) {
              this.setProfileLocally();
            }
            this.getNextMessageOrProfile('SHOW');
          }
        }, err => {
          console.log(err);
        }
      );
    } else {
      setTimeout(() => {
        const data = JSON.parse(localStorage.getItem('authData'));
        console.log(data);
        const text: string = data.apiwha_autoreply;
        const id = data.id;
        if (data && data.get_status_count) {
          this.itemService.saveCount(data.get_status_count);
        }
        if (data.hasPhoto === '1') {
          this.itemService.setPhotoStatus(true);
        } else {
          //this.itemService.setPhotoStatus(false);
        }
        // for personalized users
        if (data && data.is_premium && data.is_premium === '1') {
          this.itemService.setIsPersonalized(true);
        } else {
          this.itemService.setIsPersonalized(false);
        }
        // for is_lead
        if (data && data.is_lead != null) {
          this.itemService.setIsLead(data.is_lead);
        } else {
          this.itemService.setIsLead(1);
        }


        // set profile image (circular in top bar)

        if (data) {
          this.selfImage = data.photo;
          this.selfName = data.name;
          this.chatService.authorized.emit({
            name: data.name ? data.name : '',
            photo: data.photo ? data.photo : '',
            id: data.id,
            isLead: data.is_lead
          });
          localStorage.setItem('profile_photo', data.photo);
        } else {
          this.selfImage = '../../assets/avatar.svg';
          this.selfName = 'You';
        }
        console.log(text);
        console.log(id);
        if (id) {
          localStorage.setItem('id', id);
        }
        this.paidStatus = data.paid_status;
        console.log(this.paidStatus);

        if (text.match('SHOW')) {
          this.chatService.Analytics('login', 'login', 'logged In');
          this.chatService.setLoginStatus(true);
          if (localStorage.getItem('todayProfile')) {
            this.setProfileLocally();
          }
          this.getNextMessageOrProfile('SHOW');
        }
      }, 100);
    }
    if (this.chatService.shortList.length > 0) {
      this.shortList = this.chatService.shortList;
      console.log('sortList values found in chat service');
    }
    else {
      this.chatService.shortList = this.shortList;
      console.log('setting shortList values in chat service');
    }
    if (this.chatService.rejectList.length > 0) {
      this.rejectList = this.chatService.rejectList;
      console.log('rejectList values found in chat service');
    }
    else {
      this.chatService.rejectList = this.rejectList;
      console.log('setting rejectList values in chat service');
    }
    if (this.chatService.actionCount !== -2) {
      this.actionCount = this.chatService.actionCount;
      console.log('found action count value in chat service');
    }
    else {
      this.chatService.actionCount = this.actionCount;
      console.log('setting action count value in chat service');
    }
    this.getStackedCardsNumber();
  }
  ngOnDestroy(): void {
    this.chatService.shortList = this.shortList;
    console.log('setting shortList values in chat service');
    this.chatService.rejectList = this.rejectList;
    console.log('setting rejectList values in chat service');
    this.chatService.actionCount = this.actionCount;
    console.log('setting action count value in chat service');
  }

  private setProfileLocally() {
    this.type = 'profile';
    const data = JSON.parse(localStorage.getItem('todayProfile'));
    this.item = data.apiwha_autoreply;
    if (data && data.get_status_count) {
      this.itemService.saveCount(data.get_status_count);
      this.itemService.saveDailyCount(data.apiwha_autoreply.profiles_left);
    }
    this.item2 = data.next_profile;
    console.log(this.item);
  }

  // onScrollOfMain() {
  //   console.log('scrolled' + document.getElementById("content").scrollTop);
  //   this.itemService.setScroll('todaysSpecialScrollPos', document.getElementById("content").scrollTop);
  // }
  checkUrl(): Observable<any> {
    if (localStorage.getItem('fcm_app')) {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: this.contactNumber, ['fcm_id']: this.notification.getCurrentToken(), ['fcm_app']: localStorage.getItem('fcm_app') } });
    } else {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: this.contactNumber, ['fcm_id']: this.notification.getCurrentToken() } });
    }
  }
  chatRequest(data): Observable<any> {
    if (data && this.contactNumber && data !== '' && this.contactNumber !== '') {
      // setting profile seen true for locally stored profile
      localStorage.setItem('todayStatus', 'true');
      this.Data = {
        from: localStorage.getItem('mobile_number'),
        to: localStorage.getItem('mobile_number'),
        event: 'INBOX',
        text: data,
        channel_name: 'app'
      };
      // last action for action animation
      // this.lastAction = data;
      // this.startActionAnimation();

      const myJSON = JSON.stringify(this.Data);
      console.log(myJSON);

      const data1 = new FormData();
      data1.append('data', myJSON);

      // tslint:disable-next-line: max-line-length
      return this.http.post<any>(' https://partner.hansmatrimony.com/api/sendMessages', data1).pipe(timeout(7000), retry(2), catchError(e => {
        throw new Error('Server Timeout ' + e);
      }));
    }
  }
  startActionAnimation() {
    if (this.lastAction === 'SHOW') {
      return;
    }
    this.showActionAnimation = true;
    setTimeout(() => {
      this.showActionAnimation = false;
    }, 10000);
  }
  analyticsEvent(event) {
    (window as any).ga('send', 'event', event, '', {
      hitCallback: () => {

        console.log('Tracking ' + event + ' successful');

      }
    });
    // gtag app + web
    (window as any).gtag('event', event, {
      event_callback: () => {
        console.log('Tracking gtag ' + event + ' successful');
      }
    });
  }
  showShortListPopup(shareItem, i: number) {
    console.log(i);
    if (i == 0) {
      this.openPersistentDialog('Complete Your Profile', 'Complete your profile and get liked by ' + shareItem.name + '!', 'Complete Profile');
    }
    if (i == 1) {
      this.openPersistentDialog('Liked ' + shareItem.name + '?', 'Get notified easily if ' + shareItem.name + ' likes you back!', 'Install App Now');
    }
    if (i == 2) {
      this.openPersistentDialog('Prime Membership', 'Become a paid member to contact ' + shareItem.name + '.', 'Get Membership');
    }
  }
  rejectListPopup(shareItem, i: number) {
    // if ((this.itemService.getCredits() != null && this.itemService.getCredits().toString() !== '0') && (this.actionCount % 4 !== 0)) {
    //   console.log('return for paid users');
    //   return;
    // }
    if (i == 0) {
      this.openPersistentDialog('Complete Your Profile', 'Complete your profile and get better matches.', 'Complete Profile');
    }
    if (i == 1) {
      this.openPersistentDialog('Didn\'t Like ' + shareItem.name + '?', 'Become a paid member and get better matches', 'Choose Plan');
    }
  }
  persistentDialogOpeningLogic(shareItem, reply: string) {
    if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
      reply.toLowerCase() === 'yes' && this.type === 'profile') {
      this.itemService.openTodaysPopupAd();
    } else if (reply === 'NO' || reply.toLowerCase() === 'shortlist') {
      this.actionCount++;
      console.log('action count', this.actionCount)
      if ((this.itemService.getCredits() != null && this.itemService.getCredits().toString() !== '0') && (this.actionCount % 4 !== 0)) {
        console.log('returning for paid users for paid users');
        return;
      }
      if (this.actionCount % 2 === 0) {
        if (reply.toLowerCase() === 'shortlist' && this.type === 'profile') {
          if (localStorage.getItem('profileCompPercent') && Number(localStorage.getItem('profileCompPercent')) < 100) {
            for (let x of this.shortList) {
              if (x.value === 0) {
                x.bool = true;
                break;
              }
            }
          }
          if (!localStorage.getItem('appInstalled') || (localStorage.getItem('appInstalled') && localStorage.getItem('appInstalled') !== '1')) {
            for (let x of this.shortList) {
              if (x.value === 1) {
                x.bool = true;
                break;
              }
            }
          }
          if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0') {
            for (let x of this.shortList) {
              if (x.value === 2) {
                x.bool = true;
                break;
              }
            }
          }
          console.log('Here is the short list array', this.shortList);
          let v;
          for (v of this.shortList) {
            if (v.bool) {
              this.showShortListPopup(shareItem, v.value);
              break;
            }
          }
          this.shortList.splice(this.shortList.indexOf(v), 1);
          this.shortList.push(v);
          console.log('here is the modified shortlist array', this.shortList);
        }
        else if (reply === 'NO' && this.type === 'profile') {
          if (localStorage.getItem('profileCompPercent') && Number(localStorage.getItem('profileCompPercent')) < 100) {
            for (let x of this.rejectList) {
              if (x.value === 0) {
                x.bool = true;
                break;
              }
            }
          }
          if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0') {
            for (let x of this.rejectList) {
              if (x.value === 1) {
                x.bool = true;
                break;
              }
            }
          }
          console.log('Here is the reject list array', this.rejectList);
          let v;
          for (v of this.rejectList) {
            if (v.bool) {
              this.rejectListPopup(shareItem, v.value);
              break;
            }
          }
          this.rejectList.splice(this.rejectList.indexOf(v), 1);
          this.rejectList.push(v);
          console.log('here is the modified reject list array', this.rejectList);
        }
      }
      console.log('get data called');
      this.getData(reply);
    } else {
      console.log('get data called');
      this.getData(reply);
    }

  }
  getNextMessageOrProfile(reply: string) {
    // stop the button animation
    this.stopAnimation();
    this.itemService.setTutorialIndex();
    // console.log('shortlist count', this.shortListCount);
    // console.log('rejected count', this.rejectedListCount)
    this.persistentDialogOpeningLogic(this.item, reply);
    const modal = document.getElementById('myModal');
    // return; //this is temporary
    if (modal.style.display !== 'none') {
      modal.style.display = 'none';
    }
    // console.log(this.itemService.getCredits(), reply.toLowerCase());
    // console.log(this.type, this.itemService.getPhotoStatus());

    // if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
    //   reply.toLowerCase() === 'yes' && this.type === 'profile') {
    //   this.itemService.openTodaysPopupAd();
    // } else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
    //   reply.toLowerCase() === 'shortlist' && this.type === 'profile' && this.itemService.getPhotoStatus() === false
    //   && (this.shortListCount === 0 || this.shortListCount % 2 === 0)) {
    //   this.openMessageDialog(this.item, reply);
    // } else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
    //   reply.toLowerCase() === 'shortlist' && this.type === 'profile'
    //   && this.shortListCount !== 0 && this.shortListCount % 3 === 0) {
    //   this.shortListCount++;
    //   this.itemService.openOfferOne(this.item);
    // } else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
    //   reply.toLowerCase() === 'shortlist' && this.type === 'profile'
    //   && this.shortListCount !== 0 && this.shortListCount % 5 === 0) {
    //   this.shortListCount++;
    //   this.itemService.openDownloadAppDialog(this.item);
    // } else {
    //   this.getData(reply);
    // }
  }

  getData(reply) {
    // shortlist count
    console.log(reply);
    this.setCount(reply);
    const previousItem = this.item;
    this.getStackedCardsNumber();
    if (!localStorage.getItem('todayProfile')) {
      this.spinner.show();
    }
    if (reply !== 'SHOW') {
      if (document.getElementById('profilePic')) {
        document.getElementById('profilePic').scrollIntoView({ behavior: 'smooth' });
        this.profileIsLoadingSubject.next(reply);
      }
    }
    this.chatRequest(reply).subscribe(
      data => {
        console.log(data);
        this.analyticsEvent(`Response ${reply} On Today's Special Profile`);

        // hide the searching spinner if visible
        // only visible for first time users
        this.spinner.hide('searchingSpinner');

        if (data && data.get_status_count) {
          this.itemService.saveCount(data.get_status_count);
          this.itemService.saveDailyCount(data.apiwha_autoreply.profiles_left);
        }
        // set language according to user choice
        if (data.apiwha_autoreply.language) {
          console.log(this.languageService.languageChangedFromMainStatus,
            localStorage.getItem('language'), data.apiwha_autoreply.language.toLowerCase());

          if (this.languageService.languageChangedFromMainStatus &&
            localStorage.getItem('language') !== data.apiwha_autoreply.language.toLowerCase()) {
            this.languageService.setCurrentLanguage(localStorage.getItem('language'));
            this.languageService.languageChangedFromMainStatus = false;
          } else if (!this.languageService.languageChangedFromMainStatus &&
            localStorage.getItem('language') !== data.apiwha_autoreply.language.toLowerCase()) {
            this.languageService.setCurrentLanguage(data.apiwha_autoreply.language.toLowerCase());
          } else {
            if (!this.languageService.profileLang.name) {
              this.languageService.setProfileLanguage();
              this.languageService.languageChangedFromMainStatus = false;
            }
          }

        } else {
          if (this.languageService.languageChangedFromMainStatus) {
            this.languageService.setCurrentLanguage(localStorage.getItem('language'));
            this.languageService.languageChangedFromMainStatus = false;
          } else {
            if (!this.languageService.profileLang.name) {
              this.languageService.setProfileLanguage();
            }
          }
        }


        // if profile_created == 1 ...re hit auth api
        if (data.profile_created && data.profile_created === 1 && localStorage.getItem('is_lead') === '1') {
          this.checkUrl().subscribe(
            data => {
              console.log(data);
              localStorage.setItem('authData', JSON.stringify(data));
              const text: string = data.apiwha_autoreply;
              const id = data.id;
              if (data && data.get_status_count) {
                this.itemService.saveCount(data.get_status_count);
              }
              if (data.hasPhoto === '1') {
                this.itemService.setPhotoStatus(true);
              } else {
                //this.itemService.setPhotoStatus(false);
              }
              // for personalized users
              if (data && data.is_premium && data.is_premium === '1') {
                this.itemService.setIsPersonalized(true);
              } else {
                this.itemService.setIsPersonalized(false);
              }
              // for is_lead
              if (data && data.is_lead != null) {
                this.itemService.setIsLead(data.is_lead);
              } else {
                this.itemService.setIsLead(1);
              }
              // set profile image (circular in top bar)
              if (data) {
                this.selfImage = data.photo;
                this.selfName = data.name;
                this.chatService.authorized.emit({
                  name: data.name ? data.name : '',
                  photo: data.photo ? data.photo : '',
                  id: data.id,
                  isLead: data.is_lead
                });
                localStorage.setItem('profile_photo', data.photo);
              } else {
                this.selfImage = '../../assets/avatar.svg';
                this.selfName = 'You';
              }
              console.log(text);
              console.log(id);
              localStorage.setItem('id', id);
              this.paidStatus = data.paid_status;
              console.log(this.paidStatus);
              if (text.match('SHOW')) {
                this.chatService.setLoginStatus(true);
                if (localStorage.getItem('todayProfile')) {
                  this.setProfileLocally();
                }
                this.getNextMessageOrProfile('SHOW');
              }
            }, err => {
              console.log(err);
            }
          );
          return;
        }

        // if data.type is profile or message
        if (data.type === 'profile') {

          this.type = 'profile';

          // stop user response animation

          if (data.name === this.item.name) {
            this.profileIsLoadingSubject.next(null);
          }

          if (JSON.stringify(data) !== JSON.stringify(this.item)) {
            this.item = data.apiwha_autoreply;
            // locally storing the new profile
            localStorage.setItem('todayProfile', JSON.stringify(data));
            this.item2 = data.next_profile;
          }

          // data.first_time = 0 -> when user comes for the first time on a day
          // data.first_time = 1 -> it gets 1 once he has seen first profile
          if (data.first_time === 0 && !this.router.url.match('first')) {
            this.itemService.openWelcomeDialog(this.item.profiles_left);
          }

          // if photo is null
          if (this.item.photo === null) {
            this.spinner.hide();
          }

          // resets the buttons animation
          this.resetAnimation();

          // if first time seen profile
          if (this.router.url.match('first') && reply === 'SHOW') {
            this.analyticsEvent('First Profile Shown To Newly Registered');
          } else if (this.router.url.match('first')) {
            this.analyticsEvent(`Response ${reply} to first profile shown to newly registered`);

            (window as any).fbq('track', 'FourPageRegistration', {
              value: localStorage.getItem('id'),
              content_name: localStorage.getItem('RegisterNumber'),
            });
            (window as any).fbq('track', '692972151223870', 'FourPageRegistration', {
              value: localStorage.getItem('id'),
              content_name: localStorage.getItem('RegisterNumber'),
            });

            (window as any).fbq('track', 'CompleteRegistration', {
              value: localStorage.getItem('id'),
              content_name: localStorage.getItem('RegisterNumber'),
            });
            (window as any).fbq('track', '692972151223870', 'CompleteRegistration', {
              value: localStorage.getItem('id'),
              content_name: localStorage.getItem('RegisterNumber'),
            });

            this.router.navigateByUrl('chat');
          }

        } else {
          this.type = 'message';
          this.itemMessage = data.apiwha_autoreply;
          localStorage.setItem('todayProfile', '');
          this.setMessageText(data.apiwha_autoreply);
          this.spinner.hide();
          // stop user response animation
          this.profileIsLoadingSubject.next(null);

          // if profiles for the day are over
          /*
          rate us dialog to be shown when profiles are ended for the day.
          that means TPL equals zero and credits should be greater than 0
          coz we want to show this popup to ppl with credits only.
          */
          if (data.type === 'message'
            && data.buttons === 'History'
            && data.get_status_count.TPL === 0
            && data.is_rated === 0
            && this.points > 0) {
            this.itemService.openRateUsDialog();
          }

        }

        switch (reply) {
          case 'YES':
            if (this.points > 0) {
              // this.ngxNotificationService.success('Profile Contacted Successfully');
            }
            break;
          case 'SHORTLIST':
            // this.ngxNotificationService.success('Profile Shortlisted Successfully');
            break;
          case 'NO':
            // this.ngxNotificationService.success('Profile Rejected Successfully');
            break;

          default:
            break;
        }
        if (this.points > 0 && reply === 'YES') {
          this.itemService.setItem(previousItem);
          localStorage.setItem('visibleAfter', 'true');
          this.router.navigateByUrl(`chat/open/open-profile/${previousItem.id}`);
          // this.itemService.changeTab(1);
        } else {
          if (document.getElementById('profilePic')) {
            document.getElementById('profilePic').scrollIntoView({ behavior: 'smooth' });
          }
        }

        this.spinner.hide();
        this.getCredits();
      }, err => {
        console.log(err);
        this.spinner.hide();

        // hide the searching spinner if visible
        // only visible for first time users
        this.spinner.hide('searchingSpinner');

        // stop user response animation
        this.profileIsLoadingSubject.next(null);
        this.ngxNotificationService.error('Something Went Wrong');
        this.languageService.setProfileLanguage();
      }
    );
  }

  // button 1-> Meri pasand, button-2 -> plan expired, button-3 -> no credits, button-4-> No Compatibilty
  // button-4 -> show more
  setMessageText(text) {
    console.log(text);
    switch (text) {
      case '👉We have already shared profiles with you.\n \n Please come back tomorrow to see more profiles':
        this.button = '1';
        break;
      case 'हम आपको आज के रिश्ते दिखा चुके हैं । कृपया कल यहाँ पुनः पधारे । धन्यवाद्।🙏':
        this.button = '1';
        break;
      case '👉We have already shared 10 profiles with you.\n \n Please come back tomorrow to see more profiles':
        this.button = '1';
        break;
      case 'हम आपको आज के रिश्ते दिखा चुके हैं । कृपया कल यहाँ पुनः पधारे । धन्यवाद्।🙏':
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
    console.log(this.button);
    this.spinner.hide();
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
          this.spinner.hide();
        });
    }
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getWhatsappPoint', creditsData).subscribe(
      (data: any) => {
        this.points = data.whatsapp_points;
        this.itemService.setCredits(this.points);
        console.log('credits', this.points);

        // for exhausted profile status
        if (this.paidStatus === 'Paid' && this.points === 0) {
          console.log('this is a exhausted profile');
          this.exhaustedStatus = true;
        }

        // update profile left count
        data ? this.getProfilesLeft(this.item.profiles_left)
          : this.ngxNotificationService.error('Profiles Left Not Found');

        this.spinner.hide();

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
    if (carous === null || carous === 'null' || carous === '') {
      if (photo === null) {
        setTimeout(() => {
          // stop user response animation
          this.profileIsLoadingSubject.next(null);
        }, 2000);
        if (gen === 'Male') {
          return '../../assets/profile.png';
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
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
    }
  }
  onErrorProfilePhoto(gender, index) {
    this.spinner.hide();
    // stop user response animation
    this.profileIsLoadingSubject.next(null);
    const imageSrc = document.querySelectorAll('#profilePic')[index];
    if (gender === 'Male') {
      imageSrc.setAttribute('src', '../../assets/male_pic.png');
    } else {
      imageSrc.setAttribute('src', '../../assets/female_pic.png');
    }
  }
  getImagesCount() {
    if (this.item && this.item.carousel !== '[]' && this.item.carousel && this.item.carousel !== 'null') {
      const carouselObject: object = JSON.parse(this.item.carousel);
      if (carouselObject) {
        const size = Object.keys(carouselObject).length;
        const arr: any[] = [];
        for (let index = 0; index < size; index++) {
          arr.push(index);
        }
        return arr;
      }
    } else {
      this.carouselSize = [1];
      return this.carouselSize;
    }
  }
  // on first image load complete
  onLoadingImage(index) {
    const imageElement: any = document.querySelector('#profilePic');
    if (imageElement && index === 0) {
      console.log('Image is loading');
      if (imageElement.complete) {
        console.log('Image Loaded Completely');
        // stop user response animation
        this.profileIsLoadingSubject.next(null);
      }
    }
  }
  openImageModal(carous: string, src: string, name: string, index: any) {
    this.analyticsEvent('User zoomed in the todays special profile image');
    if (carous && carous !== '') {
      const carousel: object = JSON.parse(carous);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      this.setModal('https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]]);
    } else if (src && src !== '') {
      this.setModal(src);
    }
  }

  setModal(image) {
    const modal = document.getElementById('myModal');
    const modalImg: HTMLElement = document.getElementById('img01');
    const captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modal.style.zIndex = '9999999999';
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
        return String(Number(value1) + Number(value2)) + ' Brothers';
      }
    } else {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + ' Brothers';
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
        return String(Number(value1) + Number(value2)) + ' Sisters';
      }
    } else {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + ' Sisters';
      } else {
        return '0 Sisters';
      }
    }
  }

  LifeStatus(person: string, work: string, type: string) {
    if (person != null && person !== '') {
      if (person.match('Alive')) {
        if (work) {
          return `${type} is Alive | ` + work;
        } else {
          return `${type} is Alive`;
        }
      } else {
        return `${type} is Dead`;
      }
    }
  }

  getProfilesLeft(left: any) {
    console.log(left);
    let value;
    if (this.itemService.getCredits() != null && document.querySelector('#profileLeft')) {
      console.log(this.itemService.getCredits());
      if (Number(this.itemService.getCredits()) > 0) {
        value = (6 - Number(left)).toString() + '/ 6';
        return document.querySelector('#profileLeft').innerHTML = value;
      } else {
        value = (10 - Number(left)).toString() + '/ 10';
        return document.querySelector('#profileLeft').innerHTML = value;
      }
    }
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

      case 'shortlist':
        this.shortListCount++;
        dialogConfig.data = {
          profile: shareItem,
          selfImage: this.selfImage,
          selfName: this.selfName,
          type: reply.toLowerCase()
        };
        dialogConfig.id = 'messageDialog';
        const dialogRefShort = this.dialog.open(MessageDialogComponent, dialogConfig);
        dialogRefShort.afterClosed().subscribe(data => {
          console.log(data);
          if (data && data.uploadStatus === 'Y') {
            this.ngxNotificationService.success('फोटो अपलोड करदी गयी है');
          } else {
            this.ngxNotificationService.success('फोटो अपलोड नहीं हो पायी बाद मे दुबारा प्रयास करें');
          }
        });
        break;

      default:
        break;
    }
  }
  setCount(reply) {
    switch (reply.toLowerCase()) {
      case 'shortlist':
        this.shortListCount++;
        break;

      default:
        break;
    }
  }

  getQualification(degree, education) {
    return education != null && education !== '' ? education : degree;
  }

  // scroll down animation button
  scrollDown() {
    console.log('scroll down');
    document.querySelector('#today-main').scrollBy({
      top: 350,
      behavior: 'smooth'
    });
  }
  // stops animation
  stopAnimation() {
    const animationClass1 = 'animateButtonImage';
    const class1 = document.querySelectorAll('.buttonImage')[2];
    const class2 = document.querySelectorAll('.buttonImage')[1];
    if (class1) {
      class1.classList.remove(animationClass1);
      class2.classList.remove(animationClass1);
    }
  }
  // resets animation
  resetAnimation() {
    const animationClass1 = 'animateButtonImage';
    const class1 = document.querySelectorAll('.buttonImage')[2];
    const class2 = document.querySelectorAll('.buttonImage')[1];

    // first step is removal
    if (class1) {
      class1.classList.add(animationClass1);
      class2.classList.add(animationClass1);
    }
  }

  houseStatus() {
    if (this.item.house_type && this.item.house_type.toLowerCase().indexOf('own') !== -1) {
      return 'Own House';
    } else {
      return 'Rented House';
    }
  }
  familyType() {
    if (this.item.family_type && this.item.family_type.toLowerCase().indexOf('nuclear') !== -1) {
      return 'Nuclear Family';
    } else {
      return 'Joint Family';
    }
  }
  openPersistentDialog(message: string, submessage: string, button: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.maxWidth = '30vw';
          dialogConfig.minHeight = '80vh';
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '70vw';
          dialogConfig.minHeight = '40vh';
        }
      }
    );
    dialogConfig.disableClose = true;
    dialogConfig.id = 'persistentDialog';
    dialogConfig.data = {
      message: message,
      submessage: submessage,
      button: button,
      userId: this.userId,
      userIsLead: this.userIsLead,
    }
    const dialogRef = this.dialog.open(PersistentMessageComponent, dialogConfig);
  }

  // setting dynamic about me if users about me is null or na
  setAbout() {
    if (this.item) {
      const aboutObject = {
        dob: this.item.birth_date ? `I am ${this.setAge(this.item.birth_date)} old ` : '',
        caste: this.item.caste ?
          this.item.caste !== 'All' ? this.item.caste : '' : '',
        manglik: this.item.manglik ? this.item.manglik : '',
        gender: this.item.gender ? this.item.gender === 'Male' ? 'boy' : 'girl' : '',
        locality: this.item.locality ? this.item.locality === 'Visible after Contact' ?
          '' : ` residing in ${this.item.locality}` : '',
        qualification: this.item.education ?
          `. I've completed my ${this.item.education}` : this.item.degree ?
            `. I've completed my ${this.item.degree}` : '',
        occupation: this.item.occupation ?
          this.item.occupation === 'Business/Self-Employed' ?
            ' and Self-Employed' : this.item.occupation === 'Not Working' ? 'currently not working'
              : this.item.occupation === 'Doctor' ||
                this.item.occupation === 'Teacher'
                ? ` currently working as ${this.item.occupation}` :
                ` currently working in ${this.item.occupation}` : '',
        working: this.item.working_city ? this.item.working_city !== 'Not Working'
          ? this.item.working_city !== 'na' ? `in ${this.item.working_city}` : '' : '' : '',
        designation: this.item.profession ?
          this.item.occupation !== 'Not Working' ?
            this.item.profession !== 'n/a' ? this.item.profession !== 'na' ?
              ` as ${this.item.profession}` : '' : '' : '' : '',
      };

      // tslint:disable-next-line: max-line-length
      return `${aboutObject.dob} ${aboutObject.caste} ${aboutObject.manglik} ${aboutObject.gender} ${aboutObject.locality} ${aboutObject.qualification} ${aboutObject.occupation} ${aboutObject.designation} ${aboutObject.working}.`;

    }
  }
  HandleStackedCards() {
    console.log("the stacked card event is triggered");
    function stackedCards() {

      var stackedOptions = 'Top'; //Change stacked cards view from 'Bottom', 'Top' or 'None'.
      var rotate = true; //Activate the elements' rotation for each move on stacked cards.
      var items = 3; //Number of visible elements when the stacked options are bottom or top.
      var elementsMargin = 10; //Define the distance of each element when the stacked options are bottom or top.
      var useOverlays = true; //Enable or disable the overlays for swipe elements.
      var maxElements; //Total of stacked cards on DOM.
      var currentPosition = 0; //Keep the position of active stacked card.
      var velocity = 0.3; //Minimum velocity allowed to trigger a swipe.
      var topObj; //Keep the swipe top properties.
      var rightObj; //Keep the swipe right properties.
      var leftObj; //Keep the swipe left properties.
      var listElNodesObj; //Keep the list of nodes from stacked cards.
      var listElNodesWidth; //Keep the stacked cards width.
      var currentElementObj; //Keep the stacked card element to swipe.
      var stackedCardsObj;
      var isFirstTime = true;
      var elementHeight;
      var obj;
      var elTrans;

      obj = document.getElementById('stacked-cards-block');
      stackedCardsObj = obj.querySelector('.stackedcards-container');
      listElNodesObj = stackedCardsObj.children;

      topObj = obj.querySelector('.stackedcards-overlay.top');
      rightObj = obj.querySelector('.stackedcards-overlay.right');
      leftObj = obj.querySelector('.stackedcards-overlay.left');

      countElements();
      currentElement();
      listElNodesWidth = stackedCardsObj.offsetWidth;
      currentElementObj = listElNodesObj[0];
      updateUi();

      //Prepare elements on DOM
      let addMargin = elementsMargin * (items - 1) + 'px';

      if (stackedOptions === "Top") {

        for (let i = items; i < maxElements; i++) {
          listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
        }

        elTrans = elementsMargin * (items - 1);

        stackedCardsObj.style.marginBottom = addMargin;

      } else if (stackedOptions === "Bottom") {


        for (let i = items; i < maxElements; i++) {
          listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');
        }

        elTrans = 0;

        stackedCardsObj.style.marginBottom = addMargin;

      } else if (stackedOptions === "None") {

        for (let i = items; i < maxElements; i++) {
          listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
        }

        elTrans = 0;

      }

      for (let i = items; i < maxElements; i++) {
        listElNodesObj[i].style.zIndex = 0;
        listElNodesObj[i].style.opacity = 0;
        listElNodesObj[i].style.webkitTransform = 'scale(' + (1 - (items * 0.04)) + ') translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
        listElNodesObj[i].style.transform = 'scale(' + (1 - (items * 0.04)) + ') translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
      }

      if (listElNodesObj[currentPosition]) {
        listElNodesObj[currentPosition].classList.add('stackedcards-active');
      }

      if (useOverlays) {
        leftObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
        leftObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';

        rightObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
        rightObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';

        topObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
        topObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';

      } else {
        leftObj.className = '';
        rightObj.className = '';
        topObj.className = '';

        leftObj.classList.add('stackedcards-overlay-hidden');
        rightObj.classList.add('stackedcards-overlay-hidden');
        topObj.classList.add('stackedcards-overlay-hidden');
      }

      //Remove class init
      setTimeout(function () {
        obj.classList.remove('init');
      }, 150);


      function backToMiddle() {

        removeNoTransition();
        transformUi(0, 0, 1, currentElementObj);

        if (useOverlays) {
          transformUi(0, 0, 0, leftObj);
          transformUi(0, 0, 0, rightObj);
          transformUi(0, 0, 0, topObj);
        }

        setZindex(5);

        if (!(currentPosition >= maxElements)) {
          //roll back the opacity of second element
          if ((currentPosition + 1) < maxElements) {
            listElNodesObj[currentPosition + 1].style.opacity = '.8';
          }
        }
      };

      // Usable functions
      function countElements() {
        maxElements = listElNodesObj.length;
        if (items > maxElements) {
          items = maxElements;
        }
      };

      //Keep the active card.
      function currentElement() {
        currentElementObj = listElNodesObj[currentPosition];
      };

      //Functions to swipe left elements on logic external action.
      function onActionLeft() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            leftObj.classList.remove('no-transition');
            topObj.classList.remove('no-transition');
            leftObj.style.zIndex = '8';
            transformUi(0, 0, 1, leftObj);

          }

          setTimeout(function () {
            onSwipeLeft();
            resetOverlayLeft();
          }, 300);
        }
      };

      //Functions to swipe right elements on logic external action.
      function onActionRight() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            rightObj.classList.remove('no-transition');
            topObj.classList.remove('no-transition');
            rightObj.style.zIndex = '8';
            transformUi(0, 0, 1, rightObj);
          }

          setTimeout(function () {
            onSwipeRight();
            resetOverlayRight();
          }, 300);
        }
      };

      //Functions to swipe top elements on logic external action.
      function onActionTop() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            leftObj.classList.remove('no-transition');
            rightObj.classList.remove('no-transition');
            topObj.classList.remove('no-transition');
            topObj.style.zIndex = '8';
            transformUi(0, 0, 1, topObj);
          }

          setTimeout(function () {
            onSwipeTop();
            resetOverlays();
          }, 300); //wait animations end
        }
      };

      //Swipe active card to left.
      function onSwipeLeft() {
        removeNoTransition();
        transformUi(-1000, 0, 0, currentElementObj);
        if (useOverlays) {
          transformUi(-1000, 0, 0, leftObj); //Move leftOverlay
          transformUi(-1000, 0, 0, topObj); //Move topOverlay
          resetOverlayLeft();
        }
        currentPosition = currentPosition + 1;
        updateUi();
        currentElement();
        setActiveHidden();
      };

      //Swipe active card to right.
      function onSwipeRight() {
        removeNoTransition();
        transformUi(1000, 0, 0, currentElementObj);
        if (useOverlays) {
          transformUi(1000, 0, 0, rightObj); //Move rightOverlay
          transformUi(1000, 0, 0, topObj); //Move topOverlay
          resetOverlayRight();
        }

        currentPosition = currentPosition + 1;
        updateUi();
        currentElement();
        setActiveHidden();
      };

      //Swipe active card to top.
      function onSwipeTop() {
        removeNoTransition();
        transformUi(0, -1000, 0, currentElementObj);
        if (useOverlays) {
          transformUi(0, -1000, 0, leftObj); //Move leftOverlay
          transformUi(0, -1000, 0, rightObj); //Move rightOverlay
          transformUi(0, -1000, 0, topObj); //Move topOverlay
          resetOverlays();
        }

        currentPosition = currentPosition + 1;
        updateUi();
        currentElement();
        setActiveHidden();
      };

      //Remove transitions from all elements to be moved in each swipe movement to improve perfomance of stacked cards.
      function removeNoTransition() {
        if (listElNodesObj[currentPosition]) {

          if (useOverlays) {
            leftObj.classList.remove('no-transition');
            rightObj.classList.remove('no-transition');
            topObj.classList.remove('no-transition');
          }

          listElNodesObj[currentPosition].classList.remove('no-transition');
          listElNodesObj[currentPosition].style.zIndex = 6;
        }

      };

      //Move the overlay left to initial position.
      function resetOverlayLeft() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            setTimeout(function () {

              if (stackedOptions === "Top") {

                elTrans = elementsMargin * (items - 1);

              } else if (stackedOptions === "Bottom" || stackedOptions === "None") {

                elTrans = 0;

              }

              if (!isFirstTime) {

                leftObj.classList.add('no-transition');
                topObj.classList.add('no-transition');

              }

              requestAnimationFrame(function () {

                leftObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                leftObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                leftObj.style.opacity = '0';

                topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                topObj.style.opacity = '0';

              });

            }, 300);

            isFirstTime = false;
          }
        }
      };

      //Move the overlay right to initial position.
      function resetOverlayRight() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {
            setTimeout(function () {

              if (stackedOptions === "Top") {
                +2

                elTrans = elementsMargin * (items - 1);

              } else if (stackedOptions === "Bottom" || stackedOptions === "None") {

                elTrans = 0;

              }

              if (!isFirstTime) {

                rightObj.classList.add('no-transition');
                topObj.classList.add('no-transition');

              }

              requestAnimationFrame(function () {

                rightObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                rightObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                rightObj.style.opacity = '0';

                topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                topObj.style.opacity = '0';

              });

            }, 300);

            isFirstTime = false;
          }
        }
      };

      //Move the overlays to initial position.
      function resetOverlays() {
        if (!(currentPosition >= maxElements)) {
          if (useOverlays) {

            setTimeout(function () {
              if (stackedOptions === "Top") {

                elTrans = elementsMargin * (items - 1);

              } else if (stackedOptions === "Bottom" || stackedOptions === "None") {

                elTrans = 0;

              }

              if (!isFirstTime) {

                leftObj.classList.add('no-transition');
                rightObj.classList.add('no-transition');
                topObj.classList.add('no-transition');

              }

              requestAnimationFrame(function () {

                leftObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                leftObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                leftObj.style.opacity = '0';

                rightObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                rightObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                rightObj.style.opacity = '0';

                topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
                topObj.style.opacity = '0';

              });

            }, 300);	// wait for animations time

            isFirstTime = false;
          }
        }
      };

      function setActiveHidden() {
        if (!(currentPosition >= maxElements)) {
          listElNodesObj[currentPosition - 1].classList.remove('stackedcards-active');
          listElNodesObj[currentPosition - 1].classList.add('stackedcards-hidden');
          listElNodesObj[currentPosition].classList.add('stackedcards-active');
        }
      };

      //Set the new z-index for specific card.
      function setZindex(zIndex) {
        if (listElNodesObj[currentPosition]) {
          listElNodesObj[currentPosition].style.zIndex = zIndex;
        }
      };

      // Remove element from the DOM after swipe. To use this method you need to call this function in onSwipeLeft, onSwipeRight and onSwipeTop and put the method just above the variable 'currentPosition = currentPosition + 1'. 
      //On the actions onSwipeLeft, onSwipeRight and onSwipeTop you need to remove the currentPosition variable (currentPosition = currentPosition + 1) and the function setActiveHidden

      function removeElement() {
        currentElementObj.remove();
        if (!(currentPosition >= maxElements)) {
          listElNodesObj[currentPosition].classList.add('stackedcards-active');
        }
      };

      //Add translate X and Y to active card for each frame.
      function transformUi(moveX, moveY, opacity, elementObj) {
        requestAnimationFrame(function () {
          var element = elementObj;
          let rotateElement;
          // Function to generate rotate value 
          function RotateRegulator(value) {
            if (value / 10 > 15) {
              return 15;
            }
            else if (value / 10 < -15) {
              return -15;
            }
            return value / 10;
          }

          if (rotate) {
            rotateElement = RotateRegulator(moveX);
          } else {
            rotateElement = 0;
          }

          if (stackedOptions === "Top") {
            elTrans = elementsMargin * (items - 1);
            if (element) {
              element.style.webkitTransform = "translateX(" + moveX + "px) translateY(" + (moveY + elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
              element.style.transform = "translateX(" + moveX + "px) translateY(" + (moveY + elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
              element.style.opacity = opacity;
            }
          } else if (stackedOptions === "Bottom" || stackedOptions === "None") {

            if (element) {
              element.style.webkitTransform = "translateX(" + moveX + "px) translateY(" + (moveY) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
              element.style.transform = "translateX(" + moveX + "px) translateY(" + (moveY) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
              element.style.opacity = opacity;
            }

          }
        });
      };

      //Action to update all elements on the DOM for each stacked card.
      function updateUi() {
        requestAnimationFrame(function () {
          elTrans = 0;
          var elZindex = 5;
          var elScale = 1;
          var elOpac = 1;
          var elTransTop = items;
          var elTransInc = elementsMargin;

          for (let i = currentPosition; i < (currentPosition + items); i++) {
            if (listElNodesObj[i]) {
              if (stackedOptions === "Top") {

                listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');

                if (useOverlays) {
                  leftObj.classList.add('stackedcards-origin-top');
                  rightObj.classList.add('stackedcards-origin-top');
                  topObj.classList.add('stackedcards-origin-top');
                }

                elTrans = elTransInc * elTransTop;
                elTransTop--;

              } else if (stackedOptions === "Bottom") {
                listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');

                if (useOverlays) {
                  leftObj.classList.add('stackedcards-origin-bottom');
                  rightObj.classList.add('stackedcards-origin-bottom');
                  topObj.classList.add('stackedcards-origin-bottom');
                }

                elTrans = elTrans + elTransInc;

              } else if (stackedOptions === "None") {

                listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
                elTrans = elTrans + elTransInc;

              }

              listElNodesObj[i].style.transform = 'scale(' + elScale + ') translateX(0) translateY(' + (elTrans - elTransInc) + 'px) translateZ(0)';
              listElNodesObj[i].style.webkitTransform = 'scale(' + elScale + ') translateX(0) translateY(' + (elTrans - elTransInc) + 'px) translateZ(0)';
              listElNodesObj[i].style.opacity = elOpac;
              listElNodesObj[i].style.zIndex = elZindex;

              elScale = elScale - 0.04;
              elOpac = elOpac - (1 / items);
              elZindex--;
            }
          }

        });

      };

      //Touch events block
      var element = obj;
      var startTime;
      var startX;
      var startY;
      var translateX;
      var translateY;
      var currentX;
      var currentY;
      var touchingElement = false;
      var timeTaken;
      var topOpacity;
      var rightOpacity;
      var leftOpacity;

      function setOverlayOpacity() {

        topOpacity = (((translateY + (elementHeight) / 2) / 100) * -1);
        rightOpacity = translateX / 100;
        leftOpacity = ((translateX / 100) * -1);


        if (topOpacity > 1) {
          topOpacity = 1;
        }

        if (rightOpacity > 1) {
          rightOpacity = 1;
        }

        if (leftOpacity > 1) {
          leftOpacity = 1;
        }
      }

      function gestureStart(evt) {
        startTime = new Date().getTime();

        startX = evt.changedTouches[0].clientX;
        startY = evt.changedTouches[0].clientY;

        currentX = startX;
        currentY = startY;

        setOverlayOpacity();

        touchingElement = true;
        if (!(currentPosition >= maxElements)) {
          if (listElNodesObj[currentPosition]) {
            listElNodesObj[currentPosition].classList.add('no-transition');
            setZindex(6);

            if (useOverlays) {
              leftObj.classList.add('no-transition');
              rightObj.classList.add('no-transition');
              topObj.classList.add('no-transition');
            }

            if ((currentPosition + 1) < maxElements) {
              listElNodesObj[currentPosition + 1].style.opacity = '1';
            }

            elementHeight = listElNodesObj[currentPosition].offsetHeight / 3;
          }

        }

      };

      function gestureMove(evt) {
        currentX = evt.changedTouches[0].pageX;
        currentY = evt.changedTouches[0].pageY;

        translateX = currentX - startX;
        translateY = currentY - startY;

        setOverlayOpacity();

        if (!(currentPosition >= maxElements)) {
          evt.preventDefault();
          transformUi(translateX, translateY, 1, currentElementObj);

          if (useOverlays) {
            transformUi(translateX, translateY, topOpacity, topObj);

            if (translateX < 0) {
              transformUi(translateX, translateY, leftOpacity, leftObj);
              transformUi(0, 0, 0, rightObj);

            } else if (translateX > 0) {
              transformUi(translateX, translateY, rightOpacity, rightObj);
              transformUi(0, 0, 0, leftObj);
            }

            if (useOverlays) {
              leftObj.style.zIndex = 8;
              rightObj.style.zIndex = 8;
              topObj.style.zIndex = 7;
            }

          }

        }

      };

      function gestureEnd(evt) {

        if (!touchingElement) {
          return;
        }

        translateX = currentX - startX;
        translateY = currentY - startY;

        timeTaken = new Date().getTime() - startTime;

        touchingElement = false;

        if (!(currentPosition >= maxElements)) {
          if (translateY < (elementHeight * -1) && translateX > ((listElNodesWidth / 2) * -1) && translateX < (listElNodesWidth / 2)) {  //is Top?

            if (translateY < (elementHeight * -1) || (Math.abs(translateY) / timeTaken > velocity)) { // Did It Move To Top?
              onSwipeTop();
            } else {
              backToMiddle();
            }

          } else {

            if (translateX < 0) {
              if (translateX < ((listElNodesWidth / 2) * -1) || (Math.abs(translateX) / timeTaken > velocity)) { // Did It Move To Left?
                onSwipeLeft();
              } else {
                backToMiddle();
              }
            } else if (translateX > 0) {

              if (translateX > (listElNodesWidth / 2) && (Math.abs(translateX) / timeTaken > velocity)) { // Did It Move To Right?
                onSwipeRight();
              } else {
                backToMiddle();
              }

            }
          }
        }
      };

      element.addEventListener('touchstart', gestureStart, false);
      element.addEventListener('touchmove', gestureMove, false);
      element.addEventListener('touchend', gestureEnd, false);

      //Add listeners to call global action for swipe cards
      var buttonLeft = document.querySelector('.left-action');
      var buttonTop = document.querySelector('.top-action');
      var buttonRight = document.querySelector('.right-action');

      buttonLeft.addEventListener('click', onActionLeft, false);
      buttonTop.addEventListener('click', onActionTop, false);
      buttonRight.addEventListener('click', onActionRight, false);

    }
    stackedCards();
  }
}



