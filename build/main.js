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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<particles [params]=\"myParams\"></particles>\r\n<div class=\"router-container\" [@routeAnimations]=\"prepareRoute(outlet)\" >\r\n    <router-outlet class=\"animator\" #outlet=\"outlet\"></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animateChild"])()),
    ])
]);
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'artificer-system';
        this.myParams = {};
    }
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent.prototype.ngOnInit = function () {
        this.myParams = {
            particles: {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ff0000"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#ff0000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ff0000",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": false
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        };
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                slideInAnimation
                // animation triggers go here
            ],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-view/project-view.component */ "./src/app/project-view/project-view.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"],
                _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_13__["ProjectViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_5__["ParticlesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: '/index' },
                    { path: 'index', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], data: { animation: 'Index' } },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], data: { animation: 'HomePage' } },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], data: { animation: 'ContactPage' } },
                    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"], data: { animation: 'ProjectsPage' } },
                    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_12__["TeamComponent"], data: { animation: 'TeamPage' } },
                    { path: 'project', component: _project_view_project_view_component__WEBPACK_IMPORTED_MODULE_13__["ProjectViewComponent"], data: { animation: 'ProjectPage' } },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container container\">\r\n  <div class=\"contact-box\">\r\n    <div class=\"contact-content\">\r\n      <div class=\"box-head\">\r\n        <h1 class=\"page-title\">Contact Us</h1>\r\n      </div>\r\n      <div class=\"box-body\">\r\n        <div class=\"left-section\">\r\n          <div class=\"username\">\r\n            <span>Name</span><br />\r\n            <input type=\"text\" placeholder=\"Juan Dela Cruz\" name=\"name\" />\r\n          </div>\r\n          <div class=\"email\">\r\n            <span>E-mail Address</span><br />\r\n            <input type=\"text\" placeholder=\"jdela@email.com\" name=\"email\" />\r\n          </div>\r\n          <div class=\"information\">\r\n            <img\r\n              class=\"logo-description\"\r\n              src=\"../../assets/images/logo_description.svg\"\r\n            />\r\n            <div class=\"company-details\">\r\n              <div>\r\n                <i class=\"icon-address\"></i><span> Davao City, Philippines</span\r\n                ><br />\r\n              </div>\r\n              <div>\r\n                <i class=\"icon-email\"></i><span> Artificers@gmail.com</span\r\n                ><br />\r\n              </div>\r\n              <div><i class=\"icon-number\"></i><span> (777) 777-777</span></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"right-section\">\r\n          <div class=\"message-box\">\r\n            <span>Message</span><br />\r\n            <textarea rows=\"15\" placeholder=\"Message goes here...\"></textarea>\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <button class=\"btn-send\">Send</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <img\r\n    routerLink=\"/home\"\r\n    class=\"footer-logo\"\r\n    src=\"../../assets/images/logo_footer.svg\"\r\n  />\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-container {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding: 120px 80px 80px 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .contact-container .contact-box {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center; }\n  .contact-container .contact-box .contact-content {\n      display: flex;\n      flex-direction: column;\n      flex: 1; }\n  .contact-container .contact-box .contact-content .box-head {\n        height: 60px;\n        display: flex; }\n  .contact-container .contact-box .contact-content .box-head h1 {\n          font-family: \"Leculier\";\n          background: -webkit-linear-gradient(#c50000, red);\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n          margin: 3px 0;\n          font-size: 50px;\n          margin: 15px 0;\n          position: absolute;\n          margin-top: 0;\n          -webkit-animation: floatText 2s ease-in-out alternate infinite;\n                  animation: floatText 2s ease-in-out alternate infinite; }\n  .contact-container .contact-box .contact-content .box-body {\n        position: relative;\n        display: flex;\n        flex: 1; }\n  .contact-container .contact-box .contact-content .box-body .left-section {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n          padding: 0 20px 0 40px; }\n  .contact-container .contact-box .contact-content .box-body .left-section .username, .contact-container .contact-box .contact-content .box-body .left-section .email {\n            position: relative; }\n  .contact-container .contact-box .contact-content .box-body .left-section .email {\n            margin-top: 15px; }\n  .contact-container .contact-box .contact-content .box-body .left-section .username span, .contact-container .contact-box .contact-content .box-body .left-section .email span {\n            top: 10px;\n            left: 10px;\n            position: absolute;\n            color: red;\n            background: red;\n            margin: 0;\n            padding: 0;\n            background: black;\n            font-size: 14px;\n            text-transform: uppercase;\n            font-family: \"Voice Activated BB\"; }\n  .contact-container .contact-box .contact-content .box-body .left-section .username input[type=text], .contact-container .contact-box .contact-content .box-body .left-section .email input[type=text] {\n            background: rgba(0, 0, 0, 0.85);\n            padding: 15px 10px 10px 10px;\n            border: 1px #333 solid;\n            border-radius: 3px;\n            width: 100%;\n            outline: none;\n            color: white;\n            font-family: \"Abel\";\n            font-size: 14px; }\n  .contact-container .contact-box .contact-content .box-body .left-section .information {\n            margin-top: 20px; }\n  .contact-container .contact-box .contact-content .box-body .left-section .information .logo-description {\n              width: 300px; }\n  .contact-container .contact-box .contact-content .box-body .left-section .information .company-details {\n              margin-top: 15px;\n              color: white;\n              font-family: \"Abel\"; }\n  .contact-container .contact-box .contact-content .box-body .left-section .information .company-details div:not(:first-child) {\n              margin-top: 5px; }\n  .contact-container .contact-box .contact-content .box-body .right-section {\n          flex: 2;\n          height: 100%;\n          padding: 0 20px;\n          display: flex;\n          flex-direction: column; }\n  .contact-container .contact-box .contact-content .box-body .right-section .message-box {\n            position: relative;\n            display: flex;\n            flex-direction: column; }\n  .contact-container .contact-box .contact-content .box-body .right-section .message-box span {\n              top: 10px;\n              left: 10px;\n              position: absolute;\n              color: red;\n              background: red;\n              margin: 0;\n              padding: 0;\n              background: black;\n              font-size: 14px;\n              text-transform: uppercase;\n              font-family: \"Voice Activated BB\"; }\n  .contact-container .contact-box .contact-content .box-body .right-section .message-box textarea {\n              background: rgba(0, 0, 0, 0.85);\n              padding: 15px 10px 10px 10px;\n              border: 1px #333 solid;\n              border-radius: 3px;\n              outline: none;\n              color: white;\n              font-family: \"Abel\";\n              font-size: 14px;\n              resize: none; }\n  .contact-container .contact-box .contact-content .box-body .right-section .button-container {\n            padding: 20px 0; }\n  .contact-container .contact-box .contact-content .box-body .right-section .button-container button {\n              float: right;\n              border: 1px #333 solid;\n              border-radius: 20px;\n              padding: 10px 30px;\n              background: rgba(0, 0, 0, 0.85);\n              color: #989898;\n              font-family: \"Voice Activated BB\";\n              text-transform: uppercase;\n              cursor: pointer;\n              transition: .3s;\n              box-shadow: 0 0 20px transparent; }\n  .contact-container .contact-box .contact-content .box-body .right-section .button-container button:hover {\n              color: red;\n              border-color: red;\n              transition: .3s; }\n  @-webkit-keyframes floatText {\n  from {\n    -webkit-transform: translatey(0px);\n            transform: translatey(0px); }\n  to {\n    -webkit-transform: translatey(-15px);\n            transform: translatey(-15px); } }\n  @keyframes floatText {\n  from {\n    -webkit-transform: translatey(0px);\n            transform: translatey(0px); }\n  to {\n    -webkit-transform: translatey(-15px);\n            transform: translatey(-15px); } }\n  .footer {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center; }\n  .footer .footer-logo {\n    width: 200px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEZyYW5jaXNcXFdvcmtcXGZyYW56YmllbHkvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQVZ2QjtJQVlRLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQWhCM0I7TUFrQlksYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixPQUFPLEVBQUE7RUFwQm5CO1FBc0JnQixZQUFZO1FBQ1osYUFBYSxFQUFBO0VBdkI3QjtVQXlCb0IsdUJBQXVCO1VBQ3ZCLGlEQUE0RDtVQUM1RCw2QkFBNkI7VUFDN0Isb0NBQW9DO1VBQ3BDLGFBQWE7VUFDYixlQUFlO1VBQ2YsY0FBYztVQUNkLGtCQUFrQjtVQUNsQixhQUFhO1VBQ2IsOERBQXNEO2tCQUF0RCxzREFBc0QsRUFBQTtFQWxDMUU7UUFzQ2dCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsT0FBTyxFQUFBO0VBeEN2QjtVQTBDb0IsT0FBTztVQUNQLGFBQWE7VUFDYixzQkFBc0I7VUFDdEIsc0JBQXNCLEVBQUE7RUE3QzFDO1lBK0N3QixrQkFBa0IsRUFBQTtFQS9DMUM7WUFtRHdCLGdCQUFnQixFQUFBO0VBbkR4QztZQXNEd0IsU0FBUztZQUNULFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsVUFBVTtZQUNWLGVBQWU7WUFDZixTQUFTO1lBQ1QsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YseUJBQXlCO1lBQ3pCLGlDQUFpQyxFQUFBO0VBaEV6RDtZQW1Fd0IsK0JBQTRCO1lBQzVCLDRCQUE0QjtZQUM1QixzQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLFdBQVc7WUFDWCxhQUFhO1lBQ2IsWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixlQUFlLEVBQUE7RUEzRXZDO1lBOEV3QixnQkFBZ0IsRUFBQTtFQTlFeEM7Y0FnRjRCLFlBQVcsRUFBQTtFQWhGdkM7Y0FtRjRCLGdCQUFnQjtjQUNoQixZQUFZO2NBQ1osbUJBQW1CLEVBQUE7RUFyRi9DO2NBd0Y0QixlQUFlLEVBQUE7RUF4RjNDO1VBNkZvQixPQUFPO1VBQ1AsWUFBWTtVQUNaLGVBQWU7VUFDZixhQUFhO1VBQ2Isc0JBQXNCLEVBQUE7RUFqRzFDO1lBbUd3QixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLHNCQUFzQixFQUFBO0VBckc5QztjQXVHNEIsU0FBUztjQUNULFVBQVU7Y0FDVixrQkFBa0I7Y0FDbEIsVUFBVTtjQUNWLGVBQWU7Y0FDZixTQUFTO2NBQ1QsVUFBVTtjQUNWLGlCQUFpQjtjQUNqQixlQUFlO2NBQ2YseUJBQXlCO2NBQ3pCLGlDQUFpQyxFQUFBO0VBakg3RDtjQW9INEIsK0JBQTRCO2NBQzVCLDRCQUE0QjtjQUM1QixzQkFBcUI7Y0FDckIsa0JBQWtCO2NBQ2xCLGFBQWE7Y0FDYixZQUFZO2NBQ1osbUJBQW1CO2NBQ25CLGVBQWU7Y0FDZixZQUFZLEVBQUE7RUE1SHhDO1lBZ0l3QixlQUFjLEVBQUE7RUFoSXRDO2NBa0k0QixZQUFZO2NBQ1osc0JBQXNCO2NBQ3RCLG1CQUFtQjtjQUNuQixrQkFBa0I7Y0FDbEIsK0JBQTJCO2NBQzNCLGNBQWM7Y0FDZCxpQ0FBaUM7Y0FDakMseUJBQXlCO2NBQ3pCLGVBQWU7Y0FDZixlQUFjO2NBQ2QsZ0NBQWdDLEVBQUE7RUE1STVEO2NBK0k0QixVQUFVO2NBQ1YsaUJBQWlCO2NBQ2pCLGVBQWUsRUFBQTtFQVEzQztFQUNJO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTlCO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBLEVBQUE7RUFMcEM7RUFDSTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQSxFQUFBO0VBR3BDO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQU52QjtJQVFRLFlBQVk7SUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMTIwcHggODBweCA4MHB4IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmNvbnRhY3QtYm94e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5jb250YWN0LWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIC5ib3gtaGVhZHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBoMXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJMZWN1bGllclwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNjNTAwMDAsIHJnYigyNTUsIDAsIDApKTtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBmbG9hdFRleHQgMnMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYm9keXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgLmxlZnQtc2VjdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC51c2VybmFtZSwgLmVtYWlse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuZW1haWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC51c2VybmFtZSBzcGFuLCAuZW1haWwgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJWb2ljZSBBY3RpdmF0ZWQgQkJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXJuYW1lIGlucHV0W3R5cGU9dGV4dF0sIC5lbWFpbCBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAuODUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4ICMzMzMgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQWJlbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvcm1hdGlvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxvZ28tZGVzY3JpcHRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29tcGFueS1kZXRhaWxze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29tcGFueS1kZXRhaWxzIGRpdjpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yaWdodC1zZWN0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgLm1lc3NhZ2UtYm94e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJWb2ljZSBBY3RpdmF0ZWQgQkJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIC44NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCAjMzMzIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4ICMzMzMgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuODUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5ODk4OTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJWb2ljZSBBY3RpdmF0ZWQgQkJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOi4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZsb2F0VGV4dHtcclxuICAgIGZyb217XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTE1cHgpO1xyXG4gICAgfVxyXG59XHJcbi5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAxMHB4IDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5mb290ZXItbG9nb3tcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(router) {
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.toHome = function () {
        this.router.navigateByUrl('/home');
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"artificer-dashboard\">\r\n  <div class=\"dashboard-content container\">\r\n    <div class=\"character-container\">\r\n      <div class=\"character-logo\">\r\n        <img src=\"../../assets/images/Artificer-Character.gif\" width=\"400\" />\r\n        <img class=\"logo-description\" src=\"../../assets/images/logo_description.svg\" />\r\n        <button routerLink=\"/home\" class=\"btn-start\">Start</button> \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".artificer-dashboard .dashboard-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n  .artificer-dashboard .dashboard-content .character-container {\n    position: relative;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .artificer-dashboard .dashboard-content .character-container .character-logo {\n      display: flex;\n      flex-direction: column;\n      align-items: center; }\n  .artificer-dashboard .dashboard-content .character-container .character-logo .logo-description {\n        width: 500px;\n        image-rendering: auto;\n        image-rendering: crisp-edges;\n        -ms-interpolation-mode: nearest-neighbor;\n            image-rendering: -moz-crisp-edges;\n            image-rendering: pixelated; }\n  .artificer-dashboard .dashboard-content .character-container .character-logo .btn-start {\n        font-family: \"Voice Activated BB\";\n        color: red;\n        text-transform: uppercase;\n        border: 1px #333 solid;\n        margin-top: 30px;\n        width: 170px;\n        padding: 15px 0;\n        background: rgba(0, 0, 0, 0.5);\n        cursor: pointer;\n        transition: .5s;\n        box-shadow: 0 0 20px transparent;\n        border-radius: 20px;\n        outline: none; }\n  .artificer-dashboard .dashboard-content .character-container .character-logo .btn-start:hover {\n        border-color: red;\n        transition: .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcRnJhbmNpc1xcV29ya1xcZnJhbnpiaWVseS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUSxFQUFBO0VBTmhCO0lBUVksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQixFQUFBO0VBWi9CO01BY2dCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsbUJBQW1CLEVBQUE7RUFoQm5DO1FBa0JvQixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM1Qix3Q0FBMEI7WUFBMUIsaUNBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBckI5QztRQXdCb0IsaUNBQWlDO1FBQ2pDLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osZUFBZTtRQUNmLDhCQUEwQjtRQUMxQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdDQUFnQztRQUNoQyxtQkFBbUI7UUFDbkIsYUFBYSxFQUFBO0VBcENqQztRQXVDb0IsaUJBQWlCO1FBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aWZpY2VyLWRhc2hib2FyZHtcclxuICAgIC5kYXNoYm9hcmQtY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIC5jaGFyYWN0ZXItY29udGFpbmVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5jaGFyYWN0ZXItbG9nb3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5sb2dvLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcztcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4tc3RhcnR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVm9pY2UgQWN0aXZhdGVkIEJCXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4ICMzMzMgc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4tc3RhcnQ6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container container\">\r\n  <div class=\"menu-container\">\r\n    <div class=\"left-section\">\r\n      <ul>\r\n        <li class=\"active\" (click)=\"toHome()\">Home</li>\r\n        <li routerLink=\"/team\">Team</li>\r\n        <li routerLink=\"/projects\">Projects</li>\r\n        <li routerLink=\"/contact\">Contact Us</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"right-section\">\r\n      <div class=\"about-us\">\r\n        <h1>The Artificers</h1>\r\n        <p>\r\n          <span class=\"strong-text\">The Aritificers</span> is an experienced and\r\n          passionate group of designers, developers, project managers, and\r\n          artists. Every client we work with becomes a part of the team.\r\n          Together we face the challenges and celebrate the victories. The\r\n          Artificer team is active in the creative community, endlessly\r\n          interested in what’s next, and generally pleasant to be around.\r\n        </p>\r\n        <p>\r\n          We design responsive websites, WordPress Websites, Mobile Responsive\r\n          Web Designs, eCommerce websites and just about anything with the word\r\n          website.\r\n        </p>\r\n        <p>\r\n          We strive to provide the best quality service and listen to our\r\n          customers needs first and foremost. We believe in helping and building\r\n          our community through our work.\r\n        </p>\r\n      </div>\r\n      <img\r\n        class=\"character\"\r\n        src=\"../../assets/images/Artificer-Character.gif\"\r\n      />\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <img class=\"footer-logo\" src=\"../../assets/images/logo_footer.svg\" />\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  overflow: hidden; }\n  .home-container .menu-container {\n    border-top: 1px red solid;\n    border-bottom: 1px red solid;\n    display: flex;\n    background: rgba(0, 0, 0, 0.5); }\n  .home-container .menu-container .left-section {\n      padding: 30px 0 30px 30px;\n      display: flex;\n      align-items: center;\n      width: 55%; }\n  .home-container .menu-container .left-section ul {\n        list-style-type: none; }\n  .home-container .menu-container .left-section ul .active {\n          color: red; }\n  .home-container .menu-container .left-section ul li {\n        line-height: 60px;\n        color: white;\n        font-family: \"leculier\";\n        cursor: pointer;\n        font-size: 50px; }\n  .home-container .menu-container .left-section ul li:hover {\n        color: red; }\n  .home-container .menu-container .right-section {\n      position: relative;\n      padding: 30px 30px 30px 0;\n      width: 45%;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .home-container .menu-container .right-section .about-us h1 {\n        font-family: \"Voice Activated BB\";\n        font-size: 30px;\n        color: red;\n        text-transform: uppercase;\n        padding: 0;\n        margin: 0; }\n  .home-container .menu-container .right-section .about-us p:first-child {\n        margin-top: -10px; }\n  .home-container .menu-container .right-section .about-us p {\n        font-size: 14px;\n        font-family: \"Abel\";\n        color: white;\n        text-align: justify;\n        width: 70%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        text-rendering: optimizeLegibility; }\n  .home-container .menu-container .right-section .character {\n        position: absolute;\n        right: -220px; }\n  .footer {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center; }\n  .footer .footer-logo {\n    width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEZyYW5jaXNcXFdvcmtcXGZyYW56YmllbHkvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7RUFScEI7SUFVUSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYiw4QkFBMEIsRUFBQTtFQWJsQztNQWVZLHlCQUF5QjtNQUN6QixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLFVBQVMsRUFBQTtFQWxCckI7UUFvQmdCLHFCQUFxQixFQUFBO0VBcEJyQztVQXNCb0IsVUFBVSxFQUFBO0VBdEI5QjtRQTBCZ0IsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGVBQWUsRUFBQTtFQTlCL0I7UUFpQ2dCLFVBQVUsRUFBQTtFQWpDMUI7TUFxQ1ksa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixVQUFVO01BQ1YsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUIsRUFBQTtFQTFDbkM7UUE2Q29CLGlDQUFpQztRQUNqQyxlQUFlO1FBQ2YsVUFBVTtRQUNWLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsU0FBUyxFQUFBO0VBbEQ3QjtRQXFEb0IsaUJBQWlCLEVBQUE7RUFyRHJDO1FBd0RvQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLG1DQUFtQztRQUNuQyxrQ0FBa0M7UUFDbEMsa0NBQWtDLEVBQUE7RUEvRHREO1FBbUVnQixrQkFBa0I7UUFDbEIsYUFBYSxFQUFBO0VBSzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQU52QjtJQVFRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5tZW51LWNvbnRhaW5lcntcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggcmVkIHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZWQgc29saWQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgICAubGVmdC1zZWN0aW9ue1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDAgMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDo1NSU7XHJcbiAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsIGxpe1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJsZWN1bGllclwiO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQtc2VjdGlvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMzBweCAwO1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLmFib3V0LXVze1xyXG4gICAgICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVm9pY2UgQWN0aXZhdGVkIEJCXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHA6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBweyAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2hhcmFjdGVye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweCA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuZm9vdGVyLWxvZ297XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toTeam = function () {
        this.router.navigateByUrl('/team');
    };
    HomeComponent.prototype.toProjects = function () {
        this.router.navigateByUrl('/projects');
    };
    HomeComponent.prototype.toContact = function () {
        this.router.navigateByUrl('/contact');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/project-view/project-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/project-view/project-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-view-container container\">\r\n  <div class=\"project-view-box\">\r\n    <div class=\"project-view-content\">\r\n      <div class=\"left-section\">\r\n        <div class=\"title\">\r\n          <h1 class=\"project-title\">Project XXX</h1>\r\n          <p class=\"project-description\">\r\n            It is a long established fact that a reader will be distracted by\r\n            the readable content of a page when looking at its layout. The point\r\n            of using Lorem Ipsum is that it has a more-or-less normal\r\n            distribution of letters, as opposed to using 'Content here, content\r\n            here', making it look like readable English.\r\n          </p>\r\n        </div>\r\n        <div class=\"project-languages\">\r\n          <div><i class=\"plang\"></i></div>\r\n          <div><i class=\"plang\"></i></div>\r\n          <div><i class=\"plang\"></i></div>\r\n        </div>\r\n        <div class=\"project-previews\">\r\n          <div class=\"preview-1\">\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"preview-1\">\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"preview-1\">\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"right-section\">\r\n        <img src=\"../../assets/images/project.jpg\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <img\r\n    routerLink=\"/home\"\r\n    class=\"footer-logo\"\r\n    src=\"../../assets/images/logo_footer.svg\"\r\n  />\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/project-view/project-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/project-view/project-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-view-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 80px 20px 20px 20px; }\n  .project-view-container .project-view-box {\n    display: flex;\n    flex: 1;\n    background: rgba(0, 0, 0, 0.5); }\n  .project-view-container .project-view-box .project-view-content {\n      height: 100%;\n      display: flex;\n      flex: 1; }\n  .project-view-container .project-view-box .project-view-content .left-section {\n        padding: 20px 0 0 0;\n        flex: 2;\n        flex-direction: column;\n        display: flex;\n        align-items: center; }\n  .project-view-container .project-view-box .project-view-content .left-section .title {\n          background: rgba(0, 0, 0, 0.5);\n          display: flex;\n          flex-direction: column;\n          position: relative;\n          align-items: center; }\n  .project-view-container .project-view-box .project-view-content .left-section .title h1 {\n            font-family: \"Leculier\";\n            text-transform: uppercase;\n            font-size: 50px;\n            background: -webkit-linear-gradient(#c50000, red);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            margin: 0;\n            -webkit-animation: floatText 2s ease-in-out infinite alternate;\n                    animation: floatText 2s ease-in-out infinite alternate; }\n  .project-view-container .project-view-box .project-view-content .left-section .title .project-description {\n            color: white;\n            font-family: \"Abel\";\n            font-size: 15px;\n            text-align: center;\n            width: 70%; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-languages {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          width: 100%;\n          margin: 20px 0 15px 0px; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-languages div:first-child {\n            -webkit-animation: floatText 2.5s ease-in-out alternate infinite;\n                    animation: floatText 2.5s ease-in-out alternate infinite;\n            -webkit-animation-delay: -1s;\n                    animation-delay: -1s; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-languages div:nth-child(2) {\n            -webkit-animation: floatText 2.5s ease-in-out alternate infinite;\n                    animation: floatText 2.5s ease-in-out alternate infinite;\n            -webkit-animation-delay: -1.5s;\n                    animation-delay: -1.5s; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-languages div:nth-child(3) {\n            -webkit-animation: floatText 2.5s ease-in-out alternate infinite;\n                    animation: floatText 2.5s ease-in-out alternate infinite;\n            -webkit-animation-delay: -2s;\n                    animation-delay: -2s; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-languages div {\n            border: red 1px solid;\n            height: 50px;\n            width: 50px;\n            background: rgba(0, 0, 0, 0.5);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 200px;\n            margin: 10px 10px; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-languages div .plang {\n            content: url('logo.svg');\n            width: 50px;\n            height: 50px;\n            color: white; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-previews {\n          margin-top: 10px;\n          display: grid;\n          grid-template-columns: auto auto auto;\n          align-items: center;\n          justify-content: flex-end; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-previews div {\n            padding: 0 20px; }\n  .project-view-container .project-view-box .project-view-content .left-section .project-previews div img {\n            width: 180px; }\n  .project-view-container .project-view-box .project-view-content .right-section {\n        flex: 1;\n        display: flex;\n        padding: 20px;\n        display: flex;\n        align-items: center;\n        padding: 20px;\n        justify-content: center; }\n  .project-view-container .project-view-box .project-view-content .right-section img {\n          max-width: 75%; }\n  .footer {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center; }\n  .footer .footer-logo {\n    width: 200px;\n    cursor: pointer; }\n  @-webkit-keyframes floatText {\n  from {\n    -webkit-transform: translatey(-10px);\n            transform: translatey(-10px); }\n  to {\n    -webkit-transform: translatey(10px);\n            transform: translatey(10px); } }\n  @keyframes floatText {\n  from {\n    -webkit-transform: translatey(-10px);\n            transform: translatey(-10px); }\n  to {\n    -webkit-transform: translatey(10px);\n            transform: translatey(10px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC12aWV3L0M6XFxVc2Vyc1xcRnJhbmNpc1xcV29ya1xcZnJhbnpiaWVseS9zcmNcXGFwcFxccHJvamVjdC12aWV3XFxwcm9qZWN0LXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEJBQTRCLEVBQUE7RUFMOUI7SUFPSSxhQUFhO0lBQ2IsT0FBTztJQUNQLDhCQUE4QixFQUFBO0VBVGxDO01BV00sWUFBWTtNQUNaLGFBQWE7TUFDYixPQUFPLEVBQUE7RUFiYjtRQWVRLG1CQUFtQjtRQUNuQixPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixtQkFBbUIsRUFBQTtFQW5CM0I7VUFxQlUsOEJBQThCO1VBQzlCLGFBQWE7VUFDYixzQkFBc0I7VUFDdEIsa0JBQWtCO1VBQ2xCLG1CQUFtQixFQUFBO0VBekI3QjtZQTJCWSx1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLGVBQWU7WUFDZixpREFBNEQ7WUFDNUQsNkJBQTZCO1lBQzdCLG9DQUFvQztZQUNwQyxTQUFRO1lBQ1IsOERBQXNEO29CQUF0RCxzREFBc0QsRUFBQTtFQWxDbEU7WUFxQ1ksWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLFVBQVUsRUFBQTtFQXpDdEI7VUE2Q1UsYUFBYTtVQUNiLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsV0FBVztVQUNYLHVCQUF1QixFQUFBO0VBakRqQztZQW1EWSxnRUFBd0Q7b0JBQXhELHdEQUF3RDtZQUN4RCw0QkFBb0I7b0JBQXBCLG9CQUFvQixFQUFBO0VBcERoQztZQXVEWSxnRUFBd0Q7b0JBQXhELHdEQUF3RDtZQUN4RCw4QkFBc0I7b0JBQXRCLHNCQUFzQixFQUFBO0VBeERsQztZQTJEWSxnRUFBd0Q7b0JBQXhELHdEQUF3RDtZQUN4RCw0QkFBb0I7b0JBQXBCLG9CQUFvQixFQUFBO0VBNURoQztZQStEWSxxQkFBcUI7WUFDckIsWUFBWTtZQUNaLFdBQVc7WUFDWCw4QkFBOEI7WUFDOUIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsb0JBQW9CO1lBQ3BCLGlCQUFpQixFQUFBO0VBdkU3QjtZQTBFWSx3QkFBNEM7WUFDNUMsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZLEVBQUE7RUE3RXhCO1VBaUZVLGdCQUFnQjtVQUNoQixhQUFhO1VBQ2IscUNBQXFDO1VBQ3JDLG1CQUFtQjtVQUNuQix5QkFBeUIsRUFBQTtFQXJGbkM7WUF1RlksZUFBZSxFQUFBO0VBdkYzQjtZQTBGWSxZQUFZLEVBQUE7RUExRnhCO1FBK0ZRLE9BQU87UUFDUCxhQUFhO1FBQ2IsYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHVCQUF1QixFQUFBO0VBckcvQjtVQXVHVSxjQUFjLEVBQUE7RUFNeEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBTnJCO0lBUUksWUFBWTtJQUNaLGVBQWUsRUFBQTtFQUduQjtFQUNFO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBRWhDO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBLEVBQUE7RUFMakM7RUFDRTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQTtFQUVoQztJQUNJLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC12aWV3L3Byb2plY3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LXZpZXctY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDgwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgLnByb2plY3Qtdmlldy1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAucHJvamVjdC12aWV3LWNvbnRlbnQge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIC5sZWZ0LXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XHJcbiAgICAgICAgZmxleDogMjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJMZWN1bGllclwiO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNjNTAwMDAsIHJnYigyNTUsIDAsIDApKTtcclxuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmxvYXRUZXh0IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBYmVsXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvamVjdC1sYW5ndWFnZXMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTVweCAwcHg7XHJcbiAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmxvYXRUZXh0IDIuNXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmxvYXRUZXh0IDIuNXMgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlIGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjVzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2Om50aC1jaGlsZCgzKXtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmbG9hdFRleHQgMi41cyBlYXNlLWluLW91dCBhbHRlcm5hdGUgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgYm9yZGVyOiByZWQgMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXYgLnBsYW5nIHtcclxuICAgICAgICAgICAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiKTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvamVjdC1wcmV2aWV3cyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRpdiBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yaWdodC1zZWN0aW9uIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAuZm9vdGVyLWxvZ28ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZsb2F0VGV4dHtcclxuICBmcm9te1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTEwcHgpO1xyXG4gIH1cclxuICB0b3tcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDEwcHgpO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/project-view/project-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-view/project-view.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewComponent", function() { return ProjectViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProjectViewComponent = /** @class */ (function () {
    function ProjectViewComponent(router) {
        this.router = router;
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
    };
    ProjectViewComponent.prototype.toHome = function () {
        this.router.navigateByUrl('/home');
    };
    ProjectViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-view',
            template: __webpack_require__(/*! ./project-view.component.html */ "./src/app/project-view/project-view.component.html"),
            styles: [__webpack_require__(/*! ./project-view.component.scss */ "./src/app/project-view/project-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectViewComponent);
    return ProjectViewComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-container container\">\r\n  <div class=\"project-box\">\r\n    <div id=\"container-project\" class=\"project-content\">\r\n      <div class=\"box-head\">\r\n        <h1 class=\"page-title\">Projects</h1>\r\n      </div>\r\n      <div id=\"box-project\" class=\"box-projects\" data-tilt>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n          <div class=\"project-item\">\r\n            <div class=\"img-overlay\">\r\n              <a routerLink=\"/project\"><i class=\"icon-view\"></i></a>\r\n            </div>\r\n            <img src=\"../../assets/images/project.jpg\" />\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <img routerLink=\"/home\" class=\"footer-logo\" src=\"../../assets/images/logo_footer.svg\"/>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n  overflow-y: auto; }\n  .project-container .project-box {\n    position: relative;\n    width: 100%; }\n  .project-container .project-box #container-project {\n      -webkit-perspective: 30px;\n              perspective: 30px; }\n  .project-container .project-box .project-content .box-head {\n      display: flex;\n      justify-content: center;\n      height: 60px; }\n  .project-container .project-box .project-content .box-head h1 {\n        font-family: \"leculier\";\n        text-transform: uppercase;\n        font-size: 50px;\n        background: -webkit-linear-gradient(#c50000, red);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        margin: 3px 0;\n        margin: 15px 0;\n        position: absolute;\n        margin-top: 0;\n        -webkit-animation: floatText 2s ease-in-out alternate infinite;\n                animation: floatText 2s ease-in-out alternate infinite; }\n  .project-container .project-box .project-content .box-projects .project-item:nth-child(3n-1) {\n      position: relative;\n      top: 100px; }\n  .project-container .project-box .project-content .box-projects {\n      display: grid;\n      grid-template-columns: auto auto auto;\n      align-items: center;\n      justify-content: center; }\n  .project-container .project-box .project-content .box-projects .project-item {\n        padding: 40px;\n        position: relative; }\n  .project-container .project-box .project-content .box-projects .project-item .img-overlay {\n          background: rgba(0, 0, 0, 0.5);\n          opacity: 0;\n          transition: .5s;\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          border-radius: 6px;\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n  .project-container .project-box .project-content .box-projects .project-item .img-overlay a {\n            cursor: pointer;\n            background: black;\n            width: 40px;\n            height: 40px;\n            border-radius: 100px;\n            display: flex;\n            align-items: center;\n            justify-content: center; }\n  .project-container .project-box .project-content .box-projects .project-item .img-overlay .icon-view {\n            content: url('View.svg');\n            color: red;\n            width: 30px;\n            height: 30px; }\n  .project-container .project-box .project-content .box-projects .project-item img {\n          width: 200px;\n          cursor: pointer;\n          border-radius: 6px; }\n  .project-container .project-box .project-content .box-projects .project-item:hover .img-overlay {\n        opacity: 1;\n        transition: .5s; }\n  @-webkit-keyframes floatText {\n  from {\n    -webkit-transform: translatey(0px);\n            transform: translatey(0px); }\n  to {\n    -webkit-transform: translatey(-15px);\n            transform: translatey(-15px); } }\n  @keyframes floatText {\n  from {\n    -webkit-transform: translatey(0px);\n            transform: translatey(0px); }\n  to {\n    -webkit-transform: translatey(-15px);\n            transform: translatey(-15px); } }\n  .footer {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center; }\n  .footer .footer-logo {\n    width: 200px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxGcmFuY2lzXFxXb3JrXFxmcmFuemJpZWx5L3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQixFQUFBO0VBVGxCO0lBV0ksa0JBQWtCO0lBQ2xCLFdBQVcsRUFBQTtFQVpmO01BY00seUJBQWlCO2NBQWpCLGlCQUFpQixFQUFBO0VBZHZCO01Ba0JRLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsWUFBWSxFQUFBO0VBcEJwQjtRQXNCWSx1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLGVBQWM7UUFDZCxpREFBNEQ7UUFDNUQsNkJBQTZCO1FBQzdCLG9DQUFvQztRQUNwQyxhQUFhO1FBQ2IsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsOERBQXNEO2dCQUF0RCxzREFBc0QsRUFBQTtFQWhDbEU7TUFvQ1Usa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtFQXJDcEI7TUF3Q1EsYUFBYTtNQUNiLHFDQUFxQztNQUNyQyxtQkFBbUI7TUFDbkIsdUJBQXVCLEVBQUE7RUEzQy9CO1FBNkNVLGFBQWE7UUFDYixrQkFBa0IsRUFBQTtFQTlDNUI7VUFnRFksOEJBQTBCO1VBQzFCLFVBQVU7VUFDVixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLE1BQUs7VUFDTCxTQUFRO1VBQ1IsT0FBTTtVQUNOLFFBQU87VUFDUCxrQkFBaUI7VUFDakIsYUFBYTtVQUNiLHVCQUF1QjtVQUN2QixtQkFBa0IsRUFBQTtFQTNEOUI7WUE2RGdCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsV0FBVztZQUNYLFlBQVc7WUFDWCxvQkFBb0I7WUFDcEIsYUFBYTtZQUNiLG1CQUFrQjtZQUNsQix1QkFBdUIsRUFBQTtFQXBFdkM7WUF1RWdCLHdCQUFpRDtZQUNqRCxVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVcsRUFBQTtFQTFFM0I7VUErRVksWUFBWTtVQUNaLGVBQWU7VUFDZixrQkFBa0IsRUFBQTtFQWpGOUI7UUFzRlksVUFBVTtRQUNWLGVBQWUsRUFBQTtFQU8zQjtFQUNFO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0Usb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBLEVBQUE7RUFMaEM7RUFDRTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU1QjtJQUNFLG9DQUE0QjtZQUE1Qiw0QkFBNEIsRUFBQSxFQUFBO0VBR2hDO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQU5yQjtJQVFJLFlBQVk7SUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDgwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAucHJvamVjdC1ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAjY29udGFpbmVyLXByb2plY3R7XHJcbiAgICAgIHBlcnNwZWN0aXZlOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2plY3QtY29udGVudCB7XHJcbiAgICAgIC5ib3gtaGVhZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImxlY3VsaWVyXCI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjYzUwMDAwLCByZ2IoMjU1LCAwLCAwKSk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmxvYXRUZXh0IDJzIGVhc2UtaW4tb3V0IGFsdGVybmF0ZSBpbmZpbml0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYm94LXByb2plY3RzIC5wcm9qZWN0LWl0ZW06bnRoLWNoaWxkKDNuLTEpe1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICAuYm94LXByb2plY3RzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAucHJvamVjdC1pdGVte1xyXG4gICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIC5pbWctb3ZlcmxheXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6MDtcclxuICAgICAgICAgICAgYm90dG9tOjA7XHJcbiAgICAgICAgICAgIGxlZnQ6MDtcclxuICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuaWNvbi12aWV3e1xyXG4gICAgICAgICAgICAgICAgY29udGVudDp1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvSWNvbnMvVmlldy5zdmcnKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvamVjdC1pdGVtOmhvdmVye1xyXG4gICAgICAgICAgLmltZy1vdmVybGF5e1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmxvYXRUZXh0IHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTE1cHgpO1xyXG4gIH1cclxufVxyXG4uZm9vdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmZvb3Rlci1sb2dvIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(router) {
        this.router = router;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team-container container\">\r\n  <div class=\"team-box\">\r\n    <div class=\"team-content\">\r\n      <div class=\"left-section\">\r\n      </div>\r\n      <div class=\"right-section\">\r\n        <div class=\"name-container\">\r\n          <h1>Francis</h1>\r\n          <h2>Project Manager</h2> \r\n          <span class=\"name-description\">\r\n            Artificer's Team Leader. A Senior Front and Backend Developer.\r\n          </span>\r\n        </div>\r\n        <div id=\"skill-container\" class=\"skills-set-container sir\" style=\"color:white;\">\r\n            <div class=\"skills-wrapper\">\r\n              <div class=\"skill html\">\r\n                <span class=\"skill-title\">HTML / CSS</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill php\">\r\n                <span class=\"skill-title\">PHP</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill laravel\">\r\n                <span class=\"skill-title\">Laravel</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill mysql\">\r\n                <span class=\"skill-title\">MySQL</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill jsjq\">\r\n                <span class=\"skill-title\">JavaScript & JQuery</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill reactjs\">\r\n                <span class=\"skill-title\">ReactJS</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill angular\">\r\n                <span class=\"skill-title\">Angular</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill wordpress\">\r\n                <span class=\"skill-title\">WordPress</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill xd\">\r\n                <span class=\"skill-title\">Adobe XD</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill illustrator\">\r\n                <span class=\"skill-title\">Adobe Illustrator</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill photoshop\">\r\n                <span class=\"skill-title\">Adobe Photoshop</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n              <div class=\"skill ae\">\r\n                <span class=\"skill-title\">Adobe After Effects</span>\r\n                <div class=\"skill-experience-bar\"><div class=\"bar\"></div></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"member-picture\">\r\n    <img src=\"../../assets/images/Members/robert.png\">\r\n  </div>\r\n</div>\r\n<div class=\"footer\">\r\n  <img (click)=\"toHome()\" class=\"footer-logo\" src=\"../../assets/images/logo_footer.svg\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/team/team.component.scss":
/*!******************************************!*\
  !*** ./src/app/team/team.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  overflow: hidden; }\n  .team-container .team-box {\n    padding: 80px 20px 20px 20px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0; }\n  .team-container .team-box .team-content {\n      display: flex;\n      height: 100%; }\n  .team-container .team-box .team-content .left-section {\n        flex: 1; }\n  .team-container .team-box .team-content .right-section {\n        padding: 20px;\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center; }\n  .team-container .team-box .team-content .right-section .name-container {\n          text-align: center;\n          display: flex;\n          align-items: center;\n          flex-direction: column;\n          position: relative; }\n  .team-container .team-box .team-content .right-section .name-container h1 {\n            position: absolute;\n            top: -100px;\n            font-family: \"TranscendsGames\";\n            font-size: 80px;\n            background: -webkit-linear-gradient(#dadada, #b4b4b4);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            text-transform: uppercase;\n            margin: 0;\n            -webkit-animation: floatText 2s ease-in-out infinite alternate;\n                    animation: floatText 2s ease-in-out infinite alternate; }\n  .team-container .team-box .team-content .right-section .name-container h2 {\n            font-family: \"Leculier\";\n            font-size: 20px;\n            margin: 3px;\n            background: -webkit-linear-gradient(#c50000, red);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent; }\n  .team-container .team-box .team-content .right-section .name-container .name-description {\n            text-align: center;\n            font-size: 14px;\n            color: white;\n            font-family: \"Abel\"; }\n  .team-container .team-box .team-content .right-section .skills-set-container {\n          height: 160px;\n          width: 100%;\n          margin-top: 50px; }\n  .team-container .team-box .team-content .right-section .skills-set-container .skills-wrapper {\n            max-height: 100%;\n            height: 100%;\n            display: flex;\n            flex-flow: column wrap;\n            align-content: center; }\n  .team-container .team-box .team-content .right-section .skills-set-container .skills-wrapper .skill {\n              margin: 5px; }\n  .team-container .team-box .team-content .right-section .skills-set-container .skills-wrapper .skill .skill-title {\n                font-family: \"Abel\";\n                color: white;\n                font-size: 13px;\n                letter-spacing: 1px;\n                margin-left: 5px; }\n  .team-container .team-box .team-content .right-section .skills-set-container .skills-wrapper .skill .skill-experience-bar {\n                height: 5px;\n                width: 200px;\n                border: 1px #630000 solid;\n                border-radius: 6px;\n                margin-top: 5px;\n                position: relative;\n                display: flex;\n                padding: 3px;\n                overflow: hidden; }\n  .team-container .team-box .team-content .right-section .skills-set-container .skills-wrapper .skill .bar {\n                height: 100%;\n                background-color: red;\n                border-radius: 3px; }\n  .member-picture {\n  position: absolute;\n  height: 100%;\n  bottom: 3px;\n  left: 50px;\n  display: flex;\n  align-items: flex-end; }\n  .member-picture img {\n    height: 95%; }\n  .footer {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 10px;\n  display: flex;\n  align-items: center; }\n  .footer .footer-logo {\n    width: 200px;\n    cursor: pointer; }\n  @-webkit-keyframes floatText {\n  from {\n    -webkit-transform: translatey(0px);\n            transform: translatey(0px); }\n  to {\n    -webkit-transform: translatey(15px);\n            transform: translatey(15px); } }\n  @keyframes floatText {\n  from {\n    -webkit-transform: translatey(0px);\n            transform: translatey(0px); }\n  to {\n    -webkit-transform: translatey(15px);\n            transform: translatey(15px); } }\n  /*            Sir Francis STATS               */\n  .sir .html .bar,\n.sir .php .bar,\n.sir .jsjq .bar,\n.sir .reactjs .bar,\n.sir .angular .bar,\n.sir .mysql .bar,\n.sir .laravel .bar {\n  width: 100%; }\n  .sir .wordpress {\n  display: none; }\n  /*            Justin STATS               */\n  .justin .html .bar {\n  width: 80%; }\n  .justin .php .bar {\n  width: 90%; }\n  .justin .jsjq .bar {\n  width: 95%; }\n  .justin .reactjs .bar {\n  width: 85%; }\n  .justin .angular .bar {\n  width: 80%; }\n  .justin .mysql .bar {\n  width: 75%; }\n  .justin .laravel .bar {\n  width: 80%; }\n  .justin .wordpress {\n  display: none; }\n  /*            Robert STATS               */\n  .robert .html .bar,\n.robert .php .bar {\n  width: 80%; }\n  .robert .jsjq .bar {\n  width: 85%; }\n  .robert .reactjs .bar,\n.robert .mysql .bar {\n  width: 80%; }\n  .robert .wordpress .bar {\n  width: 70%; }\n  .robert .angular .bar {\n  width: 50%; }\n  .robert .laravel {\n  display: none; }\n  /*            Jurris STATS               */\n  .jurris .html .bar {\n  width: 85%; }\n  .jurris .jsjq .bar {\n  width: 50%; }\n  .jurris .ae .bar,\n.jurris .xd .bar {\n  width: 65%; }\n  .jurris .illustrator .bar {\n  width: 80%; }\n  .jurris .photoshop .bar {\n  width: 85%; }\n  .jurris .wordpress .bar {\n  width: 80%; }\n  .jurris .php,\n.jurris .reactjs,\n.jurris .angular,\n.jurris .mysql,\n.jurris .laravel {\n  display: none; }\n  .sir .ae,\n.sir .illustrator,\n.sir .photoshop,\n.sir .xd,\n.justin .ae,\n.justin .illustrator,\n.justin .photoshop,\n.justin .xd,\n.robert .ae,\n.robert .illustrator,\n.robert .photoshop,\n.robert .xd {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9DOlxcVXNlcnNcXEZyYW5jaXNcXFdvcmtcXGZyYW56YmllbHkvc3JjXFxhcHBcXHRlYW1cXHRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBTmxCO0lBUUksNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRLEVBQUE7RUFiWjtNQWVNLGFBQWE7TUFDYixZQUFZLEVBQUE7RUFoQmxCO1FBa0JRLE9BQU8sRUFBQTtFQWxCZjtRQXFCUSxhQUFhO1FBQ2IsT0FBTztRQUNQLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFBO0VBMUIvQjtVQTRCVSxrQkFBa0I7VUFDbEIsYUFBYTtVQUNiLG1CQUFtQjtVQUNuQixzQkFBc0I7VUFDdEIsa0JBQWtCLEVBQUE7RUFoQzVCO1lBa0NZLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsOEJBQThCO1lBQzlCLGVBQWU7WUFDZixxREFBcUQ7WUFDckQsNkJBQTZCO1lBQzdCLG9DQUFvQztZQUNwQyx5QkFBeUI7WUFDekIsU0FBUztZQUNULDhEQUFzRDtvQkFBdEQsc0RBQXNELEVBQUE7RUEzQ2xFO1lBOENZLHVCQUF1QjtZQUN2QixlQUFlO1lBQ2YsV0FBVztZQUNYLGlEQUE0RDtZQUM1RCw2QkFBNkI7WUFDN0Isb0NBQW9DLEVBQUE7RUFuRGhEO1lBc0RZLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2YsWUFBWTtZQUNaLG1CQUFtQixFQUFBO0VBekQvQjtVQTZEVSxhQUFhO1VBQ2IsV0FBVztVQUNYLGdCQUFnQixFQUFBO0VBL0QxQjtZQWlFWSxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIscUJBQXFCLEVBQUE7RUFyRWpDO2NBdUVjLFdBQVcsRUFBQTtFQXZFekI7Z0JBeUVnQixtQkFBbUI7Z0JBQ25CLFlBQVk7Z0JBQ1osZUFBYztnQkFDZCxtQkFBbUI7Z0JBQ25CLGdCQUFnQixFQUFBO0VBN0VoQztnQkFnRmdCLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWix5QkFBK0I7Z0JBQy9CLGtCQUFrQjtnQkFDbEIsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2IsWUFBWTtnQkFDWixnQkFBZ0IsRUFBQTtFQXhGaEM7Z0JBMkZnQixZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIsa0JBQWtCLEVBQUE7RUFTbEM7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHFCQUFxQixFQUFBO0VBTnZCO0lBUUksV0FBVyxFQUFBO0VBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBTnJCO0lBUUksWUFBWTtJQUNaLGVBQWUsRUFBQTtFQUduQjtFQUNFO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0VBRTlCO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQixFQUFBLEVBQUE7RUFMakM7RUFDRTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQSxFQUFBO0VBR2pDLCtDQUFBO0VBQ0E7Ozs7Ozs7RUFRSSxXQUFXLEVBQUE7RUFSZjtFQVdJLGFBQWEsRUFBQTtFQUdqQiwwQ0FBQTtFQUNBO0VBRUksVUFBVSxFQUFBO0VBRmQ7RUFLSSxVQUFVLEVBQUE7RUFMZDtFQVFJLFVBQVUsRUFBQTtFQVJkO0VBV0ksVUFBVSxFQUFBO0VBWGQ7RUFjSSxVQUFVLEVBQUE7RUFkZDtFQWlCSSxVQUFVLEVBQUE7RUFqQmQ7RUFvQkksVUFBVSxFQUFBO0VBcEJkO0VBdUJJLGFBQWEsRUFBQTtFQUdqQiwwQ0FBQTtFQUNBOztFQUdJLFVBQVUsRUFBQTtFQUhkO0VBTUksVUFBVSxFQUFBO0VBTmQ7O0VBVUksVUFBVSxFQUFBO0VBVmQ7RUFhSSxVQUFVLEVBQUE7RUFiZDtFQWdCSSxVQUFVLEVBQUE7RUFoQmQ7RUFtQkksYUFBYSxFQUFBO0VBR2pCLDBDQUFBO0VBQ0E7RUFFSSxVQUFVLEVBQUE7RUFGZDtFQUtJLFVBQVUsRUFBQTtFQUxkOztFQVNJLFVBQVUsRUFBQTtFQVRkO0VBWUksVUFBVSxFQUFBO0VBWmQ7RUFlSSxVQUFVLEVBQUE7RUFmZDtFQWtCSSxVQUFVLEVBQUE7RUFHZDs7Ozs7RUFLRSxhQUFhLEVBQUE7RUFFZjs7Ozs7Ozs7Ozs7O0VBWUUsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC50ZWFtLWJveCB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLnRlYW0tY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLmxlZnQtc2VjdGlvbiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgICAucmlnaHQtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5uYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyYW5zY2VuZHNHYW1lc1wiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNkYWRhZGEsICNiNGI0YjQpO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmxvYXRUZXh0IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGVjdWxpZXJcIjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoI2M1MDAwMCwgcmdiKDI1NSwgMCwgMCkpO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5hbWUtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBYmVsXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2lsbHMtc2V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgLnNraWxscy13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5za2lsbCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgLnNraWxsLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5za2lsbC1leHBlcmllbmNlLWJhciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHJnYig5OSwgMCwgMCkgc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmJhciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5tZW1iZXItcGljdHVyZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3R0b206IDNweDtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICB9XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5mb290ZXItbG9nbyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmxvYXRUZXh0e1xyXG4gIGZyb217XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG4gIH1cclxuICB0b3tcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDE1cHgpO1xyXG4gIH1cclxufVxyXG4vKiAgICAgICAgICAgIFNpciBGcmFuY2lzIFNUQVRTICAgICAgICAgICAgICAgKi9cclxuLnNpciB7XHJcbiAgLmh0bWwgLmJhcixcclxuICAucGhwIC5iYXIsXHJcbiAgLmpzanEgLmJhcixcclxuICAucmVhY3RqcyAuYmFyLFxyXG4gIC5hbmd1bGFyIC5iYXIsXHJcbiAgLm15c3FsIC5iYXIsXHJcbiAgLmxhcmF2ZWwgLmJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLndvcmRwcmVzcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4vKiAgICAgICAgICAgIEp1c3RpbiBTVEFUUyAgICAgICAgICAgICAgICovXHJcbi5qdXN0aW4ge1xyXG4gIC5odG1sIC5iYXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLnBocCAuYmFyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5qc2pxIC5iYXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcbiAgLnJlYWN0anMgLmJhciB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxuICAuYW5ndWxhciAuYmFyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5teXNxbCAuYmFyIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG4gIC5sYXJhdmVsIC5iYXIge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLndvcmRwcmVzcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4vKiAgICAgICAgICAgIFJvYmVydCBTVEFUUyAgICAgICAgICAgICAgICovXHJcbi5yb2JlcnQge1xyXG4gIC5odG1sIC5iYXIsXHJcbiAgLnBocCAuYmFyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5qc2pxIC5iYXIge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbiAgLnJlYWN0anMgLmJhcixcclxuICAubXlzcWwgLmJhciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAud29yZHByZXNzIC5iYXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgLmFuZ3VsYXIgLmJhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAubGFyYXZlbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4vKiAgICAgICAgICAgIEp1cnJpcyBTVEFUUyAgICAgICAgICAgICAgICovXHJcbi5qdXJyaXMge1xyXG4gIC5odG1sIC5iYXIge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbiAgLmpzanEgLmJhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAuYWUgLmJhcixcclxuICAueGQgLmJhciB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxuICAuaWxsdXN0cmF0b3IgLmJhciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAucGhvdG9zaG9wIC5iYXIge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbiAgLndvcmRwcmVzcyAuYmFyIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbi5qdXJyaXMgLnBocCxcclxuLmp1cnJpcyAucmVhY3RqcyxcclxuLmp1cnJpcyAuYW5ndWxhcixcclxuLmp1cnJpcyAubXlzcWwsXHJcbi5qdXJyaXMgLmxhcmF2ZWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNpciAuYWUsXHJcbi5zaXIgLmlsbHVzdHJhdG9yLFxyXG4uc2lyIC5waG90b3Nob3AsXHJcbi5zaXIgLnhkLFxyXG4uanVzdGluIC5hZSxcclxuLmp1c3RpbiAuaWxsdXN0cmF0b3IsXHJcbi5qdXN0aW4gLnBob3Rvc2hvcCxcclxuLmp1c3RpbiAueGQsXHJcbi5yb2JlcnQgLmFlLFxyXG4ucm9iZXJ0IC5pbGx1c3RyYXRvcixcclxuLnJvYmVydCAucGhvdG9zaG9wLFxyXG4ucm9iZXJ0IC54ZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TeamComponent = /** @class */ (function () {
    function TeamComponent(router) {
        this.router = router;
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent.prototype.toHome = function () {
        this.router.navigateByUrl('/home');
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/team/team.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TeamComponent);
    return TeamComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Francis\Work\franzbiely\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map