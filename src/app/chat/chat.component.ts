import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  NgxNotificationService
} from 'ngx-kc-notification';
import { InstallPromptService } from '../install-prompt.service';
import { A2HSDialogComponent } from '../chat/a2-hsdialog/a2-hsdialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

import {  NotificationsService } from '../notifications.service';
import { CreditAwardComponent } from '../credit-award/credit-award.component';
import { PreferenceWideningComponent } from '../preference-widening/preference-widening.component';
import { timeout, retry, catchError, min } from 'rxjs/operators';
import { SubscriptionserviceService } from '../subscriptionservice.service';




declare let BotUI: Function;



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {


  familyTable =  {
    id: '',
  temple_id: '',
  identity_number: '',
  name: '',
  relation: '',
  locality: '',
  landline: '',
  family_photo: '',
  city: '',
  native: '',
  mobile: '',
  email: '',
  unmarried_sons: '',
  married_sons: '',
  unmarried_daughters: '',
  married_daughters: '',
  family_type: '',
  house_type: '',
  religion: '',
  caste: '',
  gotra: '',
  occupation: '',
  family_income: '',
  budget: '',
  office_address: '',
  father_status: '',
  mother_status: '',
  created_at: '',
  updated_at: '',
  whats_app_no: '',
  marriage_budget_not_applicable: '',
  email_not_available: '',
  mother_tongue: '',
  sub_caste: '',
  country: '',
  state: '',
  occupation_mother: '',
  address: '',
  about: '',
  caste_id: '',
  zodiac: '',
  father_off_addr: ''
  };

  preferenceTable = {
    id: '',
identity_number: '',
temple_id: '',
age_min: '',
age_max: '',
height_min: '',
height_max: '',
caste: '',
marital_status: '',
manglik: '',
food_choice: '',
working: '',
occupation: '',
sub_occupation: '',
income_min: '',
income_max: '',
citizenship: '',
description: '',
membership: '',
caste_no_bar: '',
created_at: '',
updated_at: '',
source: '',
amount_collected: '',
insentive: '',
validity: '',
payment_method: '',
receipt_url: '',
status: '',
mother_tongue: '',
temple_name: ''
  };

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
  clientWalkThroughStatus;
  showWalkthrough;
  response_arr: any = [];
  show_arr: any = [];
  type_arr: any = [];
  previous_chats: any;
  user: any;
  innerWidth: any;
  currentIndex;
  innerHeight: any;
  DoNotshowfull: boolean ;
  number: String;
  text: String;
  currentUrl: string;
  awardUrl: string;
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
  casteMap;
  show_ad;
  selectedMapName;
  icon1 = document.getElementById('chat');
  icon2 = document.getElementById('hist');
  icon3 = document.getElementById('prof');
  promptData: any = null;
  pId: string[] = [];
  pName: string[] = [];
  connectionStatus;
  player;
  done = false;
  dailyQuotaReached = false;


  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    private ngxNotificationService: NgxNotificationService,
    private promptService: InstallPromptService,
    public dialog: MatDialog,
    public notification: NotificationsService,
    private subscriptionService: SubscriptionserviceService
  ) {
    this.answer = this._formBuilder.group({
      ans: [''],
    });
    console.log(this.history);
    this.history = 'chatbot';
  }

  // setTimeStamp() {
  //   let timeStamp = new Date().getTime();
  //   let date = new Date(timeStamp);
  //   localStorage.setItem('currentTimeStamp', date.toString());
  // }
  // getTimeStampDifference() {
  //   let currentStamp = localStorage.getItem('currentTimeStamp');
  //   if (currentStamp) {
  //     return this.getDifference(new Date(currentStamp), new Date(new Date().getTime()));
  //   }
  // }
  // getDifference(date1: Date, date2: Date) {
  //   var Difference_In_Time = date2.getTime() - date1.getTime();
  //   var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  //   console.log(Difference_In_Days);
  //   return Difference_In_Days;
  // }

  ngOnInit() {
    if (this.router.url.match('logout')) {
      this.loginStatus = false;
      localStorage.setItem('mobile_number', '');
      localStorage.setItem('id', '');
      localStorage.setItem('gender', '');
    }
    window.addEventListener('offline',
  () => {
    console.log('No Internet');
    this.connectionStatus = 'offline';
    this.showError();
  });

    window.addEventListener('online',
  () => {
    console.log('Connected Internet');
    this.connectionStatus = 'online';
}
);

    if (this.router.url.match('push')) {
      this.Analytics('Push Web', 'Push Web', 'Notification Clicked');
    }
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
    this.innerHeight = window.innerHeight;

    this.botui =  BotUI('my-botui-app');
    this.spinner.hide();
    if (this.router.url.match('mobile=')) {
      this.currentUrl = this.router.url.substring(13);
    }
    console.log(this.currentUrl);
    if (localStorage.getItem('mobile_number')) {
      this.spinner.show();
      this.currentContact = localStorage.getItem('mobile_number');
      this.checkUrl(this.currentContact).subscribe(
        (data: any) => {
          console.log(data);
          const text: string = data.apiwha_autoreply;
          const id = data.id;
          console.log(text);
          console.log(id);
          this.show_ad = data.show_ad;
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
      // this.showHistoryMessages(this.currentUrl);
      this.numberValidation( this.currentContact);
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

  showVideo() {
    this.botui.message.add({
      type: 'embed',
      content: 'https://www.youtube.com/embed/-sYMBcox2Bs'
    }).then(() => {
      return this.botui.action.button({
        action: [{
          text: this.changeShowButtonLanguage(this.currentLanguage),
          value: 'SHOW'
        }]
    }).then(res => {
          this.repeatMEssage(res.value, this.currentContact);
    });
  });
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

      // tslint:disable-next-line: max-line-length
      return this.http.post<any>(' https://partner.hansmatrimony.com/api/sendMessages' , data1 ).pipe(timeout(7000), retry(2), catchError(e => {
          throw new Error('Server Timeout ' +  e);
      }));
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
                    delay: 500,
                   type: 'html',
                   content:
                   // tslint:disable-next-line: max-line-length
                  '<img id="selectedProfilePic" src=' + this.getProfilePhoto(values.photo, values.gender) + ' style="width: 100%;border-radius:10px" alt="' + this.setName(values.name, values.mobile) + '"> <br>' +
                   // tslint:disable-next-line: max-line-length
                   '<div style="text-align:center"><b>' + this.setName(values.name, values.mobile) + this.setCity(values.city) + '</b></div> ' +
                   // tslint:disable-next-line: max-line-length
                   '<div style="text-align:center"><i>' + this.setValue(values.about) + '</i></div> <br>' +
                   '<table style="width:100%;height:40px">' +
                   '<tr>' +
                   // tslint:disable-next-line: max-line-length
                   '<th style="width:50%;text-align:center;background:#25d366;border-bottom-left-radius:10px">' + '<div><button id="whatsappBtn" style="width:100%;font-weight: bolder;font-size:16px;color:white;background:#25d366;border: none;"><img src="../../assets/whatsapp.webp" style="width:30px"> Share Profile</button></div><a id="whtLink"></a></th>' +
                   // tslint:disable-next-line: max-line-length
                   '<th style="width:50%;text-align:center;background:#222831;border-bottom-right-radius:10px">' + '<div><button id="downloadBtn" style="width:100%;font-weight: bolder;font-size:16px;color:white;background:#222831;border: none;"><img src="../../assets/download.svg" style="width:20px"> Save Profile</button></div><a  target="_blank" id="downLink"></a></th>' +
                     '</tr>' +
                     '</table></div>'
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
                          '</table>'
                   }).then(() => {
                     if (values.profiles_left === 0) {
                       this.Analytics('Daily Quota Reached', 'Daily Quota Reached', 'Daily Quota Completed' );
                       this.dailyQuotaReached = true;
                     } else {
                      this.dailyQuotaReached = false;
                     }
                     setTimeout(() => {
                      this.whatsappShare(this.setName(values.name, values.mobile), localStorage.getItem('id'), values.id, values.mobile);
                     }, 1000);
                     this.openImageModal();
                     if (data.buttons.match('Yes' || 'No')) {
                       this.botui.message.add({
                        type: 'html',
                        content: '<div style="text-align:center">' + this.setButton('checked.svg', 'YES', 'none') +
                        this.setButton('star.svg', 'SHORTLIST', 'none') +
                        this.setButton('cancel.svg', 'NO', 'none') + '</div>'
                      }).then((index) => {
                        this.changeButtonBackground();
                        this.currentIndex = index;
                        document.querySelectorAll<HTMLElement>('.customBotButton').forEach( element => {
                          element.onclick = () => {
                            if (element.id === 'YES') {
                              if (this.show_ad === 1) {
                                setTimeout(() => {
                                  this.openAwardDialog();
                                }, 2000);
                              }
                            }
                            this.updateBotValue(index, element);
                            (window as any).ga('send', 'event', 'ChatBot Response', element.id, {
                              hitCallback: () => {
                                console.log('Tracking Bot Response entered successful');
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
                            console.log('chose' + element.id);
                            this.repeatMEssage(element.id, mob);
                          };
                        });
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
                        this.repeatMEssage(res.value, mob);
                       });
                       }
                   });
                 });
              localStorage.setItem('mobile_number', mob);
             } else {
               if (data.buttons.match('History') && data.buttons.length === 7 && !data.apiwha_autoreply.match('6')) {
                this.openPreferenceWideningDialog();
               } else {
                 if (data.buttons.match('History') && data.apiwha_autoreply.match('6')) {
                   this.dailyQuotaReached = true;
                 } else {
                   this.dailyQuotaReached = false;
                 }
                 this.botui.message.add({
                  loading: true,
                  delay: 500,
                    type: 'html',
                     content: '<div><p style="font-size:18px">' + data.apiwha_autoreply + '</p></div>'
                 }).then(() => {
                     if (data.buttons.match('Yes')) {
                      this.botui.message.add({
                        type: 'html',
                        content: '<div style="text-align:center">' + this.setButton('checked.svg', 'YES', 'none') +
                        this.setButton('star.svg', 'SHORTLIST', 'none') +
                        this.setButton('cancel.svg', 'NO', 'none') + '</div>'
                      }).then((index) => {
                        this.changeButtonBackground();
                        this.currentIndex = index;
                        document.querySelectorAll<HTMLElement>('.customBotButton').forEach( element => {
                          element.onclick = () => {
                            console.log('Clicked');
                            this.updateBotValue(index, element);
                            (window as any).ga('send', 'event', 'ChatBot Response', element.id, {
                              hitCallback: () => {
                                console.log('Tracking Bot Response entered successful');
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
                            console.log('chose' + element.id);
                            this.repeatMEssage(element.id, mob);
                          };
                        });
                       });
                     }  else if (data.buttons.match('Register')) {
                       return this.botui.action.button({
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
                        this.router.navigateByUrl('reg');
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
                    } else if (data.buttons.match('History')) {
                       return this.botui.action.button({
                        action: [
                          { text: this.changeHistoryButtonLanguage(this.currentLanguage), value: 'History'},
                        ]
                        }).then(() => {
                          this.changeToHistory();
                        });
                    } else if (data.buttons.match('Renew Plan')) {
                      this.renewProfile();
                    } else {
                      localStorage.setItem('mobile_number', mob);
                      return this.botui.action.button({
                        action: [
                          { text: this.changeBtnTextLanguage(this.currentLanguage, 'See Plans'), value: 'Buy'},
                          { text: this.changeBtnTextLanguage(this.currentLanguage, 'Next Match'), value: 'No'}
                        ]
                      }).then(res => {
                        if (this.promptData != null) {
                          this.openPromptDialog();
                        }
                        if (res.value === 'Buy') {
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
           }
             this.spinner.hide();
           },
           (error: any) => {
              this.ngxNotificationService.error('Please refresh the page and try again');
              console.log(error);
              this.showError();

           }
         );
 }
 showError() {
    this.history = 'connection_error';
    document.getElementById('footerVisibility').style.display = 'none';
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
 renewProfile() {
  return this.botui.action.button({
    action: [
      { text: this.changeBtnTextLanguage(this.currentLanguage, 'Renew Plan'), value: 'Renew'},
      { text: this.changeBtnTextLanguage(this.currentLanguage, 'Call Hans Care'), value: 'Call'}
    ]
  }).then(res => {
      switch (res.value) {
        case 'Renew':
          this.router.navigateByUrl('subscription');
          break;
      case 'Call':
        window.open('tel:9697989697');
        break;
      }
      this.renewProfile();
  });
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

 getProfilePhoto(num: string, gen: string): string {
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
 getCarouselProfilePhoto(num: string, num2: string, gen: string): string {

if (num && num !== '' && num !== '[]' ) {
  const carousel: object = JSON.parse(num);
  console.log(carousel[1]);
  let count;
  if (carousel) {
    count = Object.keys(carousel).length;
    if (count > 2) {
      return '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">' +
  '<div class="carousel-inner">' +
    '<div class="carousel-item">' +
      '<img  src="http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[1] + '" alt="First slide">' +
    '</div>' +
    '<div class="carousel-item">' +
      '<img class="d-block w-100" src="..." alt="Second slide">' +
    '</div>' +
    '<div class="carousel-item">' +
      '<img class="d-block w-100" src="..." alt="Third slide">' +
    '</div>' +
  '</div>' +
  '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
  '</a>' +
  '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
  '</a>' +
'</div>';
    } else if (count > 1) {
      return '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">' +
  '<div class="carousel-inner">' +
    '<div class="carousel-item">' +
      '<img class="d-block w-100" src="..." alt="First slide">' +
    '</div>' +
    '<div class="carousel-item">' +
      '<img class="d-block w-100" src="..." alt="Second slide">' +
    '</div>' +
  '</div>' +
  '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
  '</a>' +
  '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
  '</a>' +
'</div>';
    } else {
      return '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">' +
  '<div class="carousel-inner">' +
    '<div class="carousel-item">' +
    '<img  src="http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel[1] + '" alt="First slide">' +
    '</div>' +
  '</div>' +
  '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Previous</span>' +
  '</a>' +
  '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="sr-only">Next</span>' +
  '</a>' +
'</div>';
    }
}
} else if (num2 === null || num2 === '') {
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
      return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel['1'];
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
   this.updateBotValue(this.currentIndex, '');
 }
 numberValidation(num: string) {
    this.currentContact = num;
    this.checkUrl(num).subscribe(
      (data: any) => {
        console.log(data);
        this.clientWalkThroughStatus = data.status;
        const text: String = data.apiwha_autoreply;
        const registered: any = data.registered;
        const id = data.id;
        if (data.status === 1) {

        }
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
        localStorage.setItem('is_lead', data.is_lead);
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
              this.router.navigateByUrl('reg');
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
              this.router.navigateByUrl('reg');
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
   setButton(imageName, text, background) {
     // tslint:disable-next-line: max-line-length
     return '<button id="' + text + '" class="btn customBotButton" style="background:' + background + ';color:white;padding:5px 20px"><img style="width:50px" src="../../assets/' + imageName + '">';
   }
   changeButtonBackground() {
     // tslint:disable-next-line: max-line-length
     document.querySelectorAll<HTMLElement>('.botui-message-content')[document.querySelectorAll<HTMLElement>('.botui-message-content').length - 1].style.backgroundColor = '#f3f3f3';
   }
   updateBotValue(index, element) {
     if (index) {
      this.botui.message.update(index, {
        human: true,
        content: ''
    }).then(() => {
  this.botui.message.add({
    human: true,
    content: element.id
  });
    });
     }
   }
   setValue(value: string): string {
    if (value != null) {
      return value ;
    } else {return ''; }
   }
   setCity(value: string): string {
    if (value != null) {
      return ',' + value ;
    } else {return ''; }
   }


   setName(value: string, mobile: string): string {
     if (mobile) {
      if (mobile.startsWith('Visible')) {
        if (value != null) {
         if (value.split(' ')) {
           const name = value.split(' ');
           return name[0] ;
         } else {return value; }
       } else {return ''; }
     } else {
       return value;
     }
     } else {
        return '';
     }
   }
   setNameSelectedProfile(value: string): string {
    if (value != null) {
     if (value.split(' ')) {
       const name = value.split(' ');
       return name[0] ;
     } else {return value; }
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
        return '<table style="width:100%;border-radius:7px;font-size:12px;margin-top: 10px;margin-bottom:10px;padding-left:5px;color:white;font-weight:bolder;background:green;border-radius:10px">' +
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
      const historyData = new FormData();
      historyData.append('id', localStorage.getItem('id'));
      if (localStorage.getItem('is_lead')) {
        historyData.append('is_lead', localStorage.getItem('is_lead'));
      } else {
        historyData.append('is_lead', '1');
      }
      // tslint:disable-next-line: max-line-length
      return this.http.post<any>('https://partner.hansmatrimony.com/api/history', historyData).pipe(timeout(7000), retry(2), catchError(e => {
        throw new Error('Server Timeout ' +  e);
    })).subscribe(
        (data: any) => {
         console.log(data);
         this.historyData = data;
         this.spinner.hide();
        },
        (error: any) => {
          this.spinner.hide();
          this.ngxNotificationService.error('Something Went Wrong');
          this.showError();
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
      const myprofileData = new FormData();
      myprofileData.append('id', localStorage.getItem('id'));
      myprofileData.append('contacted', '1');
      if (localStorage.getItem('is_lead')) {
        myprofileData.append('is_lead', localStorage.getItem('is_lead'));
      } else {
        myprofileData.append('is_lead', '1');
      }
     // tslint:disable-next-line: max-line-length
      return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', myprofileData).pipe(timeout(7000), retry(2), catchError(e => {
        throw new Error('Server Timeout ' +  e);
    })).subscribe(
       (data: any) => {
        console.log(data);
        if (data.family) {
          this.familyData = data.family;
        } else {
          this.familyData = this.familyTable;
        }
        if (data.preferences) {
          this.preferenceData = data.preferences;
        } else {
          this.preferenceData = this.preferenceTable;
        }
        if (data.profile) {
          this.profileData = data.profile;
          if (data.profile.gender) {
          localStorage.setItem('gender', data.profile.gender );
          console.log(data.profile.gender );
          }
        }
        this.spinner.hide();
       },
       (error: any) => {
        this.spinner.hide();
        console.log(error);
        this.ngxNotificationService.error('Something Went Wrong');
        this.showError();
       }
     );
     } else {
      this.ngxNotificationService.error('No user found');
     }
   }
   preferencesChanged(data: any) {
     if (data) {
      this.changeToMyProfile();
     }
   }
profileReAnswer(num: any, id: any, answer: any) {
  const reAnswerData = new FormData();
  reAnswerData.append('mobile', this.currentContact);
  reAnswerData.append('id', id);
  reAnswerData.append('answer', answer);
  reAnswerData.append('is_lead', localStorage.getItem('is_lead'));
  // tslint:disable-next-line: max-line-length
  return this.http.post<any>('https://partner.hansmatrimony.com/api/reply', reAnswerData).subscribe(
    (data: any) => {
      this.Analytics('Profile Reanswered', 'Profile Reanswered From History', answer );
      console.log(answer);
      console.log(num);
      console.log(id);
      console.log(data);
      this.showProfileOrMessage(data, num);
    }, (error: any) => {
      console.log(error);
    });
}
     showProfileOrMessage(data, num) {
        if (data.message.type === 'profile') {
          const values = data.message.apiwha_autoreply;
          console.log(values.photo);
          this.showProfile(values, num);
    } else {
      this.botui.action.button({
        action: [{
          text: this.changeShowButtonLanguage(this.currentLanguage), value: 'SHOW'
        }]
      }).then(res => {
        this.repeatMEssage(res.value, num);
      });
    }
    }

    showProfile(values, num) {
      return new Promise(() => {
        this.botui.message.add({
          loading: true,
            delay: 500,
           type: 'html',
           content:
           // tslint:disable-next-line: max-line-length
          '<img id="selectedProfilePic" src=' + this.getProfilePhoto(values.photo, values.gender) + ' style="width: 100%;border-radius:10px" alt="' + this.setName(values.name, values.mobile) + '"> <br>' +
           // tslint:disable-next-line: max-line-length
           '<div style="text-align:center"><b>' + this.setName(values.name, values.mobile) + this.setCity(values.city) + '</b></div> ' +
           // tslint:disable-next-line: max-line-length
           '<div style="text-align:center"><i>' + this.setValue(values.about) + '</i></div> <br>' +
           '<table style="width:100%;height:40px">' +
           '<tr>' +
           // tslint:disable-next-line: max-line-length
           '<th style="width:50%;text-align:center;background:#25d366;border-bottom-left-radius:10px">' + '<div><button id="whatsappBtn" style="width:100%;font-weight: bolder;font-size:16px;color:white;background:#25d366;border: none;"><img src="../../assets/whatsapp.webp" style="width:30px"> Share Profile</button></div><a id="whtLink"></a></th>' +
           // tslint:disable-next-line: max-line-length
           '<th style="width:50%;text-align:center;background:#222831;border-bottom-right-radius:10px">' + '<div><button id="downloadBtn" style="width:100%;font-weight: bolder;font-size:16px;color:white;background:#222831;border: none;"><img src="../../assets/download.svg" style="width:20px"> Save Profile</button></div><a  target="_blank" id="downLink"></a></th>' +
             '</tr>' +
             '</table></div>'
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
                  '</table>'
  });
      }).then(() => {
        setTimeout(() => {
          this.openImageModal();
          this.whatsappShare(this.setName(values.name, values.mobile), localStorage.getItem('id'), values.id, values.mobile);
         }, 1000);
      }).then(() => {
        return this.botui.action.button({
          action: [{
            text: this.changeShowButtonLanguage(this.currentLanguage), value: 'SHOW'
          }]
        }).then(res => {
          this.repeatMEssage(res.value, num);
        });
      });
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
      content: '<img id="selectedProfilePic" src=' + this.getProfilePhotoHistory( personal.carousel, personal.photo, personal.gender) + ' style="width: 100%;border-radius: 10px" alt="' + this.setNameSelectedProfile(personal.name) + '"><br>' +
      // tslint:disable-next-line: max-line-length
      '<div style="text-align:center"><b>' + this.setNameSelectedProfile(personal.name)  + this.setCity(family.city) +  '</b></div><br>' +
                   '<div style="text-align:center"><i>' + this.setValue(personal.about) + '</i></div> <br>' +
                   '<table style="width:100%;height:40px">' +
                   '<tr>' +
                   // tslint:disable-next-line: max-line-length
                   '<th style="width:50%;text-align:center;background:#25d366;border-bottom-left-radius:10px">' + '<div><button id="whatsappBtn" style="width:100%;font-weight: bolder;font-size:16px;color:white;background:#25d366;border: none;"><img src="../../assets/whatsapp.webp" style="width:30px"> Share Profile</button></div><a id="whtLink"></a></th>' +
                   // tslint:disable-next-line: max-line-length
                   '<th style="width:50%;text-align:center;background:#222831;border-bottom-right-radius:10px">' + '<div><button id="downloadBtn" style="width:100%;font-weight: bolder;font-size:16px;color:white;background:#222831;border: none;"><img src="../../assets/download.svg" style="width:20px"> Save Profile</button></div><a  target="_blank" id="downLink"></a></th>' +
                     '</tr>' +
                     '</table></div>'
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
      '<tr>' + this.LifeStatus(family.father_status, family.mother_status, family.occupation, family.occupation_mother) + '</tr>' +
        '</table>'

    }).then(() => {
      this.openImageModal();
      this.whatsappShare(this.setNameSelectedProfile(personal.name), localStorage.getItem('id'), personal.id, family.mobile);
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
          console.log(this.dailyQuotaReached);
          if (this.dailyQuotaReached) {
          this.botui.action.button({
            action: [{
              text: this.changeShowButtonLanguage(this.currentLanguage), value: 'SHOW'
            }]
        }).then(res => {
            if (res) {
              this.repeatMEssage(res.value, this.currentContact);
            }
        });
      }
          this.botui.message.add({
          type: 'html',
          content: '<div style="text-align:center">' + this.setButton('checked.svg', 'YES', 'none') +
          this.setButton('star.svg', 'SHORTLIST', 'none') +
          this.setButton('cancel.svg', 'NO', 'none') + '</div>'
        }).then((index) => {
          this.changeButtonBackground();
          this.currentIndex = index;
          document.querySelectorAll<HTMLElement>('.customBotButton').forEach( element => {
            element.onclick = () => {
              console.log('Clicked');
              this.updateBotValue(index, element);
              (window as any).ga('send', 'event', 'ChatBot Response', element.id, {
                hitCallback: () => {
                  console.log('Tracking Bot Response entered successful');
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
              if (this.promptData != null) {
                this.openPromptDialog();
              }
              console.log('chose' + element.id);
              console.log('Reanswered');
              this.profileReAnswer(this.currentContact, personal.id, element.id);
            };
          });
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
                    content: '<img id="selectedProfilePic" src=' + this.getProfilePhotoHistory(valueInMessage.carousel, valueInMessage.photo,  valueInMessage.gender) + ' style="width: 100%;border-radius: 10px" alt="' + this.setName(valueInMessage.name, valueInMessage.mobile) + '" >' +
                    // tslint:disable-next-line: max-line-length
                    '<div style="text-align:center"><b>' + this.setName(valueInMessage.name, valueInMessage.mobile) + this.setCity(valueInMessage.city) +  '</b></div>' +
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
  const creditsData = new FormData();
  creditsData.append('id', localStorage.getItem('id'));
  creditsData.append('is_lead', localStorage.getItem('is_lead'));
 // tslint:disable-next-line: max-line-length
  return this.http.post<any>('https://partner.hansmatrimony.com/api/getWhatsappPoint', creditsData).subscribe(
   (data: any) => {
      this.points = data.whatsapp_points;
      console.log('credits', this.points);
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
  } else  {
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
                  return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father(Alive)</th>';
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
        localStorage.setItem('is_lead', '');

        this.router.navigateByUrl('/home');
      }

        changeButtonLanguage(type: string) {
        if (type === 'English') {
            document.getElementById('chatText').innerText = 'See Profiles';
            document.getElementById('historyText').innerText = 'History';
            document.getElementById('profileText').innerText = 'My Profile';
            if (this.points && document.getElementById('credit') ) {
              document.getElementById('credit').innerText = 'Credits: ' + this.points;
            }
            return 'See Contact Number';
          } else {
            document.getElementById('chatText').innerText = 'नए रिश्ते';
            document.getElementById('historyText').innerText = 'देखे गए रिश्ते';
            document.getElementById('profileText').innerText = 'मेरा प्रोफाइल';
            if (this.points && document.getElementById('credit') ) {
            document.getElementById('credit').innerText = 'शेष कॉन्टैक्ट नंबर: ' + this.points;
            }
            return 'कांटेक्ट नंबर देखें';
          }
      }

        changeNoButtonLanguage(type: string) {
        setTimeout(() => {
          this.changeNoButtonColor();
          this.changeYesButtonColor();
          this.changeShortButtonColor();
        }, 300);
        if (type === 'English') {
          return 'Reject';
        } else {
          return 'रिजेक्ट';
        }
    }
        changeNoButtonColor() {
      document.querySelectorAll<HTMLElement>('.botui-actions-buttons-button').forEach(element => {
        if (element.innerText === 'No' || element.innerText === 'NO' || element.innerText === 'रिजेक्ट' || element.innerText === 'Reject') {
            element.style.background = 'red';
        }
      });
    }
        changeYesButtonColor() {
      document.querySelectorAll<HTMLElement>('.botui-actions-buttons-button').forEach(element => {
        // tslint:disable-next-line: max-line-length
        if (element.innerText === 'Yes' || element.innerText === 'YES' || element.innerText === 'कांटेक्ट नंबर देखें' || element.innerText === 'See Contact Number' ) {
            element.style.background = 'green';
        }
      });
    }
        changeShortButtonColor() {
      document.querySelectorAll<HTMLElement>('.botui-actions-buttons-button').forEach(element => {
        // tslint:disable-next-line: max-line-length
        if (element.innerText === 'Shortlist' || element.innerText === 'शॉर्टलिस्ट करें' ) {
            element.style.background = '#771144';
        }
      });
    }
        changeShowButtonLanguage(type: string) {
      if (type === 'English') {
        return 'Show More';
      } else {
        return 'और दिखाएं';
      }
    }
        changeBtnTextLanguage(type: string, text: string) {
      if (type === 'English') {
          return text;
      } else {
        switch (text) {
          case 'Renew Plan':
            return 'प्लान देखें';
            case 'Next Match':
            return 'अगला रिश्ता देखें';
            case 'Call Hans Care':
            return 'कॉल हंस केयर';
            case 'See Plans':
              return 'प्लान देखें';
              case 'Next Match':
                return 'अगला रिश्ता देखें';
                case 'Shortlist':
                return 'शॉर्टलिस्ट करें';
      }
    }
  }

        changeHistoryButtonLanguage(type: string) {
      if (type === 'English') {
        return 'History';
      } else {
        return 'देखे गए रिश्ते';
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
        whatsappShare(name: string, loggedId: string, profileId: string, mobile: string) {

    const lId = loggedId;
    this.pId.push(profileId);
    this.pName.push(name);

    document.querySelectorAll<HTMLElement>('#whatsappBtn').forEach((element, index) => {
        element.onclick = () => {
          this.spinner.show();
          this.Analytics('Whatsapp Share', 'Whatsapp Share', 'profile shared through whatsapp');
          console.log(index, 'WhatsApp Clicked' + 'lId:' + lId + 'pId:' + this.pId[index]);
          if (mobile) {
            if (mobile.match('Visible')) {
              this.setWhatsAppLink(loggedId, this.pId[index], '0', index);
            } else {
              this.setWhatsAppLink(loggedId, this.pId[index], '1', index);
            }
          } else {
            this.setWhatsAppLink(loggedId, this.pId[index], '0', index);
          }
      };
    });

    document.querySelectorAll<HTMLElement>('#downloadBtn').forEach((element, index) => {
      element.onclick = () => {
        this.spinner.show();
        this.Analytics('Profile Download', 'Profile Download', 'profile downloaded');
        console.log(index, 'Download Clicked' + 'lId:' + lId + 'pId:' + this.pId[index]);
        if (mobile) {
          if (mobile.match('Visible')) {
            this.setDownloadLink(loggedId, this.pId[index], '0', index);
          } else {
            this.setDownloadLink(loggedId, this.pId[index], '1', index);
          }
        } else {
          this.setDownloadLink(loggedId, this.pId[index], '0', index);
        }
       };
    });
  }

        setWhatsAppLink(loggedId: string, profileId: string, full: string, index: number) {
    const pdfData = new FormData();
    pdfData.append('id', loggedId);
    pdfData.append('profile_to_send_id', profileId);
    pdfData.append('full', full);
    pdfData.append('is_lead', localStorage.getItem('is_lead'));
    return this.http.post<any>('https://partner.hansmatrimony.com/api/downloadPdf', pdfData).subscribe(data => {
  console.log(data);
  if (data.status === 1) {
    const whatLink = document.querySelectorAll<HTMLElement>('#whtLink');
    this.spinner.hide();
    this.ngxNotificationService.info('Sharing on Whatsapp');
    if (whatLink) {
        // tslint:disable-next-line: max-line-length
        whatLink[index].setAttribute('href', 'whatsapp://send?text=*हंस%20मॅट्रिमोनी*%20पर%20मुझे%20ये%20रिश्ता%20पसंद%20आया%20है।%20आपकी%20क्या%20राय%20है?%20' + data.url );
        whatLink[index].click();
    }
  }
  }, err => {
    console.log(err);
    this.ngxNotificationService.error('Error Occured');
  });
 }
        setDownloadLink(loggedId: string, profileId: string, full: string, index: number) {
  const pdfData = new FormData();
  pdfData.append('id', loggedId);
  pdfData.append('profile_to_send_id', profileId);
  pdfData.append('full', full);
  pdfData.append('is_lead', localStorage.getItem('is_lead'));
  return this.http.post<any>('https://partner.hansmatrimony.com/api/downloadPdf', pdfData).subscribe(data => {
  console.log(data);
  if (data.status === 1) {
    const downloadLink = document.querySelectorAll<HTMLElement>('#downLink');
    this.spinner.hide();
    this.ngxNotificationService.info('Downloading your file');
    if (downloadLink) {
      // tslint:disable-next-line: max-line-length
      downloadLink[index].setAttribute('href', data.url);
      downloadLink[index].click();
  }
  }
  }, err => {
    console.log(err);
    this.ngxNotificationService.error('Error Occured');
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

        myHideFunctionThree() {
    // id - profile id,
    // status - tutorial status
     const walkthroughStatusUpdate = new FormData();
     walkthroughStatusUpdate.append('id', localStorage.getItem('id'));
     walkthroughStatusUpdate.append('status', '1');
     walkthroughStatusUpdate.append('is_lead', localStorage.getItem('is_lead'));

     console.log('id', localStorage.getItem('id'));
     console.log('status', '1');

    //  return this.http.post<any>('https://partner.hansmatrimony.com/api/updateStatus', walkthroughStatusUpdate).subscribe(
    //    (data: any) => {
    //      console.log(data);
    //      if (this.showWalkthrough === true) {
    //       //  this.openAwardDialog();
    //      }
    //    }, err => {
    //      console.log(err);
    //    }
    //  );
   }
        howToUse() {
    this.Analytics('tutorial', 'tutorial', 'opted tutorial');
    if (this.history !== 'chatbot') {
      this.changeToBot();
    }
    console.log(this.innerHeight);
    this.botui.message.add({
      type: 'html',
      human: true,
      content: '<p>&#127916 Tutorial</p>'
    });
    setTimeout(() => {
      this.walkthroughStatus = true;
      }, 1000);
    setTimeout(() => {
      this.walkthroughStatus = false;
      this.walkthroughStatusTwo = false;
      this.walkthroughStatusThree = false;
    }, 3000);
   }
        openAwardDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    const dialogRef = this.dialog.open(CreditAwardComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
          this.getCredits();
          this.show_ad = 0;
    });
    document.querySelector('.mat-dialog-container').setAttribute('style', 'padding:0px');
   }

        openPreferenceWideningDialog() {
    this.spinner.show();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
     // tslint:disable-next-line: max-line-length
    const getProfileData = new FormData();
    getProfileData.append('id', localStorage.getItem('id'));
    getProfileData.append('contacted', '1');
    if (localStorage.getItem('is_lead')) {
    getProfileData.append('is_lead', localStorage.getItem('is_lead'));
    } else {
      getProfileData.append('is_lead', '1');
    }

    console.log('id', localStorage.getItem('id'));
    console.log('contacted', '1');

    this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', getProfileData).subscribe(
       (data: any) => {
        console.log(data);

        if (data && data.family && data.family.caste) {
        this.http.get<{ mapping_id: number, castes: any }>('https://partner.hansmatrimony.com/api/caste_mapping').subscribe(
          res => {
            this.casteMap = res;
            console.log(this.casteMap);
            this.casteMap.forEach(element => {
                element.castes.split(',').forEach(caste => {
                    if (caste.toLowerCase().match(data.family.caste) && caste.length === data.family.caste.length) {
                      const mapId = element.mapping_id;
                      if (mapId === 1) {
                         return this.selectedMapName = 'Punjabi';
                      } else if (mapId === 2) {
                        return this.selectedMapName = 'Brahmin';
                      } else {
                        console.log(this.selectedMapName, mapId);
                        return this.selectedMapName = 'Agarwal';
                      }
                    }
                  });
      });
            if (data) {
        if (this.selectedMapName && this.selectedMapName !== '') {
          dialogConfig.data = {
            Caste: this.selectedMapName,
            PreferenceTable: data.preferences,
            ProfileTable: data.profile,
            Gender: data.profile.gender
          };
         } else {
          dialogConfig.data = {
            Caste: 'All',
            PreferenceTable: data.preferences,
            ProfileTable: data.profile,
            Gender: data.profile.gender
         };
          this.spinner.hide();
          const dialogRef = this.dialog.open(PreferenceWideningComponent, dialogConfig);
          dialogRef.afterClosed().subscribe( data => {
          if (data) {
            if (data.success === 'success') {
              this.repeatMEssage('SHOW', this.currentContact);
              }
          }
        });
          document.querySelector('.mat-dialog-container').setAttribute('style', 'padding:0px');
        }
      }
          });
        } else {
          this.http.get<{ mapping_id: number, castes: any }>('https://partner.hansmatrimony.com/api/caste_mapping').subscribe(
          res => {
            this.casteMap = res;
            console.log(this.casteMap);
            this.casteMap.forEach(element => {
                element.castes.split(',').forEach(caste => {
                    if (caste.toLowerCase().match(data.profile.caste) && caste.length === data.profile.caste.length) {
                      const mapId = element.mapping_id;
                      if (mapId === 1) {
                         return this.selectedMapName = 'Punjabi';
                      } else if (mapId === 2) {
                        return this.selectedMapName = 'Brahmin';
                      } else {
                        console.log(this.selectedMapName, mapId);
                        return this.selectedMapName = 'Agarwal';
                      }
                    }
                  });
      });
            if (data) {
        if (this.selectedMapName && this.selectedMapName !== '') {
          dialogConfig.data = {
            Caste: this.selectedMapName,
            PreferenceTable: this.preferenceTable,
            ProfileTable: data.profile,
            Gender: data.profile.gender
          };
         } else {
          dialogConfig.data = {
            Caste: 'All',
            PreferenceTable: this.preferenceTable,
            ProfileTable: data.profile,
            Gender: data.profile.gender
         };
          this.spinner.hide();
          const dialogRef = this.dialog.open(PreferenceWideningComponent, dialogConfig);
          dialogRef.afterClosed().subscribe( data => {
          if (data) {
            if (data.success === 'success') {
              this.repeatMEssage('SHOW', this.currentContact);
              }
          }
        });
          document.querySelector('.mat-dialog-container').setAttribute('style', 'padding:0px');
        }
      }
          });
        }
       },
       (error: any) => {
        this.spinner.hide();
        console.log(error);
       }
     );
   }
   showVipRishte() {
    this.botui.message.add({
      type: 'html',
      content: '<div><p style="font-size: 18px">मुबारक हो ! आज आपको तीन VIP रिश्ते FREE 👇🏻</p><div>'
    });
    let values;
    const myprofileData = new FormData();
    myprofileData.append('id', '211537');
    myprofileData.append('contacted', '1');
    myprofileData.append('is_lead', '0');

    this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile', myprofileData).subscribe(res => {
    values = res.profile;
    console.log(values);
    for (let index = 0; index < 3; index++) {
    this.botui.message.add({
      loading: true,
        delay: 500,
       type: 'html',
       content: '<div id="vip">' +
       // tslint:disable-next-line: max-line-length
      '<div style="position: relative"><img id="selectedProfilePic" src=' + this.getProfilePhoto('http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + values.photo, values.gender) + ' style="width: 100%;border-radius:10px;" alt="' + this.setName(values.name, values.mobile) + '"><img style="position: absolute; width: 70px;top: 10px;right: 10px;" src="../../assets/vipTag.svg"> </div><br>' +
       // tslint:disable-next-line: max-line-length
       '<div style="text-align:center;color: white"><b>' + this.setName(values.name, '9910395820') + this.setCity(values.city) + '</b></div> ' +
       // tslint:disable-next-line: max-line-length
       '<div style="text-align:center"><i>' + this.setValue(values.about) + '</i></div> <br>' +
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
                         '</table> </div>'
     }).then(() => {
       setTimeout(() => {
        // tslint:disable-next-line: max-line-length
        document.querySelectorAll<HTMLElement>('.botui-message-content' && '.html' && '#vip')[index].parentElement.parentElement.style.background = '#FF1493';
       }, 500);
     });
    setTimeout(() => {
      this.changeButtonColor('VIP');
     }, 500);
    this.botui.action.button({
      action: [{
        text: 'डिटेल्स के लिए कॉल हंस केयर',
        value: 'CALL'
      },
      {
        text: 'VIP प्लान देखें',
        value: 'PLAN'
      },
    ]
  }).then(res => {
    switch (res.value) {
      case 'CALL':
        window.open('tel:9697989697');
        break;

        case 'PLAN':
        this.router.navigateByUrl('subscription');
        break;

      default:
        break;
    }
    });
    }
    }, err => {
        console.log(err);
    });
   }
   changeButtonColor( text) {
     switch (text) {
       case 'VIP':
        document.querySelectorAll<HTMLElement>('.botui-actions-buttons-button').forEach(element => {
          if (element.innerText.match('VIP')) {
              element.style.background = '#FF1493';
          }
        });
        break;

        case 'PLAN':
        document.querySelectorAll<HTMLElement>('.botui-actions-buttons-button').forEach(element => {
          if (element.innerText.match('PLAN')) {
              element.style.background = 'linear-gradient(to right top,#285fdd,#0073e9,#0085f2,#0097f9,#00a8ff)';
          }
        });
        break;

        case '₹':
          document.querySelectorAll<HTMLElement>('.botui-actions-buttons-button').forEach(element => {
            if (element.innerText.includes('₹')) {
                element.style.background = 'linear-gradient(to right top,#285fdd,#0073e9,#0085f2,#0097f9,#00a8ff)';
                element.style.fontSize = '25px';
            }
          });
          break;

        case 'अगला रिश्ता देखें':
          document.querySelectorAll<HTMLElement>('.botui-actions-buttons-button').forEach(element => {
            if (element.innerText.includes('अगला रिश्ता देखें')) {
                element.style.background = 'green';
            }
          });
          break;

       default:
         break;
     }

  }

  After3no() {
    this.botui.message.add({
      loading: true,
        delay: 500,
       type: 'html',
       content: '<div id="3no">' +

       '<div><img style="width: 100%" src="../../assets/threenopic.png" alt="three no">' +
      '<ul style="margin-top:20px;font-size:18px"> <li> पर्सनल + VIP प्लान </li>' +
      '<li> 35 ,000 रिश्ते </li>' +
      '<li> कुंडली वाले रिश्ते </li>' +
      '<li> मोबाइल नंबर + पूरा पता </li> </ul>' +
      '</div> </div>'
    }).then(() => {
      setTimeout(() => {
        this.changeButtonColor('PLAN');
        this.changeButtonColor('अगला रिश्ता देखें');
       }, 500);
      this.botui.action.button({
        action: [
          {
            text: 'PLAN देखें',
            value: 'PLAN'
          },
          {
          text: 'कॉल हंस केयर',
          value: 'CALL'
        },
        {
          text: 'अगला रिश्ता देखें',
          value: 'SHOW'
        },
      ]
    }).then(res => {
          switch (res.value) {
            case 'PLAN':
              this.router.navigateByUrl('subscription');
              break;
              case 'CALL':
                window.open('tel:9697989697');
                this.repeatButton();
                break;
                case 'SHOW':
                this.repeatMEssage('SHOW', this.currentContact);
                break;

            default:
              break;
          }
    });
    });
  }
  repeatButton() {
    setTimeout(() => {
      this.changeButtonColor('PLAN');
      this.changeButtonColor('अगला रिश्ता देखें');
     }, 500);
    this.botui.action.button({
      action: [
        {
          text: 'PLAN देखें',
          value: 'PLAN'
        },
      {
        text: 'अगला रिश्ता देखें',
        value: 'SHOW'
      },
    ]
  }).then(res => {
    switch (res.value) {
      case 'PLAN':
        this.router.navigateByUrl('subscription');
        break;
          case 'SHOW':
          this.repeatMEssage('SHOW', this.currentContact);
          this.repeatButton();
          break;
      default:
        break;
    }
});
  }

exhaustedProfile() {
  let timerMax = Math.floor(15 * 60 * 1000);
  let timerMaxSeconds = Math.floor(60 * 1000);
  let timerCurrent;
  let timerCurrentSecond;
  this.botui.message.add({
    loading: true,
      delay: 500,
     type: 'html',
     content: '<div id="3no">' +

     '<div><img style="width: 100%" src="../../assets/exhaustedpic.png" alt="exhausted profile">' +
    '<ul style="margin-top:20px;font-size:18px">' +
    '<li> कुंडली वाले रिश्ते </li>' +
    '<li> Fresh नए रिश्ते </li>' +
    '<li> पसंदीदा रिश्ते खुद कॉल करेंगे </li> </ul>' +
    '</div>' +
    // tslint:disable-next-line: max-line-length
    '<div style="text-align: center;"><p style="display: inline-block;border: 2px solid red;border-radius:10px;padding-left:20px;padding-right:20px;font-size:18px" id="timer"></p></div>' +
     '</div>'
  }).then(() => {
    setTimeout(() => {
      this.changeButtonColor('₹');
      this.changeButtonColor('अगला रिश्ता देखें');
     }, 500);
    const time = setInterval( () => {
      timerMax = timerMax - 1000;
      timerMaxSeconds = timerMaxSeconds - 1000;
      timerCurrent = Math.floor(timerMax / ( 60 * 1000));
      timerCurrentSecond = Math.floor(timerMaxSeconds / 1000);
      document.getElementById('timer').innerText = (timerCurrent).toString() + 'm: ' + timerCurrentSecond.toString() + 's';
      if (Math.floor(timerCurrentSecond) === 0) {
        timerMaxSeconds = Math.floor(60 * 1000);
      }

      if (Math.floor(timerCurrent) === 0 && Math.floor(timerCurrentSecond) === 0) {
        clearInterval(time);
        document.getElementById('timer').innerText = 'Offer Finished';
      }
    }, 1000);
    this.botui.action.button({
      action: [
        {
          text: '₹3500 - 30 कांटेक्ट नंबर',
          value: 'PLAN3500'
        },
        {
          text: '₹5500 - 60 कांटेक्ट नंबर',
          value: 'PLAN5500'
        },
        {
        text: 'कॉल हंस केयर',
        value: 'CALL'
      },
      {
        text: 'अगला रिश्ता देखें',
        value: 'SHOW'
      },
    ]
  }).then(res => {
        switch (res.value) {
          case 'PLAN':
            this.router.navigateByUrl('subscription');
            break;
            case 'CALL':
              window.open('tel:9697989697');
              this.repeatButton();
              break;
              case 'SHOW':
              this.repeatMEssage('SHOW', this.currentContact);
              break;
              case 'PLAN3500':
              this.subscriptionService.payNowT(3500, 'live', 0, '', '', this.currentContact);
              this.repeatButton();
              break;
              case 'PLAN5500':
                this.subscriptionService.payNowT(5500, 'live', 0, '', '', this.currentContact);
                this.repeatButton();
                break;

          default:
            break;
        }
  });
  });
}


}
