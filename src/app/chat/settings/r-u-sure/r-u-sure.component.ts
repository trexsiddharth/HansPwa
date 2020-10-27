import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-kc-notification';

@Component({
  selector: 'app-r-u-sure',
  templateUrl: './r-u-sure.component.html',
  styleUrls: ['./r-u-sure.component.css']
})
export class RUSureComponent implements OnInit {

  constructor(public router: Router,
              public formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<RUSureComponent>,
              private http: HttpClient,
              private ngxNotificationService: NgxNotificationService) {
    this.deleteForm = this.formBuilder.group({
      // number: ['', Validators.compose([Validators.required, Validators.max(9999999999999), Validators.pattern('(0/91)?[6-9][0-9]{9,11}')])]
      number: ['123', Validators.compose([Validators.required])]

    });
  }
  regNumber: any;
  deleteForm: FormGroup;
  numberInvalid = false;
  ngOnInit() {
    this.regNumber = localStorage.getItem('mobile_number');

  }
  close() {
    this.dialogRef.close();
  }
  numberChanged() {
    console.log('numerchanged called');
    if (String(this.deleteForm.value.number) != String(this.regNumber)) {
      console.log('number invalid');
      this.numberInvalid = true;
    } else {
      console.log('number valid');
      this.numberInvalid = false;
    }

  }
  customerSupport() {
    this.dialogRef.close();
    this.router.navigateByUrl('chat/customer-support/');
  }
  getCallBack() {
    this.dialogRef.close();
    this.router.navigateByUrl('chat/getcallback/');
  }
  backToChat() {
    this.dialogRef.close();
    // this.backToProfiles.emit('chatbot');
    this.router.navigateByUrl('/chat');
  }
  deleteProfile() {
    console.log(this.deleteForm.value.number, this.regNumber);
    if (this.deleteForm.valid && String(this.deleteForm.value.number) === String(this.regNumber)) {
      this.numberInvalid = false;
      const formData = new FormData();
      formData.append('mobile', this.deleteForm.value.number);
      this.http.post('https://partner.hansmatrimony.com/api/deleteProfileAPI', formData).subscribe((response: any) => {
        if (response.status === '1') {
          this.ngxNotificationService.success('Profile Deleted Successfully!');
          this.logout();
        } else if (response.status === '0') {
          this.ngxNotificationService.error('Some error occurred....Try after some time');
          this.backToChat();
        } else {
          this.ngxNotificationService.error(response.message);
          this.backToChat();
        }
      });
    } else {
      this.ngxNotificationService.error('Number invalid');
      this.numberInvalid = true;
    }
  }
  logout() {
    const lang = localStorage.getItem('language');
    localStorage.clear();
    localStorage.setItem('language', lang);
    this.dialogRef.close();
    // ab home pe redirect karna hai
    this.router.navigate(['/']);
  }
}
