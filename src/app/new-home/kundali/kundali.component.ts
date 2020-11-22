import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { NewHomeService } from '../new-home.service';

@Component({
  selector: 'app-kundali',
  templateUrl: './kundali.component.html',
  styleUrls: ['./kundali.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class KundaliTwoComponent implements OnInit {
  kundaliForm: FormGroup;
  autoComplete = {
    strictBounds: false,
    type: 'geocode',
    fields: ['name']
  };
  points;
  gotRes = new BehaviorSubject<boolean>(false);
  gotRes$ = this.gotRes.asObservable();
  HTMLResponse: any;
  constructor(private form_builder: FormBuilder, private http: HttpClient,
    private sanitizer: DomSanitizer,
    public homeService: NewHomeService) {
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
  }
  showContinueBtn = new BehaviorSubject<boolean>(true);
  showContinueBtn$: Observable<boolean> = this.showContinueBtn.asObservable();
  ngOnInit() {
    if (this.homeService.points != -1) {
      this.HTMLResponse = this.homeService.HTMLResponse;
      this.points = this.homeService.points;
      this.kundaliForm = this.homeService.kundaliForm;
      this.gotRes.next(true);
      this.showContinueBtn.next(false);
      setTimeout(() => {
        let ele = document.getElementById('pointsDiv');
        ele.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
    this.kundaliForm.valueChanges.subscribe(() => {
      this.showContinueBtn.next(true);
    })
  }
  downloadApp() {
    window.open('https://bit.ly/2YQEfbe', '_self');
  }
  transformYourHtml(htmlTextWithStyle) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
  }
  // tslint:disable-next-line: max-line-length
  date: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  // tslint:disable-next-line: max-line-length
  month: string[] = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years: string[] = [
    '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980',
    '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990',
    '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
    '2001', '2002'
  ];
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
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
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
          this.points = response.point;
          this.HTMLResponse = response.full;
          this.HTMLResponse = this.HTMLResponse.split('ul').join('tr');
          this.HTMLResponse = this.HTMLResponse.split('li').join('td');
          console.log(this.HTMLResponse);
          this.gotRes.next(true);
          setTimeout(() => {
            let ele = document.getElementById('pointsDiv');
            ele.scrollIntoView({ behavior: 'smooth' });
          }, 1000);
        }
      });
    }
    else {
      console.log('form invalid');
    }
  }
}
