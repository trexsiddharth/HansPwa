(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chat-chat-module~compatibility-form-compatibility-form-module"],{

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
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");







let ChatServiceService = class ChatServiceService {
    constructor(http, itemService, ngxNotificationService) {
        this.http = http;
        this.itemService = itemService;
        this.ngxNotificationService = ngxNotificationService;
        this.authDataUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.shortList = [];
        this.rejectList = [];
        this.actionCount = -2;
        this.pageThreeFilled = true;
        this.authorized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentTab = 0;
        this.shouldHitSendMessages = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.shouldHitSendMessages$ = this.shouldHitSendMessages.asObservable();
        this.opensidenav = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.opensidenav$ = this.opensidenav.asObservable();
        this.imgSRC = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.imgSRC$ = this.imgSRC.asObservable();
        this.formTwoCompleted = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.countOfRishtey = 0;
        // for user profile
        this.userProfileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        // for all caste
        this.allCastesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.allCastes$ = this.allCastesSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        // get states according to country
        this.allStatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.allStates$ = this.allStatesSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        // get cities on the basis of country and states
        this.allCitiesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.allCities$ = this.allCitiesSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
        this.countOfRishtasSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.countOfRishtas$ = this.countOfRishtasSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
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
    get activeTab() {
        return this.currentTab;
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
            action: action
        });
    }
    setLoginStatus(status) {
        this.loginStatus = status;
    }
    getLoginStatus() {
        return this.loginStatus;
    }
    changeCurrentTab(tab) {
        if (tab && tab > -1) {
            this.currentTab = tab;
        }
    }
    setCredits(credits) {
        this.credits = credits;
    }
    getCredits() {
        return this.credits;
    }
    get allCastes() {
        if (this.allCastesSubject.getValue()) {
            return this.allCastes$;
        }
        return this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            this.allCastesSubject.next(data);
        }));
    }
    getStates(value) {
        if (this.allStatesSubject.getValue() || value === this.selected_country) {
            console.log('cached states');
            return this.allStates$;
        }
        this.selected_country = value;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('country_id', this.selected_country ? this.selected_country.id : null);
        return this.http.get('https://partner.hansmatrimony.com/api/getState', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            this.allStatesSubject.next(data);
        }));
    }
    getCities(countryValue, stateValue) {
        if (this.allCitiesSubject.getValue() || countryValue === this.selected_country
            && stateValue === this.selected_states) {
            console.log('cached states');
            return this.allCities$;
        }
        this.selected_country = countryValue;
        this.selected_states = stateValue;
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('country_id', this.selected_country).set('state_id', stateValue);
        return this.http.get('https://partner.hansmatrimony.com/api/getCity', { params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            this.allCitiesSubject.next(data);
        }));
    }
    getCountOfRishtey(formValues, values) {
        if (this.countOfRishtasSubject.getValue() && this.countOfRishtas === JSON.stringify(values)) {
            console.log('cached count of rishtey', this.countOfRishtas === JSON.stringify(values));
            return this.countOfRishtas$;
        }
        this.countOfRishtas = JSON.stringify(values);
        return this.http.post('https://partner.hansmatrimony.com/api/getCountOfRishtey', formValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            this.countOfRishtasSubject.next(data);
        }));
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
        for (const v of this.personalDetailsList) {
            if (this.personalProfileData.hasOwnProperty(v)) {
                if (!this.personalProfileData[v] || this.personalProfileData[v] === 'null') {
                    this.personalDetailsLeft.push(v);
                }
            }
            else {
                this.personalDetailsLeft.push(v);
            }
        }
        for (const v of this.familyDetailsList) {
            if (this.familyProfileData.hasOwnProperty(v)) {
                if (!this.familyProfileData[v] || this.familyProfileData[v] === 'null') {
                    this.familyDetailsLeft.push(v);
                }
            }
            else {
                this.familyDetailsLeft.push(v);
            }
        }
        for (const v of this.personalDetailsLeft) {
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
                // setting profile data in chat service for use in popups.
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
    setUserProfile(data) {
        if (data) {
            this.userProfileSubject.next(data);
        }
    }
    // getProfile Observable
    getUserProfile(updateProfile = false) {
        if (this.userProfileSubject.getValue() && !updateProfile) {
            console.log('cached user profile', this.userProfileSubject.getValue());
            return this.userProfileSubject;
        }
        const myprofileData = new FormData();
        myprofileData.append('id', localStorage.getItem('id'));
        myprofileData.append('contacted', '1');
        myprofileData.append('is_lead', localStorage.getItem('is_lead'));
        myprofileData.append('show_country', '1');
        return this.http
            .post('https://partner.hansmatrimony.com/api/getProfile', myprofileData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(7000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((e) => {
            this.ngxNotificationService.error('Server Time Out, Try Again Later');
            throw new Error('Server Timeout ' + e);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            console.log('User Data Updated');
            this.userProfileSubject.next(data);
        }));
    }
};
ChatServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_4__["FindOpenHistoryProfileService"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_6__["NgxNotificationService"] }
];
ChatServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatServiceService);



/***/ })

}]);
//# sourceMappingURL=default~chat-chat-module~compatibility-form-compatibility-form-module-es2015.js.map