import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, retry, catchError } from 'rxjs/operators';
import { FindOpenHistoryProfileService } from './find-open-history-profile.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  authDataUpdated = new EventEmitter<boolean>();
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

  opensidenav = new BehaviorSubject<boolean>(false);
  opensidenav$: Observable<boolean> = this.opensidenav.asObservable();

  imgSRC = new BehaviorSubject<string>(null);
  imgSRC$: Observable<string> = this.imgSRC.asObservable();
  formTwoCompleted = new BehaviorSubject<boolean>(false);
  countOfRishtey = 0;

  selected_country: any;
  selected_states: string = '';
  selected_cities: string = '';
  selected_states_id: string[] = [];
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
  familyDetailsLeft: any[] = [];
  personalDetailsLeft: any[] = [];
  profileCompletionPercent: number = 0;
  personalDetailsList = [];
  familyDetailsList = [];
  totalDetails = 0;
  setProfileCalculations() {
    this.personalDetailsList = ['name', 'birth_date', 'birth_time', 'birth_place', 'college',
      'additional_qualification', 'caste', 'religion',
      'height', 'weight', 'marital_status', 'manglik',
      'food_choice', 'monthly_income', 'degree',
      'company', 'occupation', 'profession', 'working_city',
      'locality', 'email', 'profession', 'locality', 'whats_app_no'];
    this.familyDetailsList = ['about', 'occupation_mother', 'gotra', 'occupation',
      'family_type', 'family_income', 'city', 'house_type', 'livingWithParents'];
    this.totalDetails = this.personalDetailsList.length + this.familyDetailsList.length;
    this.personalDetailsLeft = [];
    this.familyDetailsLeft = [];
    for (let v of this.personalDetailsList) {
      if (this.personalProfileData.hasOwnProperty(v)) {
        if (!this.personalProfileData[v] || this.personalProfileData[v] === "null") {
          this.personalDetailsLeft.push(v);
        }
      }
      else this.personalDetailsLeft.push(v);
    }
    for (let v of this.familyDetailsList) {
      if (this.familyProfileData.hasOwnProperty(v)) {
        if (!this.familyProfileData[v] || this.familyProfileData[v] === "null") {
          this.familyDetailsLeft.push(v);
        }
      }
      else {
        this.familyDetailsLeft.push(v);
      }
    }
    for (let v of this.personalDetailsLeft) {
      if (this.familyProfileData.hasOwnProperty(v)) {
        this.personalDetailsLeft.splice(this.personalDetailsLeft.indexOf(v));
      }
    }
    console.log(this.personalDetailsLeft);
    console.log(this.familyDetailsLeft);
  }
  setProfileCompletion() {
    this.profileCompletionPercent = Math.ceil(((this.totalDetails - this.personalDetailsLeft.length - this.familyDetailsLeft.length) * 100) / (this.totalDetails));
    localStorage.setItem('profileCompPercent', String(this.profileCompletionPercent));
    console.log('profile completion percent set from chat service');
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
            this.setProfileCalculations();
            this.setProfileCompletion();
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
  opensidenavTrue() {
    this.opensidenav.next(true);
  }
  opensidenavFalse() {
    this.opensidenav.next(false);
  }
}
