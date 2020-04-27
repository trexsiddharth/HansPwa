import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FourPageService } from '../four-page.service';
import { NgxNotificationService } from 'ngx-kc-notification';
import { Router } from '@angular/router';
import { Profile } from '../profile';
import { Observable } from 'rxjs';

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
  checkStatus = false;


  constructor(private http: HttpClient, public fourPageService: FourPageService,
              private ngxNotificationService: NgxNotificationService,
              private formBuilder: FormBuilder,
              private router: Router) {
                this.pageFive = this.formBuilder.group({
                  phone: ['', Validators.compose([Validators.required,
                    Validators.max(9999999999999), Validators.pattern('(0/91)?[6-9][0-9]{9}')])],
                  enq_date: ['', Validators.compose([Validators.required])],
                  follow_date: ['', Validators.compose([Validators.required])],
                  source: ['', Validators.compose([Validators.required])],
                  assign_to: ['', Validators.compose([Validators.required])],
                  interest: ['', Validators.compose([Validators.required])],
                  comments: ['', Validators.compose([Validators.required])],
                });
              }

  ngOnInit() {
    this.getAssignToList();
    if (localStorage.getItem('getListTempleId') && localStorage.getItem('enqDate')){
        this.pageFive.patchValue({
          enq_date : localStorage.getItem('enqDate')
        });
    }
  }

  getProfileId(): Observable<any> {
    let formData = new FormData();
    formData.append('mobile', localStorage.getItem('getListMobile'));
    return this.http.post('https://partner.hansmatrimony.com/api/getLeadId', formData);
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

      checkForPhoto(status: any) {
        if (this.fourPageService.getUserThrough()) {
          this.validate(this.fourPageService.profile, status);
        } else {
          this.skip();
        }
      }

      checkStat(event: any){
        console.log(event.checked);
        this.checkStatus = event.checked;
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

      validate(userProfile: Profile, status: any) {
        console.log(userProfile);
        console.log(this.pageFive.value, status);
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
        } else if (userProfile.photoScore < 1) {
          return this.ngxNotificationService.error('Give a score');
        } else if (!this.pageFive.controls.phone.valid) {
          return this.ngxNotificationService.error('Enter a valid Alternate Number');
        }  else if (!this.pageFive.controls.enq_date.valid) {
          return this.ngxNotificationService.error('Enter a valid Enq Date');
        }  else if (!this.pageFive.controls.follow_date.valid) {
          return this.ngxNotificationService.error('Enter a valid Follow Up Date');
        } else if (!this.pageFive.controls.source.valid) {
          return this.ngxNotificationService.error('Select a source');
        } else if (!this.pageFive.controls.interest.valid) {
          return this.ngxNotificationService.error('Select interest level');
        }  else if (!this.pageFive.controls.comments.valid) {
          return this.ngxNotificationService.error('Enter a comment');
        }   else {
          console.log('test');
          if (status === '1') {
          this.approveUser();
          } else {
            this.completeUser();
          }
        }
      }
      approveUser() {
        if (!localStorage.getItem('getListId')) {
          this.getProfileId().subscribe(
            data => {
              console.log(data);
              if (data && data.status === '1') {
                localStorage.setItem('getListId', data.id);
                this.completeProfileApi().subscribe(
                  (data: any) => {
                      console.log(data);
                      if (data.status === '1') {
                this.approveProfileApi();
                  } else {
                    this.ngxNotificationService.error('Not Approved');
                  }
                }
                  , err => {
                      console.log(err);
                      this.ngxNotificationService.error(err.message, 'Not Approved');
                  }
                );
              }
            },
            err => {
              this.ngxNotificationService.error('Something Went Wrong With Lead Id');
              console.log(err);
            }
          );
        } else {
          this.completeProfileApi().subscribe(
            (data: any) => {
                console.log(data);
                if (data.status === '1') {
          this.approveProfileApi();
            } else {
              this.ngxNotificationService.error('Not Approved');
            }
          }
            , err => {
                console.log(err);
                this.ngxNotificationService.error(err.message, 'Not Approved');
            }
          );
        }
        }

      completeUser() {
        if (!localStorage.getItem('getListId')) {
          this.getProfileId().subscribe(
            data => {
              console.log(data);
              if (data && data.status === '1') {
                localStorage.setItem('getListId', data.id);
                this.completeProfileApi().subscribe(
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
            },
            err => {
              this.ngxNotificationService.error('Something Went Wrong With Lead Id');
              console.log(err);
            }
          );
        } else {
          this.completeProfileApi().subscribe(
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

      approveProfileApi() {
        const approveData = new FormData();
        approveData.append('id', localStorage.getItem('getListId'));
        approveData.append('temple_id', localStorage.getItem('getListTempleId'));
        approveData.append('photo_score', this.fourPageService.getProfile().photoScore.toString());
        approveData.append('is_approve', '1');

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

      completeProfileApi(): Observable<any> {
        const approveData = new FormData();
        approveData.append('id', localStorage.getItem('getListId'));
        approveData.append('assign_by', localStorage.getItem('getListTempleId'));
        approveData.append('assign_to', this.pageFive.value.assign_to);
        approveData.append('comments', this.pageFive.value.comments);
        approveData.append('speed', this.pageFive.value.interest);
        approveData.append('source', this.pageFive.value.source);
        approveData.append('followup_call_on', this.pageFive.value.follow_date);
        approveData.append('alt_mobile', this.pageFive.value.phone);
        approveData.append('premium_lead', this.checkStatus === true ? '1' : '0');

        return this.http.post('https://partner.hansmatrimony.com/api/completeLead', approveData);
      }
  }

