import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
    selector: 'offline-centers',
    templateUrl: './offline-centers.component.html',
    styleUrls: ['./offline-centers.component.css']
})

export class OfflineCenters implements OnInit {
    slidesToShow = 3;
    singleSlideOffset = true;
    noWrap = true;

    private innerWidth: number;
    private mobileBreakpoint = 480;
    slides = [
        {img: "../../../assets/offlineCenters/center1.jpg",details:"Shree Shiv Sai Dham Mandir"},
        {img: "../../../assets/offlineCenters/center2.jpg",details:"Shree Lakshmi Narayan Mandir"},
        {img: "../../../assets/offlineCenters/center3.jpg",details:"Shree Sanatan Dharam Mandir"},
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
    customOptions: OwlOptions = {
      loop: true,
      autoplay: true,
      center: true,
      dots: true,
      autoWidth: true,
      // merge: true,
      // mergeFit: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      }
    }
    ngOnInit(): void {
        this.adjustsslidesToShow();
        
    }
    private adjustsslidesToShow() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < this.mobileBreakpoint) {
      return 1
    } else {
      return 3
    }
  }
}