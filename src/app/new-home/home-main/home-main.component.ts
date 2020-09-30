import { Component, OnInit, ViewChild } from '@angular/core';
import { NewHomeService } from '../new-home.service';
import { LanguageService } from 'src/app/language.service';
//import { DragScrollComponent } from 'ngx-drag-scroll';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    autoWidth: true,
    // merge: true,
    // mergeFit: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      }
    }
  }
  constructor(public homeService: NewHomeService,
    public languageService: LanguageService) { }

  ngOnInit() {

  }
  openPlaystore() {
    window.open('https://play.google.com/store/apps/details?id=com.twango.me');
  }
}
