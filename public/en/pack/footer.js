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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/*!****************************************!*\
  !*** ./modules/client/footer/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//require('./preventDocumentScroll');
let showLinkType = __webpack_require__(/*! ./showLinkType */ 40);
let load2x = __webpack_require__(/*! ./load2x */ 42);
let trackSticky = __webpack_require__(/*! client/trackSticky */ 43);

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

/***/ 40:
/*!***********************************************!*\
  !*** ./modules/client/footer/showLinkType.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let hoverIntent = __webpack_require__(/*! client/hoverIntent */ 41);

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

/***/ 41:
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

/***/ 42:
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

/***/ 43:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzPzA3OWQyMjY0OGM1ZDg4YTNmZWIzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vW25hbWVdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2Zvb3Rlci9zaG93TGlua1R5cGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2hvdmVySW50ZW50LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9mb290ZXIvbG9hZDJ4LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC90cmFja1N0aWNreS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wYWNrL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzkpO1xuIiwiLy9yZXF1aXJlKCcuL3ByZXZlbnREb2N1bWVudFNjcm9sbCcpO1xubGV0IHNob3dMaW5rVHlwZSA9IHJlcXVpcmUoJy4vc2hvd0xpbmtUeXBlJyk7XG5sZXQgbG9hZDJ4ID0gcmVxdWlyZSgnLi9sb2FkMngnKTtcbmxldCB0cmFja1N0aWNreSA9IHJlcXVpcmUoJ2NsaWVudC90cmFja1N0aWNreScpO1xuXG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHNob3dMaW5rVHlwZSgpO1xuXG4gIGlmICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEpIHtcbiAgICBsb2FkMngoKTtcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmFja1N0aWNreSk7XG4gIHRyYWNrU3RpY2t5KCk7XG5cbn1cblxuaW5pdCgpO1xuXG4vL2V4cG9ydHMudHJhY2tTdGlja3kgPSB0cmFja1N0aWNreTtcbiIsImxldCBob3ZlckludGVudCA9IHJlcXVpcmUoJ2NsaWVudC9ob3ZlckludGVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIGxldCB0b29sdGlwU3BhbiA9IG51bGw7XG4gIGxldCBzaGlmdFggPSA4O1xuICBsZXQgc2hpZnRZID0gMTA7XG5cbiAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oZXZlbnQpIHtcbiAgICBsZXQgbGVmdCA9IGV2ZW50LmNsaWVudFggKyBzaGlmdFg7XG4gICAgaWYgKGxlZnQgKyB0b29sdGlwU3Bhbi5vZmZzZXRXaWR0aCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgeyAvLyBpZiBiZXlvbmQgdGhlIHJpZ2h0IGRvY3VtZW50IGJvcmRlclxuICAgICAgLy8gbWlycm9yIHRvIHRoZSBsZWZ0XG4gICAgICBsZWZ0ID0gTWF0aC5tYXgoMCwgZXZlbnQuY2xpZW50WCAtIHNoaWZ0WCAtIHRvb2x0aXBTcGFuLm9mZnNldFdpZHRoKTtcbiAgICB9XG4gICAgdG9vbHRpcFNwYW4uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuXG4gICAgbGV0IHRvcCA9IGV2ZW50LmNsaWVudFkgKyBzaGlmdFk7XG4gICAgaWYgKHRvcCArIHRvb2x0aXBTcGFuLm9mZnNldEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgIHRvcCA9IE1hdGgubWF4KDAsIGV2ZW50LmNsaWVudFkgLSBzaGlmdFkgLSB0b29sdGlwU3Bhbi5vZmZzZXRIZWlnaHQpO1xuICAgIH1cblxuICAgIHRvb2x0aXBTcGFuLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gIH1cblxuXG5cbiAgLy8gd2Ugc2hvdyB0b29sdGlwIGVsZW1lbnQgZm9yIGFueSBsaW5rIGhvdmVyLCBidXQgZmV3IG9mIHRoZW0gYWN0dWFsbHkgZ2V0IHN0eWxlZFxuICBmdW5jdGlvbiBvbk92ZXIoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KSByZXR1cm47IC8vIG92ZXIgc3ZnXG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdhLCBbZGF0YS10b29sdGlwXScpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgIC8vIGxpbmtzIGluc2lkZSB0b29sYmFycyBuZWVkIG5vIHRvb2x0aXBzXG4gICAgaWYgKHRhcmdldC50YWdOYW1lID09ICdBJyAmJiB0YXJnZXQuY2xvc2VzdCgnLnRvb2xiYXInKSkgcmV0dXJuO1xuXG4gICAgdG9vbHRpcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG9vbHRpcFNwYW4uY2xhc3NOYW1lID0gJ2xpbmtfX3R5cGUnO1xuXG4gICAgaWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcpKSB7XG4gICAgICB0b29sdGlwU3Bhbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcsIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9vbHRpcFNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLXVybCcsIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b29sdGlwU3Bhbik7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZlbnQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdXBkYXRlUG9zaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25PdXQoKSB7XG4gICAgaWYgKCF0b29sdGlwU3BhbikgcmV0dXJuO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdXBkYXRlUG9zaXRpb24pO1xuICAgIHRvb2x0aXBTcGFuLnJlbW92ZSgpO1xuICAgIHRvb2x0aXBTcGFuID0gbnVsbDtcbiAgfVxuXG4gIGhvdmVySW50ZW50KCdhLFtkYXRhLXRvb2x0aXBdJywgb25PdmVyLCBvbk91dCk7XG5cbn07XG4iLCJcbmxldCBsYXN0UGFnZVggPSBJbmZpbml0eSwgbGFzdFBhZ2VZID0gSW5maW5pdHksIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblxubGV0IGVsZW1lbnRPdmVyO1xuXG5sZXQgZWxlbWVudEhvdmVyT3ZlcjtcblxubGV0IHNwZWVkVG9sZXJhbmNlID0gMC4yO1xuXG5sZXQgaGFuZGxlcnMgPSB7fTtcblxuZnVuY3Rpb24gaG92ZXJJbnRlbnQoc2VsZWN0b3IsIG92ZXIsIG91dCkge1xuICBoYW5kbGVyc1tzZWxlY3Rvcl0gPSB7b3Zlcjogb3Zlciwgb3V0OiBvdXR9O1xufVxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0KTtcblxuZnVuY3Rpb24gbW91c2Vtb3ZlKGV2ZW50KSB7XG4gIGlmIChlbGVtZW50SG92ZXJPdmVyKSByZXR1cm47XG5cbiAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KGV2ZW50LnBhZ2VYIC0gbGFzdFBhZ2VYLCAyKSArIE1hdGgucG93KGV2ZW50LnBhZ2VZIC0gbGFzdFBhZ2VZLCAyKSk7XG4gIGxldCBzcGVlZCA9IGRpc3RhbmNlIC8gKERhdGUubm93KCkgLSBsYXN0VGltZSk7XG5cbiAgLy8gc2xvdyBkb3duID0+IGNhbGwgb3ZlcigpLCBnZXQgdGhlIGVsZW1lbnQgb2YgaW50ZXJlc3QsXG4gIC8vIHRoZW4gb3V0KCkgd2hlbiBsZWF2aW5nIGl0XG4gIGlmIChzcGVlZCA8IHNwZWVkVG9sZXJhbmNlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcInNwZWVkXCIsIHNwZWVkKTtcbiAgICBsZXQgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG4gICAgaWYgKCFlbGVtKSByZXR1cm47IC8vIHRoZSBjb29yZHMgYXJlIG91dCBvZiB3aW5kb3cgKGhhcHBlbnMpXG4gICAgaWYgKGVsZW0gIT0gZWxlbWVudE92ZXIpIHtcbiAgICAgIGZvciAobGV0IHNlbGVjdG9yIGluIGhhbmRsZXJzKSB7XG4gICAgICAgIGxldCBjbG9zZXN0ID0gZWxlbS5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICAgICAgaWYgKGNsb3Nlc3QpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3ZlciBcIiwgY2xvc2VzdCk7XG4gICAgICAgICAgZWxlbWVudEhvdmVyT3ZlciA9IHsgZWxlbTogY2xvc2VzdCwgb3V0OiBoYW5kbGVyc1tzZWxlY3Rvcl0ub3V0fTtcbiAgICAgICAgICBoYW5kbGVyc1tzZWxlY3Rvcl0ub3ZlcihldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsZW1lbnRPdmVyID0gZWxlbTtcbiAgICB9XG4gIH1cblxuICBsYXN0UGFnZVggPSBldmVudC5wYWdlWDtcbiAgbGFzdFBhZ2VZID0gZXZlbnQucGFnZVk7XG4gIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcblxufVxuXG5mdW5jdGlvbiBtb3VzZW91dChldmVudCkge1xuICBpZiAoIWVsZW1lbnRIb3Zlck92ZXIpIHJldHVybjtcblxuICBsZXQgcGFyZW50ID0gZXZlbnQucmVsYXRlZFRhcmdldDtcbiAgd2hpbGUocGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCA9PSBlbGVtZW50SG92ZXJPdmVyLmVsZW0pIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJtb3VzZW91dCBmYWxzZVwiLCBldmVudC50YXJnZXQsIGVsZW1lbnRIb3Zlck92ZXIuZWxlbSk7XG4gICAgICAvLyBzdGlsbCB1bmRlciBlbGVtZW50SG92ZXJPdmVyXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICB9XG5cblxuICBsZXQgb3V0ID0gZWxlbWVudEhvdmVyT3Zlci5vdXQ7XG4gIGVsZW1lbnRIb3Zlck92ZXIgPSBudWxsO1xuICBvdXQoZXZlbnQpO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG92ZXJJbnRlbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICBsZXQgZmlndXJlUG5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZpZ3VyZSBpbWdbc3JjJD1cIi5wbmdcIl0nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZ3VyZVBuZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcG5nID0gZmlndXJlUG5nc1tpXTtcblxuICAgIC8vIGxvYWQgQDJ4IHZlcnNpb24gKG11c3QgZXhpc3QpXG4gICAgcG5nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5vbmxvYWQgPSBudWxsO1xuICAgICAgaWYgKHRoaXMuc3JjLm1hdGNoKC9AMngucG5nJC8pKSByZXR1cm47XG5cbiAgICAgIGxldCBwbmcyeCA9IG5ldyBJbWFnZSgpO1xuICAgICAgcG5nMngub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zcmMpO1xuICAgICAgICBpZiAodGhpcy53aWR0aCAmJiB0aGlzLmhlaWdodCkge1xuICAgICAgICAgIHBuZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHBuZzJ4LnNyYyA9IHRoaXMuc3JjLnJlcGxhY2UoJy5wbmcnLCAnQDJ4LnBuZycpO1xuICAgIH07XG4gICAgaWYgKHBuZy5jb21wbGV0ZSkgcG5nLm9ubG9hZCgpO1xuXG4gIH1cblxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gdHJhY2tTdGlja3k7XG5cblxuZnVuY3Rpb24gdHJhY2tTdGlja3koKSB7XG5cbiAgbGV0IHN0aWNreUVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc3RpY2t5XScpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RpY2t5RWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc3RpY2t5RWxlbSA9IHN0aWNreUVsZW1zW2ldO1xuICAgIGxldCBjb250YWluZXIgPSBzdGlja3lFbGVtLmRhdGFzZXQuc3RpY2t5ID9cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3RpY2t5RWxlbS5kYXRhc2V0LnN0aWNreSkgOiBkb2N1bWVudC5ib2R5O1xuXG4gICAgaWYgKHN0aWNreUVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgMCkge1xuICAgICAgLy8gYmVjb21lIGZpeGVkXG4gICAgICBpZiAoc3RpY2t5RWxlbS5zdHlsZS5jc3NUZXh0KSB7XG4gICAgICAgIC8vIGFscmVhZHkgZml4ZWRcbiAgICAgICAgLy8gaW5lcnRpYTogaGFwcGVucyB3aGVuIHNjcm9sbGVkIGZhc3QgdG9vIG11Y2ggdG8gYm90dG9tXG4gICAgICAgIC8vIGh0dHA6Ly9pbHlha2FudG9yLnJ1L3NjcmVlbi8yMDE1LTAyLTI0XzE1NTUuc3dmXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHNhdmVkTGVmdCA9IHN0aWNreUVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIGxldCBwbGFjZWhvbGRlciA9IGNyZWF0ZVBsYWNlaG9sZGVyKHN0aWNreUVsZW0pO1xuXG4gICAgICBzdGlja3lFbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyLCBzdGlja3lFbGVtKTtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0aWNreUVsZW0pO1xuICAgICAgc3RpY2t5RWxlbS5jbGFzc0xpc3QuYWRkKCdzdGlja3knKTtcbiAgICAgIHN0aWNreUVsZW0uc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgc3RpY2t5RWxlbS5zdHlsZS50b3AgPSAwO1xuICAgICAgc3RpY2t5RWxlbS5zdHlsZS5sZWZ0ID0gc2F2ZWRMZWZ0ICsgJ3B4JztcbiAgICAgIC8vIHpJbmRleCA8IDEwMDAsIGJlY2F1c2UgaXQgbXVzdCBiZSB1bmRlciBhbiBvdmVybGF5LFxuICAgICAgLy8gZS5nLiBzaXRlbWFwIG11c3Qgc2hvdyBvdmVyIHRoZSBwcm9ncmVzcyBiYXJcbiAgICAgIHN0aWNreUVsZW0uc3R5bGUuekluZGV4ID0gMTAxO1xuICAgICAgc3RpY2t5RWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJzsgLy8gbm9uLXRyYW5zcGFyZW50IHRvIGNvdmVyIHRoZSB0ZXh0XG4gICAgICBzdGlja3lFbGVtLnN0eWxlLm1hcmdpbiA9IDA7XG4gICAgICBzdGlja3lFbGVtLnN0eWxlLndpZHRoID0gcGxhY2Vob2xkZXIub2Zmc2V0V2lkdGggKyAncHgnOyAvLyBrZWVwIHNhbWUgd2lkdGggYXMgYmVmb3JlXG4gICAgICBzdGlja3lFbGVtLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfSBlbHNlIGlmIChzdGlja3lFbGVtLnBsYWNlaG9sZGVyICYmIHN0aWNreUVsZW0ucGxhY2Vob2xkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wID4gMCkge1xuICAgICAgLy8gYmVjb21lIG5vbi1maXhlZFxuICAgICAgc3RpY2t5RWxlbS5zdHlsZS5jc3NUZXh0ID0gJyc7XG4gICAgICBzdGlja3lFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3N0aWNreScpO1xuICAgICAgc3RpY2t5RWxlbS5wbGFjZWhvbGRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdGlja3lFbGVtLCBzdGlja3lFbGVtLnBsYWNlaG9sZGVyKTtcbiAgICAgIHN0aWNreUVsZW0ucGxhY2Vob2xkZXIucmVtb3ZlKCk7XG5cbiAgICAgIHN0aWNreUVsZW0ucGxhY2Vob2xkZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBsYWNlaG9sZGVyIHcvIHNhbWUgc2l6ZSAmIG1hcmdpblxuICogQHBhcmFtIGVsZW1cbiAqIEByZXR1cm5zIHsqfCFIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGxhY2Vob2xkZXIoZWxlbSkge1xuICBsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgcGxhY2Vob2xkZXIuc3R5bGUud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgcGxhY2Vob2xkZXIuc3R5bGUubWFyZ2luTGVmdCA9IHN0eWxlLm1hcmdpbkxlZnQ7XG4gIHBsYWNlaG9sZGVyLnN0eWxlLm1hcmdpblJpZ2h0ID0gc3R5bGUubWFyZ2luUmlnaHQ7XG4gIHBsYWNlaG9sZGVyLnN0eWxlLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgcGxhY2Vob2xkZXIuc3R5bGUubWFyZ2luQm90dG9tID0gc3R5bGUubWFyZ2luQm90dG9tO1xuICBwbGFjZWhvbGRlci5zdHlsZS5tYXJnaW5Ub3AgPSBzdHlsZS5tYXJnaW5Ub3A7XG4gIHJldHVybiBwbGFjZWhvbGRlcjtcbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9