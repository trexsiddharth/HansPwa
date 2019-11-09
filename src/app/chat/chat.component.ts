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
import { style } from '@angular/animations';
import { when } from 'q';

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
  profile: any;
  messageRecieved: string;
  personal: any;
  button: String;
  Data: any;
  given: String;
  Data1: any;
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
    public dialog: MatDialog
  ) {
    this.answer = this._formBuilder.group({
      ans: [''],
    });
    console.log(this.history);
    this.history = 'chatbot';
  }

  ngOnInit() {
    console.log(this.promptService.getPrompt());
    this.promptData = this.promptService.getPrompt();
    this.innerWidth = window.innerWidth;
    this.botui =  BotUI('my-botui-app');
    this.spinner.hide();
    localStorage.setItem('id', '');
    this.currentUrl = this.router.url.substring(13);
    console.log(this.currentUrl);
    if (localStorage.getItem('mobile_number')) {
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
      this.currentContact = this.currentUrl;
      this.showHistoryMessages(this.currentUrl);
      this.spinner.show();
  } else {
    this.botui.message.add({
      type: 'html',
      content: '<h6>कृपया अपना १० अंको का मोबाइल नंबर डालें</h6>'
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
   checkUrl(num: string): Observable<any> {
       return this.http.get<any>(' https://partner.hansmatrimony.com/api/auth', {params: { ['phone_number'] : num}});
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
                   content: '<img src=' + this.getProfilePhoto(values.photo, values.gender) + ' style="width: 100%;border-radius:10px"> <br>' +
                   '<div style="text-align:center"><b>' + values.name + '</b></div> ' +
                   '<div style="text-align:center"><i>' + this.setValue(values.about) + '</i></div> <br>'
                 }).then(() => {
                   if (values.language === 'English') {
                     this.botui.message.add({
                       loading: true,
                       delay: 1000,
                       type: 'html',
                       // tslint:disable-next-line: max-line-length
                       content: '<b> &#128100 Personal Details</b> <br> <br>' +
                       'Name: ' + values.name + '<br>' +
                       // tslint:disable-next-line: max-line-length
                      '<table style="width:100%;background:#f5f5f5">' +
                      '<tr>' +
                      // tslint:disable-next-line: max-line-length
                      '<th>' + this.setValue(values.profession) + '<br>' + values.education + '</th>' +
                      '<th>' + this.setValue(values.monthly_income) + '<br> </th>' +
                       '<th>Age</th>' +
                        '</tr>' +
                        '</table>' +
                       // tslint:disable-next-line: max-line-length
                       this.profileSet('Age: ' , String(Math.floor((Date.now() - new Date(values.birth_date).getTime()) / (1000 * 60 * 60 * 24 * 365)))) +
                       this.profileSet('Height: ', this.getHeight(Number(values.height))) +
                       this.profileSet('Weight: ', values.weight) +
                       this.profileSet('Religion: ', values.religion) +
                       this.profileSet('Caste: ', values.caste) +
                       this.profileSet('Mobile Number: ', values.mobile) +
                       this.profileSet('Food Choice: ', values.food_choice) +
                       this.profileSet('Locality: ', values.locality) +
                       this.profileSet('Marital Status: ', values.marital_status) +
                       this.profileSet('Disability: ', values.disability) + ' <br> <br>'
                        +
                       '<b> &#9803 Horoscope Details</b> <br><br>' +
                       this.profileSet('Birth Date: ', values.birth_date) +
                       this.profileSet('Bith Place: ', values.birth_place) +
                       this.profileSet('Bith Time: ', values.birth_time) +
                       this.profileSet('Manglik: ', values.manglik) + ' <br> <br>'
                       +
                       '<b> &#128218 Education Details</b> <br><br>' +
                       this.profileSet('Education: ', values.education) +
                       this.profileSet('Degree: ', values.degree) +
                       this.profileSet('College: ', values.college) + ' <br><br>'
                       +
                       '<b> &#128188 Work Details</b> <br><br>' +
                       this.profileSet('Occupation: ', values.occupation) + '<br>' +
                       this.profileSetIncome('Annual Income: ', String(values.monthly_income)) +
                       this.profileSet('Profession: ', values.profession) +
                       this.profileSet('Working City: ', values.working_city) + ' <br><br>'
                       +
                       '<b> &#128106 Family Details</b> <br><br>' +
                       this.profileSet('Family Type: ', values.family_type) +
                       this.profileSet('House Type: ', values.house_type) +
                       this.profileSet('Mother Status: ', values.mother_status) +
                       this.profileSet('Father Status: ', values.father_status) +
                       this.profileSet('Mothers Occupation: ', values.mother_occupation) +
                       this.profileSet('Fathers Occupation: ', values.father_occupation) +
                       this.profileSetIncome('Family Income: ', String(values.family_income)) +
                       this.profileSet('Married Brothers: ', values.married_sons) +
                       this.profileSet('Married Sisters: ', values.married_daughters) +
                       this.profileSet('Unmarried Brothers: ', values.unmarried_sons) +
                       this.profileSet('UnMarried Sisters: ', values.unmarried_daughters)
                   }).then(() => {
                       if (data.buttons.match('Yes' || 'No')) {
                         return this.botui.action.button({
                           cssClass: 'styleButton',
                           action: [
                             { text: 'YES', value: 'YES'},
                             {text: 'NO', value: 'NO' }
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
                        this.answer = res.value;
                        console.log('chose' + res.value);
                        this.repeatMEssage(res.value, mob);
                       });
                       } else if (data.buttons.match('Show')) {
                         return this.botui.action.button({
                           action: [
                             { text: 'SHOW', value: 'SHOW'},
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
                   } else {
                     this.botui.message.add({
                      loading: true,
                      delay: 500,
                       type: 'html',
                       // tslint:disable-next-line: max-line-length
                       content:
                      //  '<b> &#128100 पर्सनल डिटेल्स</b> <br> <br>' +
                      // line -0
                         '<table style="width:100%;background:white;border-radius:7px;font-size:12px;margin-top: 10px;padding-left:5px">' +
                          '<tr>' +
                            // tslint:disable-next-line: max-line-length
                          '<th style="width:50%;padding: 5px 0px 5px 10px;">' + this.setHiddenValue('../assets/phone.svg', values.mobile) + '</th>' +
                          // tslint:disable-next-line: max-line-length
                          '<th style="width:50%">' + this.setHiddenValue('../assets/locationblue.svg', values.city) + '</th>' +
                            '</tr>' +
                            '</table>' +
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
                        '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/graduation.svg"></div><div>' + this.setValue(values.profession) + '<br>' + this.setValue(values.education) + '</div></th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/rupee.svg">' + this.SetIncome(values.monthly_income) + ' LPA </th>' +
                        // tslint:disable-next-line: max-line-length
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/locationblue.svg">' + this.setValue(values.locality) + '</th>' +
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
                        '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/moneybag.svg">' + this.SetIncome(values.family_income) + ' LPA</th>' +
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

                      // tslint:disable-next-line: max-line-length
                      //  this.profileSet('उम्र: ', String((Math.floor((Date.now() - new Date(values.birth_date).getTime()) / (1000 * 60 * 60 * 24 * 365))))) +
                      //  this.profileSet('कद: ', this.getHeight(Number(values.height))) +
                      //  this.profileSet('वजन: ', values.weight) +
                      //  this.profileSet('धर्म: ', values.religion) +
                      //  this.profileSet('जाती: ', values.caste) +
                      //  this.profileSet('मोबाइल नंबर: ', values.mobile) +
                      //  this.profileSet('खान-पान: ', values.food_choice) +
                      //  this.profileSet('पता: ', values.locality) +
                      //  this.profileSet('वैवाहिक स्तिथि: ', values.marital_status) +
                      //  this.profileSet('विकलांगता: ', values.disability) + ' <br> <br>'
                      //   +
                      //  '<b> &#9803 होरोस्कोप डिटेल्स</b> <br><br>' +
                      //  this.profileSet('जन्म दिवस: ', values.birth_date) +
                      //  this.profileSet('जन्म स्थान: ', values.birth_place) +
                      //  this.profileSet('जन्म समय: ', values.birth_time) +
                      //  this.profileSet('मांगलिक: ', values.manglik) + ' <br> <br>'
                      //  +
                      //  '<b> &#128218 एजुकेशन डिटेल्स</b> <br><br>' +
                      //  this.profileSet('शिक्षा: ', values.education) +
                      //  this.profileSet('डिग्री: ', values.degree) +
                      //  this.profileSet('कॉलेज: ', values.college) + ' <br><br>'
                      //  +
                      //  '<b> &#128188 वर्क डिटेल्स</b> <br><br>' +
                      //  this.profileSet('व्यसाय: ', values.occupation) +
                      //  this.profileSetIncome('वार्षिक आय: ', String(values.monthly_income)) +
                      //  this.profileSet('पेशा: ', values.profession) +
                      //  this.profileSet('कार्य स्थान: ', values.working_city) + ' <br><br>'
                      //  +
                      //  '<b> &#128106 फॅमिली डिटेल्स</b> <br><br>' +
                      //  this.profileSet('परिवार: ', values.family_type) +
                      //  this.profileSet('घर: ', values.house_type) +
                      //  this.profileSet('मदर स्टेटस: ', values.mother_status) +
                      //  this.profileSet('फादर स्टेटस: ', values.father_status) +
                      //  this.profileSet('माता का व्यसाय: ', values.mother_occupation) +
                      //  this.profileSet('पिता का व्यसाय : ', values.father_occupation) +
                      //  this.profileSetIncome('पारिवारिक आय: ', String(values.family_income)) +
                      //  this.profileSet('मैरिड भाई: ', values.married_sons) +
                      //  this.profileSet('मैरिड बेहेने : ', values.married_daughters) +
                      //  this.profileSet('अव्यावाहित भाई: ', values.unmarried_sons) +
                      //  this.profileSet('अव्यावाहित बेहेने : ', values.unmarried_daughters)
                   }).then(() => {
                       if (data.buttons.match('Yes' || 'No')) {
                         return this.botui.action.button({
                           cssClass: 'styleButton',
                           action: [
                             { text: 'YES', value: 'YES'},
                             {text: 'NO', value: 'NO' }
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
                        this.answer = res.value;
                        console.log('chose' + res.value);
                        this.repeatMEssage(res.value, mob);
                       });
                       } else if (data.buttons.match('Show')) {
                         return this.botui.action.button({
                           action: [
                             { text: 'SHOW', value: 'SHOW'},
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
                   }
                 });
             } else {
             this.botui.message.add({
              loading: true,
              delay: 500,
                type: 'html',
                 content: '<h6>' + data.apiwha_autoreply + '</h6>'
             }).then(() => {
                 if (data.buttons.match('No')) {
                   return this.botui.action.button({
                     action: [
                       { text: 'YES', value: 'YES'},
                       {text: 'NO', value: 'NO' }
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
                 }  else if (data.buttons.match('Register')) {
                   this.botui.action.button({
                     action: [{
                       text: 'REGISTER',
                       value: 'REGISTER'
                     }]
                   }).then(() => {
                    if (this.promptData != null) {
                      this.openPromptDialog();
                    }
                    this.router.navigateByUrl('register');
                   });
                 } else if (data.buttons.match('Show')) {
                  return this.botui.action.button({
                    action: [
                      { text: 'SHOW', value: 'SHOW'},
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
                } else {
                  return this.botui.action.button({
                    action: [
                      { text: 'BUY SUBSCRIPTION', value: 'BUY'},
                    ]
                  }).then(() => {
                    if (this.promptData != null) {
                      this.openPromptDialog();
                    }
                    this.router.navigateByUrl('subscription');
                  });
                }
             });
           }
             this.spinner.hide();
           },
           (error: any) => {
             this.ngxNotificationService.error('Something Went Wrong, We are trying again');
             this.repeatMEssage(ans, mob);
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
    if (num != null && num !== '') {
      const carousel: any = JSON.parse(num);
      if (carousel['1'].toString().match('http')) {
        return carousel['1'];
      } else {
        return 'http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/' + carousel['1'];
      }
    } else if (num2 != null && num2 !== '') {
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
        this.getCredits();
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
                  this.repeatMEssage('SHOW', num);
        } else {
          this.spinner.hide();
          this.botui.message.add({
            loading: true,
            delay: 500,
            content: text
          }).then(() => {
            this.botui.action.button({
              action: [{
                text: 'REGISTER',
                value: 'REGISTER'
              }]
            }).then(() => {
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
            content: text
          }).then(() => {
            this.botui.action.button({
              action: [{
                text: 'REGISTER',
                value: 'REGISTER'
              }]
            }).then(() => {
              this.router.navigateByUrl('register');
            });
          });
        } else {
          this.botui.message.add({
            loading: true,
            delay: 500,
            content: 'कृपया अपना १० अंको का मोबाइल नंबर डालें'
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
   return this.http.get<any>(' https://partner.hansmatrimony.com/api/language', {params: { ['phone_number'] : phon, ['language'] : lang}});
 }
 languageEnglish() {
  localStorage.setItem('language', 'English');
  this.langChanged = true;
  console.log('language changed to english');
 }
 languageHindi() {
  localStorage.setItem('language', 'Hindi');
  this.langChanged = true;
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

   setHiddenValue(path: string , value: String): String {
    if (value != null) {
      return '<img style="width:25px" src="' + path + '">' +  value ;
    } else {return ''; }
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
     this.spinner.show();
     if (this.currentContact) {
      this.history = 'history';
      document.getElementById('chat').setAttribute('src', '../../assets/chat.svg');
      document.getElementById('hist').setAttribute('src', '../../assets/thumbs-up-blue.svg');
      document.getElementById('prof').setAttribute('src', '../../assets/avatar.svg');

      document.getElementById('chatText').style.color = '#000000';
      document.getElementById('profileText').style.color = '#000000';
      document.getElementById('historyText').style.color = '#34b7f1';

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
          this.ngxNotificationService.error('Something went wrong with the history, trying again');
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
    document.getElementById('hist').setAttribute('src', '../../assets/thumbs-up.svg');
    document.getElementById('chat').setAttribute('src', '../../assets/chat-blue.svg');
    document.getElementById('prof').setAttribute('src', '../../assets/avatar.svg');
    document.getElementById('chatText').style.color = '#34b7f1';
    document.getElementById('historyText').style.color = '#000000';
    document.getElementById('profileText').style.color = '#000000';
   }
   changeToMyProfile() {
     this.spinner.show();
     if (this.currentContact) {
     this.history = 'myprofile';
     document.getElementById('hist').setAttribute('src', '../../assets/thumbs-up.svg');
     document.getElementById('prof').setAttribute('src', '../../assets/avatar-blue.svg');
     document.getElementById('chat').setAttribute('src', '../../assets/chat.svg');
     document.getElementById('chatText').style.color = '#000000';
     document.getElementById('historyText').style.color = '#000000';
     document.getElementById('profileText').style.color = '#34b7f1';
     console.log(localStorage.getItem('id'));
     // tslint:disable-next-line: max-line-length
     return this.http.post<any>('https://partner.hansmatrimony.com/api/getProfile?id=' + localStorage.getItem('id') + '&contacted=1'  , {params: { ['id'] : localStorage.getItem('id')}}).subscribe(
       (data: any) => {
        console.log(data);
        this.profileData = data.profile;
        this.familyData = data.family;
        this.preferenceData = data.preferences;
        this.spinner.hide();
       },
       (error: any) => {
        this.spinner.hide();
        console.log(error);
        this.ngxNotificationService.error('Something went wrong with profile, trying again');
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
            text: 'SHOW', value: 'SHOW'
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
      content: '<img src=' + this.getProfilePhotoHistory( personal.carousel, personal.photo, personal.gender) + ' style="width: 100%;border-radius: 10px" ><br>' +
      '<div style="text-align:center"><b>' + personal.name  + '</b></div><br>' +
                   '<div style="text-align:center"><i>' + this.setValue(personal.about) + '</i></div> <br>'
    });
     if (localStorage.getItem('language') === 'English') {
      this.botui.message.add({
        type: 'html',
        // tslint:disable-next-line: max-line-length
        content: '<b> &#128100 Personal Details</b> <br> <br>' +
        'Name: ' + personal.name + '<br>' +
        // tslint:disable-next-line: max-line-length
        this.profileSet('Age: ' , String(Math.floor((Date.now() - new Date(personal.birth_date).getTime()) / (1000 * 60 * 60 * 24 * 365)))) +
        this.profileSet('Height: ', this.getHeight(Number(personal.height))) +
        this.profileSet('Weight: ', personal.weight) +
        this.profileSet('Religion: ', family.religion) +
        this.profileSet('Caste: ', family.caste) +
        this.profileSet('Food Choice: ', personal.food_choice) +
        this.profileSet('Marital Status: ', personal.marital_status) +
        this.profileSet('Disability: ', personal.disability) + ' <br> <br>'
         +
        '<b> &#9803 Horoscope Details</b> <br><br>' +
        this.profileSet('Birth Date: ', personal.birth_date) +
        this.profileSet('Bith Place: ', personal.birth_place) +
        this.profileSet('Bith Time: ', personal.birth_time) +
        this.profileSet('Manglik: ', personal.manglik) + ' <br> <br>'
        +
        '<b> &#128218 Education Details</b> <br><br>' +
        this.profileSet('Education: ', personal.education) +
        this.profileSet('Degree: ', personal.degree) +
        this.profileSet('College: ', personal.college) + ' <br><br>'
        +
        '<b> &#128188 Work Details</b> <br><br>' +
        this.profileSet('Occupation: ', personal.occupation) + '<br>' +
        this.profileSetIncome('Annual Income: ', String(personal.monthly_income)) +
        this.profileSet('Profession: ', personal.profession) +
        this.profileSet('Working City: ', personal.working_city) + ' <br><br>'
        +
        '<b> &#128106 Family Details</b> <br><br>' +
        this.profileSet('Family Type: ', family.family_type) +
        this.profileSet('House Type: ', family.house_type) +
        this.profileSet('Mother Status: ', family.mother_status) +
        this.profileSet('Father Status: ', family.father_status) +
        this.profileSet('Mothers Occupation: ', family.occupation_mother) +
        this.profileSet('Fathers Occupation: ', family.occupation) +
        this.profileSetIncome('Family Income: ', String(family.family_income)) +
        this.profileSet('Married Brothers: ', family.married_sons) +
        this.profileSet('Married Sisters: ', family.married_daughters) +
        this.profileSet('Unmarried Brothers: ', family.unmarried_sons) +
        this.profileSet('UnMarried Sisters: ', family.unmarried_daughters) + ' <br><br>'
        +
        '<b> &#9742 Contact Details</b> <br><br>' +
        this.profileSet('Mobile Number: ', family.mobile) +
        this.profileSet('Locality: ', family.locality)

    }).then(() => {
      if (family.mobile) {
        return this.botui.action.button({
          action: [
            { text: 'Show', value: 'Show'}
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
        console.log('Reanswered');
        this.repeatMEssage(res.value, this.currentContact);
       });
      } else {
        return this.botui.action.button({
          action: [
            { text: 'Yes', value: 'Yes'},
            { text: 'No', value: 'No'}
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
        console.log('Reanswered');
        this.profileReAnswer(this.currentContact, personal.id, res.value);
       });
      }
    });
    } else {
      this.botui.message.add({
        type: 'html',
        // tslint:disable-next-line: max-line-length
        content:
        // line -0
        '<table style="width:100%;background:white;border-radius:7px;font-size:12px;margin-top: 10px;padding-left:5px">' +
        '<tr>' +
          // tslint:disable-next-line: max-line-length
        '<th style="width:50%;padding: 5px 0px 5px 10px;">' + this.setHiddenValue('../assets/phone.svg', family.mobile) + '</th>' +
        // tslint:disable-next-line: max-line-length
        '<th style="width:50%">' + this.setHiddenValue('../assets/locationblue.svg', family.city) + '</th>' +
          '</tr>' +
          '</table>' +
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
      '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/graduation.svg"></div><div>' + '<br>'  + this.setValue(personal.profession) + this.setValue(personal.education) + '</div></th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/rupee.svg">' + this.SetIncome(personal.monthly_income) + ' LPA </th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/locationblue.svg">' + this.setValue(family.locality) + '</th>' +
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
      '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/house.svg">' +  this.setHouseType(personal.house_type) + '</th>' +
      // tslint:disable-next-line: max-line-length
      '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/moneybag.svg">' + this.SetIncome(family.family_income) + ' LPA</th>' +
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



        // '<b> &#128100 पर्सनल डिटेल्स</b> <br> <br>' +
        // 'नाम: ' + personal.name + '<br>' +
        // tslint:disable-next-line: max-line-length
        // this.profileSet('उम्र: ', String((Math.floor((Date.now() - new Date(personal.birth_date).getTime()) / (1000 * 60 * 60 * 24 * 365))))) +
        // this.profileSet('कद: ', this.getHeight(Number(personal.height))) +
        // this.profileSet('वजन: ', personal.weight) +
        // this.profileSet('धर्म: ', personal.religion) +
        // this.profileSet('जाती: ', personal.caste) +
        // this.profileSet('खान-पान: ', personal.food_choice) +
        // this.profileSet('वैवाहिक स्तिथि: ', personal.marital_status) +
        // this.profileSet('विकलांगता: ', personal.disability) + ' <br> <br>'
        //  +
        // '<b> &#9803 होरोस्कोप डिटेल्स</b> <br><br>' +
        // this.profileSet('जन्म दिवस: ', personal.birth_date) +
        // this.profileSet('जन्म स्थान: ', personal.birth_place) +
        // this.profileSet('जन्म समय: ', personal.birth_time) +
        // this.profileSet('मांगलिक: ', personal.manglik) + ' <br> <br>'
        // +
        // '<b> &#128218 एजुकेशन डिटेल्स</b> <br><br>' +
        // this.profileSet('शिक्षा: ', personal.education) +
        // this.profileSet('डिग्री: ', personal.degree) +
        // this.profileSet('कॉलेज: ', personal.college) + ' <br><br>'
        // +
        // '<b> &#128188 वर्क डिटेल्स</b> <br><br>' +
        // this.profileSet('व्यसाय: ', personal.occupation) +
        // this.profileSetIncome('वार्षिक आय: ', String(personal.monthly_income)) +
        // this.profileSet('पेशा: ', personal.profession) +
        // this.profileSet('कार्य स्थान: ', personal.working_city) + ' <br><br>'
        // +
        // '<b> &#128106 फॅमिली डिटेल्स</b> <br><br>' +
        // this.profileSet('परिवार: ', family.family_type) +
        // this.profileSet('घर: ', family.house_type) +
        // this.profileSet('मदर स्टेटस: ', family.mother_status) +
        // this.profileSet('फादर स्टेटस: ', family.father_status) +
        // this.profileSet('माता का व्यसाय: ', family.occupation_mother) +
        // this.profileSet('पिता का व्यसाय : ', family.occupation) +
        // this.profileSetIncome('पारिवारिक आय: ', String(family.family_income)) +
        // this.profileSet('मैरिड भाई: ', family.married_sons) +
        // this.profileSet('मैरिड बेहेने : ', family.married_daughters) +
        // this.profileSet('अव्यावाहित भाई: ', family.unmarried_sons) +
        // this.profileSet('अव्यावाहित बेहेने : ', family.unmarried_daughters) + ' <br><br>'
        // +
        // '<b> &#9742 कांटेक्ट डिटेल्स </b> <br><br>' +
        // this.profileSet('मोबाइल नंबर: ', family.mobile) +
        // this.profileSet('पता: ', family.locality)
    }).then(() => {
      if (family.mobile) {
        return this.botui.action.button({
          action: [
            { text: 'Show', value: 'Show'}
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
            { text: 'Yes', value: 'Yes'},
            { text: 'No', value: 'No'}
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
        console.log('Reanswered');
        this.profileReAnswer(this.currentContact, personal.id, res.value);
       });
      }
    });
    }
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
                    content: '<img src=' + this.getProfilePhotoHistory(valueInMessage.carousel, valueInMessage.photo,  valueInMessage.gender) + ' style="width: 100%;border-radius: 10px" >' +
                    '<div style="text-align:center"><b>' + valueInMessage.name + '</b></div>' +
                    '<div style="text-align:center"><i>' + this.setValue(valueInMessage.about) + '</i></div><br>' +

                    // line -0
                    '<table style="width:100%;background:white;border-radius:7px;font-size:12px;margin-top: 10px;padding-left:5px">' +
                    '<tr>' +
                      // tslint:disable-next-line: max-line-length
                    '<th style="width:50%;padding: 5px 0px 5px 10px;">' + this.setHiddenValue('../assets/phone.svg', valueInMessage.mobile) + '</th>' +
                    // tslint:disable-next-line: max-line-length
                    '<th style="width:50%">' + this.setHiddenValue('../assets/locationblue.svg', valueInMessage.city) + '</th>' +
                      '</tr>' +
                      '</table>' +
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
                  '<th style="width:33.33%;padding: 5px 0px 5px 10px;display:flex">' + '<div><img style="width:20px;margin-right:5px;margin-top:25%" src="../assets/graduation.svg"></div><div>' + this.setValue(valueInMessage.profession) + '<br>'  + this.setValue(valueInMessage.education) + '</div></th>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/rupee.svg">' + this.SetIncome(valueInMessage.monthly_income) + ' LPA </th>' +
                  // tslint:disable-next-line: max-line-length
                  '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/locationblue.svg">' + this.setValue(valueInMessage.locality) + '</th>' +
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
                  '<th style="width:33.33%">' + '<img style="width:20px;margin-right:5px" src="../assets/moneybag.svg">' + this.SetIncome(valueInMessage.family_income) + ' LPA</th>' +
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


                    // '<b> &#128100 पर्सनल डिटेल्स</b> <br> <br>' +
                    // 'नाम: ' + valueInMessage.name + '<br>' +
                    // // tslint:disable-next-line: max-line-length
                    // tslint:disable-next-line: max-line-length
                    // this.profileSet('उम्र: ', String((Math.floor((Date.now() - new Date(valueInMessage.birth_date).getTime()) / (1000 * 60 * 60 * 24 * 365))))) +
                    // this.profileSet('कद: ', this.getHeight(Number(valueInMessage.height))) +
                    // this.profileSet('वजन: ', valueInMessage.weight) +
                    // this.profileSet('धर्म: ', valueInMessage.religion) +
                    // this.profileSet('जाती: ', valueInMessage.caste) +
                    // this.profileSet('खान-पान: ', valueInMessage.food_choice) +
                    // this.profileSet('पता: ', valueInMessage.locality) +
                    // this.profileSet('वैवाहिक स्तिथि: ', valueInMessage.marital_status) +
                    // this.profileSet('विकलांगता: ', valueInMessage.disability) + ' <br> <br>'
                    //  +
                    // '<b> &#9803 होरोस्कोप डिटेल्स</b> <br><br>' +
                    // this.profileSet('जन्म दिवस: ', valueInMessage.birth_date) +
                    // this.profileSet('जन्म स्थान: ', valueInMessage.birth_place) +
                    // this.profileSet('मांगलिक: ', valueInMessage.manglik) + ' <br> <br>'
                    // +
                    // '<b> &#128218 एजुकेशन डिटेल्स</b> <br><br>' +
                    // this.profileSet('शिक्षा: ', valueInMessage.education) +
                    // this.profileSet('डिग्री: ', valueInMessage.degree) +
                    // this.profileSet('कॉलेज: ', valueInMessage.college) + ' <br><br>'
                    // +
                    // '<b> &#128188 वर्क डिटेल्स</b> <br><br>' +
                    // this.profileSet('व्यसाय: ', valueInMessage.occupation) +
                    // this.profileSetIncome('वार्षिक आय: ', String(valueInMessage.monthly_income)) +
                    // this.profileSet('पेशा: ', valueInMessage.profession) +
                    // this.profileSet('कार्य स्थान: ', valueInMessage.working_city) + ' <br><br>'
                    // +
                    // '<b> &#128106 फॅमिली डिटेल्स</b> <br><br>' +
                    // this.profileSet('परिवार: ', valueInMessage.family_type) +
                    // this.profileSet('घर: ', valueInMessage.house_type) +
                    // this.profileSet('मदर स्टेटस: ', valueInMessage.mother_status) +
                    // this.profileSet('फादर स्टेटस: ', valueInMessage.father_status) +
                    // this.profileSet('माता का व्यसाय: ', valueInMessage.occupation_mother) +
                    // this.profileSet('पिता का व्यसाय : ', valueInMessage.occupation) +
                    // this.profileSetIncome('पारिवारिक आय: ', String(valueInMessage.family_income)) +
                    // this.profileSet('मैरिड भाई: ', valueInMessage.married_sons) +
                    // this.profileSet('मैरिड बेहेने : ', valueInMessage.married_daughters) +
                    // this.profileSet('अव्यावाहित भाई: ', valueInMessage.unmarried_sons) +
                    // this.profileSet('अव्यावाहित बेहेने : ', valueInMessage.unmarried_daughters)
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
    this.getCredits();
    console.log(error);
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
                      // tslint:disable-next-line: max-line-length
                    return  '<th style="width:100%;padding: 5px 0px 5px 10px;">' + '<img style="width:20px;margin-right:5px" src="../assets/parents.svg">Father(Alive) ->' + fatho + '  & Mother(Alive) -> ' + mothero + ' </th>';
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

}
