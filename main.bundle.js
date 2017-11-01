webpackJsonp([1,4],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 108;


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(135);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutIconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutIconsComponent = (function () {
    function AboutIconsComponent() {
        this.img1s = ['html5', 'css', 'Sass', 'Git', 'JS', 'Angular2', 'JQuery', 'UI_UX'];
        this.img2s = ['Ps', 'Ai', 'Id', 'Lr'];
        this.img3s = ['Balsamiq', 'CMS', 'API', 'Responsive-design'];
    }
    return AboutIconsComponent;
}());
AboutIconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'about-icons',
        template: "\n        <div class=\"info-icons\">\n            <div>\n                <h2>Development skills:</h2>\n                <img *ngFor=\"let img1 of img1s\" [src]=\"'./src/app/image/html/' + img1 + '.png'\">\n            </div>\n            <div>\n                <h2>Design:</h2>\n                <img *ngFor=\"let img2 of img2s\" [src]=\"'./src/app/image/html/' + img2 + '.png'\">\n                <h2>Tools:</h2>\n                <img *ngFor=\"let img3 of img3s\" [src]=\"'./src/app/image/html/' + img3 + '.png'\">\n            </div>\n        </div>\n    ",
        styles: [__webpack_require__(93)],
    })
], AboutIconsComponent);

//# sourceMappingURL=about-icons.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__load_animation__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AboutComponent = (function () {
    function AboutComponent() {
        this.p1s = ['HTML5', 'CSS3', 'SCSS/SASS', 'Git', 'JavaScript', 'Angular2', 'jQuery', 'UI / UX Animation'];
        this.p2s = ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe Lightroom'];
        this.p3s = ['Balsamiq Mockups', 'CMS', 'API', 'Responsive design'];
        this.slideInState = 'in';
        this.sliderProps = {
            isText: true,
        };
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'about',
        template: "\n        <div class=\"page-content\" [@slideIn]='slideInState'>\n            <logo></logo>\n            <h2>Experience</h2>\n            <div class=\"divide-line\"></div>\n            <h3>Skills and Technologies</h3>\n            <div class=\"slider-wrapper\">\n                <span>Text</span>\n                <slider [(props)]='sliderProps'></slider>\n                <span>Icons</span>\n            </div>\n            <div *ngIf=\"sliderProps.isText\" class=\"info-rows\">\n                <div>\n                    <h2>Development skills:</h2>\n                    <p *ngFor=\"let p1 of p1s\">{{p1}}</p>\n                </div>\n                <div>\n                    <h2>Design:</h2>\n                    <p *ngFor=\"let p2 of p2s\">{{p2}}</p>\n                    <h2>Tools:</h2>\n                    <p *ngFor=\"let p3 of p3s\">{{p3}}</p>\n                </div>\n            </div>\n            <about-icons *ngIf=\"!sliderProps.isText\"></about-icons>\n            <p class=\"cupture\">This site was built using Angular 2 and styled with SCSS</p>\n        </div>\n    ",
        styles: [__webpack_require__(93)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_1__load_animation__["a" /* slideIn */]
        ]
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
        this.icons = true;
    }
    SliderComponent.prototype.moveRadioButton = function () {
        this.icons = !this.icons;
        this.props.isText = !this.props.isText;
    };
    return SliderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "props", void 0);
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'slider',
        template: "\n        <div class=\"slider\">\n            <input  type=\"checkbox\" [(checked)]=\"!props.isText\" />\n            <label (click)='moveRadioButton()'></label>\n        </div>\n    ",
        styles: [__webpack_require__(189)],
    })
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.navContainerState = { state: 'small' };
        this.navState = { state: 'hide' };
    }
    AppComponent.prototype.toggleNavContainer = function () {
        if (this.navState.state === 'hide') {
            this.navContainerState.state = 'small';
        }
        else {
            this.navContainerState.state = 'big';
        }
    };
    AppComponent.prototype.onClickedOutsideNavContainer = function ($event) {
        this.navContainerState.state = 'small';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(197),
        styles: [__webpack_require__(190)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('NavContainerAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('small', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '85px', width: '115px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('big', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '100vh', width: '215px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('small => big', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('1ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('big => small', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('1ms 700ms ease-out'))
            ])
        ]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_icons_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_slider_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contacts_contacts_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__logo_logo_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fd_text_fd_text_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blur_text__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logo_svg_logo_svg_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__click_directive__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_16__blur_text__["a" /* BlurTextDirective */],
            __WEBPACK_IMPORTED_MODULE_18__click_directive__["a" /* ClickOutside */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_icons_component__["a" /* AboutIconsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__about_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__logo_logo_component__["a" /* LogoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__fd_text_fd_text_component__["a" /* FDTextComponent */],
            __WEBPACK_IMPORTED_MODULE_17__logo_svg_logo_svg_component__["a" /* LogoSVGComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
                { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */] },
                { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_13__contacts_contacts_component__["a" /* ContactsComponent */] },
            ]),
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBli1C5mpTtEIVsD_Z7UwPl68yoriKakgw'
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlurTextDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlurTextDirective = (function () {
    function BlurTextDirective(el) {
        this.el = el;
    }
    BlurTextDirective.prototype.onMouseEnter = function () {
        this.letterText('100px', '#d0d3d4');
    };
    BlurTextDirective.prototype.onMouseLeave = function () {
        this.letterText('120px', 'white');
    };
    BlurTextDirective.prototype.letterText = function (scale, color) {
        this.el.nativeElement.style.fontSize = scale;
        this.el.nativeElement.style.color = color;
    };
    return BlurTextDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])('blur-text'),
    __metadata("design:type", String)
], BlurTextDirective.prototype, "blurText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlurTextDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlurTextDirective.prototype, "onMouseLeave", null);
BlurTextDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({
        selector: '[blur-text]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object])
], BlurTextDirective);

var _a;
//# sourceMappingURL=blur-text.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutside; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutside = (function () {
    function ClickOutside(_el) {
        this._el = _el;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.onClickBody = this.onClickBody.bind(this);
    }
    ClickOutside.prototype.ngOnInit = function () {
        document.body.addEventListener('click', this.onClickBody);
    };
    ClickOutside.prototype.onClickBody = function (e) {
        if (!this.isClickInElement(e)) {
            this.clickOutside.emit(e);
        }
    };
    ClickOutside.prototype.isClickInElement = function (e) {
        var current = e.target;
        do {
            if (current === this._el.nativeElement) {
                return (true);
            }
            current = current.parentNode;
        } while (current);
        return false;
    };
    return ClickOutside;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]) === "function" && _a || Object)
], ClickOutside.prototype, "clickOutside", void 0);
ClickOutside = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Directive */])({ selector: '[clickOutside]' }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object])
], ClickOutside);

var _a, _b;
//# sourceMappingURL=click-directive.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__load_animation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = (function () {
    function ContactsComponent(mapsAPILoader) {
        this.mapsAPILoader = mapsAPILoader;
        this.icons = [
            { name: 'Xing', state: 'out', link: 'http://www.xing.com/profile/Oksana_Kondratiuk', newTab: 'yes' },
            { name: 'Github', state: 'out', link: 'http://github.com/KsyuFoxy', newTab: 'yes' },
            { name: 'Skype', state: 'out', link: 'skype:oksana.o.k.?chat', newTab: 'no' },
            { name: 'E-mail', state: 'out', link: 'mailto:ksyu@web.de', newTab: 'no' }
        ];
        this.locs = [
            { name: 'L', locState: 'down1left', initial: 'down1left', colorState: '' },
            { name: 'o', locState: 'down2left', initial: 'down2left', colorState: '' },
            { name: 'c', locState: 'down1left', initial: 'down1left', colorState: '' },
            { name: 'a', locState: 'down2left', initial: 'down2left', colorState: '' },
            { name: 't', locState: 'down1right', initial: 'down1right', colorState: '' },
            { name: 'i', locState: 'down2right', initial: 'down2right', colorState: '' },
            { name: 'o', locState: 'down1right', initial: 'down1right', colorState: '' },
            { name: 'n', locState: 'down2right', initial: 'down2right', colorState: '' }
        ];
        this.locState = '';
        this.lat = 53.551086;
        this.lng = 9.993682;
        this.colorState = '';
        this.marker = './src/app/image/Location_blue.png';
        this.slideInState = 'in';
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.changeLocationColor();
    };
    ContactsComponent.prototype.changeLocationColor = function () {
        this.locs.forEach(function (letter, i) {
            setInterval(function () {
                letter.colorState = 'blinkGrey';
                var blueLetters = setInterval(function () {
                    letter.colorState = 'blinkBlue';
                }, i * 150 + 200);
                setInterval(function () {
                    letter.colorState = 'blinkGrey';
                    clearInterval(blueLetters);
                }, i * 150 + 400);
            }, 5000);
        });
    };
    ContactsComponent.prototype.needNewTab = function (icon) {
        if (icon.newTab === 'yes') {
            window.open(icon.link, '_blank');
            return false;
        }
        else {
            window.open(icon.link, '_self');
        }
    };
    ContactsComponent.prototype.iconOver = function (icon) {
        icon.state = 'hover';
        icon.name = icon.name + '_blue';
    };
    ContactsComponent.prototype.iconLeave = function (icon) {
        icon.state = 'out';
        icon.name = icon.name.replace(/_blue/g, "");
    };
    ContactsComponent.prototype.locationOver = function () {
        var _this = this;
        this.markerOpacity = 0;
        this.locs.forEach(function (obj) {
            obj.locState = 'transformation';
        });
        setTimeout(function () {
            _this.markerOpacity = 1;
            _this.locs.forEach(function (obj) {
                obj.locState = obj.initial;
            });
        }, 1200);
        this.mapsAPILoader.load().then(function () {
            var bounds = new google.maps.LatLngBounds();
            var markerPosition = { lat: 0, lng: 0 };
        });
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'contacts',
        template: "\n        <div class=\"page-content\" [@slideIn]='slideInState'>\n            <logo></logo>\n            <h2>Get in touch</h2>\n            <div class=\"divide-line\"></div>\n            <p> my online profiles and contacts </p>\n            <div class=\"social-icons\">\n                <a *ngFor=\"let icon of icons\" ng-href=\"icon.link\">\n                    <img [src]=\"'./src/app/image/' + icon.name + '.png'\" (click)='needNewTab(icon)'\n                         [@iconAnimation]='icon.state' (mouseenter)='iconOver(icon)' (mouseleave)='iconLeave(icon)'>\n                </a>\n            </div>\n            <div class='loc-letters' (mouseenter)='locationOver()'>\n                <div *ngFor='let loc of locs' [@locationAnimation]='loc.locState' [@locationAnimation]='loc.colorState'>{{loc.name}}\n                </div>\n            </div>\n            <div class=\"map\">\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"5\" [scrollwheel]=\"false\">\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"marker\" [opacity] = \"markerOpacity\"   ></agm-marker>\n                </agm-map>\n            </div>\n            <p class=\"cupture\">This site was built using Angular 2 and styled with SCSS</p>\n        </div>\n    ",
        styles: [__webpack_require__(191)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('iconAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('hover', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.05)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('out => hover', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(800, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.05)', offset: 0.1 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(0.8)', offset: 0.5 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1)', offset: 0.8 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.05)', offset: 1 }),
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('hover => out', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.05)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.1)', offset: 0.4 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.05)', offset: 1 }),
                    ]))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('locationAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('down1left', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('down2left', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('down1right', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('down2right', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('transformation', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('up', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('blinkGrey', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: "#515151" })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('blinkBlue', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('blinkGrey <=> blinkBlue', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('100ms ease-in-out')]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('down1left => transformation', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(1200, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1, offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', left: '20px', opacity: 1, offset: 0.9 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', left: '20px', opacity: 0, offset: 1 }),
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('down2left => transformation', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(1400, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1, offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', left: '10px', opacity: 1, offset: 0.9 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', left: '10px', opacity: 0, offset: 1 }),
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('down1right => transformation', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(1300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1, offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', left: '-10px', opacity: 1, offset: 0.9 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', left: '-10px', opacity: 0, offset: 1 }),
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('down2right => transformation', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(1100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#515151', top: '0px', left: '0px', opacity: 1, offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', left: '-20px', opacity: 1, offset: 0.9 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ color: '#00a19c', top: '190px', left: '-20px', opacity: 0, offset: 1 }),
                    ]))
                ]),
            ]),
            __WEBPACK_IMPORTED_MODULE_2__load_animation__["a" /* slideIn */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agm_core__["b" /* MapsAPILoader */]) === "function" && _a || Object])
], ContactsComponent);

var _a;
//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FDTextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FDTextComponent = (function () {
    function FDTextComponent() {
        this.isHover = false;
    }
    return FDTextComponent;
}());
FDTextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'fd-text',
        template: __webpack_require__(198),
        styles: [__webpack_require__(192)],
    })
], FDTextComponent);

//# sourceMappingURL=fd-text.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router) {
        var _this = this;
        this.router = router;
        this.letterNs = [{ name: 'O', state: '' }, { name: 'k', state: '' }, { name: 's', state: '' },
            { name: 'a', state: '' }, { name: 'n', state: '' }, { name: 'a', state: '' }];
        this.letterFs = [{ name: 'K', state: '' }, { name: 'o', state: '' }, { name: 'n', state: '' }, { name: 'd', state: '' }, { name: 'r', state: '' },
            { name: 'a', state: '' }, { name: 't', state: '' }, { name: 'i', state: '' }, { name: 'u', state: '' }, { name: 'k', state: '' }];
        this.state = 'stable';
        this.leftN = 75;
        this.leftF = 0;
        this.mobile = false;
        this.visibility = 'hidden';
        router.events.subscribe(function (path) {
            _this.activUrl = path.url;
        });
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (e) {
            _this.previousUrl = e;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.visibility = 'hidden') {
            setTimeout(function () {
                _this.visibility = 'show';
            }, 5000);
        }
        if (innerWidth < 768) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    };
    HomeComponent.prototype.onResize = function ($event) {
        if (innerWidth < 768) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    };
    HomeComponent.prototype.letteNLeft = function (i) {
        return this.leftN + i * 55 + 'px';
    };
    HomeComponent.prototype.letteFLeft = function (i) {
        return this.leftF + i * 55 + 'px';
    };
    HomeComponent.prototype.blurText = function (letter) {
        letter.state = 'blur';
    };
    HomeComponent.prototype.backText = function (letter) {
        letter.state = 'stable';
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'home',
        template: __webpack_require__(199),
        styles: [__webpack_require__(193)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('blurAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('stable', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ color: '#515151' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('blur', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ color: '#d0d3d4', transform: 'scale(1, 1)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('blur <=> stable', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* animate */])(1000, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ color: '#515151', transform: 'scale(1, 1)', offset: 0.5 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ color: '#d0d3d4', transform: 'scale(1.5, 1.1)', offset: 0.7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ color: '#d0d3d4', transform: 'scale(1, 0.8)', offset: 0.8 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ color: 'white', transform: 'scale(1.1, 1.1)', offset: 1 }),
                    ]))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('onLoad', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* state */])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('hidden => show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* animate */])('2s'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoSVGComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LogoSVGComponent = (function () {
    function LogoSVGComponent() {
    }
    return LogoSVGComponent;
}());
LogoSVGComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'logo-svg',
        template: "\n        <div class=\"svg-container\">\n            <svg version=\"1.1\" id=\"OK\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            \t viewBox=\"0 0 20.7 7.6\" style=\"enable-background:new 0 0 20.7 7.6;\" xml:space=\"preserve\">\n            <style type=\"text/css\">\n            \t.logo-path{fill:#d0d3d4;}\n            </style>\n            <path class=\"logo-path\" d=\"M0.4,6V1.7c0-0.9,1.4-1.3,4.2-1.3s4.2,0.4,4.2,1.3V6c0,0.4-0.4,0.7-1.2,0.9c-0.8,0.2-1.8,0.3-3,0.3\n            \t                   C1.8,7.3,0.4,6.9,0.4,6z M5.2,6.1V1.5c0-0.1-0.2-0.2-0.6-0.2S4,1.4,4,1.5v4.6c0,0.1,0.2,0.2,0.6,0.2C5,6.3,5.2,6.2,5.2,6.1z\"/>\n            <path class=\"logo-path\" d=\"M20,7.2h-4l-1.4-2.5v2.5h-3.7V0.4h3.7v2.3l1.6-2.3h3.4l-2.3,3.1L20,7.2z\"/>\n            </svg>\n        </div>\n    ",
        styles: [__webpack_require__(194)],
    })
], LogoSVGComponent);

//# sourceMappingURL=logo-svg.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LogoComponent = (function () {
    function LogoComponent() {
        this.imgs = [{ src: './src/app/image/O.png', imgState: 'stop' }, { src: './src/app/image/K.png', imgState: 'stop' }];
    }
    LogoComponent.prototype.logoOver = function () {
        this.imgs[0].imgState = 'goO';
        this.imgs[1].imgState = 'goK';
    };
    LogoComponent.prototype.logoLeave = function () {
        this.imgs[0].imgState = 'stop';
        this.imgs[1].imgState = 'stop';
    };
    return LogoComponent;
}());
LogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'logo',
        template: "\n        <a  [routerLink]=\"['/']\">\n            <div class=\"OK-logo\" (mouseenter)='logoOver()' (mouseleave)='logoLeave()'>\n                <img *ngFor='let img of imgs' [@logoAnimation]='img.imgState' src={{img.src}}>\n            </div>\n        </a>\n    ",
        styles: [__webpack_require__(195)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('logoAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('goK', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(-15deg, -15deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('goO', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(15deg, 15deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('stop', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(0, 0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('goK => stop', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(-15deg, -15deg)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(0, 0)', offset: 0.4 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.2)', offset: 0.7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1)', offset: 1 }),
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('goO => stop', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(500, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(15deg, 15deg)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(0, 0)', offset: 0.4 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1.2)', offset: 0.7 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'scale(1)', offset: 1 }),
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('stop => goK', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(200, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(0, 0)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(-15deg, -15deg)', offset: 1 }),
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('stop => goO', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(200, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(0, 0)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'skew(15deg, 15deg)', offset: 1 }),
                    ]))
                ])
            ]),
        ]
    })
], LogoComponent);

//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(router) {
        var _this = this;
        this.router = router;
        this.lines = [{ name: '1', state: 'lines' }, { name: '2', state: 'lines' }, { name: '3', state: 'lines' }];
        this.navStateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.pages = [{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: 'Contacts', link: '/contacts' }];
        router.events.subscribe(function (path) {
            _this.activUrl = path.url;
            if (_this.activUrl === '/') {
                _this.pageNavColor = 'blue';
            }
            else {
                _this.pageNavColor = 'grey';
            }
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        if (innerWidth < 480) {
            this.closeMedia1 = 'closeLine1Mobile';
        }
        else if (480 <= innerWidth && innerWidth < 768) {
            this.closeMedia1 = 'closeLine1Tablet';
        }
        else if (768 <= innerWidth) {
            this.closeMedia1 = 'closeLine1Laptop';
        }
    };
    NavComponent.prototype.toggleNav = function () {
        this.navState.state = (this.navState.state === 'hide' ? 'show' : 'hide');
        this.navStateChange.emit(this.navState);
        this.lines[0].state = (this.lines[0].state === 'lines' ? this.closeMedia1 : 'lines');
        this.lines[1].state = (this.lines[1].state === 'lines' ? 'closeLine2' : 'lines');
        this.lines[2].state = (this.lines[2].state === 'lines' ? 'closeLine3' : 'lines');
    };
    NavComponent.prototype.onClickedOutside = function ($event) {
        this.navState.state = 'hide';
        this.lines[0].state = 'lines';
        this.lines[1].state = 'lines';
        this.lines[2].state = 'lines';
    };
    NavComponent.prototype.changeNavColor = function ($event, page) {
        if (this.activUrl === '/') {
            this.pageNavColor = $event.type == 'mouseover' ? 'grey' : 'blue';
        }
        else {
            this.pageNavColor = $event.type == 'mouseover' ? 'blue' : 'grey';
        }
        if (this.navState.state === 'show') {
            this.pageNavColor = $event.type == 'mouseover' ? 'white' : 'blue';
        }
        if (innerWidth < 480) {
            this.pageNavColor = 'blue';
        }
    };
    NavComponent.prototype.onResize = function ($event) {
        if (innerWidth < 480) {
            this.lines[0].state === 'closeLine1Mobile';
        }
        else if (480 <= innerWidth && innerWidth < 768) {
            this.lines[0].state === 'closeLine1Tablet';
        }
        else if (768 <= innerWidth) {
            this.lines[0].state === 'closeLine1Laptop';
        }
    };
    return NavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], NavComponent.prototype, "navState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], NavComponent.prototype, "navStateChange", void 0);
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'navigation',
        template: "\n        <div (clickOutside)=\"onClickedOutside($event)\" (window:resize)=\"onResize($event)\">\n            <div class='nav-icon' (click)=\"toggleNav()\" (mouseover)=\"changeNavColor($event)\" (mouseout)=\"changeNavColor($event)\">\n                <div *ngFor='let line of lines' [@NavLinesAnimation]=\"line.state\" [ngClass]=\"pageNavColor\" class='nav-line'></div>\n            </div>\n            <ul [@NavAnimation]=\"navState.state\">\n                <li *ngFor='let page of pages' [routerLink]=\"page.link\" (click)='toggleNav()'>{{page.name}}</li>\n            </ul>\n        <div>\n    ",
        styles: [__webpack_require__(196)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('NavLinesAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('lines', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, marginRight: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('closeLine1Laptop', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'rotate(45deg)', marginRight: '30px', marginTop: '18px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('closeLine1Tablet', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'rotate(45deg)', marginRight: '45px', marginTop: '20px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('closeLine1Mobile', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'rotate(45deg)', marginRight: '60px', marginTop: '30px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('closeLine2', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'rotate(-45deg)', marginTop: '-10px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('closeLine3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, right: '30px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('lines <=> *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('400ms ease-in-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('lines => closeLine3', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('150ms ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('closeLine3 => lines', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('150ms 250ms ease-out'))
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('NavAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ right: '-220px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ right: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('hide => show', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('400ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('show => hide', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])('500ms 200ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\ninput {\n  visibility: hidden; }\n\n.slider {\n  width: 40px;\n  height: 10px;\n  background: white;\n  margin: 20px auto;\n  border-radius: 50px;\n  position: relative;\n  box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.2); }\n\n.slider label {\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50px;\n  transition: all .4s ease-out;\n  cursor: pointer;\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);\n  background: #00a19c; }\n\n.slider input:checked + label {\n  left: 27px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.fixed-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\"); }\n\n.nav-component {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 215px;\n  height: 100vh;\n  overflow: hidden;\n  z-index: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\n.loc-letters {\n  width: 150px;\n  margin: 1em auto 0.5em;\n  cursor: pointer; }\n  .loc-letters div {\n    display: inline-block;\n    position: relative;\n    font-family: 'HP Simplified', 'Roboto', sans-serif;\n    color: #515151;\n    font-size: 23px;\n    top: 0;\n    left: 0;\n    margin: 0;\n    z-index: 2; }\n  .loc-letters .blink-line {\n    position: relative;\n    left: -105px;\n    top: 3px;\n    width: 10px;\n    height: 22px;\n    background-color: red; }\n\n.social-icons img {\n  margin: 1em; }\n  .social-icons img:hover {\n    -webkit-transform: scale(1.03);\n            transform: scale(1.03);\n    cursor: pointer; }\n\n.map {\n  width: 90%;\n  height: 12em;\n  margin: 0 auto;\n  border: 2px solid white; }\n\na {\n  text-decoration: none; }\n\nagm-map {\n  height: 100%; }\n\nagm-marker {\n  opacity: 0; }\n\n.cupture {\n  margin-top: 1em; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  .loc-letters {\n    margin: 1em auto 1.5em; }\n  .map {\n    width: 75%;\n    height: 16em; } }\n\n@media (min-width: 769px) {\n  .loc-letters {\n    margin: 50px auto 15px; }\n  .map {\n    width: 70%;\n    height: 25em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\nsvg {\n  width: 200px;\n  height: auto; }\n\n.svg-container {\n  position: absolute; }\n\n.animateText {\n  cursor: pointer; }\n  .animateText .text-path {\n    fill-opacity: 1;\n    stroke: #00a19c;\n    stroke-width: 0.2;\n    stroke-dasharray: 100;\n    stroke-dashoffset: 100;\n    -webkit-animation: drawPath 10s linear;\n            animation: drawPath 10s linear; }\n\n@-webkit-keyframes drawPath {\n  0% {\n    stroke-dashoffset: 100;\n    stroke: #00a19c;\n    fill-opacity: 0; }\n  30% {\n    stroke: #00a19c;\n    fill-opacity: 0; }\n  40% {\n    stroke: transparent;\n    fill-opacity: 1; }\n  100% {\n    stroke-dashoffset: 0;\n    stroke: transparent;\n    fill-opacity: 1; } }\n\n@keyframes drawPath {\n  0% {\n    stroke-dashoffset: 100;\n    stroke: #00a19c;\n    fill-opacity: 0; }\n  30% {\n    stroke: #00a19c;\n    fill-opacity: 0; }\n  40% {\n    stroke: transparent;\n    fill-opacity: 1; }\n  100% {\n    stroke-dashoffset: 0;\n    stroke: transparent;\n    fill-opacity: 1; } }\n\n.stopAnimateText {\n  -webkit-animation: none;\n          animation: none; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  svg {\n    width: 350px; } }\n\n@media (min-width: 769px) {\n  svg {\n    width: 500px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\n.page-content {\n  top: 0; }\n\n.content-wrapper {\n  position: relative;\n  margin-top: -55vh; }\n\n.letterDiv {\n  position: relative;\n  width: 550px;\n  font-family: Haettenschweiler;\n  font-size: 90px;\n  letter-spacing: 2px;\n  line-height: 80px;\n  color: #515151;\n  margin: 0 auto; }\n\n.letterDiv div {\n  position: absolute;\n  top: -100px;\n  text-align: center;\n  width: 50px;\n  display: inline; }\n  .letterDiv div:hover {\n    cursor: pointer; }\n\n.letterDiv:nth-child(2) div {\n  top: 0;\n  left: -20px; }\n\n.home-photo {\n  width: 80%;\n  height: 100vh; }\n  .home-photo img {\n    display: none; }\n\n.home-info {\n  position: absolute;\n  top: 30%;\n  width: 100%; }\n\n.constant-content {\n  position: relative;\n  top: 1em;\n  text-align: center; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  .letterDiv {\n    font-size: 70px; }\n  .letterDiv:nth-child(1) div {\n    top: -75px; }\n  .constant-content {\n    top: 6em; } }\n\n@media (min-width: 769px) and (max-width: 1200px) {\n  .letterDiv {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  .home-photo {\n    width: 70%; }\n  .constant-content {\n    top: 105px; } }\n\n@media (min-width: 1201px) {\n  .home-photo {\n    width: 30em; }\n    .home-photo img {\n      display: block;\n      width: 30em;\n      height: 100vh;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .letterDiv {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  .constant-content {\n    top: 105px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\nsvg {\n  width: 220px;\n  height: auto; }\n  svg:focus {\n    outline: 0; }\n\n.svg-container {\n  position: relative;\n  width: 220px;\n  margin: 20vh auto 0;\n  opacity: 0;\n  -webkit-animation: moveLogo 5s linear;\n          animation: moveLogo 5s linear; }\n\n@-webkit-keyframes moveLogo {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  65% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  76% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    opacity: 1; }\n  84% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 1; }\n  90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n\n@keyframes moveLogo {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  65% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  76% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    opacity: 1; }\n  84% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n    opacity: 1; }\n  90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n\n.logo-path {\n  fill-opacity: 0;\n  stroke: #00a19c;\n  stroke-width: 0.1;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 10000;\n  -webkit-animation: drawPath 10s linear forwards;\n          animation: drawPath 10s linear forwards; }\n\n@-webkit-keyframes drawPath {\n  0% {\n    stroke-dashoffset: 10000; }\n  100% {\n    stroke-dashoffset: 20; } }\n\n@keyframes drawPath {\n  0% {\n    stroke-dashoffset: 10000; }\n  100% {\n    stroke-dashoffset: 20; } }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  svg, .svg-container {\n    width: 350px; } }\n\n@media (min-width: 769px) {\n  svg {\n    width: 500px; }\n  .svg-container {\n    width: 500px;\n    margin: 30vh auto 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\n.OK-logo {\n  position: absolute;\n  left: 1em;\n  top: -2em; }\n  .OK-logo img {\n    padding: 2px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  .OK-logo {\n    left: 2em;\n    top: -1em; } }\n\n@media (min-width: 769px) {\n  .OK-logo {\n    left: 5em;\n    top: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\n.nav-icon {\n  position: absolute;\n  top: 0.5em;\n  right: 1em;\n  z-index: 1; }\n  .nav-icon:hover {\n    cursor: pointer; }\n\n.nav-line {\n  width: 60px;\n  height: 3px;\n  background-color: #00a19c;\n  margin: 10px 0; }\n\nul {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 175px;\n  height: 87vh;\n  background-color: rgba(208, 211, 212, 0.8);\n  margin: 0;\n  padding: 120px 20px 0 20px;\n  text-align: center;\n  z-index: 0; }\n\nli {\n  display: block;\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  color: #515151;\n  margin: 60px 0;\n  font-size: 30px; }\n  li:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.08);\n            transform: scale(1.08);\n    color: #00a19c; }\n  li:focus {\n    outline: 0; }\n\n.blue {\n  background-color: #00a19c; }\n\n.grey {\n  background-color: #d0d3d4; }\n\n.white {\n  background-color: white; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n  .nav-icon {\n    top: 1.5em;\n    right: 2em; } }\n\n@media (min-width: 769px) {\n  .nav-icon {\n    top: 2.5em;\n    right: 3em; } }\n\n.closeLine1Mobile {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-content\">\n    <router-outlet class=\"app-content\"></router-outlet>\n    <navigation class='nav-component'  [@NavContainerAnimation]=\"navContainerState.state\"\n                (click)='toggleNavContainer()' (clickOutside)=\"onClickedOutsideNavContainer($event)\"\n                [(navState)]='navState'>\n    </navigation>\n</div>\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\".svg-container\" [ngClass]=\"isHover?'animateText':''\">\n    <svg (mouseenter)=\"isHover = !isHover\" version=\"1.1\" id=\"Frontend_developer\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n    \t y=\"0px\" viewBox=\"0 0 82.1 9.2\" style=\"enable-background:new 0 0 82.1 9.2;\" xml:space=\"preserve\">\n    <style type=\"text/css\">\n    \t.text-path{fill:#00A19C;}\n    </style>\n    <path class=\"text-path\" d=\"M3.7,1.4H2.1v2h1.4v0.9H2.1v3.5H0.3V0.5h3.5V1.4z\"/>\n    <path class=\"text-path\" d=\"M8.5,4.3H6.9V3c0-0.2-0.1-0.3-0.3-0.3S6.3,2.8,6.3,3v4.7H4.6V1.8h1.7V2c0.2-0.2,0.6-0.2,1-0.2\n    \tC7.7,1.8,8,1.9,8.2,2s0.4,0.4,0.4,0.6V4.3z\"/>\n    <path class=\"text-path\" d=\"M9.4,6.5V3c0-0.8,0.7-1.2,2-1.2c0.5,0,1,0.1,1.4,0.3s0.6,0.5,0.6,0.9v3.6c0,0.8-0.6,1.2-1.9,1.2\n    \tC10.1,7.8,9.4,7.4,9.4,6.5z M11.7,6.6V3c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3\n    \tC11.6,6.9,11.7,6.8,11.7,6.6z\"/>\n    <path class=\"text-path\" d=\"M18.2,7.7h-1.7V3c0-0.2-0.1-0.3-0.3-0.3S15.9,2.8,15.9,3v4.7h-1.7V1.8h1.7V2c0.2-0.2,0.6-0.2,1-0.2\n    \tc0.3,0,0.6,0.1,0.8,0.2c0.3,0.1,0.4,0.3,0.4,0.6V7.7z\"/>\n    <path class=\"text-path\" d=\"M22.5,7.7h-1.1c-0.8,0-1.2-0.1-1.4-0.3c-0.1-0.2-0.2-0.6-0.2-1.1V2.7h-0.7V1.8h0.7V0.7h1.7v1.2h0.9v0.9h-0.9\n    \tv3.6c0,0.2,0.1,0.3,0.2,0.3s0.4,0.1,0.8,0.1V7.7z\"/>\n    <path class=\"text-path\" d=\"M27.3,5.2H25v1.4c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3V5.4h1.7v1.2c0,0.8-0.7,1.2-2,1.2\n    \tc-1.3,0-1.9-0.4-1.9-1.2V3c0-0.8,0.6-1.2,1.9-1.2c1.3,0,2,0.4,2,1.2V5.2z M25.6,4.3V3c0-0.2-0.1-0.3-0.3-0.3C25.1,2.7,25,2.8,25,3\n    \tv1.3H25.6z\"/>\n    <path class=\"text-path\" d=\"M32.2,7.7h-1.7V3c0-0.2-0.1-0.3-0.3-0.3S29.9,2.8,29.9,3v4.7h-1.7V1.8h1.7V2c0.2-0.2,0.6-0.2,1-0.2\n    \tc0.3,0,0.6,0.1,0.8,0.2c0.3,0.1,0.4,0.3,0.4,0.6V7.7z\"/>\n    <path class=\"text-path\" d=\"M37,7.7h-1.3l-0.1-0.2c-0.3,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.4-0.4-0.4-0.7V2.6\n    \tc0-0.2,0.1-0.4,0.4-0.6c0.2-0.1,0.5-0.2,0.9-0.2c0.5,0,0.8,0.1,1,0.2V0.5H37V7.7z M35.4,6.6V3c0-0.2-0.1-0.3-0.3-0.3\n    \tc-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3C35.3,6.9,35.4,6.8,35.4,6.6z\"/>\n    <path class=\"text-path\" d=\"M44.7,7.7h-1.3l-0.1-0.2c-0.3,0.2-0.6,0.3-1,0.3c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.4-0.4-0.4-0.7V2.6\n    \tc0-0.2,0.1-0.4,0.4-0.6c0.2-0.1,0.5-0.2,0.9-0.2c0.5,0,0.8,0.1,1,0.2V0.5h1.7V7.7z M43,6.6V3c0-0.2-0.1-0.3-0.3-0.3\n    \tc-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3C42.9,6.9,43,6.8,43,6.6z\"/>\n    <path class=\"text-path\" d=\"M49.5,5.2h-2.2v1.4c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3V5.4h1.7v1.2c0,0.8-0.7,1.2-2,1.2\n    \tc-1.3,0-1.9-0.4-1.9-1.2V3c0-0.8,0.6-1.2,1.9-1.2c1.3,0,2,0.4,2,1.2V5.2z M47.9,4.3V3c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3\n    \tv1.3H47.9z\"/>\n    <path class=\"text-path\" d=\"M54.8,1.8l-1.2,5.9h-2l-1.2-5.9H52l0.6,3.5l0.6-3.5H54.8z\"/>\n    <path class=\"text-path\" d=\"M59.6,5.2h-2.2v1.4c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3V5.4h1.7v1.2c0,0.8-0.7,1.2-2,1.2\n    \tc-1.3,0-1.9-0.4-1.9-1.2V3c0-0.8,0.6-1.2,1.9-1.2c1.3,0,2,0.4,2,1.2V5.2z M57.9,4.3V3c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3\n    \tv1.3H57.9z\"/>\n    <path class=\"text-path\" d=\"M62.2,7.7h-1.7V0.5h1.7V7.7z\"/>\n    <path class=\"text-path\" d=\"M63.2,6.5V3c0-0.8,0.7-1.2,2-1.2c0.5,0,1,0.1,1.4,0.3s0.6,0.5,0.6,0.9v3.6c0,0.8-0.6,1.2-1.9,1.2\n    \tC63.8,7.8,63.2,7.4,63.2,6.5z M65.4,6.6V3c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3\n    \tC65.3,6.9,65.4,6.8,65.4,6.6z\"/>\n    <path class=\"text-path\" d=\"M69.7,7.6v1.4H68V1.8h1.3l0.1,0.2c0.3-0.2,0.6-0.3,1-0.3c0.4,0,0.7,0.1,1.1,0.2s0.5,0.4,0.5,0.7V7\n    \tc0,0.2-0.1,0.4-0.4,0.6s-0.5,0.2-0.9,0.2C70.2,7.8,69.9,7.7,69.7,7.6z M70.3,6.6V3c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3\n    \tv3.6c0,0.2,0.1,0.3,0.3,0.3C70.2,6.9,70.3,6.8,70.3,6.6z\"/>\n    <path class=\"text-path\" d=\"M76.8,5.2h-2.2v1.4c0,0.2,0.1,0.3,0.3,0.3c0.2,0,0.3-0.1,0.3-0.3V5.4h1.7v1.2c0,0.8-0.7,1.2-2,1.2\n    \tc-1.3,0-1.9-0.4-1.9-1.2V3c0-0.8,0.6-1.2,1.9-1.2c1.3,0,2,0.4,2,1.2V5.2z M75.1,4.3V3c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3\n    \tv1.3H75.1z\"/>\n    <path class=\"text-path\" d=\"M81.7,4.3h-1.7V3c0-0.2-0.1-0.3-0.3-0.3S79.5,2.8,79.5,3v4.7h-1.7V1.8h1.7V2c0.2-0.2,0.6-0.2,1-0.2\n    \tc0.3,0,0.6,0.1,0.9,0.2s0.4,0.4,0.4,0.6V4.3z\"/>\n    </svg>\n</div>\n"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n    <logo-svg></logo-svg>\n    <div class=\"content-wrapper\" (window:resize)=\"onResize($event)\" [@onLoad]=\"visibility\">\n        <div class=\"home-photo\">\n            <img src=\"./src/app/image/ok_web_photo_WB.jpg\" alt=\"\">\n        </div>\n        <div class=\"home-info\">\n            <div *ngIf=\"mobile\">\n                <h1>Oksana</h1>\n                <h1>Kondratiuk</h1>\n            </div>\n            <div *ngIf=\"!mobile\" class=\"movable-content\">\n                <div class='letterDiv'>\n                    <div *ngFor='let letterN of letterNs; let i = index' [@blurAnimation]='letterN.state'\n                        (mouseenter)='blurText(letterN)' (mouseleave)='backText(letterN)'\n                        [style.left]='letteNLeft(i)'>{{letterN.name}}</div>\n                </div>\n                <div class='letterDiv'>\n                    <div *ngFor='let letterF of letterFs; let i = index' [@blurAnimation]='letterF.state'\n                        (mouseenter)='blurText(letterF)' (mouseleave)='backText(letterF)'\n                        [style.left]='letteFLeft(i)'>{{letterF.name}}</div>\n                </div>\n            </div>\n            <div class=\"constant-content\">\n                <div class=\"divide-line\"></div>\n                <fd-text></fd-text>\n            </div>\n        </div>\n    </div>\n    <p class=\"cupture\">This site was built using Angular 2 and styled with SCSS</p>\n</div>\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(109);


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideIn; });

var slideIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* trigger */])('slideIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* style */])({
        opacity: 0
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* style */])({
        opacity: 1
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* style */])({
        opacity: 0
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])('* => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('1000ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* transition */])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('1000ms ease-in'))
]);
//# sourceMappingURL=load-animation.js.map

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: Haettenschweiler;\n  src: url(\"/src/app/assets/Haettenschweiler.ttf\"); }\n\nh1 {\n  font-family: Haettenschweiler;\n  font-size: 60px;\n  letter-spacing: 2px;\n  color: #515151;\n  margin: 0;\n  line-height: 55px; }\n\nh2 {\n  font-family: Haettenschweiler;\n  font-size: 40px;\n  letter-spacing: 1px;\n  margin: 25px 0 5px;\n  color: #00a19c; }\n\nh3 {\n  font-family: Haettenschweiler;\n  font-size: 30px;\n  letter-spacing: 2.2px;\n  margin: 20px;\n  color: #d0d3d4; }\n\np, span {\n  font-family: 'HP Simplified', 'Roboto', sans-serif;\n  font-size: 16px;\n  color: #515151; }\n\n.page-content {\n  position: absolute;\n  width: 100%;\n  top: 3em;\n  text-align: center;\n  background-image: url(\"/src/app/image/webOK_bg.jpg\");\n  padding-bottom: 2em; }\n\n.divide-line {\n  width: 210px;\n  height: 2px;\n  margin: 1em auto 2em;\n  box-shadow: 9px -3px 5px white;\n  background: radial-gradient(#a7a7a7 25%, #d5d5d5 53%, white 73%); }\n\n.cupture {\n  position: relative;\n  text-align: center;\n  font-size: 12px; }\n\n@media (min-width: 480px) and (max-width: 768px) {\n  h1 {\n    font-size: 90px;\n    line-height: 80px; }\n  .divide-line {\n    width: 380px; } }\n\n@media (min-width: 769px) {\n  h1 {\n    font-size: 120px;\n    letter-spacing: 8px;\n    line-height: 100px; }\n  h2 {\n    font-size: 60px;\n    letter-spacing: 4px;\n    margin: 45px 0; }\n  h3 {\n    font-size: 55px;\n    letter-spacing: 4px; }\n  .divide-line {\n    width: 550px;\n    height: 3px;\n    margin: 50px auto; }\n  .cupture {\n    font-size: 16px; } }\n\n.info-rows, .info-icons {\n  width: 250px;\n  margin: 0 auto; }\n  .info-rows div, .info-icons div {\n    display: block;\n    padding-left: 50px; }\n  .info-rows h2, .info-icons h2 {\n    font-size: 20px;\n    text-align: left; }\n  .info-rows p, .info-icons p {\n    text-align: left; }\n  .info-rows img, .info-icons img {\n    display: block;\n    height: 30px;\n    padding-left: 2em; }\n  .info-rows img:hover, .info-rows p:hover, .info-icons img:hover, .info-icons p:hover {\n    cursor: default;\n    -webkit-filter: invert(0.8) hue-rotate(200deg); }\n\n.slider-wrapper slider {\n  display: inline-block;\n  padding: 0 1em; }\n\n.cupture {\n  margin-top: 5em; }\n\n@media (min-width: 768px) {\n  .info-rows, .info-icons {\n    width: 600px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 auto; }\n    .info-rows div, .info-icons div {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding-left: 50px; }\n      .info-rows div:nth-child(1), .info-icons div:nth-child(1) {\n        -webkit-box-flex: 2;\n            -ms-flex: 2;\n                flex: 2; }\n    .info-rows h2, .info-icons h2 {\n      font-size: 35px;\n      margin: 35px auto; }\n    .info-rows img, .info-icons img {\n      display: block;\n      height: 40px;\n      padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

},[230]);
//# sourceMappingURL=main.bundle.js.map
