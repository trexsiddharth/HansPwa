function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/chat-service.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/chat-service.service.ts ***!
    \*****************************************/

  /*! exports provided: ChatServiceService */

  /***/
  function srcAppChatServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatServiceService", function () {
      return ChatServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./find-open-history-profile.service */
    "./src/app/find-open-history-profile.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ChatServiceService = /*#__PURE__*/function () {
      function ChatServiceService(http, itemService) {
        _classCallCheck(this, ChatServiceService);

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

      _createClass(ChatServiceService, [{
        key: "setProfileData",
        value: function setProfileData(a, b) {
          this.personalProfileData = a;
          this.familyProfileData = b;
        }
      }, {
        key: "setContactNumber",
        value: function setContactNumber(contact) {
          this.contactNumber = contact;
        }
      }, {
        key: "setSharedProfile",
        value: function setSharedProfile(profile) {
          this.profileItem = profile;
        }
      }, {
        key: "getSharedProfile",
        value: function getSharedProfile() {
          return this.profileItem;
        }
      }, {
        key: "getContactNumber",
        value: function getContactNumber() {
          return this.contactNumber ? this.contactNumber : localStorage.getItem('mobile_number');
        }
      }, {
        key: "Analytics",
        value: function Analytics(type, category, action) {
          window.ga('send', 'event', category, action, {
            hitCallback: function hitCallback() {
              console.log('Tracking ' + type + ' successful');
            }
          }); // gtag app + web

          window.gtag('event', category, {
            'action': action
          });
        }
      }, {
        key: "setLoginStatus",
        value: function setLoginStatus(status) {
          this.loginStatus = status;
        }
      }, {
        key: "getLoginStatus",
        value: function getLoginStatus() {
          return this.loginStatus;
        }
      }, {
        key: "setCredits",
        value: function setCredits(credits) {
          this.credits = credits;
        }
      }, {
        key: "getCredits",
        value: function getCredits() {
          return this.credits;
        }
      }, {
        key: "setProfileCalculations",
        value: function setProfileCalculations() {
          this.personalDetailsList = ['name', 'birth_date', 'birth_time', 'birth_place', 'college', 'additional_qualification', 'caste', 'religion', 'height', 'weight', 'marital_status', 'manglik', 'food_choice', 'monthly_income', 'degree', 'company', 'occupation', 'profession', 'working_city', 'locality', 'email', 'profession', 'locality', 'whats_app_no'];
          this.familyDetailsList = ['about', 'occupation_mother', 'gotra', 'occupation', 'family_type', 'family_income', 'city', 'house_type', 'livingWithParents'];
          this.totalDetails = this.personalDetailsList.length + this.familyDetailsList.length;
          this.personalDetailsLeft = [];
          this.familyDetailsLeft = [];

          var _iterator = _createForOfIteratorHelper(this.personalDetailsList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var v = _step.value;

              if (this.personalProfileData.hasOwnProperty(v)) {
                if (!this.personalProfileData[v] || this.personalProfileData[v] === "null") {
                  this.personalDetailsLeft.push(v);
                }
              } else this.personalDetailsLeft.push(v);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var _iterator2 = _createForOfIteratorHelper(this.familyDetailsList),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _v = _step2.value;

              if (this.familyProfileData.hasOwnProperty(_v)) {
                if (!this.familyProfileData[_v] || this.familyProfileData[_v] === "null") {
                  this.familyDetailsLeft.push(_v);
                }
              } else {
                this.familyDetailsLeft.push(_v);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          var _iterator3 = _createForOfIteratorHelper(this.personalDetailsLeft),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _v2 = _step3.value;

              if (this.familyProfileData.hasOwnProperty(_v2)) {
                this.personalDetailsLeft.splice(this.personalDetailsLeft.indexOf(_v2));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          console.log(this.personalDetailsLeft);
          console.log(this.familyDetailsLeft);
        }
      }, {
        key: "setProfileCompletion",
        value: function setProfileCompletion() {
          this.profileCompletionPercent = Math.ceil((this.totalDetails - this.personalDetailsLeft.length - this.familyDetailsLeft.length) * 100 / this.totalDetails);
          localStorage.setItem('profileCompPercent', String(this.profileCompletionPercent));
          console.log('profile completion percent set from chat service');
        }
      }, {
        key: "getUserProfileData",
        value: function getUserProfileData() {
          var _this = this;

          if (localStorage.getItem('id')) {
            var myprofileData = new FormData();
            myprofileData.append('id', localStorage.getItem('id'));
            myprofileData.append('contacted', '1');
            myprofileData.append('is_lead', localStorage.getItem('is_lead')); // tslint:disable-next-line: max-line-length

            return this.http.post('https://partner.hansmatrimony.com/api/getProfile', myprofileData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(7000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (e) {
              throw new Error('Server Timeout ' + e);
            })).subscribe(function (data) {
              console.log(data.preferences);
              _this.preferenceProfileData = data.preferences ? data.preferences : null;
              _this.personalProfileData = data.profile ? data.profile : null;
              _this.familyProfileData = data.family ? data.family : null; //setting profile data in chat service for use in popups.

              _this.setProfileData(_this.personalProfileData, _this.familyProfileData);

              _this.setProfileCalculations();

              _this.setProfileCompletion();

              if (data.profile.photo) {
                _this.itemService.setPhotoStatus(true);
              }
            }, function (error) {
              console.log(error);
            });
          } else {
            console.log('Couln\'t get profiledata');
          }
        }
      }, {
        key: "setShouldHitSendMessagesToTrue",
        value: function setShouldHitSendMessagesToTrue() {
          this.shouldHitSendMessages.next(true);
        }
      }, {
        key: "setShouldHitSendMessagesToFalse",
        value: function setShouldHitSendMessagesToFalse() {
          this.shouldHitSendMessages.next(false);
        }
      }, {
        key: "opensidenavTrue",
        value: function opensidenavTrue() {
          this.opensidenav.next(true);
        }
      }, {
        key: "opensidenavFalse",
        value: function opensidenavFalse() {
          this.opensidenav.next(false);
        }
      }]);

      return ChatServiceService;
    }();

    ChatServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _find_open_history_profile_service__WEBPACK_IMPORTED_MODULE_4__["FindOpenHistoryProfileService"]
      }];
    };

    ChatServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatServiceService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map