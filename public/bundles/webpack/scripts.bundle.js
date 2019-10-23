var scripts =
webpackJsonp_name_([1],{

/***/ 1:
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

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

// import device from 'device/device.js';

var ww = $(window).width(),
    wh = $(window).height(),
    isMobile = $('body').hasClass('mobile'),
    packages = {
    home: {},
    standart: {},
    maximum: {}
},
    services = {
    consultation: 30,
    individual_training: 60,
    massage: 30,
    group_training: 60,
    physiotherapy: 20
},
    scenarios = {
    optimistic: { consultation: 30, individual_training: 70, massage: 35, group_training: 30, physiotherapy: 30 },
    moderately_optimistic: { consultation: 25, individual_training: 60, massage: 30, group_training: 25, physiotherapy: 25 },
    base: { consultation: 20, individual_training: 50, massage: 25, group_training: 20, physiotherapy: 20 },
    moderately_pessimistic: { consultation: 15, individual_training: 40, massage: 17, group_training: 15, physiotherapy: 15 },
    pessimistic: { consultation: 10, individual_training: 30, massage: 10, group_training: 10, physiotherapy: 10 },
    first_month: { consultation: 5, individual_training: 10, massage: 5, group_training: 5, physiotherapy: 2 }
},
    home_package = {
    area: [50, 75],
    lump_sum: ['200 000', '400 000'],
    royalty: 7,
    initial_investment: 107650000,
    discount_equipment: 15,
    discount_training: 5,
    cost_equipment: 576500,
    cost_furniture: 100000,
    services: ['consultation', 'individual_training', 'massage'],
    workplaces: {
        consultation: 1,
        individual_training: 1,
        massage: 1
    },
    specialists: {
        doctor: 1,
        instructor: 1,
        masseur: 1,
        director: 1,
        administrator: 1,
        accountant: 1,
        RCO: 1,
        IT: 1,
        marketer: 1
    }
},
    standart_package = {
    area: [150, 200],
    lump_sum: ['900 000', '1 500 000'],
    royalty: 7,
    initial_investment: 3618000,
    discount_equipment: 20,
    discount_training: 10,
    cost_equipment: 1918000,
    cost_furniture: 200000,
    services: ['consultation', 'individual_training', 'massage', 'group_training', 'physiotherapy'],
    workplaces: {
        consultation: 1,
        individual_training: 4,
        massage: 1,
        group_training: 1,
        physiotherapy: 1
    },
    specialists: {
        doctor: 2,
        instructor: 2,
        masseur: 2,
        director: 1,
        administrator: 2,
        accountant: 1,
        RCO: 1,
        IT: 1,
        marketer: 1
    }
},
    maximum_package = {
    area: [200, 300],
    lump_sum: ['2 000 000', '4 000 000'],
    royalty: 7,
    initial_investment: 8857500,
    discount_equipment: 25,
    discount_training: 15,
    cost_equipment: 4557500,
    cost_furniture: 300000,
    services: ['consultation', 'individual_training', 'massage', 'group_training', 'physiotherapy'],
    workplaces: {
        consultation: 1,
        individual_training: 6,
        massage: 1,
        group_training: 1,
        physiotherapy: 2
    },
    specialists: {
        doctor: 3,
        instructor: 4,
        masseur: 2,
        director: 1,
        administrator: 4,
        accountant: 1,
        RCO: 1,
        IT: 1,
        marketer: 1
    }
},
    package_area = $('.franchise-calculator__initial-data .area span'),
    package_discount_equipment = $('.franchise-calculator__initial-data .discount-equipment>span'),
    package_discount_training = $('.franchise-calculator__initial-data .discount-training>span'),
    package_lump_sum = $('.franchise-calculator__initial-data .lump-sum span'),
    field_cashflow = $('#cashflow'),
    field_investments = $('#investments'),
    field_transaction_costs = $('#transaction_costs'),
    cashflow = void 0,
    investments = void 0,
    transaction_costs = void 0,
    selectArea = $('#area').val(),
    selectTaxSystem = $('#tax_system option').filter(':selected').val(),
    selectDevelopmentScenario = $('#development_scenario option').filter(':selected').val(),
    selectWorkingDays = $('#working_days').val(),
    selectWorkingHours = $('#working_hours').val(),
    selectPackage = $('.franchise-calculator__packages input').filter(':checked').attr('id'); // import 'babel-polyfill';


packages['home'] = home_package, packages['standart'] = standart_package, packages['maximum'] = maximum_package, $('.franchise-calculator__packages input').change(function () {
    changePackage();
    countCashflow();
});

$('.form__amount button').click(function () {
    selectArea = $('#area').val();
    selectTaxSystem = $('#tax_system option').filter(':selected').val();
    selectDevelopmentScenario = $('#development_scenario option').filter(':selected').val();
    selectWorkingDays = $('#working_days').val();
    selectWorkingHours = $('#working_hours').val();
    countCashflow();
});

$('#development_scenario').change(function () {
    selectDevelopmentScenario = $('#development_scenario option').filter(':selected').val();
    countCashflow();
});

function changePackage() {
    selectPackage = $('.franchise-calculator__packages input').filter(':checked').attr('id');
    console.log(selectPackage);
    insertData();
    countCashflow();
}

function insertData() {
    package_area.text('от ' + packages[selectPackage]['area'][0] + ' м');
    package_discount_equipment.text(packages[selectPackage]['discount_equipment'] + '%');
    package_discount_training.text(packages[selectPackage]['discount_training'] + '%');
    package_lump_sum.html('От ' + packages[selectPackage]['lump_sum'][0] + ' руб.' + '<br>' + 'до ' + packages[selectPackage]['lump_sum'][1] + ' руб.');
}

function countCashflow() {
    var service = void 0;
    cashflow = 0;
    packages[selectPackage]['services'].forEach(function (service) {
        cashflow += Math.floor(selectWorkingHours * 60 / services[service] * selectWorkingDays * scenarios[selectDevelopmentScenario][service] / 100) * 12 * packages[selectPackage]['workplaces'][service] * 1500;
        console.log(service + cashflow);
    });
    field_cashflow.val(abc(cashflow));
    console.log(abc(cashflow));
}

function abc(n) {
    n += "";
    n = new Array(4 - n.length % 3).join("U") + n;
    return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(4);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(2);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[20]);
//# sourceMappingURL=scripts.bundle.map