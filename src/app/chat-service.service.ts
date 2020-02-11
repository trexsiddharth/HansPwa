import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  profileItem;
  contactNumber;
  loginStatus;
  constructor() { }

  setContactNumber(contact: any) {
    this.contactNumber = contact;

  }
  setSharedProfile(profile: any)  {
    this.profileItem = profile;
  }
  getSharedProfile() {
    return this.profileItem;
  }
  getContactNumber() {
    return this.contactNumber;
  }
  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');

      }

    });
  }
  setLoginStatus(status: boolean) {
    this.loginStatus = status;
  }
  getLoginStatus() {
    return this.loginStatus;
  }
}
