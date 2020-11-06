import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
@Component({
    selector: 'hero',
    templateUrl: './hero.html',
    styleUrls: ['./hero.css']
})

export class Hero implements OnInit {
    name:string="Myself";
    info:any=[];
    bride:boolean=true;
    groom:boolean=false;
    optionsForm: FormGroup;
    isCollapsed:boolean;
    smallScreen: boolean;
    private innerWidth: number;
    private mobileBreakpoint = 768;
    currentGender = "Boy's";
    constructor(public router: Router,private form_builder: FormBuilder,private itemService: FindOpenHistoryProfileService) {
        this.isCollapsed=true;
        this.optionsForm = this.form_builder.group({
          Looking: [null],
          For: [null],
        })
        
    }
    downloadApp() {
      window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_blank');
    }
    goToCompatibility(){
      if (this.bride===true) {
        this.itemService.compatibilityGender = 'Male';
      }
      if(this.groom===true){
        this.itemService.compatibilityGender = 'Female';
      }
      
      if(this.name){
        this.itemService.compatibilityLookingFor = this.name;
      }
      
      this.router.navigateByUrl('/fourReg');
    }
    groomToggle(){
      this.bride=false;
      this.groom=true;
      console.log(this.bride,this.groom);
      
    }
    brideToggle(){
      this.bride=true;
      this.groom=false;
    }
    getName(){
    }
    mySelf(id){
      console.log(document.getElementById(id).innerHTML);
      this.name=document.getElementById(id).innerHTML;
    }
    ngOnInit() {
      this.mobileScreen();
      if (localStorage.getItem('gender')) {
        
        let gender = localStorage.getItem('gender');
        if (gender === "Female") {
          this.currentGender = "Girl's";
          this.optionsForm.patchValue({
            Looking: 'Groom',
          })
        }
        else {
          this.currentGender = "Boy's";
          this.optionsForm.patchValue({
            Looking: 'Bride',
          })
        }
      }
    }
    public resize(){
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
        
        return this.innerWidth
    }
    public mobileScreen() {
        window.onload = this.resize;
        window.onresize = this.resize;
        
        
    if (this.resize() < this.mobileBreakpoint) {
      this.smallScreen=true
    } else {
      this.smallScreen=false
    }
    console.log(this.smallScreen);
    
  }
}