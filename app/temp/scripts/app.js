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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/app.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/app.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./app/assets/scripts/modules/modal.js\");\n\n\nif (true) {\n  console.log('Looks like we are in development mode!');\n}\n\nvar modal = new _modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./app/assets/scripts/app.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/helper.js":
/*!**********************************************!*\
  !*** ./app/assets/scripts/modules/helper.js ***!
  \**********************************************/
/*! exports provided: getDomClass, getDomId, addEventLoop, addRemoveClassLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDomClass\", function() { return getDomClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDomId\", function() { return getDomId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventLoop\", function() { return addEventLoop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addRemoveClassLoop\", function() { return addRemoveClassLoop; });\nfunction getDomClass(els) {\n  return document.getElementsByClassName(els);\n}\nfunction getDomId(els) {\n  return document.getElementById(els);\n}\nfunction addEventLoop(elements, event, fn) {\n  Array.from(elements).forEach(function (element) {\n    element.addEventListener(event, fn, false);\n  });\n}\nfunction addRemoveClassLoop(elements, action, className) {\n  Array.from(elements).forEach(function (element) {\n    element.classList[action](className);\n  });\n}\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/helper.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/modal.js":
/*!*********************************************!*\
  !*** ./app/assets/scripts/modules/modal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./app/assets/scripts/modules/helper.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Modal =\n/*#__PURE__*/\nfunction () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n\n    this.openModalButton = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getDomClass\"])('js-open-modal');\n    this.modal = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getDomId\"])('js-modal');\n    this.closeModalButton = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"getDomId\"])('js-modal__close');\n    this.events();\n  }\n\n  _createClass(Modal, [{\n    key: \"events\",\n    value: function events() {\n      // open modal\n      Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"addEventLoop\"])(this.openModalButton, 'click', this.openModal.bind(this)); // close modal from the X button\n\n      this.closeModalButton.addEventListener('click', this.closeModal.bind(this)); // push any key\n\n      document.addEventListener('keyup', this.keyPressHandler.bind(this));\n    }\n  }, {\n    key: \"keyPressHandler\",\n    value: function keyPressHandler(e) {\n      if (e.keyCode === 27) {\n        this.closeModal();\n      }\n    }\n  }, {\n    key: \"openModal\",\n    value: function openModal() {\n      this.modal.classList.add('modal_is-visible');\n      return false;\n    }\n  }, {\n    key: \"closeModal\",\n    value: function closeModal() {\n      this.modal.classList.remove('modal_is-visible');\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/modal.js?");

/***/ })

/******/ });