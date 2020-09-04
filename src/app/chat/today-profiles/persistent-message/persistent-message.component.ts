import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditPersonalDialogComponent } from '../../myprofile/edit-personal-dialog/edit-personal-dialog.component';
import { Router } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxNotificationService } from 'ngx-kc-notification';
import { HttpClient } from '@angular/common/http';

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

  Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt. Job', 'Doctor', 'Teacher', 'Not Working', 'Not Alive'];
  autoComplete = {
    strictBounds: false,
    type: 'geocode',
    fields: ['name']
  };
  incomeCategories = ['0-2.5', '2.5-5', '5-7.5', '7.5-10', '10-15', '15-20', '20-25', '25-35', '35-50', '50-70', '70-100', '100+'];

  storedData: any;
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
    if (localStorage.getItem('storedData')) {
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
    // if (localStorage.getItem('profileCompPercent')) {
    //   if (Number(localStorage.getItem('profileCompPercent')) <= 50 && this.data.button == 'Complete Profile')
    //     this.completeProfile = true;
    // }
    else {
      this.completeProfile = false;
    }
  }
  setValue(item: string) {
    let vals = item.split('-');
    if (vals[0] == "100+")
      return "Rs 1+ Crore per year";
    else
      return "Rs. " + vals[0] + " - " + vals[1] + " Lakhs per year"
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
          localStorage.removeItem('storedData');
          this.buttonClicked();
          //this.dialogRef.close();
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
        window.open('https://bit.ly/2YQEfbe', '_blank')
        break;
    }
  }
}
