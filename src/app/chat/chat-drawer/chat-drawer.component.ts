import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LanguageService } from 'src/app/language.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';


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
  langCheck;
  currentLanguage;
  constructor(public languageService: LanguageService,
    private chatService: ChatServiceService,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
    private ngxNotificationService: NgxNotificationService,
    public router: Router,
    public itemService: FindOpenHistoryProfileService,
    public activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    this.languageService.setProfileLanguage();
    this.currentLanguage = localStorage.getItem('language');
    // set already selected language in toggle
    if (localStorage.getItem('language') === 'hindi') {
      this.langCheck = false;
    } else {
      this.langCheck = true;
    }

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
    this.analyticsEvent('User Clicked My Profile From Chat Drawer');
    this.itemService.setChangePrefsClicked(true);
    this.router.navigateByUrl(`chat/my-profile-new/${this.userId}/${this.userIsLead}`);
  }
  openDiscover() {
    this.analyticsEvent('User Clicked Discover From Chat Drawer');
    this.closeSideNav();
    this.itemService.changeTab(1);
  }

  onImageLoadError() {
    this.userpic = '../../../assets/logo_192.png';
  }


  // this will called only if the user is logged in and will open contacted, rejected etc sections.
  openHistoryProfiles(section: string) {
    if (section.indexOf('contact') !== -1) {
      this.analyticsEvent('User Clicked Contacted From Chat Drawer');
      this.router.navigateByUrl(`chat/history/${section}`);
    } else if (section.indexOf('Received') !== -1) {
      this.itemService.changeTab(2);
      this.analyticsEvent('User Clicked Likes You From Chat Drawer');
    } else if (section.indexOf('Shown') !== -1) {
      this.itemService.changeTab(3);
      this.analyticsEvent('User Clicked Liked By Me From Chat Drawer');
    } else {
      this.analyticsEvent('User Clicked Rejected From Chat Drawer');
      this.router.navigateByUrl(`chat/history/${section}`);
    }
    this.closeSideNav();
  }

  logout() {
    this.analyticsEvent('User Clicked Logout From Chat Drawer');
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
  customerSupport() {
    this.router.navigateByUrl('chat/customer-support/');
  }

  getCallBack() {
    this.router.navigateByUrl('chat/getcallback/');
    // this.spinner.show();
    // const interestForm = new FormData();
    // interestForm.append('id', localStorage.getItem('id'));
    // interestForm.append('is_lead', localStorage.getItem('is_lead'));
    // this.http.post<any>('https://partner.hansmatrimony.com/api/updateCallBack', interestForm).subscribe(
    //   data => {
    //     console.log(data);
    //     if (data.status === 1) {
    //       this.analyticsEvent('Requested For A Callback From Chat Drawer');
    //       this.ngxNotificationService.success('We will get back to soon!!');
    //       this.spinner.hide();
    //       this.closeSideNav();
    //     } else {
    //       this.ngxNotificationService.error('Something Went Wrong, Please try again later');
    //       this.spinner.hide();
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //     this.ngxNotificationService.error('Something Went Wrong, Please try again later');
    //     this.spinner.hide();
    //   }
    // );
  }
  langChanged(event) {
    console.log(event.checked);
    if (event.checked) {
      localStorage.setItem('language', 'english');
      this.languageService.setCurrentLanguage('english');
    } else {
      localStorage.setItem('language', 'hindi');
      this.languageService.setCurrentLanguage('hindi');
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

  openSubscriptionOffer() {
    this.analyticsEvent('User Clicked Subscription Offer From Chat Drawer');
    this.itemService.openTodaysPopupAd();
  }
}
