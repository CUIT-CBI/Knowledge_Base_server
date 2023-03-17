var tutorial =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
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
/* 20 */
/*!**********************************!*\
  !*** ./modules/client/config.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  lang: "en",
  lookatCodeUrlBase: "https://lookatcode.com"
};

/***/ }),
/* 21 */
/*!************************************!*\
  !*** ./modules/client/delegate.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function findDelegateTarget(event, selector) {
  let currentNode = event.target;
  while (currentNode) {
    if (currentNode.matches(selector)) {
      return currentNode;
    }

    if (currentNode == event.currentTarget) {
      break;
    }
    currentNode = currentNode.parentElement;
  }
  return null;
}

// delegate(table, 'th', click, handler)
// table
//   thead
//     th         ^*
//       code  <--
function delegate(topElement, selector, eventName, handler, context) {
  /* jshint -W040 */
  topElement.addEventListener(eventName, function (event) {
    let found = findDelegateTarget(event, selector);

    // .currentTarget is read only, I can not overwrite it to the "found" element
    // Object.create wrapper would break event.preventDefault()
    // so, keep in mind:
    // --> event.currentTarget is always the top-level (delegating) element!
    // use "this" to get the found target

    event.delegateTarget = found; // use instead of "this" in object methods

    if (found) {
      // if in context of object, use object as this,
      handler.call(context || this, event);
    }
  });
}

delegate.delegateMixin = function (obj) {
  obj.delegate = function (selector, eventName, handler) {
    delegate(this.elem, selector, eventName, handler, this);
  };
};

module.exports = delegate;

/***/ }),
/* 22 */
/*!*************************************************!*\
  !*** ./modules/engine/prism/makeLineNumbers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const escapeHtml = require('escape-html');

module.exports = function makeLineNumbers(html) {

  let linesNum = 1 + html.split('\n').length;
  let lineNumbersWrapper;

  let lines = new Array(linesNum);
  lines = lines.join('<span></span>');

  lineNumbersWrapper = `<span class="line-numbers-rows">${lines}</span>`;

  return lineNumbersWrapper;
};

/***/ }),
/* 23 */
/*!*************************************************!*\
  !*** ./modules/engine/console/consoleFormat.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* can be required directly from other client-side code */

module.exports = function (args) {
  return Array.from(args).map(format).join(', ');
};

function format(value, depth = 0) {
  if (value == null) return 'null';

  if (typeof value == 'function') {
    return formatFunction(value, depth);
  }

  if (Array.isArray(value)) {
    return formatArray(value, depth);
  }

  if (typeof window == 'object') {
    if (value instanceof Node) {
      return format(value.outerHTML, depth);
    }

    if (value instanceof Event) {
      let copyProps = [Symbol.toStringTag, 'type', 'clientX', 'clientY', 'key', 'code'];
      let obj = {};
      for (let prop of copyProps) {
        if (prop in value) {
          obj[prop] = value[prop];
        }
      }
      return format(obj, depth);
    }
  }

  if (typeof value == 'object') {
    return formatObject(value, depth);
  }

  if (typeof value == 'string') {
    return formatString(value, depth);
  }

  return JSON.stringify(value);
}

function formatFunction(f, depth = 0) {
  if (depth) {
    return 'function ' + f.name;
  }

  f = f.toString();
  f = f.split('\n');
  if (f.length > 10) {
    f = f.slice(0, 10).join('\n') + '\n...';
  }
  return f;
}

function formatArray(value, depth = 0) {
  if (depth > 2) return '[...]';

  let limit = depth == 1 ? 3 : 10;

  if (value.length > limit) {
    value = value.slice(0, limit);
    value.push('...');
  }

  return '[' + value.map(v => format(v, depth + 1)).join(', ') + ']';
}

function formatString(value, depth = 0) {
  let limit = depth == 1 ? 20 : 60;

  if (value.length > limit) {
    value = value.slice(0, value.limit - 1) + '…';
  }

  return JSON.stringify(value);
  // was: `"${value}"`;
  // but this doesn't excape special chars, such as \n
}

function formatObject(value, depth = 0) {
  let name = value.constructor.name;

  if (name == 'Object' && value[Symbol.toStringTag]) {
    name = value[Symbol.toStringTag];
  }

  if (name != 'Object' && value.toString != Object.prototype.toString) {
    return value.toString();
  }

  let result = '';

  if (name != 'Object') {
    result += name + ' ';
  }

  result += '{';

  if (depth > 1) {
    result += '...';
  } else {
    let items = [];
    for (let prop in value) {
      if (!value.hasOwnProperty(prop)) continue;
      items.push(`${prop}: ${format(value[prop], depth + 1)}`);
    }
    result += items.join(', ');
  }

  result += '}';

  return result;
}

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/*!*****************************************************!*\
  !*** ./modules/engine/koa/tutorial/client/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const delegate = __webpack_require__(/*! client/delegate */ 21);
const prism = __webpack_require__(/*! engine/prism */ 45);
const ItemSlider = __webpack_require__(/*! ./itemSlider */ 70);

function init() {

  initTaskButtons();
  initFolderList();
  initViewMoreButton();
  initCoursesSlider();

  prism.init();
}

function initTaskButtons() {
  // solution button
  delegate(document, '.task__solution', 'click', function (event) {
    event.target.closest('.task').classList.toggle('task_answer_open');
  });

  // close solution button
  delegate(document, '.task__answer-close', 'click', function (event) {
    event.target.closest('.task').classList.toggle('task_answer_open');
  });

  // every step button (if any steps)
  delegate(document, '.task__step-show', 'click', function (event) {
    event.target.closest('.task__step').classList.toggle('task_step_open');
  });
}

function initViewMoreButton() {
  delegate(document, 'a.list-sub__more', 'click', function (event) {
    event.preventDefault();
    const target = event.target;
    for (let item of target.closest('.list-sub').querySelectorAll('.list-sub__item_phone_hidden')) {
      item.classList.remove('list-sub__item_phone_hidden');
    }
    target.style.display = 'none';
  });
}

function initFolderList() {
  delegate(document, '.lessons-list__lesson_level_1 > .lessons-list__link', 'click', function (event) {
    let link = event.delegateTarget;
    let openFolder = link.closest('.lessons-list').querySelector('.lessons-list__lesson_open');
    // close the previous open folder (thus making an accordion)
    if (openFolder && openFolder !== link.parentNode) {
      openFolder.classList.remove('lessons-list__lesson_open');
    }
    link.parentNode.classList.toggle('lessons-list__lesson_open');
    event.preventDefault();
  });
}

function initCoursesSlider() {
  const slider = document.querySelector('[data-courses-slider]');
  if (slider) new ItemSlider({ el: slider, class: 'slider_frontpage' });
}

window.runDemo = function (button) {

  let demoElem;
  let parent = button;

  /* jshint -W084 */
  while (parent = parent.parentElement) {
    demoElem = parent.querySelector('[data-demo]');
    if (demoElem) break;
  }

  if (!demoElem) {
    alert("Error, no demo element");
  } else {
    /* jshint -W061 */
    eval(demoElem.textContent);
  }
};

init();

/***/ }),
/* 45 */
/*!***************************************!*\
  !*** ./modules/engine/prism/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// prism requires data-manual attribute on the current script NOT to highlightAll automatically
let script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
script.setAttribute('data-manual', 1);

__webpack_require__(/*! ./core */ 46);

let CodeBox = __webpack_require__(/*! ./codeBox */ 58);
let CodeTabsBox = __webpack_require__(/*! ./codeTabsBox */ 68);
let proxyConsoleLog = __webpack_require__(/*! ./proxyConsoleLog */ 69);

function initCodeBoxes(container) {
  // highlight inline
  let elems = container.querySelectorAll('.code-example:not([data-prism-highlighted])');

  for (let elem of elems) {
    new CodeBox(elem);
    elem.setAttribute('data-prism-highlighted', '1');
  }
}

function initCodeTabsBox(container) {

  let elems = container.querySelectorAll('div.code-tabs:not([data-prism-highlighted])');

  for (let elem of elems) {
    new CodeTabsBox(elem);
    elem.setAttribute('data-prism-highlighted', '1');
  }
}

exports.init = function () {
  document.removeEventListener('DOMContentLoaded', Prism.highlightAll);

  document.addEventListener('DOMContentLoaded', function () {
    highlight(document);
  });

  proxyConsoleLog();
};

function highlight(elem) {
  initCodeBoxes(elem);
  initCodeTabsBox(elem);
}

exports.highlight = highlight;

/***/ }),
/* 46 */
/*!**************************************!*\
  !*** ./modules/engine/prism/core.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// in node.js:
// global.Prism = Prism;
__webpack_require__(/*! prismjs/components/prism-core.js */ 47);

__webpack_require__(/*! prismjs/components/prism-markup.js */ 48);
__webpack_require__(/*! prismjs/components/prism-css.js */ 49);
__webpack_require__(/*! prismjs/components/prism-css-extras.js */ 50);
__webpack_require__(/*! prismjs/components/prism-clike.js */ 51);
__webpack_require__(/*! prismjs/components/prism-javascript.js */ 52);
__webpack_require__(/*! prismjs/components/prism-http.js */ 53);
__webpack_require__(/*! prismjs/components/prism-scss.js */ 54);
__webpack_require__(/*! prismjs/components/prism-sql.js */ 55);
__webpack_require__(/*! prismjs/components/prism-java.js */ 56);
__webpack_require__(/*! prismjs/components/prism-bash.js */ 57);

// for iBooks to use monospace font
Prism.hooks.add('wrap', function (env) {
  if (env.tag === 'span') {
    env.tag = 'code';
  }
});

/***/ }),
/* 47 */
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			_.util.setLanguage(element, language);

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				_.util.setLanguage(parent, language);
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			if (!env.grammar) {
				throw new Error('The language "' + env.language + '" has no grammar.');
			}
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/***/ }),
/* 48 */
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/***/ }),
/* 49 */
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-css.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/***/ }),
/* 50 */
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-css-extras.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
	var selectorInside;

	Prism.languages.css.selector = {
		pattern: Prism.languages.css.selector.pattern,
		lookbehind: true,
		inside: selectorInside = {
			'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
			'pseudo-class': /:[-\w]+/,
			'class': /\.[-\w]+/,
			'id': /#[-\w]+/,
			'attribute': {
				pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
				greedy: true,
				inside: {
					'punctuation': /^\[|\]$/,
					'case-sensitivity': {
						pattern: /(\s)[si]$/i,
						lookbehind: true,
						alias: 'keyword'
					},
					'namespace': {
						pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
						lookbehind: true,
						inside: {
							'punctuation': /\|$/
						}
					},
					'attr-name': {
						pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
						lookbehind: true
					},
					'attr-value': [
						string,
						{
							pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
							lookbehind: true
						}
					],
					'operator': /[|~*^$]?=/
				}
			},
			'n-th': [
				{
					pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
					lookbehind: true,
					inside: {
						'number': /[\dn]+/,
						'operator': /[+-]/
					}
				},
				{
					pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
					lookbehind: true
				}
			],
			'combinator': />|\+|~|\|\|/,

			// the `tag` token has been existed and removed.
			// because we can't find a perfect tokenize to match it.
			// if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.

			'punctuation': /[(),]/,
		}
	};

	Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;

	Prism.languages.insertBefore('css', 'property', {
		'variable': {
			pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
			lookbehind: true
		}
	});

	var unit = {
		pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
		lookbehind: true
	};
	// 123 -123 .123 -.123 12.3 -12.3
	var number = {
		pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
		lookbehind: true
	};

	Prism.languages.insertBefore('css', 'function', {
		'operator': {
			pattern: /(\s)[+\-*\/](?=\s)/,
			lookbehind: true
		},
		// CAREFUL!
		// Previewers and Inline color use hexcode and color.
		'hexcode': {
			pattern: /\B#[\da-f]{3,8}\b/i,
			alias: 'color'
		},
		'color': [
			{
				pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
				lookbehind: true
			},
			{
				pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
				inside: {
					'unit': unit,
					'number': number,
					'function': /[\w-]+(?=\()/,
					'punctuation': /[(),]/
				}
			}
		],
		// it's important that there is no boundary assertion after the hex digits
		'entity': /\\[\da-f]{1,8}/i,
		'unit': unit,
		'number': number
	});

}(Prism));


/***/ }),
/* 51 */
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-clike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/***/ }),
/* 52 */
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javascript.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: RegExp(
			// lookbehind
			// eslint-disable-next-line regexp/no-dupe-characters-character-class
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
			// Regex pattern:
			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
			// with the only syntax, so we have to define 2 different regex patterns.
			/\//.source +
			'(?:' +
			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
			'|' +
			// `v` flag syntax. This supports 3 levels of nested character classes.
			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
			')' +
			// lookahead
			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
		),
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/***/ }),
/* 53 */
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-http.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	/**
	 * @param {string} name
	 * @returns {RegExp}
	 */
	function headerValueOf(name) {
		return RegExp('(^(?:' + name + '):[ \t]*(?![ \t]))[^]+', 'i');
	}

	Prism.languages.http = {
		'request-line': {
			pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
			inside: {
				// HTTP Method
				'method': {
					pattern: /^[A-Z]+\b/,
					alias: 'property'
				},
				// Request Target e.g. http://example.com, /path/to/file
				'request-target': {
					pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
					lookbehind: true,
					alias: 'url',
					inside: Prism.languages.uri
				},
				// HTTP Version
				'http-version': {
					pattern: /^(\s)HTTP\/[\d.]+/,
					lookbehind: true,
					alias: 'property'
				},
			}
		},
		'response-status': {
			pattern: /^HTTP\/[\d.]+ \d+ .+/m,
			inside: {
				// HTTP Version
				'http-version': {
					pattern: /^HTTP\/[\d.]+/,
					alias: 'property'
				},
				// Status Code
				'status-code': {
					pattern: /^(\s)\d+(?=\s)/,
					lookbehind: true,
					alias: 'number'
				},
				// Reason Phrase
				'reason-phrase': {
					pattern: /^(\s).+/,
					lookbehind: true,
					alias: 'string'
				}
			}
		},
		'header': {
			pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
			inside: {
				'header-value': [
					{
						pattern: headerValueOf(/Content-Security-Policy/.source),
						lookbehind: true,
						alias: ['csp', 'languages-csp'],
						inside: Prism.languages.csp
					},
					{
						pattern: headerValueOf(/Public-Key-Pins(?:-Report-Only)?/.source),
						lookbehind: true,
						alias: ['hpkp', 'languages-hpkp'],
						inside: Prism.languages.hpkp
					},
					{
						pattern: headerValueOf(/Strict-Transport-Security/.source),
						lookbehind: true,
						alias: ['hsts', 'languages-hsts'],
						inside: Prism.languages.hsts
					},
					{
						pattern: headerValueOf(/[^:]+/.source),
						lookbehind: true
					}
				],
				'header-name': {
					pattern: /^[^:]+/,
					alias: 'keyword'
				},
				'punctuation': /^:/
			}
		}
	};

	// Create a mapping of Content-Type headers to language definitions
	var langs = Prism.languages;
	var httpLanguages = {
		'application/javascript': langs.javascript,
		'application/json': langs.json || langs.javascript,
		'application/xml': langs.xml,
		'text/xml': langs.xml,
		'text/html': langs.html,
		'text/css': langs.css,
		'text/plain': langs.plain
	};

	// Declare which types can also be suffixes
	var suffixTypes = {
		'application/json': true,
		'application/xml': true
	};

	/**
	 * Returns a pattern for the given content type which matches it and any type which has it as a suffix.
	 *
	 * @param {string} contentType
	 * @returns {string}
	 */
	function getSuffixPattern(contentType) {
		var suffix = contentType.replace(/^[a-z]+\//, '');
		var suffixPattern = '\\w+/(?:[\\w.-]+\\+)+' + suffix + '(?![+\\w.-])';
		return '(?:' + contentType + '|' + suffixPattern + ')';
	}

	// Insert each content type parser that has its associated language
	// currently loaded.
	var options;
	for (var contentType in httpLanguages) {
		if (httpLanguages[contentType]) {
			options = options || {};

			var pattern = suffixTypes[contentType] ? getSuffixPattern(contentType) : contentType;
			options[contentType.replace(/\//g, '-')] = {
				pattern: RegExp(
					'(' + /content-type:\s*/.source + pattern + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ')' +
					// This is a little interesting:
					// The HTTP format spec required 1 empty line before the body to make everything unambiguous.
					// However, when writing code by hand (e.g. to display on a website) people can forget about this,
					// so we want to be liberal here. We will allow the empty line to be omitted if the first line of
					// the body does not start with a [\w-] character (as headers do).
					/[^ \t\w-][\s\S]*/.source,
					'i'
				),
				lookbehind: true,
				inside: httpLanguages[contentType]
			};
		}
	}
	if (options) {
		Prism.languages.insertBefore('http', 'header', options);
	}

}(Prism));


/***/ }),
/* 54 */
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-scss.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.scss = Prism.languages.extend('css', {
	'comment': {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: true
	},
	'atrule': {
		pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	// url, compassified
	'url': /(?:[-a-z]+-)?url(?=\()/i,
	// CSS selector regex is not appropriate for Sass
	// since there can be lot more things (var, @ directive, nesting..)
	// a selector must start at the end of a property or after a brace (end of other rules or nesting)
	// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
	// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
	// can "pass" as a selector- e.g: proper#{$erty})
	// this one was hard to do, so please be careful if you edit this one :)
	'selector': {
		// Initial look-ahead is used to prevent matching of blank selectors
		pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
		inside: {
			'parent': {
				pattern: /&/,
				alias: 'important'
			},
			'placeholder': /%[-\w]+/,
			'variable': /\$[-\w]+|#\{\$[-\w]+\}/
		}
	},
	'property': {
		pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
		inside: {
			'variable': /\$[-\w]+|#\{\$[-\w]+\}/
		}
	}
});

Prism.languages.insertBefore('scss', 'atrule', {
	'keyword': [
		/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
		{
			pattern: /( )(?:from|through)(?= )/,
			lookbehind: true
		}
	]
});

Prism.languages.insertBefore('scss', 'important', {
	// var and interpolated vars
	'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});

Prism.languages.insertBefore('scss', 'function', {
	'module-modifier': {
		pattern: /\b(?:as|hide|show|with)\b/i,
		alias: 'keyword'
	},
	'placeholder': {
		pattern: /%[-\w]+/,
		alias: 'selector'
	},
	'statement': {
		pattern: /\B!(?:default|optional)\b/i,
		alias: 'keyword'
	},
	'boolean': /\b(?:false|true)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	},
	'operator': {
		pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
		lookbehind: true
	}
});

Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;


/***/ }),
/* 55 */
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-sql.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.sql = {
	'comment': {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: true
	},
	'variable': [
		{
			pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
			greedy: true
		},
		/@[\w.$]+/
	],
	'string': {
		pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
		greedy: true,
		lookbehind: true
	},
	'identifier': {
		pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
		greedy: true,
		lookbehind: true,
		inside: {
			'punctuation': /^`|`$/
		}
	},
	'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, // Should we highlight user defined functions too?
	'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
	'boolean': /\b(?:FALSE|NULL|TRUE)\b/i,
	'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
	'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
	'punctuation': /[;[\]()`,.]/
};


/***/ }),
/* 56 */
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-java.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

	// full package (optional) + parent classes (optional)
	var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

	// based on the java naming conventions
	var className = {
		pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
		lookbehind: true,
		inside: {
			'namespace': {
				pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
				inside: {
					'punctuation': /\./
				}
			},
			'punctuation': /\./
		}
	};

	Prism.languages.java = Prism.languages.extend('clike', {
		'string': {
			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
			lookbehind: true,
			greedy: true
		},
		'class-name': [
			className,
			{
				// variables, parameters, and constructor references
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
				lookbehind: true,
				inside: className.inside
			},
			{
				// class names based on keyword
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + classNamePrefix + /[A-Z]\w*\b/.source),
				lookbehind: true,
				inside: className.inside
			}
		],
		'keyword': keywords,
		'function': [
			Prism.languages.clike.function,
			{
				pattern: /(::\s*)[a-z_]\w*/,
				lookbehind: true
			}
		],
		'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		'operator': {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: true
		},
		'constant': /\b[A-Z][A-Z_\d]+\b/
	});

	Prism.languages.insertBefore('java', 'string', {
		'triple-quoted-string': {
			// http://openjdk.java.net/jeps/355#Description
			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
			greedy: true,
			alias: 'string'
		},
		'char': {
			pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
			greedy: true
		}
	});

	Prism.languages.insertBefore('java', 'class-name', {
		'annotation': {
			pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
			lookbehind: true,
			alias: 'punctuation'
		},
		'generics': {
			pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
			inside: {
				'class-name': className,
				'keyword': keywords,
				'punctuation': /[<>(),.:]/,
				'operator': /[?&|]/
			}
		},
		'import': [
			{
				pattern: RegExp(/(\bimport\s+)/.source + classNamePrefix + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
				lookbehind: true,
				inside: {
					'namespace': className.inside.namespace,
					'punctuation': /\./,
					'operator': /\*/,
					'class-name': /\w+/
				}
			},
			{
				pattern: RegExp(/(\bimport\s+static\s+)/.source + classNamePrefix + /(?:\w+|\*)(?=\s*;)/.source),
				lookbehind: true,
				alias: 'static',
				inside: {
					'namespace': className.inside.namespace,
					'static': /\b\w+$/,
					'punctuation': /\./,
					'operator': /\*/,
					'class-name': /\w+/
				}
			}
		],
		'namespace': {
			pattern: RegExp(
				/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/
					.source.replace(/<keyword>/g, function () { return keywords.source; })),
			lookbehind: true,
			inside: {
				'punctuation': /\./,
			}
		}
	});
}(Prism));


/***/ }),
/* 57 */
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bash.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	// $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
	// + LC_ALL, RANDOM, REPLY, SECONDS.
	// + make sure PS1..4 are here as they are not always set,
	// - some useless things.
	var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';

	var commandAfterHeredoc = {
		pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
		lookbehind: true,
		alias: 'punctuation', // this looks reasonably well in all themes
		inside: null // see below
	};

	var insideString = {
		'bash': commandAfterHeredoc,
		'environment': {
			pattern: RegExp('\\$' + envVars),
			alias: 'constant'
		},
		'variable': [
			// [0]: Arithmetic Environment
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				greedy: true,
				inside: {
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					'variable': [
						{
							pattern: /(^\$\(\([\s\S]+)\)\)/,
							lookbehind: true
						},
						/^\$\(\(/
					],
					'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					'punctuation': /\(\(?|\)\)?|,|;/
				}
			},
			// [1]: Command Substitution
			{
				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
				greedy: true,
				inside: {
					'variable': /^\$\(|^`|\)$|`$/
				}
			},
			// [2]: Brace expansion
			{
				pattern: /\$\{[^}]+\}/,
				greedy: true,
				inside: {
					'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
					'punctuation': /[\[\]]/,
					'environment': {
						pattern: RegExp('(\\{)' + envVars),
						lookbehind: true,
						alias: 'constant'
					}
				}
			},
			/\$(?:\w+|[#?*!@$])/
		],
		// Escape sequences from echo and printf's manuals, and escaped quotes.
		'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
	};

	Prism.languages.bash = {
		'shebang': {
			pattern: /^#!\s*\/.*/,
			alias: 'important'
		},
		'comment': {
			pattern: /(^|[^"{\\$])#.*/,
			lookbehind: true
		},
		'function-name': [
			// a) function foo {
			// b) foo() {
			// c) function foo() {
			// but not “foo {”
			{
				// a) and c)
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: true,
				alias: 'function'
			},
			{
				// b)
				pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
				alias: 'function'
			}
		],
		// Highlight variable names as variables in for and select beginnings.
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: true
		},
		// Highlight variable names as variables in the left-hand part
		// of assignments (“=” and “+=”).
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
			inside: {
				'environment': {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
					lookbehind: true,
					alias: 'constant'
				}
			},
			alias: 'variable',
			lookbehind: true
		},
		// Highlight parameter names as variables
		'parameter': {
			pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
			alias: 'variable',
			lookbehind: true
		},
		'string': [
			// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			// Here-document with quotes around the tag
			// → No expansion (so no “inside”).
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: true,
				greedy: true,
				inside: {
					'bash': commandAfterHeredoc
				}
			},
			// “Normal” string
			{
				// https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
				pattern: /(^|[^$\\])'[^']*'/,
				lookbehind: true,
				greedy: true
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: true,
				inside: {
					'entity': insideString.entity
				}
			}
		],
		'environment': {
			pattern: RegExp('\\$?' + envVars),
			alias: 'constant'
		},
		'variable': insideString.variable,
		'function': {
			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'keyword': {
			pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		// https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
		'builtin': {
			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: true,
			// Alias added to make those easier to distinguish from strings.
			alias: 'class-name'
		},
		'boolean': {
			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'file-descriptor': {
			pattern: /\B&\d\b/,
			alias: 'important'
		},
		'operator': {
			// Lots of redirections here, but not just that.
			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: {
				'file-descriptor': {
					pattern: /^\d/,
					alias: 'important'
				}
			}
		},
		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		'number': {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: true
		}
	};

	commandAfterHeredoc.inside = Prism.languages.bash;

	/* Patterns in command substitution. */
	var toBeCopied = [
		'comment',
		'function-name',
		'for-or-select',
		'assign-left',
		'parameter',
		'string',
		'environment',
		'function',
		'keyword',
		'builtin',
		'boolean',
		'file-descriptor',
		'operator',
		'punctuation',
		'number'
	];
	var inside = insideString.variable[1].inside;
	for (var i = 0; i < toBeCopied.length; i++) {
		inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
	}

	Prism.languages.sh = Prism.languages.bash;
	Prism.languages.shell = Prism.languages.bash;
}(Prism));


/***/ }),
/* 58 */
/*!*****************************************!*\
  !*** ./modules/engine/prism/codeBox.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let resizeOnload = __webpack_require__(/*! client/head/resizeOnload */ 4);
let isScrolledIntoView = __webpack_require__(/*! client/isScrolledIntoView */ 59);
let makeLineNumbers = __webpack_require__(/*! ./makeLineNumbers */ 22);
let makeHighlight = __webpack_require__(/*! ./makeHighlight */ 60);
const { highlight } = __webpack_require__(/*! prismjs */ 61);
const config = __webpack_require__(/*! config */ 20);
let consoleFormat = __webpack_require__(/*! engine/console/consoleFormat */ 23);
const t = __webpack_require__(/*! engine/i18n/t */ 62);

const LANG = __webpack_require__(/*! config */ 20).lang;
t.i18n.add('prism', __webpack_require__(66)("./" + LANG + ".yml"));

function CodeBox(elem) {

  let preElem = elem.querySelector('pre');
  let codeElem = Array.from(preElem.childNodes).find(n => n.tagName === 'CODE');

  let code = codeElem.textContent;

  let outputBox;

  elem.codeBox = this;

  let runCode = code;
  if (elem.hasAttribute('data-async')) {
    runCode = `(async () => {\n${code}\n})()`;
  }

  Prism.highlightElement(codeElem);

  let lineNumbersWrapper = makeLineNumbers(preElem.innerHTML);

  /*
  if (preElem.hasAttribute('data-start')) {
    preElem.style.counterReset = 'linenumber ' + Number(preElem.dataset.start) - 1;
  }
  */

  preElem.insertAdjacentHTML("afterBegin", lineNumbersWrapper);

  let ranges = JSON.parse(elem.getAttribute('data-highlight'));
  if (ranges) {
    emphasize(codeElem, ranges);
  }

  // preElem.insertAdjacentHTML("afterBegin", masks);

  let isJS = preElem.classList.contains('language-javascript');
  let isHTML = preElem.classList.contains('language-markup');
  let isTrusted = +elem.getAttribute('data-trusted');
  let isNoStrict = +elem.getAttribute('data-no-strict');

  let useStrict = !isNoStrict && isJS ? `"use strict";` : '';

  // globalEval evaluates asynchronously, so we must inject codeBox id into the code
  // then in console.log we use it to show the message under the current box
  let codeBoxId = `globalThis.__codeBoxId = "${elem.id}";`;

  // Sandbox doesn't need codeBoxId
  let sandboxCode = `${useStrict}\n\n${runCode}`;

  runCode = `${useStrict}${codeBoxId}\n\n${runCode}`;

  let jsFrame;
  let globalFrame;
  let htmlResult;
  let isFirstRun = true;

  if (!isJS && !isHTML) return;

  let runElem = elem.querySelector('[data-action="run"]');
  if (runElem) {
    runElem.onclick = function () {
      this.blur();
      run();
      return false;
    };
  }

  let editElem = elem.querySelector('[data-action="edit"]');
  if (editElem) {
    editElem.onclick = function () {
      this.blur();
      edit();
      return false;
    };
  }

  // some code can't be shown by epub engine
  if (elem.hasAttribute('data-autorun')) {
    if (window.ebookType == 'epub' && elem.getAttribute('data-autorun') == 'no-epub') {
      elem.querySelector('iframe').remove();
    } else {
      // timeout should be small, around 10ms, or remove it to make crawler process the autorun
      setTimeout(run, 100);
      // run();
    }
  }

  function postJSFrame() {
    let win = jsFrame.contentWindow;
    if (typeof win.postMessage !== 'function') {
      alert("Sorry, your browser is too old");
      return;
    }
    win.postMessage(runCode, config.lookatCodeUrlBase + '/showjs');
  }

  function emphasize(codeElem, ranges) {
    let codeHtml = codeElem.innerHTML;
    let split = codeHtml.split(/\n/);

    for (let range of ranges) {
      if (range.end !== undefined) {
        // block emphasize
        split[range.start] = '<em class="block-highlight">' + split[range.start];
        split[range.end] += '</em>';
      } else {
        let line = split[range.start];
        let cols = range.cols;
        let inTag = false;
        let charCounter = -1;
        let resultLine = '';
        /*
        if (cols.find(c => c.start == 0)) {
          resultLine += '<em class="inline-highlight">';
        }
        */
        // line = line.replace(/<.*?>/g, '<s>');
        //line = `alert('Start of try runs');  // (1) &lt;---`;

        for (let i = 0; i < line.length; i++) {
          if (line[i] == '<') inTag = true;

          if (inTag) {
            resultLine += line[i];
          } else {
            charCounter++;

            if (cols.find(c => c.start == charCounter)) {
              resultLine += '<em class="inline-highlight">';
            }

            resultLine += line[i];

            if (line[i] == '&') {
              // entities, such as &lt; are counted as single char in range.cols
              let entities = ['lt;', 'gt;', 'amp;', 'quot;'];
              for (let entity of entities) {
                if (line.slice(i + 1, i + 1 + entity.length) == entity) {
                  i += entity.length;
                  resultLine += entity;
                }
              }
            }

            if (cols.find(c => c.end == charCounter + 1)) {
              resultLine += '</em>';
            }
          }

          if (line[i] == '>') inTag = false;
        }
        /*
        if (cols.find(c => c.end == charCounter + 1)) {
          resultLine += '</em>';
        }*/

        split[range.start] = resultLine;
      }
    }
    codeElem.innerHTML = split.join('\n');
  }

  function runHTML() {

    let frame;

    if (htmlResult && elem.hasAttribute('data-refresh')) {
      htmlResult.remove();
      htmlResult = null;
    }

    if (!htmlResult) {
      // take from HTML if exists there (in markup when autorun is specified)
      htmlResult = elem.querySelector('.code-result');
    }

    if (!htmlResult) {
      // otherwise create (or recreate if refresh)
      htmlResult = document.createElement('div');
      htmlResult.className = "code-result code-example__result";

      frame = document.createElement('iframe');
      frame.name = elem.id; // for console.log
      frame.className = 'code-result__iframe';

      if (elem.getAttribute('data-demo-height') === "0") {
        // this html has nothing to show
        htmlResult.style.display = 'none';
      } else if (elem.hasAttribute('data-demo-height')) {
        let height = +elem.getAttribute('data-demo-height');
        frame.style.height = height + 'px';
      }
      htmlResult.appendChild(frame);

      elem.appendChild(htmlResult);
    } else {
      frame = htmlResult.querySelector('iframe');
    }

    if (isTrusted && !frame.hasCustomConsoleLog) {
      // iframe may have been generated above OR already put in HTML by autorun
      frame.hasCustomConsoleLog = true;
      let consoleLogNative = frame.contentWindow.console.log.bind(frame.contentWindow.console);

      // bind console.log to the current elem.id
      frame.contentWindow.console.log = function (...args) {
        consoleLogNative(...args);

        let formattedArgs = consoleFormat(args);
        window.postMessage({ type: 'console-log', log: formattedArgs, codeBoxId: elem.id }, '*');
      };
    }

    if (isTrusted) {
      let doc = frame.contentDocument || frame.contentWindow.document;

      doc.open();
      // console.log(code)
      doc.write(normalizeHtml(code));
      doc.close();

      if (!elem.hasAttribute('data-demo-height')) {
        resizeOnload.iframe(frame);
      }

      if (!(isFirstRun && elem.hasAttribute('data-autorun'))) {
        if (!isScrolledIntoView(htmlResult)) {
          htmlResult.scrollIntoView(false);
        }
      }
    } else {
      let form = document.createElement('form');
      form.style.display = 'none';
      form.method = 'POST';
      form.enctype = "multipart/form-data";
      form.action = config.lookatCodeUrlBase + "/showhtml";
      form.target = frame.name;

      let textarea = document.createElement('textarea');
      textarea.name = 'code';

      let normalizedCode = normalizeHtml(code);
      if (normalizedCode.includes('console.log')) {
        // insert after <head> or <body>, to ensure that console.log is replaced immediately
        normalizedCode = normalizedCode.replace(/<head>|<body>/im, '$&__LOOKATCODE_SCRIPT__');
      }
      textarea.value = normalizedCode;
      form.appendChild(textarea);

      frame.parentNode.insertBefore(form, frame.nextSibling);
      form.submit();
      form.remove();

      if (!(isFirstRun && elem.hasAttribute('data-autorun'))) {
        frame.onload = function () {

          if (!elem.hasAttribute('data-demo-height')) {
            resizeOnload.iframe(frame);
          }

          if (!isScrolledIntoView(htmlResult)) {
            htmlResult.scrollIntoView(false);
          }
        };
      }
    }
  }

  // Evaluates a script in a global context
  function globalEval(code) {
    let script = document.createElement("script");
    script.type = 'module';
    script.text = code;
    document.head.append(script);
    script.remove();
  }

  this.consoleLog = function (args) {
    // console.info("Codebox consoleLog", args);
    if (!outputBox) {
      outputBox = document.createElement('div');
      outputBox.className = 'codebox__output';

      elem.append(outputBox);

      let label = document.createElement('div');
      label.className = 'codebox__output-label';
      label.innerHTML = t('prism.output');
      outputBox.append(label);
    }

    let logElem = document.createElement('div');
    logElem.className = 'codebox__output-line';
    logElem.innerHTML = args;
    outputBox.append(logElem);
  };

  function runJS() {

    if (elem.hasAttribute('data-global')) {
      if (!globalFrame) {
        globalFrame = document.createElement('iframe');
        globalFrame.className = 'js-frame';
        globalFrame.style.width = 0;
        globalFrame.style.height = 0;
        globalFrame.style.border = 'none';
        globalFrame.name = 'js-global-frame';
        document.body.appendChild(globalFrame);
      }

      let form = document.createElement('form');
      form.style.display = 'none';
      form.method = 'POST';
      form.enctype = "multipart/form-data";
      form.action = config.lookatCodeUrlBase + "/showhtml";
      form.target = 'js-global-frame';

      let scriptAttrs = elem.hasAttribute('data-module') ? ' type="module"' : '';

      let textarea = document.createElement('textarea');
      textarea.name = 'code';
      textarea.value = normalizeHtml(`<script${scriptAttrs}>\n${runCode}\n</script>`);
      form.appendChild(textarea);

      globalFrame.parentNode.insertBefore(form, globalFrame.nextSibling);
      form.submit();
      form.remove();
    } else if (isTrusted) {

      if (elem.hasAttribute('data-autorun') || elem.hasAttribute('data-module')) {
        // make sure functions from "autorun" go to global scope (eval has its own scope)
        globalEval(runCode);
        return;
      }

      try {
        window["eval"].call(window, runCode);
      } catch (e) {
        alert(e.constructor.name + ": " + e.message);
      }
    } else {

      if (elem.hasAttribute('data-refresh') && jsFrame) {
        jsFrame.remove();
        jsFrame = null;
      }

      if (!jsFrame) {
        // create iframe for js
        jsFrame = document.createElement('iframe');
        jsFrame.className = 'js-frame';
        jsFrame.src = config.lookatCodeUrlBase + '/showjs';
        jsFrame.style.width = 0;
        jsFrame.style.height = 0;
        jsFrame.style.border = 'none';
        jsFrame.onload = function () {
          // error with "null" target if fails to load jsFrame
          postJSFrame();
        };
        document.body.appendChild(jsFrame);
      } else {
        postJSFrame();
      }
    }
  }

  function edit() {

    let html;
    if (isHTML) {
      html = normalizeHtml(code);
    } else {
      // let codeIndented = code.replace(/^/gim, '    ');
      html = `<!DOCTYPE html>\n<script>\n${sandboxCode}\n</script>`;
    }

    let form = document.createElement('form');
    form.action = "https://plnkr.co/edit/?p=preview";
    form.method = "POST";
    form.target = "_blank";

    document.body.appendChild(form);

    let textarea = document.createElement('textarea');
    textarea.name = "files[index.html]";
    textarea.value = html;
    form.appendChild(textarea);

    let input = document.createElement('input');
    input.name = "description";
    input.value = "Fork from " + window.location;
    form.appendChild(input);

    form.submit();
    form.remove();
  }

  function normalizeHtml(code) {
    let hasDocType = code.match(/^\s*<!doctype/i);

    if (hasDocType) {
      return code;
    }

    let result = code;

    if (!code.match(/<body/i)) {
      result = `<body>\n${result}\n</body>`;
    }

    result = '<!doctype html>\n' + result;

    return result;
  }

  function run() {

    if (outputBox) {
      outputBox.remove();
      outputBox = null;
    }

    if (isJS) {
      runJS();
    } else {
      runHTML();
    }
    isFirstRun = false;
  }
}

module.exports = CodeBox;

/***/ }),
/* 59 */
/*!**********************************************!*\
  !*** ./modules/client/isScrolledIntoView.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isScrolledIntoView(elem) {
  let coords = elem.getBoundingClientRect();

  let visibleHeight = 0;

  if (coords.top < 0) {
    visibleHeight = coords.bottom;
  } else if (coords.bottom > window.innerHeight) {
    visibleHeight = window.innerHeight - top;
  } else {
    return true;
  }

  return visibleHeight > 10;
}

module.exports = isScrolledIntoView;

/***/ }),
/* 60 */
/*!***********************************************!*\
  !*** ./modules/engine/prism/makeHighlight.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function makeHighlight(ranges) {

  if (!ranges || !ranges.length) {
    return '';
  }

  let results = [];

  for (let range of ranges) {

    let mask = `<code class="block-highlight${range.cols ? ' block-highlight_inline' : ''}" data-start="${range.start}">`;

    mask += '\n'.repeat(range.start);

    if (range.end) {
      mask += `<code class="mask">${'\n'.repeat(range.end - range.start + 1)}</code>`;
    } else if (range.cols) {
      for (let i = 0; i < range.cols.length; i++) {
        let col = range.cols[i];
        let prevCol = i === 0 ? null : range.cols[i - 1];
        mask += ' '.repeat(prevCol ? col.start - prevCol.end : col.start);
        mask += `<code class="mask-inline">${' '.repeat(col.end - col.start)}</code>`;
      }
    }

    mask += '</code>';

    results.push(mask);
  }

  // first bigger (lower) block
  // results.reverse();

  return results.join('');
};

/***/ }),
/* 61 */
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			_.util.setLanguage(element, language);

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				_.util.setLanguage(parent, language);
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			if (!env.grammar) {
				throw new Error('The language "' + env.language + '" has no grammar.');
			}
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if (typeof module !== 'undefined' && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						{
							pattern: /^(\s*)["']|["']$/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: RegExp(
			// lookbehind
			// eslint-disable-next-line regexp/no-dupe-characters-character-class
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
			// Regex pattern:
			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
			// with the only syntax, so we have to define 2 different regex patterns.
			/\//.source +
			'(?:' +
			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
			'|' +
			// `v` flag syntax. This supports 3 levels of nested character classes.
			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
			')' +
			// lookahead
			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
		),
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	/**
	 * Loads the given file.
	 *
	 * @param {string} src The URL or path of the source file to load.
	 * @param {(result: string) => void} success
	 * @param {(reason: string) => void} error
	 */
	function loadFile(src, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', src, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status < 400 && xhr.responseText) {
					success(xhr.responseText);
				} else {
					if (xhr.status >= 400) {
						error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
					} else {
						error(FAILURE_EMPTY_MESSAGE);
					}
				}
			}
		};
		xhr.send(null);
	}

	/**
	 * Parses the given range.
	 *
	 * This returns a range with inclusive ends.
	 *
	 * @param {string | null | undefined} range
	 * @returns {[number, number | undefined] | undefined}
	 */
	function parseRange(range) {
		var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
		if (m) {
			var start = Number(m[1]);
			var comma = m[2];
			var end = m[3];

			if (!comma) {
				return [start, start];
			}
			if (!end) {
				return [start, undefined];
			}
			return [start, Number(end)];
		}
		return undefined;
	}

	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			Prism.util.setLanguage(code, language);
			Prism.util.setLanguage(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			loadFile(
				src,
				function (text) {
					// mark as loaded
					pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

					// handle data-range
					var range = parseRange(pre.getAttribute('data-range'));
					if (range) {
						var lines = text.split(/\r\n?|\n/g);

						// the range is one-based and inclusive on both ends
						var start = range[0];
						var end = range[1] == null ? lines.length : range[1];

						if (start < 0) { start += lines.length; }
						start = Math.max(0, Math.min(start - 1, lines.length));
						if (end < 0) { end += lines.length; }
						end = Math.max(0, Math.min(end, lines.length));

						text = lines.slice(start, end).join('\n');

						// add data-start for line numbers
						if (!pre.hasAttribute('data-start')) {
							pre.setAttribute('data-start', String(start + 1));
						}
					}

					// highlight code
					code.textContent = text;
					Prism.highlightElement(code);
				},
				function (error) {
					// mark as failed
					pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

					code.textContent = error;
				}
			);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; (element = elements[i++]);) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	};

}());


/***/ }),
/* 62 */
/*!**********************************!*\
  !*** ./modules/engine/i18n/t.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const BabelFish = __webpack_require__(/*! babelfish */ 63);

const i18n = new BabelFish('en');

let err = console.error;

if (false) {}

function t(phrase) {

  if (!i18n.hasPhrase(LANG, phrase)) {
    err("No such phrase", phrase);
  }

  return i18n.t(LANG, ...arguments);
}

module.exports = t;

const LANG = __webpack_require__(/*! config */ 20).lang;

if (LANG !== 'en') {
  i18n.setFallback(LANG, 'en');
}

i18n.add = (...args) => i18n.addPhrase(LANG, ...args);

t.i18n = i18n;

/***/ }),
/* 63 */
/*!*****************************************!*\
  !*** ./node_modules/babelfish/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  class BabelFish
 *
 *  Internalization and localization library that makes i18n and l10n fun again.
 *
 *  ##### Example
 *
 *  ```javascript
 *  var BabelFish = require('babelfish'),
 *      i18n = new BabelFish();
 *  ```
 *
 *  or
 *
 *  ```javascript
 *  var babelfish = require('babelfish'),
 *      i18n = babelfish();
 *  ```
 **/



var parser = __webpack_require__(/*! ./lib/parser */ 64);
var plural = __webpack_require__(/*! plurals-cldr */ 65);

function _class(obj) {
  return Object.prototype.toString.call(obj);
}

function isString(obj) {
  return _class(obj) === '[object String]';
}
function isNumber(obj) {
  return !isNaN(obj) && isFinite(obj);
}
function isBoolean(obj) {
  return obj === true || obj === false;
}
function isFunction(obj) {
  return _class(obj) === '[object Function]';
}
function isObject(obj) {
  return _class(obj) === '[object Object]';
}

/*istanbul ignore next*/
var isArray = Array.isArray || function _isArray(obj) {
  return _class(obj) === '[object Array]';
};

////////////////////////////////////////////////////////////////////////////////
// The following two utilities (forEach and extend) are modified from Underscore
//
// http://underscorejs.org
//
// (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//
// Underscore may be freely distributed under the MIT license
////////////////////////////////////////////////////////////////////////////////


var nativeForEach = Array.prototype.forEach;

// The cornerstone, an `each` implementation, aka `forEach`.
// Handles objects with the built-in `forEach`, arrays, and raw objects.
// Delegates to **ECMAScript 5**'s native `forEach` if available.
/*istanbul ignore next*/
function forEach(obj, iterator, context) {
  if (obj === null) {
    return;
  }
  if (nativeForEach && obj.forEach === nativeForEach) {
    obj.forEach(iterator, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i += 1) {
      iterator.call(context, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        iterator.call(context, obj[key], key, obj);
      }
    }
  }
}

var formatRegExp = /%[sdj%]/g;

/*istanbul ignore next*/
function format(f) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') {
      return '%';
    }
    if (i >= len) {
      return x;
    }
    switch (x) {
      case '%s':
        return String(args[i++]);
      case '%d':
        return Number(args[i++]);
      case '%j':
        return JSON.stringify(args[i++]);
      default:
        return x;
    }
  });
  return str;
}

// helpers
////////////////////////////////////////////////////////////////////////////////


// Last resort locale, that exists for sure
var GENERIC_LOCALE = 'en';

// flatten(obj) -> Object
//
// Flattens object into one-level dictionary.
//
// ##### Example
//
//     var obj = {
//       abc: { def: 'foo' },
//       hij: 'bar'
//     };
//
//     flatten(obj);
//     // -> { 'abc.def': 'foo', 'hij': 'bar' };
//
function flatten(obj) {
  var params = {};

  forEach(obj || {}, function (val, key) {
    if (val && typeof val === 'object') {
      forEach(flatten(val), function (sub_val, sub_key) {
        params[key + '.' + sub_key] = sub_val;
      });
      return;
    }

    params[key] = val;
  });

  return params;
}

var keySeparator = '#@$';

function makePhraseKey(locale, phrase) {
  return locale + keySeparator + phrase;
}

function searchPhraseKey(self, locale, phrase) {
  var key = makePhraseKey(locale, phrase);
  var storage = self._storage;

  // direct search first
  if (storage.hasOwnProperty(key)) {
    return key;
  }

  // don't try follbacks for default locale
  if (locale === self._defaultLocale) {
    return null;
  }

  // search via fallback map cache
  var fb_cache = self._fallbacks_cache;
  if (fb_cache.hasOwnProperty(key)) {
    return fb_cache[key];
  }

  // scan fallbacks & cache result
  var fb = self._fallbacks[locale] || [self._defaultLocale];
  var fb_key;

  for (var i = 0, l = fb.length; i < l; i++) {
    fb_key = makePhraseKey(fb[i], phrase);
    if (storage.hasOwnProperty(fb_key)) {
      // found - update cache and return result
      fb_cache[key] = fb_key;
      return fb_cache[key];
    }
  }

  // mark fb_cache entry empty for fast lookup on next request
  fb_cache[key] = null;
  return null;
}

function pluralizer(lang, val, forms) {
  var idx = plural.indexOf(lang, val);

  if (idx === -1) {
    return format('[pluralizer for "%s" locale not found]', lang);
  }

  if (typeof forms[idx] === 'undefined') {
    return format('[plural form %d ("%s") not found in translation]', idx, plural.forms(lang)[idx]);
  }

  return forms[idx];
}

// public api (module)
////////////////////////////////////////////////////////////////////////////////


/**
 *  new BabelFish([defaultLocale = 'en'])
 *
 *  Initiates new instance of BabelFish.
 *
 *  __Note!__ you can omit `new` for convenience, direct call will return
 * new instance too.
 **/
function BabelFish(defaultLocale) {
  if (!(this instanceof BabelFish)) {
    return new BabelFish(defaultLocale);
  }

  this._defaultLocale = defaultLocale ? String(defaultLocale) : GENERIC_LOCALE;

  // hash of locale => [ fallback1, fallback2, ... ] pairs
  this._fallbacks = {};

  // fallback cache for each phrase
  //
  // {
  //   locale_key: fallback_key
  // }
  //
  // fallback_key can be null if search failed
  //
  this._fallbacks_cache = {};

  // storage of compiled translations
  //
  // {
  //   locale + @#$ + phrase_key: {
  //     locale:      locale name - can be different for fallbacks
  //     translation: original translation phrase or data variable/object
  //     raw:         true/false - does translation contain plain data or
  //                  string to compile
  //     compiled:    copiled translation fn or plain string
  //   }
  //   ...
  // }
  //
  this._storage = {};

  // cache for complex plural parts (with params)
  //
  // {
  //   language: new BabelFish(language)
  // }
  //
  this._plurals_cache = {};
}

// public api (instance)
////////////////////////////////////////////////////////////////////////////////


/**
 *  BabelFish#addPhrase(locale, phrase, translation [, flattenLevel]) -> BabelFish
 *  - locale (String): Locale of translation
 *  - phrase (String|Null): Phrase ID, e.g. `apps.forum`
 *  - translation (String|Object|Array|Number|Boolean): Translation or an object
 *    with nested phrases, or a pure object.
 *  - flattenLevel (Number|Boolean): Optional, 0..infinity. `Infinity` by default.
 *    Define "flatten" deepness for loaded object.  You can also use
 *    `true` as `0` or `false` as `Infinity`.
 *
 *
 *  ##### Flatten & using JS objects
 *
 *  By default all nested properties are normalized to strings like "foo.bar.baz",
 *  and if value is string, it will be compiled with babelfish notation.
 *  If deepness is above `flattenLevel` OR value is not object and not string,
 *  it will be used "as is". Note, only JSON stringifiable data should be used.
 *
 *  In short: you can safely pass `Array`, `Number` or `Boolean`. For objects you
 *  should define flatten level or disable it compleetely, to work with pure data.
 *
 *  Pure objects can be useful to prepare bulk data for external libraries, like
 *  calendars, time/date generators and so on.
 *
 *  ##### Example
 *
 *  ```javascript
 *  i18n.addPhrase('ru-RU',
 *    'apps.forums.replies_count',
 *    '#{count} %{ответ|ответа|ответов}:count в теме');
 *
 *  // equals to:
 *  i18n.addPhrase('ru-RU',
 *    'apps.forums',
 *    { replies_count: '#{count} %{ответ|ответа|ответов}:count в теме' });
 *  ```
 **/
BabelFish.prototype.addPhrase = function _addPhrase(locale, phrase, translation, flattenLevel) {
  var self = this,
      fl;

  // Calculate flatten level. Infinity by default
  if (isBoolean(flattenLevel)) {
    fl = flattenLevel ? Infinity : 0;
  } else if (isNumber(flattenLevel)) {
    fl = Math.floor(flattenLevel);
    if (fl < 0) {
      throw new TypeError('Invalid flatten level (should be >= 0).');
    }
  } else {
    fl = Infinity;
  }

  if (isObject(translation) && fl > 0) {
    // recursive object walk, until flattenLevel allows
    forEach(translation, function (val, key) {
      self.addPhrase(locale, (phrase ? phrase + '.' : '') + key, val, fl - 1);
    });
    return this;
  }

  if (isString(translation)) {
    this._storage[makePhraseKey(locale, phrase)] = {
      translation: translation,
      locale: locale,
      raw: false
    };
  } else if (isArray(translation) || isNumber(translation) || isBoolean(translation) || fl === 0 && isObject(translation)) {
    // Pure objects are stored without compilation
    // Limit allowed types.
    this._storage[makePhraseKey(locale, phrase)] = {
      translation: translation,
      locale: locale,
      raw: true
    };
  } else {
    // `Regex`, `Date`, `Uint8Array` and others types will
    //  fuckup `stringify()`. Don't allow here.
    // `undefined` also means wrong param in real life.
    // `null` can be allowed when examples from real life available.
    throw new TypeError('Invalid translation - [String|Object|Array|Number|Boolean] expected.');
  }

  self._fallbacks_cache = {};

  return this;
};

/**
 *  BabelFish#setFallback(locale, fallbacks) -> BabelFish
 *  - locale (String): Target locale
 *  - fallbacks (Array): List of fallback locales
 *
 *  Set fallbacks for given locale.
 *
 *  When `locale` has no translation for the phrase, `fallbacks[0]` will be
 *  tried, if translation still not found, then `fallbacks[1]` will be tried
 *  and so on. If none of fallbacks have translation,
 *  default locale will be tried as last resort.
 *
 *  ##### Errors
 *
 *  - throws `Error`, when `locale` equals default locale
 *
 *  ##### Example
 *
 *  ```javascript
 *  i18n.setFallback('ua-UK', ['ua', 'ru']);
 *  ```
 **/
BabelFish.prototype.setFallback = function _setFallback(locale, fallbacks) {
  var def = this._defaultLocale;

  if (def === locale) {
    throw new Error("Default locale can't have fallbacks");
  }

  var fb = isArray(fallbacks) ? fallbacks.slice() : [fallbacks];
  if (fb[fb.length - 1] !== def) {
    fb.push(def);
  }

  this._fallbacks[locale] = fb;
  this._fallbacks_cache = {};

  return this;
};

var CAN_HAVE_DIRECTIVES_RE = /#\{|\(\(|\\\\/;

// Compiles given string into function. Used to compile phrases,
// which contains `plurals`, `variables`, etc.
function compile(self, str, locale) {
  var nodes, buf, key, strict_exec, forms_exec, plurals_cache;

  // Quick check to avoid parse in most cases :)
  if (!CAN_HAVE_DIRECTIVES_RE.test(str)) {
    return str;
  }

  nodes = parser.parse(str);

  if (nodes.length === 1 && nodes[0].type === 'literal') {
    return nodes[0].text;
  }

  // init cache instance for plural parts, if not exists yet.
  if (!self._plurals_cache[locale]) {
    self._plurals_cache[locale] = new BabelFish(locale);
  }
  plurals_cache = self._plurals_cache[locale];

  buf = [];
  buf.push(['var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;']);
  buf.push('params = flatten(params);');

  forEach(nodes, function (node) {
    if (node.type === 'literal') {
      buf.push(format('str += %j;', node.text));
      return;
    }

    if (node.type === 'variable') {
      key = node.anchor;
      buf.push(format('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', key, key, key));
      return;
    }

    // should never happen
    /*istanbul ignore next*/
    if (node.type !== 'plural') {
      throw new Error('Unknown node type');
    }

    //
    // Compile plural
    //

    key = node.anchor;
    // check if plural parts are plain strings or executable,
    // and add executable to "cache" instance of babelfish
    // plural part text will be used as translation key
    strict_exec = {};
    forEach(node.strict, function (text, k) {
      var parsed = parser.parse(text);
      if (parsed.length === 1 && parsed[0].type === 'literal') {
        strict_exec[k] = false;
        // patch with unescaped value for direct extract
        node.strict[k] = parsed[0].text;
        return;
      }

      strict_exec[k] = true;
      if (!plurals_cache.hasPhrase(locale, text, true)) {
        plurals_cache.addPhrase(locale, text, text);
      }
    });

    forms_exec = {};
    forEach(node.forms, function (text, idx) {
      var parsed = parser.parse(text),
          unescaped;
      if (parsed.length === 1 && parsed[0].type === 'literal') {
        // patch with unescaped value for direct extract
        unescaped = parsed[0].text;
        node.forms[idx] = unescaped;
        forms_exec[unescaped] = false;
        return;
      }

      forms_exec[text] = true;
      if (!plurals_cache.hasPhrase(locale, text, true)) {
        plurals_cache.addPhrase(locale, text, text);
      }
    });
    /*eslint-disable space-in-parens*/
    buf.push(format('loc = %j;', locale));
    buf.push(format('loc_plzr = %j;', locale.split(/[-_]/)[0]));
    buf.push(format('anchor = params[%j];', key));
    buf.push(format('cache = this._plurals_cache[loc];'));
    buf.push(format('strict = %j;', node.strict));
    buf.push(format('strict_exec = %j;', strict_exec));
    buf.push(format('forms = %j;', node.forms));
    buf.push(format('forms_exec = %j;', forms_exec));
    buf.push('if (+(anchor) != anchor) {');
    buf.push(format('  str += "[invalid plurals amount: %s(" + anchor + ")]";', key));
    buf.push('} else {');
    buf.push('  if (strict[anchor] !== undefined) {');
    buf.push('    plrl = strict[anchor];');
    buf.push('    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;');
    buf.push('  } else {');
    buf.push('    plrl = pluralizer(loc_plzr, +anchor, forms);');
    buf.push('    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;');
    buf.push('  }');
    buf.push('}');
    return;
  });

  buf.push('return str;');

  /*eslint-disable no-new-func*/
  return new Function('params', 'flatten', 'pluralizer', buf.join('\n'));
}

/**
 *  BabelFish#translate(locale, phrase[, params]) -> String
 *  - locale (String): Locale of translation
 *  - phrase (String): Phrase ID, e.g. `app.forums.replies_count`
 *  - params (Object|Number|String): Params for translation. `Number` & `String`
 *    will be  coerced to `{ count: X, value: X }`
 *
 *  ##### Example
 *
 *  ```javascript
 *  i18n.addPhrase('ru-RU',
 *     'apps.forums.replies_count',
 *     '#{count} ((ответ|ответа|ответов)) в теме');
 *
 *  // ...
 *
 *  i18n.translate('ru-RU', 'app.forums.replies_count', { count: 1 });
 *  i18n.translate('ru-RU', 'app.forums.replies_count', 1});
 *  // -> '1 ответ'
 *
 *  i18n.translate('ru-RU', 'app.forums.replies_count', { count: 2 });
 *  i18n.translate('ru-RU', 'app.forums.replies_count', 2);
 *  // -> '2 ответa'
 *  ```
 **/
BabelFish.prototype.translate = function _translate(locale, phrase, params) {
  var key = searchPhraseKey(this, locale, phrase);
  var data;

  if (!key) {
    return locale + ': No translation for [' + phrase + ']';
  }

  data = this._storage[key];

  // simple string or other pure object
  if (data.raw) {
    return data.translation;
  }

  // compile data if not done yet
  if (!data.hasOwnProperty('compiled')) {
    // We should use locale from phrase, because of possible fallback,
    // to keep plural locales in sync.
    data.compiled = compile(this, data.translation, data.locale);
  }

  // return simple string immediately
  if (!isFunction(data.compiled)) {
    return data.compiled;
  }

  //
  // Generate "complex" phrase
  //

  // Sugar: coerce numbers & strings to { count: X, value: X }
  if (isNumber(params) || isString(params)) {
    params = { count: params, value: params };
  }

  return data.compiled.call(this, params, flatten, pluralizer);
};

/**
 *  BabelFish#hasPhrase(locale, phrase) -> Boolean
 *  - locale (String): Locale of translation
 *  - phrase (String): Phrase ID, e.g. `app.forums.replies_count`
 *  - noFallback (Boolean): Disable search in fallbacks
 *
 *  Returns whenever or not there's a translation of a `phrase`.
 **/
BabelFish.prototype.hasPhrase = function _hasPhrase(locale, phrase, noFallback) {
  return noFallback ? this._storage.hasOwnProperty(makePhraseKey(locale, phrase)) : searchPhraseKey(this, locale, phrase) ? true : false;
};

/**
 *  BabelFish#getLocale(locale, phrase) -> String|null
 *  - locale (String): Locale of translation
 *  - phrase (String): Phrase ID, e.g. `app.forums.replies_count`
 *  - noFallback (Boolean): Disable search in fallbacks
 *
 *  Similar to [[BabelFish#hasPhrase]], but returns real locale of requested
 *  phrase, or `null` if nothing found. Can be useful for dynamic dependencies
 *  init. For example, when you fetch i10n config as single object and create
 *  phrases from it's content.
 **/
BabelFish.prototype.getLocale = function _getLocale(locale, phrase, noFallback) {
  if (noFallback) {
    return this._storage.hasOwnProperty(makePhraseKey(locale, phrase)) ? locale : null;
  }

  var key = searchPhraseKey(this, locale, phrase);

  return key ? key.split(keySeparator, 2)[0] : null;
};

/** alias of: BabelFish#translate
 *  BabelFish#t(locale, phrase[, params]) -> String
 **/
BabelFish.prototype.t = BabelFish.prototype.translate;

/**
 *  BabelFish#stringify(locale) -> String
 *  - locale (String): Locale of translation
 *
 *  Returns serialized locale data, uncluding fallbacks.
 *  It can be loaded back via `load()` method.
 **/
BabelFish.prototype.stringify = function _stringify(locale) {
  var self = this;

  // Collect unique keys
  var unique = {};

  forEach(this._storage, function (val, key) {
    unique[key.split(keySeparator)[1]] = true;
  });

  // Collect phrases (with fallbacks)
  var result = {};

  forEach(unique, function (val, key) {
    var k = searchPhraseKey(self, locale, key);
    // if key was just a garbage from another
    // and doesn't fit into fallback chain for current locale - skip it
    if (!k) {
      return;
    }
    // create namespace if not exists
    var l = self._storage[k].locale;
    if (!result[l]) {
      result[l] = {};
    }
    result[l][key] = self._storage[k].translation;
  });

  var out = {
    fallback: {},
    locales: result
  };

  // Get fallback rule. Cut auto-added fallback to default locale
  var fallback = (self._fallbacks[locale] || []).slice(0, -1);
  if (fallback.length) {
    out.fallback[locale] = fallback;
  }

  return JSON.stringify(out);
};

/**
 *  BabelFish#load(data) -> BabelFish
 *  - data (Object|String): data from `stringify()` method, as object or string.
 *
 *  Batch load phrases data, prepared with `stringify()` method.
 *  Useful at browser side.
 **/
BabelFish.prototype.load = function _load(data) {
  var self = this;

  if (isString(data)) {
    data = JSON.parse(data);
  }

  forEach(data.locales, function (phrases, locale) {
    forEach(phrases, function (translation, key) {
      self.addPhrase(locale, key, translation, 0);
    });
  });

  forEach(data.fallback, function (rule, locale) {
    self.setFallback(locale, rule);
  });

  return this;
};

// export module
module.exports = BabelFish;

/***/ }),
/* 64 */
/*!**********************************************!*\
  !*** ./node_modules/babelfish/lib/parser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message = message;
    this.expected = expected;
    this.found = found;
    this.offset = offset;
    this.line = line;
    this.column = column;

    this.name = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        peg$FAILED = {},
        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction = peg$parsestart,
        peg$c0 = [],
        peg$c1 = peg$FAILED,
        peg$c2 = "((",
        peg$c3 = { type: "literal", value: "((", description: "\"((\"" },
        peg$c4 = "))",
        peg$c5 = { type: "literal", value: "))", description: "\"))\"" },
        peg$c6 = null,
        peg$c7 = function (forms, anchor) {
      return {
        type: 'plural',
        forms: regularForms(forms),
        strict: strictForms(forms),
        anchor: anchor || 'count'
      };
    },
        peg$c8 = "|",
        peg$c9 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c10 = function (part, more) {
      return [part].concat(more);
    },
        peg$c11 = function (part) {
      return [part];
    },
        peg$c12 = "=",
        peg$c13 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c14 = /^[0-9]/,
        peg$c15 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c16 = " ",
        peg$c17 = { type: "literal", value: " ", description: "\" \"" },
        peg$c18 = function (strict, form) {
      return {
        strict: strict.join(''),
        text: form.join('')
      };
    },
        peg$c19 = function () {
      return {
        text: text()
      };
    },
        peg$c20 = "\\",
        peg$c21 = { type: "literal", value: "\\", description: "\"\\\\\"" },
        peg$c22 = /^[\\|)(]/,
        peg$c23 = { type: "class", value: "[\\\\|)(]", description: "[\\\\|)(]" },
        peg$c24 = function (char) {
      return char;
    },
        peg$c25 = void 0,
        peg$c26 = { type: "any", description: "any character" },
        peg$c27 = function () {
      return text();
    },
        peg$c28 = ":",
        peg$c29 = { type: "literal", value: ":", description: "\":\"" },
        peg$c30 = function (name) {
      return name;
    },
        peg$c31 = "#{",
        peg$c32 = { type: "literal", value: "#{", description: "\"#{\"" },
        peg$c33 = "}",
        peg$c34 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c35 = function (anchor) {
      return {
        type: 'variable',
        anchor: anchor
      };
    },
        peg$c36 = ".",
        peg$c37 = { type: "literal", value: ".", description: "\".\"" },
        peg$c38 = function () {
      return text();
    },
        peg$c39 = /^[a-zA-Z_$]/,
        peg$c40 = { type: "class", value: "[a-zA-Z_$]", description: "[a-zA-Z_$]" },
        peg$c41 = /^[a-zA-Z0-9_$]/,
        peg$c42 = { type: "class", value: "[a-zA-Z0-9_$]", description: "[a-zA-Z0-9_$]" },
        peg$c43 = function (lc) {
      return lc;
    },
        peg$c44 = function (literal_chars) {
      return {
        type: 'literal',
        text: literal_chars.join('')
      };
    },
        peg$c45 = /^[\\#()|]/,
        peg$c46 = { type: "class", value: "[\\\\#()|]", description: "[\\\\#()|]" },
        peg$currPos = 0,
        peg$reportedPos = 0,
        peg$cachedPos = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos = 0,
        peg$maxFailExpected = [],
        peg$silentFails = 0,
        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(null, [{ type: "other", description: description }], peg$reportedPos);
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) {
              details.line++;
            }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) {
        return;
      }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function (a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) {
            return ch.charCodeAt(0).toString(16).toUpperCase();
          }

          return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\x08/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
            return '\\x0' + hex(ch);
          }).replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
            return '\\x' + hex(ch);
          }).replace(/[\u0180-\u0FFF]/g, function (ch) {
            return '\\u0' + hex(ch);
          }).replace(/[\u1080-\uFFFF]/g, function (ch) {
            return '\\u' + hex(ch);
          });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc,
            foundDesc,
            i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1 ? expectedDescs.slice(0, -1).join(", ") + " or " + expectedDescs[expected.length - 1] : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(message !== null ? message : buildMessage(expected, found), expected, found, pos, posDetails.line, posDetails.column);
    }

    function peg$parsestart() {
      var s0, s1;

      s0 = [];
      s1 = peg$parseliteral();
      if (s1 === peg$FAILED) {
        s1 = peg$parseplural();
        if (s1 === peg$FAILED) {
          s1 = peg$parsevariable();
        }
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseliteral();
        if (s1 === peg$FAILED) {
          s1 = peg$parseplural();
          if (s1 === peg$FAILED) {
            s1 = peg$parsevariable();
          }
        }
      }

      return s0;
    }

    function peg$parseplural() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c2) {
        s1 = peg$c2;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c3);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseplural_forms();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c4) {
            s3 = peg$c4;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c5);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseplural_anchor();
            if (s4 === peg$FAILED) {
              s4 = peg$c6;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c7(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseplural_forms() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseplural_part();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 124) {
          s2 = peg$c8;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c9);
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseplural_forms();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c10(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseplural_part();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c11(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseplural_part() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s1 = peg$c12;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c13);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c14.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c15);
          }
        }
        if (s3 !== peg$FAILED) {
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            if (peg$c14.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c15);
              }
            }
          }
        } else {
          s2 = peg$c1;
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 32) {
            s3 = peg$c16;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c17);
            }
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c6;
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parseplural_char();
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                s5 = peg$parseplural_char();
              }
            } else {
              s4 = peg$c1;
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c18(s2, s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c1;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseplural_char();
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parseplural_char();
          }
        } else {
          s1 = peg$c1;
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c19();
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseplural_char() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c20;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c21);
        }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c22.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c23);
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c24(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        if (input.charCodeAt(peg$currPos) === 124) {
          s2 = peg$c8;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c9);
          }
        }
        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c4) {
            s2 = peg$c4;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c5);
            }
          }
        }
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = peg$c25;
        } else {
          peg$currPos = s1;
          s1 = peg$c1;
        }
        if (s1 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c26);
            }
          }
          if (s2 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c27();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      }

      return s0;
    }

    function peg$parseplural_anchor() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s1 = peg$c28;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c29);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseidentifier();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c30(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parsevariable() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c31) {
        s1 = peg$c31;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c32);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseidentifier();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 125) {
            s3 = peg$c33;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c34);
            }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c35(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseidentifier() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseidentifier_part();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c36;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c37);
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseidentifier();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseidentifier();
            }
          } else {
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c38();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c1;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseidentifier_part();
      }

      return s0;
    }

    function peg$parseidentifier_part() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (peg$c39.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c40);
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$c41.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c42);
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$c41.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c42);
            }
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c27();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }

      return s0;
    }

    function peg$parseliteral() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parseplural();
      if (s4 === peg$FAILED) {
        s4 = peg$parsevariable();
      }
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = peg$c25;
      } else {
        peg$currPos = s3;
        s3 = peg$c1;
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parseliteral_char();
        if (s4 !== peg$FAILED) {
          peg$reportedPos = s2;
          s3 = peg$c43(s4);
          s2 = s3;
        } else {
          peg$currPos = s2;
          s2 = peg$c1;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$c1;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parseplural();
          if (s4 === peg$FAILED) {
            s4 = peg$parsevariable();
          }
          peg$silentFails--;
          if (s4 === peg$FAILED) {
            s3 = peg$c25;
          } else {
            peg$currPos = s3;
            s3 = peg$c1;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parseliteral_char();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s2;
              s3 = peg$c43(s4);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$c1;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$c1;
          }
        }
      } else {
        s1 = peg$c1;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c44(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseliteral_char() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 92) {
        s1 = peg$c20;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c21);
        }
      }
      if (s1 !== peg$FAILED) {
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c46);
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c24(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c1;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c1;
      }
      if (s0 === peg$FAILED) {
        if (input.length > peg$currPos) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c26);
          }
        }
      }

      return s0;
    }

    function regularForms(forms) {
      var result = [];
      for (var i = 0; i < forms.length; i++) {
        if (forms[i].strict === undefined) {
          result.push(forms[i].text);
        }
      }
      return result;
    }
    function strictForms(forms) {
      var result = {};
      for (var i = 0; i < forms.length; i++) {
        if (forms[i].strict !== undefined) {
          result[forms[i].strict] = forms[i].text;
        }
      }
      return result;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse: parse
  };
}();

/***/ }),
/* 65 */
/*!********************************************!*\
  !*** ./node_modules/plurals-cldr/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Plural functions support (cardinal & ordinal forms)
 *
 * Autogenerated from CLDR:
 *
 *   Version:         36
 *   Unicode version: 12.1.0
 */



// pluralizers cache

var s = {};

function normalize(loc) {
  var l;
  if (s[loc]) {
    return loc;
  }
  l = loc.toLowerCase().replace('_', '-');
  if (s[l]) {
    return l;
  }
  l = l.split('-')[0];
  if (s[l]) {
    return l;
  }
  return null;
}

function forms(loc) {
  var l = normalize(loc);
  return s[l] ? s[l].c : null;
}

function indexOf(loc, value) {
  var l = normalize(loc);
  if (!l) {
    return -1;
  }

  if (!s[l].cFn) {
    return 0;
  }

  var sval = String(value),
      f = sval.indexOf('.') < 0 ? '' : sval.split('.')[1],
      v = f.length,
      n = +value,
      i = +sval.split('.')[0],
      t = f.length === 0 ? 0 : +f.replace(/0+$/, '');

  return s[l].cFn(n, i, v, +f, t);
}

function plural(loc, value) {
  var l = normalize(loc);
  if (!l) {
    return null;
  }
  return s[l].c[indexOf(l, value)];
}

function o_forms(loc) {
  var l = normalize(loc);
  return s[l] ? s[l].o : null;
}

function o_indexOf(loc, value) {
  var l = normalize(loc);
  if (!l) {
    return -1;
  }

  if (!s[l].oFn) {
    return 0;
  }

  var sval = String(value),
      f = sval.indexOf('.') < 0 ? '' : sval.split('.')[1],
      v = f.length,
      n = +value,
      i = +sval.split('.')[0],
      t = f.length === 0 ? 0 : +f.replace(/0+$/, '');

  return s[l].oFn(n, i, v, +f, t);
}

function ordinal(loc, value) {
  var l = normalize(loc);
  if (!s[l]) {
    return null;
  }
  return s[l].o[o_indexOf(l, value)];
}

module.exports = plural;
module.exports.indexOf = indexOf;
module.exports.forms = forms;
module.exports.ordinal = ordinal;
module.exports.ordinal.indexOf = o_indexOf;
module.exports.ordinal.forms = o_forms;

////////////////////////////////////////////////////////////////////////////////

var FORMS = ['zero', 'one', 'two', 'few', 'many', 'other'];

function unpack(i) {
  return FORMS[i];
}

// adds given `rule` pluralizer for given `locales` into `storage`
function add(locales, rule) {
  var i;

  rule.c = rule.c ? rule.c.map(unpack) : ['other'];
  rule.o = rule.o ? rule.o.map(unpack) : ['other'];

  for (i = 0; i < locales.length; i++) {
    s[locales[i]] = rule;
  }
}

function B(x, y, val) {
  return x <= val && val <= y && val % 1 === 0;
}
function IN(set, val) {
  return set.indexOf(val) >= 0;
}

add(['af', 'an', 'asa', 'bem', 'bez', 'bg', 'brx', 'ce', 'cgg', 'chr', 'ckb', 'dv', 'ee', 'el', 'eo', 'es', 'eu', 'fo', 'fur', 'gsw', 'ha', 'haw', 'jgo', 'jmc', 'kaj', 'kcg', 'kkj', 'kl', 'ks', 'ksb', 'ku', 'ky', 'lb', 'lg', 'mas', 'mgo', 'ml', 'mn', 'nah', 'nb', 'nd', 'nn', 'nnh', 'no', 'nr', 'ny', 'nyn', 'om', 'os', 'pap', 'ps', 'rm', 'rof', 'rwk', 'saq', 'sd', 'sdh', 'seh', 'sn', 'so', 'ss', 'ssy', 'st', 'syr', 'ta', 'te', 'teo', 'tig', 'tn', 'tr', 'ts', 'ug', 'uz', 've', 'vo', 'vun', 'wae', 'xh', 'xog'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  }
});

add(['ak', 'bho', 'guw', 'ln', 'mg', 'nso', 'pa', 'ti', 'wa'], {
  c: [1, 5],
  cFn: function (n) {
    return B(0, 1, n) ? 0 : 1;
  }
});

add(['am', 'fa', 'kn', 'zu'], {
  c: [1, 5],
  cFn: function (n, i) {
    return i === 0 || n === 1 ? 0 : 1;
  }
});

add(['ar', 'ars'], {
  c: [0, 1, 2, 3, 4, 5],
  cFn: function (n) {
    var n100 = n % 100;
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : B(3, 10, n100) ? 3 : B(11, 99, n100) ? 4 : 5;
  }
});

add(['as', 'bn'], {
  c: [1, 5],
  cFn: function (n, i) {
    return i === 0 || n === 1 ? 0 : 1;
  },
  o: [1, 2, 3, 4, 5],
  oFn: function (n) {
    return IN([1, 5, 7, 8, 9, 10], n) ? 0 : IN([2, 3], n) ? 1 : n === 4 ? 2 : n === 6 ? 3 : 4;
  }
});

add(['ast', 'de', 'et', 'fi', 'fy', 'gl', 'ia', 'io', 'ji', 'nl', 'pt-pt', 'sw', 'ur', 'yi'], {
  c: [1, 5],
  cFn: function (n, i, v) {
    return i === 1 && v === 0 ? 0 : 1;
  }
});

add(['az'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [1, 3, 4, 5],
  oFn: function (n, i) {
    var i10 = i % 10,
        i100 = i % 100,
        i1000 = i % 1000;
    return IN([1, 2, 5, 7, 8], i10) || IN([20, 50, 70, 80], i100) ? 0 : IN([3, 4], i10) || IN([100, 200, 300, 400, 500, 600, 700, 800, 900], i1000) ? 1 : i === 0 || i10 === 6 || IN([40, 60, 90], i100) ? 2 : 3;
  }
});

add(['be'], {
  c: [1, 3, 4, 5],
  cFn: function (n) {
    var n10 = n % 10,
        n100 = n % 100;
    return n10 === 1 && n100 !== 11 ? 0 : B(2, 4, n10) && !B(12, 14, n100) ? 1 : n10 === 0 || B(5, 9, n10) || B(11, 14, n100) ? 2 : 3;
  },
  o: [3, 5],
  oFn: function (n) {
    var n10 = n % 10,
        n100 = n % 100;
    return IN([2, 3], n10) && !IN([12, 13], n100) ? 0 : 1;
  }
});

add(['bm', 'bo', 'dz', 'id', 'ig', 'ii', 'in', 'ja', 'jbo', 'jv', 'jw', 'kde', 'kea', 'km', 'ko', 'lkt', 'my', 'nqo', 'osa', 'root', 'sah', 'ses', 'sg', 'su', 'th', 'to', 'wo', 'yo', 'yue', 'zh'], {});

add(['br'], {
  c: [1, 2, 3, 4, 5],
  cFn: function (n) {
    var n10 = n % 10,
        n100 = n % 100,
        n1000000 = n % 1000000;
    return n10 === 1 && !IN([11, 71, 91], n100) ? 0 : n10 === 2 && !IN([12, 72, 92], n100) ? 1 : (B(3, 4, n10) || n10 === 9) && !B(10, 19, n100) && !B(70, 79, n100) && !B(90, 99, n100) ? 2 : n !== 0 && n1000000 === 0 ? 3 : 4;
  }
});

add(['bs', 'hr', 'sh', 'sr'], {
  c: [1, 3, 5],
  cFn: function (n, i, v, f) {
    var i10 = i % 10,
        i100 = i % 100,
        f10 = f % 10,
        f100 = f % 100;
    return v === 0 && i10 === 1 && i100 !== 11 || f10 === 1 && f100 !== 11 ? 0 : v === 0 && B(2, 4, i10) && !B(12, 14, i100) || B(2, 4, f10) && !B(12, 14, f100) ? 1 : 2;
  }
});

add(['ca'], {
  c: [1, 5],
  cFn: function (n, i, v) {
    return i === 1 && v === 0 ? 0 : 1;
  },
  o: [1, 2, 3, 5],
  oFn: function (n) {
    return IN([1, 3], n) ? 0 : n === 2 ? 1 : n === 4 ? 2 : 3;
  }
});

add(['ceb'], {
  c: [1, 5],
  cFn: function (n, i, v, f) {
    var i10 = i % 10,
        f10 = f % 10;
    return v === 0 && IN([1, 2, 3], i) || v === 0 && !IN([4, 6, 9], i10) || v !== 0 && !IN([4, 6, 9], f10) ? 0 : 1;
  }
});

add(['cs', 'sk'], {
  c: [1, 3, 4, 5],
  cFn: function (n, i, v) {
    return i === 1 && v === 0 ? 0 : B(2, 4, i) && v === 0 ? 1 : v !== 0 ? 2 : 3;
  }
});

add(['cy'], {
  c: [0, 1, 2, 3, 4, 5],
  cFn: function (n) {
    return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n === 3 ? 3 : n === 6 ? 4 : 5;
  },
  o: [0, 1, 2, 3, 4, 5],
  oFn: function (n) {
    return IN([0, 7, 8, 9], n) ? 0 : n === 1 ? 1 : n === 2 ? 2 : IN([3, 4], n) ? 3 : IN([5, 6], n) ? 4 : 5;
  }
});

add(['da'], {
  c: [1, 5],
  cFn: function (n, i, v, f, t) {
    return n === 1 || t !== 0 && IN([0, 1], i) ? 0 : 1;
  }
});

add(['dsb', 'hsb'], {
  c: [1, 2, 3, 5],
  cFn: function (n, i, v, f) {
    var i100 = i % 100,
        f100 = f % 100;
    return v === 0 && i100 === 1 || f100 === 1 ? 0 : v === 0 && i100 === 2 || f100 === 2 ? 1 : v === 0 && B(3, 4, i100) || B(3, 4, f100) ? 2 : 3;
  }
});

add(['en'], {
  c: [1, 5],
  cFn: function (n, i, v) {
    return i === 1 && v === 0 ? 0 : 1;
  },
  o: [1, 2, 3, 5],
  oFn: function (n) {
    var n10 = n % 10,
        n100 = n % 100;
    return n10 === 1 && n100 !== 11 ? 0 : n10 === 2 && n100 !== 12 ? 1 : n10 === 3 && n100 !== 13 ? 2 : 3;
  }
});

add(['ff', 'kab'], {
  c: [1, 5],
  cFn: function (n, i) {
    return IN([0, 1], i) ? 0 : 1;
  }
});

add(['fil', 'tl'], {
  c: [1, 5],
  cFn: function (n, i, v, f) {
    var i10 = i % 10,
        f10 = f % 10;
    return v === 0 && IN([1, 2, 3], i) || v === 0 && !IN([4, 6, 9], i10) || v !== 0 && !IN([4, 6, 9], f10) ? 0 : 1;
  },
  o: [1, 5],
  oFn: function (n) {
    return n === 1 ? 0 : 1;
  }
});

add(['fr', 'hy'], {
  c: [1, 5],
  cFn: function (n, i) {
    return IN([0, 1], i) ? 0 : 1;
  },
  o: [1, 5],
  oFn: function (n) {
    return n === 1 ? 0 : 1;
  }
});

add(['ga'], {
  c: [1, 2, 3, 4, 5],
  cFn: function (n) {
    return n === 1 ? 0 : n === 2 ? 1 : B(3, 6, n) ? 2 : B(7, 10, n) ? 3 : 4;
  },
  o: [1, 5],
  oFn: function (n) {
    return n === 1 ? 0 : 1;
  }
});

add(['gd'], {
  c: [1, 2, 3, 5],
  cFn: function (n) {
    return IN([1, 11], n) ? 0 : IN([2, 12], n) ? 1 : B(3, 10, n) || B(13, 19, n) ? 2 : 3;
  },
  o: [1, 2, 3, 5],
  oFn: function (n) {
    return IN([1, 11], n) ? 0 : IN([2, 12], n) ? 1 : IN([3, 13], n) ? 2 : 3;
  }
});

add(['gu', 'hi'], {
  c: [1, 5],
  cFn: function (n, i) {
    return i === 0 || n === 1 ? 0 : 1;
  },
  o: [1, 2, 3, 4, 5],
  oFn: function (n) {
    return n === 1 ? 0 : IN([2, 3], n) ? 1 : n === 4 ? 2 : n === 6 ? 3 : 4;
  }
});

add(['gv'], {
  c: [1, 2, 3, 4, 5],
  cFn: function (n, i, v) {
    var i10 = i % 10,
        i100 = i % 100;
    return v === 0 && i10 === 1 ? 0 : v === 0 && i10 === 2 ? 1 : v === 0 && IN([0, 20, 40, 60, 80], i100) ? 2 : v !== 0 ? 3 : 4;
  }
});

add(['he', 'iw'], {
  c: [1, 2, 4, 5],
  cFn: function (n, i, v) {
    var n10 = n % 10;
    return i === 1 && v === 0 ? 0 : i === 2 && v === 0 ? 1 : v === 0 && !B(0, 10, n) && n10 === 0 ? 2 : 3;
  }
});

add(['hu'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [1, 5],
  oFn: function (n) {
    return IN([1, 5], n) ? 0 : 1;
  }
});

add(['is'], {
  c: [1, 5],
  cFn: function (n, i, v, f, t) {
    var i10 = i % 10,
        i100 = i % 100;
    return t === 0 && i10 === 1 && i100 !== 11 || t !== 0 ? 0 : 1;
  }
});

add(['it', 'sc', 'scn'], {
  c: [1, 5],
  cFn: function (n, i, v) {
    return i === 1 && v === 0 ? 0 : 1;
  },
  o: [4, 5],
  oFn: function (n) {
    return IN([11, 8, 80, 800], n) ? 0 : 1;
  }
});

add(['iu', 'naq', 'se', 'sma', 'smi', 'smj', 'smn', 'sms'], {
  c: [1, 2, 5],
  cFn: function (n) {
    return n === 1 ? 0 : n === 2 ? 1 : 2;
  }
});

add(['ka'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [1, 4, 5],
  oFn: function (n, i) {
    var i100 = i % 100;
    return i === 1 ? 0 : i === 0 || B(2, 20, i100) || i100 === 40 || i100 === 60 || i100 === 80 ? 1 : 2;
  }
});

add(['kk'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [4, 5],
  oFn: function (n) {
    var n10 = n % 10;
    return n10 === 6 || n10 === 9 || n10 === 0 && n !== 0 ? 0 : 1;
  }
});

add(['ksh'], {
  c: [0, 1, 5],
  cFn: function (n) {
    return n === 0 ? 0 : n === 1 ? 1 : 2;
  }
});

add(['kw'], {
  c: [0, 1, 2, 3, 4, 5],
  cFn: function (n) {
    var n100 = n % 100,
        n1000 = n % 1000,
        n100000 = n % 100000,
        n1000000 = n % 1000000;
    return n === 0 ? 0 : n === 1 ? 1 : IN([2, 22, 42, 62, 82], n100) || n1000 === 0 && (B(1000, 20000, n100000) || n100000 === 40000 || n100000 === 60000 || n100000 === 80000) || n !== 0 && n1000000 === 100000 ? 2 : IN([3, 23, 43, 63, 83], n100) ? 3 : n !== 1 && IN([1, 21, 41, 61, 81], n100) ? 4 : 5;
  },
  o: [1, 4, 5],
  oFn: function (n) {
    var n100 = n % 100;
    return B(1, 4, n) || B(1, 4, n100) || B(21, 24, n100) || B(41, 44, n100) || B(61, 64, n100) || B(81, 84, n100) ? 0 : n === 5 || n100 === 5 ? 1 : 2;
  }
});

add(['lag'], {
  c: [0, 1, 5],
  cFn: function (n, i) {
    return n === 0 ? 0 : IN([0, 1], i) && n !== 0 ? 1 : 2;
  }
});

add(['lo', 'ms', 'vi'], {
  o: [1, 5],
  oFn: function (n) {
    return n === 1 ? 0 : 1;
  }
});

add(['lt'], {
  c: [1, 3, 4, 5],
  cFn: function (n, i, v, f) {
    var n10 = n % 10,
        n100 = n % 100;
    return n10 === 1 && !B(11, 19, n100) ? 0 : B(2, 9, n10) && !B(11, 19, n100) ? 1 : f !== 0 ? 2 : 3;
  }
});

add(['lv', 'prg'], {
  c: [0, 1, 5],
  cFn: function (n, i, v, f) {
    var n10 = n % 10,
        n100 = n % 100,
        f100 = f % 100,
        f10 = f % 10;
    return n10 === 0 || B(11, 19, n100) || v === 2 && B(11, 19, f100) ? 0 : n10 === 1 && n100 !== 11 || v === 2 && f10 === 1 && f100 !== 11 || v !== 2 && f10 === 1 ? 1 : 2;
  }
});

add(['mk'], {
  c: [1, 5],
  cFn: function (n, i, v, f) {
    var i10 = i % 10,
        i100 = i % 100,
        f10 = f % 10,
        f100 = f % 100;
    return v === 0 && i10 === 1 && i100 !== 11 || f10 === 1 && f100 !== 11 ? 0 : 1;
  },
  o: [1, 2, 4, 5],
  oFn: function (n, i) {
    var i10 = i % 10,
        i100 = i % 100;
    return i10 === 1 && i100 !== 11 ? 0 : i10 === 2 && i100 !== 12 ? 1 : IN([7, 8], i10) && !IN([17, 18], i100) ? 2 : 3;
  }
});

add(['mo', 'ro'], {
  c: [1, 3, 5],
  cFn: function (n, i, v) {
    var n100 = n % 100;
    return i === 1 && v === 0 ? 0 : v !== 0 || n === 0 || B(2, 19, n100) ? 1 : 2;
  },
  o: [1, 5],
  oFn: function (n) {
    return n === 1 ? 0 : 1;
  }
});

add(['mr'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [1, 2, 3, 5],
  oFn: function (n) {
    return n === 1 ? 0 : IN([2, 3], n) ? 1 : n === 4 ? 2 : 3;
  }
});

add(['mt'], {
  c: [1, 3, 4, 5],
  cFn: function (n) {
    var n100 = n % 100;
    return n === 1 ? 0 : n === 0 || B(2, 10, n100) ? 1 : B(11, 19, n100) ? 2 : 3;
  }
});

add(['ne'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [1, 5],
  oFn: function (n) {
    return B(1, 4, n) ? 0 : 1;
  }
});

add(['or'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [1, 2, 3, 4, 5],
  oFn: function (n) {
    return n === 1 || n === 5 || B(7, 9, n) ? 0 : IN([2, 3], n) ? 1 : n === 4 ? 2 : n === 6 ? 3 : 4;
  }
});

add(['pl'], {
  c: [1, 3, 4, 5],
  cFn: function (n, i, v) {
    var i10 = i % 10,
        i100 = i % 100;
    return i === 1 && v === 0 ? 0 : v === 0 && B(2, 4, i10) && !B(12, 14, i100) ? 1 : v === 0 && i !== 1 && B(0, 1, i10) || v === 0 && B(5, 9, i10) || v === 0 && B(12, 14, i100) ? 2 : 3;
  }
});

add(['pt'], {
  c: [1, 5],
  cFn: function (n, i) {
    return B(0, 1, i) ? 0 : 1;
  }
});

add(['ru'], {
  c: [1, 3, 4, 5],
  cFn: function (n, i, v) {
    var i10 = i % 10,
        i100 = i % 100;
    return v === 0 && i10 === 1 && i100 !== 11 ? 0 : v === 0 && B(2, 4, i10) && !B(12, 14, i100) ? 1 : v === 0 && i10 === 0 || v === 0 && B(5, 9, i10) || v === 0 && B(11, 14, i100) ? 2 : 3;
  }
});

add(['shi'], {
  c: [1, 3, 5],
  cFn: function (n, i) {
    return i === 0 || n === 1 ? 0 : B(2, 10, n) ? 1 : 2;
  }
});

add(['si'], {
  c: [1, 5],
  cFn: function (n, i, v, f) {
    return IN([0, 1], n) || i === 0 && f === 1 ? 0 : 1;
  }
});

add(['sl'], {
  c: [1, 2, 3, 5],
  cFn: function (n, i, v) {
    var i100 = i % 100;
    return v === 0 && i100 === 1 ? 0 : v === 0 && i100 === 2 ? 1 : v === 0 && B(3, 4, i100) || v !== 0 ? 2 : 3;
  }
});

add(['sq'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [1, 4, 5],
  oFn: function (n) {
    var n10 = n % 10,
        n100 = n % 100;
    return n === 1 ? 0 : n10 === 4 && n100 !== 14 ? 1 : 2;
  }
});

add(['sv'], {
  c: [1, 5],
  cFn: function (n, i, v) {
    return i === 1 && v === 0 ? 0 : 1;
  },
  o: [1, 5],
  oFn: function (n) {
    var n10 = n % 10,
        n100 = n % 100;
    return IN([1, 2], n10) && !IN([11, 12], n100) ? 0 : 1;
  }
});

add(['tk'], {
  c: [1, 5],
  cFn: function (n) {
    return n === 1 ? 0 : 1;
  },
  o: [3, 5],
  oFn: function (n) {
    var n10 = n % 10;
    return IN([6, 9], n10) || n === 10 ? 0 : 1;
  }
});

add(['tzm'], {
  c: [1, 5],
  cFn: function (n) {
    return B(0, 1, n) || B(11, 99, n) ? 0 : 1;
  }
});

add(['uk'], {
  c: [1, 3, 4, 5],
  cFn: function (n, i, v) {
    var i10 = i % 10,
        i100 = i % 100;
    return v === 0 && i10 === 1 && i100 !== 11 ? 0 : v === 0 && B(2, 4, i10) && !B(12, 14, i100) ? 1 : v === 0 && i10 === 0 || v === 0 && B(5, 9, i10) || v === 0 && B(11, 14, i100) ? 2 : 3;
  },
  o: [3, 5],
  oFn: function (n) {
    var n10 = n % 10,
        n100 = n % 100;
    return n10 === 3 && n100 !== 13 ? 0 : 1;
  }
});

////////////////////////////////////////////////////////////////////////////////

/***/ }),
/* 66 */
/*!*********************************************************!*\
  !*** ./modules/engine/prism/locales sync ^\.\/.*\.yml$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en.yml": 67
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 66;

/***/ }),
/* 67 */
/*!*********************************************!*\
  !*** ./modules/engine/prism/locales/en.yml ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"output":"OUTPUT"}

/***/ }),
/* 68 */
/*!*********************************************!*\
  !*** ./modules/engine/prism/codeTabsBox.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let delegate = __webpack_require__(/*! client/delegate */ 21);
let makeLineNumbers = __webpack_require__(/*! ./makeLineNumbers */ 22);

class CodeTabsBox {
  constructor(elem) {
    if (window.ebookType) {
      return;
    }

    this.elem = elem;
    this.translateX = 0;

    this.switchesElem = elem.querySelector('[data-code-tabs-switches]');
    this.switchesElemItems = this.switchesElem.firstElementChild;
    this.arrowLeft = elem.querySelector('[data-code-tabs-left]');
    this.arrowRight = elem.querySelector('[data-code-tabs-right]');

    this.arrowLeft.onclick = e => {
      e.preventDefault();

      this.translateX = Math.max(0, this.translateX - this.switchesElem.offsetWidth);
      this.renderTranslate();
    };

    this.arrowRight.onclick = e => {
      e.preventDefault();

      this.translateX = Math.min(this.translateX + this.switchesElem.offsetWidth, this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth);
      this.renderTranslate();
    };

    let tabCurrent = this.elem.querySelector('.code-tabs__section_current');
    if (tabCurrent !== tabCurrent.parentElement.firstElementChild) {
      // if not result tab
      this.highlightTab(tabCurrent);
    }

    this.delegate('.code-tabs__switch', 'click', this.onSwitchClick);
  }

  onSwitchClick(e) {
    e.preventDefault();

    let siblings = e.delegateTarget.parentNode.children;
    let tabs = this.elem.querySelector('[data-code-tabs-content]').children;

    let selectedIndex;
    for (let i = 0; i < siblings.length; i++) {
      let switchElem = siblings[i];
      let tabElem = tabs[i];
      if (switchElem === e.delegateTarget) {
        selectedIndex = i;
        tabElem.classList.add('code-tabs__section_current');
        switchElem.classList.add('code-tabs__switch_current');
      } else {
        tabElem.classList.remove('code-tabs__section_current');
        switchElem.classList.remove('code-tabs__switch_current');
      }
    }

    if (selectedIndex === 0) {
      this.elem.classList.add('code-tabs_result_on');
    } else {
      this.elem.classList.remove('code-tabs_result_on');

      this.highlightTab(tabs[selectedIndex]);
    }
  }

  highlightTab(tab) {
    if (tab.highlighted) return;
    let preElem = tab.querySelector('pre');
    let codeElem = preElem.querySelector('code');
    Prism.highlightElement(codeElem);

    preElem.insertAdjacentHTML("afterBegin", makeLineNumbers(preElem.innerHTML));

    tab.highlighted = true;
  }

  renderTranslate() {
    this.switchesElemItems.style.transform = 'translateX(-' + this.translateX + 'px)';
    if (this.translateX === 0) {
      this.arrowLeft.setAttribute('disabled', '');
    } else {
      this.arrowLeft.removeAttribute('disabled');
    }

    if (this.translateX === this.switchesElemItems.offsetWidth - this.switchesElem.offsetWidth) {
      this.arrowRight.setAttribute('disabled', '');
    } else {
      this.arrowRight.removeAttribute('disabled');
    }
  }
}

delegate.delegateMixin(CodeTabsBox.prototype);

module.exports = CodeTabsBox;

/***/ }),
/* 69 */
/*!*************************************************!*\
  !*** ./modules/engine/prism/proxyConsoleLog.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let consoleFormat = __webpack_require__(/*! engine/console/consoleFormat */ 23);

module.exports = function proxyConsoleLog() {
  // use window.console.log to work around "drop_console: true" in webpack uglify settings
  window.consoleLogNative = window.console.log.bind(console);

  // console.log for the main window
  // js code always has globalThis.__codeBoxId
  // trusted iframe uses its own console.log (created in codeBox.js)
  // untrusted uses lookatcode/consoleLog module and window.name
  console.log = function (...args) {
    consoleLogNative(...args);

    let formattedArgs = consoleFormat(args);
    // in the main window we have: window.__codeBoxId,
    let message = {
      type: 'console-log',
      log: formattedArgs,
      codeBoxId: window.__codeBoxId
    };

    // console.info("message sent", message);
    window.postMessage(message, '*');
  };

  window.addEventListener('message', ({ source, data }) => {

    // message from parent frame? never happens for console-log
    if (source != window && source == window.parent) return;

    if (data.type != 'console-log') return;
    // console.info("message received", data);

    let codeBoxElem = document.getElementById(data.codeBoxId);
    if (!codeBoxElem) {
      console.error("No codeBoxElem", data);
      return;
    }

    let codeBox = codeBoxElem.codeBox;
    codeBox.consoleLog(data.log);
  });
};

/***/ }),
/* 70 */
/*!**********************************************************!*\
  !*** ./modules/engine/koa/tutorial/client/itemSlider.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


let throttle = __webpack_require__(/*! lodash/throttle */ 3);

class itemSlider {
  constructor(options) {
    this.slider = options.el;
    this.list = this.slider.querySelector('ul');
    if (options.class) this.classList = options.class.split(" ");
    this.disabled = false;
    this.init();
    this.bindHandlers();
  }

  init() {
    if (this.classList && this.classList.length) this.slider.classList.add(...this.classList);
    this.slider.classList.add('slider_disable-left');

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider__container');
    sliderContainer.appendChild(this.list);

    this.slider.innerHTML = '<button class="slider__arrow slider__arrow_left"></button>' + '<button class="slider__arrow slider__arrow_right"></button>';

    this.slider.appendChild(sliderContainer);

    this.innerWidth = this.countInnerWidth();
    this.arrowLeft = this.slider.querySelector('.slider__arrow_left');
    this.arrowRight = this.slider.querySelector('.slider__arrow_right');
  }

  countInnerWidth() {
    return [...this.list.querySelectorAll('li')].reduce((sum, item) => {
      const style = window.getComputedStyle(item);
      const width = item.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      return sum + width;
    }, 0);
  }

  bindHandlers() {
    this.transformX = 0;
    this.arrowLeft.addEventListener('click', () => {
      this.transformX -= this.list.clientWidth;
      if (this.transformX < 0) this.transformX = 0;
      this.render();
    });

    this.arrowRight.addEventListener('click', () => {
      this.transformX = Math.min(this.transformX + this.list.clientWidth, this.list.scrollWidth - this.list.clientWidth);
      this.render();
    });

    window.addEventListener('resize', throttle(() => {
      this.onResize();
    }, 200));

    this.onResize();
  }

  onResize() {
    if (!this.disabled && this.innerWidth <= this.list.offsetWidth) {
      this.slider.classList.add('slider_disabled');
      this.disabled = true;
      if (this.transformX > 0) {
        this.transformX = 0;
        if (this.slider.classList.contains('slider_disable-right')) this.slider.classList.remove('slider_disable-right');
        this.render();
      }
    } else if (this.disabled && this.innerWidth > this.list.offsetWidth) {
      this.slider.classList.remove('slider_disabled');
      if (this.slider.classList.contains('slider_disable-right')) this.slider.classList.remove('slider_disable-right');
      this.disabled = false;
    }
  }

  render() {
    this.list.style.transform = this.transformX > 0 ? `translateX(${-this.transformX}px)` : 'translateX(0)';

    if (this.transformX === 0) {
      this.slider.classList.add('slider_disable-left');
    } else {
      this.slider.classList.remove('slider_disable-left');
    }

    if (this.transformX == this.list.scrollWidth - this.list.clientWidth) {
      this.slider.classList.add('slider_disable-right');
    } else {
      this.slider.classList.remove('slider_disable-right');
    }
  }
}

module.exports = itemSlider;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuanM/MDc5ZDIyNjQ4YzVkODhhM2ZlYjMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvaGVhZC9yZXNpemVPbmxvYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2hlYWQvcmVzaXplT25sb2FkL2lmcmFtZVJlc2l6ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9jbGllbnQvZG9tL2dldERvY3VtZW50SGVpZ2h0LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9kb20vZ2V0U2Nyb2xsYmFySGVpZ2h0LmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2NsaWVudC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2RlbGVnYXRlLmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2VuZ2luZS9wcmlzbS9tYWtlTGluZU51bWJlcnMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvZW5naW5lL2NvbnNvbGUvY29uc29sZUZvcm1hdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9lbmdpbmUva29hL3R1dG9yaWFsL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9lbmdpbmUvcHJpc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvZW5naW5lL3ByaXNtL2NvcmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzLWV4dHJhcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNsaWtlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWh0dHAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zY3NzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tc3FsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJhc2guanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvZW5naW5lL3ByaXNtL2NvZGVCb3guanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvY2xpZW50L2lzU2Nyb2xsZWRJbnRvVmlldy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9lbmdpbmUvcHJpc20vbWFrZUhpZ2hsaWdodC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wcmlzbS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vbW9kdWxlcy9lbmdpbmUvaTE4bi90LmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvYmFiZWxmaXNoL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS9ub2RlX21vZHVsZXMvYmFiZWxmaXNoL2xpYi9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL25vZGVfbW9kdWxlcy9wbHVyYWxzLWNsZHIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbW9kdWxlcy9lbmdpbmUvcHJpc20vbG9jYWxlcyBzeW5jIF5cXC5cXC8uKlxcLnltbCQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbW9kdWxlcy9lbmdpbmUvcHJpc20vbG9jYWxlcy9lbi55bWwiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvZW5naW5lL3ByaXNtL2NvZGVUYWJzQm94LmpzIiwid2VicGFjazovL1tuYW1lXS9tb2R1bGVzL2VuZ2luZS9wcmlzbS9wcm94eUNvbnNvbGVMb2cuanMiLCJ3ZWJwYWNrOi8vW25hbWVdL21vZHVsZXMvZW5naW5lL2tvYS90dXRvcmlhbC9jbGllbnQvaXRlbVNsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wYWNrL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDQpO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwibGV0IGlmcmFtZVJlc2l6ZSA9IHJlcXVpcmUoJy4vaWZyYW1lUmVzaXplJyk7XG5cbmxldCB0aHJvdHRsZSA9IHJlcXVpcmUoJ2xvZGFzaC90aHJvdHRsZScpO1xuLy8gdHJhY2sgcmVzaXplZCBpZnJhbWVzIGluIHdpbmRvdy5vbnJlc2l6ZVxuXG5sZXQgb25SZXNpemVRdWV1ZSA9IFtdO1xuXG5leHBvcnRzLmlmcmFtZSA9IGZ1bmN0aW9uKGlmcmFtZSkge1xuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICBpZnJhbWVSZXNpemUuYXN5bmMoaWZyYW1lLCBmdW5jdGlvbihlcnIsIGhlaWdodCkge1xuICAgICAgaWYgKGVycikgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgaWYgKGhlaWdodCkgaWZyYW1lLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgfSk7XG4gIH1cblxuICByZXNpemUoKTtcbn07XG5cbmV4cG9ydHMuY29kZVRhYnMgPSBmdW5jdGlvbihpZnJhbWUpIHtcbiAgZnVuY3Rpb24gaGlkZVNob3dBcnJvd3MoKSB7XG5cbiAgICAvLyBhZGQgYXJyb3dzIGlmIG5lZWRlZFxuICAgIGxldCBlbGVtID0gaWZyYW1lLmNsb3Nlc3QoJy5jb2RlLXRhYnMnKTtcbiAgICBsZXQgY29udGVudEVsZW0gPSBpZnJhbWUuY2xvc2VzdCgnW2RhdGEtY29kZS10YWJzLWNvbnRlbnRdJyk7XG4gICAgbGV0IHN3aXRjaGVzRWxlbSA9IGVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtY29kZS10YWJzLXN3aXRjaGVzXScpO1xuICAgIGxldCBzd2l0Y2hlc0VsZW1JdGVtcyA9IHN3aXRjaGVzRWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIGlmIChzd2l0Y2hlc0VsZW1JdGVtcy5vZmZzZXRXaWR0aCA+IHN3aXRjaGVzRWxlbS5vZmZzZXRXaWR0aCkge1xuICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdjb2RlLXRhYnNfc2Nyb2xsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnY29kZS10YWJzX3Njcm9sbCcpO1xuICAgIH1cblxuICB9XG5cbiAgaGlkZVNob3dBcnJvd3MoKTtcbiAgb25SZXNpemVRdWV1ZS5wdXNoKGhpZGVTaG93QXJyb3dzKTtcbn07XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gIG9uUmVzaXplUXVldWUuZm9yRWFjaChmdW5jdGlvbihvblJlc2l6ZSkge1xuICAgIG9uUmVzaXplKCk7XG4gIH0pO1xufSwgMjAwKSk7XG4iLCJsZXQgZ2V0RG9jdW1lbnRIZWlnaHQgPSByZXF1aXJlKCdjbGllbnQvZG9tL2dldERvY3VtZW50SGVpZ2h0Jyk7XG5cbmZ1bmN0aW9uIGlmcmFtZVJlc2l6ZShpZnJFbGVtLCBjYWxsYmFjaykge1xuXG5cbiAgbGV0IHRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gZGVmYXVsdCBoZWlnaHRcbiAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJ0aW1lb3V0XCIpKTtcbiAgfSwgNTAwKTtcblxuICBmdW5jdGlvbiBkb25lKGVyciwgaGVpZ2h0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcik7XG5cbiAgICBjYWxsYmFjayhlcnIsIGhlaWdodCk7XG4gIH1cblxuICAvLyB0aHJvdyByaWdodCBub3cgaWYgY3Jvc3MtZG9tYWluXG4gIHRyeSB7XG4gICAgLyoganNoaW50IC1XMDMwICovXG4gICAgKGlmckVsZW0uY29udGVudERvY3VtZW50IHx8IGlmckVsZW0uY29udGVudFdpbmRvdy5kb2N1bWVudCkuYm9keTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluKGlmckVsZW0sIGRvbmUpO1xuICB9XG5cblxuICAvLyBISU5UOiBJIHNob3VsbmQndCBtb3ZlIGlmcmFtZSBpbiBET00sIGJlY2F1c2UgaXQgd2lsbCByZWxvYWQgaXQncyBjb250ZW50cyB3aGVuIGFwcGVuZGVkL2luc2VydGVkIGFueXdoZXJlIVxuICAvLyBzbyBJIGNyZWF0ZSBhIGNsb25lIGFuZCB3b3JrIG9uIGl0XG4gIGlmICghaWZyRWxlbS5vZmZzZXRXaWR0aCkge1xuICAgIC8vIGNsb25lIGlmcmFtZSBhdCBhbm90aGVyIHBsYWNlIHRvIHNlZSB0aGUgc2l6ZVxuICAgIGxldCBjbG9uZUlmcmFtZSA9IGlmckVsZW0uY2xvbmVOb2RlKHRydWUpO1xuICAgIGNsb25lSWZyYW1lLm5hbWUgPSBcIlwiO1xuXG4gICAgY2xvbmVJZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICAgIGNsb25lSWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBjbG9uZUlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjbG9uZUlmcmFtZS5zdHlsZS50b3AgPSAnMTAwMDBweCc7XG5cbiAgICBjbG9uZUlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBoZWlnaHQgPSBnZXREb2N1bWVudEhlaWdodCh0aGlzLmNvbnRlbnREb2N1bWVudCk7XG4gICAgICBpZnJFbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY2xvbmVJZnJhbWUucmVtb3ZlKCk7XG4gICAgICBkb25lKG51bGwsIGhlaWdodCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2xvbmVJZnJhbWUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmckVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGlmckVsZW0uc3R5bGUuaGVpZ2h0ID0gJzFweCc7XG5cbiAgbGV0IGhlaWdodCA9IGdldERvY3VtZW50SGVpZ2h0KGlmckVsZW0uY29udGVudERvY3VtZW50KTtcblxuICBpZnJFbGVtLnN0eWxlLmhlaWdodCA9ICcnO1xuICBkb25lKG51bGwsIGhlaWdodCk7XG59XG5cbmlmcmFtZVJlc2l6ZS5hc3luYyA9IGZ1bmN0aW9uIGlmcmFtZVJlc2l6ZUFzeW5jKGlmcmFtZSwgY2FsbGJhY2spIHtcbiAgLy8gZGVsYXkgdG8gbGV0IHRoZSBjb2RlIGluc2lkZSB0aGUgaWZyYW1lIGZpbmlzaFxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGlmcmFtZVJlc2l6ZShpZnJhbWUsIGNhbGxiYWNrKTtcbiAgfSwgMCk7XG59O1xuXG5cbmZ1bmN0aW9uIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluKGlmckVsZW0sIGNhbGxiYWNrKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWZyYW1lUmVzaXplO1xuXG5cbi8qXG4gd2luZG93Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcbiBpZiAoZS5vcmlnaW4gIT0gXCJodHRwOi8vcnUubG9va2F0Y29kZS5jb21cIikgcmV0dXJuO1xuIGxldCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuIGlmICghZGF0YSB8fCBkYXRhLmNtZCAhPSBcInJlc2l6ZS1pZnJhbWVcIikgcmV0dXJuO1xuIGxldCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoZGF0YS5uYW1lKVswXTtcblxuIGVsZW0uc3R5bGUuaGVpZ2h0ID0gK2RhdGEuaGVpZ2h0ICsgMTAgKyBcInB4XCI7XG4gbGV0IGRlZmVycmVkID0gaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4uZGVmZXJyZWRzW2RhdGEuaWRdO1xuIGRlZmVycmVkLnJlc29sdmUoKTtcbiB9O1xuXG4gZnVuY3Rpb24gaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4oaWZyRWxlbSwgY2FsbGJhY2spIHtcblxuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gY2FsbGJhY2sobmV3IEVycm9yKFwidGltZW91dFwiKSk7XG4gfSwgNTAwKTtcblxuIHRyeSB7XG4gLy8gdHJ5IHRvIHNlZSBpZiByZXNpemVyIGNhbiB3b3JrIG9uIHRoaXMgaWZyYW1lXG4gaWZyRWxlbS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKFwidGVzdFwiLCBcImh0dHA6Ly9ydS5sb29rYXRjb2RlLmNvbVwiKTtcbiB9IGNhdGNoKGUpIHtcbiAvLyBpZnJhbWUgZnJvbSBhbm90aGVyIGRvbWFpbiwgc29ycnlcbiBjYWxsYmFjayhuZXcgRXJyb3IoXCJ0aGUgcmVzaXplciBtdXN0IGJlIGZyb20gcnUubG9va2F0Y29kZS5jb21cIikpO1xuIHJldHVybjtcbiB9XG5cbiBpZiAoIWlmckVsZW0ub2Zmc2V0V2lkdGgpIHtcbiAvLyBtb3ZlIGlmcmFtZSB0byBhbm90aGVyIHBsYWNlIHRvIHJlc2l6ZSB0aGVyZVxuIGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiBpZnJFbGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyLCBpZnJFbGVtKTtcbiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmckVsZW0pO1xuIH1cblxuIGlmckVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuIGxldCBpZCA9IFwiXCIgKyBNYXRoLnJhbmRvbSgpO1xuIGxldCBtZXNzYWdlID0geyBjbWQ6ICdyZXNpemUtaWZyYW1lJywgbmFtZTogaWZyRWxlbVswXS5uYW1lLCBpZDogaWQgfTtcbiAvLyBUT0RPXG4gaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4uZGVmZXJyZWRzW2lkXSA9IGRlZmVycmVkO1xuIGRlZmVycmVkLmFsd2F5cyhmdW5jdGlvbigpIHtcbiBkZWxldGUgaWZyYW1lUmVzaXplQ3Jvc3NEb21haW4uZGVmZXJyZWRzW2lkXTtcbiB9KTtcblxuIGxldCBmcmFtZSA9IGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluLmlmcmFtZTtcbiBpZiAoZnJhbWUubG9hZGVkKSB7XG4gZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSwgXCJodHRwOi8vcnUubG9va2F0Y29kZS5jb21cIik7XG4gfSBlbHNlIHtcbiBmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuIGZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSksIFwiaHR0cDovL3J1Lmxvb2thdGNvZGUuY29tXCIpO1xuIH0pO1xuIH1cblxuIGlmIChwbGFjZWhvbGRlcikge1xuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gcGxhY2Vob2xkZXIucmVwbGFjZVdpdGgoaWZyRWxlbSk7XG4gfSwgMjApO1xuIH1cblxuIHJldHVybiBkZWZlcnJlZDtcbiB9XG5cbiBpZnJhbWVSZXNpemVDcm9zc0RvbWFpbi5kZWZlcnJlZHMgPSB7fTtcbiBpZnJhbWVSZXNpemVDcm9zc0RvbWFpbi5pZnJhbWUgPSAkKCc8aWZyYW1lIHNyYz1cImh0dHA6Ly9ydS5sb29rYXRjb2RlLmNvbS9maWxlcy9pZnJhbWUtcmVzaXplLmh0bWxcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPjwvaWZyYW1lPicpLnByZXBlbmRUbygnYm9keScpO1xuIGlmcmFtZVJlc2l6ZUNyb3NzRG9tYWluLmlmcmFtZS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xuIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiB9KTtcbiAqL1xuIiwibGV0IGdldFNjcm9sbGJhckhlaWdodCA9IHJlcXVpcmUoJy4vZ2V0U2Nyb2xsYmFySGVpZ2h0Jyk7XG5sZXQgc2Nyb2xsYmFySGVpZ2h0O1xuXG5mdW5jdGlvbiBnZXREb2N1bWVudEhlaWdodChkb2MpIHtcbiAgZG9jID0gZG9jIHx8IGRvY3VtZW50O1xuXG4gIGxldCBoZWlnaHQgPSBNYXRoLm1heChcbiAgICBkb2MuYm9keS5zY3JvbGxIZWlnaHQsIGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgIGRvYy5ib2R5Lm9mZnNldEhlaWdodCwgZG9jLmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgZG9jLmJvZHkuY2xpZW50SGVpZ2h0LCBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICApO1xuXG4gIGlmIChkb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFdpZHRoID4gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkge1xuICAgIC8vIGdvdCBhIGhvcml6IHNjcm9sbCwgbGV0J3MgYWRkIGl0XG4gICAgaWYgKCFzY3JvbGxiYXJIZWlnaHQpIHNjcm9sbGJhckhlaWdodCA9IGdldFNjcm9sbGJhckhlaWdodCgpO1xuICAgIGhlaWdodCArPSBzY3JvbGxiYXJIZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERvY3VtZW50SGVpZ2h0O1xuXG4iLCJmdW5jdGlvbiBnZXRTY3JvbGxiYXJIZWlnaHQoKSB7XG4gIGxldCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG91dGVyLnN0eWxlLmNzc1RleHQgPSBcInZpc2liaWxpdHk6aGlkZGVuO2hlaWdodDoxMDBweFwiO1xuICBpZiAoIWRvY3VtZW50LmJvZHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRTY3JvbGxiYXJIZWlnaHQgY2FsbGVkIHRvIGVhcmx5OiBubyBkb2N1bWVudC5ib2R5XCIpO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuXG4gIGxldCB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XG4gIC8vIGZvcmNlIHNjcm9sbGJhcnNcbiAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xuXG4gIC8vIGFkZCBpbm5lcmRpdlxuICBsZXQgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgbGV0IHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gIC8vIHJlbW92ZSBkaXZzXG4gIG91dGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gIHJldHVybiB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFNjcm9sbGJhckhlaWdodDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgdGltZVdhaXRpbmcgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nXG4gICAgICA/IG5hdGl2ZU1pbih0aW1lV2FpdGluZywgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpXG4gICAgICA6IHRpbWVXYWl0aW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIHRyaW1tZWRFbmRJbmRleCA9IHJlcXVpcmUoJy4vX3RyaW1tZWRFbmRJbmRleCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRyaW1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVHJpbShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1xuICAgID8gc3RyaW5nLnNsaWNlKDAsIHRyaW1tZWRFbmRJbmRleChzdHJpbmcpICsgMSkucmVwbGFjZShyZVRyaW1TdGFydCwgJycpXG4gICAgOiBzdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRyaW07XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxhbmc6IExBTkcsXG4gIGxvb2thdENvZGVVcmxCYXNlOiBcImh0dHBzOi8vbG9va2F0Y29kZS5jb21cIlxufTtcbiIsIlxuZnVuY3Rpb24gZmluZERlbGVnYXRlVGFyZ2V0KGV2ZW50LCBzZWxlY3Rvcikge1xuICBsZXQgY3VycmVudE5vZGUgPSBldmVudC50YXJnZXQ7XG4gIHdoaWxlIChjdXJyZW50Tm9kZSkge1xuICAgIGlmIChjdXJyZW50Tm9kZS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50Tm9kZSA9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBkZWxlZ2F0ZSh0YWJsZSwgJ3RoJywgY2xpY2ssIGhhbmRsZXIpXG4vLyB0YWJsZVxuLy8gICB0aGVhZFxuLy8gICAgIHRoICAgICAgICAgXipcbi8vICAgICAgIGNvZGUgIDwtLVxuZnVuY3Rpb24gZGVsZWdhdGUodG9wRWxlbWVudCwgc2VsZWN0b3IsIGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAvKiBqc2hpbnQgLVcwNDAgKi9cbiAgdG9wRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsZXQgZm91bmQgPSBmaW5kRGVsZWdhdGVUYXJnZXQoZXZlbnQsIHNlbGVjdG9yKTtcblxuICAgIC8vIC5jdXJyZW50VGFyZ2V0IGlzIHJlYWQgb25seSwgSSBjYW4gbm90IG92ZXJ3cml0ZSBpdCB0byB0aGUgXCJmb3VuZFwiIGVsZW1lbnRcbiAgICAvLyBPYmplY3QuY3JlYXRlIHdyYXBwZXIgd291bGQgYnJlYWsgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIC8vIHNvLCBrZWVwIGluIG1pbmQ6XG4gICAgLy8gLS0+IGV2ZW50LmN1cnJlbnRUYXJnZXQgaXMgYWx3YXlzIHRoZSB0b3AtbGV2ZWwgKGRlbGVnYXRpbmcpIGVsZW1lbnQhXG4gICAgLy8gdXNlIFwidGhpc1wiIHRvIGdldCB0aGUgZm91bmQgdGFyZ2V0XG5cbiAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IGZvdW5kOyAvLyB1c2UgaW5zdGVhZCBvZiBcInRoaXNcIiBpbiBvYmplY3QgbWV0aG9kc1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICAvLyBpZiBpbiBjb250ZXh0IG9mIG9iamVjdCwgdXNlIG9iamVjdCBhcyB0aGlzLFxuICAgICAgaGFuZGxlci5jYWxsKGNvbnRleHQgfHwgdGhpcywgZXZlbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmRlbGVnYXRlLmRlbGVnYXRlTWl4aW4gPSBmdW5jdGlvbihvYmopIHtcbiAgb2JqLmRlbGVnYXRlID0gZnVuY3Rpb24oc2VsZWN0b3IsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIGRlbGVnYXRlKHRoaXMuZWxlbSwgc2VsZWN0b3IsIGV2ZW50TmFtZSwgaGFuZGxlciwgdGhpcyk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlO1xuXG4iLCJcbi8vIGNvbnN0IGVzY2FwZUh0bWwgPSByZXF1aXJlKCdlc2NhcGUtaHRtbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1ha2VMaW5lTnVtYmVycyhodG1sKSB7XG5cbiAgbGV0IGxpbmVzTnVtID0gKDEgKyBodG1sLnNwbGl0KCdcXG4nKS5sZW5ndGgpO1xuICBsZXQgbGluZU51bWJlcnNXcmFwcGVyO1xuXG4gIGxldCBsaW5lcyA9IG5ldyBBcnJheShsaW5lc051bSk7XG4gIGxpbmVzID0gbGluZXMuam9pbignPHNwYW4+PC9zcGFuPicpO1xuXG4gIGxpbmVOdW1iZXJzV3JhcHBlciA9IGA8c3BhbiBjbGFzcz1cImxpbmUtbnVtYmVycy1yb3dzXCI+JHtsaW5lc308L3NwYW4+YDtcblxuICByZXR1cm4gbGluZU51bWJlcnNXcmFwcGVyO1xufTtcbiIsIi8qIGNhbiBiZSByZXF1aXJlZCBkaXJlY3RseSBmcm9tIG90aGVyIGNsaWVudC1zaWRlIGNvZGUgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcmdzKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGFyZ3MpLm1hcChmb3JtYXQpLmpvaW4oJywgJyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwgZGVwdGggPSAwKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gJ251bGwnO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmb3JtYXRGdW5jdGlvbih2YWx1ZSwgZGVwdGgpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZvcm1hdEFycmF5KHZhbHVlLCBkZXB0aCk7XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0Jykge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIHJldHVybiBmb3JtYXQodmFsdWUub3V0ZXJIVE1MLCBkZXB0aCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXZlbnQpIHtcbiAgICAgIGxldCBjb3B5UHJvcHMgPSBbU3ltYm9sLnRvU3RyaW5nVGFnLCAndHlwZScsICdjbGllbnRYJywgJ2NsaWVudFknLCAna2V5JywgJ2NvZGUnXTtcbiAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgIGZvcihsZXQgcHJvcCBvZiBjb3B5UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3AgaW4gdmFsdWUpIHtcbiAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdChvYmosIGRlcHRoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZvcm1hdE9iamVjdCh2YWx1ZSwgZGVwdGgpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmb3JtYXRTdHJpbmcodmFsdWUsIGRlcHRoKTtcbiAgfVxuXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEZ1bmN0aW9uKGYsIGRlcHRoID0gMCkge1xuICBpZiAoZGVwdGgpIHtcbiAgICByZXR1cm4gJ2Z1bmN0aW9uICcgKyBmLm5hbWU7XG4gIH1cblxuICBmID0gZi50b1N0cmluZygpO1xuICBmID0gZi5zcGxpdCgnXFxuJyk7XG4gIGlmIChmLmxlbmd0aCA+IDEwKSB7XG4gICAgZiA9IGYuc2xpY2UoMCwgMTApLmpvaW4oJ1xcbicpICsgJ1xcbi4uLic7XG4gIH1cbiAgcmV0dXJuIGY7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KHZhbHVlLCBkZXB0aCA9IDApIHtcbiAgaWYgKGRlcHRoID4gMikgcmV0dXJuICdbLi4uXSc7XG5cbiAgbGV0IGxpbWl0ID0gZGVwdGggPT0gMSA/IDMgOiAxMDtcblxuICBpZiAodmFsdWUubGVuZ3RoID4gbGltaXQpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB2YWx1ZS5wdXNoKCcuLi4nKTtcbiAgfVxuXG4gIHJldHVybiAnWycgKyB2YWx1ZS5tYXAodiA9PiBmb3JtYXQodiwgZGVwdGggKyAxKSkuam9pbignLCAnKSArICddJztcbn1cblxuZnVuY3Rpb24gZm9ybWF0U3RyaW5nKHZhbHVlLCBkZXB0aCA9IDApIHtcbiAgbGV0IGxpbWl0ID0gZGVwdGggPT0gMSA/IDIwIDogNjA7XG5cbiAgaWYgKHZhbHVlLmxlbmd0aCA+IGxpbWl0KSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5saW1pdCAtIDEpICsgJ+KApic7XG4gIH1cblxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAvLyB3YXM6IGBcIiR7dmFsdWV9XCJgO1xuICAvLyBidXQgdGhpcyBkb2Vzbid0IGV4Y2FwZSBzcGVjaWFsIGNoYXJzLCBzdWNoIGFzIFxcblxufVxuXG5mdW5jdGlvbiBmb3JtYXRPYmplY3QodmFsdWUsIGRlcHRoID0gMCkge1xuICBsZXQgbmFtZSA9IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgaWYgKG5hbWUgPT0gJ09iamVjdCcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSkge1xuICAgIG5hbWUgPSB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddO1xuICB9XG5cbiAgaWYgKG5hbWUgIT0gJ09iamVjdCcgJiYgdmFsdWUudG9TdHJpbmcgIT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9ICcnO1xuXG4gIGlmIChuYW1lICE9ICdPYmplY3QnKSB7XG4gICAgcmVzdWx0ICs9IG5hbWUgKyAnICc7XG4gIH1cblxuICByZXN1bHQgKz0gJ3snO1xuXG4gIGlmIChkZXB0aCA+IDEpIHtcbiAgICByZXN1bHQgKz0gJy4uLic7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGl0ZW1zID0gW107XG4gICAgZm9yKGxldCBwcm9wIGluIHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcbiAgICAgIGl0ZW1zLnB1c2goYCR7cHJvcH06ICR7Zm9ybWF0KHZhbHVlW3Byb3BdLCBkZXB0aCArIDEpfWApO1xuICAgIH1cbiAgICByZXN1bHQgKz0gaXRlbXMuam9pbignLCAnKTtcbiAgfVxuXG4gIHJlc3VsdCArPSAnfSc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJjb25zdCBkZWxlZ2F0ZSA9IHJlcXVpcmUoJ2NsaWVudC9kZWxlZ2F0ZScpO1xuY29uc3QgcHJpc20gPSByZXF1aXJlKCdlbmdpbmUvcHJpc20nKTtcbmNvbnN0IEl0ZW1TbGlkZXIgPSByZXF1aXJlKCcuL2l0ZW1TbGlkZXInKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblxuICBpbml0VGFza0J1dHRvbnMoKTtcbiAgaW5pdEZvbGRlckxpc3QoKTtcbiAgaW5pdFZpZXdNb3JlQnV0dG9uKCk7XG4gIGluaXRDb3Vyc2VzU2xpZGVyKCk7XG5cbiAgcHJpc20uaW5pdCgpO1xufVxuXG5mdW5jdGlvbiBpbml0VGFza0J1dHRvbnMoKSB7XG4gIC8vIHNvbHV0aW9uIGJ1dHRvblxuICBkZWxlZ2F0ZShkb2N1bWVudCwgJy50YXNrX19zb2x1dGlvbicsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykuY2xhc3NMaXN0LnRvZ2dsZSgndGFza19hbnN3ZXJfb3BlbicpO1xuICB9KTtcblxuICAvLyBjbG9zZSBzb2x1dGlvbiBidXR0b25cbiAgZGVsZWdhdGUoZG9jdW1lbnQsICcudGFza19fYW5zd2VyLWNsb3NlJywgJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrX2Fuc3dlcl9vcGVuJyk7XG4gIH0pO1xuXG4gIC8vIGV2ZXJ5IHN0ZXAgYnV0dG9uIChpZiBhbnkgc3RlcHMpXG4gIGRlbGVnYXRlKGRvY3VtZW50LCAnLnRhc2tfX3N0ZXAtc2hvdycsICdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrX19zdGVwJykuY2xhc3NMaXN0LnRvZ2dsZSgndGFza19zdGVwX29wZW4nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRWaWV3TW9yZUJ1dHRvbigpIHtcbiAgZGVsZWdhdGUoZG9jdW1lbnQsICdhLmxpc3Qtc3ViX19tb3JlJywgJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBmb3IgKGxldCBpdGVtIG9mIHRhcmdldC5jbG9zZXN0KCcubGlzdC1zdWInKS5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1zdWJfX2l0ZW1fcGhvbmVfaGlkZGVuJykpIHtcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnbGlzdC1zdWJfX2l0ZW1fcGhvbmVfaGlkZGVuJyk7XG4gICAgfVxuICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KVxufVxuXG5mdW5jdGlvbiBpbml0Rm9sZGVyTGlzdCgpIHtcbiAgZGVsZWdhdGUoZG9jdW1lbnQsICcubGVzc29ucy1saXN0X19sZXNzb25fbGV2ZWxfMSA+IC5sZXNzb25zLWxpc3RfX2xpbmsnLCAnY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGxldCBsaW5rID0gZXZlbnQuZGVsZWdhdGVUYXJnZXQ7XG4gICAgbGV0IG9wZW5Gb2xkZXIgPSBsaW5rLmNsb3Nlc3QoJy5sZXNzb25zLWxpc3QnKS5xdWVyeVNlbGVjdG9yKCcubGVzc29ucy1saXN0X19sZXNzb25fb3BlbicpO1xuICAgIC8vIGNsb3NlIHRoZSBwcmV2aW91cyBvcGVuIGZvbGRlciAodGh1cyBtYWtpbmcgYW4gYWNjb3JkaW9uKVxuICAgIGlmIChvcGVuRm9sZGVyICYmIG9wZW5Gb2xkZXIgIT09IGxpbmsucGFyZW50Tm9kZSkge1xuICAgICAgb3BlbkZvbGRlci5jbGFzc0xpc3QucmVtb3ZlKCdsZXNzb25zLWxpc3RfX2xlc3Nvbl9vcGVuJyk7XG4gICAgfVxuICAgIGxpbmsucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdsZXNzb25zLWxpc3RfX2xlc3Nvbl9vcGVuJyk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRDb3Vyc2VzU2xpZGVyKCkge1xuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb3Vyc2VzLXNsaWRlcl0nKTtcbiAgaWYgKHNsaWRlcikgbmV3IEl0ZW1TbGlkZXIoe2VsOiBzbGlkZXIsIGNsYXNzOiAnc2xpZGVyX2Zyb250cGFnZSd9KTtcbn1cblxud2luZG93LnJ1bkRlbW8gPSBmdW5jdGlvbihidXR0b24pIHtcblxuICBsZXQgZGVtb0VsZW07XG4gIGxldCBwYXJlbnQgPSBidXR0b247XG5cbiAgLyoganNoaW50IC1XMDg0ICovXG4gIHdoaWxlIChwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudCkge1xuICAgIGRlbW9FbGVtID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRlbW9dJyk7XG4gICAgaWYgKGRlbW9FbGVtKSBicmVhaztcbiAgfVxuXG4gIGlmICghZGVtb0VsZW0pIHtcbiAgICBhbGVydChcIkVycm9yLCBubyBkZW1vIGVsZW1lbnRcIik7XG4gIH0gZWxzZSB7XG4gICAgLyoganNoaW50IC1XMDYxICovXG4gICAgZXZhbChkZW1vRWxlbS50ZXh0Q29udGVudCk7XG4gIH1cblxufTtcblxuaW5pdCgpO1xuIiwiLy8gcHJpc20gcmVxdWlyZXMgZGF0YS1tYW51YWwgYXR0cmlidXRlIG9uIHRoZSBjdXJyZW50IHNjcmlwdCBOT1QgdG8gaGlnaGxpZ2h0QWxsIGF1dG9tYXRpY2FsbHlcbmxldCBzY3JpcHQgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0IHx8IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIikpLnBvcCgpO1xuc2NyaXB0LnNldEF0dHJpYnV0ZSgnZGF0YS1tYW51YWwnLCAxKTtcblxucmVxdWlyZSgnLi9jb3JlJyk7XG5cbmxldCBDb2RlQm94ID0gcmVxdWlyZSgnLi9jb2RlQm94Jyk7XG5sZXQgQ29kZVRhYnNCb3ggPSByZXF1aXJlKCcuL2NvZGVUYWJzQm94Jyk7XG5sZXQgcHJveHlDb25zb2xlTG9nID0gcmVxdWlyZSgnLi9wcm94eUNvbnNvbGVMb2cnKTtcblxuZnVuY3Rpb24gaW5pdENvZGVCb3hlcyhjb250YWluZXIpIHtcbiAgLy8gaGlnaGxpZ2h0IGlubGluZVxuICBsZXQgZWxlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmNvZGUtZXhhbXBsZTpub3QoW2RhdGEtcHJpc20taGlnaGxpZ2h0ZWRdKScpO1xuXG4gIGZvciAobGV0IGVsZW0gb2YgZWxlbXMpIHtcbiAgICBuZXcgQ29kZUJveChlbGVtKTtcbiAgICBlbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmlzbS1oaWdobGlnaHRlZCcsICcxJyk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBpbml0Q29kZVRhYnNCb3goY29udGFpbmVyKSB7XG5cbiAgbGV0IGVsZW1zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jb2RlLXRhYnM6bm90KFtkYXRhLXByaXNtLWhpZ2hsaWdodGVkXSknKTtcblxuICBmb3IgKGxldCBlbGVtIG9mIGVsZW1zKSB7XG4gICAgbmV3IENvZGVUYWJzQm94KGVsZW0pO1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLXByaXNtLWhpZ2hsaWdodGVkJywgJzEnKTtcbiAgfVxuXG59XG5cbmV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIFByaXNtLmhpZ2hsaWdodEFsbCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGhpZ2hsaWdodChkb2N1bWVudCk7XG4gIH0pO1xuXG4gIHByb3h5Q29uc29sZUxvZygpO1xufTtcblxuXG5mdW5jdGlvbiBoaWdobGlnaHQoZWxlbSkge1xuICBpbml0Q29kZUJveGVzKGVsZW0pO1xuICBpbml0Q29kZVRhYnNCb3goZWxlbSk7XG59XG5cbmV4cG9ydHMuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuIiwiXG4vLyBpbiBub2RlLmpzOlxuLy8gZ2xvYmFsLlByaXNtID0gUHJpc207XG5yZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY29yZS5qcycpO1xuXG5yZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwLmpzJyk7XG5yZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzLmpzJyk7XG5yZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY3NzLWV4dHJhcy5qcycpO1xucmVxdWlyZSgncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNsaWtlLmpzJyk7XG5yZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdC5qcycpO1xucmVxdWlyZSgncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWh0dHAuanMnKTtcbnJlcXVpcmUoJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zY3NzLmpzJyk7XG5yZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tc3FsLmpzJyk7XG5yZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YS5qcycpO1xucmVxdWlyZSgncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJhc2guanMnKTtcblxuLy8gZm9yIGlCb29rcyB0byB1c2UgbW9ub3NwYWNlIGZvbnRcblByaXNtLmhvb2tzLmFkZCgnd3JhcCcsIGZ1bmN0aW9uKGVudikge1xuICBpZiAoZW52LnRhZyA9PT0gJ3NwYW4nKSB7XG4gICAgZW52LnRhZyA9ICdjb2RlJztcbiAgfVxufSk7XG4iLCIvLy8gPHJlZmVyZW5jZSBsaWI9XCJXZWJXb3JrZXJcIi8+XG5cbnZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHRcdD8gc2VsZiAvLyBpZiBpbiB3b3JrZXJcblx0XHRcdDoge30gICAvLyBpZiBpbiBub2RlIGpzXG5cdCk7XG5cbi8qKlxuICogUHJpc206IExpZ2h0d2VpZ2h0LCByb2J1c3QsIGVsZWdhbnQgc3ludGF4IGhpZ2hsaWdodGluZ1xuICpcbiAqIEBsaWNlbnNlIE1JVCA8aHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQ+XG4gKiBAYXV0aG9yIExlYSBWZXJvdSA8aHR0cHM6Ly9sZWEudmVyb3UubWU+XG4gKiBAbmFtZXNwYWNlXG4gKiBAcHVibGljXG4gKi9cbnZhciBQcmlzbSA9IChmdW5jdGlvbiAoX3NlbGYpIHtcblxuXHQvLyBQcml2YXRlIGhlbHBlciB2YXJzXG5cdHZhciBsYW5nID0gLyg/Ol58XFxzKWxhbmcoPzp1YWdlKT8tKFtcXHctXSspKD89XFxzfCQpL2k7XG5cdHZhciB1bmlxdWVJZCA9IDA7XG5cblx0Ly8gVGhlIGdyYW1tYXIgb2JqZWN0IGZvciBwbGFpbnRleHRcblx0dmFyIHBsYWluVGV4dEdyYW1tYXIgPSB7fTtcblxuXG5cdHZhciBfID0ge1xuXHRcdC8qKlxuXHRcdCAqIEJ5IGRlZmF1bHQsIFByaXNtIHdpbGwgYXR0ZW1wdCB0byBoaWdobGlnaHQgYWxsIGNvZGUgZWxlbWVudHMgKGJ5IGNhbGxpbmcge0BsaW5rIFByaXNtLmhpZ2hsaWdodEFsbH0pIG9uIHRoZVxuXHRcdCAqIGN1cnJlbnQgcGFnZSBhZnRlciB0aGUgcGFnZSBmaW5pc2hlZCBsb2FkaW5nLiBUaGlzIG1pZ2h0IGJlIGEgcHJvYmxlbSBpZiBlLmcuIHlvdSB3YW50ZWQgdG8gYXN5bmNocm9ub3VzbHkgbG9hZFxuXHRcdCAqIGFkZGl0aW9uYWwgbGFuZ3VhZ2VzIG9yIHBsdWdpbnMgeW91cnNlbGYuXG5cdFx0ICpcblx0XHQgKiBCeSBzZXR0aW5nIHRoaXMgdmFsdWUgdG8gYHRydWVgLCBQcmlzbSB3aWxsIG5vdCBhdXRvbWF0aWNhbGx5IGhpZ2hsaWdodCBhbGwgY29kZSBlbGVtZW50cyBvbiB0aGUgcGFnZS5cblx0XHQgKlxuXHRcdCAqIFlvdSBvYnZpb3VzbHkgaGF2ZSB0byBjaGFuZ2UgdGhpcyB2YWx1ZSBiZWZvcmUgdGhlIGF1dG9tYXRpYyBoaWdobGlnaHRpbmcgc3RhcnRlZC4gVG8gZG8gdGhpcywgeW91IGNhbiBhZGQgYW5cblx0XHQgKiBlbXB0eSBQcmlzbSBvYmplY3QgaW50byB0aGUgZ2xvYmFsIHNjb3BlIGJlZm9yZSBsb2FkaW5nIHRoZSBQcmlzbSBzY3JpcHQgbGlrZSB0aGlzOlxuXHRcdCAqXG5cdFx0ICogYGBganNcblx0XHQgKiB3aW5kb3cuUHJpc20gPSB3aW5kb3cuUHJpc20gfHwge307XG5cdFx0ICogUHJpc20ubWFudWFsID0gdHJ1ZTtcblx0XHQgKiAvLyBhZGQgYSBuZXcgPHNjcmlwdD4gdG8gbG9hZCBQcmlzbSdzIHNjcmlwdFxuXHRcdCAqIGBgYFxuXHRcdCAqXG5cdFx0ICogQGRlZmF1bHQgZmFsc2Vcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0bWFudWFsOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5tYW51YWwsXG5cdFx0LyoqXG5cdFx0ICogQnkgZGVmYXVsdCwgaWYgUHJpc20gaXMgaW4gYSB3ZWIgd29ya2VyLCBpdCBhc3N1bWVzIHRoYXQgaXQgaXMgaW4gYSB3b3JrZXIgaXQgY3JlYXRlZCBpdHNlbGYsIHNvIGl0IHVzZXNcblx0XHQgKiBgYWRkRXZlbnRMaXN0ZW5lcmAgdG8gY29tbXVuaWNhdGUgd2l0aCBpdHMgcGFyZW50IGluc3RhbmNlLiBIb3dldmVyLCBpZiB5b3UncmUgdXNpbmcgUHJpc20gbWFudWFsbHkgaW4geW91clxuXHRcdCAqIG93biB3b3JrZXIsIHlvdSBkb24ndCB3YW50IGl0IHRvIGRvIHRoaXMuXG5cdFx0ICpcblx0XHQgKiBCeSBzZXR0aW5nIHRoaXMgdmFsdWUgdG8gYHRydWVgLCBQcmlzbSB3aWxsIG5vdCBhZGQgaXRzIG93biBsaXN0ZW5lcnMgdG8gdGhlIHdvcmtlci5cblx0XHQgKlxuXHRcdCAqIFlvdSBvYnZpb3VzbHkgaGF2ZSB0byBjaGFuZ2UgdGhpcyB2YWx1ZSBiZWZvcmUgUHJpc20gZXhlY3V0ZXMuIFRvIGRvIHRoaXMsIHlvdSBjYW4gYWRkIGFuXG5cdFx0ICogZW1wdHkgUHJpc20gb2JqZWN0IGludG8gdGhlIGdsb2JhbCBzY29wZSBiZWZvcmUgbG9hZGluZyB0aGUgUHJpc20gc2NyaXB0IGxpa2UgdGhpczpcblx0XHQgKlxuXHRcdCAqIGBgYGpzXG5cdFx0ICogd2luZG93LlByaXNtID0gd2luZG93LlByaXNtIHx8IHt9O1xuXHRcdCAqIFByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlciA9IHRydWU7XG5cdFx0ICogLy8gTG9hZCBQcmlzbSdzIHNjcmlwdFxuXHRcdCAqIGBgYFxuXHRcdCAqXG5cdFx0ICogQGRlZmF1bHQgZmFsc2Vcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cblx0XHQvKipcblx0XHQgKiBBIG5hbWVzcGFjZSBmb3IgdXRpbGl0eSBtZXRob2RzLlxuXHRcdCAqXG5cdFx0ICogQWxsIGZ1bmN0aW9uIGluIHRoaXMgbmFtZXNwYWNlIHRoYXQgYXJlIG5vdCBleHBsaWNpdGx5IG1hcmtlZCBhcyBfcHVibGljXyBhcmUgZm9yIF9faW50ZXJuYWwgdXNlIG9ubHlfXyBhbmQgbWF5XG5cdFx0ICogY2hhbmdlIG9yIGRpc2FwcGVhciBhdCBhbnkgdGltZS5cblx0XHQgKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKi9cblx0XHR1dGlsOiB7XG5cdFx0XHRlbmNvZGU6IGZ1bmN0aW9uIGVuY29kZSh0b2tlbnMpIHtcblx0XHRcdFx0aWYgKHRva2VucyBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBUb2tlbih0b2tlbnMudHlwZSwgZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRva2VucykpIHtcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zLm1hcChlbmNvZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0b2tlbnMucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvXFx1MDBhMC9nLCAnICcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIHR5cGUgb2YgdGhlIGdpdmVuIHZhbHVlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7YW55fSBvXG5cdFx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIHR5cGUobnVsbCkgICAgICA9PT0gJ051bGwnXG5cdFx0XHQgKiB0eXBlKHVuZGVmaW5lZCkgPT09ICdVbmRlZmluZWQnXG5cdFx0XHQgKiB0eXBlKDEyMykgICAgICAgPT09ICdOdW1iZXInXG5cdFx0XHQgKiB0eXBlKCdmb28nKSAgICAgPT09ICdTdHJpbmcnXG5cdFx0XHQgKiB0eXBlKHRydWUpICAgICAgPT09ICdCb29sZWFuJ1xuXHRcdFx0ICogdHlwZShbMSwgMl0pICAgID09PSAnQXJyYXknXG5cdFx0XHQgKiB0eXBlKHt9KSAgICAgICAgPT09ICdPYmplY3QnXG5cdFx0XHQgKiB0eXBlKFN0cmluZykgICAgPT09ICdGdW5jdGlvbidcblx0XHRcdCAqIHR5cGUoL2FiYysvKSAgICA9PT0gJ1JlZ0V4cCdcblx0XHRcdCAqL1xuXHRcdFx0dHlwZTogZnVuY3Rpb24gKG8pIHtcblx0XHRcdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgYSB1bmlxdWUgbnVtYmVyIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LiBMYXRlciBjYWxscyB3aWxsIHN0aWxsIHJldHVybiB0aGUgc2FtZSBudW1iZXIuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3R9IG9ialxuXHRcdFx0ICogQHJldHVybnMge251bWJlcn1cblx0XHRcdCAqL1xuXHRcdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX2lkJywgeyB2YWx1ZTogKyt1bmlxdWVJZCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNsb25lIG9mIHRoZSBnaXZlbiBvYmplY3QuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIG1haW4gaW50ZW5kZWQgdXNlIG9mIHRoaXMgZnVuY3Rpb24gaXMgdG8gY2xvbmUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtUfSBvXG5cdFx0XHQgKiBAcGFyYW0ge1JlY29yZDxudW1iZXIsIGFueT59IFt2aXNpdGVkXVxuXHRcdFx0ICogQHJldHVybnMge1R9XG5cdFx0XHQgKiBAdGVtcGxhdGUgVFxuXHRcdFx0ICovXG5cdFx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdFx0dmFyIGNsb25lOyB2YXIgaWQ7XG5cdFx0XHRcdHN3aXRjaCAoXy51dGlsLnR5cGUobykpIHtcblx0XHRcdFx0XHRjYXNlICdPYmplY3QnOlxuXHRcdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2xvbmUgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIGFueT59ICovICh7fSk7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gbykge1xuXHRcdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGNsb25lKTtcblxuXHRcdFx0XHRcdGNhc2UgJ0FycmF5Jzpcblx0XHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0XHQoLyoqIEB0eXBlIHtBcnJheX0gKi8oLyoqIEB0eXBlIHthbnl9ICovKG8pKSkuZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuXHRcdFx0XHRcdFx0XHRjbG9uZVtpXSA9IGRlZXBDbG9uZSh2LCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChjbG9uZSk7XG5cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgUHJpc20gbGFuZ3VhZ2Ugb2YgdGhlIGdpdmVuIGVsZW1lbnQgc2V0IGJ5IGEgYGxhbmd1YWdlLXh4eHhgIG9yIGBsYW5nLXh4eHhgIGNsYXNzLlxuXHRcdFx0ICpcblx0XHRcdCAqIElmIG5vIGxhbmd1YWdlIGlzIHNldCBmb3IgdGhlIGVsZW1lbnQgb3IgdGhlIGVsZW1lbnQgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBgbm9uZWAgd2lsbCBiZSByZXR1cm5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0XHQgKi9cblx0XHRcdGdldExhbmd1YWdlOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdFx0XHRcdHZhciBtID0gbGFuZy5leGVjKGVsZW1lbnQuY2xhc3NOYW1lKTtcblx0XHRcdFx0XHRpZiAobSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1bMV0udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJ25vbmUnO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTZXRzIHRoZSBQcmlzbSBgbGFuZ3VhZ2UteHh4eGAgY2xhc3Mgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2Vcblx0XHRcdCAqIEByZXR1cm5zIHt2b2lkfVxuXHRcdFx0ICovXG5cdFx0XHRzZXRMYW5ndWFnZTogZnVuY3Rpb24gKGVsZW1lbnQsIGxhbmd1YWdlKSB7XG5cdFx0XHRcdC8vIHJlbW92ZSBhbGwgYGxhbmd1YWdlLXh4eHhgIGNsYXNzZXNcblx0XHRcdFx0Ly8gKHRoaXMgbWlnaHQgbGVhdmUgYmVoaW5kIGEgbGVhZGluZyBzcGFjZSlcblx0XHRcdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFJlZ0V4cChsYW5nLCAnZ2knKSwgJycpO1xuXG5cdFx0XHRcdC8vIGFkZCB0aGUgbmV3IGBsYW5ndWFnZS14eHh4YCBjbGFzc1xuXHRcdFx0XHQvLyAodXNpbmcgYGNsYXNzTGlzdGAgd2lsbCBhdXRvbWF0aWNhbGx5IGNsZWFuIHVwIHNwYWNlcyBmb3IgdXMpXG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2UtJyArIGxhbmd1YWdlKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgc2NyaXB0IGVsZW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgZXhlY3V0aW5nLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgZG9lcyBfX25vdF9fIHdvcmsgZm9yIGxpbmUgc2NyaXB0IGVsZW1lbnQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHJldHVybnMge0hUTUxTY3JpcHRFbGVtZW50IHwgbnVsbH1cblx0XHRcdCAqL1xuXHRcdFx0Y3VycmVudFNjcmlwdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQgJiYgMSA8IDIgLyogaGFjayB0byB0cmlwIFRTJyBmbG93IGFuYWx5c2lzICovKSB7XG5cdFx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJRTExIHdvcmthcm91bmRcblx0XHRcdFx0Ly8gd2UnbGwgZ2V0IHRoZSBzcmMgb2YgdGhlIGN1cnJlbnQgc2NyaXB0IGJ5IHBhcnNpbmcgSUUxMSdzIGVycm9yIHN0YWNrIHRyYWNlXG5cdFx0XHRcdC8vIHRoaXMgd2lsbCBub3Qgd29yayBmb3IgaW5saW5lIHNjcmlwdHNcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQvLyBHZXQgZmlsZSBzcmMgdXJsIGZyb20gc3RhY2suIFNwZWNpZmljYWxseSB3b3JrcyB3aXRoIHRoZSBmb3JtYXQgb2Ygc3RhY2sgdHJhY2VzIGluIElFLlxuXHRcdFx0XHRcdC8vIEEgc3RhY2sgd2lsbCBsb29rIGxpa2UgdGhpczpcblx0XHRcdFx0XHQvL1xuXHRcdFx0XHRcdC8vIEVycm9yXG5cdFx0XHRcdFx0Ly8gICAgYXQgXy51dGlsLmN1cnJlbnRTY3JpcHQgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjExOTo1KVxuXHRcdFx0XHRcdC8vICAgIGF0IEdsb2JhbCBjb2RlIChodHRwOi8vbG9jYWxob3N0L2NvbXBvbmVudHMvcHJpc20tY29yZS5qczo2MDY6MSlcblxuXHRcdFx0XHRcdHZhciBzcmMgPSAoL2F0IFteKFxcclxcbl0qXFwoKC4qKTpbXjpdKzpbXjpdK1xcKSQvaS5leGVjKGVyci5zdGFjaykgfHwgW10pWzFdO1xuXHRcdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiBzY3JpcHRzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChzY3JpcHRzW2ldLnNyYyA9PSBzcmMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc2NyaXB0c1tpXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHdoZXRoZXIgYSBnaXZlbiBjbGFzcyBpcyBhY3RpdmUgZm9yIGBlbGVtZW50YC5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgY2xhc3MgY2FuIGJlIGFjdGl2YXRlZCBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBnaXZlbiBjbGFzcyBhbmQgaXQgY2FuIGJlIGRlYWN0aXZhdGVkXG5cdFx0XHQgKiBpZiBgZWxlbWVudGAgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIGNsYXNzLiBUaGUgX25lZ2F0ZWQgdmVyc2lvbl8gb2YgdGhlXG5cdFx0XHQgKiBnaXZlbiBjbGFzcyBpcyBqdXN0IHRoZSBnaXZlbiBjbGFzcyB3aXRoIGEgYG5vLWAgcHJlZml4LlxuXHRcdFx0ICpcblx0XHRcdCAqIFdoZXRoZXIgdGhlIGNsYXNzIGlzIGFjdGl2ZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBjbG9zZXN0IGFuY2VzdG9yIG9mIGBlbGVtZW50YCAod2hlcmUgYGVsZW1lbnRgIGl0c2VsZiBpc1xuXHRcdFx0ICogY2xvc2VzdCBhbmNlc3RvcikgdGhhdCBoYXMgdGhlIGdpdmVuIGNsYXNzIG9yIHRoZSBuZWdhdGVkIHZlcnNpb24gb2YgaXQuIElmIG5laXRoZXIgYGVsZW1lbnRgIG5vciBhbnkgb2YgaXRzXG5cdFx0XHQgKiBhbmNlc3RvcnMgaGF2ZSB0aGUgZ2l2ZW4gY2xhc3Mgb3IgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiBpdCwgdGhlbiB0aGUgZGVmYXVsdCBhY3RpdmF0aW9uIHdpbGwgYmUgcmV0dXJuZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogSW4gdGhlIHBhcmFkb3hpY2FsIHNpdHVhdGlvbiB3aGVyZSB0aGUgY2xvc2VzdCBhbmNlc3RvciBjb250YWlucyBfX2JvdGhfXyB0aGUgZ2l2ZW4gY2xhc3MgYW5kIHRoZSBuZWdhdGVkXG5cdFx0XHQgKiB2ZXJzaW9uIG9mIGl0LCB0aGUgY2xhc3MgaXMgY29uc2lkZXJlZCBhY3RpdmUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG5cdFx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWZhdWx0QWN0aXZhdGlvbj1mYWxzZV1cblx0XHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdFx0ICovXG5cdFx0XHRpc0FjdGl2ZTogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSwgZGVmYXVsdEFjdGl2YXRpb24pIHtcblx0XHRcdFx0dmFyIG5vID0gJ25vLScgKyBjbGFzc05hbWU7XG5cblx0XHRcdFx0d2hpbGUgKGVsZW1lbnQpIHtcblx0XHRcdFx0XHR2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucyhubykpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gISFkZWZhdWx0QWN0aXZhdGlvbjtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogVGhpcyBuYW1lc3BhY2UgY29udGFpbnMgYWxsIGN1cnJlbnRseSBsb2FkZWQgbGFuZ3VhZ2VzIGFuZCB0aGUgc29tZSBoZWxwZXIgZnVuY3Rpb25zIHRvIGNyZWF0ZSBhbmQgbW9kaWZ5IGxhbmd1YWdlcy5cblx0XHQgKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0bGFuZ3VhZ2VzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBncmFtbWFyIGZvciBwbGFpbiwgdW5mb3JtYXR0ZWQgdGV4dC5cblx0XHRcdCAqL1xuXHRcdFx0cGxhaW46IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHRwbGFpbnRleHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHR0ZXh0OiBwbGFpblRleHRHcmFtbWFyLFxuXHRcdFx0dHh0OiBwbGFpblRleHRHcmFtbWFyLFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIGxhbmd1YWdlIHdpdGggdGhlIGdpdmVuIGlkIGFuZCBhcHBlbmRzIHRoZSBnaXZlbiB0b2tlbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgYSB0b2tlbiBpbiBgcmVkZWZgIGFsc28gYXBwZWFycyBpbiB0aGUgY29waWVkIGxhbmd1YWdlLCB0aGVuIHRoZSBleGlzdGluZyB0b2tlbiBpbiB0aGUgY29waWVkIGxhbmd1YWdlXG5cdFx0XHQgKiB3aWxsIGJlIG92ZXJ3cml0dGVuIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBCZXN0IHByYWN0aWNlc1xuXHRcdFx0ICpcblx0XHRcdCAqIFNpbmNlIHRoZSBwb3NpdGlvbiBvZiBvdmVyd3JpdGluZyB0b2tlbnMgKHRva2VuIGluIGByZWRlZmAgdGhhdCBvdmVyd3JpdGUgdG9rZW5zIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2UpXG5cdFx0XHQgKiBkb2Vzbid0IG1hdHRlciwgdGhleSBjYW4gdGVjaG5pY2FsbHkgYmUgaW4gYW55IG9yZGVyLiBIb3dldmVyLCB0aGlzIGNhbiBiZSBjb25mdXNpbmcgdG8gb3RoZXJzIHRoYXQgdHJ5aW5nIHRvXG5cdFx0XHQgKiB1bmRlcnN0YW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIGJlY2F1c2UsIG5vcm1hbGx5LCB0aGUgb3JkZXIgb2YgdG9rZW5zIG1hdHRlcnMgaW4gUHJpc20gZ3JhbW1hcnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlcmVmb3JlLCBpdCBpcyBlbmNvdXJhZ2VkIHRvIG9yZGVyIG92ZXJ3cml0aW5nIHRva2VucyBhY2NvcmRpbmcgdG8gdGhlIHBvc2l0aW9ucyBvZiB0aGUgb3ZlcndyaXR0ZW4gdG9rZW5zLlxuXHRcdFx0ICogRnVydGhlcm1vcmUsIGFsbCBub24tb3ZlcndyaXRpbmcgdG9rZW5zIHNob3VsZCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG92ZXJ3cml0aW5nIG9uZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgbGFuZ3VhZ2UgdG8gZXh0ZW5kLiBUaGlzIGhhcyB0byBiZSBhIGtleSBpbiBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gcmVkZWYgVGhlIG5ldyB0b2tlbnMgdG8gYXBwZW5kLlxuXHRcdFx0ICogQHJldHVybnMge0dyYW1tYXJ9IFRoZSBuZXcgbGFuZ3VhZ2UgY3JlYXRlZC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqIEBleGFtcGxlXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXNbJ2Nzcy13aXRoLWNvbG9ycyddID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY3NzJywge1xuXHRcdFx0ICogICAgIC8vIFByaXNtLmxhbmd1YWdlcy5jc3MgYWxyZWFkeSBoYXMgYSAnY29tbWVudCcgdG9rZW4sIHNvIHRoaXMgdG9rZW4gd2lsbCBvdmVyd3JpdGUgQ1NTJyAnY29tbWVudCcgdG9rZW5cblx0XHRcdCAqICAgICAvLyBhdCBpdHMgb3JpZ2luYWwgcG9zaXRpb25cblx0XHRcdCAqICAgICAnY29tbWVudCc6IHsgLi4uIH0sXG5cdFx0XHQgKiAgICAgLy8gQ1NTIGRvZXNuJ3QgaGF2ZSBhICdjb2xvcicgdG9rZW4sIHNvIHRoaXMgdG9rZW4gd2lsbCBiZSBhcHBlbmRlZFxuXHRcdFx0ICogICAgICdjb2xvcic6IC9cXGIoPzpyZWR8Z3JlZW58Ymx1ZSlcXGIvXG5cdFx0XHQgKiB9KTtcblx0XHRcdCAqL1xuXHRcdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHRcdHZhciBsYW5nID0gXy51dGlsLmNsb25lKF8ubGFuZ3VhZ2VzW2lkXSk7XG5cblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIHJlZGVmKSB7XG5cdFx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBsYW5nO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbnNlcnRzIHRva2VucyBfYmVmb3JlXyBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBvciBhbnkgb3RoZXIgZ3JhbW1hci5cblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBVc2FnZVxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgaGVscGVyIG1ldGhvZCBtYWtlcyBpdCBlYXN5IHRvIG1vZGlmeSBleGlzdGluZyBsYW5ndWFnZXMuIEZvciBleGFtcGxlLCB0aGUgQ1NTIGxhbmd1YWdlIGRlZmluaXRpb25cblx0XHRcdCAqIG5vdCBvbmx5IGRlZmluZXMgQ1NTIGhpZ2hsaWdodGluZyBmb3IgQ1NTIGRvY3VtZW50cywgYnV0IGFsc28gbmVlZHMgdG8gZGVmaW5lIGhpZ2hsaWdodGluZyBmb3IgQ1NTIGVtYmVkZGVkXG5cdFx0XHQgKiBpbiBIVE1MIHRocm91Z2ggYDxzdHlsZT5gIGVsZW1lbnRzLiBUbyBkbyB0aGlzLCBpdCBuZWVkcyB0byBtb2RpZnkgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgIGFuZCBhZGQgdGhlXG5cdFx0XHQgKiBhcHByb3ByaWF0ZSB0b2tlbnMuIEhvd2V2ZXIsIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYCBpcyBhIHJlZ3VsYXIgSmF2YVNjcmlwdCBvYmplY3QgbGl0ZXJhbCwgc28gaWYgeW91IGRvXG5cdFx0XHQgKiB0aGlzOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnN0eWxlID0ge1xuXHRcdFx0ICogICAgIC8vIHRva2VuXG5cdFx0XHQgKiB9O1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogdGhlbiB0aGUgYHN0eWxlYCB0b2tlbiB3aWxsIGJlIGFkZGVkIChhbmQgcHJvY2Vzc2VkKSBhdCB0aGUgZW5kLiBgaW5zZXJ0QmVmb3JlYCBhbGxvd3MgeW91IHRvIGluc2VydCB0b2tlbnNcblx0XHRcdCAqIGJlZm9yZSBleGlzdGluZyB0b2tlbnMuIEZvciB0aGUgQ1NTIGV4YW1wbGUgYWJvdmUsIHlvdSB3b3VsZCB1c2UgaXQgbGlrZSB0aGlzOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCB7XG5cdFx0XHQgKiAgICAgJ3N0eWxlJzoge1xuXHRcdFx0ICogICAgICAgICAvLyB0b2tlblxuXHRcdFx0ICogICAgIH1cblx0XHRcdCAqIH0pO1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogIyMgU3BlY2lhbCBjYXNlc1xuXHRcdFx0ICpcblx0XHRcdCAqIElmIHRoZSBncmFtbWFycyBvZiBgaW5zaWRlYCBhbmQgYGluc2VydGAgaGF2ZSB0b2tlbnMgd2l0aCB0aGUgc2FtZSBuYW1lLCB0aGUgdG9rZW5zIGluIGBpbnNpZGVgJ3MgZ3JhbW1hclxuXHRcdFx0ICogd2lsbCBiZSBpZ25vcmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoaXMgYmVoYXZpb3IgY2FuIGJlIHVzZWQgdG8gaW5zZXJ0IHRva2VucyBhZnRlciBgYmVmb3JlYDpcblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NvbW1lbnQnLCB7XG5cdFx0XHQgKiAgICAgJ2NvbW1lbnQnOiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLmNvbW1lbnQsXG5cdFx0XHQgKiAgICAgLy8gdG9rZW5zIGFmdGVyICdjb21tZW50J1xuXHRcdFx0ICogfSk7XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBMaW1pdGF0aW9uc1xuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBtYWluIHByb2JsZW0gYGluc2VydEJlZm9yZWAgaGFzIHRvIHNvbHZlIGlzIGl0ZXJhdGlvbiBvcmRlci4gU2luY2UgRVMyMDE1LCB0aGUgaXRlcmF0aW9uIG9yZGVyIGZvciBvYmplY3Rcblx0XHRcdCAqIHByb3BlcnRpZXMgaXMgZ3VhcmFudGVlZCB0byBiZSB0aGUgaW5zZXJ0aW9uIG9yZGVyIChleGNlcHQgZm9yIGludGVnZXIga2V5cykgYnV0IHNvbWUgYnJvd3NlcnMgYmVoYXZlXG5cdFx0XHQgKiBkaWZmZXJlbnRseSB3aGVuIGtleXMgYXJlIGRlbGV0ZWQgYW5kIHJlLWluc2VydGVkLiBTbyBgaW5zZXJ0QmVmb3JlYCBjYW4ndCBiZSBpbXBsZW1lbnRlZCBieSB0ZW1wb3JhcmlseVxuXHRcdFx0ICogZGVsZXRpbmcgcHJvcGVydGllcyB3aGljaCBpcyBuZWNlc3NhcnkgdG8gaW5zZXJ0IGF0IGFyYml0cmFyeSBwb3NpdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogVG8gc29sdmUgdGhpcyBwcm9ibGVtLCBgaW5zZXJ0QmVmb3JlYCBkb2Vzbid0IGFjdHVhbGx5IGluc2VydCB0aGUgZ2l2ZW4gdG9rZW5zIGludG8gdGhlIHRhcmdldCBvYmplY3QuXG5cdFx0XHQgKiBJbnN0ZWFkLCBpdCB3aWxsIGNyZWF0ZSBhIG5ldyBvYmplY3QgYW5kIHJlcGxhY2UgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIHRhcmdldCBvYmplY3Qgd2l0aCB0aGUgbmV3IG9uZS4gVGhpc1xuXHRcdFx0ICogY2FuIGJlIGRvbmUgd2l0aG91dCB0ZW1wb3JhcmlseSBkZWxldGluZyBwcm9wZXJ0aWVzLCBzbyB0aGUgaXRlcmF0aW9uIG9yZGVyIGlzIHdlbGwtZGVmaW5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBIb3dldmVyLCBvbmx5IHJlZmVyZW5jZXMgdGhhdCBjYW4gYmUgcmVhY2hlZCBmcm9tIGBQcmlzbS5sYW5ndWFnZXNgIG9yIGBpbnNlcnRgIHdpbGwgYmUgcmVwbGFjZWQuIEkuZS4gaWZcblx0XHRcdCAqIHlvdSBob2xkIHRoZSB0YXJnZXQgb2JqZWN0IGluIGEgdmFyaWFibGUsIHRoZW4gdGhlIHZhbHVlIG9mIHRoZSB2YXJpYWJsZSB3aWxsIG5vdCBjaGFuZ2UuXG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIHZhciBvbGRNYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRcdFx0ICogdmFyIG5ld01hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjb21tZW50JywgeyAuLi4gfSk7XG5cdFx0XHQgKlxuXHRcdFx0ICogYXNzZXJ0KG9sZE1hcmt1cCAhPT0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCk7XG5cdFx0XHQgKiBhc3NlcnQobmV3TWFya3VwID09PSBQcmlzbS5sYW5ndWFnZXMubWFya3VwKTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbnNpZGUgVGhlIHByb3BlcnR5IG9mIGByb290YCAoZS5nLiBhIGxhbmd1YWdlIGlkIGluIGBQcmlzbS5sYW5ndWFnZXNgKSB0aGF0IGNvbnRhaW5zIHRoZVxuXHRcdFx0ICogb2JqZWN0IHRvIGJlIG1vZGlmaWVkLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGJlZm9yZSBUaGUga2V5IHRvIGluc2VydCBiZWZvcmUuXG5cdFx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGluc2VydCBBbiBvYmplY3QgY29udGFpbmluZyB0aGUga2V5LXZhbHVlIHBhaXJzIHRvIGJlIGluc2VydGVkLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBbcm9vdF0gVGhlIG9iamVjdCBjb250YWluaW5nIGBpbnNpZGVgLCBpLmUuIHRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcblx0XHRcdCAqIG9iamVjdCB0byBiZSBtb2RpZmllZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBEZWZhdWx0cyB0byBgUHJpc20ubGFuZ3VhZ2VzYC5cblx0XHRcdCAqIEByZXR1cm5zIHtHcmFtbWFyfSBUaGUgbmV3IGdyYW1tYXIgb2JqZWN0LlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChpbnNpZGUsIGJlZm9yZSwgaW5zZXJ0LCByb290KSB7XG5cdFx0XHRcdHJvb3QgPSByb290IHx8IC8qKiBAdHlwZSB7YW55fSAqLyAoXy5sYW5ndWFnZXMpO1xuXHRcdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdFx0LyoqIEB0eXBlIHtHcmFtbWFyfSAqL1xuXHRcdFx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRcdGlmIChncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXG5cdFx0XHRcdFx0XHRpZiAodG9rZW4gPT0gYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChpbnNlcnQuaGFzT3duUHJvcGVydHkobmV3VG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXRbbmV3VG9rZW5dID0gaW5zZXJ0W25ld1Rva2VuXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0XHRpZiAoIWluc2VydC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblx0XHRcdFx0XHRcdFx0cmV0W3Rva2VuXSA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRcdHJvb3RbaW5zaWRlXSA9IHJldDtcblxuXHRcdFx0XHQvLyBVcGRhdGUgcmVmZXJlbmNlcyBpbiBvdGhlciBsYW5ndWFnZSBkZWZpbml0aW9uc1xuXHRcdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdFx0dGhpc1trZXldID0gcmV0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdFx0REZTOiBmdW5jdGlvbiBERlMobywgY2FsbGJhY2ssIHR5cGUsIHZpc2l0ZWQpIHtcblx0XHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRcdGZvciAodmFyIGkgaW4gbykge1xuXHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eSA9IG9baV07XG5cdFx0XHRcdFx0XHR2YXIgcHJvcGVydHlUeXBlID0gXy51dGlsLnR5cGUocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdBcnJheScgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBpLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cGx1Z2luczoge30sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIHRoZSBtb3N0IGhpZ2gtbGV2ZWwgZnVuY3Rpb24gaW4gUHJpc23igJlzIEFQSS5cblx0XHQgKiBJdCBmZXRjaGVzIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBoYXZlIGEgYC5sYW5ndWFnZS14eHh4YCBjbGFzcyBhbmQgdGhlbiBjYWxscyB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gb25cblx0XHQgKiBlYWNoIG9uZSBvZiB0aGVtLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIGBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gU2FtZSBhcyBpbiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsVW5kZXJ9LlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRBbGw6IGZ1bmN0aW9uIChhc3luYywgY2FsbGJhY2spIHtcblx0XHRcdF8uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEZldGNoZXMgYWxsIHRoZSBkZXNjZW5kYW50cyBvZiBgY29udGFpbmVyYCB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIGFuZCB0aGVuIGNhbGxzXG5cdFx0ICoge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IG9uIGVhY2ggb25lIG9mIHRoZW0uXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtaGlnaGxpZ2h0YWxsYFxuXHRcdCAqIDIuIGBiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodGBcblx0XHQgKiAzLiBBbGwgaG9va3Mgb2Yge0BsaW5rIFByaXNtLmhpZ2hsaWdodEVsZW1lbnR9IGZvciBlYWNoIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1BhcmVudE5vZGV9IGNvbnRhaW5lciBUaGUgcm9vdCBlbGVtZW50LCB3aG9zZSBkZXNjZW5kYW50cyB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIHdpbGwgYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYXN5bmM9ZmFsc2VdIFdoZXRoZXIgZWFjaCBlbGVtZW50IGlzIHRvIGJlIGhpZ2hsaWdodGVkIGFzeW5jaHJvbm91c2x5IHVzaW5nIFdlYiBXb3JrZXJzLlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBlYWNoIGVsZW1lbnQgYWZ0ZXIgaXRzIGhpZ2hsaWdodGluZyBpcyBkb25lLlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRBbGxVbmRlcjogZnVuY3Rpb24gKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLFxuXHRcdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdFx0fTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHRhbGwnLCBlbnYpO1xuXG5cdFx0XHRlbnYuZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZW52LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGVudi5zZWxlY3RvcikpO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWFsbC1lbGVtZW50cy1oaWdobGlnaHQnLCBlbnYpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgKGVsZW1lbnQgPSBlbnYuZWxlbWVudHNbaSsrXSk7KSB7XG5cdFx0XHRcdF8uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYyA9PT0gdHJ1ZSwgZW52LmNhbGxiYWNrKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSGlnaGxpZ2h0cyB0aGUgY29kZSBpbnNpZGUgYSBzaW5nbGUgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdFx0ICogMS4gYGJlZm9yZS1zYW5pdHktY2hlY2tgXG5cdFx0ICogMi4gYGJlZm9yZS1oaWdobGlnaHRgXG5cdFx0ICogMy4gQWxsIGhvb2tzIG9mIHtAbGluayBQcmlzbS5oaWdobGlnaHR9LiBUaGVzZSBob29rcyB3aWxsIGJlIHJ1biBieSBhbiBhc3luY2hyb25vdXMgd29ya2VyIGlmIGBhc3luY2AgaXMgYHRydWVgLlxuXHRcdCAqIDQuIGBiZWZvcmUtaW5zZXJ0YFxuXHRcdCAqIDUuIGBhZnRlci1oaWdobGlnaHRgXG5cdFx0ICogNi4gYGNvbXBsZXRlYFxuXHRcdCAqXG5cdFx0ICogU29tZSB0aGUgYWJvdmUgaG9va3Mgd2lsbCBiZSBza2lwcGVkIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgY29udGFpbiBhbnkgdGV4dCBvciB0aGVyZSBpcyBubyBncmFtbWFyIGxvYWRlZCBmb3Jcblx0XHQgKiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIGNvZGUuXG5cdFx0ICogSXQgbXVzdCBoYXZlIGEgY2xhc3Mgb2YgYGxhbmd1YWdlLXh4eHhgIHRvIGJlIHByb2Nlc3NlZCwgd2hlcmUgYHh4eHhgIGlzIGEgdmFsaWQgbGFuZ3VhZ2UgaWRlbnRpZmllci5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gV2hldGhlciB0aGUgZWxlbWVudCBpcyB0byBiZSBoaWdobGlnaHRlZCBhc3luY2hyb25vdXNseSB1c2luZyBXZWIgV29ya2Vyc1xuXHRcdCAqIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UgYW5kIGF2b2lkIGJsb2NraW5nIHRoZSBVSSB3aGVuIGhpZ2hsaWdodGluZyB2ZXJ5IGxhcmdlIGNodW5rcyBvZiBjb2RlLiBUaGlzIG9wdGlvbiBpc1xuXHRcdCAqIFtkaXNhYmxlZCBieSBkZWZhdWx0XShodHRwczovL3ByaXNtanMuY29tL2ZhcS5odG1sI3doeS1pcy1hc3luY2hyb25vdXMtaGlnaGxpZ2h0aW5nLWRpc2FibGVkLWJ5LWRlZmF1bHQpLlxuXHRcdCAqXG5cdFx0ICogTm90ZTogQWxsIGxhbmd1YWdlIGRlZmluaXRpb25zIHJlcXVpcmVkIHRvIGhpZ2hsaWdodCB0aGUgY29kZSBtdXN0IGJlIGluY2x1ZGVkIGluIHRoZSBtYWluIGBwcmlzbS5qc2AgZmlsZSBmb3Jcblx0XHQgKiBhc3luY2hyb25vdXMgaGlnaGxpZ2h0aW5nIHRvIHdvcmsuIFlvdSBjYW4gYnVpbGQgeW91ciBvd24gYnVuZGxlIG9uIHRoZVxuXHRcdCAqIFtEb3dubG9hZCBwYWdlXShodHRwczovL3ByaXNtanMuY29tL2Rvd25sb2FkLmh0bWwpLlxuXHRcdCAqIEBwYXJhbSB7SGlnaGxpZ2h0Q2FsbGJhY2t9IFtjYWxsYmFja10gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgaGlnaGxpZ2h0aW5nIGlzIGRvbmUuXG5cdFx0ICogTW9zdGx5IHVzZWZ1bCB3aGVuIGBhc3luY2AgaXMgYHRydWVgLCBzaW5jZSBpbiB0aGF0IGNhc2UsIHRoZSBoaWdobGlnaHRpbmcgaXMgZG9uZSBhc3luY2hyb25vdXNseS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdFx0dmFyIGxhbmd1YWdlID0gXy51dGlsLmdldExhbmd1YWdlKGVsZW1lbnQpO1xuXHRcdFx0dmFyIGdyYW1tYXIgPSBfLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRcdF8udXRpbC5zZXRMYW5ndWFnZShlbGVtZW50LCBsYW5ndWFnZSk7XG5cblx0XHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgcGFyZW50LCBmb3Igc3R5bGluZ1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnKSB7XG5cdFx0XHRcdF8udXRpbC5zZXRMYW5ndWFnZShwYXJlbnQsIGxhbmd1YWdlKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvZGUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2UsXG5cdFx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRcdGNvZGU6IGNvZGVcblx0XHRcdH07XG5cblx0XHRcdGZ1bmN0aW9uIGluc2VydEhpZ2hsaWdodGVkQ29kZShoaWdobGlnaHRlZENvZGUpIHtcblx0XHRcdFx0ZW52LmhpZ2hsaWdodGVkQ29kZSA9IGhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWluc2VydCcsIGVudik7XG5cblx0XHRcdFx0ZW52LmVsZW1lbnQuaW5uZXJIVE1MID0gZW52LmhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItaGlnaGxpZ2h0JywgZW52KTtcblx0XHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtc2FuaXR5LWNoZWNrJywgZW52KTtcblxuXHRcdFx0Ly8gcGx1Z2lucyBtYXkgY2hhbmdlL2FkZCB0aGUgcGFyZW50L2VsZW1lbnRcblx0XHRcdHBhcmVudCA9IGVudi5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAncHJlJyAmJiAhcGFyZW50Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuXHRcdFx0XHRwYXJlbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZW52LmNvZGUpIHtcblx0XHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHQnLCBlbnYpO1xuXG5cdFx0XHRpZiAoIWVudi5ncmFtbWFyKSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLnV0aWwuZW5jb2RlKGVudi5jb2RlKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGFzeW5jICYmIF9zZWxmLldvcmtlcikge1xuXHRcdFx0XHR2YXIgd29ya2VyID0gbmV3IFdvcmtlcihfLmZpbGVuYW1lKTtcblxuXHRcdFx0XHR3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShldnQuZGF0YSk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRsYW5ndWFnZTogZW52Lmxhbmd1YWdlLFxuXHRcdFx0XHRcdGNvZGU6IGVudi5jb2RlLFxuXHRcdFx0XHRcdGltbWVkaWF0ZUNsb3NlOiB0cnVlXG5cdFx0XHRcdH0pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLmhpZ2hsaWdodChlbnYuY29kZSwgZW52LmdyYW1tYXIsIGVudi5sYW5ndWFnZSkpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBMb3ctbGV2ZWwgZnVuY3Rpb24sIG9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW914oCZcmUgZG9pbmcuIEl0IGFjY2VwdHMgYSBzdHJpbmcgb2YgdGV4dCBhcyBpbnB1dFxuXHRcdCAqIGFuZCB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMgdG8gdXNlLCBhbmQgcmV0dXJucyBhIHN0cmluZyB3aXRoIHRoZSBIVE1MIHByb2R1Y2VkLlxuXHRcdCAqXG5cdFx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0XHQgKiAxLiBgYmVmb3JlLXRva2VuaXplYFxuXHRcdCAqIDIuIGBhZnRlci10b2tlbml6ZWBcblx0XHQgKiAzLiBgd3JhcGA6IE9uIGVhY2gge0BsaW5rIFRva2VufS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtHcmFtbWFyfSBncmFtbWFyIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0b2tlbnMgdG8gdXNlLlxuXHRcdCAqXG5cdFx0ICogVXN1YWxseSBhIGxhbmd1YWdlIGRlZmluaXRpb24gbGlrZSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBuYW1lIG9mIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIHBhc3NlZCB0byBgZ3JhbW1hcmAuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIGhpZ2hsaWdodGVkIEhUTUwuXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqIEBleGFtcGxlXG5cdFx0ICogUHJpc20uaGlnaGxpZ2h0KCd2YXIgZm9vID0gdHJ1ZTsnLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCwgJ2phdmFzY3JpcHQnKTtcblx0XHQgKi9cblx0XHRoaWdobGlnaHQ6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyLCBsYW5ndWFnZSkge1xuXHRcdFx0dmFyIGVudiA9IHtcblx0XHRcdFx0Y29kZTogdGV4dCxcblx0XHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdFx0XHR9O1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS10b2tlbml6ZScsIGVudik7XG5cdFx0XHRpZiAoIWVudi5ncmFtbWFyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlIGxhbmd1YWdlIFwiJyArIGVudi5sYW5ndWFnZSArICdcIiBoYXMgbm8gZ3JhbW1hci4nKTtcblx0XHRcdH1cblx0XHRcdGVudi50b2tlbnMgPSBfLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG5cdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdFx0cmV0dXJuIFRva2VuLnN0cmluZ2lmeShfLnV0aWwuZW5jb2RlKGVudi50b2tlbnMpLCBlbnYubGFuZ3VhZ2UpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIGlzIHRoZSBoZWFydCBvZiBQcmlzbSwgYW5kIHRoZSBtb3N0IGxvdy1sZXZlbCBmdW5jdGlvbiB5b3UgY2FuIHVzZS4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGFuIGFycmF5IHdpdGggdGhlIHRva2VuaXplZCBjb2RlLlxuXHRcdCAqXG5cdFx0ICogV2hlbiB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBpbmNsdWRlcyBuZXN0ZWQgdG9rZW5zLCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHJlY3Vyc2l2ZWx5IG9uIGVhY2ggb2YgdGhlc2UgdG9rZW5zLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBtZXRob2QgY291bGQgYmUgdXNlZnVsIGluIG90aGVyIGNvbnRleHRzIGFzIHdlbGwsIGFzIGEgdmVyeSBjcnVkZSBwYXJzZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBBIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGJlIGhpZ2hsaWdodGVkLlxuXHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gZ3JhbW1hciBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgdG9rZW5zIHRvIHVzZS5cblx0XHQgKlxuXHRcdCAqIFVzdWFsbHkgYSBsYW5ndWFnZSBkZWZpbml0aW9uIGxpa2UgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgLlxuXHRcdCAqIEByZXR1cm5zIHtUb2tlblN0cmVhbX0gQW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQgdG9rZW5zLCBhIHRva2VuIHN0cmVhbS5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBsZXQgY29kZSA9IGB2YXIgZm9vID0gMDtgO1xuXHRcdCAqIGxldCB0b2tlbnMgPSBQcmlzbS50b2tlbml6ZShjb2RlLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG5cdFx0ICogdG9rZW5zLmZvckVhY2godG9rZW4gPT4ge1xuXHRcdCAqICAgICBpZiAodG9rZW4gaW5zdGFuY2VvZiBQcmlzbS5Ub2tlbiAmJiB0b2tlbi50eXBlID09PSAnbnVtYmVyJykge1xuXHRcdCAqICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kIG51bWVyaWMgbGl0ZXJhbDogJHt0b2tlbi5jb250ZW50fWApO1xuXHRcdCAqICAgICB9XG5cdFx0ICogfSk7XG5cdFx0ICovXG5cdFx0dG9rZW5pemU6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyKSB7XG5cdFx0XHR2YXIgcmVzdCA9IGdyYW1tYXIucmVzdDtcblx0XHRcdGlmIChyZXN0KSB7XG5cdFx0XHRcdGZvciAodmFyIHRva2VuIGluIHJlc3QpIHtcblx0XHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGdyYW1tYXIucmVzdDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRva2VuTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG5cdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIHRva2VuTGlzdC5oZWFkLCB0ZXh0KTtcblxuXHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgdG9rZW5MaXN0LmhlYWQsIDApO1xuXG5cdFx0XHRyZXR1cm4gdG9BcnJheSh0b2tlbkxpc3QpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBAbmFtZXNwYWNlXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhvb2tzOiB7XG5cdFx0XHRhbGw6IHt9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEFkZHMgdGhlIGdpdmVuIGNhbGxiYWNrIHRvIHRoZSBsaXN0IG9mIGNhbGxiYWNrcyBmb3IgdGhlIGdpdmVuIGhvb2suXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSBob29rIGl0IGlzIHJlZ2lzdGVyZWQgZm9yIGlzIHJ1bi5cblx0XHRcdCAqIEhvb2tzIGFyZSB1c3VhbGx5IGRpcmVjdGx5IHJ1biBieSBhIGhpZ2hsaWdodCBmdW5jdGlvbiBidXQgeW91IGNhbiBhbHNvIHJ1biBob29rcyB5b3Vyc2VsZi5cblx0XHRcdCAqXG5cdFx0XHQgKiBPbmUgY2FsbGJhY2sgZnVuY3Rpb24gY2FuIGJlIHJlZ2lzdGVyZWQgdG8gbXVsdGlwbGUgaG9va3MgYW5kIHRoZSBzYW1lIGhvb2sgbXVsdGlwbGUgdGltZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2suXG5cdFx0XHQgKiBAcGFyYW0ge0hvb2tDYWxsYmFja30gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGdpdmVuIGVudmlyb25tZW50IHZhcmlhYmxlcy5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0YWRkOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcblx0XHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdFx0aG9va3NbbmFtZV0gPSBob29rc1tuYW1lXSB8fCBbXTtcblxuXHRcdFx0XHRob29rc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUnVucyBhIGhvb2sgaW52b2tpbmcgYWxsIHJlZ2lzdGVyZWQgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGVudmlyb25tZW50IHZhcmlhYmxlcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBDYWxsYmFja3Mgd2lsbCBiZSBpbnZva2VkIHN5bmNocm9ub3VzbHkgYW5kIGluIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gZW52IFRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgb2YgdGhlIGhvb2sgcGFzc2VkIHRvIGFsbCBjYWxsYmFja3MgcmVnaXN0ZXJlZC5cblx0XHRcdCAqIEBwdWJsaWNcblx0XHRcdCAqL1xuXHRcdFx0cnVuOiBmdW5jdGlvbiAobmFtZSwgZW52KSB7XG5cdFx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0XHRpZiAoIWNhbGxiYWNrcyB8fCAhY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwLCBjYWxsYmFjazsgKGNhbGxiYWNrID0gY2FsbGJhY2tzW2krK10pOykge1xuXHRcdFx0XHRcdGNhbGxiYWNrKGVudik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VG9rZW46IFRva2VuXG5cdH07XG5cdF9zZWxmLlByaXNtID0gXztcblxuXG5cdC8vIFR5cGVzY3JpcHQgbm90ZTpcblx0Ly8gVGhlIGZvbGxvd2luZyBjYW4gYmUgdXNlZCB0byBpbXBvcnQgdGhlIFRva2VuIHR5cGUgaW4gSlNEb2M6XG5cdC8vXG5cdC8vICAgQHR5cGVkZWYge0luc3RhbmNlVHlwZTxpbXBvcnQoXCIuL3ByaXNtLWNvcmVcIilbXCJUb2tlblwiXT59IFRva2VuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgdG9rZW4uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFNlZSB7QGxpbmsgVG9rZW4jdHlwZSB0eXBlfVxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IFRva2VuU3RyZWFtfSBjb250ZW50IFNlZSB7QGxpbmsgVG9rZW4jY29udGVudCBjb250ZW50fVxuXHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW2FsaWFzXSBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFttYXRjaGVkU3RyPVwiXCJdIEEgY29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tLlxuXHQgKiBAY2xhc3Ncblx0ICogQGdsb2JhbFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRmdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0cikge1xuXHRcdC8qKlxuXHRcdCAqIFRoZSB0eXBlIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUga2V5IG9mIGEgcGF0dGVybiBpbiBhIHtAbGluayBHcmFtbWFyfS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHQvKipcblx0XHQgKiBUaGUgc3RyaW5ncyBvciB0b2tlbnMgY29udGFpbmVkIGJ5IHRoaXMgdG9rZW4uXG5cdFx0ICpcblx0XHQgKiBUaGlzIHdpbGwgYmUgYSB0b2tlbiBzdHJlYW0gaWYgdGhlIHBhdHRlcm4gbWF0Y2hlZCBhbHNvIGRlZmluZWQgYW4gYGluc2lkZWAgZ3JhbW1hci5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmcgfCBUb2tlblN0cmVhbX1cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHQvKipcblx0XHQgKiBUaGUgYWxpYXMoZXMpIG9mIHRoZSB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd8c3RyaW5nW119XG5cdFx0ICogQHNlZSBHcmFtbWFyVG9rZW5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5hbGlhcyA9IGFsaWFzO1xuXHRcdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHRcdHRoaXMubGVuZ3RoID0gKG1hdGNoZWRTdHIgfHwgJycpLmxlbmd0aCB8IDA7XG5cdH1cblxuXHQvKipcblx0ICogQSB0b2tlbiBzdHJlYW0gaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyBhbmQge0BsaW5rIFRva2VuIFRva2VufSBvYmplY3RzLlxuXHQgKlxuXHQgKiBUb2tlbiBzdHJlYW1zIGhhdmUgdG8gZnVsZmlsbCBhIGZldyBwcm9wZXJ0aWVzIHRoYXQgYXJlIGFzc3VtZWQgYnkgbW9zdCBmdW5jdGlvbnMgKG1vc3RseSBpbnRlcm5hbCBvbmVzKSB0aGF0IHByb2Nlc3Ncblx0ICogdGhlbS5cblx0ICpcblx0ICogMS4gTm8gYWRqYWNlbnQgc3RyaW5ncy5cblx0ICogMi4gTm8gZW1wdHkgc3RyaW5ncy5cblx0ICpcblx0ICogICAgVGhlIG9ubHkgZXhjZXB0aW9uIGhlcmUgaXMgdGhlIHRva2VuIHN0cmVhbSB0aGF0IG9ubHkgY29udGFpbnMgdGhlIGVtcHR5IHN0cmluZyBhbmQgbm90aGluZyBlbHNlLlxuXHQgKlxuXHQgKiBAdHlwZWRlZiB7QXJyYXk8c3RyaW5nIHwgVG9rZW4+fSBUb2tlblN0cmVhbVxuXHQgKiBAZ2xvYmFsXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIHRoZSBnaXZlbiB0b2tlbiBvciB0b2tlbiBzdHJlYW0gdG8gYW4gSFRNTCByZXByZXNlbnRhdGlvbi5cblx0ICpcblx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0ICogMS4gYHdyYXBgOiBPbiBlYWNoIHtAbGluayBUb2tlbn0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW4gfCBUb2tlblN0cmVhbX0gbyBUaGUgdG9rZW4gb3IgdG9rZW4gc3RyZWFtIHRvIGJlIGNvbnZlcnRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBuYW1lIG9mIGN1cnJlbnQgbGFuZ3VhZ2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBIVE1MIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0b2tlbiBvciB0b2tlbiBzdHJlYW0uXG5cdCAqIEBtZW1iZXJvZiBUb2tlblxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRUb2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkobywgbGFuZ3VhZ2UpIHtcblx0XHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBvO1xuXHRcdH1cblx0XHRpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuXHRcdFx0dmFyIHMgPSAnJztcblx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRzICs9IHN0cmluZ2lmeShlLCBsYW5ndWFnZSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBzO1xuXHRcdH1cblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0XHRjb250ZW50OiBzdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0XHR0YWc6ICdzcGFuJyxcblx0XHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdFx0YXR0cmlidXRlczoge30sXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXG5cdFx0dmFyIGFsaWFzZXMgPSBvLmFsaWFzO1xuXHRcdGlmIChhbGlhc2VzKSB7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShhbGlhc2VzKSkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnYuY2xhc3Nlcy5wdXNoKGFsaWFzZXMpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCd3cmFwJywgZW52KTtcblxuXHRcdHZhciBhdHRyaWJ1dGVzID0gJyc7XG5cdFx0Zm9yICh2YXIgbmFtZSBpbiBlbnYuYXR0cmlidXRlcykge1xuXHRcdFx0YXR0cmlidXRlcyArPSAnICcgKyBuYW1lICsgJz1cIicgKyAoZW52LmF0dHJpYnV0ZXNbbmFtZV0gfHwgJycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSArICdcIic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyBhdHRyaWJ1dGVzICsgJz4nICsgZW52LmNvbnRlbnQgKyAnPC8nICsgZW52LnRhZyArICc+Jztcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cblx0ICogQHBhcmFtIHtudW1iZXJ9IHBvc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb2tiZWhpbmRcblx0ICogQHJldHVybnMge1JlZ0V4cEV4ZWNBcnJheSB8IG51bGx9XG5cdCAqL1xuXHRmdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKSB7XG5cdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0dmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpO1xuXHRcdGlmIChtYXRjaCAmJiBsb29rYmVoaW5kICYmIG1hdGNoWzFdKSB7XG5cdFx0XHQvLyBjaGFuZ2UgdGhlIG1hdGNoIHRvIHJlbW92ZSB0aGUgdGV4dCBtYXRjaGVkIGJ5IHRoZSBQcmlzbSBsb29rYmVoaW5kIGdyb3VwXG5cdFx0XHR2YXIgbG9va2JlaGluZExlbmd0aCA9IG1hdGNoWzFdLmxlbmd0aDtcblx0XHRcdG1hdGNoLmluZGV4ICs9IGxvb2tiZWhpbmRMZW5ndGg7XG5cdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpO1xuXHRcdH1cblx0XHRyZXR1cm4gbWF0Y2g7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PHN0cmluZyB8IFRva2VuPn0gdG9rZW5MaXN0XG5cdCAqIEBwYXJhbSB7YW55fSBncmFtbWFyXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8c3RyaW5nIHwgVG9rZW4+fSBzdGFydE5vZGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0UG9zXG5cdCAqIEBwYXJhbSB7UmVtYXRjaE9wdGlvbnN9IFtyZW1hdGNoXVxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICogQHByaXZhdGVcblx0ICpcblx0ICogQHR5cGVkZWYgUmVtYXRjaE9wdGlvbnNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGNhdXNlXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSByZWFjaFxuXHQgKi9cblx0ZnVuY3Rpb24gbWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgc3RhcnROb2RlLCBzdGFydFBvcywgcmVtYXRjaCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmICghZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikgfHwgIWdyYW1tYXJbdG9rZW5dKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gQXJyYXkuaXNBcnJheShwYXR0ZXJucykgPyBwYXR0ZXJucyA6IFtwYXR0ZXJuc107XG5cblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcGF0dGVybnMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgcmVtYXRjaC5jYXVzZSA9PSB0b2tlbiArICcsJyArIGopIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcGF0dGVybk9iaiA9IHBhdHRlcm5zW2pdO1xuXHRcdFx0XHR2YXIgaW5zaWRlID0gcGF0dGVybk9iai5pbnNpZGU7XG5cdFx0XHRcdHZhciBsb29rYmVoaW5kID0gISFwYXR0ZXJuT2JqLmxvb2tiZWhpbmQ7XG5cdFx0XHRcdHZhciBncmVlZHkgPSAhIXBhdHRlcm5PYmouZ3JlZWR5O1xuXHRcdFx0XHR2YXIgYWxpYXMgPSBwYXR0ZXJuT2JqLmFsaWFzO1xuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm5PYmoucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0XHQvLyBXaXRob3V0IHRoZSBnbG9iYWwgZmxhZywgbGFzdEluZGV4IHdvbid0IHdvcmtcblx0XHRcdFx0XHR2YXIgZmxhZ3MgPSBwYXR0ZXJuT2JqLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltc3V5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybk9iai5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm5PYmoucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qKiBAdHlwZSB7UmVnRXhwfSAqL1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5PYmoucGF0dGVybiB8fCBwYXR0ZXJuT2JqO1xuXG5cdFx0XHRcdGZvciAoIC8vIGl0ZXJhdGUgdGhlIHRva2VuIGxpc3QgYW5kIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgdG9rZW4vc3RyaW5nIHBvc2l0aW9uXG5cdFx0XHRcdFx0dmFyIGN1cnJlbnROb2RlID0gc3RhcnROb2RlLm5leHQsIHBvcyA9IHN0YXJ0UG9zO1xuXHRcdFx0XHRcdGN1cnJlbnROb2RlICE9PSB0b2tlbkxpc3QudGFpbDtcblx0XHRcdFx0XHRwb3MgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoLCBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHRcblx0XHRcdFx0KSB7XG5cblx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBwb3MgPj0gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHN0ciA9IGN1cnJlbnROb2RlLnZhbHVlO1xuXG5cdFx0XHRcdFx0aWYgKHRva2VuTGlzdC5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVDb3VudCA9IDE7IC8vIHRoaXMgaXMgdGhlIHRvIHBhcmFtZXRlciBvZiByZW1vdmVCZXR3ZWVuXG5cdFx0XHRcdFx0dmFyIG1hdGNoO1xuXG5cdFx0XHRcdFx0aWYgKGdyZWVkeSkge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcG9zLCB0ZXh0LCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2ggfHwgbWF0Y2guaW5kZXggPj0gdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0XHR2YXIgdG8gPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0XHRcdHZhciBwID0gcG9zO1xuXG5cdFx0XHRcdFx0XHQvLyBmaW5kIHRoZSBub2RlIHRoYXQgY29udGFpbnMgdGhlIG1hdGNoXG5cdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlIChmcm9tID49IHApIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuXHRcdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIGFkanVzdCBwb3MgKGFuZCBwKVxuXHRcdFx0XHRcdFx0cCAtPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRwb3MgPSBwO1xuXG5cdFx0XHRcdFx0XHQvLyB0aGUgY3VycmVudCBub2RlIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnROb2RlLnZhbHVlIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIGZpbmQgdGhlIGxhc3Qgbm9kZSB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIG1hdGNoXG5cdFx0XHRcdFx0XHRmb3IgKFxuXHRcdFx0XHRcdFx0XHR2YXIgayA9IGN1cnJlbnROb2RlO1xuXHRcdFx0XHRcdFx0XHRrICE9PSB0b2tlbkxpc3QudGFpbCAmJiAocCA8IHRvIHx8IHR5cGVvZiBrLnZhbHVlID09PSAnc3RyaW5nJyk7XG5cdFx0XHRcdFx0XHRcdGsgPSBrLm5leHRcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRyZW1vdmVDb3VudCsrO1xuXHRcdFx0XHRcdFx0XHRwICs9IGsudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVtb3ZlQ291bnQtLTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdHN0ciA9IHRleHQuc2xpY2UocG9zLCBwKTtcblx0XHRcdFx0XHRcdG1hdGNoLmluZGV4IC09IHBvcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgMCwgc3RyLCBsb29rYmVoaW5kKTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXg7XG5cdFx0XHRcdFx0dmFyIG1hdGNoU3RyID0gbWF0Y2hbMF07XG5cdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKTtcblx0XHRcdFx0XHR2YXIgYWZ0ZXIgPSBzdHIuc2xpY2UoZnJvbSArIG1hdGNoU3RyLmxlbmd0aCk7XG5cblx0XHRcdFx0XHR2YXIgcmVhY2ggPSBwb3MgKyBzdHIubGVuZ3RoO1xuXHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIHJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0cmVtYXRjaC5yZWFjaCA9IHJlYWNoO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciByZW1vdmVGcm9tID0gY3VycmVudE5vZGUucHJldjtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdHJlbW92ZUZyb20gPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIGJlZm9yZSk7XG5cdFx0XHRcdFx0XHRwb3MgKz0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZW1vdmVSYW5nZSh0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHJlbW92ZUNvdW50KTtcblxuXHRcdFx0XHRcdHZhciB3cmFwcGVkID0gbmV3IFRva2VuKHRva2VuLCBpbnNpZGUgPyBfLnRva2VuaXplKG1hdGNoU3RyLCBpbnNpZGUpIDogbWF0Y2hTdHIsIGFsaWFzLCBtYXRjaFN0cik7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHdyYXBwZWQpO1xuXG5cdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIGN1cnJlbnROb2RlLCBhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHJlbW92ZUNvdW50ID4gMSkge1xuXHRcdFx0XHRcdFx0Ly8gYXQgbGVhc3Qgb25lIFRva2VuIG9iamVjdCB3YXMgcmVtb3ZlZCwgc28gd2UgaGF2ZSB0byBkbyBzb21lIHJlbWF0Y2hpbmdcblx0XHRcdFx0XHRcdC8vIHRoaXMgY2FuIG9ubHkgaGFwcGVuIGlmIHRoZSBjdXJyZW50IHBhdHRlcm4gaXMgZ3JlZWR5XG5cblx0XHRcdFx0XHRcdC8qKiBAdHlwZSB7UmVtYXRjaE9wdGlvbnN9ICovXG5cdFx0XHRcdFx0XHR2YXIgbmVzdGVkUmVtYXRjaCA9IHtcblx0XHRcdFx0XHRcdFx0Y2F1c2U6IHRva2VuICsgJywnICsgaixcblx0XHRcdFx0XHRcdFx0cmVhY2g6IHJlYWNoXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0bWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgY3VycmVudE5vZGUucHJldiwgcG9zLCBuZXN0ZWRSZW1hdGNoKTtcblxuXHRcdFx0XHRcdFx0Ly8gdGhlIHJlYWNoIG1pZ2h0IGhhdmUgYmVlbiBleHRlbmRlZCBiZWNhdXNlIG9mIHRoZSByZW1hdGNoaW5nXG5cdFx0XHRcdFx0XHRpZiAocmVtYXRjaCAmJiBuZXN0ZWRSZW1hdGNoLnJlYWNoID4gcmVtYXRjaC5yZWFjaCkge1xuXHRcdFx0XHRcdFx0XHRyZW1hdGNoLnJlYWNoID0gbmVzdGVkUmVtYXRjaC5yZWFjaDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGVkZWYgTGlua2VkTGlzdE5vZGVcblx0ICogQHByb3BlcnR5IHtUfSB2YWx1ZVxuXHQgKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gcHJldiBUaGUgcHJldmlvdXMgbm9kZS5cblx0ICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IG5leHQgVGhlIG5leHQgbm9kZS5cblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHByaXZhdGVcblx0ICovXG5cblx0LyoqXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRmdW5jdGlvbiBMaW5rZWRMaXN0KCkge1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dmFyIGhlYWQgPSB7IHZhbHVlOiBudWxsLCBwcmV2OiBudWxsLCBuZXh0OiBudWxsIH07XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR2YXIgdGFpbCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IGhlYWQsIG5leHQ6IG51bGwgfTtcblx0XHRoZWFkLm5leHQgPSB0YWlsO1xuXG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR0aGlzLmhlYWQgPSBoZWFkO1xuXHRcdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdFx0dGhpcy50YWlsID0gdGFpbDtcblx0XHR0aGlzLmxlbmd0aCA9IDA7XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBsaXN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3Rcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuXHQgKiBAcGFyYW0ge1R9IHZhbHVlXG5cdCAqIEByZXR1cm5zIHtMaW5rZWRMaXN0Tm9kZTxUPn0gVGhlIGFkZGVkIG5vZGUuXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiBhZGRBZnRlcihsaXN0LCBub2RlLCB2YWx1ZSkge1xuXHRcdC8vIGFzc3VtZXMgdGhhdCBub2RlICE9IGxpc3QudGFpbCAmJiB2YWx1ZXMubGVuZ3RoID49IDBcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblxuXHRcdHZhciBuZXdOb2RlID0geyB2YWx1ZTogdmFsdWUsIHByZXY6IG5vZGUsIG5leHQ6IG5leHQgfTtcblx0XHRub2RlLm5leHQgPSBuZXdOb2RlO1xuXHRcdG5leHQucHJldiA9IG5ld05vZGU7XG5cdFx0bGlzdC5sZW5ndGgrKztcblxuXHRcdHJldHVybiBuZXdOb2RlO1xuXHR9XG5cdC8qKlxuXHQgKiBSZW1vdmVzIGBjb3VudGAgbm9kZXMgYWZ0ZXIgdGhlIGdpdmVuIG5vZGUuIFRoZSBnaXZlbiBub2RlIHdpbGwgbm90IGJlIHJlbW92ZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKi9cblx0ZnVuY3Rpb24gcmVtb3ZlUmFuZ2UobGlzdCwgbm9kZSwgY291bnQpIHtcblx0XHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50ICYmIG5leHQgIT09IGxpc3QudGFpbDsgaSsrKSB7XG5cdFx0XHRuZXh0ID0gbmV4dC5uZXh0O1xuXHRcdH1cblx0XHRub2RlLm5leHQgPSBuZXh0O1xuXHRcdG5leHQucHJldiA9IG5vZGU7XG5cdFx0bGlzdC5sZW5ndGggLT0gaTtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG5cdCAqIEByZXR1cm5zIHtUW119XG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FycmF5KGxpc3QpIHtcblx0XHR2YXIgYXJyYXkgPSBbXTtcblx0XHR2YXIgbm9kZSA9IGxpc3QuaGVhZC5uZXh0O1xuXHRcdHdoaWxlIChub2RlICE9PSBsaXN0LnRhaWwpIHtcblx0XHRcdGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG5cdFx0XHRub2RlID0gbm9kZS5uZXh0O1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyYXk7XG5cdH1cblxuXG5cdGlmICghX3NlbGYuZG9jdW1lbnQpIHtcblx0XHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdC8vIGluIE5vZGUuanNcblx0XHRcdHJldHVybiBfO1xuXHRcdH1cblxuXHRcdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHRcdC8vIEluIHdvcmtlclxuXHRcdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKTtcblx0XHRcdFx0dmFyIGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlO1xuXHRcdFx0XHR2YXIgY29kZSA9IG1lc3NhZ2UuY29kZTtcblx0XHRcdFx0dmFyIGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0XHRfc2VsZi5wb3N0TWVzc2FnZShfLmhpZ2hsaWdodChjb2RlLCBfLmxhbmd1YWdlc1tsYW5nXSwgbGFuZykpO1xuXHRcdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHQvLyBHZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxuXHR2YXIgc2NyaXB0ID0gXy51dGlsLmN1cnJlbnRTY3JpcHQoKTtcblxuXHRpZiAoc2NyaXB0KSB7XG5cdFx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0XHRpZiAoc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdFx0Xy5tYW51YWwgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaygpIHtcblx0XHRpZiAoIV8ubWFudWFsKSB7XG5cdFx0XHRfLmhpZ2hsaWdodEFsbCgpO1xuXHRcdH1cblx0fVxuXG5cdGlmICghXy5tYW51YWwpIHtcblx0XHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJsb2FkaW5nXCIsIHRoZW4gd2UnbGwgdXNlIERPTUNvbnRlbnRMb2FkZWQuXG5cdFx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwiaW50ZXJhY3RpdmVcIiBhbmQgdGhlIHByaXNtLmpzIHNjcmlwdCBpcyBkZWZlcnJlZCwgdGhlbiB3ZSdsbCBhbHNvIHVzZSB0aGVcblx0XHQvLyBET01Db250ZW50TG9hZGVkIGV2ZW50IGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgc29tZSBwbHVnaW5zIG9yIGxhbmd1YWdlcyB3aGljaCBoYXZlIGFsc28gYmVlbiBkZWZlcnJlZCBhbmQgdGhleVxuXHRcdC8vIG1pZ2h0IHRha2UgbG9uZ2VyIG9uZSBhbmltYXRpb24gZnJhbWUgdG8gZXhlY3V0ZSB3aGljaCBjYW4gY3JlYXRlIGEgcmFjZSBjb25kaXRpb24gd2hlcmUgb25seSBzb21lIHBsdWdpbnMgaGF2ZVxuXHRcdC8vIGJlZW4gbG9hZGVkIHdoZW4gUHJpc20uaGlnaGxpZ2h0QWxsKCkgaXMgZXhlY3V0ZWQsIGRlcGVuZGluZyBvbiBob3cgZmFzdCByZXNvdXJjZXMgYXJlIGxvYWRlZC5cblx0XHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vaXNzdWVzLzIxMDJcblx0XHR2YXIgcmVhZHlTdGF0ZSA9IGRvY3VtZW50LnJlYWR5U3RhdGU7XG5cdFx0aWYgKHJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyB8fCByZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnICYmIHNjcmlwdCAmJiBzY3JpcHQuZGVmZXIpIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2ssIDE2KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gXztcblxufShfc2VsZikpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG5cbi8vIHNvbWUgYWRkaXRpb25hbCBkb2N1bWVudGF0aW9uL3R5cGVzXG5cbi8qKlxuICogVGhlIGV4cGFuc2lvbiBvZiBhIHNpbXBsZSBgUmVnRXhwYCBsaXRlcmFsIHRvIHN1cHBvcnQgYWRkaXRpb25hbCBwcm9wZXJ0aWVzLlxuICpcbiAqIEB0eXBlZGVmIEdyYW1tYXJUb2tlblxuICogQHByb3BlcnR5IHtSZWdFeHB9IHBhdHRlcm4gVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBvZiB0aGUgdG9rZW4uXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFtsb29rYmVoaW5kPWZhbHNlXSBJZiBgdHJ1ZWAsIHRoZW4gdGhlIGZpcnN0IGNhcHR1cmluZyBncm91cCBvZiBgcGF0dGVybmAgd2lsbCAoZWZmZWN0aXZlbHkpXG4gKiBiZWhhdmUgYXMgYSBsb29rYmVoaW5kIGdyb3VwIG1lYW5pbmcgdGhhdCB0aGUgY2FwdHVyZWQgdGV4dCB3aWxsIG5vdCBiZSBwYXJ0IG9mIHRoZSBtYXRjaGVkIHRleHQgb2YgdGhlIG5ldyB0b2tlbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2dyZWVkeT1mYWxzZV0gV2hldGhlciB0aGUgdG9rZW4gaXMgZ3JlZWR5LlxuICogQHByb3BlcnR5IHtzdHJpbmd8c3RyaW5nW119IFthbGlhc10gQW4gb3B0aW9uYWwgYWxpYXMgb3IgbGlzdCBvZiBhbGlhc2VzLlxuICogQHByb3BlcnR5IHtHcmFtbWFyfSBbaW5zaWRlXSBUaGUgbmVzdGVkIGdyYW1tYXIgb2YgdGhpcyB0b2tlbi5cbiAqXG4gKiBUaGUgYGluc2lkZWAgZ3JhbW1hciB3aWxsIGJlIHVzZWQgdG8gdG9rZW5pemUgdGhlIHRleHQgdmFsdWUgb2YgZWFjaCB0b2tlbiBvZiB0aGlzIGtpbmQuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBtYWtlIG5lc3RlZCBhbmQgZXZlbiByZWN1cnNpdmUgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMuXG4gKlxuICogTm90ZTogVGhpcyBjYW4gY2F1c2UgaW5maW5pdGUgcmVjdXJzaW9uLiBCZSBjYXJlZnVsIHdoZW4geW91IGVtYmVkIGRpZmZlcmVudCBsYW5ndWFnZXMgb3IgZXZlbiB0aGUgc2FtZSBsYW5ndWFnZSBpbnRvXG4gKiBlYWNoIGFub3RoZXIuXG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBHcmFtbWFyXG4gKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgUmVnRXhwIHwgR3JhbW1hclRva2VuIHwgQXJyYXk8UmVnRXhwIHwgR3JhbW1hclRva2VuPj59XG4gKiBAcHJvcGVydHkge0dyYW1tYXJ9IFtyZXN0XSBBbiBvcHRpb25hbCBncmFtbWFyIG9iamVjdCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhpcyBncmFtbWFyLlxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiB3aGljaCB3aWxsIGludm9rZWQgYWZ0ZXIgYW4gZWxlbWVudCB3YXMgc3VjY2Vzc2Z1bGx5IGhpZ2hsaWdodGVkLlxuICpcbiAqIEBjYWxsYmFjayBIaWdobGlnaHRDYWxsYmFja1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHN1Y2Nlc3NmdWxseSBoaWdobGlnaHRlZC5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIEhvb2tDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBlbnYgVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgaG9vay5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogQGdsb2JhbFxuICogQHB1YmxpY1xuICovXG4iLCJQcmlzbS5sYW5ndWFnZXMubWFya3VwID0ge1xuXHQnY29tbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvPCEtLSg/Oig/ITwhLS0pW1xcc1xcU10pKj8tLT4vLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQncHJvbG9nJzoge1xuXHRcdHBhdHRlcm46IC88XFw/W1xcc1xcU10rP1xcPz4vLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnZG9jdHlwZSc6IHtcblx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1kb2N0eXBlZGVjbFxuXHRcdHBhdHRlcm46IC88IURPQ1RZUEUoPzpbXj5cIidbXFxdXXxcIlteXCJdKlwifCdbXiddKicpKyg/OlxcWyg/OltePFwiJ1xcXV18XCJbXlwiXSpcInwnW14nXSonfDwoPyEhLS0pfDwhLS0oPzpbXi1dfC0oPyEtPikpKi0tPikqXFxdXFxzKik/Pi9pLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdpbnRlcm5hbC1zdWJzZXQnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oXlteXFxbXSpcXFspW1xcc1xcU10rKD89XFxdPiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IG51bGwgLy8gc2VlIGJlbG93XG5cdFx0XHR9LFxuXHRcdFx0J3N0cmluZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL1wiW15cIl0qXCJ8J1teJ10qJy8sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePCF8PiR8W1tcXF1dLyxcblx0XHRcdCdkb2N0eXBlLXRhZyc6IC9eRE9DVFlQRS9pLFxuXHRcdFx0J25hbWUnOiAvW15cXHM8PidcIl0rL1xuXHRcdH1cblx0fSxcblx0J2NkYXRhJzoge1xuXHRcdHBhdHRlcm46IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT4vaSxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+Lyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGFnJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXjxcXC8/W15cXHM+XFwvXSsvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjxcXC8/Lyxcblx0XHRcdFx0XHQnbmFtZXNwYWNlJzogL15bXlxccz5cXC86XSs6L1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3NwZWNpYWwtYXR0cic6IFtdLFxuXHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC89XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSspLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXj0vLFxuXHRcdFx0XHRcdFx0XHRhbGlhczogJ2F0dHItZXF1YWxzJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLz8+Lyxcblx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fSxcblx0J2VudGl0eSc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvJltcXGRhLXpdezEsOH07L2ksXG5cdFx0XHRhbGlhczogJ25hbWVkLWVudGl0eSdcblx0XHR9LFxuXHRcdC8mI3g/W1xcZGEtZl17MSw4fTsvaVxuXHRdXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2VudGl0eSddID1cblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J107XG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWydkb2N0eXBlJ10uaW5zaWRlWydpbnRlcm5hbC1zdWJzZXQnXS5pbnNpZGUgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXG4vLyBQbHVnaW4gdG8gbWFrZSBlbnRpdHkgdGl0bGUgc2hvdyB0aGUgcmVhbCBlbnRpdHksIGlkZWEgYnkgUm9tYW4gS29tYXJvdlxuUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24gKGVudikge1xuXG5cdGlmIChlbnYudHlwZSA9PT0gJ2VudGl0eScpIHtcblx0XHRlbnYuYXR0cmlidXRlc1sndGl0bGUnXSA9IGVudi5jb250ZW50LnJlcGxhY2UoLyZhbXA7LywgJyYnKTtcblx0fVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG5cdC8qKlxuXHQgKiBBZGRzIGFuIGlubGluZWQgbGFuZ3VhZ2UgdG8gbWFya3VwLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYDxzdHlsZT5gIHRhZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0ICovXG5cdHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcblx0XHR2YXIgaW5jbHVkZWRDZGF0YUluc2lkZSA9IHt9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC8oXjwhXFxbQ0RBVEFcXFspW1xcc1xcU10rPyg/PVxcXVxcXT4kKS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7XG5cblx0XHR2YXIgaW5zaWRlID0ge1xuXHRcdFx0J2luY2x1ZGVkLWNkYXRhJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0XHRcdGluc2lkZTogaW5jbHVkZWRDZGF0YUluc2lkZVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0aW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblxuXHRcdHZhciBkZWYgPSB7fTtcblx0XHRkZWZbdGFnTmFtZV0gPSB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyg8X19bXj5dKj4pKD86PCFcXFtDREFUQVxcWyg/OlteXFxdXXxcXF0oPyFcXF0+KSkqXFxdXFxdPnwoPyE8IVxcW0NEQVRBXFxbKVtcXHNcXFNdKSo/KD89PFxcL19fPikvLnNvdXJjZS5yZXBsYWNlKC9fXy9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0YWdOYW1lOyB9KSwgJ2knKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IGluc2lkZVxuXHRcdH07XG5cblx0XHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCBkZWYpO1xuXHR9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZEF0dHJpYnV0ZScsIHtcblx0LyoqXG5cdCAqIEFkZHMgYW4gcGF0dGVybiB0byBoaWdobGlnaHQgbGFuZ3VhZ2VzIGVtYmVkZGVkIGluIEhUTUwgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQW4gZXhhbXBsZSBvZiBhbiBpbmxpbmVkIGxhbmd1YWdlIGlzIENTUyB3aXRoIGBzdHlsZWAgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGF0dHJOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NzcycpO1xuXHQgKi9cblx0dmFsdWU6IGZ1bmN0aW9uIChhdHRyTmFtZSwgbGFuZykge1xuXHRcdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmluc2lkZVsnc3BlY2lhbC1hdHRyJ10ucHVzaCh7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoXG5cdFx0XHRcdC8oXnxbXCInXFxzXSkvLnNvdXJjZSArICcoPzonICsgYXR0ck5hbWUgKyAnKScgKyAvXFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpLy5zb3VyY2UsXG5cdFx0XHRcdCdpJ1xuXHRcdFx0KSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2F0dHItbmFtZSc6IC9eW15cXHM9XSsvLFxuXHRcdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvPVtcXHNcXFNdKy8sXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQndmFsdWUnOiB7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC8oXj1cXHMqKFtcIiddfCg/IVtcIiddKSkpXFxTW1xcc1xcU10qKD89XFwyJCkvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRhbGlhczogW2xhbmcsICdsYW5ndWFnZS0nICsgbGFuZ10sXG5cdFx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cGF0dGVybjogL149Lyxcblx0XHRcdFx0XHRcdFx0XHRhbGlhczogJ2F0dHItZXF1YWxzJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQvXCJ8Jy9cblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5odG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cblByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5QcmlzbS5sYW5ndWFnZXMuc3NtbCA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG5QcmlzbS5sYW5ndWFnZXMuYXRvbSA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG5QcmlzbS5sYW5ndWFnZXMucnNzID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcbiIsIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgc3RyaW5nID0gLyg/OlwiKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cIlxcXFxcXHJcXG5dKSpcInwnKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W14nXFxcXFxcclxcbl0pKicpLztcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuXHRcdCdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuXHRcdCdhdHJ1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ0BbXFxcXHctXSg/OicgKyAvW147e1xcc1wiJ118XFxzKyg/IVxccykvLnNvdXJjZSArICd8JyArIHN0cmluZy5zb3VyY2UgKyAnKSo/JyArIC8oPzo7fCg/PVxccypcXHspKS8uc291cmNlKSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncnVsZSc6IC9eQFtcXHctXSsvLFxuXHRcdFx0XHQnc2VsZWN0b3ItZnVuY3Rpb24tYXJndW1lbnQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyhcXGJzZWxlY3RvclxccypcXChcXHMqKD8hW1xccyldKSkoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSkrKD89XFxzKlxcKSkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0YWxpYXM6ICdzZWxlY3Rvcidcblx0XHRcdFx0fSxcblx0XHRcdFx0J2tleXdvcmQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyhefFteXFx3LV0pKD86YW5kfG5vdHxvbmx5fG9yKSg/IVtcXHctXSkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTZWUgcmVzdCBiZWxvd1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3VybCc6IHtcblx0XHRcdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnXFxcXGJ1cmxcXFxcKCg/OicgKyBzdHJpbmcuc291cmNlICsgJ3wnICsgLyg/OlteXFxcXFxcclxcbigpXCInXXxcXFxcW1xcc1xcU10pKi8uc291cmNlICsgJylcXFxcKScsICdpJyksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Z1bmN0aW9uJzogL151cmwvaSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJC8sXG5cdFx0XHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKCdeJyArIHN0cmluZy5zb3VyY2UgKyAnJCcpLFxuXHRcdFx0XHRcdGFsaWFzOiAndXJsJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnc2VsZWN0b3InOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJyhefFt7fVxcXFxzXSlbXnt9XFxcXHNdKD86W157fTtcIlxcJ1xcXFxzXXxcXFxccysoPyFbXFxcXHN7XSl8JyArIHN0cmluZy5zb3VyY2UgKyAnKSooPz1cXFxccypcXFxceyknKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiBzdHJpbmcsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdwcm9wZXJ0eSc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXi1cXHdcXHhBMC1cXHVGRkZGXSkoPyFcXHMpWy1fYS16XFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWy1cXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKjopL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnaW1wb3J0YW50JzogLyFpbXBvcnRhbnRcXGIvaSxcblx0XHQnZnVuY3Rpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14tYS16MC05XSlbLWEtejAtOV0rKD89XFwoKS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKXt9OzosXS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5jc3M7XG5cblx0dmFyIG1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdGlmIChtYXJrdXApIHtcblx0XHRtYXJrdXAudGFnLmFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXHRcdG1hcmt1cC50YWcuYWRkQXR0cmlidXRlKCdzdHlsZScsICdjc3MnKTtcblx0fVxuXG59KFByaXNtKSk7XG4iLCIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHN0cmluZyA9IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLztcblx0dmFyIHNlbGVjdG9ySW5zaWRlO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3Muc2VsZWN0b3IgPSB7XG5cdFx0cGF0dGVybjogUHJpc20ubGFuZ3VhZ2VzLmNzcy5zZWxlY3Rvci5wYXR0ZXJuLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiBzZWxlY3Rvckluc2lkZSA9IHtcblx0XHRcdCdwc2V1ZG8tZWxlbWVudCc6IC86KD86YWZ0ZXJ8YmVmb3JlfGZpcnN0LWxldHRlcnxmaXJzdC1saW5lfHNlbGVjdGlvbil8OjpbLVxcd10rLyxcblx0XHRcdCdwc2V1ZG8tY2xhc3MnOiAvOlstXFx3XSsvLFxuXHRcdFx0J2NsYXNzJzogL1xcLlstXFx3XSsvLFxuXHRcdFx0J2lkJzogLyNbLVxcd10rLyxcblx0XHRcdCdhdHRyaWJ1dGUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnXFxcXFsoPzpbXltcXFxcXVwiXFwnXXwnICsgc3RyaW5nLnNvdXJjZSArICcpKlxcXFxdJyksXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXFt8XFxdJC8sXG5cdFx0XHRcdFx0J2Nhc2Utc2Vuc2l0aXZpdHknOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxccylbc2ldJC9pLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKSg/Oig/IVxccylbLSpcXHdcXHhBMC1cXHVGRkZGXSkqXFx8KD8hPSkvLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFx8JC9cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKSg/Oig/IVxccylbLVxcd1xceEEwLVxcdUZGRkZdKSsvLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J2F0dHItdmFsdWUnOiBbXG5cdFx0XHRcdFx0XHRzdHJpbmcsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC8oPVxccyopKD86KD8hXFxzKVstXFx3XFx4QTAtXFx1RkZGRl0pKyg/PVxccyokKS8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdCdvcGVyYXRvcic6IC9bfH4qXiRdPz0vXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnbi10aCc6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFwoXFxzKilbKy1dP1xcZCpbXFxkbl0oPzpcXHMqWystXVxccypcXGQrKT8oPz1cXHMqXFwpKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCdudW1iZXInOiAvW1xcZG5dKy8sXG5cdFx0XHRcdFx0XHQnb3BlcmF0b3InOiAvWystXS9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcKFxccyopKD86ZXZlbnxvZGQpKD89XFxzKlxcKSkvaSxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHQnY29tYmluYXRvcic6IC8+fFxcK3x+fFxcfFxcfC8sXG5cblx0XHRcdC8vIHRoZSBgdGFnYCB0b2tlbiBoYXMgYmVlbiBleGlzdGVkIGFuZCByZW1vdmVkLlxuXHRcdFx0Ly8gYmVjYXVzZSB3ZSBjYW4ndCBmaW5kIGEgcGVyZmVjdCB0b2tlbml6ZSB0byBtYXRjaCBpdC5cblx0XHRcdC8vIGlmIHlvdSB3YW50IHRvIGFkZCBpdCwgcGxlYXNlIHJlYWQgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vcHVsbC8yMzczIGZpcnN0LlxuXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWygpLF0vLFxuXHRcdH1cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGVbJ3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50J10uaW5zaWRlID0gc2VsZWN0b3JJbnNpZGU7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3NzJywgJ3Byb3BlcnR5Jywge1xuXHRcdCd2YXJpYWJsZSc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXi1cXHdcXHhBMC1cXHVGRkZGXSktLSg/IVxccylbLV9hLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbLVxcd1xceEEwLVxcdUZGRkZdKSovaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdH0pO1xuXG5cdHZhciB1bml0ID0ge1xuXHRcdHBhdHRlcm46IC8oXFxiXFxkKykoPzolfFthLXpdKyg/IVtcXHctXSkpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH07XG5cdC8vIDEyMyAtMTIzIC4xMjMgLS4xMjMgMTIuMyAtMTIuM1xuXHR2YXIgbnVtYmVyID0ge1xuXHRcdHBhdHRlcm46IC8oXnxbXlxcdy4tXSktPyg/OlxcZCsoPzpcXC5cXGQrKT98XFwuXFxkKykvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjc3MnLCAnZnVuY3Rpb24nLCB7XG5cdFx0J29wZXJhdG9yJzoge1xuXHRcdFx0cGF0dGVybjogLyhcXHMpWytcXC0qXFwvXSg/PVxccykvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0Ly8gQ0FSRUZVTCFcblx0XHQvLyBQcmV2aWV3ZXJzIGFuZCBJbmxpbmUgY29sb3IgdXNlIGhleGNvZGUgYW5kIGNvbG9yLlxuXHRcdCdoZXhjb2RlJzoge1xuXHRcdFx0cGF0dGVybjogL1xcQiNbXFxkYS1mXXszLDh9XFxiL2ksXG5cdFx0XHRhbGlhczogJ2NvbG9yJ1xuXHRcdH0sXG5cdFx0J2NvbG9yJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF58W15cXHctXSkoPzpBbGljZUJsdWV8QW50aXF1ZVdoaXRlfEFxdWF8QXF1YW1hcmluZXxBenVyZXxCZWlnZXxCaXNxdWV8QmxhY2t8QmxhbmNoZWRBbG1vbmR8Qmx1ZXxCbHVlVmlvbGV0fEJyb3dufEJ1cmx5V29vZHxDYWRldEJsdWV8Q2hhcnRyZXVzZXxDaG9jb2xhdGV8Q29yYWx8Q29ybmZsb3dlckJsdWV8Q29ybnNpbGt8Q3JpbXNvbnxDeWFufERhcmtCbHVlfERhcmtDeWFufERhcmtHb2xkZW5Sb2R8RGFya0dyW2FlXXl8RGFya0dyZWVufERhcmtLaGFraXxEYXJrTWFnZW50YXxEYXJrT2xpdmVHcmVlbnxEYXJrT3JhbmdlfERhcmtPcmNoaWR8RGFya1JlZHxEYXJrU2FsbW9ufERhcmtTZWFHcmVlbnxEYXJrU2xhdGVCbHVlfERhcmtTbGF0ZUdyW2FlXXl8RGFya1R1cnF1b2lzZXxEYXJrVmlvbGV0fERlZXBQaW5rfERlZXBTa3lCbHVlfERpbUdyW2FlXXl8RG9kZ2VyQmx1ZXxGaXJlQnJpY2t8RmxvcmFsV2hpdGV8Rm9yZXN0R3JlZW58RnVjaHNpYXxHYWluc2Jvcm98R2hvc3RXaGl0ZXxHb2xkfEdvbGRlblJvZHxHclthZV15fEdyZWVufEdyZWVuWWVsbG93fEhvbmV5RGV3fEhvdFBpbmt8SW5kaWFuUmVkfEluZGlnb3xJdm9yeXxLaGFraXxMYXZlbmRlcnxMYXZlbmRlckJsdXNofExhd25HcmVlbnxMZW1vbkNoaWZmb258TGlnaHRCbHVlfExpZ2h0Q29yYWx8TGlnaHRDeWFufExpZ2h0R29sZGVuUm9kWWVsbG93fExpZ2h0R3JbYWVdeXxMaWdodEdyZWVufExpZ2h0UGlua3xMaWdodFNhbG1vbnxMaWdodFNlYUdyZWVufExpZ2h0U2t5Qmx1ZXxMaWdodFNsYXRlR3JbYWVdeXxMaWdodFN0ZWVsQmx1ZXxMaWdodFllbGxvd3xMaW1lfExpbWVHcmVlbnxMaW5lbnxNYWdlbnRhfE1hcm9vbnxNZWRpdW1BcXVhTWFyaW5lfE1lZGl1bUJsdWV8TWVkaXVtT3JjaGlkfE1lZGl1bVB1cnBsZXxNZWRpdW1TZWFHcmVlbnxNZWRpdW1TbGF0ZUJsdWV8TWVkaXVtU3ByaW5nR3JlZW58TWVkaXVtVHVycXVvaXNlfE1lZGl1bVZpb2xldFJlZHxNaWRuaWdodEJsdWV8TWludENyZWFtfE1pc3R5Um9zZXxNb2NjYXNpbnxOYXZham9XaGl0ZXxOYXZ5fE9sZExhY2V8T2xpdmV8T2xpdmVEcmFifE9yYW5nZXxPcmFuZ2VSZWR8T3JjaGlkfFBhbGVHb2xkZW5Sb2R8UGFsZUdyZWVufFBhbGVUdXJxdW9pc2V8UGFsZVZpb2xldFJlZHxQYXBheWFXaGlwfFBlYWNoUHVmZnxQZXJ1fFBpbmt8UGx1bXxQb3dkZXJCbHVlfFB1cnBsZXxSZWJlY2NhUHVycGxlfFJlZHxSb3N5QnJvd258Um95YWxCbHVlfFNhZGRsZUJyb3dufFNhbG1vbnxTYW5keUJyb3dufFNlYUdyZWVufFNlYVNoZWxsfFNpZW5uYXxTaWx2ZXJ8U2t5Qmx1ZXxTbGF0ZUJsdWV8U2xhdGVHclthZV15fFNub3d8U3ByaW5nR3JlZW58U3RlZWxCbHVlfFRhbnxUZWFsfFRoaXN0bGV8VG9tYXRvfFRyYW5zcGFyZW50fFR1cnF1b2lzZXxWaW9sZXR8V2hlYXR8V2hpdGV8V2hpdGVTbW9rZXxZZWxsb3d8WWVsbG93R3JlZW4pKD8hW1xcdy1dKS9pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiKD86aHNsfHJnYilcXChcXHMqXFxkezEsM31cXHMqLFxccypcXGR7MSwzfSU/XFxzKixcXHMqXFxkezEsM30lP1xccypcXClcXEJ8XFxiKD86aHNsfHJnYilhXFwoXFxzKlxcZHsxLDN9XFxzKixcXHMqXFxkezEsM30lP1xccyosXFxzKlxcZHsxLDN9JT9cXHMqLFxccyooPzowfDA/XFwuXFxkK3wxKVxccypcXClcXEIvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3VuaXQnOiB1bml0LFxuXHRcdFx0XHRcdCdudW1iZXInOiBudW1iZXIsXG5cdFx0XHRcdFx0J2Z1bmN0aW9uJzogL1tcXHctXSsoPz1cXCgpLyxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvWygpLF0vXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdC8vIGl0J3MgaW1wb3J0YW50IHRoYXQgdGhlcmUgaXMgbm8gYm91bmRhcnkgYXNzZXJ0aW9uIGFmdGVyIHRoZSBoZXggZGlnaXRzXG5cdFx0J2VudGl0eSc6IC9cXFxcW1xcZGEtZl17MSw4fS9pLFxuXHRcdCd1bml0JzogdW5pdCxcblx0XHQnbnVtYmVyJzogbnVtYmVyXG5cdH0pO1xuXG59KFByaXNtKSk7XG4iLCJQcmlzbS5sYW5ndWFnZXMuY2xpa2UgPSB7XG5cdCdjb21tZW50JzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0cGF0dGVybjogLyhcXGIoPzpjbGFzc3xleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxpbnRlcmZhY2V8bmV3fHRyYWl0KVxccyt8XFxiY2F0Y2hcXHMrXFwoKVtcXHcuXFxcXF0rL2ksXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9bLlxcXFxdL1xuXHRcdH1cblx0fSxcblx0J2tleXdvcmQnOiAvXFxiKD86YnJlYWt8Y2F0Y2h8Y29udGludWV8ZG98ZWxzZXxmaW5hbGx5fGZvcnxmdW5jdGlvbnxpZnxpbnxpbnN0YW5jZW9mfG5ld3xudWxsfHJldHVybnx0aHJvd3x0cnl8d2hpbGUpXFxiLyxcblx0J2Jvb2xlYW4nOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuXHQnZnVuY3Rpb24nOiAvXFxiXFx3Kyg/PVxcKCkvLFxuXHQnbnVtYmVyJzogL1xcYjB4W1xcZGEtZl0rXFxifCg/OlxcYlxcZCsoPzpcXC5cXGQqKT98XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaSxcblx0J29wZXJhdG9yJzogL1s8Pl09P3xbIT1dPT89P3wtLT98XFwrXFwrP3wmJj98XFx8XFx8P3xbPyovfl4lXS8sXG5cdCdwdW5jdHVhdGlvbic6IC9be31bXFxdOygpLC46XS9cbn07XG4iLCJQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY2xhc3MtbmFtZSc6IFtcblx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVtfJEEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxcLig/OmNvbnN0cnVjdG9yfHByb3RvdHlwZSkpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XnxcXH0pXFxzKiljYXRjaFxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzc2VydCg/PVxccypcXHspfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5KD89XFxzKig/Olxce3wkKSl8Zm9yfGZyb20oPz1cXHMqKD86WydcIl18JCkpfGZ1bmN0aW9ufCg/OmdldHxzZXQpKD89XFxzKig/OlsjXFxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XSxcblx0Ly8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG5cdCdmdW5jdGlvbic6IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcblx0J251bWJlcic6IHtcblx0XHRwYXR0ZXJuOiBSZWdFeHAoXG5cdFx0XHQvKF58W15cXHckXSkvLnNvdXJjZSArXG5cdFx0XHQnKD86JyArXG5cdFx0XHQoXG5cdFx0XHRcdC8vIGNvbnN0YW50XG5cdFx0XHRcdC9OYU58SW5maW5pdHkvLnNvdXJjZSArXG5cdFx0XHRcdCd8JyArXG5cdFx0XHRcdC8vIGJpbmFyeSBpbnRlZ2VyXG5cdFx0XHRcdC8wW2JCXVswMV0rKD86X1swMV0rKSpuPy8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gb2N0YWwgaW50ZWdlclxuXHRcdFx0XHQvMFtvT11bMC03XSsoPzpfWzAtN10rKSpuPy8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gaGV4YWRlY2ltYWwgaW50ZWdlclxuXHRcdFx0XHQvMFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuPy8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gZGVjaW1hbCBiaWdpbnRcblx0XHRcdFx0L1xcZCsoPzpfXFxkKykqbi8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gZGVjaW1hbCBudW1iZXIgKGludGVnZXIgb3IgZmxvYXQpIGJ1dCBubyBiaWdpbnRcblx0XHRcdFx0Lyg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8vLnNvdXJjZVxuXHRcdFx0KSArXG5cdFx0XHQnKScgK1xuXHRcdFx0Lyg/IVtcXHckXSkvLnNvdXJjZVxuXHRcdCksXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQnb3BlcmF0b3InOiAvLS18XFwrXFwrfFxcKlxcKj0/fD0+fCYmPT98XFx8XFx8PT98WyE9XT09fDw8PT98Pj4+Pz0/fFstKyovJSZ8XiE9PD5dPT98XFwuezN9fFxcP1xcPz0/fFxcP1xcLj98W346XS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnY2xhc3MtbmFtZSddWzBdLnBhdHRlcm4gPSAvKFxcYig/OmNsYXNzfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfGludGVyZmFjZXxuZXcpXFxzKylbXFx3LlxcXFxdKy87XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAna2V5d29yZCcsIHtcblx0J3JlZ2V4Jzoge1xuXHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdC8vIGxvb2tiZWhpbmRcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZHVwZS1jaGFyYWN0ZXJzLWNoYXJhY3Rlci1jbGFzc1xuXHRcdFx0LygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc118XFxiKD86cmV0dXJufHlpZWxkKSlcXHMqKS8uc291cmNlICtcblx0XHRcdC8vIFJlZ2V4IHBhdHRlcm46XG5cdFx0XHQvLyBUaGVyZSBhcmUgMiByZWdleCBwYXR0ZXJucyBoZXJlLiBUaGUgUmVnRXhwIHNldCBub3RhdGlvbiBwcm9wb3NhbCBhZGRlZCBzdXBwb3J0IGZvciBuZXN0ZWQgY2hhcmFjdGVyXG5cdFx0XHQvLyBjbGFzc2VzIGlmIHRoZSBgdmAgZmxhZyBpcyBwcmVzZW50LiBVbmZvcnR1bmF0ZWx5LCBuZXN0ZWQgQ0NzIGFyZSBib3RoIGNvbnRleHQtZnJlZSBhbmQgaW5jb21wYXRpYmxlXG5cdFx0XHQvLyB3aXRoIHRoZSBvbmx5IHN5bnRheCwgc28gd2UgaGF2ZSB0byBkZWZpbmUgMiBkaWZmZXJlbnQgcmVnZXggcGF0dGVybnMuXG5cdFx0XHQvXFwvLy5zb3VyY2UgK1xuXHRcdFx0Jyg/OicgK1xuXHRcdFx0Lyg/OlxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKlxcXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2RnaW15dXNdezAsN30vLnNvdXJjZSArXG5cdFx0XHQnfCcgK1xuXHRcdFx0Ly8gYHZgIGZsYWcgc3ludGF4LiBUaGlzIHN1cHBvcnRzIDMgbGV2ZWxzIG9mIG5lc3RlZCBjaGFyYWN0ZXIgY2xhc3Nlcy5cblx0XHRcdC8oPzpcXFsoPzpbXltcXF1cXFxcXFxyXFxuXXxcXFxcLnxcXFsoPzpbXltcXF1cXFxcXFxyXFxuXXxcXFxcLnxcXFsoPzpbXltcXF1cXFxcXFxyXFxuXXxcXFxcLikqXFxdKSpcXF0pKlxcXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2RnaW15dXNdezAsN312W2RnaW15dXNdezAsN30vLnNvdXJjZSArXG5cdFx0XHQnKScgK1xuXHRcdFx0Ly8gbG9va2FoZWFkXG5cdFx0XHQvKD89KD86XFxzfFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSkqXFwqXFwvKSooPzokfFtcXHJcXG4sLjs6fSlcXF1dfFxcL1xcLykpLy5zb3VyY2Vcblx0XHQpLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3JlZ2V4LXNvdXJjZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFwvKVtcXHNcXFNdKyg/PVxcL1thLXpdKiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1yZWdleCcsXG5cdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnJlZ2V4XG5cdFx0XHR9LFxuXHRcdFx0J3JlZ2V4LWRlbGltaXRlcic6IC9eXFwvfFxcLyQvLFxuXHRcdFx0J3JlZ2V4LWZsYWdzJzogL15bYS16XSskLyxcblx0XHR9XG5cdH0sXG5cdC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcblx0J2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfCg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopXFxzKj0+KSkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdwYXJhbWV0ZXInOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhmdW5jdGlvbig/OlxccysoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoW14oKV0qXFwpKSsoPz1cXHMqXFwpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbXyRhLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqPT4pL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqPT4pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzooPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqXFxzKilcXChcXHMqfFxcXVxccypcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCdoYXNoYmFuZyc6IHtcblx0XHRwYXR0ZXJuOiAvXiMhLiovLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ2NvbW1lbnQnXG5cdH0sXG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkXFx7KD86W157fV18XFx7KD86W157fV18XFx7W159XSpcXH0pKlxcfSkrXFx9fCg/IVxcJFxceylbXlxcXFxgXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXmB8YCQvLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJFxceyg/Oltee31dfFxceyg/Oltee31dfFxce1tefV0qXFx9KSpcXH0pK1xcfS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCRcXHt8XFx9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fSxcblx0J3N0cmluZy1wcm9wZXJ0eSc6IHtcblx0XHRwYXR0ZXJuOiAvKCg/Ol58Wyx7XSlbIFxcdF0qKShbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDIpW15cXFxcXFxyXFxuXSkqXFwyKD89XFxzKjopL20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnb3BlcmF0b3InLCB7XG5cdCdsaXRlcmFsLXByb3BlcnR5Jzoge1xuXHRcdHBhdHRlcm46IC8oKD86XnxbLHtdKVsgXFx0XSopKD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccyo6KS9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0fSxcbn0pO1xuXG5pZiAoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCkge1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzY3JpcHQnLCAnamF2YXNjcmlwdCcpO1xuXG5cdC8vIGFkZCBhdHRyaWJ1dGUgc3VwcG9ydCBmb3IgYWxsIERPTSBldmVudHMuXG5cdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cyNTdGFuZGFyZF9ldmVudHNcblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkQXR0cmlidXRlKFxuXHRcdC9vbig/OmFib3J0fGJsdXJ8Y2hhbmdlfGNsaWNrfGNvbXBvc2l0aW9uKD86ZW5kfHN0YXJ0fHVwZGF0ZSl8ZGJsY2xpY2t8ZXJyb3J8Zm9jdXMoPzppbnxvdXQpP3xrZXkoPzpkb3dufHVwKXxsb2FkfG1vdXNlKD86ZG93bnxlbnRlcnxsZWF2ZXxtb3ZlfG91dHxvdmVyfHVwKXxyZXNldHxyZXNpemV8c2Nyb2xsfHNlbGVjdHxzbG90Y2hhbmdlfHN1Ym1pdHx1bmxvYWR8d2hlZWwpLy5zb3VyY2UsXG5cdFx0J2phdmFzY3JpcHQnXG5cdCk7XG59XG5cblByaXNtLmxhbmd1YWdlcy5qcyA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0O1xuIiwiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHQgKiBAcmV0dXJucyB7UmVnRXhwfVxuXHQgKi9cblx0ZnVuY3Rpb24gaGVhZGVyVmFsdWVPZihuYW1lKSB7XG5cdFx0cmV0dXJuIFJlZ0V4cCgnKF4oPzonICsgbmFtZSArICcpOlsgXFx0XSooPyFbIFxcdF0pKVteXSsnLCAnaScpO1xuXHR9XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmh0dHAgPSB7XG5cdFx0J3JlcXVlc3QtbGluZSc6IHtcblx0XHRcdHBhdHRlcm46IC9eKD86Q09OTkVDVHxERUxFVEV8R0VUfEhFQUR8T1BUSU9OU3xQQVRDSHxQT1NUfFBSSXxQVVR8U0VBUkNIfFRSQUNFKVxccyg/Omh0dHBzPzpcXC9cXC98XFwvKVxcUypcXHNIVFRQXFwvW1xcZC5dKy9tLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdC8vIEhUVFAgTWV0aG9kXG5cdFx0XHRcdCdtZXRob2QnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL15bQS1aXStcXGIvLFxuXHRcdFx0XHRcdGFsaWFzOiAncHJvcGVydHknXG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIFJlcXVlc3QgVGFyZ2V0IGUuZy4gaHR0cDovL2V4YW1wbGUuY29tLCAvcGF0aC90by9maWxlXG5cdFx0XHRcdCdyZXF1ZXN0LXRhcmdldCc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMpKD86aHR0cHM/OlxcL1xcL3xcXC8pXFxTKig/PVxccykvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0YWxpYXM6ICd1cmwnLFxuXHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnVyaVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBIVFRQIFZlcnNpb25cblx0XHRcdFx0J2h0dHAtdmVyc2lvbic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMpSFRUUFxcL1tcXGQuXSsvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0XHRcdFx0fSxcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdyZXNwb25zZS1zdGF0dXMnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXkhUVFBcXC9bXFxkLl0rIFxcZCsgLisvbSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQvLyBIVFRQIFZlcnNpb25cblx0XHRcdFx0J2h0dHAtdmVyc2lvbic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXkhUVFBcXC9bXFxkLl0rLyxcblx0XHRcdFx0XHRhbGlhczogJ3Byb3BlcnR5J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBTdGF0dXMgQ29kZVxuXHRcdFx0XHQnc3RhdHVzLWNvZGUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKVxcZCsoPz1cXHMpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAnbnVtYmVyJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBSZWFzb24gUGhyYXNlXG5cdFx0XHRcdCdyZWFzb24tcGhyYXNlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eKFxccykuKy8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2hlYWRlcic6IHtcblx0XHRcdHBhdHRlcm46IC9eW1xcdy1dKzouKyg/Oig/Olxcclxcbj98XFxuKVsgXFx0XS4rKSovbSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnaGVhZGVyLXZhbHVlJzogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IGhlYWRlclZhbHVlT2YoL0NvbnRlbnQtU2VjdXJpdHktUG9saWN5Ly5zb3VyY2UpLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGFsaWFzOiBbJ2NzcCcsICdsYW5ndWFnZXMtY3NwJ10sXG5cdFx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jc3Bcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IGhlYWRlclZhbHVlT2YoL1B1YmxpYy1LZXktUGlucyg/Oi1SZXBvcnQtT25seSk/Ly5zb3VyY2UpLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGFsaWFzOiBbJ2hwa3AnLCAnbGFuZ3VhZ2VzLWhwa3AnXSxcblx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmhwa3Bcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IGhlYWRlclZhbHVlT2YoL1N0cmljdC1UcmFuc3BvcnQtU2VjdXJpdHkvLnNvdXJjZSksXG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdFx0YWxpYXM6IFsnaHN0cycsICdsYW5ndWFnZXMtaHN0cyddLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuaHN0c1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cGF0dGVybjogaGVhZGVyVmFsdWVPZigvW146XSsvLnNvdXJjZSksXG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHQnaGVhZGVyLW5hbWUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL15bXjpdKy8sXG5cdFx0XHRcdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjovXG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgb2YgQ29udGVudC1UeXBlIGhlYWRlcnMgdG8gbGFuZ3VhZ2UgZGVmaW5pdGlvbnNcblx0dmFyIGxhbmdzID0gUHJpc20ubGFuZ3VhZ2VzO1xuXHR2YXIgaHR0cExhbmd1YWdlcyA9IHtcblx0XHQnYXBwbGljYXRpb24vamF2YXNjcmlwdCc6IGxhbmdzLmphdmFzY3JpcHQsXG5cdFx0J2FwcGxpY2F0aW9uL2pzb24nOiBsYW5ncy5qc29uIHx8IGxhbmdzLmphdmFzY3JpcHQsXG5cdFx0J2FwcGxpY2F0aW9uL3htbCc6IGxhbmdzLnhtbCxcblx0XHQndGV4dC94bWwnOiBsYW5ncy54bWwsXG5cdFx0J3RleHQvaHRtbCc6IGxhbmdzLmh0bWwsXG5cdFx0J3RleHQvY3NzJzogbGFuZ3MuY3NzLFxuXHRcdCd0ZXh0L3BsYWluJzogbGFuZ3MucGxhaW5cblx0fTtcblxuXHQvLyBEZWNsYXJlIHdoaWNoIHR5cGVzIGNhbiBhbHNvIGJlIHN1ZmZpeGVzXG5cdHZhciBzdWZmaXhUeXBlcyA9IHtcblx0XHQnYXBwbGljYXRpb24vanNvbic6IHRydWUsXG5cdFx0J2FwcGxpY2F0aW9uL3htbCc6IHRydWVcblx0fTtcblxuXHQvKipcblx0ICogUmV0dXJucyBhIHBhdHRlcm4gZm9yIHRoZSBnaXZlbiBjb250ZW50IHR5cGUgd2hpY2ggbWF0Y2hlcyBpdCBhbmQgYW55IHR5cGUgd2hpY2ggaGFzIGl0IGFzIGEgc3VmZml4LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFR5cGVcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIGdldFN1ZmZpeFBhdHRlcm4oY29udGVudFR5cGUpIHtcblx0XHR2YXIgc3VmZml4ID0gY29udGVudFR5cGUucmVwbGFjZSgvXlthLXpdK1xcLy8sICcnKTtcblx0XHR2YXIgc3VmZml4UGF0dGVybiA9ICdcXFxcdysvKD86W1xcXFx3Li1dK1xcXFwrKSsnICsgc3VmZml4ICsgJyg/IVsrXFxcXHcuLV0pJztcblx0XHRyZXR1cm4gJyg/OicgKyBjb250ZW50VHlwZSArICd8JyArIHN1ZmZpeFBhdHRlcm4gKyAnKSc7XG5cdH1cblxuXHQvLyBJbnNlcnQgZWFjaCBjb250ZW50IHR5cGUgcGFyc2VyIHRoYXQgaGFzIGl0cyBhc3NvY2lhdGVkIGxhbmd1YWdlXG5cdC8vIGN1cnJlbnRseSBsb2FkZWQuXG5cdHZhciBvcHRpb25zO1xuXHRmb3IgKHZhciBjb250ZW50VHlwZSBpbiBodHRwTGFuZ3VhZ2VzKSB7XG5cdFx0aWYgKGh0dHBMYW5ndWFnZXNbY29udGVudFR5cGVdKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdFx0dmFyIHBhdHRlcm4gPSBzdWZmaXhUeXBlc1tjb250ZW50VHlwZV0gPyBnZXRTdWZmaXhQYXR0ZXJuKGNvbnRlbnRUeXBlKSA6IGNvbnRlbnRUeXBlO1xuXHRcdFx0b3B0aW9uc1tjb250ZW50VHlwZS5yZXBsYWNlKC9cXC8vZywgJy0nKV0gPSB7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdFx0XHQnKCcgKyAvY29udGVudC10eXBlOlxccyovLnNvdXJjZSArIHBhdHRlcm4gKyAvKD86KD86XFxyXFxuP3xcXG4pW1xcdy1dLiopKig/Olxccig/OlxcbnwoPyFcXG4pKXxcXG4pLy5zb3VyY2UgKyAnKScgK1xuXHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBsaXR0bGUgaW50ZXJlc3Rpbmc6XG5cdFx0XHRcdFx0Ly8gVGhlIEhUVFAgZm9ybWF0IHNwZWMgcmVxdWlyZWQgMSBlbXB0eSBsaW5lIGJlZm9yZSB0aGUgYm9keSB0byBtYWtlIGV2ZXJ5dGhpbmcgdW5hbWJpZ3VvdXMuXG5cdFx0XHRcdFx0Ly8gSG93ZXZlciwgd2hlbiB3cml0aW5nIGNvZGUgYnkgaGFuZCAoZS5nLiB0byBkaXNwbGF5IG9uIGEgd2Vic2l0ZSkgcGVvcGxlIGNhbiBmb3JnZXQgYWJvdXQgdGhpcyxcblx0XHRcdFx0XHQvLyBzbyB3ZSB3YW50IHRvIGJlIGxpYmVyYWwgaGVyZS4gV2Ugd2lsbCBhbGxvdyB0aGUgZW1wdHkgbGluZSB0byBiZSBvbWl0dGVkIGlmIHRoZSBmaXJzdCBsaW5lIG9mXG5cdFx0XHRcdFx0Ly8gdGhlIGJvZHkgZG9lcyBub3Qgc3RhcnQgd2l0aCBhIFtcXHctXSBjaGFyYWN0ZXIgKGFzIGhlYWRlcnMgZG8pLlxuXHRcdFx0XHRcdC9bXiBcXHRcXHctXVtcXHNcXFNdKi8uc291cmNlLFxuXHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IGh0dHBMYW5ndWFnZXNbY29udGVudFR5cGVdXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHRpZiAob3B0aW9ucykge1xuXHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2h0dHAnLCAnaGVhZGVyJywgb3B0aW9ucyk7XG5cdH1cblxufShQcmlzbSkpO1xuIiwiUHJpc20ubGFuZ3VhZ2VzLnNjc3MgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLiopLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdhdHJ1bGUnOiB7XG5cdFx0cGF0dGVybjogL0BbXFx3LV0oPzpcXChbXigpXStcXCl8W14oKVxcc118XFxzKyg/IVxccykpKj8oPz1cXHMrW3s7XSkvLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3J1bGUnOiAvQFtcXHctXSsvXG5cdFx0XHQvLyBTZWUgcmVzdCBiZWxvd1xuXHRcdH1cblx0fSxcblx0Ly8gdXJsLCBjb21wYXNzaWZpZWRcblx0J3VybCc6IC8oPzpbLWEtel0rLSk/dXJsKD89XFwoKS9pLFxuXHQvLyBDU1Mgc2VsZWN0b3IgcmVnZXggaXMgbm90IGFwcHJvcHJpYXRlIGZvciBTYXNzXG5cdC8vIHNpbmNlIHRoZXJlIGNhbiBiZSBsb3QgbW9yZSB0aGluZ3MgKHZhciwgQCBkaXJlY3RpdmUsIG5lc3RpbmcuLilcblx0Ly8gYSBzZWxlY3RvciBtdXN0IHN0YXJ0IGF0IHRoZSBlbmQgb2YgYSBwcm9wZXJ0eSBvciBhZnRlciBhIGJyYWNlIChlbmQgb2Ygb3RoZXIgcnVsZXMgb3IgbmVzdGluZylcblx0Ly8gaXQgY2FuIGNvbnRhaW4gc29tZSBjaGFyYWN0ZXJzIHRoYXQgYXJlbid0IHVzZWQgZm9yIGRlZmluaW5nIHJ1bGVzIG9yIGVuZCBvZiBzZWxlY3RvciwgJiAocGFyZW50IHNlbGVjdG9yKSwgb3IgaW50ZXJwb2xhdGVkIHZhcmlhYmxlXG5cdC8vIHRoZSBlbmQgb2YgYSBzZWxlY3RvciBpcyBmb3VuZCB3aGVuIHRoZXJlIGlzIG5vIHJ1bGVzIGluIGl0ICgge30gb3Ige1xcc30pIG9yIGlmIHRoZXJlIGlzIGEgcHJvcGVydHkgKGJlY2F1c2UgYW4gaW50ZXJwb2xhdGVkIHZhclxuXHQvLyBjYW4gXCJwYXNzXCIgYXMgYSBzZWxlY3Rvci0gZS5nOiBwcm9wZXIjeyRlcnR5fSlcblx0Ly8gdGhpcyBvbmUgd2FzIGhhcmQgdG8gZG8sIHNvIHBsZWFzZSBiZSBjYXJlZnVsIGlmIHlvdSBlZGl0IHRoaXMgb25lIDopXG5cdCdzZWxlY3Rvcic6IHtcblx0XHQvLyBJbml0aWFsIGxvb2stYWhlYWQgaXMgdXNlZCB0byBwcmV2ZW50IG1hdGNoaW5nIG9mIGJsYW5rIHNlbGVjdG9yc1xuXHRcdHBhdHRlcm46IC8oPz1cXFMpW15AO3t9KCldPyg/OlteQDt7fSgpXFxzXXxcXHMrKD8hXFxzKXwjXFx7XFwkWy1cXHddK1xcfSkrKD89XFxzKlxceyg/OlxcfXxcXHN8W159XVteOnt9XSpbOntdW159XSkpLyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwYXJlbnQnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8mLyxcblx0XHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0XHR9LFxuXHRcdFx0J3BsYWNlaG9sZGVyJzogLyVbLVxcd10rLyxcblx0XHRcdCd2YXJpYWJsZSc6IC9cXCRbLVxcd10rfCNcXHtcXCRbLVxcd10rXFx9L1xuXHRcdH1cblx0fSxcblx0J3Byb3BlcnR5Jzoge1xuXHRcdHBhdHRlcm46IC8oPzpbLVxcd118XFwkWy1cXHddfCNcXHtcXCRbLVxcd10rXFx9KSsoPz1cXHMqOikvLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3ZhcmlhYmxlJzogL1xcJFstXFx3XSt8I1xce1xcJFstXFx3XStcXH0vXG5cdFx0fVxuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2NzcycsICdhdHJ1bGUnLCB7XG5cdCdrZXl3b3JkJzogW1xuXHRcdC9AKD86Y29udGVudHxkZWJ1Z3xlYWNofGVsc2UoPzogaWYpP3xleHRlbmR8Zm9yfGZvcndhcmR8ZnVuY3Rpb258aWZ8aW1wb3J0fGluY2x1ZGV8bWl4aW58cmV0dXJufHVzZXx3YXJufHdoaWxlKVxcYi9pLFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oICkoPzpmcm9tfHRocm91Z2gpKD89ICkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Njc3MnLCAnaW1wb3J0YW50Jywge1xuXHQvLyB2YXIgYW5kIGludGVycG9sYXRlZCB2YXJzXG5cdCd2YXJpYWJsZSc6IC9cXCRbLVxcd10rfCNcXHtcXCRbLVxcd10rXFx9L1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Njc3MnLCAnZnVuY3Rpb24nLCB7XG5cdCdtb2R1bGUtbW9kaWZpZXInOiB7XG5cdFx0cGF0dGVybjogL1xcYig/OmFzfGhpZGV8c2hvd3x3aXRoKVxcYi9pLFxuXHRcdGFsaWFzOiAna2V5d29yZCdcblx0fSxcblx0J3BsYWNlaG9sZGVyJzoge1xuXHRcdHBhdHRlcm46IC8lWy1cXHddKy8sXG5cdFx0YWxpYXM6ICdzZWxlY3Rvcidcblx0fSxcblx0J3N0YXRlbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvXFxCISg/OmRlZmF1bHR8b3B0aW9uYWwpXFxiL2ksXG5cdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHR9LFxuXHQnYm9vbGVhbic6IC9cXGIoPzpmYWxzZXx0cnVlKVxcYi8sXG5cdCdudWxsJzoge1xuXHRcdHBhdHRlcm46IC9cXGJudWxsXFxiLyxcblx0XHRhbGlhczogJ2tleXdvcmQnXG5cdH0sXG5cdCdvcGVyYXRvcic6IHtcblx0XHRwYXR0ZXJuOiAvKFxccykoPzpbLSsqXFwvJV18Wz0hXT18PD0/fD49P3xhbmR8bm90fG9yKSg/PVxccykvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5zY3NzWydhdHJ1bGUnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5zY3NzO1xuIiwiUHJpc20ubGFuZ3VhZ2VzLnNxbCA9IHtcblx0J2NvbW1lbnQnOiB7XG5cdFx0cGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3woPzotLXxcXC9cXC98IykuKikvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J3ZhcmlhYmxlJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9AKFtcIidgXSkoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pK1xcMS8sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdC9AW1xcdy4kXSsvXG5cdF0sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLyhefFteQFxcXFxdKShcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDIpW15cXFxcXXxcXDJcXDIpKlxcMi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J2lkZW50aWZpZXInOiB7XG5cdFx0cGF0dGVybjogLyhefFteQFxcXFxdKWAoPzpcXFxcW1xcc1xcU118W15gXFxcXF18YGApKmAvLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3B1bmN0dWF0aW9uJzogL15gfGAkL1xuXHRcdH1cblx0fSxcblx0J2Z1bmN0aW9uJzogL1xcYig/OkFWR3xDT1VOVHxGSVJTVHxGT1JNQVR8TEFTVHxMQ0FTRXxMRU58TUFYfE1JRHxNSU58TU9EfE5PV3xST1VORHxTVU18VUNBU0UpKD89XFxzKlxcKCkvaSwgLy8gU2hvdWxkIHdlIGhpZ2hsaWdodCB1c2VyIGRlZmluZWQgZnVuY3Rpb25zIHRvbz9cblx0J2tleXdvcmQnOiAvXFxiKD86QUNUSU9OfEFERHxBRlRFUnxBTEdPUklUSE18QUxMfEFMVEVSfEFOQUxZWkV8QU5ZfEFQUExZfEFTfEFTQ3xBVVRIT1JJWkFUSU9OfEFVVE9fSU5DUkVNRU5UfEJBQ0tVUHxCREJ8QkVHSU58QkVSS0VMRVlEQnxCSUdJTlR8QklOQVJZfEJJVHxCTE9CfEJPT0x8Qk9PTEVBTnxCUkVBS3xCUk9XU0V8QlRSRUV8QlVMS3xCWXxDQUxMfENBU0NBREVEP3xDQVNFfENIQUlOfENIQVIoPzpBQ1RFUnxTRVQpP3xDSEVDSyg/OlBPSU5UKT98Q0xPU0V8Q0xVU1RFUkVEfENPQUxFU0NFfENPTExBVEV8Q09MVU1OUz98Q09NTUVOVHxDT01NSVQoPzpURUQpP3xDT01QVVRFfENPTk5FQ1R8Q09OU0lTVEVOVHxDT05TVFJBSU5UfENPTlRBSU5TKD86VEFCTEUpP3xDT05USU5VRXxDT05WRVJUfENSRUFURXxDUk9TU3xDVVJSRU5UKD86X0RBVEV8X1RJTUV8X1RJTUVTVEFNUHxfVVNFUik/fENVUlNPUnxDWUNMRXxEQVRBKD86QkFTRVM/KT98REFURSg/OlRJTUUpP3xEQVl8REJDQ3xERUFMTE9DQVRFfERFQ3xERUNJTUFMfERFQ0xBUkV8REVGQVVMVHxERUZJTkVSfERFTEFZRUR8REVMRVRFfERFTElNSVRFUlM/fERFTll8REVTQ3xERVNDUklCRXxERVRFUk1JTklTVElDfERJU0FCTEV8RElTQ0FSRHxESVNLfERJU1RJTkNUfERJU1RJTkNUUk9XfERJU1RSSUJVVEVEfERPfERPVUJMRXxEUk9QfERVTU1ZfERVTVAoPzpGSUxFKT98RFVQTElDQVRFfEVMU0UoPzpJRik/fEVOQUJMRXxFTkNMT1NFRHxFTkR8RU5HSU5FfEVOVU18RVJSTFZMfEVSUk9SU3xFU0NBUEVEP3xFWENFUFR8RVhFQyg/OlVURSk/fEVYSVNUU3xFWElUfEVYUExBSU58RVhURU5ERUR8RkVUQ0h8RklFTERTfEZJTEV8RklMTEZBQ1RPUnxGSVJTVHxGSVhFRHxGTE9BVHxGT0xMT1dJTkd8Rk9SKD86IEVBQ0ggUk9XKT98Rk9SQ0V8Rk9SRUlHTnxGUkVFVEVYVCg/OlRBQkxFKT98RlJPTXxGVUxMfEZVTkNUSU9OfEdFT01FVFJZKD86Q09MTEVDVElPTik/fEdMT0JBTHxHT1RPfEdSQU5UfEdST1VQfEhBTkRMRVJ8SEFTSHxIQVZJTkd8SE9MRExPQ0t8SE9VUnxJREVOVElUWSg/OkNPTHxfSU5TRVJUKT98SUZ8SUdOT1JFfElNUE9SVHxJTkRFWHxJTkZJTEV8SU5ORVJ8SU5OT0RCfElOT1VUfElOU0VSVHxJTlR8SU5URUdFUnxJTlRFUlNFQ1R8SU5URVJWQUx8SU5UT3xJTlZPS0VSfElTT0xBVElPTnxJVEVSQVRFfEpPSU58S0VZUz98S0lMTHxMQU5HVUFHRXxMQVNUfExFQVZFfExFRlR8TEVWRUx8TElNSVR8TElORU5PfExJTkVTfExJTkVTVFJJTkd8TE9BRHxMT0NBTHxMT0NLfExPTkcoPzpCTE9CfFRFWFQpfExPT1B8TUFUQ0goPzpFRCk/fE1FRElVTSg/OkJMT0J8SU5UfFRFWFQpfE1FUkdFfE1JRERMRUlOVHxNSU5VVEV8TU9ERXxNT0RJRklFU3xNT0RJRll8TU9OVEh8TVVMVEkoPzpMSU5FU1RSSU5HfFBPSU5UfFBPTFlHT04pfE5BVElPTkFMfE5BVFVSQUx8TkNIQVJ8TkVYVHxOT3xOT05DTFVTVEVSRUR8TlVMTElGfE5VTUVSSUN8T0ZGP3xPRkZTRVRTP3xPTnxPUEVOKD86REFUQVNPVVJDRXxRVUVSWXxST1dTRVQpP3xPUFRJTUlaRXxPUFRJT04oPzpBTExZKT98T1JERVJ8T1VUKD86RVJ8RklMRSk/fE9WRVJ8UEFSVElBTHxQQVJUSVRJT058UEVSQ0VOVHxQSVZPVHxQTEFOfFBPSU5UfFBPTFlHT058UFJFQ0VESU5HfFBSRUNJU0lPTnxQUkVQQVJFfFBSRVZ8UFJJTUFSWXxQUklOVHxQUklWSUxFR0VTfFBST0MoPzpFRFVSRSk/fFBVQkxJQ3xQVVJHRXxRVUlDS3xSQUlTRVJST1J8UkVBRFM/fFJFQUx8UkVDT05GSUdVUkV8UkVGRVJFTkNFU3xSRUxFQVNFfFJFTkFNRXxSRVBFQVQoPzpBQkxFKT98UkVQTEFDRXxSRVBMSUNBVElPTnxSRVFVSVJFfFJFU0lHTkFMfFJFU1RPUkV8UkVTVFJJQ1R8UkVUVVJOKD86SU5HfFMpP3xSRVZPS0V8UklHSFR8Uk9MTEJBQ0t8Uk9VVElORXxST1coPzpDT1VOVHxHVUlEQ09MfFMpP3xSVFJFRXxSVUxFfFNBVkUoPzpQT0lOVCk/fFNDSEVNQXxTRUNPTkR8U0VMRUNUfFNFUklBTCg/OklaQUJMRSk/fFNFU1NJT04oPzpfVVNFUik/fFNFVCg/OlVTRVIpP3xTSEFSRXxTSE9XfFNIVVRET1dOfFNJTVBMRXxTTUFMTElOVHxTTkFQU0hPVHxTT01FfFNPTkFNRXxTUUx8U1RBUlQoPzpJTkcpP3xTVEFUSVNUSUNTfFNUQVRVU3xTVFJJUEVEfFNZU1RFTV9VU0VSfFRBQkxFUz98VEFCTEVTUEFDRXxURU1QKD86T1JBUll8VEFCTEUpP3xURVJNSU5BVEVEfFRFWFQoPzpTSVpFKT98VEhFTnxUSU1FKD86U1RBTVApP3xUSU5ZKD86QkxPQnxJTlR8VEVYVCl8VE9QP3xUUkFOKD86U0FDVElPTlM/KT98VFJJR0dFUnxUUlVOQ0FURXxUU0VRVUFMfFRZUEVTP3xVTkJPVU5ERUR8VU5DT01NSVRURUR8VU5ERUZJTkVEfFVOSU9OfFVOSVFVRXxVTkxPQ0t8VU5QSVZPVHxVTlNJR05FRHxVUERBVEUoPzpURVhUKT98VVNBR0V8VVNFfFVTRVJ8VVNJTkd8VkFMVUVTP3xWQVIoPzpCSU5BUll8Q0hBUnxDSEFSQUNURVJ8WUlORyl8VklFV3xXQUlURk9SfFdBUk5JTkdTfFdIRU58V0hFUkV8V0hJTEV8V0lUSCg/OiBST0xMVVB8SU4pP3xXT1JLfFdSSVRFKD86VEVYVCk/fFlFQVIpXFxiL2ksXG5cdCdib29sZWFuJzogL1xcYig/OkZBTFNFfE5VTEx8VFJVRSlcXGIvaSxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnxcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCtcXGIvaSxcblx0J29wZXJhdG9yJzogL1stKypcXC89JV5+XXwmJj98XFx8XFx8P3whPT98PCg/Oj0+P3w8fD4pP3w+Wz49XT98XFxiKD86QU5EfEJFVFdFRU58RElWfElMSUtFfElOfElTfExJS0V8Tk9UfE9SfFJFR0VYUHxSTElLRXxTT1VORFMgTElLRXxYT1IpXFxiL2ksXG5cdCdwdW5jdHVhdGlvbic6IC9bO1tcXF0oKWAsLl0vXG59O1xuIiwiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBrZXl3b3JkcyA9IC9cXGIoPzphYnN0cmFjdHxhc3NlcnR8Ym9vbGVhbnxicmVha3xieXRlfGNhc2V8Y2F0Y2h8Y2hhcnxjbGFzc3xjb25zdHxjb250aW51ZXxkZWZhdWx0fGRvfGRvdWJsZXxlbHNlfGVudW18ZXhwb3J0c3xleHRlbmRzfGZpbmFsfGZpbmFsbHl8ZmxvYXR8Zm9yfGdvdG98aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW5zdGFuY2VvZnxpbnR8aW50ZXJmYWNlfGxvbmd8bW9kdWxlfG5hdGl2ZXxuZXd8bm9uLXNlYWxlZHxudWxsfG9wZW58b3BlbnN8cGFja2FnZXxwZXJtaXRzfHByaXZhdGV8cHJvdGVjdGVkfHByb3ZpZGVzfHB1YmxpY3xyZWNvcmQoPyFcXHMqWygpe31bXFxdPD49JX4uOiw7PytcXC0qLyZ8Xl0pfHJlcXVpcmVzfHJldHVybnxzZWFsZWR8c2hvcnR8c3RhdGljfHN0cmljdGZwfHN1cGVyfHN3aXRjaHxzeW5jaHJvbml6ZWR8dGhpc3x0aHJvd3x0aHJvd3N8dG98dHJhbnNpZW50fHRyYW5zaXRpdmV8dHJ5fHVzZXN8dmFyfHZvaWR8dm9sYXRpbGV8d2hpbGV8d2l0aHx5aWVsZClcXGIvO1xuXG5cdC8vIGZ1bGwgcGFja2FnZSAob3B0aW9uYWwpICsgcGFyZW50IGNsYXNzZXMgKG9wdGlvbmFsKVxuXHR2YXIgY2xhc3NOYW1lUHJlZml4ID0gLyg/OlthLXpdXFx3KlxccypcXC5cXHMqKSooPzpbQS1aXVxcdypcXHMqXFwuXFxzKikqLy5zb3VyY2U7XG5cblx0Ly8gYmFzZWQgb24gdGhlIGphdmEgbmFtaW5nIGNvbnZlbnRpb25zXG5cdHZhciBjbGFzc05hbWUgPSB7XG5cdFx0cGF0dGVybjogUmVnRXhwKC8oXnxbXlxcdy5dKS8uc291cmNlICsgY2xhc3NOYW1lUHJlZml4ICsgL1tBLVpdKD86W1xcZF9BLVpdKlthLXpdXFx3Kik/XFxiLy5zb3VyY2UpLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnbmFtZXNwYWNlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXlthLXpdXFx3Kig/OlxccypcXC5cXHMqW2Etel1cXHcqKSooPzpcXHMqXFwuKT8vLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwuL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLi9cblx0XHR9XG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmphdmEgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pXCIoPzpcXFxcLnxbXlwiXFxcXFxcclxcbl0pKlwiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdjbGFzcy1uYW1lJzogW1xuXHRcdFx0Y2xhc3NOYW1lLFxuXHRcdFx0e1xuXHRcdFx0XHQvLyB2YXJpYWJsZXMsIHBhcmFtZXRlcnMsIGFuZCBjb25zdHJ1Y3RvciByZWZlcmVuY2VzXG5cdFx0XHRcdC8vIHRoaXMgdG8gc3VwcG9ydCBjbGFzcyBuYW1lcyAob3IgZ2VuZXJpYyBwYXJhbWV0ZXJzKSB3aGljaCBkbyBub3QgY29udGFpbiBhIGxvd2VyIGNhc2UgbGV0dGVyIChhbHNvIHdvcmtzIGZvciBtZXRob2RzKVxuXHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyhefFteXFx3Ll0pLy5zb3VyY2UgKyBjbGFzc05hbWVQcmVmaXggKyAvW0EtWl1cXHcqKD89XFxzK1xcdytcXHMqWzssPSgpXXxcXHMqKD86XFxbW1xccyxdKlxcXVxccyopPzo6XFxzKm5ld1xcYikvLnNvdXJjZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogY2xhc3NOYW1lLmluc2lkZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gY2xhc3MgbmFtZXMgYmFzZWQgb24ga2V5d29yZFxuXHRcdFx0XHQvLyB0aGlzIHRvIHN1cHBvcnQgY2xhc3MgbmFtZXMgKG9yIGdlbmVyaWMgcGFyYW1ldGVycykgd2hpY2ggZG8gbm90IGNvbnRhaW4gYSBsb3dlciBjYXNlIGxldHRlciAoYWxzbyB3b3JrcyBmb3IgbWV0aG9kcylcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKC8oXFxiKD86Y2xhc3N8ZW51bXxleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxpbnRlcmZhY2V8bmV3fHJlY29yZHx0aHJvd3MpXFxzKykvLnNvdXJjZSArIGNsYXNzTmFtZVByZWZpeCArIC9bQS1aXVxcdypcXGIvLnNvdXJjZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogY2xhc3NOYW1lLmluc2lkZVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHQnZnVuY3Rpb24nOiBbXG5cdFx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2UuZnVuY3Rpb24sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oOjpcXHMqKVthLXpfXVxcdyovLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnbnVtYmVyJzogL1xcYjBiWzAxXVswMV9dKkw/XFxifFxcYjB4KD86XFwuW1xcZGEtZl9wKy1dK3xbXFxkYS1mX10rKD86XFwuW1xcZGEtZl9wKy1dKyk/KVxcYnwoPzpcXGJcXGRbXFxkX10qKD86XFwuW1xcZF9dKik/fFxcQlxcLlxcZFtcXGRfXSopKD86ZVsrLV0/XFxkW1xcZF9dKik/W2RmbF0/L2ksXG5cdFx0J29wZXJhdG9yJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLl0pKD86PDw9P3w+Pj4/PT98LT58LS18XFwrXFwrfCYmfFxcfFxcfHw6OnxbPzp+XXxbLSsqLyUmfF4hPTw+XT0/KS9tLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2NvbnN0YW50JzogL1xcYltBLVpdW0EtWl9cXGRdK1xcYi9cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YScsICdzdHJpbmcnLCB7XG5cdFx0J3RyaXBsZS1xdW90ZWQtc3RyaW5nJzoge1xuXHRcdFx0Ly8gaHR0cDovL29wZW5qZGsuamF2YS5uZXQvamVwcy8zNTUjRGVzY3JpcHRpb25cblx0XHRcdHBhdHRlcm46IC9cIlwiXCJbIFxcdF0qW1xcclxcbl0oPzooPzpcInxcIlwiKT8oPzpcXFxcLnxbXlwiXFxcXF0pKSpcIlwiXCIvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHQnY2hhcic6IHtcblx0XHRcdHBhdHRlcm46IC8nKD86XFxcXC58W14nXFxcXFxcclxcbl0pezEsNn0nLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YScsICdjbGFzcy1uYW1lJywge1xuXHRcdCdhbm5vdGF0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLl0pQFxcdysoPzpcXHMqXFwuXFxzKlxcdyspKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHR9LFxuXHRcdCdnZW5lcmljcyc6IHtcblx0XHRcdHBhdHRlcm46IC88KD86W1xcd1xccywuP118Jig/ISYpfDwoPzpbXFx3XFxzLC4/XXwmKD8hJil8PCg/OltcXHdcXHMsLj9dfCYoPyEmKXw8KD86W1xcd1xccywuP118Jig/ISYpKSo+KSo+KSo+KSo+Lyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnY2xhc3MtbmFtZSc6IGNsYXNzTmFtZSxcblx0XHRcdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1s8PigpLC46XS8sXG5cdFx0XHRcdCdvcGVyYXRvcic6IC9bPyZ8XS9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdpbXBvcnQnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKFxcYmltcG9ydFxccyspLy5zb3VyY2UgKyBjbGFzc05hbWVQcmVmaXggKyAvKD86W0EtWl1cXHcqfFxcKikoPz1cXHMqOykvLnNvdXJjZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiBjbGFzc05hbWUuaW5zaWRlLm5hbWVzcGFjZSxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwuLyxcblx0XHRcdFx0XHQnb3BlcmF0b3InOiAvXFwqLyxcblx0XHRcdFx0XHQnY2xhc3MtbmFtZSc6IC9cXHcrL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyhcXGJpbXBvcnRcXHMrc3RhdGljXFxzKykvLnNvdXJjZSArIGNsYXNzTmFtZVByZWZpeCArIC8oPzpcXHcrfFxcKikoPz1cXHMqOykvLnNvdXJjZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnc3RhdGljJyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IGNsYXNzTmFtZS5pbnNpZGUubmFtZXNwYWNlLFxuXHRcdFx0XHRcdCdzdGF0aWMnOiAvXFxiXFx3KyQvLFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vLFxuXHRcdFx0XHRcdCdvcGVyYXRvcic6IC9cXCovLFxuXHRcdFx0XHRcdCdjbGFzcy1uYW1lJzogL1xcdysvXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdCduYW1lc3BhY2UnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoXG5cdFx0XHRcdC8oXFxiKD86ZXhwb3J0c3xpbXBvcnQoPzpcXHMrc3RhdGljKT98bW9kdWxlfG9wZW58b3BlbnN8cGFja2FnZXxwcm92aWRlc3xyZXF1aXJlc3x0b3x0cmFuc2l0aXZlfHVzZXN8d2l0aClcXHMrKSg/ITxrZXl3b3JkPilbYS16XVxcdyooPzpcXC5bYS16XVxcdyopKlxcLj8vXG5cdFx0XHRcdFx0LnNvdXJjZS5yZXBsYWNlKC88a2V5d29yZD4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4ga2V5d29yZHMuc291cmNlOyB9KSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vLFxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59KFByaXNtKSk7XG4iLCIoZnVuY3Rpb24gKFByaXNtKSB7XG5cdC8vICQgc2V0IHwgZ3JlcCAnXltBLVpdW15bOnNwYWNlOl1dKj0nIHwgY3V0IC1kPSAtZjEgfCB0ciAnXFxuJyAnfCdcblx0Ly8gKyBMQ19BTEwsIFJBTkRPTSwgUkVQTFksIFNFQ09ORFMuXG5cdC8vICsgbWFrZSBzdXJlIFBTMS4uNCBhcmUgaGVyZSBhcyB0aGV5IGFyZSBub3QgYWx3YXlzIHNldCxcblx0Ly8gLSBzb21lIHVzZWxlc3MgdGhpbmdzLlxuXHR2YXIgZW52VmFycyA9ICdcXFxcYig/OkJBU0h8QkFTSE9QVFN8QkFTSF9BTElBU0VTfEJBU0hfQVJHQ3xCQVNIX0FSR1Z8QkFTSF9DTURTfEJBU0hfQ09NUExFVElPTl9DT01QQVRfRElSfEJBU0hfTElORU5PfEJBU0hfUkVNQVRDSHxCQVNIX1NPVVJDRXxCQVNIX1ZFUlNJTkZPfEJBU0hfVkVSU0lPTnxDT0xPUlRFUk18Q09MVU1OU3xDT01QX1dPUkRCUkVBS1N8REJVU19TRVNTSU9OX0JVU19BRERSRVNTfERFRkFVTFRTX1BBVEh8REVTS1RPUF9TRVNTSU9OfERJUlNUQUNLfERJU1BMQVl8RVVJRHxHRE1TRVNTSU9OfEdETV9MQU5HfEdOT01FX0tFWVJJTkdfQ09OVFJPTHxHTk9NRV9LRVlSSU5HX1BJRHxHUEdfQUdFTlRfSU5GT3xHUk9VUFN8SElTVENPTlRST0x8SElTVEZJTEV8SElTVEZJTEVTSVpFfEhJU1RTSVpFfEhPTUV8SE9TVE5BTUV8SE9TVFRZUEV8SUZTfElOU1RBTkNFfEpPQnxMQU5HfExBTkdVQUdFfExDX0FERFJFU1N8TENfQUxMfExDX0lERU5USUZJQ0FUSU9OfExDX01FQVNVUkVNRU5UfExDX01PTkVUQVJZfExDX05BTUV8TENfTlVNRVJJQ3xMQ19QQVBFUnxMQ19URUxFUEhPTkV8TENfVElNRXxMRVNTQ0xPU0V8TEVTU09QRU58TElORVN8TE9HTkFNRXxMU19DT0xPUlN8TUFDSFRZUEV8TUFJTENIRUNLfE1BTkRBVE9SWV9QQVRIfE5PX0FUX0JSSURHRXxPTERQV0R8T1BURVJSfE9QVElORHxPUkJJVF9TT0NLRVRESVJ8T1NUWVBFfFBBUEVSU0laRXxQQVRIfFBJUEVTVEFUVVN8UFBJRHxQUzF8UFMyfFBTM3xQUzR8UFdEfFJBTkRPTXxSRVBMWXxTRUNPTkRTfFNFTElOVVhfSU5JVHxTRVNTSU9OfFNFU1NJT05UWVBFfFNFU1NJT05fTUFOQUdFUnxTSEVMTHxTSEVMTE9QVFN8U0hMVkx8U1NIX0FVVEhfU09DS3xURVJNfFVJRHxVUFNUQVJUX0VWRU5UU3xVUFNUQVJUX0lOU1RBTkNFfFVQU1RBUlRfSk9CfFVQU1RBUlRfU0VTU0lPTnxVU0VSfFdJTkRPV0lEfFhBVVRIT1JJVFl8WERHX0NPTkZJR19ESVJTfFhER19DVVJSRU5UX0RFU0tUT1B8WERHX0RBVEFfRElSU3xYREdfR1JFRVRFUl9EQVRBX0RJUnxYREdfTUVOVV9QUkVGSVh8WERHX1JVTlRJTUVfRElSfFhER19TRUFUfFhER19TRUFUX1BBVEh8WERHX1NFU1NJT05fREVTS1RPUHxYREdfU0VTU0lPTl9JRHxYREdfU0VTU0lPTl9QQVRIfFhER19TRVNTSU9OX1RZUEV8WERHX1ZUTlJ8WE1PRElGSUVSUylcXFxcYic7XG5cblx0dmFyIGNvbW1hbmRBZnRlckhlcmVkb2MgPSB7XG5cdFx0cGF0dGVybjogLyheKFtcIiddPylcXHcrXFwyKVsgXFx0XStcXFMuKi8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJywgLy8gdGhpcyBsb29rcyByZWFzb25hYmx5IHdlbGwgaW4gYWxsIHRoZW1lc1xuXHRcdGluc2lkZTogbnVsbCAvLyBzZWUgYmVsb3dcblx0fTtcblxuXHR2YXIgaW5zaWRlU3RyaW5nID0ge1xuXHRcdCdiYXNoJzogY29tbWFuZEFmdGVySGVyZWRvYyxcblx0XHQnZW52aXJvbm1lbnQnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ1xcXFwkJyArIGVudlZhcnMpLFxuXHRcdFx0YWxpYXM6ICdjb25zdGFudCdcblx0XHR9LFxuXHRcdCd2YXJpYWJsZSc6IFtcblx0XHRcdC8vIFswXTogQXJpdGhtZXRpYyBFbnZpcm9ubWVudFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFwkP1xcKFxcKFtcXHNcXFNdKz9cXClcXCkvLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdC8vIElmIHRoZXJlIGlzIGEgJCBzaWduIGF0IHRoZSBiZWdpbm5pbmcgaGlnaGxpZ2h0ICQoKCBhbmQgKSkgYXMgdmFyaWFibGVcblx0XHRcdFx0XHQndmFyaWFibGUnOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC8oXlxcJFxcKFxcKFtcXHNcXFNdKylcXClcXCkvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0L15cXCRcXChcXCgvXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHQnbnVtYmVyJzogL1xcYjB4W1xcZEEtRmEtZl0rXFxifCg/OlxcYlxcZCsoPzpcXC5cXGQqKT98XFxCXFwuXFxkKykoPzpbRWVdLT9cXGQrKT8vLFxuXHRcdFx0XHRcdC8vIE9wZXJhdG9ycyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9iYXNocmVmLmh0bWwjU2hlbGwtQXJpdGhtZXRpY1xuXHRcdFx0XHRcdCdvcGVyYXRvcic6IC8tLXxcXCtcXCt8XFwqXFwqPT98PDw9P3w+Pj0/fCYmfFxcfFxcfHxbPSErXFwtKi8lPD5eJnxdPT98Wz9+Ol0vLFxuXHRcdFx0XHRcdC8vIElmIHRoZXJlIGlzIG5vICQgc2lnbiBhdCB0aGUgYmVnaW5uaW5nIGhpZ2hsaWdodCAoKCBhbmQgKSkgYXMgcHVuY3R1YXRpb25cblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwoXFwoP3xcXClcXCk/fCx8Oy9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8vIFsxXTogQ29tbWFuZCBTdWJzdGl0dXRpb25cblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogL1xcJFxcKCg/OlxcKFteKV0rXFwpfFteKCldKStcXCl8YFteYF0rYC8sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3ZhcmlhYmxlJzogL15cXCRcXCh8XmB8XFwpJHxgJC9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8vIFsyXTogQnJhY2UgZXhwYW5zaW9uXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC9cXCRcXHtbXn1dK1xcfS8sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J29wZXJhdG9yJzogLzpbLT0/K10/fFshXFwvXXwjIz98JSU/fFxcXlxcXj98LCw/Lyxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvW1xcW1xcXV0vLFxuXHRcdFx0XHRcdCdlbnZpcm9ubWVudCc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnKFxcXFx7KScgKyBlbnZWYXJzKSxcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRhbGlhczogJ2NvbnN0YW50J1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC9cXCQoPzpcXHcrfFsjPyohQCRdKS9cblx0XHRdLFxuXHRcdC8vIEVzY2FwZSBzZXF1ZW5jZXMgZnJvbSBlY2hvIGFuZCBwcmludGYncyBtYW51YWxzLCBhbmQgZXNjYXBlZCBxdW90ZXMuXG5cdFx0J2VudGl0eSc6IC9cXFxcKD86W2FiY2VFZm5ydHZcXFxcXCJdfE8/WzAtN117MSwzfXxVWzAtOWEtZkEtRl17OH18dVswLTlhLWZBLUZdezR9fHhbMC05YS1mQS1GXXsxLDJ9KS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuYmFzaCA9IHtcblx0XHQnc2hlYmFuZyc6IHtcblx0XHRcdHBhdHRlcm46IC9eIyFcXHMqXFwvLiovLFxuXHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0fSxcblx0XHQnY29tbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlwie1xcXFwkXSkjLiovLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2Z1bmN0aW9uLW5hbWUnOiBbXG5cdFx0XHQvLyBhKSBmdW5jdGlvbiBmb28ge1xuXHRcdFx0Ly8gYikgZm9vKCkge1xuXHRcdFx0Ly8gYykgZnVuY3Rpb24gZm9vKCkge1xuXHRcdFx0Ly8gYnV0IG5vdCDigJxmb28ge+KAnVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBhKSBhbmQgYylcblx0XHRcdFx0cGF0dGVybjogLyhcXGJmdW5jdGlvblxccyspW1xcdy1dKyg/PSg/OlxccypcXCg/OlxccypcXCkpP1xccypcXHspLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIGIpXG5cdFx0XHRcdHBhdHRlcm46IC9cXGJbXFx3LV0rKD89XFxzKlxcKFxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQvLyBIaWdobGlnaHQgdmFyaWFibGUgbmFtZXMgYXMgdmFyaWFibGVzIGluIGZvciBhbmQgc2VsZWN0IGJlZ2lubmluZ3MuXG5cdFx0J2Zvci1vci1zZWxlY3QnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcYig/OmZvcnxzZWxlY3QpXFxzKylcXHcrKD89XFxzK2luXFxzKS8sXG5cdFx0XHRhbGlhczogJ3ZhcmlhYmxlJyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdC8vIEhpZ2hsaWdodCB2YXJpYWJsZSBuYW1lcyBhcyB2YXJpYWJsZXMgaW4gdGhlIGxlZnQtaGFuZCBwYXJ0XG5cdFx0Ly8gb2YgYXNzaWdubWVudHMgKOKAnD3igJ0gYW5kIOKAnCs94oCdKS5cblx0XHQnYXNzaWduLWxlZnQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W1xcczt8Jl18Wzw+XVxcKClcXHcrKD86XFwuXFx3KykqKD89XFwrPz0pLyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZW52aXJvbm1lbnQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKCcoXnxbXFxcXHM7fCZdfFs8Pl1cXFxcKCknICsgZW52VmFycyksXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRhbGlhczogJ2NvbnN0YW50J1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YWxpYXM6ICd2YXJpYWJsZScsXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQvLyBIaWdobGlnaHQgcGFyYW1ldGVyIG5hbWVzIGFzIHZhcmlhYmxlc1xuXHRcdCdwYXJhbWV0ZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58XFxzKS17MSwyfSg/Olxcdys6WystXT8pP1xcdysoPzpcXC5cXHcrKSooPz1bPVxcc118JCkvLFxuXHRcdFx0YWxpYXM6ICd2YXJpYWJsZScsXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnc3RyaW5nJzogW1xuXHRcdFx0Ly8gU3VwcG9ydCBmb3IgSGVyZS1kb2N1bWVudHMgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGVyZV9kb2N1bWVudFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58W148XSk8PC0/XFxzKikoXFx3KylcXHNbXFxzXFxTXSo/KD86XFxyP1xcbnxcXHIpXFwyLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IGluc2lkZVN0cmluZ1xuXHRcdFx0fSxcblx0XHRcdC8vIEhlcmUtZG9jdW1lbnQgd2l0aCBxdW90ZXMgYXJvdW5kIHRoZSB0YWdcblx0XHRcdC8vIOKGkiBObyBleHBhbnNpb24gKHNvIG5vIOKAnGluc2lkZeKAnSkuXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXjxdKTw8LT9cXHMqKShbXCInXSkoXFx3KylcXDJcXHNbXFxzXFxTXSo/KD86XFxyP1xcbnxcXHIpXFwzLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnYmFzaCc6IGNvbW1hbmRBZnRlckhlcmVkb2Ncblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8vIOKAnE5vcm1hbOKAnSBzdHJpbmdcblx0XHRcdHtcblx0XHRcdFx0Ly8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9odG1sX25vZGUvRG91YmxlLVF1b3Rlcy5odG1sXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKD86XFxcXFxcXFwpKilcIig/OlxcXFxbXFxzXFxTXXxcXCRcXChbXildK1xcKXxcXCQoPyFcXCgpfGBbXmBdK2B8W15cIlxcXFxgJF0pKlwiLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IGluc2lkZVN0cmluZ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9odG1sX25vZGUvU2luZ2xlLVF1b3Rlcy5odG1sXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxbXiRcXFxcXSknW14nXSonLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2Jhc2gvbWFudWFsL2h0bWxfbm9kZS9BTlNJXzAwMmRDLVF1b3RpbmcuaHRtbFxuXHRcdFx0XHRwYXR0ZXJuOiAvXFwkJyg/OlteJ1xcXFxdfFxcXFxbXFxzXFxTXSkqJy8sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2VudGl0eSc6IGluc2lkZVN0cmluZy5lbnRpdHlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2Vudmlyb25tZW50Jzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCdcXFxcJD8nICsgZW52VmFycyksXG5cdFx0XHRhbGlhczogJ2NvbnN0YW50J1xuXHRcdH0sXG5cdFx0J3ZhcmlhYmxlJzogaW5zaWRlU3RyaW5nLnZhcmlhYmxlLFxuXHRcdCdmdW5jdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OmFkZHxhcHJvcG9zfGFwdHxhcHQtY2FjaGV8YXB0LWdldHxhcHRpdHVkZXxhc3BlbGx8YXV0b215c3FsYmFja3VwfGF3a3xiYXNlbmFtZXxiYXNofGJjfGJjb25zb2xlfGJnfGJ6aXAyfGNhbHxjYXJnb3xjYXR8Y2ZkaXNrfGNoZ3JwfGNoa2NvbmZpZ3xjaG1vZHxjaG93bnxjaHJvb3R8Y2tzdW18Y2xlYXJ8Y21wfGNvbHVtbnxjb21tfGNvbXBvc2VyfGNwfGNyb258Y3JvbnRhYnxjc3BsaXR8Y3VybHxjdXR8ZGF0ZXxkY3xkZHxkZHJlc2N1ZXxkZWJvb3RzdHJhcHxkZnxkaWZmfGRpZmYzfGRpZ3xkaXJ8ZGlyY29sb3JzfGRpcm5hbWV8ZGlyc3xkbWVzZ3xkb2NrZXJ8ZG9ja2VyLWNvbXBvc2V8ZHV8ZWdyZXB8ZWplY3R8ZW52fGV0aHRvb2x8ZXhwYW5kfGV4cGVjdHxleHByfGZkZm9ybWF0fGZkaXNrfGZnfGZncmVwfGZpbGV8ZmluZHxmbXR8Zm9sZHxmb3JtYXR8ZnJlZXxmc2NrfGZ0cHxmdXNlcnxnYXdrfGdpdHxncGFydGVkfGdyZXB8Z3JvdXBhZGR8Z3JvdXBkZWx8Z3JvdXBtb2R8Z3JvdXBzfGdydWItbWtjb25maWd8Z3ppcHxoYWx0fGhlYWR8aGd8aGlzdG9yeXxob3N0fGhvc3RuYW1lfGh0b3B8aWNvbnZ8aWR8aWZjb25maWd8aWZkb3dufGlmdXB8aW1wb3J0fGluc3RhbGx8aXB8amF2YXxqb2JzfGpvaW58a2lsbHxraWxsYWxsfGxlc3N8bGlua3xsbnxsb2NhdGV8bG9nbmFtZXxsb2dyb3RhdGV8bG9va3xscGN8bHByfGxwcmludHxscHJpbnRkfGxwcmludHF8bHBybXxsc3xsc29mfGx5bnh8bWFrZXxtYW58bWN8bWRhZG18bWtjb25maWd8bWtkaXJ8bWtlMmZzfG1rZmlmb3xta2ZzfG1raXNvZnN8bWtub2R8bWtzd2FwfG1tdnxtb3JlfG1vc3R8bW91bnR8bXRvb2xzfG10cnxtdXR0fG12fG5hbm98bmN8bmV0c3RhdHxuaWNlfG5sfG5vZGV8bm9odXB8bm90aWZ5LXNlbmR8bnBtfG5zbG9va3VwfG9wfG9wZW58cGFydGVkfHBhc3N3ZHxwYXN0ZXxwYXRoY2hrfHBpbmd8cGtpbGx8cG5wbXxwb2RtYW58cG9kbWFuLWNvbXBvc2V8cG9wZHxwcnxwcmludGNhcHxwcmludGVudnxwc3xwdXNoZHxwdnxxdW90YXxxdW90YWNoZWNrfHF1b3RhY3RsfHJhbXxyYXJ8cmNwfHJlYm9vdHxyZW1zeW5jfHJlbmFtZXxyZW5pY2V8cmV2fHJtfHJtZGlyfHJwbXxyc3luY3xzY3B8c2NyZWVufHNkaWZmfHNlZHxzZW5kbWFpbHxzZXF8c2VydmljZXxzZnRwfHNofHNoZWxsY2hlY2t8c2h1ZnxzaHV0ZG93bnxzbGVlcHxzbG9jYXRlfHNvcnR8c3BsaXR8c3NofHN0YXR8c3RyYWNlfHN1fHN1ZG98c3VtfHN1c3BlbmR8c3dhcG9ufHN5bmN8c3lzY3RsfHRhY3x0YWlsfHRhcnx0ZWV8dGltZXx0aW1lb3V0fHRvcHx0b3VjaHx0cnx0cmFjZXJvdXRlfHRzb3J0fHR0eXx1bW91bnR8dW5hbWV8dW5leHBhbmR8dW5pcXx1bml0c3x1bnJhcnx1bnNoYXJ8dW56aXB8dXBkYXRlLWdydWJ8dXB0aW1lfHVzZXJhZGR8dXNlcmRlbHx1c2VybW9kfHVzZXJzfHV1ZGVjb2RlfHV1ZW5jb2RlfHZ8dmNwa2d8dmRpcnx2aXx2aW18dmlyc2h8dm1zdGF0fHdhaXR8d2F0Y2h8d2N8d2dldHx3aGVyZWlzfHdoaWNofHdob3x3aG9hbWl8d3JpdGV8eGFyZ3N8eGRnLW9wZW58eWFybnx5ZXN8emVuaXR5fHppcHx6c2h8enlwcGVyKSg/PSR8WylcXHM7fCZdKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQna2V5d29yZCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OmNhc2V8ZG98ZG9uZXxlbGlmfGVsc2V8ZXNhY3xmaXxmb3J8ZnVuY3Rpb258aWZ8aW58c2VsZWN0fHRoZW58dW50aWx8d2hpbGUpKD89JHxbKVxcczt8Jl0pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdC8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvYmFzaC9tYW51YWwvaHRtbF9ub2RlL1NoZWxsLUJ1aWx0aW4tQ29tbWFuZHMuaHRtbFxuXHRcdCdidWlsdGluJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFtcXHM7fCZdfFs8Pl1cXCgpKD86XFwufDp8YWxpYXN8YmluZHxicmVha3xidWlsdGlufGNhbGxlcnxjZHxjb21tYW5kfGNvbnRpbnVlfGRlY2xhcmV8ZWNob3xlbmFibGV8ZXZhbHxleGVjfGV4aXR8ZXhwb3J0fGdldG9wdHN8aGFzaHxoZWxwfGxldHxsb2NhbHxsb2dvdXR8bWFwZmlsZXxwcmludGZ8cHdkfHJlYWR8cmVhZGFycmF5fHJlYWRvbmx5fHJldHVybnxzZXR8c2hpZnR8c2hvcHR8c291cmNlfHRlc3R8dGltZXN8dHJhcHx0eXBlfHR5cGVzZXR8dWxpbWl0fHVtYXNrfHVuYWxpYXN8dW5zZXQpKD89JHxbKVxcczt8Jl0pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHQvLyBBbGlhcyBhZGRlZCB0byBtYWtlIHRob3NlIGVhc2llciB0byBkaXN0aW5ndWlzaCBmcm9tIHN0cmluZ3MuXG5cdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdFx0fSxcblx0XHQnYm9vbGVhbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OmZhbHNlfHRydWUpKD89JHxbKVxcczt8Jl0pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdmaWxlLWRlc2NyaXB0b3InOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFxCJlxcZFxcYi8sXG5cdFx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0XHR9LFxuXHRcdCdvcGVyYXRvcic6IHtcblx0XHRcdC8vIExvdHMgb2YgcmVkaXJlY3Rpb25zIGhlcmUsIGJ1dCBub3QganVzdCB0aGF0LlxuXHRcdFx0cGF0dGVybjogL1xcZD88Pnw+XFx8fFxcKz18PVs9fl0/fCE9P3w8PFs8LV0/fFsmXFxkXT8+PnxcXGRbPD5dJj98Wzw+XVsmPV0/fCZbPiZdP3xcXHxbJnxdPy8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2ZpbGUtZGVzY3JpcHRvcic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxcZC8sXG5cdFx0XHRcdFx0YWxpYXM6ICdpbXBvcnRhbnQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdwdW5jdHVhdGlvbic6IC9cXCQ/XFwoXFwoP3xcXClcXCk/fFxcLlxcLnxbe31bXFxdO1xcXFxdLyxcblx0XHQnbnVtYmVyJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFxccykoPzpbMS05XVxcZCp8MCkoPzpbLixdXFxkKyk/XFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdH07XG5cblx0Y29tbWFuZEFmdGVySGVyZWRvYy5pbnNpZGUgPSBQcmlzbS5sYW5ndWFnZXMuYmFzaDtcblxuXHQvKiBQYXR0ZXJucyBpbiBjb21tYW5kIHN1YnN0aXR1dGlvbi4gKi9cblx0dmFyIHRvQmVDb3BpZWQgPSBbXG5cdFx0J2NvbW1lbnQnLFxuXHRcdCdmdW5jdGlvbi1uYW1lJyxcblx0XHQnZm9yLW9yLXNlbGVjdCcsXG5cdFx0J2Fzc2lnbi1sZWZ0Jyxcblx0XHQncGFyYW1ldGVyJyxcblx0XHQnc3RyaW5nJyxcblx0XHQnZW52aXJvbm1lbnQnLFxuXHRcdCdmdW5jdGlvbicsXG5cdFx0J2tleXdvcmQnLFxuXHRcdCdidWlsdGluJyxcblx0XHQnYm9vbGVhbicsXG5cdFx0J2ZpbGUtZGVzY3JpcHRvcicsXG5cdFx0J29wZXJhdG9yJyxcblx0XHQncHVuY3R1YXRpb24nLFxuXHRcdCdudW1iZXInXG5cdF07XG5cdHZhciBpbnNpZGUgPSBpbnNpZGVTdHJpbmcudmFyaWFibGVbMV0uaW5zaWRlO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRvQmVDb3BpZWQubGVuZ3RoOyBpKyspIHtcblx0XHRpbnNpZGVbdG9CZUNvcGllZFtpXV0gPSBQcmlzbS5sYW5ndWFnZXMuYmFzaFt0b0JlQ29waWVkW2ldXTtcblx0fVxuXG5cdFByaXNtLmxhbmd1YWdlcy5zaCA9IFByaXNtLmxhbmd1YWdlcy5iYXNoO1xuXHRQcmlzbS5sYW5ndWFnZXMuc2hlbGwgPSBQcmlzbS5sYW5ndWFnZXMuYmFzaDtcbn0oUHJpc20pKTtcbiIsImxldCByZXNpemVPbmxvYWQgPSByZXF1aXJlKCdjbGllbnQvaGVhZC9yZXNpemVPbmxvYWQnKTtcbmxldCBpc1Njcm9sbGVkSW50b1ZpZXcgPSByZXF1aXJlKCdjbGllbnQvaXNTY3JvbGxlZEludG9WaWV3Jyk7XG5sZXQgbWFrZUxpbmVOdW1iZXJzID0gcmVxdWlyZSgnLi9tYWtlTGluZU51bWJlcnMnKTtcbmxldCBtYWtlSGlnaGxpZ2h0ID0gcmVxdWlyZSgnLi9tYWtlSGlnaGxpZ2h0Jyk7XG5jb25zdCB7IGhpZ2hsaWdodCB9ID0gcmVxdWlyZSgncHJpc21qcycpO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnY29uZmlnJyk7XG5sZXQgY29uc29sZUZvcm1hdCA9IHJlcXVpcmUoJ2VuZ2luZS9jb25zb2xlL2NvbnNvbGVGb3JtYXQnKTtcbmNvbnN0IHQgPSByZXF1aXJlKCdlbmdpbmUvaTE4bi90Jyk7XG5cbmNvbnN0IExBTkcgPSByZXF1aXJlKCdjb25maWcnKS5sYW5nO1xudC5pMThuLmFkZCgncHJpc20nLCByZXF1aXJlKCcuL2xvY2FsZXMvJyArIExBTkcgKyAnLnltbCcpKTtcblxuZnVuY3Rpb24gQ29kZUJveChlbGVtKSB7XG5cbiAgbGV0IHByZUVsZW0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ3ByZScpO1xuICBsZXQgY29kZUVsZW0gPSBBcnJheS5mcm9tKHByZUVsZW0uY2hpbGROb2RlcykuZmluZChuID0+IG4udGFnTmFtZSA9PT0gJ0NPREUnKTtcblxuICBsZXQgY29kZSA9IGNvZGVFbGVtLnRleHRDb250ZW50O1xuXG4gIGxldCBvdXRwdXRCb3g7XG5cbiAgZWxlbS5jb2RlQm94ID0gdGhpcztcblxuICBsZXQgcnVuQ29kZSA9IGNvZGU7XG4gIGlmIChlbGVtLmhhc0F0dHJpYnV0ZSgnZGF0YS1hc3luYycpKSB7XG4gICAgcnVuQ29kZSA9IGAoYXN5bmMgKCkgPT4ge1xcbiR7Y29kZX1cXG59KSgpYDtcbiAgfVxuXG4gIFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoY29kZUVsZW0pO1xuXG4gIGxldCBsaW5lTnVtYmVyc1dyYXBwZXIgPSBtYWtlTGluZU51bWJlcnMocHJlRWxlbS5pbm5lckhUTUwpO1xuXG4gIC8qXG4gIGlmIChwcmVFbGVtLmhhc0F0dHJpYnV0ZSgnZGF0YS1zdGFydCcpKSB7XG4gICAgcHJlRWxlbS5zdHlsZS5jb3VudGVyUmVzZXQgPSAnbGluZW51bWJlciAnICsgTnVtYmVyKHByZUVsZW0uZGF0YXNldC5zdGFydCkgLSAxO1xuICB9XG4gICovXG5cbiAgcHJlRWxlbS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckJlZ2luXCIsIGxpbmVOdW1iZXJzV3JhcHBlcik7XG5cbiAgbGV0IHJhbmdlcyA9IEpTT04ucGFyc2UoZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaGlnaGxpZ2h0JykpO1xuICBpZiAocmFuZ2VzKSB7XG4gICAgZW1waGFzaXplKGNvZGVFbGVtLCByYW5nZXMpO1xuICB9XG5cbiAgLy8gcHJlRWxlbS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckJlZ2luXCIsIG1hc2tzKTtcblxuICBsZXQgaXNKUyA9IHByZUVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdsYW5ndWFnZS1qYXZhc2NyaXB0Jyk7XG4gIGxldCBpc0hUTUwgPSBwcmVFbGVtLmNsYXNzTGlzdC5jb250YWlucygnbGFuZ3VhZ2UtbWFya3VwJyk7XG4gIGxldCBpc1RydXN0ZWQgPSArZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJ1c3RlZCcpO1xuICBsZXQgaXNOb1N0cmljdCA9ICtlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uby1zdHJpY3QnKTtcblxuICBsZXQgdXNlU3RyaWN0ID0gKCFpc05vU3RyaWN0ICYmIGlzSlMpID8gYFwidXNlIHN0cmljdFwiO2AgOiAnJztcblxuICAvLyBnbG9iYWxFdmFsIGV2YWx1YXRlcyBhc3luY2hyb25vdXNseSwgc28gd2UgbXVzdCBpbmplY3QgY29kZUJveCBpZCBpbnRvIHRoZSBjb2RlXG4gIC8vIHRoZW4gaW4gY29uc29sZS5sb2cgd2UgdXNlIGl0IHRvIHNob3cgdGhlIG1lc3NhZ2UgdW5kZXIgdGhlIGN1cnJlbnQgYm94XG4gIGxldCBjb2RlQm94SWQgPSBgZ2xvYmFsVGhpcy5fX2NvZGVCb3hJZCA9IFwiJHtlbGVtLmlkfVwiO2A7XG5cbiAgLy8gU2FuZGJveCBkb2Vzbid0IG5lZWQgY29kZUJveElkXG4gIGxldCBzYW5kYm94Q29kZSA9IGAke3VzZVN0cmljdH1cXG5cXG4ke3J1bkNvZGV9YDtcblxuICBydW5Db2RlID0gYCR7dXNlU3RyaWN0fSR7Y29kZUJveElkfVxcblxcbiR7cnVuQ29kZX1gO1xuXG4gIGxldCBqc0ZyYW1lO1xuICBsZXQgZ2xvYmFsRnJhbWU7XG4gIGxldCBodG1sUmVzdWx0O1xuICBsZXQgaXNGaXJzdFJ1biA9IHRydWU7XG5cbiAgaWYgKCFpc0pTICYmICFpc0hUTUwpIHJldHVybjtcblxuICBsZXQgcnVuRWxlbSA9IGVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uPVwicnVuXCJdJyk7XG4gIGlmIChydW5FbGVtKSB7XG4gICAgcnVuRWxlbS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICAgIHJ1bigpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH1cblxuICBsZXQgZWRpdEVsZW0gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGlvbj1cImVkaXRcIl0nKTtcbiAgaWYgKGVkaXRFbGVtKSB7XG4gICAgZWRpdEVsZW0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICBlZGl0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHNvbWUgY29kZSBjYW4ndCBiZSBzaG93biBieSBlcHViIGVuZ2luZVxuICBpZiAoZWxlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYXV0b3J1bicpKSB7XG4gICAgaWYod2luZG93LmVib29rVHlwZSA9PSAnZXB1YicgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXV0b3J1bicpID09ICduby1lcHViJykge1xuICAgICAgZWxlbS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKS5yZW1vdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGltZW91dCBzaG91bGQgYmUgc21hbGwsIGFyb3VuZCAxMG1zLCBvciByZW1vdmUgaXQgdG8gbWFrZSBjcmF3bGVyIHByb2Nlc3MgdGhlIGF1dG9ydW5cbiAgICAgIHNldFRpbWVvdXQocnVuLCAxMDApO1xuICAgICAgLy8gcnVuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcG9zdEpTRnJhbWUoKSB7XG4gICAgbGV0IHdpbiA9IGpzRnJhbWUuY29udGVudFdpbmRvdztcbiAgICBpZiAodHlwZW9mIHdpbi5wb3N0TWVzc2FnZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWxlcnQoXCJTb3JyeSwgeW91ciBicm93c2VyIGlzIHRvbyBvbGRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbi5wb3N0TWVzc2FnZShydW5Db2RlLCBjb25maWcubG9va2F0Q29kZVVybEJhc2UgKyAnL3Nob3dqcycpO1xuICB9XG5cblxuICBmdW5jdGlvbiBlbXBoYXNpemUoY29kZUVsZW0sIHJhbmdlcykge1xuICAgIGxldCBjb2RlSHRtbCA9IGNvZGVFbGVtLmlubmVySFRNTDtcbiAgICBsZXQgc3BsaXQgPSBjb2RlSHRtbC5zcGxpdCgvXFxuLyk7XG5cbiAgICBmb3IobGV0IHJhbmdlIG9mIHJhbmdlcykge1xuICAgICAgaWYgKHJhbmdlLmVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGJsb2NrIGVtcGhhc2l6ZVxuICAgICAgICBzcGxpdFtyYW5nZS5zdGFydF0gPSAnPGVtIGNsYXNzPVwiYmxvY2staGlnaGxpZ2h0XCI+JyArIHNwbGl0W3JhbmdlLnN0YXJ0XTtcbiAgICAgICAgc3BsaXRbcmFuZ2UuZW5kXSArPSAnPC9lbT4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxpbmUgPSBzcGxpdFtyYW5nZS5zdGFydF07XG4gICAgICAgIGxldCBjb2xzID0gcmFuZ2UuY29scztcbiAgICAgICAgbGV0IGluVGFnID0gZmFsc2U7XG4gICAgICAgIGxldCBjaGFyQ291bnRlciA9IC0xO1xuICAgICAgICBsZXQgcmVzdWx0TGluZSA9ICcnO1xuICAgICAgICAvKlxuICAgICAgICBpZiAoY29scy5maW5kKGMgPT4gYy5zdGFydCA9PSAwKSkge1xuICAgICAgICAgIHJlc3VsdExpbmUgKz0gJzxlbSBjbGFzcz1cImlubGluZS1oaWdobGlnaHRcIj4nO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIC8vIGxpbmUgPSBsaW5lLnJlcGxhY2UoLzwuKj8+L2csICc8cz4nKTtcbiAgICAgICAgLy9saW5lID0gYGFsZXJ0KCdTdGFydCBvZiB0cnkgcnVucycpOyAgLy8gKDEpICZsdDstLS1gO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lLmxlbmd0aCA7IGkrKykge1xuICAgICAgICAgIGlmIChsaW5lW2ldID09ICc8JykgaW5UYWcgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGluVGFnKSB7XG4gICAgICAgICAgICByZXN1bHRMaW5lICs9IGxpbmVbaV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoYXJDb3VudGVyKys7XG5cbiAgICAgICAgICAgIGlmIChjb2xzLmZpbmQoYyA9PiBjLnN0YXJ0ID09IGNoYXJDb3VudGVyKSkge1xuICAgICAgICAgICAgICByZXN1bHRMaW5lICs9ICc8ZW0gY2xhc3M9XCJpbmxpbmUtaGlnaGxpZ2h0XCI+JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0TGluZSArPSBsaW5lW2ldO1xuXG4gICAgICAgICAgICBpZiAobGluZVtpXSA9PSAnJicpIHsgLy8gZW50aXRpZXMsIHN1Y2ggYXMgJmx0OyBhcmUgY291bnRlZCBhcyBzaW5nbGUgY2hhciBpbiByYW5nZS5jb2xzXG4gICAgICAgICAgICAgIGxldCBlbnRpdGllcyA9IFsnbHQ7JywgJ2d0OycsICdhbXA7JywgJ3F1b3Q7J107XG4gICAgICAgICAgICAgIGZvcihsZXQgZW50aXR5IG9mIGVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmUuc2xpY2UoaSArIDEsIGkgKyAxICsgZW50aXR5Lmxlbmd0aCkgPT0gZW50aXR5KSB7XG4gICAgICAgICAgICAgICAgICBpICs9IGVudGl0eS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICByZXN1bHRMaW5lICs9IGVudGl0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbHMuZmluZChjID0+IGMuZW5kID09IGNoYXJDb3VudGVyICsgMSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0TGluZSArPSAnPC9lbT4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChsaW5lW2ldID09ICc+JykgaW5UYWcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICBpZiAoY29scy5maW5kKGMgPT4gYy5lbmQgPT0gY2hhckNvdW50ZXIgKyAxKSkge1xuICAgICAgICAgIHJlc3VsdExpbmUgKz0gJzwvZW0+JztcbiAgICAgICAgfSovXG5cbiAgICAgICAgc3BsaXRbcmFuZ2Uuc3RhcnRdID0gcmVzdWx0TGluZTtcbiAgICAgIH1cblxuICAgIH1cbiAgICBjb2RlRWxlbS5pbm5lckhUTUwgPSBzcGxpdC5qb2luKCdcXG4nKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gcnVuSFRNTCgpIHtcblxuICAgIGxldCBmcmFtZTtcblxuICAgIGlmIChodG1sUmVzdWx0ICYmIGVsZW0uaGFzQXR0cmlidXRlKCdkYXRhLXJlZnJlc2gnKSkge1xuICAgICAgaHRtbFJlc3VsdC5yZW1vdmUoKTtcbiAgICAgIGh0bWxSZXN1bHQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghaHRtbFJlc3VsdCkge1xuICAgICAgLy8gdGFrZSBmcm9tIEhUTUwgaWYgZXhpc3RzIHRoZXJlIChpbiBtYXJrdXAgd2hlbiBhdXRvcnVuIGlzIHNwZWNpZmllZClcbiAgICAgIGh0bWxSZXN1bHQgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb2RlLXJlc3VsdCcpO1xuICAgIH1cblxuICAgIGlmICghaHRtbFJlc3VsdCkge1xuICAgICAgLy8gb3RoZXJ3aXNlIGNyZWF0ZSAob3IgcmVjcmVhdGUgaWYgcmVmcmVzaClcbiAgICAgIGh0bWxSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGh0bWxSZXN1bHQuY2xhc3NOYW1lID0gXCJjb2RlLXJlc3VsdCBjb2RlLWV4YW1wbGVfX3Jlc3VsdFwiO1xuXG4gICAgICBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgZnJhbWUubmFtZSA9IGVsZW0uaWQ7IC8vIGZvciBjb25zb2xlLmxvZ1xuICAgICAgZnJhbWUuY2xhc3NOYW1lID0gJ2NvZGUtcmVzdWx0X19pZnJhbWUnO1xuXG4gICAgICBpZiAoZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVtby1oZWlnaHQnKSA9PT0gXCIwXCIpIHtcbiAgICAgICAgLy8gdGhpcyBodG1sIGhhcyBub3RoaW5nIHRvIHNob3dcbiAgICAgICAgaHRtbFJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSBlbHNlIGlmIChlbGVtLmhhc0F0dHJpYnV0ZSgnZGF0YS1kZW1vLWhlaWdodCcpKSB7XG4gICAgICAgIGxldCBoZWlnaHQgPSArZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVtby1oZWlnaHQnKTtcbiAgICAgICAgZnJhbWUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGh0bWxSZXN1bHQuYXBwZW5kQ2hpbGQoZnJhbWUpO1xuXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGh0bWxSZXN1bHQpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGZyYW1lID0gaHRtbFJlc3VsdC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbiAgICB9XG5cbiAgICBpZiAoaXNUcnVzdGVkICYmICFmcmFtZS5oYXNDdXN0b21Db25zb2xlTG9nKSB7XG4gICAgICAvLyBpZnJhbWUgbWF5IGhhdmUgYmVlbiBnZW5lcmF0ZWQgYWJvdmUgT1IgYWxyZWFkeSBwdXQgaW4gSFRNTCBieSBhdXRvcnVuXG4gICAgICBmcmFtZS5oYXNDdXN0b21Db25zb2xlTG9nID0gdHJ1ZTtcbiAgICAgIGxldCBjb25zb2xlTG9nTmF0aXZlID0gZnJhbWUuY29udGVudFdpbmRvdy5jb25zb2xlLmxvZy5iaW5kKGZyYW1lLmNvbnRlbnRXaW5kb3cuY29uc29sZSk7XG5cbiAgICAgIC8vIGJpbmQgY29uc29sZS5sb2cgdG8gdGhlIGN1cnJlbnQgZWxlbS5pZFxuICAgICAgZnJhbWUuY29udGVudFdpbmRvdy5jb25zb2xlLmxvZyA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZUxvZ05hdGl2ZSguLi5hcmdzKTtcblxuICAgICAgICBsZXQgZm9ybWF0dGVkQXJncyA9IGNvbnNvbGVGb3JtYXQoYXJncyk7XG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7dHlwZTogJ2NvbnNvbGUtbG9nJywgbG9nOiBmb3JtYXR0ZWRBcmdzLCBjb2RlQm94SWQ6IGVsZW0uaWR9LCAnKicpO1xuICAgICAgfTtcbiAgICB9XG5cblxuICAgIGlmIChpc1RydXN0ZWQpIHtcbiAgICAgIGxldCBkb2MgPSBmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblxuICAgICAgZG9jLm9wZW4oKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvZGUpXG4gICAgICBkb2Mud3JpdGUobm9ybWFsaXplSHRtbChjb2RlKSk7XG4gICAgICBkb2MuY2xvc2UoKTtcblxuICAgICAgaWYgKCFlbGVtLmhhc0F0dHJpYnV0ZSgnZGF0YS1kZW1vLWhlaWdodCcpKSB7XG4gICAgICAgIHJlc2l6ZU9ubG9hZC5pZnJhbWUoZnJhbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShpc0ZpcnN0UnVuICYmIGVsZW0uaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9ydW4nKSkpIHtcbiAgICAgICAgaWYgKCFpc1Njcm9sbGVkSW50b1ZpZXcoaHRtbFJlc3VsdCkpIHtcbiAgICAgICAgICBodG1sUmVzdWx0LnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZm9ybS5tZXRob2QgPSAnUE9TVCc7XG4gICAgICBmb3JtLmVuY3R5cGUgPSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIjtcbiAgICAgIGZvcm0uYWN0aW9uID0gY29uZmlnLmxvb2thdENvZGVVcmxCYXNlICsgXCIvc2hvd2h0bWxcIjtcbiAgICAgIGZvcm0udGFyZ2V0ID0gZnJhbWUubmFtZTtcblxuICAgICAgbGV0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRleHRhcmVhLm5hbWUgPSAnY29kZSc7XG5cbiAgICAgIGxldCBub3JtYWxpemVkQ29kZSA9IG5vcm1hbGl6ZUh0bWwoY29kZSk7XG4gICAgICBpZiAobm9ybWFsaXplZENvZGUuaW5jbHVkZXMoJ2NvbnNvbGUubG9nJykpIHtcbiAgICAgICAgLy8gaW5zZXJ0IGFmdGVyIDxoZWFkPiBvciA8Ym9keT4sIHRvIGVuc3VyZSB0aGF0IGNvbnNvbGUubG9nIGlzIHJlcGxhY2VkIGltbWVkaWF0ZWx5XG4gICAgICAgIG5vcm1hbGl6ZWRDb2RlID0gbm9ybWFsaXplZENvZGUucmVwbGFjZSgvPGhlYWQ+fDxib2R5Pi9pbSwgJyQmX19MT09LQVRDT0RFX1NDUklQVF9fJyk7XG4gICAgICB9XG4gICAgICB0ZXh0YXJlYS52YWx1ZSA9IG5vcm1hbGl6ZWRDb2RlO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5cbiAgICAgIGZyYW1lLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZvcm0sIGZyYW1lLm5leHRTaWJsaW5nKTtcbiAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICBmb3JtLnJlbW92ZSgpO1xuXG4gICAgICBpZiAoIShpc0ZpcnN0UnVuICYmIGVsZW0uaGFzQXR0cmlidXRlKCdkYXRhLWF1dG9ydW4nKSkpIHtcbiAgICAgICAgZnJhbWUub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICBpZiAoIWVsZW0uaGFzQXR0cmlidXRlKCdkYXRhLWRlbW8taGVpZ2h0JykpIHtcbiAgICAgICAgICAgIHJlc2l6ZU9ubG9hZC5pZnJhbWUoZnJhbWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghaXNTY3JvbGxlZEludG9WaWV3KGh0bWxSZXN1bHQpKSB7XG4gICAgICAgICAgICBodG1sUmVzdWx0LnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBnbG9iYWwgY29udGV4dFxuICBmdW5jdGlvbiBnbG9iYWxFdmFsKGNvZGUpIHtcbiAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApO1xuICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG4gICAgc2NyaXB0LnRleHQgPSBjb2RlO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKHNjcmlwdCk7XG4gICAgc2NyaXB0LnJlbW92ZSgpO1xuICB9XG5cbiAgdGhpcy5jb25zb2xlTG9nID0gZnVuY3Rpb24oYXJncykge1xuICAgIC8vIGNvbnNvbGUuaW5mbyhcIkNvZGVib3ggY29uc29sZUxvZ1wiLCBhcmdzKTtcbiAgICBpZiAoIW91dHB1dEJveCkge1xuICAgICAgb3V0cHV0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBvdXRwdXRCb3guY2xhc3NOYW1lID0gJ2NvZGVib3hfX291dHB1dCc7XG5cbiAgICAgIGVsZW0uYXBwZW5kKG91dHB1dEJveCk7XG5cbiAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gJ2NvZGVib3hfX291dHB1dC1sYWJlbCc7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSB0KCdwcmlzbS5vdXRwdXQnKTtcbiAgICAgIG91dHB1dEJveC5hcHBlbmQobGFiZWwpO1xuICAgIH1cblxuICAgIGxldCBsb2dFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nRWxlbS5jbGFzc05hbWUgPSAnY29kZWJveF9fb3V0cHV0LWxpbmUnO1xuICAgIGxvZ0VsZW0uaW5uZXJIVE1MID0gYXJncztcbiAgICBvdXRwdXRCb3guYXBwZW5kKGxvZ0VsZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuSlMoKSB7XG5cbiAgICBpZiAoZWxlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZ2xvYmFsJykpIHtcbiAgICAgIGlmICghZ2xvYmFsRnJhbWUpIHtcbiAgICAgICAgZ2xvYmFsRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgZ2xvYmFsRnJhbWUuY2xhc3NOYW1lID0gJ2pzLWZyYW1lJztcbiAgICAgICAgZ2xvYmFsRnJhbWUuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICBnbG9iYWxGcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgICBnbG9iYWxGcmFtZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgIGdsb2JhbEZyYW1lLm5hbWUgPSAnanMtZ2xvYmFsLWZyYW1lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnbG9iYWxGcmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZm9ybS5tZXRob2QgPSAnUE9TVCc7XG4gICAgICBmb3JtLmVuY3R5cGUgPSBcIm11bHRpcGFydC9mb3JtLWRhdGFcIjtcbiAgICAgIGZvcm0uYWN0aW9uID0gY29uZmlnLmxvb2thdENvZGVVcmxCYXNlICsgXCIvc2hvd2h0bWxcIjtcbiAgICAgIGZvcm0udGFyZ2V0ID0gJ2pzLWdsb2JhbC1mcmFtZSc7XG5cbiAgICAgIGxldCBzY3JpcHRBdHRycyA9IGVsZW0uaGFzQXR0cmlidXRlKCdkYXRhLW1vZHVsZScpID8gJyB0eXBlPVwibW9kdWxlXCInIDogJyc7XG5cbiAgICAgIGxldCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICB0ZXh0YXJlYS5uYW1lID0gJ2NvZGUnO1xuICAgICAgdGV4dGFyZWEudmFsdWUgPSBub3JtYWxpemVIdG1sKGA8c2NyaXB0JHtzY3JpcHRBdHRyc30+XFxuJHtydW5Db2RlfVxcbjwvc2NyaXB0PmApO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5cbiAgICAgIGdsb2JhbEZyYW1lLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZvcm0sIGdsb2JhbEZyYW1lLm5leHRTaWJsaW5nKTtcbiAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICBmb3JtLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAoaXNUcnVzdGVkKSB7XG5cbiAgICAgIGlmIChlbGVtLmhhc0F0dHJpYnV0ZSgnZGF0YS1hdXRvcnVuJykgfHwgZWxlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbW9kdWxlJykpIHtcbiAgICAgICAgLy8gbWFrZSBzdXJlIGZ1bmN0aW9ucyBmcm9tIFwiYXV0b3J1blwiIGdvIHRvIGdsb2JhbCBzY29wZSAoZXZhbCBoYXMgaXRzIG93biBzY29wZSlcbiAgICAgICAgZ2xvYmFsRXZhbChydW5Db2RlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3dbXCJldmFsXCJdLmNhbGwod2luZG93LCBydW5Db2RlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgYWxlcnQoZS5jb25zdHJ1Y3Rvci5uYW1lICsgXCI6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChlbGVtLmhhc0F0dHJpYnV0ZSgnZGF0YS1yZWZyZXNoJykgJiYganNGcmFtZSkge1xuICAgICAgICBqc0ZyYW1lLnJlbW92ZSgpO1xuICAgICAgICBqc0ZyYW1lID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFqc0ZyYW1lKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBpZnJhbWUgZm9yIGpzXG4gICAgICAgIGpzRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAganNGcmFtZS5jbGFzc05hbWUgPSAnanMtZnJhbWUnO1xuICAgICAgICBqc0ZyYW1lLnNyYyA9IGNvbmZpZy5sb29rYXRDb2RlVXJsQmFzZSArICcvc2hvd2pzJztcbiAgICAgICAganNGcmFtZS5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgIGpzRnJhbWUuc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAganNGcmFtZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgIGpzRnJhbWUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gZXJyb3Igd2l0aCBcIm51bGxcIiB0YXJnZXQgaWYgZmFpbHMgdG8gbG9hZCBqc0ZyYW1lXG4gICAgICAgICAgcG9zdEpTRnJhbWUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChqc0ZyYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RKU0ZyYW1lKCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBlZGl0KCkge1xuXG4gICAgbGV0IGh0bWw7XG4gICAgaWYgKGlzSFRNTCkge1xuICAgICAgaHRtbCA9IG5vcm1hbGl6ZUh0bWwoY29kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGxldCBjb2RlSW5kZW50ZWQgPSBjb2RlLnJlcGxhY2UoL14vZ2ltLCAnICAgICcpO1xuICAgICAgaHRtbCA9IGA8IURPQ1RZUEUgaHRtbD5cXG48c2NyaXB0PlxcbiR7c2FuZGJveENvZGV9XFxuPC9zY3JpcHQ+YDtcbiAgICB9XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmFjdGlvbiA9IFwiaHR0cHM6Ly9wbG5rci5jby9lZGl0Lz9wPXByZXZpZXdcIjtcbiAgICBmb3JtLm1ldGhvZCA9IFwiUE9TVFwiO1xuICAgIGZvcm0udGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBsZXQgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRleHRhcmVhLm5hbWUgPSBcImZpbGVzW2luZGV4Lmh0bWxdXCI7XG4gICAgdGV4dGFyZWEudmFsdWUgPSBodG1sO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGlucHV0LnZhbHVlID0gXCJGb3JrIGZyb20gXCIgKyB3aW5kb3cubG9jYXRpb247XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBmb3JtLnN1Ym1pdCgpO1xuICAgIGZvcm0ucmVtb3ZlKCk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUh0bWwoY29kZSkge1xuICAgIGxldCBoYXNEb2NUeXBlID0gY29kZS5tYXRjaCgvXlxccyo8IWRvY3R5cGUvaSk7XG5cbiAgICBpZiAoaGFzRG9jVHlwZSkge1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGNvZGU7XG5cbiAgICBpZiAoIWNvZGUubWF0Y2goLzxib2R5L2kpKSB7XG4gICAgICByZXN1bHQgPSBgPGJvZHk+XFxuJHtyZXN1bHR9XFxuPC9ib2R5PmA7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gJzwhZG9jdHlwZSBodG1sPlxcbicgKyByZXN1bHQ7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuICBmdW5jdGlvbiBydW4oKSB7XG5cbiAgICBpZiAob3V0cHV0Qm94KSB7XG4gICAgICBvdXRwdXRCb3gucmVtb3ZlKCk7XG4gICAgICBvdXRwdXRCb3ggPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChpc0pTKSB7XG4gICAgICBydW5KUygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBydW5IVE1MKCk7XG4gICAgfVxuICAgIGlzRmlyc3RSdW4gPSBmYWxzZTtcbiAgfVxuXG5cbn1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0gQ29kZUJveDtcbiIsIlxuZnVuY3Rpb24gaXNTY3JvbGxlZEludG9WaWV3KGVsZW0pIHtcbiAgbGV0IGNvb3JkcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgbGV0IHZpc2libGVIZWlnaHQgPSAwO1xuXG4gIGlmIChjb29yZHMudG9wIDwgMCkge1xuICAgIHZpc2libGVIZWlnaHQgPSBjb29yZHMuYm90dG9tO1xuICB9IGVsc2UgaWYgKGNvb3Jkcy5ib3R0b20gPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICB2aXNpYmxlSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdG9wO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVIZWlnaHQgPiAxMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Njcm9sbGVkSW50b1ZpZXc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1ha2VIaWdobGlnaHQocmFuZ2VzKSB7XG5cbiAgaWYgKCFyYW5nZXMgfHwgIXJhbmdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgcmVzdWx0cyA9IFtdO1xuXG4gIGZvciAobGV0IHJhbmdlIG9mIHJhbmdlcykge1xuXG4gICAgbGV0IG1hc2sgPSBgPGNvZGUgY2xhc3M9XCJibG9jay1oaWdobGlnaHQke3JhbmdlLmNvbHMgPyAnIGJsb2NrLWhpZ2hsaWdodF9pbmxpbmUnIDogJyd9XCIgZGF0YS1zdGFydD1cIiR7cmFuZ2Uuc3RhcnR9XCI+YDtcblxuICAgIG1hc2sgKz0gJ1xcbicucmVwZWF0KHJhbmdlLnN0YXJ0KTtcblxuICAgIGlmIChyYW5nZS5lbmQpIHtcbiAgICAgIG1hc2sgKz0gYDxjb2RlIGNsYXNzPVwibWFza1wiPiR7J1xcbicucmVwZWF0KHJhbmdlLmVuZCAtIHJhbmdlLnN0YXJ0ICsgMSl9PC9jb2RlPmA7XG4gICAgfSBlbHNlIGlmIChyYW5nZS5jb2xzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlLmNvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGNvbCA9IHJhbmdlLmNvbHNbaV07XG4gICAgICAgIGxldCBwcmV2Q29sID0gKGkgPT09IDApID8gbnVsbCA6IHJhbmdlLmNvbHNbaSAtIDFdO1xuICAgICAgICBtYXNrICs9ICcgJy5yZXBlYXQoKHByZXZDb2wgPyAoY29sLnN0YXJ0IC0gcHJldkNvbC5lbmQpIDogY29sLnN0YXJ0KSk7XG4gICAgICAgIG1hc2sgKz0gYDxjb2RlIGNsYXNzPVwibWFzay1pbmxpbmVcIj4keycgJy5yZXBlYXQoY29sLmVuZCAtIGNvbC5zdGFydCl9PC9jb2RlPmA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFzayArPSAnPC9jb2RlPic7XG5cbiAgICByZXN1bHRzLnB1c2gobWFzayk7XG4gIH1cblxuICAvLyBmaXJzdCBiaWdnZXIgKGxvd2VyKSBibG9ja1xuICAvLyByZXN1bHRzLnJldmVyc2UoKTtcblxuICByZXR1cm4gcmVzdWx0cy5qb2luKCcnKTtcblxufTtcbiIsIlxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1jb3JlLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbi8vLyA8cmVmZXJlbmNlIGxpYj1cIldlYldvcmtlclwiLz5cblxudmFyIF9zZWxmID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXHQ/IHdpbmRvdyAgIC8vIGlmIGluIGJyb3dzZXJcblx0OiAoXG5cdFx0KHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKVxuXHRcdFx0PyBzZWxmIC8vIGlmIGluIHdvcmtlclxuXHRcdFx0OiB7fSAgIC8vIGlmIGluIG5vZGUganNcblx0KTtcblxuLyoqXG4gKiBQcmlzbTogTGlnaHR3ZWlnaHQsIHJvYnVzdCwgZWxlZ2FudCBzeW50YXggaGlnaGxpZ2h0aW5nXG4gKlxuICogQGxpY2Vuc2UgTUlUIDxodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVD5cbiAqIEBhdXRob3IgTGVhIFZlcm91IDxodHRwczovL2xlYS52ZXJvdS5tZT5cbiAqIEBuYW1lc3BhY2VcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFByaXNtID0gKGZ1bmN0aW9uIChfc2VsZikge1xuXG5cdC8vIFByaXZhdGUgaGVscGVyIHZhcnNcblx0dmFyIGxhbmcgPSAvKD86XnxcXHMpbGFuZyg/OnVhZ2UpPy0oW1xcdy1dKykoPz1cXHN8JCkvaTtcblx0dmFyIHVuaXF1ZUlkID0gMDtcblxuXHQvLyBUaGUgZ3JhbW1hciBvYmplY3QgZm9yIHBsYWludGV4dFxuXHR2YXIgcGxhaW5UZXh0R3JhbW1hciA9IHt9O1xuXG5cblx0dmFyIF8gPSB7XG5cdFx0LyoqXG5cdFx0ICogQnkgZGVmYXVsdCwgUHJpc20gd2lsbCBhdHRlbXB0IHRvIGhpZ2hsaWdodCBhbGwgY29kZSBlbGVtZW50cyAoYnkgY2FsbGluZyB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0QWxsfSkgb24gdGhlXG5cdFx0ICogY3VycmVudCBwYWdlIGFmdGVyIHRoZSBwYWdlIGZpbmlzaGVkIGxvYWRpbmcuIFRoaXMgbWlnaHQgYmUgYSBwcm9ibGVtIGlmIGUuZy4geW91IHdhbnRlZCB0byBhc3luY2hyb25vdXNseSBsb2FkXG5cdFx0ICogYWRkaXRpb25hbCBsYW5ndWFnZXMgb3IgcGx1Z2lucyB5b3Vyc2VsZi5cblx0XHQgKlxuXHRcdCAqIEJ5IHNldHRpbmcgdGhpcyB2YWx1ZSB0byBgdHJ1ZWAsIFByaXNtIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgaGlnaGxpZ2h0IGFsbCBjb2RlIGVsZW1lbnRzIG9uIHRoZSBwYWdlLlxuXHRcdCAqXG5cdFx0ICogWW91IG9idmlvdXNseSBoYXZlIHRvIGNoYW5nZSB0aGlzIHZhbHVlIGJlZm9yZSB0aGUgYXV0b21hdGljIGhpZ2hsaWdodGluZyBzdGFydGVkLiBUbyBkbyB0aGlzLCB5b3UgY2FuIGFkZCBhblxuXHRcdCAqIGVtcHR5IFByaXNtIG9iamVjdCBpbnRvIHRoZSBnbG9iYWwgc2NvcGUgYmVmb3JlIGxvYWRpbmcgdGhlIFByaXNtIHNjcmlwdCBsaWtlIHRoaXM6XG5cdFx0ICpcblx0XHQgKiBgYGBqc1xuXHRcdCAqIHdpbmRvdy5QcmlzbSA9IHdpbmRvdy5QcmlzbSB8fCB7fTtcblx0XHQgKiBQcmlzbS5tYW51YWwgPSB0cnVlO1xuXHRcdCAqIC8vIGFkZCBhIG5ldyA8c2NyaXB0PiB0byBsb2FkIFByaXNtJ3Mgc2NyaXB0XG5cdFx0ICogYGBgXG5cdFx0ICpcblx0XHQgKiBAZGVmYXVsdCBmYWxzZVxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRtYW51YWw6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLm1hbnVhbCxcblx0XHQvKipcblx0XHQgKiBCeSBkZWZhdWx0LCBpZiBQcmlzbSBpcyBpbiBhIHdlYiB3b3JrZXIsIGl0IGFzc3VtZXMgdGhhdCBpdCBpcyBpbiBhIHdvcmtlciBpdCBjcmVhdGVkIGl0c2VsZiwgc28gaXQgdXNlc1xuXHRcdCAqIGBhZGRFdmVudExpc3RlbmVyYCB0byBjb21tdW5pY2F0ZSB3aXRoIGl0cyBwYXJlbnQgaW5zdGFuY2UuIEhvd2V2ZXIsIGlmIHlvdSdyZSB1c2luZyBQcmlzbSBtYW51YWxseSBpbiB5b3VyXG5cdFx0ICogb3duIHdvcmtlciwgeW91IGRvbid0IHdhbnQgaXQgdG8gZG8gdGhpcy5cblx0XHQgKlxuXHRcdCAqIEJ5IHNldHRpbmcgdGhpcyB2YWx1ZSB0byBgdHJ1ZWAsIFByaXNtIHdpbGwgbm90IGFkZCBpdHMgb3duIGxpc3RlbmVycyB0byB0aGUgd29ya2VyLlxuXHRcdCAqXG5cdFx0ICogWW91IG9idmlvdXNseSBoYXZlIHRvIGNoYW5nZSB0aGlzIHZhbHVlIGJlZm9yZSBQcmlzbSBleGVjdXRlcy4gVG8gZG8gdGhpcywgeW91IGNhbiBhZGQgYW5cblx0XHQgKiBlbXB0eSBQcmlzbSBvYmplY3QgaW50byB0aGUgZ2xvYmFsIHNjb3BlIGJlZm9yZSBsb2FkaW5nIHRoZSBQcmlzbSBzY3JpcHQgbGlrZSB0aGlzOlxuXHRcdCAqXG5cdFx0ICogYGBganNcblx0XHQgKiB3aW5kb3cuUHJpc20gPSB3aW5kb3cuUHJpc20gfHwge307XG5cdFx0ICogUHJpc20uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyID0gdHJ1ZTtcblx0XHQgKiAvLyBMb2FkIFByaXNtJ3Mgc2NyaXB0XG5cdFx0ICogYGBgXG5cdFx0ICpcblx0XHQgKiBAZGVmYXVsdCBmYWxzZVxuXHRcdCAqIEB0eXBlIHtib29sZWFufVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXI6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcixcblxuXHRcdC8qKlxuXHRcdCAqIEEgbmFtZXNwYWNlIGZvciB1dGlsaXR5IG1ldGhvZHMuXG5cdFx0ICpcblx0XHQgKiBBbGwgZnVuY3Rpb24gaW4gdGhpcyBuYW1lc3BhY2UgdGhhdCBhcmUgbm90IGV4cGxpY2l0bHkgbWFya2VkIGFzIF9wdWJsaWNfIGFyZSBmb3IgX19pbnRlcm5hbCB1c2Ugb25seV9fIGFuZCBtYXlcblx0XHQgKiBjaGFuZ2Ugb3IgZGlzYXBwZWFyIGF0IGFueSB0aW1lLlxuXHRcdCAqXG5cdFx0ICogQG5hbWVzcGFjZVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqL1xuXHRcdHV0aWw6IHtcblx0XHRcdGVuY29kZTogZnVuY3Rpb24gZW5jb2RlKHRva2Vucykge1xuXHRcdFx0XHRpZiAodG9rZW5zIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IFRva2VuKHRva2Vucy50eXBlLCBlbmNvZGUodG9rZW5zLmNvbnRlbnQpLCB0b2tlbnMuYWxpYXMpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodG9rZW5zKSkge1xuXHRcdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKGVuY29kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cXHUwMGEwL2csICcgJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgdHlwZSBvZiB0aGUgZ2l2ZW4gdmFsdWUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHthbnl9IG9cblx0XHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0XHQgKiBAZXhhbXBsZVxuXHRcdFx0ICogdHlwZShudWxsKSAgICAgID09PSAnTnVsbCdcblx0XHRcdCAqIHR5cGUodW5kZWZpbmVkKSA9PT0gJ1VuZGVmaW5lZCdcblx0XHRcdCAqIHR5cGUoMTIzKSAgICAgICA9PT0gJ051bWJlcidcblx0XHRcdCAqIHR5cGUoJ2ZvbycpICAgICA9PT0gJ1N0cmluZydcblx0XHRcdCAqIHR5cGUodHJ1ZSkgICAgICA9PT0gJ0Jvb2xlYW4nXG5cdFx0XHQgKiB0eXBlKFsxLCAyXSkgICAgPT09ICdBcnJheSdcblx0XHRcdCAqIHR5cGUoe30pICAgICAgICA9PT0gJ09iamVjdCdcblx0XHRcdCAqIHR5cGUoU3RyaW5nKSAgICA9PT0gJ0Z1bmN0aW9uJ1xuXHRcdFx0ICogdHlwZSgvYWJjKy8pICAgID09PSAnUmVnRXhwJ1xuXHRcdFx0ICovXG5cdFx0XHR0eXBlOiBmdW5jdGlvbiAobykge1xuXHRcdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUmV0dXJucyBhIHVuaXF1ZSBudW1iZXIgZm9yIHRoZSBnaXZlbiBvYmplY3QuIExhdGVyIGNhbGxzIHdpbGwgc3RpbGwgcmV0dXJuIHRoZSBzYW1lIG51bWJlci5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gb2JqXG5cdFx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHRcdFx0ICovXG5cdFx0XHRvYmpJZDogZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0XHRpZiAoIW9ialsnX19pZCddKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19faWQnLCB7IHZhbHVlOiArK3VuaXF1ZUlkIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBvYmpbJ19faWQnXTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBhIGRlZXAgY2xvbmUgb2YgdGhlIGdpdmVuIG9iamVjdC5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgbWFpbiBpbnRlbmRlZCB1c2Ugb2YgdGhpcyBmdW5jdGlvbiBpcyB0byBjbG9uZSBsYW5ndWFnZSBkZWZpbml0aW9ucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge1R9IG9cblx0XHRcdCAqIEBwYXJhbSB7UmVjb3JkPG51bWJlciwgYW55Pn0gW3Zpc2l0ZWRdXG5cdFx0XHQgKiBAcmV0dXJucyB7VH1cblx0XHRcdCAqIEB0ZW1wbGF0ZSBUXG5cdFx0XHQgKi9cblx0XHRcdGNsb25lOiBmdW5jdGlvbiBkZWVwQ2xvbmUobywgdmlzaXRlZCkge1xuXHRcdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0XHR2YXIgY2xvbmU7IHZhciBpZDtcblx0XHRcdFx0c3dpdGNoIChfLnV0aWwudHlwZShvKSkge1xuXHRcdFx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRcdFx0XHRpZCA9IF8udXRpbC5vYmpJZChvKTtcblx0XHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjbG9uZSA9IC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi8gKHt9KTtcblx0XHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdFx0XHRjbG9uZVtrZXldID0gZGVlcENsb25lKG9ba2V5XSwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIC8qKiBAdHlwZSB7YW55fSAqLyAoY2xvbmUpO1xuXG5cdFx0XHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y2xvbmUgPSBbXTtcblx0XHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRcdCgvKiogQHR5cGUge0FycmF5fSAqLygvKiogQHR5cGUge2FueX0gKi8obykpKS5mb3JFYWNoKGZ1bmN0aW9uICh2LCBpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lW2ldID0gZGVlcENsb25lKHYsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdHJldHVybiAvKiogQHR5cGUge2FueX0gKi8gKGNsb25lKTtcblxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHRoZSBQcmlzbSBsYW5ndWFnZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBzZXQgYnkgYSBgbGFuZ3VhZ2UteHh4eGAgb3IgYGxhbmcteHh4eGAgY2xhc3MuXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgbm8gbGFuZ3VhZ2UgaXMgc2V0IGZvciB0aGUgZWxlbWVudCBvciB0aGUgZWxlbWVudCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIGBub25lYCB3aWxsIGJlIHJldHVybmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHRcdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHRcdCAqL1xuXHRcdFx0Z2V0TGFuZ3VhZ2U6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRcdHdoaWxlIChlbGVtZW50KSB7XG5cdFx0XHRcdFx0dmFyIG0gPSBsYW5nLmV4ZWMoZWxlbWVudC5jbGFzc05hbWUpO1xuXHRcdFx0XHRcdGlmIChtKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbVsxXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAnbm9uZSc7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNldHMgdGhlIFByaXNtIGBsYW5ndWFnZS14eHh4YCBjbGFzcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxuXHRcdFx0ICogQHJldHVybnMge3ZvaWR9XG5cdFx0XHQgKi9cblx0XHRcdHNldExhbmd1YWdlOiBmdW5jdGlvbiAoZWxlbWVudCwgbGFuZ3VhZ2UpIHtcblx0XHRcdFx0Ly8gcmVtb3ZlIGFsbCBgbGFuZ3VhZ2UteHh4eGAgY2xhc3Nlc1xuXHRcdFx0XHQvLyAodGhpcyBtaWdodCBsZWF2ZSBiZWhpbmQgYSBsZWFkaW5nIHNwYWNlKVxuXHRcdFx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoUmVnRXhwKGxhbmcsICdnaScpLCAnJyk7XG5cblx0XHRcdFx0Ly8gYWRkIHRoZSBuZXcgYGxhbmd1YWdlLXh4eHhgIGNsYXNzXG5cdFx0XHRcdC8vICh1c2luZyBgY2xhc3NMaXN0YCB3aWxsIGF1dG9tYXRpY2FsbHkgY2xlYW4gdXAgc3BhY2VzIGZvciB1cylcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZS0nICsgbGFuZ3VhZ2UpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZXR1cm5zIHRoZSBzY3JpcHQgZWxlbWVudCB0aGF0IGlzIGN1cnJlbnRseSBleGVjdXRpbmcuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBkb2VzIF9fbm90X18gd29yayBmb3IgbGluZSBzY3JpcHQgZWxlbWVudC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcmV0dXJucyB7SFRNTFNjcmlwdEVsZW1lbnQgfCBudWxsfVxuXHRcdFx0ICovXG5cdFx0XHRjdXJyZW50U2NyaXB0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCdjdXJyZW50U2NyaXB0JyBpbiBkb2N1bWVudCAmJiAxIDwgMiAvKiBoYWNrIHRvIHRyaXAgVFMnIGZsb3cgYW5hbHlzaXMgKi8pIHtcblx0XHRcdFx0XHRyZXR1cm4gLyoqIEB0eXBlIHthbnl9ICovIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElFMTEgd29ya2Fyb3VuZFxuXHRcdFx0XHQvLyB3ZSdsbCBnZXQgdGhlIHNyYyBvZiB0aGUgY3VycmVudCBzY3JpcHQgYnkgcGFyc2luZyBJRTExJ3MgZXJyb3Igc3RhY2sgdHJhY2Vcblx0XHRcdFx0Ly8gdGhpcyB3aWxsIG5vdCB3b3JrIGZvciBpbmxpbmUgc2NyaXB0c1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdC8vIEdldCBmaWxlIHNyYyB1cmwgZnJvbSBzdGFjay4gU3BlY2lmaWNhbGx5IHdvcmtzIHdpdGggdGhlIGZvcm1hdCBvZiBzdGFjayB0cmFjZXMgaW4gSUUuXG5cdFx0XHRcdFx0Ly8gQSBzdGFjayB3aWxsIGxvb2sgbGlrZSB0aGlzOlxuXHRcdFx0XHRcdC8vXG5cdFx0XHRcdFx0Ly8gRXJyb3Jcblx0XHRcdFx0XHQvLyAgICBhdCBfLnV0aWwuY3VycmVudFNjcmlwdCAoaHR0cDovL2xvY2FsaG9zdC9jb21wb25lbnRzL3ByaXNtLWNvcmUuanM6MTE5OjUpXG5cdFx0XHRcdFx0Ly8gICAgYXQgR2xvYmFsIGNvZGUgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjYwNjoxKVxuXG5cdFx0XHRcdFx0dmFyIHNyYyA9ICgvYXQgW14oXFxyXFxuXSpcXCgoLiopOlteOl0rOlteOl0rXFwpJC9pLmV4ZWMoZXJyLnN0YWNrKSB8fCBbXSlbMV07XG5cdFx0XHRcdFx0aWYgKHNyYykge1xuXHRcdFx0XHRcdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHNjcmlwdHMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKHNjcmlwdHNbaV0uc3JjID09IHNyYykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzY3JpcHRzW2ldO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFJldHVybnMgd2hldGhlciBhIGdpdmVuIGNsYXNzIGlzIGFjdGl2ZSBmb3IgYGVsZW1lbnRgLlxuXHRcdFx0ICpcblx0XHRcdCAqIFRoZSBjbGFzcyBjYW4gYmUgYWN0aXZhdGVkIGlmIGBlbGVtZW50YCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIGdpdmVuIGNsYXNzIGFuZCBpdCBjYW4gYmUgZGVhY3RpdmF0ZWRcblx0XHRcdCAqIGlmIGBlbGVtZW50YCBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gY2xhc3MuIFRoZSBfbmVnYXRlZCB2ZXJzaW9uXyBvZiB0aGVcblx0XHRcdCAqIGdpdmVuIGNsYXNzIGlzIGp1c3QgdGhlIGdpdmVuIGNsYXNzIHdpdGggYSBgbm8tYCBwcmVmaXguXG5cdFx0XHQgKlxuXHRcdFx0ICogV2hldGhlciB0aGUgY2xhc3MgaXMgYWN0aXZlIGlzIGRldGVybWluZWQgYnkgdGhlIGNsb3Nlc3QgYW5jZXN0b3Igb2YgYGVsZW1lbnRgICh3aGVyZSBgZWxlbWVudGAgaXRzZWxmIGlzXG5cdFx0XHQgKiBjbG9zZXN0IGFuY2VzdG9yKSB0aGF0IGhhcyB0aGUgZ2l2ZW4gY2xhc3Mgb3IgdGhlIG5lZ2F0ZWQgdmVyc2lvbiBvZiBpdC4gSWYgbmVpdGhlciBgZWxlbWVudGAgbm9yIGFueSBvZiBpdHNcblx0XHRcdCAqIGFuY2VzdG9ycyBoYXZlIHRoZSBnaXZlbiBjbGFzcyBvciB0aGUgbmVnYXRlZCB2ZXJzaW9uIG9mIGl0LCB0aGVuIHRoZSBkZWZhdWx0IGFjdGl2YXRpb24gd2lsbCBiZSByZXR1cm5lZC5cblx0XHRcdCAqXG5cdFx0XHQgKiBJbiB0aGUgcGFyYWRveGljYWwgc2l0dWF0aW9uIHdoZXJlIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGNvbnRhaW5zIF9fYm90aF9fIHRoZSBnaXZlbiBjbGFzcyBhbmQgdGhlIG5lZ2F0ZWRcblx0XHRcdCAqIHZlcnNpb24gb2YgaXQsIHRoZSBjbGFzcyBpcyBjb25zaWRlcmVkIGFjdGl2ZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcblx0XHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZmF1bHRBY3RpdmF0aW9uPWZhbHNlXVxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0XHQgKi9cblx0XHRcdGlzQWN0aXZlOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lLCBkZWZhdWx0QWN0aXZhdGlvbikge1xuXHRcdFx0XHR2YXIgbm8gPSAnbm8tJyArIGNsYXNzTmFtZTtcblxuXHRcdFx0XHR3aGlsZSAoZWxlbWVudCkge1xuXHRcdFx0XHRcdHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcblx0XHRcdFx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKG5vKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAhIWRlZmF1bHRBY3RpdmF0aW9uO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBUaGlzIG5hbWVzcGFjZSBjb250YWlucyBhbGwgY3VycmVudGx5IGxvYWRlZCBsYW5ndWFnZXMgYW5kIHRoZSBzb21lIGhlbHBlciBmdW5jdGlvbnMgdG8gY3JlYXRlIGFuZCBtb2RpZnkgbGFuZ3VhZ2VzLlxuXHRcdCAqXG5cdFx0ICogQG5hbWVzcGFjZVxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRsYW5ndWFnZXM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIGdyYW1tYXIgZm9yIHBsYWluLCB1bmZvcm1hdHRlZCB0ZXh0LlxuXHRcdFx0ICovXG5cdFx0XHRwbGFpbjogcGxhaW5UZXh0R3JhbW1hcixcblx0XHRcdHBsYWludGV4dDogcGxhaW5UZXh0R3JhbW1hcixcblx0XHRcdHRleHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cdFx0XHR0eHQ6IHBsYWluVGV4dEdyYW1tYXIsXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBhIGRlZXAgY29weSBvZiB0aGUgbGFuZ3VhZ2Ugd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIGFwcGVuZHMgdGhlIGdpdmVuIHRva2Vucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBhIHRva2VuIGluIGByZWRlZmAgYWxzbyBhcHBlYXJzIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2UsIHRoZW4gdGhlIGV4aXN0aW5nIHRva2VuIGluIHRoZSBjb3BpZWQgbGFuZ3VhZ2Vcblx0XHRcdCAqIHdpbGwgYmUgb3ZlcndyaXR0ZW4gYXQgaXRzIG9yaWdpbmFsIHBvc2l0aW9uLlxuXHRcdFx0ICpcblx0XHRcdCAqICMjIEJlc3QgcHJhY3RpY2VzXG5cdFx0XHQgKlxuXHRcdFx0ICogU2luY2UgdGhlIHBvc2l0aW9uIG9mIG92ZXJ3cml0aW5nIHRva2VucyAodG9rZW4gaW4gYHJlZGVmYCB0aGF0IG92ZXJ3cml0ZSB0b2tlbnMgaW4gdGhlIGNvcGllZCBsYW5ndWFnZSlcblx0XHRcdCAqIGRvZXNuJ3QgbWF0dGVyLCB0aGV5IGNhbiB0ZWNobmljYWxseSBiZSBpbiBhbnkgb3JkZXIuIEhvd2V2ZXIsIHRoaXMgY2FuIGJlIGNvbmZ1c2luZyB0byBvdGhlcnMgdGhhdCB0cnlpbmcgdG9cblx0XHRcdCAqIHVuZGVyc3RhbmQgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gYmVjYXVzZSwgbm9ybWFsbHksIHRoZSBvcmRlciBvZiB0b2tlbnMgbWF0dGVycyBpbiBQcmlzbSBncmFtbWFycy5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGVyZWZvcmUsIGl0IGlzIGVuY291cmFnZWQgdG8gb3JkZXIgb3ZlcndyaXRpbmcgdG9rZW5zIGFjY29yZGluZyB0byB0aGUgcG9zaXRpb25zIG9mIHRoZSBvdmVyd3JpdHRlbiB0b2tlbnMuXG5cdFx0XHQgKiBGdXJ0aGVybW9yZSwgYWxsIG5vbi1vdmVyd3JpdGluZyB0b2tlbnMgc2hvdWxkIGJlIHBsYWNlZCBhZnRlciB0aGUgb3ZlcndyaXRpbmcgb25lcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBsYW5ndWFnZSB0byBleHRlbmQuIFRoaXMgaGFzIHRvIGJlIGEga2V5IGluIGBQcmlzbS5sYW5ndWFnZXNgLlxuXHRcdFx0ICogQHBhcmFtIHtHcmFtbWFyfSByZWRlZiBUaGUgbmV3IHRva2VucyB0byBhcHBlbmQuXG5cdFx0XHQgKiBAcmV0dXJucyB7R3JhbW1hcn0gVGhlIG5ldyBsYW5ndWFnZSBjcmVhdGVkLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICogQGV4YW1wbGVcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlc1snY3NzLXdpdGgtY29sb3JzJ10gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG5cdFx0XHQgKiAgICAgLy8gUHJpc20ubGFuZ3VhZ2VzLmNzcyBhbHJlYWR5IGhhcyBhICdjb21tZW50JyB0b2tlbiwgc28gdGhpcyB0b2tlbiB3aWxsIG92ZXJ3cml0ZSBDU1MnICdjb21tZW50JyB0b2tlblxuXHRcdFx0ICogICAgIC8vIGF0IGl0cyBvcmlnaW5hbCBwb3NpdGlvblxuXHRcdFx0ICogICAgICdjb21tZW50JzogeyAuLi4gfSxcblx0XHRcdCAqICAgICAvLyBDU1MgZG9lc24ndCBoYXZlIGEgJ2NvbG9yJyB0b2tlbiwgc28gdGhpcyB0b2tlbiB3aWxsIGJlIGFwcGVuZGVkXG5cdFx0XHQgKiAgICAgJ2NvbG9yJzogL1xcYig/OnJlZHxncmVlbnxibHVlKVxcYi9cblx0XHRcdCAqIH0pO1xuXHRcdFx0ICovXG5cdFx0XHRleHRlbmQ6IGZ1bmN0aW9uIChpZCwgcmVkZWYpIHtcblx0XHRcdFx0dmFyIGxhbmcgPSBfLnV0aWwuY2xvbmUoXy5sYW5ndWFnZXNbaWRdKTtcblxuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcblx0XHRcdFx0XHRsYW5nW2tleV0gPSByZWRlZltrZXldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEluc2VydHMgdG9rZW5zIF9iZWZvcmVfIGFub3RoZXIgdG9rZW4gaW4gYSBsYW5ndWFnZSBkZWZpbml0aW9uIG9yIGFueSBvdGhlciBncmFtbWFyLlxuXHRcdFx0ICpcblx0XHRcdCAqICMjIFVzYWdlXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBoZWxwZXIgbWV0aG9kIG1ha2VzIGl0IGVhc3kgdG8gbW9kaWZ5IGV4aXN0aW5nIGxhbmd1YWdlcy4gRm9yIGV4YW1wbGUsIHRoZSBDU1MgbGFuZ3VhZ2UgZGVmaW5pdGlvblxuXHRcdFx0ICogbm90IG9ubHkgZGVmaW5lcyBDU1MgaGlnaGxpZ2h0aW5nIGZvciBDU1MgZG9jdW1lbnRzLCBidXQgYWxzbyBuZWVkcyB0byBkZWZpbmUgaGlnaGxpZ2h0aW5nIGZvciBDU1MgZW1iZWRkZWRcblx0XHRcdCAqIGluIEhUTUwgdGhyb3VnaCBgPHN0eWxlPmAgZWxlbWVudHMuIFRvIGRvIHRoaXMsIGl0IG5lZWRzIHRvIG1vZGlmeSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAgYW5kIGFkZCB0aGVcblx0XHRcdCAqIGFwcHJvcHJpYXRlIHRva2Vucy4gSG93ZXZlciwgYFByaXNtLmxhbmd1YWdlcy5tYXJrdXBgIGlzIGEgcmVndWxhciBKYXZhU2NyaXB0IG9iamVjdCBsaXRlcmFsLCBzbyBpZiB5b3UgZG9cblx0XHRcdCAqIHRoaXM6XG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlcy5tYXJrdXAuc3R5bGUgPSB7XG5cdFx0XHQgKiAgICAgLy8gdG9rZW5cblx0XHRcdCAqIH07XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiB0aGVuIHRoZSBgc3R5bGVgIHRva2VuIHdpbGwgYmUgYWRkZWQgKGFuZCBwcm9jZXNzZWQpIGF0IHRoZSBlbmQuIGBpbnNlcnRCZWZvcmVgIGFsbG93cyB5b3UgdG8gaW5zZXJ0IHRva2Vuc1xuXHRcdFx0ICogYmVmb3JlIGV4aXN0aW5nIHRva2Vucy4gRm9yIHRoZSBDU1MgZXhhbXBsZSBhYm92ZSwgeW91IHdvdWxkIHVzZSBpdCBsaWtlIHRoaXM6XG5cdFx0XHQgKlxuXHRcdFx0ICogYGBganNcblx0XHRcdCAqIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIHtcblx0XHRcdCAqICAgICAnc3R5bGUnOiB7XG5cdFx0XHQgKiAgICAgICAgIC8vIHRva2VuXG5cdFx0XHQgKiAgICAgfVxuXHRcdFx0ICogfSk7XG5cdFx0XHQgKiBgYGBcblx0XHRcdCAqXG5cdFx0XHQgKiAjIyBTcGVjaWFsIGNhc2VzXG5cdFx0XHQgKlxuXHRcdFx0ICogSWYgdGhlIGdyYW1tYXJzIG9mIGBpbnNpZGVgIGFuZCBgaW5zZXJ0YCBoYXZlIHRva2VucyB3aXRoIHRoZSBzYW1lIG5hbWUsIHRoZSB0b2tlbnMgaW4gYGluc2lkZWAncyBncmFtbWFyXG5cdFx0XHQgKiB3aWxsIGJlIGlnbm9yZWQuXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhpcyBiZWhhdmlvciBjYW4gYmUgdXNlZCB0byBpbnNlcnQgdG9rZW5zIGFmdGVyIGBiZWZvcmVgOlxuXHRcdFx0ICpcblx0XHRcdCAqIGBgYGpzXG5cdFx0XHQgKiBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY29tbWVudCcsIHtcblx0XHRcdCAqICAgICAnY29tbWVudCc6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXAuY29tbWVudCxcblx0XHRcdCAqICAgICAvLyB0b2tlbnMgYWZ0ZXIgJ2NvbW1lbnQnXG5cdFx0XHQgKiB9KTtcblx0XHRcdCAqIGBgYFxuXHRcdFx0ICpcblx0XHRcdCAqICMjIExpbWl0YXRpb25zXG5cdFx0XHQgKlxuXHRcdFx0ICogVGhlIG1haW4gcHJvYmxlbSBgaW5zZXJ0QmVmb3JlYCBoYXMgdG8gc29sdmUgaXMgaXRlcmF0aW9uIG9yZGVyLiBTaW5jZSBFUzIwMTUsIHRoZSBpdGVyYXRpb24gb3JkZXIgZm9yIG9iamVjdFxuXHRcdFx0ICogcHJvcGVydGllcyBpcyBndWFyYW50ZWVkIHRvIGJlIHRoZSBpbnNlcnRpb24gb3JkZXIgKGV4Y2VwdCBmb3IgaW50ZWdlciBrZXlzKSBidXQgc29tZSBicm93c2VycyBiZWhhdmVcblx0XHRcdCAqIGRpZmZlcmVudGx5IHdoZW4ga2V5cyBhcmUgZGVsZXRlZCBhbmQgcmUtaW5zZXJ0ZWQuIFNvIGBpbnNlcnRCZWZvcmVgIGNhbid0IGJlIGltcGxlbWVudGVkIGJ5IHRlbXBvcmFyaWx5XG5cdFx0XHQgKiBkZWxldGluZyBwcm9wZXJ0aWVzIHdoaWNoIGlzIG5lY2Vzc2FyeSB0byBpbnNlcnQgYXQgYXJiaXRyYXJ5IHBvc2l0aW9ucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBUbyBzb2x2ZSB0aGlzIHByb2JsZW0sIGBpbnNlcnRCZWZvcmVgIGRvZXNuJ3QgYWN0dWFsbHkgaW5zZXJ0IHRoZSBnaXZlbiB0b2tlbnMgaW50byB0aGUgdGFyZ2V0IG9iamVjdC5cblx0XHRcdCAqIEluc3RlYWQsIGl0IHdpbGwgY3JlYXRlIGEgbmV3IG9iamVjdCBhbmQgcmVwbGFjZSBhbGwgcmVmZXJlbmNlcyB0byB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBuZXcgb25lLiBUaGlzXG5cdFx0XHQgKiBjYW4gYmUgZG9uZSB3aXRob3V0IHRlbXBvcmFyaWx5IGRlbGV0aW5nIHByb3BlcnRpZXMsIHNvIHRoZSBpdGVyYXRpb24gb3JkZXIgaXMgd2VsbC1kZWZpbmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEhvd2V2ZXIsIG9ubHkgcmVmZXJlbmNlcyB0aGF0IGNhbiBiZSByZWFjaGVkIGZyb20gYFByaXNtLmxhbmd1YWdlc2Agb3IgYGluc2VydGAgd2lsbCBiZSByZXBsYWNlZC4gSS5lLiBpZlxuXHRcdFx0ICogeW91IGhvbGQgdGhlIHRhcmdldCBvYmplY3QgaW4gYSB2YXJpYWJsZSwgdGhlbiB0aGUgdmFsdWUgb2YgdGhlIHZhcmlhYmxlIHdpbGwgbm90IGNoYW5nZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBgYGBqc1xuXHRcdFx0ICogdmFyIG9sZE1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdFx0XHQgKiB2YXIgbmV3TWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NvbW1lbnQnLCB7IC4uLiB9KTtcblx0XHRcdCAqXG5cdFx0XHQgKiBhc3NlcnQob2xkTWFya3VwICE9PSBQcmlzbS5sYW5ndWFnZXMubWFya3VwKTtcblx0XHRcdCAqIGFzc2VydChuZXdNYXJrdXAgPT09IFByaXNtLmxhbmd1YWdlcy5tYXJrdXApO1xuXHRcdFx0ICogYGBgXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGluc2lkZSBUaGUgcHJvcGVydHkgb2YgYHJvb3RgIChlLmcuIGEgbGFuZ3VhZ2UgaWQgaW4gYFByaXNtLmxhbmd1YWdlc2ApIHRoYXQgY29udGFpbnMgdGhlXG5cdFx0XHQgKiBvYmplY3QgdG8gYmUgbW9kaWZpZWQuXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYmVmb3JlIFRoZSBrZXkgdG8gaW5zZXJ0IGJlZm9yZS5cblx0XHRcdCAqIEBwYXJhbSB7R3JhbW1hcn0gaW5zZXJ0IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXktdmFsdWUgcGFpcnMgdG8gYmUgaW5zZXJ0ZWQuXG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IFtyb290XSBUaGUgb2JqZWN0IGNvbnRhaW5pbmcgYGluc2lkZWAsIGkuZS4gdGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZVxuXHRcdFx0ICogb2JqZWN0IHRvIGJlIG1vZGlmaWVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIERlZmF1bHRzIHRvIGBQcmlzbS5sYW5ndWFnZXNgLlxuXHRcdFx0ICogQHJldHVybnMge0dyYW1tYXJ9IFRoZSBuZXcgZ3JhbW1hciBvYmplY3QuXG5cdFx0XHQgKiBAcHVibGljXG5cdFx0XHQgKi9cblx0XHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24gKGluc2lkZSwgYmVmb3JlLCBpbnNlcnQsIHJvb3QpIHtcblx0XHRcdFx0cm9vdCA9IHJvb3QgfHwgLyoqIEB0eXBlIHthbnl9ICovIChfLmxhbmd1YWdlcyk7XG5cdFx0XHRcdHZhciBncmFtbWFyID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0XHQvKiogQHR5cGUge0dyYW1tYXJ9ICovXG5cdFx0XHRcdHZhciByZXQgPSB7fTtcblxuXHRcdFx0XHRmb3IgKHZhciB0b2tlbiBpbiBncmFtbWFyKSB7XG5cdFx0XHRcdFx0aWYgKGdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cblx0XHRcdFx0XHRcdGlmICh0b2tlbiA9PSBiZWZvcmUpIHtcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgbmV3VG9rZW4gaW4gaW5zZXJ0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGluc2VydC5oYXNPd25Qcm9wZXJ0eShuZXdUb2tlbikpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldFtuZXdUb2tlbl0gPSBpbnNlcnRbbmV3VG9rZW5dO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBEbyBub3QgaW5zZXJ0IHRva2VuIHdoaWNoIGFsc28gb2NjdXIgaW4gaW5zZXJ0LiBTZWUgIzE1MjVcblx0XHRcdFx0XHRcdGlmICghaW5zZXJ0Lmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRyZXRbdG9rZW5dID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIG9sZCA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdFx0cm9vdFtpbnNpZGVdID0gcmV0O1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSByZWZlcmVuY2VzIGluIG90aGVyIGxhbmd1YWdlIGRlZmluaXRpb25zXG5cdFx0XHRcdF8ubGFuZ3VhZ2VzLkRGUyhfLmxhbmd1YWdlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG9sZCAmJiBrZXkgIT0gaW5zaWRlKSB7XG5cdFx0XHRcdFx0XHR0aGlzW2tleV0gPSByZXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVHJhdmVyc2UgYSBsYW5ndWFnZSBkZWZpbml0aW9uIHdpdGggRGVwdGggRmlyc3QgU2VhcmNoXG5cdFx0XHRERlM6IGZ1bmN0aW9uIERGUyhvLCBjYWxsYmFjaywgdHlwZSwgdmlzaXRlZCkge1xuXHRcdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0XHR2YXIgb2JqSWQgPSBfLnV0aWwub2JqSWQ7XG5cblx0XHRcdFx0Zm9yICh2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwobywgaSwgb1tpXSwgdHlwZSB8fCBpKTtcblxuXHRcdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gb1tpXTtcblx0XHRcdFx0XHRcdHZhciBwcm9wZXJ0eVR5cGUgPSBfLnV0aWwudHlwZShwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRcdGlmIChwcm9wZXJ0eVR5cGUgPT09ICdPYmplY3QnICYmICF2aXNpdGVkW29iaklkKHByb3BlcnR5KV0pIHtcblx0XHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgbnVsbCwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ0FycmF5JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIGksIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwbHVnaW5zOiB7fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgaXMgdGhlIG1vc3QgaGlnaC1sZXZlbCBmdW5jdGlvbiBpbiBQcmlzbeKAmXMgQVBJLlxuXHRcdCAqIEl0IGZldGNoZXMgYWxsIHRoZSBlbGVtZW50cyB0aGF0IGhhdmUgYSBgLmxhbmd1YWdlLXh4eHhgIGNsYXNzIGFuZCB0aGVuIGNhbGxzIHtAbGluayBQcmlzbS5oaWdobGlnaHRFbGVtZW50fSBvblxuXHRcdCAqIGVhY2ggb25lIG9mIHRoZW0uXG5cdFx0ICpcblx0XHQgKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gYFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyKGRvY3VtZW50LCBhc3luYywgY2FsbGJhY2spYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzeW5jPWZhbHNlXSBTYW1lIGFzIGluIHtAbGluayBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcn0uXG5cdFx0ICogQHBhcmFtIHtIaWdobGlnaHRDYWxsYmFja30gW2NhbGxiYWNrXSBTYW1lIGFzIGluIHtAbGluayBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcn0uXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodEFsbDogZnVuY3Rpb24gKGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdFx0Xy5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogRmV0Y2hlcyBhbGwgdGhlIGRlc2NlbmRhbnRzIG9mIGBjb250YWluZXJgIHRoYXQgaGF2ZSBhIGAubGFuZ3VhZ2UteHh4eGAgY2xhc3MgYW5kIHRoZW4gY2FsbHNcblx0XHQgKiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gb24gZWFjaCBvbmUgb2YgdGhlbS5cblx0XHQgKlxuXHRcdCAqIFRoZSBmb2xsb3dpbmcgaG9va3Mgd2lsbCBiZSBydW46XG5cdFx0ICogMS4gYGJlZm9yZS1oaWdobGlnaHRhbGxgXG5cdFx0ICogMi4gYGJlZm9yZS1hbGwtZWxlbWVudHMtaGlnaGxpZ2h0YFxuXHRcdCAqIDMuIEFsbCBob29rcyBvZiB7QGxpbmsgUHJpc20uaGlnaGxpZ2h0RWxlbWVudH0gZm9yIGVhY2ggZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gY29udGFpbmVyIFRoZSByb290IGVsZW1lbnQsIHdob3NlIGRlc2NlbmRhbnRzIHRoYXQgaGF2ZSBhIGAubGFuZ3VhZ2UteHh4eGAgY2xhc3Mgd2lsbCBiZSBoaWdobGlnaHRlZC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luYz1mYWxzZV0gV2hldGhlciBlYWNoIGVsZW1lbnQgaXMgdG8gYmUgaGlnaGxpZ2h0ZWQgYXN5bmNocm9ub3VzbHkgdXNpbmcgV2ViIFdvcmtlcnMuXG5cdFx0ICogQHBhcmFtIHtIaWdobGlnaHRDYWxsYmFja30gW2NhbGxiYWNrXSBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGVhY2ggZWxlbWVudCBhZnRlciBpdHMgaGlnaGxpZ2h0aW5nIGlzIGRvbmUuXG5cdFx0ICogQG1lbWJlcm9mIFByaXNtXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodEFsbFVuZGVyOiBmdW5jdGlvbiAoY29udGFpbmVyLCBhc3luYywgY2FsbGJhY2spIHtcblx0XHRcdHZhciBlbnYgPSB7XG5cdFx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsXG5cdFx0XHRcdHNlbGVjdG9yOiAnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sIFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gY29kZSwgY29kZVtjbGFzcyo9XCJsYW5nLVwiXSwgW2NsYXNzKj1cImxhbmctXCJdIGNvZGUnXG5cdFx0XHR9O1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGVudik7XG5cblx0XHRcdGVudi5lbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbnYuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoZW52LnNlbGVjdG9yKSk7XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwLCBlbGVtZW50OyAoZWxlbWVudCA9IGVudi5lbGVtZW50c1tpKytdKTspIHtcblx0XHRcdFx0Xy5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIGFzeW5jID09PSB0cnVlLCBlbnYuY2FsbGJhY2spO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBIaWdobGlnaHRzIHRoZSBjb2RlIGluc2lkZSBhIHNpbmdsZSBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogVGhlIGZvbGxvd2luZyBob29rcyB3aWxsIGJlIHJ1bjpcblx0XHQgKiAxLiBgYmVmb3JlLXNhbml0eS1jaGVja2Bcblx0XHQgKiAyLiBgYmVmb3JlLWhpZ2hsaWdodGBcblx0XHQgKiAzLiBBbGwgaG9va3Mgb2Yge0BsaW5rIFByaXNtLmhpZ2hsaWdodH0uIFRoZXNlIGhvb2tzIHdpbGwgYmUgcnVuIGJ5IGFuIGFzeW5jaHJvbm91cyB3b3JrZXIgaWYgYGFzeW5jYCBpcyBgdHJ1ZWAuXG5cdFx0ICogNC4gYGJlZm9yZS1pbnNlcnRgXG5cdFx0ICogNS4gYGFmdGVyLWhpZ2hsaWdodGBcblx0XHQgKiA2LiBgY29tcGxldGVgXG5cdFx0ICpcblx0XHQgKiBTb21lIHRoZSBhYm92ZSBob29rcyB3aWxsIGJlIHNraXBwZWQgaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBjb250YWluIGFueSB0ZXh0IG9yIHRoZXJlIGlzIG5vIGdyYW1tYXIgbG9hZGVkIGZvclxuXHRcdCAqIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgY29kZS5cblx0XHQgKiBJdCBtdXN0IGhhdmUgYSBjbGFzcyBvZiBgbGFuZ3VhZ2UteHh4eGAgdG8gYmUgcHJvY2Vzc2VkLCB3aGVyZSBgeHh4eGAgaXMgYSB2YWxpZCBsYW5ndWFnZSBpZGVudGlmaWVyLlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzeW5jPWZhbHNlXSBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIHRvIGJlIGhpZ2hsaWdodGVkIGFzeW5jaHJvbm91c2x5IHVzaW5nIFdlYiBXb3JrZXJzXG5cdFx0ICogdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSBhbmQgYXZvaWQgYmxvY2tpbmcgdGhlIFVJIHdoZW4gaGlnaGxpZ2h0aW5nIHZlcnkgbGFyZ2UgY2h1bmtzIG9mIGNvZGUuIFRoaXMgb3B0aW9uIGlzXG5cdFx0ICogW2Rpc2FibGVkIGJ5IGRlZmF1bHRdKGh0dHBzOi8vcHJpc21qcy5jb20vZmFxLmh0bWwjd2h5LWlzLWFzeW5jaHJvbm91cy1oaWdobGlnaHRpbmctZGlzYWJsZWQtYnktZGVmYXVsdCkuXG5cdFx0ICpcblx0XHQgKiBOb3RlOiBBbGwgbGFuZ3VhZ2UgZGVmaW5pdGlvbnMgcmVxdWlyZWQgdG8gaGlnaGxpZ2h0IHRoZSBjb2RlIG11c3QgYmUgaW5jbHVkZWQgaW4gdGhlIG1haW4gYHByaXNtLmpzYCBmaWxlIGZvclxuXHRcdCAqIGFzeW5jaHJvbm91cyBoaWdobGlnaHRpbmcgdG8gd29yay4gWW91IGNhbiBidWlsZCB5b3VyIG93biBidW5kbGUgb24gdGhlXG5cdFx0ICogW0Rvd25sb2FkIHBhZ2VdKGh0dHBzOi8vcHJpc21qcy5jb20vZG93bmxvYWQuaHRtbCkuXG5cdFx0ICogQHBhcmFtIHtIaWdobGlnaHRDYWxsYmFja30gW2NhbGxiYWNrXSBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBoaWdobGlnaHRpbmcgaXMgZG9uZS5cblx0XHQgKiBNb3N0bHkgdXNlZnVsIHdoZW4gYGFzeW5jYCBpcyBgdHJ1ZWAsIHNpbmNlIGluIHRoYXQgY2FzZSwgdGhlIGhpZ2hsaWdodGluZyBpcyBkb25lIGFzeW5jaHJvbm91c2x5LlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHRoaWdobGlnaHRFbGVtZW50OiBmdW5jdGlvbiAoZWxlbWVudCwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0XHQvLyBGaW5kIGxhbmd1YWdlXG5cdFx0XHR2YXIgbGFuZ3VhZ2UgPSBfLnV0aWwuZ2V0TGFuZ3VhZ2UoZWxlbWVudCk7XG5cdFx0XHR2YXIgZ3JhbW1hciA9IF8ubGFuZ3VhZ2VzW2xhbmd1YWdlXTtcblxuXHRcdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBlbGVtZW50LCBpZiBub3QgcHJlc2VudFxuXHRcdFx0Xy51dGlsLnNldExhbmd1YWdlKGVsZW1lbnQsIGxhbmd1YWdlKTtcblxuXHRcdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBwYXJlbnQsIGZvciBzdHlsaW5nXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3ByZScpIHtcblx0XHRcdFx0Xy51dGlsLnNldExhbmd1YWdlKHBhcmVudCwgbGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29kZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cblx0XHRcdHZhciBlbnYgPSB7XG5cdFx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZSxcblx0XHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdFx0Y29kZTogY29kZVxuXHRcdFx0fTtcblxuXHRcdFx0ZnVuY3Rpb24gaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0XHRlbnYuaGlnaGxpZ2h0ZWRDb2RlID0gaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRcdF8uaG9va3MucnVuKCdhZnRlci1oaWdobGlnaHQnLCBlbnYpO1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0XHQvLyBwbHVnaW5zIG1heSBjaGFuZ2UvYWRkIHRoZSBwYXJlbnQvZWxlbWVudFxuXHRcdFx0cGFyZW50ID0gZW52LmVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0XHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnICYmICFwYXJlbnQuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG5cdFx0XHRcdHBhcmVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8udXRpbC5lbmNvZGUoZW52LmNvZGUpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXN5bmMgJiYgX3NlbGYuV29ya2VyKSB7XG5cdFx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG5cdFx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdFx0Y29kZTogZW52LmNvZGUsXG5cdFx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdFx0fSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8uaGlnaGxpZ2h0KGVudi5jb2RlLCBlbnYuZ3JhbW1hciwgZW52Lmxhbmd1YWdlKSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIExvdy1sZXZlbCBmdW5jdGlvbiwgb25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3XigJlyZSBkb2luZy4gSXQgYWNjZXB0cyBhIHN0cmluZyBvZiB0ZXh0IGFzIGlucHV0XG5cdFx0ICogYW5kIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGEgc3RyaW5nIHdpdGggdGhlIEhUTUwgcHJvZHVjZWQuXG5cdFx0ICpcblx0XHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHRcdCAqIDEuIGBiZWZvcmUtdG9rZW5pemVgXG5cdFx0ICogMi4gYGFmdGVyLXRva2VuaXplYFxuXHRcdCAqIDMuIGB3cmFwYDogT24gZWFjaCB7QGxpbmsgVG9rZW59LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgQSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBiZSBoaWdobGlnaHRlZC5cblx0XHQgKiBAcGFyYW0ge0dyYW1tYXJ9IGdyYW1tYXIgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHRva2VucyB0byB1c2UuXG5cdFx0ICpcblx0XHQgKiBVc3VhbGx5IGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiBsaWtlIGBQcmlzbS5sYW5ndWFnZXMubWFya3VwYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24gcGFzc2VkIHRvIGBncmFtbWFyYC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgaGlnaGxpZ2h0ZWQgSFRNTC5cblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICogQGV4YW1wbGVcblx0XHQgKiBQcmlzbS5oaWdobGlnaHQoJ3ZhciBmb28gPSB0cnVlOycsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0LCAnamF2YXNjcmlwdCcpO1xuXHRcdCAqL1xuXHRcdGhpZ2hsaWdodDogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG5cdFx0XHR2YXIgZW52ID0ge1xuXHRcdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHRcdH07XG5cdFx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXRva2VuaXplJywgZW52KTtcblx0XHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgbGFuZ3VhZ2UgXCInICsgZW52Lmxhbmd1YWdlICsgJ1wiIGhhcyBubyBncmFtbWFyLicpO1xuXHRcdFx0fVxuXHRcdFx0ZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRcdF8uaG9va3MucnVuKCdhZnRlci10b2tlbml6ZScsIGVudik7XG5cdFx0XHRyZXR1cm4gVG9rZW4uc3RyaW5naWZ5KF8udXRpbC5lbmNvZGUoZW52LnRva2VucyksIGVudi5sYW5ndWFnZSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgaXMgdGhlIGhlYXJ0IG9mIFByaXNtLCBhbmQgdGhlIG1vc3QgbG93LWxldmVsIGZ1bmN0aW9uIHlvdSBjYW4gdXNlLiBJdCBhY2NlcHRzIGEgc3RyaW5nIG9mIHRleHQgYXMgaW5wdXRcblx0XHQgKiBhbmQgdGhlIGxhbmd1YWdlIGRlZmluaXRpb25zIHRvIHVzZSwgYW5kIHJldHVybnMgYW4gYXJyYXkgd2l0aCB0aGUgdG9rZW5pemVkIGNvZGUuXG5cdFx0ICpcblx0XHQgKiBXaGVuIHRoZSBsYW5ndWFnZSBkZWZpbml0aW9uIGluY2x1ZGVzIG5lc3RlZCB0b2tlbnMsIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgcmVjdXJzaXZlbHkgb24gZWFjaCBvZiB0aGVzZSB0b2tlbnMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIG1ldGhvZCBjb3VsZCBiZSB1c2VmdWwgaW4gb3RoZXIgY29udGV4dHMgYXMgd2VsbCwgYXMgYSB2ZXJ5IGNydWRlIHBhcnNlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IEEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gYmUgaGlnaGxpZ2h0ZWQuXG5cdFx0ICogQHBhcmFtIHtHcmFtbWFyfSBncmFtbWFyIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSB0b2tlbnMgdG8gdXNlLlxuXHRcdCAqXG5cdFx0ICogVXN1YWxseSBhIGxhbmd1YWdlIGRlZmluaXRpb24gbGlrZSBgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cGAuXG5cdFx0ICogQHJldHVybnMge1Rva2VuU3RyZWFtfSBBbiBhcnJheSBvZiBzdHJpbmdzIGFuZCB0b2tlbnMsIGEgdG9rZW4gc3RyZWFtLlxuXHRcdCAqIEBtZW1iZXJvZiBQcmlzbVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKiBAZXhhbXBsZVxuXHRcdCAqIGxldCBjb2RlID0gYHZhciBmb28gPSAwO2A7XG5cdFx0ICogbGV0IHRva2VucyA9IFByaXNtLnRva2VuaXplKGNvZGUsIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KTtcblx0XHQgKiB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG5cdFx0ICogICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFByaXNtLlRva2VuICYmIHRva2VuLnR5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0ICogICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgbnVtZXJpYyBsaXRlcmFsOiAke3Rva2VuLmNvbnRlbnR9YCk7XG5cdFx0ICogICAgIH1cblx0XHQgKiB9KTtcblx0XHQgKi9cblx0XHR0b2tlbml6ZTogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIpIHtcblx0XHRcdHZhciByZXN0ID0gZ3JhbW1hci5yZXN0O1xuXHRcdFx0aWYgKHJlc3QpIHtcblx0XHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRcdGdyYW1tYXJbdG9rZW5dID0gcmVzdFt0b2tlbl07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdG9rZW5MaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcblx0XHRcdGFkZEFmdGVyKHRva2VuTGlzdCwgdG9rZW5MaXN0LmhlYWQsIHRleHQpO1xuXG5cdFx0XHRtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCB0b2tlbkxpc3QuaGVhZCwgMCk7XG5cblx0XHRcdHJldHVybiB0b0FycmF5KHRva2VuTGlzdCk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEBuYW1lc3BhY2Vcblx0XHQgKiBAbWVtYmVyb2YgUHJpc21cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0aG9va3M6IHtcblx0XHRcdGFsbDoge30sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQWRkcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgdG8gdGhlIGxpc3Qgb2YgY2FsbGJhY2tzIGZvciB0aGUgZ2l2ZW4gaG9vay5cblx0XHRcdCAqXG5cdFx0XHQgKiBUaGUgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdoZW4gdGhlIGhvb2sgaXQgaXMgcmVnaXN0ZXJlZCBmb3IgaXMgcnVuLlxuXHRcdFx0ICogSG9va3MgYXJlIHVzdWFsbHkgZGlyZWN0bHkgcnVuIGJ5IGEgaGlnaGxpZ2h0IGZ1bmN0aW9uIGJ1dCB5b3UgY2FuIGFsc28gcnVuIGhvb2tzIHlvdXJzZWxmLlxuXHRcdFx0ICpcblx0XHRcdCAqIE9uZSBjYWxsYmFjayBmdW5jdGlvbiBjYW4gYmUgcmVnaXN0ZXJlZCB0byBtdWx0aXBsZSBob29rcyBhbmQgdGhlIHNhbWUgaG9vayBtdWx0aXBsZSB0aW1lcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7SG9va0NhbGxiYWNrfSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgZ2l2ZW4gZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0XHR2YXIgaG9va3MgPSBfLmhvb2tzLmFsbDtcblxuXHRcdFx0XHRob29rc1tuYW1lXSA9IGhvb2tzW25hbWVdIHx8IFtdO1xuXG5cdFx0XHRcdGhvb2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSdW5zIGEgaG9vayBpbnZva2luZyBhbGwgcmVnaXN0ZXJlZCBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIENhbGxiYWNrcyB3aWxsIGJlIGludm9rZWQgc3luY2hyb25vdXNseSBhbmQgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgd2VyZSByZWdpc3RlcmVkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBob29rLlxuXHRcdFx0ICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBlbnYgVGhlIGVudmlyb25tZW50IHZhcmlhYmxlcyBvZiB0aGUgaG9vayBwYXNzZWQgdG8gYWxsIGNhbGxiYWNrcyByZWdpc3RlcmVkLlxuXHRcdFx0ICogQHB1YmxpY1xuXHRcdFx0ICovXG5cdFx0XHRydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHtcblx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IF8uaG9va3MuYWxsW25hbWVdO1xuXG5cdFx0XHRcdGlmICghY2FsbGJhY2tzIHx8ICFjYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGNhbGxiYWNrOyAoY2FsbGJhY2sgPSBjYWxsYmFja3NbaSsrXSk7KSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soZW52KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRUb2tlbjogVG9rZW5cblx0fTtcblx0X3NlbGYuUHJpc20gPSBfO1xuXG5cblx0Ly8gVHlwZXNjcmlwdCBub3RlOlxuXHQvLyBUaGUgZm9sbG93aW5nIGNhbiBiZSB1c2VkIHRvIGltcG9ydCB0aGUgVG9rZW4gdHlwZSBpbiBKU0RvYzpcblx0Ly9cblx0Ly8gICBAdHlwZWRlZiB7SW5zdGFuY2VUeXBlPGltcG9ydChcIi4vcHJpc20tY29yZVwiKVtcIlRva2VuXCJdPn0gVG9rZW5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyB0b2tlbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgU2VlIHtAbGluayBUb2tlbiN0eXBlIHR5cGV9XG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgVG9rZW5TdHJlYW19IGNvbnRlbnQgU2VlIHtAbGluayBUb2tlbiNjb250ZW50IGNvbnRlbnR9XG5cdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbYWxpYXNdIFRoZSBhbGlhcyhlcykgb2YgdGhlIHRva2VuLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW21hdGNoZWRTdHI9XCJcIl0gQSBjb3B5IG9mIHRoZSBmdWxsIHN0cmluZyB0aGlzIHRva2VuIHdhcyBjcmVhdGVkIGZyb20uXG5cdCAqIEBjbGFzc1xuXHQgKiBAZ2xvYmFsXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdGZ1bmN0aW9uIFRva2VuKHR5cGUsIGNvbnRlbnQsIGFsaWFzLCBtYXRjaGVkU3RyKSB7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHR5cGUgb2YgdGhlIHRva2VuLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBpcyB1c3VhbGx5IHRoZSBrZXkgb2YgYSBwYXR0ZXJuIGluIGEge0BsaW5rIEdyYW1tYXJ9LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKiBAc2VlIEdyYW1tYXJUb2tlblxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBzdHJpbmdzIG9yIHRva2VucyBjb250YWluZWQgYnkgdGhpcyB0b2tlbi5cblx0XHQgKlxuXHRcdCAqIFRoaXMgd2lsbCBiZSBhIHRva2VuIHN0cmVhbSBpZiB0aGUgcGF0dGVybiBtYXRjaGVkIGFsc28gZGVmaW5lZCBhbiBgaW5zaWRlYCBncmFtbWFyLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZyB8IFRva2VuU3RyZWFtfVxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBhbGlhcyhlcykgb2YgdGhlIHRva2VuLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZ3xzdHJpbmdbXX1cblx0XHQgKiBAc2VlIEdyYW1tYXJUb2tlblxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLmFsaWFzID0gYWxpYXM7XG5cdFx0Ly8gQ29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tXG5cdFx0dGhpcy5sZW5ndGggPSAobWF0Y2hlZFN0ciB8fCAnJykubGVuZ3RoIHwgMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHRva2VuIHN0cmVhbSBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIGFuZCB7QGxpbmsgVG9rZW4gVG9rZW59IG9iamVjdHMuXG5cdCAqXG5cdCAqIFRva2VuIHN0cmVhbXMgaGF2ZSB0byBmdWxmaWxsIGEgZmV3IHByb3BlcnRpZXMgdGhhdCBhcmUgYXNzdW1lZCBieSBtb3N0IGZ1bmN0aW9ucyAobW9zdGx5IGludGVybmFsIG9uZXMpIHRoYXQgcHJvY2Vzc1xuXHQgKiB0aGVtLlxuXHQgKlxuXHQgKiAxLiBObyBhZGphY2VudCBzdHJpbmdzLlxuXHQgKiAyLiBObyBlbXB0eSBzdHJpbmdzLlxuXHQgKlxuXHQgKiAgICBUaGUgb25seSBleGNlcHRpb24gaGVyZSBpcyB0aGUgdG9rZW4gc3RyZWFtIHRoYXQgb25seSBjb250YWlucyB0aGUgZW1wdHkgc3RyaW5nIGFuZCBub3RoaW5nIGVsc2UuXG5cdCAqXG5cdCAqIEB0eXBlZGVmIHtBcnJheTxzdHJpbmcgfCBUb2tlbj59IFRva2VuU3RyZWFtXG5cdCAqIEBnbG9iYWxcblx0ICogQHB1YmxpY1xuXHQgKi9cblxuXHQvKipcblx0ICogQ29udmVydHMgdGhlIGdpdmVuIHRva2VuIG9yIHRva2VuIHN0cmVhbSB0byBhbiBIVE1MIHJlcHJlc2VudGF0aW9uLlxuXHQgKlxuXHQgKiBUaGUgZm9sbG93aW5nIGhvb2tzIHdpbGwgYmUgcnVuOlxuXHQgKiAxLiBgd3JhcGA6IE9uIGVhY2gge0BsaW5rIFRva2VufS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBUb2tlbiB8IFRva2VuU3RyZWFtfSBvIFRoZSB0b2tlbiBvciB0b2tlbiBzdHJlYW0gdG8gYmUgY29udmVydGVkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIG5hbWUgb2YgY3VycmVudCBsYW5ndWFnZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHRva2VuIG9yIHRva2VuIHN0cmVhbS5cblx0ICogQG1lbWJlcm9mIFRva2VuXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdFRva2VuLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShvLCBsYW5ndWFnZSkge1xuXHRcdGlmICh0eXBlb2YgbyA9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIG87XG5cdFx0fVxuXHRcdGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG5cdFx0XHR2YXIgcyA9ICcnO1xuXHRcdFx0by5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdHMgKz0gc3RyaW5naWZ5KGUsIGxhbmd1YWdlKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHM7XG5cdFx0fVxuXG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdHR5cGU6IG8udHlwZSxcblx0XHRcdGNvbnRlbnQ6IHN0cmluZ2lmeShvLmNvbnRlbnQsIGxhbmd1YWdlKSxcblx0XHRcdHRhZzogJ3NwYW4nLFxuXHRcdFx0Y2xhc3NlczogWyd0b2tlbicsIG8udHlwZV0sXG5cdFx0XHRhdHRyaWJ1dGVzOiB7fSxcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHRcdH07XG5cblx0XHR2YXIgYWxpYXNlcyA9IG8uYWxpYXM7XG5cdFx0aWYgKGFsaWFzZXMpIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KGFsaWFzZXMpKSB7XG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVudi5jbGFzc2VzLCBhbGlhc2VzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudi5jbGFzc2VzLnB1c2goYWxpYXNlcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ3dyYXAnLCBlbnYpO1xuXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSAnJztcblx0XHRmb3IgKHZhciBuYW1lIGluIGVudi5hdHRyaWJ1dGVzKSB7XG5cdFx0XHRhdHRyaWJ1dGVzICs9ICcgJyArIG5hbWUgKyAnPVwiJyArIChlbnYuYXR0cmlidXRlc1tuYW1lXSB8fCAnJykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpICsgJ1wiJztcblx0XHR9XG5cblx0XHRyZXR1cm4gJzwnICsgZW52LnRhZyArICcgY2xhc3M9XCInICsgZW52LmNsYXNzZXMuam9pbignICcpICsgJ1wiJyArIGF0dHJpYnV0ZXMgKyAnPicgKyBlbnYuY29udGVudCArICc8LycgKyBlbnYudGFnICsgJz4nO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuXHQgKiBAcGFyYW0ge251bWJlcn0gcG9zXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9va2JlaGluZFxuXHQgKiBAcmV0dXJucyB7UmVnRXhwRXhlY0FycmF5IHwgbnVsbH1cblx0ICovXG5cdGZ1bmN0aW9uIG1hdGNoUGF0dGVybihwYXR0ZXJuLCBwb3MsIHRleHQsIGxvb2tiZWhpbmQpIHtcblx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IHBvcztcblx0XHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cdFx0aWYgKG1hdGNoICYmIGxvb2tiZWhpbmQgJiYgbWF0Y2hbMV0pIHtcblx0XHRcdC8vIGNoYW5nZSB0aGUgbWF0Y2ggdG8gcmVtb3ZlIHRoZSB0ZXh0IG1hdGNoZWQgYnkgdGhlIFByaXNtIGxvb2tiZWhpbmQgZ3JvdXBcblx0XHRcdHZhciBsb29rYmVoaW5kTGVuZ3RoID0gbWF0Y2hbMV0ubGVuZ3RoO1xuXHRcdFx0bWF0Y2guaW5kZXggKz0gbG9va2JlaGluZExlbmd0aDtcblx0XHRcdG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UobG9va2JlaGluZExlbmd0aCk7XG5cdFx0fVxuXHRcdHJldHVybiBtYXRjaDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8c3RyaW5nIHwgVG9rZW4+fSB0b2tlbkxpc3Rcblx0ICogQHBhcmFtIHthbnl9IGdyYW1tYXJcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxzdHJpbmcgfCBUb2tlbj59IHN0YXJ0Tm9kZVxuXHQgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRQb3Ncblx0ICogQHBhcmFtIHtSZW1hdGNoT3B0aW9uc30gW3JlbWF0Y2hdXG5cdCAqIEByZXR1cm5zIHt2b2lkfVxuXHQgKiBAcHJpdmF0ZVxuXHQgKlxuXHQgKiBAdHlwZWRlZiBSZW1hdGNoT3B0aW9uc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gY2F1c2Vcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IHJlYWNoXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCBzdGFydE5vZGUsIHN0YXJ0UG9zLCByZW1hdGNoKSB7XG5cdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0aWYgKCFncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSB8fCAhZ3JhbW1hclt0b2tlbl0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXR0ZXJucyA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0cGF0dGVybnMgPSBBcnJheS5pc0FycmF5KHBhdHRlcm5zKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRpZiAocmVtYXRjaCAmJiByZW1hdGNoLmNhdXNlID09IHRva2VuICsgJywnICsgaikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBwYXR0ZXJuT2JqID0gcGF0dGVybnNbal07XG5cdFx0XHRcdHZhciBpbnNpZGUgPSBwYXR0ZXJuT2JqLmluc2lkZTtcblx0XHRcdFx0dmFyIGxvb2tiZWhpbmQgPSAhIXBhdHRlcm5PYmoubG9va2JlaGluZDtcblx0XHRcdFx0dmFyIGdyZWVkeSA9ICEhcGF0dGVybk9iai5ncmVlZHk7XG5cdFx0XHRcdHZhciBhbGlhcyA9IHBhdHRlcm5PYmouYWxpYXM7XG5cblx0XHRcdFx0aWYgKGdyZWVkeSAmJiAhcGF0dGVybk9iai5wYXR0ZXJuLmdsb2JhbCkge1xuXHRcdFx0XHRcdC8vIFdpdGhvdXQgdGhlIGdsb2JhbCBmbGFnLCBsYXN0SW5kZXggd29uJ3Qgd29ya1xuXHRcdFx0XHRcdHZhciBmbGFncyA9IHBhdHRlcm5PYmoucGF0dGVybi50b1N0cmluZygpLm1hdGNoKC9baW1zdXldKiQvKVswXTtcblx0XHRcdFx0XHRwYXR0ZXJuT2JqLnBhdHRlcm4gPSBSZWdFeHAocGF0dGVybk9iai5wYXR0ZXJuLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyoqIEB0eXBlIHtSZWdFeHB9ICovXG5cdFx0XHRcdHZhciBwYXR0ZXJuID0gcGF0dGVybk9iai5wYXR0ZXJuIHx8IHBhdHRlcm5PYmo7XG5cblx0XHRcdFx0Zm9yICggLy8gaXRlcmF0ZSB0aGUgdG9rZW4gbGlzdCBhbmQga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCB0b2tlbi9zdHJpbmcgcG9zaXRpb25cblx0XHRcdFx0XHR2YXIgY3VycmVudE5vZGUgPSBzdGFydE5vZGUubmV4dCwgcG9zID0gc3RhcnRQb3M7XG5cdFx0XHRcdFx0Y3VycmVudE5vZGUgIT09IHRva2VuTGlzdC50YWlsO1xuXHRcdFx0XHRcdHBvcyArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGgsIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuXHRcdFx0XHQpIHtcblxuXHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIHBvcyA+PSByZW1hdGNoLnJlYWNoKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgc3RyID0gY3VycmVudE5vZGUudmFsdWU7XG5cblx0XHRcdFx0XHRpZiAodG9rZW5MaXN0Lmxlbmd0aCA+IHRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgQUJPUlQsIEFCT1JUIVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChzdHIgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHJlbW92ZUNvdW50ID0gMTsgLy8gdGhpcyBpcyB0aGUgdG8gcGFyYW1ldGVyIG9mIHJlbW92ZUJldHdlZW5cblx0XHRcdFx0XHR2YXIgbWF0Y2g7XG5cblx0XHRcdFx0XHRpZiAoZ3JlZWR5KSB7XG5cdFx0XHRcdFx0XHRtYXRjaCA9IG1hdGNoUGF0dGVybihwYXR0ZXJuLCBwb3MsIHRleHQsIGxvb2tiZWhpbmQpO1xuXHRcdFx0XHRcdFx0aWYgKCFtYXRjaCB8fCBtYXRjaC5pbmRleCA+PSB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIGZyb20gPSBtYXRjaC5pbmRleDtcblx0XHRcdFx0XHRcdHZhciB0byA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dmFyIHAgPSBwb3M7XG5cblx0XHRcdFx0XHRcdC8vIGZpbmQgdGhlIG5vZGUgdGhhdCBjb250YWlucyB0aGUgbWF0Y2hcblx0XHRcdFx0XHRcdHAgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKGZyb20gPj0gcCkge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG5cdFx0XHRcdFx0XHRcdHAgKz0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gYWRqdXN0IHBvcyAoYW5kIHApXG5cdFx0XHRcdFx0XHRwIC09IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHBvcyA9IHA7XG5cblx0XHRcdFx0XHRcdC8vIHRoZSBjdXJyZW50IG5vZGUgaXMgYSBUb2tlbiwgdGhlbiB0aGUgbWF0Y2ggc3RhcnRzIGluc2lkZSBhbm90aGVyIFRva2VuLCB3aGljaCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudE5vZGUudmFsdWUgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gZmluZCB0aGUgbGFzdCBub2RlIHdoaWNoIGlzIGFmZmVjdGVkIGJ5IHRoaXMgbWF0Y2hcblx0XHRcdFx0XHRcdGZvciAoXG5cdFx0XHRcdFx0XHRcdHZhciBrID0gY3VycmVudE5vZGU7XG5cdFx0XHRcdFx0XHRcdGsgIT09IHRva2VuTGlzdC50YWlsICYmIChwIDwgdG8gfHwgdHlwZW9mIGsudmFsdWUgPT09ICdzdHJpbmcnKTtcblx0XHRcdFx0XHRcdFx0ayA9IGsubmV4dFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHJlbW92ZUNvdW50Kys7XG5cdFx0XHRcdFx0XHRcdHAgKz0gay52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZW1vdmVDb3VudC0tO1xuXG5cdFx0XHRcdFx0XHQvLyByZXBsYWNlIHdpdGggdGhlIG5ldyBtYXRjaFxuXHRcdFx0XHRcdFx0c3RyID0gdGV4dC5zbGljZShwb3MsIHApO1xuXHRcdFx0XHRcdFx0bWF0Y2guaW5kZXggLT0gcG9zO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtYXRjaCA9IG1hdGNoUGF0dGVybihwYXR0ZXJuLCAwLCBzdHIsIGxvb2tiZWhpbmQpO1xuXHRcdFx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cdFx0XHRcdFx0dmFyIGZyb20gPSBtYXRjaC5pbmRleDtcblx0XHRcdFx0XHR2YXIgbWF0Y2hTdHIgPSBtYXRjaFswXTtcblx0XHRcdFx0XHR2YXIgYmVmb3JlID0gc3RyLnNsaWNlKDAsIGZyb20pO1xuXHRcdFx0XHRcdHZhciBhZnRlciA9IHN0ci5zbGljZShmcm9tICsgbWF0Y2hTdHIubGVuZ3RoKTtcblxuXHRcdFx0XHRcdHZhciByZWFjaCA9IHBvcyArIHN0ci5sZW5ndGg7XG5cdFx0XHRcdFx0aWYgKHJlbWF0Y2ggJiYgcmVhY2ggPiByZW1hdGNoLnJlYWNoKSB7XG5cdFx0XHRcdFx0XHRyZW1hdGNoLnJlYWNoID0gcmVhY2g7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHJlbW92ZUZyb20gPSBjdXJyZW50Tm9kZS5wcmV2O1xuXG5cdFx0XHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRcdFx0cmVtb3ZlRnJvbSA9IGFkZEFmdGVyKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgYmVmb3JlKTtcblx0XHRcdFx0XHRcdHBvcyArPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJlbW92ZVJhbmdlKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgcmVtb3ZlQ291bnQpO1xuXG5cdFx0XHRcdFx0dmFyIHdyYXBwZWQgPSBuZXcgVG9rZW4odG9rZW4sIGluc2lkZSA/IF8udG9rZW5pemUobWF0Y2hTdHIsIGluc2lkZSkgOiBtYXRjaFN0ciwgYWxpYXMsIG1hdGNoU3RyKTtcblx0XHRcdFx0XHRjdXJyZW50Tm9kZSA9IGFkZEFmdGVyKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgd3JhcHBlZCk7XG5cblx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdGFkZEFmdGVyKHRva2VuTGlzdCwgY3VycmVudE5vZGUsIGFmdGVyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVtb3ZlQ291bnQgPiAxKSB7XG5cdFx0XHRcdFx0XHQvLyBhdCBsZWFzdCBvbmUgVG9rZW4gb2JqZWN0IHdhcyByZW1vdmVkLCBzbyB3ZSBoYXZlIHRvIGRvIHNvbWUgcmVtYXRjaGluZ1xuXHRcdFx0XHRcdFx0Ly8gdGhpcyBjYW4gb25seSBoYXBwZW4gaWYgdGhlIGN1cnJlbnQgcGF0dGVybiBpcyBncmVlZHlcblxuXHRcdFx0XHRcdFx0LyoqIEB0eXBlIHtSZW1hdGNoT3B0aW9uc30gKi9cblx0XHRcdFx0XHRcdHZhciBuZXN0ZWRSZW1hdGNoID0ge1xuXHRcdFx0XHRcdFx0XHRjYXVzZTogdG9rZW4gKyAnLCcgKyBqLFxuXHRcdFx0XHRcdFx0XHRyZWFjaDogcmVhY2hcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCBjdXJyZW50Tm9kZS5wcmV2LCBwb3MsIG5lc3RlZFJlbWF0Y2gpO1xuXG5cdFx0XHRcdFx0XHQvLyB0aGUgcmVhY2ggbWlnaHQgaGF2ZSBiZWVuIGV4dGVuZGVkIGJlY2F1c2Ugb2YgdGhlIHJlbWF0Y2hpbmdcblx0XHRcdFx0XHRcdGlmIChyZW1hdGNoICYmIG5lc3RlZFJlbWF0Y2gucmVhY2ggPiByZW1hdGNoLnJlYWNoKSB7XG5cdFx0XHRcdFx0XHRcdHJlbWF0Y2gucmVhY2ggPSBuZXN0ZWRSZW1hdGNoLnJlYWNoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZWRlZiBMaW5rZWRMaXN0Tm9kZVxuXHQgKiBAcHJvcGVydHkge1R9IHZhbHVlXG5cdCAqIEBwcm9wZXJ0eSB7TGlua2VkTGlzdE5vZGU8VD4gfCBudWxsfSBwcmV2IFRoZSBwcmV2aW91cyBub2RlLlxuXHQgKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gbmV4dCBUaGUgbmV4dCBub2RlLlxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblxuXHQvKipcblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR2YXIgaGVhZCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IG51bGwsIG5leHQ6IG51bGwgfTtcblx0XHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHRcdHZhciB0YWlsID0geyB2YWx1ZTogbnVsbCwgcHJldjogaGVhZCwgbmV4dDogbnVsbCB9O1xuXHRcdGhlYWQubmV4dCA9IHRhaWw7XG5cblx0XHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHRcdHRoaXMuaGVhZCA9IGhlYWQ7XG5cdFx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0XHR0aGlzLnRhaWwgPSB0YWlsO1xuXHRcdHRoaXMubGVuZ3RoID0gMDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBZGRzIGEgbmV3IG5vZGUgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIGxpc3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG5cdCAqIEBwYXJhbSB7VH0gdmFsdWVcblx0ICogQHJldHVybnMge0xpbmtlZExpc3ROb2RlPFQ+fSBUaGUgYWRkZWQgbm9kZS5cblx0ICogQHRlbXBsYXRlIFRcblx0ICovXG5cdGZ1bmN0aW9uIGFkZEFmdGVyKGxpc3QsIG5vZGUsIHZhbHVlKSB7XG5cdFx0Ly8gYXNzdW1lcyB0aGF0IG5vZGUgIT0gbGlzdC50YWlsICYmIHZhbHVlcy5sZW5ndGggPj0gMFxuXHRcdHZhciBuZXh0ID0gbm9kZS5uZXh0O1xuXG5cdFx0dmFyIG5ld05vZGUgPSB7IHZhbHVlOiB2YWx1ZSwgcHJldjogbm9kZSwgbmV4dDogbmV4dCB9O1xuXHRcdG5vZGUubmV4dCA9IG5ld05vZGU7XG5cdFx0bmV4dC5wcmV2ID0gbmV3Tm9kZTtcblx0XHRsaXN0Lmxlbmd0aCsrO1xuXG5cdFx0cmV0dXJuIG5ld05vZGU7XG5cdH1cblx0LyoqXG5cdCAqIFJlbW92ZXMgYGNvdW50YCBub2RlcyBhZnRlciB0aGUgZ2l2ZW4gbm9kZS4gVGhlIGdpdmVuIG5vZGUgd2lsbCBub3QgYmUgcmVtb3ZlZC5cblx0ICpcblx0ICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG5cdCAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8VD59IG5vZGVcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqL1xuXHRmdW5jdGlvbiByZW1vdmVSYW5nZShsaXN0LCBub2RlLCBjb3VudCkge1xuXHRcdHZhciBuZXh0ID0gbm9kZS5uZXh0O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQgJiYgbmV4dCAhPT0gbGlzdC50YWlsOyBpKyspIHtcblx0XHRcdG5leHQgPSBuZXh0Lm5leHQ7XG5cdFx0fVxuXHRcdG5vZGUubmV4dCA9IG5leHQ7XG5cdFx0bmV4dC5wcmV2ID0gbm9kZTtcblx0XHRsaXN0Lmxlbmd0aCAtPSBpO1xuXHR9XG5cdC8qKlxuXHQgKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3Rcblx0ICogQHJldHVybnMge1RbXX1cblx0ICogQHRlbXBsYXRlIFRcblx0ICovXG5cdGZ1bmN0aW9uIHRvQXJyYXkobGlzdCkge1xuXHRcdHZhciBhcnJheSA9IFtdO1xuXHRcdHZhciBub2RlID0gbGlzdC5oZWFkLm5leHQ7XG5cdFx0d2hpbGUgKG5vZGUgIT09IGxpc3QudGFpbCkge1xuXHRcdFx0YXJyYXkucHVzaChub2RlLnZhbHVlKTtcblx0XHRcdG5vZGUgPSBub2RlLm5leHQ7XG5cdFx0fVxuXHRcdHJldHVybiBhcnJheTtcblx0fVxuXG5cblx0aWYgKCFfc2VsZi5kb2N1bWVudCkge1xuXHRcdGlmICghX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0Ly8gaW4gTm9kZS5qc1xuXHRcdFx0cmV0dXJuIF87XG5cdFx0fVxuXG5cdFx0aWYgKCFfLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcikge1xuXHRcdFx0Ly8gSW4gd29ya2VyXG5cdFx0XHRfc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0XHR2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xuXHRcdFx0XHR2YXIgbGFuZyA9IG1lc3NhZ2UubGFuZ3VhZ2U7XG5cdFx0XHRcdHZhciBjb2RlID0gbWVzc2FnZS5jb2RlO1xuXHRcdFx0XHR2YXIgaW1tZWRpYXRlQ2xvc2UgPSBtZXNzYWdlLmltbWVkaWF0ZUNsb3NlO1xuXG5cdFx0XHRcdF9zZWxmLnBvc3RNZXNzYWdlKF8uaGlnaGxpZ2h0KGNvZGUsIF8ubGFuZ3VhZ2VzW2xhbmddLCBsYW5nKSk7XG5cdFx0XHRcdGlmIChpbW1lZGlhdGVDbG9zZSkge1xuXHRcdFx0XHRcdF9zZWxmLmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIGZhbHNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdC8vIEdldCBjdXJyZW50IHNjcmlwdCBhbmQgaGlnaGxpZ2h0XG5cdHZhciBzY3JpcHQgPSBfLnV0aWwuY3VycmVudFNjcmlwdCgpO1xuXG5cdGlmIChzY3JpcHQpIHtcblx0XHRfLmZpbGVuYW1lID0gc2NyaXB0LnNyYztcblxuXHRcdGlmIChzY3JpcHQuaGFzQXR0cmlidXRlKCdkYXRhLW1hbnVhbCcpKSB7XG5cdFx0XHRfLm1hbnVhbCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKCkge1xuXHRcdGlmICghXy5tYW51YWwpIHtcblx0XHRcdF8uaGlnaGxpZ2h0QWxsKCk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCFfLm1hbnVhbCkge1xuXHRcdC8vIElmIHRoZSBkb2N1bWVudCBzdGF0ZSBpcyBcImxvYWRpbmdcIiwgdGhlbiB3ZSdsbCB1c2UgRE9NQ29udGVudExvYWRlZC5cblx0XHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJpbnRlcmFjdGl2ZVwiIGFuZCB0aGUgcHJpc20uanMgc2NyaXB0IGlzIGRlZmVycmVkLCB0aGVuIHdlJ2xsIGFsc28gdXNlIHRoZVxuXHRcdC8vIERPTUNvbnRlbnRMb2FkZWQgZXZlbnQgYmVjYXVzZSB0aGVyZSBtaWdodCBiZSBzb21lIHBsdWdpbnMgb3IgbGFuZ3VhZ2VzIHdoaWNoIGhhdmUgYWxzbyBiZWVuIGRlZmVycmVkIGFuZCB0aGV5XG5cdFx0Ly8gbWlnaHQgdGFrZSBsb25nZXIgb25lIGFuaW1hdGlvbiBmcmFtZSB0byBleGVjdXRlIHdoaWNoIGNhbiBjcmVhdGUgYSByYWNlIGNvbmRpdGlvbiB3aGVyZSBvbmx5IHNvbWUgcGx1Z2lucyBoYXZlXG5cdFx0Ly8gYmVlbiBsb2FkZWQgd2hlbiBQcmlzbS5oaWdobGlnaHRBbGwoKSBpcyBleGVjdXRlZCwgZGVwZW5kaW5nIG9uIGhvdyBmYXN0IHJlc291cmNlcyBhcmUgbG9hZGVkLlxuXHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUHJpc21KUy9wcmlzbS9pc3N1ZXMvMjEwMlxuXHRcdHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcblx0XHRpZiAocmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnIHx8IHJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgJiYgc2NyaXB0ICYmIHNjcmlwdC5kZWZlcikge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaywgMTYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBfO1xuXG59KF9zZWxmKSk7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IFByaXNtO1xufVxuXG4vLyBoYWNrIGZvciBjb21wb25lbnRzIHRvIHdvcmsgY29ycmVjdGx5IGluIG5vZGUuanNcbmlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuXHRnbG9iYWwuUHJpc20gPSBQcmlzbTtcbn1cblxuLy8gc29tZSBhZGRpdGlvbmFsIGRvY3VtZW50YXRpb24vdHlwZXNcblxuLyoqXG4gKiBUaGUgZXhwYW5zaW9uIG9mIGEgc2ltcGxlIGBSZWdFeHBgIGxpdGVyYWwgdG8gc3VwcG9ydCBhZGRpdGlvbmFsIHByb3BlcnRpZXMuXG4gKlxuICogQHR5cGVkZWYgR3JhbW1hclRva2VuXG4gKiBAcHJvcGVydHkge1JlZ0V4cH0gcGF0dGVybiBUaGUgcmVndWxhciBleHByZXNzaW9uIG9mIHRoZSB0b2tlbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2xvb2tiZWhpbmQ9ZmFsc2VdIElmIGB0cnVlYCwgdGhlbiB0aGUgZmlyc3QgY2FwdHVyaW5nIGdyb3VwIG9mIGBwYXR0ZXJuYCB3aWxsIChlZmZlY3RpdmVseSlcbiAqIGJlaGF2ZSBhcyBhIGxvb2tiZWhpbmQgZ3JvdXAgbWVhbmluZyB0aGF0IHRoZSBjYXB0dXJlZCB0ZXh0IHdpbGwgbm90IGJlIHBhcnQgb2YgdGhlIG1hdGNoZWQgdGV4dCBvZiB0aGUgbmV3IHRva2VuLlxuICogQHByb3BlcnR5IHtib29sZWFufSBbZ3JlZWR5PWZhbHNlXSBXaGV0aGVyIHRoZSB0b2tlbiBpcyBncmVlZHkuXG4gKiBAcHJvcGVydHkge3N0cmluZ3xzdHJpbmdbXX0gW2FsaWFzXSBBbiBvcHRpb25hbCBhbGlhcyBvciBsaXN0IG9mIGFsaWFzZXMuXG4gKiBAcHJvcGVydHkge0dyYW1tYXJ9IFtpbnNpZGVdIFRoZSBuZXN0ZWQgZ3JhbW1hciBvZiB0aGlzIHRva2VuLlxuICpcbiAqIFRoZSBgaW5zaWRlYCBncmFtbWFyIHdpbGwgYmUgdXNlZCB0byB0b2tlbml6ZSB0aGUgdGV4dCB2YWx1ZSBvZiBlYWNoIHRva2VuIG9mIHRoaXMga2luZC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIG1ha2UgbmVzdGVkIGFuZCBldmVuIHJlY3Vyc2l2ZSBsYW5ndWFnZSBkZWZpbml0aW9ucy5cbiAqXG4gKiBOb3RlOiBUaGlzIGNhbiBjYXVzZSBpbmZpbml0ZSByZWN1cnNpb24uIEJlIGNhcmVmdWwgd2hlbiB5b3UgZW1iZWQgZGlmZmVyZW50IGxhbmd1YWdlcyBvciBldmVuIHRoZSBzYW1lIGxhbmd1YWdlIGludG9cbiAqIGVhY2ggYW5vdGhlci5cbiAqIEBnbG9iYWxcbiAqIEBwdWJsaWNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIEdyYW1tYXJcbiAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBSZWdFeHAgfCBHcmFtbWFyVG9rZW4gfCBBcnJheTxSZWdFeHAgfCBHcmFtbWFyVG9rZW4+Pn1cbiAqIEBwcm9wZXJ0eSB7R3JhbW1hcn0gW3Jlc3RdIEFuIG9wdGlvbmFsIGdyYW1tYXIgb2JqZWN0IHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGlzIGdyYW1tYXIuXG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgaW52b2tlZCBhZnRlciBhbiBlbGVtZW50IHdhcyBzdWNjZXNzZnVsbHkgaGlnaGxpZ2h0ZWQuXG4gKlxuICogQGNhbGxiYWNrIEhpZ2hsaWdodENhbGxiYWNrXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgc3VjY2Vzc2Z1bGx5IGhpZ2hsaWdodGVkLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgSG9va0NhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IGVudiBUaGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIG9mIHRoZSBob29rLlxuICogQHJldHVybnMge3ZvaWR9XG4gKiBAZ2xvYmFsXG4gKiBAcHVibGljXG4gKi9cblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLW1hcmt1cC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwID0ge1xuXHQnY29tbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvPCEtLSg/Oig/ITwhLS0pW1xcc1xcU10pKj8tLT4vLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQncHJvbG9nJzoge1xuXHRcdHBhdHRlcm46IC88XFw/W1xcc1xcU10rP1xcPz4vLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnZG9jdHlwZSc6IHtcblx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIveG1sLyNOVC1kb2N0eXBlZGVjbFxuXHRcdHBhdHRlcm46IC88IURPQ1RZUEUoPzpbXj5cIidbXFxdXXxcIlteXCJdKlwifCdbXiddKicpKyg/OlxcWyg/OltePFwiJ1xcXV18XCJbXlwiXSpcInwnW14nXSonfDwoPyEhLS0pfDwhLS0oPzpbXi1dfC0oPyEtPikpKi0tPikqXFxdXFxzKik/Pi9pLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdpbnRlcm5hbC1zdWJzZXQnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oXlteXFxbXSpcXFspW1xcc1xcU10rKD89XFxdPiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IG51bGwgLy8gc2VlIGJlbG93XG5cdFx0XHR9LFxuXHRcdFx0J3N0cmluZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL1wiW15cIl0qXCJ8J1teJ10qJy8sXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePCF8PiR8W1tcXF1dLyxcblx0XHRcdCdkb2N0eXBlLXRhZyc6IC9eRE9DVFlQRS9pLFxuXHRcdFx0J25hbWUnOiAvW15cXHM8PidcIl0rL1xuXHRcdH1cblx0fSxcblx0J2NkYXRhJzoge1xuXHRcdHBhdHRlcm46IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT4vaSxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+Lyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGFnJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXjxcXC8/W15cXHM+XFwvXSsvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjxcXC8/Lyxcblx0XHRcdFx0XHQnbmFtZXNwYWNlJzogL15bXlxccz5cXC86XSs6L1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3NwZWNpYWwtYXR0cic6IFtdLFxuXHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC89XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSspLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXj0vLFxuXHRcdFx0XHRcdFx0XHRhbGlhczogJ2F0dHItZXF1YWxzJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLz8+Lyxcblx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fSxcblx0J2VudGl0eSc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvJltcXGRhLXpdezEsOH07L2ksXG5cdFx0XHRhbGlhczogJ25hbWVkLWVudGl0eSdcblx0XHR9LFxuXHRcdC8mI3g/W1xcZGEtZl17MSw4fTsvaVxuXHRdXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2VudGl0eSddID1cblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J107XG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWydkb2N0eXBlJ10uaW5zaWRlWydpbnRlcm5hbC1zdWJzZXQnXS5pbnNpZGUgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXG4vLyBQbHVnaW4gdG8gbWFrZSBlbnRpdHkgdGl0bGUgc2hvdyB0aGUgcmVhbCBlbnRpdHksIGlkZWEgYnkgUm9tYW4gS29tYXJvdlxuUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24gKGVudikge1xuXG5cdGlmIChlbnYudHlwZSA9PT0gJ2VudGl0eScpIHtcblx0XHRlbnYuYXR0cmlidXRlc1sndGl0bGUnXSA9IGVudi5jb250ZW50LnJlcGxhY2UoLyZhbXA7LywgJyYnKTtcblx0fVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG5cdC8qKlxuXHQgKiBBZGRzIGFuIGlubGluZWQgbGFuZ3VhZ2UgdG8gbWFya3VwLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYDxzdHlsZT5gIHRhZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0ICovXG5cdHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcblx0XHR2YXIgaW5jbHVkZWRDZGF0YUluc2lkZSA9IHt9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC8oXjwhXFxbQ0RBVEFcXFspW1xcc1xcU10rPyg/PVxcXVxcXT4kKS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7XG5cblx0XHR2YXIgaW5zaWRlID0ge1xuXHRcdFx0J2luY2x1ZGVkLWNkYXRhJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0XHRcdGluc2lkZTogaW5jbHVkZWRDZGF0YUluc2lkZVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0aW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblxuXHRcdHZhciBkZWYgPSB7fTtcblx0XHRkZWZbdGFnTmFtZV0gPSB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyg8X19bXj5dKj4pKD86PCFcXFtDREFUQVxcWyg/OlteXFxdXXxcXF0oPyFcXF0+KSkqXFxdXFxdPnwoPyE8IVxcW0NEQVRBXFxbKVtcXHNcXFNdKSo/KD89PFxcL19fPikvLnNvdXJjZS5yZXBsYWNlKC9fXy9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0YWdOYW1lOyB9KSwgJ2knKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IGluc2lkZVxuXHRcdH07XG5cblx0XHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCBkZWYpO1xuXHR9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZEF0dHJpYnV0ZScsIHtcblx0LyoqXG5cdCAqIEFkZHMgYW4gcGF0dGVybiB0byBoaWdobGlnaHQgbGFuZ3VhZ2VzIGVtYmVkZGVkIGluIEhUTUwgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQW4gZXhhbXBsZSBvZiBhbiBpbmxpbmVkIGxhbmd1YWdlIGlzIENTUyB3aXRoIGBzdHlsZWAgYXR0cmlidXRlcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGF0dHJOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2NzcycpO1xuXHQgKi9cblx0dmFsdWU6IGZ1bmN0aW9uIChhdHRyTmFtZSwgbGFuZykge1xuXHRcdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmluc2lkZVsnc3BlY2lhbC1hdHRyJ10ucHVzaCh7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoXG5cdFx0XHRcdC8oXnxbXCInXFxzXSkvLnNvdXJjZSArICcoPzonICsgYXR0ck5hbWUgKyAnKScgKyAvXFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpLy5zb3VyY2UsXG5cdFx0XHRcdCdpJ1xuXHRcdFx0KSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2F0dHItbmFtZSc6IC9eW15cXHM9XSsvLFxuXHRcdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvPVtcXHNcXFNdKy8sXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQndmFsdWUnOiB7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC8oXj1cXHMqKFtcIiddfCg/IVtcIiddKSkpXFxTW1xcc1xcU10qKD89XFwyJCkvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRhbGlhczogW2xhbmcsICdsYW5ndWFnZS0nICsgbGFuZ10sXG5cdFx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0cGF0dGVybjogL149Lyxcblx0XHRcdFx0XHRcdFx0XHRhbGlhczogJ2F0dHItZXF1YWxzJ1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQvXCJ8Jy9cblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5odG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cblByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5QcmlzbS5sYW5ndWFnZXMuc3NtbCA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG5QcmlzbS5sYW5ndWFnZXMuYXRvbSA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG5QcmlzbS5sYW5ndWFnZXMucnNzID0gUHJpc20ubGFuZ3VhZ2VzLnhtbDtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNzcy5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHN0cmluZyA9IC8oPzpcIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXCJcXFxcXFxyXFxuXSkqXCJ8Jyg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteJ1xcXFxcXHJcXG5dKSonKS87XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzcyA9IHtcblx0XHQnY29tbWVudCc6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0XHQnYXRydWxlJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCdAW1xcXFx3LV0oPzonICsgL1teO3tcXHNcIiddfFxccysoPyFcXHMpLy5zb3VyY2UgKyAnfCcgKyBzdHJpbmcuc291cmNlICsgJykqPycgKyAvKD86O3woPz1cXHMqXFx7KSkvLnNvdXJjZSksXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3J1bGUnOiAvXkBbXFx3LV0rLyxcblx0XHRcdFx0J3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFxic2VsZWN0b3JcXHMqXFwoXFxzKig/IVtcXHMpXSkpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpKyg/PVxccypcXCkpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAnc2VsZWN0b3InXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdrZXl3b3JkJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXnxbXlxcdy1dKSg/OmFuZHxub3R8b25seXxvcikoPyFbXFx3LV0pLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU2VlIHJlc3QgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd1cmwnOiB7XG5cdFx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ1xcXFxidXJsXFxcXCgoPzonICsgc3RyaW5nLnNvdXJjZSArICd8JyArIC8oPzpbXlxcXFxcXHJcXG4oKVwiJ118XFxcXFtcXHNcXFNdKSovLnNvdXJjZSArICcpXFxcXCknLCAnaScpLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmdW5jdGlvbic6IC9edXJsL2ksXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFwofFxcKSQvLFxuXHRcdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnXicgKyBzdHJpbmcuc291cmNlICsgJyQnKSxcblx0XHRcdFx0XHRhbGlhczogJ3VybCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NlbGVjdG9yJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCcoXnxbe31cXFxcc10pW157fVxcXFxzXSg/Oltee307XCJcXCdcXFxcc118XFxcXHMrKD8hW1xcXFxze10pfCcgKyBzdHJpbmcuc291cmNlICsgJykqKD89XFxcXHMqXFxcXHspJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogc3RyaW5nLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQncHJvcGVydHknOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14tXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVstX2EtelxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVstXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccyo6KS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteLWEtejAtOV0pWy1hLXowLTldKyg/PVxcKCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bKCl7fTs6LF0vXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzO1xuXG5cdHZhciBtYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRpZiAobWFya3VwKSB7XG5cdFx0bWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0XHRtYXJrdXAudGFnLmFkZEF0dHJpYnV0ZSgnc3R5bGUnLCAnY3NzJyk7XG5cdH1cblxufShQcmlzbSkpO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY2xpa2UuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8aW50ZXJmYWNlfG5ld3x0cmFpdClcXHMrfFxcYmNhdGNoXFxzK1xcKClbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWy5cXFxcXS9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmJyZWFrfGNhdGNofGNvbnRpbnVlfGRvfGVsc2V8ZmluYWxseXxmb3J8ZnVuY3Rpb258aWZ8aW58aW5zdGFuY2VvZnxuZXd8bnVsbHxyZXR1cm58dGhyb3d8dHJ5fHdoaWxlKVxcYi8sXG5cdCdib29sZWFuJzogL1xcYig/OmZhbHNlfHRydWUpXFxiLyxcblx0J2Z1bmN0aW9uJzogL1xcYlxcdysoPz1cXCgpLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG5cdCdvcGVyYXRvcic6IC9bPD5dPT98WyE9XT0/PT98LS0/fFxcK1xcKz98JiY/fFxcfFxcfD98Wz8qL35eJV0vLFxuXHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuOl0vXG59O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tamF2YXNjcmlwdC5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHQnY2xhc3MtbmFtZSc6IFtcblx0XHRQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14kXFx3XFx4QTAtXFx1RkZGRl0pKD8hXFxzKVtfJEEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxcLig/OmNvbnN0cnVjdG9yfHByb3RvdHlwZSkpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XnxcXH0pXFxzKiljYXRjaFxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzc2VydCg/PVxccypcXHspfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5KD89XFxzKig/Olxce3wkKSl8Zm9yfGZyb20oPz1cXHMqKD86WydcIl18JCkpfGZ1bmN0aW9ufCg/OmdldHxzZXQpKD89XFxzKig/OlsjXFxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XSxcblx0Ly8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG5cdCdmdW5jdGlvbic6IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcblx0J251bWJlcic6IHtcblx0XHRwYXR0ZXJuOiBSZWdFeHAoXG5cdFx0XHQvKF58W15cXHckXSkvLnNvdXJjZSArXG5cdFx0XHQnKD86JyArXG5cdFx0XHQoXG5cdFx0XHRcdC8vIGNvbnN0YW50XG5cdFx0XHRcdC9OYU58SW5maW5pdHkvLnNvdXJjZSArXG5cdFx0XHRcdCd8JyArXG5cdFx0XHRcdC8vIGJpbmFyeSBpbnRlZ2VyXG5cdFx0XHRcdC8wW2JCXVswMV0rKD86X1swMV0rKSpuPy8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gb2N0YWwgaW50ZWdlclxuXHRcdFx0XHQvMFtvT11bMC03XSsoPzpfWzAtN10rKSpuPy8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gaGV4YWRlY2ltYWwgaW50ZWdlclxuXHRcdFx0XHQvMFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuPy8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gZGVjaW1hbCBiaWdpbnRcblx0XHRcdFx0L1xcZCsoPzpfXFxkKykqbi8uc291cmNlICtcblx0XHRcdFx0J3wnICtcblx0XHRcdFx0Ly8gZGVjaW1hbCBudW1iZXIgKGludGVnZXIgb3IgZmxvYXQpIGJ1dCBubyBiaWdpbnRcblx0XHRcdFx0Lyg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8vLnNvdXJjZVxuXHRcdFx0KSArXG5cdFx0XHQnKScgK1xuXHRcdFx0Lyg/IVtcXHckXSkvLnNvdXJjZVxuXHRcdCksXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQnb3BlcmF0b3InOiAvLS18XFwrXFwrfFxcKlxcKj0/fD0+fCYmPT98XFx8XFx8PT98WyE9XT09fDw8PT98Pj4+Pz0/fFstKyovJSZ8XiE9PD5dPT98XFwuezN9fFxcP1xcPz0/fFxcP1xcLj98W346XS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnY2xhc3MtbmFtZSddWzBdLnBhdHRlcm4gPSAvKFxcYig/OmNsYXNzfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfGludGVyZmFjZXxuZXcpXFxzKylbXFx3LlxcXFxdKy87XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAna2V5d29yZCcsIHtcblx0J3JlZ2V4Jzoge1xuXHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdC8vIGxvb2tiZWhpbmRcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZHVwZS1jaGFyYWN0ZXJzLWNoYXJhY3Rlci1jbGFzc1xuXHRcdFx0LygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc118XFxiKD86cmV0dXJufHlpZWxkKSlcXHMqKS8uc291cmNlICtcblx0XHRcdC8vIFJlZ2V4IHBhdHRlcm46XG5cdFx0XHQvLyBUaGVyZSBhcmUgMiByZWdleCBwYXR0ZXJucyBoZXJlLiBUaGUgUmVnRXhwIHNldCBub3RhdGlvbiBwcm9wb3NhbCBhZGRlZCBzdXBwb3J0IGZvciBuZXN0ZWQgY2hhcmFjdGVyXG5cdFx0XHQvLyBjbGFzc2VzIGlmIHRoZSBgdmAgZmxhZyBpcyBwcmVzZW50LiBVbmZvcnR1bmF0ZWx5LCBuZXN0ZWQgQ0NzIGFyZSBib3RoIGNvbnRleHQtZnJlZSBhbmQgaW5jb21wYXRpYmxlXG5cdFx0XHQvLyB3aXRoIHRoZSBvbmx5IHN5bnRheCwgc28gd2UgaGF2ZSB0byBkZWZpbmUgMiBkaWZmZXJlbnQgcmVnZXggcGF0dGVybnMuXG5cdFx0XHQvXFwvLy5zb3VyY2UgK1xuXHRcdFx0Jyg/OicgK1xuXHRcdFx0Lyg/OlxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKlxcXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2RnaW15dXNdezAsN30vLnNvdXJjZSArXG5cdFx0XHQnfCcgK1xuXHRcdFx0Ly8gYHZgIGZsYWcgc3ludGF4LiBUaGlzIHN1cHBvcnRzIDMgbGV2ZWxzIG9mIG5lc3RlZCBjaGFyYWN0ZXIgY2xhc3Nlcy5cblx0XHRcdC8oPzpcXFsoPzpbXltcXF1cXFxcXFxyXFxuXXxcXFxcLnxcXFsoPzpbXltcXF1cXFxcXFxyXFxuXXxcXFxcLnxcXFsoPzpbXltcXF1cXFxcXFxyXFxuXXxcXFxcLikqXFxdKSpcXF0pKlxcXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2RnaW15dXNdezAsN312W2RnaW15dXNdezAsN30vLnNvdXJjZSArXG5cdFx0XHQnKScgK1xuXHRcdFx0Ly8gbG9va2FoZWFkXG5cdFx0XHQvKD89KD86XFxzfFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSkqXFwqXFwvKSooPzokfFtcXHJcXG4sLjs6fSlcXF1dfFxcL1xcLykpLy5zb3VyY2Vcblx0XHQpLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3JlZ2V4LXNvdXJjZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL14oXFwvKVtcXHNcXFNdKyg/PVxcL1thLXpdKiQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1yZWdleCcsXG5cdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnJlZ2V4XG5cdFx0XHR9LFxuXHRcdFx0J3JlZ2V4LWRlbGltaXRlcic6IC9eXFwvfFxcLyQvLFxuXHRcdFx0J3JlZ2V4LWZsYWdzJzogL15bYS16XSskLyxcblx0XHR9XG5cdH0sXG5cdC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcblx0J2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfCg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopXFxzKj0+KSkvLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdwYXJhbWV0ZXInOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhmdW5jdGlvbig/OlxccysoPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKT9cXHMqXFwoXFxzKikoPyFcXHMpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoW14oKV0qXFwpKSsoPz1cXHMqXFwpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKSg/IVxccylbXyRhLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqPT4pL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqPT4pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzooPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqXFxzKilcXChcXHMqfFxcXVxccypcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCdoYXNoYmFuZyc6IHtcblx0XHRwYXR0ZXJuOiAvXiMhLiovLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRhbGlhczogJ2NvbW1lbnQnXG5cdH0sXG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkXFx7KD86W157fV18XFx7KD86W157fV18XFx7W159XSpcXH0pKlxcfSkrXFx9fCg/IVxcJFxceylbXlxcXFxgXSkqYC8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXmB8YCQvLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJFxceyg/Oltee31dfFxceyg/Oltee31dfFxce1tefV0qXFx9KSpcXH0pK1xcfS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXCRcXHt8XFx9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fSxcblx0J3N0cmluZy1wcm9wZXJ0eSc6IHtcblx0XHRwYXR0ZXJuOiAvKCg/Ol58Wyx7XSlbIFxcdF0qKShbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDIpW15cXFxcXFxyXFxuXSkqXFwyKD89XFxzKjopL20sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnb3BlcmF0b3InLCB7XG5cdCdsaXRlcmFsLXByb3BlcnR5Jzoge1xuXHRcdHBhdHRlcm46IC8oKD86XnxbLHtdKVsgXFx0XSopKD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKig/PVxccyo6KS9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0fSxcbn0pO1xuXG5pZiAoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCkge1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzY3JpcHQnLCAnamF2YXNjcmlwdCcpO1xuXG5cdC8vIGFkZCBhdHRyaWJ1dGUgc3VwcG9ydCBmb3IgYWxsIERPTSBldmVudHMuXG5cdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cyNTdGFuZGFyZF9ldmVudHNcblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkQXR0cmlidXRlKFxuXHRcdC9vbig/OmFib3J0fGJsdXJ8Y2hhbmdlfGNsaWNrfGNvbXBvc2l0aW9uKD86ZW5kfHN0YXJ0fHVwZGF0ZSl8ZGJsY2xpY2t8ZXJyb3J8Zm9jdXMoPzppbnxvdXQpP3xrZXkoPzpkb3dufHVwKXxsb2FkfG1vdXNlKD86ZG93bnxlbnRlcnxsZWF2ZXxtb3ZlfG91dHxvdmVyfHVwKXxyZXNldHxyZXNpemV8c2Nyb2xsfHNlbGVjdHxzbG90Y2hhbmdlfHN1Ym1pdHx1bmxvYWR8d2hlZWwpLy5zb3VyY2UsXG5cdFx0J2phdmFzY3JpcHQnXG5cdCk7XG59XG5cblByaXNtLmxhbmd1YWdlcy5qcyA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tZmlsZS1oaWdobGlnaHQuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuKGZ1bmN0aW9uICgpIHtcblxuXHRpZiAodHlwZW9mIFByaXNtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvbWF0Y2hlcyNQb2x5ZmlsbFxuXHRpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcblx0XHRFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXHR9XG5cblx0dmFyIExPQURJTkdfTUVTU0FHRSA9ICdMb2FkaW5n4oCmJztcblx0dmFyIEZBSUxVUkVfTUVTU0FHRSA9IGZ1bmN0aW9uIChzdGF0dXMsIG1lc3NhZ2UpIHtcblx0XHRyZXR1cm4gJ+KcliBFcnJvciAnICsgc3RhdHVzICsgJyB3aGlsZSBmZXRjaGluZyBmaWxlOiAnICsgbWVzc2FnZTtcblx0fTtcblx0dmFyIEZBSUxVUkVfRU1QVFlfTUVTU0FHRSA9ICfinJYgRXJyb3I6IEZpbGUgZG9lcyBub3QgZXhpc3Qgb3IgaXMgZW1wdHknO1xuXG5cdHZhciBFWFRFTlNJT05TID0ge1xuXHRcdCdqcyc6ICdqYXZhc2NyaXB0Jyxcblx0XHQncHknOiAncHl0aG9uJyxcblx0XHQncmInOiAncnVieScsXG5cdFx0J3BzMSc6ICdwb3dlcnNoZWxsJyxcblx0XHQncHNtMSc6ICdwb3dlcnNoZWxsJyxcblx0XHQnc2gnOiAnYmFzaCcsXG5cdFx0J2JhdCc6ICdiYXRjaCcsXG5cdFx0J2gnOiAnYycsXG5cdFx0J3RleCc6ICdsYXRleCdcblx0fTtcblxuXHR2YXIgU1RBVFVTX0FUVFIgPSAnZGF0YS1zcmMtc3RhdHVzJztcblx0dmFyIFNUQVRVU19MT0FESU5HID0gJ2xvYWRpbmcnO1xuXHR2YXIgU1RBVFVTX0xPQURFRCA9ICdsb2FkZWQnO1xuXHR2YXIgU1RBVFVTX0ZBSUxFRCA9ICdmYWlsZWQnO1xuXG5cdHZhciBTRUxFQ1RPUiA9ICdwcmVbZGF0YS1zcmNdOm5vdChbJyArIFNUQVRVU19BVFRSICsgJz1cIicgKyBTVEFUVVNfTE9BREVEICsgJ1wiXSknXG5cdFx0KyAnOm5vdChbJyArIFNUQVRVU19BVFRSICsgJz1cIicgKyBTVEFUVVNfTE9BRElORyArICdcIl0pJztcblxuXHQvKipcblx0ICogTG9hZHMgdGhlIGdpdmVuIGZpbGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcmMgVGhlIFVSTCBvciBwYXRoIG9mIHRoZSBzb3VyY2UgZmlsZSB0byBsb2FkLlxuXHQgKiBAcGFyYW0geyhyZXN1bHQ6IHN0cmluZykgPT4gdm9pZH0gc3VjY2Vzc1xuXHQgKiBAcGFyYW0geyhyZWFzb246IHN0cmluZykgPT4gdm9pZH0gZXJyb3Jcblx0ICovXG5cdGZ1bmN0aW9uIGxvYWRGaWxlKHNyYywgc3VjY2VzcywgZXJyb3IpIHtcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7XG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG5cdFx0XHRcdGlmICh4aHIuc3RhdHVzIDwgNDAwICYmIHhoci5yZXNwb25zZVRleHQpIHtcblx0XHRcdFx0XHRzdWNjZXNzKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzID49IDQwMCkge1xuXHRcdFx0XHRcdFx0ZXJyb3IoRkFJTFVSRV9NRVNTQUdFKHhoci5zdGF0dXMsIHhoci5zdGF0dXNUZXh0KSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVycm9yKEZBSUxVUkVfRU1QVFlfTUVTU0FHRSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHR4aHIuc2VuZChudWxsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJzZXMgdGhlIGdpdmVuIHJhbmdlLlxuXHQgKlxuXHQgKiBUaGlzIHJldHVybnMgYSByYW5nZSB3aXRoIGluY2x1c2l2ZSBlbmRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IG51bGwgfCB1bmRlZmluZWR9IHJhbmdlXG5cdCAqIEByZXR1cm5zIHtbbnVtYmVyLCBudW1iZXIgfCB1bmRlZmluZWRdIHwgdW5kZWZpbmVkfVxuXHQgKi9cblx0ZnVuY3Rpb24gcGFyc2VSYW5nZShyYW5nZSkge1xuXHRcdHZhciBtID0gL15cXHMqKFxcZCspXFxzKig/OigsKVxccyooPzooXFxkKylcXHMqKT8pPyQvLmV4ZWMocmFuZ2UgfHwgJycpO1xuXHRcdGlmIChtKSB7XG5cdFx0XHR2YXIgc3RhcnQgPSBOdW1iZXIobVsxXSk7XG5cdFx0XHR2YXIgY29tbWEgPSBtWzJdO1xuXHRcdFx0dmFyIGVuZCA9IG1bM107XG5cblx0XHRcdGlmICghY29tbWEpIHtcblx0XHRcdFx0cmV0dXJuIFtzdGFydCwgc3RhcnRdO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFlbmQpIHtcblx0XHRcdFx0cmV0dXJuIFtzdGFydCwgdW5kZWZpbmVkXTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBbc3RhcnQsIE51bWJlcihlbmQpXTtcblx0XHR9XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRlbnYuc2VsZWN0b3IgKz0gJywgJyArIFNFTEVDVE9SO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0dmFyIHByZSA9IC8qKiBAdHlwZSB7SFRNTFByZUVsZW1lbnR9ICovIChlbnYuZWxlbWVudCk7XG5cdFx0aWYgKHByZS5tYXRjaGVzKFNFTEVDVE9SKSkge1xuXHRcdFx0ZW52LmNvZGUgPSAnJzsgLy8gZmFzdC1wYXRoIHRoZSB3aG9sZSB0aGluZyBhbmQgZ28gdG8gY29tcGxldGVcblxuXHRcdFx0cHJlLnNldEF0dHJpYnV0ZShTVEFUVVNfQVRUUiwgU1RBVFVTX0xPQURJTkcpOyAvLyBtYXJrIGFzIGxvYWRpbmdcblxuXHRcdFx0Ly8gYWRkIGNvZGUgZWxlbWVudCB3aXRoIGxvYWRpbmcgbWVzc2FnZVxuXHRcdFx0dmFyIGNvZGUgPSBwcmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQ09ERScpKTtcblx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSBMT0FESU5HX01FU1NBR0U7XG5cblx0XHRcdHZhciBzcmMgPSBwcmUuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuXG5cdFx0XHR2YXIgbGFuZ3VhZ2UgPSBlbnYubGFuZ3VhZ2U7XG5cdFx0XHRpZiAobGFuZ3VhZ2UgPT09ICdub25lJykge1xuXHRcdFx0XHQvLyB0aGUgbGFuZ3VhZ2UgbWlnaHQgYmUgJ25vbmUnIGJlY2F1c2UgdGhlcmUgaXMgbm8gbGFuZ3VhZ2Ugc2V0O1xuXHRcdFx0XHQvLyBpbiB0aGlzIGNhc2UsIHdlIHdhbnQgdG8gdXNlIHRoZSBleHRlbnNpb24gYXMgdGhlIGxhbmd1YWdlXG5cdFx0XHRcdHZhciBleHRlbnNpb24gPSAoL1xcLihcXHcrKSQvLmV4ZWMoc3JjKSB8fCBbLCAnbm9uZSddKVsxXTtcblx0XHRcdFx0bGFuZ3VhZ2UgPSBFWFRFTlNJT05TW2V4dGVuc2lvbl0gfHwgZXh0ZW5zaW9uO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBzZXQgbGFuZ3VhZ2UgY2xhc3Nlc1xuXHRcdFx0UHJpc20udXRpbC5zZXRMYW5ndWFnZShjb2RlLCBsYW5ndWFnZSk7XG5cdFx0XHRQcmlzbS51dGlsLnNldExhbmd1YWdlKHByZSwgbGFuZ3VhZ2UpO1xuXG5cdFx0XHQvLyBwcmVsb2FkIHRoZSBsYW5ndWFnZVxuXHRcdFx0dmFyIGF1dG9sb2FkZXIgPSBQcmlzbS5wbHVnaW5zLmF1dG9sb2FkZXI7XG5cdFx0XHRpZiAoYXV0b2xvYWRlcikge1xuXHRcdFx0XHRhdXRvbG9hZGVyLmxvYWRMYW5ndWFnZXMobGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBsb2FkIGZpbGVcblx0XHRcdGxvYWRGaWxlKFxuXHRcdFx0XHRzcmMsXG5cdFx0XHRcdGZ1bmN0aW9uICh0ZXh0KSB7XG5cdFx0XHRcdFx0Ly8gbWFyayBhcyBsb2FkZWRcblx0XHRcdFx0XHRwcmUuc2V0QXR0cmlidXRlKFNUQVRVU19BVFRSLCBTVEFUVVNfTE9BREVEKTtcblxuXHRcdFx0XHRcdC8vIGhhbmRsZSBkYXRhLXJhbmdlXG5cdFx0XHRcdFx0dmFyIHJhbmdlID0gcGFyc2VSYW5nZShwcmUuZ2V0QXR0cmlidXRlKCdkYXRhLXJhbmdlJykpO1xuXHRcdFx0XHRcdGlmIChyYW5nZSkge1xuXHRcdFx0XHRcdFx0dmFyIGxpbmVzID0gdGV4dC5zcGxpdCgvXFxyXFxuP3xcXG4vZyk7XG5cblx0XHRcdFx0XHRcdC8vIHRoZSByYW5nZSBpcyBvbmUtYmFzZWQgYW5kIGluY2x1c2l2ZSBvbiBib3RoIGVuZHNcblx0XHRcdFx0XHRcdHZhciBzdGFydCA9IHJhbmdlWzBdO1xuXHRcdFx0XHRcdFx0dmFyIGVuZCA9IHJhbmdlWzFdID09IG51bGwgPyBsaW5lcy5sZW5ndGggOiByYW5nZVsxXTtcblxuXHRcdFx0XHRcdFx0aWYgKHN0YXJ0IDwgMCkgeyBzdGFydCArPSBsaW5lcy5sZW5ndGg7IH1cblx0XHRcdFx0XHRcdHN0YXJ0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc3RhcnQgLSAxLCBsaW5lcy5sZW5ndGgpKTtcblx0XHRcdFx0XHRcdGlmIChlbmQgPCAwKSB7IGVuZCArPSBsaW5lcy5sZW5ndGg7IH1cblx0XHRcdFx0XHRcdGVuZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGVuZCwgbGluZXMubGVuZ3RoKSk7XG5cblx0XHRcdFx0XHRcdHRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5qb2luKCdcXG4nKTtcblxuXHRcdFx0XHRcdFx0Ly8gYWRkIGRhdGEtc3RhcnQgZm9yIGxpbmUgbnVtYmVyc1xuXHRcdFx0XHRcdFx0aWYgKCFwcmUuaGFzQXR0cmlidXRlKCdkYXRhLXN0YXJ0JykpIHtcblx0XHRcdFx0XHRcdFx0cHJlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGFydCcsIFN0cmluZyhzdGFydCArIDEpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBoaWdobGlnaHQgY29kZVxuXHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdFx0XHRcdFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoY29kZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdC8vIG1hcmsgYXMgZmFpbGVkXG5cdFx0XHRcdFx0cHJlLnNldEF0dHJpYnV0ZShTVEFUVVNfQVRUUiwgU1RBVFVTX0ZBSUxFRCk7XG5cblx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQgPSB7XG5cdFx0LyoqXG5cdFx0ICogRXhlY3V0ZXMgdGhlIEZpbGUgSGlnaGxpZ2h0IHBsdWdpbiBmb3IgYWxsIG1hdGNoaW5nIGBwcmVgIGVsZW1lbnRzIHVuZGVyIHRoZSBnaXZlbiBjb250YWluZXIuXG5cdFx0ICpcblx0XHQgKiBOb3RlOiBFbGVtZW50cyB3aGljaCBhcmUgYWxyZWFkeSBsb2FkZWQgb3IgY3VycmVudGx5IGxvYWRpbmcgd2lsbCBub3QgYmUgdG91Y2hlZCBieSB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7UGFyZW50Tm9kZX0gW2NvbnRhaW5lcj1kb2N1bWVudF1cblx0XHQgKi9cblx0XHRoaWdobGlnaHQ6IGZ1bmN0aW9uIGhpZ2hsaWdodChjb250YWluZXIpIHtcblx0XHRcdHZhciBlbGVtZW50cyA9IChjb250YWluZXIgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1IpO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgKGVsZW1lbnQgPSBlbGVtZW50c1tpKytdKTspIHtcblx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0dmFyIGxvZ2dlZCA9IGZhbHNlO1xuXHQvKiogQGRlcHJlY2F0ZWQgVXNlIGBQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQuaGlnaGxpZ2h0YCBpbnN0ZWFkLiAqL1xuXHRQcmlzbS5maWxlSGlnaGxpZ2h0ID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICghbG9nZ2VkKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ1ByaXNtLmZpbGVIaWdobGlnaHQgaXMgZGVwcmVjYXRlZC4gVXNlIGBQcmlzbS5wbHVnaW5zLmZpbGVIaWdobGlnaHQuaGlnaGxpZ2h0YCBpbnN0ZWFkLicpO1xuXHRcdFx0bG9nZ2VkID0gdHJ1ZTtcblx0XHR9XG5cdFx0UHJpc20ucGx1Z2lucy5maWxlSGlnaGxpZ2h0LmhpZ2hsaWdodC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHR9O1xuXG59KCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBCYWJlbEZpc2ggPSByZXF1aXJlKCdiYWJlbGZpc2gnKTtcblxuY29uc3QgaTE4biA9IG5ldyBCYWJlbEZpc2goJ2VuJyk7XG5cbmxldCBlcnIgPSBjb25zb2xlLmVycm9yO1xuXG5pZiAodHlwZW9mIElTX0NMSUVOVCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29uc3QgbG9nID0gcmVxdWlyZSgnZW5naW5lL2xvZycpKCk7XG4gIGVyciA9ICguLi5hcmdzKSA9PiBsb2cuZXJyb3IoLi4uYXJncyk7XG59XG5cbmZ1bmN0aW9uIHQocGhyYXNlKSB7XG5cbiAgaWYgKCFpMThuLmhhc1BocmFzZShMQU5HLCBwaHJhc2UpKSB7XG4gICAgZXJyKFwiTm8gc3VjaCBwaHJhc2VcIiwgcGhyYXNlKTtcbiAgfVxuXG4gIHJldHVybiBpMThuLnQoTEFORywgLi4uYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0O1xuXG5jb25zdCBMQU5HID0gcmVxdWlyZSgnY29uZmlnJykubGFuZztcblxuaWYgKExBTkcgIT09ICdlbicpIHtcbiAgaTE4bi5zZXRGYWxsYmFjayhMQU5HLCAnZW4nKTtcbn1cblxuaTE4bi5hZGQgPSAoLi4uYXJncykgPT4gaTE4bi5hZGRQaHJhc2UoTEFORywgLi4uYXJncyk7XG5cbnQuaTE4biA9IGkxOG47XG5cbiIsIi8qKlxuICogIGNsYXNzIEJhYmVsRmlzaFxuICpcbiAqICBJbnRlcm5hbGl6YXRpb24gYW5kIGxvY2FsaXphdGlvbiBsaWJyYXJ5IHRoYXQgbWFrZXMgaTE4biBhbmQgbDEwbiBmdW4gYWdhaW4uXG4gKlxuICogICMjIyMjIEV4YW1wbGVcbiAqXG4gKiAgYGBgamF2YXNjcmlwdFxuICogIHZhciBCYWJlbEZpc2ggPSByZXF1aXJlKCdiYWJlbGZpc2gnKSxcbiAqICAgICAgaTE4biA9IG5ldyBCYWJlbEZpc2goKTtcbiAqICBgYGBcbiAqXG4gKiAgb3JcbiAqXG4gKiAgYGBgamF2YXNjcmlwdFxuICogIHZhciBiYWJlbGZpc2ggPSByZXF1aXJlKCdiYWJlbGZpc2gnKSxcbiAqICAgICAgaTE4biA9IGJhYmVsZmlzaCgpO1xuICogIGBgYFxuICoqL1xuXG5cbid1c2Ugc3RyaWN0JztcblxuXG52YXIgcGFyc2VyID0gcmVxdWlyZSgnLi9saWIvcGFyc2VyJyk7XG52YXIgcGx1cmFsID0gcmVxdWlyZSgncGx1cmFscy1jbGRyJyk7XG5cbmZ1bmN0aW9uIF9jbGFzcyhvYmopIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopOyB9XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKG9iaikgICB7IHJldHVybiBfY2xhc3Mob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7IH1cbmZ1bmN0aW9uIGlzTnVtYmVyKG9iaikgICB7IHJldHVybiAhaXNOYU4ob2JqKSAmJiBpc0Zpbml0ZShvYmopOyB9XG5mdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSAgeyByZXR1cm4gb2JqID09PSB0cnVlIHx8IG9iaiA9PT0gZmFsc2U7IH1cbmZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7IHJldHVybiBfY2xhc3Mob2JqKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJzsgfVxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSAgIHsgcmV0dXJuIF9jbGFzcyhvYmopID09PSAnW29iamVjdCBPYmplY3RdJzsgfVxuXG4vKmlzdGFuYnVsIGlnbm9yZSBuZXh0Ki9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBfaXNBcnJheShvYmopIHtcbiAgcmV0dXJuIF9jbGFzcyhvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVGhlIGZvbGxvd2luZyB0d28gdXRpbGl0aWVzIChmb3JFYWNoIGFuZCBleHRlbmQpIGFyZSBtb2RpZmllZCBmcm9tIFVuZGVyc2NvcmVcbi8vXG4vLyBodHRwOi8vdW5kZXJzY29yZWpzLm9yZ1xuLy9cbi8vIChjKSAyMDA5LTIwMTMgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIEluYy5cbi8vXG4vLyBVbmRlcnNjb3JlIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbnZhciBuYXRpdmVGb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cblxuLy8gVGhlIGNvcm5lcnN0b25lLCBhbiBgZWFjaGAgaW1wbGVtZW50YXRpb24sIGFrYSBgZm9yRWFjaGAuXG4vLyBIYW5kbGVzIG9iamVjdHMgd2l0aCB0aGUgYnVpbHQtaW4gYGZvckVhY2hgLCBhcnJheXMsIGFuZCByYXcgb2JqZWN0cy5cbi8vIERlbGVnYXRlcyB0byAqKkVDTUFTY3JpcHQgNSoqJ3MgbmF0aXZlIGBmb3JFYWNoYCBpZiBhdmFpbGFibGUuXG4vKmlzdGFuYnVsIGlnbm9yZSBuZXh0Ki9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChuYXRpdmVGb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBuYXRpdmVGb3JFYWNoKSB7XG4gICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQpO1xuICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09ICtvYmoubGVuZ3RoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSArPSAxKSB7XG4gICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBuZXh0Ki9cbmZ1bmN0aW9uIGZvcm1hdChmKSB7XG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24gKHgpIHtcbiAgICBpZiAoeCA9PT0gJyUlJykgeyByZXR1cm4gJyUnOyB9XG4gICAgaWYgKGkgPj0gbGVuKSB7IHJldHVybiB4OyB9XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzpcbiAgICAgICAgcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnc1tpKytdKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHI7XG59XG5cblxuLy8gaGVscGVyc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vLyBMYXN0IHJlc29ydCBsb2NhbGUsIHRoYXQgZXhpc3RzIGZvciBzdXJlXG52YXIgR0VORVJJQ19MT0NBTEUgPSAnZW4nO1xuXG5cbi8vIGZsYXR0ZW4ob2JqKSAtPiBPYmplY3Rcbi8vXG4vLyBGbGF0dGVucyBvYmplY3QgaW50byBvbmUtbGV2ZWwgZGljdGlvbmFyeS5cbi8vXG4vLyAjIyMjIyBFeGFtcGxlXG4vL1xuLy8gICAgIHZhciBvYmogPSB7XG4vLyAgICAgICBhYmM6IHsgZGVmOiAnZm9vJyB9LFxuLy8gICAgICAgaGlqOiAnYmFyJ1xuLy8gICAgIH07XG4vL1xuLy8gICAgIGZsYXR0ZW4ob2JqKTtcbi8vICAgICAvLyAtPiB7ICdhYmMuZGVmJzogJ2ZvbycsICdoaWonOiAnYmFyJyB9O1xuLy9cbmZ1bmN0aW9uIGZsYXR0ZW4ob2JqKSB7XG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBmb3JFYWNoKG9iaiB8fCB7fSwgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yRWFjaChmbGF0dGVuKHZhbCksIGZ1bmN0aW9uIChzdWJfdmFsLCBzdWJfa2V5KSB7XG4gICAgICAgIHBhcmFtc1trZXkgKyAnLicgKyBzdWJfa2V5XSA9IHN1Yl92YWw7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwYXJhbXNba2V5XSA9IHZhbDtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuXG52YXIga2V5U2VwYXJhdG9yID0gJyNAJCc7XG5cbmZ1bmN0aW9uIG1ha2VQaHJhc2VLZXkobG9jYWxlLCBwaHJhc2UpIHtcbiAgcmV0dXJuIGxvY2FsZSArIGtleVNlcGFyYXRvciArIHBocmFzZTtcbn1cblxuXG5mdW5jdGlvbiBzZWFyY2hQaHJhc2VLZXkoc2VsZiwgbG9jYWxlLCBwaHJhc2UpIHtcbiAgdmFyIGtleSA9IG1ha2VQaHJhc2VLZXkobG9jYWxlLCBwaHJhc2UpO1xuICB2YXIgc3RvcmFnZSA9IHNlbGYuX3N0b3JhZ2U7XG5cbiAgLy8gZGlyZWN0IHNlYXJjaCBmaXJzdFxuICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IHJldHVybiBrZXk7IH1cblxuICAvLyBkb24ndCB0cnkgZm9sbGJhY2tzIGZvciBkZWZhdWx0IGxvY2FsZVxuICBpZiAobG9jYWxlID09PSBzZWxmLl9kZWZhdWx0TG9jYWxlKSB7IHJldHVybiBudWxsOyB9XG5cbiAgLy8gc2VhcmNoIHZpYSBmYWxsYmFjayBtYXAgY2FjaGVcbiAgdmFyIGZiX2NhY2hlID0gc2VsZi5fZmFsbGJhY2tzX2NhY2hlO1xuICBpZiAoZmJfY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkgeyByZXR1cm4gZmJfY2FjaGVba2V5XTsgfVxuXG4gIC8vIHNjYW4gZmFsbGJhY2tzICYgY2FjaGUgcmVzdWx0XG4gIHZhciBmYiA9IHNlbGYuX2ZhbGxiYWNrc1tsb2NhbGVdIHx8IFsgc2VsZi5fZGVmYXVsdExvY2FsZSBdO1xuICB2YXIgZmJfa2V5O1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gZmIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZmJfa2V5ID0gbWFrZVBocmFzZUtleShmYltpXSwgcGhyYXNlKTtcbiAgICBpZiAoc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShmYl9rZXkpKSB7XG4gICAgICAvLyBmb3VuZCAtIHVwZGF0ZSBjYWNoZSBhbmQgcmV0dXJuIHJlc3VsdFxuICAgICAgZmJfY2FjaGVba2V5XSA9IGZiX2tleTtcbiAgICAgIHJldHVybiBmYl9jYWNoZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1hcmsgZmJfY2FjaGUgZW50cnkgZW1wdHkgZm9yIGZhc3QgbG9va3VwIG9uIG5leHQgcmVxdWVzdFxuICBmYl9jYWNoZVtrZXldID0gbnVsbDtcbiAgcmV0dXJuIG51bGw7XG59XG5cblxuZnVuY3Rpb24gcGx1cmFsaXplcihsYW5nLCB2YWwsIGZvcm1zKSB7XG4gIHZhciBpZHggPSBwbHVyYWwuaW5kZXhPZihsYW5nLCB2YWwpO1xuXG4gIGlmIChpZHggPT09IC0xKSB7XG4gICAgcmV0dXJuIGZvcm1hdCgnW3BsdXJhbGl6ZXIgZm9yIFwiJXNcIiBsb2NhbGUgbm90IGZvdW5kXScsIGxhbmcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmb3Jtc1tpZHhdID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmb3JtYXQoXG4gICAgICAnW3BsdXJhbCBmb3JtICVkIChcIiVzXCIpIG5vdCBmb3VuZCBpbiB0cmFuc2xhdGlvbl0nLFxuICAgICAgaWR4LCBwbHVyYWwuZm9ybXMobGFuZylbaWR4XVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gZm9ybXNbaWR4XTtcbn1cblxuLy8gcHVibGljIGFwaSAobW9kdWxlKVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vKipcbiAqICBuZXcgQmFiZWxGaXNoKFtkZWZhdWx0TG9jYWxlID0gJ2VuJ10pXG4gKlxuICogIEluaXRpYXRlcyBuZXcgaW5zdGFuY2Ugb2YgQmFiZWxGaXNoLlxuICpcbiAqICBfX05vdGUhX18geW91IGNhbiBvbWl0IGBuZXdgIGZvciBjb252ZW5pZW5jZSwgZGlyZWN0IGNhbGwgd2lsbCByZXR1cm5cbiAqIG5ldyBpbnN0YW5jZSB0b28uXG4gKiovXG5mdW5jdGlvbiBCYWJlbEZpc2goZGVmYXVsdExvY2FsZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQmFiZWxGaXNoKSkgeyByZXR1cm4gbmV3IEJhYmVsRmlzaChkZWZhdWx0TG9jYWxlKTsgfVxuXG4gIHRoaXMuX2RlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlID8gU3RyaW5nKGRlZmF1bHRMb2NhbGUpIDogR0VORVJJQ19MT0NBTEU7XG5cbiAgLy8gaGFzaCBvZiBsb2NhbGUgPT4gWyBmYWxsYmFjazEsIGZhbGxiYWNrMiwgLi4uIF0gcGFpcnNcbiAgdGhpcy5fZmFsbGJhY2tzID0ge307XG5cbiAgLy8gZmFsbGJhY2sgY2FjaGUgZm9yIGVhY2ggcGhyYXNlXG4gIC8vXG4gIC8vIHtcbiAgLy8gICBsb2NhbGVfa2V5OiBmYWxsYmFja19rZXlcbiAgLy8gfVxuICAvL1xuICAvLyBmYWxsYmFja19rZXkgY2FuIGJlIG51bGwgaWYgc2VhcmNoIGZhaWxlZFxuICAvL1xuICB0aGlzLl9mYWxsYmFja3NfY2FjaGUgPSB7fTtcblxuICAvLyBzdG9yYWdlIG9mIGNvbXBpbGVkIHRyYW5zbGF0aW9uc1xuICAvL1xuICAvLyB7XG4gIC8vICAgbG9jYWxlICsgQCMkICsgcGhyYXNlX2tleToge1xuICAvLyAgICAgbG9jYWxlOiAgICAgIGxvY2FsZSBuYW1lIC0gY2FuIGJlIGRpZmZlcmVudCBmb3IgZmFsbGJhY2tzXG4gIC8vICAgICB0cmFuc2xhdGlvbjogb3JpZ2luYWwgdHJhbnNsYXRpb24gcGhyYXNlIG9yIGRhdGEgdmFyaWFibGUvb2JqZWN0XG4gIC8vICAgICByYXc6ICAgICAgICAgdHJ1ZS9mYWxzZSAtIGRvZXMgdHJhbnNsYXRpb24gY29udGFpbiBwbGFpbiBkYXRhIG9yXG4gIC8vICAgICAgICAgICAgICAgICAgc3RyaW5nIHRvIGNvbXBpbGVcbiAgLy8gICAgIGNvbXBpbGVkOiAgICBjb3BpbGVkIHRyYW5zbGF0aW9uIGZuIG9yIHBsYWluIHN0cmluZ1xuICAvLyAgIH1cbiAgLy8gICAuLi5cbiAgLy8gfVxuICAvL1xuICB0aGlzLl9zdG9yYWdlID0ge307XG5cbiAgLy8gY2FjaGUgZm9yIGNvbXBsZXggcGx1cmFsIHBhcnRzICh3aXRoIHBhcmFtcylcbiAgLy9cbiAgLy8ge1xuICAvLyAgIGxhbmd1YWdlOiBuZXcgQmFiZWxGaXNoKGxhbmd1YWdlKVxuICAvLyB9XG4gIC8vXG4gIHRoaXMuX3BsdXJhbHNfY2FjaGUgPSB7fTtcbn1cblxuXG4vLyBwdWJsaWMgYXBpIChpbnN0YW5jZSlcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxuLyoqXG4gKiAgQmFiZWxGaXNoI2FkZFBocmFzZShsb2NhbGUsIHBocmFzZSwgdHJhbnNsYXRpb24gWywgZmxhdHRlbkxldmVsXSkgLT4gQmFiZWxGaXNoXG4gKiAgLSBsb2NhbGUgKFN0cmluZyk6IExvY2FsZSBvZiB0cmFuc2xhdGlvblxuICogIC0gcGhyYXNlIChTdHJpbmd8TnVsbCk6IFBocmFzZSBJRCwgZS5nLiBgYXBwcy5mb3J1bWBcbiAqICAtIHRyYW5zbGF0aW9uIChTdHJpbmd8T2JqZWN0fEFycmF5fE51bWJlcnxCb29sZWFuKTogVHJhbnNsYXRpb24gb3IgYW4gb2JqZWN0XG4gKiAgICB3aXRoIG5lc3RlZCBwaHJhc2VzLCBvciBhIHB1cmUgb2JqZWN0LlxuICogIC0gZmxhdHRlbkxldmVsIChOdW1iZXJ8Qm9vbGVhbik6IE9wdGlvbmFsLCAwLi5pbmZpbml0eS4gYEluZmluaXR5YCBieSBkZWZhdWx0LlxuICogICAgRGVmaW5lIFwiZmxhdHRlblwiIGRlZXBuZXNzIGZvciBsb2FkZWQgb2JqZWN0LiAgWW91IGNhbiBhbHNvIHVzZVxuICogICAgYHRydWVgIGFzIGAwYCBvciBgZmFsc2VgIGFzIGBJbmZpbml0eWAuXG4gKlxuICpcbiAqICAjIyMjIyBGbGF0dGVuICYgdXNpbmcgSlMgb2JqZWN0c1xuICpcbiAqICBCeSBkZWZhdWx0IGFsbCBuZXN0ZWQgcHJvcGVydGllcyBhcmUgbm9ybWFsaXplZCB0byBzdHJpbmdzIGxpa2UgXCJmb28uYmFyLmJhelwiLFxuICogIGFuZCBpZiB2YWx1ZSBpcyBzdHJpbmcsIGl0IHdpbGwgYmUgY29tcGlsZWQgd2l0aCBiYWJlbGZpc2ggbm90YXRpb24uXG4gKiAgSWYgZGVlcG5lc3MgaXMgYWJvdmUgYGZsYXR0ZW5MZXZlbGAgT1IgdmFsdWUgaXMgbm90IG9iamVjdCBhbmQgbm90IHN0cmluZyxcbiAqICBpdCB3aWxsIGJlIHVzZWQgXCJhcyBpc1wiLiBOb3RlLCBvbmx5IEpTT04gc3RyaW5naWZpYWJsZSBkYXRhIHNob3VsZCBiZSB1c2VkLlxuICpcbiAqICBJbiBzaG9ydDogeW91IGNhbiBzYWZlbHkgcGFzcyBgQXJyYXlgLCBgTnVtYmVyYCBvciBgQm9vbGVhbmAuIEZvciBvYmplY3RzIHlvdVxuICogIHNob3VsZCBkZWZpbmUgZmxhdHRlbiBsZXZlbCBvciBkaXNhYmxlIGl0IGNvbXBsZWV0ZWx5LCB0byB3b3JrIHdpdGggcHVyZSBkYXRhLlxuICpcbiAqICBQdXJlIG9iamVjdHMgY2FuIGJlIHVzZWZ1bCB0byBwcmVwYXJlIGJ1bGsgZGF0YSBmb3IgZXh0ZXJuYWwgbGlicmFyaWVzLCBsaWtlXG4gKiAgY2FsZW5kYXJzLCB0aW1lL2RhdGUgZ2VuZXJhdG9ycyBhbmQgc28gb24uXG4gKlxuICogICMjIyMjIEV4YW1wbGVcbiAqXG4gKiAgYGBgamF2YXNjcmlwdFxuICogIGkxOG4uYWRkUGhyYXNlKCdydS1SVScsXG4gKiAgICAnYXBwcy5mb3J1bXMucmVwbGllc19jb3VudCcsXG4gKiAgICAnI3tjb3VudH0gJXvQvtGC0LLQtdGCfNC+0YLQstC10YLQsHzQvtGC0LLQtdGC0L7Qsn06Y291bnQg0LIg0YLQtdC80LUnKTtcbiAqXG4gKiAgLy8gZXF1YWxzIHRvOlxuICogIGkxOG4uYWRkUGhyYXNlKCdydS1SVScsXG4gKiAgICAnYXBwcy5mb3J1bXMnLFxuICogICAgeyByZXBsaWVzX2NvdW50OiAnI3tjb3VudH0gJXvQvtGC0LLQtdGCfNC+0YLQstC10YLQsHzQvtGC0LLQtdGC0L7Qsn06Y291bnQg0LIg0YLQtdC80LUnIH0pO1xuICogIGBgYFxuICoqL1xuQmFiZWxGaXNoLnByb3RvdHlwZS5hZGRQaHJhc2UgPSBmdW5jdGlvbiBfYWRkUGhyYXNlKGxvY2FsZSwgcGhyYXNlLCB0cmFuc2xhdGlvbiwgZmxhdHRlbkxldmVsKSB7XG4gIHZhciBzZWxmID0gdGhpcywgZmw7XG5cbiAgLy8gQ2FsY3VsYXRlIGZsYXR0ZW4gbGV2ZWwuIEluZmluaXR5IGJ5IGRlZmF1bHRcbiAgaWYgKGlzQm9vbGVhbihmbGF0dGVuTGV2ZWwpKSB7XG4gICAgZmwgPSBmbGF0dGVuTGV2ZWwgPyBJbmZpbml0eSA6IDA7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoZmxhdHRlbkxldmVsKSkge1xuICAgIGZsID0gTWF0aC5mbG9vcihmbGF0dGVuTGV2ZWwpO1xuICAgIGlmIChmbCA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgZmxhdHRlbiBsZXZlbCAoc2hvdWxkIGJlID49IDApLicpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmbCA9IEluZmluaXR5O1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KHRyYW5zbGF0aW9uKSAmJiAoZmwgPiAwKSkge1xuICAgIC8vIHJlY3Vyc2l2ZSBvYmplY3Qgd2FsaywgdW50aWwgZmxhdHRlbkxldmVsIGFsbG93c1xuICAgIGZvckVhY2godHJhbnNsYXRpb24sIGZ1bmN0aW9uICh2YWwsIGtleSkge1xuICAgICAgc2VsZi5hZGRQaHJhc2UobG9jYWxlLCAocGhyYXNlID8gcGhyYXNlICsgJy4nIDogJycpICsga2V5LCB2YWwsIGZsIC0gMSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoaXNTdHJpbmcodHJhbnNsYXRpb24pKSB7XG4gICAgdGhpcy5fc3RvcmFnZVttYWtlUGhyYXNlS2V5KGxvY2FsZSwgcGhyYXNlKV0gPSB7XG4gICAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb24sXG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIHJhdzogZmFsc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodHJhbnNsYXRpb24pIHx8XG4gICAgICAgICAgICAgaXNOdW1iZXIodHJhbnNsYXRpb24pIHx8XG4gICAgICAgICAgICAgaXNCb29sZWFuKHRyYW5zbGF0aW9uKSB8fFxuICAgICAgICAgICAgIChmbCA9PT0gMCAmJiBpc09iamVjdCh0cmFuc2xhdGlvbikpKSB7XG4gICAgLy8gUHVyZSBvYmplY3RzIGFyZSBzdG9yZWQgd2l0aG91dCBjb21waWxhdGlvblxuICAgIC8vIExpbWl0IGFsbG93ZWQgdHlwZXMuXG4gICAgdGhpcy5fc3RvcmFnZVttYWtlUGhyYXNlS2V5KGxvY2FsZSwgcGhyYXNlKV0gPSB7XG4gICAgICB0cmFuc2xhdGlvbjogdHJhbnNsYXRpb24sXG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIHJhdzogdHJ1ZVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gYFJlZ2V4YCwgYERhdGVgLCBgVWludDhBcnJheWAgYW5kIG90aGVycyB0eXBlcyB3aWxsXG4gICAgLy8gIGZ1Y2t1cCBgc3RyaW5naWZ5KClgLiBEb24ndCBhbGxvdyBoZXJlLlxuICAgIC8vIGB1bmRlZmluZWRgIGFsc28gbWVhbnMgd3JvbmcgcGFyYW0gaW4gcmVhbCBsaWZlLlxuICAgIC8vIGBudWxsYCBjYW4gYmUgYWxsb3dlZCB3aGVuIGV4YW1wbGVzIGZyb20gcmVhbCBsaWZlIGF2YWlsYWJsZS5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRyYW5zbGF0aW9uIC0gW1N0cmluZ3xPYmplY3R8QXJyYXl8TnVtYmVyfEJvb2xlYW5dIGV4cGVjdGVkLicpO1xuICB9XG5cbiAgc2VsZi5fZmFsbGJhY2tzX2NhY2hlID0ge307XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKlxuICogIEJhYmVsRmlzaCNzZXRGYWxsYmFjayhsb2NhbGUsIGZhbGxiYWNrcykgLT4gQmFiZWxGaXNoXG4gKiAgLSBsb2NhbGUgKFN0cmluZyk6IFRhcmdldCBsb2NhbGVcbiAqICAtIGZhbGxiYWNrcyAoQXJyYXkpOiBMaXN0IG9mIGZhbGxiYWNrIGxvY2FsZXNcbiAqXG4gKiAgU2V0IGZhbGxiYWNrcyBmb3IgZ2l2ZW4gbG9jYWxlLlxuICpcbiAqICBXaGVuIGBsb2NhbGVgIGhhcyBubyB0cmFuc2xhdGlvbiBmb3IgdGhlIHBocmFzZSwgYGZhbGxiYWNrc1swXWAgd2lsbCBiZVxuICogIHRyaWVkLCBpZiB0cmFuc2xhdGlvbiBzdGlsbCBub3QgZm91bmQsIHRoZW4gYGZhbGxiYWNrc1sxXWAgd2lsbCBiZSB0cmllZFxuICogIGFuZCBzbyBvbi4gSWYgbm9uZSBvZiBmYWxsYmFja3MgaGF2ZSB0cmFuc2xhdGlvbixcbiAqICBkZWZhdWx0IGxvY2FsZSB3aWxsIGJlIHRyaWVkIGFzIGxhc3QgcmVzb3J0LlxuICpcbiAqICAjIyMjIyBFcnJvcnNcbiAqXG4gKiAgLSB0aHJvd3MgYEVycm9yYCwgd2hlbiBgbG9jYWxlYCBlcXVhbHMgZGVmYXVsdCBsb2NhbGVcbiAqXG4gKiAgIyMjIyMgRXhhbXBsZVxuICpcbiAqICBgYGBqYXZhc2NyaXB0XG4gKiAgaTE4bi5zZXRGYWxsYmFjaygndWEtVUsnLCBbJ3VhJywgJ3J1J10pO1xuICogIGBgYFxuICoqL1xuQmFiZWxGaXNoLnByb3RvdHlwZS5zZXRGYWxsYmFjayA9IGZ1bmN0aW9uIF9zZXRGYWxsYmFjayhsb2NhbGUsIGZhbGxiYWNrcykge1xuICB2YXIgZGVmID0gdGhpcy5fZGVmYXVsdExvY2FsZTtcblxuICBpZiAoZGVmID09PSBsb2NhbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJEZWZhdWx0IGxvY2FsZSBjYW4ndCBoYXZlIGZhbGxiYWNrc1wiKTtcbiAgfVxuXG4gIHZhciBmYiA9IGlzQXJyYXkoZmFsbGJhY2tzKSA/IGZhbGxiYWNrcy5zbGljZSgpIDogWyBmYWxsYmFja3MgXTtcbiAgaWYgKGZiW2ZiLmxlbmd0aCAtIDFdICE9PSBkZWYpIHsgZmIucHVzaChkZWYpOyB9XG5cbiAgdGhpcy5fZmFsbGJhY2tzW2xvY2FsZV0gPSBmYjtcbiAgdGhpcy5fZmFsbGJhY2tzX2NhY2hlID0ge307XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbnZhciBDQU5fSEFWRV9ESVJFQ1RJVkVTX1JFID0gLyNcXHt8XFwoXFwofFxcXFxcXFxcLztcblxuLy8gQ29tcGlsZXMgZ2l2ZW4gc3RyaW5nIGludG8gZnVuY3Rpb24uIFVzZWQgdG8gY29tcGlsZSBwaHJhc2VzLFxuLy8gd2hpY2ggY29udGFpbnMgYHBsdXJhbHNgLCBgdmFyaWFibGVzYCwgZXRjLlxuZnVuY3Rpb24gY29tcGlsZShzZWxmLCBzdHIsIGxvY2FsZSkge1xuICB2YXIgbm9kZXMsIGJ1Ziwga2V5LCBzdHJpY3RfZXhlYywgZm9ybXNfZXhlYywgcGx1cmFsc19jYWNoZTtcblxuICAvLyBRdWljayBjaGVjayB0byBhdm9pZCBwYXJzZSBpbiBtb3N0IGNhc2VzIDopXG4gIGlmICghQ0FOX0hBVkVfRElSRUNUSVZFU19SRS50ZXN0KHN0cikpIHsgcmV0dXJuIHN0cjsgfVxuXG4gIG5vZGVzID0gcGFyc2VyLnBhcnNlKHN0cik7XG5cbiAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMSAmJiBub2Rlc1swXS50eXBlID09PSAnbGl0ZXJhbCcpIHtcbiAgICByZXR1cm4gbm9kZXNbMF0udGV4dDtcbiAgfVxuXG4gIC8vIGluaXQgY2FjaGUgaW5zdGFuY2UgZm9yIHBsdXJhbCBwYXJ0cywgaWYgbm90IGV4aXN0cyB5ZXQuXG4gIGlmICghc2VsZi5fcGx1cmFsc19jYWNoZVtsb2NhbGVdKSB7XG4gICAgc2VsZi5fcGx1cmFsc19jYWNoZVtsb2NhbGVdID0gbmV3IEJhYmVsRmlzaChsb2NhbGUpO1xuICB9XG4gIHBsdXJhbHNfY2FjaGUgPSBzZWxmLl9wbHVyYWxzX2NhY2hlW2xvY2FsZV07XG5cbiAgYnVmID0gW107XG4gIGJ1Zi5wdXNoKFsgJ3ZhciBzdHIgPSBcIlwiLCBzdHJpY3QsIHN0cmljdF9leGVjLCBmb3JtcywgZm9ybXNfZXhlYywgcGxybCwgY2FjaGUsIGxvYywgbG9jX3BsenIsIGFuY2hvcjsnIF0pO1xuICBidWYucHVzaCgncGFyYW1zID0gZmxhdHRlbihwYXJhbXMpOycpO1xuXG4gIGZvckVhY2gobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ2xpdGVyYWwnKSB7XG4gICAgICBidWYucHVzaChmb3JtYXQoJ3N0ciArPSAlajsnLCBub2RlLnRleHQpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAndmFyaWFibGUnKSB7XG4gICAgICBrZXkgPSBub2RlLmFuY2hvcjtcbiAgICAgIGJ1Zi5wdXNoKGZvcm1hdChcbiAgICAgICAgJ3N0ciArPSAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIChwYXJhbXNbJWpdKSkgPyBcIlttaXNzZWQgdmFyaWFibGU6ICVzXVwiIDogcGFyYW1zWyVqXTsnLFxuICAgICAgICBrZXksIGtleSwga2V5XG4gICAgICApKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzaG91bGQgbmV2ZXIgaGFwcGVuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgbmV4dCovXG4gICAgaWYgKG5vZGUudHlwZSAhPT0gJ3BsdXJhbCcpIHsgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG5vZGUgdHlwZScpOyB9XG5cbiAgICAvL1xuICAgIC8vIENvbXBpbGUgcGx1cmFsXG4gICAgLy9cblxuICAgIGtleSA9IG5vZGUuYW5jaG9yO1xuICAgIC8vIGNoZWNrIGlmIHBsdXJhbCBwYXJ0cyBhcmUgcGxhaW4gc3RyaW5ncyBvciBleGVjdXRhYmxlLFxuICAgIC8vIGFuZCBhZGQgZXhlY3V0YWJsZSB0byBcImNhY2hlXCIgaW5zdGFuY2Ugb2YgYmFiZWxmaXNoXG4gICAgLy8gcGx1cmFsIHBhcnQgdGV4dCB3aWxsIGJlIHVzZWQgYXMgdHJhbnNsYXRpb24ga2V5XG4gICAgc3RyaWN0X2V4ZWMgPSB7fTtcbiAgICBmb3JFYWNoKG5vZGUuc3RyaWN0LCBmdW5jdGlvbiAodGV4dCwgaykge1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlci5wYXJzZSh0ZXh0KTtcbiAgICAgIGlmIChwYXJzZWQubGVuZ3RoID09PSAxICYmIHBhcnNlZFswXS50eXBlID09PSAnbGl0ZXJhbCcpIHtcbiAgICAgICAgc3RyaWN0X2V4ZWNba10gPSBmYWxzZTtcbiAgICAgICAgLy8gcGF0Y2ggd2l0aCB1bmVzY2FwZWQgdmFsdWUgZm9yIGRpcmVjdCBleHRyYWN0XG4gICAgICAgIG5vZGUuc3RyaWN0W2tdID0gcGFyc2VkWzBdLnRleHQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3RyaWN0X2V4ZWNba10gPSB0cnVlO1xuICAgICAgaWYgKCFwbHVyYWxzX2NhY2hlLmhhc1BocmFzZShsb2NhbGUsIHRleHQsIHRydWUpKSB7XG4gICAgICAgIHBsdXJhbHNfY2FjaGUuYWRkUGhyYXNlKGxvY2FsZSwgdGV4dCwgdGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmb3Jtc19leGVjID0ge307XG4gICAgZm9yRWFjaChub2RlLmZvcm1zLCBmdW5jdGlvbiAodGV4dCwgaWR4KSB7XG4gICAgICB2YXIgcGFyc2VkID0gcGFyc2VyLnBhcnNlKHRleHQpLCB1bmVzY2FwZWQ7XG4gICAgICBpZiAocGFyc2VkLmxlbmd0aCA9PT0gMSAmJiBwYXJzZWRbMF0udHlwZSA9PT0gJ2xpdGVyYWwnKSB7XG4gICAgICAgIC8vIHBhdGNoIHdpdGggdW5lc2NhcGVkIHZhbHVlIGZvciBkaXJlY3QgZXh0cmFjdFxuICAgICAgICB1bmVzY2FwZWQgPSBwYXJzZWRbMF0udGV4dDtcbiAgICAgICAgbm9kZS5mb3Jtc1tpZHhdID0gdW5lc2NhcGVkO1xuICAgICAgICBmb3Jtc19leGVjW3VuZXNjYXBlZF0gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3Jtc19leGVjW3RleHRdID0gdHJ1ZTtcbiAgICAgIGlmICghcGx1cmFsc19jYWNoZS5oYXNQaHJhc2UobG9jYWxlLCB0ZXh0LCB0cnVlKSkge1xuICAgICAgICBwbHVyYWxzX2NhY2hlLmFkZFBocmFzZShsb2NhbGUsIHRleHQsIHRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8qZXNsaW50LWRpc2FibGUgc3BhY2UtaW4tcGFyZW5zKi9cbiAgICBidWYucHVzaChmb3JtYXQoJ2xvYyA9ICVqOycsIGxvY2FsZSkpO1xuICAgIGJ1Zi5wdXNoKGZvcm1hdCgnbG9jX3BsenIgPSAlajsnLCBsb2NhbGUuc3BsaXQoL1stX10vKVswXSkpO1xuICAgIGJ1Zi5wdXNoKGZvcm1hdCgnYW5jaG9yID0gcGFyYW1zWyVqXTsnLCBrZXkpKTtcbiAgICBidWYucHVzaChmb3JtYXQoJ2NhY2hlID0gdGhpcy5fcGx1cmFsc19jYWNoZVtsb2NdOycpKTtcbiAgICBidWYucHVzaChmb3JtYXQoJ3N0cmljdCA9ICVqOycsIG5vZGUuc3RyaWN0KSk7XG4gICAgYnVmLnB1c2goZm9ybWF0KCdzdHJpY3RfZXhlYyA9ICVqOycsIHN0cmljdF9leGVjKSk7XG4gICAgYnVmLnB1c2goZm9ybWF0KCdmb3JtcyA9ICVqOycsIG5vZGUuZm9ybXMpKTtcbiAgICBidWYucHVzaChmb3JtYXQoJ2Zvcm1zX2V4ZWMgPSAlajsnLCBmb3Jtc19leGVjKSk7XG4gICAgYnVmLnB1c2goICAgICAgICdpZiAoKyhhbmNob3IpICE9IGFuY2hvcikgeycpO1xuICAgIGJ1Zi5wdXNoKGZvcm1hdCgnICBzdHIgKz0gXCJbaW52YWxpZCBwbHVyYWxzIGFtb3VudDogJXMoXCIgKyBhbmNob3IgKyBcIildXCI7Jywga2V5KSk7XG4gICAgYnVmLnB1c2goICAgICAgICd9IGVsc2UgeycpO1xuICAgIGJ1Zi5wdXNoKCAgICAgICAnICBpZiAoc3RyaWN0W2FuY2hvcl0gIT09IHVuZGVmaW5lZCkgeycpO1xuICAgIGJ1Zi5wdXNoKCAgICAgICAnICAgIHBscmwgPSBzdHJpY3RbYW5jaG9yXTsnKTtcbiAgICBidWYucHVzaCggICAgICAgJyAgICBzdHIgKz0gc3RyaWN0X2V4ZWNbYW5jaG9yXSA/IGNhY2hlLnQobG9jLCBwbHJsLCBwYXJhbXMpIDogcGxybDsnKTtcbiAgICBidWYucHVzaCggICAgICAgJyAgfSBlbHNlIHsnKTtcbiAgICBidWYucHVzaCggICAgICAgJyAgICBwbHJsID0gcGx1cmFsaXplcihsb2NfcGx6ciwgK2FuY2hvciwgZm9ybXMpOycpO1xuICAgIGJ1Zi5wdXNoKCAgICAgICAnICAgIHN0ciArPSBmb3Jtc19leGVjW3BscmxdID8gY2FjaGUudChsb2MsIHBscmwsIHBhcmFtcykgOiBwbHJsOycpO1xuICAgIGJ1Zi5wdXNoKCAgICAgICAnICB9Jyk7XG4gICAgYnVmLnB1c2goICAgICAgICd9Jyk7XG4gICAgcmV0dXJuO1xuICB9KTtcblxuICBidWYucHVzaCgncmV0dXJuIHN0cjsnKTtcblxuICAvKmVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jKi9cbiAgcmV0dXJuIG5ldyBGdW5jdGlvbigncGFyYW1zJywgJ2ZsYXR0ZW4nLCAncGx1cmFsaXplcicsIGJ1Zi5qb2luKCdcXG4nKSk7XG59XG5cblxuLyoqXG4gKiAgQmFiZWxGaXNoI3RyYW5zbGF0ZShsb2NhbGUsIHBocmFzZVssIHBhcmFtc10pIC0+IFN0cmluZ1xuICogIC0gbG9jYWxlIChTdHJpbmcpOiBMb2NhbGUgb2YgdHJhbnNsYXRpb25cbiAqICAtIHBocmFzZSAoU3RyaW5nKTogUGhyYXNlIElELCBlLmcuIGBhcHAuZm9ydW1zLnJlcGxpZXNfY291bnRgXG4gKiAgLSBwYXJhbXMgKE9iamVjdHxOdW1iZXJ8U3RyaW5nKTogUGFyYW1zIGZvciB0cmFuc2xhdGlvbi4gYE51bWJlcmAgJiBgU3RyaW5nYFxuICogICAgd2lsbCBiZSAgY29lcmNlZCB0byBgeyBjb3VudDogWCwgdmFsdWU6IFggfWBcbiAqXG4gKiAgIyMjIyMgRXhhbXBsZVxuICpcbiAqICBgYGBqYXZhc2NyaXB0XG4gKiAgaTE4bi5hZGRQaHJhc2UoJ3J1LVJVJyxcbiAqICAgICAnYXBwcy5mb3J1bXMucmVwbGllc19jb3VudCcsXG4gKiAgICAgJyN7Y291bnR9ICgo0L7RgtCy0LXRgnzQvtGC0LLQtdGC0LB80L7RgtCy0LXRgtC+0LIpKSDQsiDRgtC10LzQtScpO1xuICpcbiAqICAvLyAuLi5cbiAqXG4gKiAgaTE4bi50cmFuc2xhdGUoJ3J1LVJVJywgJ2FwcC5mb3J1bXMucmVwbGllc19jb3VudCcsIHsgY291bnQ6IDEgfSk7XG4gKiAgaTE4bi50cmFuc2xhdGUoJ3J1LVJVJywgJ2FwcC5mb3J1bXMucmVwbGllc19jb3VudCcsIDF9KTtcbiAqICAvLyAtPiAnMSDQvtGC0LLQtdGCJ1xuICpcbiAqICBpMThuLnRyYW5zbGF0ZSgncnUtUlUnLCAnYXBwLmZvcnVtcy5yZXBsaWVzX2NvdW50JywgeyBjb3VudDogMiB9KTtcbiAqICBpMThuLnRyYW5zbGF0ZSgncnUtUlUnLCAnYXBwLmZvcnVtcy5yZXBsaWVzX2NvdW50JywgMik7XG4gKiAgLy8gLT4gJzIg0L7RgtCy0LXRgmEnXG4gKiAgYGBgXG4gKiovXG5CYWJlbEZpc2gucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIF90cmFuc2xhdGUobG9jYWxlLCBwaHJhc2UsIHBhcmFtcykge1xuICB2YXIga2V5ID0gc2VhcmNoUGhyYXNlS2V5KHRoaXMsIGxvY2FsZSwgcGhyYXNlKTtcbiAgdmFyIGRhdGE7XG5cbiAgaWYgKCFrZXkpIHtcbiAgICByZXR1cm4gbG9jYWxlICsgJzogTm8gdHJhbnNsYXRpb24gZm9yIFsnICsgcGhyYXNlICsgJ10nO1xuICB9XG5cbiAgZGF0YSA9IHRoaXMuX3N0b3JhZ2Vba2V5XTtcblxuICAvLyBzaW1wbGUgc3RyaW5nIG9yIG90aGVyIHB1cmUgb2JqZWN0XG4gIGlmIChkYXRhLnJhdykgeyByZXR1cm4gZGF0YS50cmFuc2xhdGlvbjsgfVxuXG4gIC8vIGNvbXBpbGUgZGF0YSBpZiBub3QgZG9uZSB5ZXRcbiAgaWYgKCFkYXRhLmhhc093blByb3BlcnR5KCdjb21waWxlZCcpKSB7XG4gICAgLy8gV2Ugc2hvdWxkIHVzZSBsb2NhbGUgZnJvbSBwaHJhc2UsIGJlY2F1c2Ugb2YgcG9zc2libGUgZmFsbGJhY2ssXG4gICAgLy8gdG8ga2VlcCBwbHVyYWwgbG9jYWxlcyBpbiBzeW5jLlxuICAgIGRhdGEuY29tcGlsZWQgPSBjb21waWxlKHRoaXMsIGRhdGEudHJhbnNsYXRpb24sIGRhdGEubG9jYWxlKTtcbiAgfVxuXG4gIC8vIHJldHVybiBzaW1wbGUgc3RyaW5nIGltbWVkaWF0ZWx5XG4gIGlmICghaXNGdW5jdGlvbihkYXRhLmNvbXBpbGVkKSkge1xuICAgIHJldHVybiBkYXRhLmNvbXBpbGVkO1xuICB9XG5cbiAgLy9cbiAgLy8gR2VuZXJhdGUgXCJjb21wbGV4XCIgcGhyYXNlXG4gIC8vXG5cbiAgLy8gU3VnYXI6IGNvZXJjZSBudW1iZXJzICYgc3RyaW5ncyB0byB7IGNvdW50OiBYLCB2YWx1ZTogWCB9XG4gIGlmIChpc051bWJlcihwYXJhbXMpIHx8IGlzU3RyaW5nKHBhcmFtcykpIHtcbiAgICBwYXJhbXMgPSB7IGNvdW50OiBwYXJhbXMsIHZhbHVlOiBwYXJhbXMgfTtcbiAgfVxuXG4gIHJldHVybiBkYXRhLmNvbXBpbGVkLmNhbGwodGhpcywgcGFyYW1zLCBmbGF0dGVuLCBwbHVyYWxpemVyKTtcbn07XG5cblxuLyoqXG4gKiAgQmFiZWxGaXNoI2hhc1BocmFzZShsb2NhbGUsIHBocmFzZSkgLT4gQm9vbGVhblxuICogIC0gbG9jYWxlIChTdHJpbmcpOiBMb2NhbGUgb2YgdHJhbnNsYXRpb25cbiAqICAtIHBocmFzZSAoU3RyaW5nKTogUGhyYXNlIElELCBlLmcuIGBhcHAuZm9ydW1zLnJlcGxpZXNfY291bnRgXG4gKiAgLSBub0ZhbGxiYWNrIChCb29sZWFuKTogRGlzYWJsZSBzZWFyY2ggaW4gZmFsbGJhY2tzXG4gKlxuICogIFJldHVybnMgd2hlbmV2ZXIgb3Igbm90IHRoZXJlJ3MgYSB0cmFuc2xhdGlvbiBvZiBhIGBwaHJhc2VgLlxuICoqL1xuQmFiZWxGaXNoLnByb3RvdHlwZS5oYXNQaHJhc2UgPSBmdW5jdGlvbiBfaGFzUGhyYXNlKGxvY2FsZSwgcGhyYXNlLCBub0ZhbGxiYWNrKSB7XG4gIHJldHVybiBub0ZhbGxiYWNrID9cbiAgICB0aGlzLl9zdG9yYWdlLmhhc093blByb3BlcnR5KG1ha2VQaHJhc2VLZXkobG9jYWxlLCBwaHJhc2UpKVxuICAgIDpcbiAgICBzZWFyY2hQaHJhc2VLZXkodGhpcywgbG9jYWxlLCBwaHJhc2UpID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuXG4vKipcbiAqICBCYWJlbEZpc2gjZ2V0TG9jYWxlKGxvY2FsZSwgcGhyYXNlKSAtPiBTdHJpbmd8bnVsbFxuICogIC0gbG9jYWxlIChTdHJpbmcpOiBMb2NhbGUgb2YgdHJhbnNsYXRpb25cbiAqICAtIHBocmFzZSAoU3RyaW5nKTogUGhyYXNlIElELCBlLmcuIGBhcHAuZm9ydW1zLnJlcGxpZXNfY291bnRgXG4gKiAgLSBub0ZhbGxiYWNrIChCb29sZWFuKTogRGlzYWJsZSBzZWFyY2ggaW4gZmFsbGJhY2tzXG4gKlxuICogIFNpbWlsYXIgdG8gW1tCYWJlbEZpc2gjaGFzUGhyYXNlXV0sIGJ1dCByZXR1cm5zIHJlYWwgbG9jYWxlIG9mIHJlcXVlc3RlZFxuICogIHBocmFzZSwgb3IgYG51bGxgIGlmIG5vdGhpbmcgZm91bmQuIENhbiBiZSB1c2VmdWwgZm9yIGR5bmFtaWMgZGVwZW5kZW5jaWVzXG4gKiAgaW5pdC4gRm9yIGV4YW1wbGUsIHdoZW4geW91IGZldGNoIGkxMG4gY29uZmlnIGFzIHNpbmdsZSBvYmplY3QgYW5kIGNyZWF0ZVxuICogIHBocmFzZXMgZnJvbSBpdCdzIGNvbnRlbnQuXG4gKiovXG5CYWJlbEZpc2gucHJvdG90eXBlLmdldExvY2FsZSA9IGZ1bmN0aW9uIF9nZXRMb2NhbGUobG9jYWxlLCBwaHJhc2UsIG5vRmFsbGJhY2spIHtcbiAgaWYgKG5vRmFsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5fc3RvcmFnZS5oYXNPd25Qcm9wZXJ0eShtYWtlUGhyYXNlS2V5KGxvY2FsZSwgcGhyYXNlKSkgPyBsb2NhbGUgOiBudWxsO1xuICB9XG5cbiAgdmFyIGtleSA9IHNlYXJjaFBocmFzZUtleSh0aGlzLCBsb2NhbGUsIHBocmFzZSk7XG5cbiAgcmV0dXJuIGtleSA/IGtleS5zcGxpdChrZXlTZXBhcmF0b3IsIDIpWzBdIDogbnVsbDtcbn07XG5cblxuLyoqIGFsaWFzIG9mOiBCYWJlbEZpc2gjdHJhbnNsYXRlXG4gKiAgQmFiZWxGaXNoI3QobG9jYWxlLCBwaHJhc2VbLCBwYXJhbXNdKSAtPiBTdHJpbmdcbiAqKi9cbkJhYmVsRmlzaC5wcm90b3R5cGUudCA9IEJhYmVsRmlzaC5wcm90b3R5cGUudHJhbnNsYXRlO1xuXG5cbi8qKlxuICogIEJhYmVsRmlzaCNzdHJpbmdpZnkobG9jYWxlKSAtPiBTdHJpbmdcbiAqICAtIGxvY2FsZSAoU3RyaW5nKTogTG9jYWxlIG9mIHRyYW5zbGF0aW9uXG4gKlxuICogIFJldHVybnMgc2VyaWFsaXplZCBsb2NhbGUgZGF0YSwgdW5jbHVkaW5nIGZhbGxiYWNrcy5cbiAqICBJdCBjYW4gYmUgbG9hZGVkIGJhY2sgdmlhIGBsb2FkKClgIG1ldGhvZC5cbiAqKi9cbkJhYmVsRmlzaC5wcm90b3R5cGUuc3RyaW5naWZ5ID0gZnVuY3Rpb24gX3N0cmluZ2lmeShsb2NhbGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vIENvbGxlY3QgdW5pcXVlIGtleXNcbiAgdmFyIHVuaXF1ZSA9IHt9O1xuXG4gIGZvckVhY2godGhpcy5fc3RvcmFnZSwgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgdW5pcXVlW2tleS5zcGxpdChrZXlTZXBhcmF0b3IpWzFdXSA9IHRydWU7XG4gIH0pO1xuXG4gIC8vIENvbGxlY3QgcGhyYXNlcyAod2l0aCBmYWxsYmFja3MpXG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBmb3JFYWNoKHVuaXF1ZSwgZnVuY3Rpb24gKHZhbCwga2V5KSB7XG4gICAgdmFyIGsgPSBzZWFyY2hQaHJhc2VLZXkoc2VsZiwgbG9jYWxlLCBrZXkpO1xuICAgIC8vIGlmIGtleSB3YXMganVzdCBhIGdhcmJhZ2UgZnJvbSBhbm90aGVyXG4gICAgLy8gYW5kIGRvZXNuJ3QgZml0IGludG8gZmFsbGJhY2sgY2hhaW4gZm9yIGN1cnJlbnQgbG9jYWxlIC0gc2tpcCBpdFxuICAgIGlmICghaykgeyByZXR1cm47IH1cbiAgICAvLyBjcmVhdGUgbmFtZXNwYWNlIGlmIG5vdCBleGlzdHNcbiAgICB2YXIgbCA9IHNlbGYuX3N0b3JhZ2Vba10ubG9jYWxlO1xuICAgIGlmICghcmVzdWx0W2xdKSB7IHJlc3VsdFtsXSA9IHt9OyB9XG4gICAgcmVzdWx0W2xdW2tleV0gPSBzZWxmLl9zdG9yYWdlW2tdLnRyYW5zbGF0aW9uO1xuICB9KTtcblxuICB2YXIgb3V0ID0ge1xuICAgIGZhbGxiYWNrOiB7fSxcbiAgICBsb2NhbGVzOiByZXN1bHRcbiAgfTtcblxuICAvLyBHZXQgZmFsbGJhY2sgcnVsZS4gQ3V0IGF1dG8tYWRkZWQgZmFsbGJhY2sgdG8gZGVmYXVsdCBsb2NhbGVcbiAgdmFyIGZhbGxiYWNrID0gKHNlbGYuX2ZhbGxiYWNrc1tsb2NhbGVdIHx8IFtdKS5zbGljZSgwLCAtMSk7XG4gIGlmIChmYWxsYmFjay5sZW5ndGgpIHtcbiAgICBvdXQuZmFsbGJhY2tbbG9jYWxlXSA9IGZhbGxiYWNrO1xuICB9XG5cbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG91dCk7XG59O1xuXG5cbi8qKlxuICogIEJhYmVsRmlzaCNsb2FkKGRhdGEpIC0+IEJhYmVsRmlzaFxuICogIC0gZGF0YSAoT2JqZWN0fFN0cmluZyk6IGRhdGEgZnJvbSBgc3RyaW5naWZ5KClgIG1ldGhvZCwgYXMgb2JqZWN0IG9yIHN0cmluZy5cbiAqXG4gKiAgQmF0Y2ggbG9hZCBwaHJhc2VzIGRhdGEsIHByZXBhcmVkIHdpdGggYHN0cmluZ2lmeSgpYCBtZXRob2QuXG4gKiAgVXNlZnVsIGF0IGJyb3dzZXIgc2lkZS5cbiAqKi9cbkJhYmVsRmlzaC5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uIF9sb2FkKGRhdGEpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmIChpc1N0cmluZyhkYXRhKSkgeyBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTsgfVxuXG4gIGZvckVhY2goZGF0YS5sb2NhbGVzLCBmdW5jdGlvbiAocGhyYXNlcywgbG9jYWxlKSB7XG4gICAgZm9yRWFjaChwaHJhc2VzLCBmdW5jdGlvbiAodHJhbnNsYXRpb24sIGtleSkge1xuICAgICAgc2VsZi5hZGRQaHJhc2UobG9jYWxlLCBrZXksIHRyYW5zbGF0aW9uLCAwKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZm9yRWFjaChkYXRhLmZhbGxiYWNrLCBmdW5jdGlvbiAocnVsZSwgbG9jYWxlKSB7XG4gICAgc2VsZi5zZXRGYWxsYmFjayhsb2NhbGUsIHJ1bGUpO1xuICB9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIGV4cG9ydCBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gQmFiZWxGaXNoO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIC8qXG4gICAqIEdlbmVyYXRlZCBieSBQRUcuanMgMC44LjAuXG4gICAqXG4gICAqIGh0dHA6Ly9wZWdqcy5tYWpkYS5jei9cbiAgICovXG5cbiAgZnVuY3Rpb24gcGVnJHN1YmNsYXNzKGNoaWxkLCBwYXJlbnQpIHtcbiAgICBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH1cbiAgICBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gICAgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFN5bnRheEVycm9yKG1lc3NhZ2UsIGV4cGVjdGVkLCBmb3VuZCwgb2Zmc2V0LCBsaW5lLCBjb2x1bW4pIHtcbiAgICB0aGlzLm1lc3NhZ2UgID0gbWVzc2FnZTtcbiAgICB0aGlzLmV4cGVjdGVkID0gZXhwZWN0ZWQ7XG4gICAgdGhpcy5mb3VuZCAgICA9IGZvdW5kO1xuICAgIHRoaXMub2Zmc2V0ICAgPSBvZmZzZXQ7XG4gICAgdGhpcy5saW5lICAgICA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gICA9IGNvbHVtbjtcblxuICAgIHRoaXMubmFtZSAgICAgPSBcIlN5bnRheEVycm9yXCI7XG4gIH1cblxuICBwZWckc3ViY2xhc3MoU3ludGF4RXJyb3IsIEVycm9yKTtcblxuICBmdW5jdGlvbiBwYXJzZShpbnB1dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB7fSxcblxuICAgICAgICBwZWckRkFJTEVEID0ge30sXG5cbiAgICAgICAgcGVnJHN0YXJ0UnVsZUZ1bmN0aW9ucyA9IHsgc3RhcnQ6IHBlZyRwYXJzZXN0YXJ0IH0sXG4gICAgICAgIHBlZyRzdGFydFJ1bGVGdW5jdGlvbiAgPSBwZWckcGFyc2VzdGFydCxcblxuICAgICAgICBwZWckYzAgPSBbXSxcbiAgICAgICAgcGVnJGMxID0gcGVnJEZBSUxFRCxcbiAgICAgICAgcGVnJGMyID0gXCIoKFwiLFxuICAgICAgICBwZWckYzMgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIoKFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiKChcXFwiXCIgfSxcbiAgICAgICAgcGVnJGM0ID0gXCIpKVwiLFxuICAgICAgICBwZWckYzUgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIpKVwiLCBkZXNjcmlwdGlvbjogXCJcXFwiKSlcXFwiXCIgfSxcbiAgICAgICAgcGVnJGM2ID0gbnVsbCxcbiAgICAgICAgcGVnJGM3ID0gZnVuY3Rpb24oZm9ybXMsIGFuY2hvcikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICAgJ3BsdXJhbCcsXG4gICAgICAgICAgICAgICAgZm9ybXM6ICByZWd1bGFyRm9ybXMoZm9ybXMpLFxuICAgICAgICAgICAgICAgIHN0cmljdDogc3RyaWN0Rm9ybXMoZm9ybXMpLFxuICAgICAgICAgICAgICAgIGFuY2hvcjogYW5jaG9yIHx8ICdjb3VudCdcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjOCA9IFwifFwiLFxuICAgICAgICBwZWckYzkgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJ8XCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJ8XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMTAgPSBmdW5jdGlvbihwYXJ0LCBtb3JlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbcGFydF0uY29uY2F0KG1vcmUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMxMSA9IGZ1bmN0aW9uKHBhcnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtwYXJ0XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMTIgPSBcIj1cIixcbiAgICAgICAgcGVnJGMxMyA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIj1cIiwgZGVzY3JpcHRpb246IFwiXFxcIj1cXFwiXCIgfSxcbiAgICAgICAgcGVnJGMxNCA9IC9eWzAtOV0vLFxuICAgICAgICBwZWckYzE1ID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlswLTldXCIsIGRlc2NyaXB0aW9uOiBcIlswLTldXCIgfSxcbiAgICAgICAgcGVnJGMxNiA9IFwiIFwiLFxuICAgICAgICBwZWckYzE3ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiIFwiLCBkZXNjcmlwdGlvbjogXCJcXFwiIFxcXCJcIiB9LFxuICAgICAgICBwZWckYzE4ID0gZnVuY3Rpb24oc3RyaWN0LCBmb3JtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RyaWN0OiBzdHJpY3Quam9pbignJyksXG4gICAgICAgICAgICAgICAgdGV4dDogZm9ybS5qb2luKCcnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzE5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dCgpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzIwID0gXCJcXFxcXCIsXG4gICAgICAgIHBlZyRjMjEgPSB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCJcXFxcXCIsIGRlc2NyaXB0aW9uOiBcIlxcXCJcXFxcXFxcXFxcXCJcIiB9LFxuICAgICAgICBwZWckYzIyID0gL15bXFxcXHwpKF0vLFxuICAgICAgICBwZWckYzIzID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIltcXFxcXFxcXHwpKF1cIiwgZGVzY3JpcHRpb246IFwiW1xcXFxcXFxcfCkoXVwiIH0sXG4gICAgICAgIHBlZyRjMjQgPSBmdW5jdGlvbihjaGFyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjaGFyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMyNSA9IHZvaWQgMCxcbiAgICAgICAgcGVnJGMyNiA9IHsgdHlwZTogXCJhbnlcIiwgZGVzY3JpcHRpb246IFwiYW55IGNoYXJhY3RlclwiIH0sXG4gICAgICAgIHBlZyRjMjcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMjggPSBcIjpcIixcbiAgICAgICAgcGVnJGMyOSA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIjpcIiwgZGVzY3JpcHRpb246IFwiXFxcIjpcXFwiXCIgfSxcbiAgICAgICAgcGVnJGMzMCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICBwZWckYzMxID0gXCIje1wiLFxuICAgICAgICBwZWckYzMyID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiI3tcIiwgZGVzY3JpcHRpb246IFwiXFxcIiN7XFxcIlwiIH0sXG4gICAgICAgIHBlZyRjMzMgPSBcIn1cIixcbiAgICAgICAgcGVnJGMzNCA9IHsgdHlwZTogXCJsaXRlcmFsXCIsIHZhbHVlOiBcIn1cIiwgZGVzY3JpcHRpb246IFwiXFxcIn1cXFwiXCIgfSxcbiAgICAgICAgcGVnJGMzNSA9IGZ1bmN0aW9uKGFuY2hvcikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICAgJ3ZhcmlhYmxlJyxcbiAgICAgICAgICAgICAgICBhbmNob3I6IGFuY2hvclxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcGVnJGMzNiA9IFwiLlwiLFxuICAgICAgICBwZWckYzM3ID0geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiLlwiLCBkZXNjcmlwdGlvbjogXCJcXFwiLlxcXCJcIiB9LFxuICAgICAgICBwZWckYzM4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjMzkgPSAvXlthLXpBLVpfJF0vLFxuICAgICAgICBwZWckYzQwID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlthLXpBLVpfJF1cIiwgZGVzY3JpcHRpb246IFwiW2EtekEtWl8kXVwiIH0sXG4gICAgICAgIHBlZyRjNDEgPSAvXlthLXpBLVowLTlfJF0vLFxuICAgICAgICBwZWckYzQyID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIlthLXpBLVowLTlfJF1cIiwgZGVzY3JpcHRpb246IFwiW2EtekEtWjAtOV8kXVwiIH0sXG4gICAgICAgIHBlZyRjNDMgPSBmdW5jdGlvbihsYykgeyByZXR1cm4gbGM7IH0sXG4gICAgICAgIHBlZyRjNDQgPSBmdW5jdGlvbihsaXRlcmFsX2NoYXJzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpdGVyYWwnLFxuICAgICAgICAgICAgICAgIHRleHQ6IGxpdGVyYWxfY2hhcnMuam9pbignJylcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHBlZyRjNDUgPSAvXltcXFxcIygpfF0vLFxuICAgICAgICBwZWckYzQ2ID0geyB0eXBlOiBcImNsYXNzXCIsIHZhbHVlOiBcIltcXFxcXFxcXCMoKXxdXCIsIGRlc2NyaXB0aW9uOiBcIltcXFxcXFxcXCMoKXxdXCIgfSxcblxuICAgICAgICBwZWckY3VyclBvcyAgICAgICAgICA9IDAsXG4gICAgICAgIHBlZyRyZXBvcnRlZFBvcyAgICAgID0gMCxcbiAgICAgICAgcGVnJGNhY2hlZFBvcyAgICAgICAgPSAwLFxuICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH0sXG4gICAgICAgIHBlZyRtYXhGYWlsUG9zICAgICAgID0gMCxcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCAgPSBbXSxcbiAgICAgICAgcGVnJHNpbGVudEZhaWxzICAgICAgPSAwLFxuXG4gICAgICAgIHBlZyRyZXN1bHQ7XG5cbiAgICBpZiAoXCJzdGFydFJ1bGVcIiBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAoIShvcHRpb25zLnN0YXJ0UnVsZSBpbiBwZWckc3RhcnRSdWxlRnVuY3Rpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBzdGFydCBwYXJzaW5nIGZyb20gcnVsZSBcXFwiXCIgKyBvcHRpb25zLnN0YXJ0UnVsZSArIFwiXFxcIi5cIik7XG4gICAgICB9XG5cbiAgICAgIHBlZyRzdGFydFJ1bGVGdW5jdGlvbiA9IHBlZyRzdGFydFJ1bGVGdW5jdGlvbnNbb3B0aW9ucy5zdGFydFJ1bGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRleHQoKSB7XG4gICAgICByZXR1cm4gaW5wdXQuc3Vic3RyaW5nKHBlZyRyZXBvcnRlZFBvcywgcGVnJGN1cnJQb3MpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICAgIHJldHVybiBwZWckcmVwb3J0ZWRQb3M7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZSgpIHtcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5saW5lO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbHVtbigpIHtcbiAgICAgIHJldHVybiBwZWckY29tcHV0ZVBvc0RldGFpbHMocGVnJHJlcG9ydGVkUG9zKS5jb2x1bW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwZWN0ZWQoZGVzY3JpcHRpb24pIHtcbiAgICAgIHRocm93IHBlZyRidWlsZEV4Y2VwdGlvbihcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW3sgdHlwZTogXCJvdGhlclwiLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfV0sXG4gICAgICAgIHBlZyRyZXBvcnRlZFBvc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24obWVzc2FnZSwgbnVsbCwgcGVnJHJlcG9ydGVkUG9zKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckY29tcHV0ZVBvc0RldGFpbHMocG9zKSB7XG4gICAgICBmdW5jdGlvbiBhZHZhbmNlKGRldGFpbHMsIHN0YXJ0UG9zLCBlbmRQb3MpIHtcbiAgICAgICAgdmFyIHAsIGNoO1xuXG4gICAgICAgIGZvciAocCA9IHN0YXJ0UG9zOyBwIDwgZW5kUG9zOyBwKyspIHtcbiAgICAgICAgICBjaCA9IGlucHV0LmNoYXJBdChwKTtcbiAgICAgICAgICBpZiAoY2ggPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGlmICghZGV0YWlscy5zZWVuQ1IpIHsgZGV0YWlscy5saW5lKys7IH1cbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gXCJcXHJcIiB8fCBjaCA9PT0gXCJcXHUyMDI4XCIgfHwgY2ggPT09IFwiXFx1MjAyOVwiKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmxpbmUrKztcbiAgICAgICAgICAgIGRldGFpbHMuY29sdW1uID0gMTtcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGV0YWlscy5jb2x1bW4rKztcbiAgICAgICAgICAgIGRldGFpbHMuc2VlbkNSID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwZWckY2FjaGVkUG9zICE9PSBwb3MpIHtcbiAgICAgICAgaWYgKHBlZyRjYWNoZWRQb3MgPiBwb3MpIHtcbiAgICAgICAgICBwZWckY2FjaGVkUG9zID0gMDtcbiAgICAgICAgICBwZWckY2FjaGVkUG9zRGV0YWlscyA9IHsgbGluZTogMSwgY29sdW1uOiAxLCBzZWVuQ1I6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgYWR2YW5jZShwZWckY2FjaGVkUG9zRGV0YWlscywgcGVnJGNhY2hlZFBvcywgcG9zKTtcbiAgICAgICAgcGVnJGNhY2hlZFBvcyA9IHBvcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBlZyRjYWNoZWRQb3NEZXRhaWxzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRmYWlsKGV4cGVjdGVkKSB7XG4gICAgICBpZiAocGVnJGN1cnJQb3MgPCBwZWckbWF4RmFpbFBvcykgeyByZXR1cm47IH1cblxuICAgICAgaWYgKHBlZyRjdXJyUG9zID4gcGVnJG1heEZhaWxQb3MpIHtcbiAgICAgICAgcGVnJG1heEZhaWxQb3MgPSBwZWckY3VyclBvcztcbiAgICAgICAgcGVnJG1heEZhaWxFeHBlY3RlZCA9IFtdO1xuICAgICAgfVxuXG4gICAgICBwZWckbWF4RmFpbEV4cGVjdGVkLnB1c2goZXhwZWN0ZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRidWlsZEV4Y2VwdGlvbihtZXNzYWdlLCBleHBlY3RlZCwgcG9zKSB7XG4gICAgICBmdW5jdGlvbiBjbGVhbnVwRXhwZWN0ZWQoZXhwZWN0ZWQpIHtcbiAgICAgICAgdmFyIGkgPSAxO1xuXG4gICAgICAgIGV4cGVjdGVkLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIGlmIChhLmRlc2NyaXB0aW9uIDwgYi5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYS5kZXNjcmlwdGlvbiA+IGIuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdoaWxlIChpIDwgZXhwZWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKGV4cGVjdGVkW2kgLSAxXSA9PT0gZXhwZWN0ZWRbaV0pIHtcbiAgICAgICAgICAgIGV4cGVjdGVkLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBidWlsZE1lc3NhZ2UoZXhwZWN0ZWQsIGZvdW5kKSB7XG4gICAgICAgIGZ1bmN0aW9uIHN0cmluZ0VzY2FwZShzKSB7XG4gICAgICAgICAgZnVuY3Rpb24gaGV4KGNoKSB7IHJldHVybiBjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpOyB9XG5cbiAgICAgICAgICByZXR1cm4gc1xuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwvZywgICAnXFxcXFxcXFwnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1wiL2csICAgICdcXFxcXCInKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xceDA4L2csICdcXFxcYicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx0L2csICAgJ1xcXFx0JylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4vZywgICAnXFxcXG4nKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcZi9nLCAgICdcXFxcZicpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxyL2csICAgJ1xcXFxyJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bXFx4MDAtXFx4MDdcXHgwQlxceDBFXFx4MEZdL2csIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgwJyArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xceDEwLVxceDFGXFx4ODAtXFx4RkZdL2csICAgIGZ1bmN0aW9uKGNoKSB7IHJldHVybiAnXFxcXHgnICArIGhleChjaCk7IH0pXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcdTAxODAtXFx1MEZGRl0vZywgICAgICAgICBmdW5jdGlvbihjaCkgeyByZXR1cm4gJ1xcXFx1MCcgKyBoZXgoY2gpOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1tcXHUxMDgwLVxcdUZGRkZdL2csICAgICAgICAgZnVuY3Rpb24oY2gpIHsgcmV0dXJuICdcXFxcdScgICsgaGV4KGNoKTsgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwZWN0ZWREZXNjcyA9IG5ldyBBcnJheShleHBlY3RlZC5sZW5ndGgpLFxuICAgICAgICAgICAgZXhwZWN0ZWREZXNjLCBmb3VuZERlc2MsIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV4cGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZXhwZWN0ZWREZXNjc1tpXSA9IGV4cGVjdGVkW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhwZWN0ZWREZXNjID0gZXhwZWN0ZWQubGVuZ3RoID4gMVxuICAgICAgICAgID8gZXhwZWN0ZWREZXNjcy5zbGljZSgwLCAtMSkuam9pbihcIiwgXCIpXG4gICAgICAgICAgICAgICsgXCIgb3IgXCJcbiAgICAgICAgICAgICAgKyBleHBlY3RlZERlc2NzW2V4cGVjdGVkLmxlbmd0aCAtIDFdXG4gICAgICAgICAgOiBleHBlY3RlZERlc2NzWzBdO1xuXG4gICAgICAgIGZvdW5kRGVzYyA9IGZvdW5kID8gXCJcXFwiXCIgKyBzdHJpbmdFc2NhcGUoZm91bmQpICsgXCJcXFwiXCIgOiBcImVuZCBvZiBpbnB1dFwiO1xuXG4gICAgICAgIHJldHVybiBcIkV4cGVjdGVkIFwiICsgZXhwZWN0ZWREZXNjICsgXCIgYnV0IFwiICsgZm91bmREZXNjICsgXCIgZm91bmQuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3NEZXRhaWxzID0gcGVnJGNvbXB1dGVQb3NEZXRhaWxzKHBvcyksXG4gICAgICAgICAgZm91bmQgICAgICA9IHBvcyA8IGlucHV0Lmxlbmd0aCA/IGlucHV0LmNoYXJBdChwb3MpIDogbnVsbDtcblxuICAgICAgaWYgKGV4cGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFudXBFeHBlY3RlZChleHBlY3RlZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgIG1lc3NhZ2UgIT09IG51bGwgPyBtZXNzYWdlIDogYnVpbGRNZXNzYWdlKGV4cGVjdGVkLCBmb3VuZCksXG4gICAgICAgIGV4cGVjdGVkLFxuICAgICAgICBmb3VuZCxcbiAgICAgICAgcG9zLFxuICAgICAgICBwb3NEZXRhaWxzLmxpbmUsXG4gICAgICAgIHBvc0RldGFpbHMuY29sdW1uXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXN0YXJ0KCkge1xuICAgICAgdmFyIHMwLCBzMTtcblxuICAgICAgczAgPSBbXTtcbiAgICAgIHMxID0gcGVnJHBhcnNlbGl0ZXJhbCgpO1xuICAgICAgaWYgKHMxID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMxID0gcGVnJHBhcnNlcGx1cmFsKCk7XG4gICAgICAgIGlmIChzMSA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMxID0gcGVnJHBhcnNldmFyaWFibGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2hpbGUgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHMwLnB1c2goczEpO1xuICAgICAgICBzMSA9IHBlZyRwYXJzZWxpdGVyYWwoKTtcbiAgICAgICAgaWYgKHMxID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczEgPSBwZWckcGFyc2VwbHVyYWwoKTtcbiAgICAgICAgICBpZiAoczEgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMxID0gcGVnJHBhcnNldmFyaWFibGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXBsdXJhbCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQ7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAyKSA9PT0gcGVnJGMyKSB7XG4gICAgICAgIHMxID0gcGVnJGMyO1xuICAgICAgICBwZWckY3VyclBvcyArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMyk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IHBlZyRwYXJzZXBsdXJhbF9mb3JtcygpO1xuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuc3Vic3RyKHBlZyRjdXJyUG9zLCAyKSA9PT0gcGVnJGM0KSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRjNDtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zICs9IDI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGM1KTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlcGx1cmFsX2FuY2hvcigpO1xuICAgICAgICAgICAgaWYgKHM0ID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHM0ID0gcGVnJGM2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMSA9IHBlZyRjNyhzMiwgczQpO1xuICAgICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczAgPSBwZWckYzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VwbHVyYWxfZm9ybXMoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczM7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IHBlZyRwYXJzZXBsdXJhbF9wYXJ0KCk7XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSAxMjQpIHtcbiAgICAgICAgICBzMiA9IHBlZyRjODtcbiAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMyID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjOSk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMyA9IHBlZyRwYXJzZXBsdXJhbF9mb3JtcygpO1xuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICBzMSA9IHBlZyRjMTAoczEsIHMzKTtcbiAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzE7XG4gICAgICB9XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgczEgPSBwZWckcGFyc2VwbHVyYWxfcGFydCgpO1xuICAgICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICBzMSA9IHBlZyRjMTEoczEpO1xuICAgICAgICB9XG4gICAgICAgIHMwID0gczE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VwbHVyYWxfcGFydCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQsIHM1O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA2MSkge1xuICAgICAgICBzMSA9IHBlZyRjMTI7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxMyk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMiA9IFtdO1xuICAgICAgICBpZiAocGVnJGMxNC50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgICAgczMgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxNSk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICB3aGlsZSAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMyLnB1c2goczMpO1xuICAgICAgICAgICAgaWYgKHBlZyRjMTQudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICAgICAgICBzMyA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMxNSk7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczIgPSBwZWckYzE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSAzMikge1xuICAgICAgICAgICAgczMgPSBwZWckYzE2O1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzE3KTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMzID0gcGVnJGM2O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0ID0gW107XG4gICAgICAgICAgICBzNSA9IHBlZyRwYXJzZXBsdXJhbF9jaGFyKCk7XG4gICAgICAgICAgICBpZiAoczUgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgd2hpbGUgKHM1ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgICAgczQucHVzaChzNSk7XG4gICAgICAgICAgICAgICAgczUgPSBwZWckcGFyc2VwbHVyYWxfY2hhcigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzNCA9IHBlZyRjMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICAgICAgczEgPSBwZWckYzE4KHMyLCBzNCk7XG4gICAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgIH1cbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgICBzMSA9IFtdO1xuICAgICAgICBzMiA9IHBlZyRwYXJzZXBsdXJhbF9jaGFyKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHdoaWxlIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczEucHVzaChzMik7XG4gICAgICAgICAgICBzMiA9IHBlZyRwYXJzZXBsdXJhbF9jaGFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMxID0gcGVnJGMxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgIHMxID0gcGVnJGMxOSgpO1xuICAgICAgICB9XG4gICAgICAgIHMwID0gczE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwZWckcGFyc2VwbHVyYWxfY2hhcigpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyO1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LmNoYXJDb2RlQXQocGVnJGN1cnJQb3MpID09PSA5Mikge1xuICAgICAgICBzMSA9IHBlZyRjMjA7XG4gICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzMSA9IHBlZyRGQUlMRUQ7XG4gICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMyMSk7IH1cbiAgICAgIH1cbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBpZiAocGVnJGMyMi50ZXN0KGlucHV0LmNoYXJBdChwZWckY3VyclBvcykpKSB7XG4gICAgICAgICAgczIgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczIgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMyMyk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICBzMSA9IHBlZyRjMjQoczIpO1xuICAgICAgICAgIHMwID0gczE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzE7XG4gICAgICB9XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgICAgczEgPSBwZWckY3VyclBvcztcbiAgICAgICAgcGVnJHNpbGVudEZhaWxzKys7XG4gICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gMTI0KSB7XG4gICAgICAgICAgczIgPSBwZWckYzg7XG4gICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzkpOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMyID09PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgMikgPT09IHBlZyRjNCkge1xuICAgICAgICAgICAgczIgPSBwZWckYzQ7XG4gICAgICAgICAgICBwZWckY3VyclBvcyArPSAyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGVnJHNpbGVudEZhaWxzLS07XG4gICAgICAgIGlmIChzMiA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMxID0gcGVnJGMyNTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMxO1xuICAgICAgICAgIHMxID0gcGVnJGMxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIGlmIChpbnB1dC5sZW5ndGggPiBwZWckY3VyclBvcykge1xuICAgICAgICAgICAgczIgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczIgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzI2KTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgICAgczEgPSBwZWckYzI3KCk7XG4gICAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgICAgczAgPSBwZWckYzE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXBsdXJhbF9hbmNob3IoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMjtcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gNTgpIHtcbiAgICAgICAgczEgPSBwZWckYzI4O1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMjkpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VpZGVudGlmaWVyKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgIHMxID0gcGVnJGMzMChzMik7XG4gICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZXZhcmlhYmxlKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczIsIHMzO1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgaWYgKGlucHV0LnN1YnN0cihwZWckY3VyclBvcywgMikgPT09IHBlZyRjMzEpIHtcbiAgICAgICAgczEgPSBwZWckYzMxO1xuICAgICAgICBwZWckY3VyclBvcyArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMzIpOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBwZWckcGFyc2VpZGVudGlmaWVyKCk7XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KHBlZyRjdXJyUG9zKSA9PT0gMTI1KSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRjMzM7XG4gICAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzMyA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjMzQpOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICBzMSA9IHBlZyRjMzUoczIpO1xuICAgICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICAgIHMwID0gcGVnJGMxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWlkZW50aWZpZXIoKSB7XG4gICAgICB2YXIgczAsIHMxLCBzMiwgczMsIHM0O1xuXG4gICAgICBzMCA9IHBlZyRjdXJyUG9zO1xuICAgICAgczEgPSBwZWckcGFyc2VpZGVudGlmaWVyX3BhcnQoKTtcbiAgICAgIGlmIChzMSAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDQ2KSB7XG4gICAgICAgICAgczIgPSBwZWckYzM2O1xuICAgICAgICAgIHBlZyRjdXJyUG9zKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgczIgPSBwZWckRkFJTEVEO1xuICAgICAgICAgIGlmIChwZWckc2lsZW50RmFpbHMgPT09IDApIHsgcGVnJGZhaWwocGVnJGMzNyk7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBzMyA9IFtdO1xuICAgICAgICAgIHM0ID0gcGVnJHBhcnNlaWRlbnRpZmllcigpO1xuICAgICAgICAgIGlmIChzNCAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgd2hpbGUgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgICAgIHMzLnB1c2goczQpO1xuICAgICAgICAgICAgICBzNCA9IHBlZyRwYXJzZWlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczMgPSBwZWckYzE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzMyAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgICAgICBzMSA9IHBlZyRjMzgoKTtcbiAgICAgICAgICAgIHMwID0gczE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMDtcbiAgICAgICAgczAgPSBwZWckYzE7XG4gICAgICB9XG4gICAgICBpZiAoczAgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczAgPSBwZWckcGFyc2VpZGVudGlmaWVyX3BhcnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHMwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBlZyRwYXJzZWlkZW50aWZpZXJfcGFydCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMztcblxuICAgICAgczAgPSBwZWckY3VyclBvcztcbiAgICAgIGlmIChwZWckYzM5LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgczEgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckRkFJTEVEO1xuICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDApOyB9XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczIgPSBbXTtcbiAgICAgICAgaWYgKHBlZyRjNDEudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICAgIHMzID0gaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKTtcbiAgICAgICAgICBwZWckY3VyclBvcysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHMzID0gcGVnJEZBSUxFRDtcbiAgICAgICAgICBpZiAocGVnJHNpbGVudEZhaWxzID09PSAwKSB7IHBlZyRmYWlsKHBlZyRjNDIpOyB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHMzICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgczIucHVzaChzMyk7XG4gICAgICAgICAgaWYgKHBlZyRjNDEudGVzdChpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpKSkge1xuICAgICAgICAgICAgczMgPSBpbnB1dC5jaGFyQXQocGVnJGN1cnJQb3MpO1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgczMgPSBwZWckRkFJTEVEO1xuICAgICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQyKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoczIgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICBwZWckcmVwb3J0ZWRQb3MgPSBzMDtcbiAgICAgICAgICBzMSA9IHBlZyRjMjcoKTtcbiAgICAgICAgICBzMCA9IHMxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgICAgczAgPSBwZWckYzE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczA7XG4gICAgICAgIHMwID0gcGVnJGMxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlbGl0ZXJhbCgpIHtcbiAgICAgIHZhciBzMCwgczEsIHMyLCBzMywgczQ7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBzMSA9IFtdO1xuICAgICAgczIgPSBwZWckY3VyclBvcztcbiAgICAgIHMzID0gcGVnJGN1cnJQb3M7XG4gICAgICBwZWckc2lsZW50RmFpbHMrKztcbiAgICAgIHM0ID0gcGVnJHBhcnNlcGx1cmFsKCk7XG4gICAgICBpZiAoczQgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczQgPSBwZWckcGFyc2V2YXJpYWJsZSgpO1xuICAgICAgfVxuICAgICAgcGVnJHNpbGVudEZhaWxzLS07XG4gICAgICBpZiAoczQgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczMgPSBwZWckYzI1O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgczMgPSBwZWckYzE7XG4gICAgICB9XG4gICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgczQgPSBwZWckcGFyc2VsaXRlcmFsX2NoYXIoKTtcbiAgICAgICAgaWYgKHM0ICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczI7XG4gICAgICAgICAgczMgPSBwZWckYzQzKHM0KTtcbiAgICAgICAgICBzMiA9IHMzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgICAgczIgPSBwZWckYzE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlZyRjdXJyUG9zID0gczI7XG4gICAgICAgIHMyID0gcGVnJGMxO1xuICAgICAgfVxuICAgICAgaWYgKHMyICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIHdoaWxlIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHMxLnB1c2goczIpO1xuICAgICAgICAgIHMyID0gcGVnJGN1cnJQb3M7XG4gICAgICAgICAgczMgPSBwZWckY3VyclBvcztcbiAgICAgICAgICBwZWckc2lsZW50RmFpbHMrKztcbiAgICAgICAgICBzNCA9IHBlZyRwYXJzZXBsdXJhbCgpO1xuICAgICAgICAgIGlmIChzNCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgICAgczQgPSBwZWckcGFyc2V2YXJpYWJsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwZWckc2lsZW50RmFpbHMtLTtcbiAgICAgICAgICBpZiAoczQgPT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHMzID0gcGVnJGMyNTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMztcbiAgICAgICAgICAgIHMzID0gcGVnJGMxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoczMgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgIHM0ID0gcGVnJHBhcnNlbGl0ZXJhbF9jaGFyKCk7XG4gICAgICAgICAgICBpZiAoczQgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczI7XG4gICAgICAgICAgICAgIHMzID0gcGVnJGM0MyhzNCk7XG4gICAgICAgICAgICAgIHMyID0gczM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZWckY3VyclBvcyA9IHMyO1xuICAgICAgICAgICAgICBzMiA9IHBlZyRjMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGVnJGN1cnJQb3MgPSBzMjtcbiAgICAgICAgICAgIHMyID0gcGVnJGMxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgczEgPSBwZWckYzE7XG4gICAgICB9XG4gICAgICBpZiAoczEgIT09IHBlZyRGQUlMRUQpIHtcbiAgICAgICAgcGVnJHJlcG9ydGVkUG9zID0gczA7XG4gICAgICAgIHMxID0gcGVnJGM0NChzMSk7XG4gICAgICB9XG4gICAgICBzMCA9IHMxO1xuXG4gICAgICByZXR1cm4gczA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVnJHBhcnNlbGl0ZXJhbF9jaGFyKCkge1xuICAgICAgdmFyIHMwLCBzMSwgczI7XG5cbiAgICAgIHMwID0gcGVnJGN1cnJQb3M7XG4gICAgICBpZiAoaW5wdXQuY2hhckNvZGVBdChwZWckY3VyclBvcykgPT09IDkyKSB7XG4gICAgICAgIHMxID0gcGVnJGMyMDtcbiAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHMxID0gcGVnJEZBSUxFRDtcbiAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzIxKTsgfVxuICAgICAgfVxuICAgICAgaWYgKHMxICE9PSBwZWckRkFJTEVEKSB7XG4gICAgICAgIGlmIChwZWckYzQ1LnRlc3QoaW5wdXQuY2hhckF0KHBlZyRjdXJyUG9zKSkpIHtcbiAgICAgICAgICBzMiA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMiA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzQ2KTsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzMiAhPT0gcGVnJEZBSUxFRCkge1xuICAgICAgICAgIHBlZyRyZXBvcnRlZFBvcyA9IHMwO1xuICAgICAgICAgIHMxID0gcGVnJGMyNChzMik7XG4gICAgICAgICAgczAgPSBzMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICAgIHMwID0gcGVnJGMxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZWckY3VyclBvcyA9IHMwO1xuICAgICAgICBzMCA9IHBlZyRjMTtcbiAgICAgIH1cbiAgICAgIGlmIChzMCA9PT0gcGVnJEZBSUxFRCkge1xuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gcGVnJGN1cnJQb3MpIHtcbiAgICAgICAgICBzMCA9IGlucHV0LmNoYXJBdChwZWckY3VyclBvcyk7XG4gICAgICAgICAgcGVnJGN1cnJQb3MrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzMCA9IHBlZyRGQUlMRUQ7XG4gICAgICAgICAgaWYgKHBlZyRzaWxlbnRGYWlscyA9PT0gMCkgeyBwZWckZmFpbChwZWckYzI2KTsgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzMDtcbiAgICB9XG5cblxuICAgICAgZnVuY3Rpb24gcmVndWxhckZvcm1zKGZvcm1zKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGZvcm1zW2ldLnN0cmljdCA9PT0gdW5kZWZpbmVkKSB7IHJlc3VsdC5wdXNoKGZvcm1zW2ldLnRleHQpOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHN0cmljdEZvcm1zKGZvcm1zKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGZvcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGZvcm1zW2ldLnN0cmljdCAhPT0gdW5kZWZpbmVkKSB7IHJlc3VsdFtmb3Jtc1tpXS5zdHJpY3RdID0gZm9ybXNbaV0udGV4dDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cblxuICAgIHBlZyRyZXN1bHQgPSBwZWckc3RhcnRSdWxlRnVuY3Rpb24oKTtcblxuICAgIGlmIChwZWckcmVzdWx0ICE9PSBwZWckRkFJTEVEICYmIHBlZyRjdXJyUG9zID09PSBpbnB1dC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBwZWckcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGVnJHJlc3VsdCAhPT0gcGVnJEZBSUxFRCAmJiBwZWckY3VyclBvcyA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICBwZWckZmFpbCh7IHR5cGU6IFwiZW5kXCIsIGRlc2NyaXB0aW9uOiBcImVuZCBvZiBpbnB1dFwiIH0pO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBwZWckYnVpbGRFeGNlcHRpb24obnVsbCwgcGVnJG1heEZhaWxFeHBlY3RlZCwgcGVnJG1heEZhaWxQb3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgU3ludGF4RXJyb3I6IFN5bnRheEVycm9yLFxuICAgIHBhcnNlOiAgICAgICBwYXJzZVxuICB9O1xufSkoKTtcbiIsIi8qXG4gKiBQbHVyYWwgZnVuY3Rpb25zIHN1cHBvcnQgKGNhcmRpbmFsICYgb3JkaW5hbCBmb3JtcylcbiAqXG4gKiBBdXRvZ2VuZXJhdGVkIGZyb20gQ0xEUjpcbiAqXG4gKiAgIFZlcnNpb246ICAgICAgICAgMzZcbiAqICAgVW5pY29kZSB2ZXJzaW9uOiAxMi4xLjBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLy8gcGx1cmFsaXplcnMgY2FjaGVcbnZhciBzID0ge307XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShsb2MpIHtcbiAgdmFyIGw7XG4gIGlmIChzW2xvY10pIHsgcmV0dXJuIGxvYzsgfVxuICBsID0gbG9jLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJyk7XG4gIGlmIChzW2xdKSB7IHJldHVybiBsOyB9XG4gIGwgPSBsLnNwbGl0KCctJylbMF07XG4gIGlmIChzW2xdKSB7IHJldHVybiBsOyB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBmb3Jtcyhsb2MpIHtcbiAgdmFyIGwgPSBub3JtYWxpemUobG9jKTtcbiAgcmV0dXJuIHNbbF0gPyBzW2xdLmMgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKGxvYywgdmFsdWUpIHtcbiAgdmFyIGwgPSBub3JtYWxpemUobG9jKTtcbiAgaWYgKCFsKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgaWYgKCFzW2xdLmNGbikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHN2YWwgID0gU3RyaW5nKHZhbHVlKSxcbiAgICAgIGYgPSBzdmFsLmluZGV4T2YoJy4nKSA8IDAgPyAnJyA6IHN2YWwuc3BsaXQoJy4nKVsxXSxcbiAgICAgIHYgPSBmLmxlbmd0aCxcbiAgICAgIG4gPSArdmFsdWUsXG4gICAgICBpID0gKyhzdmFsLnNwbGl0KCcuJylbMF0pLFxuICAgICAgdCA9IGYubGVuZ3RoID09PSAwID8gMCA6ICtmLnJlcGxhY2UoLzArJC8sICcnKTtcblxuICByZXR1cm4gc1tsXS5jRm4obiwgaSwgdiwgK2YsIHQpO1xufVxuXG5mdW5jdGlvbiBwbHVyYWwobG9jLCB2YWx1ZSkge1xuICB2YXIgbCA9IG5vcm1hbGl6ZShsb2MpO1xuICBpZiAoIWwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gc1tsXS5jW2luZGV4T2YobCwgdmFsdWUpXTtcbn1cblxuXG5mdW5jdGlvbiBvX2Zvcm1zKGxvYykge1xuICB2YXIgbCA9IG5vcm1hbGl6ZShsb2MpO1xuICByZXR1cm4gc1tsXSA/IHNbbF0ubyA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIG9faW5kZXhPZihsb2MsIHZhbHVlKSB7XG4gIHZhciBsID0gbm9ybWFsaXplKGxvYyk7XG4gIGlmICghbCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGlmICghc1tsXS5vRm4pIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciBzdmFsICA9IFN0cmluZyh2YWx1ZSksXG4gICAgICBmID0gc3ZhbC5pbmRleE9mKCcuJykgPCAwID8gJycgOiBzdmFsLnNwbGl0KCcuJylbMV0sXG4gICAgICB2ID0gZi5sZW5ndGgsXG4gICAgICBuID0gK3ZhbHVlLFxuICAgICAgaSA9ICsoc3ZhbC5zcGxpdCgnLicpWzBdKSxcbiAgICAgIHQgPSBmLmxlbmd0aCA9PT0gMCA/IDAgOiArZi5yZXBsYWNlKC8wKyQvLCAnJyk7XG5cbiAgcmV0dXJuIHNbbF0ub0ZuKG4sIGksIHYsICtmLCB0KTtcbn1cblxuZnVuY3Rpb24gb3JkaW5hbChsb2MsIHZhbHVlKSB7XG4gIHZhciBsID0gbm9ybWFsaXplKGxvYyk7XG4gIGlmICghc1tsXSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBzW2xdLm9bb19pbmRleE9mKGwsIHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzICAgICAgICAgICAgICAgICAgPSBwbHVyYWw7XG5tb2R1bGUuZXhwb3J0cy5pbmRleE9mICAgICAgICAgID0gaW5kZXhPZjtcbm1vZHVsZS5leHBvcnRzLmZvcm1zICAgICAgICAgICAgPSBmb3Jtcztcbm1vZHVsZS5leHBvcnRzLm9yZGluYWwgICAgICAgICAgPSBvcmRpbmFsO1xubW9kdWxlLmV4cG9ydHMub3JkaW5hbC5pbmRleE9mICA9IG9faW5kZXhPZjtcbm1vZHVsZS5leHBvcnRzLm9yZGluYWwuZm9ybXMgICAgPSBvX2Zvcm1zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbnZhciBGT1JNUyA9IFsgJ3plcm8nLCAnb25lJywgJ3R3bycsICdmZXcnLCAnbWFueScsICdvdGhlcicgXTtcblxuZnVuY3Rpb24gdW5wYWNrKGkpIHsgcmV0dXJuIEZPUk1TW2ldOyB9XG5cbi8vIGFkZHMgZ2l2ZW4gYHJ1bGVgIHBsdXJhbGl6ZXIgZm9yIGdpdmVuIGBsb2NhbGVzYCBpbnRvIGBzdG9yYWdlYFxuZnVuY3Rpb24gYWRkKGxvY2FsZXMsIHJ1bGUpIHtcbiAgdmFyIGk7XG5cbiAgcnVsZS5jID0gcnVsZS5jID8gcnVsZS5jLm1hcCh1bnBhY2spIDogWyAnb3RoZXInIF07XG4gIHJ1bGUubyA9IHJ1bGUubyA/IHJ1bGUuby5tYXAodW5wYWNrKSA6IFsgJ290aGVyJyBdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsb2NhbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgc1tsb2NhbGVzW2ldXSA9IHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gQih4LCB5LCB2YWwpIHsgcmV0dXJuIHggPD0gdmFsICYmIHZhbCA8PSB5ICYmIHZhbCAlIDEgPT09IDA7IH1cbmZ1bmN0aW9uIElOKHNldCwgdmFsKSB7IHJldHVybiBzZXQuaW5kZXhPZih2YWwpID49IDA7IH1cblxuXG5hZGQoWyAnYWYnLCAnYW4nLCAnYXNhJywgJ2JlbScsICdiZXonLCAnYmcnLCAnYnJ4JywgJ2NlJywgJ2NnZycsICdjaHInLCAnY2tiJywgJ2R2JywgJ2VlJywgJ2VsJywgJ2VvJywgJ2VzJywgJ2V1JywgJ2ZvJywgJ2Z1cicsICdnc3cnLCAnaGEnLCAnaGF3JywgJ2pnbycsICdqbWMnLCAna2FqJywgJ2tjZycsICdra2onLCAna2wnLCAna3MnLCAna3NiJywgJ2t1JywgJ2t5JywgJ2xiJywgJ2xnJywgJ21hcycsICdtZ28nLCAnbWwnLCAnbW4nLCAnbmFoJywgJ25iJywgJ25kJywgJ25uJywgJ25uaCcsICdubycsICducicsICdueScsICdueW4nLCAnb20nLCAnb3MnLCAncGFwJywgJ3BzJywgJ3JtJywgJ3JvZicsICdyd2snLCAnc2FxJywgJ3NkJywgJ3NkaCcsICdzZWgnLCAnc24nLCAnc28nLCAnc3MnLCAnc3N5JywgJ3N0JywgJ3N5cicsICd0YScsICd0ZScsICd0ZW8nLCAndGlnJywgJ3RuJywgJ3RyJywgJ3RzJywgJ3VnJywgJ3V6JywgJ3ZlJywgJ3ZvJywgJ3Z1bicsICd3YWUnLCAneGgnLCAneG9nJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gPT09IDEgPyAwIDogMTtcbiAgfVxufSk7XG5cbmFkZChbICdhaycsICdiaG8nLCAnZ3V3JywgJ2xuJywgJ21nJywgJ25zbycsICdwYScsICd0aScsICd3YScgXSwge1xuICBjOiBbIDEsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBCKDAsIDEsIG4pID8gMCA6IDE7XG4gIH1cbn0pO1xuXG5hZGQoWyAnYW0nLCAnZmEnLCAna24nLCAnenUnIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGkpIHtcbiAgICByZXR1cm4gaSA9PT0gMCB8fCBuID09PSAxID8gMCA6IDE7XG4gIH1cbn0pO1xuXG5hZGQoWyAnYXInLCAnYXJzJyBdLCB7XG4gIGM6IFsgMCwgMSwgMiwgMywgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIG4xMDAgPSBuICUgMTAwO1xuICAgIHJldHVybiBuID09PSAwID8gMCA6IG4gPT09IDEgPyAxIDogbiA9PT0gMiA/IDIgOiBCKDMsIDEwLCBuMTAwKSA/IDMgOiBCKDExLCA5OSwgbjEwMCkgPyA0IDogNTtcbiAgfVxufSk7XG5cbmFkZChbICdhcycsICdibicgXSwge1xuICBjOiBbIDEsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSkge1xuICAgIHJldHVybiBpID09PSAwIHx8IG4gPT09IDEgPyAwIDogMTtcbiAgfSxcbiAgbzogWyAxLCAyLCAzLCA0LCA1IF0sXG4gIG9GbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gSU4oWyAxLCA1LCA3LCA4LCA5LCAxMCBdLCBuKSA/IDAgOiBJTihbIDIsIDMgXSwgbikgPyAxIDogbiA9PT0gNCA/IDIgOiBuID09PSA2ID8gMyA6IDQ7XG4gIH1cbn0pO1xuXG5hZGQoWyAnYXN0JywgJ2RlJywgJ2V0JywgJ2ZpJywgJ2Z5JywgJ2dsJywgJ2lhJywgJ2lvJywgJ2ppJywgJ25sJywgJ3B0LXB0JywgJ3N3JywgJ3VyJywgJ3lpJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2KSB7XG4gICAgcmV0dXJuIGkgPT09IDEgJiYgdiA9PT0gMCA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ2F6JyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gPT09IDEgPyAwIDogMTtcbiAgfSxcbiAgbzogWyAxLCAzLCA0LCA1IF0sXG4gIG9GbjogZnVuY3Rpb24gKG4sIGkpIHtcbiAgICB2YXIgaTEwID0gaSAlIDEwLCBpMTAwID0gaSAlIDEwMCwgaTEwMDAgPSBpICUgMTAwMDtcbiAgICByZXR1cm4gSU4oWyAxLCAyLCA1LCA3LCA4IF0sIGkxMCkgfHwgSU4oWyAyMCwgNTAsIDcwLCA4MCBdLCBpMTAwKSA/IDAgOiBJTihbIDMsIDQgXSwgaTEwKSB8fCBJTihbIDEwMCwgMjAwLCAzMDAsIDQwMCwgNTAwLCA2MDAsIDcwMCwgODAwLCA5MDAgXSwgaTEwMDApID8gMSA6IGkgPT09IDAgfHwgaTEwID09PSA2IHx8IElOKFsgNDAsIDYwLCA5MCBdLCBpMTAwKSA/IDIgOiAzO1xuICB9XG59KTtcblxuYWRkKFsgJ2JlJyBdLCB7XG4gIGM6IFsgMSwgMywgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIG4xMCA9IG4gJSAxMCwgbjEwMCA9IG4gJSAxMDA7XG4gICAgcmV0dXJuIG4xMCA9PT0gMSAmJiBuMTAwICE9PSAxMSA/IDAgOiBCKDIsIDQsIG4xMCkgJiYgIUIoMTIsIDE0LCBuMTAwKSA/IDEgOiBuMTAgPT09IDAgfHwgQig1LCA5LCBuMTApIHx8IEIoMTEsIDE0LCBuMTAwKSA/IDIgOiAzO1xuICB9LFxuICBvOiBbIDMsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHZhciBuMTAgPSBuICUgMTAsIG4xMDAgPSBuICUgMTAwO1xuICAgIHJldHVybiBJTihbIDIsIDMgXSwgbjEwKSAmJiAhSU4oWyAxMiwgMTMgXSwgbjEwMCkgPyAwIDogMTtcbiAgfVxufSk7XG5cbmFkZChbICdibScsICdibycsICdkeicsICdpZCcsICdpZycsICdpaScsICdpbicsICdqYScsICdqYm8nLCAnanYnLCAnancnLCAna2RlJywgJ2tlYScsICdrbScsICdrbycsICdsa3QnLCAnbXknLCAnbnFvJywgJ29zYScsICdyb290JywgJ3NhaCcsICdzZXMnLCAnc2cnLCAnc3UnLCAndGgnLCAndG8nLCAnd28nLCAneW8nLCAneXVlJywgJ3poJyBdLCB7XG59KTtcblxuYWRkKFsgJ2JyJyBdLCB7XG4gIGM6IFsgMSwgMiwgMywgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIG4xMCA9IG4gJSAxMCwgbjEwMCA9IG4gJSAxMDAsIG4xMDAwMDAwID0gbiAlIDEwMDAwMDA7XG4gICAgcmV0dXJuIG4xMCA9PT0gMSAmJiAhSU4oWyAxMSwgNzEsIDkxIF0sIG4xMDApID8gMCA6IG4xMCA9PT0gMiAmJiAhSU4oWyAxMiwgNzIsIDkyIF0sIG4xMDApID8gMSA6IChCKDMsIDQsIG4xMCkgfHwgbjEwID09PSA5KSAmJiAoIUIoMTAsIDE5LCBuMTAwKSAmJiAhQig3MCwgNzksIG4xMDApICYmICFCKDkwLCA5OSwgbjEwMCkpID8gMiA6IG4gIT09IDAgJiYgbjEwMDAwMDAgPT09IDAgPyAzIDogNDtcbiAgfVxufSk7XG5cbmFkZChbICdicycsICdocicsICdzaCcsICdzcicgXSwge1xuICBjOiBbIDEsIDMsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSwgdiwgZikge1xuICAgIHZhciBpMTAgPSBpICUgMTAsIGkxMDAgPSBpICUgMTAwLCBmMTAgPSBmICUgMTAsIGYxMDAgPSBmICUgMTAwO1xuICAgIHJldHVybiB2ID09PSAwICYmIGkxMCA9PT0gMSAmJiBpMTAwICE9PSAxMSB8fCBmMTAgPT09IDEgJiYgZjEwMCAhPT0gMTEgPyAwIDogdiA9PT0gMCAmJiBCKDIsIDQsIGkxMCkgJiYgIUIoMTIsIDE0LCBpMTAwKSB8fCBCKDIsIDQsIGYxMCkgJiYgIUIoMTIsIDE0LCBmMTAwKSA/IDEgOiAyO1xuICB9XG59KTtcblxuYWRkKFsgJ2NhJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2KSB7XG4gICAgcmV0dXJuIGkgPT09IDEgJiYgdiA9PT0gMCA/IDAgOiAxO1xuICB9LFxuICBvOiBbIDEsIDIsIDMsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBJTihbIDEsIDMgXSwgbikgPyAwIDogbiA9PT0gMiA/IDEgOiBuID09PSA0ID8gMiA6IDM7XG4gIH1cbn0pO1xuXG5hZGQoWyAnY2ViJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2LCBmKSB7XG4gICAgdmFyIGkxMCA9IGkgJSAxMCwgZjEwID0gZiAlIDEwO1xuICAgIHJldHVybiB2ID09PSAwICYmIElOKFsgMSwgMiwgMyBdLCBpKSB8fCB2ID09PSAwICYmICFJTihbIDQsIDYsIDkgXSwgaTEwKSB8fCB2ICE9PSAwICYmICFJTihbIDQsIDYsIDkgXSwgZjEwKSA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ2NzJywgJ3NrJyBdLCB7XG4gIGM6IFsgMSwgMywgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2KSB7XG4gICAgcmV0dXJuIGkgPT09IDEgJiYgdiA9PT0gMCA/IDAgOiBCKDIsIDQsIGkpICYmIHYgPT09IDAgPyAxIDogdiAhPT0gMCA/IDIgOiAzO1xuICB9XG59KTtcblxuYWRkKFsgJ2N5JyBdLCB7XG4gIGM6IFsgMCwgMSwgMiwgMywgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gPT09IDAgPyAwIDogbiA9PT0gMSA/IDEgOiBuID09PSAyID8gMiA6IG4gPT09IDMgPyAzIDogbiA9PT0gNiA/IDQgOiA1O1xuICB9LFxuICBvOiBbIDAsIDEsIDIsIDMsIDQsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBJTihbIDAsIDcsIDgsIDkgXSwgbikgPyAwIDogbiA9PT0gMSA/IDEgOiBuID09PSAyID8gMiA6IElOKFsgMywgNCBdLCBuKSA/IDMgOiBJTihbIDUsIDYgXSwgbikgPyA0IDogNTtcbiAgfVxufSk7XG5cbmFkZChbICdkYScgXSwge1xuICBjOiBbIDEsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSwgdiwgZiwgdCkge1xuICAgIHJldHVybiBuID09PSAxIHx8IHQgIT09IDAgJiYgSU4oWyAwLCAxIF0sIGkpID8gMCA6IDE7XG4gIH1cbn0pO1xuXG5hZGQoWyAnZHNiJywgJ2hzYicgXSwge1xuICBjOiBbIDEsIDIsIDMsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSwgdiwgZikge1xuICAgIHZhciBpMTAwID0gaSAlIDEwMCwgZjEwMCA9IGYgJSAxMDA7XG4gICAgcmV0dXJuIHYgPT09IDAgJiYgaTEwMCA9PT0gMSB8fCBmMTAwID09PSAxID8gMCA6IHYgPT09IDAgJiYgaTEwMCA9PT0gMiB8fCBmMTAwID09PSAyID8gMSA6IHYgPT09IDAgJiYgQigzLCA0LCBpMTAwKSB8fCBCKDMsIDQsIGYxMDApID8gMiA6IDM7XG4gIH1cbn0pO1xuXG5hZGQoWyAnZW4nIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGksIHYpIHtcbiAgICByZXR1cm4gaSA9PT0gMSAmJiB2ID09PSAwID8gMCA6IDE7XG4gIH0sXG4gIG86IFsgMSwgMiwgMywgNSBdLFxuICBvRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIG4xMCA9IG4gJSAxMCwgbjEwMCA9IG4gJSAxMDA7XG4gICAgcmV0dXJuIG4xMCA9PT0gMSAmJiBuMTAwICE9PSAxMSA/IDAgOiBuMTAgPT09IDIgJiYgbjEwMCAhPT0gMTIgPyAxIDogbjEwID09PSAzICYmIG4xMDAgIT09IDEzID8gMiA6IDM7XG4gIH1cbn0pO1xuXG5hZGQoWyAnZmYnLCAna2FiJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgcmV0dXJuIElOKFsgMCwgMSBdLCBpKSA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ2ZpbCcsICd0bCcgXSwge1xuICBjOiBbIDEsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSwgdiwgZikge1xuICAgIHZhciBpMTAgPSBpICUgMTAsIGYxMCA9IGYgJSAxMDtcbiAgICByZXR1cm4gdiA9PT0gMCAmJiBJTihbIDEsIDIsIDMgXSwgaSkgfHwgdiA9PT0gMCAmJiAhSU4oWyA0LCA2LCA5IF0sIGkxMCkgfHwgdiAhPT0gMCAmJiAhSU4oWyA0LCA2LCA5IF0sIGYxMCkgPyAwIDogMTtcbiAgfSxcbiAgbzogWyAxLCA1IF0sXG4gIG9GbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ2ZyJywgJ2h5JyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgcmV0dXJuIElOKFsgMCwgMSBdLCBpKSA/IDAgOiAxO1xuICB9LFxuICBvOiBbIDEsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuID09PSAxID8gMCA6IDE7XG4gIH1cbn0pO1xuXG5hZGQoWyAnZ2EnIF0sIHtcbiAgYzogWyAxLCAyLCAzLCA0LCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiBuID09PSAyID8gMSA6IEIoMywgNiwgbikgPyAyIDogQig3LCAxMCwgbikgPyAzIDogNDtcbiAgfSxcbiAgbzogWyAxLCA1IF0sXG4gIG9GbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ2dkJyBdLCB7XG4gIGM6IFsgMSwgMiwgMywgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIElOKFsgMSwgMTEgXSwgbikgPyAwIDogSU4oWyAyLCAxMiBdLCBuKSA/IDEgOiAoQigzLCAxMCwgbikgfHwgQigxMywgMTksIG4pKSA/IDIgOiAzO1xuICB9LFxuICBvOiBbIDEsIDIsIDMsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBJTihbIDEsIDExIF0sIG4pID8gMCA6IElOKFsgMiwgMTIgXSwgbikgPyAxIDogSU4oWyAzLCAxMyBdLCBuKSA/IDIgOiAzO1xuICB9XG59KTtcblxuYWRkKFsgJ2d1JywgJ2hpJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgcmV0dXJuIGkgPT09IDAgfHwgbiA9PT0gMSA/IDAgOiAxO1xuICB9LFxuICBvOiBbIDEsIDIsIDMsIDQsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuID09PSAxID8gMCA6IElOKFsgMiwgMyBdLCBuKSA/IDEgOiBuID09PSA0ID8gMiA6IG4gPT09IDYgPyAzIDogNDtcbiAgfVxufSk7XG5cbmFkZChbICdndicgXSwge1xuICBjOiBbIDEsIDIsIDMsIDQsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSwgdikge1xuICAgIHZhciBpMTAgPSBpICUgMTAsIGkxMDAgPSBpICUgMTAwO1xuICAgIHJldHVybiB2ID09PSAwICYmIGkxMCA9PT0gMSA/IDAgOiB2ID09PSAwICYmIGkxMCA9PT0gMiA/IDEgOiB2ID09PSAwICYmIElOKFsgMCwgMjAsIDQwLCA2MCwgODAgXSwgaTEwMCkgPyAyIDogdiAhPT0gMCA/IDMgOiA0O1xuICB9XG59KTtcblxuYWRkKFsgJ2hlJywgJ2l3JyBdLCB7XG4gIGM6IFsgMSwgMiwgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2KSB7XG4gICAgdmFyIG4xMCA9IG4gJSAxMDtcbiAgICByZXR1cm4gaSA9PT0gMSAmJiB2ID09PSAwID8gMCA6IGkgPT09IDIgJiYgdiA9PT0gMCA/IDEgOiB2ID09PSAwICYmICFCKDAsIDEwLCBuKSAmJiBuMTAgPT09IDAgPyAyIDogMztcbiAgfVxufSk7XG5cbmFkZChbICdodScgXSwge1xuICBjOiBbIDEsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuID09PSAxID8gMCA6IDE7XG4gIH0sXG4gIG86IFsgMSwgNSBdLFxuICBvRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIElOKFsgMSwgNSBdLCBuKSA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ2lzJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2LCBmLCB0KSB7XG4gICAgdmFyIGkxMCA9IGkgJSAxMCwgaTEwMCA9IGkgJSAxMDA7XG4gICAgcmV0dXJuIHQgPT09IDAgJiYgaTEwID09PSAxICYmIGkxMDAgIT09IDExIHx8IHQgIT09IDAgPyAwIDogMTtcbiAgfVxufSk7XG5cbmFkZChbICdpdCcsICdzYycsICdzY24nIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGksIHYpIHtcbiAgICByZXR1cm4gaSA9PT0gMSAmJiB2ID09PSAwID8gMCA6IDE7XG4gIH0sXG4gIG86IFsgNCwgNSBdLFxuICBvRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIElOKFsgMTEsIDgsIDgwLCA4MDAgXSwgbikgPyAwIDogMTtcbiAgfVxufSk7XG5cbmFkZChbICdpdScsICduYXEnLCAnc2UnLCAnc21hJywgJ3NtaScsICdzbWonLCAnc21uJywgJ3NtcycgXSwge1xuICBjOiBbIDEsIDIsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuID09PSAxID8gMCA6IG4gPT09IDIgPyAxIDogMjtcbiAgfVxufSk7XG5cbmFkZChbICdrYScgXSwge1xuICBjOiBbIDEsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuID09PSAxID8gMCA6IDE7XG4gIH0sXG4gIG86IFsgMSwgNCwgNSBdLFxuICBvRm46IGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgdmFyIGkxMDAgPSBpICUgMTAwO1xuICAgIHJldHVybiBpID09PSAxID8gMCA6IGkgPT09IDAgfHwgKEIoMiwgMjAsIGkxMDApIHx8IGkxMDAgPT09IDQwIHx8IGkxMDAgPT09IDYwIHx8IGkxMDAgPT09IDgwKSA/IDEgOiAyO1xuICB9XG59KTtcblxuYWRkKFsgJ2trJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gPT09IDEgPyAwIDogMTtcbiAgfSxcbiAgbzogWyA0LCA1IF0sXG4gIG9GbjogZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgbjEwID0gbiAlIDEwO1xuICAgIHJldHVybiBuMTAgPT09IDYgfHwgbjEwID09PSA5IHx8IG4xMCA9PT0gMCAmJiBuICE9PSAwID8gMCA6IDE7XG4gIH1cbn0pO1xuXG5hZGQoWyAna3NoJyBdLCB7XG4gIGM6IFsgMCwgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gPT09IDAgPyAwIDogbiA9PT0gMSA/IDEgOiAyO1xuICB9XG59KTtcblxuYWRkKFsgJ2t3JyBdLCB7XG4gIGM6IFsgMCwgMSwgMiwgMywgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIG4xMDAgPSBuICUgMTAwLCBuMTAwMCA9IG4gJSAxMDAwLCBuMTAwMDAwID0gbiAlIDEwMDAwMCwgbjEwMDAwMDAgPSBuICUgMTAwMDAwMDtcbiAgICByZXR1cm4gbiA9PT0gMCA/IDAgOiBuID09PSAxID8gMSA6IElOKFsgMiwgMjIsIDQyLCA2MiwgODIgXSwgbjEwMCkgfHwgbjEwMDAgPT09IDAgJiYgKEIoMTAwMCwgMjAwMDAsIG4xMDAwMDApIHx8IG4xMDAwMDAgPT09IDQwMDAwIHx8IG4xMDAwMDAgPT09IDYwMDAwIHx8IG4xMDAwMDAgPT09IDgwMDAwKSB8fCBuICE9PSAwICYmIG4xMDAwMDAwID09PSAxMDAwMDAgPyAyIDogSU4oWyAzLCAyMywgNDMsIDYzLCA4MyBdLCBuMTAwKSA/IDMgOiBuICE9PSAxICYmIElOKFsgMSwgMjEsIDQxLCA2MSwgODEgXSwgbjEwMCkgPyA0IDogNTtcbiAgfSxcbiAgbzogWyAxLCA0LCA1IF0sXG4gIG9GbjogZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgbjEwMCA9IG4gJSAxMDA7XG4gICAgcmV0dXJuIEIoMSwgNCwgbikgfHwgKEIoMSwgNCwgbjEwMCkgfHwgQigyMSwgMjQsIG4xMDApIHx8IEIoNDEsIDQ0LCBuMTAwKSB8fCBCKDYxLCA2NCwgbjEwMCkgfHwgQig4MSwgODQsIG4xMDApKSA/IDAgOiBuID09PSA1IHx8IG4xMDAgPT09IDUgPyAxIDogMjtcbiAgfVxufSk7XG5cbmFkZChbICdsYWcnIF0sIHtcbiAgYzogWyAwLCAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGkpIHtcbiAgICByZXR1cm4gbiA9PT0gMCA/IDAgOiBJTihbIDAsIDEgXSwgaSkgJiYgbiAhPT0gMCA/IDEgOiAyO1xuICB9XG59KTtcblxuYWRkKFsgJ2xvJywgJ21zJywgJ3ZpJyBdLCB7XG4gIG86IFsgMSwgNSBdLFxuICBvRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gPT09IDEgPyAwIDogMTtcbiAgfVxufSk7XG5cbmFkZChbICdsdCcgXSwge1xuICBjOiBbIDEsIDMsIDQsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSwgdiwgZikge1xuICAgIHZhciBuMTAgPSBuICUgMTAsIG4xMDAgPSBuICUgMTAwO1xuICAgIHJldHVybiBuMTAgPT09IDEgJiYgIUIoMTEsIDE5LCBuMTAwKSA/IDAgOiBCKDIsIDksIG4xMCkgJiYgIUIoMTEsIDE5LCBuMTAwKSA/IDEgOiBmICE9PSAwID8gMiA6IDM7XG4gIH1cbn0pO1xuXG5hZGQoWyAnbHYnLCAncHJnJyBdLCB7XG4gIGM6IFsgMCwgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2LCBmKSB7XG4gICAgdmFyIG4xMCA9IG4gJSAxMCwgbjEwMCA9IG4gJSAxMDAsIGYxMDAgPSBmICUgMTAwLCBmMTAgPSBmICUgMTA7XG4gICAgcmV0dXJuIG4xMCA9PT0gMCB8fCBCKDExLCAxOSwgbjEwMCkgfHwgdiA9PT0gMiAmJiBCKDExLCAxOSwgZjEwMCkgPyAwIDogbjEwID09PSAxICYmIG4xMDAgIT09IDExIHx8IHYgPT09IDIgJiYgZjEwID09PSAxICYmIGYxMDAgIT09IDExIHx8IHYgIT09IDIgJiYgZjEwID09PSAxID8gMSA6IDI7XG4gIH1cbn0pO1xuXG5hZGQoWyAnbWsnIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGksIHYsIGYpIHtcbiAgICB2YXIgaTEwID0gaSAlIDEwLCBpMTAwID0gaSAlIDEwMCwgZjEwID0gZiAlIDEwLCBmMTAwID0gZiAlIDEwMDtcbiAgICByZXR1cm4gdiA9PT0gMCAmJiBpMTAgPT09IDEgJiYgaTEwMCAhPT0gMTEgfHwgZjEwID09PSAxICYmIGYxMDAgIT09IDExID8gMCA6IDE7XG4gIH0sXG4gIG86IFsgMSwgMiwgNCwgNSBdLFxuICBvRm46IGZ1bmN0aW9uIChuLCBpKSB7XG4gICAgdmFyIGkxMCA9IGkgJSAxMCwgaTEwMCA9IGkgJSAxMDA7XG4gICAgcmV0dXJuIGkxMCA9PT0gMSAmJiBpMTAwICE9PSAxMSA/IDAgOiBpMTAgPT09IDIgJiYgaTEwMCAhPT0gMTIgPyAxIDogSU4oWyA3LCA4IF0sIGkxMCkgJiYgIUlOKFsgMTcsIDE4IF0sIGkxMDApID8gMiA6IDM7XG4gIH1cbn0pO1xuXG5hZGQoWyAnbW8nLCAncm8nIF0sIHtcbiAgYzogWyAxLCAzLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGksIHYpIHtcbiAgICB2YXIgbjEwMCA9IG4gJSAxMDA7XG4gICAgcmV0dXJuIGkgPT09IDEgJiYgdiA9PT0gMCA/IDAgOiB2ICE9PSAwIHx8IG4gPT09IDAgfHwgQigyLCAxOSwgbjEwMCkgPyAxIDogMjtcbiAgfSxcbiAgbzogWyAxLCA1IF0sXG4gIG9GbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ21yJyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gPT09IDEgPyAwIDogMTtcbiAgfSxcbiAgbzogWyAxLCAyLCAzLCA1IF0sXG4gIG9GbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiBJTihbIDIsIDMgXSwgbikgPyAxIDogbiA9PT0gNCA/IDIgOiAzO1xuICB9XG59KTtcblxuYWRkKFsgJ210JyBdLCB7XG4gIGM6IFsgMSwgMywgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIG4xMDAgPSBuICUgMTAwO1xuICAgIHJldHVybiBuID09PSAxID8gMCA6IG4gPT09IDAgfHwgQigyLCAxMCwgbjEwMCkgPyAxIDogQigxMSwgMTksIG4xMDApID8gMiA6IDM7XG4gIH1cbn0pO1xuXG5hZGQoWyAnbmUnIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiAxO1xuICB9LFxuICBvOiBbIDEsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBCKDEsIDQsIG4pID8gMCA6IDE7XG4gIH1cbn0pO1xuXG5hZGQoWyAnb3InIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiAxO1xuICB9LFxuICBvOiBbIDEsIDIsIDMsIDQsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiAobiA9PT0gMSB8fCBuID09PSA1IHx8IEIoNywgOSwgbikpID8gMCA6IElOKFsgMiwgMyBdLCBuKSA/IDEgOiBuID09PSA0ID8gMiA6IG4gPT09IDYgPyAzIDogNDtcbiAgfVxufSk7XG5cbmFkZChbICdwbCcgXSwge1xuICBjOiBbIDEsIDMsIDQsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSwgdikge1xuICAgIHZhciBpMTAgPSBpICUgMTAsIGkxMDAgPSBpICUgMTAwO1xuICAgIHJldHVybiBpID09PSAxICYmIHYgPT09IDAgPyAwIDogdiA9PT0gMCAmJiBCKDIsIDQsIGkxMCkgJiYgIUIoMTIsIDE0LCBpMTAwKSA/IDEgOiB2ID09PSAwICYmIGkgIT09IDEgJiYgQigwLCAxLCBpMTApIHx8IHYgPT09IDAgJiYgQig1LCA5LCBpMTApIHx8IHYgPT09IDAgJiYgQigxMiwgMTQsIGkxMDApID8gMiA6IDM7XG4gIH1cbn0pO1xuXG5hZGQoWyAncHQnIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGkpIHtcbiAgICByZXR1cm4gQigwLCAxLCBpKSA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ3J1JyBdLCB7XG4gIGM6IFsgMSwgMywgNCwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2KSB7XG4gICAgdmFyIGkxMCA9IGkgJSAxMCwgaTEwMCA9IGkgJSAxMDA7XG4gICAgcmV0dXJuIHYgPT09IDAgJiYgaTEwID09PSAxICYmIGkxMDAgIT09IDExID8gMCA6IHYgPT09IDAgJiYgQigyLCA0LCBpMTApICYmICFCKDEyLCAxNCwgaTEwMCkgPyAxIDogdiA9PT0gMCAmJiBpMTAgPT09IDAgfHwgdiA9PT0gMCAmJiBCKDUsIDksIGkxMCkgfHwgdiA9PT0gMCAmJiBCKDExLCAxNCwgaTEwMCkgPyAyIDogMztcbiAgfVxufSk7XG5cbmFkZChbICdzaGknIF0sIHtcbiAgYzogWyAxLCAzLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGkpIHtcbiAgICByZXR1cm4gaSA9PT0gMCB8fCBuID09PSAxID8gMCA6IEIoMiwgMTAsIG4pID8gMSA6IDI7XG4gIH1cbn0pO1xuXG5hZGQoWyAnc2knIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4sIGksIHYsIGYpIHtcbiAgICByZXR1cm4gSU4oWyAwLCAxIF0sIG4pIHx8IGkgPT09IDAgJiYgZiA9PT0gMSA/IDAgOiAxO1xuICB9XG59KTtcblxuYWRkKFsgJ3NsJyBdLCB7XG4gIGM6IFsgMSwgMiwgMywgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2KSB7XG4gICAgdmFyIGkxMDAgPSBpICUgMTAwO1xuICAgIHJldHVybiB2ID09PSAwICYmIGkxMDAgPT09IDEgPyAwIDogdiA9PT0gMCAmJiBpMTAwID09PSAyID8gMSA6IHYgPT09IDAgJiYgQigzLCA0LCBpMTAwKSB8fCB2ICE9PSAwID8gMiA6IDM7XG4gIH1cbn0pO1xuXG5hZGQoWyAnc3EnIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/IDAgOiAxO1xuICB9LFxuICBvOiBbIDEsIDQsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHZhciBuMTAgPSBuICUgMTAsIG4xMDAgPSBuICUgMTAwO1xuICAgIHJldHVybiBuID09PSAxID8gMCA6IG4xMCA9PT0gNCAmJiBuMTAwICE9PSAxNCA/IDEgOiAyO1xuICB9XG59KTtcblxuYWRkKFsgJ3N2JyBdLCB7XG4gIGM6IFsgMSwgNSBdLFxuICBjRm46IGZ1bmN0aW9uIChuLCBpLCB2KSB7XG4gICAgcmV0dXJuIGkgPT09IDEgJiYgdiA9PT0gMCA/IDAgOiAxO1xuICB9LFxuICBvOiBbIDEsIDUgXSxcbiAgb0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHZhciBuMTAgPSBuICUgMTAsIG4xMDAgPSBuICUgMTAwO1xuICAgIHJldHVybiBJTihbIDEsIDIgXSwgbjEwKSAmJiAhSU4oWyAxMSwgMTIgXSwgbjEwMCkgPyAwIDogMTtcbiAgfVxufSk7XG5cbmFkZChbICd0aycgXSwge1xuICBjOiBbIDEsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBuID09PSAxID8gMCA6IDE7XG4gIH0sXG4gIG86IFsgMywgNSBdLFxuICBvRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIG4xMCA9IG4gJSAxMDtcbiAgICByZXR1cm4gSU4oWyA2LCA5IF0sIG4xMCkgfHwgbiA9PT0gMTAgPyAwIDogMTtcbiAgfVxufSk7XG5cbmFkZChbICd0em0nIF0sIHtcbiAgYzogWyAxLCA1IF0sXG4gIGNGbjogZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gQigwLCAxLCBuKSB8fCBCKDExLCA5OSwgbikgPyAwIDogMTtcbiAgfVxufSk7XG5cbmFkZChbICd1aycgXSwge1xuICBjOiBbIDEsIDMsIDQsIDUgXSxcbiAgY0ZuOiBmdW5jdGlvbiAobiwgaSwgdikge1xuICAgIHZhciBpMTAgPSBpICUgMTAsIGkxMDAgPSBpICUgMTAwO1xuICAgIHJldHVybiB2ID09PSAwICYmIGkxMCA9PT0gMSAmJiBpMTAwICE9PSAxMSA/IDAgOiB2ID09PSAwICYmIEIoMiwgNCwgaTEwKSAmJiAhQigxMiwgMTQsIGkxMDApID8gMSA6IHYgPT09IDAgJiYgaTEwID09PSAwIHx8IHYgPT09IDAgJiYgQig1LCA5LCBpMTApIHx8IHYgPT09IDAgJiYgQigxMSwgMTQsIGkxMDApID8gMiA6IDM7XG4gIH0sXG4gIG86IFsgMywgNSBdLFxuICBvRm46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIG4xMCA9IG4gJSAxMCwgbjEwMCA9IG4gJSAxMDA7XG4gICAgcmV0dXJuIG4xMCA9PT0gMyAmJiBuMTAwICE9PSAxMyA/IDAgOiAxO1xuICB9XG59KTtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9lbi55bWxcIjogNjdcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSA2NjsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcIm91dHB1dFwiOlwiT1VUUFVUXCJ9IiwibGV0IGRlbGVnYXRlID0gcmVxdWlyZSgnY2xpZW50L2RlbGVnYXRlJyk7XG5sZXQgbWFrZUxpbmVOdW1iZXJzID0gcmVxdWlyZSgnLi9tYWtlTGluZU51bWJlcnMnKTtcblxuY2xhc3MgQ29kZVRhYnNCb3gge1xuICBjb25zdHJ1Y3RvcihlbGVtKSB7XG4gICAgaWYgKHdpbmRvdy5lYm9va1R5cGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW0gPSBlbGVtO1xuICAgIHRoaXMudHJhbnNsYXRlWCA9IDA7XG5cbiAgICB0aGlzLnN3aXRjaGVzRWxlbSA9IGVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtY29kZS10YWJzLXN3aXRjaGVzXScpO1xuICAgIHRoaXMuc3dpdGNoZXNFbGVtSXRlbXMgPSB0aGlzLnN3aXRjaGVzRWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLmFycm93TGVmdCA9IGVsZW0ucXVlcnlTZWxlY3RvcignW2RhdGEtY29kZS10YWJzLWxlZnRdJyk7XG4gICAgdGhpcy5hcnJvd1JpZ2h0ID0gZWxlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jb2RlLXRhYnMtcmlnaHRdJyk7XG5cblxuICAgIHRoaXMuYXJyb3dMZWZ0Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLnRyYW5zbGF0ZVggPSBNYXRoLm1heCgwLCB0aGlzLnRyYW5zbGF0ZVggLSB0aGlzLnN3aXRjaGVzRWxlbS5vZmZzZXRXaWR0aCk7XG4gICAgICB0aGlzLnJlbmRlclRyYW5zbGF0ZSgpO1xuICAgIH07XG5cblxuICAgIHRoaXMuYXJyb3dSaWdodC5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdGhpcy50cmFuc2xhdGVYID0gTWF0aC5taW4odGhpcy50cmFuc2xhdGVYICsgdGhpcy5zd2l0Y2hlc0VsZW0ub2Zmc2V0V2lkdGgsIHRoaXMuc3dpdGNoZXNFbGVtSXRlbXMub2Zmc2V0V2lkdGggLSB0aGlzLnN3aXRjaGVzRWxlbS5vZmZzZXRXaWR0aCk7XG4gICAgICB0aGlzLnJlbmRlclRyYW5zbGF0ZSgpO1xuICAgIH07XG5cbiAgICBsZXQgdGFiQ3VycmVudCA9IHRoaXMuZWxlbS5xdWVyeVNlbGVjdG9yKCcuY29kZS10YWJzX19zZWN0aW9uX2N1cnJlbnQnKTtcbiAgICBpZiAodGFiQ3VycmVudCAhPT0gdGFiQ3VycmVudC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSB7IC8vIGlmIG5vdCByZXN1bHQgdGFiXG4gICAgICB0aGlzLmhpZ2hsaWdodFRhYih0YWJDdXJyZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmRlbGVnYXRlKCcuY29kZS10YWJzX19zd2l0Y2gnLCAnY2xpY2snLCB0aGlzLm9uU3dpdGNoQ2xpY2spO1xuICB9XG5cbiAgb25Td2l0Y2hDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgbGV0IHNpYmxpbmdzID0gZS5kZWxlZ2F0ZVRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuO1xuICAgIGxldCB0YWJzID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvZGUtdGFicy1jb250ZW50XScpLmNoaWxkcmVuO1xuXG5cbiAgICBsZXQgc2VsZWN0ZWRJbmRleDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpYmxpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc3dpdGNoRWxlbSA9IHNpYmxpbmdzW2ldO1xuICAgICAgbGV0IHRhYkVsZW0gPSB0YWJzW2ldO1xuICAgICAgaWYgKHN3aXRjaEVsZW0gPT09IGUuZGVsZWdhdGVUYXJnZXQpIHtcbiAgICAgICAgc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgIHRhYkVsZW0uY2xhc3NMaXN0LmFkZCgnY29kZS10YWJzX19zZWN0aW9uX2N1cnJlbnQnKTtcbiAgICAgICAgc3dpdGNoRWxlbS5jbGFzc0xpc3QuYWRkKCdjb2RlLXRhYnNfX3N3aXRjaF9jdXJyZW50Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NvZGUtdGFic19fc2VjdGlvbl9jdXJyZW50Jyk7XG4gICAgICAgIHN3aXRjaEVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnY29kZS10YWJzX19zd2l0Y2hfY3VycmVudCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LmFkZCgnY29kZS10YWJzX3Jlc3VsdF9vbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnY29kZS10YWJzX3Jlc3VsdF9vbicpO1xuXG4gICAgICB0aGlzLmhpZ2hsaWdodFRhYih0YWJzW3NlbGVjdGVkSW5kZXhdKTtcbiAgICB9XG5cbiAgfVxuXG4gIGhpZ2hsaWdodFRhYih0YWIpIHtcbiAgICBpZiAodGFiLmhpZ2hsaWdodGVkKSByZXR1cm47XG4gICAgbGV0IHByZUVsZW0gPSB0YWIucXVlcnlTZWxlY3RvcigncHJlJyk7XG4gICAgbGV0IGNvZGVFbGVtID0gcHJlRWxlbS5xdWVyeVNlbGVjdG9yKCdjb2RlJyk7XG4gICAgUHJpc20uaGlnaGxpZ2h0RWxlbWVudChjb2RlRWxlbSk7XG5cbiAgICBwcmVFbGVtLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyQmVnaW5cIiwgbWFrZUxpbmVOdW1iZXJzKHByZUVsZW0uaW5uZXJIVE1MKSk7XG5cbiAgICB0YWIuaGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcmVuZGVyVHJhbnNsYXRlKCkge1xuICAgIHRoaXMuc3dpdGNoZXNFbGVtSXRlbXMuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLScgKyB0aGlzLnRyYW5zbGF0ZVggKyAncHgpJztcbiAgICBpZiAodGhpcy50cmFuc2xhdGVYID09PSAwKSB7XG4gICAgICB0aGlzLmFycm93TGVmdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFycm93TGVmdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhbnNsYXRlWCA9PT0gdGhpcy5zd2l0Y2hlc0VsZW1JdGVtcy5vZmZzZXRXaWR0aCAtIHRoaXMuc3dpdGNoZXNFbGVtLm9mZnNldFdpZHRoKSB7XG4gICAgICB0aGlzLmFycm93UmlnaHQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcnJvd1JpZ2h0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG5cbiAgfVxufVxuXG5cbmRlbGVnYXRlLmRlbGVnYXRlTWl4aW4oQ29kZVRhYnNCb3gucHJvdG90eXBlKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IENvZGVUYWJzQm94O1xuIiwibGV0IGNvbnNvbGVGb3JtYXQgPSByZXF1aXJlKCdlbmdpbmUvY29uc29sZS9jb25zb2xlRm9ybWF0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcHJveHlDb25zb2xlTG9nKCkge1xuICAvLyB1c2Ugd2luZG93LmNvbnNvbGUubG9nIHRvIHdvcmsgYXJvdW5kIFwiZHJvcF9jb25zb2xlOiB0cnVlXCIgaW4gd2VicGFjayB1Z2xpZnkgc2V0dGluZ3NcbiAgd2luZG93LmNvbnNvbGVMb2dOYXRpdmUgPSB3aW5kb3cuY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcblxuICAvLyBjb25zb2xlLmxvZyBmb3IgdGhlIG1haW4gd2luZG93XG4gIC8vIGpzIGNvZGUgYWx3YXlzIGhhcyBnbG9iYWxUaGlzLl9fY29kZUJveElkXG4gIC8vIHRydXN0ZWQgaWZyYW1lIHVzZXMgaXRzIG93biBjb25zb2xlLmxvZyAoY3JlYXRlZCBpbiBjb2RlQm94LmpzKVxuICAvLyB1bnRydXN0ZWQgdXNlcyBsb29rYXRjb2RlL2NvbnNvbGVMb2cgbW9kdWxlIGFuZCB3aW5kb3cubmFtZVxuICBjb25zb2xlLmxvZyA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlTG9nTmF0aXZlKC4uLmFyZ3MpO1xuXG4gICAgbGV0IGZvcm1hdHRlZEFyZ3MgPSBjb25zb2xlRm9ybWF0KGFyZ3MpO1xuICAgIC8vIGluIHRoZSBtYWluIHdpbmRvdyB3ZSBoYXZlOiB3aW5kb3cuX19jb2RlQm94SWQsXG4gICAgbGV0IG1lc3NhZ2UgPSB7XG4gICAgICB0eXBlOiAnY29uc29sZS1sb2cnLFxuICAgICAgbG9nOiBmb3JtYXR0ZWRBcmdzLFxuICAgICAgY29kZUJveElkOiB3aW5kb3cuX19jb2RlQm94SWRcbiAgICB9O1xuXG4gICAgLy8gY29uc29sZS5pbmZvKFwibWVzc2FnZSBzZW50XCIsIG1lc3NhZ2UpO1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlLCAnKicpO1xuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKHtzb3VyY2UsIGRhdGF9KSA9PiB7XG5cbiAgICAvLyBtZXNzYWdlIGZyb20gcGFyZW50IGZyYW1lPyBuZXZlciBoYXBwZW5zIGZvciBjb25zb2xlLWxvZ1xuICAgIGlmIChzb3VyY2UgIT0gd2luZG93ICYmIHNvdXJjZSA9PSB3aW5kb3cucGFyZW50KSByZXR1cm47XG5cbiAgICBpZiAoZGF0YS50eXBlICE9ICdjb25zb2xlLWxvZycpIHJldHVybjtcbiAgICAvLyBjb25zb2xlLmluZm8oXCJtZXNzYWdlIHJlY2VpdmVkXCIsIGRhdGEpO1xuXG4gICAgbGV0IGNvZGVCb3hFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS5jb2RlQm94SWQpO1xuICAgIGlmICghY29kZUJveEVsZW0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBjb2RlQm94RWxlbVwiLCBkYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY29kZUJveCA9IGNvZGVCb3hFbGVtLmNvZGVCb3g7XG4gICAgY29kZUJveC5jb25zb2xlTG9nKGRhdGEubG9nKTtcblxuICB9KTtcblxufTsiLCJsZXQgdGhyb3R0bGUgPSByZXF1aXJlKCdsb2Rhc2gvdGhyb3R0bGUnKTtcblxuY2xhc3MgaXRlbVNsaWRlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnNsaWRlciA9IG9wdGlvbnMuZWw7XG4gICAgdGhpcy5saXN0ID0gdGhpcy5zbGlkZXIucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICBpZiAob3B0aW9ucy5jbGFzcykgdGhpcy5jbGFzc0xpc3QgPSBvcHRpb25zLmNsYXNzLnNwbGl0KFwiIFwiKTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy5iaW5kSGFuZGxlcnMoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuY2xhc3NMaXN0ICYmIHRoaXMuY2xhc3NMaXN0Lmxlbmd0aCkgdGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCguLi50aGlzLmNsYXNzTGlzdCk7XG4gICAgdGhpcy5zbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyX2Rpc2FibGUtbGVmdCcpO1xuXG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9fY29udGFpbmVyJyk7XG4gICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGlzdCk7XG5cbiAgICB0aGlzLnNsaWRlci5pbm5lckhUTUwgPSAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlcl9fYXJyb3cgc2xpZGVyX19hcnJvd19sZWZ0XCI+PC9idXR0b24+JyArXG4gICAgICAgICc8YnV0dG9uIGNsYXNzPVwic2xpZGVyX19hcnJvdyBzbGlkZXJfX2Fycm93X3JpZ2h0XCI+PC9idXR0b24+JztcblxuICAgIHRoaXMuc2xpZGVyLmFwcGVuZENoaWxkKHNsaWRlckNvbnRhaW5lcik7XG5cbiAgICB0aGlzLmlubmVyV2lkdGggPSB0aGlzLmNvdW50SW5uZXJXaWR0aCgpO1xuICAgIHRoaXMuYXJyb3dMZWZ0ID0gdGhpcy5zbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fYXJyb3dfbGVmdCcpO1xuICAgIHRoaXMuYXJyb3dSaWdodCA9IHRoaXMuc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX2Fycm93X3JpZ2h0Jyk7XG5cbiAgfVxuXG4gIGNvdW50SW5uZXJXaWR0aCgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMubGlzdC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gaXRlbS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luTGVmdCkgKyBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgICAgIHJldHVybiBzdW0gKyB3aWR0aDtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGJpbmRIYW5kbGVycygpIHtcbiAgICB0aGlzLnRyYW5zZm9ybVggPSAwO1xuICAgIHRoaXMuYXJyb3dMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2Zvcm1YIC09IHRoaXMubGlzdC5jbGllbnRXaWR0aDtcbiAgICAgIGlmICh0aGlzLnRyYW5zZm9ybVggPCAwKSB0aGlzLnRyYW5zZm9ybVggPSAwO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXJyb3dSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMudHJhbnNmb3JtWCA9IE1hdGgubWluKHRoaXMudHJhbnNmb3JtWCArIHRoaXMubGlzdC5jbGllbnRXaWR0aCwgdGhpcy5saXN0LnNjcm9sbFdpZHRoIC0gdGhpcy5saXN0LmNsaWVudFdpZHRoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhyb3R0bGUoKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0sIDIwMCkpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICB9XG5cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgKHRoaXMuaW5uZXJXaWR0aCA8PSB0aGlzLmxpc3Qub2Zmc2V0V2lkdGgpKSB7XG4gICAgICB0aGlzLnNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfZGlzYWJsZWQnKTtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudHJhbnNmb3JtWCA+IDApIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1YID0gMDtcbiAgICAgICAgaWYgKHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX2Rpc2FibGUtcmlnaHQnKSkgdGhpcy5zbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX2Rpc2FibGUtcmlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlzYWJsZWQgJiYgKHRoaXMuaW5uZXJXaWR0aCA+IHRoaXMubGlzdC5vZmZzZXRXaWR0aCkpIHtcbiAgICAgIHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlcl9kaXNhYmxlZCcpO1xuICAgICAgaWYgKHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX2Rpc2FibGUtcmlnaHQnKSkgdGhpcy5zbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX2Rpc2FibGUtcmlnaHQnKTtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5saXN0LnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtWCA+IDAgPyBgdHJhbnNsYXRlWCgkey10aGlzLnRyYW5zZm9ybVh9cHgpYCA6ICd0cmFuc2xhdGVYKDApJztcblxuICAgIGlmICh0aGlzLnRyYW5zZm9ybVggPT09IDApIHtcbiAgICAgIHRoaXMuc2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcl9kaXNhYmxlLWxlZnQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX2Rpc2FibGUtbGVmdCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRyYW5zZm9ybVggPT0gdGhpcy5saXN0LnNjcm9sbFdpZHRoIC0gdGhpcy5saXN0LmNsaWVudFdpZHRoKSB7XG4gICAgICB0aGlzLnNsaWRlci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfZGlzYWJsZS1yaWdodCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfZGlzYWJsZS1yaWdodCcpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZW1TbGlkZXI7XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzl1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7Ozs7QUN4Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3o1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVxQkE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQXJCQTtBQUFBO0FBQUE7QUF5QkE7QUFDQTtBQTFCQTtBQTRCQTtBQUNBO0FBN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUF6Q0E7QUEyQ0E7QUFDQTtBQURBO0FBR0E7QUE5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW9EQTtBQUNBO0FBckRBO0FBQUE7QUFBQTtBQXlEQTtBQUNBO0FBMURBO0FBQUE7QUFBQTtBQThEQTtBQUNBO0FBL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXpFQTtBQUFBO0FBQUE7QUE2RUE7QUFDQTtBQTlFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUZBO0FBQUE7QUFuRkE7QUFxRkE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQXpGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBc0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7OztBQ3g0QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTs7Ozs7Ozs7OztBQzFuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3RCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBOUZBO0FBQ0E7QUFpR0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEZBO0FBQ0E7QUEwRkE7OztBIiwic291cmNlUm9vdCI6IiJ9