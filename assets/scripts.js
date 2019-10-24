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
        consultation: 30,
        individual_training: 60,
        massage: 30,
        group_training: 60,
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

    tax_system = {
        type_1 : 6,
        type_2 : 15
    },

    scenarios = {
        optimistic: {consultation: 30, individual_training: 70, massage: 35, group_training: 30, physiotherapy: 30},
        moderately_optimistic: {consultation: 25, individual_training: 60, massage: 30, group_training: 25, physiotherapy: 25},
        base: {consultation: 20, individual_training: 50, massage: 25, group_training: 20, physiotherapy: 20},
        moderately_pessimistic: {consultation: 15, individual_training: 40, massage: 17, group_training: 15, physiotherapy: 15},
        pessimistic: {consultation: 10, individual_training: 30, massage: 10, group_training: 10, physiotherapy: 10},
        first_month: {consultation: 5, individual_training: 10, massage: 5, group_training: 5, physiotherapy: 2}
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
                masseur: 1,
            },
            director: 1,
            administrator: 1,
            accountant: 1,
            RCO: 1,
            IT: 1,
            marketer: 1,
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
                masseur: 2,
            },
            director: 1,
            administrator: 2,
            accountant: 1,
            RCO: 1,
            IT: 1,
            marketer: 1,
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
        services: ['consultation', 'individual_training', 'massage', 'group_training', 'physiotherapy'],
        workplaces: {
            consultation: 1,
            individual_training: 6,
            massage: 1,
            group_training: 1,
            physiotherapy: 2
        },
        specialists: {
            medical_staff: {
                doctor: 3,
                instructor: 4,
                masseur: 2,
            },
            director: 1,
            administrator: 4,
            accountant: 1,
            RCO: 1,
            IT: 1,
            marketer: 1,
        }
    },

    package_area = $('.franchise-calculator__initial-data .area span'),
    package_discount_equipment = $('.franchise-calculator__initial-data .discount-equipment>span'),
    package_discount_training = $('.franchise-calculator__initial-data .discount-training>span'),
    package_lump_sum = $('.franchise-calculator__initial-data .lump-sum span'),

    field_cashflow = $('#cashflow'),
    field_investments = $('#investments'),
    field_transaction_costs = $('#transaction_costs'),
    field_area = $('#area'),
    field_range_area = $('#range_area'),

    cashflow,
    investments,
    transaction_costs,
    net_profit,

    selectArea = $('#area').val(),
    selectTaxSystem = $('#tax_system option').filter(':selected').val(),
    selectDevelopmentScenario = $('#development_scenario option').filter(':selected').val(),
    selectWorkingDays = $('#working_days').val(),
    selectWorkingHours = $('#working_hours').val(),
    
    selectPackage = $('.franchise-calculator__packages input').filter(':checked').attr('id');

    packages['home'] = home_package,
    packages['standart'] = standart_package,
    packages['maximum'] = maximum_package,

    $(document).ready(function () {
        changePackage();
    });

    $('.franchise-calculator__packages input').change(function () {
        changePackage();
        countCashflow();
    });

    field_range_area.on('input', function () {
        field_area.val($(this).val());
        selectArea = field_area.val();
        countInvestments();
        countTransactionCosts();
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

    $('#tax_system').change(function () {
        selectTaxSystem = $('#tax_system option').filter(':selected').val();
        countNetProfit();
    });

    function changePackage() {
        selectPackage = $('.franchise-calculator__packages input').filter(':checked').attr('id');
        console.log(selectPackage);
        insertData();
        countCashflow();
        countInvestments();
        countTransactionCosts();
    }
    
    function insertData() {
        package_area.text('от ' + packages[selectPackage]['area'][0] + ' м');
        package_discount_equipment.text(packages[selectPackage]['discount_equipment'] + '%');
        package_discount_training.text(packages[selectPackage]['discount_training'] + '%');
        package_lump_sum.html('От ' + packages[selectPackage]['lump_sum'][0] + ' руб.' + '<br>' + 'до ' + packages[selectPackage]['lump_sum'][1] + ' руб.');
        field_range_area.attr('min', packages[selectPackage]['area'][0]).attr('max', packages[selectPackage]['area'][1]);
        field_range_area.val(packages[selectPackage]['area'][0]);
        field_area.val(packages[selectPackage]['area'][0]);
        selectArea = field_area.val();
    }
    
    function countCashflow() {
        cashflow = 0;
        packages[selectPackage]['services'].forEach(function (service) {
            cashflow +=
                Math.floor(
                selectWorkingHours * 60 /
                services[service] *
                selectWorkingDays *
                scenarios[selectDevelopmentScenario][service] / 100) *
                12 *
                packages[selectPackage]['workplaces'][service] *
                1500;
            console.log(service + cashflow);
        });
        field_cashflow.val(abc(cashflow));
        console.log(abc(cashflow));
        countNetProfit();
    }

    function countInvestments() {
        investments =
            // parseInt(packages[selectPackage]['lump_sum'][0].replace(/\s+/g, '')) +
            packages[selectPackage]['initial_investment'];

        field_investments.val(abc(investments));
    }

    function countTransactionCosts() {
        let specialist, member;
        transaction_costs =
            (selectArea * 700 + 5000 + 5000) * 12 +
            cashflow * 0.2 +
            cashflow * 0.2 * 0.302;

        for(specialist in packages[selectPackage]['specialists']) {
            if (typeof packages[selectPackage]['specialists'][specialist]  === 'object') {
                for(member in packages[selectPackage]['specialists'][specialist]) {
                    transaction_costs += packages[selectPackage]['specialists'][specialist][member]
                        * fixed_costs[member] * 12 +
                        packages[selectPackage]['specialists'][specialist][member]
                        * fixed_costs[member] * 12 * 0.302;
                }
            } else {
                transaction_costs += packages[selectPackage]['specialists'][specialist] * fixed_costs[specialist] * 12;
            }
        }

        field_transaction_costs.val(abc(Math.floor(transaction_costs)));
        console.log('transaction_costs - ' + abc(transaction_costs));
    }

    function countNetProfit() {
        net_profit = cashflow -
            transaction_costs -
            packages[selectPackage]['cost_equipment']/84 * 12 -
            cashflow * 0.07 -
            cashflow * tax_system[selectTaxSystem]/100;

        // field_transaction_costs.val(abc(Math.floor(transaction_costs)));
        console.log('net_profit - ' + abc(Math.floor(net_profit)));

        let DCF = 0;

        for (var i = 1; i <= 5; i++) {
            DCF += cashflow/Math.pow(1.2, i);
        }

        console.log('DCF - ' + Math.floor(DCF));
    }

    function abc(n) {
        n += "";
        n = new Array(4 - n.length % 3).join("U") + n;
        return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }
