import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FourPageService } from '../four-page.service';
import { NgxNotificationService } from 'ngx-kc-notification';
import { Router } from '@angular/router';
import { Profile } from '../profile';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil } from 'rxjs/operators';

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
  getcastes: any = [];
  compatibiltyCount;
  castePref: any[];

  /** list of banks filtered by search keyword */
  public filteredCastesMulti: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected onDestroy = new Subject<void>();


  constructor(private http: HttpClient, public fourPageService: FourPageService,
    private ngxNotificationService: NgxNotificationService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.pageFive = this.formBuilder.group({
      searchCaste: (null),
      searchCasteText: (null),
      allCaste: (false),
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
    // get caste preferences / compatibilty count

    this.getAllCaste(null);

    await this.getAssignToList();
    if (localStorage.getItem('getListTempleId') && localStorage.getItem('enqDate')) {
      this.pageFive.patchValue({
        enq_date: localStorage.getItem('enqDate'),
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
              assign_to: assignToName ? assignToName.name : '',
              interest: value.data.speed,
              source: value.data.source,
              follow_date: value.data.follow_call_date,
              enq_date: value.data.enquiry_date ? value.data.enquiry_date : value.data.created_at.split(' ')[0]
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
      if (this.compatibiltyCount < 100 && !this.pageFive.value.allCaste &&
        this.pageFive.value.searchCaste !== 'All') {
        this.ngxNotificationService.warning('Please Select No Caste Bar');
        return;
      }
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
          if (temples.role === 5 || temples.role === 7) {
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

  getAllCaste(caste: any) {
    if (this.fourPageService.getAllCastes()) {
      this.getcastes = this.fourPageService.getAllCastes();
      const formData = new FormData();
      formData.append('lead_id', localStorage.getItem('getListId'));
      formData.append('castes', caste);
      this.http.post('https://partner.hansmatrimony.com/api/getAvailableRishtey', formData).subscribe(
        (data: any) => {
          console.log(data);
          // set initial selection
          if (data && data.castes) {
            let values = [];
            if (data.castes.length > 1) {
              console.log(data.castes.length);
              this.castePref = data.castes;
              data.castes.forEach(element => {
                if (this.getcastes.indexOf(element)) {
                  values.push(this.getcastes[this.getcastes.indexOf(element)]);
                }
              });
            } else {
              console.log(data.castes.length);
              this.castePref = data.castes[0].split(',');
              data.castes[0].split(',').forEach(element => {
                if (this.getcastes.indexOf(element)) {
                  values.push(this.getcastes[this.getcastes.indexOf(element)]);
                }
              });
            }

            // if all , check the check box for no caste bar
            if (values.includes('All')) {
              this.pageFive.patchValue({
                allCaste: true
              });
            }
            // set caste dropdown values
            this.pageFive.patchValue({
              searchCaste: values
            });

            if (data.count) {
              this.compatibiltyCount = data.count;

            }
          }

          // load the initial bank list
          this.filteredCastesMulti.next(this.getcastes.slice());

          // listen for search field value changes
          this.pageFive.controls.searchCasteText.valueChanges
            .pipe(takeUntil(this.onDestroy))
            .subscribe(() => {
              this.filterCasteMulti();
            });
        });

    } else {
      this.getAllCasteList();
    }
  }

  getAllCasteList() {
    this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
      this.getcastes = [...res, 'All'];
      this.fourPageService.setAllCastes(this.getcastes);
      this.getAllCaste(null);
    });
  }

  protected filterCasteMulti() {
    if (!this.getcastes) {
      return;
    }
    // get the search keyword
    let search = this.pageFive.value.searchCasteText;
    if (!search) {
      this.filteredCastesMulti.next(this.getcastes.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCastesMulti.next(
      this.getcastes.filter(bank => bank.toLowerCase().indexOf(search) > -1)
    );
  }

  casteSelectionChanged(event) {
    console.log(event);
    console.log(event.value[0]);

    let values = [];
    event.value.forEach(element => {
      if (this.getcastes.indexOf(element)) {
        values.push(this.getcastes[this.getcastes.indexOf(element)]);
      }
    });

    // set caste dropdown values
    this.pageFive.patchValue({
      searchCaste: values
    });

    console.log(this.pageFive.value.searchCaste);
    this.getAllCaste(this.pageFive.value.searchCaste);
  }


  // set checkbox value to all if checked
  checkAllCastePref(event) {
    console.log(event);
    if (event.checked) {
      this.pageFive.controls.searchCaste.setValue(['All']);
      this.getAllCaste('All');
    } else {
      this.getAllCaste(null);
    }
  }

  validate(userProfile: Profile, status: any) {
    console.log(userProfile);
    console.log(this.pageFive.value, status);
    if (userProfile.name === null || userProfile.name === '') {
      return this.ngxNotificationService.error('Enter Name');
    } else if (userProfile.mobile === null || userProfile.mobile === '') {
      return this.ngxNotificationService.error('Enter Mobile Number');
    } else if (userProfile.relation === null || userProfile.relation === '') {
      return this.ngxNotificationService.error('Select Relation');
    } else if (userProfile.gender === null || userProfile.gender === '') {
      return this.ngxNotificationService.error('Select Gender');
    } else if (userProfile.dob === null || userProfile.dob === '') {
      return this.ngxNotificationService.error('Enter D.O.B');
    } else if (userProfile.height === null || userProfile.height === '') {
      return this.ngxNotificationService.error('Select Height');
    } else if (userProfile.weight === null || userProfile.weight === '') {
      return this.ngxNotificationService.error('Enter Weight');
    } else if (userProfile.martialStatus === null || userProfile.martialStatus === '') {
      return this.ngxNotificationService.error('Select Marital Status');
    } else if (userProfile.annualIncome === null || userProfile.annualIncome === '') {
      return this.ngxNotificationService.error('Enter Annual Income');
    } else if (userProfile.religion === null || userProfile.religion === '') {
      return this.ngxNotificationService.error('Select Religion');
    } else if (userProfile.caste === null || userProfile.caste === '') {
      return this.ngxNotificationService.error('Select Caste');
    } else if (userProfile.qualification === null || userProfile.qualification === '') {
      return this.ngxNotificationService.error('Select Qualification');
    } else if (userProfile.occupation === null || userProfile.occupation === '') {
      return this.ngxNotificationService.error('Select Occupation');
    } else if (userProfile.designation === null || userProfile.designation === '') {
      return this.ngxNotificationService.error('Enter Designation');
    } else if (userProfile.occupation !== 'Not Working' && userProfile.workingCity === null || userProfile.workingCity === '') {
      return this.ngxNotificationService.error('Enter Working City');
    } else if (userProfile.manglik === null || userProfile.manglik === '') {
      return this.ngxNotificationService.error('Select Manglik Status');
    } else if (userProfile.locality === null || userProfile.locality === '') {
      return this.ngxNotificationService.error('Enter Locality');
    } else if (userProfile.about === null || userProfile.about === '') {
      return this.ngxNotificationService.error('Enter About');
    } else if (userProfile.birthPlace === null || userProfile.birthPlace === '') {
      return this.ngxNotificationService.error('Enter Birth Place');
    } else if (userProfile.foodChoice === null || userProfile.foodChoice === '') {
      return this.ngxNotificationService.error('Select Food Choice');
    } else if (userProfile.fatherStatus === null || userProfile.fatherStatus === '') {
      return this.ngxNotificationService.error('Select Father Status');
    } else if (userProfile.motherStatus === null || userProfile.motherStatus === '') {
      return this.ngxNotificationService.error('Select Mother Status');
    } else if (userProfile.familyIncome === null || userProfile.familyIncome === '') {
      return this.ngxNotificationService.error('Enter Family Income');
    } else if (!userProfile.image1 || userProfile.image1 === null || userProfile.image1 === '') {
      return this.ngxNotificationService.error('Select Image 1');
    } else if (!userProfile.image2 || userProfile.image2 === null || userProfile.image2 === '') {
      return this.ngxNotificationService.error('Select Image 2');
    } else if (!userProfile.image3 || userProfile.image3 === null || userProfile.image3 === '') {
      return this.ngxNotificationService.error('Select Image 3');
    } else if (!userProfile.college || userProfile.college === '') {
      return this.ngxNotificationService.error('Enter College Name');
    } else if (!userProfile.company || userProfile.company === '') {
      return this.ngxNotificationService.error('Enter Company Name');
    } else if (userProfile.fatherStatus !== 'Not Alive' && userProfile.fatherStatus !== 'Not Working' &&
      userProfile.family.occupation === null || userProfile.family.occupation === '') {
      return this.ngxNotificationService.error('Select Father Occupation');
    } else if (userProfile.motherStatus !== 'Not Alive' && userProfile.motherStatus !== 'Not Working' &&
      userProfile.family.occupation_mother === null || userProfile.family.occupation_mother === '') {
      return this.ngxNotificationService.error('Select Mother Occupation');
    } else if (userProfile.family.married_daughters == null) {
      return this.ngxNotificationService.error('Select Married Sisters');
    } else if (userProfile.family.unmarried_daughters == null) {
      return this.ngxNotificationService.error('Select Un Married Sisters');
    } else if (userProfile.family.married_sons == null) {
      return this.ngxNotificationService.error('Select Married Brothers');
    } else if (userProfile.family.unmarried_sons == null) {
      return this.ngxNotificationService.error('Select Un Married Brothers');
    } else if (!userProfile.family.house_type || userProfile.family.house_type === '') {
      return this.ngxNotificationService.error('Select House Type');
    } else if (!userProfile.family.family_type || userProfile.family.family_type === '') {
      return this.ngxNotificationService.error('Select Family Type');
    } else if (!userProfile.family.city || userProfile.family.city === '') {
      return this.ngxNotificationService.error('Enter Family Living In');
    } else if (userProfile.photoScore < 1) {
      return this.ngxNotificationService.error('Give a score');
    } else if (!this.pageFive.controls.enq_date.valid) {
      return this.ngxNotificationService.error('Enter a valid Enq Date');
    } else if (!this.pageFive.controls.follow_date.valid) {
      return this.ngxNotificationService.error('Enter a valid Follow Up Date');
    } else if (!this.pageFive.controls.source.valid) {
      return this.ngxNotificationService.error('Select a source');
    } else if (!this.pageFive.controls.assign_to.valid) {
      return this.ngxNotificationService.error('Select Assign To');
    } else if (!this.pageFive.controls.interest.valid) {
      return this.ngxNotificationService.error('Select interest level');
    } else if (!this.pageFive.controls.comments.valid) {
      return this.ngxNotificationService.error('Enter a comment');
    } else {
      this.approveUser();
    }
  }

  validateComplete(userProfile: Profile, status: any) {
    console.log(userProfile);
    console.log(this.pageFive.value, status);
    if (!this.pageFive.controls.enq_date.valid) {
      return this.ngxNotificationService.error('Enter a valid Enq Date');
    } else if (!this.pageFive.controls.follow_date.valid) {
      return this.ngxNotificationService.error('Enter a valid Follow Up Date');
    } else if (!this.pageFive.controls.source.valid) {
      return this.ngxNotificationService.error('Select a Source');
    } else if (!this.pageFive.controls.assign_to.valid) {
      return this.ngxNotificationService.error('Select Assign To');
    } else if (!this.pageFive.controls.interest.valid) {
      return this.ngxNotificationService.error('Select interest level');
    } else if (!this.pageFive.controls.comments.valid) {
      return this.ngxNotificationService.error('Enter a comment');
    } else {
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
                  if (data.message) {
                    this.ngxNotificationService.error(data.message);
                  } else {
                    this.ngxNotificationService.error('Not Approved');
                  }
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
            if (data.message) {
              this.ngxNotificationService.error(data.message);
            } else {
              this.ngxNotificationService.error('Not Approved');
            }
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
                    window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
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
              window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
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
            window.open('https://partner.hansmatrimony.com/hot-leads', '_top', null, true);
          } else if (localStorage.getItem('getListId')) { // mode 2
            window.open('https://partner.hansmatrimony.com/leads', '_top', null, true);
          }

          this.clearHistory();
        } else {
          if (data.message) {
            this.ngxNotificationService.error(data.message);
          } else {
            this.ngxNotificationService.error('Not Approved');
          }
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
      : localStorage.getItem('getListTempleId'));

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

  // send photo upload link to the user
  sendPhotoLink() {
    if (localStorage.getItem('getListId') &&
      localStorage.getItem('getListLeadId') &&
      localStorage.getItem('getListMobile')) {
      const formData = new FormData();
      formData.append('id', localStorage.getItem('getListId'));
      formData.append('mobile', localStorage.getItem('getListMobile'));
      formData.append('is_lead', localStorage.getItem('getListLeadId'));

      this.http.post('https://partner.hansmatrimony.com/api/sendPhotoUploadLink', formData).subscribe(
        (data: any) => {
          if (data) {
            console.log(data);
            if (data.status === 1) {
              this.ngxNotificationService.success('Link Shared Successfully');
            }
          } else {
            this.ngxNotificationService.error('SomeThing Went Wrong');
          }
        }, err => {
          console.log(err);
          this.ngxNotificationService.error('SomeThing Went Wrong');
        }
      );
    }
  }
}

