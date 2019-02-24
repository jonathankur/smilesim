webpackJsonp([2],{

/***/ 149:
/***/ (function(module, exports) {

//# sourceMappingURL=dosim.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MysimsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MysimsPage = /** @class */ (function () {
    function MysimsPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.cards = [];
        this.me = '';
        this.instr = '';
        this.cards = [];
    }
    MysimsPage.prototype.ionViewDidLoad = function () {
        this.cards = [];
        this.instr = '';
        this.me = window.localStorage.getItem('uniq');
        var that = this;
        var url = 'mysims.php?me=' + window.localStorage.getItem('uniq') + '&end=' + Math.random();
        this.connect.getList(url).subscribe(function (data) {
            that.cards = data.cards;
            that.instr = data.instr;
        }, function (err) {
        });
    };
    MysimsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mysims',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/mysims/mysims.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<div style="width:100%; background-color:#22B14C; text-align:center !important; color:white; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">MY SIMULATIONS</div>\n<div *ngIf="!cards.length">\n<ion-item padding no-lines text-wrap>\n<div [innerHTML]="instr" style="width:100%">\n</div>\n</ion-item>\n</div>\n<div *ngIf="cards.length">\n<ion-list no-lines>\n<ion-item *ngFor="let c of cards">\n     <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{ c.name }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n         <p>Sent on {{ c.date }}</p>\n	  <p>Status : {{ c.status }}</p>\n        <ion-row>\n	 <ion-col col-1></ion-col>\n	 <ion-col col-10>\n        <img src="{{ c.img }}" />\n        </ion-col>\n	<ion-col col-1>\n	</ion-col>\n	</ion-row>\n        </ion-card-content>\n      </ion-card>\n</ion-item>\n</ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/mysims/mysims.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], MysimsPage);
    return MysimsPage;
}());

//# sourceMappingURL=mysims.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/mysims/mysims.module": [
		452,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 225;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_examples__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sponsor_sponsor__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dosim_dosim__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dosim_dosim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dosim_dosim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_connect__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mysims_mysims__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, connect, alertCtrl, oneSignal) {
        this.navCtrl = navCtrl;
        this.connect = connect;
        this.alertCtrl = alertCtrl;
        this.oneSignal = oneSignal;
        this.content = 'Loading ...';
        this.banner = 'https://mysmilesim.dental/server/sponsorbanner.jpg';
        this.num = 0;
        this.pushid = '';
        this.thisversion = 1;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var uniq = window.localStorage.getItem('uniq');
        if (!uniq) {
            var d = new Date();
            var n1 = Math.floor(Math.random() * 26) + 65;
            var n2 = Math.floor(Math.random() * 26) + 65;
            uniq = String.fromCharCode(n1) + d.getTime().toString() + String.fromCharCode(n2);
            window.localStorage.setItem('uniq', uniq);
        }
        this.pushid = window.localStorage.getItem('pushid');
        if (!this.pushid)
            this.pushid = '';
        var that = this;
        var url = 'home.php?me=' + uniq;
        this.connect.getList(url).subscribe(function (data) {
            that.content = data.content;
            that.banner = data.banner;
            that.num = data.num;
            var v = parseInt(data.version);
            if (v > that.thisversion)
                that.versionmessage(v);
            if ((data.num) && (!that.pushid.length)) {
                that.getpushinfo();
            }
        }, function (err) {
        });
    };
    HomePage.prototype.getpushinfo = function () {
        var _this = this;
        this.oneSignal.startInit('96629379-0986-40b5-9660-f22561561bb3', '208276442585');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.endInit();
        var i = this.oneSignal.getIds();
        i.then(function (data) {
            var that = _this;
            var w = window.localStorage.getItem('uniq');
            var url = 'pushtoken.php?me=' + w + '&pushid=' + data.userId;
            window.localStorage.setItem('pushid', data.userId);
            _this.connect.getList(url).subscribe(function (data) {
            }, function (err) {
            });
        });
    };
    HomePage.prototype.versionmessage = function (a) {
        this.thisversion = a;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'New Version Available',
            subTitle: 'Please go to the App Store or Google Play Store to get the latest version of this App',
            buttons: [
                {
                    text: 'OK',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.examples = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__examples_examples__["a" /* ExamplesPage */]);
    };
    HomePage.prototype.previous = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mysims_mysims__["a" /* MysimsPage */]);
    };
    HomePage.prototype.showSponsor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sponsor_sponsor__["a" /* SponsorPage */]);
    };
    HomePage.prototype.startup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dosim_dosim__["DosimPage"]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/home/home.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div [innerHTML]="content">\n</div>\n</ion-content>\n\n<ion-footer>\n<img [src]="banner" style="width:100%" (click)="showSponsor()">\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-4 (click)="startup()">\n <ion-icon name="camera"> </ion-icon>\n </ion-col>\n <ion-col col-4 (click)="previous()">\n <ion-icon name="happy"> </ion-icon>\n <ion-badge color="danger" *ngIf="num">{{ num }}</ion-badge>\n </ion-col>\n\n <ion-col col-4 (click)="examples()" >\n <ion-icon name="photos"> </ion-icon>\n </ion-col>\n\n</ion-row>\n<ion-row text-center style="min-height:50px !important">\n\n <ion-col col-4 (click)="startup()">\n New<br>Selfie\n </ion-col>\n\n <ion-col col-4 (click)="previous()">\n See My<br>Simulations\n </ion-col>\n\n <ion-col col-4 (click)="examples()" >\n Example<br>Gallery\n </ion-col>\n\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__providers_connect__["a" /* Connect */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_connect__["a" /* Connect */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_connect__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExamplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExamplesPage = /** @class */ (function () {
    function ExamplesPage(navCtrl, navParams, connect) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.connect = connect;
        this.orig = 'http://smilesim.com.au/server/blank.png';
        this.result = 'http://smilesim.com.au/server/blank.png';
        this.current = 0;
        this.pics = [];
        this.pics = [];
    }
    ExamplesPage.prototype.ionViewDidLoad = function () {
        this.pics = [];
        this.current = 0;
        var that = this;
        var url = 'examples.php?end=' + Math.random();
        this.connect.getList(url).subscribe(function (data) {
            that.pics = data.pics;
            that.orig = that.pics[0].orig;
            that.result = that.pics[0].result;
        }, function (err) {
        });
    };
    ExamplesPage.prototype.goprev = function () {
        if (this.pics.length) {
            var c = this.current - 1;
            if (c < 0)
                c = this.pics.length - 1;
            this.current = c;
            this.orig = this.pics[c].orig;
            this.result = this.pics[c].result;
        }
    };
    ExamplesPage.prototype.gonext = function () {
        if (this.pics.length) {
            var c = this.current + 1;
            if (c >= this.pics.length)
                c = 0;
            this.current = c;
            this.orig = this.pics[c].orig;
            this.result = this.pics[c].result;
        }
    };
    ExamplesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-examples',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/examples/examples.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<div style="width:100%; background-color:#22B14C; text-align:center !important; color:white; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">EXAMPLES</div>\n<ion-item no-padding>\n<ion-row>\n<ion-col col-6>\n<img [src]="orig" style="width:100%">\n</ion-col>\n<ion-col col-6>\n<img [src]="result" style="width:100%">\n</ion-col>\n</ion-row>\n</ion-item>\n<ion-item text-center no-padding>\n  <button ion-button large color="secondary" (click)="goprev()">Previous</button>\n  <button ion-button large color="secondary" (click)="gonext()">Next</button>\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/examples/examples.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_connect__["a" /* Connect */]])
    ], ExamplesPage);
    return ExamplesPage;
}());

//# sourceMappingURL=examples.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SponsorPage = /** @class */ (function () {
    function SponsorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sponsorimage = '';
        this.sponsorimage = 'http://smilesim.com.au/server/sponsor.jpg?rnd=' + Math.random();
    }
    SponsorPage.prototype.ionViewDidLoad = function () {
        this.sponsorimage = 'http://smilesim.com.au/server/sponsor.jpg?rnd=' + Math.random();
    };
    SponsorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sponsor',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/sponsor/sponsor.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<img [src]="sponsorimage" style="width:100%">\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/sponsor/sponsor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SponsorPage);
    return SponsorPage;
}());

//# sourceMappingURL=sponsor.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(399);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sponsor_sponsor__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_connect__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_barcode_scanner__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__["DosimPage"],
                __WEBPACK_IMPORTED_MODULE_10__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__["a" /* ExamplesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__["a" /* MysimsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/mysims/mysims.module#MysimsPageModule', name: 'MysimsPage', segment: 'mysims', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__["DosimPage"],
                __WEBPACK_IMPORTED_MODULE_10__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__["a" /* ExamplesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__["a" /* MysimsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_connect__["a" /* Connect */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_onesignal__["a" /* OneSignal */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/ionic/smile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Connect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Connect = /** @class */ (function () {
    function Connect(http) {
        this.http = http;
        this.server_url = 'http://smilesim.com.au/server/';
    }
    Connect.prototype.getList = function (object) {
        return this.http.get(this.server_url + object).map(function (res) { return res.json(); });
    };
    Connect.prototype.logError = function (err) {
        console.error('Error: ' + err);
    };
    Connect.prototype.getServerUrl = function () {
        return this.server_url;
    };
    Connect = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], Connect);
    return Connect;
}());

//# sourceMappingURL=connect.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.js.map