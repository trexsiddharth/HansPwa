

import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Observable
} from 'rxjs';
import {
  startWith,
  map
} from 'rxjs/operators';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  Router
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  MatDialog
} from '@angular/material/';
import { NgxSpinnerService } from 'ngx-spinner';
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
  selector: 'app-register-two',
  templateUrl: './register-two.component.html',
  styleUrls: ['./register-two.component.css']
})
export class RegisterTwoComponent implements OnInit,AfterViewInit {
 

  time = {
    hour: 13,
    minute: 30
  };
  motherTongue;
  minAge;
  maxAge;
  birthDate: any;
  isCompleted3 = false;
  dateofBirth: '';
  success = [];
  startDate = new Date(1985, 0, 1);
  birthdayValid;
  mapping_id: number;
  manglikValue: string;
  manglikPreference = ['Manglik', 'Anshik Manglik'];
  nonManglikPreference = ['Non-Manglik', 'Anshik Manglik'];
  castePref: any;
  prefManglik = [];

  HoroScopes = false;
  Mangaliks = false;
  fd: false;
  currentAge: number;
  public message: string;
  S = false;
  today: any;
  dd: any;
  mm: any;
  yyyy: any;
  suc: any = [];
  dropdownList: any = [];
  selectedItems = [];
  selectedItems1: any = [];
  dropdownSettings = {};

  stateGroups: StateGroup[] = [{
    letter: 'North',
    names: ['Hindi-Delhi',
      'Hindi-MP',
      'Hindi-UP',
      'Punjabi',
      'Bihari',
      'Rajasthani/Marwari',
      'Haryanvi',
      'Himachali',
      'Kashmiri',
      'Sindhi', 'Urdu'
    ]
  }, {
    letter: 'East',
    names: ['Bengali', 'Oriya', 'Assamese', 'Sikkim/ Nepali']
  }, {
    letter: 'South',
    names: ['Tamil',
      'Telugu',
      'Kannada',
      'Malayalam',
      'Tulu',
      'Urdu'
    ]
  }, {
    letter: 'West',
    names: ['Marathi',
      'Gujarati / Kutchi',
      'Hindi-MP',
      'Konkani',
      'Sindhi'
    ]
  }, {
    letter: 'Others',
    names: ['English']
  }];
  Mangalika: string[];
  HoroScope: string[];
  Sects: string[];
  foodpreferences1: string[] = ['Non-vegetarian', 'Vegetarian'];
  foodpreferences: string[] = ['Doesn\'t matter', 'Non-vegetarian', 'Vegetarian'];


  stateo: Observable < string[] > ;
  citis: Observable < string[] > ;
  MartalStatusOtions: Observable < string[] > ;
  stateGroupOptions: Observable < StateGroup[] > ;
  MangalikOptions: Observable < string[] > ;
  HoroScopeOptions: Observable < string[] > ;
  Pageextra: FormGroup;

  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router, private http: HttpClient,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {

    this.Pageextra = this._formBuilder.group({
      birth_date: ['', Validators.compose([Validators.required])],
      birth_time: ['', Validators.compose([Validators.required])],
      Mangalik: ['', Validators.compose([Validators.required])],
      stateGroup: ['', Validators.compose([Validators.required])],
      food_choice: ['', Validators.compose([Validators.required])],
    });
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({
          letter: group.letter,
          names: _filter(group.names, value)
        }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
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
      var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
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

  // Calucalting age
  calculateTime(event: any) {
      this.birthDate = convert(event);
      const timediffernce = Math.abs(Date.now() - event);
      localStorage.setItem('currentAge1', (Math.floor((timediffernce / (1000 * 3600 * 24)) / 365)).toString());

      function convert(str) {
        const date = new Date(str),
            mnth = ('0' + (date.getMonth() + 1)).slice(-2),
            day  = ('0' + date.getDate()).slice(-2);
        return [ day, mnth, date.getFullYear()  ].join('/');

    }
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

  extrastep() {
    console.log(this.Pageextra.value.birth_date);
    console.log(this.birthDate);
    if (this.Pageextra.valid) {
      this.spinner.show();
      if (this.Pageextra.value.Mangalik === 'Non Manglik') {
      this.Pageextra.value.Mangalik = 'No';
    }
      const secondstepdata = new FormData();
      secondstepdata.append('identity_number', localStorage.getItem('identity_number'));
      secondstepdata.append('manglik', this.Pageextra.value.Mangalik);
      secondstepdata.append('birth_time',  this.Pageextra.value.birth_time);
      secondstepdata.append('birth_date', this.birthDate);
      secondstepdata.append('mother_tongue', this.Pageextra.value.stateGroup);
      secondstepdata.append('food_choice', this.Pageextra.value.food_choice);
      this.calculateAge(this.Pageextra.value.birth_date);

      if (localStorage.getItem('gender') === 'Male') {
      localStorage.setItem('minAge', (this.currentAge - 5).toString());
      localStorage.setItem('maxAge', (this.currentAge - 1).toString());
    } else {
      localStorage.setItem('minAge', (this.currentAge + 1).toString());
      localStorage.setItem('maxAge', (this.currentAge + 5).toString());
    }
      console.log(secondstepdata);
      console.log(this.Pageextra.value.Mangalik);
      console.log(this.Pageextra.value.birth_time);
      console.log(this.Pageextra.value.birth_date);
      console.log(this.Pageextra.value.stateGroup);
      console.log(this.Pageextra.value.food_choice);
      console.log(this.Pageextra.value.birth_date);
      console.log(this.Pageextra.value.stateGroup);
      localStorage.setItem('motherTongue', this.Pageextra.value.stateGroup);

      return this.http.post('https://partner.hansmatrimony.com/api/' + 'createSecondPageProfilePWA', secondstepdata).subscribe(
      suc => {
        this.suc = suc;
        console.log('suc', suc);
        if (this.suc.second_page_status === 'Y') {
          (window as any).ga('send', 'event', 'Birth Details', 'Birth Details Entered', {
            hitCallback: () => {
              console.log('Tracking birth details entered successful');
            }});
          this.spinner.hide();
          this.ngxNotificationService.success('Profile Details Submitted Succesfully!', 'success');
          this.router.navigate(['/register-three']);
        } else {
          this.spinner.hide();
          this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
        }
      }, err => {
        this.spinner.hide();
        this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
      });
    } else {
      this.ngxNotificationService.error('Please Fill all the details');
    }
  }


  ngOnInit() {
    localStorage.setItem('motherTongue', '');


    // tslint:disable-next-line:no-non-null-assertion
    this.stateGroupOptions = this.Pageextra.get('stateGroup').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );

    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Castes',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
  }

  ngAfterViewInit(): void {
    document.getElementsByTagName('svg')[0].style.fill = 'black';
  }
  datePickerClicked() {
    document.querySelector<HTMLElement>('.mat-icon-button').click();
  }
}



