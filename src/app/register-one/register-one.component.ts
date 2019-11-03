

import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Observable
} from 'rxjs';
import {
  startWith,
  map,
  sample
} from 'rxjs/operators';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  Router
} from '@angular/router';

import {
  MatDialog
} from '@angular/material/';
import { HttpClient } from '@angular/common/http';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}

@Component({
  selector: 'app-register-one',
  templateUrl: './register-one.component.html',
  styleUrls: ['./register-one.component.css']
})
export class RegisterOneComponent implements OnInit {

  currentCity;
  maritalStatus;
  gender;
  caste;
  maxHeight;
  minHeight;
  minAge;
  maxAge;
  indexForHeight: number;
  isCompleted2 = false;
  changeNumber = false;
  PageTwo: FormGroup;
  mapping_id: number;
  castePref: any;
  suc: any = [];

  Caste = false;
  AllCastes = false;
  fd: false;
  currentAge: number;
  public message: string;

  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
  Religions: string[] = ['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddhist', 'Jain', 'Parsi', 'Jewish', 'Bahai'];
  MaritalStatus: string[] = ['Never Married', 'Awaiting Divorce', 'Divorced', 'Widowed', 'Anulled'];
  AnnualIncome: any[] = ['No Income', 'Rs 0-1 Lakh', 'Rs 1-2 Lakh', 'Rs 2-3 Lakh', 'Rs 3-4 Lakh', 'Rs 4-5 Lakh', 'Rs 5-7.5 Lakh',
    'Rs 7.5-12 Lakh',
    'Rs 12-15 Lakh', 'Rs 15-20 Lakh', 'Rs 20-25 Lakh', 'Rs 25-50 Lakh', 'Rs 50Lakh-1Crore', 'Rs 1Crore+'
  ];
  Castes: hd[];


  ReligionOptions: Observable < string[] > ;
  MartalStatusOtions: Observable < string[] > ;
  CasteOptions: Observable < hd[] > ;
  AOptions: Observable < any[] > ;
  HigherEducationOptions: Observable < hd[] > ;

  getcastes: any = [];
  options: any = [];
  location: any = '';
  casteo: Observable<string[]>;

  // tslint:disable-next-line: max-line-length
  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router, private http: HttpClient,
              private ngxNotificationService: NgxNotificationService) {
    this.PageTwo = this._formBuilder.group({
      Religion: ['', Validators.compose([Validators.required])],
      MaritalStatus: ['', Validators.compose([Validators.required])],
      Height: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
      Weight: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
      Castes: ['', Validators.compose([])],
      gotra: ['', Validators.compose([])],
      Currentcity: ['', Validators.compose([Validators.required])],
      AnnualIncome: ['', Validators.compose([Validators.required])],
    });


  }



  private _Castefilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.getcastes.filter(option => option.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
    localStorage.setItem('selectedCaste', '');
    this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
      this.getcastes = res;
    });
    this.casteo = this.PageTwo.get('Castes').valueChanges.pipe(
      startWith(''),
      map(value => this._Castefilter(value))
    );


  }

  handleAddressChange(e) {
    this.location = e.formatted_address;
    // console.log(e.geometry.location.lat())
  }

  Religion(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === 'Hindu') {
      // console.log
      this.Castes = [{
          group: 'A',
          mapping_id: 4,
          names: [
            'Ad Dharmi',
            'Adi Andhra',
            'Adi Dravida',
            'Adi Karnataka',
            'Agamudayar',
            'Aggarwal',
            'Agri',
            'Ahir',
            'Ahom',
            'Ambalavasi',
            'Arora',
            'Arunthathiyar',
            'Arya Vysya'
          ]
        }, {
          group: 'B',
          mapping_id: 2,
          names: ['Baghel/Gaderiya',
            'Baidya',
            'Baishnab',
            'Baishya',
            'Balija',
            'Balija Naidu',
            'Bania',
            'Banik',
            'Banjara',
            'Bari',
            'Barujibi',
            'Besta',
            'Bhandari',
            'Bhatia',
            'Bhatraju',
            'Bhavsar',
            'Bhovi/Bhoi',
            'Billava',
            'Bisa Agarwal',
            'Bishnoi/Vishnoi',
            'Boyer',
            'Brahmbatt',
            'Brahmin',
            'Brahmin 6000 Niyogi',
            'Brahmin Anavil',
            'Brahmin Audichya',
            'Brahmin Bajkhedwal',
            'Brahmin Bardai',
            'Brahmin Barendra',
            'Brahmin Bhargava',
            'Brahmin Bhatt',
            'Brahmin Bhumihar',
            'Brahmin Brahacharanam',
            'Brahmin BrahmBhatt',
            'Brahmin Brajastha Mathil',
            'Brahmin Dadhich',
            'Brahmin Daivadnya',
            'Brahmin Deshastha',
            'Brahmin Deshastha',
            'Brahmin Dhiman',
            'Brahmin Dravida',
            'Brahmin Dunua',
            'Brahmin Embrandiri',
            'Brahmin Garhwali',
            'Brahmin Gaud Saraswat (GSB)',
            'Brahmin Gaur',
            'Brahmin Goswami',
            'Brahmin Gujar Gaur',
            'Brahmin Gurukkal',
            'Brahmin Halua',
            'Brahmin Havyaka',
            'Brahmin Hoysala',
            'Brahmin Iyengar',
            'Brahmin Iyer',
            'Brahmin Jangid',
            'Brahmin Jangra',
            'Brahmin Jhadua',
            'Brahmin Jhijhotiya',
            'Brahmin Jogi',
            'Brahmin Jyotish',
            'Brahmin Kanyakubj',
            'Brahmin Karhade',
            'Brahmin Kashmiri Pandit',
            'Brahmin Khadayat',
            'Brahmin Khandelwal',
            'Brahmin Khedaval',
            'Brahmin Koknastha',
            'Brahmin Kota',
            'Brahmin Kulin',
            'Brahmin Kumaoni',
            'Brahmin Madhwa',
            'Brahmin Maithil',
            'Brahmin Malviya',
            'Brahmin Mevada',
            'Brahmin Modh',
            'Brahmin Mohyal',
            'Brahmin Nagar',
            'Brahmin Namboodiri',
            'Brahmin Narmadiya',
            'Brahmin Paliwal',
            'Brahmin Panda',
            'Brahmin Pandit',
            'Brahmin Panicker',
            'Brahmin Pareek',
            'Brahmin Pushkarna',
            'Brahmin Rajgor',
            'Brahmin Rarhi',
            'Brahmin Rigvedi',
            'Brahmin Rudraj',
            'Brahmin Sakaldwipi',
            'Brahmin Sanadya',
            'Brahmin Sanketi',
            'Brahmin Saraswat',
            'Brahmin Sarua',
            'Brahmin Saryuparin',
            'Brahmin Shivalli',
            'Brahmin Shrimali',
            'Brahmin Sikhwal',
            'Brahmin Smartha',
            'Brahmin Sri Vishnava',
            'Brahmin Stanika',
            'Brahmin Tapodhan',
            'Brahmin Tyagi',
            'Brahmin Vaidiki',
            'Brahmin Vaikhawas',
            'Brahmin Valam',
            'Brahmin Velanadu',
            'Brahmin Viswa',
            'Brahmin Vyas',
            'Brahmin Yajurvedi',
            'Brahmin Zalora',
            'Brahmo',
            'Bunt/Shetty'
          ]
        },
        {
          group: 'C',
          mapping_id: 4,
          names: [
            'Chamar', 'Chambhar', 'Chandravanshi Kahar', 'Chasa', 'Chattada Sri Vaishnava', 'Chaudary', 'Chaurasia', 'Chettiar', 'Chhetri', 'CKP', 'Coorgi'
          ]
        },
        {
          group: 'D',
          mapping_id: 4,
          names: ['Deshastha Maratha',
            'Devadigas',
            'Devang Koshthi',
            'Devanga',
            'Devendra Kula Vellalar',
            'Dhangar',
            'Dheevara',
            'Dhoba',
            'Dhobi',
            'Dusadh'
          ]
        },
        {
          group: 'E',
          mapping_id: 4,
          names: ['Edigas', 'Ezhava', 'Ezhuthachan']
        },
        {
          group: 'G',
          mapping_id: 3,
          names: ['Gabit',
            'Ganiga',
            'Garhwali',
            'Gavali',
            'Gavara',
            'Ghumar',
            'Goala',
            'Goan',
            'Gomantak Maratha',
            'Gondhali',
            'Goud',
            'Gounder',
            'Gowda',
            'Gramani',
            'Gudia',
            'Gujjar',
            'Gupta',
            'Gurav'
          ]
        },
        {
          group: 'H',
          mapping_id: 4,
          names: ['Hegde']
        },
        {
          group: 'J',
          mapping_id: 4,
          names: ['Jaiswal', 'Jangam', 'Jat', 'Jatav']
        },
        {
          group: 'K',
          mapping_id: 1,
          names: ['Kadava patel',
            'Kahar',
            'Kaibarta',
            'Kalal',
            'Kalar',
            'Kalinga Vysya',
            'Kalwar',
            'Kamboj',
            'Kamma',
            'Kansari',
            'Kapol',
            'Kapu',
            'Kapu Munnuru',
            'Karana',
            'Karmakar',
            'Karuneegar',
            'Kasar',
            'Kashyap',
            'Kayastha',
            'Khandayat',
            'Khandelwal',
            'Kharwar',
            'Khatik',
            'Khatri',
            'Kokanastha Maratha',
            'Koli',
            'Koli Mahadev',
            'Kongu Vellala Gounder',
            'Konkani',
            'Kori',
            'Koshti',
            'Kshatriya',
            'Kshatriya Agnikula',
            'Kudumbi',
            'Kulalar',
            'Kulita',
            'Kumawat',
            'Kumbhakar',
            'Kumhar/Kumbhar',
            'Kummari',
            'Kunbi',
            'Kurmi',
            'Kurmi kshatriya',
            'Kuruba',
            'Kuruhina shetty',
            'Kurumbar',
            'Kushwaha',
            'Kutchi',
            'Kutchi Gurjar'
          ]
        },
        {
          group: 'L',
          mapping_id: 4,
          names: [
            'Lambadi',
            'Leva Patidar',
            'Leva Patil',
            'Lingayat',
            'Lodhi Rajput',
            'Lohana',
            'Lohar',
            'Lubana'
          ]
        },

      ];
      this.Caste = true;
      this.AllCastes = true;
    } else if (event.currentTarget.value === 'Muslim') {
      this.Castes = [{
        group: 'S',
        mapping_id: 4,
        names: ['Shia', 'Sunni']
      }];
      this.Caste = true;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Sikh') {
      this.Castes = [{
          group: 'A',
          mapping_id: 4,
          names: ['Arora']
        },
        {
          group: 'B',
          mapping_id: 4,
          names: ['Bhatia']
        },
        {
          group: 'G',
          mapping_id: 4,
          names: ['Gurkish']
        },
        {
          group: 'j',
          mapping_id: 4,
          names: ['jat']
        },
        {
          group: 'l',
          mapping_id: 4,
          names: ['Labana']
        },
        {
          group: 'M',
          mapping_id: 4,
          names: ['Mazbhi']
        },
        {
          group: 'O',
          mapping_id: 4,
          names: ['Others']
        },
        {
          group: 'R',
          mapping_id: 4,
          names: ['Rajput', 'Rmadasia', 'Ramagharia']
        },
        {
          group: 'S',
          mapping_id: 4,
          names: ['Saini']
        },
      ];
      this.Caste = true;
      this.AllCastes = true;
    } else if (event.currentTarget.value === 'Christian') {
      this.Caste = false;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Buddhist') {
      this.Caste = false;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Jain') {
      this.Castes = [{
          group: 'D',
          mapping_id: 4,
          names: ['Digamber']
        },
        {
          group: 'O',
          mapping_id: 4,
          names: ['Others']
        },
        {
          group: 'S',
          mapping_id: 4,
          names: ['Shwetamber']
        },
      ];
      this.Caste = true;
      this.AllCastes = true;
    } else if (event.currentTarget.value === 'Parsi') {
      this.Caste = false;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Jewish') {
      this.Caste = false;
      this.AllCastes = false;
    } else if (event.currentTarget.value === 'Bahai') {
      this.Caste = false;
      this.AllCastes = false;
    }
  }


  secondStep() {
    const firststepdata = new FormData();
    firststepdata.append('identity_number', localStorage.getItem('identity_number'));
    firststepdata.append('religion', this.PageTwo.value.Religion);
    firststepdata.append('caste', this.PageTwo.value.Castes);
    firststepdata.append('marital_status', this.PageTwo.value.MaritalStatus);
    firststepdata.append('height', this.Heights1[this.PageTwo.value.Height]);
    firststepdata.append('weight', this.PageTwo.value.Weight);
    firststepdata.append('gotra', this.PageTwo.value.gotra);
    firststepdata.append('annual_income', this.PageTwo.value.AnnualIncome);
    firststepdata.append('city', this.PageTwo.value.Currentcity);


    console.log(this.PageTwo.value.Castes);
    localStorage.setItem('selectedCaste', this.PageTwo.value.Castes);

    if (localStorage.getItem('gender') === 'Male') {
      localStorage.setItem('minHeight', '48');
      localStorage.setItem('maxHeight', this.Heights1[this.PageTwo.value.Height - 1]);
      console.log(this.Heights1[this.PageTwo.value.Height]);
    } else {
      localStorage.setItem('minHeight', this.Heights1[this.PageTwo.value.Height]);
      localStorage.setItem('maxHeight', '84');
      console.log(this.PageTwo.value.Height);
    }

    localStorage.setItem('maritalStatus', this.PageTwo.value.MaritalStatus);

    console.log(firststepdata);

    return this.http.post('https://partner.hansmatrimony.com/api/' + 'createFirstPageProfilePWA', firststepdata).subscribe(
      res => {
        this.suc = res;
        console.log('suc', res);
        this.ngxNotificationService.success('Profile Details Submitted Succesfully!', 'success');
        if (this.suc.first_page_status === 'Y') {
          this.router.navigate(['/register-two']);
        } else {
          alert('Something went wrong !!');
          }
      }, err => {
        this.ngxNotificationService.success('SomeThing Went Wrong,Please try again AfterSome time!', 'danger');
      });
  }

  onAutocompleteSelected(event) {
    console.log(event);
  }

  onLocationSelected(e) {
    console.log(e);
  }

}



