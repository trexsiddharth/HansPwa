import { Component, OnInit } from '@angular/core';
import { NewHomeService } from '../new-home.service';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-home-drawer',
  templateUrl: './home-drawer.component.html',
  styleUrls: ['./home-drawer.component.css']
})
export class HomeDrawerComponent implements OnInit {

  constructor(public homeService: NewHomeService, public languageService: LanguageService) { }

  ngOnInit() {
  }

  logout() {
    let lang = localStorage.getItem('language');
    localStorage.clear();
    localStorage.setItem('language', lang);
    this.homeService.getDrawerInstance().toggle();

    (window as any).FB.logout((response) => {
      console.log(response);
      // Person is now logged out
   });
  }
  openBlog() {
    window.open('https://hansmatrimony.com/blog/?ngsw-bypass=true');
  }
}
