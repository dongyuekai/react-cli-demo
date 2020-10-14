(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tools"] = factory();
	else
		root["tools"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
// // 将参数中的null undefined转化为空
// export function transferDefectParams(el) {
//   return ['null', 'undefined'].includes(el) ? '' : el
// }
// export function add(a) {
//   return a + a
// }
// /**
//  * 正则表示法
//  * 思路:通过正则表达式获取url上的参数 然后通过数组reduce追加到对象中
//  *
//  * @param {string} url 需要获取的url地址默认为当前地址
//  */
// export default function getUrlParameters(url = window.location.href) {
//   /**
//    * match返回字符串中匹配结果的数组,匹配不到返回null
//    * [^?=&]+ 匹配除了?=&之外的字符 仅匹配一次
//    * Array.reduce(callBack(prev,cur,index,array), initialValue)
//    * Array.slice(start,[end]) 返回start-end的元素
//    */
//   const params = url.match(/([^?=&]+)=([^&]*)/g)
//   if (params) {
//     return params.reduce(
//       (a, v) => (
//         (a[v.slice(0, v.indexOf('='))] = transferDefectParams(
//           v.slice(v.indexOf('=') + 1)
//         )),
//         a
//       ),
//       {}
//     )
//   }
//   return {}
// }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ math: _math__WEBPACK_IMPORTED_MODULE_0__, string: _string__WEBPACK_IMPORTED_MODULE_1__ });


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "minus": () => /* binding */ minus,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "division": () => /* binding */ division
/* harmony export */ });
function add(a, b) {
  return a + b
}
function minus(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function division(a, b) {
  return a / b
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "join": () => /* binding */ join
/* harmony export */ });
function join(a, b) {
  return a + ' ' + b
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })()
.default;
});