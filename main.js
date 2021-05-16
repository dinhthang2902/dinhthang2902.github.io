(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tom Pham\Desktop\CSE2ICE\example2\src\main.ts */"zUnb");


/***/ }),

/***/ "4hPz":
/*!********************************!*\
  !*** ./src/app/classes/tip.ts ***!
  \********************************/
/*! exports provided: Tip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tip", function() { return Tip; });
class Tip {
    constructor(source, hteam, ateam, tip, hconfidence, margin) {
        this.source = source;
        this.hteam = hteam;
        this.ateam = ateam;
        this.tip = tip;
        this.hconfidence = hconfidence;
        this.aconfidence = (100.00 - parseFloat(hconfidence)).toFixed(2);
        this.margin = margin;
    }
}


/***/ }),

/***/ "AytR":
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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 33, vars: 0, consts: [["id", "carouselExampleControls", "data-bs-ride", "carousel", 1, "carousel"], ["position", "block", "width", "", 1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://resources.afl.com.au/photo-resources/2019/12/05/9afccce2-87db-4a20-abcc-0c62c6516b3d/afl-logo.png?width=1200&height=630", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "https://resources.richmondfc.com.au/photo-resources/2021/05/15/ebdac12b-70e5-4aa6-8f8e-4fa993d05564/4HmNKZ8g.jpg?width=952&height=600", "alt", "...", 1, "d-block", "w-100"], ["src", "https://www.marketsports.com.au/assets/website_logo.png", "alt", "...", 1, "d-block", "w-100"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleControls", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to AFL team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "What is AFL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The Australian Football League (AFL) is the pre-eminent and only fully professional men's competition of Australian rules football. Through the AFL Commission, the AFL also serves as the sport's governing body and is responsible for controlling the laws of the game. Originally known as the Victorian Football League (VFL), it was founded in 1896 as a breakaway competition from the Victorian Football Association (VFA), with its inaugural season commencing the following year. The VFL, aiming to become a national competition, began expanding beyond Victoria to other Australian states in the 1980s, and changed its name to the AFL in 1990. The league currently consists of 18 teams spread over five of Australia's six states (Tasmania being the exception), although there has been a lot of support for a team to be moved to or created in Tasmania. Matches have been played in all states and mainland territories of Australia, as well as in New Zealand and China to promote the sport abroad. The AFL season currently consists of a 23-round regular (or \"home-and-away\") season, which runs during the Australian winter (March to September). The team with the best record after the home-and-away series is awarded the \"minor premiership\". The top eight teams then play off in a four-round finals series, culminating in the AFL Grand Final, which is held at the Melbourne Cricket Ground each year. The grand final winner is termed the \"premiers\", and is awarded the premiership cup. The current premiers are Richmond, who won the 2020 AFL Grand Final in the first-ever night grand final.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Origins Melbourne was a burgeoning city built on the riches of the 1850s gold rush by the time Australian football first appeared in 1858. As with other areas of British settlement during the 19th century, cricket emerged as the primary summer sport. Concerned about off-season fitness, cricketer Thomas Wentworth Wills (1835\u201380), who was born in Australia but educated at Rugby School in England\u2014where he captained the cricket team and excelled in football\u2014believed that a football club should be formed to keep his teammates fit during winter. The Melbourne Cricket Club agreed with Wills\u2019s suggestion and, as there were no standardized football codes at that time, appointed a committee to devise a set of rules. The Melbourne and Geelong football clubs were established in 1858 and 1859, respectively, and are two of the oldest football clubs in the world. The rules agreed to by the committee on May 17, 1859, were a compromise between those of several English public schools, notably Winchester, Harrow, and Rugby. Players were allowed to handle the ball but not to run farther than necessary to kick it. In 1866 H.C.A. Harrison (1836\u20131929), a cousin of Wills, rewrote the rules. These rules imposed no limit on the number of players, though in the 1880s, 20 men per team became standard. Concerned about the possibility of injury on the hard Australian grounds, players were reluctant to commit to the tackling and hacking (kicking or tripping an opponent) rules of the Rugby School game, and hacking was banned. Distinctive aspects of Australian football rapidly appeared. At the outset, a provision was made that players who caught, or \u201Cmarked,\u201D a ball cleanly in the air were allowed a free kick. Players could also retain possession of the ball while running, but after some dispute it was agreed in 1865 that the player with the ball had to bounce it off the turf at least every 10 metres (33 feet). Most crucial, and in contrast to other football sports, there was no offside rule, which meant that players from each team were located behind and in front of the ball during play. By 1874 players no longer scored by carrying the ball between goal posts but scored by kicking the ball through them. Australian rules football also developed a unique set of goalposts, comprising two large goalposts flanked by two shorter \u201Cbehind\u201D posts. The centre bounce used by umpires to start games and to restart play after a goal was instituted in 1891 and also remains unique to Australian football. Goal umpires were first mentioned in 1874 in accounts of the game. The practice of the goal umpire\u2019s waving a flag to signal a goal began in Tasmania in 1884 and was adopted in Victoria in 1886. The game expanded rapidly during the 1870s and \u201980s. In the\u201970s, matches between the Melbourne and Carlton football clubs attracted as many as 10,000 spectators, who at that time watched for free. Spectators often encroached on the playing surface, and this led to the enclosure of grounds for ease of play. The first facility built specifically for Australian football use appeared in 1876 on land leased by Carlton from Melbourne University. The first Carlton-Melbourne game at the ground attracted 5,000 spectators. By the mid-\u201980s crowds approaching 34,000 were attending matches between leading clubs. On May 7, 1877, representatives of the Albert Park, Carlton, East Melbourne, Essendon, Geelong, Hotham, Melbourne, and St Kilda football clubs met to form the Victorian Football Association (VFA) for the \u201Cpromotion and extension of football throughout the colony\u201D and the organization of intercolonial matches. During the 1870s over 125 clubs appeared in Melbourne, and another 60 senior clubs were established elsewhere in Victoria. A regular schedule of matches was developed; additional grounds were enclosed; and VFA clubs were able to charge admission. The game continued to spread throughout the colonies. In 1877 the South Australian Football Association was formed. Tasmania accepted VFA rules in 1882, and in 1885 the Western Australian Football Association was established. Despite these successes, the game struggled to gain a foothold in the northeastern parts of Australia. The first game in Sydney took place in 1877, but rugby union, with its imperial connections, was favoured by the 1890s. A similar process occurred in Queensland and New Zealand. The great distances that separated colonies and the capital cities meant that regular competition between clubs from different areas was not possible, and indeed the first participation of an interstate team in the main Victorian competition did not occur until 1982. However, because road games between Victorian teams were often only a tram ride away, many fans could go to all of their team\u2019s games in any given season at little expense.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "Byjh":
/*!*************************************!*\
  !*** ./src/app/classes/standing.ts ***!
  \*************************************/
/*! exports provided: Standing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Standing", function() { return Standing; });
class Standing {
    constructor(draws, wins, rank, behinds_against, played, behinds_for, against, id, losses, percentage, pts, goals_for, goals_against, name) {
        this.draws = draws;
        this.wins = wins;
        this.rank = rank;
        this.behinds_against = behinds_against;
        this.played = played;
        this.behinds_for = behinds_for;
        this.against = against;
        this.id = id;
        this.losses = losses;
        this.percentage = percentage;
        this.pts = pts;
        this.goals_for = goals_for;
        this.goals_against = goals_against;
        this.name = name;
    }
}


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/game */ "LYyA");
/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/player */ "dGWY");
/* harmony import */ var _classes_standing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/standing */ "Byjh");
/* harmony import */ var _classes_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/team */ "W2TK");
/* harmony import */ var _classes_tip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/tip */ "4hPz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








class DataService {
    constructor(http) {
        this.http = http;
    }
    getTeam() {
        return this.http.get('https://api.squiggle.com.au/?q=teams').
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.teams.map((item) => new _classes_team__WEBPACK_IMPORTED_MODULE_4__["Team"](item.name, item.logo, item.id, item.abbrev))));
    }
    getGame() {
        return this.http.get('https://api.squiggle.com.au/?q=games').
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.games.map((item) => new _classes_game__WEBPACK_IMPORTED_MODULE_1__["Game"](item.hteamid, item.ateamid, item.hteam, item.ateam, item.winner, item.hscore, item.ascore, item.roundname, item.winnerteamid, item.complete, item.year, item.venue, item.localtime, item.date, item.id, item.round))));
    }
    getTip(game = 1, year = '2021', round = 20) {
        return this.http.get(`https://api.squiggle.com.au/?q=tips&game=${game}&year=${year}&round=${round}`).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.tips.map((item) => new _classes_tip__WEBPACK_IMPORTED_MODULE_5__["Tip"](item.source, item.hteam, item.ateam, item.tip, item.hconfidence, item.margin))));
    }
    getPlayers() {
        return this.http.get(`https://api.squiggle.com.au/?q=pav`).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.pav.map((item) => new _classes_player__WEBPACK_IMPORTED_MODULE_2__["Player"](item.PAV_def, item.year, item.PAV_total_rank, item.PAV_off, item.mPAV_def, item.pavid, item.team, item.PAV_mid, item.PAV_mid_rank, item.surname, item.mPAV_rank, item.PAV_def_rank, item.mPAV_total, item.PAV_total, item.firstname, item.PAV_off_rank, item.mPAV_mid, item.mPAV_off, item.name, item.games))));
    }
    getStanding(year = '2021', round = 20) {
        return this.http.get(`https://api.squiggle.com.au/?q=standings&&year=${year}&round=${round}`).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.standings.map((item) => new _classes_standing__WEBPACK_IMPORTED_MODULE_3__["Standing"](item.draws, item.wins, item.rank, item.behinds_against, item.played, item.behinds_for, item.against, item.id, item.losses, item.percentage, item.pts, item.goals_for, item.goals_against, item.name))));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Kh+o":
/*!*******************************************!*\
  !*** ./src/app/classes/table-template.ts ***!
  \*******************************************/
/*! exports provided: TableTemplate, Generic, DataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableTemplate", function() { return TableTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generic", function() { return Generic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTable", function() { return DataTable; });
class TableTemplate {
    constructor(data, headerName, template) {
        this.data = data;
        this.headerName = headerName;
        this.template = template;
    }
}
class Generic {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class DataTable {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}


/***/ }),

/***/ "LYyA":
/*!*********************************!*\
  !*** ./src/app/classes/game.ts ***!
  \*********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Game {
    constructor(hteamid, ateamid, hteam, ateam, winner, hscore, ascore, roundname, winnerteamid, complete, year, venue, localtime, date, id, round) {
        this.ateamid = ateamid;
        this.hteamid = hteamid;
        this.hteam = hteam;
        this.ateam = ateam;
        this.winner = winner;
        this.hscore = hscore;
        this.ascore = ascore;
        this.roundname = roundname;
        this.winnerteamid = winnerteamid;
        this.complete = complete;
        this.year = year;
        this.venue = venue;
        this.localtime = localtime;
        this.date = date;
        this.id = id;
        this.round = round;
    }
    setTip(tip) {
        this.tip = tip;
    }
}


/***/ }),

/***/ "Mqhm":
/*!*****************************************************!*\
  !*** ./src/app/components/match/match.component.ts ***!
  \*****************************************************/
/*! exports provided: MatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchComponent", function() { return MatchComponent; });
/* harmony import */ var src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/table-template */ "Kh+o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/logo/logo.component */ "fpls");
/* harmony import */ var _common_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/table/table.component */ "x/F5");






function MatchComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatchComponent_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const team_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSelect(team_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r0.selectedTeam && team_r2.id == ctx_r0.selectedTeam.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r2.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", team_r2.name, " ");
} }
function MatchComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-logo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Results of all the matches played and next 4 games of my team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-logo", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-logo", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " has won this season so far ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("team", ctx_r1.selectedTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedTeam.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("team", ctx_r1.selectedTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedTeam.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("temp", ctx_r1.gameTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Venues where ", ctx_r1.selectedTeam.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("team", ctx_r1.selectedTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("temp", ctx_r1.venueTemp);
} }
const roundNum = 4;
class MatchComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.gameTemplate = ["Date", "Home Team", "Score", "Away Team", "Result"];
        this.venueTemplate = ["Rival Team", "Venue"];
    }
    ngOnInit() {
        this.getGame();
        this.getAllTeams();
    }
    onSelect(team) {
        this.selectedTeam = team;
        let currentYear = new Date().getFullYear();
        let tempArr = this.games.filter(game => (team && game.year == currentYear
            && (game.hteamid == team.id
                || game.ateamid === team.id)));
        let round = tempArr.filter(game => game.complete === 100).length + 4;
        console.log(round);
        let dtaTables = tempArr
            .filter(game => game.round <= round)
            .map((game) => {
            let dtaTable = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["DataTable"]();
            this.gameTemplate.forEach((item) => {
                dtaTable.add(this.getGeneric(item, game));
            });
            return dtaTable;
        });
        let dtaVenue = tempArr
            .filter(game => game.winnerteamid == this.selectedTeam.id)
            .map((game) => {
            let dtaTable = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["DataTable"]();
            this.venueTemplate.forEach((item) => {
                dtaTable.add(this.getGeneric(item, game));
            });
            return dtaTable;
        });
        this.gameTemp = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["TableTemplate"](dtaTables, this.gameTemplate, "20% 25% 20% 25% 10%");
        this.venueTemp = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["TableTemplate"](dtaVenue, this.venueTemplate, "40% 60%");
    }
    getGeneric(value, data) {
        const { date, ateam, hteam, ascore, hscore, venue, hteamid } = data;
        switch (value) {
            case "Rival Team":
                let rivalTeam = hteamid == this.selectedTeam.id ? ateam : hteam;
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, rivalTeam);
            case "Venue":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, venue);
            case "Date":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, date);
            case "Home Team":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, hteam);
            case "Score":
                let score = `${hscore} - ${ascore}`;
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, score);
            case "Away Team":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, ateam);
            case "Result":
            default:
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, this.getResult(data));
        }
    }
    getAllTeams() {
        this.dataService.getTeam().subscribe(temp => {
            this.teams = temp;
            this.getPlayers();
        });
    }
    getPlayers() {
        this.dataService.getPlayers().subscribe((temp) => {
            this.teams.forEach((team) => {
                let pav;
                pav = temp.filter((player) => player.team == team.id);
                team.setPlayer(pav);
            });
        });
    }
    getGame() {
        this.dataService.getGame().subscribe(temp => {
            this.games = temp;
        });
    }
    getTip(game = 1, year = '2021', round = 20) {
        let tips = [];
        this.dataService.getTip(game, year, round).subscribe(temp => {
            temp.forEach((item) => {
                tips.push(item);
            });
        });
        return tips;
    }
    getResult(data) {
        return !data.winnerteamid ? '' : data.winnerteamid == this.selectedTeam.id ? 'W' : 'L';
    }
}
MatchComponent.ɵfac = function MatchComponent_Factory(t) { return new (t || MatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
MatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatchComponent, selectors: [["app-match"]], decls: 15, vars: 2, consts: [[2, "text-align", "center"], [1, "match"], [1, "dropdown"], ["id", "prediction___dropdownselectteam", "type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", "match-dropdown-button"], [1, "caret"], ["aria-labelledby", "prediction___dropdownselectteam", 1, "dropdown-menu", "match-dropdown-menu"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "match-content", 4, "ngIf"], [3, "click"], [1, "match-logo", 3, "src"], [1, "match-content"], ["height", "50%", "width", "50%", 3, "team"], [1, "match-content-title"], ["height", "5%", "width", "5%", 3, "team"], [3, "temp"]], template: function MatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome to Game Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Click on \"Select your favourite team\" to see Team details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Select your favourite team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MatchComponent_li_13_Template, 3, 5, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MatchComponent_div_14_Template, 14, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedTeam);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _common_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]], styles: [".match[_ngcontent-%COMP%] {\r\n\r\n    margin: 5rem 1rem;\r\n\r\n}\r\n\r\n.match[_ngcontent-%COMP%]   .match-dropdown-button[_ngcontent-%COMP%], .match[_ngcontent-%COMP%]   .match-dropdown-menu[_ngcontent-%COMP%] {\r\n\r\n    border-radius: 0 !important;\r\n\r\n}\r\n\r\n.match[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n\r\n    margin: 7rem 0;\r\n\r\n}\r\n\r\n.match[_ngcontent-%COMP%]   .match-logo[_ngcontent-%COMP%] {\r\n\r\n    width: 10%;\r\n    height: 10%;\r\n\r\n}\r\n\r\n.match[_ngcontent-%COMP%]   .match-content[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 1rem 0;\r\n    width: 100%\r\n\r\n}\r\n\r\n.match-content-title[_ngcontent-%COMP%] {\r\n\r\n    margin: 1rem 0;\r\n    text-align: center;\r\n\r\n}\r\n\r\napp-table[_ngcontent-%COMP%] {\r\n\r\n    width: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCOztBQUVyQjs7QUFFQTs7O0lBR0ksMkJBQTJCOztBQUUvQjs7QUFFQTs7SUFFSSxjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVzs7QUFFZjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkOztBQUVKOztBQUVBOztJQUVJLGNBQWM7SUFDZCxrQkFBa0I7O0FBRXRCOztBQUVBOztJQUVJLFdBQVc7O0FBRWYiLCJmaWxlIjoibWF0Y2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRjaCB7XHJcblxyXG4gICAgbWFyZ2luOiA1cmVtIDFyZW07XHJcblxyXG59XHJcblxyXG4ubWF0Y2ggLm1hdGNoLWRyb3Bkb3duLWJ1dHRvbixcclxuLm1hdGNoIC5tYXRjaC1kcm9wZG93bi1tZW51IHtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0Y2ggLmRyb3Bkb3duLW1lbnUge1xyXG5cclxuICAgIG1hcmdpbjogN3JlbSAwO1xyXG5cclxufVxyXG5cclxuLm1hdGNoIC5tYXRjaC1sb2dvIHtcclxuXHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcblxyXG59XHJcblxyXG4ubWF0Y2ggLm1hdGNoLWNvbnRlbnQge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICB3aWR0aDogMTAwJVxyXG5cclxufVxyXG5cclxuLm1hdGNoLWNvbnRlbnQtdGl0bGUge1xyXG5cclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuYXBwLXRhYmxlIHtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'new-squiggle-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 0, consts: [[1, "main", "container-fruits"], [1, "nav", "justify-content-start"], [1, "nav-item"], ["routerLink", "/home", 1, "nav-link", "active"], [1, "nav", "justify-content-end", "main___menu"], [1, "bi", "bi-list", "main___icon-menu"], [1, "nav", "justify-content-end", "main___content-menu"], [1, "nav-item", "main___content-menu-item"], ["routerLink", "/match", 1, "nav-link", "active"], ["routerLink", "/prediction", 1, "nav-link"], ["routerLink", "/rivalmatch", 1, "nav-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Prediction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Rival Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\r\n\r\n    position: absolute;\r\n    display: flex;\r\n    width: 100%;\r\n    top: 0px;\r\n    justify-content: space-between;\r\n    background-color: #7952b3;\r\n    z-index: 1030;\r\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {\r\n    height: 4rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n\r\n    color: #fff;\r\n    opacity: 0.5;\r\n    transition: all 0.2s ease-in-out;\r\n\r\n}\r\n\r\n.main[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n\r\n    opacity: 1;\r\n    font-size: 1.25rem;\r\n\r\n}\r\n\r\n.main___menu[_ngcontent-%COMP%]   .main___icon-menu[_ngcontent-%COMP%] {\r\n\r\n    display: none;\r\n\r\n}\r\n\r\n@media screen and (max-width: 425px) {\r\n\r\n    .main___menu[_ngcontent-%COMP%] {\r\n\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        color: #fff;\r\n\r\n    }\r\n\r\n    .main___menu[_ngcontent-%COMP%]   .main___icon-menu[_ngcontent-%COMP%] {\r\n\r\n        display: inline;\r\n        margin: 0 1.5rem 0.25rem 1.5rem;\r\n        font-size: 1.75rem;\r\n\r\n    }\r\n\r\n    .main___menu[_ngcontent-%COMP%]:hover   .main___content-menu[_ngcontent-%COMP%] {\r\n\r\n        transform: translateY(24rem);\r\n\r\n    }\r\n    \r\n    .main___menu[_ngcontent-%COMP%]   .main___content-menu[_ngcontent-%COMP%] {\r\n\r\n        position: absolute;\r\n        flex-direction: column;\r\n        flex-wrap:  nowrap;\r\n        background-color: #7952b3;\r\n        top: -20rem;\r\n        right: 0;\r\n        height: auto !important;\r\n        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\r\n        transition:  all 1s ease-in-out;\r\n        z-index: -1;\r\n\r\n    }\r\n\r\n    .main___menu[_ngcontent-%COMP%]   .main___content-menu[_ngcontent-%COMP%]   .main___content-menu-item[_ngcontent-%COMP%], .main___menu[_ngcontent-%COMP%]   .main___content-menu[_ngcontent-%COMP%]   .main___content-menu-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n\r\n        z-index: -1;\r\n\r\n    }\r\n\r\n    .main___menu[_ngcontent-%COMP%]   .main___content-menu[_ngcontent-%COMP%]   .main___content-menu-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n\r\n        opacity: 1;\r\n        transform: none;\r\n        font-size: 1rem;\r\n    \r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsV0FBVztJQUNYLFFBQVE7SUFDUiw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwwQ0FBMEM7O0FBRTlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQzs7QUFFcEM7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGtCQUFrQjs7QUFFdEI7O0FBRUE7O0lBRUksYUFBYTs7QUFFakI7O0FBRUE7O0lBRUk7O1FBRUksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsV0FBVzs7SUFFZjs7SUFFQTs7UUFFSSxlQUFlO1FBQ2YsK0JBQStCO1FBQy9CLGtCQUFrQjs7SUFFdEI7O0lBRUE7O1FBRUksNEJBQTRCOztJQUVoQzs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsV0FBVztRQUNYLFFBQVE7UUFDUix1QkFBdUI7UUFDdkIsMENBQTBDO1FBQzFDLCtCQUErQjtRQUMvQixXQUFXOztJQUVmOztJQUVBOzs7UUFHSSxXQUFXOztJQUVmOztJQUVBOztRQUVJLFVBQVU7UUFDVixlQUFlO1FBQ2YsZUFBZTs7SUFFbkI7O0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1MmIzO1xyXG4gICAgei1pbmRleDogMTAzMDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuXHJcbn1cclxuXHJcbi5tYWluIC5uYXYge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5tYWluIC5uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcblxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuXHJcbi5tYWluIC5uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XHJcblxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuXHJcbn1cclxuXHJcbi5tYWluX19fbWVudSAubWFpbl9fX2ljb24tbWVudSB7XHJcblxyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcblxyXG4gICAgLm1haW5fX19tZW51IHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAubWFpbl9fX21lbnUgLm1haW5fX19pY29uLW1lbnUge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEuNXJlbSAwLjI1cmVtIDEuNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5tYWluX19fbWVudTpob3ZlciAubWFpbl9fX2NvbnRlbnQtbWVudSB7XHJcblxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNHJlbSk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFpbl9fX21lbnUgLm1haW5fX19jb250ZW50LW1lbnUge1xyXG5cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LXdyYXA6ICBub3dyYXA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTJiMztcclxuICAgICAgICB0b3A6IC0yMHJlbTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogIGFsbCAxcyBlYXNlLWluLW91dDtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5fX19tZW51IC5tYWluX19fY29udGVudC1tZW51IC5tYWluX19fY29udGVudC1tZW51LWl0ZW0sXHJcbiAgICAubWFpbl9fX21lbnUgLm1haW5fX19jb250ZW50LW1lbnUgLm1haW5fX19jb250ZW50LW1lbnUtaXRlbSAubmF2LWxpbmsge1xyXG5cclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLm1haW5fX19tZW51IC5tYWluX19fY29udGVudC1tZW51IC5tYWluX19fY29udGVudC1tZW51LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcclxuXHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "W2TK":
/*!*********************************!*\
  !*** ./src/app/classes/team.ts ***!
  \*********************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
class Team {
    constructor(name, logo, id, abbrev) {
        this.logo = logo;
        this.id = id;
        this.name = name;
        this.abbrev = abbrev;
    }
    setStanding(standing) {
        this.standing = standing;
    }
    setPlayer(player) {
        this.player = player;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_match_match_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/match/match.component */ "Mqhm");
/* harmony import */ var _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/prediction/prediction.component */ "xb5Q");
/* harmony import */ var _components_rival_match_rival_match_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rival-match/rival-match.component */ "y+Pz");
/* harmony import */ var _components_common_logo_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/logo/logo.component */ "fpls");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_common_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/table/table.component */ "x/F5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_match_match_component__WEBPACK_IMPORTED_MODULE_4__["MatchComponent"],
        _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_5__["PredictionComponent"],
        _components_rival_match_rival_match_component__WEBPACK_IMPORTED_MODULE_6__["RivalMatchComponent"],
        _components_common_logo_logo_component__WEBPACK_IMPORTED_MODULE_7__["LogoComponent"],
        _components_common_table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]] }); })();


/***/ }),

/***/ "dGWY":
/*!***********************************!*\
  !*** ./src/app/classes/player.ts ***!
  \***********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
class Player {
    constructor(PAV_def, year, PAV_total_rank, PAV_off, mPAV_def, pavid, team, PAV_mid, PAV_mid_rank, surname, mPAV_rank, PAV_def_rank, mPAV_total, PAV_total, firstname, PAV_off_rank, mPAV_mid, mPAV_off, name, games) {
        this.PAV_def = PAV_def;
        this.year = year;
        this.PAV_total_rank = PAV_total_rank;
        this.PAV_off = PAV_off;
        this.mPAV_def = mPAV_def;
        this.pavid = pavid;
        this.team = team;
        this.PAV_mid = PAV_mid;
        this.PAV_mid_rank = PAV_mid_rank;
        this.surname = surname;
        this.mPAV_rank = mPAV_rank;
        this.PAV_def_rank = PAV_def_rank;
        this.mPAV_total = mPAV_total;
        this.PAV_total = PAV_total;
        this.firstname = firstname;
        this.PAV_off_rank = PAV_off_rank;
        this.mPAV_mid = mPAV_mid;
        this.mPAV_off = mPAV_off;
        this.name = name;
        this.games = games;
    }
}


/***/ }),

/***/ "fpls":
/*!**********************************************************!*\
  !*** ./src/app/components/common/logo/logo.component.ts ***!
  \**********************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], inputs: { team: "team", height: "height", width: "width" }, decls: 1, vars: 5, consts: [[3, "src"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height)("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", ctx.team.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_ngcontent-%COMP%]:root {\r\n\r\n    text-align: center;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7O0FBRXRCIiwiZmlsZSI6ImxvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_match_match_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/match/match.component */ "Mqhm");
/* harmony import */ var _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/prediction/prediction.component */ "xb5Q");
/* harmony import */ var _components_rival_match_rival_match_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rival-match/rival-match.component */ "y+Pz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'match', component: _components_match_match_component__WEBPACK_IMPORTED_MODULE_2__["MatchComponent"] },
    { path: 'prediction', component: _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_3__["PredictionComponent"] },
    { path: 'rivalmatch', component: _components_rival_match_rival_match_component__WEBPACK_IMPORTED_MODULE_4__["RivalMatchComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x/F5":
/*!************************************************************!*\
  !*** ./src/app/components/common/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TableComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headerName_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](headerName_r2);
} }
function TableComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const headerName_r5 = ctx.$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.getValue(headerName_r5, item_r3.data), " ");
} }
function TableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_2_span_1_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-template-columns", ctx_r1.temp.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.temp.headerName);
} }
class TableComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnChanges(changes) {
        if (changes["temp"]) {
            const { data } = this.temp;
            this.data = data;
        }
    }
    ngOnInit() {
        const { data } = this.temp;
        this.data = data;
    }
    getValue(key, data) {
        var _a, _b;
        return (_b = (_a = data.find(x => x.key === key)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { temp: "temp" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [[1, "table-header"], ["class", "table-item", 4, "ngFor", "ngForOf"], ["class", "table-row", 3, "grid-template-columns", 4, "ngFor", "ngForOf"], [1, "table-item"], [1, "table-row"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_div_2_Template, 2, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("grid-template-columns", ctx.temp.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.temp.headerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".table-header[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%] {\r\n\r\n    position: relative;\r\n    display: grid;\r\n\r\n}\r\n\r\n.table-header[_ngcontent-%COMP%] {\r\n\r\n    background-color: #7952b3;\r\n    margin: 0.5rem;\r\n\r\n}\r\n\r\n.table-row[_ngcontent-%COMP%] {\r\n\r\n    background-color: #fff;\r\n    border: 1px solid #eee;\r\n    border-bottom: 0;\r\n    margin: 0 0.5rem;\r\n\r\n}\r\n\r\n.table-row[_ngcontent-%COMP%]:last-child {\r\n\r\n    border: 1px solid #eee;\r\n\r\n}\r\n\r\n.table-row[_ngcontent-%COMP%]:hover {\r\n\r\n    background-color: #eee;\r\n\r\n}\r\n\r\n.table-header[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin: 0.5rem;\r\n\r\n}\r\n\r\n.table-header[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\r\n\r\n    color: #fff;\r\n    font-weight: 500;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztJQUdJLGtCQUFrQjtJQUNsQixhQUFhOztBQUVqQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztBQUVwQjs7QUFFQTs7SUFFSSxzQkFBc0I7O0FBRTFCOztBQUVBOztJQUVJLHNCQUFzQjs7QUFFMUI7O0FBRUE7OztJQUdJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhlYWRlcixcclxuLnRhYmxlLXJvdyB7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbn1cclxuXHJcbi50YWJsZS1oZWFkZXIge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTUyYjM7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuXHJcbn1cclxuXHJcbi50YWJsZS1yb3cge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMCAwLjVyZW07XHJcblxyXG59XHJcblxyXG4udGFibGUtcm93Omxhc3QtY2hpbGQge1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcblxyXG59XHJcblxyXG4udGFibGUtcm93OmhvdmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG5cclxufVxyXG5cclxuLnRhYmxlLWhlYWRlciAudGFibGUtaXRlbSxcclxuLnRhYmxlLXJvdyAudGFibGUtaXRlbSB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG5cclxufVxyXG5cclxuLnRhYmxlLWhlYWRlciAudGFibGUtaXRlbSB7XHJcblxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "xb5Q":
/*!***************************************************************!*\
  !*** ./src/app/components/prediction/prediction.component.ts ***!
  \***************************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/table-template */ "Kh+o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/logo/logo.component */ "fpls");
/* harmony import */ var _common_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/table/table.component */ "x/F5");






function PredictionComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PredictionComponent_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const team_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSelect(team_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r0.selectedTeam && team_r2.id == ctx_r0.selectedTeam.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r2.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", team_r2.name, " ");
} }
function PredictionComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-logo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "This is the prediction for next Game between my team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-logo", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-logo", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("team", ctx_r1.selectedTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedTeam.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("team", ctx_r1.selectedTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedTeam.name, " vs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("team", ctx_r1.getRivalTeam());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getRivalTeam().name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("temp", ctx_r1.predictionTable);
} }
class PredictionComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.games = [];
        this.isLoading = false;
        this.tips = [];
        this.predictionHeader = ["Source", "Home Team", "Home Confidence", "Away Confidence", "Away Team"];
    }
    ngOnInit() {
        this.getAFLTeams();
        this.getGames();
    }
    getAFLTeams() {
        this.dataService.getTeam().subscribe(temp => { this.teams = temp; });
    }
    getTip(game = 1, year = '2021', round = 20) {
        this.dataService.getTip(game, year, round).subscribe((temp) => {
            this.tips = temp;
            let dta = temp.map((tip) => {
                let dtaTable = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["DataTable"]();
                this.predictionHeader.forEach((item) => {
                    dtaTable.add(this.getGeneric(item, tip));
                });
                return dtaTable;
            });
            this.predictionTable = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["TableTemplate"](dta, this.predictionHeader, "20% 20% 20% 20% 20%");
            this.isLoading = false;
        });
    }
    onSelect(team) {
        this.isLoading = true;
        this.selectedTeam = team;
        this.getPrediction();
    }
    getGames() {
        this.dataService.getGame().subscribe(temp => {
            this.games = temp;
        });
    }
    getPrediction() {
        let currentYear = new Date().getFullYear();
        this.games.forEach((x) => {
            if (x.complete == 0
                && x.year === currentYear
                && (x.ateamid == this.selectedTeam.id
                    || x.hteamid == this.selectedTeam.id)) {
                this.game = x;
                return;
            }
        });
        this.getTip(this.game.id, currentYear.toString(), this.game.round);
    }
    getConfidence(data) {
        const { hteamid } = this.game;
        const { id } = this.selectedTeam;
        return hteamid == id ? data.hconfidence : data.aconfidence;
    }
    getRivalTeam() {
        const { hteamid, ateamid } = this.game;
        const { id } = this.selectedTeam;
        let teamid = hteamid === id ? ateamid : hteamid;
        let idx = this.teams.findIndex(item => item.id == teamid);
        return this.teams[idx];
    }
    getGeneric(value, tip) {
        const { aconfidence, hconfidence, source, ateam, hteam } = tip;
        switch (value) {
            case "Source":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, source);
            case "Home Confidence":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, `${hconfidence}%`);
            case "Away Confidence":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, `${aconfidence}%`);
            case "Home Team":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, hteam);
            case "Away Team":
            default:
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, ateam);
        }
    }
}
PredictionComponent.ɵfac = function PredictionComponent_Factory(t) { return new (t || PredictionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
PredictionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PredictionComponent, selectors: [["app-prediction"]], decls: 15, vars: 2, consts: [[2, "text-align", "center"], [1, "match"], [1, "dropdown"], ["id", "prediction___dropdownselectteam", "type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", "match-dropdown-button"], [1, "caret"], ["aria-labelledby", "prediction___dropdownselectteam", 1, "dropdown-menu", "match-dropdown-menu"], [3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "match-content", 4, "ngIf"], [3, "click"], [1, "match-logo", 3, "src"], [1, "match-content"], ["height", "50%", "width", "50%", 3, "team"], [1, "match-content-title"], ["height", "5%", "width", "5%", 3, "team"], [3, "temp"]], template: function PredictionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome to Game Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Click on \"Select your favourite team\" to see Prediction details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Select your favourite team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PredictionComponent_li_13_Template, 3, 5, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PredictionComponent_div_14_Template, 11, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedTeam);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _common_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "y+Pz":
/*!*****************************************************************!*\
  !*** ./src/app/components/rival-match/rival-match.component.ts ***!
  \*****************************************************************/
/*! exports provided: RivalMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RivalMatchComponent", function() { return RivalMatchComponent; });
/* harmony import */ var src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/table-template */ "Kh+o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/logo/logo.component */ "fpls");
/* harmony import */ var _common_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/table/table.component */ "x/F5");






function RivalMatchComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RivalMatchComponent_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const team_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onSelect(team_r3, "favourite"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r0.favouriteTeam && team_r3.id == ctx_r0.favouriteTeam.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.disableFavourite(team_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r3.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", team_r3.name, " ");
} }
function RivalMatchComponent_div_15_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RivalMatchComponent_div_15_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const team_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.onSelect(team_r7, "rival"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("dropdown-item ", ctx_r6.rivalTeam && team_r7.id == ctx_r6.rivalTeam.id ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r6.disableRival(team_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://squiggle.com.au/", team_r7.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", team_r7.name, " ");
} }
function RivalMatchComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Select rival team ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RivalMatchComponent_div_15_li_5_Template, 3, 6, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.teams);
} }
function RivalMatchComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-logo", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-logo", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "All the results of Richmond vs Sydney in this season");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "All the results of Richmond vs Sydney in previous season");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("team", ctx_r2.favouriteTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.favouriteTeam.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("team", ctx_r2.rivalTeam);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.rivalTeam.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("temp", ctx_r2.gameTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("temp", ctx_r2.preGameTemp);
} }
class RivalMatchComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.isLoading = false;
        this.gameTemplate = ["Date", "Home Team", "Score", "Away Team", "Result"];
        this.gameWons = () => this.fiveGame.filter(x => x.winnerteamid == this.favouriteTeam.id).length;
        this.gameDraw = () => this.fiveGame.filter(x => !x.winnerteamid).length;
        this.gameLosses = () => this.fiveGame.filter(x => x.winnerteamid != this.favouriteTeam.id).length;
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAFLTeams();
        this.getGame();
    }
    getAFLTeams() {
        this.dataService.getTeam().subscribe(temp => {
            this.teams = temp;
        });
    }
    onSelect(data, type) {
        console.log(data);
        switch (type) {
            case 'favourite':
                this.favouriteTeam = data;
                break;
            case 'rival':
            default:
                this.rivalTeam = data;
                break;
        }
        if (this.favouriteTeam && this.rivalTeam)
            this.getFiveGame();
    }
    getFiveGame() {
        this.fiveGame = [];
        let dtaTables = [];
        let dtaPreTables = [];
        let currentYear = new Date().getFullYear();
        this.games
            .filter((game) => (game.hteamid == this.favouriteTeam.id && game.ateamid == this.rivalTeam.id)
            || (game.ateamid == this.favouriteTeam.id && game.hteamid == this.rivalTeam.id))
            .forEach(game => {
            const { complete, year } = game;
            if (complete == 100 && year == currentYear) {
                let dtaTable = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["DataTable"]();
                this.gameTemplate.forEach((item) => {
                    dtaTable.add(this.getGeneric(item, game));
                });
                dtaTables = [...dtaTables, dtaTable];
            }
            else if (complete == 100 && year == (currentYear - 1)) {
                let dtaTable = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["DataTable"]();
                this.gameTemplate.forEach((item) => {
                    dtaTable.add(this.getGeneric(item, game));
                });
                dtaPreTables = [...dtaPreTables, dtaTable];
            }
        });
        this.gameTemp = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["TableTemplate"](dtaTables, this.gameTemplate, "20% 25% 20% 25% 10%");
        this.preGameTemp = new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["TableTemplate"](dtaPreTables, this.gameTemplate, "20% 25% 20% 25% 10%");
    }
    getGame() {
        this.dataService.getGame().subscribe((temp) => {
            var _a, _b;
            let year = new Date().getFullYear();
            let lastRound = (_b = (_a = temp.reverse().find(x => x.complete == 100 && x.year == year)) === null || _a === void 0 ? void 0 : _a.round) !== null && _b !== void 0 ? _b : 0;
            this.games = temp;
            this.getStanding(year.toString(), lastRound);
        });
    }
    getStanding(year = '2021', round = 20) {
        this.dataService.getStanding(year, round).subscribe((temp) => {
            temp.forEach((item) => {
                this.teams.forEach(team => {
                    if (team.id == item.id)
                        team.setStanding(item);
                });
            });
            this.isLoading = false;
        });
    }
    disableFavourite(data) {
        return this.rivalTeam && this.rivalTeam.id == data.id;
    }
    disableRival(data) {
        return this.favouriteTeam && this.favouriteTeam.id == data.id;
    }
    getGeneric(value, data) {
        const { date, ateam, hteam, ascore, hscore, venue, hteamid } = data;
        switch (value) {
            case "Venue":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, venue);
            case "Date":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, date);
            case "Home Team":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, hteam);
            case "Score":
                let score = `${hscore} - ${ascore}`;
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, score);
            case "Away Team":
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, ateam);
            case "Result":
            default:
                return new src_app_classes_table_template__WEBPACK_IMPORTED_MODULE_0__["Generic"](value, this.getResult(data));
        }
    }
    getResult(data) {
        return !data.winnerteamid ? '' : data.winnerteamid == this.favouriteTeam.id ? 'W' : 'L';
    }
}
RivalMatchComponent.ɵfac = function RivalMatchComponent_Factory(t) { return new (t || RivalMatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
RivalMatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RivalMatchComponent, selectors: [["app-rival-match"]], decls: 17, vars: 3, consts: [[2, "text-align", "center"], [1, "match"], [1, "dropdown"], ["id", "favourite___dropdownselectteam", "type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", "match-dropdown-button"], [1, "caret"], ["aria-labelledby", "favourite___dropdownselectteam", 1, "dropdown-menu", "match-dropdown-menu"], [3, "class", "hidden", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown", 4, "ngIf"], ["class", "match-content", 4, "ngIf"], [3, "hidden", "click"], [1, "match-logo", 3, "src"], ["id", "rival___dropdownselectteam", "type", "button", "data-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle", "match-dropdown-button"], ["aria-labelledby", "rival___dropdownselectteam", 1, "dropdown-menu", "match-dropdown-menu-2"], [1, "match-content"], [1, "match-comparision"], [1, "logo"], ["height", "50%", "width", "50%", 3, "team"], [1, "match-content-title"], [3, "temp"]], template: function RivalMatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Welcome to Game Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Click on \"Select your favourite team\" to see Rival match");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Select your favourite team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RivalMatchComponent_li_13_Template, 3, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RivalMatchComponent_div_15_Template, 6, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RivalMatchComponent_div_16_Template, 14, 6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.teams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.favouriteTeam);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.favouriteTeam && ctx.rivalTeam);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _common_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _common_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]], styles: [".match-comparision[_ngcontent-%COMP%] {\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: flex-end;\r\n    width: 100%;\r\n\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    justify-content: space-around;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpdmFsLW1hdGNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFdBQVc7O0FBRWY7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDZCQUE2Qjs7QUFFakMiLCJmaWxlIjoicml2YWwtbWF0Y2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRjaC1jb21wYXJpc2lvbiB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmxvZ28ge1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map