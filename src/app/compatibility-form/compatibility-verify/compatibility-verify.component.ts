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
  Occupation: string[] = [
    "Private Job",
    "Business/Self-Employed",
    "Govt Job",
    "Doctor",
    "Teacher",
    "Homely",
    "Not Employed",
  ];
  Status: string[] = ["Alive", "Not Alive"];
  FamilyType: string[] = ["Joint", "Nuclear"];
  Count: any[] = ["None", 0, 1, 2, 3, 4, 5, 6, 7, 8];
  HouseType: string[] = ["Owned", "Rented", "Leased"];

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

    this.verifyForm = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      college: ['', Validators.compose([Validators.required])],
      company: ['', Validators.compose([Validators.required])],
      fathers_occupation: ['', Validators.compose([Validators.required])],
      mothers_occupation: ['', Validators.compose([Validators.required])],
      sisters_married: ['', Validators.compose([Validators.required])],
      sisters_unmarried: ['', Validators.compose([Validators.required])],
      brothers_married: ['', Validators.compose([Validators.required])],
      brothers_unmarried: ['', Validators.compose([Validators.required])],
      house_type: ['', Validators.compose([Validators.required])],
      family_type: ['', Validators.compose([Validators.required])],
      family_living_in: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {

  }

  onDate(event): void {
    console.log(event);
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
  onSubmit() {
    console.log(this.verifyForm.value);
    console.log(this.verifyForm.valid);
    if (this.verifyForm.valid) {
      // the code for onsubmitting goes here.
    }
  }


  // getProfile() {
  //   this.spinner.show();
  //   const leadId = localStorage.getItem('getListLeadId');
  //   const id = localStorage.getItem('getListId');
  //   console.log(id, leadId);
  //   const myprofileData = new FormData();
  //   myprofileData.append('id', id);
  //   myprofileData.append('contacted', '1');
  //   myprofileData.append('is_lead', leadId);

  //   // tslint:disable-next-line: max-line-length
  //   return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', myprofileData).pipe(timeout(7000), retry(2), catchError(e => {
  //     throw new Error('Server Timeout ' + e);
  //   })).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       this.profileData = data;
  //       if (this.fourPageService.userThroughGetList) {
  //         this.setProfileValues(data);
  //       }
  //       this.spinner.hide();
  //     },
  //     (error: any) => {
  //       this.spinner.hide();
  //       console.log(error);
  //       this.ngxNotificationService.error('Something Went Wrong');
  //     }
  //   );
  // }
  // getProfilePhoto(carous: any, index: string): string {
  //   if (carous && carous !== '' && carous !== 'null') {
  //     const carousel: object = JSON.parse(carous);
  //     const keys = Object.keys(carousel);
  //     // console.log(carousel[index]);
  //     if (carousel[keys[index]]) {
  //       return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
  //     }
  //   }
  // }
  // setProfileValues(profileData) {
  //   if (!localStorage.getItem('getListId') && !localStorage.getItem('getListMobile')) {
  //     localStorage.setItem('getListTempleId', profileData.profile.temple_id);
  //   }
  //   this.userProfile.name = profileData.profile.name;
  //   this.userProfile.mobile = profileData.family.mobile;

  //   localStorage.setItem('getListMobile', profileData.family.mobile ? profileData.family.mobile : '');

  //   this.userProfile.email = profileData.family.email;

  //   if (profileData.family.relation === 'Mother') {
  //     this.userProfile.relation = 'Son';
  //   } else if (profileData.family.relation === 'Father') {
  //     this.userProfile.relation = 'Daughter';
  //   } else {
  //     this.userProfile.relation = profileData.family.relation;
  //   }

  //   this.userProfile.gender = profileData.profile.gender;
  //   this.userProfile.dob = profileData.profile.birth_date;
  //   this.userProfile.height = profileData.profile.height;
  //   this.userProfile.weight = profileData.profile.weight;
  //   this.userProfile.martialStatus = profileData.profile.marital_status;
  //   this.userProfile.annualIncome = profileData.profile.monthly_income;
  //   if (profileData.family.religion) {
  //     this.Caste = true;
  //   }
  //   this.userProfile.religion = profileData.family.religion;
  //   this.userProfile.caste = profileData.family.caste;
  //   this.userProfile.manglik = profileData.profile.manglik;
  //   this.locality = profileData.family.locality;
  //   this.userProfile.locality = profileData.family.locality;
  //   this.lat = profileData.profile.lat_locality;
  //   this.long = profileData.profile.long_locality;
  //   this.userProfile.qualification = profileData.profile.degree;
  //   this.userProfile.occupation = profileData.profile.occupation;
  //   this.userProfile.designation = profileData.profile.profession;
  //   this.userProfile.workingCity = profileData.profile.working_city;
  //   this.userProfile.about = profileData.profile.about;
  //   this.userProfile.birthPlace = profileData.profile.birth_place;
  //   this.userProfile.birthTime = profileData.profile.birth_time;
  //   this.userProfile.gotra = profileData.family.gotra;
  //   this.userProfile.foodChoice = profileData.profile.food_choice;
  //   this.userProfile.fatherStatus = profileData.family.father_status;
  //   this.userProfile.motherStatus = profileData.family.mother_status;
  //   this.userProfile.familyIncome = profileData.family.family_income;
  //   this.userProfile.image1 = this.getProfilePhoto(profileData.profile.carousel, '0');
  //   this.userProfile.image2 = this.getProfilePhoto(profileData.profile.carousel, '1');
  //   this.userProfile.image3 = this.getProfilePhoto(profileData.profile.carousel, '2');

  //   console.log(this.userProfile);
  //   this.fourPageService.setProfile(this.userProfile);
  //   this.fourPageService.getListData.emit(true);
  //   this.setverifyFormData();
  // }

  // setverifyFormData() {
  //   this.verifyForm.patchValue({
  //     firstName: this.userProfile.name ? this.userProfile.name.split(' ')[0] : '',
  //     lastName: this.userProfile.name ? this.userProfile.name.split(' ')[1] : '',
  //     phone: this.userProfile.mobile,
  //     email: this.userProfile.email,
  //     Relation: this.userProfile.relation,
  //     gender: this.userProfile.gender,
  //     birth_date: this.userProfile.dob ? this.userProfile.dob.toString().split('-')[2] : '',
  //     birth_month: this.userProfile.dob ? this.getMonthString(this.userProfile.dob.toString().split('-')[1]) : '',
  //     birth_year: this.userProfile.dob ? this.years[this.years.indexOf(this.userProfile.dob.toString().split('-')[0])] : '',
  //     Height: this.userProfile.height ? this.Heights1.indexOf(this.userProfile.height) : '',
  //     Weight: this.userProfile.weight,
  //     MaritalStatus: this.userProfile.martialStatus,
  //     AnnualIncome: this.userProfile.annualIncome,
  //     Religion: this.userProfile.religion,
  //     Castes: this.userProfile.caste,
  //     Mangalik: this.userProfile.manglik,
  //     locality: this.userProfile.locality,
  //   });
  // }
}


