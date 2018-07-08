(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Booking.service.ts":
/*!************************************!*\
  !*** ./src/app/Booking.service.ts ***!
  \************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/booking';
var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
        this.bookingUrl = '/booking';
        this.addBookingsUrl = '/bookings';
    }
    // function to extract data from rensponse
    BookingService.prototype.extractData = function (res) {
        // tslint:disable-next-line:prefer-const
        var body = res;
        return body || {};
    };
    // Return Comments
    BookingService.prototype.getBookings = function (id) {
        var url = apiUrl + this.bookingUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    };
    // Adds comments
    BookingService.prototype.addBooking = function (date, email, city, hotel) {
        var uri = "" + (apiUrl + this.addBookingsUrl);
        var obj = {
            date: date,
            email: email,
            city: city,
            hotel: hotel
        };
        return this.http.post(uri, obj);
    };
    // Errors Handler
    BookingService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    BookingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container about-description\" id=\"about\">\r\n  <h1>About</h1>\r\n  <p>\r\n    What if a storm hits Hilton Head Island before you get ready to go on vacation? The answer is simple… stay home! But before\r\n    you unpack, just check to make sure whether the Island has been affected. We have had many tropical storm warnings over\r\n    the years, but unlike Florida we’ve been extremely fortunate. In our opinion, the best offense is defense. We recommend\r\n    purchasing travel insurance. Even the most basic travel insurance will provide some compensation if flights are canceled\r\n    or the island is closed down due to a hurricane. n 2006, the National Hurricane Center is predicting a hurricane season\r\n    with 8 to 10 named storms. As residents of Hilton Head Island, we always prepare the best we can. We are constantly planning\r\n    ahead. You should do the same; you need to plan ahead. While we cannot forecast the weather day in and day out, the Internet\r\n    can provide help in dealing with the variety of weather conditions vacationers may face that could take a toll on Hilton\r\n    Head Island. Weather Channel site and the National Hurricane Centers site are two excellent resources. At Hilton Head\r\n    Rentals we recommend the following. Use the services of a travel professional, especially if you will be vacationing\r\n    during hurricane season. When buying vacation packages through a vacation rental property management company or a travel\r\n    agency, it will reduce your stress because travel professionals are your advocates and are ready to help you through\r\n    difficult travel scenarios. If a vacation is booked online it may be difficult to get through to one of their representatives.\r\n    On Hilton Head Island there are a lot of different vacation companies that offer a variety of vacation insurance plans.\r\n    If you book directly with a vacation rental management company that offers homes, villas and condos, they will in all\r\n    likelihood have insurance plans to offer. If you’re working with a travel agent, they can assist you in determining which\r\n    plan provides the best coverage for the right price. Some even offer a “cancel for any reason” waiver, allowing you to\r\n    see that a hurricane might be swirling for Hilton Head. With this type of plan, your travel professionals can quickly\r\n    use their resources to find an alternate resort area so your vacation won’t be sacrificed. norway. We recommend pur-chasing\r\n    travel insur-ance. Even the most basic travel insurance will provide some com-pensation if flights are canceled or the\r\n    island is closed down due to a hurricane. On Hilton Head Island there are a lot of different vacation companies that\r\n    offer a variety of vacation insurance plans. If you book directly with a vacation rental management company that offers\r\n    homes, villas and condos, they will in all likelihood have insurance (1) plans to offer. If you’re working with a travel\r\n    agent (2), they can assist you in determining which plan provides the best coverage for the right price. Some even offer\r\n    a “cancel for any reason” waiver, allowing you to see that a hurricane might be swirling for Hilton Head. With this type\r\n    of plan, your travel professionals can quickly use their resources to find an alternate resort area so your vacation\r\n    won’t be sacrificed.\r\n    <br>\r\n    <span class=\"center-image\">\r\n      <img src=\"../../assets/foto1.png\">\r\n    </span>\r\n    <br> On Hilton Head Island there are a lot of different vacation companies that offer a variety of vacation insurance plans.\r\n    If you book directly with a vacation rental management company that offers homes, villas and condos, they will in all\r\n    likelihood have insurance plans to offer. If you’re working with a travel agent, they can assist you in determining which\r\n    plan provides the best coverage for the right price. Some even offer a “cancel for any reason” waiver, allowing you to\r\n    see that a hurricane might be swirling for Hilton Head. With this type of plan, your travel professionals can quickly\r\n    use their resources to find an alternate resort area so your vacation won’t be sacrificed. 1. With this type of plan,\r\n    your travel 2. On Hilton Head Island there are a lot of different vacation companies\r\n  </p>\r\n</div>\r\n<div class=\"container about-booking-input\">\r\n  <div class=\"row about-title\">\r\n    <div class=\"col-md-7 about-title_bookingtitle\">\r\n      <h2>Booking</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row about-booking\">\r\n    <flash-messages></flash-messages>\r\n    <form [formGroup]=\"angForm\" class=\"form-element\">\r\n      <div class=\"col-sm-4 offset-sm-2 about-booking_calendar\">\r\n        <div class=\"form-group form-element_date\">\r\n          <p-calendar formControlName=\"date\"  [inline]=\"true\" [disabledDates]=\"restictedBookingDates\"  [minDate]=\"minimumDate\" tabindex=\"0\" readonlyInput=\"true\">\r\n            <ng-template pTemplate=\"date\" let-date>\r\n                <span [ngStyle]=\"{backgroundColor: (date.day ==19) ? '#7cc67c' : 'inherit'}\"   style=\"border-radius:50%\">{{date.day}}</span>\r\n            </ng-template>\r\n        </p-calendar>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4 about-booking_form\">\r\n        <div class=\"form-group form-element_email\">\r\n          <input type=\"email\" class=\"form-control info\" placeholder=\"Email\" formControlName=\"email\" #email (ngModelChange)=\"onChange($event)\">\r\n        </div>\r\n        <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\"\r\n          class=\"alert alert-danger\">\r\n          <div *ngIf=\"angForm.controls['email'].errors.required\">\r\n            Email is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"input-group mb-3 form-element_city\">\r\n            <select class=\"custom-select\" id=\"inputGroupSelect01\" #cityName (change)=\"changeSelect(cityName.value)\" formControlName='city'>\r\n                    <option selected *ngFor=\"let city of cities\" [ngValue]=\"city.cityName\">{{city.cityName}}</option>\r\n        \r\n                  </select>\r\n          </div>\r\n          <div class=\"input-group mb-3 form-element_hotel\">\r\n            <select class=\"custom-select\" id=\"inputGroupSelect01\" #hotelName formControlName='hotel'>\r\n                    <option selected *ngFor=\"let hotel of hotels\" [ngValue]=\"hotel.hotelName\">{{hotel.hotelName}}</option>\r\n        \r\n                  </select>\r\n          </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" (click)=\"addBooking(date, email.value, cityName.value , hotelName.value)\" class=\"btn btn-primary btn-block form-element_btn\"\r\n            [disabled]=\"!validEmail\">Book</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n/* styles.css */\n.about-description {\n  margin-top: 739px;\n  padding: 0px; }\n.global-container {\n  overflow: auto; }\n.about-booking-input {\n  border: none;\n  background-size: cover;\n  overflow: auto;\n  background: url('booking_bg.png'); }\n.about-booking_form {\n  background-color: white;\n  padding: 30px;\n  border-radius: 30px;\n  margin-bottom: 40px;\n  height: 339px; }\n.about-booking_calendar {\n  color: white;\n  margin-bottom: 23px; }\n.custom-select {\n  background-color: #eaf3f7;\n  height: 50px; }\n.about-title_bookingtitle {\n  color: white;\n  display: flex;\n  justify-content: center; }\n.form-element {\n  display: flex;\n  flex-basis: 100%; }\n.form-element_btn {\n    width: 100%;\n    border-radius: 25px;\n    margin-top: 54px;\n    height: 50px; }\n.form-element input {\n    border-radius: 30px;\n    color: black;\n    background-color: #eaf3f7;\n    border-radius: 25px;\n    height: 50px;\n    margin-top: 10px; }\n.form-element .input-group > .custom-select {\n    border-radius: 50px; }\n.center-image img {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 100%; }\nh2 {\n  margin-left: -67px; }\nh2:after {\n  content: \"\";\n  display: inline-block;\n  height: 0.5em;\n  vertical-align: bottom;\n  width: 100%;\n  margin-right: -100%;\n  margin-left: 10px;\n  border-top: 4px solid white; }\n@media (min-width: 320px) and (max-width: 480px) {\n  .about-title_bookingtitle {\n    color: white; }\n  .form-element {\n    display: block; }\n  .about-description {\n    margin-top: 517px; }\n  .about-booking {\n    display: block;\n    width: auto; }\n    .about-booking_calendar {\n      padding: 0px; }\n    .about-booking_input {\n      overflow: auto; }\n  .ui-datepicker.ui-datepicker-inline {\n    padding: 10px !important; }\n  .about-booking {\n    display: block !important; }\n  .ui-calendar {\n    display: block; } }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Booking.service */ "./src/app/Booking.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutComponent = /** @class */ (function () {
    function AboutComponent(flashMessages, fb, activeRouter, bookingService) {
        this.flashMessages = flashMessages;
        this.fb = fb;
        this.activeRouter = activeRouter;
        this.bookingService = bookingService;
        this.minimumDate = new Date();
        // tslint:disable-next-line:max-line-length
        this.validEmail = false;
        this.cities = [
            {
                cityName: 'Berlin',
            },
            {
                cityName: 'Oslo',
            },
            {
                cityName: 'Warsaw',
            },
            {
                cityName: 'Paris',
            }
        ];
        this.hotels = [
            {
                cityName: 'Oslo',
                hotelName: 'Sheraton Hotel',
            },
            {
                cityName: 'Berlin',
                hotelName: 'grand hotel',
            },
            {
                cityName: 'Warsaw',
                hotelName: 'Hiltom hotel',
            },
            {
                cityName: 'Paris',
                hotelName: 'Africanskiej hotel',
            },
        ];
        this.date = new Date(Date.now());
        this.bookings = [];
        this.createForm();
    }
    AboutComponent.prototype.onChange = function (newValue) {
        // tslint:disable-next-line:max-line-length
        var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (validEmail.test(newValue)) {
            this.validEmail = true;
        }
        else {
            this.validEmail = false;
        }
    };
    AboutComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            city: this.cities[0].cityName,
            hotel: null
        });
    };
    AboutComponent.prototype.changeSelect = function (event) {
        var ret = this.hotels.find(function (data) { return data.cityName.toString() === event.split(': ')[1].toString(); });
        this.angForm.get('hotel').setValue(ret.hotelName);
    };
    AboutComponent.prototype.addBooking = function (date, email, cityName, hotelName) {
        var _this = this;
        this.bookingService.addBooking(date, email, cityName, hotelName).subscribe(function () {
            _this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
            // get the id
            _this.activeRouter.params.subscribe(function (params) {
                // tslint:disable-next-line:prefer-const
                var id = params['id'];
                _this.bookingService.getBookings(id)
                    .subscribe(function (bookings) {
                    console.log(bookings);
                    _this.bookings = bookings;
                });
            });
        }, function () {
            _this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    AboutComponent.prototype.ngOnInit = function () {
        var today = new Date('July 19, 2018');
        var invalidDate = new Date();
        invalidDate.setDate(today.getDate());
        this.restictedBookingDates = [today, invalidDate];
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _Booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default movie-navbar\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand booking-brand\" href=\"#\">Booking App</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<section class=\"main-header\" id=\"main\">\r\n  <div class=\"home-cont\">\r\n    <div class=\"container global-container\">\r\n      <div class=\"row\">\r\n        <div class=\"main-header-sub text-center\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"content-text\">\r\n              <h1>Booking App</h1>\r\n              <h3>Bootstrap 4 + Angular 6 + NodeJs + ExpressJs + MongoDB Booking App </h3>\r\n              <a href=\"#about\" class=\"btn btn-primary learn-more\">Explore Booking App</a>\r\n              <div class=\"circle-1\"></div>\r\n              <div class=\"circle-2\"></div>\r\n              <div class=\"circle-3\"></div>\r\n              <div class=\"circle-4\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"img-section\">\r\n            <img class=\"img-chat img-fluid\" src=\"/assets/mobile.png\" alt=\"\">\r\n            <img class=\"img-browser img-fluid\" src=\"/assets/laptop.png\" alt=\"\">\r\n            <img class=\"img-followers img-fluid\" src=\"/assets/mobile.png\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"round-header-circle hidden-sm hidden-xs\">\r\n    <div class=\"round-animate\">\r\n      <div class=\"round-1\">\r\n        <span class=\"r-1\"></span>\r\n        <span class=\"r-2\"></span>\r\n        <span class=\"r-3\"></span>\r\n        <span class=\"r-4\"></span>\r\n      </div>\r\n      <div class=\"round-2\">\r\n        <span class=\"r-1\"></span>\r\n        <span class=\"r-2\"></span>\r\n        <span class=\"r-3\"></span>\r\n        <span class=\"r-4\"></span>\r\n      </div>\r\n      <div class=\"round-3\">\r\n        <span class=\"r-1\"></span>\r\n        <span class=\"r-2\"></span>\r\n        <span class=\"r-3\"></span>\r\n        <span class=\"r-4\"></span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n  <footer>\r\n    <p>&copy; 2018 Designed and created by Geofrey Zellah , Zellah's Inc .</p>\r\n  </footer>\r\n</div>\r\n<!-- /container -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: red; }\n\n.main-header {\n  margin: 0px; }\n\n.booking-brand {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Booking App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Booking.service */ "./src/app/Booking.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_10__["IgxCalendarModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_10__["IgxDatePickerModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_10__["IgxDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] }
                ]),
            ],
            providers: [_Booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bonge\Documents\Projects\bookingapp\booking-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map