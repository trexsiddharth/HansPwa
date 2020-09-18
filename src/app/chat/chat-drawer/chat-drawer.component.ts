import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { MatSidenav, MatSelect, MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';
import { LanguageService } from 'src/app/language.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { timeout, retry, catchError, takeUntil, shareReplay } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { EditPreferenceDialogComponent } from '../myprofile/edit-preference-dialog/edit-preference-dialog.component';

@Component({
  selector: 'app-chat-drawer',
  templateUrl: './chat-drawer.component.html',
  styleUrls: ['./chat-drawer.component.css'],
})
export class ChatDrawerComponent implements OnInit {
  constructor(public languageService: LanguageService,
    private chatService: ChatServiceService,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private ngxNotificationService: NgxNotificationService,
    public router: Router,
    private _formBuilder: FormBuilder,
    public itemService: FindOpenHistoryProfileService,
    public activatedRoute: ActivatedRoute,
    public snackbar: MatSnackBar,
    public matDialog: MatDialog,
  ) {
    this.preferencesForm = this._formBuilder.group({
      food_choice: [''],
      age_min: [''],
      age_max: [''],
      income_min: [''],
      income_max: ['', Validators.compose([Validators.maxLength(4)])],
      caste_pref: [''],
      manglik_pref: [''],
      occupation: [''],
      religion: [''],
      height_min: [''],
      height_max: [''],
      marital_status: [''],
      working: [''],
    });
  }
  @Input() drawerReference: MatSidenav;
  prefsRef: MatSidenav;
  username;
  userpic = '../../../assets/logo_192.png';
  userId;
  userIsLead;
  langCheck;
  currentLanguage;
  gender: string;
  preferenceProfileData: any;
  personalProfileData: any;
  familyProfileData: any;
  preferencesForm: FormGroup;
  // disableSave = false;

  disableSave = new BehaviorSubject<boolean>(true);
  disableSave$: Observable<boolean>;
  firstTime = true;
  getcastes: any = [];
  searchedCaste = '';
  searchCaste = new FormControl();
  searchCasteText = new FormControl();
  isAllCastePref = false;
  isWide = true;
  // countProfiles = new BehaviorSubject<number>(0);
  // countProfiles$: Observable<number> = this.countProfiles.asObservable();
  countProfiles = 0;
  public filteredCastesMulti: ReplaySubject<string[]> = new ReplaySubject<
    string[]
  >(1);
  protected _onDestroy = new Subject<void>();
  @ViewChild('#multiSelect', { static: true }) multiSelect: MatSelect;
  Heights: string[] = [
    '4\'0"',
    '4\'1"',
    '4\'2"',
    '4\'3"',
    '4\'4"',
    '4\'5"',
    '4\'6"',
    '4\'7"',
    '4\'8"',
    '4\'9"',
    '4\'10"',
    '4\'11"',
    '5\'0"',
    '5\'1"',
    '5\'2"',
    '5\'3"',
    '5\'4"',
    '5\'5"',
    '5\'6"',
    '5\'7"',
    '5\'8"',
    '5\'9"',
    '5\'10"',
    '5\'11"',
    '6\'0"',
    '6\'1"',
    '6\'2"',
    '6\'3"',
    '6\'4"',
    '6\'5"',
    '6\'6"',
    '6\'7"',
    '6\'8"',
    '6\'9"',
    '6\'10"',
    '6\'11"',
    '7\'0"',
  ];
  Heights1: string[] = [
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '80',
    '81',
    '82',
    '83',
    '84',
  ];
  Occupation: string[] = [
    'Private Job',
    'Business/Self-Employed',
    'Govt Job',
    'Doctor',
    'Teacher',
    'Homely',
    'Not Employed',
  ];
  Mangalika = ['Manglik', 'Non-Manglik', 'Anshik Manglik', 'Doesn\'t Matter'];
  Religions: string[] = [
    'Hindu',
    'Muslim',
    'Sikh',
    'Christian',
    'Buddhist',
    'Jain',
    'Parsi',
    'Jewish',
    'Bahai',
  ];
  Foodpreferences: string[] = [
    'Doesn\'t Matter',
    'Non-Vegetarian',
    'Vegetarian',
  ];
  Working: string[] = ['Working', 'Not Working', 'Doesn\'t Matter'];
  //Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt Job', 'Doctor', 'Teacher', 'Doesn\'t Matter',
  //'Defence', 'Civil Services'];
  MaritalStatus: string[] = [
    'Doesn\'t Matter',
    'Never Married',
    'Awaiting Divorce',
    'Divorcee',
    'Widowed',
    'Anulled',
  ];
  innerWidth: any;
  @ViewChild('sidenavPrefs', { static: true }) public sidenav: MatSidenav;
  contactedCount = 0;
  rejectedCount = 0;
  castePreferences: string[] = [];
  prevEventLength: number = 0;
  familyDetailsLeft = [];
  personalDetailsLeft = [];
  profileCompletionPercent = 0;
  personalDetailsList = [];
  familyDetailsList = [];
  totalDetails = this.personalDetailsList.length + this.familyDetailsList.length;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    //this.disableSave.next(true);
    // user authorized
    this.disableSave$ = this.disableSave.asObservable().pipe(
      shareReplay()
    );
    this.chatService.authorized.subscribe(
      data => {
        if (data) {
          this.username = data.name;
          this.userpic = data.photo;
          this.userId = data.id;
          this.userIsLead = data.isLead;
          this.getUserProfileData();
        }
      }
    );
    if (this.router.url.match('first')) {
      this.sidenav.open();
    }

    this.disableSave$.subscribe(
      (res: boolean) => {
        console.log(res);
      }
    );
  }

  changed() {
    console.log('changed');
    this.disableSave.next(false);
  }
  ngAfterViewInit() {
    // set already selected language in toggle
    setTimeout(() => {
      if (localStorage.getItem('language') === 'hindi') {
        this.langCheck = false;
      } else {
        this.langCheck = true;
      }
    }, 2000)
    this.changed();
    //document.querySelector('#saveButtonPrefs').setAttribute('display', 'none');
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  subscribetochanges() {
    this.preferencesForm.valueChanges.subscribe(() => {
      if (this.firstTime) {
        this.firstTime = false;
      }
      else {
        this.disableSave.next(true);
      }
      this.getCountOfRishtey();
      console.log('value change event triggered');
    });
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  openUserProfile() {
    this.analyticsEvent('User Clicked My Profile From Chat Drawer');
    this.router.navigateByUrl(`chat/my-profile-new/${this.userId}/${this.userIsLead}`);
  }
  openDiscover() {
    this.analyticsEvent('User Clicked Discover From Chat Drawer');
    this.closeSideNav();
    this.itemService.changeTab(1);
  }

  onImageLoadError() {
    this.userpic = '../../../assets/logo_192.png';
  }
  getRecomendedFilters() {
    let form = new FormData();
    form.append('id', this.userId);
    form.append('is_lead', this.userIsLead);
    this.http.post('https://partner.hansmatrimony.com/api/getRecommendedPreferences', form).subscribe((response: any) => {
      if (response.count) {
        console.log(response);
        this.isWide = true;
        this.countProfiles = response.count;
        this.setCurrentPreferenceValue(response.preference);
      }
    }, (err: any) => {
      console.log('Getting preferences failed');
    });
  }
  getCountOfRishtey() {
    console.log('getCountOfRishtey called');
    let form = new FormData();
    form.append('id', this.userId);
    form.append('is_lead', this.userIsLead);
    form.append('age_min', this.preferencesForm.value.age_min);
    form.append('age_max', this.preferencesForm.value.age_max);
    form.append('height_min', String(48 + this.Heights.indexOf(this.preferencesForm.value.height_min)));
    form.append('height_max', String(48 + this.Heights.indexOf(this.preferencesForm.value.height_max)));
    form.append('income_min', this.preferencesForm.value.income_min);
    form.append('income_max', this.preferencesForm.value.income_max);
    form.append('religion', this.preferencesForm.value.religion);
    form.append('caste', this.preferencesForm.value.caste_pref);
    form.append('food_choice', this.preferencesForm.value.food_choice);
    form.append('manglik', this.preferencesForm.value.manglik_pref);
    form.append('marital_status', this.preferencesForm.value.marital_status);

    this.http.post('https://partner.hansmatrimony.com/api/getCountOfRishtey', form).subscribe((response: any) => {
      if (response.count) {
        this.countProfiles = response.count;
        if (response.count < 5) {
          this.isWide = false;
          this.disableSave.next(true);
        }
        else this.isWide = true;
      }
    }, (err: any) => {
      console.log('Getting count failed');
    })
  }
  getContactedCount() {
    if (localStorage.getItem('count')) {
      let count = JSON.parse(localStorage.getItem('count'));
      return count.contactedCount
    }
    else
      return 0;
  }
  getRejectedCount() {
    if (localStorage.getItem('count')) {
      let count = JSON.parse(localStorage.getItem('count'));
      return count.rejectedCount;
    }
    else
      return 0;
  }
  // this will called only if the user is logged in and will open contacted, rejected etc sections.
  openHistoryProfiles(section: string) {
    if (section.indexOf('contact') !== -1) {
      this.analyticsEvent('User Clicked Contacted From Chat Drawer');
      this.router.navigateByUrl(`chat/history/${section}`);
    } else if (section.indexOf('Received') !== -1) {
      this.itemService.changeTab(2);
      this.analyticsEvent('User Clicked Likes You From Chat Drawer');
    } else if (section.indexOf('Shown') !== -1) {
      this.itemService.changeTab(3);
      this.analyticsEvent('User Clicked Liked By Me From Chat Drawer');
    } else {
      this.analyticsEvent('User Clicked Rejected From Chat Drawer');
      this.router.navigateByUrl(`chat/history/${section}`);
    }
    this.closeSideNav();
  }

  logout() {
    this.analyticsEvent('User Clicked Logout From Chat Drawer');
    let lang = localStorage.getItem('language');
    localStorage.clear();
    localStorage.setItem('language', lang);
    this.drawerReference.toggle();
    // ab home pe redirect karna hai
    this.router.navigate(['/']);
  }
  closeSideNav() {
    this.drawerReference.toggle();
  }
  customerSupport() {
    this.router.navigateByUrl('chat/customer-support/');
  }
  getCallBack() {
    this.router.navigateByUrl('chat/getcallback/');
  }

  setEditIndexPrefs() {
    //this.prefsRef.toggle();
    //document.querySelector('#sidenav').toggle();
    this.itemService.setChangePrefsClicked(true);
  }
  specialCase() {
    if (this.preferenceProfileData && this.preferenceProfileData.caste) {
      this.castePreferences = this.preferenceProfileData.caste.split(',');
    }
  }
  getHeight(num: number) {
    return this.Heights[this.Heights1.indexOf(String(num))];
  }
  onCasteRemoved(topping: string) {
    const toppings = this.castePreferences as string[];
    this.removeFirst(toppings, topping);
    this.searchCaste.setValue(toppings); // To trigger change detection
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  checkAllCastePref(event) {
    console.log(event);
    if (event.checked) {
      this.isAllCastePref = true;
      this.searchCaste.setValue(['All']);
    } else {
      this.isAllCastePref = false;
      this.searchCaste.setValue(['']);
    }
  }
  casteSelectionChanged(event) {
    console.log(event);
    if (event.value.length > this.prevEventLength) {
      this.showSnackBar(`Added Successfully`, '');
      this.searchCasteText.setValue('');
    }
    else if (event.value.length < this.prevEventLength) {
      this.showSnackBar(` Removed Successfully`, '');
    }
    this.prevEventLength = event.value.length;
  }
  showSnackBar(msg: string, action: string) {
    this.snackbar.open(msg, action, {
      duration: 2000,
    });
  }
  setCurrentPreferenceValue(preferences: any) {
    //console.log(this.personalProfileData);
    if (preferences) {
      this.preferencesForm.patchValue({
        food_choice: preferences.food_choice,
        age_min: preferences.age_min,
        age_max: preferences.age_max,
        income_min: preferences.income_min,
        income_max: preferences.income_max,
        caste_pref: preferences.caste,
        manglik_pref: preferences.manglik,
        religion: preferences.religion,
        height_min: this.getHeight(preferences.height_min),
        height_max: this.getHeight(preferences.height_max),
        marital_status: preferences.marital_status,
      });
    }
    else if (this.preferenceProfileData) {
      this.preferencesForm.patchValue({
        food_choice: this.preferenceProfileData.food_choice ? this.preferenceProfileData.food_choice : 'Doesn\'t Matter',
        age_min: this.preferenceProfileData.age_min ? this.preferenceProfileData.age_min : '18',
        age_max: this.preferenceProfileData.age_max ? this.preferenceProfileData.age_max : '70',
        income_min: this.preferenceProfileData.income_min,
        income_max: this.preferenceProfileData.income_max,
        caste_pref: this.preferenceProfileData.caste ? this.preferenceProfileData.caste : 'All',
        manglik_pref: this.preferenceProfileData.manglik ? this.preferenceProfileData.manglik : 'Doesn\'t Matter',
        occupation: this.preferenceProfileData.occupation ? this.preferenceProfileData.occupation : 'Doesn\'t Matter',
        working: (this.preferenceProfileData.working === 'na' || this.preferenceProfileData.working === undefined)
          ? 'Doesn\'t Matter' : this.preferenceProfileData.working,
        religion: this.preferenceProfileData.religion,
        height_min: this.getHeight(this.preferenceProfileData.height_min),
        height_max: this.getHeight(this.preferenceProfileData.height_max),
        marital_status: this.preferenceProfileData.marital_status ? this.preferenceProfileData.marital_status : 'Doesn\'t Matter'
      });
    }
    this.subscribetochanges();
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
    let detailsLeft = [];
    console.log("look Here1");
    console.log(this.personalDetailsLeft);
    console.log(this.familyDetailsLeft);
    console.log(this.personalDetailsList);
    console.log(this.familyDetailsList)
    this.personalDetailsLeft = [];
    for (let v of this.personalDetailsList) {
      if (this.personalProfileData.hasOwnProperty(v)) {
        if (!this.personalProfileData[v] || this.personalProfileData[v] === "null") {
          this.personalDetailsLeft.push(v);
        }
      }
      else {
        this.personalDetailsLeft.push(v);
      }
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
    console.log("look Here2");
    console.log(this.personalDetailsLeft);
    console.log(this.familyDetailsLeft);
    console.log(detailsLeft);
  }
  setProfileCompletion() {
    this.profileCompletionPercent = Math.ceil(((this.totalDetails - this.personalDetailsLeft.length - this.familyDetailsLeft.length) * 100) / (this.totalDetails));
    localStorage.setItem('profileCompPercent', String(this.profileCompletionPercent));
    console.log('profileCompPercent set to ', this.profileCompletionPercent);
  }
  async checkPageThreeDetails() {
    let famDet = 0;
    let perDet = 0;
    let storingObj = {
      'birth_place': null, 'birth_time': null, 'manglik': null, 'food_choice': null, 'occupation_mother': null, 'occupation': null, 'family_income': null,
    }
    let personalDetilsP3 = ['birth_place', 'birth_time', 'manglik', 'food_choice'];
    let familyDetailsP3 = ['occupation_mother', 'occupation', 'family_income'];
    Object.entries(this.personalProfileData).forEach(
      ([key, value]) => {
        if (personalDetilsP3.includes(key)) {
          if ((!value) || value === "null" || value === "") {
            perDet += 1;
          }
          else {
            storingObj[key] = value;
          }
        }
      }
    );
    Object.entries(this.familyProfileData).forEach(
      ([key, value]) => {
        if (familyDetailsP3.includes(key)) {
          if (!value || value == "null" || value === "") {
            famDet += 1;
          }
          else {
            storingObj[key] = value;
          }
        }
      });
    console.log('Checking third page details', perDet + famDet);
    if (perDet + famDet >= 2) {
      localStorage.setItem('storedData', JSON.stringify(storingObj));
    }
    else if (localStorage.getItem('storedData')) {
      localStorage.removeItem('storedData');
    }
  }
  getUserProfileData() {
    if (this.userId || localStorage.getItem('id')) {
      this.spinner.show();
      const myprofileData = new FormData();
      myprofileData.append(
        'id',
        this.userId ? this.userId : localStorage.getItem('id')
      );
      myprofileData.append('contacted', '1');
      myprofileData.append(
        'is_lead',
        this.userIsLead ? this.userIsLead : localStorage.getItem('is_lead')
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
            this.ngxNotificationService.error(
              'Server Time Out, Try Again Later'
            );
            throw new Error('Server Timeout ' + e);
          })
        )
        .subscribe(
          (data: any) => {
            console.log(data.preferences);
            this.preferenceProfileData = data.preferences ? data.preferences : null;
            this.personalProfileData = data.profile ? data.profile : null;
            this.familyProfileData = data.family ? data.family : null;
            this.spinner.hide();
            //setting profile data in chat service for use in popups.
            this.chatService.setProfileData(this.personalProfileData, this.familyProfileData);
            if (data && data.profile) {
              this.gender = data.profile.gender;
            }
            if (this.preferenceProfileData) {
              this.preferenceProfileData.religion = this.preferenceProfileData.religion.split(',');
            }
            if (this.gender === 'Female') {
              if (this.preferenceProfileData.occupation)
                this.preferenceProfileData.occupation = this.preferenceProfileData.occupation.split(",");
              else {
                this.preferenceProfileData.occupation = ['Doesn\'t Matter'];
              }
            }
            if (data.profile.photo) {
              console.log(data.profile.photo);
              this.userpic = 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + String(data.profile.photo);
              this.itemService.setPhotoStatus(true);
            }
            this.setCurrentPreferenceValue(null);
            this.specialCase();
            this.getAllCaste();
            this.setProfileCalculations();
            this.setProfileCompletion();
            this.checkPageThreeDetails();
            setTimeout(() => { this.getCountOfRishtey() }, 2000);
          },
          (error: any) => {
            this.spinner.hide();
            console.log(error);
            this.ngxNotificationService.error('Something Went Wrong');
          }
        );
    } else {
      this.ngxNotificationService.error('No user found');
    }
  }
  onSubmitPreferences() {
    //this.editIndexPrefs = -1;
    console.log('preference Data to update');
    console.log(this.preferenceProfileData);
    console.log(this.preferenceProfileData.religion);
    if (Array.isArray(this.preferenceProfileData.religion))
      this.preferenceProfileData.religion = this.preferenceProfileData.religion.join(',');

    this.preferenceProfileData.caste = this.castePreferences.join(',');

    if (this.gender === "Female" && Array.isArray(this.preferenceProfileData.occupation))
      this.preferenceProfileData.occupation = this.preferenceProfileData.occupation.join(',');

    const newPrefForm = new FormData();
    newPrefForm.append(
      'identity_number',
      this.preferenceProfileData.identity_number
    );
    newPrefForm.append('temple_id', this.preferenceProfileData.temple_id);
    newPrefForm.append('id', this.preferenceProfileData.id);
    newPrefForm.append('caste', this.preferenceProfileData.caste);
    newPrefForm.append('manglik', this.preferencesForm.value.manglik_pref ? this.preferencesForm.value.manglik_pref : this.preferenceProfileData.manglik);
    newPrefForm.append(
      'marital_status', this.preferencesForm.value.marital_status ?
      this.preferencesForm.value.marital_status : this.preferenceProfileData.marital_status
    );
    if (this.gender === 'Male') {
      newPrefForm.append('working', this.preferencesForm.value.working
        ? this.preferencesForm.value.working : this.preferenceProfileData.working);
      newPrefForm.append('occupation', 'na');
    } else {
      newPrefForm.append('occupation', this.preferencesForm.value.occupation
        ? this.preferencesForm.value.occupation : this.preferenceProfileData.occupation);
      newPrefForm.append('working', 'na');
    }
    newPrefForm.append('religion', this.preferenceProfileData.religion);
    newPrefForm.append('food_choice', this.preferencesForm.value.food_choice ?
      this.preferencesForm.value.food_choice : this.preferenceProfileData.food_choice);

    newPrefForm.append('description', this.preferenceProfileData.description);
    newPrefForm.append('income_min', this.preferencesForm.value.income_min ?
      this.preferencesForm.value.income_min : this.preferenceProfileData.income_min);
    newPrefForm.append('income_max', this.preferencesForm.value.income_max ?
      this.preferencesForm.value.income_max : this.preferenceProfileData.income_max);
    newPrefForm.append('height_min', this.Heights1[this.Heights.indexOf(this.preferencesForm.value.height_min)]
      ? this.Heights1[this.Heights.indexOf(this.preferencesForm.value.height_min)]
      : this.preferenceProfileData.height_min);
    newPrefForm.append('height_max', this.Heights1[this.Heights.indexOf(this.preferencesForm.value.height_max)]
      ? this.Heights1[this.Heights.indexOf(this.preferencesForm.value.height_max)]
      : this.preferenceProfileData.height_max);
    newPrefForm.append('age_min', this.preferencesForm.value.age_min ?
      this.preferencesForm.value.age_min : this.preferenceProfileData.age_min);
    newPrefForm.append('age_max', this.preferencesForm.value.age_max ?
      this.preferencesForm.value.age_max : this.preferenceProfileData.age_max);
    newPrefForm.append(
      'mother_tongue',
      this.preferenceProfileData.mother_tongue
    );
    newPrefForm.append('is_lead', localStorage.getItem('is_lead'));
    newPrefForm.append('matchesCount', String(this.countProfiles));
    this.http
      .post(
        'https://partner.hansmatrimony.com/api/updatePreferencesDetails',
        newPrefForm
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log('Preference Details updated successfully');
          this.changed();
          this.sidenav.close();
          this.getUserProfileData();
        },
        (error: any) => {
          console.log(error);
          this.ngxNotificationService.error(
            'Something Went Wrong, Try Again Later'
          );
        }
      );
  }
  getAllCaste() {
    this.http
      .get('https://partner.hansmatrimony.com/api/getAllCaste')
      .subscribe((res: any) => {
        this.getcastes = res;
        // adittion of all to the list of castes
        this.getcastes.push('All');

        // set initial selection
        if (
          this.preferenceProfileData &&
          this.preferenceProfileData.caste &&
          this.preferenceProfileData.caste !== 'null'
        ) {
          let values = [];
          this.preferenceProfileData.caste.split(',').forEach((element) => {
            console.log(element);
            if (this.getcastes.indexOf(element)) {
              values.push(this.getcastes[this.getcastes.indexOf(element)]);
            }
          });
          // if all , check the check box for no caste bar
          if (values.includes('All')) {
            this.isAllCastePref = true;
          }
          this.searchCaste.setValue(values);
        }

        // load the initial bank list
        this.filteredCastesMulti.next(this.getcastes.slice());

        // listen for search field value changes
        this.searchCasteText.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterCasteMulti();
          });
      });
  }
  protected filterCasteMulti() {
    if (!this.getcastes) {
      return;
    }
    // get the search keyword
    let search = this.searchCasteText.value;
    if (!search) {
      this.filteredCastesMulti.next(this.getcastes.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCastesMulti.next(
      this.getcastes.filter((bank) => bank.toLowerCase().indexOf(search) > -1)
    );
  }
  langChanged(event) {
    console.log(event.checked);
    if (event.checked) {
      localStorage.setItem('language', 'english');
      this.languageService.setCurrentLanguage('english');
    } else {
      localStorage.setItem('language', 'hindi');
      this.languageService.setCurrentLanguage('hindi');
    }
  }
  analyticsEvent(event) {
    (window as any).ga('send', 'event', event, '', {
      hitCallback: () => {

        console.log('Tracking ' + event + ' successful');

      }

    });

    // gtag app + web
    (window as any).gtag('event', event, {
      event_callback: () => {
        console.log('Tracking gtag ' + event + ' successful');
      }
    });

  }
  openPreferenceDialog() {
    const dialogConfig = new MatDialogConfig();
    if (this.innerWidth >= 1024) {
      dialogConfig.minWidth = "50vw";
      dialogConfig.maxWidth = "50vw";
    } else {
      dialogConfig.minWidth = "100vw";
    }
    dialogConfig.minHeight = "100vh";
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      preferencesDetails: this.preferenceProfileData,
      editIndex: 100,
    };
    const dialogRef = this.matDialog.open(
      EditPreferenceDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((res) => {
      this.getUserProfileData();
    });
  }
  openSubscriptionOffer() {
    this.analyticsEvent('User Clicked Subscription Offer From Chat Drawer');
    //this.itemService.openTodaysPopupAd();
    this.router.navigateByUrl(`/subscription/${0}`)
  }
}
