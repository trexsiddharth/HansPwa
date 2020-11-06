import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'new-app',
    templateUrl: './new-app.component.html',
    styleUrls: ['./new-app.component.css']
})

export class NewApp implements OnInit {
    mobileScreen:boolean;
    private innerWidth: number;
    private mobileBreakpoint = 480;
    constructor() {
        
    }
    ngOnInit(): void {
        this.detectMobileScreen();
    }
    downloadApp() {
      window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_blank');
    }
    private resize(){
        this.innerWidth = window.innerWidth;
        return this.innerWidth
    }
    private detectMobileScreen() {
        window.onload = this.resize;
      window.onresize = this.resize;
    
    console.log(this.innerWidth);
    
    if (this.resize() < this.mobileBreakpoint) {
      this.mobileScreen=true
    } else {
      this.mobileScreen=false
    }
  }
}