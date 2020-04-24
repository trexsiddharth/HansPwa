import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {
  private userProfile: any;
  constructor() {}

  setProfile(profileData: any) {
    this.userProfile = profileData ? profileData : null;
   }

   submitPersonalDetails() {
    
   }
}
