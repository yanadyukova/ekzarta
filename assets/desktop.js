// import 'babel-polyfill';
// // import Promise from 'es6-promise-promise'; // нужен^ если используется require.ensure, для ie11-
import 'expose-loader?$!expose-loader?jQuery!jquery';
// import Modal from 'modal';
// import Swiper from 'swiper/dist/js/swiper.js';
import 'expose-loader?Swiper!swiper/dist/js/swiper.js';
import 'jquery-ui';

let ww = $(window).width(),
    wh = $(window).height(),
    isMobile = $('body').hasClass('mobile'),

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
            $(this).parents('.reviews').find('.reviews__form').css('display', 'block');
        });

        $('.jsCloseReviewForm').click(function () {
            $(this).parent().css('display', 'none');
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