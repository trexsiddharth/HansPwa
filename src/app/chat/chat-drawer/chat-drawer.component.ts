import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { LanguageService } from 'src/app/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-drawer',
  templateUrl: './chat-drawer.component.html',
  styleUrls: ['./chat-drawer.component.css']
})
export class ChatDrawerComponent implements OnInit {
  @Input() drawerReference: MatSidenav;
  constructor(public languageService : LanguageService,
              public router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.drawerReference);
    }, 2000);
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
