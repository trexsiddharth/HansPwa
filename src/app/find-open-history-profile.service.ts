import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindOpenHistoryProfileService {
  openItem;
  credits;
  isPersonalized = false;
  hasPhoto = false;
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
    console.log(this.credits);
    return this.credits;
  }
  setIsPersonalized(status: boolean) {
    this.isPersonalized = status;
  }
  getPersonalized() {
    return this.isPersonalized;
  }
  setPhotoStatus(status: boolean){
    this.hasPhoto = status;
  }
  getPhotoStatus() {
    return this.hasPhoto;
  }
}
