function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function _$$_lazy_route_resource_lazy_recursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function _src_app_appRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./news-detail/news-detail.component */
    "./src/app/news-detail/news-detail.component.ts");
    /* harmony import */


    var _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./more-news/more-news.component */
    "./src/app/more-news/more-news.component.ts");
    /* harmony import */


    var _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./news-page/news-page.component */
    "./src/app/news-page/news-page.component.ts");

    var routes = [{
      path: '',
      component: _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_4__["NewsPageComponent"]
    }, {
      path: 'news-detail',
      component: _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_2__["NewsDetailComponent"]
    }, {
      path: 'more-news',
      component: _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_3__["MoreNewsComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function _src_app_appComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./page-header/page-header.component */
    "./src/app/page-header/page-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./side-menu/side-menu.component */
    "./src/app/side-menu/side-menu.component.ts");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'marlin-app';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [[1, "flex-div"], [1, "main-content"], [1, "side-menu"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-side-menu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"]],
      styles: [".flex-div[_ngcontent-%COMP%]{\r\n    font-size: clamp(14px,1vw,18px);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 2.5%;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    padding-left: 2.5%;\r\n}\r\n\r\n.side-menu[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .main[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n\r\n  .side-menu[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0VBRUY7UUFDTSxVQUFVO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWRpdntcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwxdncsMThweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxufVxyXG5cclxuLm1haW4tY29udGVudHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnV7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tYWlue1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcblxyXG4gIC5zaWRlLW1lbnV7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function _src_app_appModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./side-menu/side-menu.component */
    "./src/app/side-menu/side-menu.component.ts");
    /* harmony import */


    var _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./news-card/news-card.component */
    "./src/app/news-card/news-card.component.ts");
    /* harmony import */


    var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./news-detail/news-detail.component */
    "./src/app/news-detail/news-detail.component.ts");
    /* harmony import */


    var _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./more-news/more-news.component */
    "./src/app/more-news/more-news.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./page-header/page-header.component */
    "./src/app/page-header/page-header.component.ts");
    /* harmony import */


    var _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./news-page/news-page.component */
    "./src/app/news-page/news-page.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"], _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_4__["NewsCardComponent"], _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_5__["NewsDetailComponent"], _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_6__["MoreNewsComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_9__["NewsPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"], _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_4__["NewsCardComponent"], _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_5__["NewsDetailComponent"], _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_6__["MoreNewsComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"], _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_9__["NewsPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/more-news/more-news.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/more-news/more-news.component.ts ***!
    \**************************************************/

  /*! exports provided: MoreNewsComponent */

  /***/
  function _src_app_moreNews_moreNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoreNewsComponent", function () {
      return MoreNewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../news-card/news-card.component */
    "./src/app/news-card/news-card.component.ts");

    var MoreNewsComponent = /*#__PURE__*/function () {
      function MoreNewsComponent() {
        _classCallCheck(this, MoreNewsComponent);
      }

      return _createClass(MoreNewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    MoreNewsComponent.ɵfac = function MoreNewsComponent_Factory(t) {
      return new (t || MoreNewsComponent)();
    };

    MoreNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MoreNewsComponent,
      selectors: [["app-more-news"]],
      decls: 20,
      vars: 0,
      consts: [[1, "news-form"], [1, "header-inputs"], [1, "input-div"], ["for", "your-news-title"], ["type", "text", "id", "your-news-title", "placeholder", "Titulo.."], ["for", "your-news-img"], ["type", "text", "id", "your-news-img", "placeholder", "URL da imagem"], [1, "preview-textarea"], [1, "textarea-div"], ["for", "your-news-text"], ["type", "text", "id", "your-news-text", "placeholder", "Escreva sua not\xEDcia!"], ["type", "submit", "id", "submit-btn"], [1, "preview-section"]],
      template: function MoreNewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Titulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Link da image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Texto da sua not\xEDcia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Postar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-news-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_news_card_news_card_component__WEBPACK_IMPORTED_MODULE_1__["NewsCardComponent"]],
      styles: [".input-div[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction:column;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.input-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    margin: 2% 0 0.5% 0;\r\n}\r\n\r\n.preview-textarea[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin-top: 2%;\r\n}\r\n\r\n.textarea-div[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-direction:column;\r\n    flex-wrap: nowrap;\r\n    width: 45%;\r\n}\r\n\r\n.textarea-div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    margin-bottom: 2%;\r\n}\r\n\r\n#your-news-text[_ngcontent-%COMP%]{\r\n    resize:none;\r\n    width: 100%;\r\n    height: 80%;\r\n}\r\n\r\n#submit-btn[_ngcontent-%COMP%]{\r\n    border: 1px solid grey;\r\n    border-radius: 10px;\r\n    box-shadow: -1px 1.5px 4px 0.1px black;\r\n    font-size: clamp(14px,1vw,18px);\r\n    font-weight: bold;\r\n    color: rgb(0, 175, 175);\r\n    background: rgba(88, 88, 88, 0.144);\r\n    text-align: center;\r\n    padding: 0.5%;\r\n    width: 50%;\r\n    margin-top: 2.5%;\r\n}\r\n\r\n#submit-btn[_ngcontent-%COMP%]:hover{\r\n    color: blue;\r\n    cursor: pointer;\r\n    box-shadow: -1px 3px 10px 1px black;\r\n}\r\n\r\n.preview-section[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS1uZXdzL21vcmUtbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QywrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb3JlLW5ld3MvbW9yZS1uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZGl2e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYgbGFiZWx7XHJcbiAgICBtYXJnaW46IDIlIDAgMC41JSAwO1xyXG59XHJcblxyXG4ucHJldmlldy10ZXh0YXJlYXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi50ZXh0YXJlYS1kaXZ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi50ZXh0YXJlYS1kaXYgbGFiZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuI3lvdXItbmV3cy10ZXh0e1xyXG4gICAgcmVzaXplOm5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4jc3VibWl0LWJ0bntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAxLjVweCA0cHggMC4xcHggYmxhY2s7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsMXZ3LDE4cHgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE3NSwgMTc1KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODgsIDg4LCA4OCwgMC4xNDQpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG59XHJcblxyXG4jc3VibWl0LWJ0bjpob3ZlcntcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAzcHggMTBweCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5wcmV2aWV3LXNlY3Rpb257XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoreNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-more-news',
          templateUrl: './more-news.component.html',
          styleUrls: ['./more-news.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news-card/news-card.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/news-card/news-card.component.ts ***!
    \**************************************************/

  /*! exports provided: NewsCardComponent */

  /***/
  function _src_app_newsCard_newsCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsCardComponent", function () {
      return NewsCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewsCardComponent = /*#__PURE__*/function () {
      function NewsCardComponent() {
        _classCallCheck(this, NewsCardComponent);
      }

      return _createClass(NewsCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    NewsCardComponent.ɵfac = function NewsCardComponent_Factory(t) {
      return new (t || NewsCardComponent)();
    };

    NewsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsCardComponent,
      selectors: [["app-news-card"]],
      decls: 10,
      vars: 0,
      consts: [[1, "news-card"], [1, "news-card-figure"], ["src", "./../../assets/images/Covid-19.jpg", "alt", "Poster Covid 19", 1, "news-card-figure-img"], [1, "news-card-content"], [1, "news-card-title"], [1, "news-card-paragraph"], [1, "news-card-btn"]],
      template: function NewsCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Coronav\xEDrus: como a doen\xE7a \xE9 transmitida?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Saiba o que \xE9 coronav\xEDrus, em quanto tempo a doen\xE7a pode se manifestar e quais s\xE3o os principais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ler mais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".news-card[_ngcontent-%COMP%]{\r\n    border: 1px solid gray;\r\n    border-radius: 2%;\r\n    box-shadow: -1px 1.5px 4px 0.1px ;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.news-card[_ngcontent-%COMP%]:hover{\r\n    box-shadow: -1px 3px 10px 1px;\r\n}\r\n\r\n.news-card-figure[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.news-card-figure-img[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 2%;\r\n    border-top-right-radius: 2%;\r\n    width: 100%;\r\n}\r\n\r\n.news-card-content[_ngcontent-%COMP%]{\r\n    width:-moz-fit-content;\r\n    width:fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    padding: 3%;\r\n}\r\n\r\n.news-card-title[_ngcontent-%COMP%]{\r\n    text-wrap: wrap;\r\n}\r\n\r\n.news-card-paragraph[_ngcontent-%COMP%]{\r\n    text-wrap: wrap;\r\n    margin: 2.5% 0;\r\n}\r\n\r\n.news-card-btn[_ngcontent-%COMP%]{\r\n    font-size: clamp(14px,1vw,18px);\r\n    font-weight: bold;\r\n    color: rgb(0, 175, 175);\r\n    border: none;\r\n    background: none;\r\n    text-align: left;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.news-card-btn[_ngcontent-%COMP%]:hover{\r\n    color: blue;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1jYXJkL25ld3MtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25ld3MtY2FyZC9uZXdzLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWNhcmR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDEuNXB4IDRweCAwLjFweCA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmV3cy1jYXJkOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogLTFweCAzcHggMTBweCAxcHg7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQtZmlndXJle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQtZmlndXJlLWltZ3tcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIlO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQtY29udGVudHtcclxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG59XHJcblxyXG4ubmV3cy1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ubmV3cy1jYXJkLXBhcmFncmFwaHtcclxuICAgIHRleHQtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMi41JSAwO1xyXG59XHJcblxyXG4ubmV3cy1jYXJkLWJ0bntcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwxdncsMThweCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMTc1LCAxNzUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQtYnRuOmhvdmVye1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news-card',
          templateUrl: './news-card.component.html',
          styleUrls: ['./news-card.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news-detail/news-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/news-detail/news-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: NewsDetailComponent */

  /***/
  function _src_app_newsDetail_newsDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function () {
      return NewsDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewsDetailComponent = /*#__PURE__*/function () {
      function NewsDetailComponent() {
        _classCallCheck(this, NewsDetailComponent);
      }

      return _createClass(NewsDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    NewsDetailComponent.ɵfac = function NewsDetailComponent_Factory(t) {
      return new (t || NewsDetailComponent)();
    };

    NewsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsDetailComponent,
      selectors: [["app-news-detail"]],
      decls: 22,
      vars: 0,
      consts: [[1, "author-detail"], [1, "author-detail-figure"], ["src", "./../../assets/images/blankUser.png", "alt", "author image"], ["datetime", "DD-MM-YYY"], [1, "news-detail-content"], [1, "news-detail-figure"], ["src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.paho.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmax_1500x1500%2Fpublic%2Fbanner-covid-19-1280x549.jpg%3Fitok%3DR7z_5No5&f=1&nofb=1&ipt=e4282a337d9b79101e07d93f537de3e4196905f57b2a88e01d5e2fac8a5eea7f&ipo=images", "alt", "Poster Covid 19"], [1, "news-detail-text"], [1, "news-detail-paragraph"]],
      template: function NewsDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Escrito por: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Author J. L. Terence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "time", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Modificado em: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "14 nov. 2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figcaption");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transmiss\xE3o da COVID-19 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "A COVID-19, causada pelo v\xEDrus SARS-CoV-2, se espalha principalmente atrav\xE9s de got\xEDculas respirat\xF3rias expelidas quando uma pessoa infectada tosse, espirra ou fala. O v\xEDrus tamb\xE9m pode se espalhar pelo contato com superf\xEDcies contaminadas, embora esse modo de transmiss\xE3o seja considerado menos comum. Estudos indicam que o v\xEDrus pode permanecer vi\xE1vel em superf\xEDcies por v\xE1rias horas, dependendo do material e das condi\xE7\xF5es ambientais. Transmiss\xE3o por Got\xEDculas: Quando uma pessoa infectada libera got\xEDculas respirat\xF3rias, estas podem ser inaladas por indiv\xEDduos pr\xF3ximos, resultando na transmiss\xE3o do v\xEDrus. \xC9 crucial manter uma dist\xE2ncia f\xEDsica segura e usar m\xE1scaras para reduzir o risco de infec\xE7\xE3o. Cont\xE1gio Indireto: Embora o principal meio de transmiss\xE3o seja pelas got\xEDculas, o SARS-CoV-2 pode tamb\xE9m ser transferido ao tocar superf\xEDcies contaminadas e depois levar as m\xE3os ao rosto, particularmente aos olhos, nariz ou boca. Portanto, a pr\xE1tica de higiene frequente das m\xE3os e a limpeza das superf\xEDcies s\xE3o medidas recomendadas. Preven\xE7\xE3o: A preven\xE7\xE3o da COVID-19 envolve medidas como o uso de m\xE1scaras, a manuten\xE7\xE3o do distanciamento social, a lavagem regular das m\xE3os com \xE1gua e sab\xE3o, e a desinfec\xE7\xE3o de superf\xEDcies frequentemente tocadas. Al\xE9m disso, a vacina\xE7\xE3o tem se mostrado uma ferramenta essencial na redu\xE7\xE3o da propaga\xE7\xE3o do v\xEDrus e na prote\xE7\xE3o contra formas graves da doen\xE7a.Para mais informa\xE7\xF5es, consulte os sites de \xF3rg\xE3os de sa\xFAde e siga as orienta\xE7\xF5es das autoridades sanit\xE1rias locais.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".author-detail[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]{\r\n    border: 1.5px solid grey;\r\n    border-radius: 15px;\r\n    box-shadow: -1px 1.5px 4px 0.1px ;\r\n    padding: 1.5%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: row;\r\n    gap: 5%;\r\n    justify-content: center;\r\n    align-items:center;\r\n    text-align: center;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]:hover{ \r\n    cursor: pointer;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border: 1.5px solid grey;\r\n    border-radius: 100%;\r\n    width: 50px;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{ \r\n    box-shadow: -1px 3px 10px 1px;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]{ \r\n    text-decoration:underline;\r\n}\r\n\r\n.author-detail[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    padding-left: 5%;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .author-detail[_ngcontent-%COMP%]{\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .author-detail[_ngcontent-%COMP%]   time[_ngcontent-%COMP%], time[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{ \r\n    text-align: center;\r\n    margin-top: 2.5%;\r\n    }\r\n}\r\n\r\n.news-detail-figure[_ngcontent-%COMP%]{\r\n    border: 1.5px solid grey;\r\n    border-radius: 15px;\r\n    box-shadow: -1px 1.5px 4px 0.1px; \r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.news-detail-figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n    border-bottom: 1px solid grey;\r\n}\r\n\r\n.news-detail-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    text-align: left;\r\n    padding: 1%;\r\n}\r\n\r\n.news-detail-paragraph[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    text-align:start;\r\n    text-indent: 5%;\r\n    text-wrap:balance;\r\n    line-height: 200%;\r\n    line-break:loose;\r\n    padding: 2.5% 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtJQUNBLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRob3ItZGV0YWlse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmF1dGhvci1kZXRhaWwtZmlndXJle1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMS41cHggNHB4IDAuMXB4IDtcclxuICAgIHBhZGRpbmc6IDEuNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ2FwOiA1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4uYXV0aG9yLWRldGFpbC1maWd1cmU6aG92ZXJ7IFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXV0aG9yLWRldGFpbC1maWd1cmUgaW1ne1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uYXV0aG9yLWRldGFpbC1maWd1cmU6aG92ZXIgaW1neyBcclxuICAgIGJveC1zaGFkb3c6IC0xcHggM3B4IDEwcHggMXB4O1xyXG59XHJcblxyXG4uYXV0aG9yLWRldGFpbC1maWd1cmU6aG92ZXIgZmlnY2FwdGlvbnsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYXV0aG9yLWRldGFpbCB0aW1le1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmF1dGhvci1kZXRhaWx7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRob3ItZGV0YWlsIHRpbWUsIHRpbWUgYnsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmV3cy1kZXRhaWwtZmlndXJle1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggMS41cHggNHB4IDAuMXB4OyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn0gICBcclxuXHJcbi5uZXdzLWRldGFpbC1maWd1cmUgaW1ne1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5uZXdzLWRldGFpbC1maWd1cmUgZmlnY2FwdGlvbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ubmV3cy1kZXRhaWwtcGFyYWdyYXBoe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246c3RhcnQ7XHJcbiAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICB0ZXh0LXdyYXA6YmFsYW5jZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMDAlO1xyXG4gICAgbGluZS1icmVhazpsb29zZTtcclxuICAgIHBhZGRpbmc6IDIuNSUgMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news-detail',
          templateUrl: './news-detail.component.html',
          styleUrls: ['./news-detail.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news-page/news-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/news-page/news-page.component.ts ***!
    \**************************************************/

  /*! exports provided: NewsPageComponent */

  /***/
  function _src_app_newsPage_newsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsPageComponent", function () {
      return NewsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../news-card/news-card.component */
    "./src/app/news-card/news-card.component.ts");

    var NewsPageComponent = /*#__PURE__*/function () {
      function NewsPageComponent() {
        _classCallCheck(this, NewsPageComponent);
      }

      return _createClass(NewsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    NewsPageComponent.ɵfac = function NewsPageComponent_Factory(t) {
      return new (t || NewsPageComponent)();
    };

    NewsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsPageComponent,
      selectors: [["app-news-page"]],
      decls: 7,
      vars: 0,
      consts: [[1, "news-page"], [1, "news-card-item"]],
      template: function NewsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-news-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-news-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-news-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-news-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-news-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-news-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_news_card_news_card_component__WEBPACK_IMPORTED_MODULE_1__["NewsCardComponent"]],
      styles: [".news-page[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n}\r\n\r\n.news-card-item[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n    margin-bottom: 5% ;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .news-card-item[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1wYWdlL25ld3MtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uZXdzLXBhZ2UvbmV3cy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3cy1wYWdle1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5ld3MtY2FyZC1pdGVte1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlIDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubmV3cy1jYXJkLWl0ZW17XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news-page',
          templateUrl: './news-page.component.html',
          styleUrls: ['./news-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-header/page-header.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/page-header/page-header.component.ts ***!
    \******************************************************/

  /*! exports provided: PageHeaderComponent */

  /***/
  function _src_app_pageHeader_pageHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function () {
      return PageHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageHeaderComponent = /*#__PURE__*/function () {
      function PageHeaderComponent() {
        _classCallCheck(this, PageHeaderComponent);
      }

      return _createClass(PageHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
      return new (t || PageHeaderComponent)();
    };

    PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageHeaderComponent,
      selectors: [["app-page-header"]],
      decls: 5,
      vars: 0,
      consts: [[1, "page-header"], [1, "page-header-title"], [1, "page-header-subtitle"]],
      template: function PageHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Exibindo resultados de busca por \"Covid 19\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Encontramos um total de 20 resultados para sua busca");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".page-header[_ngcontent-%COMP%]{\r\n    font-size: clamp(14px,1vw,18px);\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 5%;\r\n}\r\n\r\n.page-header-title[_ngcontent-%COMP%]{\r\n    font-size: clamp(16px,5vw,30px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LDF2dywxOHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDE2cHgsNXZ3LDMwcHgpO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-header',
          templateUrl: './page-header.component.html',
          styleUrls: ['./page-header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/side-menu/side-menu.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/side-menu/side-menu.component.ts ***!
    \**************************************************/

  /*! exports provided: SideMenuComponent */

  /***/
  function _src_app_sideMenu_sideMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function () {
      return SideMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SideMenuComponent = /*#__PURE__*/function () {
      function SideMenuComponent() {
        _classCallCheck(this, SideMenuComponent);
      }

      return _createClass(SideMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
    }();

    SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) {
      return new (t || SideMenuComponent)();
    };

    SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideMenuComponent,
      selectors: [["app-side-menu"]],
      decls: 23,
      vars: 0,
      consts: [[1, "side-bar-section"], [1, "side-bar-section-category-div"], ["name", "side-bar-section-category-title"], ["name", "side-bar-section-category-list"], [1, "category-list-item"], ["href", ""], [1, "side-bar-section-search-div"], ["for", "search-input", 1, "search-div-title"], [1, "search-div-input"], ["id", "search-input", "placeholder", "Pesquisar por..."]],
      template: function SideMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Procurando alguma not\xEDcia?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".side-bar-section[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: top;\r\n    gap: 2.5%;\r\n    height: 100%;\r\n}\r\n\r\n.side-bar-section-category-div[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n}\r\n\r\n.category-list-item[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    border-bottom: 1px solid gray;\r\n    padding: 5% 0;\r\n}\r\n\r\n.category-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.category-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color:rgb(0, 204, 204)\r\n}\r\n\r\n.side-bar-section-search-div[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n}\r\n\r\n.search-div-title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    text-wrap: nowrap;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]{\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    font-size: clamp(14px,1vw,18px);\r\n    padding: 5% 2.5% 5% 2.5% ;\r\n    margin-top: 2.5%;\r\n    border: 1px solid gray;\r\n    border-radius: 5px;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    height: 20px;\r\n    min-width: 18px;\r\n    min-height: 15px;\r\n    overflow: visible; \r\n    background-image: url('lupa.png');\r\n    background-size:contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background-size: 110%;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .side-bar-section[_ngcontent-%COMP%]{\r\n        gap: 1%;\r\n    }\r\n\r\n    .side-bar-section-category-div[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n\r\n    .side-bar-section-search-div[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n@media (max-width: 880px) {\r\n    .search-div-title[_ngcontent-%COMP%]{\r\n        text-wrap: wrap;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQ0FBdUQ7SUFDdkQsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksT0FBTztJQUNYOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLWJhci1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XHJcbiAgICBnYXA6IDIuNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1zZWN0aW9uLWNhdGVnb3J5LWRpdntcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1saXN0LWl0ZW17XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1JSAwO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktbGlzdC1pdGVtIGF7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWxpc3QtaXRlbSBhOmhvdmVye1xyXG4gICAgY29sb3I6cmdiKDAsIDIwNCwgMjA0KVxyXG59XHJcblxyXG4uc2lkZS1iYXItc2VjdGlvbi1zZWFyY2gtZGl2e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zZWFyY2gtZGl2LXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYtaW5wdXR7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwxdncsMThweCk7XHJcbiAgICBwYWRkaW5nOiA1JSAyLjUlIDUlIDIuNSUgO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZGl2LWlucHV0IGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE4cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbHVwYS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYtaW5wdXQgYnV0dG9uOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlO1xyXG59ICAgXHJcblxyXG4uc2VhcmNoLWRpdi1pbnB1dCBpbnB1dCxidXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuc2lkZS1iYXItc2VjdGlvbntcclxuICAgICAgICBnYXA6IDElO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLWJhci1zZWN0aW9uLWNhdGVnb3J5LWRpdntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLWJhci1zZWN0aW9uLXNlYXJjaC1kaXZ7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgICAuc2VhcmNoLWRpdi10aXRsZXtcclxuICAgICAgICB0ZXh0LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-menu',
          templateUrl: './side-menu.component.html',
          styleUrls: ['./side-menu.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function _src_environments_environmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function _src_mainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Scobinow\Desktop\proj1\marlin-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map