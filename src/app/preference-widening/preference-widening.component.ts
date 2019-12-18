import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA, MatCheckbox } from '@angular/material';
import { stringify } from 'querystring';
import { NgxSpinnerService } from 'ngx-spinner';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'app-preference-widening',
  templateUrl: './preference-widening.component.html',
  styleUrls: ['./preference-widening.component.css']
})
export class PreferenceWideningComponent implements OnInit, AfterViewInit {
  dataa;
  selectedCaste;
  preferenceData;
  preferenceWideningData;
  profileData;
  gender;
  maxHeight;
  minHeight;
  profileCount;
  wideningCaste: string[];

  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<PreferenceWideningComponent>, @Inject(MAT_DIALOG_DATA) data,
              private spinner: NgxSpinnerService) {
    this.dataa = data;
    this.selectedCaste = this.dataa.Caste;
    this.preferenceData = this.dataa.PreferenceTable;
    this.preferenceWideningData = this.dataa.PreferenceTable;
    this.profileData = this.dataa.ProfileTable;
    this.gender = this.dataa.Gender;

  }

  ngOnInit() {
    this.wideningCaste = [];
    this.setWideningAge(this.gender);
    switch (this.selectedCaste) {
          case 'All':
            document.getElementById('inlineCheckbox1').setAttribute('checked', 'true');
            this.wideningCaste.push('All');
            break;
            case 'Punjabi':
            document.getElementById('inlineCheckbox2').setAttribute('checked', 'true');
            this.wideningCaste.push('Punjabi');
            break;
            case 'Brahmin':
            document.getElementById('inlineCheckbox3').setAttribute('checked', 'true');
            this.wideningCaste.push('Brahmin');
            break;
            case 'Agarwal':
            document.getElementById('inlineCheckbox4').setAttribute('checked', 'true');
            this.wideningCaste.push('Agarwal');
            break;
          default:
            break;
        }
    this.getCount();
  }
  ngAfterViewInit(): void {
  }
  getHeight(ht: string) {
    return this.Heights[this.Heights1.indexOf(ht)];
  }
  saveHeight(ht: string) {
    console.log(ht);
    return this.Heights1[this.Heights.indexOf(ht)];
  }
  setWideningAge(gen: string) {
    if (gen === 'Male') {
        this.preferenceWideningData.age_min = this.getAge(this.profileData.birth_date) - 7;
        this.preferenceWideningData.age_max = this.getAge(this.profileData.birth_date);
        this.preferenceWideningData.height_min = (Number(this.profileData.height) - 10).toString();
        this.preferenceWideningData.height_max = this.profileData.height;
        this.preferenceWideningData.income_min = Math.floor(this.profileData.monthly_income * 0.1);
        this.preferenceWideningData.income_max = Math.ceil(this.profileData.monthly_income * 0.95);
    } else {
        this.preferenceWideningData.age_min = this.getAge(this.profileData.birth_date);
        this.preferenceWideningData.age_max = this.getAge(this.profileData.birth_date) + 7;
        this.preferenceWideningData.height_min = this.profileData.height;
        this.preferenceWideningData.height_max = (Number(this.profileData.height) + 10).toString();
        this.preferenceWideningData.income_min = Math.floor(this.profileData.monthly_income + 0.1);
        this.preferenceWideningData.income_max = Math.ceil(this.profileData.monthly_income + 50);
    }
    this.minHeight = this.getHeight(this.preferenceWideningData.height_min);
    this.maxHeight = this.getHeight(this.preferenceWideningData.height_max);
  }

  getAge(dob: string) {
    if (dob != null) {
    return (Math.floor((Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 365)));
    } else {
      return null;
    }
  }
  getCount() {
    const countData = new FormData();
    countData.append('id', localStorage.getItem('id'));
    countData.append('age_min', this.preferenceWideningData.age_min);
    countData.append('age_max', this.preferenceWideningData.age_max);
    countData.append('min_height', this.preferenceWideningData.height_min);
    countData.append('max_height', this.preferenceWideningData.height_max);
    countData.append('min_income', this.preferenceWideningData.income_min );
    countData.append('max_income', this.preferenceWideningData.income_max);
    countData.append('caste', this.wideningCaste.join(','));
    countData.append('is_lead', localStorage.getItem('is_lead'));

    console.log('id', localStorage.getItem('id'));
    console.log('age_min', this.preferenceWideningData.age_min);
    console.log('age_max', this.preferenceWideningData.age_max);
    console.log('min_height', this.preferenceWideningData.height_min);
    console.log('max_height', this.preferenceWideningData.height_max);
    console.log('min_income', this.preferenceWideningData.income_min );
    console.log('max_income', this.preferenceWideningData.income_max);
    console.log('caste', this.wideningCaste.join(','));

    return this.http.post<any>('https://partner.hansmatrimony.com/api/checkCount', countData).subscribe(data => {
        console.log(data);
        this.profileCount = data.count;
        this.spinner.hide();
      }, err => {
      console.log(err);
      });
  } ticked(element: HTMLInputElement) {
    this.spinner.show();
    const input =  document.getElementById(element.id) as HTMLInputElement;
    if (input.checked === true) {
       if (input.getAttribute('value') === 'Caste No-Bar') {
        this.wideningCaste.push('All');
        (document.getElementById('inlineCheckbox2') as HTMLInputElement ).checked = false;
        (document.getElementById('inlineCheckbox3') as HTMLInputElement ).checked = false;
        (document.getElementById('inlineCheckbox4') as HTMLInputElement ).checked = false;
        if (this.wideningCaste.includes('Brahmin')) {
        this.wideningCaste.splice(this.wideningCaste.indexOf('Brahmin'), 1);
        }
        if (this.wideningCaste.includes('Punjabi')) {
          this.wideningCaste.splice(this.wideningCaste.indexOf('Punjabi'), 1);
          }
        if (this.wideningCaste.includes('Agarwal')) {
            this.wideningCaste.splice(this.wideningCaste.indexOf('Agarwal'), 1);
            }
       } else {
        this.wideningCaste.push(input.getAttribute('value'));
        (document.getElementById('inlineCheckbox1') as HTMLInputElement ).checked = false;
        if (this.wideningCaste.includes('All')) {
       this.wideningCaste.splice(this.wideningCaste.indexOf('All'), 1);
        }
       }
       console.log(element, 'added to array');
     } else {
      if (input.getAttribute('value') === 'Caste No-Bar') {
        this.wideningCaste.splice(this.wideningCaste.indexOf('All'), 1);
        console.log(element, 'removed from array');
       } else {
        this.wideningCaste.splice(this.wideningCaste.indexOf(input.getAttribute('value')), 1);
        console.log(element, 'removed from array');
       }
      console.log(element, 'removed from array');
     }
    console.log(this.wideningCaste.join(','));
    this.getCount();
  }
  changed(element: HTMLElement) {
    this.spinner.show();
    console.log('value changed', element.id);
    console.log(this.preferenceWideningData.age_min);
    console.log(this.preferenceWideningData.age_max);
    console.log(this.minHeight);
    console.log(this.maxHeight);
    console.log(this.preferenceWideningData.income_min);
    console.log(this.preferenceWideningData.income_max);
    console.log('caste', this.wideningCaste.join(','));
    this.getCount();
  }
  setPreferenceWidening() {

    console.log('height_min', this.Heights1[this.Heights.indexOf(this.minHeight)]);
    console.log('height_max', this.Heights1[this.Heights.indexOf(this.maxHeight)]);

    const preferenceWideningFormData = new FormData();
    preferenceWideningFormData.append('identity_number', this.preferenceWideningData.identity_number);
    preferenceWideningFormData.append('temple_id', this.preferenceWideningData.temple_id);
    preferenceWideningFormData.append('age_min', this.preferenceWideningData.age_min);
    preferenceWideningFormData.append('age_max', this.preferenceWideningData.age_max);
    preferenceWideningFormData.append('height_min', this.Heights1[this.Heights.indexOf(this.minHeight)]);
    preferenceWideningFormData.append('height_max', this.Heights1[this.Heights.indexOf(this.maxHeight)]);
    preferenceWideningFormData.append('income_min', this.preferenceWideningData.income_min);
    preferenceWideningFormData.append('income_max', this.preferenceWideningData.income_max);
    preferenceWideningFormData.append('caste', this.wideningCaste.join(','));
    this.http.post('https://partner.hansmatrimony.com/api/updatePreferencesDetails', preferenceWideningFormData).subscribe(
      (data: any) => {
        console.log(data);
        this.dialogRef.close({success: 'success'});
        this.Analytics('Preference widening', 'Preference Widening', 'preference widening done');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');

      }

    });
  }

}
