import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditPersonalDialogComponent } from '../../myprofile/edit-personal-dialog/edit-personal-dialog.component';
import { Router } from '@angular/router';
import { ChatServiceService } from 'src/app/chat-service.service';

@Component({
  selector: 'app-persistent-message',
  templateUrl: './persistent-message.component.html',
  styleUrls: ['./persistent-message.component.css']
})
export class PersistentMessageComponent implements OnInit {
  data: any;
  constructor(public dialogRef: MatDialogRef<EditPersonalDialogComponent>, @Inject(MAT_DIALOG_DATA) data,
    public router: Router,
    public chatService: ChatServiceService) {
    this.data = data;
  }
  imageSrc = '../../../assets/';
  ngOnInit() {
    switch (this.data.button) {
      case 'Get Membership': this.imageSrc += 'primestar.png';
        break;
      case 'Choose Plan': this.imageSrc += 'unlockprime.png';
        break;
      case 'Complete Profile': this.imageSrc += 'profileincomplete.png';
        break;
      case 'Install App Now': this.imageSrc += 'bell.png';
        break;
    }
  }
  buttonClicked() {
    this.dialogRef.close();
    switch (this.data.button) {
      case 'Get Membership': this.router.navigateByUrl(`subscription/${1}`);
        break;
      case 'Choose Plan': this.router.navigateByUrl(`subscription/${0}`);
        break;
      case 'Complete Profile': this.router.navigateByUrl(`/chat/my-profile-new/${this.data.userId}/${this.data.userIsLead}`);
        break;
      case 'Install App Now': localStorage.setItem('appInstalled', '1');
        window.open('https://bit.ly/2YQEfbe', '_blank')
        break;
    }
  }
}
