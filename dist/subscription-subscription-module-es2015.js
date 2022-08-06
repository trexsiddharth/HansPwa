(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\n    <main class=\"back-ground\">\n        <div class=\"matIconDiv\" style=\"position: absolute;\n                z-index: 99999999999;\n                left:10px;\n                cursor:pointer\" (click)=\"goBack()\">\n            <!-- <mat-icon style=\"color: white;width:50px!important\">keyboard_backspace</mat-icon> -->\n            <img style=\"width:25px\" src=\"../../assets/left-arrow-key.svg\" alt=\"BACK\" />\n        </div>\n        <main id=\"back2\">\n            <div class=\"t-c spcase\">\n                <ngb-carousel id=\"carousel\" *ngIf=\"images\" [showNavigationArrows]=\"true\"\n                    [showNavigationIndicators]=\"true\">\n                    <ng-template ngbSlide *ngFor=\"let image of images\">\n                        <div class=\"picsum-img-wrapper\" style=\"border:0px!important\">\n                            <img [src]=\"image\" alt=\"Offers\" style=\" width: 100%; border-radius:15px\" />\n                        </div>\n                    </ng-template>\n                </ngb-carousel>\n            </div>\n            <div class=\"t-c buttonsDiv\" style=\"width: 100%;margin-top: 20px;\">\n                <button class=\"buttonOnline\" (click)=\"toggleOnline()\">\n                    <div class=\"icon-circular mat-elevation-z7\"\n                        [ngClass]=\"{activeBut: isActive === 'online' , inactive: isActive !== 'online'}\"\n                        style=\"padding: 14px !important;\">\n                        <img *ngIf=\"isActive != 'online'\" src=\"../../assets/wifi-connection.svg\" alt=\"icon\" />\n                        <img *ngIf=\"isActive == 'online'\" src=\"../../assets/wifi-connectionW.svg\" alt=\"icon\" /></div>\n                    <a style=\"color:white!important;\n                    font-size:14px;font-weight:bold!important\">Self-Service Plans</a>\n                </button>\n                <button class=\"buttonPersonalised\" (click)=\"togglePersonalized()\">\n                    <div class=\"icon-circular mat-elevation-z7\"\n                        [ngClass]=\"{activeBut: isActive !=='online', inactive: isActive === 'online' }\"\n                        style=\"padding: 14px !important;\">\n                        <img *ngIf=\"isActive == 'online'\" src=\"../../assets/preferencesN.svg\" alt=\"icon\" />\n                        <img *ngIf=\"isActive != 'online'\" src=\"../../assets/preferencesNW.svg\" alt=\"icon\" />\n                    </div>\n                    <a style=\"color:white!important;\n                    font-size:14px;font-weight:bold!important\">Personalised Plans</a>\n                </button>\n            </div>\n\n\n            <div *ngIf=\"isActive === 'online'\" class=\"list\" style=\"margin-top: 20px;\">\n                <div class=\"row contentArea\">\n                    <div class=\"infoRow\" *ngFor=\"let item  of plansOnline;let i = index\">\n                        <div class=\"columnP\">\n                            <div class=\"row information\">\n                                <div class=\"columnar\"\n                                    style=\"background:rgba(226, 223, 223, 0.699);border-radius:20px 0 0 20px;text-align:center\">\n                                    <div style=\"margin-top:auto;margin-bottom:auto\">\n                                        <div style=\"font-size:1.3rem;color: #354147 !important;\">\n                                            {{item.plan_name}}</div>\n                                        <div style=\"font-size:1.1rem;margin-bottom:8px\" class=\"\"><a>{{item.validity}}\n                                                Months</a></div>\n                                        <b style=\"font-size: 1.2rem; color: #00c2cb !important;\">₹\n                                            {{setAmount(i,0)}}</b><br>\n                                        <a style=\"\n                text-decoration: line-through;\n                font-size: 1.1rem;\n                color: #596a76 !important;\n              \">₹ {{item.amount}}</a>\n                                    </div>\n                                </div>\n                                <div class=\"columnar\" style=\"border-radius:0px 20px 20px 0px;padding:3% 1% 3% 1%\">\n                                    <div class=\"numOfContacts\">\n                                        <a> {{item.contacts}} Contact Numbers</a>\n                                    </div>\n                                    <ul style=\"margin-top:auto;margin-bottom:auto!important\">\n                                        <!-- <li>हर रिश्ते का पूरा पता</li>\n                                        <li>4 रिश्ते हर रोज़</li>\n                                        <li>25+ सेंटर्स के 50,000+ रिश्ते </li> -->\n                                        <li *ngFor=\"let content of setContent(i,0)\">\n                                            {{content}}\n                                        </li>\n                                    </ul>\n                                    <button class=\"buyNow\" (click)=\"container(i,0)\">Buy Now</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"infoRow\" style=\"flex:1 1 500px; margin:2%\">\n                        <div class=\"columnP\">\n                            <div class=\"row information\">\n                                <div class=\"columnar\"\n                                    style=\"background:rgba(226, 223, 223, 0.699);border-radius:20px 0 0 20px;\">\n                                    <div style=\"margin-top:auto;margin-bottom:auto\">\n                                        <div style=\"font-size:1.7rem;font-weight:bold;color: #354147 !important;\">\n                                            सुप्रीम</div>\n                                        <div class=\"\" style=\"font-size: large;\"><a>3 महीने</a></div><br>\n                                        <b class=\"\" style=\"font-size: large; color: #00c2cb !important;\">₹ 4500</b><br>\n                                        <a style=\"\n                    text-decoration: line-through;\n                    font-size: medium;\n                    color: #596a76 !important;\n                  \">₹ 9000</a>\n                                    </div>\n                                </div>\n                                <div class=\"columnar\" style=\"border-radius:0px 20px 20px 0px;padding:3% 1% 3% 1%\">\n                                    <div class=\"numOfContacts\">\n                                        <a> 90 Contact Numbers</a>\n                                    </div>\n                                    <ul style=\"margin-top:auto;margin-bottom:auto!important\">\n                                        <li>हर रिश्ते का पूरा पता</li>\n                                        <li>4 रिश्ते हर रोज़ </li>\n                                        <li>उच्च वर्ग के रिश्ते</li>\n                                        <li>वेबसाइट पर प्रोफाइल का \"Visibility Boost\" (बेसिक प्लान से ३ गुना बेहतर\n                                            रेस्पॉन्स)</li>\n                                        <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                                    </ul>\n                                    <button class=\"buyNow\" (click)=\"container2()\">Buy Now</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"infoRow\" style=\"flex:1 1 500px; margin:2%\">\n                        <div class=\"columnP\">\n                            <div class=\"row information\">\n                                <div class=\"columnar\"\n                                    style=\"background:rgba(226, 223, 223, 0.699);border-radius:20px 0 0 20px;\">\n                                    <div style=\"margin-top:auto;margin-bottom:auto;text-align:center\">\n                                        <div class=\"\"\n                                            style=\"font-size:1.7rem;font-weight:bold;color: #354147 !important;\">\n                                            कुंडली स्पेशल\n                                        </div>\n                                        <div class=\"\" style=\"font-size: large;\"><a>3 महीने</a></div><br>\n                                        <b class=\"\" style=\"font-size: large; color: #00c2cb !important;\">₹7500</b><br>\n                                        <a style=\"\n                text-decoration: line-through;\n                font-size: medium;\n                color: #596a76 !important;\n              \">₹ 15000</a>\n                                    </div>\n                                </div>\n                                <div class=\"columnar\" style=\"border-radius:0px 20px 20px 0px;padding:3% 1% 3% 1%\">\n                                    <div class=\"numOfContacts\">\n                                        <a> 90 Contact Numbers</a>\n                                    </div>\n                                    <ul style=\"margin-top:auto;margin-bottom:auto!important\">\n                                        <li>हर एक प्रोफाइल के साथ उसका कुंडली का मैचिंग स्कोर भी </li>\n                                        <li>हर रिश्ते का पूरा पता</li>\n                                        <li>4 रिश्ते हर रोज़ </li>\n                                        <li>वेबसाइट पर प्रोफाइल का \"Visibility Boost\" (बेसिक प्लान से ३ गुना बेहतर\n                                            रेस्पॉन्स)</li>\n                                        <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                                    </ul>\n                                    <button class=\"buyNow\" (click)=\"container3()\">Buy Now</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div> -->\n                    <div class=\"infoRow\" style=\"margin-bottom:8%;\">\n                    </div>\n                </div>\n            </div>\n\n            <div *ngIf=\"isActive === 'personalized'\" style=\"padding-top: 20px;padding-bottom: 20px;\">\n                <div class=\"row\" style=\"display:flex;flex-wrap:wrap;justify-content: center;padding:0 8% 0 8%\">\n                    <div class=\"infoRow1\" style=\"flex:1 1 180px; margin:2%\">\n                        <div class=\"columnQ\">\n                            <div class=\"row\"\n                                style=\"text-align: center;display:flex;flex-direction:row;align-items:center;\">\n                                <h6 class=\"icon-circular\" style=\"\n                                position:absolute;\n                                left:-15px;\n                                display: inline-block;\n                                background: #5552fd; \n                                color: rgb(253, 251, 251);\n                                font-size:2.8rem;\n                                font-weight:1000!important;\">\n                                    1</h6>\n                                <img class=\"personalizedOfferImage\" src=\"../../assets/personalMatchmaker.svg\"\n                                    alt=\"VIP Benefits1\">\n                                <!-- <a style=\"font-size: 18px;margin:auto\">पर्सनल मैचमेकर पाएं</a> -->\n                                <a style=\"font-size: 14px;margin:auto\">Get a Personal Matchmaker</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"infoRow1\" style=\"flex:1 1 180px; margin:2%\">\n                        <div class=\"columnQ\">\n                            <div class=\"row\"\n                                style=\"text-align: center;display:flex;flex-direction:row;align-items:center;\">\n                                <h6 class=\"icon-circular\" style=\"position:absolute;\n                                left:-15px;display: inline-block;\n                                background: #5552fd; \n                                color: rgb(252, 249, 249);\n                                font-size:2.8rem;\n                                font-weight:1000!important;\">\n                                    2</h6>\n                                <img class=\"personalizedOfferImage\" src=\"../../assets/vipRishte.svg\"\n                                    alt=\"VIP Benefits1\">\n                                <!-- <a style=\"font-size: 18px;margin:auto\">पाएं सारे VIP रिश्ते</a> -->\n                                <a style=\"font-size: 14px;margin:auto\">Get all VIP Profiles</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"infoRow1\" style=\"flex:1 1 180px; margin:2%\">\n                        <div class=\"columnQ\">\n                            <div class=\"row\"\n                                style=\"text-align: center;display:flex;flex-direction:row;align-items:center;\">\n                                <h6 class=\"icon-circular\" style=\"position:absolute;\n                                left:-15px;display: inline-block;\n                                background: #5552fd; \n                                color: rgb(252, 249, 249);\n                                font-size:2.8rem;\n                                font-weight:1000!important;\">\n                                    3</h6>\n                                <img class=\"personalizedOfferImage\" style=\"width:37px\"\n                                    src=\"../../assets/familyMeeting.svg\" alt=\"VIP Benefits1\">\n                                <!-- <a style=\"font-size: 18px;margin:auto\">फैमिली मुलाकात<br>हमारे हॉल में FREE</a> -->\n                                <a style=\"font-size: 14px;margin:auto\">Family Meetings<br> in our hall for FREE</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"list\" *ngIf=\"isActive === 'personalized'\">\n                    <div class=\"row contentArea\">\n                        <div class=\"infoRow\" *ngFor=\"let item of plansPersonlised; let i = index\">\n                            <div class=\"column\">\n                                <div class=\"row information\">\n                                    <div class=\"columnar\"\n                                        style=\"background:rgba(226, 223, 223, 0.699);border-radius:20px 0 0 20px;\">\n                                        <div style=\"margin-top:auto;margin-bottom:auto;text-align:center\">\n                                            <div style=\"font-size:1.4rem;color: #354147 !important;\">\n                                                {{item.plan_name}}</div>\n                                            <div><a style=\"font-size: 1.2rem;\">{{item.validity}} Months</a></div><br>\n                                            <b class=\"\"\n                                                style=\"font-size: large; color: #00c2cb !important;\">₹{{setAmount(i,1)}}</b><br>\n                                            <a style=\"\n                                text-decoration: line-through;\n                                font-size: medium;  \n                                color: #596a76 !important;\n                              \">₹{{item.amount}}</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"columnar\" style=\"border-radius:0px 20px 20px 0px;padding:7% 3% 5% 2%\">\n                                        <div class=\"numOfContacts\">\n                                            <a> {{item.contacts}} Contact Numbers</a>\n                                        </div>\n                                        <ul style=\"margin-top:auto;margin-bottom:auto!important\">\n                                            <li *ngFor=\"let content of setContent(i,1)\">{{content}}</li>\n                                        </ul>\n                                        <button class=\"buyNow\" (click)=\"container(i,1)\">Buy Now</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- <div class=\"infoRow\" style=\"flex:1 1 300px!important; margin:0%\">\n                            <div class=\"column\">\n                                <div class=\"row information\">\n                                    <div class=\"columnar\"\n                                        style=\"background:rgba(226, 223, 223, 0.699);border-radius:20px 0 0 20px;\">\n                                        <div style=\"margin-top:auto;margin-bottom:auto;text-align:center\">\n                                            <div style=\"font-size:1.7rem;font-weight:bold;color: #354147 !important;\">\n                                                Premium 6</div>\n                                            <div><a style=\"font-size: large;\">6 Months</a></div><br>\n                                            <b class=\"\"\n                                                style=\"font-size: large; color: #00c2cb !important;\">₹17000</b><br>\n                                            <a style=\"\n                                text-decoration: line-through;\n                                font-size: medium;  \n                                color: #596a76 !important;\n                              \">₹21000</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"columnar\" style=\"border-radius:0px 20px 20px 0px;padding:7% 3% 5% 2%\">\n                                        <ul style=\"margin-top:auto;margin-bottom:auto!important\">\n                                            <li>मैचमेकर द्वारा मैचिंग प्रोफाइल</li>\n                                            <li>हर हफ्ते 2-4 परिवारों से आपके रिश्ते की बात </li>\n                                            <li>परिवारों से मीटिंग व मीटिंग के बाद का अपडेट</li>\n                                            <li>VIP मेंबर्स से फ्री कॉन्टेक्ट</li>\n                                            <li>उच्च वर्ग के रिश्ते </li>\n                                            <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                                        </ul>\n                                        <button class=\"buyNow\" (click)=\"container5()\">Buy Now</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"infoRow\" style=\"flex:1 1 300px!important; margin:0%\">\n                            <div class=\"column\">\n                                <div class=\"row information\">\n                                    <div class=\"columnar\"\n                                        style=\"background:rgba(226, 223, 223, 0.699);border-radius:20px 0 0 20px;\">\n                                        <div style=\"margin-top:auto;margin-bottom:auto;text-align:center\">\n                                            <div style=\"font-size:1.7rem;font-weight:bold;color: #354147 !important;\">\n                                                Premium 12</div>\n                                            <div><a style=\"font-size: large;\">12 Months</a></div><br>\n                                            <b class=\"\"\n                                                style=\"font-size: large; color: #00c2cb !important;\">₹25000</b><br>\n                                            <a style=\"\n                                text-decoration: line-through;\n                                font-size: medium;  \n                                color: #596a76 !important;\n                              \">₹41000</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"columnar\" style=\"border-radius:0px 20px 20px 0px;padding:7% 3% 5% 2%\">\n                                        <ul style=\"margin-top:auto;margin-bottom:auto!important\">\n                                            <li>मैचमेकर द्वारा मैचिंग प्रोफाइल</li>\n                                            <li>हर हफ्ते 2-4 परिवारों से आपके रिश्ते की बात </li>\n                                            <li>परिवारों से मीटिंग व मीटिंग के बाद का अपडेट</li>\n                                            <li>VIP मेंबर्स से फ्री कॉन्टेक्ट</li>\n                                            <li>उच्च वर्ग के रिश्ते </li>\n                                            <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                                        </ul>\n                                        <button class=\"buyNow\" (click)=\"container6()\">Buy Now</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"infoRow\" style=\"flex:1 1 300px!important; margin:0%\">\n                            <div class=\"column\">\n                                <div class=\"row information\">\n                                    <div class=\"columnar\"\n                                        style=\"background:rgba(226, 223, 223, 0.699);border-radius:20px 0 0 20px;\">\n                                        <div style=\"margin-top:auto;margin-bottom:auto;text-align:center\">\n                                            <div style=\"font-size:1.7rem;font-weight:bold;color: #354147 !important;\">\n                                                Deluxe NRI</div>\n                                            <div><a style=\"font-size: large;\">24 Months</a></div><br>\n                                            <b class=\"\"\n                                                style=\"font-size: large; color: #00c2cb !important;\">₹31000</b><br>\n                                            <a style=\"\n                                text-decoration: line-through;\n                                font-size: medium;  \n                                color: #596a76 !important;\n                              \">₹51000</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"columnar\" style=\"border-radius:0px 20px 20px 0px;padding:7% 3% 5% 2%\">\n                                        <ul style=\"margin-top:auto;margin-bottom:auto!important\">\n                                            <li>मैचमेकर द्वारा मैचिंग प्रोफाइल</li>\n                                            <li>हर हफ्ते 2-4 परिवारों से आपके रिश्ते की बात </li>\n                                            <li>परिवारों से मीटिंग व मीटिंग के बाद का अपडेट</li>\n                                            <li>VIP मेंबर्स से फ्री कॉन्टेक्ट</li>\n                                            <li>उच्च वर्ग के रिश्ते </li>\n                                            <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                                        </ul>\n                                        <button class=\"buyNow\" (click)=\"container7()\">Buy Now</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div> -->\n                        <div class=\"infoRow\" style=\"margin-bottom:5%\">\n                        </div>\n                    </div>\n                    <!-- <div style=\"display: flex;flex-direction: row;align-items: center;justify-content: space-evenly;\">\n\n                        <div (click)=\"container5()\" id=\"container5\"\n                            [ngClass]=\"{planItem: selectedContainer != 5 , planItemSelected: selectedContainer === 5 }\">\n                            <button id=\"button5\" (click)=\"container5()\" class=\"planHeader\">\n                                <p class=\"planHeaderText\">छोटा VIP प्लान</p>\n                                <p class=\"planSubHeaderText\">\n                                    3 महीने\n                                </p>\n                            </button>\n                            <ul>\n                                <li>मैचमेकर द्वारा मैचिंग प्रोफाइल</li>\n                                <li>हर हफ्ते 2-4 परिवारों से आपके रिश्ते की बात </li>\n                                <li>परिवारों से मीटिंग व मीटिंग के बाद का अपडेट</li>\n                                <li>VIP मेंबर्स से फ्री कॉन्टेक्ट</li>\n                                <li>उच्च वर्ग के रिश्ते </li>\n                                <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                            </ul>\n                            <div class=\"amnt\">\n                                <p> <del>₹15000</del></p>\n                                <p>₹11000</p>\n                            </div>\n                        </div>\n\n                        <div (click)=\"container6()\" id=\"container6\"\n                            [ngClass]=\"{planItem: selectedContainer !=6 , planItemSelected: selectedContainer === 6}\">\n                            <button id=\"button6\" (click)=\"container6()\" class=\"planHeader\">\n                                <p class=\"planHeaderText\">प्रीमियम 6</p>\n                                <p class=\"planSubHeaderText\">\n                                    6 महीने\n                                </p>\n                            </button>\n\n                            <ul>\n                                <li>मैचमेकर द्वारा मैचिंग प्रोफाइल</li>\n                                <li>हर हफ्ते 2-4 परिवारों से आपके रिश्ते की बात </li>\n                                <li>परिवारों से मीटिंग व मीटिंग के बाद का अपडेट</li>\n                                <li>VIP मेंबर्स से फ्री कॉन्टेक्ट</li>\n                                <li>उच्च वर्ग के रिश्ते </li>\n                                <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                            </ul>\n                            <div class=\"amnt\">\n                                <p> <del>₹21000</del></p>\n                                <p>₹17000</p>\n                            </div>\n                        </div>\n\n\n                        <div (click)=\"container7()\" id=\"container7\"\n                            [ngClass]=\"{planItem: selectedContainer != 7, planItemSelected: selectedContainer === 7 }\">\n                            <button id=\"button7\" (click)=\"container7()\" class=\"planHeader\">\n                                <p class=\"planHeaderText\">प्रीमियम 12</p>\n                                <p class=\"planSubHeaderText\">\n                                    12 महीने\n                                </p>\n                            </button>\n\n                            <ul>\n                                <li>मैचमेकर द्वारा मैचिंग प्रोफाइल</li>\n                                <li>हर हफ्ते 2-4 परिवारों से आपके रिश्ते की बात </li>\n                                <li>परिवारों से मीटिंग व मीटिंग के बाद का अपडेट</li>\n                                <li>VIP मेंबर्स से फ्री कॉन्टेक्ट</li>\n                                <li>उच्च वर्ग के रिश्ते </li>\n                                <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                            </ul>\n\n                            <div class=\"amnt\">\n                                <p> <del>₹41000</del></p>\n                                <p>₹25000</p>\n                            </div>\n                        </div>\n\n\n                        <div (click)=\"container8()\" id=\"container8\"\n                            [ngClass]=\"{planItem: selectedContainer != 8 , planItemSelected: selectedContainer === 8 }\">\n                            <button id=\"button8\" (click)=\"container8()\" class=\"planHeader\">\n                                <p class=\"planHeaderText\">डीलक्स NRI</p>\n                                <p class=\"planSubHeaderText\">\n                                    24 महीने\n                                </p>\n                            </button>\n\n                            <ul>\n                                <li>मैचमेकर द्वारा मैचिंग प्रोफाइल</li>\n                                <li>हर हफ्ते 2-4 परिवारों से आपके रिश्ते की बात </li>\n                                <li>परिवारों से मीटिंग व मीटिंग के बाद का अपडेट</li>\n                                <li>VIP मेंबर्स से फ्री कॉन्टेक्ट</li>\n                                <li>उच्च वर्ग के रिश्ते </li>\n                                <li>25+ सेंटर्स के 50,000+ रिश्ते</li>\n                            </ul>\n\n                            <div class=\"amnt\">\n                                <p> <del>₹51000</del></p>\n                                <p>₹31000</p>\n                            </div>\n                        </div>\n\n                    </div> -->\n                </div>\n            </div>\n        </main>\n    </main>\n</ng-container>");

/***/ }),

/***/ "./src/app/subscription/subscription-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/subscription/subscription-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SubscriptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionRoutingModule", function() { return SubscriptionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.component */ "./src/app/subscription/subscription.component.ts");




const routes = [
    { path: '',
        component: _subscription_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionComponent"]
    }
];
let SubscriptionRoutingModule = class SubscriptionRoutingModule {
};
SubscriptionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SubscriptionRoutingModule);



/***/ }),

/***/ "./src/app/subscription/subscription.component.css":
/*!*********************************************************!*\
  !*** ./src/app/subscription/subscription.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #carousel .carousel-indicators{\n  /* background-image: url('your-replacement.svg'); */\n  position:absolute!important;\n  bottom:-40px!important;\n}\n::ng-deep #carousel .carousel-indicators li{\n  width: 9px!important;\n  height: 0px!important;\n  background-clip: unset!important;\n  border-top: 0px solid transparent!important; \n  border-radius: 50%!important;\n}\nbody{\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8)!important;\n  }\nmain {\n    height: -webkit-fit-content!important;\n    height: -moz-fit-content!important;\n    height: fit-content!important;\n\n  }\np{\n    margin: 5px 0px 5px;\n  }\n.back-ground{\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\n    background-size: contain;\n    height: 100%;\n    padding-top: 0px;\n    background-size: contain;\n    \n  }\n.matIconDiv{\n    /* background: grey; */\n    width:45px;\n    border-radius: 100%;\n    padding: 2px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n  }\n.icon-circular {\n    margin-top: 4px !important;\n    padding: 7px;\n    width: 65px;\n    height: 65px;\n    border: 0px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 50%;\n    overflow: hidden;\n  }\n.icon-circular img {\n    width: 100%;\n  }\n.buttonOnline{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border:0px;\n    background:transparent;\n    float:left ;\n    margin-left:15%\n  }\n.buttonPersonalised{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border:0px;\n    background:transparent;\n    float: right;\n    margin-right:12%\n  }\n.information{\n    font-size:14px;\n    font-family: 'Gotham Rounded Book',Roboto, \"Helvetica Neue\", sans-serif;\n    margin:0px;\n    height:100%!important;\n  }\n.buttonsDiv{\n    position:-webkit-sticky;\n    position:sticky;\n    top:0px;\n    z-index:10;\n    background-image: linear-gradient(90deg, #4FB0E5, #566EE8);\n    display:inline-block;\n    align-items:center;\n    justify-content:center;\n  }\n.topBannerText {\n    top: 20%;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding-right: 30px;\n    align-items: center;\n    justify-content: center;\n\n  }\n.infoRow1{\n    position:relative;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content:center ;\n    margin-top:20px;\n    width:80%!important;\n    margin:auto;\n  }\n.infoRow{\n    position:relative;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content:center ;\n    margin-top:20px;\n    width:100%!important;\n    /* padding:5px; */\n    margin:auto;\n    overflow-x:hidden;\n    flex:1 1 400px; margin:0%\n  }\n.contentArea{\n    display:flex;\n    flex-wrap:wrap;\n    justify-content: center;\n  }\n.column{\n    height:-webkit-fit-content;\n    height:-moz-fit-content;\n    height:fit-content;\n    background:white;\n    border-radius:20px;\n    width:0%!important;\n    flex: 1 1;\n    margin:11px 13px 0px 13px;\n    padding:0 10px 0 0;\n    /* border: 1px solid rgba(187, 172, 172, 0.253); */\n    /* box-shadow: 3px 2px 2px 2px #00000049; */\n    box-shadow: 0px 3px 3px 2px #00000049;\n  }\n.columnQ{\n    height:-webkit-fit-content;\n    height:-moz-fit-content;\n    height:fit-content;\n    background:white;\n    border-radius:20px;\n    width:0%!important;\n    flex: 1 1;\n    margin:20px -8px 0px 26px;\n    /* border: 1px solid rgba(187, 172, 172, 0.253); */\n    /* box-shadow: 3px 2px 2px 2px #00000049; */\n    box-shadow: 0px 3px 3px 2px #00000049;\n  }\n.columnar{\n    background:white;\n    width:0%!important;\n    flex: 1 1;\n    margin:0px;\n    /* padding-left:5%; */\n    display:flex;\n    flex-direction:column;\n    align-items: center;\n    justify-content:center;\n  }\n.numOfContacts {\n    padding:3px 3px 0px 3px;\n    font-style: normal!important;\n    position: absolute;\n    top: -1px !important;\n    right: 5%;\n    background: #00c2cb;\n    border-radius: 3px 3px 3px 3px;\n    color:white;\n    font-weight: 600!important;\n    font-size:0.75rem;\n  }\nul {\n    font-size: 14px;\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: 100%;\n  }\n.btnSet{\n    text-align: center\n  }\n#main {\n     margin: 0px 400px 0px;\n     padding-bottom: 30px;\n  }\n.activeBut{\n    background:#4adee4;\n  }\n.active{\n    color: #34b7f1;\n    background-color: #c2f0fc;\n    font-weight: bold;\n    font-size: 1.2rem;\n    padding: 5px 20px;\n  }\n.inactive{\n    background-color: white;\n    color: #cdc9c9;\n    font-weight: bold;\n    font-size: 1.2rem;\n    padding: 5px 20px;\n  }\n.planItem {\n    border-radius: 15px;\n    margin: 10px 10px;\n    width: 25vw;\n    height: 50vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    border: 0.5px solid #c8c8c8;\n    background-color: white;\n  }\n.planItemSelected {\n    border-radius: 15px;\n    margin: 10px 10px;\n        width: 25vw;\n    height: 50vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    border: 0.5px solid #c8c8c8;\n    background-color: #c2f0fc;\n    \n  }\n#bannerImg{\n   position: relative;\n   width: 30%;\n   height: 100%;\n  }\n.list{\n    width: 100%;\n    height: auto;\n    position: relative;\n    display: -webkit-box;\n    flex-direction: row;\n    align-items: center;\n    scroll-behavior: smooth;\n    overflow-x: auto;\n    flex-flow: row;\n    padding-left: 10px;\n}\n.planHeader{\n  width: 100%;\n  background-color: #FAC8F1;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border: 0.5px solid #c8c8c8;\n}\n.planHeaderText {\n  color: #D313AE;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n.planSubHeaderText {\n  color: #707070;\n  font-size: 1.1rem;\n}\n.columnP{\n  height:-webkit-fit-content;\n  height:-moz-fit-content;\n  height:fit-content;\n  background:white;\n  border-radius:20px;\n  width:0%!important;\n  flex: 1 1;\n  margin:11px 13px 0px 13px;\n  /* border: 1px solid rgba(187, 172, 172, 0.253); */\n  /* box-shadow: 3px 2px 2px 2px #00000049; */\n  box-shadow: 0px 3px 3px 2px #00000049;\n  /* height:32vh; */\n}\np{\n  width: 100%;\n    text-align: center;\n}\n.spcase{\n  padding:10% 6% 8% 6%;\n}\n#buttonOnline {\n    padding: 5px 10px;\n    font-size: 14px;\n    border-radius: 10px;\n    background-color: #56a2f5;\n  }\n#buttonPersonalised {\n    background-color: transparent;\n    color: black;\n    padding: 5px 10px;\n    border-radius: 10px;\n    font-size: 14px;\n  }\n#buttonPersonalisedClicked {\n    background: linear-gradient(to right top,#285fdd,#0073e9,#0085f2,#0097f9,#00a8ff);\n    color: white;\n    padding: 5px 10px;\n    border-radius: 10px;\n    font-size: 14px;\n  }\n.buyNow {\n    background-color: #56a2f5;\n    border-radius: 10px;\n  }\n.buyNowPersonalized {\n    background-color: rgb(107, 168, 169);\n    border-radius: 10px;\n    color: black;\n  }\n.amnt {\n    bottom: 30px;\n  position: absolute;\n  }\nnav > .nav.nav-tabs{\n    border: none;\n      color:red;\n      background:white;\n      border-radius:0;\n  \n  }\n.buyNow{\n    display: flex;\n    flex-direction:row;\n    align-items: center;\n    justify-content: center;\n    font-size:1.1rem!important;\n    font-weight: normal;\n    border-radius:15px;\n    height:2.5rem;\n    width:60%;\n    margin:auto;\n    background:#f562ed;\n    color:white;\n    border:0px;\n    padding:10px 0 10px 0px;\n    margin-bottom:5%;\n  }\n.personalizedOfferImage{\n    width:30px;\n    margin:2% 0% 2% 17%;\n  }\n@media(min-width:1024px){\n  .spcase{\n    padding:3% 28% 3% 28%;\n  }\n  .buttonOnline{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border:0px;\n    background:transparent;\n    float:left ;\n    margin-left:30%\n  }\n  .buttonPersonalised{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border:0px;\n    background:transparent;\n    float: right;\n    margin-right:29%\n  }\n  /* .contentArea{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n  } */\n  .column{\n    height:-webkit-fit-content;\n    height:-moz-fit-content;\n    height:fit-content;\n    background:white;\n    border-radius:20px;\n    width:0%!important;\n    flex: 1 1;\n    margin:11px 13px 0px 13px;\n    /* border: 1px solid rgba(187, 172, 172, 0.253); */\n    /* box-shadow: 3px 2px 2px 2px #00000049; */\n    box-shadow: 0px 3px 3px 2px #00000049;\n     height:25em!important;\n  }\n  .columnQ{\n    height:-webkit-fit-content;\n    height:-moz-fit-content;\n    height:fit-content;\n    background:white;\n    border-radius:20px;\n    width:0%!important;\n    flex: 1 1;\n    margin:20px -8px 0px 26px;\n    /* border: 1px solid rgba(187, 172, 172, 0.253); */\n    /* box-shadow: 3px 2px 2px 2px #00000049; */\n    box-shadow: 0px 3px 3px 2px #00000049;\n  }\n  .columnP{\n    height:-webkit-fit-content;\n    height:-moz-fit-content;\n    height:fit-content;\n    background:white;\n    border-radius:20px;\n    width:0%!important;\n    flex: 1 1;\n    margin:11px 13px 0px 13px;\n    /* border: 1px solid rgba(187, 172, 172, 0.253); */\n    /* box-shadow: 3px 2px 2px 2px #00000049; */\n    box-shadow: 0px 3px 3px 2px #00000049;\n    height:27vh;\n  }\n  .numOfContacts {\n    padding:3px 3px 0px 3px;\n    font-style: normal!important;\n    position: absolute;\n    top: -4px !important;\n    right: 8%;\n    background: #00c2cb;\n    border-radius: 3px 3px 3px 3px;\n    color:white;\n    font-weight: 600!important;\n    font-size:0.9rem;\n  }\n}\n@media only screen and (max-width: 1024px) {\n    #main {\n       margin: 0px;\n       width: 100%;\n       padding-bottom: 30px;\n    }\n    .colSet {\n      width: 33%;\n    }\n    .rowSet{\n      margin: 0px;\n      padding: 0px 20px 20px;\n    }\n    .btnSet{\n      text-align: center\n    }\n    \n  .featurePersonalised{\n    font-weight: bold\n}\n \n    nav{\n      padding: 0 45px;\n    }\n    .back-ground{\n      background-image: linear-gradient(90deg, #4FB0E5, #566EE8);      \n      background-size: contain;\n      height: 100%;\n      margin: 0px;\n    }\n\n\n    .planItem {\n      border-radius: 15px;\n      margin: 10px 10px;\n      width: 60vw;\n      height: 60vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: flex-start;\n      border: 0.5px solid #c8c8c8;\n      background-color: white;\n    }\n    .planItemSelected {\n      border-radius: 15px;\n      margin: 10px 10px;\n      width: 60vw;\n      height: 60vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: flex-start;\n      border: 0.5px solid #c8c8c8;\n      background-color: #c2f0fc;\n    }\n\n    \n  }\n@media only screen and (max-width: 900px) {\n    #main {\n       margin: 0px;\n       width: 100%;\n       padding-bottom: 30px;\n    }\n    .colSet {\n      width: 33%;\n    }\n    .rowSet{\n      margin: 0px;\n      padding: 0px 20px 20px;\n    }\n    .btnSet{\n      text-align: center\n    }\n  \n  .featurePersonalised{\n    font-weight: bold\n}\n\nh2,h4 {\n  font-size: 1.5rem;\n}\n#bannerImg{\n  position: relative;\n  width: 100%;\n  height: 100%;\n }\n\n    \n  }\n@media (min-width : 576px){\n  \n    #logo{\n        width:50px;height:50px\n    }\n    .header{\n        padding: 10px;\n    }\n    #company-name{\n        font-size:1rem;margin-top:auto;margin-bottom:auto\n    }\n    .row{\n        width: 100%;\n        padding: 0px;\n        margin:0px\n    }\n    \n    #button-div{\n        text-align: center;\n        padding: 0px\n    }\n\n    .v-align{\n        margin-top: auto;\n        margin-bottom: auto\n    }\n  \n  \n    .featurePersonalised{\n      font-weight: bold\n  }\n    \n    .text-center{\n        margin-left: auto;\n        margin-right: auto\n    }\n  \n    h5 {\n        color: black;margin-bottom: 0px\n    }\n  \n   #plan-option{\n     display:inline-flex\n   }\n  \n   #option{\n    margin-top:25px;background-color:white;\n   }\n  \n   #contain{\n    display:inline-flex;width: 100%\n   }\n\n    \n  }\n.option{\n    background-color:White;\n    margin:25px 10px 0px;\n    border-radius:10px;\n  }\n@media (max-width: 350px) {\n\n    .topBannerText {\n      top: 30%;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n     width: 100%;\n     align-items: center;\n    justify-content: center;\n    }\n\n    .planItem {\n      border-radius: 15px;\n      margin: 10px 10px;\n      width: 60vw;\n      height: 58vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: flex-start;\n      border: 0.5px solid #c8c8c8;\n      background-color: white;\n    }\n    .planItemSelected {\n      border-radius: 15px;\n      margin: 10px 10px;\n      width: 60vw;\n      height: 58vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: flex-start;\n      border: 0.5px solid #c8c8c8;\n      background-color: #c2f0fc;\n    }\n    \n\n    .amnt {\n      bottom: 10px;\n    position: absolute;\n    }\n    ul {\n      font-size: 12px;\n      margin-top: 10px;\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      width: 100%;\n    }\n    .active{\n      color: #34b7f1;\n      background-color: #c2f0fc;\n      font-weight: bold;\n      font-size: 1rem;\n      padding: 5px 20px;\n    }\n  \n    .inactive{\n      background-color: white;\n      color: #cdc9c9;\n      font-weight: bold;\n      font-size: 1rem;\n      padding: 5px 20px;\n    }\n    h2,h4 {\n      font-size: 1.5rem;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbURBQW1EO0VBQ25ELDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLDJDQUEyQztFQUMzQyw0QkFBNEI7QUFDOUI7QUFDQztJQUNHLG9FQUFvRTtFQUN0RTtBQUNBO0lBQ0UscUNBQTZCO0lBQTdCLGtDQUE2QjtJQUE3Qiw2QkFBNkI7O0VBRS9CO0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLDBEQUEwRDtJQUMxRCx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix3QkFBd0I7O0VBRTFCO0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9CO0FBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUdwQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWDtFQUNGO0FBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1o7RUFDRjtBQUNBO0lBQ0UsY0FBYztJQUNkLHVFQUF1RTtJQUN2RSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSx1QkFBZTtJQUFmLGVBQWU7SUFDZixP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Rjs7R0FFQTtJQUNDLGVBQWUsQ0FBQyxzQkFBc0I7R0FDdkM7O0dBRUE7SUFDQyxtQkFBbUIsQ0FBQztHQUNyQjs7O0VBR0Q7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCO0FBRUE7O0lBRUU7TUFDRSxRQUFRO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7S0FDckIsV0FBVztLQUNYLG1CQUFtQjtJQUNwQix1QkFBdUI7SUFDdkI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsMkJBQTJCO01BQzNCLDJCQUEyQjtNQUMzQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsV0FBVztNQUNYLFlBQVk7TUFDWixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQiwyQkFBMkI7TUFDM0IsMkJBQTJCO01BQzNCLHlCQUF5QjtJQUMzQjs7O0lBR0E7TUFDRSxZQUFZO0lBQ2Qsa0JBQWtCO0lBQ2xCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLFdBQVc7SUFDYjtJQUNBO01BQ0UsY0FBYztNQUNkLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2QixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwICNjYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCd5b3VyLXJlcGxhY2VtZW50LnN2ZycpOyAqL1xuICBwb3NpdGlvbjphYnNvbHV0ZSFpbXBvcnRhbnQ7XG4gIGJvdHRvbTotNDBweCFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgI2Nhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpe1xuICB3aWR0aDogOXB4IWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwcHghaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHVuc2V0IWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkIHRyYW5zcGFyZW50IWltcG9ydGFudDsgXG4gIGJvcmRlci1yYWRpdXM6IDUwJSFpbXBvcnRhbnQ7XG59XG4gYm9keXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpIWltcG9ydGFudDtcbiAgfVxuICBtYWluIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50IWltcG9ydGFudDtcblxuICB9XG4gIHB7XG4gICAgbWFyZ2luOiA1cHggMHB4IDVweDtcbiAgfVxuICAuYmFjay1ncm91bmR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIFxuICB9XG4gIC5tYXRJY29uRGl2e1xuICAgIC8qIGJhY2tncm91bmQ6IGdyZXk7ICovXG4gICAgd2lkdGg6NDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICAuaWNvbi1jaXJjdWxhciB7XG4gICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNjVweDtcbiAgICBib3JkZXI6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmljb24tY2lyY3VsYXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYnV0dG9uT25saW5le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjowcHg7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBmbG9hdDpsZWZ0IDtcbiAgICBtYXJnaW4tbGVmdDoxNSVcbiAgfVxuICAuYnV0dG9uUGVyc29uYWxpc2Vke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjowcHg7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjEyJVxuICB9XG4gIC5pbmZvcm1hdGlvbntcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBmb250LWZhbWlseTogJ0dvdGhhbSBSb3VuZGVkIEJvb2snLFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjowcHg7XG4gICAgaGVpZ2h0OjEwMCUhaW1wb3J0YW50O1xuICB9XG4gIC5idXR0b25zRGl2e1xuICAgIHBvc2l0aW9uOnN0aWNreTtcbiAgICB0b3A6MHB4O1xuICAgIHotaW5kZXg6MTA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNEZCMEU1LCAjNTY2RUU4KTtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgfVxuICAudG9wQmFubmVyVGV4dCB7XG4gICAgdG9wOiAyMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICB9XG4gIC5pbmZvUm93MXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgd2lkdGg6ODAlIWltcG9ydGFudDtcbiAgICBtYXJnaW46YXV0bztcbiAgfVxuICAuaW5mb1Jvd3tcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyIDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7XG4gICAgLyogcGFkZGluZzo1cHg7ICovXG4gICAgbWFyZ2luOmF1dG87XG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XG4gICAgZmxleDoxIDEgNDAwcHg7IG1hcmdpbjowJVxuICB9XG4gIC5jb250ZW50QXJlYXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC13cmFwOndyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmNvbHVtbntcbiAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgd2lkdGg6MCUhaW1wb3J0YW50O1xuICAgIGZsZXg6IDEgMTtcbiAgICBtYXJnaW46MTFweCAxM3B4IDBweCAxM3B4O1xuICAgIHBhZGRpbmc6MCAxMHB4IDAgMDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NywgMTcyLCAxNzIsIDAuMjUzKTsgKi9cbiAgICAvKiBib3gtc2hhZG93OiAzcHggMnB4IDJweCAycHggIzAwMDAwMDQ5OyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDJweCAjMDAwMDAwNDk7XG4gIH1cbiAgLmNvbHVtblF7XG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIHdpZHRoOjAlIWltcG9ydGFudDtcbiAgICBmbGV4OiAxIDE7XG4gICAgbWFyZ2luOjIwcHggLThweCAwcHggMjZweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NywgMTcyLCAxNzIsIDAuMjUzKTsgKi9cbiAgICAvKiBib3gtc2hhZG93OiAzcHggMnB4IDJweCAycHggIzAwMDAwMDQ5OyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDJweCAjMDAwMDAwNDk7XG4gIH1cbiAgLmNvbHVtbmFye1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgd2lkdGg6MCUhaW1wb3J0YW50O1xuICAgIGZsZXg6IDEgMTtcbiAgICBtYXJnaW46MHB4O1xuICAgIC8qIHBhZGRpbmctbGVmdDo1JTsgKi9cbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgfVxuICAubnVtT2ZDb250YWN0cyB7XG4gICAgcGFkZGluZzozcHggM3B4IDBweCAzcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMXB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDUlO1xuICAgIGJhY2tncm91bmQ6ICMwMGMyY2I7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTowLjc1cmVtO1xuICB9XG4gIHVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmJ0blNldHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgfVxuICAjbWFpbiB7XG4gICAgIG1hcmdpbjogMHB4IDQwMHB4IDBweDtcbiAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cbiAgLmFjdGl2ZUJ1dHtcbiAgICBiYWNrZ3JvdW5kOiM0YWRlZTQ7XG4gIH1cbiAgLmFjdGl2ZXtcbiAgICBjb2xvcjogIzM0YjdmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJmMGZjO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICB9XG5cbiAgLmluYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjY2RjOWM5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICB9XG5cbiAgLnBsYW5JdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYzhjOGM4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5wbGFuSXRlbVNlbGVjdGVkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgICB3aWR0aDogMjV2dztcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI2M4YzhjODtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJmMGZjO1xuICAgIFxuICB9XG5cbiAgI2Jhbm5lckltZ3tcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIHdpZHRoOiAzMCU7XG4gICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubGlzdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnBsYW5IZWFkZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFDOEYxO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYzhjOGM4O1xufVxuXG4ucGxhbkhlYWRlclRleHQge1xuICBjb2xvcjogI0QzMTNBRTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ucGxhblN1YkhlYWRlclRleHQge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uY29sdW1uUHtcbiAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICBiYWNrZ3JvdW5kOndoaXRlO1xuICBib3JkZXItcmFkaXVzOjIwcHg7XG4gIHdpZHRoOjAlIWltcG9ydGFudDtcbiAgZmxleDogMSAxO1xuICBtYXJnaW46MTFweCAxM3B4IDBweCAxM3B4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NywgMTcyLCAxNzIsIDAuMjUzKTsgKi9cbiAgLyogYm94LXNoYWRvdzogM3B4IDJweCAycHggMnB4ICMwMDAwMDA0OTsgKi9cbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggMnB4ICMwMDAwMDA0OTtcbiAgLyogaGVpZ2h0OjMydmg7ICovXG59XG5cbnB7XG4gIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zcGNhc2V7XG4gIHBhZGRpbmc6MTAlIDYlIDglIDYlO1xufVxuXG4gICNidXR0b25PbmxpbmUge1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmEyZjU7XG4gIH1cbiAgI2J1dHRvblBlcnNvbmFsaXNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgI2J1dHRvblBlcnNvbmFsaXNlZENsaWNrZWQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsIzI4NWZkZCwjMDA3M2U5LCMwMDg1ZjIsIzAwOTdmOSwjMDBhOGZmKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmJ1eU5vdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YTJmNTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5idXlOb3dQZXJzb25hbGl6ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcsIDE2OCwgMTY5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5hbW50IHtcbiAgICBib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIG5hdiA+IC5uYXYubmF2LXRhYnN7XG4gICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6cmVkO1xuICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgXG4gIH1cbiAgLmJ1eU5vd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZToxLjFyZW0haW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgIGhlaWdodDoyLjVyZW07XG4gICAgd2lkdGg6NjAlO1xuICAgIG1hcmdpbjphdXRvO1xuICAgIGJhY2tncm91bmQ6I2Y1NjJlZDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6MHB4O1xuICAgIHBhZGRpbmc6MTBweCAwIDEwcHggMHB4O1xuICAgIG1hcmdpbi1ib3R0b206NSU7XG4gIH1cbiAgXG4gIC5wZXJzb25hbGl6ZWRPZmZlckltYWdle1xuICAgIHdpZHRoOjMwcHg7XG4gICAgbWFyZ2luOjIlIDAlIDIlIDE3JTtcbiAgfVxuQG1lZGlhKG1pbi13aWR0aDoxMDI0cHgpe1xuICAuc3BjYXNle1xuICAgIHBhZGRpbmc6MyUgMjglIDMlIDI4JTtcbiAgfVxuICAuYnV0dG9uT25saW5le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjowcHg7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBmbG9hdDpsZWZ0IDtcbiAgICBtYXJnaW4tbGVmdDozMCVcbiAgfVxuICAuYnV0dG9uUGVyc29uYWxpc2Vke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlcjowcHg7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OjI5JVxuICB9XG4gIC8qIC5jb250ZW50QXJlYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfSAqL1xuICAuY29sdW1ue1xuICAgIGhlaWdodDpmaXQtY29udGVudDtcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICB3aWR0aDowJSFpbXBvcnRhbnQ7XG4gICAgZmxleDogMSAxO1xuICAgIG1hcmdpbjoxMXB4IDEzcHggMHB4IDEzcHg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODcsIDE3MiwgMTcyLCAwLjI1Myk7ICovXG4gICAgLyogYm94LXNoYWRvdzogM3B4IDJweCAycHggMnB4ICMwMDAwMDA0OTsgKi9cbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAycHggIzAwMDAwMDQ5O1xuICAgICBoZWlnaHQ6MjVlbSFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbHVtblF7XG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIHdpZHRoOjAlIWltcG9ydGFudDtcbiAgICBmbGV4OiAxIDE7XG4gICAgbWFyZ2luOjIwcHggLThweCAwcHggMjZweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NywgMTcyLCAxNzIsIDAuMjUzKTsgKi9cbiAgICAvKiBib3gtc2hhZG93OiAzcHggMnB4IDJweCAycHggIzAwMDAwMDQ5OyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDJweCAjMDAwMDAwNDk7XG4gIH1cbiAgLmNvbHVtblB7XG4gICAgaGVpZ2h0OmZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIHdpZHRoOjAlIWltcG9ydGFudDtcbiAgICBmbGV4OiAxIDE7XG4gICAgbWFyZ2luOjExcHggMTNweCAwcHggMTNweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4NywgMTcyLCAxNzIsIDAuMjUzKTsgKi9cbiAgICAvKiBib3gtc2hhZG93OiAzcHggMnB4IDJweCAycHggIzAwMDAwMDQ5OyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IDJweCAjMDAwMDAwNDk7XG4gICAgaGVpZ2h0OjI3dmg7XG4gIH1cbiAgLm51bU9mQ29udGFjdHMge1xuICAgIHBhZGRpbmc6M3B4IDNweCAwcHggM3B4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbCFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTRweCAhaW1wb3J0YW50O1xuICAgIHJpZ2h0OiA4JTtcbiAgICBiYWNrZ3JvdW5kOiAjMDBjMmNiO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6MC45cmVtO1xuICB9XG59XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgI21haW4ge1xuICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuY29sU2V0IHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgfVxuICAgIC5yb3dTZXR7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHg7XG4gICAgfVxuICAgIC5idG5TZXR7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG4gICAgXG4gIC5mZWF0dXJlUGVyc29uYWxpc2Vke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59XG4gXG4gICAgbmF2e1xuICAgICAgcGFkZGluZzogMCA0NXB4O1xuICAgIH1cbiAgICAuYmFjay1ncm91bmR7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0RkIwRTUsICM1NjZFRTgpOyAgICAgIFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG5cbiAgICAucGxhbkl0ZW0ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgd2lkdGg6IDYwdnc7XG4gICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLnBsYW5JdGVtU2VsZWN0ZWQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgd2lkdGg6IDYwdnc7XG4gICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNjOGM4Yzg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJmMGZjO1xuICAgIH1cblxuICAgIFxuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgI21haW4ge1xuICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuY29sU2V0IHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgfVxuICAgIC5yb3dTZXR7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweCAyMHB4IDIwcHg7XG4gICAgfVxuICAgIC5idG5TZXR7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB9XG4gIFxuICAuZmVhdHVyZVBlcnNvbmFsaXNlZHtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG5oMixoNCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuI2Jhbm5lckltZ3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuIH1cblxuICAgIFxuICB9XG4gIFxuICBAbWVkaWEgKG1pbi13aWR0aCA6IDU3NnB4KXtcbiAgXG4gICAgI2xvZ297XG4gICAgICAgIHdpZHRoOjUwcHg7aGVpZ2h0OjUwcHhcbiAgICB9XG4gICAgLmhlYWRlcntcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgI2NvbXBhbnktbmFtZXtcbiAgICAgICAgZm9udC1zaXplOjFyZW07bWFyZ2luLXRvcDphdXRvO21hcmdpbi1ib3R0b206YXV0b1xuICAgIH1cbiAgICAucm93e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46MHB4XG4gICAgfVxuICAgIFxuICAgICNidXR0b24tZGl2e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweFxuICAgIH1cblxuICAgIC52LWFsaWdue1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvXG4gICAgfVxuICBcbiAgXG4gICAgLmZlYXR1cmVQZXJzb25hbGlzZWR7XG4gICAgICBmb250LXdlaWdodDogYm9sZFxuICB9XG4gICAgXG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gICAgfVxuICBcbiAgICBoNSB7XG4gICAgICAgIGNvbG9yOiBibGFjazttYXJnaW4tYm90dG9tOiAwcHhcbiAgICB9XG4gIFxuICAgI3BsYW4tb3B0aW9ue1xuICAgICBkaXNwbGF5OmlubGluZS1mbGV4XG4gICB9XG4gIFxuICAgI29wdGlvbntcbiAgICBtYXJnaW4tdG9wOjI1cHg7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgIH1cbiAgXG4gICAjY29udGFpbntcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O3dpZHRoOiAxMDAlXG4gICB9XG5cbiAgICBcbiAgfVxuICBcbiAgLm9wdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOldoaXRlO1xuICAgIG1hcmdpbjoyNXB4IDEwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xuXG4gICAgLnRvcEJhbm5lclRleHQge1xuICAgICAgdG9wOiAzMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnBsYW5JdGVtIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgaGVpZ2h0OiA1OHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYzhjOGM4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5wbGFuSXRlbVNlbGVjdGVkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgaGVpZ2h0OiA1OHZoO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjYzhjOGM4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZjBmYztcbiAgICB9XG4gICAgXG5cbiAgICAuYW1udCB7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICB1bCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYWN0aXZle1xuICAgICAgY29sb3I6ICMzNGI3ZjE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJmMGZjO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICB9XG4gIFxuICAgIC5pbmFjdGl2ZXtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgY29sb3I6ICNjZGM5Yzk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIH1cbiAgICBoMixoNCB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/subscription/subscription.component.ts":
/*!********************************************************!*\
  !*** ./src/app/subscription/subscription.component.ts ***!
  \********************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _subscriptionservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subscriptionservice.service */ "./src/app/subscriptionservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_kc_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-kc-notification */ "./node_modules/ngx-kc-notification/fesm2015/ngx-kc-notification.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .././language.service */ "./src/app/language.service.ts");
/* harmony import */ var _todays_payment_popup_todays_payment_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../todays-payment-popup/todays-payment-popup.component */ "./src/app/todays-payment-popup/todays-payment-popup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");












let SubscriptionComponent = class SubscriptionComponent {
    // tslint:disable-next-line: max-line-length
    constructor(http, subscriptionService, spinner, browserLocation, router, breakPointObserver, dialog, ngxNotificationService, languageService, activatedRoute) {
        this.http = http;
        this.subscriptionService = subscriptionService;
        this.spinner = spinner;
        this.browserLocation = browserLocation;
        this.router = router;
        this.breakPointObserver = breakPointObserver;
        this.dialog = dialog;
        this.ngxNotificationService = ngxNotificationService;
        this.languageService = languageService;
        this.activatedRoute = activatedRoute;
        this.plans = [];
        this.plansOnline = [];
        this.plansPersonlised = [];
        this.show1 = true;
        this.show2 = false;
        this.isActive = 'online';
        this.plan = 0;
        this.images = [
            '../../../assets/Banner1.jpeg',
            '../../../assets/Banner2.jpeg',
            '../../../assets/Banner3.jpeg',
        ];
    }
    ngOnInit() {
        // this.activatedRoute.params.subscribe((data: any) => {
        //   if (data) {
        //     console.log('look here', data.parameter)
        //     this.isActive = (Number(data.parameter) === 0) ? 'online' : 'personalized';
        //   }
        // });
        if (this.router.url.match('1')) {
            this.isActive = 'personalized';
        }
        else {
            this.isActive = 'online';
        }
        if (localStorage.getItem('authData')) {
            this.authData = JSON.parse(localStorage.getItem('authData'));
        }
        this.subscriptionService.loadRazorPayScript();
        this.innerWidth = window.innerWidth;
        const authData = JSON.parse(localStorage.getItem('authData'));
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        this.http.get(`https://partner.hansmatrimony.com/api/getWebsitePlanById?id=${localStorage.getItem('id')}
      &is_lead=${localStorage.getItem('is_lead')}`, { headers }).subscribe((res) => {
            this.plans = res;
            if (localStorage.getItem('showRemarrigePlan') && localStorage.getItem('showRemarrigePlan') === '1') {
                for (let i = 0; i < this.plans.length; i++) {
                    if (this.plans[i].plan_type === 'Self Service Plan') {
                        this.plansOnline.push(this.plans[i]);
                    }
                    else {
                        this.plansPersonlised.push(this.plans[i]);
                    }
                }
            }
            else {
                if (!localStorage.getItem('low income') && localStorage.getItem('low income') !== 'true') {
                    for (let i = 0; i < this.plans.length; i++) {
                        if (this.plans[i].plan_name != 'Re-Marriage' &&
                            this.plans[i].plan_name != 'Re-Marriage Deluxe') {
                            if (this.plans[i].plan_type === 'Self Service Plan') {
                                this.plansOnline.push(this.plans[i]);
                            }
                            else {
                                this.plansPersonlised.push(this.plans[i]);
                            }
                        }
                    }
                }
                else {
                    for (let i = 0; i < this.plans.length; i++) {
                        if (this.plans[i].plan_name !== 'Re-Marriage' && this.plans[i].plan_name !== 'Re-Marriage Deluxe') {
                            if (this.plans[i].plan_type === 'Self Service Plan') {
                                if (this.plans[i].plan_name === 'Basic' && this.plans[i].category_name !== 'Normal'
                                    && (this.authData && this.authData.gender === 'Male')) {
                                    this.plansOnline.push(this.plans[i]);
                                }
                                else if (this.plans[i].plan_name !== 'Basic' && this.plans[i].category_name === 'Normal') {
                                    this.plansOnline.push(this.plans[i]);
                                }
                            }
                            else {
                                this.plansPersonlised.push(this.plans[i]);
                            }
                        }
                    }
                }
            }
            console.log(this.plansOnline);
            console.log(this.plansPersonlised);
            this.spinner.hide();
            console.log(this.plans);
        }, (err) => {
            this.spinner.hide();
        });
        if (localStorage.getItem('id')) {
            this.getCredits();
        }
        if (localStorage.getItem('mobile_number')) {
            this.subscriptionViewed();
        }
    }
    togglePersonalized() {
        this.isActive = 'personalized';
        this.selectedContainer = 5;
        //this.container5();
        console.log(this.isActive);
    }
    toggleOnline() {
        this.isActive = 'online';
        this.selectedContainer = 1;
        //this.container1();
        console.log(this.isActive);
    }
    getCredits() {
        // tslint:disable-next-line: max-line-length
        return this.http.post('https://partner.hansmatrimony.com/api/getWhatsappPoint?id=' + localStorage.getItem('id'), { params: { ['id']: localStorage.getItem('id') } }).subscribe((data) => {
            this.points = data.whatsapp_points;
            console.log(this.points);
        }, (error) => {
            console.log(error);
        });
    }
    getRazorPay(amt, type, plan, name, email, phone) {
        // plan = 0 for online plans and plan = 1 for personalized plans
        if (plan === 0) {
            return this.subscriptionService.payNowT(amt, type, 0, name, email, phone, this.credits);
        }
        else {
            // tslint:disable-next-line: no-unused-expression
            return this.subscriptionService.payNowT(amt, type, 1, name, email, phone, this.credits);
        }
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
    }
    subscriptionViewed() {
        const formData = new FormData();
        formData.append('mobile', localStorage.getItem('mobile_number'));
        this.http.post('https://partner.hansmatrimony.com/api/isSubscriptionViewed', formData).subscribe((data) => {
            console.log(data);
            this.analyticsEvent('Subscription Seen');
        });
    }
    analyticsEvent(event) {
        window.ga('send', 'event', event, '', {
            hitCallback: () => {
                console.log('Tracking ' + event + ' successful');
            }
        });
        // gtag app + web
        window.gtag('event', event, {
            event_callback: () => {
                console.log('Tracking gtag ' + event + ' successful');
            }
        });
    }
    facebookAnalytics(event) {
        window.fbq('track', event, {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobile_number'),
        });
        window.fbq('track', '692972151223870', event, {
            value: localStorage.getItem('id'),
            content_name: localStorage.getItem('mobiler_number'),
        });
    }
    openDialog() {
        if (localStorage.getItem('mobile_number')) {
            if (this.price) {
                if (localStorage.getItem('mobile_number')) {
                    this.getRazorPay(this.price, 'live', 0, '', '', localStorage.getItem('mobile_number'));
                }
                else {
                    this.getRazorPay(this.price, 'live', 0, '', '', '');
                }
                this.analyticsEvent('Payement Gateway Opened For ' + this.price);
                this.subscriptionViewed();
                this.facebookAnalytics('InitiateCheckout');
            }
            else {
                this.ngxNotificationService.error('Something Went Wrong');
            }
        }
        else {
            this.ngxNotificationService.warning('Please Login First');
            this.router.navigateByUrl('phone-number');
        }
    }
    goBack() {
        this.browserLocation.back();
    }
    openTodaysPopupAd() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"]();
        dialogConfig.hasBackdrop = true;
        this.breakPointObserver.observe([
            '(min-width: 1024px)'
        ]).subscribe(result => {
            if (result.matches) {
                console.log('screen is greater than  1024px');
                dialogConfig.maxWidth = '30vw';
                dialogConfig.minHeight = '80vh';
                dialogConfig.disableClose = false;
            }
            else {
                console.log('screen is less than  1024px');
                dialogConfig.minWidth = '90vw';
                dialogConfig.minHeight = '70vh';
                dialogConfig.disableClose = true;
            }
        });
        dialogConfig.data = {
            plan: this.plan,
            chooseMethod: true,
            selectedContainer: this.selectedContainer,
            price: this.price,
            credits: this.credits
        };
        dialogConfig.id = 'todaysPopup';
        const dialogRef = this.dialog.open(_todays_payment_popup_todays_payment_popup_component__WEBPACK_IMPORTED_MODULE_9__["TodaysPaymentPopupComponent"], dialogConfig);
    }
    setAmount(index, type) {
        if (type === 0) {
            return this.plansOnline[index].amount - (this.plansOnline[index].amount * this.plansOnline[index].discount / 100);
        }
        else {
            return this.plansPersonlised[index].amount - (this.plansPersonlised[index].amount * this.plansPersonlised[index].discount / 100);
        }
    }
    setContent(index, type) {
        if (type == 0) {
            let content = this.plansOnline[index].content.split(',');
            return content;
        }
        else {
            let content = this.plansPersonlised[index].content.split(';');
            return content;
        }
    }
    container(index, type) {
        this.price = this.setAmount(index, type);
        this.credits = (type == 0) ? this.plansOnline[index].contacts : this.plansPersonlised[index].contacts;
        this.selectedContainer = (type == 0) ? index + 1 : this.plansOnline.length + 1;
        this.plan = type;
        this.openTodaysPopupAd();
    }
    container1() {
        this.price = '2800';
        this.credits = '45';
        this.selectedContainer = 1;
        //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
        this.openTodaysPopupAd();
    }
    container2() {
        this.price = '4500';
        this.credits = '90';
        this.selectedContainer = 2;
        //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
        this.openTodaysPopupAd();
    }
    container3() {
        this.price = '7500';
        this.credits = '45';
        this.selectedContainer = 3;
        //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
        this.openTodaysPopupAd();
    }
    // container4() {
    //   this.price = '4500';
    //   this.credits = '45';
    //   this.selectedContainer = 4;
    //   //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
    //   this.openTodaysPopupAd();
    // }
    container4() {
        this.price = '11000';
        this.credits = '5';
        this.selectedContainer = 4;
        //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
        this.openTodaysPopupAd();
    }
    container5() {
        this.price = '17000';
        this.credits = '5';
        this.selectedContainer = 5;
        //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
        this.openTodaysPopupAd();
    }
    container6() {
        this.price = '25000';
        this.credits = '5';
        this.selectedContainer = 6;
        //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
        this.openTodaysPopupAd();
    }
    container7() {
        this.price = '31000';
        this.credits = '5';
        this.selectedContainer = 7;
        //document.getElementById('planButton').scrollIntoView({ behavior: 'smooth' });
        this.openTodaysPopupAd();
    }
};
SubscriptionComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _subscriptionservice_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionserviceService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["BreakpointObserver"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: ngx_kc_notification__WEBPACK_IMPORTED_MODULE_5__["NgxNotificationService"] },
    { type: _language_service__WEBPACK_IMPORTED_MODULE_8__["LanguageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], SubscriptionComponent.prototype, "onResize", null);
SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscription',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subscription.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subscription.component.css */ "./src/app/subscription/subscription.component.css")).default]
    })
], SubscriptionComponent);



/***/ }),

/***/ "./src/app/subscription/subscription.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/subscription/subscription.module.ts ***!
  \*****************************************************/
/*! exports provided: SubscriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModule", function() { return SubscriptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscription.component */ "./src/app/subscription/subscription.component.ts");
/* harmony import */ var _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-routing.module */ "./src/app/subscription/subscription-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







//import { TodaysPaymentPopupComponent } from '../chat/today-profiles/todays-payment-popup/todays-payment-popup.component';
let SubscriptionModule = class SubscriptionModule {
};
SubscriptionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _subscription_component__WEBPACK_IMPORTED_MODULE_4__["SubscriptionComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"],
            _subscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubscriptionRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ],
        entryComponents: [
        //TodaysPaymentPopupComponent
        ]
    })
], SubscriptionModule);



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module-es2015.js.map