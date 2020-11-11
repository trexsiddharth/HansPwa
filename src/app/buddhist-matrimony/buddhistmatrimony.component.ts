import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-buddhist-matrimony',
  templateUrl: './buddhist-matrimony.component.html',
})
export class BuddhistMatrimonyComponent implements OnInit {

  constructor(
    private titleService:Title,
    private meta:Meta
  ) {
      this.titleService.setTitle('');
      this.meta.addTag({name:'title',content:'Buddhist Matrimony | Buddhist Matrimony Site | Hans Matrimony'});
      this.meta.addTag({name:'description',content:'Find your ideal Buddhist Brides / Grooms for Matrimony on Hans Matrimony. We provide millions of verified profiles and the Safe & Secured Buddhist Matrimony Site. Register FREE.'});
      this.meta.addTag({name:'Keywords',content:'Buddhist Matrimony, Buddhist Matrimony Site'})
   }

  ngOnInit() {
  }

}
