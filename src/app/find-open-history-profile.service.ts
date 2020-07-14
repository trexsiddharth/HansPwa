import { Injectable, EventEmitter } from '@angular/core';
import { ProfileCount } from './chat/countModel';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LockdownOffComponent } from './offers/lockdown-off/lockdown-off.component';
import { OfferOneComponent } from './offers/offer-one/offer-one.component';
import { OfferTwoComponent } from './offers/offer-two/offer-two.component';
import { AppDownloadDialogComponent } from './chat/app-download-dialog/app-download-dialog.component';
import { TodaysPaymentPopupComponent} from './chat/today-profiles/todays-payment-popup/todays-payment-popup.component';
import { RateUsDialogComponent } from './chat/rate-us-dialog/rate-us-dialog.component';


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
  profileCount = new ProfileCount();
  countUpdated = new EventEmitter();
  setTab = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private breakPointObserver: BreakpointObserver) { }

  setItem(item: any) {
    console.log(item);
    this.openItem = item;
  }
  setCredits(credits: any) {
    this.credits = credits;
    if (this.credits < 1) {
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
  getCredits() {
    return this.credits;
  }
  setIsPersonalized(status: boolean) {
    this.isPersonalized = status;
  }
  getPersonalized() {
    return this.isPersonalized;
  }
  setIsLead(status) {
    this.is_lead = status;
  }
  getIsLead() {
    return this.is_lead;
  }

  setPhotoStatus(status: boolean) {
    this.hasPhoto = status;
  }
  getPhotoStatus() {
    return this.hasPhoto;
  }

  changeTab(position: number) {
    this.setTab.emit(position);
  }

  saveCount(count: any) {
    this.profileCount.contactedCount = count.C;
    this.profileCount.shortlistCount = count.SL;
    this.profileCount.shortedCount = count.S;
    this.profileCount.rejectedCount = count.R;
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
     'आज के रिश्ते ( ' +  this.profileCount.dailyCount + ' )'
     : 'Today\'s Profiles ( ' +  this.profileCount.dailyCount + ' )'
      : localStorage.getItem('language') === 'hindi' ? 'आज के रिश्ते' : 'Today\'s Profiles';
  }
  getContactedCount() {
    return localStorage.getItem('language') === 'hindi' ?
    'कॉंटैक्टेड ( ' + this.profileCount.contactedCount + ' )'
    : 'Contacted ( ' + this.profileCount.contactedCount + ' )';
  }
  getShortlistedCount() {
    return localStorage.getItem('language') === 'hindi' ?
    'मेरी पसंद ( ' + this.profileCount.shortlistCount + ' )'
    : 'Shortlisted ( ' + this.profileCount.shortlistCount + ' )';
  }
  getShortedCount() {
    return  localStorage.getItem('language') === 'hindi' ?
    'मै किसे पसंद हूँ? ( ' + this.profileCount.shortedCount + ' )'
    : 'Liked Me? ( ' + this.profileCount.shortedCount + ' )';
  }
  getRejectedCount() {
    return localStorage.getItem('language') === 'hindi' ?
    'नापसंद ( ' + this.profileCount.rejectedCount + ' )'
    : 'Rejected ( ' + this.profileCount.rejectedCount + ' )';
  }
  getMutualCount() {
    return localStorage.getItem('language') === 'hindi' ?
    'दोनो को पसंद'
    : 'Mutual Like';
  }
  getCountOnlyShortlist() {
    return this.profileCount.shortlistCount;
  }
  getCountOnlyShorted() {
    return this.profileCount.shortedCount;
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
  //new function added to load todays offer ad on ngViewInit() instead of lockdownoffer
  openTodaysPopupAd() {
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
    const dialogRef = this.dialog.open(TodaysPaymentPopupComponent, dialogConfig);

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
  openRateUsDialog() {
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
          dialogConfig.minWidth = '80vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    const dialogRef = this.dialog.open(RateUsDialogComponent, dialogConfig);
  }
}
