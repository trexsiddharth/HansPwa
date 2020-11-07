import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
    selector: 'matchmakers',
    templateUrl: './matchmakers.component.html',
    styleUrls: ['./matchmakers.component.css']
})

export class MatchMakers implements OnInit {
    constructor() {
        
    }
    
    ngOnInit(): void {
        
    }
    customOptions: OwlOptions = {
      loop: true,
      autoplay: true,
      center:true,
      dots: true,
      margin:80,
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
    
}