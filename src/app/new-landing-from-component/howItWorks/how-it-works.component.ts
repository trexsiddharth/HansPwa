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
    public iPhone5;
    public rightAppear:boolean;
    public rightAppear1:boolean;
    public rightAppear2:boolean;
    public rightAppear3:boolean;
    public appear:boolean;
    public appear1:boolean;
    public appear2:boolean;
    public appear3:boolean;
    public btnA:boolean;
    private innerWidth: number;
    private mobileBreakpoint = 320;
    public works:any;
    constructor(public router: Router) {
        this.works = works;  
    }
    ngOnInit(): void {
      window.addEventListener('scroll', this.scroll, true);
        this.iPhone();
        this.iPhone5 = this.iPhone()
        
    }
    scroll = (event): void => {
      this.scrollAppear();
    };
    scrollAppear(){
       let left = document.querySelector('.left-animate');
       let left1 = document.querySelector('.left-animate1');
       let left2 = document.querySelector('.left-animate2');
       let left3 = document.querySelector('.left-animate3');
       let bn = document.querySelector('.bn');
       let right = document.querySelector('.right');
       let right1 = document.querySelector('.right1');
       let right2 = document.querySelector('.right2');
       let right3 = document.querySelector('.right3');
       let leftPosition;
       let leftPosition1;
       let leftPosition2;
       let leftPosition3;
       let bnPosition;
       let rightPosition;
       let rightPosition1;
       let rightPosition2;
       let rightPosition3;
      if(left && left1 && left2 && left3 && bn && right && right1 && right2 && right3){
        leftPosition = left.getBoundingClientRect().top;
        leftPosition1 = left1.getBoundingClientRect().top;
        leftPosition2 = left2.getBoundingClientRect().top;
        leftPosition3 = left3.getBoundingClientRect().top;
        bnPosition = bn.getBoundingClientRect().top;
        rightPosition = right.getBoundingClientRect().top;
        rightPosition1 = right1.getBoundingClientRect().top;
        rightPosition2 = right2.getBoundingClientRect().top;
        rightPosition3 = right3.getBoundingClientRect().top;
      }
       let screenPosition = window.innerHeight;
       if(bnPosition<screenPosition){
        //  left.classList.add('.left-appear')
        this.btnA = true;
       }else if(bnPosition>screenPosition){
        this.btnA = false;
       }
       if(leftPosition<screenPosition){
        //  left.classList.add('.left-appear')
        this.appear = true;
       }else if(leftPosition>screenPosition){
        this.appear = false;
       }
       if(leftPosition1<screenPosition){
        //  left.classList.add('.left-appear')
        this.appear1 = true;
       }else if(leftPosition1>screenPosition){
        this.appear1 = false;
       }
       if(leftPosition2<screenPosition){
        //  left.classList.add('.left-appear')
        this.appear2 = true;
       }else if(leftPosition2>screenPosition){
        this.appear2 = false;
       }
       if(leftPosition3<screenPosition){
        //  left.classList.add('.left-appear')
        this.appear3 = true;
       }else if(leftPosition3>screenPosition){
        this.appear3 = false;
       }
       if(rightPosition<screenPosition){
        //  left.classList.add('.left-appear')
        this.rightAppear = true;
       }else if(rightPosition>screenPosition){
        this.rightAppear = false;
       }
       if(rightPosition1<screenPosition){
        //  left.classList.add('.left-appear')
        this.rightAppear1 = true;
       }else if(rightPosition1>screenPosition){
        this.rightAppear1 = false;
       }
       if(rightPosition2<screenPosition){
        //  left.classList.add('.left-appear')
        this.rightAppear2 = true;
       }else if(rightPosition2>screenPosition){
        this.rightAppear2 = false;
       }
       if(rightPosition3<screenPosition){
        //  left.classList.add('.left-appear')
        this.rightAppear3 = true;
       }else if(rightPosition3>screenPosition){
        this.rightAppear3 = false;
       }
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
    
    if (this.resize() <= this.mobileBreakpoint) {
      return true
    } else {
      return false
    }
  }
}