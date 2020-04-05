import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewHomeService {

  private loggedInNumber;
  private loggedInProfilePic;
  private drawerInstance;

  constructor() { }

  getLoginStatus() {
   if (localStorage.getItem('mobile_number') && localStorage.getItem('mobile_number') !== '') {
      this.loggedInNumber = localStorage.getItem('mobile_number');
      return true;
   } else {
     return false;
   }
  }
  getLoggedInNumber() {
    return this.loggedInNumber;
  }

  getProfilePic() {
    if (localStorage.getItem('profile_photo') && localStorage.getItem('profile_photo') !== '') {
        return localStorage.getItem('profile_photo');
    } else {
      return null;
    }
  }

  saveLoggedProfilePic(imgUrl: string) {
    this.loggedInProfilePic = imgUrl;
  }
  getLoggedProfilePic(){
    return this.loggedInProfilePic;
  }

  saveDrawerInstance(drawer: any) {
    this.drawerInstance = drawer;
    console.log(drawer);
  }

  getDrawerInstance() {
    return this.drawerInstance;
  }

}
