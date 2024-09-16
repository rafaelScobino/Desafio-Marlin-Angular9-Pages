(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-detail/news-detail.component */ "./src/app/news-detail/news-detail.component.ts");
/* harmony import */ var _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-news/more-news.component */ "./src/app/more-news/more-news.component.ts");
/* harmony import */ var _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-page/news-page.component */ "./src/app/news-page/news-page.component.ts");








const routes = [
    { path: '', component: _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_5__["NewsPageComponent"] },
    { path: 'news-page', component: _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_5__["NewsPageComponent"] },
    { path: 'news-detail', component: _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_3__["NewsDetailComponent"] },
    { path: 'more-news', component: _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_4__["MoreNewsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, 
            //Definindo comportamento de Router para simular 'reload' da rota do componente
            { onSameUrlNavigation: 'reload' })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, 
                    //Definindo comportamento de Router para simular 'reload' da rota do componente
                    { onSameUrlNavigation: 'reload' })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/page-header/page-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");





class AppComponent {
    constructor() {
        this.title = 'marlin-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "flex-div"], [1, "main-content"], [1, "side-menu"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-side-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_3__["SideMenuComponent"]], styles: [".flex-div[_ngcontent-%COMP%]{\r\n    font-size: clamp(14px,1vw,18px);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 2.5%;\r\n    width: 100%;    \r\n}\r\n\r\n.main-content[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    padding-left: 2.5%;\r\n    height: 100%;\r\n}\r\n\r\n.side-menu[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .main[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n    }\r\n\r\n  .side-menu[_ngcontent-%COMP%]{\r\n        width: 40%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0VBRUY7UUFDTSxVQUFVO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWRpdntcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwxdncsMThweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxufVxyXG5cclxuLm1haW4tY29udGVudHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnV7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tYWlue1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcblxyXG4gIC5zaWRlLW1lbnV7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "./src/app/side-menu/side-menu.component.ts");
/* harmony import */ var _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-card/news-card.component */ "./src/app/news-card/news-card.component.ts");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-detail/news-detail.component */ "./src/app/news-detail/news-detail.component.ts");
/* harmony import */ var _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-news/more-news.component */ "./src/app/more-news/more-news.component.ts");
/* harmony import */ var _more_news_news_form_news_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-news/news-form/news-form.component */ "./src/app/more-news/news-form/news-form.component.ts");
/* harmony import */ var _more_news_post_feedback_post_feedback_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./more-news/post-feedback/post-feedback.component */ "./src/app/more-news/post-feedback/post-feedback.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-header/page-header.component */ "./src/app/page-header/page-header.component.ts");
/* harmony import */ var _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./news-page/news-page.component */ "./src/app/news-page/news-page.component.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");













//Importando service de requests 

//Importando modulo para configurar dependências do HttpClient


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_api_service_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"],
        _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__["NewsCardComponent"],
        _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_6__["NewsDetailComponent"],
        _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_7__["MoreNewsComponent"],
        _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__["PageHeaderComponent"],
        _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_12__["NewsPageComponent"],
        _more_news_post_feedback_post_feedback_component__WEBPACK_IMPORTED_MODULE_9__["PostFeedbackComponent"],
        _more_news_news_form_news_form_component__WEBPACK_IMPORTED_MODULE_8__["NewsFormComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_4__["SideMenuComponent"],
                    _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__["NewsCardComponent"],
                    _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_6__["NewsDetailComponent"],
                    _more_news_more_news_component__WEBPACK_IMPORTED_MODULE_7__["MoreNewsComponent"],
                    _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_11__["PageHeaderComponent"],
                    _news_page_news_page_component__WEBPACK_IMPORTED_MODULE_12__["NewsPageComponent"],
                    _more_news_post_feedback_post_feedback_component__WEBPACK_IMPORTED_MODULE_9__["PostFeedbackComponent"],
                    _more_news_news_form_news_form_component__WEBPACK_IMPORTED_MODULE_8__["NewsFormComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                providers: [
                    _services_api_service_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/models/news.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/news.model.ts ***!
  \**************************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
//Modelo da classe "News" para tratar requests e padronizar "api-service"
class News {
    constructor(createdAt, title, image, body, id) {
        this.createdAt = createdAt;
        this.title = title;
        this.image = image;
        this.body = body;
        this.id = id;
    }
    //Método para validar dados antes de criar instância da classe
    static createNews(item) {
        if (News.isValid(item)) {
            return new News(item.createdAt, item.title, item.image, item.body, parseInt(item.id));
        }
        else {
            console.error("Invalid News data");
            return null;
        }
    }
    //Método de validação da classe
    static isValid(data) {
        return data &&
            typeof data.createdAt === 'string' && data.createdAt.length > 0 &&
            typeof data.title === 'string' && data.title.length > 0 &&
            typeof data.body === 'string' &&
            typeof data.id === 'string' && data.id != '0';
    }
}


/***/ }),

/***/ "./src/app/more-news/more-news.component.ts":
/*!**************************************************!*\
  !*** ./src/app/more-news/more-news.component.ts ***!
  \**************************************************/
/*! exports provided: MoreNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreNewsComponent", function() { return MoreNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _news_form_news_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-form/news-form.component */ "./src/app/more-news/news-form/news-form.component.ts");
/* harmony import */ var _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../news-card/news-card.component */ "./src/app/news-card/news-card.component.ts");
/* harmony import */ var _post_feedback_post_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-feedback/post-feedback.component */ "./src/app/more-news/post-feedback/post-feedback.component.ts");








const _c0 = ["newsForm"];
function MoreNewsComponent_app_post_feedback_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-feedback", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isPosted", ctx_r0.isPosted)("postId", ctx_r0.validId)("postTitle", _r1.newsTitle)("isValid", _r1.isValid)("requestOk", _r1.requestOk);
} }
class MoreNewsComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        //Declarando propriedade para o link do 'news-card' responsável pela prévia da notícia
        this.previewLink = '/more-news';
    }
    ngOnInit() {
        //Gerando nova ID valida para notícia
        this.api.getValidId().subscribe((data) => {
            this.validId = `${data}`;
            console.log(this.validId);
        });
    }
    //Declarando getters para passar informações do 'news-form' para o 'news-card' da prévia
    get newsTitle() {
        var _a;
        return ((_a = this.newsForm) === null || _a === void 0 ? void 0 : _a.newsTitle) || '';
    }
    get newsImgUrl() {
        var _a;
        return ((_a = this.newsForm) === null || _a === void 0 ? void 0 : _a.newsImgUrl) || '';
    }
    get newsBody() {
        var _a;
        return ((_a = this.newsForm) === null || _a === void 0 ? void 0 : _a.newsBody) || '';
    }
    get isPosted() {
        return this._isPosted;
    }
    //Método para receber notificação do forms e ativar o 'post-feedback'
    setPosted(isPosted) {
        this._isPosted = isPosted;
    }
    //Método para modificar o comportamento do link 'Leia mais' do 'news-card'
    setIsMoreNews() {
        return true;
    }
}
MoreNewsComponent.ɵfac = function MoreNewsComponent_Factory(t) { return new (t || MoreNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MoreNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoreNewsComponent, selectors: [["app-more-news"]], viewQuery: function MoreNewsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newsForm = _t.first);
    } }, decls: 7, vars: 7, consts: [[3, "isPosted", "postId", "postTitle", "isValid", "requestOk", 4, "ngIf"], [1, "your-news"], [1, "form-div"], [3, "id", "formEvent"], ["newsForm", ""], [1, "preview-section"], [3, "title", "img", "body", "id", "isMoreNews"], [3, "isPosted", "postId", "postTitle", "isValid", "requestOk"]], template: function MoreNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MoreNewsComponent_app_post_feedback_0_Template, 1, 5, "app-post-feedback", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-news-form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formEvent", function MoreNewsComponent_Template_app_news_form_formEvent_3_listener($event) { return ctx.setPosted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-news-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPosted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.validId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.newsTitle)("img", ctx.newsImgUrl)("body", ctx.newsBody)("id", ctx.validId)("isMoreNews", ctx.setIsMoreNews());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _news_form_news_form_component__WEBPACK_IMPORTED_MODULE_4__["NewsFormComponent"], _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__["NewsCardComponent"], _post_feedback_post_feedback_component__WEBPACK_IMPORTED_MODULE_6__["PostFeedbackComponent"]], styles: [".your-news[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.form-div[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n}\r\n\r\n.preview-section[_ngcontent-%COMP%]{\r\n    text-wrap: wrap;\r\n    width: 45%;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .form-div[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n    }\r\n    \r\n    .your-news[_ngcontent-%COMP%]{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    .preview-section[_ngcontent-%COMP%]{\r\n        margin: 5%;\r\n        width: 90%;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS1uZXdzL21vcmUtbmV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBR0E7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvbW9yZS1uZXdzL21vcmUtbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnlvdXItbmV3c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1kaXZ7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4ucHJldmlldy1zZWN0aW9ue1xyXG4gICAgdGV4dC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmZvcm0tZGl2e1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC55b3VyLW5ld3N7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmV2aWV3LXNlY3Rpb257XHJcbiAgICAgICAgbWFyZ2luOiA1JTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoreNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-more-news',
                templateUrl: './more-news.component.html',
                styleUrls: ['./more-news.component.css']
            }]
    }], function () { return [{ type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { newsForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['newsForm']
        }] }); })();


/***/ }),

/***/ "./src/app/more-news/news-form/news-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/more-news/news-form/news-form.component.ts ***!
  \************************************************************/
/*! exports provided: NewsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFormComponent", function() { return NewsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_news_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/news.model */ "./src/app/models/news.model.ts");
/* harmony import */ var src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

//Importando model 'News' para formatação de dado




class NewsFormComponent {
    constructor(api) {
        this.api = api;
        //Declarando 'EventEmitter' para passar informação para o component pai 'more-news'
        this.formEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        //Atribuindo valor a propriedade 'createdAt'
        this.newsCreatedAt = new Date().toISOString();
    }
    //Método para checar validade do formulário e acionar o POST
    submitNews(f) {
        if (f.valid) {
            this.updateObjNews(),
                this.NewsObj = src_app_models_news_model__WEBPACK_IMPORTED_MODULE_1__["News"].createNews(this.formObj);
            this.api.postNews(this.NewsObj).subscribe({
                next: (response) => {
                    this.requestOk = true;
                    this.isValid = true;
                    console.log('POST succeeded:', response);
                    this.formEmit(true);
                },
                error: (error) => {
                    console.error('POST failed:', error);
                    this.requestOk = false;
                    this.isValid = true;
                    this.formEmit(true);
                }
            });
        }
        else {
            this.isValid = false;
            this.formEmit(true);
        }
    }
    //Método para emitir o booleano de notícia postada para o component pai 'more-news'
    formEmit(value) {
        this.formEvent.emit(value);
    }
    //Método para atribuir valores ao 'formObj'
    updateObjNews() {
        this.formObj = {
            createdAt: this.newsCreatedAt,
            title: this.newsTitle,
            image: this.newsImgUrl,
            body: this.newsBody,
            id: this.newsId
        };
    }
}
NewsFormComponent.ɵfac = function NewsFormComponent_Factory(t) { return new (t || NewsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
NewsFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsFormComponent, selectors: [["app-news-form"]], inputs: { newsId: ["id", "newsId"] }, outputs: { formEvent: "formEvent" }, decls: 19, vars: 4, consts: [[1, "news-form", 3, "ngSubmit"], ["newsForm", "ngForm"], [1, "input-div"], ["for", "newsTitle"], ["type", "text", "required", "", "id", "newsTitle", "name", "newsTitle", "placeholder", "Titulo..", 1, "proj-input", 3, "ngModel", "ngModelChange"], ["for", "newsImgUrl"], ["id", "open-link", 3, "href"], ["id", "open-newsImg", "src", "./assets/openIMG.png", "alt", "imgUrl", 1, "box-shadow"], ["type", "url", "pattern", "https://.*", "required", "", "id", "newsImgUrl", "name", "newsImgUrl", "placeholder", "https://exemplo.com", 1, "proj-input", 3, "ngModel", "ngModelChange"], [1, "input-div", "textarea-div"], ["for", "newsBody"], ["type", "text", "required", "", "id", "newsBody", "name", "newsBody", "placeholder", "Escreva sua not\u00EDcia!", 1, "proj-input", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "submit-btn", 1, "proj-btn"]], template: function NewsFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewsFormComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.submitNews(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Titulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsFormComponent_Template_input_ngModelChange_5_listener($event) { return ctx.newsTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Link da imagem \"https://\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newsImgUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Texto da sua not\u00EDcia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsFormComponent_Template_textarea_ngModelChange_15_listener($event) { return ctx.newsBody = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ENVIAR POST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newsTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.newsImgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newsImgUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newsBody);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"]], styles: [".news-form[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.input-div[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    display:flex;\r\n    flex-direction:column;\r\n    flex-wrap: nowrap;\r\n    margin-bottom: 1%;\r\n    width: 100%;\r\n}\r\n.input-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin: 0.5% 0 1% 0;\r\n    padding: 1.5%;\r\n}\r\n.textarea-div[_ngcontent-%COMP%]{\r\n    flex-grow:1;\r\n}\r\n#newsTitle[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n#newsImgUrl[_ngcontent-%COMP%]{\r\n    color: blue;\r\n    text-decoration: underline;\r\n}\r\n#open-newsImg[_ngcontent-%COMP%]{\r\n    width: 20px;\r\n    height: 20px;\r\n    align-self: center;\r\n}\r\n#newsBody[_ngcontent-%COMP%]{\r\n    padding: 1.5%;\r\n    resize:none;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n@media (max-width: 500px) {\r\n    .news-form[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n\r\n    .textarea-div[_ngcontent-%COMP%]{\r\n        height: 20vh;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS1uZXdzL25ld3MtZm9ybS9uZXdzLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb3JlLW5ld3MvbmV3cy1mb3JtL25ld3MtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW5wdXQtZGl2e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1kaXYgaW5wdXR7XHJcbiAgICBtYXJnaW46IDAuNSUgMCAxJSAwO1xyXG4gICAgcGFkZGluZzogMS41JTtcclxufVxyXG5cclxuLnRleHRhcmVhLWRpdntcclxuICAgIGZsZXgtZ3JvdzoxO1xyXG59XHJcblxyXG4jbmV3c1RpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNuZXdzSW1nVXJse1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuI29wZW4tbmV3c0ltZ3tcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4jbmV3c0JvZHl7XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG4gICAgcmVzaXplOm5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAubmV3cy1mb3Jte1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0YXJlYS1kaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-form',
                templateUrl: './news-form.component.html',
                styleUrls: ['./news-form.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, { newsId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['id']
        }], formEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/more-news/post-feedback/post-feedback.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/more-news/post-feedback/post-feedback.component.ts ***!
  \********************************************************************/
/*! exports provided: PostFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFeedbackComponent", function() { return PostFeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/newsUtils */ "./src/app/utils/newsUtils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

//Importando funções de apoio do NewsUtils



class PostFeedbackComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.feedbackOpts();
    }
    //Método responsável por definir o texto do feedback
    feedbackOpts() {
        if (this.isValid && this.requestOk) {
            this.span = 'Sua Notícia foi enviada com sucesso!';
            this.btnText = 'Ver Detalhes';
            this.feedbackRoute = '/news-detail';
            this.routeParams = { id: parseInt(this.postId), title: this.postTitle };
        }
        else if (this.isValid) {
            this.span = 'Processo de envio falhou, tente novamente.';
            this.btnText = 'Tente Novamente';
            this.feedbackRoute = '/more-news';
            this.routeParams = { id: null, title: null };
        }
        else {
            this.span = ' Notícia NÃO enviada, informações invalidas:  Titulo e corpo vazios, url da imagem não é "https://"';
            this.btnText = 'Tente Novamente';
            this.feedbackRoute = '/more-news';
            this.routeParams = { id: null, title: null };
        }
    }
    //Método responsável pela navegação  de rota
    goToDetails() {
        //Definindo estratégia de rota para impedir o Angular de usar a mesma rota e simular um 'page Refresh'
        Object(src_app_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["routeReuse"])(this.router, false);
        this.router.navigate([this.feedbackRoute], { queryParams: this.routeParams });
    }
}
PostFeedbackComponent.ɵfac = function PostFeedbackComponent_Factory(t) { return new (t || PostFeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PostFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostFeedbackComponent, selectors: [["app-post-feedback"]], inputs: { isPosted: "isPosted", postId: "postId", postTitle: "postTitle", isValid: "isValid", requestOk: "requestOk" }, decls: 7, vars: 2, consts: [[1, "post-feedback"], [1, "feedback-box", "box-shadow"], [1, "text-div"], [1, "proj-link", 3, "click"]], template: function PostFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFeedbackComponent_Template_button_click_5_listener() { return ctx.goToDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.span);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnText);
    } }, styles: [".post-feedback[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index:1;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(1,1,1,0.4);\r\n}\r\n\r\n.feedback-box[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-width: -moz-fit-content;\r\n  min-width: fit-content;\r\n  width: 25vw;\r\n  height: 15vh;\r\n  margin-bottom: 30vh;\r\n  border: 1.5px solid gray;\r\n  border-radius: 25px;\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.text-div[_ngcontent-%COMP%]{\r\n  font-size: clamp(20px,10vw,30px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 10px;\r\n  margin: 2.5%;\r\n  padding: 5%;\r\n}\r\n\r\n.text-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  font-weight: bolder;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9yZS1uZXdzL3Bvc3QtZmVlZGJhY2svcG9zdC1mZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkJBQXNCO0VBQXRCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbW9yZS1uZXdzL3Bvc3QtZmVlZGJhY2svcG9zdC1mZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtZmVlZGJhY2t7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OjE7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLDEsMSwwLjQpO1xyXG59XHJcblxyXG4uZmVlZGJhY2stYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIGhlaWdodDogMTV2aDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHZoO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLnRleHQtZGl2e1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwxMHZ3LDMwcHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luOiAyLjUlO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4udGV4dC1kaXYgc3BhbntcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostFeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-feedback',
                templateUrl: './post-feedback.component.html',
                styleUrls: ['./post-feedback.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { isPosted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isPosted']
        }], postId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['postId']
        }], postTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['postTitle']
        }], isValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], requestOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/news-card/news-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/news-card/news-card.component.ts ***!
  \**************************************************/
/*! exports provided: NewsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsCardComponent", function() { return NewsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/newsUtils */ "./src/app/utils/newsUtils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

//Importando funções de apoio do NewsUtils



class NewsCardComponent {
    constructor(router) {
        this.router = router;
        //Declarando propriedades para criação dinâmica de 'news-card'
        this.cardImgUrl = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
        this.cardTitle = 'Placeholder Title';
        this.cardBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in';
    }
    ngOnInit() {
        //Inicializando url de router detailsLink e parâmetros
        this.detailsLink = '/news-detail';
        this.detailsParams = { id: this.cardId, title: this.cardTitle };
        //Utilizando 'textToPrev' para encurtar o texto do titulo e fazer a prévia
        this.cardTitlePrev = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["textToPrev"])(this.cardTitle, 80);
        //Utilizando 'textToPrev' para encurtar o texto do body e fazer a prévia
        this.cardBodyPrev = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["textToPrev"])(this.cardBody, 97);
    }
    //Utilizando 'ngOnChanges' para modificar a prévia e parâmetro dinamicamente
    ngOnChanges(changes) {
        if (changes['cardTitle'] || changes['cardBody']) {
            this.cardTitlePrev = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["textToPrev"])(this.cardTitle, 80);
            this.cardBodyPrev = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["textToPrev"])(this.cardBody, 97);
            this.detailsParams = { id: this.cardId, title: this.cardTitle };
        }
        if (changes['cardId']) {
            this.detailsParams = { id: this.cardId, title: this.cardTitle };
        }
    }
    //Método responsável pela navegação do 'Ler mais'
    cardDetails() {
        if (this.isMoreNews) {
            this.router.navigate(['/more-news']);
        }
        else {
            Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["routeReuse"])(this.router, false);
            this.router.navigate([this.detailsLink], { queryParams: this.detailsParams });
        }
    }
}
NewsCardComponent.ɵfac = function NewsCardComponent_Factory(t) { return new (t || NewsCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NewsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsCardComponent, selectors: [["app-news-card"]], inputs: { cardImgUrl: ["img", "cardImgUrl"], cardTitle: ["title", "cardTitle"], cardBody: ["body", "cardBody"], cardId: ["id", "cardId"], isMoreNews: "isMoreNews" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 3, consts: [[1, "news-card", "box-shadow"], [1, "news-card-figure"], ["onerror", "this.src ='./assets/placeholderImg.jpg'", "alt", "Imagem da not\u00EDcia", 1, "news-card-figure-img", 3, "src"], [1, "news-card-content-div"], [1, "news-card-content"], [1, "title-div"], [1, "news-card-title"], [1, "paragraph-div"], [1, "news-card-paragraph"], [1, "proj-link", 3, "click"]], template: function NewsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsCardComponent_Template_button_click_11_listener() { return ctx.cardDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ler mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.cardImgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardTitlePrev);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardBodyPrev);
    } }, styles: [".news-card[_ngcontent-%COMP%]{\r\n    border: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.news-card-figure[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.news-card-figure-img[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 8px;\r\n    border-top-right-radius: 8px;\r\n    width: 100%;\r\n    height:20vw;\r\n    -o-object-fit: fill;\r\n       object-fit: fill;\r\n    overflow: hidden;\r\n}\r\n\r\n.news-card-content-div[_ngcontent-%COMP%]{\r\n    height:12vw;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.news-card-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    gap: 2.5%;\r\n    padding: 5%;\r\n    width: 80%;\r\n    height: 80%;\r\n}\r\n\r\n.title-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 30%;\r\n}\r\n\r\n.news-card-title[_ngcontent-%COMP%]{\r\n    word-wrap: break-word;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n            hyphens: auto;\r\n    text-wrap: wrap;\r\n}\r\n\r\n.paragraph-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    height: 50%;\r\n}\r\n\r\n.news-card-paragraph[_ngcontent-%COMP%]{\r\n    word-wrap: break-word;\r\n    overflow-wrap: break-word;\r\n    -webkit-hyphens: auto;\r\n            hyphens: auto;\r\n    text-wrap: wrap;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 900px) {\r\n    .news-card-figure-img[_ngcontent-%COMP%]{\r\n        height:45vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 1330px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 15vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 1100px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 20.5vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 1100px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 25vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 650px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 35vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 40vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 550px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 45vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 50vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 450px){\r\n    .news-card-content[_ngcontent-%COMP%]{\r\n        height: 100%;\r\n    }\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 65vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 350px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 80vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 300px){\r\n    .news-card-content-div[_ngcontent-%COMP%]{\r\n        height: 350px;\r\n    }\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1jYXJkL25ld3MtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBZ0I7T0FBaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQWE7WUFBYixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixxQkFBYTtZQUFiLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBLDRDQUE0Qzs7QUFDNUM7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1jYXJkL25ld3MtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtY2FyZHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQtZmlndXJle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQtZmlndXJlLWltZ3tcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoyMHZ3O1xyXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn0gICBcclxuXHJcbi5uZXdzLWNhcmQtY29udGVudC1kaXZ7XHJcbiAgICBoZWlnaHQ6MTJ2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLm5ld3MtY2FyZC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGdhcDogMi41JTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4udGl0bGUtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuLm5ld3MtY2FyZC10aXRsZXtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gICAgdGV4dC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucGFyYWdyYXBoLWRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQtcGFyYWdyYXBoe1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIGh5cGhlbnM6IGF1dG87XHJcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi8qIERlZmluaW5kbyByZXNwb25zaXZpZGFkZSBkbyAnbmV3cy1jYXJkJyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5uZXdzLWNhcmQtZmlndXJlLWltZ3tcclxuICAgICAgICBoZWlnaHQ6NDV2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMzBweCl7XHJcbiAgICAubmV3cy1jYXJkLWNvbnRlbnQtZGl2e1xyXG4gICAgICAgIGhlaWdodDogMTV2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCl7XHJcbiAgICAubmV3cy1jYXJkLWNvbnRlbnQtZGl2e1xyXG4gICAgICAgIGhlaWdodDogMjAuNXZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KXtcclxuICAgIC5uZXdzLWNhcmQtY29udGVudC1kaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpe1xyXG4gICAgLm5ld3MtY2FyZC1jb250ZW50LWRpdntcclxuICAgICAgICBoZWlnaHQ6IDM1dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAubmV3cy1jYXJkLWNvbnRlbnQtZGl2e1xyXG4gICAgICAgIGhlaWdodDogNDB2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KXtcclxuICAgIC5uZXdzLWNhcmQtY29udGVudC1kaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgLm5ld3MtY2FyZC1jb250ZW50LWRpdntcclxuICAgICAgICBoZWlnaHQ6IDUwdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCl7XHJcbiAgICAubmV3cy1jYXJkLWNvbnRlbnR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm5ld3MtY2FyZC1jb250ZW50LWRpdntcclxuICAgICAgICBoZWlnaHQ6IDY1dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgICAubmV3cy1jYXJkLWNvbnRlbnQtZGl2e1xyXG4gICAgICAgIGhlaWdodDogODB2dztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KXtcclxuICAgIC5uZXdzLWNhcmQtY29udGVudC1kaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-card',
                templateUrl: './news-card.component.html',
                styleUrls: ['./news-card.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { cardImgUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['img']
        }], cardTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], cardBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['body']
        }], cardId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['id']
        }], isMoreNews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/news-detail/news-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/news-detail/news-detail.component.ts ***!
  \******************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/newsUtils */ "./src/app/utils/newsUtils.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

//Importando função para transformar data do utils




class NewsDetailComponent {
    constructor(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        //Recebendo e tratando parâmetros da url
        this.route.queryParamMap.subscribe((param) => {
            this.paramId = +param.get('id');
        });
        //Invocando GET para gerar Objeto 'news'
        this.api.getNewsById(this.paramId).subscribe((data) => {
            this.NewsObj = data;
            //Tratando a 'News.createdAt' para data de detalhes
            this.cleanDate = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["transformDate"])(this.NewsObj.createdAt);
        });
        //Definindo estratégia de rota para impedir o Angular de usar a mesma rota e simular um 'page Refresh'
        Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["routeReuse"])(this.router, false);
    }
}
NewsDetailComponent.ɵfac = function NewsDetailComponent_Factory(t) { return new (t || NewsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NewsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsDetailComponent, selectors: [["app-news-detail"]], decls: 22, vars: 4, consts: [[1, "author-detail"], [1, "author-detail-figure", "box-shadow"], ["src", "./assets/blankUser.png", "alt", "author image"], [1, "news-detail-content"], [1, "news-detail-figure", "box-shadow"], ["onerror", "this.src='./assets/placeholderImg.jpg'", "alt", "Imagem da not\u00EDcia", 3, "src"], [1, "news-detail-text"], [1, "news-detail-paragraph"]], template: function NewsDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Escrito por: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Author P. H. PlaceHolder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Modificado em: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "figure", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cleanDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.NewsObj.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.NewsObj.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.NewsObj.body);
    } }, styles: [".author-detail[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]{\r\n    padding: 1.5%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: row;\r\n    gap: 5%;\r\n    justify-content: center;\r\n    align-items:center;\r\n    text-align: center;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]:hover{ \r\n    cursor: pointer;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border: 1px solid gray;\r\n    border-radius: 100%;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.author-detail-figure[_ngcontent-%COMP%]:hover   figcaption[_ngcontent-%COMP%]{ \r\n    text-decoration:underline;\r\n}\r\n\r\n.author-detail[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    padding-left: 5%;\r\n}\r\n\r\n.news-detail-figure[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.news-detail-figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 8px;\r\n    border-top-right-radius: 8px;\r\n    border-bottom: 1px solid grey;\r\n    max-height: 60vh;\r\n}\r\n\r\n.news-detail-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    text-align: left;\r\n    padding: 1%;\r\n}\r\n\r\n.news-detail-paragraph[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    text-align:start;\r\n    text-indent: 5%;\r\n    text-wrap:balance;\r\n    line-height: 200%;\r\n    line-break:loose;\r\n    padding: 2.5% 0;\r\n}\r\n\r\n@media (max-width: 300px) {\r\n   .author-detail-figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .author-detail[_ngcontent-%COMP%]{\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .author-detail[_ngcontent-%COMP%]   time[_ngcontent-%COMP%], time[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{ \r\n    text-align: center;\r\n    margin-top: 2.5%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0dBQ0c7SUFDQyxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO0lBQ0Esa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRob3ItZGV0YWlse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLmF1dGhvci1kZXRhaWwtZmlndXJle1xyXG4gICAgcGFkZGluZzogMS41JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBnYXA6IDUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5hdXRob3ItZGV0YWlsLWZpZ3VyZTpob3ZlcnsgXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hdXRob3ItZGV0YWlsLWZpZ3VyZSBpbWd7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYXV0aG9yLWRldGFpbC1maWd1cmU6aG92ZXIgZmlnY2FwdGlvbnsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYXV0aG9yLWRldGFpbCB0aW1le1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5uZXdzLWRldGFpbC1maWd1cmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59ICAgXHJcblxyXG4ubmV3cy1kZXRhaWwtZmlndXJlIGltZ3tcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICAgIG1heC1oZWlnaHQ6IDYwdmg7XHJcbn1cclxuXHJcbi5uZXdzLWRldGFpbC1maWd1cmUgZmlnY2FwdGlvbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ubmV3cy1kZXRhaWwtcGFyYWdyYXBoe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246c3RhcnQ7XHJcbiAgICB0ZXh0LWluZGVudDogNSU7XHJcbiAgICB0ZXh0LXdyYXA6YmFsYW5jZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMDAlO1xyXG4gICAgbGluZS1icmVhazpsb29zZTtcclxuICAgIHBhZGRpbmc6IDIuNSUgMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgIC5hdXRob3ItZGV0YWlsLWZpZ3VyZSBpbWd7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hdXRob3ItZGV0YWlse1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAuYXV0aG9yLWRldGFpbCB0aW1lLCB0aW1lIGJ7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-detail',
                templateUrl: './news-detail.component.html',
                styleUrls: ['./news-detail.component.css']
            }]
    }], function () { return [{ type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/news-page/news-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/news-page/news-page.component.ts ***!
  \**************************************************/
/*! exports provided: NewsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageComponent", function() { return NewsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/newsUtils */ "./src/app/utils/newsUtils.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../news-card/news-card.component */ "./src/app/news-card/news-card.component.ts");

//Importando funções de apoio do NewsUtils






function NewsPageComponent_app_news_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news-card", 4);
} if (rf & 2) {
    const news_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img", news_r1.image)("title", news_r1.title)("body", news_r1.body)("id", news_r1.id);
} }
class NewsPageComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        //Declarando array de 'News' e  Objeto 'News'
        this.loadedNewsArr = [];
    }
    ngOnInit() {
        //Retornando Observable<News[]> e definindo valor de newsArr
        this.api.getAllNews().subscribe((obsvNews) => {
            this.newsArr = obsvNews;
            if (this.router.url.includes('searchParams')) {
                let searchParam = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["routerUrlParams"])(this.router)['searchParams'];
                this.loadNews(searchParam);
            }
            else {
                this.initNews();
                this.setActiveCards();
            }
        });
        //Definindo estratégia de rota para impedir o Angular de usar a mesma rota e simular um 'page Refresh'
        Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["routeReuse"])(this.router, true);
    }
    //Método para carregar notícias no Array que gera 'news-card'
    initNews() {
        this.loadedNewsArr = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["moreItems"])(this.newsArr, this.loadedNewsArr, 6);
        this.setActiveCards();
    }
    //Método para retornar Array filtrado pela pesquisa
    searchedArray(searchString) {
        let finalString = searchString.toLowerCase();
        return Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["textFilter"])(this.newsArr, finalString);
    }
    //Método para fazer a lógica de pesquisa e inicialização do component
    loadNews(searchParam) {
        this.isSearchOn = true;
        this.loadedNewsArr = this.searchedArray(searchParam);
    }
    //Método para limpar Array modificado pela pesquisa
    cleanLoadedNews() {
        this.loadedNewsArr = [];
    }
    //Método para carregar mais 'news-card'
    loadMore() {
        if (this.isSearchOn) {
            this.cleanLoadedNews();
            this.isSearchOn = false;
        }
        this.loadedNewsArr = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_1__["moreItems"])(this.newsArr, this.loadedNewsArr, 6);
        this.setActiveCards();
        this.router.navigate([], { queryParams: { qty: this.numOfCards } });
    }
    //Método para dar update na propriedade 'numOfCards'
    setActiveCards() {
        this.numOfCards = this.loadedNewsArr.length;
    }
}
NewsPageComponent.ɵfac = function NewsPageComponent_Factory(t) { return new (t || NewsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NewsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsPageComponent, selectors: [["app-news-page"]], decls: 5, vars: 1, consts: [[1, "news-page"], ["class", "news-card-item", 3, "img", "title", "body", "id", 4, "ngFor", "ngForOf"], [1, "load-more-div"], [1, "proj-btn", 3, "click"], [1, "news-card-item", 3, "img", "title", "body", "id"]], template: function NewsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsPageComponent_app_news_card_1_Template, 1, 4, "app-news-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPageComponent_Template_button_click_3_listener() { return ctx.loadMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CARREGAR MAIS NOT\u00CDCIAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loadedNewsArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_5__["NewsCardComponent"]], styles: [".news-page[_ngcontent-%COMP%]{\r\n    display:flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n}\r\n\r\n.news-card-item[_ngcontent-%COMP%]{\r\n    width: 45%;\r\n    margin-bottom: 5% ;\r\n}\r\n\r\n.load-more-div[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    overflow: hidden;\r\n}\r\n\r\n.btn-div[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    width: 40%;\r\n    overflow: hidden;\r\n}\r\n\r\n@media (max-width: 900px) {\r\n    .news-card-item[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1wYWdlL25ld3MtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3cy1wYWdlL25ld3MtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtcGFnZXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXdzLWNhcmQtaXRlbXtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JSA7XHJcbn1cclxuXHJcbi5sb2FkLW1vcmUtZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idG4tZGl2e1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLm5ld3MtY2FyZC1pdGVte1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-news-page',
                templateUrl: './news-page.component.html',
                styleUrls: ['./news-page.component.css']
            }]
    }], function () { return [{ type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-header/page-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_newsUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/newsUtils */ "./src/app/utils/newsUtils.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



//Importando funções de apoio do NewsUtils




function PageHeaderComponent_p_3_b_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.headerSubtitleSearch);
} }
function PageHeaderComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageHeaderComponent_p_3_b_2_Template, 2, 1, "b", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.headerSubtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showSearch);
} }
class PageHeaderComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.headerSubtitleNum = 6;
        this.headerSubtitleSearch = '';
        //Propriedade para NgIf do subtitulo
        this.showSubtitle = true;
        this.showSearch = false;
    }
    ngOnInit() {
        //Escutando eventos de rota para modificar o component
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe(() => {
            let url = this.router.url;
            let params = Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_3__["routerUrlParams"])(this.router);
            if (params['title']) {
                this.showSubtitle = false;
                this.showSearch = false;
                this.headerTitle = params['title'];
            }
            else if (params['qty']) {
                this.showSubtitle = true;
                this.showSearch = false;
                this.headerSubtitleNum = params['qty'];
                this.headerInputs(url);
            }
            else if (params['searchParams']) {
                this.showSubtitle = true;
                this.showSearch = true;
                this.headerSubtitleSearch = params['searchParams'];
                this.headerInputs(url);
            }
            else {
                this.showSubtitle = true;
                this.showSearch = false;
                this.headerInputs(url);
            }
        });
    }
    //Método responsável por lidar com a lógica da definição do titulo e subtitulo do component
    headerInputs(url) {
        if (url.includes('/news-detail')) {
            this.headerTitle = 'Estou com sorte!';
            this.headerSubtitle = 'Pagina que te traz notícias aleatórias!';
        }
        else if (url.includes('/more-news')) {
            this.headerTitle = 'Crie sua Própria Notícia !';
            this.headerSubtitle = 'Preencha o Formulário, Poste e nos envie sua contribuição !';
        }
        else if (url.includes('searchParams')) {
            this.headerTitle = 'Sua Página de Notícias Feita em Angular 9!';
            this.headerSubtitle = `Aqui estão os resultados para sua busca: `;
        }
        else {
            this.headerTitle = 'Sua Página de Notícias Feita em Angular 9!';
            this.headerSubtitle = `Encontramos um total de ${this.headerSubtitleNum} resultados para sua busca`;
        }
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], inputs: { inputTitle: ["title", "inputTitle"], inputSubtitle: ["subtitle", "inputSubtitle"] }, decls: 4, vars: 2, consts: [[1, "page-header"], [1, "page-header-title"], ["class", "page-header-subtitle", 4, "ngIf"], [1, "page-header-subtitle"], [4, "ngIf"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageHeaderComponent_p_3_Template, 3, 2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSubtitle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".page-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 5%;\r\n}\r\n\r\n.page-header-title[_ngcontent-%COMP%]{\r\n    font-size: clamp(16px,5vw,30px);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgxNnB4LDV2dywzMHB4KTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-header',
                templateUrl: './page-header.component.html',
                styleUrls: ['./page-header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { inputTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['title']
        }], inputSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['subtitle']
        }] }); })();


/***/ }),

/***/ "./src/app/services/api-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api-service.service.ts ***!
  \*************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_news_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/news.model */ "./src/app/models/news.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
//Service responsável por lidar com requests GET e POST


//Importando model 'News' para formatação de dado



class ApiService {
    constructor(http) {
        this.http = http;
        //Declarando URL da api e seu escopo
        this.ApiUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post/';
    }
    //Método GET para retornar um Array de notícias → classe 'News'
    getAllNews() {
        //Retornando 'Observable' e utilizando o método pipe para transformar a data e validar a classe 
        return this.http.get(this.ApiUrl).pipe(
        //Validando 'Observable' como um Array de 'News'
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            //Definindo variáveis
            let transformedData;
            let validData;
            //Validando como Array
            if (Array.isArray(data)) {
                //Transformando items em News
                transformedData = data.map((item) => { return _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"].createNews(item); });
                validData = transformedData;
            }
            else {
                throw new Error('Observable is not an Array');
            }
            return validData;
        }));
    }
    //Método GET para retornar uma notícia especifica aceitando como parâmetro id:numero
    getNewsById(id) {
        //Definindo nova url com ID como parâmetro
        let IdUrl = `${this.ApiUrl}${id}`;
        //Definindo Object News para return
        let newsObj;
        //Retornando 'Observable" e utilizando pipe para transformar em 'News' e validação
        return this.http.get(IdUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            //Verificando se a request retorna apenas um item
            if (!Array.isArray(data)) {
                //Transformando resposta em 'News'
                newsObj = _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"].createNews(data);
                return newsObj;
            }
            else {
                throw new Error('Data return more than one item');
            }
        }));
    }
    //Método POST para gravar News criada
    postNews(data) {
        //Validando input do usuário como News Object
        if (data instanceof _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"]) {
            //Criando POST para envio dados
            return this.http.post(this.ApiUrl, data, {
                headers: { 'Content-type': 'application/json' },
                reportProgress: true
            });
        }
        else {
            throw new Error('POST not executed because Data is not valid News');
        }
    }
    //Método para criar um novo News.ID valido considerando numero de elementos retornados pelo GET
    getValidId() {
        //Definindo Array de items
        let itemsArr;
        //Definindo Array de items.id
        let idArr;
        //Chamando GET all
        return this.http.get(this.ApiUrl).pipe(
        //Tratando Observable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            itemsArr = data;
            //Validando itemsArr como Array
            if (Array.isArray(itemsArr)) {
                //Logica para retornar um Array de item.id ordenado
                let stringIdArr = data.map((item) => { return item.id; });
                idArr = stringIdArr.map((item) => parseInt(item));
                idArr.sort((a, b) => a - b);
                //Validando idArr e definindo o próximo validId
                if (idArr.length > 0) {
                    let validId = idArr[idArr.length - 1] + 1;
                    return validId;
                }
                else {
                    throw new Error('idArr is empty');
                }
            }
            else {
                throw new Error("couldn't get valid ID");
            }
        }));
    }
    ;
    //Método para gerar News.ID randômica para o 'Estou com sorte' do 'side-menu'
    getRndId() {
        //Definindo Array de News
        let newsArr;
        //Definindo Array de News.id
        let idArr;
        //Definindo ID randômico de retorno
        let rndId;
        //Chamando GET all
        return this.getAllNews().pipe(
        //Tratando Observable
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            newsArr = data;
            //Validando newsArr como Array
            if (Array.isArray(newsArr)) {
                //Logica para retornar um Array de News.id 
                idArr = data.map((news) => { return news.id; });
                //Validando idArr e definindo o ID randômico
                if (idArr.length > 0 && idArr.length === 1) {
                    rndId = idArr[0];
                    return rndId;
                }
                else if (idArr.length > 1) {
                    //Lógica para gerar o rndID e validar se ele pertence ao idArr
                    idArr.sort((a, b) => a - b);
                    do {
                        rndId = Math.floor(Math.random() * (idArr[idArr.length - 1]));
                    } while (!idArr.some(element => element === rndId));
                    return rndId;
                }
                else {
                    throw new Error('idArr is empty');
                }
            }
            else {
                throw new Error("couldn't get rndID");
            }
        }));
    }
    ;
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/side-menu/side-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/side-menu/side-menu.component.ts ***!
  \**************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils_newsUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/newsUtils */ "./src/app/utils/newsUtils.ts");
/* harmony import */ var _services_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-service.service */ "./src/app/services/api-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



//Importando função para transformar data do utils





class SideMenuComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        //Declarando place holder
        this.searchPlaceHolder = 'Pesquisar por...';
    }
    ngOnInit() {
        //Atribuindo primeiro valor a randomId
        this.api.getRndId().subscribe((data) => {
            this.randomId = data;
            //Atribuindo valor a propriedade de parâmetro assincronamente para esperar randomId ter valor e evitar 'undefined'
            this.detailsParams = { id: this.randomId, sorte: 1 };
        });
        //Verificando alteração no router para gerar nova randomId
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe(() => {
            //Reatribuindo valor a randomId
            this.api.getRndId().subscribe((data) => {
                this.randomId = data;
                this.detailsParams = { id: this.randomId, sorte: 1 };
            });
        });
        //Inicializando valores de rotas
        this.searchNewsRoute = './';
        this.moreNewsRoute = "/more-news";
        this.newsDetailRoute = "/news-detail";
    }
    //Método para atualizar parâmetros de busca
    searchNewsUpdate() {
        this.searchParams = { searchParams: this.searchText };
    }
    //Método responsável por executar a busca
    searchNews() {
        if (this.searchText) {
            Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_3__["routeReuse"])(this.router, false);
            this.router.navigate([this.searchNewsRoute], { queryParams: this.searchParams });
        }
        else {
            this.searchPlaceHolder = 'Texto inválido';
            setInterval(() => { this.searchPlaceHolder = 'Pesquisar por...'; }, 3000);
        }
        this.searchText = '';
    }
    //Método responsável por definir estratégia de rota para impedir o Angular de usar a mesma rota e simular um 'page Refresh'
    reRoute() {
        Object(_utils_newsUtils__WEBPACK_IMPORTED_MODULE_3__["routeReuse"])(this.router, false);
    }
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["app-side-menu"]], inputs: { searchText: "searchText" }, decls: 37, vars: 5, consts: [[1, "side-bar-section"], [1, "side-bar-section-category-div"], ["name", "side-bar-section-category-title"], ["name", "side-bar-section-category-list"], [1, "category-list-item"], ["href", "./"], [1, "side-bar-section-search-div"], ["for", "search-input", 1, "search-div-title"], [1, "search-div-input", "box-shadow"], ["id", "search-input", "type", "text", "required", "", 3, "ngModel", "placeholder", "ngModelChange", "change"], [3, "click"], [1, "nav-bar"], [1, "home-div"], ["href", "./", 1, "proj-link"], ["src", "./assets/home.png", "alt", "home icon"], [1, "proj-link", 3, "routerLink", "queryParams", "click"], [1, "proj-link", 3, "routerLink", "click"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Procurando alguma not\u00EDcia?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SideMenuComponent_Template_input_ngModelChange_21_listener($event) { return ctx.searchText = $event; })("change", function SideMenuComponent_Template_input_change_21_listener() { return ctx.searchNewsUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_button_click_22_listener() { return ctx.searchNews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "In\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_a_click_32_listener() { return ctx.reRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Estou com sorte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_a_click_35_listener() { return ctx.reRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sua Not\u00EDcia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.searchPlaceHolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.newsDetailRoute)("queryParams", ctx.detailsParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.moreNewsRoute);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".side-bar-section[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: top;\r\n    gap: 20px;\r\n    height: 100%;\r\n}\r\n\r\n.side-bar-section-category-div[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n}\r\n\r\n.category-list-item[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    border-bottom: 1px solid gray;\r\n    padding: 5% 0;\r\n}\r\n\r\n.category-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.side-bar-section-search-div[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n}\r\n\r\n.search-div-title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    text-wrap: nowrap;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]{\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    padding: 5% 2.5% 5% 2.5% ;\r\n    margin-top: 2.5%;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]:focus-within{\r\n    border: 1px solid rgb(0, 175, 175);\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:invalid{\r\n    color: red;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    height: 20px;\r\n    min-width: 18px;\r\n    min-height: 15px;\r\n    overflow: visible; \r\n    background-image: url('lupa.png');\r\n    background-size:contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    background-size: 110%;\r\n}\r\n\r\n.search-div-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    align-items: center;\r\n    width: 50%;\r\n}\r\n\r\n.home-div[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.home-div[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 2%;\r\n    align-items: center;\r\n}\r\n\r\n.home-div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border:none;\r\n    box-shadow:none;\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    gap: 5px;\r\n}\r\n\r\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    text-wrap: nowrap;\r\n    text-align: left;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .side-bar-section-category-div[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n\r\n    .side-bar-section-search-div[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n\r\n    .nav-bar[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n@media (max-width: 880px) {\r\n    .search-div-title[_ngcontent-%COMP%]{\r\n        text-wrap: wrap;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUFnRDtJQUNoRCx1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLWJhci1zZWN0aW9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlLWJhci1zZWN0aW9uLWNhdGVnb3J5LWRpdntcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1saXN0LWl0ZW17XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBwYWRkaW5nOiA1JSAwO1xyXG59XHJcblxyXG4uY2F0ZWdvcnktbGlzdC1pdGVtIGF7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNpZGUtYmFyLXNlY3Rpb24tc2VhcmNoLWRpdntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2VhcmNoLWRpdi10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5zZWFyY2gtZGl2LWlucHV0e1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOiA1JSAyLjUlIDUlIDIuNSUgO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYtaW5wdXQ6Zm9jdXMtd2l0aGlue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE3NSwgMTc1KTtcclxufVxyXG5cclxuLnNlYXJjaC1kaXYtaW5wdXQgaW5wdXQ6aW52YWxpZHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtZGl2LWlucHV0IGJ1dHRvbntcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDE4cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy9sdXBhLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uc2VhcmNoLWRpdi1pbnB1dCBidXR0b246aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCU7XHJcbn0gICBcclxuXHJcbi5zZWFyY2gtZGl2LWlucHV0IGlucHV0LGJ1dHRvbntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4ubmF2LWJhcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSBcclxuXHJcbi5ob21lLWRpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1kaXYgZmlndXJle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBnYXA6IDIlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhvbWUtZGl2IGltZ3tcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm94LXNoYWRvdzpub25lO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5uYXYtYmFyIHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4ubmF2LWJhciB1bCBsaXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnNpZGUtYmFyLXNlY3Rpb24tY2F0ZWdvcnktZGl2e1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtYmFyLXNlY3Rpb24tc2VhcmNoLWRpdntcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtYmFye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gICAgLnNlYXJjaC1kaXYtdGl0bGV7XHJcbiAgICAgICAgdGV4dC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-menu',
                templateUrl: './side-menu.component.html',
                styleUrls: ['./side-menu.component.css']
            }]
    }], function () { return [{ type: _services_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { searchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/utils/newsUtils.ts":
/*!************************************!*\
  !*** ./src/app/utils/newsUtils.ts ***!
  \************************************/
/*! exports provided: textToPrev, transformDate, moreItems, textFilter, routerUrlParams, routeReuse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textToPrev", function() { return textToPrev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformDate", function() { return transformDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moreItems", function() { return moreItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textFilter", function() { return textFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerUrlParams", function() { return routerUrlParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeReuse", function() { return routeReuse; });
//Arquivo utils para funções de apoio
//Função para encurtar texto com finalidade de criar os 'news-card'
function textToPrev(text, index) {
    let preview;
    if (text.length > index) {
        preview = text.slice(0, index);
    }
    else {
        return preview = text;
    }
    return `${preview}...`;
}
//Função para transformar Data em string
function transformDate(date) {
    let newDate = new Date(date);
    let dia = newDate.toLocaleString('default', { day: 'numeric' });
    let mes = newDate.toLocaleString('default', { month: 'short' });
    let ano = newDate.toLocaleString('default', { year: 'numeric' });
    let cleanDate = `${dia} ${mes} ${ano}`;
    return cleanDate;
}
//Função para adicionar uma quantidade predefinida de itens de um Array em outro
function moreItems(forArr, pushArr, num) {
    let index = pushArr.length;
    let untilNum;
    if (pushArr.length > 0) {
        untilNum = (pushArr.length - 1) + num;
    }
    else {
        untilNum = num - 1;
    }
    if (untilNum >= forArr.length - 1) {
        untilNum = forArr.length - 1;
    }
    else { }
    ;
    for (let i = index; i <= untilNum; i++) {
        pushArr.push(forArr[i]);
    }
    return pushArr;
}
//Função para verificar se o Array de Objeto 'News' contêm o texto passado como parâmetro 
function textFilter(newsArr, text) {
    let filteredArr = newsArr.filter((news) => news.title.toLowerCase().includes(text) || news.body.toLowerCase().includes(text));
    return filteredArr;
}
//Função para retornar os QueryParams de uma url
function routerUrlParams(router) {
    let url = router.url;
    let urlDetails = router.parseUrl(url);
    let queryParams = urlDetails.queryParams;
    return queryParams;
}
//Método para redefinir a estratégia de reuso do router
function routeReuse(router, bol) {
    router.routeReuseStrategy.shouldReuseRoute = () => { return bol; };
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Scobinow\Desktop\proj1\marlin-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map