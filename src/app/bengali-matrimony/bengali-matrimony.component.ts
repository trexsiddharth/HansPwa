import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bengali-matrimony',
  templateUrl: './bengali-matrimony.component.html',
  styleUrls: ['./bengali-matrimony.component.css']
})
export class BengaliMatrimonyComponent implements OnInit {

  constructor(
    private titleService:Title,
    private meta:Meta
  ) {
      this.titleService.setTitle('Bengali Matrimony | Bengali Matrimony Site | Hans Matrimony');
      this.meta.addTag({name:'title',content:'Bengali Matrimony | Bengali Matrimony Site | Hans Matrimony'});
      this.meta.addTag({name:'description',content:'Find your ideal Bengali Brides / Grooms for Matrimony on Hans Matrimony. We provide millions of verified profiles and the Safe & Secured Bengali Matrimony Site. Register FREE.'})
   }

  ngOnInit() {
  }

}
