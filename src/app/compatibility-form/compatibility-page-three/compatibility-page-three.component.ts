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
            private fourPageService: FourPageService,
            private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {
    this.PageThree = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      BirthPlace: ['', Validators.compose([Validators.required])],
      BirthTime: [''],
      Gotra: [''],
      FoodChoice: ['', Validators.compose([Validators.required])],
      FatherStatus: ['', Validators.compose([Validators.required])],
      MotherStatus: ['', Validators.compose([Validators.required])],
      FamilyIncome: ['', Validators.compose([Validators.max(999)])],
    });
  }

ngOnInit() {

    }


firstStep() {
      console.log(this.PageThree.value.BirthPlace);
      if (this.birthPlace == null || this.birthPlace === '') {
      this.ngxNotificationService.error('Select A Valid Birth Place');
      return;
    }

      if (this.PageThree.valid) {
              this.spinner.show();
              const firststepdata = new FormData();
              firststepdata.append('id', localStorage.getItem('id'));
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
          } else {
            // tslint:disable-next-line: forin
            for (const control in this.PageThree.controls) {
                if (this.PageThree.controls[control].value === '') {
                  this.errors.push(control);
                }
            }
            this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
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
  if (this.PageThree.valid) {
    this.fourPageService.form3Completed.emit(true);
   }
  console.log('location of family', e);
}

  // tslint:disable-next-line: no-shadowed-variable
  changed(element: any) {
    console.log(element);
    if (this.PageThree.valid) {
      this.fourPageService.form3Completed.emit(true);
     }
  }
}



