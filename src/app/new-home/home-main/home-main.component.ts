import { Component, OnInit, ViewChild } from '@angular/core';
import { NewHomeService } from '../new-home.service';
import { LanguageService } from 'src/app/language.service';
//import { DragScrollComponent } from 'ngx-drag-scroll';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    autoWidth: true,
    // merge: true,
    // mergeFit: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      }
    }
  }
  autoComplete = {
    strictBounds: false,
    type: 'geocode',
    fields: ['name']
  };
  createProfile: string[] = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
  date: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  // tslint:disable-next-line: max-line-length
  month: string[] = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: string[] = [
    '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980',
    '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
    '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
    '2001', '2002'
  ];
  currentGender = "Boy's"
  BoyDetailsFilled = new BehaviorSubject<boolean>(false);
  BoyDetailsFilled$: Observable<boolean> = this.BoyDetailsFilled.asObservable();
  kundaliForm: FormGroup;
  optionsForm: FormGroup;
  constructor(public homeService: NewHomeService,
    public languageService: LanguageService,
    private form_builder: FormBuilder,
    private http: HttpClient,
    public router: Router,
    private itemService: FindOpenHistoryProfileService) {
    this.kundaliForm = this.form_builder.group({
      BoyBirthDate: ['', Validators.required],
      BoyBirthMonth: ['', Validators.required],
      BoyBirthYear: ['', Validators.required],
      GirlBirthDate: ['', Validators.required],
      GirlBirthMonth: ['', Validators.required],
      GirlBirthYear: ['', Validators.required],
      BoyBirthTime: ['', Validators.required],
      GirlBirthTime: ['', Validators.required],
      BoyBirthPlace: ['', Validators.required],
      GirlBirthPlace: ['', Validators.required],
      BoyName: ['', Validators.required],
      GirlName: ['', Validators.required],
    });
    this.optionsForm = this.form_builder.group({
      Looking: [null],
      For: [null],
    })
  }
  goToCompatibility() {
    if (this.optionsForm.value.Looking) {
      this.itemService.compatibilityGender = this.optionsForm.value.Looking === 'Groom' ? 'Female' : 'Male';
    }
    if (this.optionsForm.value.For) {
      this.itemService.compatibilityLookingFor = this.optionsForm.value.For;
    }
    this.router.navigateByUrl('/fourReg');
  }
  ngOnInit() {
    if (localStorage.getItem('gender')) {

      let gender = localStorage.getItem('gender');
      if (gender === "Female") {
        this.currentGender = "Girl's";
        this.optionsForm.patchValue({
          Looking: 'Groom',
        })
      }
      else {
        this.currentGender = "Boy's";
        this.optionsForm.patchValue({
          Looking: 'Bride',
        })
      }
    }
  }
  placeChanged(str: string) {
    const city: HTMLInputElement = document.querySelector('#' + str);
    setTimeout(() => {
      console.log(city.value);
      if (str === 'GirlBirthPlace') {
        this.kundaliForm.patchValue({
          GirlBirthPlace: city.value
        });
      }
      else {
        this.kundaliForm.patchValue({
          BoyBirthPlace: city.value
        });
      }
    }, 500);
  }
  detailsFilled() {
    if (this.currentGender === "Girl's")
      this.currentGender = "Boy's"
    else
      this.currentGender = "Girl's"
    this.BoyDetailsFilled.next(!this.BoyDetailsFilled.value);
  }
  openPlaystore() {
    window.open('https://play.google.com/store/apps/details?id=com.twango.me');
  }
  selected(str: string) {
    if (str === 'looking') {
      let value = this.optionsForm.value.Looking;
      if (value === 'Groom') {
        this.createProfile = ['Myself', 'Daughter', 'Sister', 'Other'];
      }
      else {
        this.createProfile = ['Myself', 'Son', 'Brother', 'Other'];
      }
    }
    else {
      let value = this.optionsForm.value.For;
      if (['Daughter', 'Sister'].includes(value)) {
        this.optionsForm.patchValue({
          Looking: 'Groom'
        });
      }
      else if (['Son', 'Brother'].includes(value)) {
        this.optionsForm.patchValue({
          Looking: 'Bride'
        });
      }
    }
  }
  onSubmit() {
    console.log(this.kundaliForm.value);
    if (this.kundaliForm.valid) {
      let tosend = new FormData();
      let boyDate = this.kundaliForm.get('BoyBirthDate').value + this.kundaliForm.get('BoyBirthMonth').value + this.kundaliForm.get('BoyBirthYear').value;
      let girlDate = this.kundaliForm.get('GirlBirthDate').value + this.kundaliForm.get('GirlBirthMonth').value + this.kundaliForm.get('GirlBirthYear').value;
      tosend.append('boy_birth_date', boyDate);
      tosend.append('boy_birth_time', this.kundaliForm.value.BoyBirthTime);
      tosend.append('boy_birth_place', this.kundaliForm.value.BoyBirthPlace);
      tosend.append('girl_birth_date', girlDate);
      tosend.append('girl_birth_time', this.kundaliForm.value.GirlBirthTime);
      tosend.append('girl_birth_place', this.kundaliForm.value.GirlBirthPlace);
      tosend.append('boy_name', this.kundaliForm.value.BoyName);
      tosend.append('girl_name', this.kundaliForm.value.GirlName);

      this.http.post('https://partner.hansmatrimony.com/api/getKundali', tosend).subscribe((response: any) => {
        console.log(response);
        if (response.point) {
          this.homeService.points = response.point;
          this.homeService.HTMLResponse = response.full;
          this.homeService.HTMLResponse = this.homeService.HTMLResponse.split('ul').join('tr');
          this.homeService.HTMLResponse = this.homeService.HTMLResponse.split('li').join('td');
          this.homeService.kundaliForm = this.kundaliForm;
          console.log(this.homeService.HTMLResponse);
          this.router.navigateByUrl('/kundaliMatching');
        }
      });
    }
    else {
      console.log('form invalid');
    }
  }
}

