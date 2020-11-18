import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-hindu-matrimony',
  templateUrl: './hindu-matrimony.component.html',
  styleUrls: ['./hindu-matrimony.component.css']
})
export class HinduMatrimonyComponent implements OnInit {

  constructor(
    private titleService:Title,
    private meta:Meta
  ) {
      this.titleService.setTitle('Hindu Matrimony | Hindu Matrimony Site | Hans Matrimony');
      this.meta.addTag({name:'title',content:'Hindu Matrimony | Hindu Matrimony Site | Hans Matrimony'});
      this.meta.addTag({name:'description',content:'Find your ideal Gujarati Brides / Grooms for Matrimony on Hans Matrimony. We provide millions of verified profiles and the Safe & Secured Gujarati Matrimony Site. Register FREE.'});
      this.meta.addTag({name:'Keywords',content:'Hindu Matrimony, Hindu Matrimony Site'})
   }

  ngOnInit() {
  }

}
