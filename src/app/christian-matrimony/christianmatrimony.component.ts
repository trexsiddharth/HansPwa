import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-christian-matrimony',
  templateUrl: './christian-matrimony.component.html',
})
export class ChristianMatrimonyComponent implements OnInit {

  constructor(
    private titleService:Title,
    private meta:Meta
  ) {
      this.titleService.setTitle('Christian Matrimony | Christian Matrimony Site | Hans Matrimony');
      this.meta.addTag({name:'title',content:'Christian Matrimony | Christian Matrimony Site | Hans Matrimony'});
      this.meta.addTag({name:'description',content:'Find your ideal Christian Brides / Grooms for Matrimony on Hans Matrimony. We provide millions of verified profiles and the Safe & Secured Christian Matrimony Site. Register FREE.'});
      this.meta.addTag({name:'Keywords',content:'Christian Matrimony, Christian Matrimony Site'})
   }

  ngOnInit() {
  }

}
