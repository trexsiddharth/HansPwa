import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {works} from '../../../assets/Data/data.js'
import { landing } from '../animations.js';
@Component({
    selector: 'how-it-works',
    templateUrl: './how-it-works.component.html',
    styleUrls: ['./how-it-works.component.css'],
    animations:[
        landing
      ]
})

export class HowItWorks implements OnInit {
    iPhone5;
    private innerWidth: number;
    private mobileBreakpoint = 320;
    works:any;
    constructor(public router: Router) {
        this.works = works;  
    }
    ngOnInit(): void {
        this.iPhone();
        this.iPhone5 = this.iPhone()
        console.log(this.iPhone5);
        
    }
    goToCompatibility(){
      this.router.navigateByUrl('/fourReg');
    }
    private resize(){
        this.innerWidth = window.innerWidth;
        return this.innerWidth
    }
    private iPhone() {
        window.onload = this.resize;
      window.onresize = this.resize;
    
    console.log(this.innerWidth);
    
    if (this.resize() <= this.mobileBreakpoint) {
      return true
    } else {
      return false
    }
  }
}