// import 'babel-polyfill';
// // import Promise from 'es6-promise-promise'; // нужен^ если используется require.ensure, для ie11-
import 'expose-loader?$!expose-loader?jQuery!jquery';
import Modal from 'modal';
// import Swiper from 'swiper/dist/js/swiper.js';
import 'expose-loader?Swiper!swiper/dist/js/swiper.js';
import 'jquery-ui';
import baron from 'baron';

let ww = $(window).width(),
    wh = $(window).height(),
    isMobile = $('body').hasClass('mobile'),

    SliderReviews = new Swiper('.landing-reviews__slider .swiper-container', {
        speed: 500,
        slidesPerView: function () {
            return isMobile ? 1.2 : 1.5;
        }(),
        spaceBetween: function () {
            return isMobile ? 20 : 60;
        }(),
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        }
    }),

    SliderFunds = function () {
        if (isMobile) {
            new Swiper('.landing-funds__funds .swiper-container', {
                slidesPerView: 1,
                spaceBetween: 60,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }
    }(),

    SliderPartners = function () {
        if (isMobile) {
            new Swiper('.landing-partners__partners .swiper-container', {
                slidesPerView: 1,
                spaceBetween: 60,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }
    }(),

    SliderEventsCurrent = new Swiper('.events-current__slider .swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    }),

    SliderProduct = function() {
        var productThumbs;
        var productPhoto;
        if (isMobile) {
            productThumbs = new Swiper('.product__thumbs', {
                spaceBetween: 10,
                slidesPerView: 4,
                // loop: true,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
            productPhoto = new Swiper('.product__photo', {
                spaceBetween: 10,
                // loop:true,
                loopedSlides: 5, //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: productThumbs,
                },
            });
        } else {
            productThumbs = new Swiper('.product__thumbs', {
                spaceBetween: 10,
                slidesPerView: 4,
                direction: 'vertical',
                mousewheel: true,
                keyboard: {
                    enabled: true,
                },
                // loop: true,
                freeMode: true,
                loopedSlides: 5, //looped slides should be the same
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
            productPhoto = new Swiper('.product__photo', {
                spaceBetween: 10,
                keyboard: {
                    enabled: true,
                },
                // loop:true,
                loopedSlides: 5, //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: productThumbs,
                },
            });
        }
    }(),

    SliderSertificates =  new Swiper('.specialist__certificates__slider .swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    }),

    SliderCities = new Swiper('.map-cities .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        draggable: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    }),

    SliderProductsCheckout = function () {
        if (isMobile) {
            new Swiper('.checkout-products__slider .swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: '.checkout-products__slider .swiper-button-next',
                    prevEl: '.checkout-products__slider .swiper-button-prev',
                },
            })
        } else {
            new Swiper('.checkout-products__slider .swiper-container', {
                slidesPerView: 3,
                centeredSlides: true,
                loop: true,
                navigation: {
                    nextEl: '.checkout-products__slider .swiper-button-next',
                    prevEl: '.checkout-products__slider .swiper-button-prev',
                },
            })
        }
    }(),

    SliderPromotions = function () {
        if (isMobile) {
            new Swiper('.promotions-slider .swiper-container', {
                speed: 1500,
                slidesPerView: 'auto',
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        } else {
            new Swiper('.promotions-slider .swiper-container', {
                speed: 1500,
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }
    }(),

    SliderImages = function () {
        if (isMobile) {
            new Swiper('.images-slider .swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
    }(),

    SliderConcept = new Swiper('.franchise-concept__slider .swiper-container', {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }),

    MethodCardsMobile = function () {
        $('.methods__card').on('click', function () {
            $(this).toggleClass('show').find('p').slideToggle('slow');
        });
    }(),

    TrainingsMobile = function () {
        $('.training__direction').on('click', function () {
            $(this).toggleClass('show').find('ol').slideToggle('slow');
        });
    }(),

    EquipmentDescMobile = function () {
        $('.equipment__card-desc').on('click', function () {
            $(this).toggleClass('show');
        });
    }(),

    ScheduleMobile = function () {
        $('.schedule-table__course').on('click', function () {
            $(this).toggleClass('show').find('.schedule-table__course-hidden').slideToggle('slow');
        });
    }(),

    ServicesMobile = function () {
        $('.services-table__service').on('click', function () {
            $(this).toggleClass('show').find('.services-table__service-hidden').slideToggle('slow');
        });

        $('.services-filter').on('click', function () {
            $(this).toggleClass('show');
        });
    }(),

    nav = (function() {
        $('.jsNavToggle').click(function() {
            $(this).toggleClass('active');
            $('.jsMobileNav').toggleClass('active');
            return false;
        });
    })(),

    AmountProduct = function() {
        $('.button_minus').on('click', function(e) {
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

        $('.button_plus').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $input = $this.closest('div').find('input');
            var value = parseInt($input.val());
            var id = $input.attr('id');

            if (id === 'working_days') {
                if (value < 31) {
                    value = value + 1;
                } else {
                    value = 31;
                }
            } else if (id === 'working_hours') {
                if (value < 24) {
                    value = value + 1;
                } else {
                    value = 24;
                }
            } else {
                if (value < 999) {
                    value = value + 1;
                } else {
                    value = 999;
                }
            }

            $input.val(value);
        });

    }(),
    
    Basket = function () {
        $('.menu__item_basket p').click(function () {
            $(this).parent().addClass('active');
            $('body').addClass('layout');
        });

        if (isMobile) {
            $('.header__basket p').click(function () {
                $(this).parent().find('.basket').slideToggle('slow');
            });
        }
        
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
        if ( hash !== '') {
            var i = $('ul.tabs__caption li').has('a[href*="' + hash + '"]').index();
            $('ul.tabs__caption li').has('a[href*="' + hash + '"]').addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
        }

        if ((hash === '#medcenters') && !isMobile) {
            SliderCities.update();
        }

        if (hash === '#courses' && $('.landing-reviews__slider').length > 0) {
            $.each(SliderReviews, function (i) {
                SliderReviews[i].update();
            });
        }

        $('ul.tabs__caption').on('click', 'li:not(.active) a', function() {
            $(this).parent()
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).parent().index()).addClass('active');
            if (($(this).attr('href') === '#medcenters') && !isMobile) {
                SliderCities.update();
            }
            if ($(this).attr('href') === '#courses' && $('.landing-reviews__slider').length > 0) {
                $.each(SliderReviews, function (i) {
                    SliderReviews[i].update();
                });
            }
        });
    }(),

    SearchServices = function() {
        $('.jsSearchServices a').click(function () {
            $('.jsMapServices').addClass('active');
        });
    }(),

    ShowServicesPrices = function() {
        $('.jsServicesFilter li').on('click', function () {
            if (!$(this).hasClass('active')) {
                let service_name = $(this).attr('data-services');
                $(this).closest('.jsServicesFilter').children('li').each(function (index, filter) {
                    $(filter).removeClass('active');
                });
                $(this).addClass('active');
                $('.jsServicesPrice').children('section').each(function (index, filter) {
                    $(filter).removeClass('active');
                });
                $('.jsServicesPrice').children('section').each(function (index, filter) {
                    if ($(filter).attr('id') === service_name) {
                        $(filter).addClass('active');
                    }
                });
            }
        })
    }(),
    
    ShowCharacter = function () {
        $('.franchise-calculator__desc').click(function () {
            $(this).toggleClass('hide');
            $('.franchise-calculator__initial-data').slideToggle({
                duration: 'fast',
                easing: 'linear'
            });
        });
    }(),

    FranchiseAnimate = function () {
        let stepsBlock = $('.franchise-steps');
        let chartBlock = $('.franchise-chart__chart');
        let stepsBlockPosition;
        let chartBlockPosition;
        if (stepsBlock.length > 0) {
            stepsBlockPosition = stepsBlock.offset().top + 400;
        }
        if (chartBlock.length > 0) {
            chartBlockPosition = chartBlock.offset().top + 300;
        }

        let windowHeight = $(window).height();
        let scrollToStepsBlock = stepsBlockPosition - windowHeight;
        let scrollToChartBlock = chartBlockPosition - windowHeight;

        $(window).scroll(function(){
            var windowScrollTop = $(this).scrollTop();
            if(windowScrollTop > scrollToStepsBlock){
                stepsBlock.addClass('animate');
            }
            if (windowScrollTop > scrollToChartBlock) {
                chartBlock.addClass('animate');
            }
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

        let form = $('form[data-form="appointment"]');

        form.submit(function(e){
            if (!form.attr('data-submit')) {
                e.preventDefault();

                let step = getCurrentFormStep();

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

        $('.jsAppointmentFormBack').click(function(){
            let step = getCurrentFormStep();
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

export default class Scroller {
    constructor() {
        this.scroller;
        this.container = $('.jsScroller');
        this.options = {
            root: '.jsScroller',
            scroller: '.baron__scroller',
            bar: '.baron__bar'
        };
    }
    init() {
        if (!this.container.length) return;

        this.scroller = baron(this.options);
    }
    update() {
        if (this.scroller) {
            this.scroller.update();
        }
    }
    destroy() {
        if (this.scroller) {
            this.scroller.dispose();
        }
    }
}

