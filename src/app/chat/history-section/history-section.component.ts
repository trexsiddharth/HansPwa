import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { catchError, debounceTime, map, retry, shareReplay, tap, timeout } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/analytics.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { LanguageService } from 'src/app/language.service';
import { HistoryData, HistoryTable, HistoryType } from 'src/app/Model/HistoryTable';
import { DataFilteringService } from '../data-filtering.service';
@Component({
  selector: 'app-history-section',
  templateUrl: './history-section.component.html',
  styleUrls: ['./history-section.component.css']
})
export class HistorySectionComponent implements OnInit {
  constructor(public itemService: FindOpenHistoryProfileService,
              public languageService: LanguageService,
              private http: HttpClient,
              private analyticsService: AnalyticsService,
              public dataFiltering: DataFilteringService,
              public router: Router,
              private spinner: NgxSpinnerService,
              private ngxNotificationService: NgxNotificationService) { }

  historyDataList$: Observable<HistoryTable>;
  historyContactSubject = new BehaviorSubject<HistoryData[]>([]);
  historyContactList$: Observable<HistoryData[]> = this.historyContactSubject.asObservable().pipe(shareReplay());
  historyRejectSubject = new BehaviorSubject<HistoryData[]>([]);
  historyRejectList$: Observable<HistoryData[]> = this.historyRejectSubject.asObservable().pipe(shareReplay());
  historyShortlistSubject = new BehaviorSubject<HistoryData[]>([]);
  historyShortlistList$: Observable<HistoryData[]> = this.historyShortlistSubject.asObservable().pipe(shareReplay());

  selectedTab = 0;
  tabType = 'interestShown';
  currentTab;
  searchControl = new FormControl();
  searchActivated = new BehaviorSubject<boolean>(false);
  searchActivated$: Observable<boolean> = this.searchActivated.asObservable();
  profiles: HistoryData[] = [];
  authData;

  Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"',
    '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"',
    '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', ];

  ngOnInit() {
   this.historyDataList$ =  this.getHistoryData().pipe(
     shareReplay(),
     tap(item => {
      if (localStorage.getItem('selectedType')) {
        this.selectedTab = Number(localStorage.getItem('selectedType'));
      }
      this.historyShortlistSubject.next(item.history.shortlist);
      this.historyRejectSubject.next(item.history.reject);
      this.historyContactSubject.next(item.history.contact);
     })
   );

   this.searchControl.valueChanges.pipe(debounceTime(400)).subscribe((search: string) => {
      console.log(search);
      // this.profiles = this.dataFiltering.filterPosts((search as string).toLowerCase());
      this.profiles = [];
      this.historyDataList$.subscribe(
        data => {
          console.log(data);
          if (data && data.history.contact) {
            this.profiles = this.profiles.concat(data.history.contact.filter(item => item.name.includes(search.toLowerCase())));
          }
          if (data && data.history.shortlist) {
            this.profiles = this.profiles.concat(data.history.shortlist.filter(
              item => item.name.toLowerCase().includes(search.toLowerCase())));
          }
          if (data && data.history.reject) {
            this.profiles = this.profiles.concat(data.history.reject.filter(item => item.name.includes(search.toLowerCase())));
          }
        }
      );
    });
   this.authData = JSON.parse(localStorage.getItem('authData'));
  }

  getHistoryData(): Observable<HistoryTable> {
    const params = new HttpParams().set('is_lead', localStorage.getItem('is_lead')).set('id', localStorage.getItem('id'));
    return this.http.get<HistoryTable>('https://partner.hansmatrimony.com/api/getHisotry', { params });

    // subscribe((response: any) => {
    //   console.log('response of getHistory  api', response);
    //   let allProfiles: any[] = [];
    //   allProfiles = allProfiles.concat(response.history.contact);
    //   allProfiles = allProfiles.concat(response.history.shortlist);
    //   allProfiles = allProfiles.concat(response.history.reject);
    //   console.log(allProfiles);
    //   this.dataFiltering.setPostList(allProfiles);

    //   if (localStorage.getItem('selectedType')) {
    //     this.selectedTab = Number(localStorage.getItem('selectedType'));
    //   }
    // });

  }
  changeSelectedTab(event: any) {
    console.log(event);
    this.currentTab = event;
    switch (event) {
      case 0:
        this.tabType = 'interestShown';
        // this.changeToHistory();
        break;
      case 1:
        this.tabType = 'contacted';
        break;
      case 2:
        this.tabType = 'rejected';
        break;
      default:
        break;
    }
  }
  setSelectedIndex(tabNumber: number) {
    this.selectedTab = tabNumber;

    switch (tabNumber) {
      case 0:
        this.analyticsService.googleAnalytics('History Shortlist Visited');
        break;

        case 1:
        this.analyticsService.googleAnalytics('History Contact Visited');
        break;

        case 2:
          this.analyticsService.googleAnalytics('History Reject Visited');
          break;
      default:
        break;
    }
  }
  toggleSearch() {
    this.searchControl.patchValue('');
    this.searchActivated.next(!this.searchActivated.value);
    this.analyticsService.googleAnalytics('History Search Visited');
  }
  getColor(type: string) {
    return type === 'REJECT' ? 'rgba(248, 73, 73, 0.849)' : type === 'SHORTLIST' ? 'rgba(22, 182, 22, 0.788)' : 'rgba(35, 131, 221, 0.89)';
  }
  getHeight(num: number) {
    return this.Heights[this.Heights1.indexOf(String(num))];
  }
  getUserProfileData(response: any, index: number) {
    const myprofileData = new FormData();
    myprofileData.append('id', response.id);
    myprofileData.append('is_lead', response.is_lead);
    if (response.type === 'CONTACT') {
      myprofileData.append('contacted', '1');
    }
    // tslint:disable-next-line: max-line-length
    return this.http
      .post<any>(
        'https://partner.hansmatrimony.com/api/getProfile',
        myprofileData
      )
      .pipe(
        timeout(7000),
        retry(2),
        catchError((e) => {
          throw new Error('Server Timeout ' + e);
        })
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          // section from which user is going
          if (response.type === 'SHORTLIST') { data.coming = 'interestShown'; } else if (response.type === 'REJECT') { data.coming = 'rejected'; } else if (response.type === 'CONTACT') { data.coming = 'contacted'; }
          localStorage.setItem('open_profile', JSON.stringify(data));
           // setting the index in local strorage to use in scrollIntoView later

          localStorage.setItem('index', String(index));
          localStorage.setItem('todaysPopupOpened', '0');
          localStorage.setItem('stage', '4');

          this.analyticsService.googleAnalytics(`${response.type} Profile Visited From History Search`);

          // navigate to HISTORY PROFILE DIALOG COMPONENT
          this.router.navigateByUrl('chat/open/open-profile');
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  setPlaceholderImage(index: any, gender: any) {
    const imageView: any = document.querySelectorAll('#searchImage')[index];
    if (gender === 'Male') {
      imageView.setAttribute('src', '../../assets/male_pic.png');
    } else {
      imageView.setAttribute('src', '../../assets/female_pic.png');
    }
  }

  setName(name: string): string {
    if (this.itemService.getCredits() != null && (this.itemService.getCredits().toString() === '0'
    || this.authData.paid_status !== 'Paid')) {
      const a = name.split(' ');
      if (a[0] && a[1]) {
        return a[0][0] + ' ' + a[1];
      } else if (a[0]) {
        return a[0][0];
      }
    } else {
      return name;
    }
  }

  getCredits() {
    const creditsData = new FormData();
    creditsData.append('id', localStorage.getItem('id'));
    creditsData.append('is_lead', localStorage.getItem('is_lead'));
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getWhatsappPoint', creditsData).subscribe(
      (data: any) => {
        const points = data.whatsapp_points;
        this.itemService.setCredits(data.whatsapp_points);
        console.log('credits', points);
        this.spinner.hide();
      },
      (error: any) => {
        this.ngxNotificationService.error('We couldn\'t get your credits, trying again');
        console.log(error);
        this.spinner.hide();
      }
    );
  }

  sendResponse(res: any) {
    console.log(res);
    

    if (res.response !== 'YES') {
      this.updateHistoryList(res.response, res.item);
    } else {
      if (res.item.type === 'CONTACT') {
        this.call(res.item.mobile);
        return;
      }
      if (res.response === 'YES') {
        if (this.itemService.getPersonalized()) {
          if (this.itemService.getCredits() != null
        && Number(this.itemService.getCredits()) > 0) {
          res.item.type = 'CONTACT';
          this.getUserProfileData(res.item, res.index);
        } else {
          this.ngxNotificationService.error('You don\'t have enough credits');
          return;
        }
        } else {
          if (this.itemService.getCredits() != null
          && Number(this.itemService.getCredits()) > 0) {
            res.item.type = 'CONTACT';
            this.getUserProfileData(res.item, res.index);
          } else {
            this.itemService.openTodaysPopupAd();
            return;
          }
        }
      }
    }

    const reAnswerData = new FormData();
    reAnswerData.append('mobile', localStorage.getItem('mobile_number'));
    reAnswerData.append('id', res.item.id);

    reAnswerData.append('answer', res.response);
    reAnswerData.append('is_lead', localStorage.getItem('is_lead'));

      // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/reply', reAnswerData).subscribe(
        (data: any) => {
          console.log(data);
          // update the count of all sections after response on any profile
          if (data && data.count) {
            this.itemService.saveCount(data.count);
          }
          this.analyticsService.googleAnalytics(`Profile Reanswered ${res.response} From History`);
          this.getCredits();
        }, (error: any) => {
          console.log(error);
        });
  }

   updateHistoryList(res: string, item: HistoryData) {
    switch (res) {

        case 'NO':
          const value = this.historyShortlistSubject.getValue();
          const value2 = this.historyRejectSubject.getValue();
          this.historyShortlistSubject.next(value.filter(
            it => it.id !== item.id
          ));
          item.type = 'REJECT';
          value2.unshift(item);
          this.historyRejectSubject.next(value2);
          break;

        case 'SHORTLIST':
          const rejectValue = this.historyRejectSubject.getValue();
          const shortValue = this.historyShortlistSubject.getValue();
          this.historyRejectSubject.next(rejectValue.filter(
            it => it.id !== item.id
          ));
          item.type = 'SHORTLIST';
          shortValue.unshift(item);
          this.historyShortlistSubject.next(shortValue);
          break;

      default:
        break;
          }
        }

        call(mobile: string) {
          window.open('tel:' + `${mobile}`);
        }
      }
