(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["addEmojis"] = factory();
	else
		root["addEmojis"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./src/addBug.js":
/*!***********************!*\
  !*** ./src/addBug.js ***!
  \***********************/
/*! exports provided: addBug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBug\", function() { return addBug; });\nconst addBug = (string) =>{\n    return '🐛' + string;\n}\n\n//# sourceURL=webpack://addEmojis/./src/addBug.js?");

/***/ }),

/***/ "./src/addEmoji.js":
/*!*************************!*\
  !*** ./src/addEmoji.js ***!
  \*************************/
/*! exports provided: addEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEmoji\", function() { return addEmoji; });\nconst emojis = [\"😺\",\"😸\",\"😹\",\"😻\",\"😼\",\"😽\",\"🙀\",\"😿\",\"😾\"];\n\nconst addEmoji = (string) =>{\n    return string + emojis[Math.floor(Math.random(0) * Math.floor(emojis.length))];\n}\n\n//# sourceURL=webpack://addEmojis/./src/addEmoji.js?");

/***/ }),

/***/ "./src/addExclamationSign.js":
/*!***********************************!*\
  !*** ./src/addExclamationSign.js ***!
  \***********************************/
/*! exports provided: addExclamationSign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addExclamationSign\", function() { return addExclamationSign; });\nconst addExclamationSign = (string) => {\n    return string + \"!\";\n}\n\n//# sourceURL=webpack://addEmojis/./src/addExclamationSign.js?");

/***/ }),

/***/ "./src/addHearts.js":
/*!**************************!*\
  !*** ./src/addHearts.js ***!
  \**************************/
/*! exports provided: addHearts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addHearts\", function() { return addHearts; });\nconst addHearts = (string, amount)=>{\n    return string + '❤️'*amount;\n    }\n\n//# sourceURL=webpack://addEmojis/./src/addHearts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addEmoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addEmoji */ \"./src/addEmoji.js\");\n/* harmony import */ var _addBug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addBug */ \"./src/addBug.js\");\n/* harmony import */ var _addHearts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addHearts */ \"./src/addHearts.js\");\n/* harmony import */ var _addExclamationSign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addExclamationSign */ \"./src/addExclamationSign.js\");\n\n\n\n\n\nconsole.log(Object(_addEmoji__WEBPACK_IMPORTED_MODULE_0__[\"addEmoji\"])(\"HelloWorld!\"+\"development\"));\n\n\n//# sourceURL=webpack://addEmojis/./src/index.js?");

/***/ })

/******/ });
});