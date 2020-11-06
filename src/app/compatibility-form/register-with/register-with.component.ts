import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

declare var FB: any;

@Component({
  selector: 'app-register-with',
  templateUrl: './register-with.component.html',
  styleUrls: ['./register-with.component.css']
})
export class RegisterWithComponent implements OnInit {
selection;
  constructor(public dialogRef: MatDialogRef<RegisterWithComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
                this.selection = data.value;
              }

  ngOnInit() {
  }

  registerUsing(btnName) {
    console.log(btnName);
    this.dialogRef.close({
      chose: btnName
    });
  }
  
  checkLoginState() {
    FB.getLoginStatus((response) => {
      alert(response.status);
      // tslint:disable-next-line: max-line-length
      // window.location.href = 'https://www.facebook.com/dialog/oauth?' + 'client_id=' + '449447648971731' + '&redirect_uri=' + 'https://quizzical-spence-a0c256.netlify.app/fourReg' + '&scope=' + 'public_profile,email,name';
      // tslint:disable-next-line: max-line-length
      window.location.href = `https://www.facebook.com/v8.0/dialog/oauth?client_id=449447648971731&redirect_uri=https://localhost:4200/fourReg`;
    });
  }

  loadFacebookScript() {
    const razor = document.getElementById('razorPay');
    if (!razor) {
      const fileName = document.createElement('script');
      fileName.async = true;
      fileName.defer = true;
      fileName.crossOrigin = 'anonymous';
      fileName.setAttribute('type', 'text/javascript');
      fileName.setAttribute('src', 'https://connect.facebook.net/en_US/sdk.js');
      document.body.appendChild(fileName);
    }
  }

}
