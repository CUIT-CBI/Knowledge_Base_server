var head =
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
/******/ 	__webpack_require__.p = "/pack/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/client/head/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/client/dom/getDocumentHeight.js":
/*!*************************************************!*\
  !*** ./modules/client/dom/getDocumentHeight.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let getScrollbarHeight = __webpack_require__(/*! ./getScrollbarHeight */ "./modules/client/dom/getScrollbarHeight.js");
let scrollbarHeight;

function getDocumentHeight(doc) {
  doc = doc || document;

  let height = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight, doc.body.offsetHeight, doc.documentElement.offsetHeight, doc.body.clientHeight, doc.documentElement.clientHeight);

  if (doc.documentElement.scrollWidth > doc.documentElement.clientWidth) {
    // got a horiz scroll, let's add it
    if (!scrollbarHeight) scrollbarHeight = getScrollbarHeight();
    height += scrollbarHeight;
  }

  return height;
}

module.exports = getDocumentHeight;

/***/ }),

/***/ "./modules/client/dom/getScrollbarHeight.js":
/*!**************************************************!*\
  !*** ./modules/client/dom/getScrollbarHeight.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getScrollbarHeight() {
  let outer = document.createElement("div");
  outer.style.cssText = "visibility:hidden;height:100px";
  if (!document.body) {
    throw new Error("getScrollbarHeight called to early: no document.body");
  }
  document.body.appendChild(outer);

  let widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";

  // add innerdiv
  let inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  let widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
}

module.exports = getScrollbarHeight;

/***/ }),

/***/ "./modules/client/head/fontTest.js":
/*!*****************************************!*\
  !*** ./modules/client/head/fontTest.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
Избегаем FOUT - простой способ проверки загрузки иконик шрифта.
 1) Делаем в iconic шрифте один символ с кодом 21 (вместо «!»)
 В iconmoon
 http://ilyakantor.ru/screen/2014-09-06_0152.png
 http://ilyakantor.ru/screen/2014-09-06_0153.png

 Этот шрифт в обычном шрифте (serif) узкий по ширине, а в iconic - нормальный.
 2) Далее при загрузке создаём <span>!</span> и даём ему fontFamily сначала serif и замеряем ширину, а потом FontIcons, serif.
 Отлавливаем момент, когда ширина изменится. Это значит шрифт загружен.
 Можно убрать класс .no-icons и показать иконки.
 */

module.exports = function () {
  let elem = document.createElement('span');
  document.body.appendChild(elem);
  elem.className = 'font-test';
  elem.style.fontFamily = 'serif';
  let initialWidth = elem.offsetWidth;

  elem.style.fontFamily = '';

  function checkFontLoaded() {
    if (initialWidth != elem.offsetWidth) {
      document.body.classList.remove('no-icons');
    } else {
      setTimeout(checkFontLoaded, 100);
    }
  }

  checkFontLoaded();
};

/***/ }),

/***/ "./modules/client/head/hover.js":
/*!**************************************!*\
  !*** ./modules/client/head/hover.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// add/remove .hover onmouseenter/leave
// for mobile devices (:hover sticks)

let currentHoverElem;

/*
function log(e) {
  console.log(Date.now() % 1e4, e.type);
}

document.addEventListener("focusin", log, false);
document.addEventListener("focus", log, false);
document.addEventListener("touchstart", log, false);
document.addEventListener("touchend", log, false);
document.addEventListener("touchcancel", log, false);
document.addEventListener("touchleave", log, false);
document.addEventListener("touchmove", log, false);
document.addEventListener("touch", log, false);

document.addEventListener("pointerup", log, false);
document.addEventListener("pointerdown", log, false);
document.addEventListener("pointermove", log, false);
document.addEventListener("pointercancel", log, false);
document.addEventListener("mouseover", log, false);
*/
document.addEventListener('mouseover', function (event) {
  let target = event.target.closest('[data-add-class-on-hover]') || event.target.closest('.button');
  if (target) {
    currentHoverElem = target;
    target.classList.add('hover');
  }
});

document.addEventListener('touchend', function (event) {
  setTimeout(function () {
    if (currentHoverElem) {
      currentHoverElem.classList.remove('hover');
      currentHoverElem = null;
    }
  }, 500); // touchstart -> tourchend -> (delay up to 300ms) -> mouseover
});

document.addEventListener('mouseout', function (event) {
  if (!currentHoverElem) return;

  if (currentHoverElem.contains(event.relatedTarget)) {
    return;
  }

  currentHoverElem.classList.remove('hover');
  currentHoverElem = null;
});

if (!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
  document.documentElement.classList.add('working-hover');
}

/***/ }),

/***/ "./modules/client/head/index.js":
/*!**************************************!*\
  !*** ./modules/client/head/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! client/polyfill */ "./modules/client/polyfill/index.js");

try {
  window.localStorage.testProperty = 1;
  delete window.localStorage.testProperty;
} catch (e) {
  // localStorage disabled or forbidden
  try {
    window.localStorage = {};
    // so that operations on it won't fail
  } catch (e) {
    /* can happen TypeError: Attempted to assign to readonly property. */
  }
}

exports.Modal = __webpack_require__(/*! ./modal */ "./modules/client/head/modal.js");
exports.fontTest = __webpack_require__(/*! ./fontTest */ "./modules/client/head/fontTest.js");
exports.resizeOnload = __webpack_require__(/*! ./resizeOnload */ "./modules/client/head/resizeOnload/index.js");
__webpack_require__(/*! ./layout */ "./modules/client/head/layout.js");
__webpack_require__(/*! engine/sidebar/client */ "./modules/engine/sidebar/client/index.js");
__webpack_require__(/*! ./navigationArrows */ "./modules/client/head/navigationArrows.js");
__webpack_require__(/*! ./hover */ "./modules/client/head/hover.js");
__webpack_require__(/*! ./trackLinks */ "./modules/client/head/trackLinks.js");

/***/ }),

/***/ "./modules/client/head/layout.js":
/*!***************************************!*\
  !*** ./modules/client/head/layout.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let requestAnimationFrameId;

let DEBUG = false;
function log() {
  if (DEBUG) {
    console.log.apply(console, arguments);
  }
}

let TABLET_WIDTH = 840;

(function () {

  // don't handle onscroll more often than animation
  function onWindowScrollAndResizeThrottled() {
    log("onWindowScrollAndResizeThrottled", requestAnimationFrameId);
    if (requestAnimationFrameId) return;

    requestAnimationFrameId = window.requestAnimationFrame(function () {
      onWindowScrollAndResize();
      requestAnimationFrameId = null;
    });
  }

  window.addEventListener('scroll', onWindowScrollAndResizeThrottled);
  window.addEventListener('resize', onWindowScrollAndResizeThrottled);
  document.addEventListener('DOMContentLoaded', onWindowScrollAndResizeThrottled);
})();

function compactifySidebar() {
  log("compactifySidebar");
  let sidebar = document.querySelector('.sidebar');

  let sidebarContent = sidebar.querySelector('.sidebar__content');
  let sidebarInner = sidebar.querySelector('.sidebar__inner');

  let hasStickyFooter = sidebar.classList.contains('sidebar_sticky-footer');
  let isCompact = sidebar.classList.contains('sidebar_compact');

  if (isCompact) {
    let emptySpaceSize;
    if (hasStickyFooter) {
      emptySpaceSize = sidebarContent.lastElementChild.getBoundingClientRect().top - sidebarContent.lastElementChild.previousElementSibling.getBoundingClientRect().bottom;
    } else {
      emptySpaceSize = sidebarContent.getBoundingClientRect().bottom - sidebarContent.lastElementChild.getBoundingClientRect().bottom;
    }

    log("decompact?", emptySpaceSize);

    // enough space to occupy the full height in decompacted form without scrollbar
    if (emptySpaceSize > 150) {
      sidebar.classList.remove('sidebar_compact');
    }
  } else {
    log(sidebarInner.scrollHeight, sidebarInner.clientHeight);
    if (sidebarInner.scrollHeight > sidebarInner.clientHeight) {
      log("compact!");
      sidebar.classList.add('sidebar_compact');
    }
  }
}

function onWindowScrollAndResize() {

  let toolbarSelector = '.sitetoolbar-light';
  let sitetoolbar = document.querySelector(toolbarSelector);

  if (!sitetoolbar) {
    log("no sitetoolbar");
    return; // page in a no-top-nav layout
  }

  let sidebar = document.querySelector('.sidebar');

  if (sidebar) {
    sidebar.style.top = Math.max(sitetoolbar.getBoundingClientRect().bottom, 0) + 'px';
    compactifySidebar();
  }

  setUserScaleIfTablet();
}

function setUserScaleIfTablet() {
  let isTablet = document.documentElement.clientWidth <= TABLET_WIDTH;
  let content = document.querySelector('meta[name="viewport"]').content;
  content = content.replace(/user-scalable=\w+/, 'user-scalable=' + (isTablet ? 'yes' : 'no'));
  document.querySelector('meta[name="viewport"]').content = content;
}

/***/ }),

/***/ "./modules/client/head/modal.js":
/*!**************************************!*\
  !*** ./modules/client/head/modal.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Modal(options) {
  options = options || {};
  this.render();
  this.setHasClose(options.hasClose === undefined ? true : options.hasClose);

  this.onClick = this.onClick.bind(this);
  this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);

  this.elem.addEventListener('click', this.onClick);

  document.addEventListener("keydown", this.onDocumentKeyDown);
}

Modal.prototype.setHasClose = function (newHasClose) {
  this._hasClose = newHasClose;
  if (this._hasClose) {
    this.elem.classList.add('modal__has-close');
  } else {
    this.elem.classList.remove('modal__has-close');
  }
};

Modal.prototype.render = function () {
  document.body.insertAdjacentHTML('beforeEnd', '<div class="modal"><div class="modal__dialog"><button class="close-button modal__close" title="закрыть"></button><div class="modal__content"></div></div></div>');
  document.body.classList.add('paranja-open');
  this.elem = document.body.lastChild;
  this.contentElem = this.elem.querySelector('.modal__content');
};

Modal.prototype.onClick = function (event) {
  if (event.target.classList.contains('modal__close')) {
    this.remove();
    event.preventDefault();
  }
};

Modal.prototype.onDocumentKeyDown = function (event) {
  if (event.keyCode == 27) {
    event.preventDefault();
    this.remove();
  }
};

Modal.prototype.showOverlay = function () {
  this.contentElem.classList.add('modal-overlay_light');
};

Modal.prototype.hideOverlay = function () {
  this.contentElem.classList.remove('modal-overlay_light');
};

Modal.prototype.setContent = function (htmlOrNode) {
  if (typeof htmlOrNode == 'string') {
    this.contentElem.innerHTML = htmlOrNode;
  } else {
    this.contentElem.innerHTML = '';
    this.contentElem.appendChild(htmlOrNode);
  }
  // use data-modal-autofocus where only modal should autofocus,
  // a field with data-modal-autofocus will not get focus, unless shown in modal
  let autofocus = this.contentElem.querySelector('[data-modal-autofocus],[autofocus]');
  if (autofocus) autofocus.focus();
};

Modal.prototype.remove = function () {
  document.body.classList.remove('paranja-open');
  document.body.removeChild(this.elem);
  document.removeEventListener("keydown", this.onDocumentKeyDown);
  this.elem.dispatchEvent(new CustomEvent("modal-remove"));
};

module.exports = Modal;

/***/ }),

/***/ "./modules/client/head/navigationArrows.js":
/*!*************************************************!*\
  !*** ./modules/client/head/navigationArrows.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// navigation starts to work right now
let onSwipe = __webpack_require__(/*! client/onSwipe */ "./modules/client/onSwipe.js");
let ctrlOrAlt = ~navigator.userAgent.toLowerCase().indexOf("mac os x") ? 'ctrl' : 'alt';

function onKeyDown(event) {
  // don't react on Ctrl-> <- if in text
  if (document.activeElement) {
    if (~['INPUT', 'TEXTAREA', 'SELECT'].indexOf(document.activeElement.tagName)) return;
  }

  if (!event[ctrlOrAlt + 'Key']) return;

  let rel = null;
  switch (event.keyCode) {
    case 0x25:
      rel = 'prev';
      break;
    case 0x27:
      rel = 'next';
      break;
    default:
      return;
  }

  let link = document.querySelector('link[rel="' + rel + '"]');
  if (!link) return;

  document.location = link.href;
  event.preventDefault();
}

function showHotKeys() {
  let keyDesc = ctrlOrAlt[0].toUpperCase() + ctrlOrAlt.slice(1);

  let shortcut;

  let next = document.querySelector('link[rel="next"]');
  if (next) {
    shortcut = document.querySelector('a[href="' + next.getAttribute('href') + '"] .page__nav-text-shortcut');
    shortcut.innerHTML = keyDesc + ' + <span class="page__nav-text-arr">→</span>';
  }

  let prev = document.querySelector('link[rel="prev"]');
  if (prev) {
    shortcut = document.querySelector('a[href="' + prev.getAttribute('href') + '"] .page__nav-text-shortcut');
    shortcut.innerHTML = keyDesc + ' + <span class="page__nav-text-arr">←</span>';
  }
}

onSwipe(document, {
  onRight: function () {
    let link = document.querySelector('link[rel="prev"]');
    if (link) document.location = link.href;
  },
  onLeft: function () {
    let link = document.querySelector('link[rel="next"]');
    if (link) document.location = link.href;
  }
});

document.addEventListener('keydown', onKeyDown);

document.addEventListener('DOMContentLoaded', showHotKeys);

/***/ }),

/***/ "./modules/client/head/resizeOnload/iframeResize.js":
/*!**********************************************************!*\
  !*** ./modules/client/head/resizeOnload/iframeResize.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let getDocumentHeight = __webpack_require__(/*! client/dom/getDocumentHeight */ "./modules/client/dom/getDocumentHeight.js");

function iframeResize(ifrElem, callback) {

  let timeoutTimer = setTimeout(function () {
    // default height
    callback(new Error("timeout"));
  }, 500);

  function done(err, height) {
    clearTimeout(timeoutTimer);

    callback(err, height);
  }

  // throw right now if cross-domain
  try {
    /* jshint -W030 */
    (ifrElem.contentDocument || ifrElem.contentWindow.document).body;
  } catch (e) {
    iframeResizeCrossDomain(ifrElem, done);
  }

  // HINT: I shoulnd't move iframe in DOM, because it will reload it's contents when appended/inserted anywhere!
  // so I create a clone and work on it
  if (!ifrElem.offsetWidth) {
    // clone iframe at another place to see the size
    let cloneIframe = ifrElem.cloneNode(true);
    cloneIframe.name = "";

    cloneIframe.style.height = '50px';
    cloneIframe.style.position = 'absolute';
    cloneIframe.style.display = 'block';
    cloneIframe.style.top = '10000px';

    cloneIframe.onload = function () {
      let height = getDocumentHeight(this.contentDocument);
      ifrElem.style.display = 'block';
      cloneIframe.remove();
      done(null, height);
    };

    document.body.appendChild(cloneIframe);
    return;
  }

  ifrElem.style.display = 'block';
  ifrElem.style.height = '1px';

  let height = getDocumentHeight(ifrElem.contentDocument);

  ifrElem.style.height = '';
  done(null, height);
}

iframeResize.async = function iframeResizeAsync(iframe, callback) {
  // delay to let the code inside the iframe finish
  setTimeout(function () {
    iframeResize(iframe, callback);
  }, 0);
};

function iframeResizeCrossDomain(ifrElem, callback) {
  throw new Error("Not implemented yet");
}

module.exports = iframeResize;

/*
 window.onmessage = function(e) {
 if (e.origin != "http://ru.lookatcode.com") return;
 let data = JSON.parse(e.data);
 if (!data || data.cmd != "resize-iframe") return;
 let elem = document.getElementsByName(data.name)[0];

 elem.style.height = +data.height + 10 + "px";
 let deferred = iframeResizeCrossDomain.deferreds[data.id];
 deferred.resolve();
 };

 function iframeResizeCrossDomain(ifrElem, callback) {

 setTimeout(function() {
 callback(new Error("timeout"));
 }, 500);

 try {
 // try to see if resizer can work on this iframe
 ifrElem.contentWindow.postMessage("test", "http://ru.lookatcode.com");
 } catch(e) {
 // iframe from another domain, sorry
 callback(new Error("the resizer must be from ru.lookatcode.com"));
 return;
 }

 if (!ifrElem.offsetWidth) {
 // move iframe to another place to resize there
 let placeholder = document.createElement('span');
 ifrElem.parentNode.insertBefore(placeholder, ifrElem);
 document.body.appendChild(ifrElem);
 }

 ifrElem.style.display = 'none';

 let id = "" + Math.random();
 let message = { cmd: 'resize-iframe', name: ifrElem[0].name, id: id };
 // TODO
 iframeResizeCrossDomain.deferreds[id] = deferred;
 deferred.always(function() {
 delete iframeResizeCrossDomain.deferreds[id];
 });

 let frame = iframeResizeCrossDomain.iframe;
 if (frame.loaded) {
 frame.contentWindow.postMessage(JSON.stringify(message), "http://ru.lookatcode.com");
 } else {
 frame.on('load', function() {
 frame.contentWindow.postMessage(JSON.stringify(message), "http://ru.lookatcode.com");
 });
 }

 if (placeholder) {
 setTimeout(function() {
 placeholder.replaceWith(ifrElem);
 }, 20);
 }

 return deferred;
 }

 iframeResizeCrossDomain.deferreds = {};
 iframeResizeCrossDomain.iframe = $('<iframe src="http://ru.lookatcode.com/files/iframe-resize.html" style="display:none"></iframe>').prependTo('body');
 iframeResizeCrossDomain.iframe.on('load', function() {
 this.loaded = true;
 });
 */

/***/ }),

/***/ "./modules/client/head/resizeOnload/index.js":
/*!***************************************************!*\
  !*** ./modules/client/head/resizeOnload/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let iframeResize = __webpack_require__(/*! ./iframeResize */ "./modules/client/head/resizeOnload/iframeResize.js");

let throttle = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
// track resized iframes in window.onresize

let onResizeQueue = [];

exports.iframe = function (iframe) {

  function resize() {
    iframeResize.async(iframe, function (err, height) {
      if (err) console.error(err);
      if (height) iframe.style.height = height + 'px';
    });
  }

  resize();
};

exports.codeTabs = function (iframe) {
  function hideShowArrows() {

    // add arrows if needed
    let elem = iframe.closest('.code-tabs');
    let contentElem = iframe.closest('[data-code-tabs-content]');
    let switchesElem = elem.querySelector('[data-code-tabs-switches]');
    let switchesElemItems = switchesElem.firstElementChild;

    if (switchesElemItems.offsetWidth > switchesElem.offsetWidth) {
      elem.classList.add('code-tabs_scroll');
    } else {
      elem.classList.remove('code-tabs_scroll');
    }
  }

  hideShowArrows();
  onResizeQueue.push(hideShowArrows);
};

window.addEventListener('resize', throttle(function () {
  onResizeQueue.forEach(function (onResize) {
    onResize();
  });
}, 200));

/***/ }),

/***/ "./modules/client/head/trackLinks.js":
/*!*******************************************!*\
  !*** ./modules/client/head/trackLinks.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// current page host
let baseURI = window.location.host;

document.addEventListener('click', function (e) {

  if (e.which != 1) return; // track only left-mouse clicks
  if (e.defaultPrevented) return;

  // abandon if no active link or link within domain
  let link = e.target.closest && e.target.closest("a");
  if (!link || baseURI == link.host && !link.hasAttribute('data-track-outbound')) return;

  // invalid or blank target
  if (!~["_self", "_top", "_parent"].indexOf(link.target)) return;

  if (e.shiftKey || e.ctrlKey || e.altKey) return;

  // cancel event and record outbound link
  e.preventDefault();
  let href = link.href;
  window.ga('send', 'event', 'outbound', 'click', href, {
    hitCallback: loadPage
  });

  // redirect after half-second if recording takes too long
  setTimeout(loadPage, 500);

  // redirect to outbound page
  function loadPage() {
    document.location = href;
  }
});

/***/ }),

/***/ "./modules/client/onSwipe.js":
/*!***********************************!*\
  !*** ./modules/client/onSwipe.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function onSwipe(elem, options) {

  options = options || {};

  let startX,
      startY,
      dist,
      onRight = options.onRight || function () {},
      onLeft = options.onLeft || function () {},
      tolerance = options.tolerance || 50,
      // maximum vertical distance
  threshold = options.threshold || 150,
      //required min distance traveled to be considered swipe
  allowedTime = options.allowedTime || 500,
      // maximum time allowed to travel that distance
  elapsedTime,
      startTime;

  elem.addEventListener('touchstart', function (e) {
    let touchobj = e.changedTouches[0];
    dist = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    //console.log("start", startX, startY);
    startTime = Date.now(); // record time when finger first makes contact with surface
  });

  elem.addEventListener('touchend', function (e) {
    let touchobj = e.changedTouches[0];
    dist = touchobj.pageX - startX; // get total dist traveled by finger while in contact with surface
    elapsedTime = Date.now() - startTime; // get time elapsed

    //console.log("end", touchobj.pageX, touchobj.pageY);

    // too much up/down
    if (Math.abs(touchobj.pageY - startY) > tolerance) return;

    //console.log("time", elapsedTime, allowedTime);

    // too slow
    if (elapsedTime > allowedTime) return;

    let insideScrollable = false;
    let elem = e.target;
    while (elem != document.body) {
      if (elem.scrollWidth > elem.clientWidth) {
        insideScrollable = true;
        break;
      }
      elem = elem.parentElement;
    }

    if (insideScrollable) return;

    //console.log("threshold", dist, threshold);

    if (dist > threshold) {
      //console.log("right");
      onRight(e);
    }

    if (dist < -threshold) {
      //console.log("left");
      onLeft(e);
    }
  });
}

module.exports = onSwipe;

/***/ }),

/***/ "./modules/client/polyfill/customEvent.js":
/*!************************************************!*\
  !*** ./modules/client/polyfill/customEvent.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


try {
  new CustomEvent("IE has CustomEvent, but doesn't support constructor");
} catch (e) {

  window.CustomEvent = function (event, params) {
    let evt;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = Object.create(window.Event.prototype);
}

/***/ }),

/***/ "./modules/client/polyfill/dataset.js":
/*!********************************************!*\
  !*** ./modules/client/polyfill/dataset.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// dataset for IE10

if (!document.documentElement.dataset && (
// FF is empty while IE gives empty object
!Object.getOwnPropertyDescriptor(Element.prototype, 'dataset') || !Object.getOwnPropertyDescriptor(Element.prototype, 'dataset').get)) {
  let propDescriptor = {
    enumerable: true,
    get: function () {
      'use strict';

      let i,
          that = this,
          HTML5_DOMStringMap,
          attrVal,
          attrName,
          propName,
          attribute,
          attributes = this.attributes,
          attsLength = attributes.length,
          toUpperCase = function (n0) {
        return n0.charAt(1).toUpperCase();
      },
          getter = function () {
        return this;
      },
          setter = function (attrName, value) {
        return typeof value !== 'undefined' ? this.setAttribute(attrName, value) : this.removeAttribute(attrName);
      };
      try {
        // Simulate DOMStringMap w/accessor support
        // Test setting accessor on normal object
        ({}).__defineGetter__('test', function () {});
        HTML5_DOMStringMap = {};
      } catch (e1) {
        // Use a DOM object for IE8
        HTML5_DOMStringMap = document.createElement('div');
      }
      for (i = 0; i < attsLength; i++) {
        attribute = attributes[i];
        // Fix: This test really should allow any XML Name without
        //         colons (and non-uppercase for XHTML)
        if (attribute && attribute.name && /^data-\w[\w\-]*$/.test(attribute.name)) {
          attrVal = attribute.value;
          attrName = attribute.name;
          // Change to CamelCase
          propName = attrName.substr(5).replace(/-./g, toUpperCase);
          try {
            Object.defineProperty(HTML5_DOMStringMap, propName, {
              enumerable: this.enumerable,
              get: getter.bind(attrVal || ''),
              set: setter.bind(that, attrName)
            });
          } catch (e2) {
            // if accessors are not working
            HTML5_DOMStringMap[propName] = attrVal;
          }
        }
      }
      return HTML5_DOMStringMap;
    }
  };
  try {
    // FF enumerates over element's dataset, but not
    //   Element.prototype.dataset; IE9 iterates over both
    Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
  } catch (e) {
    propDescriptor.enumerable = false; // IE8 does not allow setting to true
    Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
  }
}

/***/ }),

/***/ "./modules/client/polyfill/dom.js":
/*!****************************************!*\
  !*** ./modules/client/polyfill/dom.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//require('./casperjs');

// http://dom.spec.whatwg.org/#mutation-method-macro
function mutation(nodes) {
  if (!nodes.length) {
    throw new Error('DOM Exception 8');
  } else if (nodes.length === 1) {
    return typeof nodes[0] === 'string' ? document.createTextNode(nodes[0]) : nodes[0];
  } else {
    var fragment = document.createDocumentFragment(),
        length = nodes.length,
        index = -1,
        node;

    while (++index < length) {
      node = nodes[index];

      fragment.appendChild(typeof node === 'string' ? document.createTextNode(node) : node);
    }

    return fragment;
  }
}

let methods = {
  // safari = webkitMatchesSelector
  matches: Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
  replace() {
    if (this.parentNode) {
      this.parentNode.replaceChild(mutation(arguments), this);
    }
  },
  prepend() {
    this.insertBefore(mutation(arguments), this.firstChild);
  },
  append() {
    this.appendChild(mutation(arguments));
  },
  remove() {
    let parentNode = this.parentNode;
    if (parentNode) {
      return parentNode.removeChild(this);
    }
  },
  before: function before() {
    if (this.parentNode) {
      this.parentNode.insertBefore(mutation(arguments), this);
    }
  },

  after: function after() {
    if (this.parentNode) {
      this.parentNode.insertBefore(mutation(arguments), this.nextSibling);
    }
  },
  closest: function (selector) {
    let node = this;

    while (node) {
      if (node.matches && node.matches(selector)) return node;else node = node.parentElement;
    }
    return null;
  }
};

for (let methodName in methods) {
  if (!Element.prototype[methodName]) {
    Element.prototype[methodName] = methods[methodName];
  }
}

__webpack_require__(/*! ./customEvent */ "./modules/client/polyfill/customEvent.js");
__webpack_require__(/*! ./dataset */ "./modules/client/polyfill/dataset.js");
__webpack_require__(/*! ./hidden */ "./modules/client/polyfill/hidden.js");
__webpack_require__(/*! ./requestAnimationFrame */ "./modules/client/polyfill/requestAnimationFrame.js");

/***/ }),

/***/ "./modules/client/polyfill/hidden.js":
/*!*******************************************!*\
  !*** ./modules/client/polyfill/hidden.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (document.documentElement.hidden === undefined) {
  document.head.insertAdjacentHTML('beforeEnd', '<style> [hidden] { display: none } </style>');
  Object.defineProperty(Element.prototype, "hidden", {
    set: function (value) {
      this.setAttribute('hidden', value);
    },
    get: function () {
      return this.getAttribute('hidden');
    }
  });
}

/***/ }),

/***/ "./modules/client/polyfill/index.js":
/*!******************************************!*\
  !*** ./modules/client/polyfill/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./dom */ "./modules/client/polyfill/dom.js");

/***/ }),

/***/ "./modules/client/polyfill/requestAnimationFrame.js":
/*!**********************************************************!*\
  !*** ./modules/client/polyfill/requestAnimationFrame.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// polyfill for old Android
(function () {
  let lastTime = 0;

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    let currTime = new Date().getTime();
    let timeToCall = Math.max(0, 16 - (currTime - lastTime));
    let id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})();

/***/ }),

/***/ "./modules/engine/sidebar/client/index.js":
/*!************************************************!*\
  !*** ./modules/engine/sidebar/client/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('click', onClick);

document.addEventListener('keydown', onKeyDown);

initSidebarHighlight();

function toggle() {

  let pageWrapper = document.querySelector('.page-wrapper');

  document.querySelector('.page').classList.toggle('page_sidebar_on');

  pageWrapper && pageWrapper.classList.toggle('page-wrapper_sidebar_on');

  if (document.querySelector('.page').classList.contains('page_sidebar_on')) {
    delete localStorage.noSidebar;
  } else {
    localStorage.noSidebar = 1;
  }
}

function onClick(event) {

  if (!event.target.hasAttribute('data-sidebar-toggle')) return;

  toggle();
}

function onKeyDown(event) {
  // don't react on Ctrl-> <- if in text
  if (document.activeElement) {
    if (~['INPUT', 'TEXTAREA', 'SELECT'].indexOf(document.activeElement.tagName)) return;
  }

  if (event.keyCode != "S".charCodeAt(0)) return;

  if (~navigator.userAgent.toLowerCase().indexOf("mac os x")) {
    if (!event.metaKey || !event.altKey) return;
  } else {
    if (!event.altKey) return;
  }

  toggle();
  event.preventDefault();
}

function initSidebarHighlight() {

  function highlight() {

    let current = document.getElementsByClassName('sidebar__navigation-link_active');
    if (current[0]) current[0].classList.remove('sidebar__navigation-link_active');

    //debugger;
    let h2s = document.getElementsByTagName('h2');
    let i;
    for (i = 0; i < h2s.length; i++) {
      let h2 = h2s[i];
      // first in-page header
      // >1, because when visiting http://javascript.local/native-prototypes#native-prototype-change,
      // top may be 0.375 or kind of...
      if (h2.getBoundingClientRect().top > 1) break;
    }
    i--; // we need the one before it (currently reading)

    if (i >= 0) {
      let href = h2s[i].firstElementChild && h2s[i].firstElementChild.getAttribute('href');
      let li = document.querySelector('.sidebar__navigation-link a[href="' + href + '"]');
      if (href && li) {
        li.classList.add('sidebar__navigation-link_active');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    highlight();

    window.addEventListener('scroll', highlight);
  });
}

/*
document.addEventListener('DOMContentLoaded', function() {

  if (window._bsa) {
    initCarbon();
  } else {
    let script = document.querySelector('script[src*="buysellads.com"]');
    script.onload = () => setTimeout(initCarbon);
  }

  function initCarbon() {

    _bsa.init('custom', 'CKYDEK3U', 'placement:javascriptinfo',
      {
        target:   '#carbon',
        template: `
    <a href="##statlink##" target="_blank" rel="nofollow noopener" class="carbon-cpc">
    <div class="carbon-description"><strong>##company##</strong> — ##description##</div>
    </a>
    <a href="https://www.carbonads.net/?utm_source=javascript-info-custom&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=custom" target="_blank" rel="nofollow noopener" class="carbon-sponsor">Ads via Carbon</a>
    `
      }
    );
  }
});
*/

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}

module.exports = baseTrim;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return root.Date.now();
};

module.exports = now;

/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5qcz83ZWJhMWNhZjYwYmE4NDNkMDVlNCIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvZG9tL2dldERvY3VtZW50SGVpZ2h0LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9kb20vZ2V0U2Nyb2xsYmFySGVpZ2h0LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9oZWFkL2ZvbnRUZXN0LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9oZWFkL2hvdmVyLmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9oZWFkL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9oZWFkL2xheW91dC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvaGVhZC9tb2RhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvaGVhZC9uYXZpZ2F0aW9uQXJyb3dzLmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9oZWFkL3Jlc2l6ZU9ubG9hZC9pZnJhbWVSZXNpemUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2hlYWQvcmVzaXplT25sb2FkL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9oZWFkL3RyYWNrTGlua3MuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L29uU3dpcGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L3BvbHlmaWxsL2N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9wb2x5ZmlsbC9kYXRhc2V0LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9wb2x5ZmlsbC9kb20uanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L3BvbHlmaWxsL2hpZGRlbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvcG9seWZpbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L3BvbHlmaWxsL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9lbmdpbmUvc2lkZWJhci9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRyaW0uanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wYWNrL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZXMvY2xpZW50L2hlYWQvaW5kZXguanNcIik7XG4iLCJsZXQgZ2V0U2Nyb2xsYmFySGVpZ2h0ID0gcmVxdWlyZSgnLi9nZXRTY3JvbGxiYXJIZWlnaHQnKTtcbmxldCBzY3JvbGxiYXJIZWlnaHQ7XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50SGVpZ2h0KGRvYykge1xuICBkb2MgPSBkb2MgfHwgZG9jdW1lbnQ7XG5cbiAgbGV0IGhlaWdodCA9IE1hdGgubWF4KFxuICAgIGRvYy5ib2R5LnNjcm9sbEhlaWdodCwgZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgZG9jLmJvZHkub2Zmc2V0SGVpZ2h0LCBkb2MuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICBkb2MuYm9keS5jbGllbnRIZWlnaHQsIGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICk7XG5cbiAgaWYgKGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGggPiBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSB7XG4gICAgLy8gZ290IGEgaG9yaXogc2Nyb2xsLCBsZXQncyBhZGQgaXRcbiAgICBpZiAoIXNjcm9sbGJhckhlaWdodCkgc2Nyb2xsYmFySGVpZ2h0ID0gZ2V0U2Nyb2xsYmFySGVpZ2h0KCk7XG4gICAgaGVpZ2h0ICs9IHNjcm9sbGJhckhlaWdodDtcbiAgfVxuXG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RG9jdW1lbnRIZWlnaHQ7XG5cbiIsImZ1bmN0aW9uIGdldFNjcm9sbGJhckhlaWdodCgpIHtcbiAgbGV0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3V0ZXIuc3R5bGUuY3NzVGV4dCA9IFwidmlzaWJpbGl0eTpoaWRkZW47aGVpZ2h0OjEwMHB4XCI7XG4gIGlmICghZG9jdW1lbnQuYm9keSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdldFNjcm9sbGJhckhlaWdodCBjYWxsZWQgdG8gZWFybHk6IG5vIGRvY3VtZW50LmJvZHlcIik7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgbGV0IHdpZHRoTm9TY3JvbGwgPSBvdXRlci5vZmZzZXRXaWR0aDtcbiAgLy8gZm9yY2Ugc2Nyb2xsYmFyc1xuICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG5cbiAgLy8gYWRkIGlubmVyZGl2XG4gIGxldCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcblxuICBsZXQgd2lkdGhXaXRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgLy8gcmVtb3ZlIGRpdnNcbiAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U2Nyb2xsYmFySGVpZ2h0O1xuIiwiLypcbtCY0LfQsdC10LPQsNC10LwgRk9VVCAtINC/0YDQvtGB0YLQvtC5INGB0L/QvtGB0L7QsSDQv9GA0L7QstC10YDQutC4INC30LDQs9GA0YPQt9C60Lgg0LjQutC+0L3QuNC6INGI0YDQuNGE0YLQsC5cbiAxKSDQlNC10LvQsNC10Lwg0LIgaWNvbmljINGI0YDQuNGE0YLQtSDQvtC00LjQvSDRgdC40LzQstC+0Lsg0YEg0LrQvtC00L7QvCAyMSAo0LLQvNC10YHRgtC+IMKrIcK7KVxuINCSIGljb25tb29uXG4gaHR0cDovL2lseWFrYW50b3IucnUvc2NyZWVuLzIwMTQtMDktMDZfMDE1Mi5wbmdcbiBodHRwOi8vaWx5YWthbnRvci5ydS9zY3JlZW4vMjAxNC0wOS0wNl8wMTUzLnBuZ1xuXG4g0K3RgtC+0YIg0YjRgNC40YTRgiDQsiDQvtCx0YvRh9C90L7QvCDRiNGA0LjRhNGC0LUgKHNlcmlmKSDRg9C30LrQuNC5INC/0L4g0YjQuNGA0LjQvdC1LCDQsCDQsiBpY29uaWMgLSDQvdC+0YDQvNCw0LvRjNC90YvQuS5cbiAyKSDQlNCw0LvQtdC1INC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0L7Qt9C00LDRkdC8IDxzcGFuPiE8L3NwYW4+INC4INC00LDRkdC8INC10LzRgyBmb250RmFtaWx5INGB0L3QsNGH0LDQu9CwIHNlcmlmINC4INC30LDQvNC10YDRj9C10Lwg0YjQuNGA0LjQvdGDLCDQsCDQv9C+0YLQvtC8IEZvbnRJY29ucywgc2VyaWYuXG4g0J7RgtC70LDQstC70LjQstCw0LXQvCDQvNC+0LzQtdC90YIsINC60L7Qs9C00LAg0YjQuNGA0LjQvdCwINC40LfQvNC10L3QuNGC0YHRjy4g0K3RgtC+INC30L3QsNGH0LjRgiDRiNGA0LjRhNGCINC30LDQs9GA0YPQttC10L0uXG4g0JzQvtC20L3QviDRg9Cx0YDQsNGC0Ywg0LrQu9Cw0YHRgSAubm8taWNvbnMg0Lgg0L/QvtC60LDQt9Cw0YLRjCDQuNC60L7QvdC60LguXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgZWxlbS5jbGFzc05hbWUgPSAnZm9udC10ZXN0JztcbiAgZWxlbS5zdHlsZS5mb250RmFtaWx5ID0gJ3NlcmlmJztcbiAgbGV0IGluaXRpYWxXaWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG5cbiAgZWxlbS5zdHlsZS5mb250RmFtaWx5ID0gJyc7XG5cbiAgZnVuY3Rpb24gY2hlY2tGb250TG9hZGVkKCkge1xuICAgIGlmIChpbml0aWFsV2lkdGggIT0gZWxlbS5vZmZzZXRXaWR0aCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1pY29ucycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KGNoZWNrRm9udExvYWRlZCwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0ZvbnRMb2FkZWQoKTtcblxufTtcbiIsIi8vIGFkZC9yZW1vdmUgLmhvdmVyIG9ubW91c2VlbnRlci9sZWF2ZVxuLy8gZm9yIG1vYmlsZSBkZXZpY2VzICg6aG92ZXIgc3RpY2tzKVxuXG5sZXQgY3VycmVudEhvdmVyRWxlbTtcblxuLypcbmZ1bmN0aW9uIGxvZyhlKSB7XG4gIGNvbnNvbGUubG9nKERhdGUubm93KCkgJSAxZTQsIGUudHlwZSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGxvZywgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGxvZywgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hsZWF2ZVwiLCBsb2csIGZhbHNlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hcIiwgbG9nLCBmYWxzZSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBsb2csIGZhbHNlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbG9nLCBmYWxzZSk7XG4qL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hZGQtY2xhc3Mtb24taG92ZXJdJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idXR0b24nKTtcbiAgaWYgKHRhcmdldCkge1xuICAgIGN1cnJlbnRIb3ZlckVsZW0gPSB0YXJnZXQ7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGN1cnJlbnRIb3ZlckVsZW0pIHtcbiAgICAgIGN1cnJlbnRIb3ZlckVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgIGN1cnJlbnRIb3ZlckVsZW0gPSBudWxsO1xuICAgIH1cbiAgfSwgNTAwKTsgLy8gdG91Y2hzdGFydCAtPiB0b3VyY2hlbmQgLT4gKGRlbGF5IHVwIHRvIDMwMG1zKSAtPiBtb3VzZW92ZXJcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmICghY3VycmVudEhvdmVyRWxlbSkgcmV0dXJuO1xuXG4gIGlmIChjdXJyZW50SG92ZXJFbGVtLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3VycmVudEhvdmVyRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICBjdXJyZW50SG92ZXJFbGVtID0gbnVsbDtcbn0pO1xuXG5pZiAoIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS9nKSkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd29ya2luZy1ob3ZlcicpO1xufVxuXG4iLCJcbnJlcXVpcmUoJ2NsaWVudC9wb2x5ZmlsbCcpO1xuXG50cnkge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnRlc3RQcm9wZXJ0eSA9IDE7XG4gIGRlbGV0ZSB3aW5kb3cubG9jYWxTdG9yYWdlLnRlc3RQcm9wZXJ0eTtcbn0gY2F0Y2goZSkge1xuICAvLyBsb2NhbFN0b3JhZ2UgZGlzYWJsZWQgb3IgZm9yYmlkZGVuXG4gIHRyeSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZSA9IHt9O1xuICAgIC8vIHNvIHRoYXQgb3BlcmF0aW9ucyBvbiBpdCB3b24ndCBmYWlsXG4gIH0gY2F0Y2goZSkge1xuICAgIC8qIGNhbiBoYXBwZW4gVHlwZUVycm9yOiBBdHRlbXB0ZWQgdG8gYXNzaWduIHRvIHJlYWRvbmx5IHByb3BlcnR5LiAqL1xuICB9XG59XG5cbmV4cG9ydHMuTW9kYWwgPSByZXF1aXJlKCcuL21vZGFsJyk7XG5leHBvcnRzLmZvbnRUZXN0ID0gcmVxdWlyZSgnLi9mb250VGVzdCcpO1xuZXhwb3J0cy5yZXNpemVPbmxvYWQgPSByZXF1aXJlKCcuL3Jlc2l6ZU9ubG9hZCcpO1xucmVxdWlyZSgnLi9sYXlvdXQnKTtcbnJlcXVpcmUoJ2VuZ2luZS9zaWRlYmFyL2NsaWVudCcpO1xucmVxdWlyZSgnLi9uYXZpZ2F0aW9uQXJyb3dzJyk7XG5yZXF1aXJlKCcuL2hvdmVyJyk7XG5yZXF1aXJlKCcuL3RyYWNrTGlua3MnKTtcblxuIiwibGV0IHJlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuXG5sZXQgREVCVUcgPSBmYWxzZTtcbmZ1bmN0aW9uIGxvZygpIHtcbiAgaWYgKERFQlVHKSB7XG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5sZXQgVEFCTEVUX1dJRFRIID0gODQwO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gZG9uJ3QgaGFuZGxlIG9uc2Nyb2xsIG1vcmUgb2Z0ZW4gdGhhbiBhbmltYXRpb25cbiAgZnVuY3Rpb24gb25XaW5kb3dTY3JvbGxBbmRSZXNpemVUaHJvdHRsZWQoKSB7XG4gICAgbG9nKFwib25XaW5kb3dTY3JvbGxBbmRSZXNpemVUaHJvdHRsZWRcIiwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCkgcmV0dXJuO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgb25XaW5kb3dTY3JvbGxBbmRSZXNpemUoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gbnVsbDtcbiAgICB9KTtcblxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uV2luZG93U2Nyb2xsQW5kUmVzaXplVGhyb3R0bGVkKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93U2Nyb2xsQW5kUmVzaXplVGhyb3R0bGVkKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG9uV2luZG93U2Nyb2xsQW5kUmVzaXplVGhyb3R0bGVkKTtcblxufSkoKTtcblxuZnVuY3Rpb24gY29tcGFjdGlmeVNpZGViYXIoKSB7XG4gIGxvZyhcImNvbXBhY3RpZnlTaWRlYmFyXCIpO1xuICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgbGV0IHNpZGViYXJDb250ZW50ID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fY29udGVudCcpO1xuICBsZXQgc2lkZWJhcklubmVyID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9faW5uZXInKTtcblxuICBsZXQgaGFzU3RpY2t5Rm9vdGVyID0gc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJfc3RpY2t5LWZvb3RlcicpO1xuICBsZXQgaXNDb21wYWN0ID0gc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJfY29tcGFjdCcpO1xuXG4gIGlmIChpc0NvbXBhY3QpIHtcbiAgICBsZXQgZW1wdHlTcGFjZVNpemU7XG4gICAgaWYgKGhhc1N0aWNreUZvb3Rlcikge1xuICAgICAgZW1wdHlTcGFjZVNpemUgPSBzaWRlYmFyQ29udGVudC5sYXN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgICBzaWRlYmFyQ29udGVudC5sYXN0RWxlbWVudENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbXB0eVNwYWNlU2l6ZSA9IHNpZGViYXJDb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtXG4gICAgICBzaWRlYmFyQ29udGVudC5sYXN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICB9XG5cbiAgICBsb2coXCJkZWNvbXBhY3Q/XCIsIGVtcHR5U3BhY2VTaXplKTtcblxuICAgIC8vIGVub3VnaCBzcGFjZSB0byBvY2N1cHkgdGhlIGZ1bGwgaGVpZ2h0IGluIGRlY29tcGFjdGVkIGZvcm0gd2l0aG91dCBzY3JvbGxiYXJcbiAgICBpZiAoZW1wdHlTcGFjZVNpemUgPiAxNTApIHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhcl9jb21wYWN0Jyk7XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgbG9nKHNpZGViYXJJbm5lci5zY3JvbGxIZWlnaHQsIHNpZGViYXJJbm5lci5jbGllbnRIZWlnaHQpO1xuICAgIGlmIChzaWRlYmFySW5uZXIuc2Nyb2xsSGVpZ2h0ID4gc2lkZWJhcklubmVyLmNsaWVudEhlaWdodCkge1xuICAgICAgbG9nKFwiY29tcGFjdCFcIik7XG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfY29tcGFjdCcpO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuZnVuY3Rpb24gb25XaW5kb3dTY3JvbGxBbmRSZXNpemUoKSB7XG5cbiAgbGV0IHRvb2xiYXJTZWxlY3RvciA9ICcuc2l0ZXRvb2xiYXItbGlnaHQnO1xuICBsZXQgc2l0ZXRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvb2xiYXJTZWxlY3Rvcik7XG5cblxuICBpZiAoIXNpdGV0b29sYmFyKSB7XG4gICAgbG9nKFwibm8gc2l0ZXRvb2xiYXJcIik7XG4gICAgcmV0dXJuOyAvLyBwYWdlIGluIGEgbm8tdG9wLW5hdiBsYXlvdXRcbiAgfVxuXG4gIGxldCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuICBpZiAoc2lkZWJhcikge1xuICAgIHNpZGViYXIuc3R5bGUudG9wID0gTWF0aC5tYXgoc2l0ZXRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tLCAwKSArICdweCc7XG4gICAgY29tcGFjdGlmeVNpZGViYXIoKTtcbiAgfVxuXG4gIHNldFVzZXJTY2FsZUlmVGFibGV0KCk7XG5cblxufVxuXG5mdW5jdGlvbiBzZXRVc2VyU2NhbGVJZlRhYmxldCgpIHtcbiAgbGV0IGlzVGFibGV0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IFRBQkxFVF9XSURUSDtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLmNvbnRlbnQ7XG4gIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL3VzZXItc2NhbGFibGU9XFx3Ky8sICd1c2VyLXNjYWxhYmxlPScgKyAoaXNUYWJsZXQgPyAneWVzJyA6ICdubycpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKS5jb250ZW50ID0gY29udGVudDtcbn1cbiIsImZ1bmN0aW9uIE1vZGFsKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucmVuZGVyKCk7XG4gIHRoaXMuc2V0SGFzQ2xvc2Uob3B0aW9ucy5oYXNDbG9zZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuaGFzQ2xvc2UpO1xuXG4gIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB0aGlzLm9uRG9jdW1lbnRLZXlEb3duID0gdGhpcy5vbkRvY3VtZW50S2V5RG93bi5iaW5kKHRoaXMpO1xuXG4gIHRoaXMuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbkRvY3VtZW50S2V5RG93bik7XG59XG5cbk1vZGFsLnByb3RvdHlwZS5zZXRIYXNDbG9zZSA9IGZ1bmN0aW9uKG5ld0hhc0Nsb3NlKSB7XG4gIHRoaXMuX2hhc0Nsb3NlID0gbmV3SGFzQ2xvc2U7XG4gIGlmICh0aGlzLl9oYXNDbG9zZSkge1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9faGFzLWNsb3NlJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5lbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19oYXMtY2xvc2UnKTtcbiAgfVxufTtcblxuTW9kYWwucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJyxcbiAgICAnPGRpdiBjbGFzcz1cIm1vZGFsXCI+PGRpdiBjbGFzcz1cIm1vZGFsX19kaWFsb2dcIj48YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnV0dG9uIG1vZGFsX19jbG9zZVwiIHRpdGxlPVwi0LfQsNC60YDRi9GC0YxcIj48L2J1dHRvbj48ZGl2IGNsYXNzPVwibW9kYWxfX2NvbnRlbnRcIj48L2Rpdj48L2Rpdj48L2Rpdj4nXG4gICk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncGFyYW5qYS1vcGVuJyk7XG4gIHRoaXMuZWxlbSA9IGRvY3VtZW50LmJvZHkubGFzdENoaWxkO1xuICB0aGlzLmNvbnRlbnRFbGVtID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGVudCcpO1xufTtcblxuTW9kYWwucHJvdG90eXBlLm9uQ2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWxfX2Nsb3NlJykpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn07XG5cblxuTW9kYWwucHJvdG90eXBlLm9uRG9jdW1lbnRLZXlEb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMjcpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cbn07XG5cbk1vZGFsLnByb3RvdHlwZS5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNvbnRlbnRFbGVtLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW92ZXJsYXlfbGlnaHQnKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5oaWRlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNvbnRlbnRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW92ZXJsYXlfbGlnaHQnKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24oaHRtbE9yTm9kZSkge1xuICBpZiAodHlwZW9mIGh0bWxPck5vZGUgPT0gJ3N0cmluZycpIHtcbiAgICB0aGlzLmNvbnRlbnRFbGVtLmlubmVySFRNTCA9IGh0bWxPck5vZGU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb250ZW50RWxlbS5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmNvbnRlbnRFbGVtLmFwcGVuZENoaWxkKGh0bWxPck5vZGUpO1xuICB9XG4gIC8vIHVzZSBkYXRhLW1vZGFsLWF1dG9mb2N1cyB3aGVyZSBvbmx5IG1vZGFsIHNob3VsZCBhdXRvZm9jdXMsXG4gIC8vIGEgZmllbGQgd2l0aCBkYXRhLW1vZGFsLWF1dG9mb2N1cyB3aWxsIG5vdCBnZXQgZm9jdXMsIHVubGVzcyBzaG93biBpbiBtb2RhbFxuICBsZXQgYXV0b2ZvY3VzID0gdGhpcy5jb250ZW50RWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2RhbC1hdXRvZm9jdXNdLFthdXRvZm9jdXNdJyk7XG4gIGlmIChhdXRvZm9jdXMpIGF1dG9mb2N1cy5mb2N1cygpO1xufTtcblxuTW9kYWwucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3BhcmFuamEtb3BlbicpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Eb2N1bWVudEtleURvd24pO1xuICB0aGlzLmVsZW0uZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJtb2RhbC1yZW1vdmVcIikpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbDtcbiIsIi8vIG5hdmlnYXRpb24gc3RhcnRzIHRvIHdvcmsgcmlnaHQgbm93XG5sZXQgb25Td2lwZSA9IHJlcXVpcmUoJ2NsaWVudC9vblN3aXBlJyk7XG5sZXQgY3RybE9yQWx0ID0gfm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwibWFjIG9zIHhcIikgPyAnY3RybCcgOiAnYWx0JztcblxuZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gIC8vIGRvbid0IHJlYWN0IG9uIEN0cmwtPiA8LSBpZiBpbiB0ZXh0XG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50KSB7XG4gICAgaWYgKH5bJ0lOUFVUJywgJ1RFWFRBUkVBJywgJ1NFTEVDVCddLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50YWdOYW1lKSkgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFldmVudFtjdHJsT3JBbHQgKyAnS2V5J10pIHJldHVybjtcblxuICBsZXQgcmVsID0gbnVsbDtcbiAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gIGNhc2UgMHgyNTpcbiAgICByZWwgPSAncHJldic7XG4gICAgYnJlYWs7XG4gIGNhc2UgMHgyNzpcbiAgICByZWwgPSAnbmV4dCc7XG4gICAgYnJlYWs7XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cIicgKyByZWwgKyAnXCJdJyk7XG4gIGlmICghbGluaykgcmV0dXJuO1xuXG4gIGRvY3VtZW50LmxvY2F0aW9uID0gbGluay5ocmVmO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG59XG5cbmZ1bmN0aW9uIHNob3dIb3RLZXlzKCkge1xuICBsZXQga2V5RGVzYyA9IGN0cmxPckFsdFswXS50b1VwcGVyQ2FzZSgpICsgY3RybE9yQWx0LnNsaWNlKDEpO1xuXG4gIGxldCBzaG9ydGN1dDtcblxuICBsZXQgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwibmV4dFwiXScpO1xuICBpZiAobmV4dCkge1xuICAgIHNob3J0Y3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiJyArIG5leHQuZ2V0QXR0cmlidXRlKCdocmVmJykgKyAnXCJdIC5wYWdlX19uYXYtdGV4dC1zaG9ydGN1dCcpO1xuICAgIHNob3J0Y3V0LmlubmVySFRNTCA9IGtleURlc2MgKyAnICsgPHNwYW4gY2xhc3M9XCJwYWdlX19uYXYtdGV4dC1hcnJcIj7ihpI8L3NwYW4+JztcbiAgfVxuXG4gIGxldCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJwcmV2XCJdJyk7XG4gIGlmIChwcmV2KSB7XG4gICAgc2hvcnRjdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCInICsgcHJldi5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSArICdcIl0gLnBhZ2VfX25hdi10ZXh0LXNob3J0Y3V0Jyk7XG4gICAgc2hvcnRjdXQuaW5uZXJIVE1MID0ga2V5RGVzYyArICcgKyA8c3BhbiBjbGFzcz1cInBhZ2VfX25hdi10ZXh0LWFyclwiPuKGkDwvc3Bhbj4nO1xuICB9XG5cbn1cblxub25Td2lwZShkb2N1bWVudCwge1xuICBvblJpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICBsZXQgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwicHJldlwiXScpO1xuICAgIGlmIChsaW5rKSBkb2N1bWVudC5sb2NhdGlvbiA9IGxpbmsuaHJlZjtcbiAgfSxcbiAgb25MZWZ0OiBmdW5jdGlvbigpIHtcbiAgICBsZXQgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwibmV4dFwiXScpO1xuICAgIGlmIChsaW5rKSBkb2N1bWVudC5sb2NhdGlvbiA9IGxpbmsuaHJlZjtcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgc2hvd0hvdEtleXMpO1xuIiwibGV0IGdldERvY3VtZW50SGVpZ2h0ID0gcmVxdWlyZSgnY2xpZW50L2RvbS9nZXREb2N1bWVudEhlaWdodCcpO1xuXG5mdW5jdGlvbiBpZnJhbWVSZXNpemUoaWZyRWxlbSwgY2FsbGJhY2spIHtcblxuXG4gIGxldCB0aW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vIGRlZmF1bHQgaGVpZ2h0XG4gICAgY2FsbGJhY2sobmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gIH0sIDUwMCk7XG5cbiAgZnVuY3Rpb24gZG9uZShlcnIsIGhlaWdodCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpO1xuXG4gICAgY2FsbGJhY2soZXJyLCBoZWlnaHQpO1xuICB9XG5cbiAgLy8gdGhyb3cgcmlnaHQgbm93IGlmIGNyb3NzLWRvbWFpblxuICB0cnkge1xuICAgIC8qIGpzaGludCAtVzAzMCAqL1xuICAgIChpZnJFbGVtLmNvbnRlbnREb2N1bWVudCB8fCBpZnJFbGVtLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQpLmJvZHk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZnJhbWVSZXNpemVDcm9zc0RvbWFpbihpZnJFbGVtLCBkb25lKTtcbiAgfVxuXG5cbiAgLy8gSElOVDogSSBzaG91bG5kJ3QgbW92ZSBpZnJhbWUgaW4gRE9NLCBiZWNhdXNlIGl0IHdpbGwgcmVsb2FkIGl0J3MgY29udGVudHMgd2hlbiBhcHBlbmRlZC9pbnNlcnRlZCBhbnl3aGVyZSFcbiAgLy8gc28gSSBjcmVhdGUgYSBjbG9uZSBhbmQgd29yayBvbiBpdFxuICBpZiAoIWlmckVsZW0ub2Zmc2V0V2lkdGgpIHtcbiAgICAvLyBjbG9uZSBpZnJhbWUgYXQgYW5vdGhlciBwbGFjZSB0byBzZWUgdGhlIHNpemVcbiAgICBsZXQgY2xvbmVJZnJhbWUgPSBpZnJFbGVtLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZUlmcmFtZS5uYW1lID0gXCJcIjtcblxuICAgIGNsb25lSWZyYW1lLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgICBjbG9uZUlmcmFtZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgY2xvbmVJZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY2xvbmVJZnJhbWUuc3R5bGUudG9wID0gJzEwMDAwcHgnO1xuXG4gICAgY2xvbmVJZnJhbWUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgaGVpZ2h0ID0gZ2V0RG9jdW1lbnRIZWlnaHQodGhpcy5jb250ZW50RG9jdW1lbnQpO1xuICAgICAgaWZyRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGNsb25lSWZyYW1lLnJlbW92ZSgpO1xuICAgICAgZG9uZShudWxsLCBoZWlnaHQpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lSWZyYW1lKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZnJFbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBpZnJFbGVtLnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuXG4gIGxldCBoZWlnaHQgPSBnZXREb2N1bWVudEhlaWdodChpZnJFbGVtLmNvbnRlbnREb2N1bWVudCk7XG5cbiAgaWZyRWxlbS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgZG9uZShudWxsLCBoZWlnaHQpO1xufVxuXG5pZnJhbWVSZXNpemUuYXN5bmMgPSBmdW5jdGlvbiBpZnJhbWVSZXNpemVBc3luYyhpZnJhbWUsIGNhbGxiYWNrKSB7XG4gIC8vIGRlbGF5IHRvIGxldCB0aGUgY29kZSBpbnNpZGUgdGhlIGlmcmFtZSBmaW5pc2hcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBpZnJhbWVSZXNpemUoaWZyYW1lLCBjYWxsYmFjayk7XG4gIH0sIDApO1xufTtcblxuXG5mdW5jdGlvbiBpZnJhbWVSZXNpemVDcm9zc0RvbWFpbihpZnJFbGVtLCBjYWxsYmFjaykge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlmcmFtZVJlc2l6ZTtcblxuXG4vKlxuIHdpbmRvdy5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XG4gaWYgKGUub3JpZ2luICE9IFwiaHR0cDovL3J1Lmxvb2thdGNvZGUuY29tXCIpIHJldHVybjtcbiBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiBpZiAoIWRhdGEgfHwgZGF0YS5jbWQgIT0gXCJyZXNpemUtaWZyYW1lXCIpIHJldHVybjtcbiBsZXQgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGRhdGEubmFtZSlbMF07XG5cbiBlbGVtLnN0eWxlLmhlaWdodCA9ICtkYXRhLmhlaWdodCArIDEwICsgXCJweFwiO1xuIGxldCBkZWZlcnJlZCA9IGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluLmRlZmVycmVkc1tkYXRhLmlkXTtcbiBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gfTtcblxuIGZ1bmN0aW9uIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluKGlmckVsZW0sIGNhbGxiYWNrKSB7XG5cbiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuIGNhbGxiYWNrKG5ldyBFcnJvcihcInRpbWVvdXRcIikpO1xuIH0sIDUwMCk7XG5cbiB0cnkge1xuIC8vIHRyeSB0byBzZWUgaWYgcmVzaXplciBjYW4gd29yayBvbiB0aGlzIGlmcmFtZVxuIGlmckVsZW0uY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShcInRlc3RcIiwgXCJodHRwOi8vcnUubG9va2F0Y29kZS5jb21cIik7XG4gfSBjYXRjaChlKSB7XG4gLy8gaWZyYW1lIGZyb20gYW5vdGhlciBkb21haW4sIHNvcnJ5XG4gY2FsbGJhY2sobmV3IEVycm9yKFwidGhlIHJlc2l6ZXIgbXVzdCBiZSBmcm9tIHJ1Lmxvb2thdGNvZGUuY29tXCIpKTtcbiByZXR1cm47XG4gfVxuXG4gaWYgKCFpZnJFbGVtLm9mZnNldFdpZHRoKSB7XG4gLy8gbW92ZSBpZnJhbWUgdG8gYW5vdGhlciBwbGFjZSB0byByZXNpemUgdGhlcmVcbiBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gaWZyRWxlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwbGFjZWhvbGRlciwgaWZyRWxlbSk7XG4gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJFbGVtKTtcbiB9XG5cbiBpZnJFbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiBsZXQgaWQgPSBcIlwiICsgTWF0aC5yYW5kb20oKTtcbiBsZXQgbWVzc2FnZSA9IHsgY21kOiAncmVzaXplLWlmcmFtZScsIG5hbWU6IGlmckVsZW1bMF0ubmFtZSwgaWQ6IGlkIH07XG4gLy8gVE9ET1xuIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluLmRlZmVycmVkc1tpZF0gPSBkZWZlcnJlZDtcbiBkZWZlcnJlZC5hbHdheXMoZnVuY3Rpb24oKSB7XG4gZGVsZXRlIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluLmRlZmVycmVkc1tpZF07XG4gfSk7XG5cbiBsZXQgZnJhbWUgPSBpZnJhbWVSZXNpemVDcm9zc0RvbWFpbi5pZnJhbWU7XG4gaWYgKGZyYW1lLmxvYWRlZCkge1xuIGZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIFwiaHR0cDovL3J1Lmxvb2thdGNvZGUuY29tXCIpO1xuIH0gZWxzZSB7XG4gZnJhbWUub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiBmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpLCBcImh0dHA6Ly9ydS5sb29rYXRjb2RlLmNvbVwiKTtcbiB9KTtcbiB9XG5cbiBpZiAocGxhY2Vob2xkZXIpIHtcbiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuIHBsYWNlaG9sZGVyLnJlcGxhY2VXaXRoKGlmckVsZW0pO1xuIH0sIDIwKTtcbiB9XG5cbiByZXR1cm4gZGVmZXJyZWQ7XG4gfVxuXG4gaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4uZGVmZXJyZWRzID0ge307XG4gaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4uaWZyYW1lID0gJCgnPGlmcmFtZSBzcmM9XCJodHRwOi8vcnUubG9va2F0Y29kZS5jb20vZmlsZXMvaWZyYW1lLXJlc2l6ZS5odG1sXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT4nKS5wcmVwZW5kVG8oJ2JvZHknKTtcbiBpZnJhbWVSZXNpemVDcm9zc0RvbWFpbi5pZnJhbWUub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiB0aGlzLmxvYWRlZCA9IHRydWU7XG4gfSk7XG4gKi9cbiIsImxldCBpZnJhbWVSZXNpemUgPSByZXF1aXJlKCcuL2lmcmFtZVJlc2l6ZScpO1xuXG5sZXQgdGhyb3R0bGUgPSByZXF1aXJlKCdsb2Rhc2gvdGhyb3R0bGUnKTtcbi8vIHRyYWNrIHJlc2l6ZWQgaWZyYW1lcyBpbiB3aW5kb3cub25yZXNpemVcblxubGV0IG9uUmVzaXplUXVldWUgPSBbXTtcblxuZXhwb3J0cy5pZnJhbWUgPSBmdW5jdGlvbihpZnJhbWUpIHtcblxuICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgaWZyYW1lUmVzaXplLmFzeW5jKGlmcmFtZSwgZnVuY3Rpb24oZXJyLCBoZWlnaHQpIHtcbiAgICAgIGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIGlmIChoZWlnaHQpIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIH0pO1xuICB9XG5cbiAgcmVzaXplKCk7XG59O1xuXG5leHBvcnRzLmNvZGVUYWJzID0gZnVuY3Rpb24oaWZyYW1lKSB7XG4gIGZ1bmN0aW9uIGhpZGVTaG93QXJyb3dzKCkge1xuXG4gICAgLy8gYWRkIGFycm93cyBpZiBuZWVkZWRcbiAgICBsZXQgZWxlbSA9IGlmcmFtZS5jbG9zZXN0KCcuY29kZS10YWJzJyk7XG4gICAgbGV0IGNvbnRlbnRFbGVtID0gaWZyYW1lLmNsb3Nlc3QoJ1tkYXRhLWNvZGUtdGFicy1jb250ZW50XScpO1xuICAgIGxldCBzd2l0Y2hlc0VsZW0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvZGUtdGFicy1zd2l0Y2hlc10nKTtcbiAgICBsZXQgc3dpdGNoZXNFbGVtSXRlbXMgPSBzd2l0Y2hlc0VsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBpZiAoc3dpdGNoZXNFbGVtSXRlbXMub2Zmc2V0V2lkdGggPiBzd2l0Y2hlc0VsZW0ub2Zmc2V0V2lkdGgpIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnY29kZS10YWJzX3Njcm9sbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NvZGUtdGFic19zY3JvbGwnKTtcbiAgICB9XG5cbiAgfVxuXG4gIGhpZGVTaG93QXJyb3dzKCk7XG4gIG9uUmVzaXplUXVldWUucHVzaChoaWRlU2hvd0Fycm93cyk7XG59O1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlKGZ1bmN0aW9uKCkge1xuICBvblJlc2l6ZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24ob25SZXNpemUpIHtcbiAgICBvblJlc2l6ZSgpO1xuICB9KTtcbn0sIDIwMCkpO1xuIiwiLy8gY3VycmVudCBwYWdlIGhvc3RcbmxldCBiYXNlVVJJID0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXG4gIGlmIChlLndoaWNoICE9IDEpIHJldHVybjsgLy8gdHJhY2sgb25seSBsZWZ0LW1vdXNlIGNsaWNrc1xuICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG5cbiAgLy8gYWJhbmRvbiBpZiBubyBhY3RpdmUgbGluayBvciBsaW5rIHdpdGhpbiBkb21haW5cbiAgbGV0IGxpbmsgPSBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoXCJhXCIpO1xuICBpZiAoIWxpbmsgfHwgKGJhc2VVUkkgPT0gbGluay5ob3N0ICYmICFsaW5rLmhhc0F0dHJpYnV0ZSgnZGF0YS10cmFjay1vdXRib3VuZCcpKSkgcmV0dXJuO1xuXG4gIC8vIGludmFsaWQgb3IgYmxhbmsgdGFyZ2V0XG4gIGlmICghfltcIl9zZWxmXCIsIFwiX3RvcFwiLCBcIl9wYXJlbnRcIl0uaW5kZXhPZihsaW5rLnRhcmdldCkpIHJldHVybjtcblxuICBpZiAoZS5zaGlmdEtleSB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkpIHJldHVybjtcblxuICAvLyBjYW5jZWwgZXZlbnQgYW5kIHJlY29yZCBvdXRib3VuZCBsaW5rXG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGhyZWYgPSBsaW5rLmhyZWY7XG4gIHdpbmRvdy5nYSgnc2VuZCcsICdldmVudCcsICdvdXRib3VuZCcsICdjbGljaycsIGhyZWYsIHtcbiAgICBoaXRDYWxsYmFjazogbG9hZFBhZ2VcbiAgfSk7XG5cbiAgLy8gcmVkaXJlY3QgYWZ0ZXIgaGFsZi1zZWNvbmQgaWYgcmVjb3JkaW5nIHRha2VzIHRvbyBsb25nXG4gIHNldFRpbWVvdXQobG9hZFBhZ2UsIDUwMCk7XG5cbiAgLy8gcmVkaXJlY3QgdG8gb3V0Ym91bmQgcGFnZVxuICBmdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBkb2N1bWVudC5sb2NhdGlvbiA9IGhyZWY7XG4gIH1cblxufSk7XG4iLCJmdW5jdGlvbiBvblN3aXBlKGVsZW0sIG9wdGlvbnMpIHtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBsZXQgc3RhcnRYLFxuICAgICAgc3RhcnRZLFxuICAgICAgZGlzdCxcbiAgICAgIG9uUmlnaHQgPSBvcHRpb25zLm9uUmlnaHQgfHwgZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uTGVmdCA9IG9wdGlvbnMub25MZWZ0IHx8IGZ1bmN0aW9uKCl7fSxcbiAgICAgIHRvbGVyYW5jZSA9IG9wdGlvbnMudG9sZXJhbmNlIHx8IDUwLCAvLyBtYXhpbXVtIHZlcnRpY2FsIGRpc3RhbmNlXG4gICAgICB0aHJlc2hvbGQgPSBvcHRpb25zLnRocmVzaG9sZCB8fCAxNTAsIC8vcmVxdWlyZWQgbWluIGRpc3RhbmNlIHRyYXZlbGVkIHRvIGJlIGNvbnNpZGVyZWQgc3dpcGVcbiAgICAgIGFsbG93ZWRUaW1lID0gb3B0aW9ucy5hbGxvd2VkVGltZSB8fCA1MDAsIC8vIG1heGltdW0gdGltZSBhbGxvd2VkIHRvIHRyYXZlbCB0aGF0IGRpc3RhbmNlXG4gICAgICBlbGFwc2VkVGltZSxcbiAgICAgIHN0YXJ0VGltZTtcblxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBkaXN0ID0gMDtcbiAgICBzdGFydFggPSB0b3VjaG9iai5wYWdlWDtcbiAgICBzdGFydFkgPSB0b3VjaG9iai5wYWdlWTtcbiAgICAvL2NvbnNvbGUubG9nKFwic3RhcnRcIiwgc3RhcnRYLCBzdGFydFkpO1xuICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7IC8vIHJlY29yZCB0aW1lIHdoZW4gZmluZ2VyIGZpcnN0IG1ha2VzIGNvbnRhY3Qgd2l0aCBzdXJmYWNlXG4gIH0pO1xuXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBkaXN0ID0gdG91Y2hvYmoucGFnZVggLSBzdGFydFg7IC8vIGdldCB0b3RhbCBkaXN0IHRyYXZlbGVkIGJ5IGZpbmdlciB3aGlsZSBpbiBjb250YWN0IHdpdGggc3VyZmFjZVxuICAgIGVsYXBzZWRUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTsgLy8gZ2V0IHRpbWUgZWxhcHNlZFxuXG4gICAgLy9jb25zb2xlLmxvZyhcImVuZFwiLCB0b3VjaG9iai5wYWdlWCwgdG91Y2hvYmoucGFnZVkpO1xuXG4gICAgLy8gdG9vIG11Y2ggdXAvZG93blxuICAgIGlmIChNYXRoLmFicyh0b3VjaG9iai5wYWdlWSAtIHN0YXJ0WSkgPiB0b2xlcmFuY2UpIHJldHVybjtcblxuICAgIC8vY29uc29sZS5sb2coXCJ0aW1lXCIsIGVsYXBzZWRUaW1lLCBhbGxvd2VkVGltZSk7XG5cbiAgICAvLyB0b28gc2xvd1xuICAgIGlmIChlbGFwc2VkVGltZSA+IGFsbG93ZWRUaW1lKSByZXR1cm47XG5cbiAgICBsZXQgaW5zaWRlU2Nyb2xsYWJsZSA9IGZhbHNlO1xuICAgIGxldCBlbGVtID0gZS50YXJnZXQ7XG4gICAgd2hpbGUoZWxlbSAhPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBpZiAoZWxlbS5zY3JvbGxXaWR0aCA+IGVsZW0uY2xpZW50V2lkdGgpIHtcbiAgICAgICAgaW5zaWRlU2Nyb2xsYWJsZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoaW5zaWRlU2Nyb2xsYWJsZSkgcmV0dXJuO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcInRocmVzaG9sZFwiLCBkaXN0LCB0aHJlc2hvbGQpO1xuXG4gICAgaWYgKGRpc3QgPiB0aHJlc2hvbGQpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyaWdodFwiKTtcbiAgICAgIG9uUmlnaHQoZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpc3QgPCAtdGhyZXNob2xkKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwibGVmdFwiKTtcbiAgICAgIG9uTGVmdChlKTtcbiAgICB9XG4gIH0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gb25Td2lwZTtcbiIsIlxudHJ5IHtcbiAgbmV3IEN1c3RvbUV2ZW50KFwiSUUgaGFzIEN1c3RvbUV2ZW50LCBidXQgZG9lc24ndCBzdXBwb3J0IGNvbnN0cnVjdG9yXCIpO1xufSBjYXRjaCAoZSkge1xuXG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IGZ1bmN0aW9uKGV2ZW50LCBwYXJhbXMpIHtcbiAgICBsZXQgZXZ0O1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICBidWJibGVzOiAgICBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiAgICAgdW5kZWZpbmVkXG4gICAgfTtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfTtcblxuICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHdpbmRvdy5FdmVudC5wcm90b3R5cGUpO1xufVxuXG4iLCIvLyBkYXRhc2V0IGZvciBJRTEwXG5cbmlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQgJiZcbiAgICAvLyBGRiBpcyBlbXB0eSB3aGlsZSBJRSBnaXZlcyBlbXB0eSBvYmplY3RcbiAgKCFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCAnZGF0YXNldCcpICB8fFxuICAhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ2RhdGFzZXQnKS5nZXQpXG4pIHtcbiAgbGV0IHByb3BEZXNjcmlwdG9yID0ge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBsZXQgaSxcbiAgICAgICAgICB0aGF0ID0gdGhpcyxcbiAgICAgICAgICBIVE1MNV9ET01TdHJpbmdNYXAsXG4gICAgICAgICAgYXR0clZhbCwgYXR0ck5hbWUsIHByb3BOYW1lLFxuICAgICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgICAgIGF0dHNMZW5ndGggPSBhdHRyaWJ1dGVzLmxlbmd0aCxcbiAgICAgICAgICB0b1VwcGVyQ2FzZSA9IGZ1bmN0aW9uIChuMCkge1xuICAgICAgICAgICAgcmV0dXJuIG4wLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXR0ZXIgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpID9cbiAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKSA6XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICB9O1xuICAgICAgdHJ5IHsgLy8gU2ltdWxhdGUgRE9NU3RyaW5nTWFwIHcvYWNjZXNzb3Igc3VwcG9ydFxuICAgICAgICAvLyBUZXN0IHNldHRpbmcgYWNjZXNzb3Igb24gbm9ybWFsIG9iamVjdFxuICAgICAgICAoe30pLl9fZGVmaW5lR2V0dGVyX18oJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIEhUTUw1X0RPTVN0cmluZ01hcCA9IHt9O1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUxKSB7IC8vIFVzZSBhIERPTSBvYmplY3QgZm9yIElFOFxuICAgICAgICBIVE1MNV9ET01TdHJpbmdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhdHRzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlc1tpXTtcbiAgICAgICAgLy8gRml4OiBUaGlzIHRlc3QgcmVhbGx5IHNob3VsZCBhbGxvdyBhbnkgWE1MIE5hbWUgd2l0aG91dFxuICAgICAgICAvLyAgICAgICAgIGNvbG9ucyAoYW5kIG5vbi11cHBlcmNhc2UgZm9yIFhIVE1MKVxuICAgICAgICBpZiAoYXR0cmlidXRlICYmIGF0dHJpYnV0ZS5uYW1lICYmXG4gICAgICAgICAgKC9eZGF0YS1cXHdbXFx3XFwtXSokLykudGVzdChhdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgICBhdHRyVmFsID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAgIGF0dHJOYW1lID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAgICAgLy8gQ2hhbmdlIHRvIENhbWVsQ2FzZVxuICAgICAgICAgIHByb3BOYW1lID0gYXR0ck5hbWUuc3Vic3RyKDUpLnJlcGxhY2UoLy0uL2csIHRvVXBwZXJDYXNlKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUw1X0RPTVN0cmluZ01hcCwgcHJvcE5hbWUsIHtcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdGhpcy5lbnVtZXJhYmxlLFxuICAgICAgICAgICAgICBnZXQ6IGdldHRlci5iaW5kKGF0dHJWYWwgfHwgJycpLFxuICAgICAgICAgICAgICBzZXQ6IHNldHRlci5iaW5kKHRoYXQsIGF0dHJOYW1lKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoIChlMikgeyAvLyBpZiBhY2Nlc3NvcnMgYXJlIG5vdCB3b3JraW5nXG4gICAgICAgICAgICBIVE1MNV9ET01TdHJpbmdNYXBbcHJvcE5hbWVdID0gYXR0clZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBIVE1MNV9ET01TdHJpbmdNYXA7XG4gICAgfVxuICB9O1xuICB0cnkge1xuICAgIC8vIEZGIGVudW1lcmF0ZXMgb3ZlciBlbGVtZW50J3MgZGF0YXNldCwgYnV0IG5vdFxuICAgIC8vICAgRWxlbWVudC5wcm90b3R5cGUuZGF0YXNldDsgSUU5IGl0ZXJhdGVzIG92ZXIgYm90aFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2RhdGFzZXQnLCBwcm9wRGVzY3JpcHRvcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwcm9wRGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7IC8vIElFOCBkb2VzIG5vdCBhbGxvdyBzZXR0aW5nIHRvIHRydWVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdkYXRhc2V0JywgcHJvcERlc2NyaXB0b3IpO1xuICB9XG59IiwiLy9yZXF1aXJlKCcuL2Nhc3BlcmpzJyk7XG5cbi8vIGh0dHA6Ly9kb20uc3BlYy53aGF0d2cub3JnLyNtdXRhdGlvbi1tZXRob2QtbWFjcm9cbmZ1bmN0aW9uIG11dGF0aW9uKG5vZGVzKSB7XG4gIGlmICghbm9kZXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdET00gRXhjZXB0aW9uIDgnKTtcbiAgfSBlbHNlIGlmIChub2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gdHlwZW9mIG5vZGVzWzBdID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGVzWzBdKSA6IG5vZGVzWzBdO1xuICB9IGVsc2Uge1xuICAgIHZhclxuICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICBsZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgbm9kZTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBub2RlID0gbm9kZXNbaW5kZXhdO1xuXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlKSA6IG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfVxufVxuXG5sZXQgbWV0aG9kcyA9IHtcbiAgLy8gc2FmYXJpID0gd2Via2l0TWF0Y2hlc1NlbGVjdG9yXG4gIG1hdGNoZXM6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IsXG4gIHJlcGxhY2UoKSB7XG4gICAgaWYgKHRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtdXRhdGlvbihhcmd1bWVudHMpLCB0aGlzKTtcbiAgICB9XG4gIH0sXG4gIHByZXBlbmQoKSB7XG4gICAgdGhpcy5pbnNlcnRCZWZvcmUobXV0YXRpb24oYXJndW1lbnRzKSwgdGhpcy5maXJzdENoaWxkKTtcbiAgfSxcbiAgYXBwZW5kKCkge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQobXV0YXRpb24oYXJndW1lbnRzKSk7XG4gIH0sXG4gIHJlbW92ZSgpIHtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9LFxuICBiZWZvcmU6IGZ1bmN0aW9uIGJlZm9yZSgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG11dGF0aW9uKGFyZ3VtZW50cyksIHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICBhZnRlcjogICBmdW5jdGlvbiBhZnRlcigpIHtcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG11dGF0aW9uKGFyZ3VtZW50cyksIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgIH1cbiAgfSxcbiAgY2xvc2VzdDogZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICBsZXQgbm9kZSA9IHRoaXM7XG5cbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKG5vZGUubWF0Y2hlcyAmJiBub2RlLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gbm9kZTtcbiAgICAgIGVsc2Ugbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmZvciAobGV0IG1ldGhvZE5hbWUgaW4gbWV0aG9kcykge1xuICBpZiAoIUVsZW1lbnQucHJvdG90eXBlW21ldGhvZE5hbWVdKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBtZXRob2RzW21ldGhvZE5hbWVdO1xuICB9XG59XG5cbnJlcXVpcmUoJy4vY3VzdG9tRXZlbnQnKTtcbnJlcXVpcmUoJy4vZGF0YXNldCcpO1xucmVxdWlyZSgnLi9oaWRkZW4nKTtcbnJlcXVpcmUoJy4vcmVxdWVzdEFuaW1hdGlvbkZyYW1lJyk7XG4iLCJpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmhpZGRlbiA9PT0gdW5kZWZpbmVkKSB7XG4gIGRvY3VtZW50LmhlYWQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCAnPHN0eWxlPiBbaGlkZGVuXSB7IGRpc3BsYXk6IG5vbmUgfSA8L3N0eWxlPicpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsIFwiaGlkZGVuXCIsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdmFsdWUpO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsInJlcXVpcmUoJy4vZG9tJyk7XG4iLCIvLyBwb2x5ZmlsbCBmb3Igb2xkIEFuZHJvaWRcbihmdW5jdGlvbigpIHtcbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICBsZXQgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxldCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgbGV0IGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sXG4gICAgICAgIHRpbWVUb0NhbGwpO1xuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9O1xufSgpKTsiLCJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24pO1xuXG5pbml0U2lkZWJhckhpZ2hsaWdodCgpO1xuXG5mdW5jdGlvbiB0b2dnbGUoKSB7XG5cbiAgbGV0IHBhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2Utd3JhcHBlcicpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9zaWRlYmFyX29uJyk7XG5cbiAgcGFnZVdyYXBwZXIgJiYgcGFnZVdyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZS13cmFwcGVyX3NpZGViYXJfb24nKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2Vfc2lkZWJhcl9vbicpKSB7XG4gICAgZGVsZXRlIGxvY2FsU3RvcmFnZS5ub1NpZGViYXI7XG4gIH0gZWxzZSB7XG4gICAgbG9jYWxTdG9yYWdlLm5vU2lkZWJhciA9IDE7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG5cbiAgaWYgKCFldmVudC50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLXNpZGViYXItdG9nZ2xlJykpIHJldHVybjtcblxuICB0b2dnbGUoKTtcbn1cblxuXG5mdW5jdGlvbiBvbktleURvd24oZXZlbnQpIHtcbiAgLy8gZG9uJ3QgcmVhY3Qgb24gQ3RybC0+IDwtIGlmIGluIHRleHRcbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoflsnSU5QVVQnLCAnVEVYVEFSRUEnLCAnU0VMRUNUJ10uaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUpKSByZXR1cm47XG4gIH1cblxuICBpZiAoZXZlbnQua2V5Q29kZSAhPSBcIlNcIi5jaGFyQ29kZUF0KDApKSByZXR1cm47XG5cbiAgaWYgKH5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIm1hYyBvcyB4XCIpKSB7XG4gICAgaWYgKCFldmVudC5tZXRhS2V5IHx8ICFldmVudC5hbHRLZXkpIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWV2ZW50LmFsdEtleSkgcmV0dXJuO1xuICB9XG5cbiAgdG9nZ2xlKCk7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbn1cblxuZnVuY3Rpb24gaW5pdFNpZGViYXJIaWdobGlnaHQoKSB7XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0KCkge1xuXG4gICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWRlYmFyX19uYXZpZ2F0aW9uLWxpbmtfYWN0aXZlJyk7XG4gICAgaWYgKGN1cnJlbnRbMF0pIGN1cnJlbnRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhcl9fbmF2aWdhdGlvbi1saW5rX2FjdGl2ZScpO1xuXG4gICAgLy9kZWJ1Z2dlcjtcbiAgICBsZXQgaDJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gyJyk7XG4gICAgbGV0IGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGgycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGgyID0gaDJzW2ldO1xuICAgICAgLy8gZmlyc3QgaW4tcGFnZSBoZWFkZXJcbiAgICAgIC8vID4xLCBiZWNhdXNlIHdoZW4gdmlzaXRpbmcgaHR0cDovL2phdmFzY3JpcHQubG9jYWwvbmF0aXZlLXByb3RvdHlwZXMjbmF0aXZlLXByb3RvdHlwZS1jaGFuZ2UsXG4gICAgICAvLyB0b3AgbWF5IGJlIDAuMzc1IG9yIGtpbmQgb2YuLi5cbiAgICAgIGlmIChoMi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPiAxKSBicmVhaztcbiAgICB9XG4gICAgaS0tOyAvLyB3ZSBuZWVkIHRoZSBvbmUgYmVmb3JlIGl0IChjdXJyZW50bHkgcmVhZGluZylcblxuICAgIGlmIChpID49IDApIHtcbiAgICAgIGxldCBocmVmID0gaDJzW2ldLmZpcnN0RWxlbWVudENoaWxkICYmIGgyc1tpXS5maXJzdEVsZW1lbnRDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIGxldCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19uYXZpZ2F0aW9uLWxpbmsgYVtocmVmPVwiJyArIGhyZWYgKyAnXCJdJyk7XG4gICAgICBpZiAoaHJlZiAmJiBsaSkge1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19uYXZpZ2F0aW9uLWxpbmtfYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgaGlnaGxpZ2h0KCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGlnaGxpZ2h0KTtcbiAgfSk7XG5cbn1cblxuXG4vKlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXG4gIGlmICh3aW5kb3cuX2JzYSkge1xuICAgIGluaXRDYXJib24oKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3NyYyo9XCJidXlzZWxsYWRzLmNvbVwiXScpO1xuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiBzZXRUaW1lb3V0KGluaXRDYXJib24pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdENhcmJvbigpIHtcblxuICAgIF9ic2EuaW5pdCgnY3VzdG9tJywgJ0NLWURFSzNVJywgJ3BsYWNlbWVudDpqYXZhc2NyaXB0aW5mbycsXG4gICAgICB7XG4gICAgICAgIHRhcmdldDogICAnI2NhcmJvbicsXG4gICAgICAgIHRlbXBsYXRlOiBgXG4gICAgPGEgaHJlZj1cIiMjc3RhdGxpbmsjI1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93IG5vb3BlbmVyXCIgY2xhc3M9XCJjYXJib24tY3BjXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmJvbi1kZXNjcmlwdGlvblwiPjxzdHJvbmc+IyNjb21wYW55IyM8L3N0cm9uZz4g4oCUICMjZGVzY3JpcHRpb24jIzwvZGl2PlxuICAgIDwvYT5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuY2FyYm9uYWRzLm5ldC8/dXRtX3NvdXJjZT1qYXZhc2NyaXB0LWluZm8tY3VzdG9tJnV0bV9tZWRpdW09YWRfdmlhX2xpbmsmdXRtX2NhbXBhaWduPWluX3VuaXQmdXRtX3Rlcm09Y3VzdG9tXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXJcIiBjbGFzcz1cImNhcmJvbi1zcG9uc29yXCI+QWRzIHZpYSBDYXJib248L2E+XG4gICAgYFxuICAgICAgfVxuICAgICk7XG4gIH1cbn0pO1xuKi9cbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGEgc2luZ2xlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpIHtcbiAgdmFyIGluZGV4ID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXgtLSAmJiByZVdoaXRlc3BhY2UudGVzdChzdHJpbmcuY2hhckF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkRW5kSW5kZXg7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZ1xuICAgICAgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKVxuICAgICAgOiB0aW1lV2FpdGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBTkE7QUFPQTtBQVBBO0FBUUE7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBWkE7QUFjQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXZDQTtBQUNBO0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9