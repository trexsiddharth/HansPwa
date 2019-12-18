import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() profile: any;
  @Output() share = new EventEmitter<any>();
  @Output() stage = new EventEmitter<string>();
  likeCount;
  dislikeCount;
  constructor( private http: HttpClient) {
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
  }
  ngAfterViewChecked(): void {
    if (this.profile) {
      console.log('profile loaded');
      if (document.querySelector<HTMLElement>('.mat-tab-label-active')) {
        document.querySelector<HTMLElement>('.mat-tab-label-active' && '#mat-tab-label-0-0').style.background = 'green';
        document.querySelector<HTMLElement>('.mat-tab-label' && '#mat-tab-label-0-1').style.background = '#FFD700';
        document.querySelector<HTMLElement>('.mat-tab-label' && '#mat-tab-label-0-2').style.background = 'red';
      }
    }
  }

  shareData(id: any, contacted: any) {
    const profileData = new FormData();
    profileData.append('id', id);
    profileData.append('contacted', contacted);
    profileData.append('is_lead', localStorage.getItem('is_lead'));
  // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', profileData).subscribe(
       (data: any) => {
        console.log(data);
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
          let name = value.split(' ');
          return name[0] ;
        } else {return value; }
      } else {return ''; }
    } else {
      return value;
    }
     }
    yesProfiles() {
      if (localStorage.getItem('language') === 'English') {
        return 'Contacted(' + this.profile.contacted.length + ')';
      } else {
        return 'पसंद(' + this.profile.contacted.length + ')';
      }
    }
    noProfiles() {
      if (localStorage.getItem('language') === 'English') {
        return 'Rejected(' + this.profile.rejected.length + ')';
      } else {
        return 'रिजेक्टेड(' + this.profile.rejected.length + ')';
      }
    }
    shortProfiles() {
      if (localStorage.getItem('language') === 'English') {
        return 'Shortlisted(' + this.profile.shortlisted.length + ')';
      } else {
        return 'शॉर्टलिस्ट(' + this.profile.shortlisted.length + ')';
      }
    }
}
