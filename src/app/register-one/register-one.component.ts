

import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Observable
} from 'rxjs';
import {
  startWith,
  map,
  sample
} from 'rxjs/operators';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  Router
} from '@angular/router';

import {
  MatDialog
} from '@angular/material/';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}

@Component({
  selector: 'app-register-one',
  templateUrl: './register-one.component.html',
  styleUrls: ['./register-one.component.css']
})
export class RegisterOneComponent implements OnInit {

  currentCity;
  maritalStatus;
  gender;
  caste;
  maxHeight;
  minHeight;
  minAge;
  maxAge;
  indexForHeight: number;
  isCompleted2 = false;
  changeNumber = false;
  PageTwo: FormGroup;
  mapping_id: number;
  castePref: any;
  suc: any = [];
  locationCity: Location = null;
  addressCity = null;

  Caste = false;
  AllCastes = false;
  fd: false;
  currentAge: number;
  public message: string;

  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
  Religions: string[] = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Bahai'];
  MaritalStatus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorced', 'Widowed', 'Anulled'];
  AnnualIncome: any[] = ['No Income', 'Rs 0-1 Lakh', 'Rs 1-2 Lakh', 'Rs 2-3 Lakh', 'Rs 3-4 Lakh', 'Rs 4-5 Lakh', 'Rs 5-7.5 Lakh',
    'Rs 7.5-12 Lakh',
    'Rs 12-15 Lakh', 'Rs 15-20 Lakh', 'Rs 20-25 Lakh', 'Rs 25-50 Lakh', 'Rs 50Lakh-1Crore', 'Rs 1Crore+'
  ];
  Castes: hd[];


  ReligionOptions: Observable < string[] > ;
  MartalStatusOtions: Observable < string[] > ;
  CasteOptions: Observable < hd[] > ;
  AOptions: Observable < any[] > ;
  HigherEducationOptions: Observable < hd[] > ;

  getcastes: any = [];
  options: any = [];
  location: any = '';
  casteo: Observable<string[]>;

  // tslint:disable-next-line: max-line-length
  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router, private http: HttpClient,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {
    this.PageTwo = this._formBuilder.group({
      Religion: ['', Validators.compose([Validators.required])],
      MaritalStatus: ['', Validators.compose([Validators.required])],
      Height: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
      Weight: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
      Castes: ['', Validators.compose([])],
      gotra: ['', Validators.compose([])],
      Currentcity: ['', Validators.compose([Validators.required])],
      AnnualIncome: ['', Validators.compose([Validators.required])],
    });


  }



  private _Castefilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    localStorage.setItem('annualIncome', '');
    localStorage.setItem('selectedCaste', '');
    this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
      this.getcastes = res;
    });
    this.casteo = this.PageTwo.get('Castes').valueChanges.pipe(
      startWith(''),
      map(value => this._Castefilter(value))
    );


  }

  handleAddressChange(e) {
    this.location = e.formatted_address;
    // console.log(e.geometry.location.lat())
  }

  Religion(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === 'Hindu') {
      // console.log
      this.Caste = true;
      this.AllCastes = true;
    } else if (event.currentTarget.value === 'Muslim') {
      this.Caste = true;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Sikh') {
      this.Caste = true;
      this.AllCastes = true;
    } else if (event.currentTarget.value === 'Christian') {
      this.Caste = false;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Buddhist') {
      this.Caste = false;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Jain') {
      this.Caste = true;
      this.AllCastes = true;
    } else if (event.currentTarget.value === 'Parsi') {
      this.Caste = false;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Jewish') {
      this.Caste = false;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Bahai') {
      this.Caste = false;
      this.AllCastes = false;
    }
  }


  secondStep() {
    if (this.PageTwo.valid) {
      if (this.locationCity === null) {
        this.ngxNotificationService.error('Select a valid current city');
      } else {
      this.spinner.show();
      const firststepdata = new FormData();
      firststepdata.append('identity_number', localStorage.getItem('identity_number'));
      firststepdata.append('religion', this.PageTwo.value.Religion);
      firststepdata.append('caste', this.PageTwo.value.Castes);
      firststepdata.append('marital_status', this.PageTwo.value.MaritalStatus);
      firststepdata.append('height', this.Heights1[this.PageTwo.value.Height]);
      firststepdata.append('weight', this.PageTwo.value.Weight);
      firststepdata.append('gotra', this.PageTwo.value.gotra);
      firststepdata.append('annual_income', this.PageTwo.value.AnnualIncome);
      firststepdata.append('city', this.addressCity);


      localStorage.setItem('annualIncome', this.PageTwo.value.AnnualIncome);

      console.log(this.PageTwo.value.Castes);
      localStorage.setItem('selectedCaste', this.PageTwo.value.Castes);

      if (localStorage.getItem('gender') === 'Male') {
        if (Number(this.Heights1[this.PageTwo.value.Height]) > 51 ) {
          localStorage.setItem('minHeight', this.Heights1[this.PageTwo.value.Height - 3] );
        } else {
          localStorage.setItem('minHeight', '48');
        }
        localStorage.setItem('maxHeight', this.Heights1[this.PageTwo.value.Height - 1]);
        console.log(this.Heights1[this.PageTwo.value.Height]);
    } else {
      localStorage.setItem('minHeight', this.Heights1[this.PageTwo.value.Height]);
      localStorage.setItem('maxHeight', this.Heights1[this.PageTwo.value.Height + 5]);
      console.log(this.PageTwo.value.Height);
    }

      localStorage.setItem('maritalStatus', this.PageTwo.value.MaritalStatus);

      console.log(firststepdata);

      return this.http.post('https://partner.hansmatrimony.com/api/' + 'createFirstPageProfilePWA', firststepdata).subscribe(
      res => {
        this.suc = res;
        console.log('suc', res);
        if (this.suc.first_page_status === 'Y') {
            (window as any).ga('send', 'event', 'Personal Details', 'Personal Details Entered', {
              hitCallback: () => {
                console.log('Tracking personal details successful');
              }});
            this.spinner.hide();
            this.ngxNotificationService.success('Profile Details Submitted Succesfully!', 'success');
            this.router.navigate(['/register-two']);
        } else {
          this.spinner.hide();
          this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!', 'danger');
          }
      }, err => {
        this.spinner.hide();
        this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!', 'danger');
      });
    }
    } else {
      this.ngxNotificationService.error('Please fill all the details');
    }
  }

  onAutocompleteSelected(event) {
    this.addressCity = event.formatted_address;
    console.log('Current City', this.addressCity);
  }

  onLocationSelected(e) {
    this.locationCity = e;
    console.log(e);
  }

}



