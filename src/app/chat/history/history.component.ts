import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Event
} from '@angular/router';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import {
  NgxSpinnerService
} from 'ngx-spinner';
import {
  timeout,
  retry,
  catchError
} from 'rxjs/operators';
import {
  Observable
} from 'rxjs';
import {
  NotificationsService
} from '../../notifications.service';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, AfterViewInit {


  profile: any[];
  @Input() type: any;
  @Output() share = new EventEmitter < any > ();
  @Output() stage = new EventEmitter < string > ();
  @Output() setTab = new EventEmitter < any > ();
  likeCount;
  dislikeCount;
  panelOpenState;

  // Height
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];


  constructor(private http: HttpClient, private ngxNotificationService: NgxNotificationService, private spinner: NgxSpinnerService,
    public notification: NotificationsService, ) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    console.log(this.type);
    switch (this.type) {
      case 'contacted':
        this.getHistorydata('contactedProfiles');
        break;
      case 'interestShown':
        this.getHistorydata('sortListProfiles');
        break;
      case 'interestReceived':
        this.getHistorydata('interestReceived');
        break;
      case 'rejected':
        this.getHistorydata('rejectedProfiles');
        break;
      default:
        break;
    }
  }

  shareData(id: any, contacted: any, status) {
    const profileData = new FormData();
    profileData.append('id', id);
    profileData.append('contacted', contacted);
    profileData.append('is_lead', '0');

    console.log('id', id);
    console.log('contacted', contacted);
    console.log('is_lead', localStorage.getItem('is_lead'));
    // tslint:disable-next-line: max-line-length
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/getProfile', profileData).subscribe(
      (data: any) => {
        console.log(data);
        data.profile.comments = status;
        this.share.emit(data);
        this.stage.emit('chatbot');
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getProfilePhoto(num: any, gen: string): String {
    if (num === null) {
      if (gen === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    } else {
      return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + num;
    }
  }
  setName(value: string, type: any): String {
    if (type === 1) {
      if (value != null) {
        if (value.split(' ')) {
          const name = value.split(' ');
          return name[0];
        } else {
          return value;
        }
      } else {
        return '';
      }
    } else {
      return value;
    }
  }

  setAge(birthDate: string) {
    if (birthDate != null) {
      return String(Math.floor((Date.now() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365))) + ' Yrs';
    } else {
      return '';
    }
  }

  setPanelOpenState(index: any) {
    this.panelOpenState = index;
    console.log(this.panelOpenState);
  }

  getHistorydata(link: string) {
    this.spinner.show();
    const historyData = new FormData();
    historyData.append('id', localStorage.getItem('id'));
    if (link.match('contacted')) {
      historyData.append('contacted', '1');
    } else {
      historyData.append('contacted', '0');
    }
    if (localStorage.getItem('is_lead')) {
      historyData.append('is_lead', localStorage.getItem('is_lead'));
    } else {
      this.checkUrl(localStorage.getItem('mobile_number')).subscribe(res => {
          console.log(res);
          historyData.append('is_lead', res.is_lead);
          localStorage.setItem('is_lead', res.is_lead);
        },
        err => {
          console.log(err);
        });
    }
    // tslint:disable-next-line: max-line-length
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/' + link, historyData).pipe(timeout(7000), retry(2), catchError(e => {
      throw new Error('Server Timeout ' + e);
    })).subscribe(
      (data: any) => {
        console.log(data);
        this.profile = data;
        this.spinner.hide();
      },
      (error: any) => {
        this.spinner.hide();
        this.ngxNotificationService.error('Something Went Wrong');
        console.log(error);
      }
    );
  }
  checkUrl(num: string): Observable < any > {
    if (localStorage.getItem('fcm_app')) {
      // tslint:disable-next-line: max-line-length
      return this.http.get < any > (' https://partner.hansmatrimony.com/api/auth', {
        params: {
          ['phone_number']: num,
          ['fcm_id']: this.notification.getCurrentToken(),
          ['fcm_app']: localStorage.getItem('fcm_app')
        }
      });
    } else {
      // tslint:disable-next-line: max-line-length
      return this.http.get < any > (' https://partner.hansmatrimony.com/api/auth', {
        params: {
          ['phone_number']: num,
          ['fcm_id']: this.notification.getCurrentToken()
        }
      });
    }
  }

  setMarriageBrothers(value1: any, value2: any) {
    if (value1 != null && value1 !== '' && value1 !== 0) {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + '| ' + value1 + ' Married';
      } else {
        return String(Number(value1) + Number(value2)) + 'Brothers';
      }
    } else {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + 'Brothers';
      } else {
        return '0 Brothers';
      }
    }
  }

  setMarriageSisters(value1: any, value2: any) {
    if (value1 != null && value1 !== '' && value1 !== 0) {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + '| ' + value1 + ' Married';
      } else {
        return String(Number(value1) + Number(value2)) + 'Sisters';
      }
    } else {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + 'Sisters';
      } else {
        return '0 Sisters';
      }
    }
  }

  LifeStatus(person: string, work: string) {
    if (person != null && person !== '') {
      if (person.match('Alive')) {
        if (work) {
          return 'Alive | ' + work;
        } else {
          return 'Alive';
        }
      } else {
        return 'Dead';
      }
    }
  }

  profileReAnswer(id: any, answer: any, index: any) {
    const reAnswerData = new FormData();
    reAnswerData.append('mobile', localStorage.getItem('mobile_number'));
    reAnswerData.append('id', id);
    reAnswerData.append('answer', answer);
    if (localStorage.getItem('is_lead')) {
      reAnswerData.append('is_lead', localStorage.getItem('is_lead'));
    } else {
      this.checkUrl(localStorage.getItem('mobile_number')).subscribe(res => {
          console.log(res);
          reAnswerData.append('is_lead', res.is_lead);
          localStorage.setItem('is_lead', res.is_lead);
        },
        err => {
          console.log(err);
        });
    }
    // tslint:disable-next-line: max-line-length
    return this.http.post < any > ('https://partner.hansmatrimony.com/api/reply', reAnswerData).subscribe(
      (data: any) => {
        this.Analytics('Profile Reanswered', 'Profile Reanswered From History', answer);
        console.log(answer);
        console.log(localStorage.getItem('mobile_number'));
        console.log(id);
        console.log(data);
        this.updateProfileList(answer, localStorage.getItem('mobile_number'), index);
      }, (error: any) => {
        console.log(error);
      });
  }
  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {
        console.log('Tracking ' + type + ' successful');
      }
    });
  }
  updateProfileList(ans: any, num: any, index: any) {
    switch (this.type) {
      case 'interestShown':
        switch (ans) {
          case 'YES':
            this.panelOpenState = null;
            this.profile.splice(index, 1);
            this.setTab.emit(1);
            break;
          case 'SHORTLIST':
            this.panelOpenState = null;
            this.ngxNotificationService.success('Profile Shortlisted Successfully');
            break;
          case 'NO':
            this.profile.splice(index, 1);
            this.panelOpenState = null;
            this.ngxNotificationService.success('Profile Rejected Successfully');
            break;
          default:
            break;
        }
        break;
      case 'rejected':
        switch (ans) {
          case 'YES':
            this.panelOpenState = null;
            this.profile.splice(index, 1);
            this.setTab.emit(1);
            break;
          case 'SHORTLIST':
            this.panelOpenState = null;
            this.profile.splice(index, 1);
            this.ngxNotificationService.success('Profile Shortlisted Successfully');
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  call(num: any) {
    window.open('tel:' + num);
    this.panelOpenState = null;
  }
  setDate(date: string) {
    let newDate = new Date(date);
    return new Intl.DateTimeFormat('en-AU').format(newDate);
  }
  setHeight(height: any) {
    if (height && height !== '') {
        return this.Heights[this.Heights1.indexOf(height)];
    } else {
      return '';
    }
  }
}
