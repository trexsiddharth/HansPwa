import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Router,
  ActivatedRoute,
  Event
} from '@angular/router';
import {
  Observable,
} from 'rxjs';
import {
  NgxSpinnerService
} from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  InstallPromptService
} from '../install-prompt.service';
import {
  MatDialog,
} from '@angular/material';

import {
  NotificationsService
} from '../notifications.service';
import {
  timeout,
  retry,
  catchError,
  min
} from 'rxjs/operators';
import {
  FindOpenHistoryProfileService
} from '../find-open-history-profile.service';
import {
  ChatServiceService
} from '../chat-service.service';
import { LanguageService } from '../language.service';
import { SubscriptionserviceService } from '../subscriptionservice.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewInit {


  familyTable = {
    id: '',
    temple_id: '',
    identity_number: '',
    name: '',
    relation: '',
    locality: '',
    landline: '',
    family_photo: '',
    city: '',
    native: '',
    mobile: '',
    email: '',
    unmarried_sons: '',
    married_sons: '',
    unmarried_daughters: '',
    married_daughters: '',
    family_type: '',
    house_type: '',
    religion: '',
    caste: '',
    gotra: '',
    occupation: '',
    family_income: '',
    budget: '',
    office_address: '',
    father_status: '',
    mother_status: '',
    created_at: '',
    updated_at: '',
    whats_app_no: '',
    marriage_budget_not_applicable: '',
    email_not_available: '',
    mother_tongue: '',
    sub_caste: '',
    country: '',
    state: '',
    occupation_mother: '',
    address: '',
    about: '',
    caste_id: '',
    zodiac: '',
    father_off_addr: ''
  };

  preferenceTable = {
    id: '',
    identity_number: '',
    temple_id: '',
    age_min: '',
    age_max: '',
    height_min: '',
    height_max: '',
    caste: '',
    marital_status: '',
    manglik: '',
    food_choice: '',
    working: '',
    occupation: '',
    sub_occupation: '',
    income_min: '',
    income_max: '',
    citizenship: '',
    description: '',
    membership: '',
    caste_no_bar: '',
    created_at: '',
    updated_at: '',
    source: '',
    amount_collected: '',
    insentive: '',
    validity: '',
    payment_method: '',
    receipt_url: '',
    status: '',
    mother_tongue: '',
    temple_name: ''
  };

  loginStatus = true;
  profile: any;
  messageRecieved: string;
  personal: any;
  button;
  Data: any;
  errorCount = 0;
  Data1: any;
  walkthroughNumber = 0;
  clientWalkThroughStatus;
  showWalkthrough;
  user: any;
  innerWidth: any;
  currentIndex;
  innerHeight: any;
  DoNotshowfull: boolean;
  number: string;
  text: string;
  currentUrl: string;
  awardUrl: string;
  botui: any;
  langChanged = false;
  currentLanguage: string;
  historyData: any;
  currentContact: any;
  profileData: any;
  familyData: any;
  preferenceData: any;
  history = 'chatbot';
  points: any;
  promptData: any = null;
  pId: string[] = [];
  pName: string[] = [];
  connectionStatus;
  player;
  done = false;
  dailyQuotaReached = false;
  noCount = 0;
  shortCount = 0;
  exhaustCount = 0;
  paidStatus;
  exhaustedStatus;
  selectedTab = 0;
  tabType;
  currentTab;
  profilesCompletedStatus = false;
  timerMain;
  photo = '../../assets/avatar.svg';
  lockdownCount = 0;


  constructor(
    private router: Router,
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private ngxNotificationService: NgxNotificationService,
    private promptService: InstallPromptService,
    public dialog: MatDialog,
    public notification: NotificationsService,
    private route: ActivatedRoute,
    private subscriptionService: SubscriptionserviceService,
    public itemService: FindOpenHistoryProfileService,
    private chatServivce: ChatServiceService,
    public languageService: LanguageService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(
      (data: any) => {
        if (data) {
          if (data.params.stage) {
            setTimeout(() => {
              this.setSelectedTab(data.params.stage);
            }, 500);
          } else if (data.params.fcm_app) {
            // if user open twa app we share their fcm id with server
            console.log(data.params.fcm_app);
            // if fcm_app in local is not same with the coming fcm_app in url
            if (localStorage.getItem('mobile_number') &&
            localStorage.getItem('fcm_app') &&
             localStorage.getItem('fcm_app') !== data.params.fcm_app) {
              localStorage.setItem('fcm_app', data.params.fcm_app);
              // update the new fcm id on the server
              this.checkUrl(localStorage.getItem('mobile_number')).subscribe(
                (data) => {
                      if (data) {
                        console.log('FCM ID Updated');
                      }
                }
              );
            } else {
              localStorage.setItem('fcm_app', data.params.fcm_app);
            }
          }
        }
      }
    );


    if (this.router.url.match('logout')) {
      this.loginStatus = false;
      localStorage.clear();
    }
    window.addEventListener('offline',
      () => {
        console.log('No Internet');
        this.connectionStatus = 'offline';
        this.showError();
      });

    window.addEventListener('online',
      () => {
        console.log('Connected Internet');
        this.connectionStatus = 'online';
      }
    );

    if (this.router.url.match('push')) {
      this.analyticsEvent('Web Push Notification Clicked');
    }


    if (localStorage.getItem('mobile_number')) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
    if (localStorage.getItem('language')) {
      this.currentLanguage = localStorage.getItem('language');
    } else {
      this.currentLanguage = 'english';
      localStorage.setItem('language', 'english');
      this.languageService.setCurrentLanguage('english');
    }

    if (this.router.url.match('mobile=')) {
      this.currentUrl = this.router.url.substring(13);
      localStorage.setItem('mobile_number', this.currentUrl);
      console.log(this.currentUrl);
    }

    if (localStorage.getItem('mobile_number')) {
      this.chatServivce.setContactNumber(localStorage.getItem('mobile_number'));
      this.currentContact = localStorage.getItem('mobile_number');

    } else if (this.currentUrl) {
      this.chatServivce.setContactNumber(this.currentUrl);
      this.analyticsEvent('User Logged In');
      this.currentContact = this.currentUrl;
    } else {
      this.router.navigateByUrl('phone-number');
    }

    // add to home screen prompt
    console.log(this.promptService.getPrompt());
    this.promptData = this.promptService.getPrompt();
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;


    this.itemService.setTab.subscribe(
      data => {
        this.setSelectedTab(data);
      }
    );
      // user authorized
    this.chatServivce.authorized.subscribe(
      data => {
        if (data) {
          this.setProfileImage(data.photo);
        }
      }
    );

    // if user when to profile details from any tab then they should be back on the same section
    if (localStorage.getItem('stage')) {
      setTimeout(() => {
        this.selectedTab = Number(localStorage.getItem('stage'));
        localStorage.setItem('stage', null);
      }, 100);
    }

     // as soon as the credits are updated we will show lockdown offer to the free user
    // lockdown offer will not be shown to first time coming user
    this.openTodaysPopupHere();
  }

  ngAfterViewInit() {
    this.spinner.hide();
  }

  openContactedProfiles() {
    this.router.navigate(['history', 'contacted'] , {relativeTo: this.activatedRoute});
  }

  // determines the current position of the drawer
  drawerPosition(event) {
    console.log(event);
    if (event) {
    this.analyticsEvent('Chat Drawer Opened');
    } else {
      this.analyticsEvent('Chat Drawer Closed');
    }
  }


 openTodaysPopupHere() {
    this.itemService.creditsUpdated.subscribe(
      async data => {
         if (data) {
           this.lockdownCount++;
           if (!this.router.url.match('first') && !this.router.url.match('verifyPayment') && this.lockdownCount === 1) {
             // show payment popup every time user open the app
             this.itemService.openTodaysPopupAd();
           } else if (this.router.url.match('verifyPayment')) {
             this.spinner.show();
             await this.subscriptionService.getTransactionStatus().then(
               response => {
                    if (response === 1) {
                      this.checkUrl(localStorage.getItem('mobile_number')).subscribe(res => {
                        console.log(res);
                        localStorage.setItem('authData', JSON.stringify(res));
                        localStorage.setItem('id', res.id);
                        this.itemService.setIsLead(res.is_lead);
                        this.getCredits();
                      },
                      err => {
                        console.log(err);
                        this.spinner.hide();
                      });
                    }
               }
             );
           }
         }
       }
    );
  }
  getCredits() {
    const creditsData = new FormData();
    creditsData.append('id', localStorage.getItem('id'));
    if (localStorage.getItem('is_lead')) {
      creditsData.append('is_lead', localStorage.getItem('is_lead'));
    } else {
      this.checkUrl(localStorage.getItem('mobile_number')).subscribe(res => {
          console.log(res);
          creditsData.append('is_lead', res.is_lead);
          localStorage.setItem('is_lead', res.is_lead);
        },
        err => {
          console.log(err);
        });
    }
    // tslint:disable-next-line: max-line-length
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/getWhatsappPoint', creditsData).subscribe(
      (data: any) => {
        this.points = data.whatsapp_points;
        this.itemService.setCredits(this.points);
        console.log('credits', this.points);
        if (this.paidStatus === 'Paid' && this.points === '0') {
          console.log('this is a exhausted profile');
          this.exhaustedStatus = true;
        }
        this.spinner.hide();
      },
      (error: any) => {
        this.ngxNotificationService.error('We couldn\'t get your credits, trying again');
        console.log(error);
        this.spinner.hide();
      }
    );
  }


  checkUrl(num: string): Observable < any > {
    localStorage.setItem('is_lead', '');
    if (localStorage.getItem('fcm_app')) {
      // tslint:disable-next-line: max-line-length
      return this.http.get < any > (' https://partner.hansmatrimony.com/api/auth', {
        params: {
          ['phone_number']: num,
          ['fcm_app']: localStorage.getItem('fcm_app')
        }
      });
    } else {
      // tslint:disable-next-line: max-line-length
      return this.http.get < any > (' https://partner.hansmatrimony.com/api/auth', {
        params: {
          ['phone_number']: num,
        }
      });
    }
  }

  setProfileImage(image) {
    if (image) {
    this.photo = image;
    } else {
      this.photo = '../../assets/avatar.svg';
    }
  }

  onImageLoadError() {
    console.log('error occured while loading profile image, Setting default image');
    this.photo = '../../assets/avatar.svg';
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

  showError() {
    this.history = 'connection_error';
    document.getElementById('footerVisibility').style.display = 'none';
  }

  changeToHistory() {
    if (this.currentContact) {
      (window as any).ga('send', 'event', 'history', 'history clicked', {
        hitCallback: () => {
          console.log('Tracking history successful');
        }
      });
      this.history = 'history';

      console.log(localStorage.getItem('id'));
      this.scrollHorizontal(this.currentTab);
    }
  }
  changeToPersonalized() {
    if (this.currentContact) {
      (window as any).ga('send', 'event', 'personalized section', 'personalized clicked', {
        hitCallback: () => {
          console.log('Tracking personalized successful');
        }
      });
      this.history = 'personalized';
      this.scrollHorizontal(this.currentTab);
    }
  }
  changeToBot() {
    this.history = 'chatbot';
  }
  changeToMyProfile() {
    if (this.currentContact) {
      this.spinner.show();
      this.history = 'myprofile';
      console.log(localStorage.getItem('id'));
      const myprofileData = new FormData();
      myprofileData.append('id', localStorage.getItem('id'));
      myprofileData.append('contacted', '1');
      if (localStorage.getItem('is_lead')) {
        myprofileData.append('is_lead', localStorage.getItem('is_lead'));
      } else {
        this.checkUrl(localStorage.getItem('mobile_number')).subscribe(res => {
            console.log(res);
            myprofileData.append('is_lead', res.is_lead);
            localStorage.setItem('is_lead', res.is_lead);
          },
          err => {
            console.log(err);
          });
      }
      // tslint:disable-next-line: max-line-length
      return this.http.post < any > ('https://partner.hansmatrimony.com/api/getProfile', myprofileData).pipe(timeout(7000), retry(2), catchError(e => {
        throw new Error('Server Timeout ' + e);
      })).subscribe(
        (data: any) => {
          console.log(data);
          if (data.family) {
            this.familyData = data.family;
          } else {
            this.familyData = this.familyTable;
          }
          if (data.preferences) {
            this.preferenceData = data.preferences;
          } else {
            this.preferenceData = this.preferenceTable;
          }
          if (data.profile) {
            this.profileData = data.profile;
            if (data.profile.gender) {
              localStorage.setItem('gender', data.profile.gender);
              console.log(data.profile.gender);
            }
          }
          this.spinner.hide();
        },
        (error: any) => {
          this.spinner.hide();
          console.log(error);
          this.ngxNotificationService.error('Something Went Wrong');
          this.logout();
          this.showError();
        }
      );
    } else {
      this.ngxNotificationService.error('No user found');
      this.logout();
    }
  }


  logout() {
    this.loginStatus = false;
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

  // Analytics(type: string, category: string, action: string) {
  //   (window as any).gtag('send', 'event', category, action, {
  //     hitCallback: () => {

  //       console.log('Tracking ' + type + ' successful');

  //     }

  //   });

  //    // gtag app + web
  //   (window as any).gtag('event', category , {
  //     'action': action
  //   });
  // }

  analyticsEvent(event) {
    (window as any).ga('send', 'event', event, '', {
      hitCallback: () => {

        console.log('Tracking ' + event + ' successful');

      }

    });

     // gtag app + web
    (window as any).gtag('event', event, {
      event_callback: () =>  {
        console.log('Tracking gtag ' + event + ' successful');
      }
    });

  }

  changeSelectedTab(event: any) {
    console.log(event);
    this.currentTab = event;

    switch (event) {
      case 0:
        this.analyticsEvent('Today\'s Special Section Visited');
        this.changeToBot();
        break;
      case 1:
        this.tabType = 'discover';
        this.analyticsEvent('Discover Section Visited');
        this.changeToHistory();
        break;
        case 2:
        this.analyticsEvent('Likes You Section Visited');
        this.tabType = 'interestReceived';
        this.changeToHistory();
        break;
      case 3:
        this.analyticsEvent('Liked By Me Section Visited');
        this.tabType = 'interestShown';
        this.changeToHistory();
        break;
      default:
        break;
    }

  }
  setSelectedTab(index: any) {
    console.log('selected tab', index);
    if (index !== '') {
      this.selectedTab = index;
      this.changeSelectedTab(this.selectedTab);
    } else {
      this.selectedTab = 0;
      this.changeToBot();
    }

    console.log('selectedTabValue', this.selectedTab);
  }
  goToSubs() {
    this.router.navigateByUrl('subscription');
  }
  scrollHorizontal(index: any) {
    document.querySelectorAll('.mat-tab-label')[index].scrollIntoView();
  }

}
