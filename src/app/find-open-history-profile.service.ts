import { Injectable, EventEmitter } from '@angular/core';
import { ProfileCount } from './chat/countModel';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LockdownOffComponent } from './offers/lockdown-off/lockdown-off.component';
import { OfferOneComponent } from './offers/offer-one/offer-one.component';
import { OfferTwoComponent } from './offers/offer-two/offer-two.component';
import { AppDownloadDialogComponent } from './chat/app-download-dialog/app-download-dialog.component';
import { TodaysPaymentPopupComponent } from './todays-payment-popup/todays-payment-popup.component';
import { RateUsDialogComponent } from './chat/rate-us-dialog/rate-us-dialog.component';
import { MessageDialogComponent } from './chat/message-dialog/message-dialog.component';
import { NgxNotificationService } from 'ngx-kc-notification';
import { Router } from '@angular/router';
import { DailyWelcomePopupComponent } from './chat/daily-welcome-popup/daily-welcome-popup.component';
import { BehaviorSubject, concat, forkJoin, merge, Observable } from 'rxjs';
import { HistoryData, HistoryTable } from './Model/HistoryTable';
import { catchError, combineAll, concatMap, filter, map, mapTo, retry, shareReplay, timeout } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProfileTable } from './Model/Profile';
import { AuthTable } from './Model/AuthTable';

@Injectable({
  providedIn: 'root'
})
export class FindOpenHistoryProfileService {
  openItem;
  credits;
  creditsUpdated = new EventEmitter();
  is_lead;
  isPersonalized = false;
  hasPhoto = false;
  drawerBadgeClicked = false;
  contactedPhoneClicked = false;
  profileCount = new ProfileCount();
  countUpdated = new EventEmitter();
  setTab = new EventEmitter();

  shownConfetti = new EventEmitter();

  popupOpen = false;

  tutorialIndex = -1;

  compatibilityLookingFor = '';
  compatibilityGender = '';


  // history search section
  private historyAllDataListSubject: BehaviorSubject<HistoryTable> = new BehaviorSubject<HistoryTable>(null);
  private historyAllDataList$: Observable<HistoryTable>;
  private authData;

  constructor(
    private dialog: MatDialog,
    private breakPointObserver: BreakpointObserver,
    private router: Router,
    private http: HttpClient,
    private ngxNotificationService: NgxNotificationService) {
  }

  get getAuthData(): AuthTable {
    this.authData = JSON.parse(localStorage.getItem('authData'));
    if (!this.authData) {
      return;
    }
    return this.authData;
  }

  updateAuthData(update: AuthTable) {
    this.authData = update;
    if (this.authData) {
      localStorage.setItem('authData', JSON.stringify(this.authData));
    }
  }

  getSeeMoreData(): Observable<any> {
    return forkJoin(this.getDiscoveryData(), this.getPersonalizedProfiles()).pipe(
      map((t1) => t1[0].concat(t1[1]) )
    );
  }

  getDiscoveryData(): Observable<ProfileTable[]> {
    const formData = new FormData();
    formData.append('id', localStorage.getItem('id'));
    formData.append('is_lead', localStorage.getItem('is_lead'));

    return this.http.post<ProfileTable[]>('https://partner.hansmatrimony.com/api/getDiscoveryProfiles', formData).pipe(
      map((items: ProfileTable[]) => items),
      timeout(7000), retry(3), catchError(
        err => {
          this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
          throw new Error('Server TimeOut: ' + err);
        }
      )
    );
  }

  getPersonalizedProfiles(): Observable<ProfileTable[]> {
    const creditsData = new FormData();
    creditsData.append('TEXT', 'SHOW');
    creditsData.append('mobile', localStorage.getItem('mobile_number'));
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/premiumProNew',
      creditsData).pipe(
        timeout(12000), retry(2),
        map(res => (res.message as ProfileTable[])),
         catchError(e => {
          this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
          throw new Error('Server Timeout ' + e);
      }));
  }


  getHistoryData(): Observable<HistoryTable> {
    const params = new HttpParams().set('is_lead', localStorage.getItem('is_lead')).set('id', localStorage.getItem('id'));
    return this.http.get<HistoryTable>('https://partner.hansmatrimony.com/api/getHisotry', { params });
  }

  setHistoryAllDataList(table: HistoryTable) {
    if (table) {
      this.historyAllDataListSubject.next(table);
    }
  }

  getHistoryAllDataList(): Observable<HistoryTable> {
      return this.historyAllDataList$ = this.getHistoryData().pipe(shareReplay());
  }

  setItem(item: any) {
    console.log(item);
    this.openItem = item;
  }
  setCredits(credits: any) {
    this.credits = credits;
    localStorage.setItem('credits', credits);
    if (this.credits < 1 && !this.isPersonalized) {
      this.creditsUpdated.emit(true);
    }
    console.log(this.credits);
  }
  getItem() {
    if (this.openItem) {
      return this.openItem;
    } else {
      return null;
    }
  }
  setTutorialIndex() {
    // console.log(this.tutorialIndex);
    if (localStorage.getItem('tutorialIndex')) {
      // var temp = Number(localStorage.getItem("tutorialIndex"));
      // if (temp == -1)
      //   return;
      // if (temp == 5)
      //   temp = -1;
      // else
      //   temp++;
      // localStorage.setItem("tutorialIndex", String(temp));
      localStorage.setItem('tutorialIndex', '-1');
    } else {
      localStorage.setItem('tutorialIndex', '0');
    }
  }
  getTutorialIndex() {
    const temp = Number(localStorage.getItem('tutorialIndex'));
    this.tutorialIndex = temp;
    return this.tutorialIndex;
  }
  getCredits() {
    const credits = localStorage.getItem('credits');
    return credits;
  }
  setIsPersonalized(status: boolean) {
    this.isPersonalized = status;
  }
  // for showing the badge on phone and the chat drawer
  setDiscoverClicked(status: boolean) {
    if (status) {
      localStorage.setItem('discoverClicked', '1');
    } else {
      localStorage.setItem('discoverClicked', '0');
    }
  }
  getDiscoverClicked() {
    const temp = localStorage.getItem('discoverClicked');
    if (temp == '1') { return true; } else { return false; }
  }
  setdrawerBadgeClicked(status: boolean) {
    if (status) {
      localStorage.setItem('drawerBadgeClicked', '1');
    } else {
      localStorage.setItem('drawerBadgeClicked', '0');
    }
  }
  setcontactedPhoneClicked(status: boolean) {
    if (status) {
      localStorage.setItem('contactedPhoneClicked', '1');
    } else {
      localStorage.setItem('contactedPhoneClicked', '0');
    }
  }
  setChangePrefsClicked(status: boolean) {
    if (status) {
      localStorage.setItem('changePrefsClicked', '1');
    } else {
      localStorage.setItem('changePrefsClicked', '0');
    }
  }
  getChangePrefsClicked() {
    const temp = localStorage.getItem('changePrefsClicked');
    if (temp === '1') { return true; } else { return false; }
  }
  getdrawerBadgeClicked() {
    const temp = localStorage.getItem('drawerBadgeClicked');
    if (temp === '1') { return true; } else { return false; }
  }
  getcontactedPhoneClicked() {
    const temp = localStorage.getItem('contactedPhoneClicked');
    if (temp === '1') { return true; } else { return false; }
  }

  getPersonalized() {
    return  this.authData ? this.authData.is_premium === '1' ? true  : false : this.isPersonalized;
  }
  setIsLead(status) {
    this.is_lead = status;
    localStorage.setItem('is_lead', status);
  }
  getIsLead() {
    return this.is_lead;
  }
  setScroll(pagename: string, scrollPosition: number) {
    switch (pagename) {
      case 'todaysSpecial': localStorage.setItem('todaysSpecialScrollPos', String(scrollPosition));
                            break;
      case 'discover': localStorage.setItem('discoverScrollPos', String(scrollPosition));
                       break;
      case 'yourLikes': localStorage.setItem('yourLikesScrollPos', String(scrollPosition));
                        break;
    }
  }
  setPhotoStatus(status: boolean) {
    if (status) { localStorage.setItem('has_photo', '1'); } else { localStorage.setItem('has_photo', '0'); }
    this.hasPhoto = status;
  }
  getPhotoStatus() {
    if (localStorage.getItem('has_photo') === '1') {
      this.hasPhoto = true;
    } else {
      this.hasPhoto = false;
    }
    return this.hasPhoto;
  }

  changeTab(position: number) {
    this.setTab.emit(position);
  }

  changeBackToTab(position: number) {
    this.router.navigateByUrl(`chat/${position}`);
  }

  saveCount(count: any) {
    this.profileCount.contactedCount = count.C;
    this.profileCount.shortlistCount = count.SL;
    this.profileCount.shortedCount = count.S;
    this.profileCount.rejectedCount = count.R;
    this.profileCount.viewersCount = count.VPL;

    localStorage.setItem('count', JSON.stringify(this.profileCount));
  }
  getShortlistNumber() {
    if (this.profileCount.shortlistCount) {
      return this.profileCount.shortlistCount;
    } else {
      return '0';
    }

  }
  getShortedNumber() {
    if (this.profileCount.shortedCount != null) {
      if (this.profileCount.viewersCount != null) {
        return Number(this.profileCount.shortedCount) + Number(this.profileCount.viewersCount);
      } else {
        return this.profileCount.shortedCount;
      }
    } else {
      return '0';
    }
  }
  getDailyNumber() {
    if (this.profileCount.dailyCount) {
      return this.profileCount.dailyCount;
    } else {
      return '0';
    }
  }
  saveDailyCount(count: any) {
    this.profileCount.dailyCount = count + 1;
  }

  getOtherProfiles() {
    if (this.isPersonalized) {
      return localStorage.getItem('language') === 'hindi' ? 'अन्य रिश्ते' : 'Other Rishte';
    } else {
      return localStorage.getItem('language') === 'hindi' ? 'VIP रिश्ते' : 'VIP Rishte';
    }
  }
  getOtherName() {
    if (this.isPersonalized) {
      return localStorage.getItem('language') === 'hindi' ? 'अन्य' : 'Other';
    } else {
      return 'VIP';
    }
  }
  getDailyCount() {
    return this.profileCount.dailyCount ?
      localStorage.getItem('language') === 'hindi' ?
        'आज के रिश्ते ( ' + this.profileCount.dailyCount + ' )'
        : 'Today\'s Profiles ( ' + this.profileCount.dailyCount + ' )'
      : localStorage.getItem('language') === 'hindi' ? 'आज के रिश्ते' : 'Today\'s Profiles';
  }
  getContactedCount() {
    const count = JSON.parse(localStorage.getItem('count'));
    return localStorage.getItem('language') === 'hindi' ?
      'कॉंटैक्टेड(' + count.contactedCount + ')'
      : 'Contacted(' + count.contactedCount + ')';
  }
  getShortlistedCount() {
    const count = JSON.parse(localStorage.getItem('count'));
    return localStorage.getItem('language') === 'hindi' ?
      'मेरी पसंद(' + count.shortlistCount + ')'
      : 'Shortlisted(' + count.shortlistCount + ')';
  }
  getYourLikesCount() {
    const count = JSON.parse(localStorage.getItem('count'));
    return localStorage.getItem('language') === 'hindi' ?
      'मेरी पसंद(' + count.shortlistCount + ')'
      : 'Your Likes(' + count.shortlistCount + ')';
  }
  getShortedCount() {
    const count = JSON.parse(localStorage.getItem('count'));
    return localStorage.getItem('language') === 'hindi' ?
      'मै किसे पसंद हूँ? ( ' + count.shortedCount + ' )'
      : 'Liked Me? ( ' + count.shortedCount + ' )';
  }
  getRejectedCount() {
    const count = JSON.parse(localStorage.getItem('count'));
    return localStorage.getItem('language') === 'hindi' ?
      'रीजेकटेड(' + count.rejectedCount + ')'
      : 'Rejected(' + count.rejectedCount + ')';
  }
  getMutualCount() {
    return localStorage.getItem('language') === 'hindi' ?
      'दोनो को पसंद'
      : 'Mutual Like';
  }
  getCountOnlyContacted() {
    return this.profileCount.contactedCount;
  }
  getCountOnlyShortlist() {
    return this.profileCount.shortlistCount;
  }
  getCountOnlyShorted() {
    return this.profileCount.shortedCount;
  }
  getCountOnlyRejected() {
    return this.profileCount.rejectedCount;
  }
  // lockdown popup
  openLockdownAd() {
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
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.minHeight = '70vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    const dialogRef = this.dialog.open(LockdownOffComponent, dialogConfig);
  }
  // new function added to load todays offer ad on ngViewInit() instead of lockdownoffer
  async openTodaysPopupAd(sendToChat = false) {
    if (this.popupOpen) {
      this.popupOpen = false;
      return;
    }

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
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.minHeight = '70vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.id = 'todaysPopup';
    const dialogRef = this.dialog.open(TodaysPaymentPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
    (response: any) => {
      /*
      * if user is coming from full page form,
      * once he clicks on the close button in the dialog we send the user to chat screen
      * so that they dont have to click on go button twice on the last page of the
      * registration form.
      */
      if (sendToChat) {
        if (response) {
          if (response.status === 'closed') {
            this.router.navigateByUrl('chat?first');
          }
        }
      }
    }
  );

  }

  // Inhe abhi call kare popup
  openOfferOne(profile) {
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
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.data = {
      data: profile
    };
    const dialogRef = this.dialog.open(OfferOneComponent, dialogConfig);
  }

  // ye rishta hath se na jane de pop up
  openOfferTwo(profile) {
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
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.data = {
      data: profile
    };
    const dialogRef = this.dialog.open(OfferTwoComponent, dialogConfig);
  }

  // download the app pop up
  openDownloadAppDialog(profile) {
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
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.data = {
      data: profile
    };
    const dialogRef = this.dialog.open(AppDownloadDialogComponent, dialogConfig);
  }

  // rate us pop up
  openRateUsDialog(forFreeUser: boolean = false) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.minWidth = '30vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '96vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        }
      }
    );
    dialogConfig.id = 'rateDialog';
    dialogConfig.data = forFreeUser;
    const dialogRef = this.dialog.open(RateUsDialogComponent, dialogConfig);
  }

  openMessageDialog(shareItem, reply: string, coming: boolean = false) {
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
    const dialogRefYes = this.dialog.open(MessageDialogComponent, dialogConfig);
    dialogRefYes.afterClosed().subscribe(
      data => {
        if (data && data.request) {
          this.ngxNotificationService.success('Call Requested Successfully. Hans Matrimony Will Call You');
          if (coming) {
            this.router.navigateByUrl('chat');
          }
        }
      }
    );
  }


  // daily welcome popup
  openWelcomeDialog(dailyCount) {
    this.popupOpen = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.minWidth = '40vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '95vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.data = {
      dailyQuota: dailyCount
    };
    // const dialogRef = this.dialog.open(DailyWelcomePopupComponent, dialogConfig);
  }
}
