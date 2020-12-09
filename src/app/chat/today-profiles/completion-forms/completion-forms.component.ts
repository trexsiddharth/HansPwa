
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-completion-forms',
  templateUrl: './completion-forms.component.html',
  styleUrls: ['./completion-forms.component.css']
})
export class CompletionFormsComponent implements OnInit {
  completeForm: FormGroup;
  personalActive = true;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    
    this.completeForm = this.formBuilder.group({
      BirthPlace: [''],
      BirthTime: [''],
      FoodChoice: [''],
      Mangalik: [''],
      Weight: [''],
      Profession: [''],
      OtherProfession: [''],
      College: [''],
      Additional: [''],
      Company: [''],
      Email: ['', Validators.email],
      About: (''),
      // family form
      FatherStatus: [''],
      MotherStatus: [''],
      FamilyIncome: ['', Validators.compose([Validators.max(999)])],
      family_city: [''],
      gotra: [''],
      livingWithParents: [''],
      house_type: [''],
      family_type: [''],
      FamilyAbout: [''],
    });
      
      
  }
  personalToggle() {
    this.personalActive = true; // true is when personal is active
  }

  familyToggle() {
    this.personalActive = false; // false is when family is active
  }

  changed(variable: string) {
    console.log(variable);
  }

}
