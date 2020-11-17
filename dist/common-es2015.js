(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/chat-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/chat-service.service.ts ***!
  \*****************************************/
/*! exports provided: ChatServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatServiceService", function() { return ChatServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-open-history-profile.service */ "./src/app/find-open-history-profile.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ChatServiceService = class ChatServiceService {
    constructor(http, itemService) {
        this.http = http;
        this.itemService = itemService;
        this.authDataUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.shortList = [];
        this.rejectList = [];
        this.actionCount = -2;
        this.pageThreeFilled = true;
        this.authorized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.shouldHitSendMessages = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.shouldHitSendMessages$ = this.shouldHitSendMessages.asObservable();
        this.opensidenav = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.opensidenav$ = this.opensidenav.asObservable();
        this.imgSRC = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.imgSRC$ = this.imgSRC.asObservable();
        this.formTwoCompleted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.countOfRishtey = 0;
        this.selected_states = '';
        this.selected_cities = '';
        this.selected_states_id = [];
        this.familyDetailsLeft = [];
        this.personalDetailsLeft = [];
        this.profileCompletionPercent = 0;
        this.personalDetailsList = [];
        this.familyDetailsList = [];
        this.totalDetails = 0;
    }
    setProfileData(a, b) {
        this.personalProfileData = a;
        this.familyProfileData = b;
    }
    setContactNumber(contact) {
        this.contactNumber = contact;
    }
    setSharedProfile(profile) {
        this.profileItem = profile;
    }
    getSharedProfile() {
        return this.profileItem;
    }
    getContactNumber() {
        return this.contactNumber ? this.contactNumber : localStorage.getItem('mobile_number');
    }
    Analytics(type, category, action) {
        window.ga('send', 'event', category, action, {
            hitCallback: () => {
                console.log('Tracking ' + type + ' successful');
            }
        });
        // gtag app + web
        window.gtag('event', category, {
            'action': action
        });
    }
    setLoginStatus(status) {
        this.loginStatus = status;
    }
    getLoginStatus() {
        return this.loginStatus;
    }
    setCredits(credits) {
        this.credits = credits;
    }
    getCredits() {
        return this.credits;
    }
    setProfileCalculations() {
        this.personalDetailsList = ['name', 'birth_date', 'birth_time', 'birth_place', 'college',
            'additional_qualification', 'caste', 'religion',
            'height', 'weight', 'marital_status', 'manglik',
            'food_choice', 'monthly_income', 'degree',
            'company', 'occupation', 'profession', 'working_city',
            'locality', 'email', 'profession', 'locality', 'whats_app_no'];
        this.familyDetailsList = ['about', 'occupation_mother', 'gotra', 'occupation',
            'family_type', 'family_income', 'city', 'house_type', 'livingWithParents'];
        this.totalDetails = this.personalDetailsList.length + this.familyDetailsList.length;
        this.personalDetailsLeft = [];
        this.familyDetailsLeft = [];
        for (let v of this.personalDetailsList) {
            if (this.personalProfileData.hasOwnProperty(v)) {
                if (!this.personalProfileData[v] || this.personalProfileData[v] === "null") {
                    this.personalDetailsLeft.push(v);
                }
            }
            else
                this.personalDetailsLeft.push(v);
        }
        for (let v of this.familyDetailsList) {
            if (this.familyProfileData.hasOwnProperty(v)) {
                if (!this.familyProfileData[v] || this.familyProfileData[v] === "null") {
                    this.familyDetailsLeft.push(v);
                }
            }
            else {
                this.familyDetailsLeft.push(v);
            }
        }
        for (let v of this.personalDetailsLeft) {
            if (this.familyProfileData.hasOwnProperty(v)) {
                this.personalDetailsLeft.splice(this.personalDetailsLeft.indexOf(v));
            }
        }
        console.log(this.personalDetailsLeft);
        console.log(this.familyDetailsLeft);
    }
    setProfileCompletion() {
        this.profileCompletionPercent = Math.ceil(((this.totalDetails - this.personalDetailsLeft.length - this.familyDetailsLeft.length) * 100) / (this.totalDetails));
        localStorage.setItem('profileCompPercent', String(this.profileCompletionPercent));
        console.log('profile completion percent set from chat service');
    }
    getUserProfileData() {
        if (localStorage.getItem('id')) {
            const myprofileData = new FormData();
            myprofileData.append('id', localStorage.getItem('id'));
            myprofileData.append('contacted', '1');
            myprofileData.append('is_lead', localStorage.getItem('is_lead'));
            // tslint:disable-next-line: max-line-length
            return this.http
                .post('https://partner.hansmatrimony.com/api/getProfile', myprofileData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(7000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => {
                throw new Error('Server Timeout ' + e);
            }))
                .subscribe((data) => {
                console.log(data.preferences);
                this.preferenceProfileData = data.preferences ? data.preferences : null;
                this.personalProfileData = data.profile ? data.profile : null;
                this.familyProfileData = data.family ? data.family : null;
                //setting profile data in chat service for use in popups.
                this.setProfileData(this.personalProfileData, this.familyProfileData);
                this.setProfileCalculations();
                this.setProfileCompletion();
                if (data.profile.photo) {
                    this.itemService.setPhotoStatus(true);
                }
            }, (error) => {
                console.log(error);
            });
        }
        else {
            console.log('Couln\'t get profiledata');
        }
    }
    setShouldHitSendMessagesToTrue() {
        this.shouldHitSendMessages.next(true);
    }
    setShouldHitSendMessagesToFalse() {
        this.shouldHitSendMessages.next(false);
    }
    opensidenavTrue() {
        this.opensidenav.next(true);
    }
    opensidenavFalse() {
        this.opensidenav.next(false);
    }
};
ChatServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_4__["FindOpenHistoryProfileService"] }
];
ChatServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatServiceService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map