
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
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
import {  NotificationsService } from '../notifications.service';
import { Profile } from './profile';

import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/';
import { Observable } from 'rxjs';
import { startWith, map, timeout, retry, catchError } from 'rxjs/operators';
import { element } from 'protractor';
import { FourPageService } from './four-page.service';
import { FormsMessageDialogComponent } from './forms-message-dialog/forms-message-dialog.component';
import { LanguageService } from '../language.service';
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
  selector: 'app-compatibility-form',
  templateUrl: './compatibility-form.component.html',
  styleUrls: ['./compatibility-form.component.css']
})


export class CompatibilityFormComponent implements OnInit {
  @ViewChild('otpModal', {static: false}) private otpModal: any;

  time = {
    hour: 13,
    minute: 30
  };
  gender;
  MaritalStatus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorcee', 'Widowed', 'Anulled'];
  createProfile: string[] = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
  PageOne: FormGroup;

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
  locality;
  profileData;
  isLeadIsZero = false;


  // Height
    // tslint:disable-next-line: max-line-length
    Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
    // tslint:disable-next-line: max-line-length
    Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  numberCheck: string = localStorage.getItem('RegisterNumber');
  changeNumber = false;
  // tslint:disable-next-line: max-line-length
  date: string[] = ['01', '02' , '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
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
  userProfile: Profile = new Profile();
  isLinear = true;
  lat;
  long;
  isDisable = false;
  isAllCastePref = false;


  constructor(private http: HttpClient, public dialog: MatDialog,
              private _formBuilder: FormBuilder,
              private router: Router,
              public notification: NotificationsService,
              public fourPageService: FourPageService,
              private matDialog: MatDialog,
              public languageService: LanguageService,
              private route: ActivatedRoute,
              private ngxNotificationService: NgxNotificationService, 
              private spinner: NgxSpinnerService) {

    this.PageOne = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      firstName: ['', Validators.compose([Validators.required])],
      lastName: [''],
      phone: ['', Validators.compose([Validators.required, Validators.max(9999999999999), Validators.pattern('(0/91)?[6-9][0-9]{9}')])],
      email: [''],
      Relation: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      birth_date: ['01', Validators.compose([Validators.required])],
      birth_month: ['January', Validators.compose([Validators.required])],
      birth_year: ['1980', Validators.compose([Validators.required])],
      Height: ['', Validators.compose([Validators.required])],
      Weight: ['', Validators.compose([Validators.required, Validators.min(30), Validators.max(150)])],
      MaritalStatus: ['', Validators.compose([Validators.required])],
      AnnualIncome: ['', Validators.compose([Validators.required, Validators.max(999)])],
      Religion: ['', Validators.compose([Validators.required])],
      Castes: ['', Validators.compose([Validators.required])],
      Mangalik: ['', Validators.compose([Validators.required])],
      locality: ['', Validators.compose([Validators.required])],
      disabledPart: ['']
    });
  }

  ngOnInit() {
    localStorage.clear();
    this.languageService.setRegisterLang();
    if (localStorage.getItem('RegisterNumber')) {
    this.numberCheck = localStorage.getItem('RegisterNumber').substr(3, localStorage.getItem('RegisterNumber').length);
    console.log(localStorage.getItem('RegisterNumber').substr(3, localStorage.getItem('RegisterNumber').length));
    }
    document.querySelector('body').style.background = 'white';
    document.querySelector('body').style.backgroundImage = 'url(\'../../assets/bgicon.png\')';
    document.querySelector('body').style.backgroundSize = 'cover';

    this.fourPageService.formCompleted.subscribe(
      (complete: boolean) => {
        if (complete === true) {
          this.formTwo = true;
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

      // for team user we will make page non linear from page two...because page one details are compulsory
    this.fourPageService.makeLinear.subscribe(
        (makeLinear: boolean) => {
          console.log(makeLinear);
          if (makeLinear === true) {
            this.isLinear = false;
            this.fourPageService.setUserThrough(true);
            console.log(this.isLinear);
          }
        }
      );

     // for skippable
    this.route.url.subscribe(
      link => {
       if (link && link[0]  &&  link[0].path) {
         console.log(link[0].path);
         this.fourPageService.setSkippable(true);
       }
      }
    );
    this.route.paramMap.subscribe(
    (route: any) => {
      console.log(route.params);
      if (route) {
      if (route.params.id) {
        this.fourPageService.setUserThrough(true);
        localStorage.setItem('getListId', route.params.id);
        } else if (route.params.mobile) {
          this.numberCheck = route.params.mobile;
          this.fourPageService.setUserThrough(true);
          localStorage.setItem('getListMobile', route.params.mobile);
          } else {
          this.fourPageService.setUserThrough(false);
          localStorage.setItem('getListId', '');
          localStorage.setItem('getListMobile', '');
        }
      if (route.params.leadId) {
        this.fourPageService.setUserThrough(true);
        localStorage.setItem('getListLeadId', route.params.leadId);
        this.isLeadIsZero =  route.params.leadId === '0' ? true : false;
        } else {
          this.fourPageService.setUserThrough(false);
          localStorage.setItem('getListLeadId', '');
        }
      if (route.params.templeId) {
          this.fourPageService.setUserThrough(true);
          localStorage.setItem('getListTempleId', route.params.templeId);
          }
      if (route.params.enqDate) {
          this.fourPageService.setUserThrough(true);
          localStorage.setItem('enqDate', route.params.enqDate);
          }
      if (route.params.source) {
        this.fourPageService.setUserThrough(true);
        localStorage.setItem('getListSource', route.params.source);
      }
      if (route.params.id) {
        this.getProfile();
        }
      }

      // when user comes from app to webview four page reg
      if (route.params.appMobile) {
        this.numberCheck = route.params.appMobile;
      }
    }
  );

    this.spinner.hide();
    localStorage.setItem('gender', '');
    localStorage.setItem('mobile_number', '') ;
    localStorage.setItem('selectedCaste', '');
    this.getAllCaste();

    if (this.fourPageService.getUserThrough()) {
      this.openMessageDialog();
      }

    console.log(this.isLinear);

    }
      // 0 -> new User/not registered, 1-> Registered , 2-> Partially Registered User
    mobileNumberChanged(number) {
      if (localStorage.getItem('getListId') === null || localStorage.getItem('getListId') === '' ) {
        console.log(number);
        console.log(this.authMobileNumberStatus);
          // tslint:disable-next-line: max-line-length
        this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : number, ['fcm_id'] : this.notification.getCurrentToken()}}).subscribe(res => {
            console.log(res);
            if (res.registered === 1) {
              localStorage.setItem('mobile_number', number);
              localStorage.setItem('is_lead', res.is_lead);
              this.router.navigateByUrl('chat');
            } else if (res.registered === 2) {
              localStorage.setItem('RegisterNumber', number);
              this.ngxNotificationService.info('Please complete the form and update');

            } else {
              localStorage.setItem('RegisterNumber', number);
              console.log('New User');
            }
            this.spinner.hide();
          }, err => {
            this.spinner.hide();
            console.log(err);
          });
        }
    }

    getAllCaste() {
      this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
        this.getcastes = ['All', ...res];
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
          Weight: ['', Validators.compose([Validators.required])],
          MaritalStatus: ['', Validators.compose([Validators.required])],
          AnnualIncome: ['', Validators.compose([Validators.required, Validators.max(999)])],
          Religion: ['', Validators.compose([Validators.required])],
          Castes: ['', Validators.compose([Validators.required])],
          Mangalik: ['', Validators.compose([Validators.required])],
          locality: ['', Validators.compose([Validators.required])],
          disabledPart: ['']
        });
      }
    }


  firstStep() {
    console.log(this.PageOne.value.email);
    this.errors = [];
    console.log('date', this.PageOne.value.birth_date);
    console.log('month', this.month.indexOf(this.PageOne.value.birth_month) + 1);
    console.log('year', this.PageOne.value.birth_year);


    if (this.PageOne.value.phone.toString().length < 10 || this.PageOne.value.phone.toString().length > 13
     || this.PageOne.value.phone.invalid) {
       console.log(this.PageOne.value.phone);
       this.ngxNotificationService.error('Enter A Valid Mobile Number');
       return;
    }

    if (!this.fourPageService.getUserThrough() && this.locationFamily == null || this.locationFamily === '') {
      this.ngxNotificationService.error('Select A Valid Location');
      return;
    }
    console.log(this.PageOne.value);
    if (this.PageOne.valid) {
      console.log('caste', this.PageOne.value.Castes);
      this.casteValidation(this.PageOne.value.Castes).then(res => {
          if (res === true) {
            if (this.PageOne.valid) {
              this.spinner.show();
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
              firststepdata.append('name', this.PageOne.value.firstName + ' ' + this.PageOne.value.lastName);
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
              firststepdata.append('weight', this.PageOne.value.Weight);
              firststepdata.append('marital_status', this.PageOne.value.MaritalStatus);
              firststepdata.append('manglik', this.PageOne.value.Mangalik);

              firststepdata.append('annual_income', this.PageOne.value.AnnualIncome);
              firststepdata.append('religion', this.PageOne.value.Religion);
              firststepdata.append('caste', this.PageOne.value.Castes);
              firststepdata.append('locality', this.locality);
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
              console.log('annual_income', this.PageOne.value.AnnualIncome);
              console.log('religion', this.PageOne.value.Religion);
              console.log('caste', this.PageOne.value.Castes);


              if (localStorage.getItem('getListLeadId') && localStorage.getItem('getListLeadId') === '0') {

            // tslint:disable-next-line: max-line-length
            return this.http.post('https://partner.hansmatrimony.com/api/updatePersonalDetails', firststepdata ).subscribe(
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
            return this.http.post('https://partner.hansmatrimony.com/api/updateBasic', firststepdata ).subscribe((res: any) => {
              console.log('first', res);

              if (res.status === 1) {
                this.spinner.hide();
                localStorage.setItem('id', res.id);
                localStorage.setItem('gender', this.PageOne.value.gender);
                localStorage.setItem('mobile_number', this.PageOne.value.phone);
                this.fourPageService.updateFormOneData(firststepdata);
                if (this.fourPageService.getUserThrough()) {
                  this.locality = firststepdata.get('locality');
                }
                this.Analytics('Four Page Registration', 'Four Page Registration Page One',
                'Registered through Four Page Registration Page One');
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
            this.ngxNotificationService.error('Fill the details');
          }
          }
    });
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
  Analytics(type: string, category: string, action: string) {
    if (!localStorage.getItem('getListId') && !localStorage.getItem('getListMobile')) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {
        console.log('Tracking ' + type + ' successful');
      }
    });

    // gtag app + web
    (window as any).gtag('event', category , {
      'action': action
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
        const numChars = ( e.target as HTMLInputElement).value.length;
        if (numChars === 2 || numChars === 5) {
          let thisVal = ( e.target as HTMLInputElement).value;
          thisVal += '-';
          ( e.target as HTMLInputElement).value = thisVal;
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
    if (event.value === 'Hindu') {
      this.Caste = true;
    } else {
      this.Caste = false;
      this.PageOne.patchValue({
        Castes: 'All'
      });
    }
  }
async casteValidation(value) {
  console.log('caste changed', value );
  const status = 1;
  let statusConfirmed;
  await this.checkCaste(value).then((res: boolean) => {
       statusConfirmed = res;
     });
  console.log('caste changed', statusConfirmed );

  if (statusConfirmed === false) {
      this.ngxNotificationService.warning('Please choose a caste from the dropdown');
      this.PageOne.get('Castes').setValue('');
      return false;
    }
  return true;

  }

  checkCaste(value) {
    let status = 1;
    let statusConfirmed = false;
    this.casteo.forEach(element => {
      element.forEach(item => {
        if (value !== '' && item.includes(value) && item.length === value.length ) {
          console.log('confirmed');
          statusConfirmed = true;
        } else {
          status = 0;
        }
      });
    });
    return new Promise((resolve) => {
resolve(statusConfirmed);
    });
  }

  onAutocompleteSelected(event) {
    console.log(event);
    this.PageOne.value.locality = event.formatted_address;
    this.locality = event.formatted_address;
    console.log('address of family', this.PageOne.value.locality);

}
onLocationSelected(e) {
    this.locationFamily = e;
    this.lat = e.latitude;
    this.long = e.longitude;
    console.log('location of family', e);
}
setGender() {
console.log(this.PageOne.value.Relation);
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
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/getProfile', myprofileData).pipe(timeout(7000), retry(2), catchError(e => {
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
    if (carous && carous !== '')  {
      const carousel: object = JSON.parse(carous);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      if (carousel[keys[index]]) {
      return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
      }
    }
  }
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
    this.locality = profileData.family.locality;
    this.userProfile.locality = profileData.family.locality;
    this.lat = profileData.profile.lat_locality;
    this.long = profileData.profile.long_locality;
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
    this.userProfile.image4 = this.getProfilePhoto(profileData.profile.carousel, '3');
    this.userProfile.image5 = this.getProfilePhoto(profileData.profile.carousel, '4');
    this.userProfile.image6 = this.getProfilePhoto(profileData.profile.carousel, '5');

    console.log(this.userProfile);
    this.fourPageService.setProfile(this.userProfile);
    this.fourPageService.getListData.emit(true);
    this.setFormOneData();
  }

  setFormOneData() {
      this.PageOne.patchValue({
        firstName: this.userProfile.name ? this.userProfile.name.split(' ')[0] : '',
      lastName: this.userProfile.name ? this.userProfile.name.split(' ')[1] : '',
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
      AnnualIncome: this.userProfile.annualIncome,
      Religion: this.userProfile.religion,
      Castes: this.userProfile.caste,
      Mangalik: this.userProfile.manglik,
      locality: this.userProfile.locality,
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
}


