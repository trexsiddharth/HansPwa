import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {features} from '../../../assets/Data/data.js';
import { fade, landing } from '../animations.js';
@Component({
   selector: 'app-features',
   templateUrl: './features.component.html',
   styleUrls: ['./features.component.css'],
   animations:[
     fade,landing
   ]
})

export class Features implements OnInit {
    public auto:boolean = false;
    public features:any;
    public mobileScreen:boolean;
    private innerWidth: number;
    private mobileBreakpoint = 600;
    constructor() {
        this.features = features;
    }
    customOptions: OwlOptions = {
      loop: true,
      autoplay: this.auto,
      center: true,
      // nav:true,
      dots:true,
      // navText:["<p style= `background-color:black;`>h</p>","<p>b</p>"],
      autoWidth: true,
      // merge: true,
      // mergeFit: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items:1,
        },
        1000: {
          items: 3,
        }
      }
    }
    ngOnInit(): void {
      this.detectMobileScreen();
      window.addEventListener('scroll', this.scroll, true);
    }
    scroll = (event): void => {
      this.scrollAppear();
    };
    scrollAppear(){
      let whyUs = document.querySelector('.whyus');
      let position = whyUs.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
      if(position<screenPosition){
        this.auto=true;
        console.log(this.auto);
        
       }else if(position>screenPosition){
       this.auto=false;
       console.log(this.auto);
       }
    }
  private resize(){
      this.innerWidth = window.innerWidth;
      return this.innerWidth
  }
  private detectMobileScreen() {
      window.onload = this.resize;
    window.onresize = this.resize;
  if (this.resize() < this.mobileBreakpoint) {
    this.mobileScreen=true
  } else {
    this.mobileScreen=false
  }
}
}
