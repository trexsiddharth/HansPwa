import { Component, OnInit, ViewChild } from '@angular/core';
import { NewHomeService } from '../new-home.service';
import { LanguageService } from 'src/app/language.service';
//import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor(public homeService: NewHomeService,
    public languageService: LanguageService) { }

  ngOnInit() {

  }
  openPlaystore() {
    window.open('https://play.google.com/store/apps/details?id=com.twango.me');
  }
}
