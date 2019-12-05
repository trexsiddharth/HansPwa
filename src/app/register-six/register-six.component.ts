

import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import {COMMA} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup
} from '@angular/forms';

import {MatChipInputEvent} from '@angular/material/chips';
import { NgxSpinnerService } from 'ngx-spinner';

import {
  Observable, Subject, ReplaySubject
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

import {
  MatDialog,
  MatSelect
} from '@angular/material/';
import { HttpClient } from '@angular/common/http';
export interface StateGroup {
  letter: string;
  names: string[];
}
export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}
interface Bank {
  id: string;
  name: string;
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-register-six',
  templateUrl: './register-six.component.html',
  styleUrls: ['./register-six.component.css']
})
export class RegisterSixComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('casteInput', {static: false}) casteInput: ElementRef<HTMLInputElement>;
  @ViewChild('autoCaste', {static: false}) matAutocomplete: MatAutocomplete;


  // caste filtering
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [COMMA];
  casteCtrl = new FormControl();
  casteSearched: Observable<string[]>;
  castess: string[] = [];
  casteMapped: string[] = [];
  selectedCaste: string;
  casteString: string;


  motherTongue;
  caste;
  maxHeight;
  minHeight;
  minAge;
  maxAge;
  workPref;
  gender;
  birthDate: any;
  suc: any = [];
  indexForHeight: number;
  isCompleted5 = false;
  dateofBirth: '';
  success = [];
  startDate = new Date(1985, 0, 1);
  birthdayValid: Boolean;
  PreferencesDetails: FormGroup;
  mapping_id: number;
  maritalStatus;
  MaritalStaus = ['Never Married', 'Awaiting Divorce', 'Divorced', 'Widowed', 'Anulled'];
  manglikValue = 'Non Manglik';
  manglikList = ['Non Manglik', 'Manglik', 'Anshik Manglik'];
  manglikPreference = ['Manglik', 'Anshik Manglik'];
  nonManglikPreference = ['Non-Manglik', 'Anshik Manglik'];
  castePref: any;
  prefManglik = [];

  filterCaste: any = [];

  Caste = false;
  AllCastes = false;
  HoroScopes = false;
  Mangaliks = false;
  public message: string;


    /** control for the selected bank for multi-selection */
  public casteMultiCtrl: FormControl = new FormControl();

   /** control for the MatSelect filter keyword */
   public casteFilterCtrl: FormControl = new FormControl();


/** list of banks filtered by search keyword for multi-selection */
  public filteredCasteMulti: ReplaySubject<any> = new ReplaySubject<any>(1);

@ViewChild('multiSelect', {static: false}) multiSelect: MatSelect;

/** Subject that emits when the component has been destroyed. */
private _onDestroy = new Subject<void>();

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
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0"', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
  Occupation: string[] = ['Private Company', 'Business/Self Employed', 'Government Job', 'Doctor', 'Teacher', 'Not Working'];
  Working: string[] = ['Working', 'Not Working', 'Doesn\'t matter'];
  AnnualIncome: any[] = ['No Income', 'Rs 0-1 Lakh', 'Rs 1-2 Lakh', 'Rs 2-3 Lakh', 'Rs 3-4 Lakh', 'Rs 4-5 Lakh', 'Rs 5-7.5 Lakh',
    'Rs 7.5-12 Lakh',
    'Rs 12-15 Lakh', 'Rs 15-20 Lakh', 'Rs 20-25 Lakh', 'Rs 25-50 Lakh', 'Rs 50Lakh-1Crore', 'Rs 1Crore+'
  ];
  Castes: hd[];
  Mangalika: string[];
  HoroScope: string[];
  Sects: string[];
  foodpreferences1: string[] = ['Non-vegetarian', 'Vegetarian'];
  foodpreferences: string[] = ['Doesn\'t matter', 'Non-vegetarian', 'Vegetarian'];
  state: string[] = ['Andaman & Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh',
    'Assam', 'Bihar', 'Chhattisgarh', 'Dadra & Nagar Haveli',
    'Daman & Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir',
    // tslint:disable-next-line: max-line-length
    'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Pondichery', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  stateGroupOptions: Observable < StateGroup[] > ;


  // tslint:disable-next-line: max-line-length
  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router, private http: HttpClient,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {

    this.PreferencesDetails = this._formBuilder.group({
      description: [''],
      age_min: [''],
      age_max: [''],
      height_min: [''],
      height_max: [''],
      marital_status: [''],
      manglik: [''],
      working: [''],
      occupation: [''],
      food_choice: [''],
      stateGroup: [''],
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

  private _ofilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.Occupation.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _Afilter(value: any): any[] {
    const filterValue = value.toLowerCase();

    return this.AnnualIncome.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _Maritalfilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.MaritalStaus.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _Mangalikfilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.Mangalika.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _HoroScopefilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.HoroScope.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private stt(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.state.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  sixthStep() {
    if (this.manglikValue === 'Non Manglik') {
      this.manglikValue = 'No';
    }
    const sixthstepdata = new FormData();
    this.spinner.show();

    // for (let items of this.PreferencesDetails.value.caste) {
    //   this.selectedItems1.push(items.itemName);
    // }
    this.casteString = this.casteMapped.toString();

    sixthstepdata.append('age_min', this.PreferencesDetails.value.age_min);
    sixthstepdata.append('age_max', this.PreferencesDetails.value.age_max);
    sixthstepdata.append('height_min', this.Heights1[this.Heights.indexOf(this.minHeight)]);
    sixthstepdata.append('height_max', this.Heights1[this.Heights.indexOf(this.maxHeight)]);
    sixthstepdata.append('caste', this.casteString);
    sixthstepdata.append('marital_status', this.PreferencesDetails.value.marital_status);
    sixthstepdata.append('manglik', this.manglikValue);
    sixthstepdata.append('working', this.PreferencesDetails.value.working);
    sixthstepdata.append('food_choice', this.PreferencesDetails.value.food_choice);
    sixthstepdata.append('mother_tongue', this.PreferencesDetails.value.stateGroup);
    sixthstepdata.append('description', this.PreferencesDetails.value.description);
    if (this.gender === 'Female') {
      sixthstepdata.append('income_min', localStorage.getItem('annualIncome'));
      sixthstepdata.append('income_max', this.PreferencesDetails.value.income_max);
      sixthstepdata.append('working', 'na');
      sixthstepdata.append('occupation', this.PreferencesDetails.value.occupation);
    } else {
      sixthstepdata.append('income_min', this.PreferencesDetails.value.income_min);
      sixthstepdata.append('income_max', localStorage.getItem('annualIncome'));
      sixthstepdata.append('working', this.PreferencesDetails.value.working);
      sixthstepdata.append('occupation', 'na');
    }

    console.log('age_min', this.PreferencesDetails.value.age_min);
    console.log('age_max', this.PreferencesDetails.value.age_max);
    console.log('height_min', this.Heights1[this.Heights.indexOf(this.minHeight)]);
    console.log('height_max', this.Heights1[this.Heights.indexOf(this.maxHeight)]);
    console.log('caste', this.casteString);
    console.log('marital_status', this.PreferencesDetails.value.marital_status);
    console.log('manglik', this.manglikValue);
    console.log('working', this.PreferencesDetails.value.working);
    console.log('food_choice', this.PreferencesDetails.value.food_choice);
    console.log('mother_tongue', this.PreferencesDetails.value.stateGroup);
    console.log('description', this.PreferencesDetails.value.description);


    sixthstepdata.append('identity_number', localStorage.getItem('identity_number'));
    return this.http.post('https://partner.hansmatrimony.com/api/' + 'createSixthPageProfile', sixthstepdata).subscribe(
      suc => {
        this.suc = suc;
        console.log(this.suc);
        if (this.suc.sixth_page_status === 'Y') {
          localStorage.setItem('gender', '');
          (window as any).ga('send', 'event', 'Preference Details', 'Preference Details Entered', {
            hitCallback: () => {
              console.log('Tracking preference details entered successful');
            }});
          this.spinner.hide();
          this.ngxNotificationService.success('Preferences Submitted Succesfully!', 'success');
          localStorage.setItem('walkthrough', 'start');
          this.router.navigate(['/chat']);
        } else {
          this.spinner.hide();
          this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!', 'danger');
        }
        localStorage.setItem('loggedIn', 'true');
      }, err => {
        this.spinner.hide();
        this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!', 'danger');
        console.log(err);
      });
  }

  ngOnInit() {
    this.gender = localStorage.getItem('gender');
    this.selectedCaste = localStorage.getItem('selectedCaste');
    this.maritalStatus = localStorage.getItem('maritalStatus');
    this.motherTongue = localStorage.getItem('motherTongue');
    this.getCastes();


    this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
      this.filterCaste = res;
      console.log(this.filterCaste);

      this.casteSearched = this.casteCtrl.valueChanges.pipe(
        startWith(null),
        map((caste: string | null) => caste ? this._filterCaste(caste) : this.filterCaste.slice()));

    // set initial selection
      console.log(this.filterCaste[10]);
      this.casteMultiCtrl.setValue(this.filterCaste[10]);

    // load the initial bank list
      this.filteredCasteMulti.next(this.filterCaste.slice());
    });


    console.log(localStorage.getItem('minHeight'));
    console.log(localStorage.getItem('maxHeight'));
    console.log(localStorage.getItem('currentAge'));
    console.log(localStorage.getItem('minAge'));
    console.log(localStorage.getItem('maxAge'));
    console.log(localStorage.getItem('maritalStatus'));


    this.minHeight = this.Heights[this.Heights1.indexOf(localStorage.getItem('minHeight'))];
    this.maxHeight = this.Heights[this.Heights1.indexOf(localStorage.getItem('maxHeight'))];
    this.maritalStatus = localStorage.getItem('maritalStatus');

    console.log(this.minHeight);
    console.log(this.maxHeight);


    if (localStorage.getItem('minAge')) {
      this.minAge = parseInt(localStorage.getItem('minAge'), 10);
    } else {
      this.minAge = parseInt('18', 10);
    }
    if (localStorage.getItem('maxAge')) {
      this.maxAge = parseInt(localStorage.getItem('maxAge'), 10);
    } else {
      this.maxAge = parseInt('28', 10);
    }

    this.PreferencesDetails = this._formBuilder.group({
      age_min : [parseInt(localStorage.getItem('minAge'), 10)],
      age_max : [parseInt(localStorage.getItem('maxAge'), 10)],
      stateGroup : this.motherTongue,
      marital_status : this.maritalStatus,
      working : 'Doesn\'t matter',
      food_choice : 'Doesn\'t matter',
      description : ''

    });

     // tslint:disable-next-line:no-non-null-assertion
    this.stateGroupOptions = this.PreferencesDetails.get('stateGroup').valueChanges
     .pipe(
       startWith(''),
       map(value => this._filterGroup(value))
     );

  }

  ngAfterViewInit() {
    // this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }


  getCastes() {
    return this.http.get<{ mapping_id: number, castes: any }>('https://partner.hansmatrimony.com/api/caste_mapping').subscribe(
      res => {
        this.castePref = res;
        console.log(this.castePref);
        console.log(localStorage.getItem('selectedCaste'));
        if (localStorage.getItem('selectedCaste')) {
          this.castePref.forEach(element => {
            if (element.castes.match(localStorage.getItem('selectedCaste'))) {
              this.casteMapped = element.castes.split(',');
              console.log(this.casteMapped);
              this.castess.push(element.castes.split(',')[0]);
              this.castess.push(element.castes.split(',')[1]);
              this.castess.push(element.castes.split(',')[2]);
            }
            });
        }
      });
  }
  changeCaste(e) {
    console.log(e);
    this.mapping_id = e;
    localStorage.setItem('mapping_id', JSON.stringify(this.mapping_id));
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.casteMapped.push(value.trim());
        this.castess.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.casteCtrl.setValue(null);
    }
  }

  remove(caste: string): void {
    const index = this.castess.indexOf(caste);
    const indexMapped = this.casteMapped.indexOf(caste);

    if (index >= 0 && index >= 0) {
      this.castess.splice(index);
      this.casteMapped.splice(indexMapped);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.casteMapped.push(event.option.viewValue);
    this.castess.push(event.option.viewValue);
    this.casteInput.nativeElement.value = '';
    this.casteCtrl.setValue(null);
  }

  private _filterCaste(value): string[] {
    const filterValue = value.toString().toLowerCase();
    return this.filterCaste.filter(castess => castess.toString().toLowerCase().indexOf(filterValue) === 0);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
}



