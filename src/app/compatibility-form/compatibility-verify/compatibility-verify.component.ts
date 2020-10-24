import {
  Component,
  OnInit,
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
import { NotificationsService } from '../../notifications.service';
import { Profile } from '.././profile';

import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/';
import { Observable } from 'rxjs';
import { startWith, map, timeout, retry, catchError } from 'rxjs/operators';
import { element } from 'protractor';
import { FourPageService } from '.././four-page.service';
import { FormsMessageDialogComponent } from '.././forms-message-dialog/forms-message-dialog.component';
import { LanguageService } from '../../language.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { VerifyOtpComponent } from '../../verify-otp/verify-otp.component';
import { resolve } from 'url';
import { async } from '@angular/core/testing';

// export interface StateGroup {
//   letter: string;
//   names: string[];
// }
// export interface hd {
//   group: string;
//   mapping_id: number;
//   names: string[];
// }

// export const _filter = (opt: string[], value: string): string[] => {
//   const filterValue = value.toLowerCase();

//   return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
// };


@Component({
  selector: 'app-compatibility-verify',
  templateUrl: './compatibility-verify.component.html',
  styleUrls: ['./compatibility-verify.component.css']
})

export class CompatibilityVerifyComponent implements OnInit {

  time = {
    hour: 13,
    minute: 30
  };
  verifyForm: FormGroup;

  profileData;
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
  Status: string[] = ['Alive', 'Not Alive'];
  FamilyType: string[] = ['Joint', 'Nuclear'];
  Count: any[] = ['None', 0, 1, 2, 3, 4, 5, 6, 7, 8];
  HouseType: string[] = ['Owned', 'Rented', 'Leased'];
  familyData;

  showApproveBtn = false;
  // for only getting the autocomplete predictions
  autoComplete = {
    strictBounds: false,
    type: 'geocode',
    fields: ['name']
  };


  constructor(private http: HttpClient, public dialog: MatDialog,
              private _formBuilder: FormBuilder,
              private router: Router,
              public notification: NotificationsService,
              public fourPageService: FourPageService,
              public languageService: LanguageService,
              private ngxNotificationService: NgxNotificationService,
              private spinner: NgxSpinnerService) {

    this.verifyForm = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      college: [''],
      company: [''],
      sisters_married: [0],
      sisters_unmarried: [0],
      brothers_married: [0],
      brothers_unmarried: [0],
      house_type: [''],
      family_type: [''],
      family_living_in: [''],
    });
  }

  ngOnInit() {
    // when the remote data gets uploaded
    this.fourPageService.getListData.subscribe(
      (data) => {
        if (data) {
          console.log(this.fourPageService.getProfile());
          this.setData(this.fourPageService.getProfile());
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  onDate(event): void {
    console.log(event);
  }

  // set user data
  setData(profile) {
    this.verifyForm.patchValue({
      college: profile.college,
      company: profile.company,
      sisters_married: profile.family.married_daughters,
      sisters_unmarried: profile.family.unmarried_daughters,
      brothers_married: profile.family.married_sons,
      brothers_unmarried: profile.family.unmarried_sons,
      house_type: profile.family.house_type,
      family_type: profile.family.family_type,
      family_living_in: profile.family.city ? profile.family.city : '',
    });
  }

  placeChanged() {
    const familyIn: HTMLInputElement = document.querySelector('#familyIn');
    setTimeout(() => {
      console.log(familyIn.value);
      this.verifyForm.patchValue({
        family_living_in: familyIn.value
      });
    }, 500);
  }


  onAutocompleteSelected(event) {
    console.log(event);
    this.verifyForm.value.family_living_in = event.formatted_address;
    console.log('address of family', this.verifyForm.value.family_living_in);

  }
  onLocationSelected(e) {
    this.locationFamily = e;
    this.lat = e.latitude;
    this.long = e.longitude;
    console.log('location of family', e);
  }
  onSubmitPersonal() {
    console.log(this.verifyForm.value);
    // console.log(this.verifyForm.valid);
    this.errors = [];
    if (this.verifyForm.valid) {
      const leadId = localStorage.getItem('getListLeadId');
      const id = localStorage.getItem('getListId');
      // const leadId = localStorage.getItem('is_lead');
      // const id = localStorage.getItem('id');
      const personalProfileDataForm = new FormData();

      personalProfileDataForm.append('id', id);
      personalProfileDataForm.append('is_lead', leadId);

      personalProfileDataForm.append(
        'college', this.verifyForm.value.college);

      personalProfileDataForm.append(
        'company', this.verifyForm.value.company
      );
      console.log(personalProfileDataForm);
      this.http
        .post(
          'https://partner.hansmatrimony.com/api/updatePersonalDetails',
          personalProfileDataForm
        )
        .subscribe(
          (data: any) => {
            console.log(data);
            if (data.updatePerosnalDetails_status === 'Y') {
              this.fourPageService.profile.college = this.verifyForm.value.college;
              this.fourPageService.profile.company = this.verifyForm.value.company;
              this.onSubmitFamily();
            } else {
              this.ngxNotificationService.error(
                'Something Went Wrong, Try Again Later'
              );
            }
          },
          (error: any) => {
            console.log(error);
            this.ngxNotificationService.error(
              'Something Went Wrong, Try Again Later'
            );
          }
        );
    } else {
      for (const control in this.verifyForm.controls) {
        console.log(this.verifyForm.controls[control].value);
        if (!this.verifyForm.controls[control].valid) {
          this.errors.push(control);
        }
      }
      if (this.errors[0]) {
        this.ngxNotificationService.error(
          'Fill the ' + this.errors[0] + ' detail'
        );
      }
    }
  }
  onSubmitFamily() {
    const newFamilyForm = new FormData();
    const leadId = localStorage.getItem('getListLeadId');
    const id = localStorage.getItem('getListId');
    // const leadId = localStorage.getItem('is_lead');
    //   const id = localStorage.getItem('id');

    newFamilyForm.append('id', id);
    newFamilyForm.append('is_lead', leadId);
    newFamilyForm.append('family_type', this.verifyForm.value.family_type);
    newFamilyForm.append('house_type', this.verifyForm.value.house_type);
    newFamilyForm.append('married_sons', this.verifyForm.value.brothers_married);
    newFamilyForm.append('unmarried_sons', this.verifyForm.value.brothers_unmarried);
    newFamilyForm.append('married_daughters', this.verifyForm.value.sisters_married);
    newFamilyForm.append('unmarried_daughters', this.verifyForm.value.sisters_unmarried);
    newFamilyForm.append('city', this.verifyForm.value.family_living_in);

    this.http
      .post(
        'https://partner.hansmatrimony.com/api/updateFamilyDetails',
        newFamilyForm
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log('Family Deatils Updated successfully');
          if (data.updateFamilyDetails_status === 'Y') {
            this.updateVerifyFormData(newFamilyForm);
          } else {
            this.ngxNotificationService.error(
              'Something Went Wrong, Try Again Later'
            );
          }
        },
        (error: any) => {
          console.log(error);
          this.ngxNotificationService.error(
            'Something Went Wrong, Try Again Later'
          );
        }
      );
  }

  updateVerifyFormData(profileData: FormData) {
    this.fourPageService.profile.college = this.verifyForm.value.college;
    this.fourPageService.profile.company = this.verifyForm.value.company;
    this.fourPageService.profile.family.married_daughters = profileData.get('married_daughters').toString();
    this.fourPageService.profile.family.unmarried_daughters = profileData.get('unmarried_daughters').toString();
    this.fourPageService.profile.family.married_sons = profileData.get('married_sons').toString();
    this.fourPageService.profile.family.unmarried_sons = profileData.get('unmarried_sons').toString();
    this.fourPageService.profile.family.city = profileData.get('city') ? profileData.get('city').toString() : '';
    this.fourPageService.profile.family.house_type = profileData.get('house_type') ? profileData.get('house_type').toString() : '';
    this.fourPageService.profile.family.family_type = profileData.get('family_type') ? profileData.get('family_type').toString() : '';
    console.log(this.fourPageService.getProfile());
  }
  clearHistory() {
    localStorage.setItem('getListId', '');
    localStorage.setItem('getListLeadId', '');
    localStorage.setItem('mobile_number', '');
    localStorage.setItem('id', '');
  }
  approveProfileApi() {
    this.onSubmitPersonal();
    this.fourPageService.showApproveBtn = false;
    const approveData = new FormData();
    approveData.append('id', localStorage.getItem('getListId'));
    approveData.append('temple_id', localStorage.getItem('getListTempleId'));
    approveData.append('photo_score', this.fourPageService.getProfile().photoScore.toString());
    approveData.append('is_approve', '1');

    this.http.post('https://partner.hansmatrimony.com/api/ApproveProfile', approveData).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status === '1') {
          if (localStorage.getItem('redParam')) {
            if (localStorage.getItem('redParam') === '0') {
              window.open('https://partner.hansmatrimony.com/home', '_top', null, true);
            } else if (localStorage.getItem('redParam') === 'pending_profile') {
              window.open('https://partner.hansmatrimony.com/profile_approval/getFreeUserProfile', '_top', null, true);
            } else {
              window.open('https://partner.hansmatrimony.com/find', '_top', null, true);
            }
          } else if (localStorage.getItem('fourthParam')) {
            if (localStorage.getItem('fifthParam') === '1') {
              if (localStorage.getItem('fourthParam') === '0') {
                window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval', '_top', null, true);
              } else {
                window.open('https://partner.hansmatrimony.com/admin_volgh/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
              }
            } else if (localStorage.getItem('fifthParam') === '2') {
              window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=' + localStorage.getItem('fourthParam') +
                '&temple_id=' + localStorage.getItem('getListTempleId'), '_top', null, true);
            } else if (localStorage.getItem('fifthParam') === '3') {
              if (localStorage.getItem('fourthParam') === '0') {
                window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
              } else {
                window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
              }
            } else if (localStorage.getItem('fifthParam') === '4') {
              if (localStorage.getItem('fourthParam') === '0') {
                window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
              } else {
                window.open('https://partner.hansmatrimony.com/hot-leads?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
              }

            } else if (localStorage.getItem('fifthParam') === '5') {
              if (localStorage.getItem('fourthParam') === '0') {
                window.open('https://partner.hansmatrimony.com/subscriptionSeens', '_top', null, true);
              } else {
                window.open('https://partner.hansmatrimony.com/subscriptionSeens?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
              }
            } else {
              if (localStorage.getItem('fourthParam') === '0') {
                window.open('https://partner.hansmatrimony.com/pendingApproval', '_top', null, true);
              } else {
                window.open('https://partner.hansmatrimony.com/pendingApproval?page=' + localStorage.getItem('fourthParam'), '_top', null, true);
              }
            }
          } else if (localStorage.getItem('extra')) {
            if (localStorage.getItem('extra') === '2') {
              window.open('https://partner.hansmatrimony.com/redirectRequestLeadsView?request_type=1&temple_id=' +
                localStorage.getItem('getListTempleId'), '_top', null, true);
            } else if (localStorage.getItem('extra') === '3') {
              window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
            } else if (localStorage.getItem('extra') === '4') {
              window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
            }
          } else {
            if (localStorage.getItem('getListMobile')) { // mode 3
              window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
            } else if (localStorage.getItem('getListId')) { // mode 2
              window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
            }
          }
          // this is old logic , not changing this
          // if (localStorage.getItem('getListMobile')) { // mode 3
          //   window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
          // } else if (localStorage.getItem('getListId')) { // mode 2
          //   window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
          // }

          this.clearHistory();
        } else {
          if (data.message) {
            this.ngxNotificationService.error(data.message);
          } else {
            this.ngxNotificationService.error('Not Approved');
          }
        }
      }, err => {
        console.log(err);
        this.ngxNotificationService.error(err.message, 'Not Approved');
      }
    );
  }
  validate(userProfile: Profile) {
    console.log(userProfile);
    if (userProfile.name === null || userProfile.name === '') {
      return this.ngxNotificationService.error('Enter Name');
    } else if (userProfile.mobile === null || userProfile.mobile === '') {
      return this.ngxNotificationService.error('Enter Mobile Number');
    } else if (userProfile.relation === null || userProfile.relation === '') {
      return this.ngxNotificationService.error('Select Relation');
    } else if (userProfile.gender === null || userProfile.gender === '') {
      return this.ngxNotificationService.error('Select Gender');
    } else if (userProfile.dob === null || userProfile.dob === '') {
      return this.ngxNotificationService.error('Enter D.O.B');
    } else if (userProfile.height === null || userProfile.height === '') {
      return this.ngxNotificationService.error('Select Height');
    } else if (userProfile.weight === null || userProfile.weight === '') {
      return this.ngxNotificationService.error('Enter Weight');
    } else if (userProfile.martialStatus === null || userProfile.martialStatus === '') {
      return this.ngxNotificationService.error('Select Marital Status');
    } else if (userProfile.annualIncome === null || userProfile.annualIncome === '') {
      return this.ngxNotificationService.error('Enter Annual Income');
    } else if (userProfile.religion === null || userProfile.religion === '') {
      return this.ngxNotificationService.error('Select Religion');
    } else if (userProfile.caste === null || userProfile.caste === '') {
      return this.ngxNotificationService.error('Select Caste');
    } else if (userProfile.qualification === null || userProfile.qualification === '') {
      return this.ngxNotificationService.error('Select Qualification');
    } else if (userProfile.occupation === null || userProfile.occupation === '') {
      return this.ngxNotificationService.error('Select Occupation');
    } else if (userProfile.designation === null || userProfile.designation === '') {
      return this.ngxNotificationService.error('Enter Designation');
    } else if (userProfile.occupation !== 'Not Working' && userProfile.workingCity === null || userProfile.workingCity === '') {
      return this.ngxNotificationService.error('Enter Working City');
    } else if (userProfile.manglik === null || userProfile.manglik === '') {
      return this.ngxNotificationService.error('Select Manglik Status');
    } else if (userProfile.locality === null || userProfile.locality === '') {
      return this.ngxNotificationService.error('Enter Locality');
    } else if (userProfile.about === null || userProfile.about === '') {
      return this.ngxNotificationService.error('Enter About');
    } else if (userProfile.birthPlace === null || userProfile.birthPlace === '') {
      return this.ngxNotificationService.error('Enter Birth Place');
    } else if (userProfile.foodChoice === null || userProfile.foodChoice === '') {
      return this.ngxNotificationService.error('Select Food Choice');
    } else if (userProfile.fatherStatus === null || userProfile.fatherStatus === '') {
      return this.ngxNotificationService.error('Select Father Status');
    } else if (userProfile.motherStatus === null || userProfile.motherStatus === '') {
      return this.ngxNotificationService.error('Select Mother Status');
    } else if (userProfile.familyIncome === null || userProfile.familyIncome === '') {
      return this.ngxNotificationService.error('Enter Family Income');
    } else if (!userProfile.image1 || userProfile.image1 === null || userProfile.image1 === '') {
      return this.ngxNotificationService.error('Select Image 1');
    } else if (!(userProfile.college || userProfile.college === '') && this.verifyForm.controls.college.invalid) {
      return this.ngxNotificationService.error('Enter College Name');
    } else if ((!userProfile.company || userProfile.company === '') && this.verifyForm.controls.company.invalid) {
      return this.ngxNotificationService.error('Enter Company Name');
    } else if (userProfile.fatherStatus !== 'Not Alive' && userProfile.fatherStatus !== 'Not Working' &&
      userProfile.family.occupation === null || userProfile.family.occupation === '') {
      return this.ngxNotificationService.error('Select Father Occupation');
    } else if (userProfile.motherStatus !== 'Not Alive' && userProfile.motherStatus !== 'Not Working' &&
      userProfile.family.occupation_mother === null || userProfile.family.occupation_mother === '') {
      return this.ngxNotificationService.error('Select Mother Occupation');
    } else if (userProfile.family.married_daughters == null) {
      return this.ngxNotificationService.error('Select Married Sisters');
    } else if (userProfile.family.unmarried_daughters == null) {
      return this.ngxNotificationService.error('Select Un Married Sisters');
    } else if (userProfile.family.married_sons == null) {
      return this.ngxNotificationService.error('Select Married Brothers');
    } else if (userProfile.family.unmarried_sons == null) {
      return this.ngxNotificationService.error('Select Un Married Brothers');
    } else if ((!userProfile.family.house_type || userProfile.family.house_type === '') && this.verifyForm.controls.house_type.invalid) {
      return this.ngxNotificationService.error('Select House Type');
    } else if ((!userProfile.family.family_type || userProfile.family.family_type === '') && this.verifyForm.controls.family_type.invalid) {
      return this.ngxNotificationService.error('Select Family Type');
    } else if ((!userProfile.family.city || userProfile.family.city === '') && this.verifyForm.controls.family_living_in.invalid) {
      return this.ngxNotificationService.error('Enter Family Living In');
    } else if (userProfile.photoScore < 1) {
      return this.ngxNotificationService.error('Give a score');
    } else {
      this.approveProfileApi();
    }
  }
}



