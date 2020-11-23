import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  Form,
} from '@angular/forms';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  Router
} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationsService } from '../../notifications.service';
import { ChatServiceService } from '../../chat-service.service';

import {
  MatDialog, MatAutocompleteDefaultOptions,
} from '@angular/material/';
import { FourPageService } from '../four-page.service';
import { Profile } from '../profile';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, startWith, takeUntil } from 'rxjs/operators';
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
  selector: 'app-compatibility-page-two',
  templateUrl: './compatibility-page-two.component.html',
  styleUrls: ['./compatibility-page-two.component.css']
})
export class CompatibilityPageTwoComponent implements OnInit, OnDestroy {
  @ViewChild('otpModal', { static: false }) private otpModal: any;
  showOccupation = false;
  showYearlyIncome = false;
  showWorkingCity = false;
  PageTwo: FormGroup;
  errors: string[] = [];
  authMobileNumberStatus = false;
  workingCity;
  workplace;
  nextClickedTwo = false;
  // Educational Qualification

  HigherEducation: hd[] = [{
    group: 'Engineering Design',
    mapping_id: 4,
    names: ['B.E\/B.Tech', 'B.Pharma', 'M.E\/M.Tech', 'M.Pharma', 'M.S. Engineering', 'B.Arch', 'M.Arch', 'B.Des', 'M.Des']
  }, {
    group: 'Computers',
    mapping_id: 4,
    names: ['MCA\/PGDCA', 'BCA', 'B.IT']
  }, {
    group: 'Finance',
    mapping_id: 4,
    names: ['B.Com', 'CA', 'CS', 'ICWA', 'M.Com', 'CFA']
  }, {
    group: 'Managment',
    mapping_id: 4,
    names: ['MBA\/PGDM', 'BBA', 'BHM']
  },
  {
    group: 'Medicine',
    mapping_id: 4,
    names: ['MBBS', 'M.D.', 'BAMS', 'BHMS', 'BDS', 'M.S. (Medicine)', 'MVSc.', 'BvSc.', 'MDS', 'BPT', 'MPT', 'DM', 'MCh']
  },
  {
    group: 'Law',
    mapping_id: 4,
    names: ['BL\/LLB', 'ML\/LLM']
  },
  {
    group: 'Arts\/Science"',
    mapping_id: 4,
    names: ['B.A', 'B.Sc.', 'M.A.', 'M.Sc.', 'B.Ed', 'M.Ed', 'MSW', 'BFA', 'MFA', 'BJMC', 'MJMC']
  },
  {
    group: 'Doctorate',
    mapping_id: 4,
    names: ['Ph.D', 'M.Phil']
  },
  {
    group: 'Non Graduate',
    mapping_id: 4,
    names: ['Diploma', 'High School', '12th', 'Trade School', 'Other']
  }
  ];
  Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt. Job', 'Doctor', 'Teacher', 'Not Working'];

  designations: string[] = [
    'Owner',
    'Manager',
    'Sales Manager',
    'Accounts Manager',
    'Product Manager',
    'Software Engineer',
    'Engineer',
    'Hotel Management',
    'Operations Manager',
    'Sales Executive',
    'Operations Executive',
    'Accountant',
    'Marketing Manager',
    'Marketing Executive',
    'Chartered Accountant',
    'Owner',
    'Secretary',
    'Company Secretary',
    'Telesales Executive',
    'Teacher',
    'Clerk',
    'Office Assistant',
    'Relationship Manager',
    'Computer Operator',
    'Chief Executive Officer',
    'Chief Marketing Officer',
    'Chief Finance Officer',
    'Business Development',
    'Project Manager',
    'Program Manager',
    'Solution Architect',
    'Graphic Designer',
    'Content Writer',
    'Director',
    'Business Analyst',
    'Front Office',
    'Back office',
    'Counselor',
    'Event Manager',
    'Legal',
    'Public Relations',
    'Others',
    'Teacher',
    'Doctor',
    'Not Working'];

  /** list of education groups filtered by search keyword for option groups */
  public filteredEducationGroups: ReplaySubject<hd[]> = new ReplaySubject<hd[]>(1);

  /** list of designation filtered by search keyword for option groups */
  public filteredDesignations: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  /** Subject that emits when the component has been destroyed. */
  protected onDestroy = new Subject<void>();

  // for only getting the autocomplete predictions
  autoComplete = {
    strictBounds: false,
    type: 'geocode',
    fields: ['name']
  };
  incomeCategories = ['0-2.5', '2.5-5', '5-7.5', '7.5-10', '10-15', '15-20', '20-25', '25-35', '35-50', '50-70', '70-100', '100+'];
  workingCitySubject = new BehaviorSubject<string[]>([]);
  workingCities: Observable<any[]> = this.workingCitySubject.asObservable().pipe(shareReplay());


  constructor(private http: HttpClient, public dialog: MatDialog, private formBuilder: FormBuilder, private router: Router,
              public notification: NotificationsService,
              public fourPageService: FourPageService,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService,
              public chatService: ChatServiceService) {
    this.PageTwo = this.formBuilder.group({
      // tslint:disable-next-line: max-line-length
      Qualification: ['', Validators.compose([Validators.required])],
      QualificationCtrl: [''],
      Occupation: ['', Validators.compose([Validators.required])],
      Designation: [''],
      DesignationCtrl: [''],
      OtherDesignation: [''],
      AnnualIncome: ['', Validators.compose([Validators.required])],
      Working: ['', Validators.compose([Validators.required])],
      About: [''],
      abroad: ['']
    });



    fourPageService.seeProfilesBtnClicked.subscribe(
      status => {
        if (status) {
            this.firstStep();
        }
      }
    );
    fourPageService.pageOneUpdated.subscribe(
      status => {
        console.log('Event Emitted For Page Two', status);
        if (status) {
            this.setAbout();
            this.firstStep();
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  ngOnInit() {


    this.PageTwo = this.formBuilder.group({
      // tslint:disable-next-line: max-line-length
      Qualification: ['', Validators.compose([Validators.required])],
      QualificationCtrl: [''],
      Occupation: ['', Validators.compose([Validators.required])],
      Designation: [''],
      DesignationCtrl: [''],
      OtherDesignation: [''],
      AnnualIncome: ['', Validators.compose([Validators.required])],
      Working: ['', Validators.compose([Validators.required])],
      About: [''],
      abroad: ['']
    });
    // if user can pass through is true
    this.fourPageService.userThroughStatusUpdated.subscribe(
      (status: boolean) => {
        if (status) {
          if (this.PageTwo) {
            console.log('user get through', status, this.PageTwo);
            this.fourPageService.formTwoGroup.emit(this.PageTwo);
          }
        }
      }
    );

    // location from facebook
    this.fourPageService.facebookLocationUpdated.subscribe(
      res => {
        if (res) {
          this.PageTwo.patchValue({
            Working: res
          });
        }
      }
    );

    // load the initial eduation list
    this.filteredEducationGroups.next(this.copyEducationGroups(this.HigherEducation));

    // listen for search field value changes
    this.PageTwo.controls.QualificationCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterEducationGroups();
      });

    // load the initial designation list
    this.filteredDesignations.next(this.designations.slice());

    // listen for search field value changes
    this.PageTwo.controls.DesignationCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterDesignation();
      });


    // if user can get through and profile data has been retrieved
    this.fourPageService.getListData.subscribe(
      () => {
        if (localStorage.getItem('getListId') && localStorage.getItem('getListLeadId')) {
          console.log(this.fourPageService.getProfile());
          this.setFormForGetUserThrough();
          if (localStorage.getItem('getListId') || localStorage.getItem('getListMobile')) {
            this.fourPageService.makeLinear.emit(true);
          }
        }
      }
    );

    this.PageTwo.get('Working').valueChanges
    .pipe(takeUntil(this.onDestroy))
    .subscribe(() => {
      this.workingCityFilter();
    });
  }

  private workingCityFilter() {
    console.log(this.PageTwo.value.Working);
    if (this.PageTwo.value.Working) {
      this.http.get<string[]>(`https://partner.hansmatrimony.com/api/getCities?search_city=${this.PageTwo.value.Working}`)
      .subscribe(
        (response: string[]) => {
          console.log(response);
          this.workingCitySubject.next(response);
        },
        err => {
            console.log(err);
        }
      );
    }
  }

  protected copyEducationGroups(educationGroups: hd[]) {
    const educationGroupsCopy = [];
    educationGroups.forEach(bankGroup => {
      educationGroupsCopy.push({
        group: bankGroup.group,
        names: bankGroup.names.slice()
      });
    });
    return educationGroupsCopy;
  }

  protected filterEducationGroups() {
    if (!this.HigherEducation) {
      return;
    }
    // get the search keyword
    let search: string = this.PageTwo.controls.QualificationCtrl.value;
    const educationGroupsCopy = this.copyEducationGroups(this.HigherEducation);
    if (!search) {
      this.filteredEducationGroups.next(educationGroupsCopy);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredEducationGroups.next(
      educationGroupsCopy.filter(educationGroup => {
        const showBankGroup = educationGroup.group.toLowerCase().indexOf(search) > -1;
        if (!showBankGroup) {
          educationGroup.names = educationGroup.names.filter((bank: string) => {
            bank = bank.toLowerCase().replace(/\./g, '');
            return bank.toLowerCase().indexOf(search) > -1;
          });
        }
        return educationGroup.names.length > 0;
      })
    );
  }
  setValue(item: string) {
    const vals = item.split('-');
    if (vals[0] === '100+') {
      return 'Rs 1+ Crore per year';
    } else {
      return 'Rs. ' + vals[0] + ' - ' + vals[1] + ' Lakhs per year';
    }
  }

  protected filterDesignation() {
    if (!this.designations) {
      return;
    }
    // get the search keyword
    let search = this.PageTwo.controls.DesignationCtrl.value;
    if (!search) {
      this.filteredDesignations.next(this.designations.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    const designationResults = this.designations.filter(bank => bank.toLowerCase().indexOf(search) > -1);
    console.log(designationResults);
    if (designationResults.length !== 0) {
      this.filteredDesignations.next(designationResults);
    } else {
      this.filteredDesignations.next(this.designations.filter(bank => bank.toLowerCase().indexOf('other') > -1));
    }
  }

  skip() {
    this.fourPageService.formCompleted.emit(true);
    setTimeout(() => {
      this.analyticsEvent('Skipped through Four Page Registration Page Two');
    }, 100);
  }

  firstStep() {

    this.nextClickedTwo = true;
    this.errors = [];
    console.log(this.PageTwo.value.Working);
    let incomeCalc;

    if (this.PageTwo.valid) {

      if (!this.fourPageService.getUserThrough()) {
        this.spinner.show('searchingSpinner');
      }

      if (this.PageTwo.value.AnnualIncome === '100+') {
        incomeCalc = 100;
      } else if (this.PageTwo.value.AnnualIncome) {
        const a = this.PageTwo.value.AnnualIncome.split('-');
        incomeCalc = String((Number(a[0]) + Number(a[1])) / 2);
      }

      if (!this.workingCity) {
        this.PageTwo.controls.Working.setValue(null);
        this.ngxNotificationService.error('Select Valid Working City');
        return;
      }

      const firststepdata = new FormData();
      firststepdata.append('id', localStorage.getItem('id') ? localStorage.getItem('id') : localStorage.getItem('getListId'));
      firststepdata.append('mobile', localStorage.getItem('mobile_number')
        ? localStorage.getItem('mobile_number') : localStorage.getItem('getListMobile'));
      firststepdata.append('degree', this.PageTwo.value.Qualification);
      firststepdata.append('occupation', this.PageTwo.value.Occupation);
      // if designation equals others set profession equals value of OtherDesignation only if OtherDesignation is not empty.
      firststepdata.append('profession', this.PageTwo.value.Designation !== 'Others'
        ? this.PageTwo.value.Designation : this.PageTwo.value.OtherDesignation ?
          this.PageTwo.value.OtherDesignation : this.PageTwo.value.Designation);

      firststepdata.append('annual_income', incomeCalc);

      firststepdata.append('working_city', this.PageTwo.value.Working);
      firststepdata.append('about', this.PageTwo.value.About);
      firststepdata.append('abroad', this.PageTwo.value.abroad);

      if (localStorage.getItem('redParam') && localStorage.getItem('redParam') === 'pending_profile'
      && this.fourPageService.getUserThrough()) {

        firststepdata.append('is_lead', localStorage.getItem('getListLeadId'));
        firststepdata.append('identity_number', localStorage.getItem('getListIdentity'));
        firststepdata.append('temple_id', localStorage.getItem('getListTemple'));

        return this.http.post('https://partner.hansmatrimony.com/api/updatePersonalDetails', firststepdata).subscribe(
          (response: any) => {
            if (response.updatePerosnalDetails_status === 'Y') {
              this.spinner.hide();
              if (this.fourPageService.getUserThrough()) {
                this.updateFormTwoData(firststepdata);
              }
            } else {
              this.fourPageService.formCompleted.emit(false);
              this.spinner.hide();
              this.ngxNotificationService.error(response.error_message ? response.error_message : 'Something went wrong');
            }
          },
          err => {
            this.fourPageService.formCompleted.emit(false);
            this.spinner.hide();
            this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
            console.log(err);
          }
        );

      } else {

      // tslint:disable-next-line: max-line-length
      return this.http.post('https://partner.hansmatrimony.com/api/formTwoProfile', firststepdata).subscribe((res: any) => {
        console.log('first', res);

        if (res.status === 1) {
          this.spinner.hide();
          if (this.fourPageService.getUserThrough()) {
            this.updateFormTwoData(firststepdata);
          } else {
            this.chatService.formTwoCompleted.next(true);
            (window as any).fbq('track', 'CompleteRegistration', {
              value: localStorage.getItem('id'),
              content_name: localStorage.getItem('RegisterNumber'),
            });
            (window as any).fbq('track', '692972151223870', 'CompleteRegistration', {
              value: localStorage.getItem('id'),
              content_name: localStorage.getItem('RegisterNumber'),
            });

            this.router.navigateByUrl('chat?first');
            this.analyticsEvent('Four Page Registration Page Two');
          }
        } else {
          this.fourPageService.formCompleted.emit(false);
          this.spinner.hide();
          this.spinner.hide('searchingSpinner');
          this.ngxNotificationService.error(res.message);
        }
      }, err => {
        this.fourPageService.formCompleted.emit(false);
        this.spinner.hide();
        this.spinner.hide('searchingSpinner');
        this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
        console.log(err);
      });
    }
    } else {
      // tslint:disable-next-line: forin
      for (const control in this.PageTwo.controls) {
        if (this.PageTwo.controls[control].invalid) {
          this.PageTwo.controls[control].markAsTouched();
          this.errors.push(control);
        }
      }
      this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
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

  placeChanged() {
    setTimeout(() => {
      if (!this.workingCity) {
        this.PageTwo.controls.Working.setValue(null);
        this.ngxNotificationService.error('Select Valid Working City');
      }
    }, 500);
  }

  workingCityChanged(value) {
   console.log('selected working city', value);
   this.workingCity = value;

   this.setAbout();
   this.analyticsEvent('Four Page Registration Page Two Working City Changed');
   if (this.PageTwo.valid) {
        this.fourPageService.formCompleted.emit(true);
        this.fourPageService.formTwoGroup.emit(this.PageTwo);
      }
  }

  changedQualification() {
    this.showOccupation = true;
    console.log('changed Qualification');
    this.analyticsEvent('Four Page Registration Page Two Qualification Changed');
    if (this.PageTwo.valid) {
      this.fourPageService.formCompleted.emit(true);
      this.fourPageService.formTwoGroup.emit(this.PageTwo);
    }
    this.setAbout();
  }
  changedOccupation() {
    console.log('changed Occupation');
    if (this.PageTwo.value.Occupation !== 'Not Working') {this.showYearlyIncome = true;
     this.showWorkingCity = true;
    } else if (this.PageTwo.value.Occupation === 'Not Working') {this.showWorkingCity = false; this.showYearlyIncome = false; }
    this.analyticsEvent('Four Page Registration Page Two Occupation Changed');

    switch (this.PageTwo.value.Occupation) {
      case 'Not Working':
        this.PageTwo.patchValue({
          Designation: this.PageTwo.value.Occupation,
          Working: 'na'
        });
        this.workplace = 'na';
        break;
      case 'Business/Self-Employed':
        this.PageTwo.patchValue({
          Designation: 'Owner'
        });
        break;
      case 'Private Job' || 'Govt. Job':
        this.PageTwo.patchValue({
          Designation: ''
        });
        break;
      case 'Doctor' || 'Teacher':
        this.PageTwo.patchValue({
          Designation: this.PageTwo.value.Occupation
        });
        break;
      default:
        this.PageTwo.patchValue({
          Designation: this.PageTwo.value.Designation ? this.PageTwo.value.Designation : ''
        });
        break;
    }
    if (this.PageTwo.valid) {
      this.fourPageService.formCompleted.emit(true);
      this.fourPageService.formTwoGroup.emit(this.PageTwo);
    }
    this.setAbout();
  }
  changedDesignation() {
    console.log('changed Designation');
    this.analyticsEvent('Four Page Registration Page Two Designation Changed');

    switch (this.PageTwo.value.Occupation) {
      case 'Not Working':
        this.PageTwo.patchValue({
          Designation: this.PageTwo.value.Occupation,
          Working: 'na'
        });
        this.workplace = 'na';
        break;
      case 'Business/Self-Employed':
        this.PageTwo.patchValue({
          Designation: 'Owner'
        });
        break;
      case 'Doctor' || 'Teacher':
        this.PageTwo.patchValue({
          Designation: this.PageTwo.value.Occupation
        });
        break;
      default:
        break;
    }
    if (this.PageTwo.valid) {
      this.fourPageService.formCompleted.emit(true);
      this.fourPageService.formTwoGroup.emit(this.PageTwo);
    }
    this.setAbout();
  }
  incomeChanged(val) {
    console.log('changed yearly income');
    this.showWorkingCity = true;
    console.log(this.PageTwo.value.AnnualIncome);
    this.analyticsEvent('Four Page Registration Page Two Annual Income Changed');
    if (this.PageTwo.valid) {
      this.fourPageService.formCompleted.emit(true);
      this.fourPageService.formTwoGroup.emit(this.PageTwo);
    }
  }
  changedAbroad() {
    console.log('changed Abroad');
    this.analyticsEvent('Four Page Registration Page Two Abroad Status Changed');
    if (this.PageTwo.valid) {
      this.fourPageService.formCompleted.emit(true);
      this.fourPageService.formTwoGroup.emit(this.PageTwo);
    }
  }
  getQualification(text) {
    const groupIndex = this.HigherEducation.findIndex(
      element => {
        return element.names.includes(text);
      }
    );
    const valueIndex = this.HigherEducation[groupIndex].names.findIndex(
      element => {
        return element.match(text);
      }
    );
    return this.HigherEducation[groupIndex].names[valueIndex];
  }
  updateFormTwoData(profileData: FormData) {
    this.fourPageService.profile.qualification = profileData.get('degree') ?
      profileData.get('degree').toString() : '';
    this.fourPageService.profile.occupation = profileData.get('occupation') ?
      profileData.get('occupation').toString() : '';
    this.fourPageService.profile.designation = profileData.get('profession') ?
      profileData.get('profession').toString() : '';
    this.fourPageService.profile.annualIncome = profileData.get('annual_income') ?
      profileData.get('annual_income').toString() : '';
    this.fourPageService.profile.workingCity = profileData.get('working_city') ?
      profileData.get('working_city').toString() : '';
    this.fourPageService.profile.about = profileData.get('about') ?
      profileData.get('about').toString() : '';
    this.fourPageService.profile.abroad = profileData.get('abroad') ?
      profileData.get('abroad').toString() : '';

    console.log(this.fourPageService.getProfile());
  }
  setAge(dob: string) {
    if (dob != null) {
      return (Math.floor((Date.now() - new Date(dob.split('-').reverse().join('-')).getTime()) / (1000 * 60 * 60 * 24 * 365)));
    } else {
      return null;
    }
  }
  setAbout() {
    console.log(this.fourPageService.getProfile());
    const aboutObject = {
      dob: this.fourPageService.getProfile().dob ? `I am ${this.setAge(this.fourPageService.getProfile().dob)} yrs old ` : '',
      caste: this.fourPageService.getProfile().caste ?
        this.fourPageService.getProfile().caste !== 'All' ? this.fourPageService.getProfile().caste : '' : '',
      manglik: this.fourPageService.getProfile().manglik ? this.fourPageService.getProfile().manglik : '',
      gender: this.fourPageService.getProfile().gender ? this.fourPageService.getProfile().gender === 'Male' ? 'man' : 'woman' : '',
      locality: this.fourPageService.getProfile().locality ? ` residing in ${this.fourPageService.getProfile().locality}` : '',
      qualification: this.PageTwo.value.Qualification ? `. I've completed my ${this.PageTwo.value.Qualification}` : '',
      occupation: this.PageTwo.value.Occupation ?
        this.PageTwo.value.Occupation === 'Business/Self-Employed' ?
          ' and Self-Employed' : this.PageTwo.value.Occupation === 'Not Working' ? 'currently not working'
            : this.PageTwo.value.Occupation === 'Doctor' ||
              this.PageTwo.value.Occupation === 'Teacher'
              ? ` currently working as ${this.PageTwo.value.Occupation}` :
              ` currently working in ${this.PageTwo.value.Occupation}` : '',
      working: this.PageTwo.value.Working ? this.PageTwo.value.Occupation !== 'Not Working' ? `in ${this.PageTwo.value.Working}` : '' : '',
      designation: this.PageTwo.value.Designation && this.PageTwo.value.Occupation ?
        this.PageTwo.value.Occupation === 'Business/Self-Employed' ||
          this.PageTwo.value.Occupation === 'Teacher' ||
          this.PageTwo.value.Occupation === 'Doctor' ? '' :
          this.PageTwo.value.Occupation !== 'Not Working' ?
            ` as ${this.PageTwo.value.Designation !== 'Others' ? this.PageTwo.value.Designation : ''}` : '' : '',
      OtherDesignation: !this.PageTwo.value.OtherDesignation ||
        this.PageTwo.value.Occupation === 'Business/Self-Employed' ||
        this.PageTwo.value.Occupation === 'Teacher' ||
        this.PageTwo.value.Occupation === 'Doctor' ||
        this.PageTwo.value.Occupation === 'Not Working' ? '' :
        this.PageTwo.value.Designation === 'Others' ? this.PageTwo.value.OtherDesignation : ''
    };

    console.log('Setting About');

    this.PageTwo.patchValue({
      // tslint:disable-next-line: max-line-length
      About: `${aboutObject.dob} ${aboutObject.caste} ${aboutObject.manglik} ${aboutObject.gender} ${aboutObject.locality} ${aboutObject.qualification} ${aboutObject.occupation} ${aboutObject.designation} ${aboutObject.OtherDesignation} ${aboutObject.working}.`
    });

  }
  setFormOneData(userProfile: Profile) {
    this.workplace = userProfile.workingCity ? userProfile.workingCity : '';
    this.PageTwo.patchValue({
      Qualification: userProfile.qualification ? this.getQualification(userProfile.qualification) : '',
      Occupation: userProfile.occupation,
      Designation: this.designations.includes(userProfile.designation) ? userProfile.designation : 'Others',
      OtherDesignation: userProfile.designation,
      AnnualIncome: userProfile.annualIncome,
      Working: userProfile.workingCity,
      About: this.setAgeIfNan(userProfile.about)
    });

    if (userProfile.workingCity) {
      this.workingCity = userProfile.workingCity;
    }
  }

  setAgeIfNan(value: string) {
    console.log(value);
    if (value && value.toLowerCase().includes('i am nan')) {
      return value.replace('NaN', `${this.setAge(this.fourPageService.getProfile().dob)}`);
    } else {
      return value;
    }
  }

  // setAgeIfNan(value: string) {
  //   if (value && value.toLowerCase().includes('i am nan')) {
  //       const aboutText = value.toLowerCase();
  //       aboutText.replace('nan', `${this.setAge(this.fourPageService.getProfile().dob)}`);
  //       const returnArray: string[] = aboutText.split(' ');
  //       returnArray.map(element => {
  //         element.slice(1).toUpperCase();
  //     });
  //       const returnText = returnArray.join(' ');
  //       return returnText;
  //   } else {
  //     return value;
  //   }
  // }

  // change PageTwo Form with no required fields
  setFormForGetUserThrough() {
    this.PageTwo = this.formBuilder.group({
      Qualification: [''],
      QualificationCtrl: [''],
      Occupation: [''],
      Designation: [''],
      DesignationCtrl: [''],
      OtherDesignation: [''],
      AnnualIncome: ['', Validators.max(999)],
      Working: [''],
      About: [''],
      abroad: ['']
    });
    this.setFormOneData(this.fourPageService.getProfile());

    // listen for search field value changes
    this.PageTwo.controls.QualificationCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterEducationGroups();
      });

          // listen for search field value changes
    this.PageTwo.controls.DesignationCtrl.valueChanges
    .pipe(takeUntil(this.onDestroy))
    .subscribe(() => {
      this.filterDesignation();
    });

    this.PageTwo.get('Working').valueChanges
  .pipe(takeUntil(this.onDestroy))
  .subscribe(() => {
    this.workingCityFilter();
  });
  }

}



