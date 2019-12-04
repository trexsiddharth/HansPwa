import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import { InstallPromptService } from '../install-prompt.service';
import { A2HSDialogComponent } from '../chat/a2-hsdialog/a2-hsdialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

import {  NotificationsService } from '../notifications.service';

declare let BotUI: Function;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  user_profile: any = [];
  answer: FormGroup;
  show1 = true;
  sent: any = [];
  loginStatus = true;
  profile: any;
  messageRecieved: string;
  personal: any;
  button: String;
  Data: any;
  errorCount = 0;
  given: String;
  Data1: any;
  walkthroughStatus = false;
  walkthroughStatusTwo = false;
  walkthroughStatusThree = false;
  walkthroughNumber = 0;
  response_arr: any = [];
  show_arr: any = [];
  type_arr: any = [];
  previous_chats: any;
  user: any;
  innerWidth: any;
  DoNotshowfull: boolean ;
  number: String;
  text: String;
  currentUrl: string;
  botui: any;
  langChanged = false;
  currentLanguage: string;
  historyData: any;
  currentContact: any;
  profileData: any;
  familyData: any;
  preferenceData: any;
  history = 'chatbot';
  points: any;
  icon1 = document.getElementById('chat');
  icon2 = document.getElementById('hist');
  icon3 = document.getElementById('prof');
  promptData: any = null;


  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private ngxNotificationService: NgxNotificationService,
    private promptService: InstallPromptService,
    public dialog: MatDialog,
    public notification: NotificationsService
  ) {
    this.answer = this._formBuilder.group({
      ans: [''],
    });
    console.log(this.history);
    this.history = 'chatbot';
  }

  ngOnInit() {
    if (localStorage.getItem('mobile_number')) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
    if (localStorage.getItem('language')) {
      this.currentLanguage = localStorage.getItem('language');
    } else {
      this.currentLanguage = 'Hindi';
    }

    if (this.currentLanguage === 'English') {
      document.getElementById('chatText').innerText = 'See Profiles';
      document.getElementById('historyText').innerText = 'History';
      document.getElementById('profileText').innerText = 'My Profile';
    } else {
      document.getElementById('chatText').innerText = 'नए रिश्ते';
      document.getElementById('historyText').innerText = 'देखे गए रिश्ते';
      document.getElementById('profileText').innerText = 'मेरा प्रोफाइल';
    }
    console.log(this.promptService.getPrompt());
    this.promptData = this.promptService.getPrompt();
    this.innerWidth = window.innerWidth;
    this.botui =  BotUI('my-botui-app');
    this.spinner.hide();
    localStorage.setItem('id', '');
    this.currentUrl = this.router.url.substring(13);
    console.log(this.currentUrl);
    if (localStorage.getItem('mobile_number')) {
      this.spinner.show();
      this.currentContact = localStorage.getItem('mobile_number');
      this.checkUrl(this.currentContact).subscribe(
        (data: any) => {
          const text: String = data.apiwha_autoreply;
          const id = data.id;
          console.log(text);
          console.log(id);
          localStorage.setItem('id', id);
          this.getCredits();
          if (text.match('SHOW')) {
            this.Analytics('login', 'login', 'logged In');
            this.loginStatus = true;
            if (this.langChanged === true) {
                    this.changeLanguage(this.currentContact, localStorage.getItem('language')).subscribe(
                      (data: any) => {
                        console.log(data);
                      },
                      (error: any) => {
                        console.log(error);
                      }
                      );
                    this.langChanged = false;
                  }
            this.repeatMEssage('SHOW', this.currentContact);
        } else {
                this.botui.action.text({
                  action: {
                    sub_type: 'number',
                    placeholder: 'कृपया अपना १० अंको का मोबाइल नंबर डालें'
                  }
                }).then(res => {
                  if (this.langChanged === true) {
                    this.changeLanguage(res.value, localStorage.getItem('language')).subscribe(
                      (data: any) => {
                        console.log(data);
                      },
                      (error: any) => {
                        console.log(error);
                      }
                      );
                    this.langChanged = false;
                  }
                  this.repeatMEssage('SHOW', res.value);
                });
              }
        },
        (error: any) => {
          console.log(error);
    });

    } else if (this.currentUrl) {
      this.Analytics('login', 'login', 'logged In');
      this.currentContact = this.currentUrl;
      this.showHistoryMessages(this.currentUrl);
      this.spinner.show();
  } else {
    this.botui.message.add({
      type: 'html',
      content: '<div><p style="font-size:18px">कृपया अपना १० अंको का मोबाइल नंबर डालें</p></div>'
    }).then(() => {
    this.botui.action.text({
      action: {
        sub_type: 'number',
        placeholder: 'Enter your mobile number'
      }
    }).then(res => {
      if (this.langChanged === true) {
        this.changeLanguage(res.value, localStorage.getItem('language')).subscribe(
          (data: any) => {
            console.log(data);
          },
          (error: any) => {
            console.log(error);
          }
          );
        this.langChanged = false;
      }
      this.numberValidation(res.value);
    });
  });
  }
  }

   chatRequest(data, mobile): Observable<any> {
     if (data && mobile && data !== '' && mobile !== '') {
      this.Data = {
        from : mobile,
         to : mobile,
         event : 'INBOX',
         text : data,
         channel_name : 'app'
      };

      const myJSON = JSON.stringify(this.Data);
      console.log(myJSON);

      const data1 = new FormData();
      data1.append('data', myJSON);

      return this.http.post<any>(' https://partner.hansmatrimony.com/api/sendMessages' , data1 );
     }
   }
   checkUrl(num: string): Observable<any> {
       // tslint:disable-next-line: max-line-length
       return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : num, ['fcm_id'] : this.notification.getCurrentToken()}});
       // tslint:disable-next-line: max-line-length
   }

   repeatMEssage(ans: String, mob) {
         this.chatRequest(ans, mob).subscribe(
           (data: any) => {
             this.getCredits();
             console.log(data);
             if (data.type === 'profile') {
                 const values = data.apiwha_autoreply;
                 console.log(values.photo);
                 this.botui.message.add({
                  loading: true,
                    delay: 1000,
                   type: 'html',
                   // tslint:disable-next-line: max-line-length
                   content: '<img id="selectedProfilePic" src=' + this.getProfilePhoto(values.photo, values.gender) + ' style="width: 100%;border-radius:10px" alt="' + values.name + '"> <br>' +
                   '<div style="text-align:center"><b>' + values.name + this.setCity(values.city) + '</b></div> ' +
                   // tslint:disable-next-line: max-line-length
                   '<div style="text-align:center"><i>' + this.setValue(values.about) + '</i></div> <br> <script> function profilePhotoClicked() { console.log("PhotoClicked") } </script>'
                 }).then(() => {
                     this.botui.message.add({
                      loading: true,
                      delay: 500,
                       type: 'html',
                       // tslint:disable-next-line: max-line-length
                       content:
                      //  '<b> &#128100 पर्सनल डिटेल्स</b> <br> <br>' +
                      // line -0
                         this.setHiddenTable(values.mobile, values.locality) +
                       // line -1
                       '<div style="width:100%;background:#f5f5f5;border-radius:7px;font-size:12px"><table style="width:100%">' +
                      '<tr>' +
                      // tslint:disable-next-line: max-line-length
                      '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/calendar.svg">' +  this.setValue(String(Math.floor((Date.now() - new Date(values.birth_date).getTime()) / (1000 * 60 * 60 * 24 * 365)))) + ' Yrs</th>' +
                      // tslint:disable-next-line: max-line-length
                      '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/scale.svg">' + this.getHeight(Number(values.height)) + '</th>' +
                       // tslint:disable-next-line: max-line-length
                       '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/weight.svg">' + this.setValue(values.weight) + ' Kg</th>' +
                        '</tr>' +
                        '</table>' +
                        // line -2
                        '<table style="width:100%">' +
                        '<tr>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/suitcase.svg"></div><div>' + this.setValue(values.occupation) + '</div></th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/graduation.svg">' + this.setValue(values.education) + '<br>' + this.setValue(values.profession) + '</th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/rupee.svg">' + this.SetIncome(values.monthly_income) + ' LPA </th>' +
                          '</tr>' +
                          '</table>' +

                          // line -3
                        '<table style="width:100%">' +
                        '<tr>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/templeblue.svg">' + this.setValue(values.religion) + '<br>' + this.setValue(values.caste) + this.setValue(values.gotra) + '<br>' +  '</th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top: 25%" src="../assets/heart.svg"></div><div>' +  this.setValue(values.marital_status) + '</div></th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/cutlery.svg">' + this.setValue(values.food_choice) + '</th>' +
                          '</tr>' +
                          '</table>' +

                             // line -4
                        '<table style="width:100%">' +
                        '<tr>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/birthday.svg">' + this.setValue(values.birth_date) +  '</th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:25px;margin-right:5px" src="../assets/birthplace.svg">' +  this.setValue(values.birth_place) + '</th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/clock.svg">' + this.setValue(values.birth_time) + '</th>' +
                          '</tr>' +
                          '</table>' +

                             // line -5
                        '<table style="width:100%">' +
                        '<tr>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/tarot.svg"></div><div>' + this.setManglik(values.manglik) +  '</div></th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/house.svg">' +  this.setHouseType(values.house_type) + '</th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:25px;margin-right:5px" src="../assets/moneybag.svg">' + this.SetIncome(values.family_income) + ' LPA</th>' +
                          '</tr>' +
                          '</table>' +
                             // line -6
                        '<table style="width:100%">' +
                        '<tr>' +
                        // tslint:disable-next-line: max-line-length
                        this.setMarriageSisters(String(Number(values.married_daughters) + Number(values.unmarried_daughters) ), values.married_daughters) +
                        // tslint:disable-next-line: max-line-length
                        this.setMarriageBrothers(String(Number(values.married_sons) + Number(values.unmarried_sons) ), values.married_sons)  +
                          '</tr>' +
                          '</table>' +

                               // line -7
                        '<table style="width:100%">' +
                        // tslint:disable-next-line: max-line-length
                        '<tr>' + this.LifeStatus(values.father_status, values.mother_status, values.father_occupation, values.occupation_mother) + '</tr>' +
                          '</table></div>'
                   }).then(() => {
                     this.openImageModal();
                     console.log(localStorage.getItem('walkthrough'));
                     if (localStorage.getItem('walkthrough') && localStorage.getItem('walkthrough') === 'start') {
                      this.setWalkThrough();
                     }
                     if (data.buttons.match('Yes' || 'No')) {
                         return this.botui.action.button({
                           cssClass: 'styleButton',
                           action: [
                             { text: this.changeButtonLanguage(this.currentLanguage), value: 'YES'},
                             {text: this.changeNoButtonLanguage(this.currentLanguage), value: 'NO' }
                           ]
                       }).then(res => {
                         (window as any).ga('send', 'event', 'ChatBot Response', res.value, {
                          hitCallback: () => {
                            console.log('Tracking preference details entered successful');
                          }});
                         if (this.langChanged === true) {
                          this.changeLanguage(mob, localStorage.getItem('language')).subscribe(
                            (data: any) => {
                              console.log(data);
                            },
                            (error: any) => {
                              console.log(error);
                            }
                            );
                          this.langChanged = false;
                        }
                         if (this.promptData != null) {
                          this.openPromptDialog();
                        }
                         this.answer = res.value;
                         console.log('chose' + res.value);
                         this.repeatMEssage(res.value, mob);
                       });
                       } else if (data.buttons.match('Show')) {
                         return this.botui.action.button({
                           action: [
                             { text: this.changeShowButtonLanguage(this.currentLanguage), value: 'SHOW'},
                           ]
                       }).then(res => {
                        if (this.langChanged === true) {
                          this.changeLanguage(mob, localStorage.getItem('language')).subscribe(
                            (data: any) => {
                              console.log(data);
                            },
                            (error: any) => {
                              console.log(error);
                            }
                            );
                          this.langChanged = false;
                        }
                        if (this.promptData != null) {
                          this.openPromptDialog();
                        }
                        console.log('chose' + res.value);
                        this.answer = res.value;
                        this.repeatMEssage(res.value, mob);
                       });
                       }
                   });
                 });
                 localStorage.setItem('mobile_number', mob);
             } else {
             this.botui.message.add({
              loading: true,
              delay: 500,
                type: 'html',
                 content: '<div><p style="font-size:18px">' + data.apiwha_autoreply + '</p></div>'
             }).then(() => {
                 if (data.buttons.match('Yes')) {
                   return this.botui.action.button({
                     action: [
                       { text: this.changeButtonLanguage(this.currentLanguage), value: 'YES'},
                       {text: this.changeNoButtonLanguage(this.currentLanguage), value: 'NO' }
                     ]
                 }).then(res => {
                  (window as any).ga('send', 'event', 'ChatBot Response', res.value, {
                    hitCallback: () => {
                      console.log('Tracking preference details entered successful');
                    }});
                  if (this.langChanged === true) {
                    this.changeLanguage(mob, localStorage.getItem('language')).subscribe(
                      (data: any) => {
                        console.log(data);
                      },
                      (error: any) => {
                        console.log(error);
                      }
                      );
                    this.langChanged = false;
                  }
                  if (this.promptData != null) {
                    this.openPromptDialog();
                  }
                  console.log('chose' + res.value);
                  this.answer = res.value;
                  localStorage.setItem('mobile_number', mob);
                  this.repeatMEssage(res.value, mob);
                 });
                 }  else if (data.buttons.match('Register')) {
                   this.botui.action.button({
                     action: [{
                       text: this.changeRegisterButtonLanguage(this.currentLanguage),
                       value: 'REGISTER'
                     }]
                   }).then(() => {
                    if (this.promptData != null) {
                      this.openPromptDialog();
                    }
                    (window as any).ga('send', 'event', 'Register', 'Register from chatbot', {
                      hitCallback: () => {
                        console.log('Tracking register from chatbot successful');
                      }});
                    this.router.navigateByUrl('register');
                   });
                 } else if (data.buttons.match('Show')) {
                  return this.botui.action.button({
                    action: [
                      { text: this.changeShowButtonLanguage(this.currentLanguage), value: 'SHOW'},
                    ]
                }).then(res => {
                  if (this.langChanged === true) {
                    this.changeLanguage(mob, localStorage.getItem('language')).subscribe(
                      (data: any) => {
                        console.log(data);
                      },
                      (error: any) => {
                        console.log(error);
                      }
                      );
                    this.langChanged = false;
                  }
                  if (this.promptData != null) {
                    this.openPromptDialog();
                  }
                  console.log('chose' + res.value);
                  this.answer = res.value;
                  localStorage.setItem('mobile_number', mob);
                  this.repeatMEssage(res.value, mob);
                });
                } else {
                  localStorage.setItem('mobile_number', mob);
                  return this.botui.action.button({
                    action: [
                      { text: 'BUY SUBSCRIPTION', value: 'BUY'},
                      { text: 'रिजेक्ट करें', value: 'NO'}
                    ]
                  }).then(res => {
                    if (this.promptData != null) {
                      this.openPromptDialog();
                    }
                    if (res.value === 'BUY') {
                      (window as any).ga('send', 'event', 'Subscription', 'Subscription from chatbot', {
                        hitCallback: () => {
                          console.log('Tracking preference details entered successful');
                        }});
                      this.router.navigateByUrl('subscription');
                    } else {
                      this.repeatMEssage(res.value, mob);
                    }
                  });
                }
             });
           }
             this.spinner.hide();
           },
           (error: any) => {
            this.ngxNotificationService.error('Something Went Wrong, We are trying again');
            this.errorCount++;
            if (this.errorCount <= 2) {
                 this.repeatMEssage(ans, mob);
             } else {
              this.ngxNotificationService.error('Please refresh the page and try again');
             }

            console.log(error);
           }
         );
 }
 getFoodChoiceString(num: string): String {
 if (num === null) {
 return 'N/A';
 } else {
 return num;
 }
 }
 getMaritalStatusString(num: string): String {
 switch (num) {
 case null:
 return 'N/A';
 default:
 return num;
 }
 }
 getDisabilityString(num: Number): String {
 switch (num) {
 case 0:
 return 'No';
 case 1:
 return 'Yes';
 default:
 return 'NONE';
 }
 }

 getManglikString(num: String): String {
 switch (num) {
 case null:
 return 'N/A';
 default:
 return num;
 }
 }
 getOccupationString(num: String): String {
 switch (num) {
 case null:
 return 'N/A';
 default:
 return num;
 }
 }
 getFamilyTypeString(num: Number): String {
 switch (num) {
 case 0:
 return 'Nuclear';
 case 1:
 return 'Joint Family';
 default:
 return 'N/A';
 }
 }

 getHouseTypeString(num: Number): String {
 switch (num) {
 case 0:
 return 'Owned';
 case 1:
 return 'Rented';
 default:
 return 'N/A';
 }
 }
 getLifeStatusString(num: Number): String {
 switch (num) {
 case 0:
 return 'Alive';
 case 1:
 return 'Dead';
 default:
 return 'N/A';
 }
 }

 getProfilePhoto(num: String, gen: string): String {
   if (num === null || num === '') {
   if (gen === 'Male') {
     return '../../assets/male_pic.png';
   } else {
     return '../../assets/female_pic.png';
   }
 } else {
   return num;
 }
 }

  getProfilePhotoHistory(num: string, num2: string , gen: string): String {
    if (num && num !== '[]') {
      const carousel: any = JSON.parse(num);              // removed condition to check whether url contains http or not.
      return carousel['1'];
    } else if (num2  && num2 !== '') {
      if (num2.match('http')) {
        return num2;
      } else {
        return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + num2;
      }
    } else {
      if (gen === 'Male') {
        return '../../assets/male_pic.png';
      } else {
        return '../../assets/female_pic.png';
      }
    }
    }

 getSiblingCount(num: string): String {
 if (num === null) {
 return 'N/A';
 } else {
 return num;
 }
 }
 getHomeTown(num: String): String {
 if (num === null) {
 return 'N/A';
 } else {
 return num;
 }
 }
 getReligion(num: String): String {
  if (num === null) {
  return 'N/A';
  } else {
  return num;
  }
  }
 getSubOccupation(num: String): String {
 if (num === null) {
 return 'N/A';
 } else {
 return num;
 }
 }
 getStringForm(num: String): String {
  if (num === null) {
  return 'N/A';
  } else {
  return num;
  }
}
 getHeight(num: number) {
   switch (num) {
    case 53: return '4\'5"';
    case 54: return '4\'6"';
    case 55: return '4\'7"';
    case 56: return '4\'8"';
    case 57: return '4\'9"';
    case 58: return '4\'10"';
    case 59: return '4\'11"';
    case 60: return '5\'';
    case 61: return '5\'1"';
    case 62: return '5\'2"';
    case 63: return '5\'3"';
    case 64: return '5\'4"';
    case 65: return '5\'5"';
    case 66: return '5\'6"';
    case 67: return '5\'7"';
    case 68: return '5\'8"';
    case 69: return '5\'9"';
    case 70: return '5\'10"';
    case 71: return '5\'11"';
    case 72: return '6\'';
    case 73: return '6\'1"';
    case 74: return '6\'2"';
    case 75: return '6\'3"';
     case 76: return '6\'4"';
     case 77: return '6\'5"';
     case 78: return '6\'6"';
     case 79: return '6\'7"';
     case 80: return '6\'8"';
     case 81: return '6\'9"';
     case 82: return '6\'10"';
     case 83: return '6\'11"';
     case 84: return '7\'';
     default: return null;
 }
 }
 change() {
   this.botui.action.hide();
 }
 numberValidation(num: string) {
    this.currentContact = num;
    this.checkUrl(num).subscribe(
      (data: any) => {
        const text: String = data.apiwha_autoreply;
        const registered: any = data.registered;
        const id = data.id;
        if (data.id) {
        localStorage.setItem('id', id);
        console.log(localStorage.getItem('id'));
        }
        if (registered === 1) {
        this.spinner.show();
        this.Analytics('login', 'login', 'logged In');
        this.getCredits();
        this.loginStatus = true;
        console.log(text);
        if (text.match('SHOW')) {
                  this.change();
                  if (this.langChanged === true) {
                    this.changeLanguage(this.currentContact, localStorage.getItem('language')).subscribe(
                      (data: any) => {
                        console.log(data);
                        this.spinner.hide();
                      },
                      (error: any) => {
                        this.ngxNotificationService.error('Something went wrong, please try agian');
                        console.log(error);
                        this.spinner.hide();
                      }
                      );
                    this.langChanged = false;
                  }
                  localStorage.setItem('mobile_number', num);
                  this.repeatMEssage('SHOW', num);
        } else {
          this.spinner.hide();
          this.botui.message.add({
            loading: true,
            delay: 500,
            type: 'html',
            content: '<div><p style="font-size:18px">' + text + '</p></div>'
          }).then(() => {
            this.botui.action.button({
              action: [{
                text: this.changeRegisterButtonLanguage(this.currentLanguage),
                value: 'REGISTER'
              }]
            }).then(() => {
              (window as any).ga('send', 'event', 'Register', 'Register from chatbot', {
                hitCallback: () => {
                  console.log('Tracking register from chatbot successful');
                }});
              this.router.navigateByUrl('register');
            });
          });
        }
      } else {
        if (text) {
          this.spinner.hide();
          this.botui.message.add({
            loading: true,
            delay: 500,
            type: 'html',
            content: '<div><p style="font-size:18px">' + text + '</p></div>'
          }).then(() => {
            this.botui.action.button({
              action: [{
                text: this.changeRegisterButtonLanguage(this.currentLanguage),
                value: 'REGISTER'
              }]
            }).then(() => {
              (window as any).ga('send', 'event', 'Register', 'Register from chatbot', {
                hitCallback: () => {
                  console.log('Tracking  register from chatbot successful');
                }});
              this.router.navigateByUrl('register');
            });
          });
        } else {
          this.botui.message.add({
            loading: true,
            delay: 500,
            type: 'html',
            content: '<div><p style="font-size:18px">कृपया अपना १० अंको का मोबाइल नंबर डालें</p></div>'
          }).then(() => {
          this.botui.action.text({
            action: {
              sub_type: 'number',
              placeholder: 'Enter your mobile number'
            }
          }).then(res => {
            this.numberValidation(res.value);
          });
        });
      }
    }
      },
      (error: any) => {
          console.log(error);
          this.spinner.hide();
      });
 }
 changeLanguage(phon: string, lang: string): Observable<any> {
   console.log('changing language');
   this.currentLanguage = lang;
   return this.http.get<any>(' https://partner.hansmatrimony.com/api/language', {params: { ['phone_number'] : phon, ['language'] : lang}});
 }
 languageEnglish() {
  localStorage.setItem('language', 'English');
  this.langChanged = true;
  this.changeButtonLanguage('English');
  console.log('language changed to english');
 }
 languageHindi() {
  localStorage.setItem('language', 'Hindi');
  this.langChanged = true;
  this.changeButtonLanguage('Hindi');
  console.log('language changed to hindi');
   }

   profileSet(key: string, value: String): String {
    if (value != null) {
      return key + ': ' + value + '<br>';
    } else {return ''; }
   }
   setValue(value: String): String {
    if (value != null) {
      return value ;
    } else {return ''; }
   }
   setCity(value: String): String {
    if (value != null) {
      return ',' + value ;
    } else {return ''; }
   }

   setHiddenPhoneValue( value: String): String {
    if (value != null) {
      if (value.match('Visible')) {
        return '<th style="width:50%;padding: 5px 0px 5px 10px;">  <img style="width:25px" src="../assets/phone_blue.svg">' +  value ;
      } else {
        // tslint:disable-next-line: max-line-length
        return '<th style="width:50%;padding: 5px 0px 5px 10px;padding-right:30px">  <a style="color:white" href="tel:' + value + '"><img style="width:25px;color:white" src="../assets/phone.svg">' +  value + '</a>' ;
      }
    } else {return ''; }
   }
   setHiddenValue(path: string , value: String): String {
    if (value != null) {
      if (value.match('Visible')) {
        return '<img style="width:25px" src="' + path + '">' +  value ;
      } else {
        return '<img style="width:25px" src="' + path + '">' +  value ;
      }
    } else {return ''; }
   }
   setHiddenTable(mob: string, locality: string) {
     if (mob) {
      if (mob.match('Visible')) {
        // tslint:disable-next-line: max-line-length
        return '<table style="width:100%;border-radius:7px;background:white;font-size:12px;margin-top: 10px;margin-bottom:10px;padding-left:5px;">' +
                             '<tr>' +
                               // tslint:disable-next-line: max-line-length
                             this.setHiddenPhoneValue(mob) + '</th>' +
                             // tslint:disable-next-line: max-line-length
                             '<th style="width:50%">' + this.setHiddenValue('../assets/locationblue.svg', locality) + '</th>' +
                               '</tr>' +
                               '</table>';
       } else {
         // tslint:disable-next-line: max-line-length
        return '<table style="width:100%;border-radius:7px;font-size:12px;margin-top: 10px;margin-bottom:10px;padding-left:5px;color:white;font-weight:bolder;background:#1ED761;border-radius:10px">' +
        '<tr>' +
          // tslint:disable-next-line: max-line-length
        this.setHiddenPhoneValue(mob) + '</th>' +
        // tslint:disable-next-line: max-line-length
        '<th style="width:50%">' + this.setHiddenValue('../assets/locationwhite.svg', locality) + '</th>' +
          '</tr>' +
          '</table>';
       }
     } else {
        // tslint:disable-next-line: max-line-length
        return '<table>' +
        '<tr>' +
          '</tr>' +
          '</table>';
     }
   }

   SetIncome(value: string): String {
    if (value != null) {
      if (Number(value) > 1000) {
        return String((Number(value) / 100000));
      } else {
        return value;
      }

    } else {return ''; }
   }

   profileSetIncome(key: string, value: string): String {
    if (value != null) {
      if (Number(value) > 1000) {
        return key + ': ' + String((Number(value) / 100000)) + ' LPA <br>';
      } else {
        return key + ': ' + value + ' LPA <br>';
      }

    } else {return ''; }
   }

   onSelect(feature: string) {
     this.history = feature;
     console.log(this.history);
   }
   changeToHistory() {
     if (this.currentContact) {
      (window as any).ga('send', 'event', 'history', 'history clicked', {
        hitCallback: () => {
          console.log('Tracking history successful');
        }});
      this.spinner.show();
      this.history = 'history';

      document.getElementById('chatButton').style.background = '#f3f3f3';
      document.getElementById('chatText').style.color = 'grey';
      document.getElementById('profileText').style.color = 'grey';
      document.getElementById('profileButton').style.background = '#f3f3f3';
      document.getElementById('historyText').style.color = '#FFFFFF';

      document.getElementById('chatText').style.background = '#f3f3f3';
      document.getElementById('profileText').style.background = '#f3f3f3';

      document.getElementById('historyText').style.background = '#34b7f1';
      document.getElementById('historyButton').style.background = '#34b7f1';

      console.log(localStorage.getItem('id'));
      // tslint:disable-next-line: max-line-length
      return this.http.post<any>('https://partner.hansmatrimony.com/api/history?id=' + localStorage.getItem('id') , {params: { ['id'] : localStorage.getItem('id')}}).subscribe(
        (data: any) => {
         console.log(data);
         this.historyData = data;
         this.spinner.hide();
        },
        (error: any) => {
          this.spinner.hide();
          this.changeToHistory();
          console.log(error);
        }
      );
     } else {
       this.ngxNotificationService.error('No user found');
     }
   }
   changeToBot() {
    this.history = 'chatbot';
    document.getElementById('chatButton').style.background = '#34b7f1';
    document.getElementById('chatText').style.color = '#FFFFFF';
    document.getElementById('chatText').style.background = '#34b7f1';
    document.getElementById('historyText').style.color = 'grey';
    document.getElementById('profileButton').style.background = '#f3f3f3';
    document.getElementById('historyButton').style.background = '#f3f3f3';
    document.getElementById('historyText').style.background = '#f3f3f3';
    document.getElementById('profileText').style.color = 'grey';
    document.getElementById('profileText').style.background = '#f3f3f3';
   }
   changeToMyProfile() {
     if (this.currentContact) {
      this.spinner.show();
      this.history = 'myprofile';
      document.getElementById('profileButton').style.background = '#34b7f1';
      document.getElementById('chatText').style.color = 'grey';
      document.getElementById('chatButton').style.background = '#f3f3f3';
      document.getElementById('historyButton').style.background = '#f3f3f3';
      document.getElementById('chatText').style.background = '#f3f3f3';
      document.getElementById('historyText').style.background = '#f3f3f3';
      document.getElementById('historyText').style.color = 'grey';
      document.getElementById('profileText').style.color = '#FFFFFF';
      document.getElementById('profileText').style.background = '#34b7f1';
      console.log(localStorage.getItem('id'));
     // tslint:disable-next-line: max-line-length
      return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile?id=' + localStorage.getItem('id') + '&contacted=1'  , {params: { ['id'] : localStorage.getItem('id')}}).subscribe(
       (data: any) => {
        console.log(data);
        this.profileData = data.profile;
        this.familyData = data.family;
        this.preferenceData = data.preferences;
        localStorage.setItem('gender', data.profile.gender );
        console.log(data.profile.gender );
        this.spinner.hide();
       },
       (error: any) => {
        this.spinner.hide();
        console.log(error);
        this.changeToMyProfile();
       }
     );
     } else {
      this.ngxNotificationService.error('No user found');
     }
   }
profileReAnswer(num: any, id: any, answer: any) {
  // tslint:disable-next-line: max-line-length
  return this.http.post<any>('https://partner.hansmatrimony.com/api/reply?mobile=' + this.currentContact + '&id=' + id + '&text=' + answer , {}).subscribe(
    (data: any) => {
      console.log(answer);
      console.log(num);
      console.log(id);
      console.log(data);
      this.botui.message.add({
        content: data.message
      }).then(() => {
        this.botui.action.button({
          action: [{
            text: this.changeShowButtonLanguage(this.currentLanguage), value: 'SHOW'
          }]
        }).then(res => {
          this.repeatMEssage(res.value, num);
        });
      });
    }, (error: any) => {
      console.log(error);
    });
}

   getSelectedProfile(data: any) {
     this.changeToBot();
     console.log(data);
     const personal = data.profile;
     const family = data.family;
     this.change();
     this.botui.message.add({
      type: 'html',
      // tslint:disable-next-line: max-line-length
      content: '<img id="selectedProfilePic" src=' + this.getProfilePhotoHistory( personal.carousel, personal.photo, personal.gender) + ' style="width: 100%;border-radius: 10px" alt="' + personal.name + '"><br>' +
      '<div style="text-align:center"><b>' + personal.name  + this.setCity(family.city) +  '</b></div><br>' +
                   '<div style="text-align:center"><i>' + this.setValue(personal.about) + '</i></div> <br>'
    });
     this.botui.message.add({
        type: 'html',
        // tslint:disable-next-line: max-line-length
        content:
        // line -0
        this.setHiddenTable(family.mobile, family.locality) +
     // line -1
     '<div style="width:100%;background:#f5f5f5;border-radius:7px;font-size:12px"><table style="width:100%">' +
    '<tr>' +
    // tslint:disable-next-line: max-line-length
    '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/calendar.svg">' +  this.setValue(String(Math.floor((Date.now() - new Date(personal.birth_date).getTime()) / (1000 * 60 * 60 * 24 * 365)))) + ' Yrs</th>' +
    // tslint:disable-next-line: max-line-length
    '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/scale.svg">' + this.getHeight(Number(personal.height)) + '</th>' +
     // tslint:disable-next-line: max-line-length
     '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/weight.svg">' + this.setValue(personal.weight) + ' Kg</th>' +
      '</tr>' +
      '</table>' +
      // line -2
      '<table style="width:100%">' +
                        '<tr>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/suitcase.svg"></div><div>' + this.setValue(personal.occupation) + '</div></th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/graduation.svg">' + this.setValue(personal.education) + '<br>' + this.setValue(personal.profession) + '</th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/rupee.svg">' + this.SetIncome(personal.monthly_income) + ' LPA </th>' +
                          '</tr>' +
                          '</table>' +

        // line -3
      '<table style="width:100%">' +
      '<tr>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/templeblue.svg">' + this.setValue(family.religion) + '<br>' + this.setValue(family.caste) + this.setValue(family.gotra) + '<br>' +  '</th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top: 25%" src="../assets/heart.svg"></div><div>' +  this.setValue(personal.marital_status) + '</div></th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/cutlery.svg">' + this.setValue(personal.food_choice) + '</th>' +
        '</tr>' +
        '</table>' +

           // line -4
      '<table style="width:100%">' +
      '<tr>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/birthday.svg">' + this.setValue(personal.birth_date) +  '</th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%">' + '<img style="width:25px;margin-right:5px" src="../assets/birthplace.svg">' +  this.setValue(personal.birth_place) + '</th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/clock.svg">' + this.setValue(personal.birth_time) + '</th>' +
        '</tr>' +
        '</table>' +

           // line -5
      '<table style="width:100%">' +
      '<tr>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/tarot.svg"></div><div>' + this.setManglik(personal.manglik) +  '</div></th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/house.svg">' +  this.setHouseType(family.house_type) + '</th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%">' + '<img style="width:25px;margin-right:5px" src="../assets/moneybag.svg">' + this.SetIncome(family.family_income) + ' LPA</th>' +
        '</tr>' +
        '</table>' +
           // line -6
      '<table style="width:100%">' +
      '<tr>' +
      // tslint:disable-next-line: max-line-length
      this.setMarriageSisters(String(Number(family.married_daughters) + Number(family.unmarried_daughters) ), family.married_daughters) +
      // tslint:disable-next-line: max-line-length
      this.setMarriageBrothers(String(Number(family.married_sons) + Number(family.unmarried_sons) ), family.married_sons)  +
        '</tr>' +
        '</table>' +

             // line -7
      '<table style="width:100%">' +
      // tslint:disable-next-line: max-line-length
      '<tr>' + this.LifeStatus(family.father_status, family.mother_status, family.father_occupation, family.occupation_mother) + '</tr>' +
        '</table></div>'

    }).then(() => {
      this.openImageModal();
      if (family.mobile) {
        return this.botui.action.button({
          action: [
            { text: this.changeShowButtonLanguage(this.currentLanguage), value: 'Show'}
          ]
      }).then(res => {
        if (this.langChanged === true) {
          this.changeLanguage(this.currentContact, localStorage.getItem('language')).subscribe(
            (data: any) => {
              console.log(data);
            },
            (error: any) => {
              console.log(error);
            }
            );
          this.langChanged = false;
        }
        console.log('chose' + res.value);
        this.repeatMEssage(res.value, this.currentContact);
       });
      } else {
        return this.botui.action.button({
          action: [
            { text: this.changeButtonLanguage(this.currentLanguage), value: 'Yes'},
            { text: this.changeNoButtonLanguage(this.currentLanguage), value: 'No'}
          ]
      }).then(res => {
        (window as any).ga('send', 'event', 'ChatBot Response', res.value, {
          hitCallback: () => {
            console.log('Tracking preference details entered successful');
          }});
        if (this.langChanged === true) {
          this.changeLanguage(this.currentContact, localStorage.getItem('language')).subscribe(
            (data: any) => {
              console.log(data);
            },
            (error: any) => {
              console.log(error);
            }
            );
          this.langChanged = false;
        }
        console.log('chose' + res.value);
        console.log('Reanswered');
        this.profileReAnswer(this.currentContact, personal.id, res.value);
       });
      }
    });
   }
   showHistoryMessages(mob: string) {
     return this.http.get('https://partner.hansmatrimony.com/api/getMessages?from=' + mob).subscribe(
       (data: any) => {
         console.log(data);
         data.forEach(element => {
          const type: any = element.type;
          const message: any = element.message;
          let valueInMessage: any;
          if (type !== 'IN') {
           valueInMessage = JSON.parse(message).apiwha_autoreply;
          }
          if (type === 'IN') {
              this.botui.message.add({
                human: true,
                content: message
              });
            } else {
              if (valueInMessage) {
                if (JSON.parse(message).type === 'message') {
                  this.botui.message.add({
                    content: valueInMessage
                  });
                } else {
                  this.botui.message.add({
                    type: 'html',
                    // tslint:disable-next-line: max-line-length
                    content: '<img id="selectedProfilePic" src=' + this.getProfilePhotoHistory(valueInMessage.carousel, valueInMessage.photo,  valueInMessage.gender) + ' style="width: 100%;border-radius: 10px" alt="' + valueInMessage.name + '" >' +
                    '<div style="text-align:center"><b>' + valueInMessage.name + this.setCity(valueInMessage.city) +  '</b></div>' +
                    '<div style="text-align:center"><i>' + this.setValue(valueInMessage.about) + '</i></div><br>' +

                    // line -0
                    this.setHiddenTable(valueInMessage.mobile, valueInMessage.locality) +
                 // line -1
                 '<div style="width:100%;background:#f5f5f5;border-radius:7px;font-size:12px"><table style="width:100%">' +
                '<tr>' +
                // tslint:disable-next-line: max-line-length
                '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/calendar.svg">' +  this.setValue(String(Math.floor((Date.now() - new Date(valueInMessage.birth_date).getTime()) / (1000 * 60 * 60 * 24 * 365)))) + ' Yrs</th>' +
                // tslint:disable-next-line: max-line-length
                '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/scale.svg">' + this.getHeight(Number(valueInMessage.height)) + '</th>' +
                 // tslint:disable-next-line: max-line-length
                 '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/weight.svg">' + this.setValue(valueInMessage.weight) + ' Kg</th>' +
                  '</tr>' +
                  '</table>' +
                  // line -2
                  '<table style="width:100%">' +
                        '<tr>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/suitcase.svg"></div><div>' + this.setValue(valueInMessage.occupation) + '</div></th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/graduation.svg">' + this.setValue(valueInMessage.education) + '<br>' + this.setValue(valueInMessage.profession) + '</th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/rupee.svg">' + this.SetIncome(valueInMessage.monthly_income) + ' LPA </th>' +
                          '</tr>' +
                          '</table>' +

                    // line -3
                  '<table style="width:100%">' +
                  '<tr>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/templeblue.svg">' + this.setValue(valueInMessage.religion) + '<br>' + this.setValue(valueInMessage.caste) + this.setValue(valueInMessage.gotra) + '<br>' +  '</th>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top: 25%" src="../assets/heart.svg"></div><div>' +  this.setValue(valueInMessage.marital_status) + '</div></th>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/cutlery.svg">' + this.setValue(valueInMessage.food_choice) + '</th>' +
                    '</tr>' +
                    '</table>' +

                       // line -4
                  '<table style="width:100%">' +
                  '<tr>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/birthday.svg">' + this.setValue(valueInMessage.birth_date) +  '</th>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%">' + '<img style="width:25px;margin-right:5px" src="../assets/birthplace.svg">' +  this.setValue(valueInMessage.birth_place) + '</th>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/clock.svg">' + this.setValue(valueInMessage.birth_time) + '</th>' +
                    '</tr>' +
                    '</table>' +

                       // line -5
                  '<table style="width:100%">' +
                  '<tr>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/tarot.svg"></div><div>' + this.setManglik(valueInMessage.manglik) +  '</div></th>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/house.svg">' +  this.setHouseType(valueInMessage.house_type) + '</th>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%">' + '<img style="width:25px;margin-right:5px" src="../assets/moneybag.svg">' + this.SetIncome(valueInMessage.family_income) + ' LPA</th>' +
                    '</tr>' +
                    '</table>' +
                       // line -6
                  '<table style="width:100%">' +
                  '<tr>' +
                  // tslint:disable-next-line: max-line-length
                  this.setMarriageSisters(String(Number(valueInMessage.married_daughters) + Number(valueInMessage.unmarried_daughters) ), valueInMessage.married_daughters) +
                  // tslint:disable-next-line: max-line-length
                  this.setMarriageBrothers(String(Number(valueInMessage.married_sons) + Number(valueInMessage.unmarried_sons) ), valueInMessage.married_sons)  +
                    '</tr>' +
                    '</table>' +

                         // line -7
                  '<table style="width:100%">' +
                  // tslint:disable-next-line: max-line-length
                  '<tr>' + this.LifeStatus(valueInMessage.father_status, valueInMessage.mother_status, valueInMessage.father_occupation, valueInMessage.occupation_mother) + '</tr>' +
                    '</table></div>'

                }).then(() => {
                  this.openImageModal();
                });
                }
              }
            }
         });
         this.numberValidation(mob);
         this.spinner.hide();
       },
       (error: any) => {
         console.log(error);
         this.spinner.hide();
       }
     );
   }
getCredits() {
 // tslint:disable-next-line: max-line-length
  return this.http.post<any>('https://partner.hansmatrimony.com/api/getWhatsappPoint?id=' + localStorage.getItem('id'), {}).subscribe(
   (data: any) => {
      this.points = data.whatsapp_points;
      console.log(this.points);
   },
  (error: any) => {
    this.ngxNotificationService.error('We couldn\'t get your credits, trying again');
    console.log(error);
    this.spinner.hide();
  }
 );
}

openPromptDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.hasBackdrop = true;
  if (this.innerWidth < 764) {
    dialogConfig.minWidth = this.innerWidth - 50;
  } else {
    dialogConfig.minWidth = this.innerWidth - 400;
  }
  dialogConfig.data = {
    promptData: this.promptData,
  };
  const dialogRef = this.dialog.open(A2HSDialogComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(data => {
    this.promptData = data;
  });
}
setManglik(value: string) {
if (value === 'No') {
  return 'Non Manglik';
} else {
  return value;
}
}
setHouseType(value: string) {
  if (value === 'Owned') {
    return 'Own House';
  } else {
    return 'Rented House';
  }
  }
  setMarriageBrothers(value1: string, value2: string) {
    if (value1 != null && value1 !== '' && value1 !== '0') {
      if (value2 != null && value2 !== '' && value2 !== '0' ) {
        // tslint:disable-next-line: max-line-length
        return '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/brothers.svg">' + value1 + ' Brothers -> ' + value2 + ' married </th>';
      } else {
          // tslint:disable-next-line: max-line-length
        return '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/brothers.svg">' + value1 + ' Brothers</th>';
      }
    } else {
      return '';
    }
    }
    setMarriageSisters(value1: string, value2: string) {
      if (value1 != null && value1 !== '' && value1 !== '0') {
        if (value2 != null && value2 !== '' && value2 !== '0' ) {
          // tslint:disable-next-line: max-line-length
          return '<th style="width:33.33%;padding: 5px 0px 5px 10px;"">' + '<img style="width:20px;margin-right:5px" src="../assets/sisters.svg">' + value1 + ' Sisters -> ' + value2 + ' married </th>';
        } else {
            // tslint:disable-next-line: max-line-length
          return '<th style="width:33.33%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/sisters.svg">' + value1 + ' Sisters</th>';
        }
      } else {
        return '';
      }
      }
      LifeStatus(father: string, mother: string, fatho: string, mothero: string) {
            if (father != null && father !== '' ) {
              if (father.match('Alive') ) {
                if (fatho) {
                  if (mother != null && mother !== '' ) {
                    if (mother.match('Alive')) {
                      if (mothero) {
                        // tslint:disable-next-line: max-line-length
                    return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father(Alive) ->' + fatho + '  & Mother(Alive) -> ' + mothero + ' </th>';
                      } else {
                        // tslint:disable-next-line: max-line-length
                    return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father(Alive) ->' + fatho + '  & Mother(Alive) </th>';
                      }
                    } else {
                        // tslint:disable-next-line: max-line-length
                    return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father(Alive) ->' + fatho + ', Mother(Dead)</th>';
                    }
                  } else {
                     // tslint:disable-next-line: max-line-length
                     return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father(Alive) ->' + fatho + '</th>';
                  }
                } else {
                  // tslint:disable-next-line: max-line-length
                  return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father(Alive) -> </th>';
                }
              } else if (mother != null && mother !== '') {
                if (mother.match('Alive')) {
                  if (mothero) {
                    // tslint:disable-next-line: max-line-length
                return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Mother(Alive) ->' + mothero + ', Father(Dead)</th>';
                  } else {
                    // tslint:disable-next-line: max-line-length
                    return '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Mother(Alive) & Father(Dead)</th>';
                  }
                } else {
                  // tslint:disable-next-line: max-line-length
                  return '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father & Mother Both Not Alive</th>';
                }
              } else {
                return '<th></th>';
              }
              } else if (mother != null && mother !== '') {
                if (mother.match('Alive')) {
                  if (mothero) {
                    // tslint:disable-next-line: max-line-length
                return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Mother(Alive) ->' + mothero + ', Father(Dead)</th>';
                  } else {
                    // tslint:disable-next-line: max-line-length
                    return '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Mother(Alive) & Father(Dead)</th>';
                  }
                } else {
                  // tslint:disable-next-line: max-line-length
                  return '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father & Mother Both Not Alive</th>';
                }
              } else {
                return '<th></th>';
              }
      }
      logout() {
        this.loginStatus = false;
        localStorage.setItem('mobile_number', '');
        localStorage.setItem('id', '');
        localStorage.setItem('gender', '');
        this.router.navigateByUrl('/home');
      }

      changeButtonLanguage(type: string) {
        if (type === 'English') {
            document.getElementById('chatText').innerText = 'See Profiles';
            document.getElementById('historyText').innerText = 'History';
            document.getElementById('profileText').innerText = 'My Profile';
            document.getElementById('credit').innerText = 'Credits: ' + this.points;
            return 'See Contact Number';
          } else {
            document.getElementById('chatText').innerText = 'रिश्ते देखें';
            document.getElementById('historyText').innerText = 'देखे गए रिश्ते';
            document.getElementById('profileText').innerText = 'मेरा प्रोफाइल';
            document.getElementById('credit').innerText = 'कांटेक्ट नंबर: ' + this.points;
            return 'कांटेक्ट नंबर देखें';
          }
      }
      changeNoButtonLanguage(type: string) {
        if (type === 'English') {
          return 'Reject';
        } else {
          return 'रिजेक्ट';
        }
    }
    changeShowButtonLanguage(type: string) {
      if (type === 'English') {
        return 'Show More';
      } else {
        return 'और दिखाएं';
      }
    }
      changeRegisterButtonLanguage(type: string) {
        if (type === 'English') {
          return 'Register';
        } else {
          return 'रजिस्टर';
        }
  }

  Analytics(type: string, category: string, action: string) {
    (window as any).ga('send', 'event', category, action, {
      hitCallback: () => {

        console.log('Tracking ' + type + ' successful');

      }

    });
  }

  openImageModal() {
    document.querySelectorAll<HTMLElement>('.botui-message-content #selectedProfilePic').forEach((element) => {
      const htmlElement: HTMLElement = element;
      const modal = document.getElementById('myModal');
      const modalImg: HTMLElement = document.getElementById('img01');
      const captionText = document.getElementById('caption');
      htmlElement.onclick = () => {
        modal.style.display = 'block';
        modalImg.setAttribute('src', htmlElement.getAttribute('src'));
        captionText.innerHTML = htmlElement.getAttribute('alt');
       };
     
       // Get the <span> element that closes the modal
      const span = document.getElementById('closeModal');

// When the user clicks on <span> (x), close the modal
      span.onclick = function() {
  modal.style.display = 'none';
};
    });
  }
  setWalkThrough() {
    // tslint:disable-next-line: max-line-length
    if (document.querySelectorAll('.botui-actions-buttons.styleButton').length === 1 || document.querySelectorAll('#selectedProfilePic').length === 1 ) {
      this.walkthroughStatus = true;
    } else {
      this.walkthroughStatus = false;
    }
  }
  getWalkthroughStatus() {
    if (this.walkthroughStatus === true) {
      return true;
    } else {
      return false;
    }
  }
  myHideFunction() {
    localStorage.setItem('walkthrough', 'done');
    console.log(localStorage.getItem('walkthrough'));

    setTimeout(() => {
      this.walkthroughStatusTwo = true;
    }, 500);
  }
  getWalkthroughStatusTwo() {
   if (this.walkthroughStatusTwo === true) {
     return true;
   } else {
     return false;
   }
  }
  myHideFunctionTwo() {
    setTimeout(() => {
      this.walkthroughStatusThree = true;
    }, 500);
  }
  getWalkthroughStatusThree() {
    if (this.walkthroughStatusThree === true) {
      return true;
    } else {
      return false;
    }
   }
   getWalkthroughThreeText() {
     return 'आप ' + this.points + ' कांटेक्ट नंबर और देख सकते है';
   }
}
