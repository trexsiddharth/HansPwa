import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-okdialog-cs',
  templateUrl: './okdialog-cs.component.html',
  styleUrls: ['./okdialog-cs.component.css']
})
export class OkdialogCsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToChat() {
    // this.backToProfiles.emit('chatbot');
    this.router.navigateByUrl("/chat");
  }

}
