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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse \">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Movies Database</a>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n  <hr>\n  <footer>\n    <p>&copy; 2018 Designed and created by Geofrey Zellah , Zellah's Inc .</p>\n  </footer>\n</div>\n<!-- /container -->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: red; }\n"

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
        this.title = 'Movies Database';
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
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _create_movie_create_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-movie/create-movie.component */ "./src/app/create-movie/create-movie.component.ts");
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
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_9__["MovieComponent"],
                _create_movie_create_movie_component__WEBPACK_IMPORTED_MODULE_10__["CreateMovieComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["JsonpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_7__["MoviesComponent"] },
                    { path: 'movie/:id', component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_9__["MovieComponent"] }
                ]),
            ],
            providers: [_movies_service__WEBPACK_IMPORTED_MODULE_8__["MoviesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-movie/create-movie.component.html":
/*!**********************************************************!*\
  !*** ./src/app/create-movie/create-movie.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Bought a Movie?</div>\r\n                <div class=\"panel-body\">\r\n                    <form (ngSubmit)=\"addMovie(addmovie)\">\r\n                        <div class=\"form-group movie-username\">\r\n                          <label for=\"title\">Name:</label>\r\n                          <input type=\"text\" class=\"form-control movie-title_text\" id=\"movie-title\" [(ngModel)]=\"addmovie.title\" name=\"title\">\r\n                        </div>           \r\n                    <button class=\"btn btn-primary\" style=\"cursor: pointer\">Save</button>\r\n                </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/create-movie/create-movie.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/create-movie/create-movie.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-movie/create-movie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-movie/create-movie.component.ts ***!
  \********************************************************/
/*! exports provided: CreateMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMovieComponent", function() { return CreateMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateMovieComponent = /** @class */ (function () {
    function CreateMovieComponent(http, location, moviesService) {
        this.http = http;
        this.location = location;
        this.moviesService = moviesService;
        this.addmovie = [];
        this.newMovie = [];
    }
    CreateMovieComponent.prototype.addMovie = function (addmovie) {
        var _this = this;
        if (!addmovie) {
            return;
        }
        this.moviesService.createMovie(addmovie)
            .then(function (movie) {
            console.log(movie);
            _this.newMovie.push(movie.addmovie);
        });
    };
    CreateMovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-movie',
            template: __webpack_require__(/*! ./create-movie.component.html */ "./src/app/create-movie/create-movie.component.html"),
            styles: [__webpack_require__(/*! ./create-movie.component.scss */ "./src/app/create-movie/create-movie.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]])
    ], CreateMovieComponent);
    return CreateMovieComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">{{movie.title}} </h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n          <img class=\"thumbnail\" src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">Genres:\r\n              <span *ngFor=\"let genre of movie.genres\">{{genre.name}}, </span>\r\n            </li>\r\n            <li class=\"list-group-item\">Release Date: {{movie.release_date}}</li>\r\n          </ul>\r\n          <br>\r\n          <a *ngIf=\"movie.homepage\" href=\"{{movie.homepage}}\" target=\"_blank\" class=\"btn btn-default zero\">Visit Movie Website</a>\r\n        </div>\r\n        <div *ngFor=\"let review of review.results\" class=\"col-md-7\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">Author: {{review.author}}</li>\r\n            <li class=\"list-group-item\">Comments: {{review.content}}</li>\r\n            <li class=\"list-group-item\">Comments Link:\r\n              <a href=\"{{review.url}}\">Visit comments link</a>\r\n            </li>\r\n          </ul>\r\n          <br>\r\n        </div>\r\n        <div class=\"col-md-7\">\r\n          <form (ngSubmit)=\"addReview(addreview)\">\r\n            <div class=\"form-group movie-username\">\r\n              <label for=\"author\">Name:</label>\r\n              <input type=\"text\" class=\"form-control movie-username_text\" id=\"usr\" [(ngModel)]=\"addreview.author\" name=\"author\" #author>\r\n            </div>\r\n            <div class=\"form-group movie-textarea\">\r\n              <label for=\"movie-textarea_label description\">Do you like the movie? leave us a comment below</label>\r\n              <textarea class=\"form-control rounded-0\" \r\n              id=\"movie-textarea_textarea\" #description=\"ngModel\" rows=\"10\"\r\n              [(ngModel)]=\"addreview.description\" \r\n              name=\"description\"></textarea>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/movie/movie.component.scss":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = /** @class */ (function () {
    function MovieComponent(router, moviesService) {
        this.router = router;
        this.moviesService = moviesService;
        this.movie = [];
        this.review = [];
        this.addreview = [];
        this.addreviews = [];
    }
    MovieComponent.prototype.addReview = function (addreview) {
        var _this = this;
        if (!addreview) {
            return;
        }
        this.moviesService.createReview(addreview)
            .then(function (reviews) {
            console.log(reviews);
            _this.addreviews.push(reviews.addreview);
        });
    };
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            // tslint:disable-next-line:prefer-const
            var id = params['id'];
            _this.moviesService.getMovie(id)
                .then(function (movie) {
                _this.movie = movie;
            });
        });
        this.router.params.subscribe(function (params) {
            // tslint:disable-next-line:prefer-const
            var id = params['id'];
            _this.moviesService.getReview(id)
                .then(function (review) {
                console.log(review);
                _this.review = review;
            });
        });
    };
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/movie/movie.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movies.service.ts":
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = /** @class */ (function () {
    function MoviesService(http, _jsonp) {
        this.http = http;
        this._jsonp = _jsonp;
        this.queryUrl = '/search/';
        this.theatreUrl = '/theatre/';
        this.movieUrl = '/movies/';
        this.reviewUrl = '/comments/';
        this.apiUrl = '';
    }
    MoviesService.prototype.getMovies = function (id) {
        return this.http.get(this.apiUrl + '/movies')
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);
    };
    MoviesService.prototype.getMovie = function (id) {
        return this.http.get(this.apiUrl + this.movieUrl + id)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);
    };
    MoviesService.prototype.getReview = function (id) {
        return this.http.get(this.apiUrl + this.movieUrl + id)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);
    };
    MoviesService.prototype.searchMovies = function (searchStr) {
        return this.http.get(this.apiUrl + this.queryUrl + searchStr)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);
    };
    MoviesService.prototype.getInTheaters = function () {
        return this.http.get(this.apiUrl + this.theatreUrl)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);
    };
    MoviesService.prototype.createReview = function (review) {
        return this.http.post(this.apiUrl + this.reviewUrl, review)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);
    };
    MoviesService.prototype.createMovie = function (movie) {
        return this.http.post(this.apiUrl + this.movieUrl, movie)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);
    };
    MoviesService.prototype.handleData = function (res) {
        var body = res.json();
        console.log(body); // for development purposes only
        return body.result || body || {};
    };
    MoviesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for development purposes only
        return Promise.reject(error.message || error);
    };
    MoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Jsonp"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron--box\">\n  <div class=\"container jumbotron--container\">\n      <app-create-movie></app-create-movie>\n    <h1>Find A Movie</h1>\n    <p>Search for a movie using the form below</p>\n    <form (submit)=\"searchMovies()\">\n      <input type=\"text\" class=\"form-control jumbotron--container_form-input\" [(ngModel)]=\"searchStr\" name=\"searchStr\">\n      <br>\n      <button class=\"btn  btn-warning btn-lg btn-block jumbotron--container_button\">Search your Favourite Movies</button>  \n    </form>\n  </div>\n</div>\n\n\n<div *ngIf=\"searchRes\" class=\"panel panel-default search-panel\">\n    <div class=\"panel-heading search-panel_heading\">\n      <h3 class=\"panel-title search-panel_title\">Search Results</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"row movie-searched\">\n          <div *ngFor=\"let movie of searchRes;let i=index\" class=\"col-md-2\">\n              <div *ngIf=\"i < 6\">\n              <img *ngIf=\"movie.poster_path\" class=\"thumbnail movie-searched_img\" src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\n              <h4>{{movie.title}}</h4>\n              <p>{{movie.release_date}}</p>\n              <p><a class=\"btn btn-default\" routerLink=\"/movie{{movie.id}}\" role=\"button\">View details &raquo;</a></p>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n\n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">\n<h3 class=\"panel-title\">Popular Movies</h3>\n</div>\n<div class=\"panel-body\">\n<div class=\"row\">\n    <div *ngFor=\"let movie of movies; let i=index\" class=\"col-md-2\">\n        <div *ngIf=\"i < 6\">\n        <img *ngIf=\"movie.poster_path\" class=\"thumbnail\" src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\n        <h4>{{movie.title}}</h4>\n        <p>{{movie.release_date}}</p>\n\n        <p><a class=\"btn btn-default\" routerLink=\"/movie/{{movie.id}}\">View details &raquo;</a></p>\n      </div>\n    </div>\n</div>\n</div>\n</div>\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">In Theaters</h3>\n    </div>\n<div class=\"panel-body\">\n<div class=\"row\">\n    <div *ngFor=\"let movie of theatersList;let i=index\" class=\"col-md-2\">\n            <div *ngIf=\"i < 6\">\n                <img *ngIf=\"movie.poster_path\" class=\"thumbnail\" src=\"http://image.tmdb.org/t/p/w500/{{movie.poster_path}}\">\n                <h4>{{movie.title}}</h4>\n                <p>{{movie.release_date}}</p>\n                <p><a class=\"btn btn-default\" routerLink=\"/movie/{{movie.id}}\" role=\"button\">View details &raquo;</a></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"panel panel-default movies-table-panel\">\n                <div class=\"panel-heading movies-table-panel_heading\">Movies</div>\n                <table class=\"table table-striped movies-table-panel_striped\" >\n                    <thead>\n                        <tr>\n                            <th>Title</th>\n                            <th>Release Date</th>\n                            <th>Votes Count</th>\n                            <th>Popularity</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let movie of movies\">\n                            <td>{{ movie.title }}</td>\n                            <td>{{ movie.release_date}}</td>\n                            <td>{{ movie.vote_count }}</td>\n                            <td>{{ movie.popularity }}</td>\n                           \n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n\n            \n        \n  "

/***/ }),

/***/ "./src/app/movies/movies.component.scss":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron--box {\n  margin-top: 62px;\n  position: relative;\n  width: 100%;\n  padding-top: 150px;\n  padding-bottom: 100px;\n  color: white;\n  background: url(\"/assets/bg-pattern.png\"), linear-gradient(to left, #3f51b5, #3f51b5); }\n  .jumbotron--box .jumbotron--container_button {\n    border-radius: 300px;\n    font-family: Lato, Helvetica, Arial, sans-serif;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    font-size: 1vw; }\n  .search-panel_title {\n  color: #28a745; }\n  .movies-table-panel_striped:nth-child(even) {\n  background-color: skyblue; }\n  .movie-searched_image {\n  width: 100%; }\n  img {\n  width: 100%; }\n  .btn-default {\n  background-color: #291c1c !important;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(router, http, location, moviesService) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.location = location;
        this.moviesService = moviesService;
        this.movies = [];
        this.moviesService.getInTheaters().then(function (res) {
            _this.theatersList = res.results;
        });
    }
    MoviesComponent.prototype.searchMovies = function () {
        var _this = this;
        this.moviesService.searchMovies(this.searchStr).then(function (res) {
            _this.searchRes = res.results;
        });
    };
    MoviesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var id = params['id'];
            _this.moviesService.getMovies(id)
                .then(function (movies) {
                console.log(movies);
                _this.movies = movies.results;
            });
        });
    };
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.scss */ "./src/app/movies/movies.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]])
    ], MoviesComponent);
    return MoviesComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Bonge\Documents\Projects\movies_database\movies-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map