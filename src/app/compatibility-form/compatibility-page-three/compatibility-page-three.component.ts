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
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { element } from 'protractor';
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
    gender;
    MaritalStatus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorcee', 'Widowed', 'Anulled'];
    PageThree: FormGroup;

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
  
    // Height
      // tslint:disable-next-line: max-line-length
      Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
      // tslint:disable-next-line: max-line-length
      Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
  
   
    numberCheck: string = localStorage.getItem('RegisterNumber');
    changeNumber = false;
    otpStatus = false;
    createProfile: string[] = ['Myself', 'Father', 'Mother', 'Brother' , 'Sister' , 'Other'];
    // tslint:disable-next-line: max-line-length
    date: string[] = ['1', '2' , '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    // tslint:disable-next-line: max-line-length
    month: string[] = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    years: string[] = [
    '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980',
    '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
    '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
    '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
  ];
    errors: string[] = [];
    authMobileNumberStatus = false;

constructor(private http: HttpClient, public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router,
            public notification: NotificationsService,
            private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {
    this.PageThree = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      BirthPlace: ['', Validators.compose([Validators.required])],
      BirthTime: [''],
      Gotra: ['', Validators.compose([Validators.required])],
      FoodChoice: ['', Validators.compose([Validators.required])],
      FatherStatus: ['', Validators.compose([Validators.required])],
      MotherStatus: ['', Validators.compose([Validators.required])],
      AnnualIncome: ['', Validators.compose([Validators.required, Validators.max(999)])],
    });
  }

ngOnInit() {
    if (localStorage.getItem('RegisterNumber')) {
    this.numberCheck = localStorage.getItem('RegisterNumber').substr(3, localStorage.getItem('RegisterNumber').length);
    console.log(localStorage.getItem('RegisterNumber').substr(3, localStorage.getItem('RegisterNumber').length));
    }
    if (this.router.url.match('singleRegistration')) {
        this.authMobileNumberStatus = true;
      }
    document.querySelector('body').style.background = 'white';
    document.querySelector('body').style.backgroundImage = 'url(\'../../assets/bgicon.png\')';
    document.querySelector('body').style.backgroundSize = 'cover';
    this.spinner.hide();
    localStorage.setItem('gender', '');
    localStorage.setItem('mobile_number', '') ;
    localStorage.setItem('selectedCaste', '');
    this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
        this.getcastes = res;
      });
    }


firstStep() {
    this.errors = [];
    console.log('date', this.PageThree.value.birth_date);
    console.log('month', this.month.indexOf(this.PageThree.value.birth_month) + 1);
    console.log('year', this.PageThree.value.birth_year);

    if (this.PageThree.valid) {
      console.log('caste', this.PageThree.value.Castes);
      this.casteValidation(this.PageThree.value.Castes).then(res => {
          if (res === true) {
            if (this.PageThree.valid) {
              this.spinner.show();
              const date = this.PageThree.value.birth_date;
              const month = this.month.indexOf(this.PageThree.value.birth_month) + 1;
              const year = this.PageThree.value.birth_year;
              console.log(date + '-' + month + '-' + year);
              const firststepdata = new FormData();
              firststepdata.append('mobile', this.PageThree.value.phone);
              firststepdata.append('birth_date', date + '-' + month + '-' + year);
              firststepdata.append('gender', this.PageThree.value.gender);
              firststepdata.append('height', this.Heights1[this.PageThree.value.Height]);
              firststepdata.append('marital_status', this.PageThree.value.MaritalStatus);
              if (this.PageThree.value.Mangalik === 'Non-manglik') {
              firststepdata.append('manglik', 'No');
            } else {
              firststepdata.append('manglik', this.PageThree.value.Mangalik);
            }
              firststepdata.append('annual_income', this.PageThree.value.AnnualIncome);
              firststepdata.append('religion', this.PageThree.value.Religion);
              firststepdata.append('caste', this.PageThree.value.Castes);

              console.log('mobile', this.PageThree.value.phone);
              console.log('birth_date', this.birthDate);
              console.log('gender', this.PageThree.value.gender);
              console.log('height', this.Heights1[this.PageThree.value.Height]);
              console.log('marital_status', this.PageThree.value.MaritalStatus);
              if (this.PageThree.value.Mangalik === 'Non-manglik') {
              console.log('manglik', 'No');
            } else {
              console.log('manglik', this.PageThree.value.Mangalik);
            }
              console.log('annual_income', this.PageThree.value.AnnualIncome);
              console.log('religion', this.PageThree.value.Religion);
              console.log('caste', this.PageThree.value.Castes);


            // tslint:disable-next-line: max-line-length
              return this.http.post('https://partner.hansmatrimony.com/api/updateBasic', firststepdata ).subscribe((res: any) => {
              console.log('first', res);

              if (res.status === 1) {
                this.spinner.hide();
                localStorage.setItem('id', res.id);
                localStorage.setItem('gender', this.PageThree.value.gender);
                localStorage.setItem('mobile_number', this.PageThree.value.phone);
                this.Analytics('Single Page Registration', 'Single Page Registration', 'Registered through Single Page Registration');
                this.gtag_report_conversion('https://hansmatrimony.com/reg');
                localStorage.setItem('RegisterNumber', '');

                (window as any).fbq('track', 'SinglePageRegistration', {
                  value: 15,
                  currency: 'INR',
                  content_name: this.PageThree.value.phone,
                });
                (window as any).fbq('track', '692972151223870' , 'SinglePageRegistration', {
                  value: 15,
                  currency: 'INR',
                  content_name: this.PageThree.value.phone,
                });
                this.router.navigate(['/chat']);
                this.ngxNotificationService.success('Registered Successfully');
              } else {
                this.spinner.hide();
                this.ngxNotificationService.error(res.message);
              }
            }, err => {
              this.spinner.hide();
              this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!');
              console.log(err);
            });
          } else {
            this.ngxNotificationService.error('Fill the details');
          }
          }
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

  private _Castefilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
  }
Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');

      }
    });
  }
gtag_report_conversion(url) {
    (window as any).gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC'});
    return false;
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
      this.PageThree.get('Castes').setValue('');
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
  onAutocompleteSelected(event, index) {
    this.PageThree.value.BirthPlace = event.formatted_address;
    console.log('address of family', this.PageThree.value.BirthPlace);

}
}



