import { Component, OnInit, ViewChildren } from '@angular/core';
import { NewHomeService } from './new-home.service';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {
  langCheck = false;

  constructor(public homeService: NewHomeService, public languageService: LanguageService) { }

  ngOnInit() {
    console.log(this.languageService.getCurrentLanguage());
    if (this.languageService.getCurrentLanguage() === 'hindi') {
      this.langCheck = false;
    } else if (this.languageService.getCurrentLanguage() === 'english')  {
      this.langCheck = true;
    }
    this.languageService.setHomeLang(localStorage.getItem('language'));
  }

  sendWhatsAppLink() {
    window.open('http://wa.me/918368090821?text=We%20are%20interested%20in%20Registering%20for%20Personalized%20Services');
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

}
