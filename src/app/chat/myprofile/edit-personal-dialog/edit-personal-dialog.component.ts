import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { NgxNotificationService } from 'ngx-kc-notification';


@Component({
  selector: 'app-edit-personal-dialog',
  templateUrl: './edit-personal-dialog.component.html',
  styleUrls: ['./edit-personal-dialog.component.css']
})
export class EditPersonalDialogComponent implements OnInit {
  data: any;
  personalData: any;
  familyData: any;
  maritalStaus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorcee', 'Widowed', 'Anulled'];
  personal_height: any;
  personalDialogData: FormGroup;
  currentCity: any;
  locality;
  locationFamily;
  casteo: Observable<string[]>;
  getcastes: any = [];
  personalForm: FormGroup;
  errors = [];

  foodpreferences: string[] = ['Doesn\'t Matter', 'Non-Vegetarian', 'Vegetarian'];
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  // tslint:disable-next-line: max-line-length
  HigherEducation: string[] = ['B.E\/B.Tech', 'B.Pharma', 'M.E\/M.Tech', 'M.Pharma', 'M.S. Engineering', 'B.Arch', 'M.Arch', 'B.Des', 'M.Des', 'MCA\/PGDCA', 'BCA', 'B.IT', 'B.Com', 'CA', 'CS', 'ICWA', 'M.Com', 'CFA',
  'MBA\/PGDM', 'BBA', 'BHM', 'MBBS', 'M.D.', 'BAMS', 'BHMS', 'BDS', 'M.S. (Medicine)', 'MVSc.', 'BvSc.', 'MDS', 'BPT', 'MPT', 'DM', 'MCh',
   // tslint:disable-next-line: max-line-length
   'BL\/LLB', 'ML\/LLM', 'B.A', 'B.Sc.', 'M.A.', 'M.Sc.', 'B.Ed', 'M.Ed', 'MSW', 'BFA', 'MFA', 'BJMC', 'MJMC', 'Ph.D', 'M.Phil', 'Diploma', 'High School', 'Trade School', 'Other']

   Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt. Job', 'Doctor', 'Teacher', 'Not Working'];

     // tslint:disable-next-line: max-line-length
  date: string[] = ['01', '02' , '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  // tslint:disable-next-line: max-line-length
  month: string[] = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: string[] = [
  '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980',
  '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
  '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
  '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
  '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
];
  constructor(private http: HttpClient, 
              public dialogRef: MatDialogRef<EditPersonalDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data,
              private _formBuilder: FormBuilder,
              private ngxNotificationService: NgxNotificationService
     ) {
    this.data = data;

    this.personalForm = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      name: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required, Validators.max(9999999999999), Validators.pattern('(0/91)?[6-9][0-9]{9}')])],
      Whatsapp: ['', Validators.compose([Validators.required, Validators.max(9999999999999), Validators.pattern('(0/91)?[6-9][0-9]{9}')])],
      email: [''],
      Relation: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      birth_day: ['', Validators.compose([Validators.required])],
      birth_date: ['01', Validators.compose([Validators.required])],
      birth_month: ['January', Validators.compose([Validators.required])],
      birth_year: ['1980', Validators.compose([Validators.required])],
      BirthPlace: ['', Validators.compose([Validators.required])],
      BirthTime: ['', Validators.compose([Validators.required])],
      Height: ['', Validators.compose([Validators.required])],
      Weight: ['', Validators.compose([Validators.required])],
      MaritalStatus: ['', Validators.compose([Validators.required])],
      AnnualIncome: ['', Validators.compose([Validators.required, Validators.max(999)])],
      Religion: ['', Validators.compose([Validators.required])],
      Manglik: ['', Validators.compose([Validators.required])],
      Gotra: ['', Validators.compose([Validators.required])],
      Food: ['', Validators.compose([Validators.required])],
      Degree: ['', Validators.compose([Validators.required])],
      Profession: ['', Validators.compose([Validators.required])],
      College: ['', Validators.compose([Validators.required])],
      Additional: ['', Validators.compose([Validators.required])],
      Occupation: ['', Validators.compose([Validators.required])],
      Company: ['', Validators.compose([Validators.required])],
      Castes: ['', Validators.compose([Validators.required])],
      WorkingCity: ['', Validators.compose([Validators.required])],
      About: ['', Validators.compose([Validators.required, Validators.maxLength(300)])]
    });
   }

  ngOnInit() {
    console.log(this.data);
    this.personalData = this.data.personalDetails;
    this.familyData = this.data.familyDetails;
    this.personal_height = this.getHeight(this.personalData.height);
    console.log(this.personalData.name);
    this.getAllCaste();
    if (this.personalData && this.familyData) {
      this.setCurrentValue();
    }
  }
  setAge(dob: string) {
    if (dob != null) {
    return (Math.floor((Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 365)));
    } else {
      return null;
    }
  }
  getHeight(num: string) {

    switch (Number(num)) {
     case 53: return '4\'5"';
     case 54: return '4\'6"';
     case 55: return '4\'7"';
     case 56: return '4\'8"';
     case 57: return '4\'9"';
     case 58: return '4\'10"';
     case 59: return '4\'11"';
     case 60: return '5\'';
     case 61: return '5\'1"';
     case 62: return '5\'2"';
     case 63: return '5\'3"';
     case 64: return '5\'4"';
     case 65: return '5\'5"';
     case 66: return '5\'6"';
     case 67: return '5\'7"';
     case 68: return '5\'8"';
     case 69: return '5\'9"';
     case 70: return '5\'10"';
     case 71: return '5\'11"';
     case 72: return '6\'';
     case 73: return '6\'1"';
     case 74: return '6\'2"';
     case 75: return '6\'3"';
      case 76: return '6\'4"';
      case 77: return '6\'5"';
      case 78: return '6\'6"';
      case 79: return '6\'7"';
      case 80: return '6\'8"';
      case 81: return '6\'9"';
      case 82: return '6\'10"';
      case 83: return '6\'11"';
      case 84: return '7\'';
      default: return null;
  }
  }
  onSubmit() {
    if (this.personalForm.valid) {
    console.log(this.personalForm);
    const personalDataForm = new FormData();
    personalDataForm.append('identity_number', this.personalData.identity_number);
    personalDataForm.append('temple_id', this.personalData.temple_id);
    personalDataForm.append('about', '');
    personalDataForm.append('name', this.personalData.name);
    personalDataForm.append('birth_date', this.personalData.birth_date);
    personalDataForm.append('marital_status', this.personalForm.value.maritalStatus);
    personalDataForm.append('manglik', this.personalForm.value.manglik);
    personalDataForm.append('religion', this.familyData.religion);
    personalDataForm.append('height', this.Heights1[this.Heights.indexOf(this.personal_height)]);
    personalDataForm.append('weight', this.personalForm.value.personalWeight);
    personalDataForm.append('food_choice', this.personalForm.value.foodChoice);
    personalDataForm.append('caste', this.familyData.caste);
    personalDataForm.append('sub_caste', '');
    personalDataForm.append('city', this.personalForm.value.currentCity);
    personalDataForm.append('degree', this.personalData.degree);
    personalDataForm.append('college', this.personalData.college);
    personalDataForm.append('occupation', this.personalData.occupation);
    personalDataForm.append('annual_income', this.personalData.monthly_income);
    personalDataForm.append('address', this.familyData.address);
    personalDataForm.append('mobile', this.familyData.mobile);
    personalDataForm.append('profession', this.personalData.profession);
    personalDataForm.append('education', this.personalData.education);
    personalDataForm.append('about', this.personalData.about);
    personalDataForm.append('is_lead', localStorage.getItem('is_lead'));



    this.http.post('https://partner.hansmatrimony.com/api/updatePersonalDetails', personalDataForm).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.dialogRef.close();
    } else {
      // tslint:disable-next-line: forin
      for (const control in this.personalForm.controls) {
        console.log(control);
        if (this.personalForm.controls[control].value === '') {
            this.errors.push(control);
          }
      }
      if (this.errors[0]) {
        this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
   }
    }
  }

  onAutocompleteSelected(event) {
    this.personalForm.value.locality = event.formatted_address;
    this.locality = event.formatted_address;
    console.log('address of family', this.personalForm.value.locality);

}
onLocationSelected(e) {
    this.locationFamily = e;
    console.log('location of family', e);
}
  close() {
    this.dialogRef.close();
  }

  setCurrentValue() {
    this.personalForm.patchValue({
      name: this.personalData.name,
      Weight: this.personalData.weight,
      Height: this.Heights[this.Heights1.indexOf(this.personalData.height)],
      MaritalStatus: this.personalData.marital_status,
      Religion: this.familyData.religion,
      Manglik: this.personalData.manglik,
      birth_date: this.personalData.birth_date ? this.personalData.birth_date.toString().split('-')[2] : '',
      birth_month: this.personalData.birth_date ? this.getMonthString(this.personalData.birth_date.toString().split('-')[1]) : '',
      birth_year: this.personalData.birth_date ? this.years[this.years.indexOf(this.personalData.birth_date.toString().split('-')[0])] : '',
      BirthPlace: this.personalData.birth_place,
      BirthTime: this.personalData.birth_time,
      email: this.familyData.email,
      phone: this.familyData.mobile,
      Whatsapp: this.personalData.whatsapp,
      Castes: this.familyData.caste,
      Gotra: this.familyData.gotra,
      Food: this.personalData.food_choice,
      WorkingCity: this.personalData.working_city,
      Degree: this.personalData.degree ? this.personalData.degree : this.personalData.education,
      Profession: this.personalData.profession,
      College: this.personalData.college,
      Additional: this.personalData.additional_qualification,
      Occupation: this.personalData.occupation === 'Private Company' ? 'Private Job' : this.personalData.occupation ,
      Company: this.personalData.company,
      AnnualIncome: this.getIncome(this.personalData.monthly_income),
      About: this.personalData.about

    });
  }

  getIncome(value: number) {
    if (value != null) {
      if (value.toString().length >= 6) {
        return String((Number(value) / 100000));
        } else if (value.toString().length >= 5) {
          return String((Number(value) / 10000) * 12);
        } else {
          return value;
        }
      } else {return ''; }
  }

  getMonthString(month: string) {
    switch (month) {
      case '01':
        return 'January';
        case '02':
          return 'Feburary';
        case '03':
          return 'March';
        case '04':
          return 'April';
        case '05':
          return 'May';
        case '06':
          return 'June';
        case '07':
          return 'July';
        case '08':
          return 'August';
        case '09':
          return 'September';
        case '10':
          return 'October';
          case '11':
            return 'November';
        case '12':
          return 'December';
      default:
        break;
    }
  }

  // Caste Selection

  getAllCaste() {
    this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
      this.getcastes = res;
    });
    if (this.personalForm.get('Castes').value && this.personalForm.get('Castes').value !== '') {
    this.casteo = this.personalForm.get('Castes').valueChanges.pipe(
      startWith(''),
      map(value => this._Castefilter(value))
    );
  } else {
    this.personalForm.patchValue({
      Castes: ''
    });
    this.casteo = this.personalForm.get('Castes').valueChanges.pipe(
      startWith(''),
      map(value => this._Castefilter(value))
    );
  }
  }

  private _Castefilter(value: string): string[] {
    if (value != null) {
      const filterValue = value.toLowerCase();
      return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
    } else {
      const filterValue = 'arora';
      return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
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
        this.personalForm.get('Castes').setValue('');
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

}
