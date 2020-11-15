import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice-list',
  templateUrl: './choice-list.component.html',
  styleUrls: ['./choice-list.component.css']
})
export class ChoiceListComponent implements OnInit {
  @Output() gender = new EventEmitter<any>();
  public boy:boolean = false;
  public girl:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  toggleBoy(){
    this.boy=true;
    this.girl=false;
    this.selectGender(); 
  }
  toggleGirl(){
    this.boy=false;
    this.girl=true;
    this.selectGender(); 
  }
  selectGender() { this.gender.emit(this.boy)}
  
}
