webpackJsonp([0],{

/***/ 181:
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
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 223:
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
webpackEmptyAsyncContext.id = 223;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_examples__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sponsor_sponsor__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dosim_dosim__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mysims_mysims__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(274);
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
        this.banner = 'https://mysmilesim.dental/server/sponsorbanner.jpg';
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
        this.pushid = window.localStorage.getItem('pushid');
        if (!this.pushid)
            this.pushid = '';
        var that = this;
        var url = 'https://mysmilesim.dental/server/home.php?me=' + uniq;
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.content = d.content;
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
        this.oneSignal.startInit('96629379-0986-40b5-9660-f22561561bb3', '208276442585');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.endInit();
        var i = this.oneSignal.getIds();
        i.then(function (data) {
            var that = _this;
            var w = window.localStorage.getItem('uniq');
            var url = 'https://mysmilesim.dental/server/pushtoken.php?me=' + w + '&pushid=' + data.userId;
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mysims_mysims__["a" /* MysimsPage */]);
    };
    HomePage.prototype.showSponsor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sponsor_sponsor__["a" /* SponsorPage */]);
    };
    HomePage.prototype.startup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dosim_dosim__["a" /* DosimPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/home/home.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div [innerHTML]="content">\n</div>\n</ion-content>\n\n<ion-footer>\n<img [src]="banner" style="width:100%" (click)="showSponsor()">\n<ion-grid no-padding>\n<ion-row text-center>\n <ion-col col-4 (click)="startup()">\n <ion-icon name="camera"> </ion-icon>\n </ion-col>\n <ion-col col-4 (click)="previous()">\n <ion-icon name="happy"> </ion-icon>\n <ion-badge color="danger" *ngIf="unseen">{{ unseen }}</ion-badge>\n </ion-col>\n\n <ion-col col-4 (click)="examples()" >\n <ion-icon name="photos"> </ion-icon>\n </ion-col>\n\n</ion-row>\n<ion-row text-center style="min-height:50px !important">\n\n <ion-col col-4 (click)="startup()">\n New<br>Selfie\n </ion-col>\n\n <ion-col col-4 (click)="previous()">\n See My<br>Simulations\n </ion-col>\n\n <ion-col col-4 (click)="examples()" >\n Example<br>Gallery\n </ion-col>\n\n</ion-row>\n\n</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(49);
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
        var url = 'https://mysmilesim.dental/server/examples.php?end=' + Math.random();
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
            selector: 'page-examples',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/examples/examples.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<div style="width:100%; background-color:#00C0C0; text-align:center !important; color:white; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">EXAMPLES</div>\n<ion-item no-padding>\n<ion-row>\n<ion-col col-6>\n<img [src]="orig" style="width:100%">\n</ion-col>\n<ion-col col-6>\n<img [src]="result" style="width:100%">\n</ion-col>\n</ion-row>\n</ion-item>\n<ion-item text-center no-padding>\n  <button ion-button large color="primary" (click)="goprev()">Previous</button>\n  <button ion-button large color="primary" (click)="gonext()">Next</button>\n</ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/examples/examples.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ExamplesPage);
    return ExamplesPage;
}());

//# sourceMappingURL=examples.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SponsorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DosimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(49);
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
    function DosimPage(navCtrl, navParams, barcodeScanner, http, camera, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.http = http;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.odd = 1;
        this.title = 'WHITENING';
        this.blurb = 'A';
        this.before = './assets/img/before0.jpg';
        this.after = './assets/img/after0.jpg';
        this.src = './assets/img/before0.jpg';
        this.answers = [0, 0, 0, 0];
        this.baf = 'BEFORE';
        this.comments = '';
        this.mode = 0;
        this.instructions = '...';
        this.data = [
            { 'title': 'WHITENING', 'blurb': 'Are you concerned about the colour of your teeth?' },
            { 'title': 'VENEERS', 'blurb': 'Are you concerned about the shape of your teeth?' },
            { 'title': 'ORTHODONTICS', 'blurb': 'Are you concerned about any crooked teeth?' },
            { 'title': 'COSMETICS', 'blurb': 'Are you concerned about any gaps in your teeth?' }
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
            name: '',
            email: '',
            pushid: '',
            phone: '',
            dcodestat: 0
        };
        this.comments = '';
    }
    DosimPage.prototype.ionViewDidEnter = function () {
        this.current = 0;
        this.odd = 1;
        this.mode = 0;
        this.shownum();
        var that = this;
        var den = window.localStorage.getItem('dcode');
        if (!den)
            den = '';
        this.pl.dcode = den;
        that.timer = setInterval(function () {
            that.odd = 1 - that.odd;
            that.src = (that.odd ? that.before : that.after);
            that.baf = (that.odd ? 'BEFORE' : 'AFTER');
        }, 2500);
        this.pl.uniq = window.localStorage.getItem('myac');
        var url = 'https://mysmilesim.dental/server/instructions.php?end=' + Math.random();
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.instructions = d.instructions;
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
    DosimPage.prototype.scanqr = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            var t = _this.pdecode(barcodeData.text);
            var w = t.split(',');
            while (w.length < 5)
                w.push('');
            _this.pl.name = w[0];
            _this.pl.email = w[1];
            _this.pl.phone = w[2];
            _this.pl.dcode = w[3];
            window.localStorage.setItem('dcode', w[3]);
        }, function (err) {
            //      alert('err: '+JSON.stringify(err));
        });
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
            _this.title = 'LASTLY, YOUR DETAILS';
            _this.mode = 2;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    DosimPage.prototype.cheat = function () {
        this.title = 'LASTLY, YOUR DETAILS';
        this.mode = 2;
    };
    DosimPage.prototype.nocode = function () {
        this.pl.dcodestat = 1;
    };
    DosimPage.prototype.yescode = function () {
        this.pl.dcodestat = 0;
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
        var that = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = 'https://mysmilesim.dental/server/upload.php';
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        this.http.post(url, JSON.parse(JSON.stringify(that.pl)), httpOptions)
            .subscribe(function (data) {
            loading.dismiss();
            that.doComplete();
        }, function (err) {
            alert(JSON.stringify(err));
            loading.dismiss();
        });
    };
    DosimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dosim',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/dosim/dosim.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content no-padding text-center>\n<div style="width:100%; background-color:#00C0C0; text-align:center !important; color:white; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">{{ title }}</div>\n\n<div *ngIf="mode==0" >\n<ion-list no-lines>\n<ion-item>\n<ion-row>\n<ion-col col-2></ion-col>\n<ion-col col-8 style="color:black; background-color:gainsboro; font-size:1.3em">\n<img [src]="src" style="width:100%; margin-bottom:0px !important">\n<div style="width:100%; margin-top:0px !important; text-align:center">{{ baf }}</div>\n</ion-col>\n<ion-col col-2></ion-col>\n</ion-row>\n</ion-item>\n\n<ion-item text-center text-wrap>\n<p>{{ blurb }}</p>\n</ion-item>\n\n<ion-item>\n<ion-row text-center>\n<ion-col col-4 (click)="gonxt(2);">\n<img src="./assets/img/sad.png" style="width:66%">\n</ion-col>\n<ion-col col-4 (click)="gonxt(1);">\n<img src="./assets/img/mid.png" style="width:66%">\n</ion-col>\n<ion-col col-4 (click)="gonxt(0);">\n<img src="./assets/img/happy.png" style="width:66%">\n</ion-col>\n</ion-row>\n<ion-row text-center>\n<ion-col col-4 (click)="gonxt(2);">\n<p>YES</p>\n</ion-col>\n<ion-col col-4 (click)="gonxt(1);">\n<p>MAYBE</p>\n</ion-col>\n<ion-col col-4 (click)="gonxt(0);">\n<p>NO</p>\n</ion-col>\n</ion-row>\n</ion-item>\n<ion-item text-center text-wrap *ngIf="current>0">\n<p (click)="goback()"><u>Back to Previous Question</u></p>\n</ion-item>\n\n</ion-list>\n</div>\n\n<div *ngIf="mode==1">\n<ion-list>\n<ion-item>\n<ion-label stacked>Any other comments, notes or concerns?</ion-label>\n<ion-textarea [(ngModel)]="pl.comments"  style="color:dodgerblue" rows="3" placeholder="Write your note here ..."> </ion-textarea>\n</ion-item>\n<ion-item no-lines text-center>\n<button ion-button large (click)="takepicture()" color="primary">\n<ion-icon name="camera"></ion-icon> Take Selfie\n</button>\n</ion-item>\n\n\n<ion-item no-lines text-wrap>\n<div [innerHTML]="instructions" style="width:100%">\n</div>\n</ion-item>\n</ion-list>\n</div>\n\n<div *ngIf="mode==2">\n<p>Rather than enter all of your details, if you have a personalized letter from your dentist, </p>\n<button ion-button full color="primary" (click)="scanqr()">\nClick Here to Scan Your QR Code </button>\n<p> </p>\n<p>-- or --</p>\n<p> </p>\n<ion-list no-padding>\n<ion-item>\n<ion-label stacked>Your Name</ion-label>\n<ion-input [(ngModel)]="pl.name"  style="color:dodgerblue" required></ion-input>\n</ion-item>\n<ion-item>\n<ion-label stacked>Your Email Address</ion-label>\n<ion-input [(ngModel)]="pl.email" type="email" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label stacked>Your Phone Number</ion-label>\n<ion-input [(ngModel)]="pl.phone" type="text" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item>\n<ion-label stacked>Dentist Code</ion-label>\n<ion-input [(ngModel)]="pl.dcode" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item *ngIf="pl.dcodestat==0" (click)="nocode()">\n<p>Don\'t have a Dentist Code?</p>\n</ion-item> \n<ion-item *ngIf="pl.dcodestat==1" (click)="yescode()" text-wrap>\n<p>Please ask your dentist for their <b>MySmilesim</b> code.<br>If they have not yet joined our system, please enter your location and we will locate a suitable dentist for your needs</p>\n<br>\n<p><u>I found my Dentist Code</u></p>\n</ion-item>\n<ion-item *ngIf="pl.dcodestat==1">\n <ion-label stacked>Your Suburb</ion-label>\n <ion-input [(ngModel)]="pl.suburb" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item *ngIf="pl.dcodestat==1">\n <ion-label stacked>Your State</ion-label>\n <ion-input [(ngModel)]="pl.state" required style="color:dodgerblue"></ion-input>\n</ion-item>\n<ion-item *ngIf="pl.dcodestat==1">\n <ion-label stacked>Your Country</ion-label>\n <ion-input [(ngModel)]="pl.country" required style="color:dodgerblue"></ion-input>\n</ion-item>\n</ion-list>\n<button ion-button full color="primary" (click)="saveme()">\n<ion-icon name="paper-plane"></ion-icon>\nSEND TO {{ pl.dcodestat ? \'MYSMILESIM\' : \'DENTIST\' }}\n</button>\n</div>\n</ion-content>'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/dosim/dosim.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object])
    ], DosimPage);
    return DosimPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=dosim.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MysimsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__result_result__ = __webpack_require__(273);
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
    function MysimsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
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
        var url = 'https://mysmilesim.dental/server/mysims.php?me=' + window.localStorage.getItem('uniq') + '&end=' + Math.random();
        this.http.get(url).subscribe(function (data) {
            var s = JSON.stringify(data);
            var d = JSON.parse(s);
            that.cards = d.cards;
            that.instr = d.instr;
        }, function (err) {
        });
    };
    MysimsPage.prototype.goPic = function (i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__result_result__["a" /* ResultPage */], { id: i });
    };
    MysimsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mysims',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/mysims/mysims.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<div style="width:100%; background-color:#00C0C0; text-align:center !important; color:white; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">MY SIMULATIONS</div>\n<div *ngIf="!cards.length">\n<ion-item padding no-lines text-wrap>\n<div [innerHTML]="instr" style="width:100%">\n</div>\n</ion-item>\n</div>\n<div *ngIf="cards.length">\n  <ion-list>\n   <ion-item *ngFor="let c of cards"  class="borderBottomGainsboroAlpha" (click)="goPic(c.id)">\n     <ion-row>\n     <ion-col col-3>\n     <img [src]="c.pic" style="object-fit:cover; width:100%">\n    </ion-col>\n    <ion-col col-1></ion-col>\n    <ion-col col-8>\n    <h2>{{ c.name }}</h2>\n<p>{{ c.date }}</p>\n</ion-col>\n</ion-row>\n   </ion-item>\n  </ion-list>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/mysims/mysims.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], MysimsPage);
    return MysimsPage;
}());

//# sourceMappingURL=mysims.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(49);
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
    function ResultPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.title = '';
        this.pic = './assets/img/blank.jpg';
        this.pic2 = './assets/img/blank.jpg';
        this.text = '';
        this.name = '';
        this.date = '';
        this.result = 0;
    }
    ResultPage.prototype.ionViewDidLoad = function () {
        var that = this;
        var url = 'https://mysmilesim.dental/server/getresult.php?id=' + this.navParams.get('id');
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
        }, function (err) {
        });
    };
    ResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-result',template:/*ion-inline-start:"/var/www/html/ionic/smile/src/pages/result/result.html"*/'<ion-header no-border no-shadow  style="background-color:white">\n	<ion-navbar align-title="center"  style="background-color:white">\n		<ion-title style="background-color:white"><img src="./assets/img/mainbanner.png"></ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n<div style="width:100%; background-color:#00C0C0; text-align:center !important; color:white; padding:6px; font-size:1.4em !important; margin-bottom: 0px !important">{{ title }}</div>\n<div *ngIf="result==0">\n     <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{ name }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n         <p>Sent on {{ date }}</p>        <ion-row>\n	 <ion-col col-1></ion-col>\n	 <ion-col col-10>\n        <img src="{{ pic }}" />\n        </ion-col>\n	<ion-col col-1>\n	</ion-col>\n	</ion-row>\n        </ion-card-content>\n      </ion-card>\n</div>\n<div *ngIf="result>0">\n     <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{ name }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n                 <ion-row>\n	 <ion-col col-6>\n        <img src="{{ pic }}" />\n        </ion-col> <ion-col col-6>\n        <img src="{{ pic2 }}" />\n        </ion-col>\n\n	</ion-row>\n        <ion-row text-wrap>\n        <ion-col col-1></ion-col>\n        <ion-col col-10>\n<div [innerHTML]="text"></div></ion-col>\n        <ion-col col-1></ion-col>\n        </ion-row>\n        </ion-card-content>\n      </ion-card>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/ionic/smile/src/pages/result/result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ResultPage);
    return ResultPage;
}());

//# sourceMappingURL=result.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(398);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sponsor_sponsor__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_result_result__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_onesignal__ = __webpack_require__(274);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__["a" /* DosimPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__["a" /* ExamplesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__["a" /* MysimsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dosim_dosim__["a" /* DosimPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sponsor_sponsor__["a" /* SponsorPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_examples_examples__["a" /* ExamplesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_result_result__["a" /* ResultPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mysims_mysims__["a" /* MysimsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_onesignal__["a" /* OneSignal */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(266);
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

/***/ })

},[275]);
//# sourceMappingURL=main.js.map