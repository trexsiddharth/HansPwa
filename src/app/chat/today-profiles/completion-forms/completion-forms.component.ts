
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnalyticsService } from 'src/app/analytics.service';

@Component({
  selector: 'app-completion-forms',
  templateUrl: './completion-forms.component.html',
  styleUrls: ['./completion-forms.component.css']
})
export class CompletionFormsComponent implements OnInit {
  completeForm: FormGroup;
  personalActive = true;

  //designations
  designations: string[] = [
    'Owner', 'Manager', 'Sales Manager', 'Accounts Manager', 'Product Manager', 'Software Engineer', 'Engineer', 'Hotel Management', 'Operations Manager', 'Sales Executive', 'Operations Executive',
    'Accountant', 'Marketing Manager', 'Marketing Executive', 'Chartered Accountant', 'Owner', 'Secretary', 'Company Secretary', 'Telesales Executive', 'Teacher', 'Clerk', 'Office Assistant',
    'Relationship Manager', 'Computer Operator', 'Chief Executive Officer', 'Chief Marketing Officer', 'Chief Finance Officer', 'Business Development', 'Project Manager',
    'Program Manager', 'Solution Architect', 'Graphic Designer', 'Content Writer', 'Director', 'Business Analyst', 'Front Office', 'Back office', 'Counselor', 'Event Manager', 'Legal',
    'Public Relations', 'Others'];

    //Occupation for father and mother status
    Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt. Job', 'Doctor', 'Teacher', 'Not Working', 'Not Alive'];

    // income categories
    incomeCategories = ['0-2.5', '2.5-5', '5-7.5', '7.5-10', '10-15', '15-20', '20-25', '25-35', '35-50', '50-70', '70-100', '100+'];

    //for location autocomplete
    autoComplete = {
      strictBounds: false,
      type: 'geocode',
      fields: ['name']
    };

  constructor(public formBuilder: FormBuilder,
              private analyticsService: AnalyticsService) { }

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

  setValue(item: string) {
    let vals = item.split('-');
    if (vals[0] == "100+")
      return "Rs 1+ Crore per year";
    else
      return "Rs. " + vals[0] + " - " + vals[1] + " Lakhs per year"
  }

  placeChangedFamilyCity(): void { // for family living in
    const place: HTMLInputElement = document.querySelector('#FamliyCity');
    setTimeout(() => {
      console.log(place.value);
      this.completeForm.patchValue({
        family_city: place.value
      });
      this.analyticsService.googleAnalytics('Complete Profile Family City Changed');
    }, 200);
  }

  placeChanged() { // for birth place
    const birthPlace: HTMLInputElement = document.querySelector('#birthPlace');
    setTimeout(() => {
      console.log(birthPlace.value);
      this.completeForm.patchValue({
        BirthPlace: birthPlace.value
      });
      this.analyticsService.googleAnalytics('Complete Profile Birth Place Changed');
    }, 200);
  }

}
