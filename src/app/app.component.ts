import { Component, Input, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hansWebApp';
  footer = true;

  toggled: boolean;
  socialInfo: string;
  routerUrl: string;
  isLogin = 'false';
  @Input() header = true;
  clickToggle = false;
  btnToggle;
  clickEvent: any;

  // tslint:disable-next-line: max-line-length
  constructor(private swUpdate: SwUpdate, public router: Router) {
  }

  ngOnInit() {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
    this.changeOfRoutes();
}

  changeOfRoutes() {
     // tslint:disable-next-line: max-line-length
     if (location.href.indexOf('chat') > - 1 || location.href.indexOf('register') > - 1 || location.href.indexOf('history') > - 1 || location.href.indexOf('myprofile') > - 1 ) { this.footer = false;
      if (location.href.indexOf('chat') > - 1 ) {
        this.header = false;
      }
      this.isLogin = 'true';
    } else {
      this.footer = true;
     }
     if (this.clickToggle === true) {
      this.btnToggle.dispatchEvent(this.clickEvent);
     }
    }
   myFunction() {
   this.clickToggle = true;
  }
}
