import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindOpenHistoryProfileService {
  openItem;
  constructor() { }

  setItem(item: any) {
    console.log(item);
    this.openItem = item;
  }
  getItem() {
    if (this.openItem) {
    return this.openItem;
    } else {
      return null;
    }
  }
}
