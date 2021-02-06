import { Component, Input, ViewChildren,
  QueryList, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FindOpenHistoryProfileService } from '../../find-open-history-profile.service';
import { LanguageService } from 'src/app/language.service';
import { ChatServiceService } from 'src/app/chat-service.service';
import { Router } from '@angular/router';
import { ProfileTable } from 'src/app/Model/Profile';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ApiwhaAutoreply } from 'src/app/chat/today-profiles/profile-today-model';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('profile') card: ApiwhaAutoreply;

  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;
  popupdata: any = {};
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
  actionCount = -2;

  isAudioPlayingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isAudioPlaying$ = this.isAudioPlayingSubject.asObservable().pipe(shareReplay());

  carouselSize;
  constructor(
              public itemService: FindOpenHistoryProfileService,
              public languageService: LanguageService,
              public chatService: ChatServiceService,
              private router: Router) {
  }
  userId;
  userIsLead;
  isMobile = false;
  audio: HTMLAudioElement;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
      this.isAudioPlaying$.subscribe(
        (status: boolean) => {
          console.log("btn subject", status);
          const imgBtn = document.querySelector<HTMLImageElement>('#audioImg');
          if (status) {
            imgBtn.src = '.../../../assets/new icons/pause_button.png';
            this.audio.addEventListener('ended', () => {
              this.audio.currentTime = 0;
              this.isAudioPlayingSubject.next(false);
         });
        // tslint:disable-next-line: max-line-length
            } else {
              imgBtn.src = '.../../../assets/new icons/play_button.png';
            }
        }
      );
  }

  ngOnDestroy(): void {
  }
  scrollDown() {
    console.log('scroll down');
    document.querySelectorAll('#mainTinderUI')[0].scrollBy({
      top: 350,
      behavior: 'smooth'
    });
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
  setIncome(value: string): string {
    if (value != null) {
      if (Number(value) > 1000) {
        return String((Number(value) / 100000));
      } else {
        return value;
      }

    } else {
      return '';
    }
  }
  familyType(item) {
    if (item.family_type && item.family_type.toLowerCase().indexOf('nuclear') !== -1) {
      return 'Nuclear Family';
    } else {
      return 'Joint Family';
    }
  }
  toTitleCase(str) {
    if (str) {
      return str.replace(
        /\w\S*/g,
        (txt) => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    } else {
      return '';
    }
  }
  getProfilePhoto(photo: any, carous: any, gen: string, index: string): string {
    if (carous === null || carous === 'null' || carous === '') {
      if (photo === null) {
        if (gen === 'Male') {
          return '../../../assets/profile.png';
        } else {
          return '../../../assets/female_pic.png';
        }
      } else {
        return photo;
      }
    } else {
      const carousel: object = JSON.parse(carous);
      const keys = Object.keys(carousel);
      // console.log(`https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/${carousel[index]}`);
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
    }
  }
  onErrorProfilePhoto(gender, index) {
    // this.spinner.hide();
    // stop user response animation
    // this.profileIsLoadingSubject.next(null);
    const imageSrc = document.querySelectorAll('#profilePic')[index];
    if (gender === 'Male') {
      imageSrc.setAttribute('src', '../../assets/male_pic.png');
    } else {
      imageSrc.setAttribute('src', '../../assets/female_pic.png');
    }
  }
  getImagesCount() {
    if (this.card && this.card.carousel !== '[]' && this.card.carousel && this.card.carousel !== 'null') {
      const carouselObject: object = JSON.parse(this.card.carousel);
      if (carouselObject) {
        const size = Object.keys(carouselObject).length;
        const arr: any[] = [];
        for (let index = 0; index < size; index++) {
          arr.push(index);
        }
        return arr;
      }
    } else {
      this.carouselSize = [1];
      return this.carouselSize;
    }
  }
  // on first image load complete
  onLoadingImage(index) {
    const imageElement: any = document.querySelector('#profilePic');
    if (imageElement && index === 0) {
      console.log('Image is loading');
      if (imageElement.complete) {
        console.log('Image Loaded Completely');
        // stop user response animation
        // this.profileIsLoadingSubject.next(null);
      }
    }
  }
  openImageModal(carous: string, src: string, name: string, index: any) {
    if (carous && carous.length > 4) {
      const carousel: object = JSON.parse(carous);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      this.setModal('https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]]);
    } else if (src && src !== '') {
      this.setModal(src);
    }
  }
  setModal(image) {
    const modal = document.getElementById('myModal');
    const modalImg: HTMLElement = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    modal.style.zIndex = '9999999999';
    modalImg.setAttribute('src', image);
    // captionText.innerHTML = name;
    // Get the <span> element that closes the modal
    const span = document.getElementById('closeModal');
    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
      modal.style.display = 'none';
    };
  }
  setDate(date: string) {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-AU').format(newDate);
  }
  setManglik(value: string) {
    if (value === 'No') {
      return 'Non Manglik';
    } else {
      return value;
    }
  }
  setMarriageBrothers(value1: any, value2: any) {
    if (value1 != null && value1 !== '' && value1 !== 0) {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + '| ' + value1 + ' Married';
      } else {
        return String(Number(value1) + Number(value2)) + ' Brothers';
      }
    } else {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + ' Brothers';
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
        return String(Number(value1) + Number(value2)) + ' Sisters';
      }
    } else {
      if (value2 != null && value2 !== '' && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + ' Sisters';
      } else {
        return '0 Sisters';
      }
    }
  }
  LifeStatus(person: string, work: string, type: string) {
    if (person != null && person !== '') {
      if (person.match('Alive')) {
        if (work) {
          return `${type} is Alive | ` + work;
        } else {
          return `${type} is Alive`;
        }
      } else {
        return `${type} is Dead`;
      }
    }
  }
  houseStatus(item) {
    if (item.house_type && item.house_type.toLowerCase().indexOf('own') !== -1) {
      return 'Own House';
    } else {
      return 'Rented House';
    }
  }
  setVerifiedAt(a) {
    if (a.includes('Hans Matrimony')) {
      return 'Hans Matrimony Office';
    } else {
      return a;
    }
  }
  // setting dynamic about me if users about me is null or na
  setAbout(item) {
    if (item) {
      const aboutObject = {
        dob: item.birth_date ? `I am ${this.setAge(item.birth_date)} old ` : '',
        caste: item.caste ?
          item.caste !== 'All' ? item.caste : '' : '',
        manglik: item.manglik ? item.manglik : '',
        gender: item.gender ? item.gender === 'Male' ? 'man' : 'woman' : '',
        locality: item.locality ? item.locality === 'Visible after Contact' ?
          '' : ` residing in ${item.locality}` : '',
        qualification: item.education ?
          `. I've completed my ${item.education}` : item.degree ?
            `. I've completed my ${item.degree}` : '',
        occupation: item.occupation ?
          item.occupation === 'Business/Self-Employed' ?
            ' and Self-Employed' : item.occupation === 'Not Working' ? 'currently not working'
              : item.occupation === 'Doctor' ||
                item.occupation === 'Teacher'
                ? ` currently working as ${item.occupation}` :
                ` currently working in ${item.occupation}` : '',
        working: item.working_city ? item.working_city !== 'Not Working'
          ? item.working_city !== 'na' ? `in ${item.working_city}` : '' : '' : '',
        designation: item.profession ?
          item.occupation !== 'Not Working' ?
            item.profession !== 'n/a' ? item.profession !== 'na' ?
              ` as ${item.profession}` : '' : '' : '' : '',
      };
      // tslint:disable-next-line: max-line-length
      return `${aboutObject.dob} ${aboutObject.caste} ${aboutObject.manglik} ${aboutObject.gender} ${aboutObject.locality} ${aboutObject.qualification} ${aboutObject.occupation} ${aboutObject.designation} ${aboutObject.working}.`;
    }
  }


  setName(name: string): string {
      const a = name.split(' ');
      if (a[0] && a[1]) {
        return a[0][0] + ' ' + a[1];
      } else if (a[0]) {
        return a[0][0];
      }
  }

  playAudio() {
    if (this.card && (this.card.audio_profile || this.card.unapprove_audio_profile)) {
      if (!this.isAudioPlayingSubject.getValue()) {
        this.audio = new Audio();
        // tslint:disable-next-line: max-line-length
        this.audio.src = `https://s3.ap-south-1.amazonaws.com/hansmatrimony/audioProfile/${this.card.audio_profile ? this.card.audio_profile : this.card.unapprove_audio_profile}`;
        this.audio.load();
        this.audio.play();
        this.isAudioPlayingSubject.next(true);
      } else {
        this.audio.pause();
        this.isAudioPlayingSubject.next(false);
      }
    }
  }

  checkIfNullOrNa(value: any): boolean {
    if (!value) {
      return false;
    } else if (value === 'NA' || value === 'na' || value === 'NaN' ||
     value === 'Nan' || value === 'nan' || value === 'N.A') {
      return false;
    } else {
      return true;
    }
  }
}
