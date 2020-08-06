import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-profile-photo-upload',
  templateUrl: './my-profile-photo-upload.component.html',
  styleUrls: ['./my-profile-photo-upload.component.css']
})
export class MyProfilePhotoUploadComponent implements OnInit {

  constructor(public router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((routeData: any) => {
      console.log(routeData);
      if (routeData && routeData.params) {
        if (routeData.params.id && routeData.params.isLead) {
          this.userId = routeData.params.id;
          this.userIsLead = routeData.params.isLead;
        }
      }
    });
  }
  userId: any;
  userIsLead: any;
  backTomyProfile() {
    this.router.navigateByUrl(`chat/my-profile-new/${this.userId}/${this.userIsLead}`);
  }
}
