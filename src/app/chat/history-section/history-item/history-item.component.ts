import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { timeout, retry, catchError } from 'rxjs/operators';
import { AnalyticsService } from 'src/app/analytics.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { HistoryData } from 'src/app/Model/HistoryTable';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {
  @Input() listItem: HistoryData;
  @Input() itemIndex: number;
  @Input() authData: any;
  @Output() actionTaken = new EventEmitter();
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4\'0"', '4\'1"', '4\'2"', '4\'3"', '4\'4"', '4\'5"', '4\'6"', '4\'7"', '4\'8"', '4\'9"', '4\'10"', '4\'11"', '5\'0"',
    // tslint:disable-next-line: max-line-length
    '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'0"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"',
    '6\'6"', '6\'7"', '6\'8"', '6\'9"', '6\'10"', '6\'11"', '7\'0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', ];
  constructor(public itemService: FindOpenHistoryProfileService,
              private http: HttpClient,
              private analyticsService: AnalyticsService,
              private router: Router
              ) { }

  ngOnInit() {
  }

  getColor(type: string) {
    return type === 'REJECT' ? 'rgba(248, 73, 73, 0.849)' : type === 'SHORTLIST' ? 'rgba(22, 182, 22, 0.788)' : 'rgba(35, 131, 221, 0.89)';
  }

  setName(name: string): string {
    if (this.itemService.getCredits() != null && (this.itemService.getCredits().toString() === '0'
    || this.authData.paid_status !== 'Paid') && !this.itemService.getPersonalized()) {
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

  getHeight(num: string) {
    return this.Heights[this.Heights1.indexOf(num)];
  }
  setPlaceholderImage() {
    const gender = localStorage.getItem('gender');
    const imageView: any = document.querySelector('#searchImage');
    if (gender === 'Male') {
      imageView.setAttribute('src', '../../assets/male_pic.png');
    } else {
      imageView.setAttribute('src', '../../assets/female_pic.png');
    }
  }

  getUserProfileData() {
    const myprofileData = new FormData();
    myprofileData.append('id', String(this.listItem.id));
    myprofileData.append('is_lead', String(this.listItem.is_lead));
    if (this.listItem.type === 'CONTACT') {
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
          if (this.listItem.type === 'SHORTLIST')
          {
            data.coming = 'interestShown';
           } else if (this.listItem.type === 'REJECT')
          {
            data.coming = 'rejected';
           } else if (this.listItem.type === 'CONTACT')
            {
              data.coming = 'contacted';
             }
          localStorage.setItem('open_profile', JSON.stringify(data));
           // setting the index in local strorage to use in scrollIntoView later

          localStorage.setItem('index', String(this.itemIndex));
          localStorage.setItem('todaysPopupOpened', '0');
          localStorage.setItem('stage', '4');

          this.analyticsService.googleAnalytics(`${this.listItem.type} Profile Visited From History Search`);

          // navigate to HISTORY PROFILE DIALOG COMPONENT
          this.router.navigateByUrl('chat/open/open-profile');
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  sendAction(answer: string) {
    let obj = {
      item: this.listItem,
      index: this.itemIndex,
      response: answer
    }
    this.actionTaken.emit(obj);
  }

}
