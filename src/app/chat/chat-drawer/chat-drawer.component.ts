import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LanguageService } from 'src/app/language.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';


@Component({
  selector: 'app-chat-drawer',
  templateUrl: './chat-drawer.component.html',
  styleUrls: ['./chat-drawer.component.css']
})
export class ChatDrawerComponent implements OnInit {
  @Input() drawerReference: MatSidenav;
  username;
  userpic = '../../../assets/logo_192.png';
  userId;
  userIsLead;
  constructor(public languageService: LanguageService,
              private chatService: ChatServiceService,
              private spinner: NgxSpinnerService,
              private http: HttpClient,
              private ngxNotificationService: NgxNotificationService,
              public router: Router,
              public activatedRoute: ActivatedRoute) { }

  ngOnInit() {

      // user authorized
    this.chatService.authorized.subscribe(
        data => {
          if (data) {
            this.username = data.name;
            this.userpic = data.photo;
            this.userId = data.id;
            this.userIsLead = data.isLead;
          }
        }
      );
  }


  openUserProfile() {
    this.router.navigateByUrl(`chat/user-profile/${this.userId}/${this.userIsLead}`);
  }
  openDiscover() {
    this.router.navigateByUrl('chat/discover/open');
  }

  onImageLoadError() {
    this.userpic = '../../../assets/logo_192.png';
  }


  // this will called only if the user is logged in and will open contacted, rejected etc sections.
  openHistoryProfiles(section: string) {
    this.router.navigateByUrl(`chat/history/${section}`);
  }

  logout() {
    let lang = localStorage.getItem('language');
    localStorage.clear();
    localStorage.setItem('language', lang);
    this.drawerReference.toggle();
    // ab home pe redirect karna hai
    this.router.navigate(['/']);
  }
  closeSideNav() {
    this.drawerReference.toggle();
  }

  premiumInterest() {
    this.spinner.show();
    const interestForm = new FormData();
    interestForm.append('id', localStorage.getItem('id'));
    interestForm.append('is_lead', localStorage.getItem('is_lead'));
    interestForm.append('interest_profile', localStorage.getItem('id'));
    this.http.post<any>('https://partner.hansmatrimony.com/api/insertPremiumInterest', interestForm).subscribe(
      data => {
        console.log(data);
        this.ngxNotificationService.error('We will get back to soon!!');
        this.spinner.hide();
        this.closeSideNav();
      },
      err => {
        console.log(err);
        this.ngxNotificationService.error('Something Went Wrong, Please try again later');
        this.spinner.hide();
      }
    );
  }

}
