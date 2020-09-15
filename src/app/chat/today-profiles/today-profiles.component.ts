import { Component, OnInit, Output, EventEmitter, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';
import { timeout, retry, catchError, shareReplay } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
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
import { SelectionModel } from '@angular/cdk/collections';
import 'rxjs/add/operator/scan';
@Component({
  selector: 'app-today-profiles',
  templateUrl: './today-profiles.component.html',
  styleUrls: ['./today-profiles.component.css']
})
export class TodayProfilesComponent implements OnInit, AfterViewInit, OnDestroy {
  item;


  profileItems: Array<ApiwhaAutoreply> = [];

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
    [{
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
  // last action
  lastAction;
  showActionAnimation = false;

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

  ngAfterViewInit() {
    this.section = document.querySelector('#today-main');
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
    //getting and using the authData small tasks.
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
    //just to set up which popup to show.....
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
  }
  // to save the state of which popups are to be shown
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
    this.item = data;
    this.profileItems.push(data.apiwha_autoreply);
    this.profileItems.push(data.next_profile);
    if (data && data.get_status_count) {
      this.itemService.saveCount(data.get_status_count);
      this.itemService.saveDailyCount(data.apiwha_autoreply.profiles_left);
    }
    //console.log(this.item, this.item1);
  }
  //hitting the auth api to get auth data
  checkUrl(): Observable<any> {
    if (localStorage.getItem('fcm_app')) {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: this.contactNumber, ['fcm_id']: this.notification.getCurrentToken(), ['fcm_app']: localStorage.getItem('fcm_app') } });
    } else {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: this.contactNumber, ['fcm_id']: this.notification.getCurrentToken() } });
    }
  }
  // hitting the sendMessages api to get the next profile or otherwise.
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
    return;
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
    return;
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
      return;
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
    console.log('getNextMessageOrProfile called with response', reply);
    this.stopAnimation();
    this.itemService.setTutorialIndex();

    this.persistentDialogOpeningLogic(this.item, reply);
    const modal = document.getElementById('myModal');

    if (modal.style.display !== 'none') {
      modal.style.display = 'none';
    }
  }

  getData(reply) {
    // shortlist count
    console.log(reply);
    this.setCount(reply);
    const previousItem = this.item;
    if (!localStorage.getItem('todayProfile')) {
      this.spinner.show();
    }
    if (reply !== 'SHOW') {
      if (document.getElementById('profilePic')) {
        //document.getElementById('profilePic').scrollIntoView({ behavior: 'smooth' });
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
        //type = profile means that we do have more photos to show to the user
        //type = message means that we do not have any profiles to show to the user. 
        if (data.type === 'profile') {
          this.type = 'profile';

          //stop user response animation
          if (data.name === this.item.name) {
            this.profileIsLoadingSubject.next(null);
          }
          // this is the MOST IMPORTANT PART from the perspective of setting the profiles and maipulation the dom after that
          if (JSON.stringify(data) !== JSON.stringify(this.item)) {
            // if (JSON.stringify(this.item.next_profile) === JSON.stringify(data.apiwha_autoreply)) {
            //   console.log('condition satisfied')
            //   this.item = data;
            //   //this.profileItems.splice(0, 1);
            //   this.profileItems.push(data.apiwha_autoreply);
            // }
            this.item = data;
            //this.profileItems.splice(0, 1);
            this.profileItems.push(data.apiwha_autoreply);
            localStorage.setItem('todayProfile', JSON.stringify(data));
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
          this.profileItems = [];
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
        //completely useless lines of code
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
            //document.getElementById('profilePic').scrollIntoView({ behavior: 'smooth' });
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
  // to get the credits kinda obvious.
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
  //this function is not being anywhere
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
  // scroll down animation button
  scrollDown() {
    console.log('scroll down');
    document.querySelector('#today-main').scrollBy({
      top: 350,
      behavior: 'smooth'
    });
  }
  //function to alow scroll down or up on mobile devices
  slideDown(i: number) {
    //console.log('scroll down', i);
    document.querySelector('#today-main').scrollBy({
      top: i,
      behavior: 'smooth',
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
  //opens thhe completely dynamic dialog
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
  logChoice(event) {
    this.getNextMessageOrProfile(event.reply);
  }
}
