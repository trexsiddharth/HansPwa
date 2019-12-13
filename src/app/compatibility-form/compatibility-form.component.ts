
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

import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
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
  MaritalStatus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorced', 'Widowed', 'Anulled', 'Doesn\'t Matter'];
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

  otpForm: FormGroup;
  otp = '';
  otpVerified = false;
  otp1: any;
  otp2: any;
  otp3: any;
  otp4: any;
  numberCheck: string;
  changeNumber = false;
  otpStatus = false;
  createProfile: string[] = ['Myself', 'Father', 'Mother', 'Brother' , 'Sister' , 'Other'];


  constructor(private http: HttpClient, public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {
    this.PageOne = this._formBuilder.group({
      fullname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      create: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      whatsapp: ['', Validators.compose([Validators.required])],
      birth_date: ['', Validators.compose([Validators.required])],
      MaritalStatus: ['', Validators.compose([Validators.required])],
      AnnualIncome: ['', Validators.compose([Validators.required])],
      Religion: ['', Validators.compose([Validators.required])],
      Castes: ['', Validators.compose([Validators.required])],
      Mangalik: ['', Validators.compose([Validators.required])]
    });
  }

  // OTP
  makeItTrue() {
    if (this.changeNumber === false) {
      this.changeNumber = true;
    } else {
      this.changeNumber = false;
    }
    console.log(this.changeNumber);
  }
  numberChange(event: any) {
    console.log('asd', event);
    this.PageOne.value.phone = event.target.value();

  }

  makeOtp() {
    this.otp1 = document.getElementById('enterOTP1') as HTMLInputElement;
    this.otp += this.otp1.value;

    this.otp2 = document.getElementById('enterOTP2') as HTMLInputElement;
    this.otp += this.otp2.value;

    this.otp3 = document.getElementById('enterOTP3') as HTMLInputElement;
    this.otp += this.otp3.value;

    this.otp4 = document.getElementById('enterOTP4') as HTMLInputElement;
    this.otp += this.otp4.value;
  }

  changePlaces(event) {
    const element = event.srcElement.nextElementSibling; // get the sibling element

    if (element == null) { // check if its null
      return;
    } else {
      element.focus();
    } // focus if not null
    console.log('cngd');
  }

  openDialog(dialog): void {
    this.otpStatus = false;
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(dialog, {

      // panelClass: 'custom-modalbox'
    });
    this.sendOtp();
  }

  Cross_click() {
    this.dialog.closeAll();
  }

  sendOtp() {
    console.log('changenumber', this.changeNumber);
    if (this.changeNumber === true) {
      const changeContact = document.getElementById('changeContact') as HTMLInputElement;
      console.log(changeContact);
      this.PageOne.value.phoneNumber = changeContact.value;
      console.log(changeContact);
    }
    const mobileNumber = {
      mobile: this.PageOne.value.phone
    };

    return this.http.post<{otp: any}>('https://partner.hansmatrimony.com/api/sendOTP', mobileNumber).subscribe(
      res => {
          console.log(res);
      }
    );
  }

  resendOtp() {
    this.spinner.show();
    const mobileNumber = {
      mobile: this.PageOne.value.phone
    };
    return this.http.post<{otp: any}>('https://partner.hansmatrimony.com/api/resendOTP', mobileNumber).subscribe(
      res => {
          console.log(res);
          this.spinner.hide();
      }
    );
  }

  verifyOtp() {
    this.makeOtp();
    this.otpStatus = true;
    console.log('otp', this.otp);
    const otp = {
      otp: this.otp,
      mobile: this.PageOne.value.phone
    };
    return this.http.post<{type: any, message: any}>('https://partner.hansmatrimony.com/api/verifyOTP', otp).subscribe(res => {
      console.log('verify res', res);
      this.otp = '';
      this.ngxNotificationService.success(res.message, 'success');
      if (res.type === 'success') {
        this.Cross_click();
        this.otpVerified = true;
        localStorage.setItem('mobile_number', this.PageOne.value.phone) ;
        if (this.otpVerified === true) {
          (window as any).ga('send', 'event', 'Register', 'registered', {
            hitCallback: () => {
              console.log('Tracking register successful');
            }});
          console.log('verified', this.otpVerified);
          this.ngxNotificationService.success('Account Details Submitted Succesfully!', 'success');
          this.spinner.show();
          this.firstStep();
          this.otpVerified = false;
        }
      }
    });
  }

  checkExist() {
    this.spinner.show();
    console.log(this.PageOne.value.phone);
    if (this.PageOne.valid) {
      const data = {
        email: this.PageOne.value.email,
        mobile: this.PageOne.value.phone
      };
      // tslint:disable-next-line: max-line-length
      return this.http.post<{ error_message: string , isUnique: string }>('https://partner.hansmatrimony.com/api/checkExist', data).subscribe(res => {
      console.log(res);
      if (res.isUnique !== 'N') {
        this.spinner.hide();
        this.openDialog(this.otpModal);
        console.log('vrfied', this.otpVerified);
      } else {
        this.ngxNotificationService.success(res.error_message);
        this.spinner.hide();
      }
    });
    } else {
      this.ngxNotificationService.error('Fill the form details');
      this.spinner.hide();
    }
  }

  firstStep() {
    if (this.PageOne.valid) {

    const firststepdata = new URLSearchParams();
    firststepdata.set('email', this.PageOne.value.email);
    firststepdata.set('password', this.PageOne.value.password);
    firststepdata.set('relation', this.PageOne.value.create);
    firststepdata.set('gender', this.PageOne.value.gender);
    firststepdata.set('name', this.PageOne.value.fullname);
    localStorage.setItem('gender', this.PageOne.value.gender);

    firststepdata.set('whatsapp', this.PageOne.value.whatsapp);
    firststepdata.set('mobile', this.PageOne.value.phone);
    this.gender = this.PageOne.value.gender;
    console.log(this.gender);

    // tslint:disable-next-line: max-line-length
    return this.http.post('https://partner.hansmatrimony.com/api/' + 'createZeroPageProfilePWA?' + firststepdata , null).subscribe((res: any) => {
      console.log('first', res);

      if (res.zeroth_page_status === 'Y') {
        this.spinner.hide();
        localStorage.setItem('identity_number', res.identity_number);
        localStorage.setItem('gender', this.PageOne.value.gender);
        this.router.navigate(['/register-one']);
        this.ngxNotificationService.success(res.error_message, 'success');
      } else {
        this.spinner.hide();
        this.ngxNotificationService.error(res.error_message, 'danger');
      }

    }, err => {
      this.spinner.hide();
      this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!', 'danger');
      console.log(err);
    });
  } else {
    this.ngxNotificationService.error('Fill the details');
  }
  }

  private _Castefilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
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
    this.casteo = this.PageOne.get('Castes').valueChanges.pipe(
      startWith(''),
      map(value => this._Castefilter(value))
    );
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
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("/");

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
}


