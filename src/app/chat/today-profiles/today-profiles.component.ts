import { Component, OnInit, Output, EventEmitter, AfterViewInit, HostListener } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';
import { timeout, retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotificationsService } from '../../notifications.service';
import { ChatServiceService } from '../../chat-service.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { Router, Event } from '@angular/router';
import { SubscriptionserviceService } from '../../subscriptionservice.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { ApiwhaAutoreply } from './profile-today-model';
import { LanguageService } from 'src/app/language.service';


@Component({
  selector: 'app-today-profiles',
  templateUrl: './today-profiles.component.html',
  styleUrls: ['./today-profiles.component.css']
})
export class TodayProfilesComponent implements OnInit, AfterViewInit {
  item = new ApiwhaAutoreply();
  itemMessage = 'Welcome To Hans Matrimony';
  Data;
  contactNumber;
  points = 0;
  paidStatus;
  exhaustedStatus;
  type = 'message';
  button;
  photo;
  carousel;
  carouselSize;
  count = 1;
  selfImage;
  selfName;
  shortListCount = 0;
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

  constructor(private http: HttpClient,
    private spinner: NgxSpinnerService,
    private ngxNotificationService: NgxNotificationService,
    public notification: NotificationsService,
    public chatService: ChatServiceService,
    public itemService: FindOpenHistoryProfileService,
    public router: Router,
    private dialog: MatDialog,
    public languageService: LanguageService,
    public subscriptionService: SubscriptionserviceService) {
  }
  @HostListener('scroll', ['$event'])
  onScroll(event) {
    console.log("Scroll Event", document.body.scrollTop);
    console.log("Scroll Event", window.pageYOffset);
    this.onScrollOfMain();
  }
  ngAfterViewInit(): void {
    // this.languageService.setCurrentLanguage('hindi');
    this.section = document.querySelector('#today-main');
    if (localStorage.getItem('todaysSpecialScrollPos')) {
      document.getElementById("main").scrollTo(0, Number(localStorage.getItem('todaysSpecialScrollPos')));
    }
    // this.itemService.setTutorialIndex();
  }
  ngOnInit() {
    this.contactNumber = this.chatService.getContactNumber();
    console.log(this.contactNumber);
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
            this.itemService.setPhotoStatus(false);
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
          this.itemService.setPhotoStatus(false);
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

  }

  private setProfileLocally() {
    this.type = 'profile';
    const data = JSON.parse(localStorage.getItem('todayProfile'));
    this.item = data.apiwha_autoreply;
    if (data && data.get_status_count) {
      this.itemService.saveCount(data.get_status_count);
      this.itemService.saveDailyCount(data.apiwha_autoreply.profiles_left);
    }
    console.log(this.item);
  }

  onScrollOfMain() {
    console.log('scrolled' + document.getElementById("content").scrollTop);
    this.itemService.setScroll('todaysSpecialScrollPos', document.getElementById("content").scrollTop);
  }
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

  getNextMessageOrProfile(reply: string) {
    // stop the button animation
    this.stopAnimation();
    // this.itemService.setTutorialIndex();
    console.log('shortlist count', this.shortListCount);
    const modal = document.getElementById('myModal');
    if (modal.style.display !== 'none') {
      modal.style.display = 'none';
    }
    console.log(this.itemService.getCredits(), reply.toLowerCase());
    console.log(this.type, this.itemService.getPhotoStatus());

    if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
      reply.toLowerCase() === 'yes' && this.type === 'profile') {
      this.itemService.openTodaysPopupAd();
    } else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
      reply.toLowerCase() === 'shortlist' && this.type === 'profile' && this.itemService.getPhotoStatus() === false
      && (this.shortListCount === 0 || this.shortListCount % 2 === 0)) {
      this.openMessageDialog(this.item, reply);
    } else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
      reply.toLowerCase() === 'shortlist' && this.type === 'profile'
      && this.shortListCount !== 0 && this.shortListCount % 3 === 0) {
      this.shortListCount++;
      this.itemService.openOfferOne(this.item);
    } else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
      reply.toLowerCase() === 'shortlist' && this.type === 'profile'
      && this.shortListCount !== 0 && this.shortListCount % 5 === 0) {
      this.shortListCount++;
      this.itemService.openDownloadAppDialog(this.item);
    } else {
      this.getData(reply);
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
      this.spinner.show();
    }
    this.chatRequest(reply).subscribe(
      data => {
        console.log(data);
        this.analyticsEvent(`Response ${reply} On Today's Special Profile`);

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
                this.itemService.setPhotoStatus(false);
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
          if (JSON.stringify(data) !== JSON.stringify(this.item)) {
            this.item = data.apiwha_autoreply;
            // locally storing the new profile
            localStorage.setItem('todayProfile', JSON.stringify(data));
          }
          this.item.working_city = 'na';

          // data.first_time = 0 -> when user comes for the first time on a day
          // data.first_time = 1 -> it gets 1 once he has seen first profile
          if (data.first_time === 0) {
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
            this.router.navigateByUrl('chat');
          }

        } else {
          this.type = 'message';
          this.itemMessage = data.apiwha_autoreply;
          localStorage.setItem('todayProfile', '');
          this.setMessageText(data.apiwha_autoreply);
          this.spinner.hide();

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
}

