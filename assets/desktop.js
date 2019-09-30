// import 'babel-polyfill';
// // import Promise from 'es6-promise-promise'; // нужен^ если используется require.ensure, для ie11-
import 'expose-loader?$!expose-loader?jQuery!jquery';
// import Modal from 'modal';
// import Swiper from 'swiper/dist/js/swiper.js';
import 'expose-loader?Swiper!swiper/dist/js/swiper.js';
import 'jquery-ui';
// // import skrollr from 'skrollr';
// // import isotope from 'isotope-layout/dist/isotope.pkgd.js';
// import gridstack from 'gridstack/dist/gridstack.js';
// import selectize from 'selectize';
//
let ww = $(window).width(),
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
            dynamicBullets: true,
        },
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
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    }),

    SliderProduct = function() {
        var productThumbs = new Swiper('.product__thumbs', {
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
        var productPhoto = new Swiper('.product__photo', {
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
    }(),

    SliderCities = function() {
        var swiper = new Swiper('.map-cities .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            draggable: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    }(),

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

            if (value < 999) {
                value = value + 1;
            } else {
                value = 999;
            }

            $input.val(value);
        });
    }(),
    
    Basket = function () {
        $('.menu__item_basket a').click(function (e) {
            e.preventDefault();

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