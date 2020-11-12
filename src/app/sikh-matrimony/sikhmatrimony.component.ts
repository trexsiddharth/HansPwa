import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-sikh-matrimony',
  templateUrl: './sikh-matrimony.component.html',
})
export class SikhMatrimonyComponent implements OnInit {

  constructor(
    private titleService:Title,
    private meta:Meta
  ) {
      this.titleService.setTitle('Sikh Matrimony | Sikh Matrimony Site | Hans Matrimony');
      this.meta.addTag({name:'title',content:'Sikh Matrimony | Sikh Matrimony Site | Hans Matrimony'});
      this.meta.addTag({name:'description',content:'Find your ideal Sikh Brides / Grooms for Matrimony on Hans Matrimony. We provide millions of verified profiles and the Safe & Secured Sikh Matrimony Site. Register FREE.'});
      this.meta.addTag({name:'Keywords',content:'Sikh Matrimony, Sikh Matrimony Site'})
   }

  ngOnInit() {
  }

}
