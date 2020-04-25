import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FourPageService } from '../four-page.service';
import { NgxNotificationService } from 'ngx-kc-notification';
import { Router } from '@angular/router';
import { Profile } from '../profile';

@Component({
  selector: 'app-compatibility-page-five',
  templateUrl: './compatibility-page-five.component.html',
  styleUrls: ['./compatibility-page-five.component.css']
})
export class CompatibilityPageFiveComponent implements OnInit {
  pageFive: FormGroup;
  errors: string[] = [];
  sources: string[] = ['Facebook', 'Board', 'Sms', 'Walk-In', 'Referral', 'Tiktok', 'Google',
'Justdial', 'Online', 'website', 'gnb home'];
  interestLevel: string[] = ['Very High', 'High', 'Medium', 'Less'];
  allTemples: any[] = [];
  photoScore = 0;


  constructor(private http: HttpClient, public fourPageService: FourPageService,
              private ngxNotificationService: NgxNotificationService,
              private router: Router) { 
                
              }

  ngOnInit() {
    this.getAssignToList();
  }

  getAssignToList() {
      this.http.get('https://partner.hansmatrimony.com/api/leads/getAllTemples').subscribe(
        (data: any) => {
          this.allTemples = data.all_temples;
        }
      );
      }
      submit() {
        this.clearHistory();
        window.open('https://partner.hansmatrimony.com/getList', '_top', null, true);
      }

      clearHistory() {
        localStorage.setItem('getListId', '');
        localStorage.setItem('getListLeadId', '');
        localStorage.setItem('mobile_number', '');
        localStorage.setItem('id', '');
      }

      checkForPhoto() {
        if (this.fourPageService.getUserThrough()) {
          this.validate(this.fourPageService.profile);
        } else {
          this.skip();
        }
      }

      skip() {
        (window as any).fbq('track', 'FourPageRegistration', {
          value: 15,
          currency: 'INR',
          content_name: localStorage.getItem('RegisterNumber'),
        });
        (window as any).fbq('track', '692972151223870' , 'FourPageRegistration', {
          value: 15,
          currency: 'INR',
          content_name: localStorage.getItem('RegisterNumber'),
        });
        this.gtag_report_conversion('https://hansmatrimony.com/fourReg');
        this.router.navigateByUrl('/chat');
      }

      gtag_report_conversion(url) {
        (window as any).gtag('event', 'conversion', { send_to: 'AW-682592773/Zon_CJGftrgBEIWUvsUC'});
        return false;
      }

      validate(userProfile: Profile) {
        console.log(userProfile);
        if (userProfile.name === null || userProfile.name === '') {
          return this.ngxNotificationService.error('Enter Name');
        } else if (userProfile.mobile === null || userProfile.mobile === '') {
          return this.ngxNotificationService.error('Enter Mobile Number');
        } else if (userProfile.email === null  || userProfile.email === '') {
          return this.ngxNotificationService.error('Enter Email');
        } else if (userProfile.relation === null  || userProfile.relation === '') {
          return this.ngxNotificationService.error('Select Relation');
        } else if (userProfile.gender === null  || userProfile.gender === '') {
          return this.ngxNotificationService.error('Select Gender');
        } else if (userProfile.dob === null  || userProfile.dob === '') {
          return this.ngxNotificationService.error('Enter D.O.B');
        } else if (userProfile.height === null  || userProfile.height === '') {
          return this.ngxNotificationService.error('Select Height');
        } else if (userProfile.weight === null  || userProfile.weight === '') {
          return this.ngxNotificationService.error('Enter Weight');
        } else if (userProfile.martialStatus === null  || userProfile.martialStatus === '') {
          return this.ngxNotificationService.error('Select Marital Status');
        } else if (userProfile.annualIncome === null  || userProfile.annualIncome === '') {
          return this.ngxNotificationService.error('Enter Annual Income');
        } else if (userProfile.religion === null  || userProfile.religion === '') {
          return this.ngxNotificationService.error('Select Religion');
        } else if (userProfile.caste === null  || userProfile.caste === '') {
          return this.ngxNotificationService.error('Select Caste');
        } else if (userProfile.manglik === null  || userProfile.manglik === '') {
          return this.ngxNotificationService.error('Select Manglik Status');
        } else if (userProfile.locality === null  || userProfile.locality === '') {
          return this.ngxNotificationService.error('Enter Locality');
        } else if (userProfile.qualification === null  || userProfile.qualification === '') {
          return this.ngxNotificationService.error('Select Qualification');
        } else if (userProfile.occupation === null  || userProfile.occupation === '') {
          return this.ngxNotificationService.error('Select Occupation');
        } else if (userProfile.designation === null  || userProfile.designation === '') {
          return this.ngxNotificationService.error('Enter Designation');
        } else if (userProfile.workingCity === null  || userProfile.workingCity === '') {
          return this.ngxNotificationService.error('Enter Working City');
        } else if (userProfile.about === null  || userProfile.about === '') {
          return this.ngxNotificationService.error('Enter About');
        } else if (userProfile.birthPlace === null  || userProfile.birthPlace === '') {
          return this.ngxNotificationService.error('Enter Birth Place');
        } else if (userProfile.birthTime === null  || userProfile.birthTime === '') {
          return this.ngxNotificationService.error('Enter Birth Time');
        } else if (userProfile.gotra === null  || userProfile.gotra === '') {
          return this.ngxNotificationService.error('Enter Gotra');
        } else if (userProfile.foodChoice  === null || userProfile.foodChoice === '') {
          return this.ngxNotificationService.error('Select Food Choice');
        } else if (userProfile.fatherStatus === null  || userProfile.fatherStatus === '') {
          return this.ngxNotificationService.error('Select Father Status');
        } else if (userProfile.motherStatus === null  || userProfile.motherStatus === '') {
          return this.ngxNotificationService.error('Select Mother Status');
        } else if (userProfile.familyIncome  === null || userProfile.familyIncome === '') {
          return this.ngxNotificationService.error('Enter Family Income');
        } else if (userProfile.image1 === null  || userProfile.image1 === '') {
          return this.ngxNotificationService.error('Select Image 1');
        } else if (userProfile.image2 === null  || userProfile.image2 === '') {
          return this.ngxNotificationService.error('Select Image 2');
        } else if (userProfile.image3 === null  || userProfile.image3 === '') {
          return this.ngxNotificationService.error('Select Image 3');
        } else if (this.photoScore < 1) {
          return this.ngxNotificationService.error('Give a score');
        } else {
          this.approveUser();
        }
      }
      approveUser() {
        let approveData = new FormData();
        approveData.append('id', localStorage.getItem('getListId'));
        approveData.append('is_approved', '1');
        approveData.append('photo_score', this.photoScore.toString());
    
        this.http.post('https://partner.hansmatrimony.com/api/ApproveProfile', approveData).subscribe(
          (data: any) => {
              console.log(data);
              if (data.status === '1') {
          this.clearHistory();
          window.open('https://partner.hansmatrimony.com/getList', '_top', null, true);
              } else {
                this.ngxNotificationService.error(data.message, 'Not Approved');
              }
          }, err => {
              console.log(err);
              this.ngxNotificationService.error(err.message, 'Not Approved');
          }
        );
      }
  }

