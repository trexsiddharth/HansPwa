import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationsService } from 'src/app/notifications.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { LanguageService } from 'src/app/language.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { timeout, retry, catchError } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { PersonalizedMessageDialogComponent } from '../personalized-message-dialog/personalized-message-dialog.component';
import { start } from 'repl';

@Component({
  selector: 'app-history-profiles-dialog',
  templateUrl: './history-profiles-dialog.component.html',
  styleUrls: ['./history-profiles-dialog.component.css']
})
export class HistoryProfilesDialogComponent implements OnInit {
  confirmCall: boolean = false;
  carouselSize;
  // Height
  // tslint:disable-next-line: max-line-length
  Heights: string[] = ['4.0"', '4.1"', '4.2"', '4.3"', '4.4"', '4.5"', '4.6"', '4.7"', '4.8"', '4.9"', '4.10"', '4.11"', '5.0', '5.1"', '5.2"', '5.3"', '5.4"', '5.5"', '5.6"', '5.7"', '5.8"', '5.9"', '5.10"', '5.11"', '6.0"', '6.1"', '6.2"', '6.3"', '6.4"', '6.5"', '6.6"', '6.7"', '6.8"', '6.9"', '6.10"', '6.11"', '7.0"'];
  // tslint:disable-next-line: max-line-length
  Heights1: string[] = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84'];
  item;
  index;
  type;
  profile;
  title;
  personalizedUser = false;
  constructor(private http: HttpClient,
    private ngxNotificationService: NgxNotificationService,
    private spinner: NgxSpinnerService,
    public notification: NotificationsService,
    public itemService: FindOpenHistoryProfileService,
    public languageService: LanguageService,
    private browserLocation: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breakPointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    // set heading according to the language
    this.languageService.setProfileLanguage();

    // we will check if the user is a premium user
    this.checkUser();

    this.activatedRoute.paramMap.subscribe(
      (routes: any) => {
        if (routes) {
          console.log(routes);
          if (routes.params && routes.params.id) {
            this.getUserProfileData(routes.params.id);
          } else {
            // open profile from other section
            setTimeout(() => {
              if (localStorage.getItem('open_profile')) {
                this.profile = localStorage.getItem('open_profile');
                if (this.profile) {
                  this.item = JSON.parse(this.profile);
                  console.log(this.item);
                  if (this.item && this.item.profile && this.item.profile.name) {
                    this.title = `${this.setName(this.toTitleCase(this.item.profile.name))}'s Profile`;
                  }
                  // section from which user is coming
                  this.type = this.item.coming;
                  
                  if (!this.item.family) {
                    console.log('seting up family');
                    this.setupFamilyDetails();
                  }

                }
              }
            }, 1000);
          }
        }
      }
    );


  }

  // unmarried_daughter
  // history-profiles-dialog.component.ts:611 crashed for i is family & j is unmarried_sons
  // history-profiles-dialog.component.ts:611 crashed for i is family & j is mother_occupation
  // history-profiles-dialog.component.ts:611 crashed for i is family & j is father_status
  // history-profiles-dialog.component.ts:611 crashed for i is family & j is gotra
  // history-profiles-dialog.component.ts:611 crashed for i is family & j is family_type
  // history-profiles-dialog.component.ts:611 crashed for i is family & j is city
  // history-profiles-dialog.component.ts:611 crashed for i is family & j is house_type
  // history-profiles-dialog.component.ts:611 crashed for i is family & j is family_income

  setupFamilyDetails() {
    const family = {
      unmarried_daughters: this.item.profile.unmarried_daughter,
      married_daughters: this.item.profile.married_daughter,
      married_sons: this.item.profile.married_sons,
      unmarried_sons: this.item.profile.unmarried_sons,
      occupation_mother : this.item.profile.mother_occupation,
      mother_status : this.item.profile.mother_status,
      occupation_father : this.item.profile.father_occupation,
      father_status : this.item.profile.father_status,
      gotra : this.item.profile.gotra,
      family_type: this.item.profile.family_type,
      house_type: this.item.profile.house_type,
      family_income: this.item.profile.family_income,
      city: this.item.profile.city
    };

    this.item.family = family;

    console.log(this.item);

  }
  checkUser() {
    if (localStorage.getItem('authData')) {
      const authData = JSON.parse(localStorage.getItem('authData'));
      if (authData.is_premium === '1') {
        this.personalizedUser = true;
      }
    }
  }

  goBack() {
    this.browserLocation.back();
    localStorage.setItem('open_profile', null);
  }

  profileReAnswer(item: any, answer: string) {
    // this.confirmCall=true;
    // this.item.profileChecked = this.confirmCall
    // console.log(this.item);
    // if main kisse pasand hu and credits are zero...on Shortlist  response show offer 2
    if (this.type === 'interestReceived' && this.itemService.getCredits().toString() === '0'
      && answer === 'SHORTLIST') {
      this.itemService.openOfferTwo(item);
      this.reponseToNormal(item, answer);
      return;
    }

    if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0' &&
      this.itemService.getPhotoStatus() === false &&
      answer === 'SHORTLIST') {
      this.itemService.openMessageDialog(item, answer);
    } else if (this.itemService.getPersonalized() &&
      answer === 'YES' && this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0') {
      this.ngxNotificationService.warning('You don\'t have enough credits');
    } else if (this.itemService.getPersonalized() === false &&
      answer === 'YES' && !item.family) {
      this.itemService.openMessageDialog(item, 'contacted');
    } else if (this.itemService.getCredits() != null && this.itemService.getCredits().toString() === '0'
      && answer === 'YES') {
      this.itemService.openTodaysPopupAd();
    } else {
      this.reponseToNormal(item, answer);
    }

  }

  reponseToNormal(item, answer) {
    this.spinner.show();
    const reAnswerData = new FormData();
    reAnswerData.append('id', localStorage.getItem('id'));
    if (item.family) {
      reAnswerData.append('action_id', item.profile.id);
    } else {
      reAnswerData.append('action_id', item.profile.identity_number);
    }
    reAnswerData.append('action', answer);
    reAnswerData.append('is_lead', localStorage.getItem('is_lead'));

    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/saveAction', reAnswerData).subscribe(
      (response: any) => {
        console.log(response);
        if (response && response.status === 1) {
          // update the profile list
          if (response.count) {
            this.itemService.saveCount(response.count);
          }
          this.spinner.hide();
          // after reponse update the user credits
          this.getCredits(answer, item);
        } else {
          this.ngxNotificationService.error(response.message);
          this.spinner.hide();
        }
      },
      err => {
        this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
        this.spinner.hide();
      }
    );
  }
  // reponse on premium profile
  reponseToPremium(item, answer) {
    const reAnswerData = new FormData();
    reAnswerData.append('mobile', localStorage.getItem('mobile_number'));
    reAnswerData.append('id', item.identity_number);
    reAnswerData.append('TEXT', answer);
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/premiumProNew', reAnswerData).subscribe(
      (response: any) => {
        console.log(response);
        if (response && response.status === 1) {
          // update the profile list after response
          this.spinner.hide();
          // update the count
          if (response.count) {
            this.itemService.saveCount(response.count);
          }

          this.getCredits(answer, item);
        } else {
          this.ngxNotificationService.error(response.message);
          this.spinner.hide();
        }
      },
      err => {
        this.ngxNotificationService.error('Something Went Wrong, Try Again Later');
        this.spinner.hide();
      }
    );
  }

  getUserProfileData(userId) {
    this.spinner.show();
    const myprofileData = new FormData();
    myprofileData.append('id', userId);
    myprofileData.append('contacted', '1');
    myprofileData.append('is_lead', '0');
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', myprofileData)
      .pipe(timeout(7000),
        retry(2),
        catchError(e => {
          this.ngxNotificationService.error('Server Time Out, Try Again Later');
          throw new Error('Server Timeout ' + e);
        })).subscribe(
          (data: any) => {
            console.log(data);
            this.item = data;
            this.title = this.setName(this.toTitleCase(data.profile.name)) + `'s Profile`;
            this.type = 'contacted';
            this.spinner.hide();

            setTimeout(() => {
              if (localStorage.getItem('visibleAfter') && localStorage.getItem('visibleAfter') === 'true') {
                document.getElementById('visibleAfter').scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              }
            }, 1000);
          },
          (error: any) => {
            this.spinner.hide();
            console.log(error);
            this.ngxNotificationService.error('Something Went Wrong');
          }
        );
  }




  getQualification(degree, education) {
    return education != null && education !== '' ? education : degree;
  }
  setHouseType(type) {
    if (type) {
      switch (type) {
        case 'Y':
          return 'Owned';
        case 'N':
          return 'Rented';
        default:
          break;
      }
    } else {
      return '';
    }
  }

  setIncome(value: string): String {
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
  getCredits(answer, item) {
    const creditsData = new FormData();
    creditsData.append('id', localStorage.getItem('id'));
    creditsData.append('is_lead', localStorage.getItem('is_lead'));
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>('https://partner.hansmatrimony.com/api/getWhatsappPoint', creditsData).subscribe(
      (data: any) => {
        const points = data.whatsapp_points;
        this.itemService.setCredits(data.whatsapp_points);
        console.log('credits', points);
        if (answer === 'YES') {
          this.item.coming = 'contacted';
          localStorage.setItem('open_profile', JSON.stringify(this.item));
          this.getUserProfileData(item.profile.id);
          localStorage.setItem('visibleAfter', 'true');
        } else {
          localStorage.setItem('open_profile', null);
          this.router.navigateByUrl('chat');
        }
      },
      (error: any) => {
        this.ngxNotificationService.error('We couldn\'t get your credits, trying again');
        console.log(error);
        this.spinner.hide();
      }
    );
  }

  call() {
    window.open('tel:' + `${this.item.family ? this.item.family.mobile : this.profile.mobile}`);
  }

  slideAndOpenProfile(item: any, slide: any) {
    this.itemService.setItem(item);
    this.itemService.changeTab(slide);
  }
  setDate(date: string) {
    const newDate = new Date(date);
    return new Intl.DateTimeFormat('en-AU').format(newDate);
  }
  setHeight(height: any) {
    if (height && height !== '') {
      return this.Heights[this.Heights1.indexOf(height)];
    } else {
      return '';
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
    } else {
      return work;
    }
  }

  onLoadProfileError(gender: string, index) {
    const image = document.querySelectorAll('#profilePic')[index];
    if (gender === 'Male') {
      image.setAttribute('src', '../../assets/male_pic.png');
    } else {
      image.setAttribute('src', '../../assets/female_pic.png');
    }
  }
  onLoadComplete(id: any) {
    id.setAttribute('src', '../../assets/male_pic.png');
  }
  getProfilePhotoLarge(photo: any, carous: any, gen: string, index: string): string {
    if (carous === null || carous === 'null') {
      if (photo === null) {
        if (gen === 'Male') {
          return '../../assets/male_pic.png';
        } else {
          return '../../assets/female_pic.png';
        }
      } else {
        return 'https://d2v6etlhrhtken.cloudfront.net/uploads/' + photo;
      }
    } else {
      const carousel: object = JSON.parse(carous);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      if (carousel[keys[index]] && carousel[keys[index]].toString().match('jeevansathi')) {
        return carousel[keys[index]];
      } else if (carousel[keys[index]]) {
        return 'https://d2v6etlhrhtken.cloudfront.net/uploads/' + carousel[keys[index]];
      } else {
        if (gen === 'Male') {
          return '../../assets/male_pic.png';
        } else {
          return '../../assets/female_pic.png';
        }
      }
    }
  }
  getImagesCount(num: string) {
    if (num !== '[]' && num && num !== 'null') {
      const carouselObject: object = JSON.parse(num);
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
  //  getLocality() {
  //    if (condition) {

  //    }
  //  }

  setName(name: string): string {
    if (name) {
      if (this.itemService.getCredits() != null
        && (this.item.family && !this.item.family.mobile)
        && this.itemService.getCredits().toString() === '0'
        && !this.itemService.getPersonalized()) {
        let a = name.split(' ');
        if (a[0] && a[1]) {
          if (a[0][0]) {
            return a[0][0] + ' ' + a[1];
          } else {
            return a[0] && a[1];
          }
        } else if (a[0]) {
          if (a[0][0]) {
            return a[0][0];
          } else {
            return a[0];
          }
        }
      } else {
        return name;
      }
    } else {
      return '';
    }
  }

  setAge(birthDate: string) {
    console.log('birth date', birthDate);
    if (birthDate != null) {
      return String(Math.floor((Date.now() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365))) + ' Yrs';
    } else {
      return '';
    }
  }

  scrollDown() {
    console.log('scroll down');
    document.querySelector('#historyMain').scrollBy({
      top: 350,
      behavior: 'smooth'
    });
  }

  openImageModal(carous: string, src: string, name: string, index: any) {
    if (carous && carous !== '') {
      const carousel: object = JSON.parse(carous);
      const keys = Object.keys(carousel);
      // console.log(carousel[index]);
      this.setModal('https://d2v6etlhrhtken.cloudfront.net/uploads/' + carousel[keys[index]]);
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

  openPersonalizedMessageDialog(item) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    this.breakPointObserver.observe([
      '(min-width: 1024px)'
    ]).subscribe(
      result => {
        if (result.matches) {
          console.log('screen is greater than  1024px');
          dialogConfig.maxWidth = '30vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        } else {
          console.log('screen is less than  1024px');
          dialogConfig.minWidth = '90vw';
          dialogConfig.maxHeight = '80vh';
          dialogConfig.disableClose = false;
        }
      }
    );
    dialogConfig.data = {
      profile: item,
      type: this.type
    };
    const dialogRef = this.dialog.open(PersonalizedMessageDialogComponent, dialogConfig);
  }

  // setting dynamic about me if users about me is null or na
  setAbout() {
    if (this.item) {
      const aboutObject = {
        dob: this.item.profile.birth_date ? `I am ${this.setAge(this.item.profile.birth_date)} old ` : '',
        caste: this.item.profile.caste ?
          this.item.profile.caste !== 'All' ? this.item.profile.caste : '' : '',
        manglik: this.item.profile.manglik ? this.item.profile.manglik : '',
        gender: this.item.profile.gender ? this.item.profile.gender === 'Male' ? 'boy' : 'girl' : '',
        locality: this.item.profile.locality ? this.item.profile.locality === 'Visible after Contact' ?
          '' : ` residing in ${this.item.profile.locality}` : '',
        qualification: this.item.profile.education ?
          `. I've completed my ${this.item.profile.education}` : this.item.profile.degree ?
            `. I've completed my ${this.item.profile.degree}` : '',
        occupation: this.item.profile.occupation ?
          this.item.profile.occupation === 'Business/Self-Employed' ?
            ' and Self-Employed' : this.item.profile.occupation === 'Not Working' ? 'currently not working'
              : this.item.profile.occupation === 'Doctor' ||
                this.item.profile.occupation === 'Teacher'
                ? ` currently working as ${this.item.profile.occupation}` :
                ` currently working in ${this.item.profile.occupation}` : '',
        working: this.item.profile.working_city ? this.item.profile.working_city !== 'Not Working'
          ? this.item.profile.working_city !== 'na' ? `in ${this.item.profile.working_city}` : '' : '' : '',
        designation: this.item.profile.profession ?
          this.item.profile.occupation !== 'Not Working' ?
            this.item.profile.profession !== 'n/a' ? this.item.profile.profession !== 'na' ?
              ` as ${this.item.profile.profession}` : '' : '' : '' : '',
      };

      // tslint:disable-next-line: max-line-length
      return `${aboutObject.dob} ${aboutObject.caste} ${aboutObject.manglik} ${aboutObject.gender} ${aboutObject.locality} ${aboutObject.qualification} ${aboutObject.occupation} ${aboutObject.designation} ${aboutObject.working}.`;

    }
  }

  getPhoneNumbers(): string {
    if (this.item == null) {
      return 'Visible After Contact';
    }

    if (this.item.family && this.item.family.mobile) {
      return `${this.item.family.mobile}${this.item.profile.whatsapp ? ',\n' + this.item.profile.whatsapp : ''}`;
    } else if (this.item.profile && this.item.profile.mobile) {
      return `${this.item.profile.mobile}${this.item.profile.whatsapp ? ',\n' + this.item.profile.whatsapp : ''}`;
    } else {
      return 'Visible After Contact';
    }

  }
  isDisplay(i, j) {
    try {
      // check the value which has n/a, na, undefined, null, empty and object key
    if (i in this.item
      && j in this.item[i]
      && this.item[i][j]
      && this.item[i][j] !== null
      && this.item[i][j].toString().toLowerCase() !== 'na'
      && this.item[i][j].toString().toLowerCase() !== 'n/a'
      && this.item[i][j].toString().toLowerCase() !== 'null'
      && this.item[i][j].toString().toLowerCase() !== 'undefined'
    ) {
      console.log(`returning for ${this.item[i][j]} where i is ${i} & j is ${j}`)
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(`crashed for i is ${i} & j is ${j}`);
      return false;
    }
}
}
