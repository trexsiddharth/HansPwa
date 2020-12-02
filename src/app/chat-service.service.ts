import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { timeout, retry, catchError, tap, shareReplay } from 'rxjs/operators';
import { FindOpenHistoryProfileService } from './find-open-history-profile.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileTable } from './Model/Profile';
import { RishteyCountTable } from './Model/RishteyCountTable';
import { NgxNotificationService } from 'ngx-kc-notification';
import { StateTable } from './Model/StateTable';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(public http: HttpClient,
              public itemService: FindOpenHistoryProfileService,
              private ngxNotificationService: NgxNotificationService) { }

 get activeTab(): number {
  return this.currentTab;
 }
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
  pageThreeFilled = true;
  authorized = new EventEmitter<{
    name,
    photo,
    id,
    isLead
  }>();

  currentTab = 0;

  shouldHitSendMessages = new BehaviorSubject<boolean>(false);
  shouldHitSendMessages$: Observable<boolean> = this.shouldHitSendMessages.asObservable();

  opensidenav = new BehaviorSubject<boolean>(false);
  opensidenav$: Observable<boolean> = this.opensidenav.asObservable();

  imgSRC = new BehaviorSubject<string>(null);
  imgSRC$: Observable<string> = this.imgSRC.asObservable();
  formTwoCompleted = new BehaviorSubject<boolean>(false);
  countOfRishtey = 0;
  // for user profile
  private userProfileSubject = new BehaviorSubject<ProfileTable>(null);
  private userProfile$: Observable<ProfileTable> = this.userProfileSubject.asObservable().pipe(shareReplay());

  // for all caste
  private allCastesSubject = new BehaviorSubject<string[]>(null);
  private allCastes$: Observable<string[]> = this.allCastesSubject.asObservable().pipe(shareReplay());

  // get states according to country
  private allStatesSubject = new BehaviorSubject<StateTable[]>(null);
  private allStates$: Observable<StateTable[]> = this.allStatesSubject.asObservable().pipe(shareReplay());

  // get cities on the basis of country and states
  private allCitiesSubject = new BehaviorSubject<string[]>(null);
  private allCities$: Observable<string[]> = this.allCitiesSubject.asObservable().pipe(shareReplay());

   // get count of rishtas
   private countOfRishtas: string;
   private countOfRishtasSubject = new BehaviorSubject<RishteyCountTable>(null);
   private countOfRishtas$: Observable<RishteyCountTable> = this.countOfRishtasSubject.asObservable().pipe(shareReplay());

  selected_country: any;
  selected_states = '';
  selected_cities = '';
  selected_states_id: string[] = [];
  familyDetailsLeft: any[] = [];
  personalDetailsLeft: any[] = [];
  profileCompletionPercent = 0;
  personalDetailsList = [];
  familyDetailsList = [];
  totalDetails = 0;
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
      action: action
    });

  }
  setLoginStatus(status: boolean) {
    this.loginStatus = status;
  }
  getLoginStatus() {
    return this.loginStatus;
  }

  changeCurrentTab(tab: number) {
    if (tab && tab > -1) {
      this.currentTab = tab;
    }

  }

  setCredits(credits: string) {
    this.credits = credits;
  }
  getCredits() {
    return this.credits;
  }

  get allCastes(): Observable<string[]> {
    if (this.allCastesSubject.getValue()) {
      return this.allCastes$;
    }
    return this.http.get<string[]>('https://partner.hansmatrimony.com/api/getAllCaste').pipe(
      tap((data: string[]) => {
          this.allCastesSubject.next(data);
      }));
  }

  getStates(value): Observable<StateTable[]> {
    if (this.allStatesSubject.getValue() || value === this.selected_country) {
      console.log('cached states');
      return this.allStates$;
    }
    this.selected_country = value;
    const params = new HttpParams().set('country_id', this.selected_country ? this.selected_country.id : null);
    return this.http.get<StateTable[]>('https://partner.hansmatrimony.com/api/getState', { params }).pipe(
      tap((data: StateTable[]) => {
        this.allStatesSubject.next(data);
      })
    );
 }

 getCities(countryValue, stateValue): Observable<string[]> {
  if (this.allCitiesSubject.getValue() || countryValue === this.selected_country
  && stateValue === this.selected_states) {
    console.log('cached states');
    return this.allCities$;
  }
  this.selected_country = countryValue;
  this.selected_states = stateValue;
  const params = new HttpParams().set('country_id', this.selected_country).set('state_id', stateValue);
  return this.http.get<string[]>('https://partner.hansmatrimony.com/api/getCity', { params }).pipe(
    tap((data: string[]) => {
      this.allCitiesSubject.next(data);
    })
  );
}

getCountOfRishtey(formValues: FormData, values: any): Observable<RishteyCountTable> {
  if (this.countOfRishtasSubject.getValue() && this.countOfRishtas === JSON.stringify(values) ) {
    console.log('cached count of rishtey' , this.countOfRishtas === JSON.stringify(values));
    return this.countOfRishtas$;
  }
  this.countOfRishtas = JSON.stringify(values);
  return this.http.post<RishteyCountTable>('https://partner.hansmatrimony.com/api/getCountOfRishtey', formValues).pipe(
    tap((data: RishteyCountTable) => {
      this.countOfRishtasSubject.next(data);
    })
  );
}

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
    for (const v of this.personalDetailsList) {
      if (this.personalProfileData.hasOwnProperty(v)) {
        if (!this.personalProfileData[v] || this.personalProfileData[v] === 'null') {
          this.personalDetailsLeft.push(v);
        }
      } else { this.personalDetailsLeft.push(v); }
    }
    for (const v of this.familyDetailsList) {
      if (this.familyProfileData.hasOwnProperty(v)) {
        if (!this.familyProfileData[v] || this.familyProfileData[v] === 'null') {
          this.familyDetailsLeft.push(v);
        }
      } else {
        this.familyDetailsLeft.push(v);
      }
    }
    for (const v of this.personalDetailsLeft) {
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

            // setting profile data in chat service for use in popups.
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

  setUserProfile(data: ProfileTable) {
    if (data) {
      this.userProfileSubject.next(data);
    }
  }

  // getProfile Observable
  getUserProfile( updateProfile: boolean = false): Observable<ProfileTable> {
    if (this.userProfileSubject.getValue() && !updateProfile) {
      console.log('cached user profile', this.userProfileSubject.getValue());

      return this.userProfileSubject;
    }
    const myprofileData = new FormData();
    myprofileData.append(
      'id', localStorage.getItem('id')
    );
    myprofileData.append('contacted', '1');
    myprofileData.append(
      'is_lead', localStorage.getItem('is_lead')
    );
    myprofileData.append('show_country', '1');
    return this.http
      .post<ProfileTable>(
        'https://partner.hansmatrimony.com/api/getProfile',
        myprofileData
      )
      .pipe(
        timeout(7000),
        retry(2),
        catchError((e) => {
          this.ngxNotificationService.error(
            'Server Time Out, Try Again Later'
          );
          throw new Error('Server Timeout ' + e);
        }
        ), tap((data) => {
          console.log('User Data Updated');
          this.userProfileSubject.next(data);
        })
      );
  }
}
