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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/blazy/blazy.js":
/*!*************************************!*\
  !*** ./node_modules/blazy/blazy.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
;
(function(root, blazy) {
    if (true) {
        // AMD. Register bLazy as an anonymous module
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (blazy),
        __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
        (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
        __WEBPACK_AMD_DEFINE_FACTORY__),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function() {
    'use strict';

    //private vars
    var _source, _viewport, _isRetina, _supportClosest, _attrSrc = 'src', _attrSrcset = 'srcset';

    // constructor
    return function Blazy(options) {
        //IE7- fallback for missing querySelectorAll support
        if (!document.querySelectorAll) {
            var s = document.createStyleSheet();
            document.querySelectorAll = function(r, c, i, j, a) {
                a = document.all, c = [], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
                for (i = r.length; i--;) {
                    s.addRule(r[i], 'k:v');
                    for (j = a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
                    s.removeRule(0);
                }
                return c;
            };
        }

        //options and helper vars
        var scope = this;
        var util = scope._util = {};
        util.elements = [];
        util.destroyed = true;
        scope.options = options || {};
        scope.options.error = scope.options.error || false;
        scope.options.offset = scope.options.offset || 100;
        scope.options.root = scope.options.root || document;
        scope.options.success = scope.options.success || false;
        scope.options.selector = scope.options.selector || '.b-lazy';
        scope.options.separator = scope.options.separator || '|';
        scope.options.containerClass = scope.options.container;
        scope.options.container = scope.options.containerClass ? document.querySelectorAll(scope.options.containerClass) : false;
        scope.options.errorClass = scope.options.errorClass || 'b-error';
        scope.options.breakpoints = scope.options.breakpoints || false;
        scope.options.loadInvisible = scope.options.loadInvisible || false;
        scope.options.successClass = scope.options.successClass || 'b-loaded';
        scope.options.validateDelay = scope.options.validateDelay || 25;
        scope.options.saveViewportOffsetDelay = scope.options.saveViewportOffsetDelay || 50;
        scope.options.srcset = scope.options.srcset || 'data-srcset';
        scope.options.src = _source = scope.options.src || 'data-src';
        _supportClosest = Element.prototype.closest;
        _isRetina = window.devicePixelRatio > 1;
        _viewport = {};
        _viewport.top = 0 - scope.options.offset;
        _viewport.left = 0 - scope.options.offset;


        /* public functions
         ************************************/
        scope.revalidate = function() {
            initialize(scope);
        };
        scope.load = function(elements, force) {
            var opt = this.options;
            if (elements && elements.length === undefined) {
                loadElement(elements, force, opt);
            } else {
                each(elements, function(element) {
                    loadElement(element, force, opt);
                });
            }
        };
        scope.destroy = function() {
            var util = scope._util;
            if (scope.options.container) {
                each(scope.options.container, function(object) {
                    unbindEvent(object, 'scroll', util.validateT);
                });
            }
            unbindEvent(window, 'scroll', util.validateT);
            unbindEvent(window, 'resize', util.validateT);
            unbindEvent(window, 'resize', util.saveViewportOffsetT);
            util.count = 0;
            util.elements.length = 0;
            util.destroyed = true;
        };

        //throttle, ensures that we don't call the functions too often
        util.validateT = throttle(function() {
            validate(scope);
        }, scope.options.validateDelay, scope);
        util.saveViewportOffsetT = throttle(function() {
            saveViewportOffset(scope.options.offset);
        }, scope.options.saveViewportOffsetDelay, scope);
        saveViewportOffset(scope.options.offset);

        //handle multi-served image src (obsolete)
        each(scope.options.breakpoints, function(object) {
            if (object.width >= window.screen.width) {
                _source = object.src;
                return false;
            }
        });

        // start lazy load
        setTimeout(function() {
            initialize(scope);
        }); // "dom ready" fix

    };


    /* Private helper functions
     ************************************/
    function initialize(self) {
        var util = self._util;
        // First we create an array of elements to lazy load
        util.elements = toArray(self.options);
        util.count = util.elements.length;
        // Then we bind resize and scroll events if not already binded
        if (util.destroyed) {
            util.destroyed = false;
            if (self.options.container) {
                each(self.options.container, function(object) {
                    bindEvent(object, 'scroll', util.validateT);
                });
            }
            bindEvent(window, 'resize', util.saveViewportOffsetT);
            bindEvent(window, 'resize', util.validateT);
            bindEvent(window, 'scroll', util.validateT);
        }
        // And finally, we start to lazy load.
        validate(self);
    }

    function validate(self) {
        var util = self._util;
        for (var i = 0; i < util.count; i++) {
            var element = util.elements[i];
            if (elementInView(element, self.options) || hasClass(element, self.options.successClass)) {
                self.load(element);
                util.elements.splice(i, 1);
                util.count--;
                i--;
            }
        }
        if (util.count === 0) {
            self.destroy();
        }
    }

    function elementInView(ele, options) {
        var rect = ele.getBoundingClientRect();

        if(options.container && _supportClosest){
            // Is element inside a container?
            var elementContainer = ele.closest(options.containerClass);
            if(elementContainer){
                var containerRect = elementContainer.getBoundingClientRect();
                // Is container in view?
                if(inView(containerRect, _viewport)){
                    var top = containerRect.top - options.offset;
                    var right = containerRect.right + options.offset;
                    var bottom = containerRect.bottom + options.offset;
                    var left = containerRect.left - options.offset;
                    var containerRectWithOffset = {
                        top: top > _viewport.top ? top : _viewport.top,
                        right: right < _viewport.right ? right : _viewport.right,
                        bottom: bottom < _viewport.bottom ? bottom : _viewport.bottom,
                        left: left > _viewport.left ? left : _viewport.left
                    };
                    // Is element in view of container?
                    return inView(rect, containerRectWithOffset);
                } else {
                    return false;
                }
            }
        }
        return inView(rect, _viewport);
    }

    function inView(rect, viewport){
        // Intersection
        return rect.right >= viewport.left &&
                rect.bottom >= viewport.top &&
                rect.left <= viewport.right &&
                rect.top <= viewport.bottom;
    }

    function loadElement(ele, force, options) {
        // if element is visible, not loaded or forced
        if (!hasClass(ele, options.successClass) && (force || options.loadInvisible || (ele.offsetWidth > 0 && ele.offsetHeight > 0))) {
            var dataSrc = getAttr(ele, _source) || getAttr(ele, options.src); // fallback to default 'data-src'
            if (dataSrc) {
                var dataSrcSplitted = dataSrc.split(options.separator);
                var src = dataSrcSplitted[_isRetina && dataSrcSplitted.length > 1 ? 1 : 0];
                var srcset = getAttr(ele, options.srcset);
                var isImage = equal(ele, 'img');
                var parent = ele.parentNode;
                var isPicture = parent && equal(parent, 'picture');
                // Image or background image
                if (isImage || ele.src === undefined) {
                    var img = new Image();
                    // using EventListener instead of onerror and onload
                    // due to bug introduced in chrome v50
                    // (https://productforums.google.com/forum/#!topic/chrome/p51Lk7vnP2o)
                    var onErrorHandler = function() {
                        if (options.error) options.error(ele, "invalid");
                        addClass(ele, options.errorClass);
                        unbindEvent(img, 'error', onErrorHandler);
                        unbindEvent(img, 'load', onLoadHandler);
                    };
                    var onLoadHandler = function() {
                        // Is element an image
                        if (isImage) {
                            if(!isPicture) {
                                handleSources(ele, src, srcset);
                            }
                        // or background-image
                        } else {
                            ele.style.backgroundImage = 'url("' + src + '")';
                        }
                        itemLoaded(ele, options);
                        unbindEvent(img, 'load', onLoadHandler);
                        unbindEvent(img, 'error', onErrorHandler);
                    };

                    // Picture element
                    if (isPicture) {
                        img = ele; // Image tag inside picture element wont get preloaded
                        each(parent.getElementsByTagName('source'), function(source) {
                            handleSource(source, _attrSrcset, options.srcset);
                        });
                    }
                    bindEvent(img, 'error', onErrorHandler);
                    bindEvent(img, 'load', onLoadHandler);
                    handleSources(img, src, srcset); // Preload

                } else { // An item with src like iframe, unity games, simpel video etc
                    ele.src = src;
                    itemLoaded(ele, options);
                }
            } else {
                // video with child source
                if (equal(ele, 'video')) {
                    each(ele.getElementsByTagName('source'), function(source) {
                        handleSource(source, _attrSrc, options.src);
                    });
                    ele.load();
                    itemLoaded(ele, options);
                } else {
                    if (options.error) options.error(ele, "missing");
                    addClass(ele, options.errorClass);
                }
            }
        }
    }

    function itemLoaded(ele, options) {
        addClass(ele, options.successClass);
        if (options.success) options.success(ele);
        // cleanup markup, remove data source attributes
        removeAttr(ele, options.src);
        removeAttr(ele, options.srcset);
        each(options.breakpoints, function(object) {
            removeAttr(ele, object.src);
        });
    }

    function handleSource(ele, attr, dataAttr) {
        var dataSrc = getAttr(ele, dataAttr);
        if (dataSrc) {
            setAttr(ele, attr, dataSrc);
            removeAttr(ele, dataAttr);
        }
    }

    function handleSources(ele, src, srcset){
        if(srcset) {
            setAttr(ele, _attrSrcset, srcset); //srcset
        }
        ele.src = src; //src
    }

    function setAttr(ele, attr, value){
        ele.setAttribute(attr, value);
    }

    function getAttr(ele, attr) {
        return ele.getAttribute(attr);
    }

    function removeAttr(ele, attr){
        ele.removeAttribute(attr);
    }

    function equal(ele, str) {
        return ele.nodeName.toLowerCase() === str;
    }

    function hasClass(ele, className) {
        return (' ' + ele.className + ' ').indexOf(' ' + className + ' ') !== -1;
    }

    function addClass(ele, className) {
        if (!hasClass(ele, className)) {
            ele.className += ' ' + className;
        }
    }

    function toArray(options) {
        var array = [];
        var nodelist = (options.root).querySelectorAll(options.selector);
        for (var i = nodelist.length; i--; array.unshift(nodelist[i])) {}
        return array;
    }

    function saveViewportOffset(offset) {
        _viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + offset;
        _viewport.right = (window.innerWidth || document.documentElement.clientWidth) + offset;
    }

    function bindEvent(ele, type, fn) {
        if (ele.attachEvent) {
            ele.attachEvent && ele.attachEvent('on' + type, fn);
        } else {
            ele.addEventListener(type, fn, { capture: false, passive: true });
        }
    }

    function unbindEvent(ele, type, fn) {
        if (ele.detachEvent) {
            ele.detachEvent && ele.detachEvent('on' + type, fn);
        } else {
            ele.removeEventListener(type, fn, { capture: false, passive: true });
        }
    }

    function each(object, fn) {
        if (object && fn) {
            var l = object.length;
            for (var i = 0; i < l && fn(object[i], i) !== false; i++) {}
        }
    }

    function throttle(fn, minDelay, scope) {
        var lastCall = 0;
        return function() {
            var now = +new Date();
            if (now - lastCall < minDelay) {
                return;
            }
            lastCall = now;
            fn.apply(scope, arguments);
        };
    }
});


/***/ }),

/***/ "./source/js/src/controllers/gallery-controller.js":
/*!*********************************************************!*\
  !*** ./source/js/src/controllers/gallery-controller.js ***!
  \*********************************************************/
/*! exports provided: galleryController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryController", function() { return galleryController; });
const galleryController = () => {
  const galleryContainer = document.querySelector(`.gallery-section`);
  const galleryControlsContainer = galleryContainer.querySelector(`.gallery-section__controls-container`);
  const sliderItems = galleryContainer.querySelectorAll(`.gallery-section__item`);
  const sliderPointsContainer = galleryContainer.querySelector(`.gallery-section__slider-points`);
  const sliderPoints = galleryContainer.querySelectorAll(`.gallery-section__slider-point`);

  const showControls = () => {
    if (!galleryControlsContainer.classList.contains(`gallery-section__controls-container--on`) && galleryContainer.offsetWidth < 1024) {
      galleryControlsContainer.classList.add(`gallery-section__controls-container--on`);
    }
  };

  showControls();

  const slides = [];
  let clickCount = 0;

  sliderItems.forEach(function (slide, index) {
    slides.push({
      slide,
      index,
    });
  });

  const slideStep = -parseFloat(getComputedStyle(sliderItems[0]).width);
  sliderPoints[clickCount].classList.add(`gallery-section__slider-point--active`);

  galleryControlsContainer.addEventListener(`click`, function (evt) {
    const controlType = evt.target.classList.contains(`gallery-section__control--left`) ? `left` : `right`;
    if (evt.target.tagName === `BUTTON` && controlType === `right`) {
      clickCount += 1;
      if (clickCount >= slides.length) {
        clickCount = 0;
      }
    }

    if (evt.target.tagName === `BUTTON` && controlType === `left`) {
      clickCount -= 1;
      if (clickCount < 0) {
        clickCount = slides.length - 1;
      }
    }

    sliderPoints.forEach((item) => {
      item.classList.remove(`gallery-section__slider-point--active`);
    });

    sliderPoints[clickCount].classList.add(`gallery-section__slider-point--active`);

    slides.forEach((item) => {
      item.slide.style.transform = `translateX(` + slideStep * clickCount + `px)`;
    });
  });

  sliderPointsContainer.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `LI`) {
      clickCount = evt.target.dataset.point;
      slides.forEach((item) => {
        item.slide.style.transform = `translateX(` + slideStep * clickCount + `px)`;
      });
    }
  });

  window.addEventListener(`resize`, function () {
    if (galleryContainer.offsetWidth < 1024) {
      showControls();
      slides.forEach((item) => {
        item.slide.style.transform = `translateX(` + slideStep * clickCount + `px)`;
      });
    } else {
      galleryControlsContainer.classList.remove(`gallery-section__controls-container--on`);
      slides.forEach((item) => {
        item.slide.style.transform = `translateX(` + 0 + `px)`;
      });
    }
  }, false);
};


/***/ }),

/***/ "./source/js/src/controllers/popup-controller.js":
/*!*******************************************************!*\
  !*** ./source/js/src/controllers/popup-controller.js ***!
  \*******************************************************/
/*! exports provided: popupController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupController", function() { return popupController; });
const popupController = () => {
  const mainSection = document.querySelector(`main`);
  const callLink = document.querySelector(`.page-header__link--order`);
  const contactSectionForm = document.querySelector(`.contact-section__form`);
  const detailsSectionForm = document.querySelector(`.details-section__feedback-form`);

  const popupCallTemplate = document.querySelector(`#call-popup`).content;
  const popupResultTemplate = document.querySelector(`#result-popup`).content;

  const ESC_KEY = 27;

  const addCallPopup = () => {
    const popupCallContainer = popupCallTemplate.cloneNode(true);
    mainSection.appendChild(popupCallContainer);
    const popupCall = document.querySelector(`.call-popup`);
    const closeButton = popupCall.querySelector(`.call-popup__close-button`);
    const popupForm = document.querySelector(`.call-popup__form`);

    document.body.style.overflow = `hidden`;

    deletePopup(popupCall, closeButton);
    popupForm.addEventListener(`submit`, onPopupResultSubmit);
  };

  const addResultPopup = () => {
    const popupResultContainer = popupResultTemplate.cloneNode(true);
    mainSection.appendChild(popupResultContainer);
    const popupResult = document.querySelector(`.result-popup`);
    const closeButton = popupResult.querySelector(`.result-popup__close-button`);
    const okButton = popupResult.querySelector(`.result-popup__button`);

    document.body.style.overflow = `hidden`;

    deletePopup(popupResult, closeButton);
    deletePopup(popupResult, okButton);
  };

  const onPopupResultSubmit = (evt) => {
    evt.preventDefault();
    const popupCall = document.querySelector(`.call-popup`);
    const popupResult = document.querySelector(`.result-popup`);
    popupCall.remove();
    if (!popupResult) {
      addResultPopup();
    }
    document.removeEventListener(`click`, onPopupResultSubmit);
  };

  const deletePopup = (popup, closeButton) => {
    const onPopupClose = function () {
      popup.remove();
      document.body.style.overflow = `auto`;
      document.removeEventListener(`keydown`, onPopupEscPress);
      document.removeEventListener(`click`, onPopupClose);
    };

    const onPopupEscPress = function (evt) {
      if (evt.keyCode === ESC_KEY) {
        onPopupClose();
      }
    };

    closeButton.addEventListener(`click`, onPopupClose);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  const onCallLinkClick = (evt) => {
    evt.preventDefault();
    const popupCall = document.querySelector(`.call-popup`);
    if (!popupCall) {
      addCallPopup();
    }
  };

  const onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    const popupResult = document.querySelector(`.result-popup`);
    if (!popupResult) {
      addResultPopup();
    }
  };

  callLink.addEventListener(`click`, onCallLinkClick);
  detailsSectionForm.addEventListener(`submit`, onSubmitButtonClick);
  contactSectionForm.addEventListener(`submit`, onSubmitButtonClick);
};


/***/ }),

/***/ "./source/js/src/controllers/questions-controller.js":
/*!***********************************************************!*\
  !*** ./source/js/src/controllers/questions-controller.js ***!
  \***********************************************************/
/*! exports provided: questionsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionsController", function() { return questionsController; });
const questionsController = () => {
  const questionsList = document.querySelector(`.questions-section__list`);
  const questionItems = questionsList.querySelectorAll(`.questions-section__item`);

  questionItems.forEach((item) => {
    item.classList.add(`questions-section__item--closed`);
  });

  questionsList.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `BUTTON`) {
      const questionItem = evt.target.parentElement;
      const questionDescription = questionItem.querySelector(`.questions-section__item-description`);

      if (questionItem.classList.contains(`questions-section__item--closed`)) {
        questionItem.classList.remove(`questions-section__item--closed`);
        questionItem.classList.add(`questions-section__item--open`);
        questionDescription.classList.add(`answer-show`);
      } else {
        questionItem.classList.add(`questions-section__item--closed`);
        questionItem.classList.remove(`questions-section__item--open`);
        questionDescription.classList.remove(`answer-show`);
      }

    }
  });
};


/***/ }),

/***/ "./source/js/src/controllers/reviews-controller.js":
/*!*********************************************************!*\
  !*** ./source/js/src/controllers/reviews-controller.js ***!
  \*********************************************************/
/*! exports provided: reviewsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewsController", function() { return reviewsController; });
const reviewsController = () => {
  const sliderContainer = document.querySelector(`.reviews-section__slider`);
  const sliderItems = sliderContainer.querySelectorAll(`.reviews-section__slider-item`);
  const sliderControllers = sliderContainer.querySelector(`.reviews-section__controls-container`);
  const sliderCounter = sliderContainer.querySelector(`.reviews-section__control-count`);

  const slideWidth = parseFloat(getComputedStyle(sliderItems[0]).width);
  let slideStep = -slideWidth;

  sliderControllers.classList.add(`reviews-section__controls-container--visible`);

  const items = [];
  let clickCount = 0;
  sliderItems.forEach(function (item) {
    items.push({
      item,
    });
  });
  sliderCounter.innerHTML = `1/${items.length}`;

  sliderControllers.addEventListener(`click`, function (evt) {
    const controlType = evt.target.classList.contains(`reviews-section__control--left`) ? `left` : `right`;
    if (evt.target.tagName === `BUTTON` && controlType === `right`) {
      clickCount += 1;
      if (clickCount >= items.length) {
        clickCount = 0;
      }
    }

    if (evt.target.tagName === `BUTTON` && controlType === `left`) {
      clickCount -= 1;
      if (clickCount < 0) {
        clickCount = items.length - 1;
      }
    }

    items.forEach((item) => {
      item.item.style.transform = `translateX(` + slideStep * clickCount + `px)`;
    });

    sliderCounter.innerHTML = `${clickCount + 1}/${items.length}`;
  });

  window.addEventListener(`resize`, function () {
    slideStep = -parseFloat(getComputedStyle(sliderItems[0]).width);
    items.forEach((item) => {
      item.item.style.transform = `translateX(` + slideStep * clickCount + `px)`;
    });
  }, false);
};


/***/ }),

/***/ "./source/js/src/controllers/webp-controller.js":
/*!******************************************************!*\
  !*** ./source/js/src/controllers/webp-controller.js ***!
  \******************************************************/
/*! exports provided: webpController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webpController", function() { return webpController; });
const webpController = () => {
  const canUseWebp = () => {
    let elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    return false;
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (canUseWebp()) {
      let images = document.querySelectorAll('[data-bg]');
      images.forEach((image, i) => {
        const webpClass = image.classList[0] + `--webp-on`;
        image.classList.add(webpClass);
        console.log(image.classList);
      });
    }
  });

};


/***/ }),

/***/ "./source/js/src/controllers/yandex-map.js":
/*!*************************************************!*\
  !*** ./source/js/src/controllers/yandex-map.js ***!
  \*************************************************/
/*! exports provided: yandexMapController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yandexMapController", function() { return yandexMapController; });
const yandexMapController = () => {
  const defaultMap = document.querySelector(`.details-section__map`);
  defaultMap.classList.add(`details-section__map--off`);
  const yandexMap = document.querySelector(`.details-section__iframe-container`);
  yandexMap.classList.add(`details-section__iframe-container--on`);
  ymaps.ready(function () {
    const myMap = new ymaps.Map(`map`, {
        center: [55.028522, 82.928281],
        zoom: 18
      }, {
        searchControlProvider: `yandex#search`
      }),

      // Создаём макет содержимого.

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: `Новосибирск, ул. Щетинкина 68, культурный центр «Бейт Менахем»`,
        balloonContent: `Новосибирск, ул. Щетинкина 68, культурный центр «Бейт Менахем»`
      }, {

        // Опции.
        // Необходимо указать данный тип макета.

        iconLayout: `default#image`,

        // Своё изображение иконки метки.

        iconImageHref: "img/map-pin.png",

        // Размеры метки.

        iconImageSize: [18, 28],
        iconImageOffset: [-25, -55]
      });

    myMap.geoObjects
        .add(myPlacemark);
  });
};


/***/ }),

/***/ "./source/js/src/main.js":
/*!*******************************!*\
  !*** ./source/js/src/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_questions_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/questions-controller.js */ "./source/js/src/controllers/questions-controller.js");
/* harmony import */ var _controllers_reviews_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/reviews-controller.js */ "./source/js/src/controllers/reviews-controller.js");
/* harmony import */ var _controllers_gallery_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/gallery-controller.js */ "./source/js/src/controllers/gallery-controller.js");
/* harmony import */ var _controllers_popup_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/popup-controller.js */ "./source/js/src/controllers/popup-controller.js");
/* harmony import */ var _controllers_webp_controller_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/webp-controller.js */ "./source/js/src/controllers/webp-controller.js");
/* harmony import */ var _controllers_yandex_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/yandex-map.js */ "./source/js/src/controllers/yandex-map.js");
/* harmony import */ var blazy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! blazy */ "./node_modules/blazy/blazy.js");
/* harmony import */ var blazy__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(blazy__WEBPACK_IMPORTED_MODULE_6__);









const bLazy = new blazy__WEBPACK_IMPORTED_MODULE_6___default.a({
  selector: 'img' // all images
});

Object(_controllers_webp_controller_js__WEBPACK_IMPORTED_MODULE_4__["webpController"])();

// call-popup

Object(_controllers_popup_controller_js__WEBPACK_IMPORTED_MODULE_3__["popupController"])();

// Открытие/закрытие ответа на вопрос в questions-section

Object(_controllers_questions_controller_js__WEBPACK_IMPORTED_MODULE_0__["questionsController"])();

// Активация слайдера для reviews-section

Object(_controllers_reviews_controller_js__WEBPACK_IMPORTED_MODULE_1__["reviewsController"])();


// Активация слайдера для gallery-section

Object(_controllers_gallery_controller_js__WEBPACK_IMPORTED_MODULE_2__["galleryController"])();


// Подключение Яндекс карт

Object(_controllers_yandex_map_js__WEBPACK_IMPORTED_MODULE_5__["yandexMapController"])();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
