import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-jain-matrimony',
  templateUrl: './jain-matrimony.component.html',
})
export class JainMatrimonyComponent implements OnInit {

  constructor(
    private titleService:Title,
    private meta:Meta
  ) {
      this.titleService.setTitle('');
      this.meta.addTag({name:'title',content:'Jain Matrimony | Jain Matrimony | Hans Matrimony'});
      this.meta.addTag({name:'description',content:' Find your ideal Jain Brides / Grooms for Matrimony on Hans Matrimony. We provide millions of verified profiles and the Safe & Secured Jain Matrimony Site. Register FREE.'});
      this.meta.addTag({name:'Keywords',content:'Jain Matrimony, Jain Matrimony Site'})
   }

  ngOnInit() {
  }

}
