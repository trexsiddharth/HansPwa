import { Injectable, EventEmitter } from '@angular/core';
import { ProfileCount } from './chat/countModel';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LockdownOffComponent } from './offers/lockdown-off/lockdown-off.component';
import { OfferOneComponent } from './offers/offer-one/offer-one.component';
import { OfferTwoComponent } from './offers/offer-two/offer-two.component';


@Injectable({
  providedIn: 'root'
})
export class FindOpenHistoryProfileService {
  openItem;
  credits;
  is_lead;
  isPersonalized = false;
  hasPhoto = false;
  profileCount = new ProfileCount();
  countUpdated = new EventEmitter();
  setTab = new EventEmitter();
  lockdownCount = 0;

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
      this.lockdownCount++;
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
    return 'अन्य रिश्ते';
  } else {
    return 'VIP रिश्ते';
  }
  }
  getOtherName() {
    if (this.isPersonalized) {
    return 'अन्य';
  } else {
    return 'VIP';
  }
  }
  getDailyCount() {
    return this.profileCount.dailyCount ? 'आज के रिश्ते ( ' +  this.profileCount.dailyCount + ' )' : 'आज के रिश्ते';
  }
  getContactedCount() {
    return 'कॉंटैक्टेड ( ' + this.profileCount.contactedCount + ' )';
  }
  getShortlistedCount() {
    return 'मेरी पसंद ( ' + this.profileCount.shortlistCount + ' )';
  }
  getShortedCount() {
    return 'मै किसे पसंद हूँ? ( ' + this.profileCount.shortedCount + ' )';
  }
  getRejectedCount() {
    return 'नापसंद ( ' + this.profileCount.rejectedCount + ' )';
  }
  getCountOnlyShortlist() {
    return this.profileCount.shortlistCount;
  }
  getCountOnlyShorted() {
    return this.profileCount.shortedCount;
  }

  // lockdown popup
  openLockdownAd() {
    if (this.lockdownCount === 0) {
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
}
