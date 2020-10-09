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
  selectedTab = 1;
  tabType = "interestShown";
  currentTab;
  searchControl = new FormControl();
  searchActivated = new BehaviorSubject<boolean>(false);
  searchActivated$: Observable<boolean> = this.searchActivated.asObservable();
  constructor(public itemService: FindOpenHistoryProfileService,
    public languageService: LanguageService,
    private http: HttpClient,
    public dataFiltering: DataFilteringService,
    public router: Router) { }

  ngOnInit() {
    this.getHistoryData();
    this.searchControl.valueChanges.pipe(debounceTime(400)).subscribe(search => {
      this.profiles = this.dataFiltering.filterPosts(this.searchControl.value);
    });
  }
  profiles: any;
  getHistoryData() {
    let params = new HttpParams().set('is_lead', localStorage.getItem('is_lead')).set("id", localStorage.getItem('id'))
    this.http.get('https://partner.hansmatrimony.com/api/getHisotry', { params: params }).subscribe((response: any) => {
      console.log('response of getHistory  api', response);
      let allProfiles = response.contact[0];
      allProfiles = allProfiles.concat(response.shortlist[0]);
      allProfiles = allProfiles.concat(response.reject[0]);
      console.log(allProfiles);
      this.dataFiltering.setPostList(allProfiles);
    });
  }
  changeSelectedTab(event: any) {
    console.log(event);
    this.currentTab = event;
    switch (event) {
      case 0:
        this.tabType = 'contacted';
        break;
      case 1:
        this.tabType = 'interestShown';
        // this.changeToHistory();
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
  getUserProfileData(is_lead: string, id: string, type: string) {
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
          if (type === 'SHORTLIST') data.coming = 'interestShown';
          else if (type === 'REJECT') data.coming = 'rejected';
          else if (type === 'CONTACT') data.coming = 'contacted';
          localStorage.setItem('open_profile', JSON.stringify(data));
          // navigate to HISTORY PROFILE DIALOG COMPONENT
          this.router.navigateByUrl('chat/open/open-profile');
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
