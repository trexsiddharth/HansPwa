import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-chat-drawer',
  templateUrl: './chat-drawer.component.html',
  styleUrls: ['./chat-drawer.component.css']
})
export class ChatDrawerComponent implements OnInit {
  @Input() drawerReference: MatSidenav;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.drawerReference);
    }, 2000);
  }

  closeSideNav() {
    this.drawerReference.toggle();
  }

}
