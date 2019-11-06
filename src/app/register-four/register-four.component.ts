

import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
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

import {
  MatDialog
} from '@angular/material/';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-register-four',
  templateUrl: './register-four.component.html',
  styleUrls: ['./register-four.component.css']
})
export class RegisterFourComponent implements OnInit {

  isCompleted4 = false;
  success = [];
  EducationDetails: FormGroup;
  FamilyDetails: FormGroup;
  suc: any = [];
  public message: string;
  locationFamily: Location = null;
  locationNative: Location = null;



  AnnualIncome: any[] = ['No Income', 'Rs 0-1 Lakh', 'Rs 1-2 Lakh', 'Rs 2-3 Lakh', 'Rs 3-4 Lakh', 'Rs 4-5 Lakh', 'Rs 5-7.5 Lakh',
    'Rs 7.5-12 Lakh',
    'Rs 12-15 Lakh', 'Rs 15-20 Lakh', 'Rs 20-25 Lakh', 'Rs 25-50 Lakh', 'Rs 50Lakh-1Crore', 'Rs 1Crore+'
  ];
  options: any = [];
  location: any = '';
  FamilyType: string[] = ['JointFamily', 'Nuclear Family', 'Others'];
  FatherOccupation: string[] = ['Buisness', 'Service', 'Army', 'Private Company',
  'Business/Self Employed', 'Government Job', 'Doctor', 'Teacher', 'Not Working'
];
  MotherOccupation: string[] = ['Housewife', 'Buisness', 'Service', 'Army', 'Private Company',
    'Business/Self Employed', 'Government Job', 'Doctor', 'Teacher', 'Not Working'
  ];
  Brother: any[] = ['None', 0, 1, 2, 3, '3+'];
  Sister: any[] = ['None', 0, 1, 2, 3, '3+'];
  state: string[] = ['Andaman & Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh',
    'Assam', 'Bihar', 'Chhattisgarh', 'Dadra & Nagar Haveli',
    'Daman & Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir',
    // tslint:disable-next-line: max-line-length
    'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Pondichery', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];


  FamilyOptions: Observable < string[] > ;
  fo: Observable < string[] > ;
  mo: Observable < string[] > ;
  bro: Observable < any[] > ;
  sis: Observable < any[] > ;
  stateo: Observable < string[] > ;
  citis: Observable < string[] > ;
  OccupatiinOptions: Observable < string[] > ;
  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router, private http: HttpClient,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {

    this.FamilyDetails = this._formBuilder.group({
      FamilyType: [''],
      father_status: [''],
      mother_status: [''],
      FatherOccupation: [''],
      MotherOccupation: [''],
      brother: [''],
      sister: [''],
      umbrother: [''],
      umsister: [''],
      state: [''],
      city: [''],
      address: [''],
      about: [''],
      house_type: [''],
      family_income: ['']
    });

  }


  private _Afilter(value: any): any[] {
    const filterValue = value.toLowerCase();

    return this.AnnualIncome.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private ft(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.FamilyType.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private fato(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.FatherOccupation.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private mato(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.MotherOccupation.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private brot(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.Brother.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private sist(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.Sister.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private stt(value: string): string[] {
    console.log('sajag');
    const filterValue = value.toLowerCase();
    return this.state.filter(option => option.toLowerCase().includes(filterValue));
  }

  fourthStep() {
    if (this.FamilyDetails.valid ) {
      if (this.locationFamily === null ) {
          this.ngxNotificationService.error('Please select a valid location of the family');
      } else if ( this.locationNative === null) {
        this.ngxNotificationService.error('Please select a valid native location of the family');
      } else {
        this.spinner.show();
        const fourthstepdata = new FormData();
        fourthstepdata.append('identity_number', localStorage.getItem('identity_number'));
        fourthstepdata.append('family_type', this.FamilyDetails.value.FamilyType);
        fourthstepdata.append('father_status', this.FamilyDetails.value.father_status);
        fourthstepdata.append('mother_status', this.FamilyDetails.value.mother_status);
        fourthstepdata.append('occupation_father', this.FamilyDetails.value.FatherOccupation);
        fourthstepdata.append('occupation_mother', this.FamilyDetails.value.MotherOccupation);
        fourthstepdata.append('family_income', this.FamilyDetails.value.family_income);
        fourthstepdata.append('house_type', this.FamilyDetails.value.house_type);
        fourthstepdata.append('married_sons', this.FamilyDetails.value.brother);
        fourthstepdata.append('unmarried_sons', this.FamilyDetails.value.umbrother);
        fourthstepdata.append('married_daughters', this.FamilyDetails.value.sister);
        fourthstepdata.append('unmarried_daughters', this.FamilyDetails.value.umsister);
        fourthstepdata.append('locality', this.FamilyDetails.value.state);
        fourthstepdata.append('city', this.FamilyDetails.value.city);
        fourthstepdata.append('address', this.FamilyDetails.value.address);
        fourthstepdata.append('about', this.FamilyDetails.value.about);
      // this.isCompleted4 = true;
  
        return this.http.post('https://partner.hansmatrimony.com/api/' + 'createFourthPageProfile', fourthstepdata).subscribe(suc => {
        this.suc = suc;
        console.log(this.suc);
        if (this.suc.fourth_page_status === 'Y') {
          this.spinner.hide();
          this.ngxNotificationService.success('Family Details Submitted Succesfully!', 'success');
          this.router.navigate(['/register-five']);
        } else {
          this.spinner.hide();
          this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
        }
      }, err => {
        this.spinner.hide();
        this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
        // console.log(err);
        console.log(err);
      });
      }
    } else {
      this.ngxNotificationService.error('Please fill all the details');
    }

  }


  ngOnInit() {

    this.FamilyOptions = this.FamilyDetails.get('FamilyType').valueChanges.pipe(
      startWith(''),
      map(value => this.ft(value))
    );
    this.fo = this.FamilyDetails.get('FatherOccupation').valueChanges.pipe(
      startWith(''),
      map(value => this.fato(value))
    );
    // tslint:disable-next-line:no-non-null-assertion
    this.mo = this.FamilyDetails.get('MotherOccupation').valueChanges.pipe(
      startWith(''),
      map(value => this.mato(value))
    );
    this.bro = this.FamilyDetails.get('brother').valueChanges.pipe(
      startWith(''),
      map(value => this.brot(value))
    );
    this.sis = this.FamilyDetails.get('sister').valueChanges.pipe(
      startWith(''),
      map(value => this.sist(value))
    );

    this.stateo = this.FamilyDetails.get('state').valueChanges.pipe(
      startWith(''),
      map(value => this.stt(value))
    );

  }
  onAutocompleteSelected(event, index) {
    console.log(event);
  }

  onLocationSelected(e, i) {
    if (i === 1) {
      this.locationFamily = e;
      console.log('location of family', e);
    } else if (i === 2) {
      this.locationNative = e;
      console.log('native location', e);
    }
  }
}




