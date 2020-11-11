import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-muslim-matrimony',
  templateUrl: './muslim-matrimony.component.html',
})
export class MuslimMatrimonyComponent implements OnInit {

  constructor(
    private titleService:Title,
    private meta:Meta
  ) {
      this.titleService.setTitle('');
      this.meta.addTag({name:'title',content:'Muslim Matrimony | Muslim Matrimony Site | Hans Matrimony'});
      this.meta.addTag({name:'description',content:' Find your ideal Muslim Brides / Grooms for Matrimony on Hans Matrimony. We provide millions of verified profiles and the Safe & Secured Muslim Matrimony Site. Register FREE.'});
      this.meta.addTag({name:'Keywords',content:'Muslim Matrimony, Muslim Matrimony Site'})
   }

  ngOnInit() {
  }

}
