// import 'babel-polyfill';
import 'expose-loader?$!expose-loader?jQuery!jquery';
// import device from 'device/device.js';

let ww = $(window).width(),
    wh = $(window).height(),
    isMobile = $('body').hasClass('mobile'),

    packages = {
        home: {},
        standart: {},
        maximum: {}
    },

    services = {
        consultation: {duration: 30, price: 1000, customers: 1},
        individual_training: {duration: 60, price: 2000, customers: 1},
        massage: {duration: 30, price: 600, customers: 1},
        group_training: {duration: 60, price: 500, customers: 5},
        reaterra: {duration: 60, price: 500, customers: 1},
        avantron: {duration: 20, price: 500, customers: 1},
        physiotherapy: {duration: 20, price: 300, customers: 1}
    },

    max_load_service = {}, // максимальная загрузка центра по услугам

    cashflows = [], // денежные поступления по годам за выбранный период

    numbers = {}, // кол-во услуг за каждый месяц за выбранный период

    transaction_costs_year = {},

    transaction_costs_years = [],

    operating_profit = {},

    taxes_year = {},

    fixed_costs = {
        doctor: 25000,
        instructor: 20000,
        masseur: 15000,
        nurse: 15000,
        director: 30000,
        administrator: 20000
    },

    scenarios = {
        optimistic: {consultation: 30, individual_training: 70, massage: 35, group_training: 30, physiotherapy: 30, reaterra: 30, avantron: 30},
        moderately_optimistic: {consultation: 25, individual_training: 60, massage: 30, group_training: 25, physiotherapy: 25, reaterra: 25, avantron: 25},
        base: {consultation: 20, individual_training: 50, massage: 25, group_training: 20, physiotherapy: 20, reaterra: 20, avantron: 20},
        moderately_pessimistic: {consultation: 15, individual_training: 40, massage: 17, group_training: 15, physiotherapy: 15, reaterra: 15, avantron: 15},
        pessimistic: {consultation: 10, individual_training: 30, massage: 10, group_training: 10, physiotherapy: 10, reaterra: 10, avantron: 10},
        first_month: {consultation: 5, individual_training: 10, massage: 5, group_training: 5, physiotherapy: 2, reaterra: 5, avantron: 2}
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
            masseur: 1,
            nurse: 1,
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
            nurse: 1,
            director: 1,
            administrator: 3
        }
    },

    cashflow,
    investments,
    transaction_costs,
    net_profit,
    profitability_index,
    payback_period,
    taxes,

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

    selectArea,
    selectYears,
    selectRegion,
    selectTaxSystem,
    selectDevelopmentScenario,
    selectWorkingDays,
    selectWorkingHours;

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
        field_transaction_costs_label.text(selectYears);
        field_cashflow_label.text(selectYears);
        if (selectPackage === 'home') {
            field_range_area.val(50);
            field_area.val(50);
        } else if (selectPackage === 'standart') {
            field_range_area.val(150);
            field_area.val(150);
        } else {
            field_range_area.val(200);
            field_area.val(200);
        }


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
        let number_services = 0; // кол-во услуг за год
        let number_services_month; // кол-во услуг в текущем месяце
        let number_services_last_month = {}; //сохраняем кол-во услуг за последний месяц года, для расчета 1-ого месяца следующего года

        for (let i = 1; i<= selectYears; i ++) {
            numbers[i] = {};
        }

        for (let i = 1; i <= selectYears; i++) {
            if (i === 1) {
                packages[selectPackage]['services'].forEach(function (service) {
                    let first_month = Math.floor(max_load_service[service] *
                        scenarios['first_month'][service] / 100);
                    let first_year = Math.floor(max_load_service[service] *
                        scenarios[selectDevelopmentScenario][service] / 100);
                    let annual_growth = (first_year - first_month) / first_month;
                    let month_growth = Math.pow(1 + annual_growth, 1/12) - 1;

                    number_services = first_month;
                    number_services_month = first_month;
                    numbers[i][service] = [first_month];

                    for (let j = 1; j < 12; j++) { //считаем со 2 по 12 месяц
                        number_services_month = Math.floor(number_services_month * (1 + month_growth));
                        number_services += number_services_month;
                        numbers[i][service].push(number_services_month);
                    }

                    cashflow += number_services * services[service]['price'] * services[service]['customers'];
                });

                cashflows.push(cashflow);
            } else {
                cashflow = 0;
                let first_month_year;

                let annual_growth = 0.15;
                let month_growth = Math.pow(1 + annual_growth, 1/12) - 1;

                packages[selectPackage]['services'].forEach(function (service) {
                    if (i === 2) {
                        first_month_year = Math.floor(max_load_service[service] *
                            scenarios[selectDevelopmentScenario][service] / 100);
                    } else {
                        if (service === 'physiotherapy' || service === 'avantron') {
                            first_month_year = number_services_last_month[service] * (1 + month_growth) < max_load_service[service] * 0.9 ?  Math.floor(number_services_last_month[service] * (1 + month_growth)) : Math.floor(max_load_service[service] * 0.9);
                        } else {
                            first_month_year = number_services_last_month[service] * (1 + month_growth) < max_load_service[service] * 0.9 ?  Math.ceil(number_services_last_month[service] * (1 + month_growth)) : Math.floor(max_load_service[service] * 0.9);
                        }
                    }

                    number_services = first_month_year;
                    number_services_month = first_month_year;
                    numbers[i][service] = [first_month_year];

                    if (service === 'physiotherapy' || service === 'avantron') {
                        for (let j = 1; j < 12; j++) { //считаем со 2 по 12 месяц
                            number_services_month = number_services_month * (1 + month_growth) < max_load_service[service] * 0.9 ? Math.floor(number_services_month * (1 + month_growth)) : Math.floor(max_load_service[service] * 0.9);
                            number_services += number_services_month;
                            numbers[i][service].push(number_services_month);
                        }
                    } else {
                        for (let j = 1; j < 12; j++) { //считаем со 2 по 12 месяц
                            number_services_month = number_services_month * (1 + month_growth) < max_load_service[service] * 0.9 ? Math.ceil(number_services_month * (1 + month_growth)) : Math.floor(max_load_service[service] * 0.9);
                            number_services += number_services_month;
                            numbers[i][service].push(number_services_month);
                        }
                    }

                    number_services_last_month[service] = number_services_month;

                    cashflow += number_services * services[service]['price'] * services[service]['customers'];
                });
                console.log(numbers);
                cashflows.push(cashflow);
            }
        }
        console.log(numbers);
        console.log(cashflows);
        field_cashflow.val(abc(cashflows[selectYears-1]));
    }

    function countInvestments() {
        investments =
            parseInt(packages[selectPackage]['lump_sum'][0].replace(/\s+/g, '')) +
            packages[selectPackage]['initial_investment'];

        if (selectRegion === 'capital_cities') {
            investments = parseInt(packages[selectPackage]['lump_sum'][1].replace(/\s+/g, ''))
            + packages[selectPackage]['cost_equipment']
            + packages[selectPackage]['cost_furniture'];
        } else {
            investments = parseInt(packages[selectPackage]['lump_sum'][0].replace(/\s+/g, ''))
                + packages[selectPackage]['cost_equipment']
                + packages[selectPackage]['cost_furniture'];
        }

        field_investments.val(abc(investments));
        // countNetProfit();
    }

    function countTransactionCosts() {
        transaction_costs_years = [];
        let transaction_costs_month;
        let specialist, service;

        for (let i = 1; i<= selectYears; i ++) {
            transaction_costs_year[i] = [];
        }

        for (let i = 1; i<= selectYears; i ++) {
            for (let j = 1; j <= 12; j++) {
                let cashflow_month = 0;
                transaction_costs_month = (selectArea * 700 // аренда помещения
                    + 5000 // комуналка
                    + 5000 // клининг
                    + 5000 // прочие расходы
                    + 5000 // общехозяйственные расходы
                    + 10000 // бухгалтерия аутсорс
                    + 5000 // РКО
                    + 5000 // интернет, софт
                    + 15000); // маркетинг

                // for (service in numbers[i]) {
                //     cashflow_month += numbers[i][service][j-1] * services[service]['price'] * services[service]['customers'];
                // }

                for (service in numbers[i]) {
                    if (service === 'consultation' || service === 'individual_training' || service === 'massage') {
                        cashflow_month = numbers[i][service][j-1] * services[service]['price'] * services[service]['customers'];
                        transaction_costs_month += cashflow_month * 0.2 * (1 + 0.30);
                    }
                }

                // transaction_costs_month += cashflow_month * 0.2 * (1 + 0.30);

                for(specialist in packages[selectPackage]['specialists']) {
                    transaction_costs_month += packages[selectPackage]['specialists'][specialist] * fixed_costs[specialist] * (1 + 0.30);
                }

                transaction_costs_year[i].push(transaction_costs_month);
            }
        }

        for (let i = 1; i<= selectYears; i ++) {
            transaction_costs = 0;
            transaction_costs_year[i].forEach(function (transaction_costs_month) {
                transaction_costs += transaction_costs_month;
            });
            transaction_costs_years.push(transaction_costs);
        }


        field_transaction_costs.val(abc(Math.floor(transaction_costs_years[selectYears-1])));
        // console.log('transaction_costs - ' + transaction_costs_years);
        // console.log('transaction_costs - ');
        // console.log(transaction_costs_year);

        countOperatingProfit();
    }

    function countNetProfit() {
        net_profit = 0;
        payback_period = 0;
        let dp;
        if (selectPackage === 'standart') {
            dp = Math.pow(1.1, (1/12)) - 1;
        } else {
            dp = Math.pow(1.2, (1/12)) - 1;
        }

        let depreciation = parseFloat(((packages[selectPackage]['cost_equipment'] + packages[selectPackage]['cost_furniture'])/84).toFixed(2));

        for (let i = 1; i <= selectYears; i++) {
            operating_profit[i].forEach(function (operating_profit, j) {
                net_profit += parseFloat(((operating_profit - taxes_year[i][j] + depreciation) / Math.pow(1 + dp, j + 1 + (i-1) * 12)).toFixed(8));
                if (net_profit < 0) {
                    payback_period++;
                }
            });
        }

        profitability_index = net_profit/investments;

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

        field_net_profit.text(abc(parseInt(net_profit)) + ' руб.');

        console.log('pl - ' + profitability_index);
        field_profitability_index.text(profitability_index.toFixed(2));

        if (net_profit > investments) {
            $('.franchise-calculator__forecast .payback_period p').text('Срок окупаемости от');
            $('.franchise-calculator__forecast .payback_period span').text(payback_period + ' месяцев');
        } else {
            $('.franchise-calculator__forecast .payback_period p').text('Установите больше срок реализации проекта для расчета окупаемости')
            $('.franchise-calculator__forecast .payback_period span').text('');
        }

    }
    
    function countOperatingProfit() {
        let operating_profit_month;
        let cashflow_month;

        for (let i = 1; i<= selectYears; i ++) {
            operating_profit[i] = [];
        }

        for (let i = 1; i<= selectYears; i ++) {
            for (let j = 0; j < 12; j++) {
                cashflow_month = 0;
                operating_profit_month = 0;
                packages[selectPackage]['services'].forEach(function (service) {
                    cashflow_month += numbers[i][service][j] * services[service]['price'] * services[service]['customers'];
                });
                operating_profit_month = cashflow_month - cashflow_month * 0.07 - transaction_costs_year[i][j] - (packages[selectPackage]['cost_equipment'] + packages[selectPackage]['cost_furniture'])/84;
                operating_profit[i].push(parseFloat(operating_profit_month.toFixed(2)));
            }
        }

        console.log('операционная прибыль - ');
        console.log(operating_profit);
    }
    
    function countTaxes() {
        let taxes_month;
        let cashflow_month, cashflow_period = 0, taxes_cashflow_period, operating_profit_period = 0;
        let cashflow_prev_period = 0;

        for (let i = 1; i<= selectYears; i ++) {
            taxes_year[i] = [];
        }

        if (selectTaxSystem === 'osn') {
            for (let i = 1; i<= selectYears; i ++) {
                for (let j = 0; j < 12; j++) {
                    if (operating_profit[i][j] > 0) {
                        taxes_month = operating_profit[i][j] * 0.2;
                    } else {
                        taxes_month = 0;
                    }
                    taxes_year[i].push(parseFloat(taxes_month.toFixed(2)));
                }
            }
        } else if (selectTaxSystem === 'usn_6') {
            for (let i = 1; i<= selectYears; i++) {
                for (let j = 0; j < 12; j++) {
                    cashflow_month = 0;
                    packages[selectPackage]['services'].forEach(function (service) {
                        cashflow_month += numbers[i][service][j] * services[service]['price'];
                    });
                    taxes_month = cashflow_month * 0.06;
                    taxes_year[i].push(parseFloat(taxes_month.toFixed(2)));
                }
            }
        } else if (selectTaxSystem === 'usn_15') {
            for (let i = 1; i<= selectYears; i++) {
                cashflow_period = 0;
                operating_profit_period = 0;
                cashflow_prev_period = 0;
                for (let j = 0; j < 12; j = j + 3) {
                    packages[selectPackage]['services'].forEach(function (service) {
                        cashflow_period += (numbers[i][service][j] + numbers[i][service][j + 1] + numbers[i][service][j + 2]) * services[service]['price'];
                    });

                    taxes_cashflow_period = cashflow_period * 0.01;
                    operating_profit_period += (operating_profit[i][j] + operating_profit[i][j + 1] + operating_profit[i][j + 2]) * 0.15;

                    if (taxes_cashflow_period > operating_profit_period) {
                        taxes_month = taxes_cashflow_period - cashflow_prev_period;
                        cashflow_prev_period = taxes_month;
                    } else {
                        taxes_month = operating_profit_period - cashflow_prev_period;
                        cashflow_prev_period = taxes_month;
                    }
                    taxes_year[i].push(0);
                    taxes_year[i].push(0);
                    taxes_year[i].push(parseFloat(taxes_month.toFixed(2)));
                }
            }
        }

        console.log('налоги - ');
        console.log(taxes_year);

    }

    function abc(n) {
        // n += "";
        // n = new Array(4 - n.length % 3).join("U") + n;
        // return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
        return (n + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
    }
