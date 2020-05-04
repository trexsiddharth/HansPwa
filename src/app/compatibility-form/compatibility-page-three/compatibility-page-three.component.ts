import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
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
  Router
} from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import {  NotificationsService } from '../../notifications.service';

import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/';
import { FourPageService } from '../four-page.service';
import { Profile } from '../profile';
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
  selector: 'app-compatibility-page-three',
  templateUrl: './compatibility-page-three.component.html',
  styleUrls: ['./compatibility-page-three.component.css']
})
export class CompatibilityPageThreeComponent implements OnInit {
    @ViewChild('otpModal', {static: false}) private otpModal: any;
  
    time = {
      hour: 13,
      minute: 30
    };
    PageThree: FormGroup;
 

    errors: string[] = [];
    authMobileNumberStatus = false;
    birthPlace;
    birthPlaceText;


constructor(private http: HttpClient, public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router,
            public notification: NotificationsService,
            public fourPageService: FourPageService,
            private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {
    this.PageThree = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      BirthPlace: [''],
      BirthTime: [''],
      Gotra: [''],
      FoodChoice: [''],
      FatherStatus: [''],
      MotherStatus: [''],
      FamilyIncome: ['', Validators.compose([Validators.max(999)])],
    });
  }

ngOnInit() {
        if (localStorage.getItem('getListId') && localStorage.getItem('getListLeadId')) {
          this.fourPageService.getListData.subscribe(
            () => {
                this.setFormThreeData(this.fourPageService.getProfile());
            }
          );
        }
    }

    skip() {
      this.fourPageService.form3Completed.emit(true);
      setTimeout(() => {
        document.getElementById('skipBtn').click();
        this.Analytics('Four Page Registration', 'Four Page Registration Page Three',
        'Skipped through Four Page Registration Page Three');
      }, 100);
    }

    isValid(notificationStatus): boolean { // notification status -> whether to show error notification
      if (this.birthPlace == null || this.birthPlace === '') {
        if (notificationStatus === 1) {
          this.ngxNotificationService.error('Select A Valid Birth Place');
        }
        return false;
    } else if (!this.PageThree.value.FoodChoice) {
      if (notificationStatus === 1) {
      this.ngxNotificationService.error('Select A Valid Food Choice');
      }
      return false;
    } else if (!this.PageThree.value.FatherStatus) {
      if (notificationStatus === 1) {
      this.ngxNotificationService.error('Select A Valid Father Status');
      }
      return false;
    } else if (!this.PageThree.value.MotherStatus) {
      if (notificationStatus === 1) {
      this.ngxNotificationService.error('Select A Valid Mother Status');
      }
      return false;
    } else if (!this.PageThree.value.FamilyIncome && !this.PageThree.controls.FamilyIncome.valid) {
      if (notificationStatus === 1) {
      this.ngxNotificationService.error('Enter A Valid Family Income');
      }
      return false;
    } else {
      return true;
    }
    }


firstStep() {
      console.log(this.PageThree.value.BirthPlace);
      if (!this.fourPageService.getUserThrough() && this.isValid(1) === false ) {
        this.fourPageService.form3Completed.emit(false);
        return;
    } else {
      this.spinner.show();
      const firststepdata = new FormData();
      firststepdata.append('id', localStorage.getItem('id') ? localStorage.getItem('id') : localStorage.getItem('getListId') );
      firststepdata.append('birth_place', this.birthPlaceText);

      if (this.PageThree.value.BirthTime) {
              firststepdata.append('birth_time', this.PageThree.value.BirthTime);
              }
      firststepdata.append('food_choice', this.PageThree.value.FoodChoice);
      firststepdata.append('gotra', this.PageThree.value.Gotra);
      firststepdata.append('father_status', this.PageThree.value.FatherStatus);
      firststepdata.append('mother_status', this.PageThree.value.MotherStatus);
      firststepdata.append('family_income', this.PageThree.value.FamilyIncome);


            // tslint:disable-next-line: max-line-length
      return this.http.post('https://partner.hansmatrimony.com/api/formThreeProfile', firststepdata ).subscribe((res: any) => {
              console.log('first', res);

              if (res.status === 1) {
                this.spinner.hide();

                this.fourPageService.form3Completed.emit(true);

                if (this.fourPageService.getUserThrough()) {
                this.updateFormThreeData(firststepdata);
                }
                this.Analytics('Four Page Registration', 'Four Page Registration Page Three',
                'Registered through Four Page Registration Page Three');
                // this.ngxNotificationService.success('Registered Successfully');
              } else {
                this.fourPageService.form3Completed.emit(false);
                this.spinner.hide();
                this.ngxNotificationService.error(res.message);
              }
            }, err => {
              this.fourPageService.form3Completed.emit(false);
              this.spinner.hide();
              this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
              console.log(err);
            });
    }

  }

Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');

      }
    });
  }

onAutocompleteSelected(event) {
    this.PageThree.value.BirthPlace = event.formatted_address;
    this.birthPlaceText = event.formatted_address;
    console.log('address of family', this.PageThree.value.BirthPlace);
}
onLocationSelected(e) {
  this.birthPlace = e;
  console.log('location of family', e);
}

  // tslint:disable-next-line: no-shadowed-variable
  changed(element: any) {
    console.log(element);
  }
  updateFormThreeData(profileData: FormData) {
    this.fourPageService.profile.birthPlace = profileData.get('birth_place').toString();
    this.fourPageService.profile.birthTime = profileData.get('birth_time').toString();
    this.fourPageService.profile.gotra = profileData.get('gotra').toString();
    this.fourPageService.profile.foodChoice = profileData.get('food_choice').toString();
    this.fourPageService.profile.fatherStatus = profileData.get('father_status').toString();
    this.fourPageService.profile.motherStatus = profileData.get('mother_status').toString();
    this.fourPageService.profile.familyIncome = profileData.get('family_income').toString();
    console.log(this.fourPageService.getProfile());
  }

  setFormThreeData(userProfile: Profile) {
    this.birthPlaceText = userProfile.birthPlace ? userProfile.birthPlace : '';
    this.PageThree.patchValue({
      BirthPlace: userProfile.birthPlace,
      BirthTime: userProfile.birthTime,
      Gotra: userProfile.gotra,
      FoodChoice: userProfile.foodChoice,
      FatherStatus: userProfile.fatherStatus,
      MotherStatus: userProfile.motherStatus,
      FamilyIncome: userProfile.familyIncome
    });
  }
}



