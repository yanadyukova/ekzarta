var desktop =
webpackJsonp_name_([0],[
/* 0 */
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
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(5);

__webpack_require__(7);

// // import skrollr from 'skrollr';
// // import isotope from 'isotope-layout/dist/isotope.pkgd.js';
// import gridstack from 'gridstack/dist/gridstack.js';
// import selectize from 'selectize';
//

// import Modal from 'modal';
// import Swiper from 'swiper/dist/js/swiper.js';
var ww = $(window).width(),
    wh = $(window).height(),
    isMobile = $('body').hasClass('mobile'),

//     loader = (function() {
//         if ($('[data-page="test"]').length) {
//             require.ensure([], () => {
//                 let Test = require('test').default;
//
//                 new Test().run();
//             });
//         }
//
//         if ($('[data-page="lk"]').length) {
//             require.ensure([], () => {
//                 require('lk').default();
//             });
//         }
//
//         if ($('[data-form="event"]').length) {
//             require.ensure([], () => {
//                 require('event/make').form();
//             });
//         }
//
//         if ($('[data-page="main"]').length) {
//             require.ensure([], () => {
//                 require('main').default();
//             });
//         }
//     })(),
//     plugins = (function() {
//
//     })(),
//     modals = (function() {
//         $(document).on('click', '[data-modal-video]', function() {
//         // $('[data-modal-video]').click(function() {
//             new Modal($('.jsModalVideo')).show($(this));
//
//             return false;
//         });
//
//         $('[data-modal-video-uploaded]').click(function() {
//             let src = $(this).data('src');
//
//             $('.jsModalVideoUploaded').modal('show');
//             $('.jsModalVideoUploaded .modal-video__iframe').html(`
//                 <video autoplay controls>
//                     <source src="${src}" type="video/mp4">
//                 </video>
//             `);
//
//             return false;
//         });
//         $('.jsModalVideoUploaded').on('hide.bs.modal', () => $('.jsModalVideoUploaded .modal-video__iframe').html(''));
//     })(),
//     lang = (function () {
//         $('.jsLangToggle').click(function() {
//             $('.jsLang').toggleClass('active');
//             return false;
//         });
//
//         $('.jsModalCountryConfirmListToggle').click(function() {
//             $(this).siblings('ul').toggle();
//             return false;
//         });
//     })(),
//     nav = (function() {
//         $('.nav__toggle.jsNavToggleMobile').click(function() {
//             $(this).closest('nav').toggleClass('active');
//             return false;
//         });
//
//         // $('.jsNavToggleLinkMobile').click(function() {
//         //     $(this).closest('.nav').find('.nav__toggle').text($(this).text());
//         //     return false;
//         // });
//
//         if (isMobile) {
//             $(window).on('load', function() {
//                 new Swiper ($('.jsSliderNavMobile').find('.swiper-container'), {
//                     slidesPerView: 'auto',
//                     // centeredSlides: true,
//                     observer: true,
//                     observeParents: true,
//                     initialSlide: $('.jsSliderNavMobile').find('.swiper-container a.active').parent().index()
//                 });
//             });
//         }
//     })(),
//     grid = (function() {
//         // let cellHeight = window.innerWidth / 12;
//         let cellHeight = 'auto';
//         if (isMobile) {
//             cellHeight = 200;
//         }
//         $('.jsGrid').gridstack({
//             cellHeight: cellHeight,
//             verticalMargin: 0,
//             minWidth: 970,
//         });
//
//         // let $grid = $('.jsGrid').isotope({
//         //     itemSelector: '.category__cell',
//         //     percentPosition: true,
//         //     masonry: {
//         //         columnWidth: '.category__cell_size',
//         //     }
//         // });
//
//         // $('.jsNavGrid .nav__link').click(function() {
//         //     let filterValue = $(this).attr('data-filter');
//
//         //     $grid.isotope({filter: filterValue});
//         //     $(this).addClass('nav__link_active').closest('li').siblings().find('.nav__link').removeClass('nav__link_active');
//
//         //     return false;
//         // });
//
//     })(),
//     copyLink = (function() {
//         $('.jsCopyLink').click(function() {
//             $(this).siblings('input').select();
//
//             if (document.queryCommandSupported('copy')) {
//                 document.execCommand('copy');
//             }
//
//             return false;
//         });
//     })(),
//     map = (function() {
//         $('.jsLandingMapToggle a').click(function() {
//             let index = $(this).parent().index();
//
//             $(this).parent().addClass('active').siblings().removeClass('active');
//             $('.jsLandingMapBg').removeClass('active').eq(index).addClass('active');
//             $('.jsLandingMapItem').removeClass('active').eq(index).addClass('active');
//             return false;
//         });
//
//         if (isMobile) {
//             $('.lk-landing-tabs__button a').each(function(index, el) {
//                 var text = $(this).text();
//                 text = text.replace(/^\s+|\s+$/g, '');
//                 text = text.replace(' ', '<br>');
//                 $(this).html(text);
//             });
//         }
//
//         $('.jsMapVideoVoiceToggle').click(function() {
//             let video = $('.jsMapVideo')[0];
//
//             $(this).toggleClass('active');
//             video.muted = !video.muted;
//
//             return false;
//         });
//     })(),
//     scrollTo = (function() {
//         const container = $('.jsScrollTo');
//
//         if (!container.length) {
//             return;
//         }
//
//         container.click(function() {
//             let id = $(this).attr('href');
//
//                 if (id[0] === '/') {
//                     id = id.slice(1);
//                 }
//
//
//             let baseAnimate = $('html, body'),
//                 isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
//                 offset;
//
//             offset = $(id).offset().top;
//
//             if (isFirefox) {
//                 baseAnimate = $('html');
//             }
//
//             if (isMobile) {
//                 offset = offset - 50;
//             }
//
//             baseAnimate.animate({scrollTop: offset}, 400);
//
//             return false;
//         });
//     })(),
//     addCheckbox = (function() {
//         $('.jsEventTextareaAdd').click(function() {
//             $(this).closest('.checkbox-form').find('.jsEventTextarea').show();
//             $(this).closest('.checkbox-form').find('.jsEventTextarea textarea').val('');
//             $(this).hide();
//             return false;
//         });
//         $('.jsEventCheckboxAdd').click(function() {
//             let value = $(this).closest('.jsEventTextarea').find('textarea').val();
//
//             if (value === '') {
//                 return false;
//             }
//
//             $(this).closest('.checkbox-form').find('.jsEventTextarea').hide().attr('disabled', 'disabled');
//             $(this).closest('.checkbox-form').find('.jsEventCheckbox.checkbox-form__input_hidden').eq(0).removeClass('checkbox-form__input_hidden')
//                 .find('input[type="hidden"]').val(value)
//                 .parent().find('label').text(value)
//                 .parent().find('input[type="checkbox"]').prop('checked', true);
//
//             if ($(this).closest('.checkbox-form').find('.jsEventCheckbox.checkbox-form__input_hidden').length) {
//                 $(this).closest('.checkbox-form').find('.jsEventTextareaAdd').show();
//             }
//
//             return false;
//         });
//
//         $(document).on('click', '.jsEventCheckboxRemove', function() {
//             $(this).closest('.jsEventCheckbox').addClass('checkbox-form__input_hidden');
//             $(this).closest('.jsEventCheckbox').find('input[type="hidden"]').val('');
//             $(this).closest('.checkbox-form').find('.jsEventTextarea textarea').val('');
//             $(this).closest('.checkbox-form').find('.jsEventTextareaAdd').show();
//             return false;
//         });
//     })(),
//     closeReminder = (function() {
//         $('.reminder__close').click(function(){
//             $('.reminder').css('opacity', '0');
//         });
//     })(),
//     galleryOlapic = (function() {
//         $('[data-modal-olapic]').click(function() {
//             let modal = $(this).data('modal-class');
//             $(modal).modal('show');
//
//             let source = $(modal).find('.modal-gallery-iframe');
//
//             if (!source.attr('src')) {
//                 source.attr('src', source.data('src'));
//             }
//
//             return false;
//         });
//     })(),
//     eventsRejectedReason = (function(){
//         $('.event-card .reason').click(function(){
//             var event_id = +$(this).attr('data-event-id');
//             $('.hint[data-event-id="' + event_id + '"]').addClass('active');
//         });
//     })();

SliderReviews = new Swiper('.landing-reviews__slider .swiper-container', {
    speed: 500,
    slidesPerView: 1.5,
    spaceBetween: 60,
    // loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    }
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
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
        thumbs: {
            swiper: productThumbs
        }
    });
}(),
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
    Form = function () {

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
}(); // import 'babel-polyfill';
// // import Promise from 'es6-promise-promise'; // нужен^ если используется require.ensure, для ie11-

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(4);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(1);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Swiper"] = __webpack_require__(6);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */,
/* 7 */
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
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1), __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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


/***/ })
],[2]);
//# sourceMappingURL=desktop.bundle.map