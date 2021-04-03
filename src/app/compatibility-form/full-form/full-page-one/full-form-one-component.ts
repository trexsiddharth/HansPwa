
import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  NgxNotificationService
} from 'ngx-kc-notification';

import {
  Router, ActivatedRoute
} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationsService } from '../../../notifications.service';
import { Profile } from '../../profile';

import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/';
import { Observable, timer, Subject, of, ReplaySubject } from 'rxjs';
import { startWith, map, timeout, retry, catchError, switchMap, share, takeUntil } from 'rxjs/operators';
import { FourPageService } from '../../four-page.service';
import { FormsMessageDialogComponent } from '../../forms-message-dialog/forms-message-dialog.component';
import { LanguageService } from '../../../language.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { VerifyOtpComponent } from '../../../verify-otp/verify-otp.component';
import { RegisterWithComponent } from '../../register-with/register-with.component';
export interface StateGroup {
  letter: string;
  names: string[];
}
export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-full-form-one',
  templateUrl: './full-form-one-component.html',
  styleUrls: ['./full-form-one-component.css']
})


export class FullFormOneComponent implements OnInit, OnDestroy {

  time = {
    hour: 13,
    minute: 30
  };
  gender;
  MaritalStatus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorcee', 'Widowed', 'Anulled'];
  createProfile: string[] = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
  PageOne: FormGroup;
  PageTwo: FormGroup;

  // birth date
  birthDate: any;
  currentAge: number;
  birthdayValid;
  startDate = new Date(1985, 0, 1);

  // Religion and Caste
  Religions: string[] = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Bahai'];
  casteo: Observable<string[]>;
  getcastes: any = [];
  Caste = false;
  AllCastes = false;
  profileData;
  isLeadIsZero = false;

  // Height
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4 feet', '4 feet 1 inches', '4 feet 2 inches', '4 feet 3 inches', '4 feet 4 inches', '4 feet 5 inches', '4 feet 6 inches', '4 feet 7 inches', '4 feet 8 inches', '4 feet 9 inches', '4 feet 10 inches', '4 feet 11 inches', '5 feet', '5 feet 1 inches', '5 feet 2 inches', '5 feet 3 inches', '5 feet 4 inches', '5 feet 5 inches', '5 feet 6 inches', '5 feet 7 inches', '5 feet 8 inches', '5 feet 9 inches', '5 feet 10 inches', '5 feet 11 inches', '6 feet', '6 feet 1 inches', '6 feet 2 inches', '6 feet 3 inches', '6 feet 4 inches', '6 feet 5 inches', '6 feet 6 inches', '6 feet 7 inches', '6 feet 8 inches', '6 feet 9 inches', '6 feet 10 inches', '6 feet 11 inches', '7 feet'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  changeNumber = false;
  // tslint:disable-next-line: max-line-length
  date: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  // tslint:disable-next-line: max-line-length
  month: string[] = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: string[] = [
    '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980',
    '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
    '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
    '2001', '2002'
  ];
  errors: string[] = [];
  authMobileNumberStatus = false;
  locationFamily;
  formTwo = false;
  formThree = false;
  formFour = false;
  formFive = false;
  userProfile: Profile = new Profile();
  isLinear = true;
  lat;
  long;
  isDisable = false;
  isAllCastePref = false;

  // stop true caller polling
  stopPolling = new Subject();
  pollingCount = 0;
  hideMobileNumber = false;

  authData;
  private fetchedFbProfilePic = null;

  private alreadyExists = false;

  /** list of designation filtered by search keyword for option groups */
  public filteredCastes: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected onDestroy = new Subject<void>();

  userFromFranchise = false;
  freeUserFromFranchise = false;

  constructor(private http: HttpClient, public dialog: MatDialog,
              private _formBuilder: FormBuilder,
              private router: Router,
              public notification: NotificationsService,
              public fourPageService: FourPageService,
              private matDialog: MatDialog,
              private breakPointObserver: BreakpointObserver,
              public languageService: LanguageService,
              private route: ActivatedRoute,
              private ngxNotificationService: NgxNotificationService,
              private spinner: NgxSpinnerService) {

    this.PageOne = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      firstName: ['', Validators.compose([Validators.required])],
      lastName: [''],
      phone: [localStorage.getItem('RegisterNumber')
        , Validators.compose([Validators.required, Validators.max(9999999999999), Validators.pattern('(0/91)?[6-9][0-9]{9}')])],
      email: [''],
      Relation: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      birth_date: ['01', Validators.compose([Validators.required])],
      birth_month: ['January', Validators.compose([Validators.required])],
      birth_year: ['1980', Validators.compose([Validators.required])],
      Height: ['', Validators.compose([Validators.required])],
      Weight: [''],
      MaritalStatus: ['', Validators.compose([Validators.required])],
      Religion: ['', Validators.compose([Validators.required])],
      Castes: ['', Validators.compose([Validators.required])],
      CasteCtrl: (null),
      disabledPart: ['']
    });
  }

  ngOnDestroy(): void {
    // truecaller polling is active and user closes the page.
    this.stopPolling.next();
    // destroy search for caste
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  async ngOnInit() {
    localStorage.clear();
    this.languageService.setRegisterLang();

    this.fourPageService.formCompleted.subscribe(
      (complete: boolean) => {
        if (complete === true) {
          this.formTwo = true;
        }
      }
    );
    this.fourPageService.formTwoGroup.subscribe(
      (formGroup) => {
        console.log(formGroup);
        if (formGroup) {
          console.log(formGroup);
          this.PageTwo = formGroup;
        }
      }
    );
    this.fourPageService.form3Completed.subscribe(
      (complete: boolean) => {
        if (complete === true) {
          this.formThree = true;
        }
      }
    );
    this.fourPageService.form4Completed.subscribe(
      (complete: boolean) => {
        if (complete === true) {
          this.formFour = true;
          console.log('formFour', this.formFour);
        }
      }
    );
    this.fourPageService.form4Completed.subscribe(
      (complete: boolean) => {
        if (complete === true) {
          this.formFive = true;
          console.log('formFive', this.formFive);
        }
      }
    );

    // get all castes before get the data of the profile
    await this.getAllCaste();
    this.route.paramMap.subscribe(
      async (route: any) => {
        console.log(route.params);
        if (route) {
          if (route.params.franchise_id 
            && route.params.mobile 
            && route.params.plan_id
            && route.params.amount) {
              this.userFromFranchise =  true;
              localStorage.setItem('franchiseRegistration', 'true');
              this.PageOne.controls.phone.setValue(route.params.mobile);
              localStorage.setItem('RegisterNumber', route.params.mobile);
              this.fourPageService.saveFranchiseData(route.params.franchise_id, route.params.mobile , 
                route.params.plan_id
                ,route.params.amount);
          } else if (route.params.type === 'free' ) { // for franchise free registration
            this.freeUserFromFranchise = true;
            localStorage.setItem('franchiseRegistration', 'true');
            localStorage.setItem('franchiseType', 'free');
          }

          
        }

        // when user comes from app to webview four page reg
        if (route.params.appMobile) {
          this.PageOne.patchValue({
            phone: route.params.appMobile
          });
        }
      }
    );

    this.spinner.hide();
    localStorage.setItem('id', '');
    localStorage.setItem('gender', '');
    localStorage.setItem('mobile_number', '');
    localStorage.setItem('selectedCaste', '');

    if (this.fourPageService.getUserThrough()) {
      this.openMessageDialog();
    }

    console.log(this.isLinear);

  }

  protected filterCastes() {
    if (!this.getcastes) {
      return;
    }
    // get the search keyword
    let search = this.PageOne.controls.CasteCtrl.value;
    if (!search) {
      this.filteredCastes.next(this.getcastes.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    const casteResults = this.getcastes.filter(bank => bank.toLowerCase().indexOf(search) > -1);
    if (casteResults.length !== 0) {
      this.filteredCastes.next(casteResults);
    }
    // else {
    //   this.filteredCastes.next(this.getcastes.filter(bank => bank.toLowerCase().indexOf('other') > -1));
    // }
  }

  // event on change of input field
  inputFieldChanged(fieldName) {
    console.log(`${fieldName} changed`, this.PageOne.value[fieldName]);
    switch (fieldName) {
      case 'email':
        this.analyticsEvent('Four Page Registration Page One Email Changed');
        break;
      case 'Weight':
        this.analyticsEvent('Four Page Registration Page One Weight Changed');
        break;
      case 'firstName':
        this.analyticsEvent('Four Page Registration Page One First Name Changed');
        break;
      case 'lastName':
        this.analyticsEvent('Four Page Registration Page One Last Name Changed');
        break;

      default:
        break;
    }
  }
  // event on change of select field
  selectFieldChange(fieldName) {
    console.log(`${fieldName} changed`, this.PageOne.value[fieldName]);
    switch (fieldName) {
      case 'birth_date':
        this.analyticsEvent('Four Page Registration Page One Birth Date Changed');
        break;
      case 'birth_month':
        this.analyticsEvent('Four Page Registration Page One Birth Month Changed');
        break;
      case 'birth_year':
        this.analyticsEvent('Four Page Registration Page One Birth Year Changed');
        break;
      case 'gender':
        this.analyticsEvent('Four Page Registration Page One Gender Changed');
        break;
      case 'Height':
        this.analyticsEvent('Four Page Registration Page One Height Changed');
        break;
      case 'MaritalStatus':
        this.analyticsEvent('Four Page Registration Page One Marital Status Changed');
        break;
      case 'Castes':
        this.analyticsEvent('Four Page Registration Page One Caste Changed');
        break;

      default:
        break;
    }
  }


  // 0 -> new User/not registered, 1-> Registered , 2-> Partially Registered User
  mobileNumberChanged() {
    if (localStorage.getItem('getListId') === null || localStorage.getItem('getListId') === '') {
      const number = this.PageOne.value.phone;
      console.log(number);
      console.log(this.authMobileNumberStatus);
      // tslint:disable-next-line: max-line-length
      this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', { params: { ['phone_number']: number, ['fcm_id']: this.notification.getCurrentToken() } }).subscribe(res => {
        console.log(res);
        if (res) {
          this.authData = res;
          if (res.registered === 1) {
            this.ngxNotificationService.success('Already Registered');
            if (this.pollingCount > 0) {
              localStorage.setItem('authData', JSON.stringify(res));
              localStorage.setItem('mobile_number', this.PageOne.value.phone);
              localStorage.setItem('is_lead', res.is_lead);
              localStorage.setItem('id', res.id);
              this.router.navigateByUrl('chat');
            } else {
              this.alreadyExists = true;
              this.openVerificationDialog(res.is_lead);
            }
            this.spinner.show();
          } else if (res.registered === 2) {
            localStorage.setItem('RegisterNumber', number);
            this.ngxNotificationService.info('Please complete the form and update');
            this.analyticsEvent('Four Page Registration Page One Mobile Number Changed');
          } else {
            localStorage.setItem('RegisterNumber', number);
            // signifies that new user has entered his mobile number.
            this.analyticsEvent('Four Page Registration Page Zero');
            console.log('New User');
            this.analyticsEvent('Four Page Registration Page One Mobile Number Changed');

            // gtag app + web
            (window as any).gtag('config', 'G-1ES443XD0F', {
              user_id: number
            });
          }
        }
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
        console.log(err);
      });
    }
  }

  openVerificationDialog(isLead: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.maxWidth = '30vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        }
      }
    );

    dialogConfig.data = {
      mobile: this.PageOne.value.phone,
      is_lead: isLead
    };
    const dialogRef = this.dialog.open(VerifyOtpComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          if (data.success === 'verified') {
            localStorage.setItem('mobile_number', this.PageOne.value.phone);
            localStorage.setItem('is_lead', data.is_lead);
            if (this.authData) {
              localStorage.setItem('authData', JSON.stringify(this.authData));
              localStorage.setItem('id', this.authData.id);
            }
            this.router.navigateByUrl('chat');
          } else { return; }
        }
      }
    );
  }

  getAllCaste() {
    return new Promise((res, rej) => {

      this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
        this.getcastes = [...res, 'All'];
        this.fourPageService.setAllCastes(this.getcastes);
        if (this.getcastes) {
          // load the initial caste list
          this.filteredCastes.next((this.getcastes as string[]).slice(0, 100));

          // listen for search field value changes
          this.PageOne.controls.CasteCtrl.valueChanges
            .pipe(takeUntil(this.onDestroy))
            .subscribe(() => {
              this.filterCastes();
            });
        }
      });
      if (this.PageOne.get('Castes').value && this.PageOne.get('Castes').value !== '') {
        this.casteo = this.PageOne.get('Castes').valueChanges.pipe(
          startWith(''),
          map(value => this._Castefilter(value))
        );
      } else {
        this.PageOne.patchValue({
          Castes: ''
        });
        this.casteo = this.PageOne.get('Castes').valueChanges.pipe(
          startWith(''),
          map(value => this._Castefilter(value))
        );
      }

      res(this.getcastes);
    });
  }

  setNewFormGroup() {
    if (localStorage.getItem('getListId') || localStorage.getItem('getListMobile')) {
      this.PageOne = this._formBuilder.group({
        // tslint:disable-next-line: max-line-length
        firstName: [''],
        lastName: [''],
        phone: ['', Validators.compose([Validators.max(9999999999999), Validators.pattern('(0/91)?[6-9][0-9]{9}')])],
        email: [''],
        Relation: ['', Validators.compose([Validators.required])],
        gender: ['', Validators.compose([Validators.required])],
        birth_date: ['01', Validators.compose([Validators.required])],
        birth_month: ['January', Validators.compose([Validators.required])],
        birth_year: ['1980', Validators.compose([Validators.required])],
        Height: ['', Validators.compose([Validators.required])],
        Weight: ['', Validators.compose([Validators.required, Validators.min(30), Validators.max(150)])],
        MaritalStatus: ['', Validators.compose([Validators.required])],
        Religion: ['', Validators.compose([Validators.required])],
        Castes: ['', Validators.compose([Validators.required])],
        CasteCtrl: (null),
        disabledPart: ['']
      });
    }
  }


  firstStep() {

    if (this.alreadyExists === true) {
      this.openVerificationDialog(this.authData.is_lead);
      return;
    }


    console.log(this.PageOne.value.email);
    this.errors = [];
    console.log('date', this.PageOne.value.birth_date);
    console.log('month', this.month.indexOf(this.PageOne.value.birth_month) + 1);
    console.log('year', this.PageOne.value.birth_year);


    if (this.PageOne.value.phone &&
      this.PageOne.value.phone.toString().length < 10 ||
      this.PageOne.value.phone.toString().length > 13
      || this.PageOne.value.phone.invalid) {
      console.log(this.PageOne.value.phone);
      this.ngxNotificationService.error('Enter A Valid Mobile Number');
      return;
    }

    console.log(this.PageOne.value);
    if (this.PageOne.valid) {
      const date = this.PageOne.value.birth_date;
      const month = this.month.indexOf(this.PageOne.value.birth_month) + 1;
      const year = this.PageOne.value.birth_year;
      console.log(date + '-' + month + '-' + year);
      const firststepdata = new FormData();
      firststepdata.append('mobile', this.PageOne.value.phone);
      if (localStorage.getItem('getListLeadId') && localStorage.getItem('getListLeadId') !== '1') {
        firststepdata.append('id', localStorage.getItem('getListId'));
        firststepdata.append('identity_number', this.profileData.profile.identity_number);
        firststepdata.append('temple_id', this.profileData.profile.temple_id);
        firststepdata.append('birth_date', year + '-' + month + '-' + date);
      } else {
        firststepdata.append('birth_date', date + '-' + month + '-' + year);
      }
      firststepdata.append('name', `${this.PageOne.value.firstName} ${this.PageOne.value.lastName ?
        this.PageOne.value.lastName : ''}`);
      firststepdata.append('email', this.PageOne.value.email);

      // son -> mother and daughter -> father rest -> same
      if (this.PageOne.value.Relation === 'Son') {
        firststepdata.append('relation', 'Mother');
      } else if (this.PageOne.value.Relation === 'Daughter') {
        firststepdata.append('relation', 'Father');
      } else {
        firststepdata.append('relation', this.PageOne.value.Relation);
      }
      firststepdata.append('gender', this.PageOne.value.gender);
      firststepdata.append('height', this.Heights1[this.PageOne.value.Height]);

      if (this.PageOne.value.Weight) {
        firststepdata.append('weight', this.PageOne.value.Weight);
      }

      firststepdata.append('marital_status', this.PageOne.value.MaritalStatus);

      firststepdata.append('religion', this.PageOne.value.Religion);
      firststepdata.append('caste', this.PageOne.value.Castes);
      firststepdata.append('disability', this.isDisable ? 'yes' : null);
      firststepdata.append('disabled_part', this.PageOne.value.disabledPart);


      this.lat ? firststepdata.append('lat', this.lat)
        : firststepdata.append('lat', '');

      this.long ? firststepdata.append('long', this.long)
        : firststepdata.append('long', '');

      // if url with enqData : mode -> 3 , if with id: mode -> 2 if only with fourReg : mode -> 1
      firststepdata.append('mode', localStorage.getItem('enqDate') ? '3'
        : localStorage.getItem('getListId') ? '2' : '1');

      console.log('mobile', this.PageOne.value.phone);
      console.log('birth_date', this.birthDate);
      console.log('gender', this.PageOne.value.gender);
      console.log('height', this.Heights1[this.PageOne.value.Height]);
      console.log('marital_status', this.PageOne.value.MaritalStatus);
      console.log('religion', this.PageOne.value.Religion);
      console.log('caste', this.PageOne.value.Castes);


      if (localStorage.getItem('getListLeadId') && localStorage.getItem('getListLeadId') === '0') {

        // tslint:disable-next-line: max-line-length
        return this.http.post('https://partner.hansmatrimony.com/api/updatePersonalDetails', firststepdata).subscribe(
          (res: any) => {
            console.log('first', res);
            this.spinner.hide();
          }, err => {
            this.spinner.hide();
            this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
            console.log(err);
          });
      } else {
        // tslint:disable-next-line: max-line-length
        return this.http.post('https://partner.hansmatrimony.com/api/updateBasic', firststepdata).subscribe((res: any) => {
          console.log('first', res);

          if (res.status === 1) {
            this.spinner.hide();
            localStorage.setItem('id', res.id);
            localStorage.setItem('gender', this.PageOne.value.gender);
            localStorage.setItem('mobile_number', this.PageOne.value.phone);

            // if facebook profile pic is fetched
            if (this.fetchedFbProfilePic) {
              setTimeout(() => {
                this.fourPageService.facebookProfilePicUploaded.emit(this.fetchedFbProfilePic);
              }, 200);
            }

            this.fourPageService.updateFormOneData(firststepdata);
            this.analyticsEvent('Four Page Registration Page One');

          } else {
            this.spinner.hide();
            this.ngxNotificationService.error(res.message);
          }
        }, err => {
          this.spinner.hide();
          this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
          console.log(err);
        });
      }
    } else {
      // tslint:disable-next-line: forin
      for (const control in this.PageOne.controls) {
        console.log(control);
        if (!this.PageOne.controls[control].valid) {
          this.errors.push(control);
        }
      }
      if (this.errors[0]) {
        this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
      }
    }
  }

  private _Castefilter(value: string): string[] {
    if (value != null) {
      const filterValue = value.toLowerCase();
      return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
    } else {
      const filterValue = 'arora';
      return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
    }
  }

  analyticsEvent(event) {
    if (!this.fourPageService.getUserThrough()) {
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

  }




  onDate(event): void {
    console.log(event);
  }

  // Calucalting age
  calculateAge(event: any) {
    this.birthDate = convert(event);
    const timediffernce = Math.abs(Date.now() - event);
    this.currentAge = Math.floor((timediffernce / (1000 * 3600 * 24)) / 365);

    localStorage.setItem('currentAge', this.currentAge.toString());

    function convert(str) {
      // tslint:disable-next-line: one-variable-per-declaration
      const date = new Date(str),
        mnth = ('0' + (date.getMonth() + 1)).slice(-2),
        day = ('0' + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join('/');

    }
    this.addSlashes();

    if (this.currentAge < 18) {
      this.birthdayValid = false;
    } else {
      this.birthdayValid = true;
    }

    console.log('birth data', this.birthDate);
    console.log('event data', event);
    console.log(typeof event);

  }

  addSlashes() {
    console.log('sv');
    const newInput = document.getElementById('birthDate');
    newInput.addEventListener('keydown', function(e) {
      if (e.which !== 8) {
        const numChars = (e.target as HTMLInputElement).value.length;
        if (numChars === 2 || numChars === 5) {
          let thisVal = (e.target as HTMLInputElement).value;
          thisVal += '-';
          (e.target as HTMLInputElement).value = thisVal;
        }
      }
    });
  }
  datePickerClicked() {
    document.querySelector<HTMLElement>('.mat-icon-button').click();
  }

  // Religion
  Religion(event) {
    console.log(event.value);
    this.analyticsEvent('Four Page Registration Page One Religion Changed');
    if (event.value === 'Hindu') {
      this.Caste = true;
    } else {
      this.Caste = false;
      this.PageOne.patchValue({
        Castes: 'All'
      });
    }
  }

  setGender() {
    console.log(this.PageOne.value.Relation);
    this.analyticsEvent('Four Page Registration Page One Looking Rista For Changed');
    this.analyticsEvent('Four Page Registration Page One Gender Changed');
    // this.openRegisterWith(this.PageOne.value.Relation);
    switch (this.PageOne.value.Relation) {
      case 'Brother':
        this.PageOne.patchValue(
          {
            gender: 'Male'
          });
        break;

      case 'Sister':
        this.PageOne.patchValue(
          {
            gender: 'Female'
          });
        break;

      case 'Son':
        this.PageOne.patchValue(
          {
            gender: 'Male'
          });
        break;

      case 'Daughter':
        this.PageOne.patchValue(
          {
            gender: 'Female'
          });
        break;

      default:
        break;
    }
  }


  getProfile() {
    this.spinner.show();
    const leadId = localStorage.getItem('getListLeadId');
    const id = localStorage.getItem('getListId');
    console.log(id, leadId);
    const myprofileData = new FormData();
    myprofileData.append('id', id);
    myprofileData.append('contacted', '1');
    myprofileData.append('is_lead', leadId);

    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', myprofileData).pipe(timeout(7000), retry(2), catchError(e => {
      throw new Error('Server Timeout ' + e);
    })).subscribe(
      (data: any) => {
        console.log(data);
        this.profileData = data;
        if (this.fourPageService.userThroughGetList) {
          this.setProfileValues(data);
        }
        this.spinner.hide();
      },
      (error: any) => {
        this.spinner.hide();
        console.log(error);
        this.ngxNotificationService.error('Something Went Wrong');
      }
    );
  }
  getProfilePhoto(carous: any, index: string): string {
    if (carous && carous !== '' && carous !== 'null') {
      const carousel: object = JSON.parse(carous);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      if (carousel[keys[index]]) {
        return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
      }
    }
  }
  // #IMPORTANT
  // setting getProfiles to our variables so that we can also update these values and check in the last page
  setProfileValues(profileData) {
    if (!localStorage.getItem('getListId') && !localStorage.getItem('getListMobile')) {
      localStorage.setItem('getListTempleId', profileData.profile.temple_id);
    }
    this.userProfile.name = profileData.profile.name;
    this.userProfile.mobile = profileData.family.mobile;

    localStorage.setItem('getListMobile', profileData.family.mobile ? profileData.family.mobile : '');

    this.userProfile.email = profileData.family.email;

    if (profileData.family.relation === 'Mother') {
      this.userProfile.relation = 'Son';
    } else if (profileData.family.relation === 'Father') {
      this.userProfile.relation = 'Daughter';
    } else {
      this.userProfile.relation = profileData.family.relation;
    }

    this.userProfile.gender = profileData.profile.gender;
    this.userProfile.dob = profileData.profile.birth_date;
    this.userProfile.height = profileData.profile.height;
    this.userProfile.weight = profileData.profile.weight;
    this.userProfile.martialStatus = profileData.profile.marital_status;
    this.userProfile.annualIncome = profileData.profile.monthly_income;
    if (profileData.family.religion) {
      this.Caste = true;
    }
    this.userProfile.religion = profileData.family.religion;
    this.userProfile.caste = profileData.family.caste;
    this.userProfile.manglik = profileData.profile.manglik;
    this.userProfile.locality = profileData.family.locality;
    this.userProfile.qualification = profileData.profile.degree;
    this.userProfile.occupation = profileData.profile.occupation;
    this.userProfile.designation = profileData.profile.profession;
    this.userProfile.workingCity = profileData.profile.working_city;
    this.userProfile.about = profileData.profile.about;
    this.userProfile.birthPlace = profileData.profile.birth_place;
    this.userProfile.birthTime = profileData.profile.birth_time;
    this.userProfile.gotra = profileData.family.gotra;
    this.userProfile.foodChoice = profileData.profile.food_choice;
    this.userProfile.fatherStatus = profileData.family.father_status;
    this.userProfile.motherStatus = profileData.family.mother_status;
    this.userProfile.familyIncome = profileData.family.family_income;
    this.userProfile.image1 = this.getProfilePhoto(profileData.profile.carousel, '0');
    this.userProfile.image2 = this.getProfilePhoto(profileData.profile.carousel, '1');
    this.userProfile.image3 = this.getProfilePhoto(profileData.profile.carousel, '2');
    this.userProfile.company = profileData.profile.company;
    this.userProfile.college = profileData.profile.college;
    this.userProfile.family = profileData.family;

    console.log(this.userProfile);
    this.fourPageService.setProfile(this.userProfile);
    this.fourPageService.getListData.emit(true);
    this.setFormOneData();
  }

  setFormOneData() {
    this.PageOne.patchValue({
      firstName: this.userProfile.name ? this.userProfile.name.split(' ')[0] : '',
      lastName: this.userProfile.name ? this.userProfile.name.split(' ')[1] ?
        this.userProfile.name.split(' ')[1] : '' : '',
      phone: this.userProfile.mobile,
      email: this.userProfile.email,
      Relation: this.userProfile.relation,
      gender: this.userProfile.gender,
      birth_date: this.userProfile.dob ? this.userProfile.dob.toString().split('-')[2] : '',
      birth_month: this.userProfile.dob ? this.getMonthString(this.userProfile.dob.toString().split('-')[1]) : '',
      birth_year: this.userProfile.dob ? this.years[this.years.indexOf(this.userProfile.dob.toString().split('-')[0])] : '',
      Height: this.userProfile.height ? this.Heights1.indexOf(this.userProfile.height) : '',
      Weight: this.userProfile.weight,
      MaritalStatus: this.userProfile.martialStatus,
      Religion: this.userProfile.religion,
      Castes: this.userProfile.caste,
    });
  }
  getMonthString(month: string) {
    switch (month) {
      case '01':
        return 'January';
      case '02':
        return 'Feburary';
      case '03':
        return 'March';
      case '04':
        return 'April';
      case '05':
        return 'May';
      case '06':
        return 'June';
      case '07':
        return 'July';
      case '08':
        return 'August';
      case '09':
        return 'September';
      case '10':
        return 'October';
      case '11':
        return 'November';
      case '12':
        return 'December';
      default:
        break;
    }
  }

  openMessageDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '80vw';
    dialogConfig.maxHeight = '80vh';

    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    const dialogRef = this.matDialog.open(FormsMessageDialogComponent, dialogConfig);
  }

  checkDisable(event) {
    console.log(event.checked);
    this.isDisable = event.checked;
  }
  checkAllCastePref(event) {
    console.log(event.checked);
    this.isAllCastePref = event.checked;
  }

  // show register with popup
  openRegisterWith(selection) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.minWidth = '40vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = true;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '95vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = true;
        }
      }
    );
    dialogConfig.data = {
      value: selection
    };
    const dialogRef = this.dialog.open(RegisterWithComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      (response) => {
        console.log(response);
        if (response) {
          if (response.chose === 'facebook') {
            this.analyticsEvent('Registered Through Facebook');
            (window as any).FB.getLoginStatus((response) => {   // Called after the JS SDK has been initialized.
              this.statusChangeCallback(response);        // Returns the login status.
            });
          } else if (response.chose === 'truecaller') {
            this.analyticsEvent('Registered Through True Caller');
            this.callTruecaller();
          }
        }
      }
    );
  }

  //  get facebook login status
  statusChangeCallback(value) {
    console.log(value);
    if (value.status === 'connected') {
      localStorage.setItem('fb_token', value.authResponse.accessToken);
      this.getFbData();
    } else {
      (window as any).FB.login((response) => {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          this.getFbData();
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      }, { scope: 'email, public_profile, user_photos, user_gender,user_birthday, user_hometown, user_location' });
    }
  }

  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  getFbData() {
    console.log('Welcome!  Fetching your information.... ');

    // fetch user image
    (window as any).FB.api('/me/picture',
      'GET',
      { height: '600', width: '400', redirect: 'false' }, (response) => {
        console.log(response.data.url);
        if (response.data.url) {
          this.fetchedFbProfilePic = response.data.url;
        }
      });

    // fetch user data
    (window as any).FB.api('/me',
      'GET',
      { fields: 'email, address, first_name, gender, last_name, birthday, hometown,location' }, (response) => {
        console.log(response);
        this.spinner.hide();
        this.PageOne.patchValue({
          firstName: response.first_name ? response.first_name : '',
          lastName: response.last_name ? response.last_name : '',
          email: response.email ? response.email : '',
          gender: response.gender ? this.toTitleCase(response.gender) : '',
          birth_date: response.birthday ? response.birthday.split('/')[1] : '',
          birth_month: response.birthday ? this.getMonthString(response.birthday.split('/')[0]) : '',
          birth_year: response.birthday ? response.birthday.split('/')[2] : ''
        });
        // set home town in birth place
        if (response.hometown && response.hometown.name) {
          this.fourPageService.facebookHomeTownUpdated.emit(response.hometown.name);
        }
        // set home town in birth place
        if (response.location && response.location.name) {
          this.fourPageService.facebookLocationUpdated.emit(response.location.name);
        }
        // to solve the overlapping issue for new user
        (document.querySelector('#firstName') as HTMLInputElement).focus();
      });
  }

  toTitleCase(str) {
    if (str) {
      return str.replace(
        /\w\S*/g,
        (txt) => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    } else {
      return '';
    }
  }

  callTruecaller() {
    // tslint:disable-next-line: max-line-length
    const randomNumber = Math.floor(Math.random() * 100000000) + 1000000;
    (window as any).location = `truecallersdk://truesdk/web_verify?requestNonce=${randomNumber}&partnerKey=0Jsfr258a371a13bd4fbf905228721f9fa2c2&partnerName=Hans Matrimony&lang=en&title=Login&skipOption=USE ANOTHER MOBILE NUMBER`;

    setTimeout(() => {

      if (document.hasFocus()) {
        // Truecaller app not present on the device and you redirect the user
        // to your alternate verification page
      } else {
        this.getUserFromTrueCaller(randomNumber).pipe(
          catchError(e => {
            throw new Error('True Caller Not Responding');
          })
        )
          .subscribe(
            (response) => {
              this.pollingCount++;
              console.log(response);
              if (this.pollingCount < 10) {
                if (response.status === 1) {
                  const data = JSON.parse(response.data);
                  if (data) {
                    this.setTruecallerData(data);
                  }
                  this.stopPolling.next();
                } else if (response.status !== 0) {
                  this.ngxNotificationService.error('True Caller Not Responding');
                  this.stopPolling.next();
                }
              } else {
                this.stopPolling.next();
              }
            },
            err => {
              this.ngxNotificationService.error('True Caller Not Responding');
              console.log(err);
              this.stopPolling.next();
            }
          );
        // Truecaller app present on the device and the profile overlay opens
        // The user clicks on verify & you'll receive the user's access token to fetch the profile on your
        // callback URL - post which, you can refresh the session at your frontend and complete the user  verification
      }
    }, 600);
  }

  getUserFromTrueCaller(requestId): Observable<any> {
    return timer(1, 3000).pipe(
      switchMap(() => this.http.get(`https://partner.hansmatrimony.com/api/getTrueCallerResponse?requestId=${requestId}`)),
      retry(),
      share(),
      takeUntil(this.stopPolling)
    );
  }

  setTruecallerData(data) {
    this.PageOne.patchValue({
      firstName: data.name.first,
      lastName: data.name.last,
      email: data.onlineIdentities.email,
      phone: data.phoneNumbers[0]
    });

    if (data.phoneNumbers && data.phoneNumbers[0]) {
      this.hideMobileNumber = true;
      this.mobileNumberChanged();
    } else {
      this.hideMobileNumber = false;
    }

    this.fourPageService.facebookProfilePicUploaded.emit(data.avatarUrl);
  }


}


