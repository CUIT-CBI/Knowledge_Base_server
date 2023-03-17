var footer =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/client/footer/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/client/footer/index.js":
/*!****************************************!*\
  !*** ./modules/client/footer/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//require('./preventDocumentScroll');
let showLinkType = __webpack_require__(/*! ./showLinkType */ "./modules/client/footer/showLinkType.js");
let load2x = __webpack_require__(/*! ./load2x */ "./modules/client/footer/load2x.js");
let trackSticky = __webpack_require__(/*! client/trackSticky */ "./modules/client/trackSticky.js");

function init() {
  showLinkType();

  if (window.devicePixelRatio > 1) {
    load2x();
  }

  window.addEventListener('scroll', trackSticky);
  trackSticky();
}

init();

//exports.trackSticky = trackSticky;

/***/ }),

/***/ "./modules/client/footer/load2x.js":
/*!*****************************************!*\
  !*** ./modules/client/footer/load2x.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {

  let figurePngs = document.querySelectorAll('figure img[src$=".png"]');

  for (let i = 0; i < figurePngs.length; i++) {
    let png = figurePngs[i];

    // load @2x version (must exist)
    png.onload = function () {
      this.onload = null;
      if (this.src.match(/@2x.png$/)) return;

      let png2x = new Image();
      png2x.onload = function () {
        //console.log(this.src);
        if (this.width && this.height) {
          png.src = this.src;
        }
      };
      png2x.src = this.src.replace('.png', '@2x.png');
    };
    if (png.complete) png.onload();
  }
};

/***/ }),

/***/ "./modules/client/footer/showLinkType.js":
/*!***********************************************!*\
  !*** ./modules/client/footer/showLinkType.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let hoverIntent = __webpack_require__(/*! client/hoverIntent */ "./modules/client/hoverIntent.js");

module.exports = function () {

  let tooltipSpan = null;
  let shiftX = 8;
  let shiftY = 10;

  function updatePosition(event) {
    let left = event.clientX + shiftX;
    if (left + tooltipSpan.offsetWidth > document.documentElement.clientWidth) {
      // if beyond the right document border
      // mirror to the left
      left = Math.max(0, event.clientX - shiftX - tooltipSpan.offsetWidth);
    }
    tooltipSpan.style.left = left + 'px';

    let top = event.clientY + shiftY;
    if (top + tooltipSpan.offsetHeight > document.documentElement.clientHeight) {
      top = Math.max(0, event.clientY - shiftY - tooltipSpan.offsetHeight);
    }

    tooltipSpan.style.top = top + 'px';
  }

  // we show tooltip element for any link hover, but few of them actually get styled
  function onOver(event) {
    if (!event.target.closest) return; // over svg
    let target = event.target.closest('a, [data-tooltip]');

    if (!target) return;

    // links inside toolbars need no tooltips
    if (target.tagName == 'A' && target.closest('.toolbar')) return;

    tooltipSpan = document.createElement('span');
    tooltipSpan.className = 'link__type';

    if (target.getAttribute('data-tooltip')) {
      tooltipSpan.setAttribute('data-tooltip', target.getAttribute('data-tooltip'));
    } else {
      tooltipSpan.setAttribute('data-url', target.getAttribute('href'));
    }

    document.body.appendChild(tooltipSpan);
    updatePosition(event);

    document.addEventListener('mousemove', updatePosition);
  }

  function onOut() {
    if (!tooltipSpan) return;

    document.removeEventListener('mousemove', updatePosition);
    tooltipSpan.remove();
    tooltipSpan = null;
  }

  hoverIntent('a,[data-tooltip]', onOver, onOut);
};

/***/ }),

/***/ "./modules/client/hoverIntent.js":
/*!***************************************!*\
  !*** ./modules/client/hoverIntent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let lastPageX = Infinity,
    lastPageY = Infinity,
    lastTime = Date.now();

let elementOver;

let elementHoverOver;

let speedTolerance = 0.2;

let handlers = {};

function hoverIntent(selector, over, out) {
  handlers[selector] = { over: over, out: out };
}

document.addEventListener('mousemove', mousemove);
document.addEventListener('mouseout', mouseout);

function mousemove(event) {
  if (elementHoverOver) return;

  let distance = Math.sqrt(Math.pow(event.pageX - lastPageX, 2) + Math.pow(event.pageY - lastPageY, 2));
  let speed = distance / (Date.now() - lastTime);

  // slow down => call over(), get the element of interest,
  // then out() when leaving it
  if (speed < speedTolerance) {
    //console.log("speed", speed);
    let elem = document.elementFromPoint(event.clientX, event.clientY);
    if (!elem) return; // the coords are out of window (happens)
    if (elem != elementOver) {
      for (let selector in handlers) {
        let closest = elem.closest(selector);
        if (closest) {
          //console.log("over ", closest);
          elementHoverOver = { elem: closest, out: handlers[selector].out };
          handlers[selector].over(event);
        }
      }
      elementOver = elem;
    }
  }

  lastPageX = event.pageX;
  lastPageY = event.pageY;
  lastTime = Date.now();
}

function mouseout(event) {
  if (!elementHoverOver) return;

  let parent = event.relatedTarget;
  while (parent) {
    if (parent == elementHoverOver.elem) {
      //console.log("mouseout false", event.target, elementHoverOver.elem);
      // still under elementHoverOver
      return;
    }
    parent = parent.parentElement;
  }

  let out = elementHoverOver.out;
  elementHoverOver = null;
  out(event);
}

module.exports = hoverIntent;

/***/ }),

/***/ "./modules/client/trackSticky.js":
/*!***************************************!*\
  !*** ./modules/client/trackSticky.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trackSticky;

function trackSticky() {

  let stickyElems = document.querySelectorAll('[data-sticky]');

  for (let i = 0; i < stickyElems.length; i++) {
    let stickyElem = stickyElems[i];
    let container = stickyElem.dataset.sticky ? document.querySelector(stickyElem.dataset.sticky) : document.body;

    if (stickyElem.getBoundingClientRect().top < 0) {
      // become fixed
      if (stickyElem.style.cssText) {
        // already fixed
        // inertia: happens when scrolled fast too much to bottom
        // http://ilyakantor.ru/screen/2015-02-24_1555.swf
        return;
      }

      let savedLeft = stickyElem.getBoundingClientRect().left;
      let placeholder = createPlaceholder(stickyElem);

      stickyElem.parentNode.insertBefore(placeholder, stickyElem);

      container.appendChild(stickyElem);
      stickyElem.classList.add('sticky');
      stickyElem.style.position = 'fixed';
      stickyElem.style.top = 0;
      stickyElem.style.left = savedLeft + 'px';
      // zIndex < 1000, because it must be under an overlay,
      // e.g. sitemap must show over the progress bar
      stickyElem.style.zIndex = 101;
      stickyElem.style.background = 'white'; // non-transparent to cover the text
      stickyElem.style.margin = 0;
      stickyElem.style.width = placeholder.offsetWidth + 'px'; // keep same width as before
      stickyElem.placeholder = placeholder;
    } else if (stickyElem.placeholder && stickyElem.placeholder.getBoundingClientRect().top > 0) {
      // become non-fixed
      stickyElem.style.cssText = '';
      stickyElem.classList.remove('sticky');
      stickyElem.placeholder.parentNode.insertBefore(stickyElem, stickyElem.placeholder);
      stickyElem.placeholder.remove();

      stickyElem.placeholder = null;
    }
  }
}

/**
 * Creates a placeholder w/ same size & margin
 * @param elem
 * @returns {*|!HTMLElement}
 */
function createPlaceholder(elem) {
  let placeholder = document.createElement('div');
  let style = getComputedStyle(elem);
  placeholder.style.width = elem.offsetWidth + 'px';
  placeholder.style.marginLeft = style.marginLeft;
  placeholder.style.marginRight = style.marginRight;
  placeholder.style.height = elem.offsetHeight + 'px';
  placeholder.style.marginBottom = style.marginBottom;
  placeholder.style.marginTop = style.marginTop;
  return placeholder;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzPzdlYmExY2FmNjBiYTg0M2QwNWU0Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2Zvb3Rlci9sb2FkMnguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2Zvb3Rlci9zaG93TGlua1R5cGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2hvdmVySW50ZW50LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC90cmFja1N0aWNreS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wYWNrL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZXMvY2xpZW50L2Zvb3Rlci9pbmRleC5qc1wiKTtcbiIsIi8vcmVxdWlyZSgnLi9wcmV2ZW50RG9jdW1lbnRTY3JvbGwnKTtcbmxldCBzaG93TGlua1R5cGUgPSByZXF1aXJlKCcuL3Nob3dMaW5rVHlwZScpO1xubGV0IGxvYWQyeCA9IHJlcXVpcmUoJy4vbG9hZDJ4Jyk7XG5sZXQgdHJhY2tTdGlja3kgPSByZXF1aXJlKCdjbGllbnQvdHJhY2tTdGlja3knKTtcblxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBzaG93TGlua1R5cGUoKTtcblxuICBpZiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XG4gICAgbG9hZDJ4KCk7XG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJhY2tTdGlja3kpO1xuICB0cmFja1N0aWNreSgpO1xuXG59XG5cbmluaXQoKTtcblxuLy9leHBvcnRzLnRyYWNrU3RpY2t5ID0gdHJhY2tTdGlja3k7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIGxldCBmaWd1cmVQbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZmlndXJlIGltZ1tzcmMkPVwiLnBuZ1wiXScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmlndXJlUG5ncy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwbmcgPSBmaWd1cmVQbmdzW2ldO1xuXG4gICAgLy8gbG9hZCBAMnggdmVyc2lvbiAobXVzdCBleGlzdClcbiAgICBwbmcub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLm9ubG9hZCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5zcmMubWF0Y2goL0AyeC5wbmckLykpIHJldHVybjtcblxuICAgICAgbGV0IHBuZzJ4ID0gbmV3IEltYWdlKCk7XG4gICAgICBwbmcyeC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnNyYyk7XG4gICAgICAgIGlmICh0aGlzLndpZHRoICYmIHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgcG5nLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcG5nMnguc3JjID0gdGhpcy5zcmMucmVwbGFjZSgnLnBuZycsICdAMngucG5nJyk7XG4gICAgfTtcbiAgICBpZiAocG5nLmNvbXBsZXRlKSBwbmcub25sb2FkKCk7XG5cbiAgfVxuXG59O1xuIiwibGV0IGhvdmVySW50ZW50ID0gcmVxdWlyZSgnY2xpZW50L2hvdmVySW50ZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgbGV0IHRvb2x0aXBTcGFuID0gbnVsbDtcbiAgbGV0IHNoaWZ0WCA9IDg7XG4gIGxldCBzaGlmdFkgPSAxMDtcblxuICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihldmVudCkge1xuICAgIGxldCBsZWZ0ID0gZXZlbnQuY2xpZW50WCArIHNoaWZ0WDtcbiAgICBpZiAobGVmdCArIHRvb2x0aXBTcGFuLm9mZnNldFdpZHRoID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSB7IC8vIGlmIGJleW9uZCB0aGUgcmlnaHQgZG9jdW1lbnQgYm9yZGVyXG4gICAgICAvLyBtaXJyb3IgdG8gdGhlIGxlZnRcbiAgICAgIGxlZnQgPSBNYXRoLm1heCgwLCBldmVudC5jbGllbnRYIC0gc2hpZnRYIC0gdG9vbHRpcFNwYW4ub2Zmc2V0V2lkdGgpO1xuICAgIH1cbiAgICB0b29sdGlwU3Bhbi5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG5cbiAgICBsZXQgdG9wID0gZXZlbnQuY2xpZW50WSArIHNoaWZ0WTtcbiAgICBpZiAodG9wICsgdG9vbHRpcFNwYW4ub2Zmc2V0SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgdG9wID0gTWF0aC5tYXgoMCwgZXZlbnQuY2xpZW50WSAtIHNoaWZ0WSAtIHRvb2x0aXBTcGFuLm9mZnNldEhlaWdodCk7XG4gICAgfVxuXG4gICAgdG9vbHRpcFNwYW4uc3R5bGUudG9wID0gdG9wICsgJ3B4JztcbiAgfVxuXG5cblxuICAvLyB3ZSBzaG93IHRvb2x0aXAgZWxlbWVudCBmb3IgYW55IGxpbmsgaG92ZXIsIGJ1dCBmZXcgb2YgdGhlbSBhY3R1YWxseSBnZXQgc3R5bGVkXG4gIGZ1bmN0aW9uIG9uT3ZlcihldmVudCkge1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QpIHJldHVybjsgLy8gb3ZlciBzdmdcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2EsIFtkYXRhLXRvb2x0aXBdJyk7XG5cbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuXG4gICAgLy8gbGlua3MgaW5zaWRlIHRvb2xiYXJzIG5lZWQgbm8gdG9vbHRpcHNcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT0gJ0EnICYmIHRhcmdldC5jbG9zZXN0KCcudG9vbGJhcicpKSByZXR1cm47XG5cbiAgICB0b29sdGlwU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b29sdGlwU3Bhbi5jbGFzc05hbWUgPSAnbGlua19fdHlwZSc7XG5cbiAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJykpIHtcbiAgICAgIHRvb2x0aXBTcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJywgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b29sdGlwU3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJywgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBTcGFuKTtcbiAgICB1cGRhdGVQb3NpdGlvbihldmVudCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGVQb3NpdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBvbk91dCgpIHtcbiAgICBpZiAoIXRvb2x0aXBTcGFuKSByZXR1cm47XG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB1cGRhdGVQb3NpdGlvbik7XG4gICAgdG9vbHRpcFNwYW4ucmVtb3ZlKCk7XG4gICAgdG9vbHRpcFNwYW4gPSBudWxsO1xuICB9XG5cbiAgaG92ZXJJbnRlbnQoJ2EsW2RhdGEtdG9vbHRpcF0nLCBvbk92ZXIsIG9uT3V0KTtcblxufTtcbiIsIlxubGV0IGxhc3RQYWdlWCA9IEluZmluaXR5LCBsYXN0UGFnZVkgPSBJbmZpbml0eSwgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXG5sZXQgZWxlbWVudE92ZXI7XG5cbmxldCBlbGVtZW50SG92ZXJPdmVyO1xuXG5sZXQgc3BlZWRUb2xlcmFuY2UgPSAwLjI7XG5cbmxldCBoYW5kbGVycyA9IHt9O1xuXG5mdW5jdGlvbiBob3ZlckludGVudChzZWxlY3Rvciwgb3Zlciwgb3V0KSB7XG4gIGhhbmRsZXJzW3NlbGVjdG9yXSA9IHtvdmVyOiBvdmVyLCBvdXQ6IG91dH07XG59XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbW91c2VvdXQpO1xuXG5mdW5jdGlvbiBtb3VzZW1vdmUoZXZlbnQpIHtcbiAgaWYgKGVsZW1lbnRIb3Zlck92ZXIpIHJldHVybjtcblxuICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coZXZlbnQucGFnZVggLSBsYXN0UGFnZVgsIDIpICsgTWF0aC5wb3coZXZlbnQucGFnZVkgLSBsYXN0UGFnZVksIDIpKTtcbiAgbGV0IHNwZWVkID0gZGlzdGFuY2UgLyAoRGF0ZS5ub3coKSAtIGxhc3RUaW1lKTtcblxuICAvLyBzbG93IGRvd24gPT4gY2FsbCBvdmVyKCksIGdldCB0aGUgZWxlbWVudCBvZiBpbnRlcmVzdCxcbiAgLy8gdGhlbiBvdXQoKSB3aGVuIGxlYXZpbmcgaXRcbiAgaWYgKHNwZWVkIDwgc3BlZWRUb2xlcmFuY2UpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwic3BlZWRcIiwgc3BlZWQpO1xuICAgIGxldCBlbGVtID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcbiAgICBpZiAoIWVsZW0pIHJldHVybjsgLy8gdGhlIGNvb3JkcyBhcmUgb3V0IG9mIHdpbmRvdyAoaGFwcGVucylcbiAgICBpZiAoZWxlbSAhPSBlbGVtZW50T3Zlcikge1xuICAgICAgZm9yIChsZXQgc2VsZWN0b3IgaW4gaGFuZGxlcnMpIHtcbiAgICAgICAgbGV0IGNsb3Nlc3QgPSBlbGVtLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgICAgICBpZiAoY2xvc2VzdCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvdmVyIFwiLCBjbG9zZXN0KTtcbiAgICAgICAgICBlbGVtZW50SG92ZXJPdmVyID0geyBlbGVtOiBjbG9zZXN0LCBvdXQ6IGhhbmRsZXJzW3NlbGVjdG9yXS5vdXR9O1xuICAgICAgICAgIGhhbmRsZXJzW3NlbGVjdG9yXS5vdmVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxlbWVudE92ZXIgPSBlbGVtO1xuICAgIH1cbiAgfVxuXG4gIGxhc3RQYWdlWCA9IGV2ZW50LnBhZ2VYO1xuICBsYXN0UGFnZVkgPSBldmVudC5wYWdlWTtcbiAgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXG59XG5cbmZ1bmN0aW9uIG1vdXNlb3V0KGV2ZW50KSB7XG4gIGlmICghZWxlbWVudEhvdmVyT3ZlcikgcmV0dXJuO1xuXG4gIGxldCBwYXJlbnQgPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xuICB3aGlsZShwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50ID09IGVsZW1lbnRIb3Zlck92ZXIuZWxlbSkge1xuICAgICAgLy9jb25zb2xlLmxvZyhcIm1vdXNlb3V0IGZhbHNlXCIsIGV2ZW50LnRhcmdldCwgZWxlbWVudEhvdmVyT3Zlci5lbGVtKTtcbiAgICAgIC8vIHN0aWxsIHVuZGVyIGVsZW1lbnRIb3Zlck92ZXJcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuXG4gIGxldCBvdXQgPSBlbGVtZW50SG92ZXJPdmVyLm91dDtcbiAgZWxlbWVudEhvdmVyT3ZlciA9IG51bGw7XG4gIG91dChldmVudCk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob3ZlckludGVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYWNrU3RpY2t5O1xuXG5cbmZ1bmN0aW9uIHRyYWNrU3RpY2t5KCkge1xuXG4gIGxldCBzdGlja3lFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN0aWNreV0nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0aWNreUVsZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHN0aWNreUVsZW0gPSBzdGlja3lFbGVtc1tpXTtcbiAgICBsZXQgY29udGFpbmVyID0gc3RpY2t5RWxlbS5kYXRhc2V0LnN0aWNreSA/XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0aWNreUVsZW0uZGF0YXNldC5zdGlja3kpIDogZG9jdW1lbnQuYm9keTtcblxuICAgIGlmIChzdGlja3lFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IDApIHtcbiAgICAgIC8vIGJlY29tZSBmaXhlZFxuICAgICAgaWYgKHN0aWNreUVsZW0uc3R5bGUuY3NzVGV4dCkge1xuICAgICAgICAvLyBhbHJlYWR5IGZpeGVkXG4gICAgICAgIC8vIGluZXJ0aWE6IGhhcHBlbnMgd2hlbiBzY3JvbGxlZCBmYXN0IHRvbyBtdWNoIHRvIGJvdHRvbVxuICAgICAgICAvLyBodHRwOi8vaWx5YWthbnRvci5ydS9zY3JlZW4vMjAxNS0wMi0yNF8xNTU1LnN3ZlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBzYXZlZExlZnQgPSBzdGlja3lFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBjcmVhdGVQbGFjZWhvbGRlcihzdGlja3lFbGVtKTtcblxuICAgICAgc3RpY2t5RWxlbS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShwbGFjZWhvbGRlciwgc3RpY2t5RWxlbSk7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGlja3lFbGVtKTtcbiAgICAgIHN0aWNreUVsZW0uY2xhc3NMaXN0LmFkZCgnc3RpY2t5Jyk7XG4gICAgICBzdGlja3lFbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgIHN0aWNreUVsZW0uc3R5bGUudG9wID0gMDtcbiAgICAgIHN0aWNreUVsZW0uc3R5bGUubGVmdCA9IHNhdmVkTGVmdCArICdweCc7XG4gICAgICAvLyB6SW5kZXggPCAxMDAwLCBiZWNhdXNlIGl0IG11c3QgYmUgdW5kZXIgYW4gb3ZlcmxheSxcbiAgICAgIC8vIGUuZy4gc2l0ZW1hcCBtdXN0IHNob3cgb3ZlciB0aGUgcHJvZ3Jlc3MgYmFyXG4gICAgICBzdGlja3lFbGVtLnN0eWxlLnpJbmRleCA9IDEwMTtcbiAgICAgIHN0aWNreUVsZW0uc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSc7IC8vIG5vbi10cmFuc3BhcmVudCB0byBjb3ZlciB0aGUgdGV4dFxuICAgICAgc3RpY2t5RWxlbS5zdHlsZS5tYXJnaW4gPSAwO1xuICAgICAgc3RpY2t5RWxlbS5zdHlsZS53aWR0aCA9IHBsYWNlaG9sZGVyLm9mZnNldFdpZHRoICsgJ3B4JzsgLy8ga2VlcCBzYW1lIHdpZHRoIGFzIGJlZm9yZVxuICAgICAgc3RpY2t5RWxlbS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH0gZWxzZSBpZiAoc3RpY2t5RWxlbS5wbGFjZWhvbGRlciAmJiBzdGlja3lFbGVtLnBsYWNlaG9sZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+IDApIHtcbiAgICAgIC8vIGJlY29tZSBub24tZml4ZWRcbiAgICAgIHN0aWNreUVsZW0uc3R5bGUuY3NzVGV4dCA9ICcnO1xuICAgICAgc3RpY2t5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdGlja3knKTtcbiAgICAgIHN0aWNreUVsZW0ucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3RpY2t5RWxlbSwgc3RpY2t5RWxlbS5wbGFjZWhvbGRlcik7XG4gICAgICBzdGlja3lFbGVtLnBsYWNlaG9sZGVyLnJlbW92ZSgpO1xuXG4gICAgICBzdGlja3lFbGVtLnBsYWNlaG9sZGVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwbGFjZWhvbGRlciB3LyBzYW1lIHNpemUgJiBtYXJnaW5cbiAqIEBwYXJhbSBlbGVtXG4gKiBAcmV0dXJucyB7KnwhSFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBsYWNlaG9sZGVyKGVsZW0pIHtcbiAgbGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gIHBsYWNlaG9sZGVyLnN0eWxlLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aCArICdweCc7XG4gIHBsYWNlaG9sZGVyLnN0eWxlLm1hcmdpbkxlZnQgPSBzdHlsZS5tYXJnaW5MZWZ0O1xuICBwbGFjZWhvbGRlci5zdHlsZS5tYXJnaW5SaWdodCA9IHN0eWxlLm1hcmdpblJpZ2h0O1xuICBwbGFjZWhvbGRlci5zdHlsZS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodCArICdweCc7XG4gIHBsYWNlaG9sZGVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IHN0eWxlLm1hcmdpbkJvdHRvbTtcbiAgcGxhY2Vob2xkZXIuc3R5bGUubWFyZ2luVG9wID0gc3R5bGUubWFyZ2luVG9wO1xuICByZXR1cm4gcGxhY2Vob2xkZXI7XG59Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==