import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() profile: any;
  @Output() share = new EventEmitter<any>();
  @Output() stage = new EventEmitter<string>();
  likeCount;
  dislikeCount;
  constructor( private http: HttpClient) {
   }

  ngOnInit() {
    console.log('is active');
  }
  shareData(id: any, contacted: any) {
  // tslint:disable-next-line: max-line-length
  return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile?id=' + id + '&contacted=' + contacted , {params: { ['id'] : localStorage.getItem('id'), ['contacted']: contacted}}).subscribe(
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
    yesProfiles() {
      if (localStorage.getItem('language') === 'English') {
        return 'Contacted(' + this.profile.contacted.length + ')';
      } else {
        return 'पसंद किये गए रिश्ते(' + this.profile.contacted.length + ')';
      }
      
    }
    noProfiles() {
      if (localStorage.getItem('language') === 'English') {
        return 'Rejected(' + this.profile.rejected.length + ')';
      } else {
        return 'रिजेक्टेड रिश्ते(' + this.profile.rejected.length + ')';
      }
    }
}
