import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-preference-dialog',
  templateUrl: './edit-preference-dialog.component.html',
  styleUrls: ['./edit-preference-dialog.component.css']
})
export class EditPreferenceDialogComponent implements OnInit {
  data: any;
  preferenceData: any;
  maxHeight: any;
  minHeight: any;
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"','4.11"','5.0"', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"','5.10"','5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"','6.11"','7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84'];
  Mangalika = ['Manglik', 'Non-manglik', 'Anshik manglik'];
  Foodpreferences: string[] = ['Doesn\'t matter', 'Non-vegetarian', 'Vegetarian'];
  Working: string[] = ['Working', 'Not Working', 'Doesn\'t matter'];
  @ViewChild('preferencesForm', {static: false}) preferenceForm: NgForm;
  constructor(private http: HttpClient, public dialogRef: MatDialogRef<EditPreferenceDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
  }

  ngOnInit() {
    console.log(this.data);
    this.preferenceData = this.data.preferencesDetails;
    console.log(this.preferenceData);
    this.maxHeight = this.getHeight(this.preferenceData.height_max);
    this.minHeight = this.getHeight(this.preferenceData.height_min);
  }
  onSubmit() {
    console.log(this.preferenceForm);

    const preferenceFormData = new FormData();
    preferenceFormData.append('identity_number', this.preferenceData.identity_number);
    preferenceFormData.append('temple_id',this.preferenceData.temple_id);
    preferenceFormData.append('caste', this.preferenceData.caste);
    preferenceFormData.append('marital_status', this.preferenceData.marital_status);
    preferenceFormData.append('manglik', this.preferenceForm.value.manglik);
    preferenceFormData.append('working', this.preferenceForm.value.working);
    preferenceFormData.append('food_choice', this.preferenceForm.value.food_choice);

    console.log('identity_number', this.preferenceData.identity_number);
    console.log('temple_id',this.preferenceData.temple_id);
    console.log('caste', this.preferenceData.caste);
    console.log('marital_status', this.preferenceData.marital_status);
    console.log('manglik', this.preferenceForm.value.manglik);
    console.log('working', this.preferenceForm.value.working);
    console.log('food_choice', this.preferenceForm.value.food_choice);
    console.log('height_min', this.Heights1[this.Heights.indexOf(this.minHeight)]);
    console.log('height_max', this.Heights1[this.Heights.indexOf(this.maxHeight)]);
    



    this.http.post('https://partner.hansmatrimony.com/api/updatePreferencesDetails', preferenceFormData).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.dialogRef.close();
  }

  getHeight(ht: string) {
    console.log(this.Heights[this.Heights1.indexOf(ht)]);
    return this.Heights[this.Heights1.indexOf(ht)];
  }

}
