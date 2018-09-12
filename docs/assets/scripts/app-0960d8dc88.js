!function(r){var t={};function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=t,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(r,t,function(e){return n[e]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./app/assets/scripts/app.js")}({"./app/assets/scripts/app.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/person */ "./app/assets/scripts/modules/person.js");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./app/assets/scripts/modules/modal.js");\n// var Person = require(\'./modules/person\');\n\n\n\nif (true) {\n  console.log(\'Looks like we are in development mode!\');\n}\n\nvar jhon = new _modules_person__WEBPACK_IMPORTED_MODULE_0__["default"](\'jhon\');\njhon.greet();\nvar modal = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]();\n\n//# sourceURL=webpack:///./app/assets/scripts/app.js?')},"./app/assets/scripts/modules/helper.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomClass", function() { return getDomClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomId", function() { return getDomId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventLoop", function() { return addEventLoop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRemoveClassLoop", function() { return addRemoveClassLoop; });\nfunction getDomClass(els) {\n  return document.getElementsByClassName(els);\n}\nfunction getDomId(els) {\n  return document.getElementById(els);\n}\nfunction addEventLoop(elements, event, fn) {\n  var i,\n      max = elements.length;\n\n  for (i = 0; i < max; i++) {\n    elements[i].addEventListener(event, fn, false);\n  }\n}\nfunction addRemoveClassLoop(elements, action, className) {\n  var i,\n      max = elements.length;\n\n  for (i = 0; i < max; i++) {\n    elements[i].classList[action](className);\n  }\n}\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/helper.js?')},"./app/assets/scripts/modules/modal.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./app/assets/scripts/modules/helper.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Modal =\n/*#__PURE__*/\nfunction () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n\n    this.openModalButton = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getDomClass"])(\'js-open-modal\');\n    this.modal = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getDomId"])(\'js-modal\');\n    this.closeModalButton = Object(_helper__WEBPACK_IMPORTED_MODULE_0__["getDomId"])(\'js-modal__close\');\n    this.events();\n  }\n\n  _createClass(Modal, [{\n    key: "events",\n    value: function events() {\n      // open modal\n      Object(_helper__WEBPACK_IMPORTED_MODULE_0__["addEventLoop"])(this.openModalButton, \'click\', this.openModal.bind(this)); // close modal from the X button\n\n      this.closeModalButton.addEventListener(\'click\', this.closeModal.bind(this)); // push any key\n\n      document.addEventListener(\'keyup\', this.keyPressHandler.bind(this));\n    }\n  }, {\n    key: "keyPressHandler",\n    value: function keyPressHandler(e) {\n      if (e.keyCode == 27) {\n        this.closeModal();\n      }\n    }\n  }, {\n    key: "openModal",\n    value: function openModal() {\n      this.modal.classList.add(\'modal_is-visible\');\n      return false;\n    }\n  }, {\n    key: "closeModal",\n    value: function closeModal() {\n      this.modal.classList.remove(\'modal_is-visible\');\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Modal);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/modal.js?')},"./app/assets/scripts/modules/person.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Person =\n/*#__PURE__*/\nfunction () {\n  function Person(name) {\n    _classCallCheck(this, Person);\n\n    this.name = name;\n  }\n\n  _createClass(Person, [{\n    key: "greet",\n    value: function greet() {\n      console.log("salam ".concat(this.name));\n    }\n  }]);\n\n  return Person;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Person);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/person.js?')}});