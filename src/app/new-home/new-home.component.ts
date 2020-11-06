import { Component, OnInit } from '@angular/core';
import { NewHomeService } from './new-home.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {
  // langCheck = false;

  constructor(public homeService: NewHomeService, public languageService: LanguageService) { }


  ngOnInit() {
    // console.log(this.languageService.getCurrentLanguage());
    // lang check is used to set the selected language as user language once user logs in.
    // it will be only set if user changes the language from the current language to other language.
    // if (!localStorage.getItem('language')) {
    //   localStorage.setItem('language', 'english');
    //   this.langCheck = true;
    // }
    // if (localStorage.getItem('language') === 'english') {
    //   this.langCheck = true;
    // } else if (localStorage.getItem('language')  === 'hindi')  {
    //   this.langCheck = false;
    // }
    // this.languageService.setHomeLang(localStorage.getItem('language'));
  }

  sendWhatsAppLink() {
    this.facebookAnalytics();
    window.open('http://wa.me/918766217175?text=We%20are%20interested%20in%20Registering%20for%20Personalized%20Services');
  }

  langChanged(event) {
    console.log(event.checked);
    if (event.checked) {
      this.languageService.languageChangedFromMainStatus = true;
      localStorage.setItem('language', 'english');
      this.languageService.setHomeLang('english');
    } else {
      this.languageService.languageChangedFromMainStatus = true;
      localStorage.setItem('language', 'hindi');
      this.languageService.setHomeLang('hindi');
    }
  }
  openPlaystore() {
    window.open('https://play.google.com/store/apps/details?id=com.twango.me');
  }
  facebookAnalytics() {
    (window as any).fbq('track', 'Contact', {
      value: localStorage.getItem('id'),
      content_name: localStorage.getItem('mobile_number'),
    });
    (window as any).fbq('track', '692972151223870', 'Contact', {
      value: localStorage.getItem('id'),
      content_name: localStorage.getItem('mobiler_number'),
    });
  }

}
