import { Component, OnInit } from '@angular/core';
import { NewHomeService } from '../new-home.service';

@Component({
  selector: 'app-home-drawer',
  templateUrl: './home-drawer.component.html',
  styleUrls: ['./home-drawer.component.css']
})
export class HomeDrawerComponent implements OnInit {

  constructor(public homeService: NewHomeService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.homeService.getDrawerInstance().toggle();
  }
  openBlog() {
    window.open('https://hansmatrimony.com/blog/?ngsw-bypass=true');
  }
}
