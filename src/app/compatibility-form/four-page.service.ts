import { Injectable, EventEmitter } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class FourPageService {
 formCompleted = new EventEmitter<boolean>();
 form3Completed = new EventEmitter<boolean>();
 form4Completed = new EventEmitter<boolean>();
 getListData = new EventEmitter<boolean>();
 profile = new Profile();
 userThroughGetList = false;

  constructor() { }

  setUserThrough(status) {
    this.userThroughGetList = status;
  }
  getUserThrough() {
    return this.userThroughGetList;
  }

  setProfile(profile: Profile) {
    this.profile = profile;
    console.log(this.profile);
  }
  getProfile() {
    return this.profile;
  }

  updateFormOneData(userData: FormData) {
    console.log(userData);
    this.profile.name = userData.get('name').toString();
    this.profile.mobile = userData.get('mobile').toString();
    this.profile.email = userData.get('email').toString();
    this.profile.relation = userData.get('relation').toString();
    this.profile.gender = userData.get('gender').toString();
    this.profile.dob = userData.get('birth_date').toString();
    this.profile.height = userData.get('height').toString();
    this.profile.weight = userData.get('weight').toString();
    this.profile.martialStatus = userData.get('marital_status').toString();
    this.profile.annualIncome = userData.get('annual_income').toString();
    this.profile.religion = userData.get('religion').toString();
    this.profile.caste = userData.get('caste').toString();
    this.profile.manglik = userData.get('manglik').toString();
    this.profile.locality = userData.get('locality').toString();
    console.log(this.profile);
  }

}
