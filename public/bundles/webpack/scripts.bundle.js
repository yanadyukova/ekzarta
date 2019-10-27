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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // import 'babel-polyfill';


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
    reaterra: 60,
    avantron: 20,
    physiotherapy: 20
},
    fixed_costs = {
    doctor: 25000,
    instructor: 20000,
    masseur: 20000,
    director: 30000,
    administrator: 20000,
    accountant: 10000,
    RCO: 5000,
    IT: 5000,
    marketer: 10000
},
    scenarios = {
    optimistic: { consultation: 30, individual_training: 70, massage: 35, group_training: 30, physiotherapy: 30, reaterra: 30, avantron: 30 },
    moderately_optimistic: { consultation: 25, individual_training: 60, massage: 30, group_training: 25, physiotherapy: 25, reaterra: 25, avantron: 25 },
    base: { consultation: 20, individual_training: 50, massage: 25, group_training: 20, physiotherapy: 20, reaterra: 20, avantron: 20 },
    moderately_pessimistic: { consultation: 15, individual_training: 40, massage: 17, group_training: 15, physiotherapy: 15, reaterra: 15, avantron: 15 },
    pessimistic: { consultation: 10, individual_training: 30, massage: 10, group_training: 10, physiotherapy: 10, reaterra: 10, avantron: 10 },
    first_month: { consultation: 5, individual_training: 10, massage: 5, group_training: 5, physiotherapy: 2, reaterra: 5, avantron: 2 }
},
    home_package = {
    area: [30, 75],
    lump_sum: ['200 000', '400 000'],
    royalty: 7,
    initial_investment: 1076500,
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
        medical_staff: {
            doctor: 1,
            instructor: 1,
            masseur: 1
        },
        director: 1,
        administrator: 1,
        accountant: 1,
        RCO: 1,
        IT: 1,
        marketer: 1
    }
},
    standart_package = {
    area: [75, 150],
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
        medical_staff: {
            doctor: 2,
            instructor: 2,
            masseur: 2
        },
        director: 1,
        administrator: 2,
        accountant: 1,
        RCO: 1,
        IT: 1,
        marketer: 1
    }
},
    maximum_package = {
    area: [200, 400],
    lump_sum: ['2 000 000', '4 000 000'],
    royalty: 7,
    initial_investment: 8857500,
    discount_equipment: 25,
    discount_training: 15,
    cost_equipment: 4557500,
    cost_furniture: 300000,
    services: ['consultation', 'individual_training', 'massage', 'group_training', 'physiotherapy', 'reaterra', 'avantron'],
    workplaces: {
        consultation: 1,
        individual_training: 6,
        massage: 1,
        group_training: 1,
        physiotherapy: 2,
        reaterra: 1,
        avantron: 1
    },
    specialists: {
        medical_staff: {
            doctor: 3,
            instructor: 4,
            masseur: 2
        },
        director: 1,
        administrator: 4,
        accountant: 1,
        RCO: 1,
        IT: 1,
        marketer: 1
    }
},
    cashflow = void 0,
    investments = void 0,
    transaction_costs = void 0,
    net_profit = void 0,
    profitability_index = void 0,
    payback_period = void 0,
    taxes = void 0,
    package_area = $('.franchise-calculator__initial-data .area span'),
    package_discount_equipment = $('.franchise-calculator__initial-data .discount-equipment>span'),
    package_discount_training = $('.franchise-calculator__initial-data .discount-training>span'),
    package_lump_sum = $('.franchise-calculator__initial-data .lump-sum span'),
    field_cashflow = $('#cashflow'),
    field_investments = $('#investments'),
    field_transaction_costs = $('#transaction_costs'),
    field_area = $('#area'),
    field_range_area = $('#range_area'),
    field_region = $('#region'),
    field_working_days = $('#working_days'),
    field_working_hours = $('#working_hours'),
    field_net_profit = $('.franchise-calculator__forecast .net_profit span'),
    field_profitability_index = $('.franchise-calculator__forecast .profitability_index span'),
    field_payback_period = $('.franchise-calculator__forecast .payback_period span'),
    selectPackage = $('.franchise-calculator__packages input').filter(':checked').attr('id'),
    selectArea = void 0,
    selectRegion = void 0,
    selectTaxSystem = void 0,
    selectDevelopmentScenario = void 0,
    selectWorkingDays = void 0,
    selectWorkingHours = void 0;

packages['home'] = home_package;
packages['standart'] = standart_package;
packages['maximum'] = maximum_package;

$(document).ready(function () {
    init();
});

function init() {
    selectPackage = $('.franchise-calculator__packages input').filter(':checked').attr('id');

    insertData();

    selectArea = field_area.val();
    selectRegion = $('#region option').filter(':selected').val();
    selectTaxSystem = $('#tax_system option').filter(':selected').val();
    selectDevelopmentScenario = $('#development_scenario option').filter(':selected').val();
    selectWorkingDays = $('#working_days').val();
    selectWorkingHours = $('#working_hours').val();

    countCashflow();
    countInvestments();
    countTransactionCosts();
    countTaxes();
    countNetProfit();
}

function insertData() {
    package_area.text('от ' + packages[selectPackage]['area'][0] + ' м');
    package_discount_equipment.text(packages[selectPackage]['discount_equipment'] + '%');
    package_discount_training.text(packages[selectPackage]['discount_training'] + '%');
    package_lump_sum.html('От ' + packages[selectPackage]['lump_sum'][0] + ' руб.' + '<br>' + 'до ' + packages[selectPackage]['lump_sum'][1] + ' руб.');

    field_range_area.attr('min', packages[selectPackage]['area'][0]).attr('max', packages[selectPackage]['area'][1]);
    field_range_area.val(packages[selectPackage]['area'][0]);
    field_area.val(packages[selectPackage]['area'][0]);
}

$('.franchise-calculator__packages input').change(function () {
    init();
});

field_range_area.on('input', function () {
    field_area.val($(this).val());
    selectArea = field_area.val();
    countTransactionCosts();
    countTaxes();
    countNetProfit();
});

// field_working_days.on('change', function () {
//     selectWorkingDays = field_working_days.val();
//     countCashflow();
//     countTransactionCosts();
//     countTaxes();
//     countNetProfit();
// });
//
// field_working_hours.on('change', function () {
//     selectWorkingHours = field_working_hours.val();
//     countCashflow();
//     countTransactionCosts();
//     countTaxes();
//     countNetProfit();
// });

$('.form__amount button').click(function () {
    selectWorkingDays = field_working_days.val();
    selectWorkingHours = field_working_hours.val();
    countCashflow();
    countTransactionCosts();
    countTaxes();
    countNetProfit();
});

$('#development_scenario').change(function () {
    selectDevelopmentScenario = $('#development_scenario option').filter(':selected').val();
    countCashflow();
    countTransactionCosts();
    countTaxes();
    countNetProfit();
});

$('#tax_system').change(function () {
    selectTaxSystem = $('#tax_system option').filter(':selected').val();
    countTaxes();
    countNetProfit();
});

field_region.change(function () {
    selectRegion = $('#region option').filter(':selected').val();
    countInvestments();
});

function countCashflow() {
    cashflow = 0;
    packages[selectPackage]['services'].forEach(function (service) {
        cashflow += Math.floor(selectWorkingHours * 60 / services[service] * selectWorkingDays * scenarios[selectDevelopmentScenario][service] / 100) * 12 * 1500;
        console.log(service + cashflow);
    });
    field_cashflow.val(abc(cashflow));
    console.log(abc(cashflow));
}

function countInvestments() {
    // investments =
    // parseInt(packages[selectPackage]['lump_sum'][0].replace(/\s+/g, '')) +
    // packages[selectPackage]['initial_investment'];

    if (selectRegion === 'capital_cities') {
        investments = parseInt(packages[selectPackage]['lump_sum'][1].replace(/\s+/g, '')) + packages[selectPackage]['cost_equipment'] + packages[selectPackage]['cost_furniture'];
    } else {
        investments = parseInt(packages[selectPackage]['lump_sum'][0].replace(/\s+/g, '')) + packages[selectPackage]['cost_equipment'] + packages[selectPackage]['cost_furniture'];
    }

    field_investments.val(abc(investments));
    countNetProfit();
}

function countTransactionCosts() {
    var specialist = void 0,
        member = void 0;
    transaction_costs = (selectArea * 700 + 5000 + 5000) * 12 + cashflow * 0.2 + cashflow * 0.2 * 0.302;

    for (specialist in packages[selectPackage]['specialists']) {
        if (_typeof(packages[selectPackage]['specialists'][specialist]) === 'object') {
            for (member in packages[selectPackage]['specialists'][specialist]) {
                transaction_costs += packages[selectPackage]['specialists'][specialist][member] * fixed_costs[member] * 12 + packages[selectPackage]['specialists'][specialist][member] * fixed_costs[member] * 12 * 0.302;
            }
        } else {
            transaction_costs += packages[selectPackage]['specialists'][specialist] * fixed_costs[specialist] * 12;
        }
    }

    field_transaction_costs.val(abc(Math.floor(transaction_costs)));
    console.log('transaction_costs - ' + abc(transaction_costs));
}

function countNetProfit() {
    net_profit = cashflow - transaction_costs - cashflow * 0.07 - taxes;

    console.log('net_profit - ' + abc(Math.floor(net_profit)));

    field_net_profit.text(abc(Math.floor(net_profit * 5)) + 'руб.');

    var DCF = 0;

    for (var i = 1; i <= 5; i++) {
        DCF += net_profit / Math.pow(1.2, i);
    }

    profitability_index = DCF / investments;

    console.log('DCF - ' + abc(Math.floor(DCF)));
    console.log('pl - ' + profitability_index);
    field_profitability_index.text(profitability_index.toFixed(2));

    payback_period = 0;

    var sum_DCF_year = 0;
    var sum_DCF_month = 0;
    var DCF_year;
    var DCF_month;
    var year = 0;

    if (net_profit > 0) {
        while (sum_DCF_year < investments) {
            year++;
            DCF_year = net_profit / Math.pow(1.2, year);
            sum_DCF_year += DCF_year;
            DCF_month = DCF_year / 12;
            if (sum_DCF_year > investments) {
                while (sum_DCF_month < investments) {
                    payback_period++;
                    sum_DCF_month += DCF_month;
                }
            } else {
                payback_period += 12;
                sum_DCF_month += DCF_year;
            }
        }
        console.log(payback_period);
        field_payback_period.text(payback_period + ' месяцев');
    }
}

function countTaxes() {
    if (selectTaxSystem === 'osn') {
        if (cashflow - transaction_costs > 0) {
            taxes = cashflow * 0.2;
        }
    } else if (selectTaxSystem === 'usn_6') {
        taxes = cashflow * 0.06;
    } else {
        if (cashflow - transaction_costs > 0) {
            taxes = (cashflow - transaction_costs) * 0.15;
        } else taxes = (cashflow - transaction_costs) * 0.01;
    }

    console.log(taxes);
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