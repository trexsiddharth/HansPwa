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
  sources: string[] = ['Facebook', 'Board/Sunpac/Banner', 'Sms', 'Walk-In', 'Referral', 'Tiktok', 'Google',
'Justdial', 'Instagram', 'Newspaper', 'Temple Branding', 'Renewal', 'Upgrade', 'Data Account', 'Word of Mouth'];
  interestLevel: string[] = ['Very High', 'High', 'Medium', 'Less'];
  allTemples: any[] = [];
  fullList = [];
  templeList = [];
  templeChecked = false;
  moderatorList = [];
  moderatorChecked = false;
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

  async ngOnInit() {
    await this.getAssignToList();
    if (localStorage.getItem('getListTempleId') && localStorage.getItem('enqDate')) {
        this.pageFive.patchValue({
          enq_date : localStorage.getItem('enqDate'),
          source: localStorage.getItem('getListSource')
        });
    } else if (localStorage.getItem('getListTempleId') && localStorage.getItem('getListId')) {
      this.getLeadData().subscribe(
        value => {
          console.log(value);
          if (value.status === '1') {

          const assignToName = this.allTemples.find(
            element => {
              return element.temple_id === value.data.assign_to;
            }
          );
          if (assignToName) {
            if (assignToName.role === 0) {
              this.templeChecked = true;
            } else if (assignToName.role === 5) {
              this.moderatorChecked = true;
            }
          }
          const assignByName = this.allTemples.find(
            element => {
              return element.temple_id === value.data.assign_by;
            }
          );
          console.log('assign by', assignByName);
          if (assignByName && assignByName.temple_id !== 'online') {
            console.log(assignByName);
            localStorage.setItem('valueTempleId', assignByName.temple_id);
          }

          this.pageFive.patchValue({
            phone: value.data.alt_mobile,
            assign_to: assignToName.name,
            interest: value.data.speed,
            source: value.data.source,
            follow_date: value.data.follow_call_date,
            enq_date: value.data.enquiry_date
          });
          console.log(this.pageFive.value);
        } else {
          this.ngxNotificationService.error(value.message);
        }
        }
      );
    }
  }

  getProfileId(): Observable<any> {
    const formData = new FormData();
    formData.append('mobile', localStorage.getItem('getListMobile') ? localStorage.getItem('getListMobile')
    : localStorage.getItem('mobile_number'));
    return this.http.post('https://partner.hansmatrimony.com/api/getLeadId', formData);
  }

  getAssignToList() {
    return new Promise((resolve) => {
      this.http.get('https://partner.hansmatrimony.com/api/leads/getAllTemples').subscribe(
        (data: any) => {
          this.allTemples = data.all_temples;
          this.fullList = data.all_temples;
          resolve(data);
        }
      );
    });

      }

      clearHistory() {
        localStorage.setItem('getListId', '');
        localStorage.setItem('getListLeadId', '');
        localStorage.setItem('mobile_number', '');
        localStorage.setItem('id', '');
      }

      checkForPhoto(status: any) {
        if (this.fourPageService.getUserThrough()) {
            if (status === '1') {
              this.validate(this.fourPageService.profile, status);
            } else {
              this.validateComplete(this.fourPageService.profile, status);
            }
        }
      }
      assignToTemple(event: any) {
        console.log(event.checked);
        if (event.checked) {
          this.templeChecked = true;
          this.moderatorChecked = false;
          this.fullList = [];
          this.allTemples.forEach(
            temples => {
                if (temples.role === 0) {
                  this.fullList.push(temples);
                }
            }
          );
        } else if (event.checked === false && this.moderatorChecked === false) {
          this.fullList = [...this.allTemples];
        }
      }
      assignToModerator(event: any) {
        console.log(event.checked);
        if (event.checked) {
          this.moderatorChecked = true;
          this.templeChecked = false;
          this.fullList = [];
          this.allTemples.forEach(
            temples => {
                if (temples.role === 5) {
                  this.fullList.push(temples);
                }
            }
          );
        } else if (event.checked === false && this.templeChecked === false) {
          this.fullList = [...this.allTemples];
        }
      }

      checkStat(event: any) {
        console.log(event.checked);
        this.checkStatus = event.checked;
      }

      validate(userProfile: Profile, status: any) {
        console.log(userProfile);
        console.log(this.pageFive.value, status);
        if (userProfile.name === null || userProfile.name === '') {
          return this.ngxNotificationService.error('Enter Name');
        } else if (userProfile.mobile === null || userProfile.mobile === '') {
          return this.ngxNotificationService.error('Enter Mobile Number');
        } else if (userProfile.relation === null  || userProfile.relation === '') {
          return this.ngxNotificationService.error('Select Relation');
        } else if (userProfile.gender === null  || userProfile.gender === '') {
          return this.ngxNotificationService.error('Select Gender');
        } else if (userProfile.dob === null  || userProfile.dob === '') {
          return this.ngxNotificationService.error('Enter D.O.B');
        } else if (userProfile.height === null  || userProfile.height === '') {
          return this.ngxNotificationService.error('Select Height');
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
          this.approveUser();
        }
      }

      validateComplete(userProfile: Profile, status: any) {
        console.log(userProfile);
        console.log(this.pageFive.value, status);
        if (!this.pageFive.controls.enq_date.valid) {
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
            this.completeUser();
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

                  if (localStorage.getItem('getListMobile')) { // mode 3
                          window.open('https://partner.hansmatrimony.com/incompleteleads', '_top', null, true);
                        } else if (localStorage.getItem('getListId')) { // mode 2
                          window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
                        }


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
            if (localStorage.getItem('getListMobile')) { // mode 3
              window.open('https://partner.hansmatrimony.com/incompleteleads', '_top', null, true);
            } else if (localStorage.getItem('getListId')) { // mode 2
              window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
            }
                } else {
                  this.ngxNotificationService.error(data.message, 'Not Approved');
                }

                this.clearHistory();
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
          if (localStorage.getItem('getListMobile')) { // mode 3
            window.open('https://partner.hansmatrimony.com/incompleteleads', '_top', null, true);
          } else if (localStorage.getItem('getListId')) { // mode 2
            window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
          }

          this.clearHistory();
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
        approveData.append('assign_by', localStorage.getItem('valueTempleId') ? localStorage.getItem('valueTempleId')
        :  localStorage.getItem('getListTempleId'));

        approveData.append('logged_in', localStorage.getItem('getListTempleId'));
        approveData.append('assign_to', this.pageFive.value.assign_to);
        approveData.append('comments', this.pageFive.value.comments);
        approveData.append('speed', this.pageFive.value.interest);
        approveData.append('source', this.pageFive.value.source);
        approveData.append('followup_call_on', this.pageFive.value.follow_date);
        approveData.append('alt_mobile', this.pageFive.value.phone);
        // if url with enqData : mode -> 3 , if with id: mode -> 2 if only with fourReg : mode -> 1
        approveData.append('mode', localStorage.getItem('enqDate') ? '3'
        : localStorage.getItem('getListId') ? '2' : '1');
        approveData.append('premium_lead', this.checkStatus === true ? '1' : '0');

        return this.http.post('https://partner.hansmatrimony.com/api/completeLead', approveData);
      }

      getLeadData(): Observable<any> {
        const formData = new FormData();
        formData.append('id', localStorage.getItem('getListId'));
        return this.http.post('https://partner.hansmatrimony.com/api/getLeadDetails', formData);
      }
  }

