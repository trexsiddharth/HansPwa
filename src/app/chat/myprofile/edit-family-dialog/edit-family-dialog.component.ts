import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { NgxNotificationService } from 'ngx-kc-notification';

@Component({
  selector: 'app-edit-family-dialog',
  templateUrl: './edit-family-dialog.component.html',
  styleUrls: ['./edit-family-dialog.component.css']
})
export class EditFamilyDialogComponent implements OnInit {
  data: any;
  familyData: any;
  Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt Job', 'Doctor', 'Teacher', 'Homely', 'Not Employed', 'Not Alive'];
  Status: string[] = ['Alive', 'Not Alive'];
  FamilyType: string[] = ['Joint', 'Nuclear'];
  Count: any[] = ['None', 0, 1, 2, 3, 4, 5, 6, 7, 8];
  HouseType: string[] = ['Owned', 'Rented', 'Leased'];
  @ViewChild('familyForm', {static: false}) familyForm: NgForm;
  city;
  cityLocation;


  constructor(private http: HttpClient,
              private ngxNotificationService: NgxNotificationService,
              public dialogRef: MatDialogRef<EditFamilyDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
  }

  ngOnInit() {
    this.familyData = this.data.familyDetails;
  }

  onSubmit() {
    console.log(this.familyForm);
    const familyDataForm = new FormData();
    familyDataForm.append('identity_number', this.familyData.identity_number);
    familyDataForm.append('id', this.familyData.id);
    familyDataForm.append('temple_id', this.familyData.temple_id);
    familyDataForm.append('family_type', this.familyForm.value.family_type);
    familyDataForm.append('about', this.familyData.about);
    familyDataForm.append('occupation_father', this.familyForm.value.father_occupation);
    familyDataForm.append('occupation_mother', this.familyForm.value.mother_occupation);
    familyDataForm.append('married_sons', this.familyForm.value.married_sons);
    familyDataForm.append('unmarried_sons', this.familyForm.value.unmarried_sons);
    familyDataForm.append('married_daughters', this.familyForm.value.married_daughters);
    familyDataForm.append('unmarried_daughters', this.familyForm.value.unmarried_daughters);
    familyDataForm.append('gotra', this.familyForm.value.gotra);
    familyDataForm.append('family_income', this.familyForm.value.family_income);
    familyDataForm.append('city', this.familyForm.value.city);
    familyDataForm.append('is_lead', localStorage.getItem('is_lead'));


    this.http.post('https://partner.hansmatrimony.com/api/updateFamilyDetails', familyDataForm).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
        this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
      }
    );
    this.dialogRef.close();
  }

  onAutocompleteSelected(event) {
    this.familyData.city = event.formatted_address;
    console.log('address of family', this.city);

}
onLocationSelected(e) {
    this.cityLocation = e;
    console.log('location of family', e);
}

}
