var scripts =
webpackJsonp_name_([1],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import 'babel-polyfill';
// import 'expose-loader?$!expose-loader?jQuery!jquery';
// import selectize from 'selectize';
// import device from 'device/device.js';
// import timepicker from 'jquery-timepicker-master';
//
// let ww = $(window).width(),
//     wh = $(window).height(),
//     isMobile = $('body').hasClass('mobile'),
//     __gtm = function(category, action, label, event = 'event') {
//         dataLayer.push({
//             'event': event,
//             'event_category': category,
//             'event_action': action,
//             'event_label': label
//         });
//     },
//     __getQueryParams = function(qs) {
//         qs = qs.split('+').join(' ');
//
//         let params = {},
//             tokens,
//             re = /[?&]?([^=]+)=([^&]*)/g;
//
//         while (tokens = re.exec(qs)) {
//             params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
//         }
//
//         return params;
//     },
//     __getRuRoute = function() {
//         return window.location.href.indexOf('/ru') > 0 ? '/ru' : '';
//     },
//     __blockForm = function(form) {
//         form.attr('data-xhr', true)
//             .prop('disabled', true);
//     },
//     __unblockForm = function(form) {
//         form.removeAttr('data-xhr')
//             .prop('disabled', false);
//     },
//     __isBlockedForm = function(form) {
//         return form.attr('data-xhr');
//     },
//     __showError = function(string){
//         $('.modal').modal('hide');
//         $('.jsModalErrorMessage').html(string);
//         $('.jsModalError').modal('show');
//     },
//
//     share = (function(){
//         let Share = {
//             popup: function (url) {
//                 if (device.tablet() || device.mobile()) {
//                     window.open(url, '_blank');
//                 } else {
//                     window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
//                 }
//             }
//         };
//
//         $(document).on('click', '.social a, .social .modal__social-icon', function() {
//             let parent = $(this).parents('.social'),
//                 url = '';
//
//             if ($(this).hasClass('vk')) {
//                 url = 'http://vkontakte.ru/share.php?url=' + parent.attr('data-url') + '?source=vk';
//             } else if ($(this).hasClass('fb')) {
//                 url = 'https://www.facebook.com/dialog/feed?app_id=329274397421817&link=' + parent.attr('data-url') + '?source=fb';
//             } else if ($(this).hasClass('ok')) {
//                 url = 'https://connect.ok.ru/offer?url=' + parent.attr('data-url') + '?source=ok';
//             }
//
//             Share.popup(url);
//         });
//
//         $(document).on('submit', '.jsEmailShare', function(e) {
//             e.preventDefault();
//
//             let form = $(this);
//
//             if (!__isBlockedForm(form)) {
//                 __blockForm(form);
//                 $.post(form.attr('action'), form.serialize(), function(out) {
//                     form.find('textarea, input[type="email"]').val('');
//                     $('.jsModalShareEvent').modal('hide');
//
//                     __showError('Письмо отправлено'); // TODO: !!!TRANSLATION!!!
//                     __gtm('ShareMail', 'click', 'Event');
//                     __unblockForm(form);
//
//                 }, 'json').fail(function(out) {
//                     __showError('При отправке письма возникли проблемы, попробуйте повторить действие еще раз.<br/><br/>' +
//                         'При повторной ошибке свяжитесь с нами: <a href="mailto:expert@oriflame.com">expert@oriflame.com</a>'); // TODO: !!!TRANSLATION!!!
//                     __unblockForm(form);
//                 });
//             }
//
//         });
//
//         $(document).on('click', 'a[data-target=".jsModalShareEvent"]', function() {
//             let form = $('.jsModalShareEvent form'),
//                 event_id = $(this).attr('data-event'),
//                 event_url = 'https://lifestyle.expert/map/events/' + event_id;
//
//             form.attr('action', $(this).attr('data-action'));
//             $('.jsModalShareEvent .social').attr('data-url', event_url);
//             $('.jsModalShareEvent .modal__share-link').val(event_url);
//
//         });
//
//     })(),
//     testSubscribeForm = (function(){
//         $('.jsTestSubscribeForm').submit(function(e){
//             e.preventDefault();
//
//             let form = $(this);
//
//             if (!__isBlockedForm(form)) {
//                 __blockForm(form);
//                 $.post(form.attr('action'), form.serialize(), function (out) {
//                     $('.jsModalSuccess').modal('show');
//                     form.find(':not([type="hidden"])').val('');
//
//                     __gtm('subscribe', 'click', 'testresults');
//                     __unblockForm(form);
//                 }, 'json').fail(function(xhr) {
//                     let out = JSON.parse(xhr.responseText);
//                     __showError(out.message);
//                     __unblockForm(form);
//                 });
//             }
//
//         });
//     })(),
//     mainSubscribeForm = (function(){
//         $('.jsHomeSubscribeForm').submit(function(e) {
//             e.preventDefault();
//
//             let form = $(this),
//                 form_id = +form.find('[name="form_id"]').val();
//
//             if (!__isBlockedForm(form)) {
//                 __blockForm(form);
//                 $.post(form.attr('action'), form.serialize(), function (out) {
//                     $('.modal__close').click();
//                     $('.jsModalSuccess').modal('show');
//                     form.find(':not([type="hidden"])').val('');
//
//                     __gtm(form_id == 7 ? 'main-modal' : 'main-footer', 'click', 'subscribe');
//                     __unblockForm(form);
//
//                 }, 'json').fail(function(xhr) {
//                     let out = JSON.parse(xhr.responseText);
//                     __showError(out.message); // TODO: !!!TRANSLATION!!!
//                     __unblockForm(form);
//                 });
//             }
//
//
//         });
//     })(),
//     mapSelects = (function(){
//         let country = $('select[name="country"], select.country_select'),
//             city = $('select[name="city"], select.city_select'),
//             select_country, $select_country,
//             select_city, $select_city,
//             select_login_country, $select_login_country;
//
//         if(typeof __g_event !== 'undefined') {
//             country.val(__g_event.country_id);
//             city.val(__g_event.city_id);
//         }
//
//         $select_city = city.selectize({
//             maxOptions: 5000,
//             valueField: 'id',
//             labelField: 'name',
//             searchField: ['name'],
//             onChange: function(value) {
//                 if (city.attr('data-map') == '1' && (city.val() > 0) || city.val() == 'all') {
//                     $('header form').submit();
//                 }
//             }
//         });
//
//         $select_country = country.selectize({
//             valueField: 'id',
//             labelField: 'name',
//             searchField: ['name'],
//             onChange: function(value) {
//                 if (!value.length) {
//                     return;
//                 }
//
//                 let reload_fix = false;
//
//                 if (city.attr('data-map') == '1') {
//                     reload_fix = true;
//                     country.removeAttr('data-map');
//                 }
//
//                 select_city.disable();
//                 select_city.clearOptions();
//                 select_city.load(function(callback) {
//                     $.get(country.attr('data-action'), {country_id: value}, function(out){
//                         let results = out.data;
//                         select_city.enable();
//
//                         if (results.length > 0) {
//                             callback(results);
//                             select_city.setValue(results[0].id, false);
//
//                             if (reload_fix) {
//                                 if (results.length > 1) {
//                                     city.attr('data-map', '1');
//                                 }
//
//                                 $('header form').submit();
//                             }
//                         }
//
//                     }, 'json');
//
//                 });
//             }
//         });
//
//         $select_login_country = $('select[name="login_country"]').selectize({
//             valueField: 'id',
//             labelField: 'name',
//             searchField: ['name'],
//         });
//
//         select_city  = $select_city[0] ? $select_city[0].selectize : null;
//         select_country = $select_country[0] ? $select_country[0].selectize : null;
//         select_login_country = $select_login_country[0] ? $select_login_country[0].selectize : null;
//
//     })(),
//     mapFavoriteButton = (function(){
//         $(document).on('click', '.jsFavorite', function(e) {
//             e.preventDefault();
//
//             let button = $(this);
//
//             if (!__isBlockedForm(button)) {
//                 __blockForm(button);
//                 $.post(button.hasClass('active') ? button.attr('data-remove-url') : button.attr('data-add-url'), function (out) {
//                     if (out.status == 'success') {
//                         button.toggleClass('active');
//                     }
//                     __unblockForm(button);
//                 }, 'json');
//             }
//
//             return false;
//         });
//     })(),
//     mapShowMore = (function(){
//         let buttonLoadMoreEvent = $('.jsMapMoreEvents');
//
//         buttonLoadMoreEvent.click(function(e) {
//             e.preventDefault();
//
//             let page = buttonLoadMoreEvent.attr('data-page') ? buttonLoadMoreEvent.attr('data-page') : 2,
//                 action = buttonLoadMoreEvent.attr('data-action'),
//                 urlParams = __getQueryParams(document.location.search);
//
//             urlParams.page = page;
//
//             if (!urlParams.city) {
//                 urlParams.country = 162;
//                 urlParams.city = 'all';
//             }
//
//             if($('#favorites').val()){
//                 urlParams.favorites = 1;
//             }
//
//             if (!buttonLoadMoreEvent.hasClass('update')) {
//                 $(this).addClass('update');
//
//                 $.get(action, urlParams, function(out) {
//                     if (out.status == 'success') {
//                         $('.jsMapBody').append(out.data.cards);
//                         buttonLoadMoreEvent.removeClass('update');
//
//                         if (out.data.events.next_page_url) {
//                             buttonLoadMoreEvent.show().attr('data-page', Number(out.data.events.current_page) + 1);
//                         } else {
//                             buttonLoadMoreEvent.hide();
//                         }
//                     }
//                 }, 'json');
//             }
//
//         });
//
//     })(),
//     mapSubscription = (function(){
//         $('.jsModalEventSubscribe form').submit(function(e){
//             e.preventDefault();
//
//             let form = $(this),
//                 event_city = form.attr('data-event-city'),
//                 event_name = form.attr('data-event-name'),
//                 subscribe_form_number = form.hasClass('map-event-subscribe__inner') ? 1 : 0;
//
//             if (!__isBlockedForm(form)) {
//                 __blockForm(form);
//                 $.post(form.attr('action'), form.serialize(), function (out) {
//                     $('.modal-subscribe').modal('hide');
//                     $('.modal-subscribe-success').modal('show');
//
//                     form.find('input[type="text"], input[type="email"], input[type="tel"]').val('');
//
//                     __gtm('Regist', 'click', subscribe_form_number ? 'Event' : 'Fast');
//                     __gtm(subscribe_form_number ? 'event_regist' : 'event_fast_regist', event_city, event_name);
//                     __unblockForm(form);
//
//                 }, 'json').fail(function(xhr) {
//                     let out = JSON.parse(xhr.responseText);
//                     __showError(out.message);
//                     __unblockForm(form);
//                 });
//             }
//
//         });
//
//         $(document).on('click', 'a[data-target=".jsModalEventSubscribe"]', function() {
//             let form = $('.jsModalEventSubscribe form');
//
//             form.attr('action', $(this).attr('data-action'))
//                 .attr('data-event-city', $(this).attr('data-event-city'))
//                 .attr('data-event-name', $(this).attr('data-event-name'));
//         });
//     })(),
//     mapLoginForm = (function(){
//         $('.jsAuthForm').submit(function(e){
//             e.preventDefault();
//
//             let form = $(this),
//                 is_valid = true,
//                 country = form.find('[name="login_country"]').val(),
//                 host_cache = window.location.host.split('.'),
//                 removeFirst = (host_cache[0].indexOf('oriflame') !== 0 && host_cache[0].indexOf('lifestyle') !== 0 ? host_cache.shift() : host_cache),
//                 host_dest = (country != 'ru' ? country + '.' : '') + host_cache.join('.'),
//                 domain = window.location.protocol + '//' + host_dest + __getRuRoute(),
//                 form_action = domain + '/api/v3/auth'; // TODO: REWRITE
//
//             form.find('.error .error').html('');
//             if (!form.find('#login_agree').is(':checked')) {
//                 is_valid = false;
//             }
//
//             if (is_valid && !__isBlockedForm(form)) {
//                 __blockForm(form);
//                 $.post(form_action, form.serialize(), function(out) {
//                     __gtm('Enter', 'click', 'login');
//                     window.location.href = out.data.redirect ? out.data.redirect : domain + '/account';
//
//                 }, 'json').fail(function(xhr) {
//                     let out = JSON.parse(xhr.responseText);
//                     form.find('#login_form_error').html(out.message);
//                     __unblockForm(form);
//
//                 });
//             } else {
//                 form.find('#login_form_checkbox_error').html('Подтвердите свое согласие'); // TODO: !!!TRANSLATION!!!
//             }
//
//         });
//     })(),
//     accountEventCreate = (function(){
//         let moment = require('moment'),
//             form = $('form[data-form="event"]'),
//             event_page = $('[data-page="event_edit_page"]'),
//             event_formats = [];
//
//         if (form.length) {
//             setRequired(1);
//             initStep2();
//         }
//
//         if (event_page.length && typeof __g_event !== 'undefined') {
//             setRequired();
//
//             $.each(__g_event, function(key, value) {
//                 switch (key) {
//                     case 'event_format_id':
//                         initStep2(value);
//                         break;
//                     case 'event_spo_id':
//                         $('[name="' + key + '"]').prop('checked', value > 0);
//                     case 'date_start':
//                         $('[name="date_start"]').val(moment(value).format('DD.MM.YYYY'));
//                         $('[name="time_start"]').val(moment(value).format('HH:mm'));
//                         break;
//                     case 'date_end':
//                         $('[name="date_end"]').val(moment(value).format('DD.MM.YYYY'));
//                         $('[name="time_end"]').val(moment(value).format('HH:mm'));
//                         break;
//                     case 'price_type':
//                         $('[name="price_type"]').val(value);
//                         $('.jsEventPriceToggle[data-price-type="' + value + '"]').parent().addClass('active').siblings().removeClass('active');
//                         break;
//                     default:
//                         $('[name="' + key + '"]').val(value);
//                 }
//             });
//
//             $('form.jsEditEventForm').submit(function(e){
//                 e.preventDefault();
//
//                 let form = $(this),
//                     modal = form.parents('.modal'),
//                     step = +modal.find('[data-step-event]').attr('data-step-event');
//
//                 if (validForm(step)) {
//                     modal.find('.modal-event__foot button').prop('disabled', true);
//
//                     if (!__isBlockedForm(form)) {
//                         __blockForm(form);
//                         $.post(event_page.attr('data-action'), form.serialize(), function (out) {
//                             if (out.status == 'success') {
//                                 $('.jsEditFormModal').modal('hide');
//
//                                 __showError('Изменения сохранены'); //TODO: !!!TRANSLATION!!!
//
//                                 setTimeout(function () {
//                                     window.location.reload()
//                                 }, 1500);
//
//                             }
//                         }, 'json');
//                     }
//                 }
//
//             });
//
//             $('.jsTimepicker').timepicker({
//                 timeFormat: 'H:i',
//                 step: 60,
//             });
//         }
//
//         form.submit(function(e){
//             if (!form.attr('data-submit')) {
//                 e.preventDefault();
//
//                 let step = getCurrentFormStep();
//                 if (form[0].checkValidity() && validForm(step)) {
//                     __gtm('CreateStep' + step, 'click', 'LKevents');
//
//                     if (step < 4) {
//                         step++;
//                         reInitFormStep(step);
//                     } else {
//                         $('.event-create__button').prop('disabled', true);
//                         form.attr('data-submit', 'submit');
//                         form.submit();
//                     }
//                 }
//             }
//         });
//
//         $('.jsEventFormBack').click(function(){
//             let step = getCurrentFormStep();
//             if (step > 1) {
//                 step--;
//                 reInitFormStep(step);
//             }
//         });
//
//         $(document).on('click', '[data-content="event_formats"] li', function(e){
//             e.preventDefault();
//
//             if (!$(this).hasClass('disabled')) {
//                 let key = $(this).attr('data-key');
//                 initStep2Inner(key);
//
//                 $('[data-content="event_formats"] li').removeClass('active');
//                 $(this).addClass('active');
//             }
//         });
//
//         $(document).on('click', '.jsSliderEventCoverType', function(e){
//             e.preventDefault();
//
//             let indexCover = $(this).parent().index();
//             $(this).parent().addClass('active').siblings().removeClass('active');
//             $('[name="image"]').val($(this).attr('data-image'));
//         });
//
//         $(document).on('click', '.jsEventFormDescEdit', function(){
//             $(this).hide();
//             $(this).parent().siblings('textarea').removeAttr('readonly').focus();
//             $(this).closest('.readonly').removeClass('readonly');
//             return false;
//         });
//
//         $(document).on('click', '.jsEventPriceToggle', function(){
//             let index = $(this).parent().index();
//             $(this).parent().addClass('active').siblings().removeClass('active');
//             $('[name="price_type"]').val($(this).attr('data-price-type'));
//             return false;
//         });
//
//         function getCurrentFormStep() {
//             return +form.find('.event-create__pagination ul li.active a').html();
//         }
//
//         function setRequired(step) {
//             if (step) {
//                 form.find('[data-required]').prop('required', false);
//                 form.find('[data-step-event="' + step + '"] [data-required]').prop('required', true);
//             } else {
//                 $('[data-required]').prop('required', true);
//             }
//
//         }
//
//         function reInitFormStep(step) {
//             $('.jsEventFormStage').removeClass('active');
//             form.find('[data-step-event="' + step + '"]').addClass('active');
//
//             form.find('.event-create__pagination ul li').removeClass('active');
//             form.find('.event-create__pagination ul li:nth-child(' + step + ')').addClass('active');
//
//             setRequired(step);
//
//             if (step == 1) {
//                 $('.jsEventFormBack').addClass('hidden');
//             } else {
//                 $('.jsEventFormBack').removeClass('hidden');
//             }
//         }
//
//         function validForm(step) {
//             let isRequiredEmpty = true;
//
//             form.find('input[required]').each(function(){
//                 if (!/[^\s]/.test($(this).val())) {
//                     isRequiredEmpty = false;
//                     return false;
//                 }
//             });
//
//             if (!isRequiredEmpty) {
//                 __showError("Обязательные поля не могут быть пустым"); // TODO: !!!TRANSLATION!!!
//                 return false;
//             }
//
//             if (step == 2) {
//                 if (!$('[name="event_type_id"]').val()) {
//                     __showError("Тип мероприятия не может быть пустым"); // TODO: !!!TRANSLATION!!!
//                     return false;
//                 }
//             }
//
//             if (step == 4) {
//                 let event_format_id = $('[name="event_format_id"]').val(),
//                     event_type_id = $('[name="event_type_id"]').val(),
//                     restricted = null,
//                     now = new Date(),
//                     date_start = $('input[name="date_start"]').val(),
//                     date_end = $('input[name="date_end"]').val(),
//                     time_start = $('input[name="time_start"]').val(),
//                     time_end = $('input[name="time_end"]').val(),
//                     d_cache = isMobile ? date_start.split('-') : date_start.split('.'),
//                     d_cache2 = isMobile ? date_end.split('-') : date_end.split('.'),
//                     datetime_start = new Date((isMobile ? [d_cache[0], d_cache[1], d_cache[2]] : [d_cache[2], d_cache[1], d_cache[0]]).join('-') + 'T' + time_start + ':00'),
//                     datetime_end = new Date((isMobile ? [d_cache2[0], d_cache2[1], d_cache2[2]] : [d_cache2[2], d_cache2[1], d_cache2[0]]).join('-') + 'T' + time_end + ':00');
//
//                 if (!date_start || !date_end || !time_start || !time_end || !datetime_start || !datetime_end) {
//                     __showError("Введены неверные значения даты и времени проведения меропрития"); // TODO: !!!TRANSLATION!!!
//                     return false;
//                 }
//
//                 if (datetime_start.getTime() >= datetime_end.getTime()) {
//                     __showError("Дата начала мероприятия не может быть позже даты окончания"); // TODO: !!!TRANSLATION!!!
//                     return false;
//                 }
//
//                 $.each(event_formats, function(key, event_format){
//                     if (event_format.id == event_format_id) {
//                         $.each(event_format.event_types, function(key, event_type) {
//                             if (event_type.id == event_type_id) {
//                                 if (event_type.is_restricted) {
//                                     restricted = {
//                                         date_start: new Date(event_type.event_date_start),
//                                         date_end: new Date(event_type.event_date_end),
//                                     };
//                                 }
//
//                                 return false;
//                             }
//                         });
//
//                         return false;
//                     }
//                 });
//
//                 if (restricted) {
//                     if (datetime_start.getTime() < restricted.date_start.getTime() || datetime_end.getTime() > restricted.date_end.getTime()) {
//                         __showError("Мероприятия данного типа могут проводиться в период с  " + new Date(start_date_restriction).toISOString().slice(0, 10) + " по " + new Date(finish_date_restriction).toISOString().slice(0, 10)); // TODO: !!!TRANSLATION!!!
//                         return false;
//                     }
//                 }
//
//                 if (Math.ceil((datetime_start.getTime() - now.getTime()) / (1000 * 3600)) < 48) {
//                     __showError("Мероприятие не может быть создано менее, чем за 48 часов до начала мероприятия"); // TODO: !!!TRANSLATION!!!
//                     return false;
//                 }
//
//                 if(!$('[name="country_id"]').val() || !$('[name="city_id"]').val()) {
//                     __showError("Неверно заполнен адрес"); // TODO: !!!TRANSLATION!!!
//                     return false;
//                 }
//
//                 if ($('input[name="address_street"]').val().indexOf(',') > 0 || $('input[name="address_house"]').val().indexOf(',') > 0) {
//                     __showError("Неверно заполнен адрес"); // TODO: !!!TRANSLATION!!!
//                     return false;
//                 }
//
//             }
//
//             return true;
//         }
//
//         function initStep2(format_id = 0) {
//             let stage = $('[data-step-event="2"]'),
//                 action = stage.attr('data-action'),
//                 initial_step = 0;
//
//             $.get(action, function(out){
//                 if (out.status == 'success') {
//                     event_formats = out.data;
//
//                     $.each(event_formats, function(key, event_format) {
//                         $('[data-content="event_formats"]').append(`
//                             <li class="${event_format.css_class} ${event_format.is_active == 2 ? 'disabled' : ''} ${(format_id == 0 && key == 0) || event_format.id == format_id ? ' active ' : ''}" data-format-id="${event_format.id}" data-key="${key}">
//                                 <a href="#"><i class="${event_format.css_class}"></i><span>${event_format.name}</span></a>
//                             </li>
//                         `);
//
//                         if (event_format.id == format_id) {
//                             initial_step = key;
//                         }
//                     });
//
//                     initStep2Inner(initial_step);
//                     $('.event-create__button').prop('disabled', false);
//                 }
//             }, 'json');
//         }
//
//         function initStep2Inner(event_format_key) {
//             let stage = $('[data-step-event="2"]'),
//                 event_format = event_formats[event_format_key],
//                 event_types = $('[data-content="event_types"]'),
//                 event_description = $('[data-content="event_description"]'),
//                 event_usps = $('[data-content="event_usps"]');
//
//             stage.find('[name="event_format_id"]').val(event_format.id);
//
//             // Event Type
//             event_types.html('<select class="event_type" name="event_type_id" ></select>');
//             $.each(event_format.event_types, function(key, event_type){
//                 let is_restricted = event_type.is_restricted;
//
//                 if (is_restricted) {
//                     let create_start = new Date(event_type.create_date_start),
//                         create_end = new Date(event_type.create_date_end),
//                         now = new Date();
//
//                     if ((!create_start || now.getTime() >= create_start.getTime()) && (!create_end || now.getTime() <= create_end.getTime())) {
//                         is_restricted = 0;
//                     }
//                 }
//
//                 if (event_type.is_active && is_restricted == 0) {
//                     event_types.find('select').append(`
//                         <option value="${event_type.id}" ${typeof __g_event !== 'undefined' && __g_event.event_type_id && __g_event.event_type_id == event_type.id ? 'selected' : ''}>${event_type.name}</option>
//                     `);
//                 }
//             });
//
//             documentLink(event_format_key, event_types.find('select').val());
//             coversImage(event_format_key, event_types.find('select').val());
//
//             event_types.find('select').selectize({
//                 valueField: 'id',
//                 labelField: 'name',
//                 searchField: ['name'],
//                 onChange: function(value) {
//                     documentLink(event_format_key, value);
//                     coversImage(event_format_key, value);
//                 }
//             });
//
//             // Event Description
//             event_description.val(typeof __g_event !== 'undefined' && __g_event.description ? __g_event.description : event_format.description);
//             event_description.prop('readonly', true);
//             event_description.parents('.form__group').addClass('readonly');
//             event_description.parents('.form__group').find('.jsEventFormDescEdit').show();
//
//             // Event USP
//             event_usps.html('');
//             $.each(event_format.usps, function(key, usp){
//                 let is_checked = false;
//
//                 if (typeof __g_event !== 'undefined' && __g_event.usps) {
//                     $.each(__g_event.usps, function(key, event_usp){
//                         if (event_usp.event_usp_id == usp.id) {
//                             is_checked = true;
//                             return false;
//                         }
//                     });
//                 }
//
//                 event_usps.append(`
//                     <div class="checkbox-form__input">
//                         <input type="checkbox" id="usp_${usp.id}" name="usp[]" value="${usp.id}" ${is_checked ? ' checked ' : ''} />
//                         <label for="usp_${usp.id}">${usp.name}</label>
//                     </div>
//                 `);
//             });
//
//             let user_usps = [];
//             if (typeof __g_event !== 'undefined' && __g_event.usps) {
//                 $.each(__g_event.usps, function(key, event_usp){
//                     if (event_usp.name) {
//                         user_usps.push(event_usp.name);
//                     }
//                 });
//             }
//
//             for(let i = 0; i < 12; i++) {
//                 event_usps.append(`
//                     <div class="checkbox-form__input ${!user_usps[i] ? ' checkbox-form__input_hidden ' : ''} jsEventCheckbox">
//                         <input type="hidden" name="add_usps[${i}]" value="${user_usps[i] ? user_usps[i] : ''}" />
//                         <input type="checkbox" checked disabled id="add_usp_${i}" />
//                         <label for="add_usp_${i}">${user_usps[i] ? user_usps[i] : ''}</label>
//                         <span class="checkbox-form__input-delete jsEventCheckboxRemove">Удалить</span>
//                     </div>
//                 `);
//                 // TODO: !!!TRANSLATION!!!
//             }
//
//             $('.jsEventFormTypeItem').show();
//         }
//
//         function documentLink(event_format_key, event_type_id) {
//             let event_format = event_formats[event_format_key],
//                 event_type_documents_download = $('[data-content="event_type_documents_download"]'),
//                 locale_id = +$('[data-step-event="2"]').attr('data-locale-id'),
//                 show_link = false;
//
//             $.each(event_format.event_types, function(key, event_type) {
//                 if (event_type.id == event_type_id) {
//                     event_type_documents_download.attr('href', event_type.document_link);
//                     $.each(event_type.documents_active, function(key, document) {
//                         $.each(document.locales, function(key, locale) {
//                             if (locale_id == locale.locale_id) {
//                                 show_link = true;
//                                 return false;
//                             }
//                         });
//
//                         if (show_link) {
//                             return false;
//                         }
//                     });
//                 }
//             });
//
//             if (show_link) {
//                 event_type_documents_download.show();
//             } else {
//                 event_type_documents_download.hide();
//             }
//
//         }
//
//         function coversImage(event_format_key, event_type_id){
//             let event_format = event_formats[event_format_key],
//                 slider = $('[data-content="image"]');
//
//             slider.html('');
//             slider.prepend(`
//                 <div class="swiper-container">
//                     <div class="swiper-wrapper"></div>
//                 </div>
//             `);
//
//             $.each(event_format.event_types, function(key, event_type) {
//                 if (event_type.id == event_type_id) {
//                     $.each(event_type.covers, function(key, cover){
//                         slider.find('.swiper-wrapper').append(`
//                             <div class="swiper-slide">
//                                 <a class="jsSliderEventCoverType" href="#" style="background-image: url('${cover}');" data-image="${cover}"></a>
//                             </div>
//                         `);
//                     });
//                 }
//             });
//
//             if (typeof __g_event !== 'undefined') {
//                 let slide = slider.find('.swiper-wrapper .swiper-slide .jsSliderEventCoverType[data-image="' + __g_event.image + '"]');
//                 if (slide.length) {
//                     slide.click();
//                 } else {
//                     slider.find('.swiper-wrapper .swiper-slide').first().find('.jsSliderEventCoverType').click();
//                 }
//             } else {
//                 slider.find('.swiper-wrapper .swiper-slide').first().find('.jsSliderEventCoverType').click();
//             }
//
//             let swiper = new Swiper ($('.jsSliderEventCover .swiper-container'), {
//                 slidesPerView: 'auto',
//                 observer: true,
//                 observeParents: true,
//                 navigation: {
//                     nextEl: $('.jsSliderEventCover .swiper-next'),
//                     prevEl: $('.jsSliderEventCover .swiper-prev'),
//                 }
//             });
//
//         }
//
//     })(),
//     accountMembers = (function(){
//
//         // TODO: ADD MEMBER SUBMIT - GTM
//
//
//
//         $('.jsAccountMembersCheckAll').click(function(e){
//             e.preventDefault();
//
//             $('.lk-members__table-event tbody tr').addClass('checked');
//             $('.lk-members__table-event tbody tr:not(.caption)').addClass('active');
//             $('.lk-members__table-event tbody tr [type="checkbox"]').prop('checked', true);
//
//             checkMembersDeleteButton();
//         });
//
//         $('.lk-members__table-event tbody tr').click(function(){
//             if ($(this).hasClass('checked') || $(this).hasClass('active')) {
//                 $(this).removeClass('checked');
//                 $(this).removeClass('active');
//                 $(this).find('[type="checkbox"]').prop('checked', false);
//             } else {
//                 $(this).addClass('checked');
//                 $(this).find('[type="checkbox"]').prop('checked', true);
//
//                 if (!$(this).hasClass('caption')) {
//                     $(this).addClass('active');
//                 }
//             }
//
//             checkMembersDeleteButton();
//         });
//
//         $('.lk-members__controls .remove').click(function(){
//             var array_members = [];
//
//             $('.lk-members__table-event tbody tr [type="checkbox"]:checked').each(function(){
//                 array_members.push(+$(this).attr('data-id'));
//             });
//
//             $('.lk-members__table-event tbody tr.active').each(function(){
//                 array_members.push(+$(this).attr('data-id'));
//             });
//
//             if (array_members.length > 0) {
//                 $(".jsModalConfirmMembersDelete").modal("show");
//                 $(".jsModalConfirmMembersDelete [name='members']").val(array_members.join(','));
//             }
//
//             return false;
//         });
//
//         $(".jsModalConfirmMembersDelete .jsModalConfirmYes").click(function() {
//             let form = $(this).parents('form');
//
//             if (!__isBlockedForm(form)) {
//                 __blockForm(form);
//                 $.post(form.attr('action'), form.serialize(), function () {
//                     __gtm($('.lk-members .lk-members__nav li.__gRegistered').hasClass('active') ? 'RegistDel' : 'VisitedDel', 'click', 'LKmembers');
//                     window.location.reload();
//                 });
//             }
//         });
//
//         $(".jsModalConfirmMembersDelete .jsModalConfirmNo").click(function(){
//             $(".jsModalConfirmMembersDelete").modal("hide");
//         });
//
//         function checkMembersDeleteButton() {
//             if ($('.lk-members__table-event tbody tr [type="checkbox"]:checked').length > 0 || $('.lk-members__table-event tbody tr.active').length > 0) {
//                 $('.lk-members__controls .remove').show();
//             } else {
//                 $('.lk-members__controls .remove').hide();
//             }
//         }
//     })(),
//     accountPublication = (function(){
//         $('.eventPublicate').click(function(e){
//             e.preventDefault();
//
//             let button = $(this);
//
//             if (!__isBlockedForm(button)) {
//                 __blockForm(button);
//                 $.post($(this).attr('data-action'), function (out) {
//                     $('.jsModalEventPublished').modal('show');
//                     __unblockForm(button);
//                 }, 'json').fail(function(xhr) {
//                     let out = JSON.parse(xhr.responseText);
//                     __showError(out.message);
//                     __unblockForm(form);
//                 });
//             }
//
//         });
//     })(),
//     accountEventDelete = (function(){
//         $('.eventRemove').click(function(e){
//             e.preventDefault();
//             $('.jsModalEventDelete .button-default').attr('href', $(this).attr('data-action'));
//             $(".jsModalEventDelete").modal("show");
//         });
//
//     })(),
//
//
//
//
//
//
//
//
//
//
//
//
//     allGTM = (function(){
//         var jQueryReady = function() {
//             if (typeof $ !== 'function') return;
//             clearInterval(timer);
//
//             $('.lang__list li a').click(function () {
//                 __gtm('LangChange', 'click', 'MapHi');
//             });
//
//             $('.lk-landing-tabs__head .__gFindEvent a').click(function () {
//                 __gtm('FindeEvent', 'switch', 'MapHi');
//             });
//
//             $('.lk-landing-tabs__head .__gCreateEvent a').click(function () {
//                 __gtm('CreateEvent', 'switch', 'MapHi');
//             });
//
//             $('.lk-landing-tabs__head .__gLk a, .lk-landing .__gLkMobile a').click(function () {
//                 __gtm('LK', 'switch', 'MapHi');
//             });
//
//             $('button.lk-landing-map__button').click(function () {
//                 var country = $('.lk-landing-map__item .country option').attr('value');
//
//                 switch (country) {
//                     case '4':
//                         __gtm('AZ', 'search', 'MapHi');
//                         break;
//                     case '15':
//                         __gtm('AM', 'search', 'MapHi');
//                         break;
//                     case '23':
//                         __gtm('BU', 'search', 'MapHi');
//                         break;
//                     case '60':
//                         __gtm('GE', 'search', 'MapHi');
//                         break;
//                     case '82':
//                         __gtm('KZ', 'search', 'MapHi');
//                         break;
//                     case '91':
//                         __gtm('KG', 'search', 'MapHi');
//                         break;
//                     case '126':
//                         __gtm('MD', 'search', 'MapHi');
//                         break;
//                     case '128':
//                         __gtm('MN', 'search', 'MapHi');
//                         break;
//                     case '162':
//                         __gtm('RU', 'search', 'MapHi');
//                         break;
//                     case '204':
//                         __gtm('UA', 'search', 'MapHi');
//                         break;
//                 }
//             });
//
//             $('.lk-landing-tabs__item .__gCreateEvent').click(function () {
//                 __gtm('CreateEvent', 'click', 'MapHi');
//             });
//
//             $('.header-inside .country select, .lk_map .jsMobileSearch .country select').change(function() {
//                 __gtm('Country', 'change', 'Header');
//             });
//
//             $('.header-inside .city select, .lk_map .jsMobileSearch .city select').change(function() {
//                 __gtm('City', 'change', 'Header');
//             });
//
//             $('.header-inside__button.__gFavorite, .nav-mobile .__gFavorite').click(function () {
//                 __gtm('Favorites', 'click', 'Header');
//             });
//
//             $('.header-inside__button.__gLk, .nav-mobile .__gLk').click(function () {
//                 __gtm('Lk', 'click', 'Header');
//             });
//
//             $('.header-lk a.logo').click(function () {
//                 __gtm('MapHi', 'click', 'Header');
//             });
//
//             $(document).on('click', '.event-card-button .vk', function() {
//                 __gtm('ShareVK', 'click', 'Any');
//             });
//
//             $('.jsModalShareEvent .vk').click(function () {
//                 __gtm('ShareVK', 'click', 'Any');
//             });
//
//             $(document).on('click', '.event-card-button .fb', function() {
//                 __gtm('ShareFB', 'click', 'Any');
//             });
//
//             $('.jsModalShareEvent .fb').click(function () {
//                 __gtm('ShareFB', 'click', 'Any');
//             });
//
//             $(document).on('click', '.event-card-button .ok', function() {
//                 __gtm('ShareOK', 'click', 'Any');
//             });
//
//             $('.jsModalShareEvent .ok').click(function () {
//                 __gtm('ShareOK', 'click', 'Any');
//             });
//
//             $('.event-card-button .event-card-button__favorite').click(function() {
//                 if ($(this).hasClass('active')) {
//                     __gtm('FavoritsOff', 'click', 'Any');
//                 } else {
//                     __gtm('Favorites', 'click', 'Any');
//                 }
//             });
//
//             //Страница "Карта мероприятий"
//
//             $('.filter .filter-search button, .lk_map .jsMobileSearch .search__body .search__button').click(function () {
//                 __gtm('Events', 'search', 'Map');
//             });
//
//             $('.filter-extended .filter-extended__button.reset, .map .filter .filter__reset').click(function () {
//                 __gtm('FilterClear', 'click', 'Map');
//             });
//
//             $('.filter-extended .filter-extended__button.submit, .map .filter .filter__button').click(function () {
//                 __gtm('Filter', 'click', 'Map');
//             });
//
//             $('.event-card a.event-card__pic, .event-card a.event-card__name').click(function(){
//                 __gtm('EventCard', 'click', 'Map');
//             });
//
//             $('.map-google a.map-info').click(function () {
//                 __gtm('EventsMap', 'click', 'Map');
//             });
//
//             //Страница login
//
//             $('.lk-auth .lk-auth__link, .jsModalLogin .lk-auth__link').click(function () {
//                 __gtm('Regist', 'click', 'login');
//             });
//
//             //Страница Личный кабинет
//
//             $('.lk__header .header-lk__exit, .header-mobile .header-mobile__exit').click(function () {
//                 __gtm('Exit', 'click', 'LK');
//             });
//
//             $('.header-mobile .header-mobile__view').click(function () {
//                 __gtm('ExitMap', 'click', 'LK');
//             });
//
//             //Страница ЛК "Мои мероприятия"
//
//             $('.lk__content a.lk-head__button').click(function () {
//                 __gtm('Create', 'click', 'LKevents');
//             });
//
//             $('.lk__content .event-card-control__button.edit').click(function () {
//                 __gtm('Change', 'click', 'LKevents');
//             });
//
//             $(".jsModalEventDelete .button-default").click(function(){
//                 __gtm('Del', 'click', 'LKevents');
//             });
//
//             $('.lk__content .event-card-control__button.edit-photo').click(function () {
//                 __gtm('AddPhoto', 'click', 'LKevents');
//             });
//
//             //Страница ЛК "Участники мероприятия"
//
//             $('.__gLkMembers .lk-members__table tbody tr, .__gLkMembersMobile .lk-members__table .lk-members__link').click(function () {
//
//                 if ($('.lk-members .lk-members__nav li.__gActual').hasClass('active')) {
//                     __gtm('Actual', 'click', 'LKmembers');
//                 } else if ($('.lk-members .lk-members__nav li.__gArchive').hasClass('active')) {
//                     __gtm('Archive', 'click', 'LKmembers');
//                 }
//             });
//
//             $('.lk-members .lk-members__controls .download').click(function () {
//                 if ($('.lk-members .lk-members__nav li.__gRegistered').hasClass('active')) {
//                     __gtm('RegistDonwload', 'click', 'LKmembers');
//                 }
//             });
//
//             $('.lk-members .lk-members__controls .upload').click(function () {
//                 if ($('.lk-members .lk-members__nav li.__gVisited').hasClass('active')) {
//                     __gtm('VisitedUpload', 'click', 'LKmembers');
//                 }
//             });
//
//             //Страница "Избранное"
//
//             $(".lk-body .event-card.__gFavorite .remove").click(function(){
//                 __gtm('Delate', 'click', 'Favorites');
//             });
//
//             //Страница "Мероприятие"
//
//             $('.jsEventGallery a.event-page-gallery__photo, .jsSliderEventGallery .swiper-slide a').click(function(){
//                 __gtm('Gallery', 'click', 'Event');
//             });
//
//             $('.jsEventSubscribeToggle').click(function(){
//                 if ($('.jsEventSubscribe').hasClass('active')) {
//                     __gtm('Singup', 'click', 'Event');
//                 }
//             });
//
//             $('.jsEventShareToggle').click(function(){
//                 if ($('.jsEventShare').hasClass('active')) {
//                     __gtm('Share', 'click', 'Event');
//                 }
//             });
//
//             $('.jsModalPageGo').on('show.bs.modal', function (e) {
//                 __gtm('Singup', 'click', 'Event');
//             });
//
//             $('.jsModalPageShare').on('show.bs.modal', function (e) {
//                 __gtm('Share', 'click', 'Event');
//             });
//
//             $('.jsEventCardShare a').click(function(){
//                 __gtm('Share', 'click', 'Event');
//             });
//
//             //Тесты
//
//             $('.category .grid-stack-item a.category__item').click(function(){
//                 __gtm('OpenTest', 'click', 'tests');
//             });
//
//             $('.nav__list .nav__item a').click(function(){
//                 __gtm('FilterTests', 'click', 'tests');
//                 if ($(this).attr('data-filter') === '*') {
//                     __gtm('AllTests', 'click', 'tests');
//                 }
//             });
//
//             $('.test__inner .test-start__social li a').click(function(){
//                 if ($(this).hasClass('vk')) {
//                     __gtm('ShareVK', 'click', 'test');
//                 } else if ($(this).hasClass('fb')) {
//                     __gtm('ShareFB', 'click', 'test');
//                 } else if ($(this).hasClass('ok')) {
//                     __gtm('ShareOK', 'click', 'test');
//                 }
//             });
//
//             $('.test__inner .test-start .test-start__button button').click(function(){
//                 var test_id = $(this).parents('.test').attr('data-test-id');
//                 __gtm('Start-' + test_id, 'click', 'tests');
//             });
//
//             $('.test__inner .test-finish .test-finish__button button.button-update').click(function(){
//                 __gtm('Again', 'click', 'tests');
//             });
//
//             $('.test__inner .test-finish .test-finish__button a.button').click(function(){
//                 __gtm('Choose', 'click', 'tests');
//             });
//
//             $('.test__inner .test-finish__social li a').click(function(){
//                 if ($(this).hasClass('vk')) {
//                     __gtm('ShareVK', 'click', 'testresults');
//                 } else if ($(this).hasClass('fb')) {
//                     __gtm('ShareFB', 'click', 'testresults');
//                 } else if ($(this).hasClass('ok')) {
//                     __gtm('ShareOK', 'click', 'testresults');
//                 }
//             });
//
//             //Редизайн
//
//             $('.event-card .event-card-subscribe a.event-card-subscribe__button').click(function(){
//                 __gtm('FastRegist', 'click', 'Event');
//                 dataLayer.push({
//                     'event': 'event',
//                     'event_category': 'FastRegist',
//                     'event_action': 'click',
//                     'event_label': 'Event'
//                 });
//             });
//
//             $('.test__inner .test-finish__social li a').click(function(){
//                 var test_id = $(this).parents('.test').attr('data-test-id');
//                 if ($(this).hasClass('vk')) {
//                     __gtm('ShareVK', 'click', 'testresults-' + test_id);
//                 } else if ($(this).hasClass('fb')) {
//                     __gtm('ShareFB', 'click', 'testresults-' + test_id);
//                 } else if ($(this).hasClass('ok')) {
//                     __gtm('ShareOK', 'click', 'testresults-' + test_id);
//                 }
//             });
//
//             $('.test__inner .test-start__social li a').click(function(){
//                 var test_id = $(this).parents('.test').attr('data-test-id');
//                 if ($(this).hasClass('vk')) {
//                     __gtm('ShareVK', 'click', 'test-' + test_id);
//                 } else if ($(this).hasClass('fb')) {
//                     __gtm('ShareFB', 'click', 'test-' + test_id);
//                 } else if ($(this).hasClass('ok')) {
//                     __gtm('ShareOK', 'click', 'test-' + test_id);
//                 }
//             });
//
//             //Документы
//
//             $('.lk .doc .doc__list li a').click(function () {
//                 let doc_title = $(this).text();
//                 __gtm('Doc-' + doc_title, 'download', 'LKevents');
//             });
//
//             $('.lk .doc .doc__button a').click(function () {
//                 __gtm('DocAll', 'download', 'LKevents');
//             });
//
//             //Дополнительные события от 17.04.2019
//
//             $('.jsModalCountryConfirm .jsModalCountryConfirmListToggle').click(function () {
//                 __gtm('CountryСhange', 'click', 'MapHi');
//             });
//
//             $('.jsModalCountryConfirm .modal-lang__buttons a').click(function () {
//                 __gtm('Сonfirm', 'click', 'MapHi');
//             });
//
//             $('.jsModalCountryConfirm .modal-lang__title2 li a').click(function () {
//                 __gtm('Country', 'click', 'MapHi');
//             });
//
//             $('.jsLangToggle').click(function () {
//                 __gtm('LangToggle', 'click', 'MapHi');
//             });
//
//             $('.jsLandingMapItem .lk-landing-lk__button').click(function () {
//                 __gtm('LkLogin', 'click', 'MapHi');
//             });
//
//             $('.jsFilterStatusRadioButton').click(function () {
//                 var filterName = $(this).attr('name');
//                 if (filterName === 'status[1]') {
//                     __gtm('FilterActual', 'click', 'Map');
//                 } else if (filterName === 'status[2]') {
//                     __gtm('FilterPast', 'click', 'Map');
//                 } else if (filterName === 'status[3]') {
//                     __gtm('FilterReport', 'click', 'Map');
//                 }
//
//             });
//
//             $('.__gFilterFormatRadioButton').click(function () {
//                 var filterName = $(this).attr('name');
//
//                 if (filterName === 'format[2]') {
//                     __gtm('FilterMC', 'click', 'Map');
//                 } else if (filterName === 'format[3]') {
//                     __gtm('FilterClubs', 'click', 'Map');
//                 } else if (filterName === 'format[4]') {
//                     __gtm('FilterFestivals', 'click', 'Map');
//                 } else if (filterName === 'format[5]') {
//                     __gtm('FilterOpenDays', 'click', 'Map');
//                 } else if (filterName === 'spo') {
//                     __gtm('FilterSPO', 'click', 'Map');
//                 }
//             });
//
//             $('.jsMapMoreEvents').click(function () {
//                 __gtm('ShowMore', 'click', 'Map');
//             });
//
//             $('.event-page .map-event-head__back').click(function () {
//                 var eventId = $(this).attr('data-event-id');
//                 __gtm('Back', 'click', 'Event-' + eventId);
//             });
//
//             $('.__gSidebarEvents').click(function () {
//                 __gtm('Events', 'click', 'LK');
//             });
//
//             $('.__gSidebarFavorites').click(function () {
//                 __gtm('Favorites', 'click', 'LK');
//             });
//
//             $('.__gSidebarParticipants').click(function () {
//                 __gtm('Participants', 'click', 'LK');
//             });
//
//             $('.__gSidebarPersonal').click(function () {
//                 __gtm('Personal', 'click', 'LK');
//             });
//
//             $('.__gSidebarDoc').click(function () {
//                 __gtm('Doc', 'click', 'LK');
//             });
//
//             $('.__gLkSwitchActual').click(function () {
//                 __gtm('FilterActual', 'click', 'LKevents');
//             });
//
//             $('.__gLkSwitchPast').click(function () {
//                 __gtm('FilterPast', 'click', 'LKevents');
//             });
//
//             $('.eventPublicate').click(function () {
//                 __gtm('Post', 'click', 'LKevents');
//             });
//
//             $('.lk-deleted-content .lk-deleted-content__button').click(function () {
//                 __gtm('CreateEvent', 'click', 'EventDel');
//             });
//
//             $('.__gPersonalFormInputEnableEmail').click(function () {
//                 __gtm('ChangeEmail', 'click', 'LKpersonal');
//             });
//
//             $('.__gPersonalFormInputEnablePhone').click(function () {
//                 __gtm('ChangeTel', 'click', 'LKpersonal');
//             });
//
//             $('.personal__button').click(function () {
//                 __gtm('Save', 'click', 'LKpersonal');
//             });
//
//             $('.personal-events__button').click(function () {
//                 __gtm('Events', 'click', 'LKpersonal');
//             });
//
//             $('.footer .fb').click(function () {
//                 __gtm('fb', 'click', 'Footer');
//             });
//
//             $('.footer .vk').click(function () {
//                 __gtm('vk', 'click', 'Footer');
//             });
//
//             $('.footer .ok').click(function () {
//                 __gtm('ok', 'click', 'Footer');
//             });
//
//             $('.footer .in').click(function () {
//                 __gtm('ig', 'click', 'Footer');
//             });
//
//             $('.footer .yt').click(function () {
//                 __gtm('yt', 'click', 'Footer');
//             });
//
//         }
//
//         var timer = setInterval(jQueryReady, 1000);
//     })(),
//
//     homepageGTM = (function(){
//         var jQueryReady = function() {
//             if (typeof $ !== 'function') return;
//             clearInterval(timer);
//
//             //Меню
//
//             $('.__gHubMain .header-global__list li a, .__gHubMain .header-global__slider .swiper-slide a').click(function () {
//                 let menu_item = $(this).text();
//                 let title = $.trim(menu_item);
//                 __gtm('main', 'click', 'menu-' + title);
//             });
//
//             //Главный слайдер
//
//             $('.__gHubMain .main-slider .main-slider__button a').click(function () {
//                 let title_news = $(this).parents('.main-slider__content').find('.main-slider__title').text();
//                 __gtm('main-news', 'click', 'more-' + title_news);
//             });
//
//             //Книга красоты
//
//             $('.__gHubMain .main-book').click(function () {
//                 __gtm('main', 'click', 'book');
//             });
//
//             //Правое боковое меню
//
//             $('.__gHubMain .main-side-control__subscribe').click(function () {
//                 __gtm('main', 'click', 'subscribe');
//             });
//
//             $('.__gHubMain .main-side-control__social li a').click(function () {
//                 if ($(this).hasClass('vk')) {
//                     __gtm('main', 'click', 'vk');
//                 } else if ($(this).hasClass('yt')) {
//                     __gtm('main', 'click', 'yt');
//                 } else if ($(this).hasClass('ok')) {
//                     __gtm('main', 'click', 'ok');
//                 } else if ($(this).hasClass('in')) {
//                     __gtm('main', 'click', 'ig');
//                 } else if ($(this).hasClass('fb')) {
//                     __gtm('main', 'click', 'fb');
//                 }
//             });
//
//             //Главные новости
//
//             $('.__gHubMain .main-news__item a').click(function () {
//                 let title = $(this).find('.main-news__title').text();
//                 __gtm('main-topic', 'click', 'topic-' + title);
//             });
//
//             //Блок Сегодня
//
//             $('.__gHubMain .__gGridMap, .__gHubMain.mobile .main-grid-item_zoom').click(function () {
//                 __gtm('main-today', 'click', 'bar_map');
//             });
//
//             $('.__gHubMain .main-grid .main-grid-item_magic').click(function () {
//                 let title = $(this).find('.__gGridItemTitle').text();
//                 __gtm('main-today', 'click', 'bar-' + title);
//             });
//
//             $('.__gHubMain .jsSliderVideoGallery .main-video__player, .__gHubMain.mobile .jsSliderVideoGalleryMobile .main-video__player').click(function () {
//                 let title = $(this).attr('data-title');
//                 __gtm('main-today', 'click', 'video-' + title);
//             });
//
//             $('.__gHubMain .jsSliderVideoThumbs .main-video__thumb').click(function () {
//                 let title = $(this).find('.main-video__thumb-title').text();
//                 __gtm('main-today', 'click', 'video-' + title);
//             });
//
//             //Олапик
//
//             $(document).on('click', '.olapic-item', function() {
//                 __gtm('main-olapic', 'click', 'photo');
//             });
//
//             $('.__gHubMain .main-olapic__button a').click(function () {
//                 __gtm('main-olapic', 'click', 'more');
//             });
//
//             //Лайфстайл
//
//             $('.__gHubMain a.lifestyle-block').click(function () {
//                 let title = $(this).find('.lifestyle-block__title').text();
//                 __gtm('main-lifestyle', 'click', 'bar-' + title);
//             });
//
//             //Продукты
//
//             $('.__gHubMain .main-products a.main-products__item').click(function () {
//                 let title = $(this).find('.main-products__title').text();
//                 __gtm('main-products', 'click', 'product-' + title);
//             });
//
//             $('.__gHubMain .main-products .main-products__more a').click(function () {
//                 __gtm('main-products', 'click', 'more');
//             });
//
//             $('.__gHubMain .footer__social li a').click(function () {
//                 if ($(this).hasClass('vk')) {
//                     __gtm('main-footer', 'click', 'vk');
//                 } else if ($(this).hasClass('yt')) {
//                     __gtm('main-footer', 'click', 'yt');
//                 } else if ($(this).hasClass('ok')) {
//                     __gtm('main-footer', 'click', 'ok');
//                 } else if ($(this).hasClass('in')) {
//                     __gtm('main-footer', 'click', 'ig');
//                 } else if ($(this).hasClass('fb')) {
//                     __gtm('main-footer', 'click', 'fb');
//                 }
//             });
//         };
//
//         var timer = setInterval(jQueryReady, 1000);
//
//     })();


/***/ })

},[17]);
//# sourceMappingURL=scripts.bundle.map