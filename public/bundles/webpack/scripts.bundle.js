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
    consultation: { duration: 30, price: 1000, customers: 1 },
    individual_training: { duration: 60, price: 2000, customers: 1 },
    massage: { duration: 30, price: 600, customers: 1 },
    group_training: { duration: 60, price: 500, customers: 5 },
    reaterra: { duration: 60, price: 500, customers: 1 },
    avantron: { duration: 20, price: 500, customers: 1 },
    physiotherapy: { duration: 20, price: 300, customers: 1 }
},
    max_load_service = {},
    // максимальная загрузка центра по услугам

cashflows = [],
    // денежные поступления по годам за выбранный период

numbers = {},
    // кол-во услуг за каждый месяц за выбранный период

transaction_costs_year = {},
    transaction_costs_years = [],
    operating_profit = {},
    taxes_year = {},
    fixed_costs = {
    doctor: 25000,
    instructor: 20000,
    masseur: 15000,
    director: 30000,
    administrator: 20000
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
        doctor: 1,
        masseur: 1
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
        doctor: 2,
        instructor: 2,
        masseur: 2,
        director: 1,
        administrator: 2
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
        doctor: 3,
        instructor: 4,
        masseur: 2,
        director: 1,
        administrator: 4
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
    field_cashflow_label = $('#cashflow_label b'),
    field_investments = $('#investments'),
    field_transaction_costs = $('#transaction_costs'),
    field_transaction_costs_label = $('#transaction_costs_label b'),
    field_area = $('#area'),
    field_years = $('#years'),
    field_range_area = $('#range_area'),
    field_range_year = $('#range_year'),
    field_region = $('#region'),
    field_working_days = $('#working_days'),
    field_working_hours = $('#working_hours'),
    field_net_profit = $('.franchise-calculator__forecast .net_profit>span'),
    field_profitability_index = $('.franchise-calculator__forecast .profitability_index span'),
    field_payback_period = $('.franchise-calculator__forecast .payback_period span'),
    selectPackage = $('.franchise-calculator__packages input').filter(':checked').attr('id'),
    selectArea = void 0,
    selectYears = void 0,
    selectRegion = void 0,
    selectTaxSystem = void 0,
    selectDevelopmentScenario = void 0,
    selectWorkingDays = void 0,
    selectWorkingHours = void 0; // import 'babel-polyfill';


packages['home'] = home_package;
packages['standart'] = standart_package;
packages['maximum'] = maximum_package;

$(document).ready(function () {
    init();
});

function init() {
    selectPackage = $('.franchise-calculator__packages input').filter(':checked').attr('id');
    selectYears = field_years.val();

    insertData();

    selectArea = field_area.val();
    selectRegion = $('#region option').filter(':selected').val();
    selectTaxSystem = $('#tax_system option').filter(':selected').val();
    selectDevelopmentScenario = $('#development_scenario option').filter(':selected').val();
    selectWorkingDays = $('#working_days').val();
    selectWorkingHours = $('#working_hours').val();
    countMaxLoad();
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
    field_range_area.val(50);
    field_area.val(50);
    field_transaction_costs_label.text(selectYears);
    field_cashflow_label.text(selectYears);
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

field_range_year.on('input', function () {
    field_years.val($(this).val());
    selectYears = field_years.val();
    field_transaction_costs_label.text(selectYears);
    field_cashflow_label.text(selectYears);
    countCashflow();
    countTransactionCosts();
    countTaxes();
    countNetProfit();
});

$('.form__amount button').click(function () {
    selectWorkingDays = field_working_days.val();
    selectWorkingHours = field_working_hours.val();
    countMaxLoad();
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
    countNetProfit();
});

function countMaxLoad() {
    for (var service in services) {
        max_load_service[service] = selectWorkingHours * 60 / services[service]['duration'] * selectWorkingDays;
    }
    console.log(max_load_service);
}

function countCashflow() {
    cashflow = 0;
    cashflows = []; // денежные поступления по годам за выбранный период
    var number_services = 0; // кол-во услуг за год
    var number_services_month = void 0; // кол-во услуг в текущем месяце
    var number_services_last_month = {}; //сохраняем кол-во услуг за последний месяц года, для расчета 1-ого месяца следующего года

    for (var i = 1; i <= selectYears; i++) {
        numbers[i] = {};
    }

    var _loop = function _loop(_i) {
        if (_i === 1) {
            packages[selectPackage]['services'].forEach(function (service) {
                var first_month = Math.floor(max_load_service[service] * scenarios['first_month'][service] / 100);
                var first_year = Math.floor(max_load_service[service] * scenarios[selectDevelopmentScenario][service] / 100);
                var annual_growth = (first_year - first_month) / first_month;
                var month_growth = Math.pow(1 + annual_growth, 1 / 12) - 1;

                number_services = first_month;
                number_services_month = first_month;
                numbers[_i][service] = [first_month];

                for (var j = 1; j < 12; j++) {
                    //считаем со 2 по 12 месяц
                    number_services_month = Math.floor(number_services_month * (1 + month_growth));
                    number_services += number_services_month;
                    numbers[_i][service].push(number_services_month);
                }

                cashflow += number_services * services[service]['price'] * services[service]['customers'];
            });

            cashflows.push(cashflow);
        } else {
            cashflow = 0;
            var first_month_year = void 0;

            var annual_growth = 0.15;
            var month_growth = Math.pow(1 + annual_growth, 1 / 12) - 1;

            packages[selectPackage]['services'].forEach(function (service) {
                if (_i === 2) {
                    first_month_year = Math.floor(max_load_service[service] * scenarios[selectDevelopmentScenario][service] / 100);
                } else {
                    first_month_year = number_services_last_month[service] * (1 + month_growth) < max_load_service[service] * 0.9 ? Math.ceil(number_services_last_month[service] * (1 + month_growth)) : Math.floor(max_load_service[service] * 0.9);
                }

                number_services = first_month_year;
                number_services_month = first_month_year;
                numbers[_i][service] = [first_month_year];

                for (var j = 1; j < 12; j++) {
                    //считаем со 2 по 12 месяц
                    number_services_month = number_services_month * (1 + month_growth) < max_load_service[service] * 0.9 ? Math.ceil(number_services_month * (1 + month_growth)) : Math.floor(max_load_service[service] * 0.9);
                    number_services += number_services_month;
                    numbers[_i][service].push(number_services_month);
                }
                number_services_last_month[service] = number_services_month;

                cashflow += number_services * services[service]['price'] * services[service]['customers'];
            });
            console.log(numbers);
            cashflows.push(cashflow);
        }
    };

    for (var _i = 1; _i <= selectYears; _i++) {
        _loop(_i);
    }
    console.log(numbers);
    console.log(cashflows);
    field_cashflow.val(abc(cashflows[selectYears - 1]));
}

function countInvestments() {
    investments = parseInt(packages[selectPackage]['lump_sum'][0].replace(/\s+/g, '')) + packages[selectPackage]['initial_investment'];

    if (selectRegion === 'capital_cities') {
        investments = parseInt(packages[selectPackage]['lump_sum'][1].replace(/\s+/g, '')) + packages[selectPackage]['cost_equipment'] + packages[selectPackage]['cost_furniture'];
    } else {
        investments = parseInt(packages[selectPackage]['lump_sum'][0].replace(/\s+/g, '')) + packages[selectPackage]['cost_equipment'] + packages[selectPackage]['cost_furniture'];
    }

    field_investments.val(abc(investments));
    // countNetProfit();
}

function countTransactionCosts() {
    transaction_costs_years = [];
    var transaction_costs_month = void 0;
    var specialist = void 0,
        service = void 0;

    for (var i = 1; i <= selectYears; i++) {
        transaction_costs_year[i] = [];
    }

    for (var _i2 = 1; _i2 <= selectYears; _i2++) {
        for (var j = 1; j <= 12; j++) {
            var cashflow_month = 0;
            transaction_costs_month = selectArea * 700 // аренда помещения
            + 5000 // комуналка
            + 5000 // клининг
            + 5000 // прочие расходы
            + 5000 // общехозяйственные расходы
            + 10000 // бухгалтерия аутсорс
            + 5000 // РКО
            + 5000 // интернет, софт
            + 10000; // маркетинг

            for (service in numbers[_i2]) {
                cashflow_month += numbers[_i2][service][j - 1] * services[service]['price'];
            }

            transaction_costs_month += cashflow_month * 0.2 * (1 + 0.30);

            for (specialist in packages[selectPackage]['specialists']) {
                transaction_costs_month += packages[selectPackage]['specialists'][specialist] * fixed_costs[specialist] * (1 + 0.30);
            }

            transaction_costs_year[_i2].push(transaction_costs_month);
        }
    }

    for (var _i3 = 1; _i3 <= selectYears; _i3++) {
        transaction_costs = 0;
        transaction_costs_year[_i3].forEach(function (transaction_costs_month) {
            transaction_costs += transaction_costs_month;
        });
        transaction_costs_years.push(transaction_costs);
    }

    field_transaction_costs.val(abc(Math.floor(transaction_costs_years[selectYears - 1])));
    // console.log('transaction_costs - ' + transaction_costs_years);
    // console.log('transaction_costs - ');
    // console.log(transaction_costs_year);

    countOperatingProfit();
}

function countNetProfit() {
    net_profit = 0;
    payback_period = 0;
    var dp = Math.pow(1.2, 1 / 12) - 1;
    var depreciation = parseInt(((packages[selectPackage]['cost_equipment'] + packages[selectPackage]['cost_furniture']) / 84).toFixed(2));

    var _loop2 = function _loop2(i) {
        operating_profit[i].forEach(function (operating_profit, j) {
            net_profit += parseInt(((operating_profit - taxes_year[i][j] + depreciation) / Math.pow(1 + dp, j + 1 + (i - 1) * 12)).toFixed(2));
            if (net_profit < investments) {
                payback_period++;
            }
        });
    };

    for (var i = 1; i <= selectYears; i++) {
        _loop2(i);
    }

    profitability_index = net_profit / investments;

    console.log('net_profit - ' + abc(net_profit));

    if (selectYears == 1) {
        $('.franchise-calculator__forecast .net_profit p b').text(selectYears + ' год');
        $('.franchise-calculator__forecast .profitability_index p b').text(selectYears + ' год');
    } else if (selectYears > 4) {
        $('.franchise-calculator__forecast .net_profit p b').text(selectYears + ' лет');
        $('.franchise-calculator__forecast .profitability_index p b').text(selectYears + ' лет');
    } else {
        $('.franchise-calculator__forecast .net_profit p b').text(selectYears + ' года');
        $('.franchise-calculator__forecast .profitability_index p b').text(selectYears + ' года');
    }

    field_net_profit.text(abc(Math.floor(net_profit)) + 'руб.');

    console.log('pl - ' + profitability_index);
    field_profitability_index.text(profitability_index.toFixed(2));

    if (net_profit > investments) {
        $('.franchise-calculator__forecast .payback_period p').text('Срок окупаемости от');
        $('.franchise-calculator__forecast .payback_period span').text(payback_period + ' месяцев');
    } else {
        $('.franchise-calculator__forecast .payback_period p').text('Установите больше срок реализации проекта для расчета окупаемости');
        $('.franchise-calculator__forecast .payback_period span').text('');
    }
}

function countOperatingProfit() {
    var operating_profit_month = void 0;
    var cashflow_month = void 0;

    for (var i = 1; i <= selectYears; i++) {
        operating_profit[i] = [];
    }

    var _loop3 = function _loop3(_i4) {
        var _loop4 = function _loop4(j) {
            cashflow_month = 0;
            operating_profit_month = 0;
            packages[selectPackage]['services'].forEach(function (service) {
                cashflow_month += numbers[_i4][service][j] * services[service]['price'];
            });
            operating_profit_month = cashflow_month - cashflow_month * 0.07 - transaction_costs_year[_i4][j] - (packages[selectPackage]['cost_equipment'] + packages[selectPackage]['cost_furniture']) / 84;
            operating_profit[_i4].push(parseInt(operating_profit_month.toFixed(2)));
        };

        for (var j = 0; j < 12; j++) {
            _loop4(j);
        }
    };

    for (var _i4 = 1; _i4 <= selectYears; _i4++) {
        _loop3(_i4);
    }

    console.log('операционная прибыль - ');
    console.log(operating_profit);
}

function countTaxes() {
    var taxes_month = void 0;
    var cashflow_month = void 0,
        cashflow_period = 0,
        taxes_cashflow_period = void 0,
        operating_profit_period = 0;
    var cashflow_prev_period = 0;

    for (var i = 1; i <= selectYears; i++) {
        taxes_year[i] = [];
    }

    if (selectTaxSystem === 'osn') {
        for (var _i5 = 1; _i5 <= selectYears; _i5++) {
            for (var j = 0; j < 12; j++) {
                if (operating_profit[_i5][j] > 0) {
                    taxes_month = operating_profit[_i5][j] * 0.2;
                } else {
                    taxes_month = 0;
                }
                taxes_year[_i5].push(parseInt(taxes_month.toFixed(2)));
            }
        }
    } else if (selectTaxSystem === 'usn_6') {
        var _loop5 = function _loop5(_i6) {
            var _loop6 = function _loop6(_j) {
                cashflow_month = 0;
                packages[selectPackage]['services'].forEach(function (service) {
                    cashflow_month += numbers[_i6][service][_j] * services[service]['price'];
                });
                taxes_month = cashflow_month * 0.06;
                taxes_year[_i6].push(parseInt(taxes_month.toFixed(2)));
            };

            for (var _j = 0; _j < 12; _j++) {
                _loop6(_j);
            }
        };

        for (var _i6 = 1; _i6 <= selectYears; _i6++) {
            _loop5(_i6);
        }
    } else if (selectTaxSystem === 'usn_15') {
        var _loop7 = function _loop7(_i7) {
            var _loop8 = function _loop8(_j2) {
                packages[selectPackage]['services'].forEach(function (service) {
                    cashflow_period += (numbers[_i7][service][_j2] + numbers[_i7][service][_j2 + 1] + numbers[_i7][service][_j2 + 2]) * services[service]['price'];
                });

                taxes_cashflow_period = cashflow_period * 0.01;
                operating_profit_period += (operating_profit[_i7][_j2] + operating_profit[_i7][_j2 + 1] + operating_profit[_i7][_j2 + 2]) * 0.15;

                if (taxes_cashflow_period > operating_profit_period) {
                    taxes_month = taxes_cashflow_period - cashflow_prev_period;
                    cashflow_prev_period = taxes_month;
                } else {
                    taxes_month = operating_profit_period - cashflow_prev_period;
                    cashflow_prev_period = taxes_month;
                }
                taxes_year[_i7].push(0);
                taxes_year[_i7].push(0);
                taxes_year[_i7].push(parseInt(taxes_month.toFixed(2)));
            };

            for (var _j2 = 0; _j2 < 12; _j2 = _j2 + 3) {
                _loop8(_j2);
            }
        };

        for (var _i7 = 1; _i7 <= selectYears; _i7++) {
            _loop7(_i7);
        }
    }

    console.log('налоги - ');
    console.log(taxes_year);
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