import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LanguageService } from 'src/app/language.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';


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
    this.router.navigate(['user-profile', this.userId, this.userIsLead], {relativeTo: this.activatedRoute});
  }

  onImageLoadError() {
    this.userpic = '../../../assets/logo_192.png';
  }


  // this will called only if the user is logged in and will open contacted, rejected etc sections.
  openHistoryProfiles(section: string) {
    this.router.navigate(['history', section], {relativeTo: this.activatedRoute});
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

}
