import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-okdialog',
  templateUrl: './okdialog.component.html',
  styleUrls: ['./okdialog.component.css']
})
export class OkdialogComponent implements OnInit {

  constructor(public router: Router,) { }

  ngOnInit() {
  }
  backToChat() {
    // this.backToProfiles.emit('chatbot');
    this.router.navigateByUrl("/chat");
  }
}
