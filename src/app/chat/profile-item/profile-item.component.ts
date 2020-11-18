import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { ProfileData, ProfileTable } from 'src/app/Model/Profile';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {

  @Input() listItem: ProfileTable;
  @Input() itemName: string;
  @Input() authData;
  @Input() itemIndex;
  @Output() actionTaken = new EventEmitter();

   // tslint:disable-next-line: max-line-length
   Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
   // tslint:disable-next-line: max-line-length
   Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openProfileDialog(item: any, ind: any) {
    item.coming = 'discover';
    localStorage.setItem('stage', '1');
    localStorage.setItem('open_profile', JSON.stringify(item));
    // navigate to HISTORY PROFILE DIALOG COMPONENT
    this.router.navigateByUrl('chat/open/open-profile');
  }

  getProfilePhoto(item: any, num: any, gen: string): string {
    if (item.family) {
      if (num === null) {
        if (gen === 'Male') {
          return '../../assets/male_pic.png';
        } else {
          return '../../assets/female_pic.png';
        }
      } else {
        return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + num;
      }
    } else {
      const carousel: object = JSON.parse(item.profile.carousel);
      const keys = Object.keys(carousel);
      return carousel[keys[0]];
    }
  }

  onLoadProfileError(gender: string, id: any) {
    if (gender === 'Male') {
      id.setAttribute('src', '../../assets/male_pic.png');
    } else {
      id.setAttribute('src', '../../assets/female_pic.png');
    }
  }

  setAge(birthDate: string) {
    if (birthDate != null) {
      return String(Math.floor((Date.now() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365))) + ' Yrs';
    } else {
      return '';
    }
  }

  setHeight(height: any) {
    if (height && height !== '') {
      return this.Heights[this.Heights1.indexOf(height)];
    } else {
      return '';
    }
  }

  setIncome(value: any): string {
    if (value != null) {
      if (Number(value) > 1000) {
        return String((Number(value) / 100000));
      } else {
        return String(value);
      }

    } else {
      return '';
    }
  }

  sendAction() {
    const obj = {
      item: this.listItem,
      index: this.itemIndex
    };
    this.actionTaken.emit(obj);
  }

}
