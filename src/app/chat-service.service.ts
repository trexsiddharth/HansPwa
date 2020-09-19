import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, retry, catchError } from 'rxjs/operators';
import { FindOpenHistoryProfileService } from './find-open-history-profile.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  profileItem;
  contactNumber;
  loginStatus;
  credits;
  shortList = [];
  rejectList = [];
  actionCount = -2;
  personalProfileData: any;
  familyProfileData: any;
  preferenceProfileData: any;
  pageThreeFilled: boolean = true;
  authorized = new EventEmitter<{
    name,
    photo,
    id,
    isLead
  }>();

  constructor(public http: HttpClient,
    public itemService: FindOpenHistoryProfileService) { }

  shouldHitSendMessages = new BehaviorSubject<boolean>(false);
  shouldHitSendMessages$: Observable<boolean> = this.shouldHitSendMessages.asObservable();

  setProfileData(a: any, b: any) {
    this.personalProfileData = a;
    this.familyProfileData = b;
  }
  setContactNumber(contact: any) {
    this.contactNumber = contact;
  }
  setSharedProfile(profile: any) {
    this.profileItem = profile;
  }
  getSharedProfile() {
    return this.profileItem;
  }
  getContactNumber() {
    return this.contactNumber ? this.contactNumber : localStorage.getItem('mobile_number');
  }
  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');
      }

    });
    // gtag app + web
    (window as any).gtag('event', category, {
      'action': action
    });

  }
  setLoginStatus(status: boolean) {
    this.loginStatus = status;
  }
  getLoginStatus() {
    return this.loginStatus;
  }

  setCredits(credits: string) {
    this.credits = credits;
  }
  getCredits() {
    return this.credits;
  }
  getUserProfileData() {
    if (localStorage.getItem('id')) {
      const myprofileData = new FormData();
      myprofileData.append(
        'id', localStorage.getItem('id')
      );
      myprofileData.append('contacted', '1');
      myprofileData.append(
        'is_lead', localStorage.getItem('is_lead')
      );
      // tslint:disable-next-line: max-line-length
      return this.http
        .post<any>(
          'https://partner.hansmatrimony.com/api/getProfile',
          myprofileData
        )
        .pipe(
          timeout(7000),
          retry(2),
          catchError((e) => {
            throw new Error('Server Timeout ' + e);
          })
        )
        .subscribe(
          (data: any) => {
            console.log(data.preferences);
            this.preferenceProfileData = data.preferences ? data.preferences : null;
            this.personalProfileData = data.profile ? data.profile : null;
            this.familyProfileData = data.family ? data.family : null;

            //setting profile data in chat service for use in popups.
            this.setProfileData(this.personalProfileData, this.familyProfileData);

            if (data.profile.photo) {
              this.itemService.setPhotoStatus(true);
            }
          },
          (error: any) => {
            console.log(error);
          }
        );
    } else {
      console.log('Couln\'t get profiledata');
    }
  }
  setShouldHitSendMessagesToTrue() {
    this.shouldHitSendMessages.next(true);
  }
  setShouldHitSendMessagesToFalse() {
    this.shouldHitSendMessages.next(false);
  }
}
