import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-personal-dialog',
  templateUrl: './edit-personal-dialog.component.html',
  styleUrls: ['./edit-personal-dialog.component.css']
})
export class EditPersonalDialogComponent implements OnInit {
  data: any;
  personalData: any;
  familyData: any;
  @ViewChild('personalForm', {static: false}) personalForm: NgForm;
  maritalStaus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorced', 'Widowed', 'Anulled'];
  personal_height: any;
  personalDialogData: FormGroup;
  currentCity: any;
  foodpreferences: string[] = ['Doesn\'t matter', 'Non-vegeterian', 'Vegeterian'];
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  // tslint:disable-next-line: max-line-length
  HigherEducation: string[] = ['B.E\/B.Tech', 'B.Pharma', 'M.E\/M.Tech', 'M.Pharma', 'M.S. Engineering', 'B.Arch', 'M.Arch', 'B.Des', 'M.Des', 'MCA\/PGDCA', 'BCA', 'B.IT', 'B.Com', 'CA', 'CS', 'ICWA', 'M.Com', 'CFA',
  'MBA\/PGDM', 'BBA', 'BHM', 'MBBS', 'M.D.', 'BAMS', 'BHMS', 'BDS', 'M.S. (Medicine)', 'MVSc.', 'BvSc.', 'MDS', 'BPT', 'MPT', 'DM', 'MCh',
   // tslint:disable-next-line: max-line-length
   'BL\/LLB', 'ML\/LLM', 'B.A', 'B.Sc.', 'M.A.', 'M.Sc.', 'B.Ed', 'M.Ed', 'MSW', 'BFA', 'MFA', 'BJMC', 'MJMC', 'Ph.D', 'M.Phil', 'Diploma', 'High School', 'Trade School', 'Other']

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<EditPersonalDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
   }

  ngOnInit() {
    console.log(this.data);
    this.personalData = this.data.personalDetails;
    this.familyData = this.data.familyDetails;
    this.personal_height = this.getHeight(this.personalData.height);
    console.log(this.personalData.name);
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
    console.log(this.personalForm);
    const personalDataForm = new FormData();
    personalDataForm.append('identity_number', this.personalData.identity_number);
    personalDataForm.append('temple_id', this.personalData.temple_id);
    personalDataForm.append('about', '');
    personalDataForm.append('name', this.personalData.name);
    personalDataForm.append('birth_date', this.personalData.birth_date);
    personalDataForm.append('marital_status', this.personalForm.value.maritalStatus);
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
  }
  onAutocompleteSelected(event) {
    console.log(event);
  }

  onLocationSelected(e) {
    console.log(e);
  }
  close() {
    this.dialogRef.close();
  }

}
