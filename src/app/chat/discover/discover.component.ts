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
  from,
  BehaviorSubject
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
import { Location } from '@angular/common';
import {  combineAll, shareReplay, tap } from 'rxjs/operators';
import { ProfileTable } from 'src/app/Model/Profile';



@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  animations: [trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ]),
      ], { optional: true })
    ])
  ])],
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit, AfterViewInit {


  profile: any[] = [];
  wholeData;
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
  authData;
  seeMoreSubject: BehaviorSubject<ProfileTable[]> = new BehaviorSubject<ProfileTable[]>([]);
  seeMore$: Observable<ProfileTable[]> = this.seeMoreSubject.asObservable().pipe(shareReplay())

  constructor(private http: HttpClient, private ngxNotificationService: NgxNotificationService,
              private spinner: NgxSpinnerService,
              private dialog: MatDialog,
              public notification: NotificationsService,
              public itemService: FindOpenHistoryProfileService,
              private activatedRoute: ActivatedRoute,
              private browserLocation: Location,
              private router: Router) { }

  ngOnInit() {
    // get discover data
    this.itemService.getSeeMoreData().pipe(
      shareReplay(),
      tap(items => {
          console.log('combined observables', items);
      })
    ).subscribe(
      (data: ProfileTable[]) => {
          this.seeMoreSubject.next(data)
      }
    )

    // url for the particular section of history
    this.activatedRoute.paramMap.subscribe(
      (routeData: any) => {
        console.log(routeData);
        if (routeData && routeData.params && routeData.params.section) {
          this.section = routeData.params.section;
        }
      }
    );

    this.authData = JSON.parse(localStorage.getItem('authData'));
    // if stage is not null set it to null so that when we get back to chat section it opens todays profile only
    // back to chat from chat drawer options
    if (localStorage.getItem('stage')) {
      localStorage.setItem('stage', null);
    }
  }
  ngAfterViewInit(): void {
  }
  goBack() {
    this.browserLocation.back();
    localStorage.setItem('open_profile', null);
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
        return 'https://d2v6etlhrhtken.cloudfront.net/uploads/' + num;
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

  openContactedProfile(data: any) {
    if (this.itemService.getItem()) {
      const prof: any = this.itemService.getItem();
      console.log(prof);
      if (prof.family) {
        this.panelOpenState = data.findIndex((item) => {
          return item.profile.id === prof.profile.id;
        });
        console.log(this.panelOpenState);
        // this.openProfileDialog(data[this.panelOpenState], this.panelOpenState);
      } else if (prof.profile) {
        this.panelOpenState = data.findIndex((item) => {
          return item.profile.identity_number === prof.profile.identity_number;
        });
        console.log(this.panelOpenState);
        // this.openProfileDialog(data[this.panelOpenState], this.panelOpenState);
      } else {
        this.panelOpenState = data.findIndex((item) => {
          return item.profile.identity_number === prof.identity_number;
        });
        console.log(this.panelOpenState);
        // this.openProfileDialog(data[this.panelOpenState], this.panelOpenState);
      }
      this.itemService.setItem(null);
    }
  }



  checkUrl(num: string): Observable<any> {
    if (localStorage.getItem('fcm_app')) {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {
        params: {
          ['phone_number']: num,
          ['fcm_id']: this.notification.getCurrentToken(),
          ['fcm_app']: localStorage.getItem('fcm_app')
        }
      });
    } else {
      // tslint:disable-next-line: max-line-length
      return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {
        params: {
          ['phone_number']: num,
          ['fcm_id']: this.notification.getCurrentToken()
        }
      });
    }
  }

  setName(name: string): string {
    if (this.itemService.getCredits() != null && (this.itemService.getCredits().toString() === '0'
    || this.authData.paid_status !== 'Paid') && !this.itemService.getPersonalized()) {
      let a = name.split(' ');
      if (a[0] && a[1]) {
        return a[0][0] + ' ' + a[1];
      } else if (a[0]) {
        return a[0][0];
      }
    } else {
      return name;
    }
  }

  profileReAnswer(data: any) {

    if (this.itemService.getPersonalized()
     && this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0') {
      this.ngxNotificationService.warning('You don\'t have enough credits ');
    } else if (this.itemService.getPersonalized() === false &&
      !data.item.family) {
      this.openMessageDialog(data.item, 'contacted');
    } else if (this.itemService.getPersonalized() === true &&
       !data.item.family) {
      this.reponseToPremium(data.item, 'CONTACTED', data.index);
    } else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0'
      && this.itemService.getPersonalized() === false) {
      this.itemService.openTodaysPopupAd();
    } else {
      this.reponseToNormal(data.item, 'YES', data.index);
    }
  }

  // reponse on normal proffile
  reponseToNormal(item, answer, index) {
    this.spinner.show();
    this.panelOpenState = null;
    const reAnswerData = new FormData();
    reAnswerData.append('id', localStorage.getItem('id'));
    if (item.family) {
      reAnswerData.append('action_id', item.profile.id);
    } else {
      reAnswerData.append('action_id', item.profile.identity_number);
    }
    reAnswerData.append('action', answer);
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
    return this.http.post<any>('https://partner.hansmatrimony.com/api/saveAction', reAnswerData).subscribe(
      (response: any) => {
        console.log(response);
        if (response && response.status === 1) {
          // update the profile list
          this.updateProfileList(index);
          if (response.count) {
            this.itemService.saveCount(response.count);
          }
          this.spinner.hide();
          // after reponse update the user credits
          this.getCredits();
        } else {
          this.ngxNotificationService.error(response.message);
          this.spinner.hide();
        }
      },
      err => {
        this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
        this.spinner.hide();
      }
    );
  }
  // reponse on premium profile
  reponseToPremium(item, answer, index) {
    this.panelOpenState = null;
    const reAnswerData = new FormData();
    reAnswerData.append('mobile', localStorage.getItem('mobile_number'));
    reAnswerData.append('id', item.profile.identity_number);
    reAnswerData.append('TEXT', answer);
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/premiumProNew', reAnswerData).subscribe(
      (response: any) => {
        console.log(response);
        if (response && response.status === 1) {
          // update the profile list after response
          this.updatePremiumProfileList(index);
          this.spinner.hide();
          // update the count
          if (response.count) {
            this.itemService.saveCount(response.count);
          }

          this.getCredits();
        } else {
          this.ngxNotificationService.error(response.message);
          this.spinner.hide();
        }
      },
      err => {
        this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
        this.spinner.hide();
      }
    );
  }



  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {
        console.log('Tracking ' + type + ' successful');
      }
    });
    // gtag app + web
    (window as any).gtag('event', category, {
      action: action
    });
  }

  // update the list after response
  updateProfileList(index) {
    if (this.itemService.getCredits() && this.itemService.getCredits() !== '0') {
      // this.slideAndOpenProfile(this.profile[index], 1);
      console.log("current data value", this.seeMoreSubject.getValue())
      localStorage.setItem('stage', '1');
      this.router.navigateByUrl(`chat/open/open-profile/${this.seeMoreSubject.getValue()[index].profile.id}`);
      this.seeMoreSubject.getValue().splice(index, 1);
      // this.itemService.changeTab(1);
    } else {
      this.ngxNotificationService.error('You Dont have Enough Credits', '',
        null, {
        duration: 4000,
        closeButton: true
      });
    }
  }
  // update the list after response
  updatePremiumProfileList(index) {
    if (this.itemService.getCredits() && this.itemService.getCredits() !== '0') {
      // this.slideAndOpenProfile(this.profile[index], 1);
      localStorage.setItem('stage', '1');
      let shareProfile = this.profile[index];
      shareProfile.coming = 'contacted';
      localStorage.setItem('open_profile', JSON.stringify(shareProfile));
      this.router.navigateByUrl(`chat/open/open-profile`);
      this.profile.splice(index, 1);
      // this.itemService.changeTab(1);
    } else {
      this.ngxNotificationService.error('You Dont have Enough Credits', '',
        null, {
        duration: 4000,
        closeButton: true
      });
    }
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

  openMessageDialog(shareItem, reply: string) {
    console.log(shareItem);
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
        break;
      case 'contacted':
        dialogConfig.data = {
          profile: shareItem,
          type: reply.toLowerCase()
        };
        break;

      default:
        break;

    }
    dialogConfig.id = 'messageDialog';
    const dialogRefYes = this.dialog.open(MessageDialogComponent, dialogConfig);
    dialogRefYes.afterClosed().subscribe(
      data => {
        if (data && data.request) {
          this.ngxNotificationService.success('Call Requested Successfully. Hans Matrimony Will Call You');
        }
      }
    );
  }

}
