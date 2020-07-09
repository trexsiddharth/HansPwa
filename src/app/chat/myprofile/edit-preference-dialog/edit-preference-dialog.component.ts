import { Component, OnInit, Inject, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelect, MatSnackBar } from '@angular/material';
import { NgForm, FormControl } from '@angular/forms';
import { NgxNotificationService } from 'ngx-kc-notification';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { startWith, map, take, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-edit-preference-dialog',
  templateUrl: './edit-preference-dialog.component.html',
  styleUrls: ['./edit-preference-dialog.component.css']
})
export class EditPreferenceDialogComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private http: HttpClient,
              private snackBar: MatSnackBar,
              private ngxNotificationService: NgxNotificationService,
              public dialogRef: MatDialogRef<EditPreferenceDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
  }
  data: any;
  preferenceData: any;
  maxHeight: any;
  minHeight: any;
  gender;
  getcastes: any = [];
  searchedCaste = '';
  searchCaste = new FormControl();
  searchCasteText = new FormControl();
  isAllCastePref = false;



  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84'];
  Mangalika = ['Manglik', 'Non-Manglik', 'Anshik Manglik', 'Doesn\'t Matter'];
  Foodpreferences: string[] = ['Doesn\'t Matter', 'Non-Vegetarian', 'Vegetarian'];
  Working: string[] = ['Working', 'Not Working', 'Doesn\'t Matter'];
  Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt Job', 'Doctor', 'Teacher', 'Doesn\'t Matter',
  'Defence', 'Civil Services'];
  MaritalStatus: string[] = ['Doesn\'t Matter', 'Never Married', 'Awaiting Divorce', 'Divorcee', 'Widowed', 'Anulled'];
  @ViewChild('preferencesForm', {static: false}) preferenceForm: NgForm;

  /** list of banks filtered by search keyword */
  public filteredCastesMulti: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  ngOnInit() {
    this.gender = localStorage.getItem('gender');
    console.log(this.data);
    this.preferenceData = {...this.data.preferencesDetails};
    console.log(this.preferenceData);
    this.maxHeight = this.getHeight(this.preferenceData.height_max);
    this.minHeight = this.getHeight(this.preferenceData.height_min);

    this.getAllCaste();
  }

  setNullToNotMatter() {
    setTimeout(() => {
      if (this.preferenceData) {
        console.log('working');
        if (!this.preferenceData.manglik) {
          this.preferenceData.manglik = 'Doesn\'t Matter';
        }
        if (!this.preferenceData.working) {
          this.preferenceData.working = 'Doesn\'t Matter';
        }
        if (!this.preferenceData.marital_status) {
          this.preferenceData.marital_status = 'Doesn\'t Matter';
        }
        if (!this.preferenceData.mother_tongue) {
          this.preferenceData.mother_tongue = 'Hindi';
        }
        if (!this.preferenceData.food_choice) {
          this.preferenceData.food_choice = 'Doesn\'t Matter';
        }
        if (!this.preferenceData.occupation) {
          this.preferenceData.occupation = 'Doesn\'t Matter';
        }

    }
    }, 1000);
  }

  onSubmit() {
    console.log('marital_status', this.preferenceData.marital_status);

    if (this.preferenceForm.valid) {
      const preferenceFormData = new FormData();
      if (this.preferenceData.identity_number && this.preferenceData.identity_number !== '') {
        preferenceFormData.append('identity_number', this.preferenceData.identity_number);
        preferenceFormData.append('temple_id', this.preferenceData.temple_id);
      } else {
        preferenceFormData.append('id', localStorage.getItem('id'));
      }
      preferenceFormData.append('caste', this.searchCaste.value);
      preferenceFormData.append('manglik', this.preferenceForm.value.manglik);
      preferenceFormData.append('marital_status', this.preferenceForm.value.maritalStatus);
      if (this.gender === 'Male') {
      preferenceFormData.append('working', this.preferenceForm.value.working);
      preferenceFormData.append('occupation', 'na');
    } else {
      preferenceFormData.append('occupation', this.preferenceForm.value.occupation);
      preferenceFormData.append('working', 'na');
    }
      preferenceFormData.append('food_choice', this.preferenceForm.value.food_choice);
      preferenceFormData.append('description', this.preferenceData.description);
      preferenceFormData.append('income_min', this.preferenceData.income_min);
      preferenceFormData.append('income_max', this.preferenceData.income_max);
      preferenceFormData.append('height_min', this.Heights1[this.Heights.indexOf(this.minHeight)]);
      preferenceFormData.append('height_max', this.Heights1[this.Heights.indexOf(this.maxHeight)]);
      preferenceFormData.append('age_min', this.preferenceData.age_min);
      preferenceFormData.append('age_max', this.preferenceData.age_max);
      preferenceFormData.append('mother_tongue', this.preferenceData.mother_tongue);
      preferenceFormData.append('is_lead', localStorage.getItem('is_lead'));

      console.log('marital_status', this.preferenceData.marital_status);


      this.http.post('https://partner.hansmatrimony.com/api/updatePreferencesDetails', preferenceFormData).subscribe(
      (data: any) => {
        console.log(data);
        this.dialogRef.close({success: 'success'});
      },
      (error: any) => {
        console.log(error);
        this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
      }
    );
    } else {
      alert('enter all details');
    }
  }

  getHeight(ht: string) {
    console.log(this.Heights[this.Heights1.indexOf(ht)]);
    return this.Heights[this.Heights1.indexOf(ht)];
  }

  // set checkbox value to all if checked
  checkAllCastePref(event) {
    console.log(event);
    if (event.checked) {
      this.searchCaste.setValue(['All']);
    } else {
      this.searchCaste.setValue(['']);
    }
  }


  getAllCaste() {
    this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
      this.getcastes = res;
      // adittion of all to the list of castes
      this.getcastes.push('All');

       // set initial selection
      if (this.preferenceData.caste && this.preferenceData.caste !== 'null') {
       let values = [];
       this.preferenceData.caste.split(',').forEach(element => {
        console.log(element);
        if (this.getcastes.indexOf(element)) {
          values.push(this.getcastes[this.getcastes.indexOf(element)]);
        }
      });
      // if all , check the check box for no caste bar
       if (values.includes('All')) {
        this.isAllCastePref = true;
      }
       this.searchCaste.setValue(values);
    }

      // load the initial bank list
      this.filteredCastesMulti.next(this.getcastes.slice());

      // listen for search field value changes
      this.searchCasteText.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterCasteMulti();
    });


  });
  }

  ngAfterViewInit() {
    this.setInitialValue();

    // to update the values to doesnt matter if null
    this.setNullToNotMatter();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

   // Sets the initial value after the filteredBanks are loaded initially

  protected setInitialValue() {
    this.filteredCastesMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.multiSelect.compareWith = (a: string, b: string) => a && b && a === b;
      });
  }

  protected filterCasteMulti() {
    if (!this.getcastes) {
      return;
    }
    // get the search keyword
    let search = this.searchCasteText.value;
    if (!search) {
      this.filteredCastesMulti.next(this.getcastes.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCastesMulti.next(
      this.getcastes.filter(bank => bank.toLowerCase().indexOf(search) > -1)
    );
  }

  casteSelectionChanged(event) {
    console.log(event);
    this.showSnackBar(`${event.value[0]} Added Successfully`, '');
    this.searchCasteText.setValue('');
  }

  showSnackBar(msg: string, action: string) {
    this.snackBar.open(msg, action, {
      duration: 2000
    });
  }

}
