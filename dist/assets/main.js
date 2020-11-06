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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/in-view/dist/in-view.min.js":
/*!**************************************************!*\
  !*** ./node_modules/in-view/dist/in-view.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i=n(2),o=r(i);t.exports=o["default"]},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),o=r(i),u=n(3),f=r(u),s=n(4),c=function(){if("undefined"!=typeof window){var t=100,e=["scroll","resize","load"],n={history:[]},r={offset:{},threshold:0,test:s.inViewport},i=(0,o["default"])(function(){n.history.forEach(function(t){n[t].check()})},t);e.forEach(function(t){return addEventListener(t,i)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(i).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var u=function(t){if("string"==typeof t){var e=[].slice.call(document.querySelectorAll(t));return n.history.indexOf(t)>-1?n[t].elements=e:(n[t]=(0,f["default"])(e,r),n.history.push(t)),n[t]}};return u.offset=function(t){if(void 0===t)return r.offset;var e=function(t){return"number"==typeof t};return["top","right","bottom","left"].forEach(e(t)?function(e){return r.offset[e]=t}:function(n){return e(t[n])?r.offset[n]=t[n]:null}),r.offset},u.threshold=function(t){return"number"==typeof t&&t>=0&&t<=1?r.threshold=t:r.threshold},u.test=function(t){return"function"==typeof t?r.test=t:r.test},u.is=function(t){return r.test(t,r)},u.offset(0),u}};e["default"]=c()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e,r){n(this,t),this.options=r,this.elements=e,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return r(t,[{key:"check",value:function(){var t=this;return this.elements.forEach(function(e){var n=t.options.test(e,t.options),r=t.current.indexOf(e),i=r>-1,o=n&&!i,u=!n&&i;o&&(t.current.push(e),t.emit("enter",e)),u&&(t.current.splice(r,1),t.emit("exit",e))}),this}},{key:"on",value:function(t,e){return this.handlers[t].push(e),this}},{key:"once",value:function(t,e){return this.singles[t].unshift(e),this}},{key:"emit",value:function(t,e){for(;this.singles[t].length;)this.singles[t].pop()(e);for(var n=this.handlers[t].length;--n>-1;)this.handlers[t][n](e);return this}}]),t}();e["default"]=function(t,e){return new i(t,e)}},function(t,e){"use strict";function n(t,e){var n=t.getBoundingClientRect(),r=n.top,i=n.right,o=n.bottom,u=n.left,f=n.width,s=n.height,c={t:o,r:window.innerWidth-u,b:window.innerHeight-r,l:i},a={x:e.threshold*f,y:e.threshold*s};return c.t>e.offset.top+a.y&&c.r>e.offset.right+a.x&&c.b>e.offset.bottom+a.y&&c.l>e.offset.left+a.x}Object.defineProperty(e,"__esModule",{value:!0}),e.inViewport=n},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){var r=n(5),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},function(t,e,n){function r(t,e,n){function r(e){var n=x,r=m;return x=m=void 0,E=e,w=t.apply(r,n)}function a(t){return E=t,j=setTimeout(h,e),M?r(t):w}function l(t){var n=t-O,r=t-E,i=e-n;return _?c(i,g-r):i}function d(t){var n=t-O,r=t-E;return void 0===O||n>=e||n<0||_&&r>=g}function h(){var t=o();return d(t)?p(t):void(j=setTimeout(h,l(t)))}function p(t){return j=void 0,T&&x?r(t):(x=m=void 0,w)}function v(){void 0!==j&&clearTimeout(j),E=0,x=O=m=j=void 0}function y(){return void 0===j?w:p(o())}function b(){var t=o(),n=d(t);if(x=arguments,m=this,O=t,n){if(void 0===j)return a(O);if(_)return j=setTimeout(h,e),r(O)}return void 0===j&&(j=setTimeout(h,e)),w}var x,m,g,w,j,O,E=0,M=!1,_=!1,T=!0;if("function"!=typeof t)throw new TypeError(f);return e=u(e)||0,i(n)&&(M=!!n.leading,_="maxWait"in n,g=_?s(u(n.maxWait)||0,e):g,T="trailing"in n?!!n.trailing:T),b.cancel=v,b.flush=y,b}var i=n(1),o=n(8),u=n(10),f="Expected a function",s=Math.max,c=Math.min;t.exports=r},function(t,e,n){var r=n(6),i=function(){return r.Date.now()};t.exports=i},function(t,e,n){function r(t,e,n){var r=!0,f=!0;if("function"!=typeof t)throw new TypeError(u);return o(n)&&(r="leading"in n?!!n.leading:r,f="trailing"in n?!!n.trailing:f),i(t,e,{leading:r,maxWait:e,trailing:f})}var i=n(7),o=n(1),u="Expected a function";t.exports=r},function(t,e){function n(t){return t}t.exports=n}])});

/***/ }),

/***/ "./src/assets/scripts/index.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modals = __webpack_require__(/*! ./modals */ "./src/assets/scripts/modals.js");

var openModal = _modals.openModal;
var closeModal = _modals.closeModal;

var _inView = __webpack_require__(/*! ../../../node_modules/in-view */ "./node_modules/in-view/dist/in-view.min.js");

var inView = _interopRequireDefault(_inView).default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import  {parallax} from "./parallax";
// import  {elementPartiallyInViewport, elementInViewport, getPreviousSibling} from "./utilities";
// parallax();
// window.scrollTo(window.scrollX, window.scrollY - 1);
var root;
root = document.getElementsByTagName('html')[0];
/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Inview
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/

inView('.animate').on('enter', function (el) {
  setTimeout(function () {
    el.classList.add('fadein');
  }, 500);
}).on('exit', function (el) {// el.style.opacity = 0.5;
});
/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Modals
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/

var modalTriggers = document.querySelectorAll('.modal-trigger');

var _loop = function _loop() {
  var btn = modalTriggers[i];
  btn.addEventListener('click', function (e) {
    openModal(btn.hash);
  }); // var offset = $(window).scrollTop();  //your current y position on the page
  // $(window).scrollTop(y-150);
};

for (var i = 0; i < modalTriggers.length; i++) {
  _loop();
}

var hash = window.location.hash;

if (hash.includes('modal')) {
  openModal(hash);
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;

  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }

  if (isEscape) {
    closeModal();
  }
};
/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Menu
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/


var navWrapper = document.querySelector('.main-navigation'),
    menu = document.querySelector('.menu-wrapper'),
    menuButton = document.createElement('button'),
    screenOverlay = document.querySelector('#screen-overlay'); // Button properties

menuButton.classList.add('menu-button');
menuButton.setAttribute('href', '#menu');
menuButton.setAttribute('id', 'menu-button');
menuButton.setAttribute('aria-label', 'Menu');
menuButton.setAttribute('aria-expanded', 'false');
menuButton.setAttribute('aria-controls', 'menu');
menuButton.innerHTML = '<span aria-hidden="true">Menu</span>'; // Menu properties

menu.setAttribute('aria-hidden', 'true');
menu.setAttribute('aria-labelledby', 'menu-button'); // Add button to page

navWrapper.insertBefore(menuButton, menu); // Handle button click event

menuButton.addEventListener('click', function (e) {
  e.preventDefault(); // If active...

  if (navWrapper.classList.contains('active')) {
    // Hide
    menuButton.innerHTML = '<span aria-hidden="true">Menu</span>';
    navWrapper.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-expanded', 'false');
    root.classList.remove('menu-open');
  } else {
    // Show
    menuButton.innerHTML = '<span aria-hidden="true">Close</span>';
    navWrapper.classList.add('active');
    menu.setAttribute('aria-hidden', 'false');
    menuButton.setAttribute('aria-expanded', 'true');
    root.classList.add('menu-open'); // Set focus on first link
    // menu.children[0].children[0].children[0].focus();
  }
}, false); //close menu with an outside click (basically anywhere on .site-content)

function closeMenu() {
  root.classList.remove('menu-open');
  navWrapper.classList.remove("active");
}

screenOverlay.addEventListener('click', function () {
  closeMenu();
});
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    closeMenu();
  }
});

/***/ }),

/***/ "./src/assets/scripts/modals.js":
/*!**************************************!*\
  !*** ./src/assets/scripts/modals.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeModal = closeModal;
exports.openModal = openModal;

/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Modals
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/
var focusableElems = document.querySelectorAll('#page a[href]:not([disabled]):not(.anchor-link),#page button:not([disabled]),#page textarea:not([disabled]),#page input[type="text"]:not([disabled]),#page input[type="radio"]:not([disabled]),#page input[type="checkbox"]:not([disabled]),#page select:not([disabled])');

function closeModal() {
  document.getElementsByTagName('html')[0].classList.remove('modal-open');
  var modals = document.querySelectorAll('.modal.active');

  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('active');
  }

  for (var i = 0; i < focusableElems.length; i++) {
    focusableElems[i].setAttribute('tabindex', '');
  }
}

function openModal(hash) {
  // e.preventDefault();
  var target = '#' + hash.substr(1);
  var modalfocusableElems = document.querySelector(target).querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
  var closeBtn = document.querySelector(target).querySelector('.close');
  document.querySelector(target).classList.add('active');
  document.getElementsByTagName('html')[0].classList.add('modal-open');

  if (focusableElems) {
    for (var i = 0; i < focusableElems.length; i++) {
      focusableElems[i].setAttribute('tabindex', -1);
    }
  }

  if (modalfocusableElems) {
    for (var i = 0; i < modalfocusableElems.length; i++) {
      modalfocusableElems[i].setAttribute('tabindex', '');
    }
  }

  var button = document.createElement("button");
  button.classList.add('close');
  button.innerHTML = '<div class="cross"></div>';
  document.querySelector(target).appendChild(button);
  button.addEventListener('click', function (e) {
    closeModal();
  });
}

/***/ }),

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi ./src/assets/scripts/index.js ./src/assets/styles/index.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/admin/Documents/GitHub/unicorn-fluff/src/assets/scripts/index.js */"./src/assets/scripts/index.js");
module.exports = __webpack_require__(/*! /Users/admin/Documents/GitHub/unicorn-fluff/src/assets/styles/index.scss */"./src/assets/styles/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map