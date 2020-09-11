import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditPersonalDialogComponent } from '../../myprofile/edit-personal-dialog/edit-personal-dialog.component';
import { Router } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxNotificationService } from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { shareReplay, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-persistent-message',
  templateUrl: './persistent-message.component.html',
  styleUrls: ['./persistent-message.component.css']
})
export class PersistentMessageComponent implements OnInit {
  data: any;
  PageThree: FormGroup;

  birthPlace;
  birthPlaceText;
  errors: any;
  maritalStaus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorcee', 'Widowed', 'Anulled'];
  Religions: string[] = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Bahai'];

  foodpreferences: string[] = ['Non-Vegetarian', 'Vegetarian'];
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  // tslint:disable-next-line: max-line-length
  HigherEducation: string[] = ['B.E\/B.Tech', 'B.Pharma', 'M.E\/M.Tech', 'M.Pharma', 'M.S. Engineering', 'B.Arch', 'M.Arch', 'B.Des', 'M.Des', 'MCA\/PGDCA', 'BCA', 'B.IT', 'B.Com', 'CA', 'CS', 'ICWA', 'M.Com', 'CFA',
    'MBA\/PGDM', 'BBA', 'BHM', 'MBBS', 'M.D.', 'BAMS', 'BHMS', 'BDS', 'M.S. (Medicine)', 'MVSc.', 'BvSc.', 'MDS', 'BPT', 'MPT', 'DM', 'MCh',
    // tslint:disable-next-line: max-line-length
    'BL\/LLB', 'ML\/LLM', 'B.A', 'B.Sc.', 'M.A.', 'M.Sc.', 'B.Ed', 'M.Ed', 'MSW', 'BFA', 'MFA', 'BJMC', 'MJMC', 'Ph.D', 'M.Phil', 'Diploma',
    'High School', 'Trade School', 'Other'];

  Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt. Job', 'Doctor', 'Teacher', 'Not Working'];

  // tslint:disable-next-line: max-line-length
  date: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  // tslint:disable-next-line: max-line-length
  month: string[] = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: string[] = [
    '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980',
    '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
    '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010',
    '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
  ];
  designations: string[] = [
    'Owner', 'Manager', 'Sales Manager', 'Accounts Manager', 'Product Manager', 'Software Engineer', 'Engineer', 'Hotel Management', 'Operations Manager', 'Sales Executive', 'Operations Executive',
    'Accountant', 'Marketing Manager', 'Marketing Executive', 'Chartered Accountant', 'Owner', 'Secretary', 'Company Secretary', 'Telesales Executive', 'Teacher', 'Clerk', 'Office Assistant',
    'Relationship Manager', 'Computer Operator', 'Chief Executive Officer', 'Chief Marketing Officer', 'Chief Finance Officer', 'Business Development', 'Project Manager',
    'Program Manager', 'Solution Architect', 'Graphic Designer', 'Content Writer', 'Director', 'Business Analyst', 'Front Office', 'Back office', 'Counselor', 'Event Manager', 'Legal',
    'Public Relations', 'Others'];

  autoComplete = {
    strictBounds: false,
    type: 'geocode',
    fields: ['name']
  };
  incomeCategories = ['0-2.5', '2.5-5', '5-7.5', '7.5-10', '10-15', '15-20', '20-25', '25-35', '35-50', '50-70', '70-100', '100+'];

  casteo: Observable<string[]>;
  getcastes: any = [];

  storedData: any;

  pageThreeFilledSubject = new BehaviorSubject<boolean>(false);
  pageThreeFilled$: Observable<boolean> = this.pageThreeFilledSubject.asObservable().pipe(
    shareReplay()
  );

  detailsDisplayIndexSubject = new BehaviorSubject<Number>(0);
  detailsDisplayIndex$: Observable<Number> = this.detailsDisplayIndexSubject.asObservable().pipe(
    shareReplay()
  );
  personalProfileData: any;
  familyProfileData: any;
  personalForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditPersonalDialogComponent>, @Inject(MAT_DIALOG_DATA) data,
    public router: Router,
    public chatService: ChatServiceService,
    public _formBuilder: FormBuilder,
    public ngxNotificationService: NgxNotificationService,
    public http: HttpClient) {
    this.data = data;
    this.PageThree = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      BirthPlace: [''],
      BirthTime: [''],
      FoodChoice: [''],
      Mangalik: [''],
      FatherStatus: [''],
      MotherStatus: [''],
      FamilyIncome: ['', Validators.compose([Validators.max(999)])],
    });
    this.personalForm = this._formBuilder.group({
      // tslint:disable-next-line: max-line-length
      Weight: [''],
      Profession: [''],
      OtherProfession: [''],
      College: [''],
      Additional: [''],
      Locality: [''],
    });
  }
  imageSrc = '../../../assets/';
  completeProfile: boolean = false;
  ngOnInit() {
    switch (this.data.button) {
      case 'Get Membership': this.imageSrc += 'primestar.png';
        break;
      case 'Choose Plan': this.imageSrc += 'unlockprime.png';
        break;
      case 'Complete Profile': this.imageSrc += 'profileincomplete.png';
        break;
      case 'Install App Now': this.imageSrc += 'bell.png';
        break;
    }
    this.getCompleteProfile();
  }
  getCompleteProfile() {
    if (localStorage.getItem('storedData') && this.data.button === 'Complete Profile') {
      this.storedData = JSON.parse(localStorage.getItem('storedData'));
      this.completeProfile = true;
      this.PageThree.patchValue({
        BirthPlace: this.storedData.birth_place,
        BirthTime: this.storedData.birth_time,
        FoodChoice: this.storedData.food_choice,
        Mangalik: this.storedData.manglik,
        FatherStatus: this.storedData.occupation,
        MotherStatus: this.storedData.occupation_mother,
        FamilyIncome: this.storedData.family_income,
      });
    }
    else if (this.chatService.pageThreeFilled && this.data.button === 'Complete Profile') {
      this.completeProfile = true;
      this.pageThreeFilledSubject.next(true);
      this.personalProfileData = this.chatService.personalProfileData;
      this.familyProfileData = this.chatService.familyProfileData;
      this.calculateIndex();
      //this.getAllCaste();
      this.setCurrentValues()
    }
    else {
      this.completeProfile = false;
    }
  }
  calculateIndex() {
    let a = ['locality', 'weight', 'profession', 'college', 'additional_qualification'];
    let detailsLeft = [];
    for (let v of a) {
      if (this.personalProfileData.hasOwnProperty(v)) {
        if (!this.personalProfileData[v] || this.personalProfileData[v] === 'null') {
          detailsLeft.push(v);
        }
      }
      else {
        detailsLeft.push(v);
      }
    }

    if (detailsLeft.length > 0) {
      this.detailsDisplayIndexSubject.next(0);
      console.log('index set to 0');
      console.log(detailsLeft);
    }
    else {
      this.completeProfile = false;
      console.log('index set to null, complete profile set to false');
    }
  }
  setCurrentValues() {
    this.personalForm.patchValue({
      Weight: this.personalProfileData.weight && this.personalProfileData.weight !== 'null' ? this.personalProfileData.weight : null,
      Locality: this.personalProfileData.locality ? this.personalProfileData.locality : null,
      Profession: this.personalProfileData.profession ? this.personalProfileData.profession : null,
      OtherProfession: this.personalProfileData.profession ? this.personalProfileData.profession : 'na',
      College: this.personalProfileData.college && this.personalProfileData.college != 'null' ? this.personalProfileData.college : null,
      Additional: this.personalProfileData.additional_qualification && this.personalProfileData.additional_qualification != 'null' ? this.personalProfileData.additional_qualification : null,
      // email: this.personalProfileData.email && this.personalProfileData.email != 'null' ?
      //   this.personalProfileData.email : this.familyProfileData.email && this.familyProfileData.email != 'null' ? this.familyProfileData.email : '',
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
    } else { return ''; }
  }
  setValue(item: string) {
    let vals = item.split('-');
    if (vals[0] == "100+")
      return "Rs 1+ Crore per year";
    else
      return "Rs. " + vals[0] + " - " + vals[1] + " Lakhs per year"
  }
  placeChangedLocality(): void {
    const place: HTMLInputElement = document.querySelector('#Locality');
    setTimeout(() => {
      console.log(place.value);
      this.personalForm.patchValue({
        Locality: place.value
      });
    }, 500);
  }
  placeChangedWorkingcity(): void {
    const place: HTMLInputElement = document.querySelector('#WorkingCity');
    setTimeout(() => {
      console.log(place.value);
      this.personalForm.patchValue({
        WorkingCity: place.value
      });
    }, 500);
  }
  placeChanged() {
    const birthPlace: HTMLInputElement = document.querySelector('#birthPlace');
    setTimeout(() => {
      console.log(birthPlace.value);
      this.PageThree.patchValue({
        BirthPlace: birthPlace.value
      });
    }, 500);
  }
  onSubmit() {
    this.errors = [];
    console.log(this.personalForm.value);
    for (const control in this.personalForm.controls) {
      console.log(this.personalForm.controls[control].value);
      if (!this.personalForm.controls[control].valid || !this.personalForm.controls[control].value) {
        this.errors.push(control);
      }
    }
    if (this.errors[0]) {
      this.ngxNotificationService.error('Fill the ' + this.errors[0] + ' detail');
    }
    else if (this.personalForm.valid) {
      const date = this.personalProfileData.birth_date;
      const month = this.month.indexOf(this.personalProfileData.birth_month) + 1;
      const year = this.personalProfileData.birth_year;
      console.log(this.personalForm);
      const personalDataForm = new FormData();
      if (this.personalProfileData.identity_number) {
        personalDataForm.append('identity_number', this.personalProfileData.identity_number);
      } else {
        personalDataForm.append('id', this.personalProfileData.id);
      }
      personalDataForm.append('temple_id', this.personalProfileData.temple_id);
      personalDataForm.append('about', this.personalProfileData.about);
      personalDataForm.append('name', this.personalProfileData.name);
      personalDataForm.append('birth_date', year + '-' + month + '-' + date
        ? year + '-' + month + '-' + date : this.personalProfileData.birth_date);
      personalDataForm.append('birth_place', this.personalProfileData.birth_place);
      personalDataForm.append('birth_time', this.personalProfileData.birth_time);
      personalDataForm.append('marital_status', this.personalProfileData.marital_status);
      personalDataForm.append('manglik', this.personalProfileData.manglik);
      personalDataForm.append('religion', this.familyProfileData.religion);
      personalDataForm.append('height', this.personalProfileData.height);
      //from the personalForm
      personalDataForm.append('weight', this.personalForm.value.Weight
        ? this.personalForm.value.Weight : this.personalProfileData.weight);

      personalDataForm.append('food_choice', this.personalProfileData.food_choice);
      personalDataForm.append('caste', this.familyProfileData.caste);

      //from the personalForm
      personalDataForm.append('locality', this.personalForm.value.Locality
        ? this.personalForm.value.Locality : this.familyProfileData.locality);

      personalDataForm.append('working_city', this.personalProfileData.working_city);
      personalDataForm.append('degree', this.personalProfileData.degree);

      //from the personalForm
      personalDataForm.append('college', this.personalForm.value.College
        ? this.personalForm.value.College : this.personalProfileData.college);

      //from the personalForm
      personalDataForm.append('occupation', this.personalProfileData.occupation);
      personalDataForm.append('annual_income', this.personalProfileData.monthly_income);
      //from the personalForm
      personalDataForm.append('additional_qualification', this.personalForm.value.Additional ?
        this.personalForm.value.Additional : this.personalProfileData.additional_qualification);
      personalDataForm.append('company', this.personalForm.value.Company ? this.personalForm.value.Company : this.personalProfileData.company);
      personalDataForm.append('address', this.personalForm.value.WorkingCity
        ? this.personalForm.value.WorkingCity : this.personalProfileData.working_city);

      personalDataForm.append('email', this.personalProfileData.email ? this.personalProfileData.email : this.familyProfileData.email ? this.familyProfileData.email : null);

      personalDataForm.append('mobile', this.personalProfileData.mobile);
      personalDataForm.append('whatsapp', this.personalProfileData.whats_app_no ? this.personalProfileData.whats_app_no : this.personalProfileData.mobile);
      personalDataForm.append('profession', this.personalForm.value.Profession !== 'Others'
        ? this.personalForm.value.Profession : this.personalForm.value.OtherProfession
          ? this.personalForm.value.OtherProfession : this.personalProfileData.profession);

      personalDataForm.append('education', this.personalProfileData.degree);
      personalDataForm.append('is_lead', localStorage.getItem('is_lead'));

      console.log(personalDataForm);
      this.http.post('https://partner.hansmatrimony.com/api/updatePersonalDetails', personalDataForm).subscribe(
        (data: any) => {
          console.log(data);
          this.chatService.getUserProfileData();
        },
        (error: any) => {
          console.log(error);
          this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
        }
      );
      this.dialogRef.close();
    }
  }
  changed(element: any) {
    console.log(element);
    switch (element) {
      case 'bTime':
        this.analyticsEvent('Four Page Registration Page Birth Time Changed');
        break;
      case 'food':
        this.analyticsEvent('Four Page Registration Page Three Food Choice Changed');
        break;
      case 'manglik':
        this.analyticsEvent('Four Page Registration Page Three Manglik Status Changed');
        break;
      case 'fstatus':
        this.analyticsEvent('Four Page Registration Page Three Father Status Changed');
        break;
      case 'mstatus':
        this.analyticsEvent('Four Page Registration Page Three Mother Status Changed');
        break;
      case 'Fincome':
        this.analyticsEvent('Four Page Registration Page Three Family Income Changed');
        break;
      default:
        break;
    }
  }
  analyticsEvent(event) {
    (window as any).ga('send', 'event', event, '', {
      hitCallback: () => {
        console.log('Tracking ' + event + ' successful');
      }
    });
    // gtag app + web
    (window as any).gtag('event', event, {
      event_callback: () => {
        console.log('Tracking gtag ' + event + ' successful');
      }
    });
  }
  firstStep() {
    console.log(this.PageThree.value.BirthPlace);
    if (this.PageThree.valid) {
      if (this.PageThree.value.FamilyIncome === "100+") {
        this.PageThree.value.FamilyIncome = 100;
      }
      else {
        const a = this.PageThree.value.FamilyIncome.split('-');
        this.PageThree.patchValue({
          FamilyIncome: String((Number(a[0]) + Number(a[1])) / 2)
        });
      }
      const firststepdata = new FormData();
      firststepdata.append('id', localStorage.getItem('id') ? localStorage.getItem('id') : localStorage.getItem('getListId'));
      firststepdata.append('birth_place', this.PageThree.value.BirthPlace);
      if (this.PageThree.value.BirthTime) {
        firststepdata.append('birth_time', this.PageThree.value.BirthTime);
      }
      firststepdata.append('food_choice', this.PageThree.value.FoodChoice);
      firststepdata.append('manglik', this.PageThree.value.Mangalik ?
        this.PageThree.value.Mangalik === 'Don\'t Know' ? 'Anshik Manglik' : this.PageThree.value.Mangalik : '');
      firststepdata.append('father_status', this.PageThree.value.FatherStatus !== 'Not Alive' ? 'Alive' : 'Not Alive');
      firststepdata.append('mother_status', this.PageThree.value.MotherStatus !== 'Not Alive' ? 'Alive' : 'Not Alive');
      if (this.PageThree.value.FatherStatus !== 'Not Alive') {
        firststepdata.append('occupation_father', this.PageThree.value.FatherStatus);
      }
      if (this.PageThree.value.MotherStatus !== 'Not Alive') {
        firststepdata.append('occupation_mother', this.PageThree.value.MotherStatus);
      }
      firststepdata.append('family_income', this.PageThree.value.FamilyIncome);
      // tslint:disable-next-line: max-line-length
      return this.http.post('https://partner.hansmatrimony.com/api/formThreeProfile', firststepdata).subscribe((res: any) => {
        console.log('first', res);
        if (res.status === 1) {
          this.ngxNotificationService.success('Details updated succesfully');
          if (localStorage.getItem('storedData')) {
            localStorage.removeItem('storedData');
          }
          this.chatService.pageThreeFilled = true;
          this.chatService.getUserProfileData();
          console.log('pageThreeFilled set to true');

          this.dialogRef.close();
        } else {
          this.ngxNotificationService.error(res.message);
        }
      }, err => {
        console.log(err);
      });
    }
    else {
      this.ngxNotificationService.error('Please fill all the details!');
    }
  }
  buttonClicked() {
    this.dialogRef.close();
    switch (this.data.button) {
      case 'Get Membership': this.router.navigateByUrl(`subscription/${1}`);
        break;
      case 'Choose Plan': this.router.navigateByUrl(`subscription/${0}`);
        break;
      case 'Complete Profile': this.router.navigateByUrl(`/chat/my-profile-new/${this.data.userId}/${this.data.userIsLead}`);
        break;
      case 'Install App Now': localStorage.setItem('appInstalled', '1');
        window.open('https://bit.ly/2YQEfbe', '_self')
        break;
    }
  }
}
