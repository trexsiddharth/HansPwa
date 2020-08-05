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

    // this.verifyForm = this._formBuilder.group({
    //   // tslint:disable-next-line: max-line-length
    //   college: ['', Validators.compose([Validators.required])],
    //   company: ['', Validators.compose([Validators.required])],
    //   fathers_occupation: ['', Validators.compose([Validators.required])],
    //   mothers_occupation: ['', Validators.compose([Validators.required])],
    //   sisters_married: ['', Validators.compose([Validators.required])],
    //   sisters_unmarried: ['', Validators.compose([Validators.required])],
    //   brothers_married: ['', Validators.compose([Validators.required])],
    //   brothers_unmarried: ['', Validators.compose([Validators.required])],
    //   house_type: ['', Validators.compose([Validators.required])],
    //   family_type: ['', Validators.compose([Validators.required])],
    //   family_living_in: ['', Validators.compose([Validators.required])],
    // });
    this.verifyForm = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      college: [''],
      company: [''],
      fathers_occupation: [''],
      mothers_occupation: [''],
      sisters_married: [''],
      sisters_unmarried: [''],
      brothers_married: [''],
      brothers_unmarried: [''],
      house_type: [''],
      family_type: [''],
      family_living_in: [''],
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

      personalProfileDataForm.append("id", id);
      personalProfileDataForm.append("is_lead", leadId);

      personalProfileDataForm.append(
        "college", this.verifyForm.value.college);

      personalProfileDataForm.append(
        "company", this.verifyForm.value.company
      );
      console.log(personalProfileDataForm);
      this.http
        .post(
          "https://partner.hansmatrimony.com/api/updatePersonalDetails",
          personalProfileDataForm
        )
        .subscribe(
          (data: any) => {
            console.log(data);
            this.onSubmitFamily();
          },
          (error: any) => {
            console.log(error);
            this.ngxNotificationService.error(
              "Something Went Wrong, Try Again Later"
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
          "Fill the " + this.errors[0] + " detail"
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

    newFamilyForm.append("id", id);
    newFamilyForm.append("is_lead", leadId);
    newFamilyForm.append("family_type", this.verifyForm.value.family_type);
    newFamilyForm.append("house_type", this.verifyForm.value.house_type);
    newFamilyForm.append("occupation_father", this.verifyForm.value.fathers_occupation);
    newFamilyForm.append("occupation_mother", this.verifyForm.value.mothers_occupation);
    newFamilyForm.append("married_sons", this.verifyForm.value.brothers_married);
    newFamilyForm.append("unmarried_sons", this.verifyForm.value.brothers_unmarried);
    newFamilyForm.append("married_daughters", this.verifyForm.value.sisters_married);
    newFamilyForm.append("unmarried_daughters", this.verifyForm.value.sisters_unmarried);
    newFamilyForm.append("city", this.verifyForm.value.family_living_in);

    this.http
      .post(
        "https://partner.hansmatrimony.com/api/updateFamilyDetails",
        newFamilyForm
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log("Family Deatils Updated successfully");
        },
        (error: any) => {
          console.log(error);
          this.ngxNotificationService.error(
            "Something Went Wrong, Try Again Later"
          );
        }
      );
  }
}


