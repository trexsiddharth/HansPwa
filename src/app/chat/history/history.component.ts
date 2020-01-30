import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit,
   AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.type);
  }

  @Input() profile: any;
  @Input() type: any;
  @Output() share = new EventEmitter<any>();
  @Output() stage = new EventEmitter<string>();
  likeCount;
  dislikeCount;
  constructor( private http: HttpClient) {
   }

  ngOnInit() {
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
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', profileData).subscribe(
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
          let name = value.split(' ');
          return name[0] ;
        } else {return value; }
      } else {return ''; }
    } else {
      return value;
    }
     }
    yesProfiles() {
      if (this.profile.contacted) {
      if (localStorage.getItem('language') === 'English') {
        return 'Contacted(' + this.profile.contacted.length + ')';
      } else {
        return 'पसंद(' + this.profile.contacted.length + ')';
      }
    } else {
      if (localStorage.getItem('language') === 'English') {
        return 'Contacted(' + 0 + ')';
      } else {
        return 'पसंद(' + 0 + ')';
      }
    }
    }
    noProfiles() {
      if (this.profile.rejected) {
      if (localStorage.getItem('language') === 'English') {
        return 'Rejected(' + this.profile.rejected.length + ')';
      } else {
        return 'रिजेक्टेड(' + this.profile.rejected.length + ')';
      }
    } else {
      if (localStorage.getItem('language') === 'English') {
        return 'Rejected(' + 0 + ')';
      } else {
        return 'रिजेक्टेड(' + 0 + ')';
      }
    }
    }
    shortProfiles() {
      if(this.profile.shortlisted){
      if (localStorage.getItem('language') === 'English') {
        return 'Shortlisted(' + this.profile.shortlisted.length + ')';
      } else {
        return 'शॉर्टलिस्ट(' + this.profile.shortlisted.length + ')';
      }
    } else {
      if (localStorage.getItem('language') === 'English') {
        return 'Shortlisted(' + 0 + ')';
      } else {
        return 'शॉर्टलिस्ट(' + 0 + ')';
      }
    }
    }
}
