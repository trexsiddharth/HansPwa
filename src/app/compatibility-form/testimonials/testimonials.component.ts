import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {testimonials} from '../../../assets/Data/data';
@Component({
    selector: 'testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.css']
})

export class Testimonials implements OnInit {
    slidesToShow = 3;
    private innerWidth: number;
    private mobileBreakpoint = 600;
    slides = [
        {img: "http://placehold.it/350x150/000000"},
        {img: "http://placehold.it/350x150/111111"},
        {img: "http://placehold.it/350x150/333333"}
      ];
      slideConfig = {
                    "slidesToShow": this.adjustsslidesToShow(),
                    "slidesToScroll": this.adjustsslidesToShow(),
                    "center":true,
                    "autoplay":true,
                    "dots":true};
      

    
    testimonials:any;
    
    constructor() {
        this.testimonials = testimonials;
    }
    

    ngOnInit(): void {
        this.adjustsslidesToShow();
    }
    customOptions: OwlOptions = {
      loop: true,
      autoplay: true,
      center: true,
      dots: true,
      // merge: true,
      // mergeFit: true,
      margin:120,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    }
    private resize(){
        this.innerWidth = window.innerWidth;
        return this.innerWidth
    }
    private adjustsslidesToShow() {
        window.onload = this.resize;
      window.onresize = this.resize;
    
    if (this.resize() <= this.mobileBreakpoint) {
      return 1
    } else if (this.resize() <= 768)  {
      return 2
    }
    else{
      return 2
    }
  }
}