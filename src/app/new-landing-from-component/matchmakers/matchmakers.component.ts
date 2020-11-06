import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
    selector: 'matchmakers',
    templateUrl: './matchmakers.component.html',
    styleUrls: ['./matchmakers.component.css']
})

export class MatchMakers implements OnInit {
    slidesToShow = 3;
    private innerWidth: number;
    private mobileBreakpoint = 480;
    slides = [
        {img: "../../../assets/carousel/image1.jpg"},
        {img: "../../../assets/carousel/image1.jpg"},
        {img: "../../../assets/carousel/image1.jpg"},
        // {img: "../../assets/carousel/image1.jpg"},
        // {img: "../../assets/carousel/image1.jpg"},
        // {img: "../../assets/carousel/image1.jpg"},
      ];
      slideConfig = {"slidesToShow": this.adjustsslidesToShow(),
                    "slidesToScroll": 3,
                     "autoplay":true,
                    "dots":true,
                    "centerMode":true,
                    "centerPadding":'40px'
                };
      
    constructor() {
        
    }
    
    ngOnInit(): void {
        this.adjustsslidesToShow();
    }
    customOptions: OwlOptions = {
      loop: true,
      autoplay: true,
      center: true,
      dots: true,
      autoWidth: true,
      margin:80,
      // merge: true,
      // mergeFit: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
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
      
    
    console.log(this.innerWidth);
    
    if (this.resize() < this.mobileBreakpoint) {
      return 1
    } else {
      return 3
    }
  }
    
}