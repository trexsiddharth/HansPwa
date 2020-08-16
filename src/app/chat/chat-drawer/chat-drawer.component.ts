import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { MatSidenav, MatSelect, MatSnackBar, MatDialogConfig, MatDialog } from '@angular/material';
import { LanguageService } from 'src/app/language.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { timeout, retry, catchError, takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { EditPreferenceDialogComponent } from '../myprofile/edit-preference-dialog/edit-preference-dialog.component';

@Component({
  selector: 'app-chat-drawer',
  templateUrl: './chat-drawer.component.html',
  styleUrls: ['./chat-drawer.component.css']
})
export class ChatDrawerComponent implements OnInit {
  @Input() drawerReference: MatSidenav;
  username;
  userpic = '../../../assets/logo_192.png';
  userId;
  userIsLead;
  langCheck;
  currentLanguage;
  gender: string;
  preferenceProfileData: any;
  preferencesForm: FormGroup;
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
      income_max: [''],
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
  getcastes: any = [];
  searchedCaste = '';
  searchCaste = new FormControl();
  searchCasteText = new FormControl();
  isAllCastePref = false;

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
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.languageService.setProfileLanguage();
    this.currentLanguage = localStorage.getItem('language');
    // set already selected language in toggle
    if (localStorage.getItem('language') === 'hindi') {
      this.langCheck = false;
    } else {
      this.langCheck = true;
    }

    // user authorized
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
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
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
  editIndexPrefs = -1;
  setEditIndexPrefs() {
    this.editIndexPrefs = 0;
  }
  castePreferences: string[] = [];
  specialCase() {
    this.castePreferences = this.preferenceProfileData.caste.split(',');
    this.itemService.setChangePrefsClicked(true);
  }
  getHeight(num: number) {
    return this.Heights[this.Heights1.indexOf(String(num))];
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
  prevEventLength: number = 0;
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
  setCurrentPreferenceValue() {
    //console.log(this.personalProfileData);
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
            console.log(data.preference);
            this.preferenceProfileData = data.preferences ? data.preferences : null;
            this.spinner.hide();
            this.gender = data.profile.gender;
            this.preferenceProfileData.religion = this.preferenceProfileData.religion.split(",");
            if (this.gender === "Female") {
              if (this.preferenceProfileData.occupation)
                this.preferenceProfileData.occupation = this.preferenceProfileData.occupation.split(",");
              else {
                this.preferenceProfileData.occupation = ['Doesn\'t Matter'];
              }
            }
            this.setCurrentPreferenceValue();
            this.getAllCaste();
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
    this.editIndexPrefs = -1;
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

    this.http
      .post(
        'https://partner.hansmatrimony.com/api/updatePreferencesDetails',
        newPrefForm
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log('Preference Details updated successfully');
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
    this.itemService.openTodaysPopupAd();
  }
}
