import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-landing-from-component',
  templateUrl: './new-landing-from-component.component.html',
  styleUrls: ['./new-landing-from-component.component.css']
})
export class NewLandingFromComponentComponent implements OnInit {
  public opened: boolean=false;
  public mobileScreen:boolean=false;
  private innerWidth: number;
  private mobileBreakpoint = 768;
  constructor(public router: Router) { }

  ngOnInit() {
    this.navbar();
    this.detectMobileScreen();
    this.mobile();
  }
  onSubmit() {
    this.router.navigateByUrl('/kundaliMatching');
  }
  downloadApp() {
    window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_blank');
  }
  goToCompatibility(){
    this.router.navigateByUrl('/fourReg');
  }
  navbar(){
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    });
}
mobile(){
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
  if(this.mobileScreen){
    navLinks.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      links.forEach(link => {
          link.classList.toggle("fade");
      });
      });
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
console.log(this.mobileScreen);

}

}
