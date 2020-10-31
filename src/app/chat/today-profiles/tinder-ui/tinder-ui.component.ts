import { Component, Input, ViewChildren, QueryList, ElementRef, Renderer2, Output, EventEmitter, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ApiwhaAutoreply } from './../profile-today-model';
import { FindOpenHistoryProfileService } from '../../../find-open-history-profile.service';
import { LanguageService } from 'src/app/language.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ChatServiceService } from 'src/app/chat-service.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tinder-ui',
  templateUrl: './tinder-ui.component.html',
  styleUrls: ['./tinder-ui.component.css']
})

export class TinderUiComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input('cards') cards: Array<ApiwhaAutoreply>;
  @Input('name') profileName: string;
  @Output() choiceMade = new EventEmitter();

  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;
  moveOutWidth: number; // value in pixels that a card needs to travel to dissapear from screen
  shiftRequired: boolean; // state variable that indicates we need to remove the top card of the stack
  transitionInProgress: boolean; // state variable that indicates currently there is transition on-going
  heartVisible: boolean;
  crossVisible: boolean;
  popupdata: any = {};
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
  actionCount = -2;

  shortList =
    [{ 'value': 1, 'bool': false }, { 'value': 2, 'bool': false },];
  rejectList =
    [{ 'value': 0, 'bool': false }, { 'value': 1, 'bool': false },];

  carouselSize;
  constructor(private renderer: Renderer2,
              public itemService: FindOpenHistoryProfileService,
              public languageService: LanguageService,
              public chatService: ChatServiceService,
              private deviceService: DeviceDetectorService,
              private router: Router) {
  }
  userId;
  userIsLead;
  whatToShow = ['profile', 'profile'];
  isMobile = false;
  ngOnInit(): void {
    this.chatService.authorized.subscribe(
      data => {
        if (data) {
          this.userId = data.id;
          this.userIsLead = data.isLead;
          console.log(this.userId, this.userIsLead);
        }
      }
    );
    this.isMobile = this.deviceService.isMobile();

    this.itemService.shownConfetti.subscribe(
      (response: boolean) => {
        console.log('shown confetti request', response);
        if (response) {
            console.log('shown confetti');
            setTimeout(() => {
                document.getElementById('contactedSection').scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
            }, 1000);
          }
      }
    );
  }
  showTinderAnimation() {
    if (!localStorage.getItem('shownTinderAniamtion')) {
      localStorage.setItem('shownTinderAniamtion', '1');
      this.tinderCardsArray[0].nativeElement.style.transform = 'translate(200px, -15px) rotate(20deg)';
      // this.tinderCardsArray[0].nativeElement.classList.add('rotateAnimation');
      //this.heartVisible = true;
      setTimeout(() => {
        this.tinderCardsArray[0].nativeElement.style.transform = 'translate(0px,0px) rotate(0deg)';
        // this.tinderCardsArray[0].nativeElement.classList.remove('rotateAnimation');
        this.heartVisible = false;
        setTimeout(() => { this.showOppAnima() }, 1000);
      }, 1500);
    }
  }
  showOppAnima() {
    this.tinderCardsArray[0].nativeElement.style.transform = 'translate(-200px,15px) rotate(-20deg)';
    // this.tinderCardsArray[0].nativeElement.classList.add('oppositeRotate');
    //this.crossVisible = true;
    setTimeout(() => {
      this.tinderCardsArray[0].nativeElement.style.transform = 'translate(0px, 0px) rotate(0deg)';
      // this.tinderCardsArray[0].nativeElement.classList.remove('oppositeRotate');
      this.crossVisible = false;
    }, 1500);
  }
  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 0.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
    });
    if (this.chatService.shortList.length > 0) {
      this.shortList = this.chatService.shortList;
      console.log('sortList values found in chat service');
    }
    else {
      this.chatService.shortList = this.shortList;
      console.log('setting shortList values in chat service');
    }
    if (this.chatService.rejectList.length > 0) {
      this.rejectList = this.chatService.rejectList;
      console.log('rejectList values found in chat service');
    }
    else {
      this.chatService.rejectList = this.rejectList;
      console.log('setting rejectList values in chat service');
    }
    if (this.chatService.actionCount !== -2) {
      this.actionCount = this.chatService.actionCount;
      console.log('found action count value in chat service');
    }
    else {
      this.chatService.actionCount = this.actionCount;
      console.log('setting action count value in chat service');
    }
    setTimeout(() => {
      this.showTinderAnimation();
    }, 3000)
  };
  ngOnDestroy(): void {
    this.chatService.shortList = this.shortList;
    console.log('setting shortList values in chat service');
    this.chatService.rejectList = this.rejectList;
    console.log('setting rejectList values in chat service');
    this.chatService.actionCount = this.actionCount;
    console.log('setting action count value in chat service');
  }
  scrollDown() {
    console.log('scroll down');
    document.querySelectorAll('#mainTinderUI')[0].scrollBy({
      top: 350,
      behavior: 'smooth'
    });
  }
  showShortListPopup(i: number) {
    console.log(i);
    if (i == 0) {
      this.openPersistentDialog('Complete Your Profile', 'Complete your profile and get liked by ' + this.setName(this.profileName) + '!', 'Complete Profile');
      return;
    }
    // if (i == 1 && this.isMobile) {
    //   this.openPersistentDialog('Liked ' + this.setName(this.profileName) + '?', 'Get notified easily if ' + this.setName(this.profileName) + ' likes you back!', 'Install App Now');
    //   return;
    // }
    // else if (i == 2) {
    //   this.openPersistentDialog('Prime Membership', 'Become a paid member to contact ' + this.setName(this.profileName) + '.', 'Get Membership');
    //   return;
    // }
  }
  rejectListPopup(i: number) {
    if (i == 0) {
      this.openPersistentDialog('Complete Your Profile', 'Complete your profile and get better matches.', 'Complete Profile');
      // this.openPersistentDialog('Didn\'t Like ' + this.profileName + '?', 'Become a paid member and get better matches', 'Choose Plan');
    }
    // if (i == 1) {
    //   this.openPersistentDialog('Didn\'t Like ' + this.setName(this.profileName) + '?', 'Become a paid member and get better matches', 'Choose Plan');
    // }
  }
  persistentDialogOpeningLogic(reply: string) {
    if (this.actionCount === -2 && this.router.url.match('first')) {
      setTimeout(() => {
        this.chatService.opensidenavTrue();
      }, 1500)
    }
    if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
      reply.toLowerCase() === 'yes') {
      this.itemService.openTodaysPopupAd();
    } else if (reply === 'NO' || reply.toLowerCase() === 'shortlist') {
      this.actionCount++;
      console.log('action count', this.actionCount)
      if ((this.itemService.getCredits() != null && this.itemService.getCredits().toString() !== '0') && (this.actionCount % 4 !== 0)) {
        console.log('get data called');
        //this.getData(reply);
        this.emitChoice(reply);
        console.log('returning for paid users for paid users');
        return;
      }
      if (this.actionCount % 2 === 0) {
        if (reply.toLowerCase() === 'shortlist') {
          if (localStorage.getItem('profileCompPercent') && Number(localStorage.getItem('profileCompPercent')) < 90) {
            this.showShortListPopup(0);
            // for (let x of this.shortList) {
            //   if (x.value === 0) {
            //     x.bool = true;
            //     break;
            //   }
            // }
          }
          else {
            if ((!localStorage.getItem('appInstalled') || (localStorage.getItem('appInstalled') &&
              localStorage.getItem('appInstalled') !== '1'))) {
              for (let x of this.shortList) {
                if (x.value === 1) {
                  x.bool = true;
                  break;
                }
              }
            }
            if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0') {
              for (let x of this.shortList) {
                if (x.value === 2) {
                  x.bool = true;
                  break;
                }
              }
            }
          }
          console.log('Here is the short list array', this.shortList);
          let v;
          for (v of this.shortList) {
            if (v.bool) {
              this.showShortListPopup(v.value);
              break;
            }
          }
          this.shortList.splice(this.shortList.indexOf(v), 1);
          this.shortList.push(v);
          console.log('here is the modified shortlist array', this.shortList);
        }
        else if (reply === 'NO') {
          if (localStorage.getItem('profileCompPercent') && Number(localStorage.getItem('profileCompPercent')) < 90) {
            this.rejectListPopup(0);
          }
          else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0') {
            this.rejectListPopup(1);
          }
        }
      }
      //this.getData(reply);
      this.emitChoice(reply);
    } else {
      //this.getData(reply);
      this.emitChoice(reply);
    }
  }
  openPersistentDialog(message: string, submessage: string, button: string) {
    this.popupdata = {
      message: message,
      submessage: submessage,
      button: button,
      userId: this.userId,
      userIsLead: this.userIsLead,
    }
    setTimeout(() => {
      this.whatToShow = ['popup', 'profile'];
    }, 300);
  }
  popupAction(event) {
    if (event.close) {
      this.whatToShow = ['profile', 'profile'];
    }
  }
  userClickedButton(reply) {
    if (!this.cards.length) return false;
    if (reply.toLowerCase() === 'shortlist') {
      this.tinderCardsArray[0].nativeElement.style.transform = 'translate(' + this.moveOutWidth + 'px, -100px) rotate(40deg)';
      this.toggleChoiceIndicator(false, true);
      this.shiftRequired = true;
      this.transitionInProgress = true;
    } else if (reply.toLowerCase() === 'no') {
      this.tinderCardsArray[0].nativeElement.style.transform = 'translate(-' + this.moveOutWidth + 'px, -100px) rotate(-40deg)';
      this.toggleChoiceIndicator(true, false);
      this.shiftRequired = true;
      this.transitionInProgress = true;
    }
    else {
      if (!(this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0')) {
        this.tinderCardsArray[0].nativeElement.style.transform = 'translate(0px,-5000px) rotate(0deg)';
        this.shiftRequired = true;
        this.transitionInProgress = true;
      }
    };
    //this.emitChoice(reply);
    this.persistentDialogOpeningLogic(reply);
  }
  emitChoice(reply) {
    console.log('reply recieved is', reply);
    this.choiceMade.emit({
      reply: reply,
    });
  }
  toggleChoiceIndicator(cross, heart) {
    this.crossVisible = cross;
    this.heartVisible = heart;
    setTimeout(() => {
      this.crossVisible = false;
      this.heartVisible = false;
    }, 600);
  };
  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false);
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.cards.shift();
    };
  };
  handlePan(event) {
    if (event.deltaX === 0 || (event.center.x === 0 && event.center.y === 0) || !this.cards.length) return;
    if (this.transitionInProgress) {
      this.handleShift();
    }
    this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');

    if (event.deltaX > 0) { this.toggleChoiceIndicator(false, true) }
    if (event.deltaX < 0) { this.toggleChoiceIndicator(true, false) }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;
    this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)');
    this.shiftRequired = true;
  };
  handlePanEnd(event) {
    this.toggleChoiceIndicator(false, false);
    if (!this.cards.length) return;
    this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');
    let keep = Math.abs(event.deltaX) < 100 || Math.abs(event.velocityX) < 1.0;
    if (keep) {
      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', '');
      this.shiftRequired = false;
    } else {
      let endX = Math.max(Math.abs(event.velocityX) * this.moveOutWidth, this.moveOutWidth);
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(this.tinderCardsArray[0].nativeElement, 'transform', 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)');

      this.shiftRequired = true;
      if (event.deltaX > 0) {
        this.emitChoice('SHORTLIST');
      }
      else if (event.deltaX < 0) {
        this.emitChoice('NO');
      }
    }
    this.transitionInProgress = true;
  };
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
        setTimeout(() => {
          // stop user response animation
          //this.profileIsLoadingSubject.next(null);
        }, 2000);
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
      // console.log(carousel[index]);
      return 'https://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[keys[index]];
    }
  }
  onErrorProfilePhoto(gender, index) {
    //this.spinner.hide();
    // stop user response animation
    //this.profileIsLoadingSubject.next(null);
    const imageSrc = document.querySelectorAll('#profilePic')[index];
    if (gender === 'Male') {
      imageSrc.setAttribute('src', '../../assets/male_pic.png');
    } else {
      imageSrc.setAttribute('src', '../../assets/female_pic.png');
    }
  }
  getImagesCount(item) {
    if (item && item.carousel !== '[]' && item.carousel && item.carousel !== 'null') {
      const carouselObject: object = JSON.parse(item.carousel);
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
        //this.profileIsLoadingSubject.next(null);
      }
    }
  }
  openImageModal(carous: string, src: string, name: string, index: any) {
    this.analyticsEvent('User zoomed in the todays special profile image');
    if (carous && carous !== '') {
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
    captionText.innerHTML = name;
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
    }
    else {
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
        gender: item.gender ? item.gender === 'Male' ? 'boy' : 'girl' : '',
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
  analyticsEvent(event) {
    (window as any).ga('send', 'event', event, '', {
      hitCallback: () => {

        console.log('Tracking ' + event + ' successful');

      }
    });
    // gtag app + web
    (window as any).gtag('event', event, {
      event_callback: () => {
        console.log('Tracking gtag ' + event + ' successful');
      }
    });
  }
  setName(name: string): string {
    if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0') {
      let a = name.split(' ');
      if (a[0] && a[1]) {
        return a[0][0] + ' ' + a[1];
      } else if (a[0]) {
        return a[0][0];
      }
    } else {
      return name;
    }
  }
}