/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Home = __webpack_require__(/*! ./home */ \"./src/home.js\")\nconst Sort = __webpack_require__(/*! ./sort */ \"./src/sort.js\")\nconst Process = __webpack_require__(/*! ./process */ \"./src/process.js\")\n\nclass Board{\n  constructor(gamediv){\n    this.gameDiv = gamediv\n    this.recyclePoints = 0;\n    this.lbsHome = 12000000;\n    this.lbsSort = 0;\n    this.lbsProcess = 0;\n    this.lbsReuse = 0;\n    this.sold = 0\n  }\n\n  pointCal(){\n    let points = document.getElementById(\"currency_count\")\n    points.innerHTML = this.recyclePoints.toFixed(2)\n  }\n\n  resetPoints(){\n    this.recyclePoints = 1\n    this.pointCal()\n  }\n\n  displaySortLbs(){\n    let pSort = document.getElementById(\"storePoundCount\")\n    pSort.innerHTML = this.lbsSort.toFixed(2)\n  }\n\n  displayHomeLbs() {\n    let pnd = document.getElementById(\"homePoundCount\")\n    pnd.innerHTML = this.lbsHome.toFixed(2)\n  }\n  displayProcLbs() {\n    let pnd = document.getElementById(\"processPoundCount\")\n    pnd.innerHTML = this.lbsProcess.toFixed(2)\n  }\n  displayReuseLbs() {\n    let pnd = document.getElementById(\"mfcPoundCount\")\n    pnd.innerHTML = this.lbsReuse.toFixed(2)\n  }\n\n\n  renderHomeToSort(){\n    this.displaySortLbs();\n    this.displayHomeLbs();\n    this.pointCal();\n  }\n\n  renderSortToProc(){\n    this.displaySortLbs();\n    this.displayProcLbs();\n    this.pointCal();\n  }\n\n  renderProcToMfg(){\n    this.displayProcLbs();\n    this.displayReuseLbs();\n    this.pointCal();\n  }\n\n  start(){\n    const Homev = new Home(this)\n    const SortN = new Sort(this)\n    const Pros = new Process(this)\n    Homev.start();\n    SortN.start();\n    Pros.start();\n    this.resetPoints();\n    this.displayHomeLbs();\n  }\n\n  \n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Home{\n  constructor(board){\n    this.board = board\n    this.truckCount = 0;\n    this.truckCost = 1;\n  }\n\n  displayTruckCost(){\n    let cst = document.getElementById(\"buyTruck\")\n    cst.innerHTML = `Cost: ${this.truckCost}`\n  }\n  displayTruckCount(){\n    let cnt = document.getElementById(\"truckCount\")\n    cnt.innerHTML = this.truckCount\n  }\n\n  buyTruck(){\n    let truckButton = document.getElementById(\"buyTruck\")\n    truckButton.addEventListener(\"click\", () => {\n      if (this.board.recyclePoints >= this.truckCost) {\n        this.board.recyclePoints -= this.truckCost;\n        this.truckCount += 1;\n        this.truckCost = (this.truckCost * 1.1).toFixed(2);\n        this.displayTruckCost();\n        this.displayTruckCount();\n        this.board.pointCal();\n      }\n      if(this.truckCount === 1){\n        this.truckPS();\n      }\n    })\n    \n  }\n\n  \n\n  truckPS(){\n    if (this.truckCount >= 1){\n      setInterval(() => {\n\n        if (this.board.lbsHome <= (this.truckCount * 2)){\n          this.board.lbsSort += this.board.lbsHome\n          this.board.lbsHome = 0\n          this.board.recyclePoints = (this.board.recyclePoints + (this.truckCount * 2));\n          this.board.renderHomeToSort();\n          clearInterval()\n\n        } else {\n          this.board.lbsHome -= (this.truckCount * 2)\n          this.board.lbsSort += (this.truckCount * 2)\n          this.board.recyclePoints = (this.board.recyclePoints + (this.truckCount * 2));\n          this.board.renderHomeToSort();\n        }\n      }, 1000)\n    }\n  }\n\n  start(){\n    this.displayTruckCost()\n    this.buyTruck()\n  }\n}\n\nmodule.exports = Home;\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_board__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const gameDiv = document.getElementById(\"game\")\n  const board = new _board__WEBPACK_IMPORTED_MODULE_0___default.a(gameDiv)\n  board.start()\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/process.js":
/*!************************!*\
  !*** ./src/process.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Process {\n  constructor(board){\n    this.board = board\n    this.pCount = 0\n    this.cost = 100\n  }\n\n  displayProsCost() {\n    let total = this.cost\n    let cost = document.getElementById(\"buyPross\")\n    cost.innerHTML = `Cost: ${total}`\n  }\n\n  displayProsCount() {\n    let count = document.getElementById(\"processCount\")\n    count.innerHTML = this.pCount\n  }\n\n  buyPros() {\n    let prosbutton = document.getElementById(\"buyPross\")\n    prosbutton.addEventListener(\"click\", () => {\n      if (this.board.recyclePoints >= this.cost) {\n        this.board.recyclePoints -= this.cost;\n        this.pCount += 1;\n        this.cost = (this.cost * 1.1).toFixed(2);\n        this.displayProsCost();\n        this.displayProsCount();\n        this.board.pointCal();\n      }\n      if (this.pCount === 1) {\n        this.prosPS();\n      }\n    })\n  }\n\n  prosPS() {\n  if (this.pCount >= 1) {\n    setInterval(() => {\n\n      if (this.board.lbsProcess <= (this.pCount * 2)) {\n        this.board.lbsReuse += this.pCount * 2\n        this.board.lbsProcess = 0\n        this.board.recyclePoints += this.pCount * 2\n        this.board.renderProcToMfg()\n      } else {\n        this.board.lbsReuse += this.pCount * 2\n        this.board.lbsProcess -= this.pCount * 2\n        this.board.recyclePoints += this.pCount * 2\n        this.board.renderProcToMfg()\n      }\n    }, 1000)\n    }\n  }\n\n  start(){\n    this.displayProsCost();\n    this.buyPros();\n  }\n}\n\nmodule.exports = Process;\n\n//# sourceURL=webpack:///./src/process.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Sort{\n  constructor(board){\n    this.board = board\n    this.sortCount = 0\n    this.sortCost = 10\n  }\n\n  displaySortCost(){\n    let total = this.sortCost\n    let cost = document.getElementById(\"buySort\")\n    cost.innerHTML = `Cost: ${total}`\n  }\n  \n  displaySortCount(){\n    let count = document.getElementById(\"sortCount\")\n    count.innerHTML = this.sortCount\n  }\n\n  buySort() {\n    let sortbutton = document.getElementById(\"buySort\")\n      sortbutton.addEventListener(\"click\", () => {\n        if (this.board.recyclePoints >= this.sortCost) {\n          this.board.recyclePoints -= this.sortCost;\n          this.sortCount += 1;\n          this.sortCost = (this.sortCost * 1.1).toFixed(2);\n          this.displaySortCost();\n          this.displaySortCount();\n          this.board.pointCal();\n        }\n        if (this.sortCount === 1) {\n          this.sortPS();\n        }\n    })\n\n    \n\n  }\n\n\n  sortPS() {\n    if (this.sortCount >= 1) {\n      setInterval(() => {\n\n        if (this.board.lbsSort <= (this.sortCount * 2)) {\n          this.board.lbsProcess += this.board.lbsSort * .15\n          this.board.lbsSort = 0\n          this.board.recyclePoints = (this.board.recyclePoints + (this.sortCount * 2));\n          this.board.renderSortToProc();\n\n        } else {\n          this.board.lbsSort -= (this.sortCount)\n          this.board.lbsProcess = this.board.lbsProcess + (this.sortCount * .15)\n          console.log(this.board.lbsProcess)\n          this.board.recyclePoints = (this.board.recyclePoints + (this.sortCount * 2));\n          this.board.renderSortToProc();\n        }\n      }, 1000)\n    }\n  }\n\n\n\n\n  start(){\n    this.displaySortCost();\n    this.buySort();\n  }\n}\n\nmodule.exports = Sort;\n\n//# sourceURL=webpack:///./src/sort.js?");

/***/ })

/******/ });