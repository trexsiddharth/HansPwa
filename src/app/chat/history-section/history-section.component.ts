import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { catchError, debounceTime, retry, timeout } from 'rxjs/operators';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { LanguageService } from 'src/app/language.service';
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
              public dataFiltering: DataFilteringService,
              public router: Router) { }
  selectedTab = 0;
  tabType = 'interestShown';
  currentTab;
  searchControl = new FormControl();
  searchActivated = new BehaviorSubject<boolean>(false);
  searchActivated$: Observable<boolean> = this.searchActivated.asObservable();
  profiles: any;

  Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"',
    '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"',
    '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', ];

  ngOnInit() {
    this.getHistoryData();
    this.searchControl.valueChanges.pipe(debounceTime(400)).subscribe(search => {
      console.log(search);
      this.profiles = this.dataFiltering.filterPosts((search as string).toLowerCase());
    });
  }

  getHistoryData() {
    const params = new HttpParams().set('is_lead', localStorage.getItem('is_lead')).set('id', localStorage.getItem('id'));
    this.http.get('https://partner.hansmatrimony.com/api/getHisotry', { params }).subscribe((response: any) => {
      console.log('response of getHistory  api', response);
      let allProfiles: any[] = [];
      allProfiles = allProfiles.concat(response.history.contact);
      allProfiles = allProfiles.concat(response.history.shortlist);
      allProfiles = allProfiles.concat(response.history.reject);
      console.log(allProfiles);
      this.dataFiltering.setPostList(allProfiles);
    });
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
  }
  toggleSearch() {
    this.searchControl.patchValue('');
    this.searchActivated.next(!this.searchActivated.value);
  }
  getColor(type: string) {
    return type === 'REJECT' ? 'rgba(248, 73, 73, 0.849)' : type === 'SHORTLIST' ? 'rgba(22, 182, 22, 0.788)' : 'rgba(35, 131, 221, 0.89)';
  }
  getHeight(num: number) {
    return this.Heights[this.Heights1.indexOf(String(num))];
  }
  getUserProfileData(is_lead: string, id: string, type: string, index: any) {
    const myprofileData = new FormData();
    myprofileData.append('id', id);
    myprofileData.append('is_lead', is_lead);
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
          if (type === 'SHORTLIST') { data.coming = 'interestShown'; }
          else if (type === 'REJECT') { data.coming = 'rejected'; }
          else if (type === 'CONTACT') { data.coming = 'contacted'; }
          localStorage.setItem('open_profile', JSON.stringify(data));
           // setting the index in local strorage to use in scrollIntoView later

          localStorage.setItem('index', String(index));
          localStorage.setItem('todaysPopupOpened', '0');
          localStorage.setItem('stage', '4');

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
}
