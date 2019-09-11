webpackJsonp([1],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NopinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(84);
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
 * Generated class for the NopinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NopinPage = /** @class */ (function () {
    function NopinPage(navCtrl, navParams, nhttp, loadingCtrl, alertCtrl, http, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nhttp = nhttp;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.camera = camera;
        this.mode = '0';
        this.pl = {
            id: '0',
            suburb: '',
            state: '',
            country: '',
            name: '',
            email: '',
            phone: '',
        };
    }
    NopinPage.prototype.ionViewDidLoad = function () {
    };
    NopinPage.prototype.doComplete = function () {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Thank you - All Done',
            subTitle: 'We will locate a suitable dentist for you',
            buttons: [
                {
                    text: 'Okay',
                    cssClass: 'btt',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    NopinPage.prototype.takepicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetWidth: 500,
            targetHeight: 650,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            cameraDirection: this.camera.Direction.FRONT,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.pl.picdata = imageData;
            _this.saveme2();
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    NopinPage.prototype.saveme2 = function () {
        this.pl.me = window.localStorage.getItem('uniq');
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'https://mysmilesim.dental/server/newpat_upload.php';
        this.nhttp.post(url, that.pl, {})
            .then(function (data) {
            loading.dismiss();
            that.doComplete();
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
            loading.dismiss();
        });
    };
    NopinPage.prototype.saveme = function () {
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'https://mysmilesim.dental/server/nopin.php';
        this.nhttp.post(url, that.pl, {})
            .then(function (data) {
            loading.dismiss();
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.pl.id = d.id;
            that.mode = 1;
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
            loading.dismiss();
        });
    };
    NopinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nopin',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/nopin/nopin.html"*/'<ion-header no-border no-shadow  class="blk">\n	<ion-navbar align-title="center" class="blk">\n		<ion-title class="blk"><img src="./assets/img/banner_neg3.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n<div *ngIf="mode==0" class="blk">\n<ion-content padding class="blk">\n<p class="blk">Please enter your details and we will locate a suitable dentist in your area</p>\n<ion-list no-padding class="blk">\n<ion-item>\n<ion-label stacked>Your Name</ion-label>\n<ion-input [(ngModel)]="pl.name"  style="color:dodgerblue" required></ion-input>\n</ion-item>\n<ion-item>\n<ion-label stacked>Your Email Address</ion-label>\n<ion-input [(ngModel)]="pl.email" type="email" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label stacked>Your Phone Number</ion-label>\n<ion-input [(ngModel)]="pl.phone" type="text" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n <ion-label stacked>Your Suburb</ion-label>\n <ion-input [(ngModel)]="pl.suburb" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n <ion-label stacked>Your State / Region</ion-label>\n <ion-input [(ngModel)]="pl.state" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n <ion-label stacked>Your Country</ion-label>\n <ion-input [(ngModel)]="pl.country" required style="color:dodgerblue"></ion-input>\n</ion-item>\n</ion-list>\n<button ion-button full color="light" (click)="saveme()">\n<ion-icon name="paper-plane"></ion-icon>\nSEND\n</button>\n</div>\n<div *ngIf="mode==1" class="blk">\n<ion-list class="blk">\n<ion-item class="blk">\n<ion-label stacked style="font-size:1.2em">Any other comments or concerns?</ion-label>\n<ion-textarea [(ngModel)]="pl.comments"  style="color:#272522; background-color:silver; font-weight:bold" rows="3" placeholder="Write your note here ..."> </ion-textarea>\n</ion-item>\n<ion-item no-lines text-center class="blk">\n<button ion-button large (click)="takepicture()" color="light">\n<ion-icon name="camera"></ion-icon> Take Selfie\n</button>\n</ion-item>\n\n<ion-item no-lines text-wrap class="blk">\n<div [innerHTML]="instructions" style="width:100%">\n</div>\n</ion-item>\n</ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/nopin/nopin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], NopinPage);
    return NopinPage;
}());

//# sourceMappingURL=nopin.js.map

/***/ }),

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/nopin/nopin.module": [
		473,
		0
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
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_examples__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dosim_dosim__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mysims_mysims__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__ = __webpack_require__(282);
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
    function HomePage(navCtrl, http, alertCtrl, oneSignal) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.oneSignal = oneSignal;
        this.content = 'Loading ...';
        this.content2 = '';
        this.banner = 'https://mysmilesim.dental/server/sponsorbanner4.jpg';
        this.num = 0;
        this.unseen = 0;
        this.pushid = '';
        this.thisversion = 2;
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
        alert('uniq=' + uniq);
        var region = window.localStorage.getItem('region');
        if (!region)
            window.localStorage.setItem('region', '0');
        alert('region=' + window.localStorage.getItem('region'));
        this.pushid = window.localStorage.getItem('pushid');
        if (!this.pushid)
            this.pushid = '';
        alert('pushid=' + this.pushid);
        var that = this;
        var url = 'https://mysmilesim.dental/server/home.php?region=' + window.localStorage.getItem('region') + '&me=' + uniq;
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.content = d.content;
            that.content2 = d.content2;
            that.banner = d.banner;
            that.num = d.num;
            that.unseen = d.unseen;
            var v = parseInt(d.version);
            if (v > that.thisversion)
                that.versionmessage(v);
            if ((d.num) && (!that.pushid.length)) {
                that.getpushinfo();
            }
        }, function (err) {
        });
    };
    HomePage.prototype.getpushinfo = function () {
        var _this = this;
        this.oneSignal.startInit('1697d479-713f-422f-b2cb-a48b4e02678b', '981456573821');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.endInit();
        var i = this.oneSignal.getIds();
        i.then(function (data) {
            var that = _this;
            var w = window.localStorage.getItem('uniq');
            var url = 'https://mysmilesim.dental/server/pushtoken.php?region=' + window.localStorage.getItem('region') + '&me=' + w + '&pushid=' + data.userId;
            window.localStorage.setItem('pushid', data.userId);
            _this.http.get(url).subscribe(function (data) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__mysims_mysims__["a" /* MysimsPage */]);
    };
    HomePage.prototype.startup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dosim_dosim__["a" /* DosimPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/home/home.html"*/'<ion-header no-border no-shadow class="blk">\n	<ion-navbar align-title="center" class="blk">\n		<ion-title class="blk"><img src="./assets/img/banner_neg3.png" style="margin-top:5px"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding class="blk">\n<div [innerHTML]="content" style="font-size:1.2em">\n</div>\n<ion-row *ngIf="!num">\n<ion-col col-1></ion-col>\n<ion-col col-10>\n<button ion-button large block (click)="startup()" color="light">\nGet Started\n</button>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n<ion-row *ngIf="num">\n<ion-col col-1></ion-col>\n<ion-col col-10>\n<button ion-button large block (click)="previous()" color="light">\nSee My Simulations\n</button>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n<div [innerHTML]="content2" style="font-size:1.2em">\n</div>\n</ion-content>\n\n<ion-footer class="blk">\n<img [src]="banner" style="width:100%" >\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-4 (click)="startup()">\n <ion-icon name="camera"> </ion-icon>\n </ion-col>\n <ion-col col-4 (click)="previous()">\n <ion-icon name="happy"> </ion-icon>\n <ion-badge color="danger" *ngIf="unseen">{{ unseen }}</ion-badge>\n </ion-col>\n\n <ion-col col-4 (click)="examples()" >\n <ion-icon name="photos"> </ion-icon>\n </ion-col>\n\n</ion-row>\n<ion-row text-center style="min-height:50px !important">\n\n <ion-col col-4 (click)="startup()">\n New<br>Selfie\n </ion-col>\n\n <ion-col col-4 (click)="previous()">\n See My<br>Simulations\n </ion-col>\n\n <ion-col col-4 (click)="examples()" >\n Example<br>Gallery\n </ion-col>\n\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_onesignal__["a" /* OneSignal */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(44);
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
    function ExamplesPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.orig = 'https://smilesim.com.au/server/blank.png';
        this.result = 'https://smilesim.com.au/server/blank.png';
        this.current = 0;
        this.pics = [];
        this.pics = [];
    }
    ExamplesPage.prototype.ionViewDidLoad = function () {
        this.pics = [];
        this.current = 0;
        var that = this;
        var url = 'https://mysmilesim.dental/server/examples.php?region=' + window.localStorage.getItem('region') + '&end=' + Math.random();
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.pics = d.pics;
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
            selector: 'page-examples',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/examples/examples.html"*/'<ion-header no-border no-shadow  class="blk">\n	<ion-navbar align-title="center"  class="blk">\n		<ion-title class="blk"><img src="./assets/img/banner_neg3.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="blk">\n<div style="width:100%; text-align:center !important; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important" class="hdr">EXAMPLES</div>\n<ion-item no-padding class="blk">\n<ion-row>\n<ion-col col-6>\n<img [src]="orig" style="width:100%">\n</ion-col>\n<ion-col col-6>\n<img [src]="result" style="width:100%">\n</ion-col>\n</ion-row>\n</ion-item>\n<ion-item text-center no-padding class="blk">\n  <button ion-button large color="light" (click)="goprev()">Previous</button>\n  <button ion-button large color="light" (click)="gonext()">Next</button>\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/examples/examples.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ExamplesPage);
    return ExamplesPage;
}());

//# sourceMappingURL=examples.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nopin_nopin__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DosimPage = /** @class */ (function () {
    function DosimPage(navCtrl, navParams, http, camera, loadingCtrl, alertCtrl, nhttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nhttp = nhttp;
        this.odd = 1;
        this.title = 'PIN Code';
        this.blurb = 'A';
        this.before = './assets/img/before0.jpg';
        this.after = './assets/img/after0.jpg';
        this.src = './assets/img/before0.jpg';
        this.answers = [0, 0, 0, 0];
        this.baf = 'BEFORE';
        this.comments = '';
        this.mode = 8;
        this.instructions = '...';
        this.pinstructions = '';
        this.pin = '';
        this.data = [
            { 'title': 'WHITENING', 'blurb': 'Are you concerned about the <b class="blkh">COLOUR</b> of your teeth?' },
            { 'title': 'VENEERS', 'blurb': 'Are you concerned about the <b class="blkh">SHAPE</b> of your teeth?' },
            { 'title': 'ORTHODONTICS', 'blurb': 'Are you concerned about any <b class="blkh">CROOKED</b> teeth?' },
            { 'title': 'COSMETICS', 'blurb': 'Are you concerned about any <b class="blkh">GAPS</b> in your teeth?' }
        ];
        this.current = 0;
        this.pl = {
            uniq: 0,
            ans: '',
            picdata: '',
            comments: '',
            dcode: '',
            suburb: '',
            state: '',
            country: '',
            region: '0',
            name: '',
            email: '',
            pushid: '',
            phone: '',
            dcodestat: 0
        };
        this.comments = '';
        this.pin = '';
        this.mode = 8;
    }
    DosimPage.prototype.checkpin = function () {
        var that = this;
        var url = 'https://mysmilesim.dental/server/checkpin.php?pin=' + encodeURIComponent(this.pin);
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            if (d.success) {
                that.mode = 0;
                that.shownum();
                that.pl.name = d.name;
                that.pl.email = d.email;
                that.pl.dcode = d.dcode;
                that.pl.phone = d.phone;
                window.localStorage.setItem('region', d.region);
            }
            else {
                that.pin = '';
                that.showError();
            }
        }, function (err) {
        });
    };
    DosimPage.prototype.ionViewDidEnter = function () {
        this.current = 0;
        this.odd = 1;
        this.mode = 8;
        var that = this;
        this.title = 'PIN Code';
        that.timer = setInterval(function () {
            that.odd = 1 - that.odd;
            that.src = (that.odd ? that.before : that.after);
            that.baf = (that.odd ? 'BEFORE' : 'AFTER');
        }, 2500);
        this.pl.uniq = window.localStorage.getItem('myac');
        var url = 'https://mysmilesim.dental/server/instructions.php?region=' + window.localStorage.getItem('region') + '&end=' + Math.random();
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.instructions = d.instructions;
            that.pinstructions = d.pinstructions;
        }, function (err) {
        });
    };
    DosimPage.prototype.gonxt = function (a) {
        this.answers[this.current] = a;
        if (this.current++ >= 3) {
            this.takeselfie();
        }
        else
            this.shownum();
    };
    DosimPage.prototype.goback = function () {
        this.current--;
        this.shownum();
    };
    DosimPage.prototype.shownum = function () {
        this.title = this.data[this.current].title;
        this.blurb = this.data[this.current].blurb;
        this.before = './assets/img/before' + this.current.toString() + '.jpg';
        this.after = './assets/img/after' + this.current.toString() + '.jpg';
        this.src = (this.odd ? this.before : this.after);
    };
    DosimPage.prototype.takeselfie = function () {
        this.title = 'SELFIE TIME!';
        this.mode = 1;
    };
    DosimPage.prototype.pdecode = function (pwd) {
        var l = parseInt(pwd.substr(0, 3));
        pwd = pwd.substr(3);
        var d = pwd.length / 12;
        var juggleback = [9, 4, 10, 1, 8, 6, 3, 2, 7, 5, 0, 11];
        var p = '';
        for (var i = 0; i < d; i++) {
            var pp = pwd.substr(i * 12, 12);
            for (var e = 0; e < 12; e++)
                p = p + pp.substr(juggleback[e], 1);
        }
        return p.substr(0, l);
    };
    DosimPage.prototype.takepicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetWidth: 500,
            targetHeight: 650,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            cameraDirection: this.camera.Direction.FRONT,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.pl.picdata = imageData;
            _this.saveme();
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    DosimPage.prototype.nocode = function () {
        this.pl.dcodestat = 1;
    };
    DosimPage.prototype.yescode = function () {
        this.pl.dcodestat = 0;
    };
    DosimPage.prototype.nopin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__nopin_nopin__["a" /* NopinPage */]);
    };
    DosimPage.prototype.showError = function () {
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Incorrect PIN Code',
            subTitle: 'Please ask your dentist for a code',
            buttons: [
                {
                    text: 'Okay',
                    cssClass: 'btt',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    DosimPage.prototype.doComplete = function () {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Thank you - All Done',
            subTitle: 'Track your photos in the See My Simulations tab below',
            buttons: [
                {
                    text: 'Okay',
                    cssClass: 'btt',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    DosimPage.prototype.saveme = function () {
        this.pl.me = window.localStorage.getItem('uniq');
        this.pl.ans = '' + this.answers[0].toString() + this.answers[1].toString() + this.answers[2].toString() + this.answers[3].toString();
        var pi = window.localStorage.getItem('pushid');
        if (!pi)
            pi = '';
        this.pl.pushid = pi;
        this.pl.region = window.localStorage.getItem('region');
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'https://mysmilesim.dental/server/upload.php';
        this.nhttp.post(url, that.pl, {})
            .then(function (data) {
            loading.dismiss();
            that.doComplete();
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
            loading.dismiss();
        });
    };
    DosimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dosim',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/dosim/dosim.html"*/'<ion-header no-border no-shadow  class="blk">\n	<ion-navbar align-title="center" class="blk">\n		<ion-title class="blk"><img src="./assets/img/banner_neg3.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content no-padding text-center class="blk">\n<div style="width:100%; text-align:center !important; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important" class="hdr">{{ title }}</div>\n\n<div *ngIf="mode==8" class="blk">\n<ion-item text-wrap class="blk">\n<div [innerHTML]="pinstructions">\n</div>\n</ion-item>\n<ion-row>\n<ion-col col-1></ion-col>\n<ion-col col-10>\n<ion-label stacked>Your personal PIN Code</ion-label>\n<ion-input [(ngModel)]="pin" type="text" required style="color:#222222; background-color:silver; font-weight:bold"></ion-input>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n\n\n<ion-row>\n<ion-col col-1></ion-col>\n<ion-col col-10>\n<button ion-button large block (click)="checkpin()" color="light">Enter\n</button>\n</ion-col>\n<ion-col col-1>\n</ion-col>\n</ion-row>\n<ion-row (click)="nopin()">\n<ion-col col-12 text-center>\n<p class="blk"><u>Don\'t have a PIN?</u></p>\n</ion-col>\n</ion-row>\n\n</div>\n\n<div *ngIf="mode==0" >\n<ion-list no-lines class="blk">\n<ion-item class="blk">\n<ion-row>\n<ion-col col-2></ion-col>\n<ion-col col-8 style="color:black; background-color:gainsboro; font-size:1.3em">\n<img [src]="src" style="width:100%; margin-bottom:0px !important">\n<div style="width:100%; margin-top:0px !important; text-align:center">{{ baf }}</div>\n</ion-col>\n<ion-col col-2></ion-col>\n</ion-row>\n</ion-item>\n\n<ion-item text-center text-wrap class="blk">\n<div class="blkp" [innerHTML]="blurb"></div>\n</ion-item>\n\n<ion-item class="blk">\n<ion-row text-center class="blk">\n<ion-col col-4 (click)="gonxt(2);">\n<img src="./assets/img/sad.png" style="width:66%">\n</ion-col>\n<ion-col col-4 (click)="gonxt(1);">\n<img src="./assets/img/mid.png" style="width:66%">\n</ion-col>\n<ion-col col-4 (click)="gonxt(0);">\n<img src="./assets/img/happy.png" style="width:66%">\n</ion-col>\n</ion-row>\n<ion-row text-center class="blk">\n<ion-col col-4 (click)="gonxt(2);">\n<p class="blk">YES</p>\n</ion-col>\n<ion-col col-4 (click)="gonxt(1);">\n<p class="blk">MAYBE</p>\n</ion-col>\n<ion-col col-4 (click)="gonxt(0);">\n<p class="blk">NO</p>\n</ion-col>\n</ion-row>\n</ion-item>\n<ion-item text-center text-wrap *ngIf="current>0" class="blk">\n<p  class="blk" (click)="goback()"><u>Back to Previous Question</u></p>\n</ion-item>\n\n</ion-list>\n</div>\n\n\n<div *ngIf="mode==1" class="blk">\n<ion-list class="blk">\n<ion-item class="blk">\n<ion-label stacked style="font-size:1.2em">Any other comments or concerns?</ion-label>\n<ion-textarea [(ngModel)]="pl.comments"  style="color:#272522; background-color:silver; font-weight:bold" rows="3" placeholder="Write your note here ..."> </ion-textarea>\n</ion-item>\n<ion-item no-lines text-center class="blk">\n<button ion-button large (click)="takepicture()" color="light">\n<ion-icon name="camera"></ion-icon> Take Selfie\n</button>\n</ion-item>\n\n<ion-item no-lines text-wrap class="blk">\n<div [innerHTML]="instructions" style="width:100%">\n</div>\n</ion-item>\n</ion-list>\n</div>\n\n</ion-content>'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/dosim/dosim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */]])
    ], DosimPage);
    return DosimPage;
}());

//# sourceMappingURL=dosim.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MysimsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(84);
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
    function MysimsPage(navCtrl, navParams, http, camera, loadingCtrl, alertCtrl, nhttp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nhttp = nhttp;
        this.cards = [];
        this.me = '';
        this.instr = '';
        this.cards = [];
        this.pl = {
            picdata: '',
            region: '0',
            id: 0
        };
    }
    MysimsPage.prototype.ionViewDidLoad = function () {
        this.cards = [];
        this.instr = '';
        this.me = window.localStorage.getItem('uniq');
        var that = this;
        var url = 'https://mysmilesim.dental/server/mysims.php?region=' + window.localStorage.getItem('region') + '&me=' + window.localStorage.getItem('uniq') + '&end=' + Math.random();
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.cards = d.cards;
            that.instr = d.instr;
        }, function (err) {
        });
    };
    MysimsPage.prototype.goPic = function (i, sts) {
        if (sts != 1)
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__result_result__["a" /* ResultPage */], { id: i });
    };
    MysimsPage.prototype.retake = function (i) {
        var _this = this;
        this.pl.id = i;
        var options = {
            quality: 100,
            targetWidth: 500,
            targetHeight: 650,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            cameraDirection: this.camera.Direction.FRONT,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.pl.picdata = imageData;
            _this.pl.region = window.localStorage.getItem('region');
            _this.saveme();
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    MysimsPage.prototype.doComplete = function () {
        var _this = this;
        var that = this;
        var alert = this.alertCtrl.create({
            title: 'Thank you - All Done',
            subTitle: 'Your dentist will be in touch shortly',
            buttons: [
                {
                    text: 'Okay',
                    cssClass: 'btt',
                    role: 'cancel',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    MysimsPage.prototype.saveme = function () {
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'https://mysmilesim.dental/server/retake.php';
        this.nhttp.post(url, that.pl, {})
            .then(function (data) {
            loading.dismiss();
            that.doComplete();
        })
            .catch(function (error) {
            alert(JSON.stringify(error));
            loading.dismiss();
        });
    };
    MysimsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mysims',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/mysims/mysims.html"*/'<ion-header no-border no-shadow  class="blk">\n	<ion-navbar align-title="center"  >\n		<ion-title class="blk"><img src="./assets/img/banner_neg3.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="blk">\n<div style="width:100%; text-align:center !important; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important" class="hdr">MY SIMULATIONS</div>\n<div *ngIf="!cards.length" class="blk">\n<ion-item padding no-lines text-wrap class="blk" style="font-size:1.2em; color:#F8F8F8">\n<div [innerHTML]="instr" style="width:100%; font-size:1.2em !important" class="blk">\n</div>\n</ion-item>\n</div>\n<div *ngIf="cards.length" class="blk">\n  <ion-list>\n   <ion-item *ngFor="let c of cards"  class="borderBottomGainsboroAlpha blk" (click)="goPic(c.id, c.sts)">\n     <ion-row>\n     <ion-col col-3>\n     <img [src]="c.pic" style="object-fit:cover; width:100%">\n    </ion-col>\n    <ion-col col-1></ion-col>\n    <ion-col col-8>\n    <h2 class="blk">{{ c.name }}</h2>\n<p class="blk">{{ c.date }}</p>\n<div *ngIf="c.sts==1">\n<button ion-button large block (click)="retake(c.id)" color="light">Re-Take Selfie\n</button>\n</div>\n</ion-col>\n</ion-row>\n   </ion-item>\n  </ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/mysims/mysims.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], MysimsPage);
    return MysimsPage;
}());

//# sourceMappingURL=mysims.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultPage = /** @class */ (function () {
    function ResultPage(navCtrl, navParams, http, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.iab = iab;
        this.title = '';
        this.pic = './assets/img/blank.jpg';
        this.pic2 = './assets/img/blank.jpg';
        this.text = '';
        this.text2 = '';
        this.name = '';
        this.date = '';
        this.result = 0;
        this.url = '';
        this.ebook = false;
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'https://mysmilesim.dental/server/getresult.php?region=' + window.localStorage.getItem('region') + '&id=' + this.navParams.get('id');
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.title = d.title;
            that.pic = d.pic;
            that.name = d.name;
            that.date = d.date;
            that.pic2 = d.pic2;
            that.result = d.result;
            that.text = d.text;
            that.text2 = d.text2;
            that.ebook = d.ebook;
            that.url = d.url;
        }, function (err) {
        });
    };
    ResultPage.prototype.doebook = function () {
        var browser = this.iab.create(this.url, '_blank', 'location=yes');
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/result/result.html"*/'<ion-header no-border no-shadow  class="blk">\n	<ion-navbar align-title="center"  class="blk">\n		<ion-title class="blk"><img src="./assets/img/banner_neg3.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="blk">\n<div style="width:100%; text-align:center !important; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important" class="hdr">{{ title }}</div>\n<div *ngIf="result==0" class="blk">\n     <ion-card class="blk">\n        <ion-card-header>\n          <ion-card-title>{{ name }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content class="blk">\n              <ion-row>\n	 <ion-col col-1></ion-col>\n	 <ion-col col-10>\n        <img src="{{ pic }}" />\n        </ion-col>\n	<ion-col col-1>\n	</ion-col>\n	</ion-row>\n        </ion-card-content>\n      </ion-card>\n</div>\n<div *ngIf="result>0">\n     <ion-card class="blk">\n\n        <ion-card-content>\n                 <ion-row>\n	 <ion-col col-6>\n        <img src="{{ pic }}" />\n        </ion-col> <ion-col col-6>\n        <img src="{{ pic2 }}" />\n        </ion-col>\n\n	</ion-row>\n        <ion-row text-wrap>\n        <ion-col col-1></ion-col>\n        <ion-col col-10 class="blk">\n<div [innerHTML]="text" class="blk" style="font-size:1.2em"></div>\n</ion-col>\n        <ion-col col-1></ion-col>\n        </ion-row>\n<ion-row *ngIf="ebook" class="blk">\n<ion-col col-12>\n<button ion-button large block (click)="doebook()" color="light">\nBOOK NOW\n</button>\n\n</ion-col></ion-row>\n        <ion-row text-wrap>\n        <ion-col col-1></ion-col>\n        <ion-col col-10 class="blk">\n<div [innerHTML]="text2" class="blk" style="font-size:1.2em"></div>\n</ion-col>\n        <ion-col col-1></ion-col>\n        </ion-row>\n\n\n        </ion-card-content>\n      </ion-card>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(417);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_result_result__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_nopin_nopin__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_onesignal__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_http__ = __webpack_require__(84);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__["a" /* DosimPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__["a" /* ExamplesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nopin_nopin__["a" /* NopinPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__["a" /* MysimsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/nopin/nopin.module#NopinPageModule', name: 'NopinPage', segment: 'nopin', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__["a" /* DosimPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__["a" /* ExamplesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_nopin_nopin__["a" /* NopinPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__["a" /* MysimsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(277);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map