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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 10);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),
/* 2 */
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ 1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;

/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debounce = __webpack_require__(/*! ./debounce */ 8),
    isObject = __webpack_require__(/*! ./isObject */ 0);

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
/* 4 */
/*!***************************************************!*\
  !*** ./modules/client/head/resizeOnload/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let iframeResize = __webpack_require__(/*! ./iframeResize */ 5);

let throttle = __webpack_require__(/*! lodash/throttle */ 3);
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
/* 5 */
/*!**********************************************************!*\
  !*** ./modules/client/head/resizeOnload/iframeResize.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let getDocumentHeight = __webpack_require__(/*! client/dom/getDocumentHeight */ 6);

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
/* 6 */
/*!*************************************************!*\
  !*** ./modules/client/dom/getDocumentHeight.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let getScrollbarHeight = __webpack_require__(/*! ./getScrollbarHeight */ 7);
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
/* 7 */
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
/* 8 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./isObject */ 0),
    now = __webpack_require__(/*! ./now */ 9),
    toNumber = __webpack_require__(/*! ./toNumber */ 12);

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
/* 9 */
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ 1);

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
/* 10 */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 11)))

/***/ }),
/* 11 */
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

/***/ }),
/* 12 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseTrim = __webpack_require__(/*! ./_baseTrim */ 13),
    isObject = __webpack_require__(/*! ./isObject */ 0),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 15);

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
/* 13 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ 14);

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
/* 14 */
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
/* 15 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 16),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 19);

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
/* 16 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Symbol = __webpack_require__(/*! ./_Symbol */ 2),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 17),
    objectToString = __webpack_require__(/*! ./_objectToString */ 18);

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
/* 17 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Symbol = __webpack_require__(/*! ./_Symbol */ 2);

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
/* 18 */
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
/* 19 */
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
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/*!**************************************!*\
  !*** ./modules/client/head/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! client/polyfill */ 25);

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

exports.Modal = __webpack_require__(/*! ./modal */ 31);
exports.fontTest = __webpack_require__(/*! ./fontTest */ 32);
exports.resizeOnload = __webpack_require__(/*! ./resizeOnload */ 4);
__webpack_require__(/*! ./layout */ 33);
__webpack_require__(/*! engine/sidebar/client */ 34);
__webpack_require__(/*! ./navigationArrows */ 35);
__webpack_require__(/*! ./hover */ 37);
__webpack_require__(/*! ./trackLinks */ 38);

/***/ }),
/* 25 */
/*!******************************************!*\
  !*** ./modules/client/polyfill/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./dom */ 26);

/***/ }),
/* 26 */
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

__webpack_require__(/*! ./customEvent */ 27);
__webpack_require__(/*! ./dataset */ 28);
__webpack_require__(/*! ./hidden */ 29);
__webpack_require__(/*! ./requestAnimationFrame */ 30);

/***/ }),
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/*!*************************************************!*\
  !*** ./modules/client/head/navigationArrows.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// navigation starts to work right now
let onSwipe = __webpack_require__(/*! client/onSwipe */ 36);
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
/* 36 */
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
/* 37 */
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
/* 38 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZC5qcz8wNzlkMjI2NDhjNWQ4OGEzZmViMyIsInNvdXJjZXMiOlsid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9oZWFkL3Jlc2l6ZU9ubG9hZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvaGVhZC9yZXNpemVPbmxvYWQvaWZyYW1lUmVzaXplLmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9kb20vZ2V0RG9jdW1lbnRIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2RvbS9nZXRTY3JvbGxiYXJIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRyaW0uanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2hlYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L3BvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9wb2x5ZmlsbC9kb20uanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L3BvbHlmaWxsL2N1c3RvbUV2ZW50LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9wb2x5ZmlsbC9kYXRhc2V0LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9wb2x5ZmlsbC9oaWRkZW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L3BvbHlmaWxsL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvaGVhZC9tb2RhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvaGVhZC9mb250VGVzdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvaGVhZC9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvZW5naW5lL3NpZGViYXIvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9oZWFkL25hdmlnYXRpb25BcnJvd3MuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L29uU3dpcGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2hlYWQvaG92ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2hlYWQvdHJhY2tMaW5rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wYWNrL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjQpO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwibGV0IGlmcmFtZVJlc2l6ZSA9IHJlcXVpcmUoJy4vaWZyYW1lUmVzaXplJyk7XG5cbmxldCB0aHJvdHRsZSA9IHJlcXVpcmUoJ2xvZGFzaC90aHJvdHRsZScpO1xuLy8gdHJhY2sgcmVzaXplZCBpZnJhbWVzIGluIHdpbmRvdy5vbnJlc2l6ZVxuXG5sZXQgb25SZXNpemVRdWV1ZSA9IFtdO1xuXG5leHBvcnRzLmlmcmFtZSA9IGZ1bmN0aW9uKGlmcmFtZSkge1xuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICBpZnJhbWVSZXNpemUuYXN5bmMoaWZyYW1lLCBmdW5jdGlvbihlcnIsIGhlaWdodCkge1xuICAgICAgaWYgKGVycikgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgaWYgKGhlaWdodCkgaWZyYW1lLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgfSk7XG4gIH1cblxuICByZXNpemUoKTtcbn07XG5cbmV4cG9ydHMuY29kZVRhYnMgPSBmdW5jdGlvbihpZnJhbWUpIHtcbiAgZnVuY3Rpb24gaGlkZVNob3dBcnJvd3MoKSB7XG5cbiAgICAvLyBhZGQgYXJyb3dzIGlmIG5lZWRlZFxuICAgIGxldCBlbGVtID0gaWZyYW1lLmNsb3Nlc3QoJy5jb2RlLXRhYnMnKTtcbiAgICBsZXQgY29udGVudEVsZW0gPSBpZnJhbWUuY2xvc2VzdCgnW2RhdGEtY29kZS10YWJzLWNvbnRlbnRdJyk7XG4gICAgbGV0IHN3aXRjaGVzRWxlbSA9IGVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtY29kZS10YWJzLXN3aXRjaGVzXScpO1xuICAgIGxldCBzd2l0Y2hlc0VsZW1JdGVtcyA9IHN3aXRjaGVzRWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIGlmIChzd2l0Y2hlc0VsZW1JdGVtcy5vZmZzZXRXaWR0aCA+IHN3aXRjaGVzRWxlbS5vZmZzZXRXaWR0aCkge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdjb2RlLXRhYnNfc2Nyb2xsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnY29kZS10YWJzX3Njcm9sbCcpO1xuICAgIH1cblxuICB9XG5cbiAgaGlkZVNob3dBcnJvd3MoKTtcbiAgb25SZXNpemVRdWV1ZS5wdXNoKGhpZGVTaG93QXJyb3dzKTtcbn07XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gIG9uUmVzaXplUXVldWUuZm9yRWFjaChmdW5jdGlvbihvblJlc2l6ZSkge1xuICAgIG9uUmVzaXplKCk7XG4gIH0pO1xufSwgMjAwKSk7XG4iLCJsZXQgZ2V0RG9jdW1lbnRIZWlnaHQgPSByZXF1aXJlKCdjbGllbnQvZG9tL2dldERvY3VtZW50SGVpZ2h0Jyk7XG5cbmZ1bmN0aW9uIGlmcmFtZVJlc2l6ZShpZnJFbGVtLCBjYWxsYmFjaykge1xuXG5cbiAgbGV0IHRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gZGVmYXVsdCBoZWlnaHRcbiAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcbiAgfSwgNTAwKTtcblxuICBmdW5jdGlvbiBkb25lKGVyciwgaGVpZ2h0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcik7XG5cbiAgICBjYWxsYmFjayhlcnIsIGhlaWdodCk7XG4gIH1cblxuICAvLyB0aHJvdyByaWdodCBub3cgaWYgY3Jvc3MtZG9tYWluXG4gIHRyeSB7XG4gICAgLyoganNoaW50IC1XMDMwICovXG4gICAgKGlmckVsZW0uY29udGVudERvY3VtZW50IHx8IGlmckVsZW0uY29udGVudFdpbmRvdy5kb2N1bWVudCkuYm9keTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluKGlmckVsZW0sIGRvbmUpO1xuICB9XG5cblxuICAvLyBISU5UOiBJIHNob3VsbmQndCBtb3ZlIGlmcmFtZSBpbiBET00sIGJlY2F1c2UgaXQgd2lsbCByZWxvYWQgaXQncyBjb250ZW50cyB3aGVuIGFwcGVuZGVkL2luc2VydGVkIGFueXdoZXJlIVxuICAvLyBzbyBJIGNyZWF0ZSBhIGNsb25lIGFuZCB3b3JrIG9uIGl0XG4gIGlmICghaWZyRWxlbS5vZmZzZXRXaWR0aCkge1xuICAgIC8vIGNsb25lIGlmcmFtZSBhdCBhbm90aGVyIHBsYWNlIHRvIHNlZSB0aGUgc2l6ZVxuICAgIGxldCBjbG9uZUlmcmFtZSA9IGlmckVsZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgIGNsb25lSWZyYW1lLm5hbWUgPSBcIlwiO1xuXG4gICAgY2xvbmVJZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICAgIGNsb25lSWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBjbG9uZUlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjbG9uZUlmcmFtZS5zdHlsZS50b3AgPSAnMTAwMDBweCc7XG5cbiAgICBjbG9uZUlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBoZWlnaHQgPSBnZXREb2N1bWVudEhlaWdodCh0aGlzLmNvbnRlbnREb2N1bWVudCk7XG4gICAgICBpZnJFbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY2xvbmVJZnJhbWUucmVtb3ZlKCk7XG4gICAgICBkb25lKG51bGwsIGhlaWdodCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVJZnJhbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmckVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGlmckVsZW0uc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG5cbiAgbGV0IGhlaWdodCA9IGdldERvY3VtZW50SGVpZ2h0KGlmckVsZW0uY29udGVudERvY3VtZW50KTtcblxuICBpZnJFbGVtLnN0eWxlLmhlaWdodCA9ICcnO1xuICBkb25lKG51bGwsIGhlaWdodCk7XG59XG5cbmlmcmFtZVJlc2l6ZS5hc3luYyA9IGZ1bmN0aW9uIGlmcmFtZVJlc2l6ZUFzeW5jKGlmcmFtZSwgY2FsbGJhY2spIHtcbiAgLy8gZGVsYXkgdG8gbGV0IHRoZSBjb2RlIGluc2lkZSB0aGUgaWZyYW1lIGZpbmlzaFxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGlmcmFtZVJlc2l6ZShpZnJhbWUsIGNhbGxiYWNrKTtcbiAgfSwgMCk7XG59O1xuXG5cbmZ1bmN0aW9uIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluKGlmckVsZW0sIGNhbGxiYWNrKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWZyYW1lUmVzaXplO1xuXG5cbi8qXG4gd2luZG93Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcbiBpZiAoZS5vcmlnaW4gIT0gXCJodHRwOi8vcnUubG9va2F0Y29kZS5jb21cIikgcmV0dXJuO1xuIGxldCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuIGlmICghZGF0YSB8fCBkYXRhLmNtZCAhPSBcInJlc2l6ZS1pZnJhbWVcIikgcmV0dXJuO1xuIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoZGF0YS5uYW1lKVswXTtcblxuIGVsZW0uc3R5bGUuaGVpZ2h0ID0gK2RhdGEuaGVpZ2h0ICsgMTAgKyBcInB4XCI7XG4gbGV0IGRlZmVycmVkID0gaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4uZGVmZXJyZWRzW2RhdGEuaWRdO1xuIGRlZmVycmVkLnJlc29sdmUoKTtcbiB9O1xuXG4gZnVuY3Rpb24gaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4oaWZyRWxlbSwgY2FsbGJhY2spIHtcblxuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gY2FsbGJhY2sobmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gfSwgNTAwKTtcblxuIHRyeSB7XG4gLy8gdHJ5IHRvIHNlZSBpZiByZXNpemVyIGNhbiB3b3JrIG9uIHRoaXMgaWZyYW1lXG4gaWZyRWxlbS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKFwidGVzdFwiLCBcImh0dHA6Ly9ydS5sb29rYXRjb2RlLmNvbVwiKTtcbiB9IGNhdGNoKGUpIHtcbiAvLyBpZnJhbWUgZnJvbSBhbm90aGVyIGRvbWFpbiwgc29ycnlcbiBjYWxsYmFjayhuZXcgRXJyb3IoXCJ0aGUgcmVzaXplciBtdXN0IGJlIGZyb20gcnUubG9va2F0Y29kZS5jb21cIikpO1xuIHJldHVybjtcbiB9XG5cbiBpZiAoIWlmckVsZW0ub2Zmc2V0V2lkdGgpIHtcbiAvLyBtb3ZlIGlmcmFtZSB0byBhbm90aGVyIHBsYWNlIHRvIHJlc2l6ZSB0aGVyZVxuIGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiBpZnJFbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyLCBpZnJFbGVtKTtcbiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmckVsZW0pO1xuIH1cblxuIGlmckVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuIGxldCBpZCA9IFwiXCIgKyBNYXRoLnJhbmRvbSgpO1xuIGxldCBtZXNzYWdlID0geyBjbWQ6ICdyZXNpemUtaWZyYW1lJywgbmFtZTogaWZyRWxlbVswXS5uYW1lLCBpZDogaWQgfTtcbiAvLyBUT0RPXG4gaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4uZGVmZXJyZWRzW2lkXSA9IGRlZmVycmVkO1xuIGRlZmVycmVkLmFsd2F5cyhmdW5jdGlvbigpIHtcbiBkZWxldGUgaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4uZGVmZXJyZWRzW2lkXTtcbiB9KTtcblxuIGxldCBmcmFtZSA9IGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluLmlmcmFtZTtcbiBpZiAoZnJhbWUubG9hZGVkKSB7XG4gZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgXCJodHRwOi8vcnUubG9va2F0Y29kZS5jb21cIik7XG4gfSBlbHNlIHtcbiBmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuIGZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIFwiaHR0cDovL3J1Lmxvb2thdGNvZGUuY29tXCIpO1xuIH0pO1xuIH1cblxuIGlmIChwbGFjZWhvbGRlcikge1xuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gcGxhY2Vob2xkZXIucmVwbGFjZVdpdGgoaWZyRWxlbSk7XG4gfSwgMjApO1xuIH1cblxuIHJldHVybiBkZWZlcnJlZDtcbiB9XG5cbiBpZnJhbWVSZXNpemVDcm9zc0RvbWFpbi5kZWZlcnJlZHMgPSB7fTtcbiBpZnJhbWVSZXNpemVDcm9zc0RvbWFpbi5pZnJhbWUgPSAkKCc8aWZyYW1lIHNyYz1cImh0dHA6Ly9ydS5sb29rYXRjb2RlLmNvbS9maWxlcy9pZnJhbWUtcmVzaXplLmh0bWxcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPjwvaWZyYW1lPicpLnByZXBlbmRUbygnYm9keScpO1xuIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluLmlmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiB9KTtcbiAqL1xuIiwibGV0IGdldFNjcm9sbGJhckhlaWdodCA9IHJlcXVpcmUoJy4vZ2V0U2Nyb2xsYmFySGVpZ2h0Jyk7XG5sZXQgc2Nyb2xsYmFySGVpZ2h0O1xuXG5mdW5jdGlvbiBnZXREb2N1bWVudEhlaWdodChkb2MpIHtcbiAgZG9jID0gZG9jIHx8IGRvY3VtZW50O1xuXG4gIGxldCBoZWlnaHQgPSBNYXRoLm1heChcbiAgICBkb2MuYm9keS5zY3JvbGxIZWlnaHQsIGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgIGRvYy5ib2R5Lm9mZnNldEhlaWdodCwgZG9jLmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgZG9jLmJvZHkuY2xpZW50SGVpZ2h0LCBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICApO1xuXG4gIGlmIChkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoID4gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkge1xuICAgIC8vIGdvdCBhIGhvcml6IHNjcm9sbCwgbGV0J3MgYWRkIGl0XG4gICAgaWYgKCFzY3JvbGxiYXJIZWlnaHQpIHNjcm9sbGJhckhlaWdodCA9IGdldFNjcm9sbGJhckhlaWdodCgpO1xuICAgIGhlaWdodCArPSBzY3JvbGxiYXJIZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERvY3VtZW50SGVpZ2h0O1xuXG4iLCJmdW5jdGlvbiBnZXRTY3JvbGxiYXJIZWlnaHQoKSB7XG4gIGxldCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG91dGVyLnN0eWxlLmNzc1RleHQgPSBcInZpc2liaWxpdHk6aGlkZGVuO2hlaWdodDoxMDBweFwiO1xuICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRTY3JvbGxiYXJIZWlnaHQgY2FsbGVkIHRvIGVhcmx5OiBubyBkb2N1bWVudC5ib2R5XCIpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gIGxldCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gIC8vIGZvcmNlIHNjcm9sbGJhcnNcbiAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gIC8vIGFkZCBpbm5lcmRpdlxuICBsZXQgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgbGV0IHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gIC8vIHJlbW92ZSBkaXZzXG4gIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gIHJldHVybiB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFNjcm9sbGJhckhlaWdodDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwiXG5yZXF1aXJlKCdjbGllbnQvcG9seWZpbGwnKTtcblxudHJ5IHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS50ZXN0UHJvcGVydHkgPSAxO1xuICBkZWxldGUgd2luZG93LmxvY2FsU3RvcmFnZS50ZXN0UHJvcGVydHk7XG59IGNhdGNoKGUpIHtcbiAgLy8gbG9jYWxTdG9yYWdlIGRpc2FibGVkIG9yIGZvcmJpZGRlblxuICB0cnkge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UgPSB7fTtcbiAgICAvLyBzbyB0aGF0IG9wZXJhdGlvbnMgb24gaXQgd29uJ3QgZmFpbFxuICB9IGNhdGNoKGUpIHtcbiAgICAvKiBjYW4gaGFwcGVuIFR5cGVFcnJvcjogQXR0ZW1wdGVkIHRvIGFzc2lnbiB0byByZWFkb25seSBwcm9wZXJ0eS4gKi9cbiAgfVxufVxuXG5leHBvcnRzLk1vZGFsID0gcmVxdWlyZSgnLi9tb2RhbCcpO1xuZXhwb3J0cy5mb250VGVzdCA9IHJlcXVpcmUoJy4vZm9udFRlc3QnKTtcbmV4cG9ydHMucmVzaXplT25sb2FkID0gcmVxdWlyZSgnLi9yZXNpemVPbmxvYWQnKTtcbnJlcXVpcmUoJy4vbGF5b3V0Jyk7XG5yZXF1aXJlKCdlbmdpbmUvc2lkZWJhci9jbGllbnQnKTtcbnJlcXVpcmUoJy4vbmF2aWdhdGlvbkFycm93cycpO1xucmVxdWlyZSgnLi9ob3ZlcicpO1xucmVxdWlyZSgnLi90cmFja0xpbmtzJyk7XG5cbiIsInJlcXVpcmUoJy4vZG9tJyk7XG4iLCIvL3JlcXVpcmUoJy4vY2FzcGVyanMnKTtcblxuLy8gaHR0cDovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI211dGF0aW9uLW1ldGhvZC1tYWNyb1xuZnVuY3Rpb24gbXV0YXRpb24obm9kZXMpIHtcbiAgaWYgKCFub2Rlcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0RPTSBFeGNlcHRpb24gOCcpO1xuICB9IGVsc2UgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiB0eXBlb2Ygbm9kZXNbMF0gPT09ICdzdHJpbmcnID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZXNbMF0pIDogbm9kZXNbMF07XG4gIH0gZWxzZSB7XG4gICAgdmFyXG4gICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgIGxlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBub2RlO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpbmRleF07XG5cbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUpIDogbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG59XG5cbmxldCBtZXRob2RzID0ge1xuICAvLyBzYWZhcmkgPSB3ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgbWF0Y2hlczogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvcixcbiAgcmVwbGFjZSgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG11dGF0aW9uKGFyZ3VtZW50cyksIHRoaXMpO1xuICAgIH1cbiAgfSxcbiAgcHJlcGVuZCgpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShtdXRhdGlvbihhcmd1bWVudHMpLCB0aGlzLmZpcnN0Q2hpbGQpO1xuICB9LFxuICBhcHBlbmQoKSB7XG4gICAgdGhpcy5hcHBlbmRDaGlsZChtdXRhdGlvbihhcmd1bWVudHMpKTtcbiAgfSxcbiAgcmVtb3ZlKCkge1xuICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gIH0sXG4gIGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlKCkge1xuICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobXV0YXRpb24oYXJndW1lbnRzKSwgdGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIGFmdGVyOiAgIGZ1bmN0aW9uIGFmdGVyKCkge1xuICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobXV0YXRpb24oYXJndW1lbnRzKSwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgfVxuICB9LFxuICBjbG9zZXN0OiBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIGxldCBub2RlID0gdGhpcztcblxuICAgIHdoaWxlIChub2RlKSB7XG4gICAgICBpZiAobm9kZS5tYXRjaGVzICYmIG5vZGUubWF0Y2hlcyhzZWxlY3RvcikpIHJldHVybiBub2RlO1xuICAgICAgZWxzZSBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZm9yIChsZXQgbWV0aG9kTmFtZSBpbiBtZXRob2RzKSB7XG4gIGlmICghRWxlbWVudC5wcm90b3R5cGVbbWV0aG9kTmFtZV0pIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gIH1cbn1cblxucmVxdWlyZSgnLi9jdXN0b21FdmVudCcpO1xucmVxdWlyZSgnLi9kYXRhc2V0Jyk7XG5yZXF1aXJlKCcuL2hpZGRlbicpO1xucmVxdWlyZSgnLi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnKTtcbiIsIlxudHJ5IHtcbiAgbmV3IEN1c3RvbUV2ZW50KFwiSUUgaGFzIEN1c3RvbUV2ZW50LCBidXQgZG9lc24ndCBzdXBwb3J0IGNvbnN0cnVjdG9yXCIpO1xufSBjYXRjaCAoZSkge1xuXG4gIHdpbmRvdy5DdXN0b21FdmVudCA9IGZ1bmN0aW9uKGV2ZW50LCBwYXJhbXMpIHtcbiAgICBsZXQgZXZ0O1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICBidWJibGVzOiAgICBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgZGV0YWlsOiAgICAgdW5kZWZpbmVkXG4gICAgfTtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfTtcblxuICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHdpbmRvdy5FdmVudC5wcm90b3R5cGUpO1xufVxuXG4iLCIvLyBkYXRhc2V0IGZvciBJRTEwXG5cbmlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRhdGFzZXQgJiZcbiAgICAvLyBGRiBpcyBlbXB0eSB3aGlsZSBJRSBnaXZlcyBlbXB0eSBvYmplY3RcbiAgKCFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCAnZGF0YXNldCcpICB8fFxuICAhT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSwgJ2RhdGFzZXQnKS5nZXQpXG4pIHtcbiAgbGV0IHByb3BEZXNjcmlwdG9yID0ge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBsZXQgaSxcbiAgICAgICAgICB0aGF0ID0gdGhpcyxcbiAgICAgICAgICBIVE1MNV9ET01TdHJpbmdNYXAsXG4gICAgICAgICAgYXR0clZhbCwgYXR0ck5hbWUsIHByb3BOYW1lLFxuICAgICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgICBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzLFxuICAgICAgICAgIGF0dHNMZW5ndGggPSBhdHRyaWJ1dGVzLmxlbmd0aCxcbiAgICAgICAgICB0b1VwcGVyQ2FzZSA9IGZ1bmN0aW9uIChuMCkge1xuICAgICAgICAgICAgcmV0dXJuIG4wLmNoYXJBdCgxKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXR0ZXIgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpID9cbiAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKSA6XG4gICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICB9O1xuICAgICAgdHJ5IHsgLy8gU2ltdWxhdGUgRE9NU3RyaW5nTWFwIHcvYWNjZXNzb3Igc3VwcG9ydFxuICAgICAgICAvLyBUZXN0IHNldHRpbmcgYWNjZXNzb3Igb24gbm9ybWFsIG9iamVjdFxuICAgICAgICAoe30pLl9fZGVmaW5lR2V0dGVyX18oJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIEhUTUw1X0RPTVN0cmluZ01hcCA9IHt9O1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUxKSB7IC8vIFVzZSBhIERPTSBvYmplY3QgZm9yIElFOFxuICAgICAgICBIVE1MNV9ET01TdHJpbmdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBhdHRzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXR0cmlidXRlID0gYXR0cmlidXRlc1tpXTtcbiAgICAgICAgLy8gRml4OiBUaGlzIHRlc3QgcmVhbGx5IHNob3VsZCBhbGxvdyBhbnkgWE1MIE5hbWUgd2l0aG91dFxuICAgICAgICAvLyAgICAgICAgIGNvbG9ucyAoYW5kIG5vbi11cHBlcmNhc2UgZm9yIFhIVE1MKVxuICAgICAgICBpZiAoYXR0cmlidXRlICYmIGF0dHJpYnV0ZS5uYW1lICYmXG4gICAgICAgICAgKC9eZGF0YS1cXHdbXFx3XFwtXSokLykudGVzdChhdHRyaWJ1dGUubmFtZSkpIHtcbiAgICAgICAgICBhdHRyVmFsID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAgIGF0dHJOYW1lID0gYXR0cmlidXRlLm5hbWU7XG4gICAgICAgICAgLy8gQ2hhbmdlIHRvIENhbWVsQ2FzZVxuICAgICAgICAgIHByb3BOYW1lID0gYXR0ck5hbWUuc3Vic3RyKDUpLnJlcGxhY2UoLy0uL2csIHRvVXBwZXJDYXNlKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUw1X0RPTVN0cmluZ01hcCwgcHJvcE5hbWUsIHtcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdGhpcy5lbnVtZXJhYmxlLFxuICAgICAgICAgICAgICBnZXQ6IGdldHRlci5iaW5kKGF0dHJWYWwgfHwgJycpLFxuICAgICAgICAgICAgICBzZXQ6IHNldHRlci5iaW5kKHRoYXQsIGF0dHJOYW1lKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhdGNoIChlMikgeyAvLyBpZiBhY2Nlc3NvcnMgYXJlIG5vdCB3b3JraW5nXG4gICAgICAgICAgICBIVE1MNV9ET01TdHJpbmdNYXBbcHJvcE5hbWVdID0gYXR0clZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBIVE1MNV9ET01TdHJpbmdNYXA7XG4gICAgfVxuICB9O1xuICB0cnkge1xuICAgIC8vIEZGIGVudW1lcmF0ZXMgb3ZlciBlbGVtZW50J3MgZGF0YXNldCwgYnV0IG5vdFxuICAgIC8vICAgRWxlbWVudC5wcm90b3R5cGUuZGF0YXNldDsgSUU5IGl0ZXJhdGVzIG92ZXIgYm90aFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2RhdGFzZXQnLCBwcm9wRGVzY3JpcHRvcik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwcm9wRGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7IC8vIElFOCBkb2VzIG5vdCBhbGxvdyBzZXR0aW5nIHRvIHRydWVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdkYXRhc2V0JywgcHJvcERlc2NyaXB0b3IpO1xuICB9XG59IiwiaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5oaWRkZW4gPT09IHVuZGVmaW5lZCkge1xuICBkb2N1bWVudC5oZWFkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgJzxzdHlsZT4gW2hpZGRlbl0geyBkaXNwbGF5OiBub25lIH0gPC9zdHlsZT4nKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsZW1lbnQucHJvdG90eXBlLCBcImhpZGRlblwiLCB7XG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHZhbHVlKTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSk7XG59XG4iLCIvLyBwb2x5ZmlsbCBmb3Igb2xkIEFuZHJvaWRcbihmdW5jdGlvbigpIHtcbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICBsZXQgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGxldCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgbGV0IGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7IH0sXG4gICAgICAgIHRpbWVUb0NhbGwpO1xuICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfTtcblxuICBpZiAoIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihpZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICB9O1xufSgpKTsiLCJmdW5jdGlvbiBNb2RhbChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnJlbmRlcigpO1xuICB0aGlzLnNldEhhc0Nsb3NlKG9wdGlvbnMuaGFzQ2xvc2UgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLmhhc0Nsb3NlKTtcblxuICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgdGhpcy5vbkRvY3VtZW50S2V5RG93biA9IHRoaXMub25Eb2N1bWVudEtleURvd24uYmluZCh0aGlzKTtcblxuICB0aGlzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25Eb2N1bWVudEtleURvd24pO1xufVxuXG5Nb2RhbC5wcm90b3R5cGUuc2V0SGFzQ2xvc2UgPSBmdW5jdGlvbihuZXdIYXNDbG9zZSkge1xuICB0aGlzLl9oYXNDbG9zZSA9IG5ld0hhc0Nsb3NlO1xuICBpZiAodGhpcy5faGFzQ2xvc2UpIHtcbiAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2hhcy1jbG9zZScpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9faGFzLWNsb3NlJyk7XG4gIH1cbn07XG5cbk1vZGFsLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsXG4gICAgJzxkaXYgY2xhc3M9XCJtb2RhbFwiPjxkaXYgY2xhc3M9XCJtb2RhbF9fZGlhbG9nXCI+PGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ1dHRvbiBtb2RhbF9fY2xvc2VcIiB0aXRsZT1cItC30LDQutGA0YvRgtGMXCI+PC9idXR0b24+PGRpdiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCI+PC9kaXY+PC9kaXY+PC9kaXY+J1xuICApO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3BhcmFuamEtb3BlbicpO1xuICB0aGlzLmVsZW0gPSBkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZDtcbiAgdGhpcy5jb250ZW50RWxlbSA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRlbnQnKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5vbkNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19jbG9zZScpKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG5cbk1vZGFsLnByb3RvdHlwZS5vbkRvY3VtZW50S2V5RG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmIChldmVudC5rZXlDb2RlID09IDI3KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG59O1xuXG5Nb2RhbC5wcm90b3R5cGUuc2hvd092ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jb250ZW50RWxlbS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vdmVybGF5X2xpZ2h0Jyk7XG59O1xuXG5Nb2RhbC5wcm90b3R5cGUuaGlkZU92ZXJsYXkgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jb250ZW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vdmVybGF5X2xpZ2h0Jyk7XG59O1xuXG5Nb2RhbC5wcm90b3R5cGUuc2V0Q29udGVudCA9IGZ1bmN0aW9uKGh0bWxPck5vZGUpIHtcbiAgaWYgKHR5cGVvZiBodG1sT3JOb2RlID09ICdzdHJpbmcnKSB7XG4gICAgdGhpcy5jb250ZW50RWxlbS5pbm5lckhUTUwgPSBodG1sT3JOb2RlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGVudEVsZW0uaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5jb250ZW50RWxlbS5hcHBlbmRDaGlsZChodG1sT3JOb2RlKTtcbiAgfVxuICAvLyB1c2UgZGF0YS1tb2RhbC1hdXRvZm9jdXMgd2hlcmUgb25seSBtb2RhbCBzaG91bGQgYXV0b2ZvY3VzLFxuICAvLyBhIGZpZWxkIHdpdGggZGF0YS1tb2RhbC1hdXRvZm9jdXMgd2lsbCBub3QgZ2V0IGZvY3VzLCB1bmxlc3Mgc2hvd24gaW4gbW9kYWxcbiAgbGV0IGF1dG9mb2N1cyA9IHRoaXMuY29udGVudEVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtbW9kYWwtYXV0b2ZvY3VzXSxbYXV0b2ZvY3VzXScpO1xuICBpZiAoYXV0b2ZvY3VzKSBhdXRvZm9jdXMuZm9jdXMoKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdwYXJhbmphLW9wZW4nKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmVsZW0pO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uRG9jdW1lbnRLZXlEb3duKTtcbiAgdGhpcy5lbGVtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibW9kYWwtcmVtb3ZlXCIpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kYWw7XG4iLCIvKlxu0JjQt9Cx0LXQs9Cw0LXQvCBGT1VUIC0g0L/RgNC+0YHRgtC+0Lkg0YHQv9C+0YHQvtCxINC/0YDQvtCy0LXRgNC60Lgg0LfQsNCz0YDRg9C30LrQuCDQuNC60L7QvdC40Log0YjRgNC40YTRgtCwLlxuIDEpINCU0LXQu9Cw0LXQvCDQsiBpY29uaWMg0YjRgNC40YTRgtC1INC+0LTQuNC9INGB0LjQvNCy0L7QuyDRgSDQutC+0LTQvtC8IDIxICjQstC80LXRgdGC0L4gwqshwrspXG4g0JIgaWNvbm1vb25cbiBodHRwOi8vaWx5YWthbnRvci5ydS9zY3JlZW4vMjAxNC0wOS0wNl8wMTUyLnBuZ1xuIGh0dHA6Ly9pbHlha2FudG9yLnJ1L3NjcmVlbi8yMDE0LTA5LTA2XzAxNTMucG5nXG5cbiDQrdGC0L7RgiDRiNGA0LjRhNGCINCyINC+0LHRi9GH0L3QvtC8INGI0YDQuNGE0YLQtSAoc2VyaWYpINGD0LfQutC40Lkg0L/QviDRiNC40YDQuNC90LUsINCwINCyIGljb25pYyAtINC90L7RgNC80LDQu9GM0L3Ri9C5LlxuIDIpINCU0LDQu9C10LUg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHQvtC30LTQsNGR0LwgPHNwYW4+ITwvc3Bhbj4g0Lgg0LTQsNGR0Lwg0LXQvNGDIGZvbnRGYW1pbHkg0YHQvdCw0YfQsNC70LAgc2VyaWYg0Lgg0LfQsNC80LXRgNGP0LXQvCDRiNC40YDQuNC90YMsINCwINC/0L7RgtC+0LwgRm9udEljb25zLCBzZXJpZi5cbiDQntGC0LvQsNCy0LvQuNCy0LDQtdC8INC80L7QvNC10L3Rgiwg0LrQvtCz0LTQsCDRiNC40YDQuNC90LAg0LjQt9C80LXQvdC40YLRgdGPLiDQrdGC0L4g0LfQvdCw0YfQuNGCINGI0YDQuNGE0YIg0LfQsNCz0YDRg9C20LXQvS5cbiDQnNC+0LbQvdC+INGD0LHRgNCw0YLRjCDQutC70LDRgdGBIC5uby1pY29ucyDQuCDQv9C+0LrQsNC30LDRgtGMINC40LrQvtC90LrQuC5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pO1xuICBlbGVtLmNsYXNzTmFtZSA9ICdmb250LXRlc3QnO1xuICBlbGVtLnN0eWxlLmZvbnRGYW1pbHkgPSAnc2VyaWYnO1xuICBsZXQgaW5pdGlhbFdpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcblxuICBlbGVtLnN0eWxlLmZvbnRGYW1pbHkgPSAnJztcblxuICBmdW5jdGlvbiBjaGVja0ZvbnRMb2FkZWQoKSB7XG4gICAgaWYgKGluaXRpYWxXaWR0aCAhPSBlbGVtLm9mZnNldFdpZHRoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLWljb25zJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRpbWVvdXQoY2hlY2tGb250TG9hZGVkLCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRm9udExvYWRlZCgpO1xuXG59O1xuIiwibGV0IHJlcXVlc3RBbmltYXRpb25GcmFtZUlkO1xuXG5sZXQgREVCVUcgPSBmYWxzZTtcbmZ1bmN0aW9uIGxvZygpIHtcbiAgaWYgKERFQlVHKSB7XG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5sZXQgVEFCTEVUX1dJRFRIID0gODQwO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgLy8gZG9uJ3QgaGFuZGxlIG9uc2Nyb2xsIG1vcmUgb2Z0ZW4gdGhhbiBhbmltYXRpb25cbiAgZnVuY3Rpb24gb25XaW5kb3dTY3JvbGxBbmRSZXNpemVUaHJvdHRsZWQoKSB7XG4gICAgbG9nKFwib25XaW5kb3dTY3JvbGxBbmRSZXNpemVUaHJvdHRsZWRcIiwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQpO1xuICAgIGlmIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWVJZCkgcmV0dXJuO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgb25XaW5kb3dTY3JvbGxBbmRSZXNpemUoKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZUlkID0gbnVsbDtcbiAgICB9KTtcblxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uV2luZG93U2Nyb2xsQW5kUmVzaXplVGhyb3R0bGVkKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uV2luZG93U2Nyb2xsQW5kUmVzaXplVGhyb3R0bGVkKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIG9uV2luZG93U2Nyb2xsQW5kUmVzaXplVGhyb3R0bGVkKTtcblxufSkoKTtcblxuZnVuY3Rpb24gY29tcGFjdGlmeVNpZGViYXIoKSB7XG4gIGxvZyhcImNvbXBhY3RpZnlTaWRlYmFyXCIpO1xuICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgbGV0IHNpZGViYXJDb250ZW50ID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fY29udGVudCcpO1xuICBsZXQgc2lkZWJhcklubmVyID0gc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9faW5uZXInKTtcblxuICBsZXQgaGFzU3RpY2t5Rm9vdGVyID0gc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJfc3RpY2t5LWZvb3RlcicpO1xuICBsZXQgaXNDb21wYWN0ID0gc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJfY29tcGFjdCcpO1xuXG4gIGlmIChpc0NvbXBhY3QpIHtcbiAgICBsZXQgZW1wdHlTcGFjZVNpemU7XG4gICAgaWYgKGhhc1N0aWNreUZvb3Rlcikge1xuICAgICAgZW1wdHlTcGFjZVNpemUgPSBzaWRlYmFyQ29udGVudC5sYXN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgICBzaWRlYmFyQ29udGVudC5sYXN0RWxlbWVudENoaWxkLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbXB0eVNwYWNlU2l6ZSA9IHNpZGViYXJDb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtXG4gICAgICBzaWRlYmFyQ29udGVudC5sYXN0RWxlbWVudENoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICB9XG5cbiAgICBsb2coXCJkZWNvbXBhY3Q/XCIsIGVtcHR5U3BhY2VTaXplKTtcblxuICAgIC8vIGVub3VnaCBzcGFjZSB0byBvY2N1cHkgdGhlIGZ1bGwgaGVpZ2h0IGluIGRlY29tcGFjdGVkIGZvcm0gd2l0aG91dCBzY3JvbGxiYXJcbiAgICBpZiAoZW1wdHlTcGFjZVNpemUgPiAxNTApIHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhcl9jb21wYWN0Jyk7XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgbG9nKHNpZGViYXJJbm5lci5zY3JvbGxIZWlnaHQsIHNpZGViYXJJbm5lci5jbGllbnRIZWlnaHQpO1xuICAgIGlmIChzaWRlYmFySW5uZXIuc2Nyb2xsSGVpZ2h0ID4gc2lkZWJhcklubmVyLmNsaWVudEhlaWdodCkge1xuICAgICAgbG9nKFwiY29tcGFjdCFcIik7XG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfY29tcGFjdCcpO1xuICAgIH1cbiAgfVxuXG5cbn1cblxuZnVuY3Rpb24gb25XaW5kb3dTY3JvbGxBbmRSZXNpemUoKSB7XG5cbiAgbGV0IHRvb2xiYXJTZWxlY3RvciA9ICcuc2l0ZXRvb2xiYXItbGlnaHQnO1xuICBsZXQgc2l0ZXRvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvb2xiYXJTZWxlY3Rvcik7XG5cblxuICBpZiAoIXNpdGV0b29sYmFyKSB7XG4gICAgbG9nKFwibm8gc2l0ZXRvb2xiYXJcIik7XG4gICAgcmV0dXJuOyAvLyBwYWdlIGluIGEgbm8tdG9wLW5hdiBsYXlvdXRcbiAgfVxuXG4gIGxldCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuICBpZiAoc2lkZWJhcikge1xuICAgIHNpZGViYXIuc3R5bGUudG9wID0gTWF0aC5tYXgoc2l0ZXRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tLCAwKSArICdweCc7XG4gICAgY29tcGFjdGlmeVNpZGViYXIoKTtcbiAgfVxuXG4gIHNldFVzZXJTY2FsZUlmVGFibGV0KCk7XG5cblxufVxuXG5mdW5jdGlvbiBzZXRVc2VyU2NhbGVJZlRhYmxldCgpIHtcbiAgbGV0IGlzVGFibGV0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDw9IFRBQkxFVF9XSURUSDtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLmNvbnRlbnQ7XG4gIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoL3VzZXItc2NhbGFibGU9XFx3Ky8sICd1c2VyLXNjYWxhYmxlPScgKyAoaXNUYWJsZXQgPyAneWVzJyA6ICdubycpKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKS5jb250ZW50ID0gY29udGVudDtcbn1cbiIsIlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG5cbmluaXRTaWRlYmFySGlnaGxpZ2h0KCk7XG5cbmZ1bmN0aW9uIHRvZ2dsZSgpIHtcblxuICBsZXQgcGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS13cmFwcGVyJyk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlX3NpZGViYXJfb24nKTtcblxuICBwYWdlV3JhcHBlciAmJiBwYWdlV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlLXdyYXBwZXJfc2lkZWJhcl9vbicpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpLmNsYXNzTGlzdC5jb250YWlucygncGFnZV9zaWRlYmFyX29uJykpIHtcbiAgICBkZWxldGUgbG9jYWxTdG9yYWdlLm5vU2lkZWJhcjtcbiAgfSBlbHNlIHtcbiAgICBsb2NhbFN0b3JhZ2Uubm9TaWRlYmFyID0gMTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIG9uQ2xpY2soZXZlbnQpIHtcblxuICBpZiAoIWV2ZW50LnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2lkZWJhci10b2dnbGUnKSkgcmV0dXJuO1xuXG4gIHRvZ2dsZSgpO1xufVxuXG5cbmZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAvLyBkb24ndCByZWFjdCBvbiBDdHJsLT4gPC0gaWYgaW4gdGV4dFxuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIGlmICh+WydJTlBVVCcsICdURVhUQVJFQScsICdTRUxFQ1QnXS5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZSkpIHJldHVybjtcbiAgfVxuXG4gIGlmIChldmVudC5rZXlDb2RlICE9IFwiU1wiLmNoYXJDb2RlQXQoMCkpIHJldHVybjtcblxuICBpZiAofm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwibWFjIG9zIHhcIikpIHtcbiAgICBpZiAoIWV2ZW50Lm1ldGFLZXkgfHwgIWV2ZW50LmFsdEtleSkgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGlmICghZXZlbnQuYWx0S2V5KSByZXR1cm47XG4gIH1cblxuICB0b2dnbGUoKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxufVxuXG5mdW5jdGlvbiBpbml0U2lkZWJhckhpZ2hsaWdodCgpIHtcblxuICBmdW5jdGlvbiBoaWdobGlnaHQoKSB7XG5cbiAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NpZGViYXJfX25hdmlnYXRpb24tbGlua19hY3RpdmUnKTtcbiAgICBpZiAoY3VycmVudFswXSkgY3VycmVudFswXS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyX19uYXZpZ2F0aW9uLWxpbmtfYWN0aXZlJyk7XG5cbiAgICAvL2RlYnVnZ2VyO1xuICAgIGxldCBoMnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDInKTtcbiAgICBsZXQgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgaDJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaDIgPSBoMnNbaV07XG4gICAgICAvLyBmaXJzdCBpbi1wYWdlIGhlYWRlclxuICAgICAgLy8gPjEsIGJlY2F1c2Ugd2hlbiB2aXNpdGluZyBodHRwOi8vamF2YXNjcmlwdC5sb2NhbC9uYXRpdmUtcHJvdG90eXBlcyNuYXRpdmUtcHJvdG90eXBlLWNoYW5nZSxcbiAgICAgIC8vIHRvcCBtYXkgYmUgMC4zNzUgb3Iga2luZCBvZi4uLlxuICAgICAgaWYgKGgyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA+IDEpIGJyZWFrO1xuICAgIH1cbiAgICBpLS07IC8vIHdlIG5lZWQgdGhlIG9uZSBiZWZvcmUgaXQgKGN1cnJlbnRseSByZWFkaW5nKVxuXG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgbGV0IGhyZWYgPSBoMnNbaV0uZmlyc3RFbGVtZW50Q2hpbGQgJiYgaDJzW2ldLmZpcnN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgbGV0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX25hdmlnYXRpb24tbGluayBhW2hyZWY9XCInICsgaHJlZiArICdcIl0nKTtcbiAgICAgIGlmIChocmVmICYmIGxpKSB7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfX25hdmlnYXRpb24tbGlua19hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBoaWdobGlnaHQoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoaWdobGlnaHQpO1xuICB9KTtcblxufVxuXG5cbi8qXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHdpbmRvdy5fYnNhKSB7XG4gICAgaW5pdENhcmJvbigpO1xuICB9IGVsc2Uge1xuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbc3JjKj1cImJ1eXNlbGxhZHMuY29tXCJdJyk7XG4gICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHNldFRpbWVvdXQoaW5pdENhcmJvbik7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0Q2FyYm9uKCkge1xuXG4gICAgX2JzYS5pbml0KCdjdXN0b20nLCAnQ0tZREVLM1UnLCAncGxhY2VtZW50OmphdmFzY3JpcHRpbmZvJyxcbiAgICAgIHtcbiAgICAgICAgdGFyZ2V0OiAgICcjY2FyYm9uJyxcbiAgICAgICAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiIyNzdGF0bGluayMjXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3cgbm9vcGVuZXJcIiBjbGFzcz1cImNhcmJvbi1jcGNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyYm9uLWRlc2NyaXB0aW9uXCI+PHN0cm9uZz4jI2NvbXBhbnkjIzwvc3Ryb25nPiDigJQgIyNkZXNjcmlwdGlvbiMjPC9kaXY+XG4gICAgPC9hPlxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jYXJib25hZHMubmV0Lz91dG1fc291cmNlPWphdmFzY3JpcHQtaW5mby1jdXN0b20mdXRtX21lZGl1bT1hZF92aWFfbGluayZ1dG1fY2FtcGFpZ249aW5fdW5pdCZ1dG1fdGVybT1jdXN0b21cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvdyBub29wZW5lclwiIGNsYXNzPVwiY2FyYm9uLXNwb25zb3JcIj5BZHMgdmlhIENhcmJvbjwvYT5cbiAgICBgXG4gICAgICB9XG4gICAgKTtcbiAgfVxufSk7XG4qL1xuIiwiLy8gbmF2aWdhdGlvbiBzdGFydHMgdG8gd29yayByaWdodCBub3dcbmxldCBvblN3aXBlID0gcmVxdWlyZSgnY2xpZW50L29uU3dpcGUnKTtcbmxldCBjdHJsT3JBbHQgPSB+bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJtYWMgb3MgeFwiKSA/ICdjdHJsJyA6ICdhbHQnO1xuXG5mdW5jdGlvbiBvbktleURvd24oZXZlbnQpIHtcbiAgLy8gZG9uJ3QgcmVhY3Qgb24gQ3RybC0+IDwtIGlmIGluIHRleHRcbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoflsnSU5QVVQnLCAnVEVYVEFSRUEnLCAnU0VMRUNUJ10uaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUpKSByZXR1cm47XG4gIH1cblxuICBpZiAoIWV2ZW50W2N0cmxPckFsdCArICdLZXknXSkgcmV0dXJuO1xuXG4gIGxldCByZWwgPSBudWxsO1xuICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgY2FzZSAweDI1OlxuICAgIHJlbCA9ICdwcmV2JztcbiAgICBicmVhaztcbiAgY2FzZSAweDI3OlxuICAgIHJlbCA9ICduZXh0JztcbiAgICBicmVhaztcbiAgZGVmYXVsdDpcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiJyArIHJlbCArICdcIl0nKTtcbiAgaWYgKCFsaW5rKSByZXR1cm47XG5cbiAgZG9jdW1lbnQubG9jYXRpb24gPSBsaW5rLmhyZWY7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbn1cblxuZnVuY3Rpb24gc2hvd0hvdEtleXMoKSB7XG4gIGxldCBrZXlEZXNjID0gY3RybE9yQWx0WzBdLnRvVXBwZXJDYXNlKCkgKyBjdHJsT3JBbHQuc2xpY2UoMSk7XG5cbiAgbGV0IHNob3J0Y3V0O1xuXG4gIGxldCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJuZXh0XCJdJyk7XG4gIGlmIChuZXh0KSB7XG4gICAgc2hvcnRjdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCInICsgbmV4dC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSArICdcIl0gLnBhZ2VfX25hdi10ZXh0LXNob3J0Y3V0Jyk7XG4gICAgc2hvcnRjdXQuaW5uZXJIVE1MID0ga2V5RGVzYyArICcgKyA8c3BhbiBjbGFzcz1cInBhZ2VfX25hdi10ZXh0LWFyclwiPuKGkjwvc3Bhbj4nO1xuICB9XG5cbiAgbGV0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cInByZXZcIl0nKTtcbiAgaWYgKHByZXYpIHtcbiAgICBzaG9ydGN1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZj1cIicgKyBwcmV2LmdldEF0dHJpYnV0ZSgnaHJlZicpICsgJ1wiXSAucGFnZV9fbmF2LXRleHQtc2hvcnRjdXQnKTtcbiAgICBzaG9ydGN1dC5pbm5lckhUTUwgPSBrZXlEZXNjICsgJyArIDxzcGFuIGNsYXNzPVwicGFnZV9fbmF2LXRleHQtYXJyXCI+4oaQPC9zcGFuPic7XG4gIH1cblxufVxuXG5vblN3aXBlKGRvY3VtZW50LCB7XG4gIG9uUmlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJwcmV2XCJdJyk7XG4gICAgaWYgKGxpbmspIGRvY3VtZW50LmxvY2F0aW9uID0gbGluay5ocmVmO1xuICB9LFxuICBvbkxlZnQ6IGZ1bmN0aW9uKCkge1xuICAgIGxldCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGlua1tyZWw9XCJuZXh0XCJdJyk7XG4gICAgaWYgKGxpbmspIGRvY3VtZW50LmxvY2F0aW9uID0gbGluay5ocmVmO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93bik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzaG93SG90S2V5cyk7XG4iLCJmdW5jdGlvbiBvblN3aXBlKGVsZW0sIG9wdGlvbnMpIHtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBsZXQgc3RhcnRYLFxuICAgICAgc3RhcnRZLFxuICAgICAgZGlzdCxcbiAgICAgIG9uUmlnaHQgPSBvcHRpb25zLm9uUmlnaHQgfHwgZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uTGVmdCA9IG9wdGlvbnMub25MZWZ0IHx8IGZ1bmN0aW9uKCl7fSxcbiAgICAgIHRvbGVyYW5jZSA9IG9wdGlvbnMudG9sZXJhbmNlIHx8IDUwLCAvLyBtYXhpbXVtIHZlcnRpY2FsIGRpc3RhbmNlXG4gICAgICB0aHJlc2hvbGQgPSBvcHRpb25zLnRocmVzaG9sZCB8fCAxNTAsIC8vcmVxdWlyZWQgbWluIGRpc3RhbmNlIHRyYXZlbGVkIHRvIGJlIGNvbnNpZGVyZWQgc3dpcGVcbiAgICAgIGFsbG93ZWRUaW1lID0gb3B0aW9ucy5hbGxvd2VkVGltZSB8fCA1MDAsIC8vIG1heGltdW0gdGltZSBhbGxvd2VkIHRvIHRyYXZlbCB0aGF0IGRpc3RhbmNlXG4gICAgICBlbGFwc2VkVGltZSxcbiAgICAgIHN0YXJ0VGltZTtcblxuICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBkaXN0ID0gMDtcbiAgICBzdGFydFggPSB0b3VjaG9iai5wYWdlWDtcbiAgICBzdGFydFkgPSB0b3VjaG9iai5wYWdlWTtcbiAgICAvL2NvbnNvbGUubG9nKFwic3RhcnRcIiwgc3RhcnRYLCBzdGFydFkpO1xuICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7IC8vIHJlY29yZCB0aW1lIHdoZW4gZmluZ2VyIGZpcnN0IG1ha2VzIGNvbnRhY3Qgd2l0aCBzdXJmYWNlXG4gIH0pO1xuXG4gIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgbGV0IHRvdWNob2JqID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICBkaXN0ID0gdG91Y2hvYmoucGFnZVggLSBzdGFydFg7IC8vIGdldCB0b3RhbCBkaXN0IHRyYXZlbGVkIGJ5IGZpbmdlciB3aGlsZSBpbiBjb250YWN0IHdpdGggc3VyZmFjZVxuICAgIGVsYXBzZWRUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTsgLy8gZ2V0IHRpbWUgZWxhcHNlZFxuXG4gICAgLy9jb25zb2xlLmxvZyhcImVuZFwiLCB0b3VjaG9iai5wYWdlWCwgdG91Y2hvYmoucGFnZVkpO1xuXG4gICAgLy8gdG9vIG11Y2ggdXAvZG93blxuICAgIGlmIChNYXRoLmFicyh0b3VjaG9iai5wYWdlWSAtIHN0YXJ0WSkgPiB0b2xlcmFuY2UpIHJldHVybjtcblxuICAgIC8vY29uc29sZS5sb2coXCJ0aW1lXCIsIGVsYXBzZWRUaW1lLCBhbGxvd2VkVGltZSk7XG5cbiAgICAvLyB0b28gc2xvd1xuICAgIGlmIChlbGFwc2VkVGltZSA+IGFsbG93ZWRUaW1lKSByZXR1cm47XG5cbiAgICBsZXQgaW5zaWRlU2Nyb2xsYWJsZSA9IGZhbHNlO1xuICAgIGxldCBlbGVtID0gZS50YXJnZXQ7XG4gICAgd2hpbGUoZWxlbSAhPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBpZiAoZWxlbS5zY3JvbGxXaWR0aCA+IGVsZW0uY2xpZW50V2lkdGgpIHtcbiAgICAgICAgaW5zaWRlU2Nyb2xsYWJsZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWxlbSA9IGVsZW0ucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoaW5zaWRlU2Nyb2xsYWJsZSkgcmV0dXJuO1xuXG4gICAgLy9jb25zb2xlLmxvZyhcInRocmVzaG9sZFwiLCBkaXN0LCB0aHJlc2hvbGQpO1xuXG4gICAgaWYgKGRpc3QgPiB0aHJlc2hvbGQpIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyaWdodFwiKTtcbiAgICAgIG9uUmlnaHQoZSk7XG4gICAgfVxuXG4gICAgaWYgKGRpc3QgPCAtdGhyZXNob2xkKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKFwibGVmdFwiKTtcbiAgICAgIG9uTGVmdChlKTtcbiAgICB9XG4gIH0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gb25Td2lwZTtcbiIsIi8vIGFkZC9yZW1vdmUgLmhvdmVyIG9ubW91c2VlbnRlci9sZWF2ZVxuLy8gZm9yIG1vYmlsZSBkZXZpY2VzICg6aG92ZXIgc3RpY2tzKVxuXG5sZXQgY3VycmVudEhvdmVyRWxlbTtcblxuLypcbmZ1bmN0aW9uIGxvZyhlKSB7XG4gIGNvbnNvbGUubG9nKERhdGUubm93KCkgJSAxZTQsIGUudHlwZSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGxvZywgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGxvZywgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hsZWF2ZVwiLCBsb2csIGZhbHNlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hcIiwgbG9nLCBmYWxzZSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgbG9nLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCBsb2csIGZhbHNlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbG9nLCBmYWxzZSk7XG4qL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hZGQtY2xhc3Mtb24taG92ZXJdJykgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5idXR0b24nKTtcbiAgaWYgKHRhcmdldCkge1xuICAgIGN1cnJlbnRIb3ZlckVsZW0gPSB0YXJnZXQ7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGN1cnJlbnRIb3ZlckVsZW0pIHtcbiAgICAgIGN1cnJlbnRIb3ZlckVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgIGN1cnJlbnRIb3ZlckVsZW0gPSBudWxsO1xuICAgIH1cbiAgfSwgNTAwKTsgLy8gdG91Y2hzdGFydCAtPiB0b3VyY2hlbmQgLT4gKGRlbGF5IHVwIHRvIDMwMG1zKSAtPiBtb3VzZW92ZXJcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmICghY3VycmVudEhvdmVyRWxlbSkgcmV0dXJuO1xuXG4gIGlmIChjdXJyZW50SG92ZXJFbGVtLmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3VycmVudEhvdmVyRWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuICBjdXJyZW50SG92ZXJFbGVtID0gbnVsbDtcbn0pO1xuXG5pZiAoIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGFkfGlQaG9uZXxpUG9kKS9nKSkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd29ya2luZy1ob3ZlcicpO1xufVxuXG4iLCIvLyBjdXJyZW50IHBhZ2UgaG9zdFxubGV0IGJhc2VVUkkgPSB3aW5kb3cubG9jYXRpb24uaG9zdDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgaWYgKGUud2hpY2ggIT0gMSkgcmV0dXJuOyAvLyB0cmFjayBvbmx5IGxlZnQtbW91c2UgY2xpY2tzXG4gIGlmIChlLmRlZmF1bHRQcmV2ZW50ZWQpIHJldHVybjtcblxuICAvLyBhYmFuZG9uIGlmIG5vIGFjdGl2ZSBsaW5rIG9yIGxpbmsgd2l0aGluIGRvbWFpblxuICBsZXQgbGluayA9IGUudGFyZ2V0LmNsb3Nlc3QgJiYgZS50YXJnZXQuY2xvc2VzdChcImFcIik7XG4gIGlmICghbGluayB8fCAoYmFzZVVSSSA9PSBsaW5rLmhvc3QgJiYgIWxpbmsuaGFzQXR0cmlidXRlKCdkYXRhLXRyYWNrLW91dGJvdW5kJykpKSByZXR1cm47XG5cbiAgLy8gaW52YWxpZCBvciBibGFuayB0YXJnZXRcbiAgaWYgKCF+W1wiX3NlbGZcIiwgXCJfdG9wXCIsIFwiX3BhcmVudFwiXS5pbmRleE9mKGxpbmsudGFyZ2V0KSkgcmV0dXJuO1xuXG4gIGlmIChlLnNoaWZ0S2V5IHx8IGUuY3RybEtleSB8fCBlLmFsdEtleSkgcmV0dXJuO1xuXG4gIC8vIGNhbmNlbCBldmVudCBhbmQgcmVjb3JkIG91dGJvdW5kIGxpbmtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgaHJlZiA9IGxpbmsuaHJlZjtcbiAgd2luZG93LmdhKCdzZW5kJywgJ2V2ZW50JywgJ291dGJvdW5kJywgJ2NsaWNrJywgaHJlZiwge1xuICAgIGhpdENhbGxiYWNrOiBsb2FkUGFnZVxuICB9KTtcblxuICAvLyByZWRpcmVjdCBhZnRlciBoYWxmLXNlY29uZCBpZiByZWNvcmRpbmcgdGFrZXMgdG9vIGxvbmdcbiAgc2V0VGltZW91dChsb2FkUGFnZSwgNTAwKTtcblxuICAvLyByZWRpcmVjdCB0byBvdXRib3VuZCBwYWdlXG4gIGZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGRvY3VtZW50LmxvY2F0aW9uID0gaHJlZjtcbiAgfVxuXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5TEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF2Q0E7QUFDQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFaQTtBQWNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRBO0FBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFFQTs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBTkE7QUFPQTtBQVBBO0FBUUE7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=