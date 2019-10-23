var desktop =
webpackJsonp_name_([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Test via a getter in the options object to see if the passive property is accessed
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
var supportsPassive = false

try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function() {
            supportsPassive = true
        }
    })

    window.addEventListener('test', null, opts)
} catch (e) {
    // pass
}

module.exports.event = function event(elem, _eventNames, handler, mode) {
    var eventNames = _eventNames.split(' ')
    var prefix = mode == 'on' ? 'add' : 'remove'

    eventNames.forEach(function(eventName) {
        var options = false

        if (['scroll', 'touchstart', 'touchmove'].indexOf(eventName) != -1 && supportsPassive) {
            options = { passive: true }
        }

        elem[prefix + 'EventListener'](eventName, handler, options)
    })
}

function each(obj, handler) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            handler(key, obj[key])
        }
    }
}

module.exports.css = function css(node, key, value) {
    var styles

    if (value === undefined) {
        // Getter mode
        if (typeof key == 'string') {
            return node.style[key]
        }

        styles = key
    } else {
        styles = {}
        styles[key] = value
    }

    each(styles, function(k, val) {
        node.style[k] = val
    })
}

module.exports.add = function add(node, cls) {
    if (!cls) {
        return
    }

    node.classList.add(cls)
}

module.exports.rm = function add(node, cls) {
    if (!cls) {
        return
    }

    node.classList.remove(cls)
}

module.exports.has = function has(node, cls) {
    if (!cls) {
        return false
    }

    return node.classList.contains(cls)
}

module.exports.clone = function clone(_input) {
    var output = {}
    var input = _input || {}

    each(input, function(key, value) {
        output[key] = value
    })

    return output
}

module.exports.qs = function qs(selector, _ctx) {
    if (selector instanceof HTMLElement) {
        return selector
    }

    var ctx = _ctx || document

    return ctx.querySelector(selector)
}

module.exports.each = each


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(4);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(2);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap util.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(2)) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global = global || self, global.Util = factory(global.jQuery));
}(this, function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();

  return Util;

}));
//# sourceMappingURL=util.js.map


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function log(level, msg, more) {
    var func = console[level] || console.log
    var args = [
        'Baron: ' + msg,
        more
    ]

    Function.prototype.apply.call(func, console, args)
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import 'babel-polyfill';
// // import Promise from 'es6-promise-promise'; // нужен^ если используется require.ensure, для ie11-

// import Swiper from 'swiper/dist/js/swiper.js';


__webpack_require__(3);

var _modal = __webpack_require__(9);

var _modal2 = _interopRequireDefault(_modal);

__webpack_require__(11);

__webpack_require__(13);

var _baron = __webpack_require__(15);

var _baron2 = _interopRequireDefault(_baron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ww = $(window).width(),
    wh = $(window).height(),
    isMobile = $('body').hasClass('mobile'),
    SliderReviews = new Swiper('.landing-reviews__slider .swiper-container', {
    speed: 500,
    slidesPerView: 1.5,
    spaceBetween: 60,
    // loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    }
}),
    SliderEventsCurrent = new Swiper('.events-current__slider .swiper-container', {
    effect: 'coverflow',
    // grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination'
    }
}),
    SliderProduct = function () {
    var productThumbs = new Swiper('.product__thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        direction: 'vertical',
        mousewheel: true,
        keyboard: {
            enabled: true
        },
        // loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });
    var productPhoto = new Swiper('.product__photo', {
        spaceBetween: 10,
        keyboard: {
            enabled: true
        },
        // loop:true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        thumbs: {
            swiper: productThumbs
        }
    });
}(),
    SliderCities = new Swiper('.map-cities .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    draggable: true,
    scrollbar: {
        el: '.swiper-scrollbar'
    },
    mousewheel: true
}),
    SliderProductsCheckout = new Swiper('.checkout-products__slider .swiper-container', {
    slidesPerView: 3,
    // spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.checkout-products__slider .swiper-button-next',
        prevEl: '.checkout-products__slider .swiper-button-prev'
    }
}),
    SliderPromotions = new Swiper('.promotions-slider .swiper-container', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
}),
    AmountProduct = function () {
    $('.button_minus').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 2) {
            value = value - 1;
        } else {
            value = 1;
        }

        $input.val(value);
    });

    $('.button_plus').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 999) {
            value = value + 1;
        } else {
            value = 999;
        }

        $input.val(value);
    });
}(),
    Basket = function () {
    $('.menu__item_basket p').click(function () {

        $(this).parent().addClass('active');
        $('body').addClass('layout');
    });

    $('.basket__close').click(function () {
        $(this).closest('.menu__item_basket').removeClass('active');
        $('body').removeClass('layout');
    });

    $('.basket__item-delete').click(function () {
        $(this).closest('.basket__item').remove();
    });
}(),
    AddReview = function () {
    $('.jsAddReview').click(function () {
        $(this).parents('.reviews').find('.reviews__form').addClass('active');
    });

    $('.jsCloseReviewForm').click(function () {
        $(this).parent().removeClass('active');
    });
}(),
    TabSwitch = function () {
    var hash = location.hash;
    if (hash !== '') {
        var i = $('ul.tabs__caption li').has('a[href*="' + hash + '"]').index();
        $('ul.tabs__caption li').has('a[href*="' + hash + '"]').addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
    }

    if (hash === '#medcenters') {
        SliderCities.update();
    }

    $('ul.tabs__caption').on('click', 'li:not(.active) a', function () {
        $(this).parent().addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).parent().index()).addClass('active');
        if ($(this).attr('href') === '#medcenters') {
            SliderCities.update();
        }
    });
}(),
    SearchServices = function () {
    $('.jsSearchServices a').click(function () {
        $('.jsMapServices').addClass('active');
    });
}(),
    AppointmentForm = function () {

    // $('.jsAppointmentFormPagination a').click(function() {
    //     let index = $(this).parent().index();
    //     $(this).parent().addClass('active').siblings().removeClass('active');
    //
    //     $('.jsAppointmentFormStage').removeClass('active').eq(index).addClass('active');
    //
    //     if (index) {
    //         $('.jsAppointmentFormBack').removeClass('hidden');
    //     } else {
    //         $('.jsAppointmentFormBack').addClass('hidden');
    //     }
    //     return false;
    // });

    var form = $('form[data-form="appointment"]');

    form.submit(function (e) {
        if (!form.attr('data-submit')) {
            e.preventDefault();

            var step = getCurrentFormStep();

            if (step < 3) {
                step++;
                reInitFormStep(step);
            } else {
                // нужно добавить валидацию, если все ок, то отправляет форму
                $('.appointment-form__button').prop('disabled', true);
                form.attr('data-submit', 'submit');
                form.submit();
            }
        }
    });

    $('.jsAppointmentFormBack').click(function () {
        var step = getCurrentFormStep();
        if (step > 1) {
            step--;
            reInitFormStep(step);
        }
    });

    function getCurrentFormStep() {
        return +form.find('.appointment-form__pagination ul li.active').attr('data-step-pagination');
    }

    function reInitFormStep(step) {
        $('.jsAppointmentFormStage').removeClass('active');
        form.find('[data-step="' + step + '"]').addClass('active');

        form.find('.appointment-form__pagination ul li').removeClass('active');
        form.find('.appointment-form__pagination ul li:nth-child(' + step + ')').addClass('active');

        if (step == 1) {
            $('.jsAppointmentFormBack').addClass('hidden');
        } else {
            $('.jsAppointmentFormBack').removeClass('hidden');
        }

        // Если форма валидна, то поменять текст кнопки "Далее" на "Записаться"
    }
}();

var Scroller = function () {
    function Scroller() {
        _classCallCheck(this, Scroller);

        this.scroller;
        this.container = $('.jsScroller');
        this.options = {
            root: '.jsScroller',
            scroller: '.baron__scroller',
            bar: '.baron__bar'
        };
    }

    _createClass(Scroller, [{
        key: 'init',
        value: function init() {
            if (!this.container.length) return;

            this.scroller = (0, _baron2.default)(this.options);
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.scroller) {
                this.scroller.update();
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.scroller) {
                this.scroller.dispose();
            }
        }
    }]);

    return Scroller;
}();

exports.default = Scroller;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(5);

__webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
    function Modal(container) {
        var _this = this;

        _classCallCheck(this, Modal);

        this.container = container || $('.jsModalVideo');
        this.iframe = this.container.find('.modal-video__iframe');
        this.container.on('hide.bs.modal', function () {
            return _this.iframe.html('');
        });
    }

    _createClass(Modal, [{
        key: 'show',
        value: function show(element) {
            var _this2 = this;

            var video = this.setVideo(element);

            if (!video) return;

            this.container.modal('show');
            setTimeout(function () {
                return _this2.iframe.html(video).hide().fadeIn(1000);
            }, 600);
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.container.modal('hide');
            this.iframe.html('');
        }
    }, {
        key: 'setVideo',
        value: function setVideo(element) {
            var source = element.data('src'),
                html = '<iframe class="iframe-youtube" width="100%" height="100%" src="' + source + '?autoplay=1&controls=2&showinfo=0" frameborder="0" allowfullscreen></iframe>';

            if (!source) {
                console.error('Не удалось получить источник для видео');
                return false;
            }
            return html;
        }
    }]);

    return Modal;
}();

exports.default = Modal;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * Bootstrap modal.js v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(2), __webpack_require__(5)) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Modal = factory(global.jQuery, global.Util));
}(this, function ($, Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'modal';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);
      $(this._element).removeClass(ClassName.SHOW);
      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event.FOCUSIN);
      $.removeData(this._element, DATA_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName.SCROLLABLE)) {
        this._dialog.querySelector(Selector.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = _objectSpread({}, Default, $(this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;

}));
//# sourceMappingURL=modal.js.map


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Swiper"] = __webpack_require__(12);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(14) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var g = (function() {
    return this || (1, eval)('this')
}())
var scopedWindow = g && g.window || g

var event = __webpack_require__(0).event
var css = __webpack_require__(0).css
var add = __webpack_require__(0).add
var has = __webpack_require__(0).has
var rm = __webpack_require__(0).rm
var clone = __webpack_require__(0).clone
var qs = __webpack_require__(0).qs

var _baron = baron // Stored baron value for noConflict usage
// var Item = {}
var pos = ['left', 'top', 'right', 'bottom', 'width', 'height']
// Global store for all baron instances (to be able to dispose them on html-nodes)
var instances = []
var origin = {
    v: { // Vertical
        x: 'Y', pos: pos[1], oppos: pos[3], crossPos: pos[0], crossOpPos: pos[2],
        size: pos[5],
        crossSize: pos[4], crossMinSize: 'min-' + pos[4], crossMaxSize: 'max-' + pos[4],
        client: 'clientHeight', crossClient: 'clientWidth',
        scrollEdge: 'scrollLeft',
        offset: 'offsetHeight', crossOffset: 'offsetWidth', offsetPos: 'offsetTop',
        scroll: 'scrollTop', scrollSize: 'scrollHeight'
    },
    h: { // Horizontal
        x: 'X', pos: pos[0], oppos: pos[2], crossPos: pos[1], crossOpPos: pos[3],
        size: pos[4],
        crossSize: pos[5], crossMinSize: 'min-' + pos[5], crossMaxSize: 'max-' + pos[5],
        client: 'clientWidth', crossClient: 'clientHeight',
        scrollEdge: 'scrollTop',
        offset: 'offsetWidth', crossOffset: 'offsetHeight', offsetPos: 'offsetLeft',
        scroll: 'scrollLeft', scrollSize: 'scrollWidth'
    }
}

// Some ugly vars
var opera12maxScrollbarSize = 17
// I hate you https://github.com/Diokuz/baron/issues/110
var macmsxffScrollbarSize = 15
var macosxffRe = /[\s\S]*Macintosh[\s\S]*\) Gecko[\s\S]*/
var isMacFF = macosxffRe.test(scopedWindow.navigator && scopedWindow.navigator.userAgent)

var log, liveBarons, shownErrors

if (process.env.NODE_ENV !== 'production') {
    log = __webpack_require__(7)
    liveBarons = 0
    shownErrors = {
        liveTooMany: false,
        allTooMany: false
    }
}

// window.baron and jQuery.fn.baron points to this function
function baron(user) {
    var withParams = !!user
    var tryNode = (user && user[0]) || user
    var isNode = typeof user == 'string' || tryNode instanceof HTMLElement
    var params = isNode ? { root: user } : clone(user)
    var jQueryMode
    var rootNode
    var defaultParams = {
        direction: 'v',
        barOnCls: '_scrollbar',
        resizeDebounce: 0,
        event: event,
        cssGuru: false,
        impact: 'scroller',
        position: 'static'
    }

    params = params || {}

    // Extending default params by user-defined params
    for (var key in defaultParams) {
        if (params[key] == null) { // eslint-disable-line
            params[key] = defaultParams[key]
        }
    }

    if (process.env.NODE_ENV !== 'production') {
        if (params.position == 'absolute' && params.impact == 'clipper') {
            log('error', [
                'Simultaneous use of `absolute` position and `clipper` impact values detected.',
                'Those values cannot be used together.',
                'See more https://github.com/Diokuz/baron/issues/138'
            ].join(' '), params)
        }
    }

    // `this` could be a jQuery instance
    jQueryMode = this && this instanceof scopedWindow.jQuery

    if (params._chain) {
        rootNode = params.root
    } else if (jQueryMode) {
        params.root = rootNode = this[0]
    } else {
        rootNode = qs(params.root || params.scroller)
    }

    if (process.env.NODE_ENV !== 'production') {
        if (!rootNode) {
            log('error', [
                'Baron initialization failed: root node not found.'
            ].join(', '), params)

            return // or return baron-shell?
        }
    }

    var attr = manageAttr(rootNode, params.direction)
    var id = +attr // Could be NaN

    params.index = id

    // baron() can return existing instances,
    // @TODO update params on-the-fly
    // https://github.com/Diokuz/baron/issues/124
    if (id == id && attr !== null && instances[id]) {
        if (process.env.NODE_ENV !== 'production') {
            if (withParams) {
                log('error', [
                    'repeated initialization for html-node detected',
                    'https://github.com/Diokuz/baron/blob/master/docs/logs/repeated.md'
                ].join(', '), params.root)
            }
        }

        return instances[id]
    }

    // root and scroller can be different nodes
    if (params.root && params.scroller) {
        params.scroller = qs(params.scroller, rootNode)
        if (process.env.NODE_ENV !== 'production') {
            if (!params.scroller) {
                log('error', 'Scroller not found!', rootNode, params.scroller)
            }
        }
    } else {
        params.scroller = rootNode
    }

    params.root = rootNode

    var instance = init(params)

    if (instance.autoUpdate) {
        instance.autoUpdate()
    }

    return instance
}

function arrayEach(_obj, iterator) {
    var i = 0
    var obj = _obj

    if (obj.length === undefined || obj === scopedWindow) obj = [obj]

    while (obj[i]) {
        iterator.call(this, obj[i], i)
        i++
    }
}

// shortcut for getTime
function getTime() {
    return new Date().getTime()
}

if (process.env.NODE_ENV !== 'production') {
    baron._instances = instances
}

function manageEvents(item, eventManager, mode) {
    // Creating new functions for one baron item only one time
    item._eventHandlers = item._eventHandlers || [
        {
            // onScroll:
            element: item.scroller,

            handler: function(e) {
                item.scroll(e)
            },

            type: 'scroll'
        }, {
            // css transitions & animations
            element: item.root,

            handler: function() {
                item.update()
            },

            type: 'transitionend animationend'
        }, {
            // onKeyup (textarea):
            element: item.scroller,

            handler: function() {
                item.update()
            },

            type: 'keyup'
        }, {
            // onMouseDown:
            element: item.bar,

            handler: function(e) {
                e.preventDefault() // Text selection disabling in Opera
                item.selection() // Disable text selection in ie8
                item.drag.now = 1 // Save private byte
                if (item.draggingCls) {
                    add(item.root, item.draggingCls)
                }
            },

            type: 'touchstart mousedown'
        }, {
            // onMouseUp:
            element: document,

            handler: function() {
                item.selection(1) // Enable text selection
                item.drag.now = 0
                if (item.draggingCls) {
                    rm(item.root, item.draggingCls)
                }
            },

            type: 'mouseup blur touchend'
        }, {
            // onCoordinateReset:
            element: document,

            handler: function(e) {
                if (e.button != 2) { // Not RM
                    item._pos0(e)
                }
            },

            type: 'touchstart mousedown'
        }, {
            // onMouseMove:
            element: document,

            handler: function(e) {
                if (item.drag.now) {
                    item.drag(e)
                }
            },

            type: 'mousemove touchmove'
        }, {
            // @TODO make one global listener
            // onResize:
            element: scopedWindow,

            handler: function() {
                item.update()
            },

            type: 'resize'
        }, {
            // @todo remove
            // sizeChange:
            element: item.root,

            handler: function() {
                item.update()
            },

            type: 'sizeChange'
        }, {
            // Clipper onScroll bug https://github.com/Diokuz/baron/issues/116
            element: item.clipper,

            handler: function() {
                item.clipperOnScroll()
            },

            type: 'scroll'
        }
    ]

    arrayEach(item._eventHandlers, function(evt) {
        if (evt.element) {
            // workaround for element-elements in `fix` plugin
            // @todo dispose `fix` in proper way and remove workaround
            if (evt.element.length && evt.element !== scopedWindow) {
                for (var i = 0; i < evt.element.length; i++) {
                    eventManager(evt.element[i], evt.type, evt.handler, mode)
                }
            } else {
                eventManager(evt.element, evt.type, evt.handler, mode)
            }
        }
    })

    // if (item.scroller) {
    //     event(item.scroller, 'scroll', item._eventHandlers.onScroll, mode)
    // }
    // if (item.bar) {
    //     event(item.bar, 'touchstart mousedown', item._eventHandlers.onMouseDown, mode)
    // }
    // event(document, 'mouseup blur touchend', item._eventHandlers.onMouseUp, mode)
    // event(document, 'touchstart mousedown', item._eventHandlers.onCoordinateReset, mode)
    // event(document, 'mousemove touchmove', item._eventHandlers.onMouseMove, mode)
    // event(window, 'resize', item._eventHandlers.onResize, mode)
    // if (item.root) {
    //     event(item.root, 'sizeChange', item._eventHandlers.onResize, mode)
    //     // Custon event for alternate baron update mechanism
    // }
}

// set, remove or read baron-specific id-attribute
// @returns {String|null} - id node value, or null, if there is no attr
function manageAttr(node, direction, mode, id) {
    var attrName = 'data-baron-' + direction + '-id'

    if (mode == 'on') {
        node.setAttribute(attrName, id)
    } else if (mode == 'off') {
        node.removeAttribute(attrName)
    }

    return node.getAttribute(attrName)
}

function init(params) {
    var out = new baron.prototype.constructor(params)

    manageEvents(out, params.event, 'on')

    manageAttr(out.root, params.direction, 'on', instances.length)
    instances.push(out)

    if (process.env.NODE_ENV !== 'production') {
        liveBarons++
        if (liveBarons > 100 && !shownErrors.liveTooMany) {
            log('warn', [
                'You have too many live baron instances on page (' + liveBarons + ')!',
                'Are you forget to dispose some of them?',
                'All baron instances can be found in baron._instances:'
            ].join(' '), instances)
            shownErrors.liveTooMany = true
        }
        if (instances.length > 1000 && !shownErrors.allTooMany) {
            log('warn', [
                'You have too many inited baron instances on page (' + instances.length + ')!',
                'Some of them are disposed, and thats good news.',
                'but baron.init was call too many times, and thats is bad news.',
                'All baron instances can be found in baron._instances:'
            ].join(' '), instances)
            shownErrors.allTooMany = true
        }
    }

    out.update()

    return out
}

function fire(eventName) {
    if (this.events && this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
            var args = Array.prototype.slice.call( arguments, 1 )

            this.events[eventName][i].apply(this, args)
        }
    }
}

baron.prototype = {
    // underscore.js realization
    // used in autoUpdate plugin
    _debounce: function(func, wait) {
        var self = this,
            timeout,
            // args, // right now there is no need for arguments
            // context, // and for context
            timestamp
            // result // and for result

        var later = function() {
            if (self._disposed) {
                clearTimeout(timeout)
                timeout = self = null
                return
            }

            var last = getTime() - timestamp

            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last)
            } else {
                timeout = null
                // result = func.apply(context, args)
                func()
                // context = args = null
            }
        }

        return function() {
            // context = this
            // args = arguments
            timestamp = getTime()

            if (!timeout) {
                timeout = setTimeout(later, wait)
            }

            // return result
        }
    },

    constructor: function(params) {
        var barPos,
            scrollerPos0,
            track,
            resizePauseTimer,
            scrollingTimer,
            resizeLastFire,
            oldBarSize

        resizeLastFire = getTime()

        this.params = params
        this.event = params.event
        this.events = {}

        // DOM elements
        this.root = params.root // Always html node, not just selector
        this.scroller = qs(params.scroller)
        if (process.env.NODE_ENV !== 'production') {
            if (this.scroller.tagName == 'body') {
                log('error', [
                    'Please, do not use BODY as a scroller.',
                    'https://github.com/Diokuz/baron/blob/master/docs/logs/do-not-use-body.md'
                ].join(', '), params)
            }
        }
        this.bar = qs(params.bar, this.root)
        track = this.track = qs(params.track, this.root)
        if (!this.track && this.bar) {
            track = this.bar.parentNode
        }
        this.clipper = this.scroller.parentNode

        // Parameters
        this.direction = params.direction
        this.rtl = params.rtl
        this.origin = origin[this.direction]
        this.barOnCls = params.barOnCls
        this.scrollingCls = params.scrollingCls
        this.draggingCls = params.draggingCls
        this.impact = params.impact
        this.position = params.position
        this.rtl = params.rtl
        this.barTopLimit = 0
        this.resizeDebounce = params.resizeDebounce

        // Updating height or width of bar
        function setBarSize(_size) {
            var barMinSize = this.barMinSize || 20
            var size = _size

            if (size > 0 && size < barMinSize) {
                size = barMinSize
            }

            if (this.bar) {
                css(this.bar, this.origin.size, parseInt(size, 10) + 'px')
            }
        }

        // Updating top or left bar position
        function posBar(_pos) {
            if (this.bar) {
                var was = css(this.bar, this.origin.pos),
                    will = +_pos + 'px'

                if (will && will != was) {
                    css(this.bar, this.origin.pos, will)
                }
            }
        }

        // Free path for bar
        function k() {
            return track[this.origin.client] - this.barTopLimit - this.bar[this.origin.offset]
        }

        // Relative content top position to bar top position
        function relToPos(r) {
            return r * k.call(this) + this.barTopLimit
        }

        // Bar position to relative content position
        function posToRel(t) {
            return (t - this.barTopLimit) / k.call(this)
        }

        // Cursor position in main direction in px // Now with iOs support
        this.cursor = function(e) {
            return e['client' + this.origin.x] ||
                (((e.originalEvent || e).touches || {})[0] || {})['page' + this.origin.x]
        }

        // Text selection pos preventing
        function dontPosSelect() {
            return false
        }

        this.pos = function(x) { // Absolute scroller position in px
            var ie = 'page' + this.origin.x + 'Offset',
                key = (this.scroller[ie]) ? ie : this.origin.scroll

            if (x !== undefined) this.scroller[key] = x

            return this.scroller[key]
        }

        this.rpos = function(r) { // Relative scroller position (0..1)
            var free = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client],
                x

            if (r) {
                x = this.pos(r * free)
            } else {
                x = this.pos()
            }

            return x / (free || 1)
        }

        // Switch on the bar by adding user-defined CSS classname to scroller
        this.barOn = function(dispose) {
            if (this.barOnCls) {
                var noScroll = this.scroller[this.origin.client] >= this.scroller[this.origin.scrollSize]

                if (dispose || noScroll) {
                    if (has(this.root, this.barOnCls)) {
                        rm(this.root, this.barOnCls)
                    }
                } else if (!has(this.root, this.barOnCls)) {
                    add(this.root, this.barOnCls)
                }
            }
        }

        this._pos0 = function(e) {
            scrollerPos0 = this.cursor(e) - barPos
        }

        this.drag = function(e) {
            var rel = posToRel.call(this, this.cursor(e) - scrollerPos0)
            var sub = (this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client])

            this.scroller[this.origin.scroll] = rel * sub
        }

        // Text selection preventing on drag
        this.selection = function(enable) {
            this.event(document, 'selectpos selectstart', dontPosSelect, enable ? 'off' : 'on')
        }

        // onResize & DOM modified handler
        // also fires on init
        // Note: max/min-size didnt sets if size did not really changed (for example, on init in Chrome)
        this.resize = function() {
            var self = this
            var minPeriod = (self.resizeDebounce === undefined) ? 300 : self.resizeDebounce
            var delay = 0

            if (getTime() - resizeLastFire < minPeriod) {
                clearTimeout(resizePauseTimer)
                delay = minPeriod
            }

            function upd() {
                var offset = self.scroller[self.origin.crossOffset]
                var client = self.scroller[self.origin.crossClient]
                var padding = 0
                var was, will

                // https://github.com/Diokuz/baron/issues/110
                if (isMacFF) {
                    padding = macmsxffScrollbarSize

                // Opera 12 bug https://github.com/Diokuz/baron/issues/105
                } else if (client > 0 && offset === 0) {
                    // Only Opera 12 in some rare nested flexbox cases goes here
                    // Sorry guys for magic,
                    // but I dont want to create temporary html-nodes set
                    // just for measuring scrollbar size in Opera 12.
                    // 17px for Windows XP-8.1, 15px for Mac (really rare).
                    offset = client + opera12maxScrollbarSize
                }

                if (offset) { // if there is no size, css should not be set
                    self.barOn()

                    if (self.impact == 'scroller') { // scroller
                        var delta = offset - client + padding

                        // `static` position works only for `scroller` impact
                        if (self.position == 'static') { // static
                            was = css(self.scroller, self.origin.crossSize)
                            will = self.clipper[self.origin.crossClient] + delta + 'px'

                            if (was != will) {
                                self._setCrossSizes(self.scroller, will)
                            }
                        } else { // absolute
                            var styles = {}
                            var key = self.rtl ? 'Left' : 'Right'

                            if (self.direction == 'h') {
                                key = 'Bottom'
                            }

                            styles['padding' + key] = delta + 'px'
                            css(self.scroller, styles)
                        }
                    } else { // clipper
                        was = css(self.clipper, self.origin.crossSize)
                        will = client + 'px'

                        if (was != will) {
                            self._setCrossSizes(self.clipper, will)
                        }
                    }
                } else {
                    // do nothing (display: none, or something)
                }

                Array.prototype.unshift.call(arguments, 'resize')
                fire.apply(self, arguments)

                resizeLastFire = getTime()
            }

            if (delay) {
                resizePauseTimer = setTimeout(upd, delay)
            } else {
                upd()
            }
        }

        this.updatePositions = function(force) {
            var newBarSize,
                self = this

            if (self.bar) {
                newBarSize = (track[self.origin.client] - self.barTopLimit) *
                    self.scroller[self.origin.client] / self.scroller[self.origin.scrollSize]

                // Positioning bar
                if (force || parseInt(oldBarSize, 10) != parseInt(newBarSize, 10)) {
                    setBarSize.call(self, newBarSize)
                    oldBarSize = newBarSize
                }

                barPos = relToPos.call(self, self.rpos())

                posBar.call(self, barPos)
            }

            Array.prototype.unshift.call( arguments, 'scroll' )
            fire.apply(self, arguments)
        }

        // onScroll handler
        this.scroll = function() {
            var self = this

            self.updatePositions()

            if (self.scrollingCls) {
                if (!scrollingTimer) {
                    add(self.root, self.scrollingCls)
                }
                clearTimeout(scrollingTimer)
                scrollingTimer = setTimeout(function() {
                    rm(self.root, self.scrollingCls)
                    scrollingTimer = undefined
                }, 300)
            }
        }

        // https://github.com/Diokuz/baron/issues/116
        this.clipperOnScroll = function() {
            // WTF is this line? https://github.com/Diokuz/baron/issues/134
            // if (this.direction == 'h') return

            // assign `initial scroll position` to `clipper.scrollLeft` (0 for ltr, ~20 for rtl)
            if (!this.rtl) {
                this.clipper[this.origin.scrollEdge] = 0
            } else {
                this.clipper[this.origin.scrollEdge] = this.clipper[this.origin.scrollSize]
            }
        }

        // Flexbox `align-items: stretch` (default) requires to set min-width for vertical
        // and max-height for horizontal scroll. Just set them all.
        // http://www.w3.org/TR/css-flexbox-1/#valdef-align-items-stretch
        this._setCrossSizes = function(node, size) {
            var styles = {}

            styles[this.origin.crossSize] = size
            styles[this.origin.crossMinSize] = size
            styles[this.origin.crossMaxSize] = size

            css(node, styles)
        }

        // Set common css rules
        this._dumbCss = function(on) {
            if (params.cssGuru) return

            var overflow = on ? 'hidden' : null
            var msOverflowStyle = on ? 'none' : null

            css(this.clipper, {
                overflow: overflow,
                msOverflowStyle: msOverflowStyle,
                position: this.position == 'static' ? '' : 'relative'
            })

            var scroll = on ? 'scroll' : null
            var axis = this.direction == 'v' ? 'y' : 'x'
            var scrollerCss = {}

            scrollerCss['overflow-' + axis] = scroll
            scrollerCss['box-sizing'] = 'border-box'
            scrollerCss.margin = '0'
            scrollerCss.border = '0'

            if (this.position == 'absolute') {
                scrollerCss.position = 'absolute'
                scrollerCss.top = '0'

                if (this.direction == 'h') {
                    scrollerCss.left = scrollerCss.right = '0'
                } else {
                    scrollerCss.bottom = '0'
                    scrollerCss.right = this.rtl ? '0' : ''
                    scrollerCss.left = this.rtl ? '' : '0'
                }
            }

            css(this.scroller, scrollerCss)
        }

        // onInit actions
        this._dumbCss(true)

        if (isMacFF) {
            var padding = 'paddingRight'
            var styles = {}
            // getComputedStyle is ie9+, but we here only in f ff
            var paddingWas = scopedWindow.getComputedStyle(this.scroller)[[padding]]

            if (params.direction == 'h') {
                padding = 'paddingBottom'
            } else if (params.rtl) {
                padding = 'paddingLeft'
            }

            var numWas = parseInt(paddingWas, 10)

            if (numWas != numWas) numWas = 0
            styles[padding] = (macmsxffScrollbarSize + numWas) + 'px'
            css(this.scroller, styles)
        }

        return this
    },

    // fires on any update and on init
    update: function(params) {
        if (process.env.NODE_ENV !== 'production') {
            if (this._disposed) {
                log('error', [
                    'Update on disposed baron instance detected.',
                    'You should clear your stored baron value for this instance:',
                    this
                ].join(' '), params)
            }
        }

        fire.call(this, 'upd', params) // Update all plugins' params

        this.resize(1)
        this.updatePositions(1)

        return this
    },

    // One instance
    dispose: function() {
        if (process.env.NODE_ENV !== 'production') {
            if (this._disposed) {
                log('error', 'Already disposed:', this)
            }

            liveBarons--
        }

        manageEvents(this, this.event, 'off')
        manageAttr(this.root, this.params.direction, 'off')
        if (this.params.direction == 'v') {
            this._setCrossSizes(this.scroller, '')
        } else {
            this._setCrossSizes(this.clipper, '')
        }
        this._dumbCss(false)
        this.barOn(true)
        fire.call(this, 'dispose')
        instances[this.params.index] = null
        this.params = null
        this._disposed = true
    },

    on: function(eventName, func, arg) {
        var names = eventName.split(' ')

        for (var i = 0; i < names.length; i++) {
            if (names[i] == 'init') {
                func.call(this, arg)
            } else {
                this.events[names[i]] = this.events[names[i]] || []

                this.events[names[i]].push(function(userArg) {
                    func.call(this, userArg || arg)
                })
            }
        }
    },

    baron: function(params) {
        params.root = this.params.root
        params.scroller = this.params.scroller
        params.direction = (this.params.direction == 'v') ? 'h' : 'v'
        params._chain = true

        return baron(params)
    }
}

// baron.fn.constructor.prototype = baron.fn
baron.prototype.constructor.prototype = baron.prototype

// Use when you need "baron" global var for another purposes
baron.noConflict = function() {
    scopedWindow.baron = _baron // Restoring original value of "baron" global var

    return baron
}

baron.version = '3.0.1'

baron.prototype.autoUpdate = __webpack_require__(16)(scopedWindow)
baron.prototype.fix = __webpack_require__(17)
baron.prototype.controls = __webpack_require__(18)

module.exports = baron

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Autoupdate plugin for baron 0.6+ */

function autoUpdateOne(MutationObserver) {
    var self = this
    var watcher

    if (this._au) {
        return
    }

    function actualizeWatcher() {
        if (!self.root[self.origin.offset]) {
            startWatch()
        } else {
            stopWatch()
        }
    }

    // Set interval timeout for watching when root node will be visible
    function startWatch() {
        if (watcher) return

        watcher = setInterval(function() {
            if (self.root[self.origin.offset]) {
                stopWatch()
                self.update()
            }
        }, 300) // is it good enought for you?)
    }

    function stopWatch() {
        clearInterval(watcher)
        watcher = null
    }

    var debouncedUpdater = self._debounce(function() {
        self.update()
    }, 300)

    this._observer = new MutationObserver(function() {
        actualizeWatcher()
        self.update()
        debouncedUpdater()
    })

    this.on('init', function() {
        self._observer.observe(self.root, {
            childList: true,
            subtree: true,
            characterData: true
            // attributes: true
            // No reasons to set attributes to true
            // The case when root/child node with already properly inited baron toggled to hidden and then back to visible,
            // and the size of parent was changed during that hidden state, is very rare
            // Other cases are covered by watcher, and you still can do .update by yourself
        })

        actualizeWatcher()
    })

    this.on('dispose', function() {
        self._observer.disconnect()
        stopWatch()
        delete self._observer
    })

    this._au = true
}

module.exports = function autoUpdateCreator(win) {
    var MutationObserver = win.MutationObserver || win.WebKitMutationObserver || win.MozMutationObserver || null

    return function autoUpdate() {
        if (!MutationObserver) return this

        autoUpdateOne.call(this, MutationObserver)

        return this
    }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/* Fixable elements plugin for baron */

var log = __webpack_require__(7)
var css = __webpack_require__(0).css
var add = __webpack_require__(0).add
var rm = __webpack_require__(0).rm

module.exports = function fix(userParams) {
    var elements,
        viewPortSize,
        params = { // Default params
            outside: '',
            inside: '',
            before: '',
            after: '',
            past: '',
            future: '',
            radius: 0,
            minView: 0
        },
        topFixHeights = [], // inline style for element
        topRealHeights = [], // ? something related to negative margins for fixable elements
        headerTops = [], // offset positions when not fixed
        scroller = this.scroller,
        eventManager = this.event,
        self = this

    if (process.env.NODE_ENV !== 'production') {
        if (this.position != 'static') {
            log('error', [
                'Fix plugin cannot work properly in non-static baron position.',
                'See more https://github.com/Diokuz/baron/issues/135'
            ].join(' '), this.params)
        }
    }

    // i - number of fixing element, pos - fix-position in px, flag - 1: top, 2: bottom
    // Invocation only in case when fix-state changed
    function fixElement(i, _pos, flag) {
        var pos = _pos
        var ori = flag == 1 ? 'pos' : 'oppos'

        if (viewPortSize < (params.minView || 0)) { // No headers fixing when no enought space for viewport
            pos = undefined
        }

        // Removing all fixing stuff - we can do this because fixElement triggers only when fixState really changed
        css(elements[i], this.origin.pos, '')
        css(elements[i], this.origin.oppos, '')
        rm(elements[i], params.outside)

        // Fixing if needed
        if (pos !== undefined) {
            pos += 'px'
            css(elements[i], this.origin[ori], pos)
            add(elements[i], params.outside)
        }
    }

    function bubbleWheel(e) {
        try {
            var i = document.createEvent('WheelEvent') // i - for extra byte

            // evt.initWebKitWheelEvent(deltaX, deltaY, window, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey)
            i.initWebKitWheelEvent(e.originalEvent.wheelDeltaX, e.originalEvent.wheelDeltaY)
            scroller.dispatchEvent(i)
            e.preventDefault()
        } catch (ex) {
            //
        }
    }

    function init(_params) {
        var pos

        for (var key in _params) {
            params[key] = _params[key]
        }

        if (params.elements instanceof HTMLElement) {
            elements = [params.elements]
        } else if (typeof params.elements == 'string') {
            elements = this.scroller.querySelectorAll(params.elements)
        } else if (params.elements && params.elements[0] instanceof HTMLElement) {
            elements = params.elements
        }

        if (elements) {
            viewPortSize = this.scroller[this.origin.client]
            for (var i = 0; i < elements.length; i++) {
                // Variable header heights
                pos = {}
                pos[this.origin.size] = elements[i][this.origin.offset] + 'px'
                if (elements[i].parentNode !== this.scroller) {
                    css(elements[i].parentNode, pos)
                }
                pos = {}
                pos[this.origin.crossSize] = elements[i].parentNode[this.origin.crossClient] + 'px'
                css(elements[i], pos)

                // Between fixed headers
                viewPortSize -= elements[i][this.origin.offset]

                headerTops[i] = elements[i].parentNode[this.origin.offsetPos] // No paddings for parentNode

                // Summary elements height above current
                topFixHeights[i] = (topFixHeights[i - 1] || 0) // Not zero because of negative margins
                topRealHeights[i] = (topRealHeights[i - 1] || Math.min(headerTops[i], 0))

                if (elements[i - 1]) {
                    topFixHeights[i] += elements[i - 1][this.origin.offset]
                    topRealHeights[i] += elements[i - 1][this.origin.offset]
                }

                if ( !(i == 0 && headerTops[i] == 0)/* && force */) {
                    this.event(elements[i], 'mousewheel', bubbleWheel, 'off')
                    this.event(elements[i], 'mousewheel', bubbleWheel)
                }
            }

            if (params.limiter && elements[0]) { // Bottom edge of first header as top limit for track
                if (this.track && this.track != this.scroller) {
                    pos = {}
                    pos[this.origin.pos] = elements[0].parentNode[this.origin.offset] + 'px'
                    css(this.track, pos)
                } else {
                    this.barTopLimit = elements[0].parentNode[this.origin.offset]
                }
                // this.barTopLimit = elements[0].parentNode[this.origin.offset]
                this.scroll()
            }

            if (params.limiter === false) { // undefined (in second fix instance) should have no influence on bar limit
                this.barTopLimit = 0
            }
        }

        var event = {
            element: elements,

            handler: function() {
                var parent = this.parentNode,
                    top = parent.offsetTop,
                    num

                // finding num -> elements[num] === this
                for (var j = 0; j < elements.length; j++ ) {
                    if (elements[j] === this) num = j
                }

                var locPos = top - topFixHeights[num]

                if (params.scroll) { // User defined callback
                    params.scroll({
                        x1: self.scroller.scrollTop,
                        x2: locPos
                    })
                } else {
                    self.scroller.scrollTop = locPos
                }
            },

            type: 'click'
        }

        if (params.clickable) {
            this._eventHandlers.push(event) // For auto-dispose
            // eventManager(event.element, event.type, event.handler, 'off')
            for (var j = 0; j < event.element.length; j++) {
                eventManager(event.element[j], event.type, event.handler, 'on')
            }
        }
    }

    this.on('init', init, userParams)

    var fixFlag = [], // 1 - past, 2 - future, 3 - current (not fixed)
        gradFlag = []

    this.on('init scroll', function() {
        var fixState, hTop, gradState
        var i

        if (elements) {
            var change

            // fixFlag update
            for (i = 0; i < elements.length; i++) {
                fixState = 0
                if (headerTops[i] - this.pos() < topRealHeights[i] + params.radius) {
                    // Header trying to go up
                    fixState = 1
                    hTop = topFixHeights[i]
                } else if (headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize - params.radius) {
                    // Header trying to go down
                    fixState = 2
                    // console.log('topFixHeights[i] + viewPortSize + topRealHeights[i]', topFixHeights[i], this.scroller[this.origin.client], topRealHeights[i])
                    hTop = this.scroller[this.origin.client] - elements[i][this.origin.offset] - topFixHeights[i] - viewPortSize
                    // console.log('hTop', hTop, viewPortSize, elements[this.origin.offset], topFixHeights[i])
                    // (topFixHeights[i] + viewPortSize + elements[this.origin.offset]) - this.scroller[this.origin.client]
                } else {
                    // Header in viewport
                    fixState = 3
                    hTop = undefined
                }

                gradState = false
                if (headerTops[i] - this.pos() < topRealHeights[i] || headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize) {
                    gradState = true
                }

                if (fixState != fixFlag[i] || gradState != gradFlag[i]) {
                    fixElement.call(this, i, hTop, fixState)
                    fixFlag[i] = fixState
                    gradFlag[i] = gradState
                    change = true
                }
            }

            // Adding positioning classes (on last top and first bottom header)
            if (change) { // At leats one change in elements flag structure occured
                for (i = 0; i < elements.length; i++) {
                    if (fixFlag[i] == 1 && params.past) {
                        add(elements[i], params.past)
                        rm(elements[i], params.future)
                    }

                    if (fixFlag[i] == 2 && params.future) {
                        add(elements[i], params.future)
                        rm(elements[i], params.past)
                    }

                    if (fixFlag[i] == 3) {
                        rm(elements[i], params.past)
                        rm(elements[i], params.future)
                        add(elements[i], params.inside)
                    }

                    if (fixFlag[i] != fixFlag[i + 1] && fixFlag[i] == 1) {
                        add(elements[i], params.before)
                        rm(elements[i], params.after) // Last top fixed header
                    } else if (fixFlag[i] != fixFlag[i - 1] && fixFlag[i] == 2) {
                        add(elements[i], params.after)
                        rm(elements[i], params.before) // First bottom fixed header
                    } else {
                        rm(elements[i], params.before)
                        rm(elements[i], params.after)
                    }

                    if (params.grad) {
                        if (gradFlag[i]) {
                            add(elements[i], params.grad)
                        } else {
                            rm(elements[i], params.grad)
                        }
                    }
                }
            }
        }
    })

    this.on('resize upd', function(updParams) {
        init.call(this, updParams && updParams.fix)
    })

    return this
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Controls plugin for baron */

var qs = __webpack_require__(0).qs

module.exports = function controls(params) {
    var forward, backward, track, screen,
        self = this,
        event

    screen = params.screen || 0.9

    if (params.forward) {
        forward = qs(params.forward, this.clipper)

        event = {
            element: forward,

            handler: function() {
                var y = self.pos() + (params.delta || 30)

                self.pos(y)
            },

            type: 'click'
        }

        this._eventHandlers.push(event) // For auto-dispose
        this.event(event.element, event.type, event.handler, 'on')
    }

    if (params.backward) {
        backward = qs(params.backward, this.clipper)

        event = {
            element: backward,

            handler: function() {
                var y = self.pos() - (params.delta || 30)

                self.pos(y)
            },

            type: 'click'
        }

        this._eventHandlers.push(event) // For auto-dispose
        this.event(event.element, event.type, event.handler, 'on')
    }

    if (params.track) {
        if (params.track === true) {
            track = this.track
        } else {
            track = qs(params.track, this.clipper)
        }

        if (track) {
            event = {
                element: track,

                handler: function(e) {
                    // https://github.com/Diokuz/baron/issues/121
                    if (e.target != track) return

                    var x = e['offset' + self.origin.x],
                        xBar = self.bar[self.origin.offsetPos],
                        sign = 0

                    if (x < xBar) {
                        sign = -1
                    } else if (x > xBar + self.bar[self.origin.offset]) {
                        sign = 1
                    }

                    var y = self.pos() + sign * screen * self.scroller[self.origin.client]

                    self.pos(y)
                },

                type: 'mousedown'
            }

            this._eventHandlers.push(event) // For auto-dispose
            this.event(event.element, event.type, event.handler, 'on')
        }
    }
}


/***/ })
],[8]);
//# sourceMappingURL=desktop.bundle.map