import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { LanguageService } from 'src/app/language.service';

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
    public languageService: LanguageService) { }

  ngOnInit() {
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
      // case 3:
      //   this.tabType = 'interestShown';
      //   // this.changeToHistory();
      //   break;
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
}
