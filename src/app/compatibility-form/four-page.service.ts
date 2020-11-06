import { Injectable, EventEmitter } from '@angular/core';
import { Profile } from './profile';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FourPageService {
  // page two form event
  formCompleted = new EventEmitter<boolean>();
  formTwoGroup = new EventEmitter<FormGroup>();
  // page three form event
  form3Completed = new EventEmitter<boolean>();
  // page four form event
  form4Completed = new EventEmitter<boolean>();
  getListData = new EventEmitter<boolean>();
  makeLinear = new EventEmitter<boolean>();
  pageOneUpdated = new EventEmitter<boolean>();
  profile = new Profile();
  userThroughGetList = false;
  // will be used to notify user can pass through or not to all the sections
  userThroughStatusUpdated = new EventEmitter<boolean>();
  allCasteListUpdated = false;
  skippable = false;
  allCastes: any[] = [];
  facebookProfilePicUploaded = new EventEmitter<string>();
  facebookHomeTownUpdated = new EventEmitter<string>();
  facebookLocationUpdated = new EventEmitter<string>();

  showApproveBtn = false;
  constructor() { }


  setSkippable(status) {
    this.skippable = status;
  }
  getSkippable() {
    return this.skippable;
  }

  setUserThrough(status) {
    this.userThroughGetList = status;
    this.userThroughStatusUpdated.emit(status);
  }
  getUserThrough() {
    return this.userThroughGetList;
  }

  setAllCastes(castesList: any[]) {
    if (castesList) {
      this.allCastes = castesList;
    }
  }

  getAllCastes() {
    if (this.allCastes.length > 0) {
      return [...this.allCastes];
    } else {
      return null;
    }

  }

  setProfile(profile: Profile) {
    console.log(this.profile);
    this.profile = profile;
  }
  getProfile() {
    return this.profile;
  }

  updateFormOneData(userData: FormData) {
    console.log(userData);
    this.profile.name = userData.get('name') ?
      userData.get('name').toString() : '';
    this.profile.mobile = userData.get('mobile') ?
      userData.get('mobile').toString() : '';
    this.profile.email = userData.get('email') ?
      userData.get('email').toString() : '';
    this.profile.relation = userData.get('relation') ?
      userData.get('relation').toString() : '';
    this.profile.gender = userData.get('gender') ?
      userData.get('gender').toString() : '';
    this.profile.dob = userData.get('birth_date') ?
      userData.get('birth_date').toString() : '';
    this.profile.height = userData.get('height') ?
      userData.get('height').toString() : '';
    this.profile.weight = userData.get('weight') ?
      userData.get('weight').toString() : '';
    this.profile.martialStatus = userData.get('marital_status') ?
      userData.get('marital_status').toString() : '';
    this.profile.religion = userData.get('religion') ?
      userData.get('religion').toString() : '';
    this.profile.caste = userData.get('caste') ?
      userData.get('caste').toString() : '';
    this.profile.disabledPart = userData.get('disabled_part') ?
      userData.get('disabled_part').toString() : '';
    console.log(this.profile);
    this.pageOneUpdated.emit(true);
  }

}
