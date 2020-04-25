import { Injectable, EventEmitter } from '@angular/core';
import { ProfileCount } from './chat/countModel';
import { stat } from 'fs';

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

  constructor() { }

  setItem(item: any) {
    console.log(item);
    this.openItem = item;
  }
  setCredits(credits: any) {
    this.credits = credits;
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
}
