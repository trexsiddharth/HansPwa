import { Component, OnInit } from '@angular/core';
import { NewHomeService } from '../new-home.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor(public homeService: NewHomeService) { }

  ngOnInit() {
  }

}
