

import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Observable
} from 'rxjs';
import {
  startWith,
  map
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
import { NgxSpinnerService } from 'ngx-spinner';

export interface StateGroup {
  letter: string;
  names: string[];
}
export interface hd {
  group: string;
  mapping_id: number;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-register-three',
  templateUrl: './register-three.component.html',
  styleUrls: ['./register-three.component.css']
})
export class RegisterThreeComponent implements OnInit {

  isCompleted3 = false;
  suc: any = [];
  EducationDetails: FormGroup;
  Occupation: string[] = ['Private Company', 'Business/Self Employed', 'Government Job', 'Doctor', 'Teacher', 'Not Working'];
  HigherEducation: hd[] = [{
    group: 'Engineering Design',
    mapping_id: 4,
    names: ['B.E\/B.Tech', 'B.Pharma', 'M.E\/M.Tech', 'M.Pharma', 'M.S. Engineering', 'B.Arch', 'M.Arch', 'B.Des', 'M.Des']
  }, {
    group: 'Computers',
    mapping_id: 4,
    names: ['MCA\/PGDCA', 'BCA', 'B.IT']
  }, {
    group: 'Finance',
    mapping_id: 4,
    names: ['B.Com', 'CA', 'CS', 'ICWA', 'M.Com', 'CFA']
  }, {
    group: 'Managment',
    mapping_id: 4,
    names: ['MBA\/PGDM', 'BBA', 'BHM']
  },
  {
    group: 'Medicine',
    mapping_id: 4,
    names: ['MBBS', 'M.D.', 'BAMS', 'BHMS', 'BDS', 'M.S. (Medicine)', 'MVSc.', 'BvSc.', 'MDS', 'BPT', 'MPT', 'DM', 'MCh']
  },
  {
    group: 'Law',
    mapping_id: 4,
    names: ['BL\/LLB', 'ML\/LLM']
  },
  {
    group: 'Arts\/Science"',
    mapping_id: 4,
    names: ['B.A', 'B.Sc.', 'M.A.', 'M.Sc.', 'B.Ed', 'M.Ed', 'MSW', 'BFA', 'MFA', 'BJMC', 'MJMC']
  },
  {
    group: 'Doctorate',
    mapping_id: 4,
    names: ['Ph.D', 'M.Phil']
  },
  {
    group: 'Non Graduate',
    mapping_id: 4,
    names: ['Diploma', 'High School', 'Trade School', 'Other']
  }
];

  HigherEducationOptions: Observable < hd[] > ;

  constructor(public dialog: MatDialog, private _formBuilder: FormBuilder, private router: Router, private http: HttpClient,
              private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService) {

    this.EducationDetails = this._formBuilder.group({
      HighestDegree: ['', Validators.compose([Validators.required])],
      UgCollege: [''],
      additional_qualification: [''],
      Occupation: ['', Validators.compose([Validators.required])],
      profession: ['', Validators.compose([Validators.required])],
      // 'AnnualIncome': ['', Validators.compose([Validators.required])],
      Yourself: ['', Validators.compose([Validators.required])],
      Company: ['', Validators.compose([Validators.required])],
    });

  }

  private _educGroup(value: string): hd[] {
    if (value) {
      return this.HigherEducation
        .map(group => ({
          group: group.group,
          names: _filter(group.names, value),
          mapping_id: group.mapping_id
        }))
        .filter(group => group.names.length > 0);
    }

    return this.HigherEducation;
  }

  thirdStep() {
    if (this.EducationDetails.valid) {
      this.spinner.show();
      const thirdstepdata = new FormData();
      thirdstepdata.append('identity_number', localStorage.getItem('identity_number'));
      thirdstepdata.append('degree', this.EducationDetails.value.HighestDegree);
      thirdstepdata.append('college', this.EducationDetails.value.UgCollege);
      thirdstepdata.append('additional_qualification', this.EducationDetails.value.additional_qualification);
      thirdstepdata.append('occupation', this.EducationDetails.value.Occupation);
      thirdstepdata.append('profession', this.EducationDetails.value.profession);
      thirdstepdata.append('company', this.EducationDetails.value.Company);
      thirdstepdata.append('about', this.EducationDetails.value.Yourself);
      this.isCompleted3 = true;

      return this.http.post('https://partner.hansmatrimony.com/api/' + 'createThirdPageProfilePWA', thirdstepdata).subscribe(suc => {
      this.suc = suc;
      if (this.suc.third_page_status === 'Y') {
        (window as any).ga('send', 'event', 'Career Details', 'Career Details Entered', {
          hitCallback: () => {
            console.log('Tracking Career Details Entered successful');
          }});
        this.spinner.hide();
        this.ngxNotificationService.success('Education Details Submitted Succesfully!', 'success');
        this.router.navigate(['/register-four']);
      } else {
        this.spinner.hide();
        this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
      }
    }, err => {
      this.spinner.hide();
      this.ngxNotificationService.error('SomeThing Went Wrong,Please try again AfterSome time!');
    });
    } else {
      this.ngxNotificationService.error('Please fill all the details');
    }

  }

  ngOnInit() {
    this.HigherEducationOptions = this.EducationDetails.get('HighestDegree').valueChanges
    .pipe(
      startWith(''),
      map(value => this._educGroup(value))
    );
    console.log(this.HigherEducationOptions);

    // this.autocomplete();
    return this.http.get('https://partner.hansmatrimony.com/api/getAllDegree').subscribe((res: any) => {
      this.HigherEducation.push(res);
      console.log(this.HigherEducation);
    }, err => {
      // console.log(err);
    });
  }
}




