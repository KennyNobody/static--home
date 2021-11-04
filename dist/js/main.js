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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/color-picker/color-picker.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/color-picker/color-picker.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var el = document.querySelectorAll('.color-picker');

  for (var i = 0; i < el.length; i++) {
    initPicker(el[i]);
  }
});

var initPicker = function initPicker(el) {
  setDefaulut(el);
  var items = el.querySelectorAll('.color-picker__item');

  var _loop = function _loop(i) {
    items[i].addEventListener('click', function () {
      setTheme(items, items[i]);
    });
  };

  for (var i = 0; i < items.length; i++) {
    _loop(i);
  }
};

var setTheme = function setTheme(items, el) {
  document.querySelector('#style').remove();

  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove('color-picker__item--active');
  }

  var theme = el.getAttribute('data-color');

  if (theme == 'red') {
    document.head.insertAdjacentHTML("beforeend", "<style id=\"style\">:root{--main-bg-color:#EB5757;--title-color:#F3F2F3;--main-text-color:#101010;--discription-color:#101010;--border-color:#101010;--border-section-color:#101010}</style>");
  } else if (theme == 'dark') {
    document.head.insertAdjacentHTML("beforeend", "<style id=\"style\">:root{--main-bg-color:#1A1A1A;--main-text-color:#F3F2F3;--title-color:#F3F2F3;--discription-color:#F3F2F3;--border-color:#F3F2F3;--border-section-color:#F3F2F3}</style>");
  } else if (theme == 'blue') {
    document.head.insertAdjacentHTML("beforeend", "<style id=\"style\">:root{--main-bg-color:#2F80ED;--title-color:#F3F2F3;--main-text-color:#101010;--discription-color:#101010;--border-color:#101010;--border-section-color:#101010}</style>");
  } else if (theme == 'purple') {
    document.head.insertAdjacentHTML("beforeend", "<style id=\"style\">:root{--main-bg-color:#BB6BD9;--title-color:#F3F2F3;--main-text-color:#101010;--discription-color:#101010;--border-color:#101010;--border-section-color:#101010}</style>");
  } else {
    document.head.insertAdjacentHTML("beforeend", "<style id=\"style\">:root{--main-bg-color:#F3F2F3;--main-text-color:#101010;--title-color:#101010;--discription-color:#575757;--border-color:#bfbdbe;--border-section-color:#c4c4c4}</style>");
  }

  localStorage.setItem('color-theme', theme);
  el.classList.add('color-picker__item--active');
};

var setDefaulut = function setDefaulut(el) {
  var theme = localStorage.getItem('color-theme');

  if (theme) {
    var activeItem = el.querySelector('[data-color="' + theme + '"]');
    activeItem.classList.add('color-picker__item--active');
  }
};

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/color-picker/color-picker */ "./src/blocks/modules/color-picker/color-picker.js");
/* harmony import */ var _modules_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_color_picker_color_picker__WEBPACK_IMPORTED_MODULE_0__);
// import { Fancybox } from "@fancyapps/ui";


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map