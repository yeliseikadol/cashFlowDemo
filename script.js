
// projectionStart
// retirementStart
// lifeExpectancy
// preRetirementIncomePeriod
// preRetirementIncomeGross
// preRetirementIncomeTax
// preRetirementIncomeNet
// preRetirementExpensesPeriod
// preRetirementExpenses
// retirementIncomePeriod
// retirementIncomeGross
// retirementIncomeTax
// retirementIncomeNet
// retirementExpensesPeriod
// retirementExpenses
// pensionGoalRisk
// pensionTargetSum
// pensionTargetSumDate
// pensionMonthlyWithdrawalSum
// pensionMonthlyWithdrawalPeriodStart
// pensionMonthlyWithdrawalPeriodEnd
// sippRegular
// sippOneOff
// sippTransfer
// investmentGoalRisk
// investmentTargetSum
// investmentTargetSumDate
// investmentMonthlyWithdrawalSum
// investmentMonthlyWithdrawalPeriod
// isaRegular
// isaOneOff
// isaTransfer
// giaRegular
// giaOneOff
// giaTransfer



// Function to load data from localStorage and display it
function loadData() {
    document.getElementById('clientName').value = localStorage.getItem('clientName') || '';
    document.getElementById('projectionStart').value = localStorage.getItem('projectionStart') || '2024-10-01';
    document.getElementById('retirementStart').value = localStorage.getItem('retirementStart') || '2045-10-01';
    document.getElementById('lifeExpectancy').value = localStorage.getItem('lifeExpectancy') || '2070-10-01';
    document.getElementById('preRetirementIncomePeriodOutput').innerText = document.getElementById('projectionStart').value + ' - ' + document.getElementById('retirementStart').value;
    document.getElementById('preRetirementIncomeGross').value = localStorage.getItem('preRetirementIncomeGross') || 120000;
    document.getElementById('preRetirementIncomeTax').value = localStorage.getItem('preRetirementIncomeTax') || 0.4;
    document.getElementById('preRetirementIncomeNet').value = localStorage.getItem('preRetirementIncomeNet') || 72000;
    document.getElementById('preRetirementExpensesPeriodOutput').innerText = document.getElementById('projectionStart').value + ' - ' + document.getElementById('retirementStart').value;
    document.getElementById('preRetirementExpenses').value = localStorage.getItem('preRetirementExpenses') || 45000;
    document.getElementById('retirementIncomePeriodOutput').innerText = document.getElementById('retirementStart').value + ' - ' + document.getElementById('lifeExpectancy').value;
    document.getElementById('retirementIncomeGross').value = localStorage.getItem('retirementIncomeGross') || 20000;
    document.getElementById('retirementIncomeTax').value = localStorage.getItem('retirementIncomeTax') || 0.2;
    document.getElementById('retirementIncomeNet').value = localStorage.getItem('retirementIncomeNet') || 16000;
    document.getElementById('retirementExpensesPeriodOutput').innerText = document.getElementById('retirementStart').value + ' - ' + document.getElementById('lifeExpectancy').value;
    document.getElementById('retirementExpenses').value = localStorage.getItem('retirementExpenses') || 25000;
    document.getElementById('pensionGoalRisk').value = localStorage.getItem('pensionGoalRisk') || 1.5;
    document.getElementById('pensionGoalRiskOutput').innerText = document.getElementById('pensionGoalRisk').value + '%' || 1.5;
    document.getElementById('pensionTargetSum').value = localStorage.getItem('pensionTargetSum') || 20000;
    document.getElementById('pensionTargetSumDate').value = localStorage.getItem('pensionTargetSumDate') || document.getElementById('retirementStart').value;
    document.getElementById('pensionMonthlyWithdrawalSum').value = localStorage.getItem('pensionMonthlyWithdrawalSum') || 1200;
    document.getElementById('pensionMonthlyWithdrawalPeriodStart').value = localStorage.getItem('pensionMonthlyWithdrawalPeriodStart') || document.getElementById('retirementStart').value;
    document.getElementById('pensionMonthlyWithdrawalPeriodEnd').value = localStorage.getItem('pensionMonthlyWithdrawalPeriodEnd') || document.getElementById('lifeExpectancy').value;
    document.getElementById('sippRegular').value = localStorage.getItem('sippRegular') || 700;
    document.getElementById('sippOneOff').value = localStorage.getItem('sippOneOff') || 2000;
    document.getElementById('sippTransfer').value = localStorage.getItem('sippTransfer') || 85000;
    document.getElementById('investmentGoalRisk').value = localStorage.getItem('investmentGoalRisk') || 4;
    document.getElementById('investmentGoalRiskOutput').innerText = document.getElementById('investmentGoalRisk').value || 4;
    document.getElementById('investmentTargetSum').value = localStorage.getItem('investmentTargetSum') || 50000;
    document.getElementById('investmentTargetSumDate').value = localStorage.getItem('investmentTargetSumDate') || document.getElementById('retirementStart').value;
    document.getElementById('isaRegular').value = localStorage.getItem('isaRegular') || 500;
    document.getElementById('isaOneOff').value = localStorage.getItem('isaOneOff') || 0;
    document.getElementById('giaRegular').value = localStorage.getItem('giaRegular') || 200;
    document.getElementById('giaOneOff').value = localStorage.getItem('giaOneOff') || 0;


}

// Function to save data to localStorage
function saveData() {
    localStorage.setItem('clientName', document.getElementById('clientName').value);
    localStorage.setItem('projectionStart', document.getElementById('projectionStart').value);
    localStorage.setItem('retirementStart', document.getElementById('retirementStart').value);
    localStorage.setItem('lifeExpectancy', document.getElementById('lifeExpectancy').value);
    localStorage.setItem('preRetirementIncomePeriodOutput', document.getElementById('preRetirementIncomePeriodOutput').innerText);
    localStorage.setItem('preRetirementIncomeGross', document.getElementById('preRetirementIncomeGross').value);
    localStorage.setItem('preRetirementIncomeTax', document.getElementById('preRetirementIncomeTax').value);
    localStorage.setItem('preRetirementIncomeNet', document.getElementById('preRetirementIncomeNet').value);
    localStorage.setItem('preRetirementExpensesPeriodOutput', document.getElementById('preRetirementExpensesPeriodOutput').innerText);
    localStorage.setItem('preRetirementExpenses', document.getElementById('preRetirementExpenses').value);
    localStorage.setItem('retirementIncomePeriodOutput', document.getElementById('retirementIncomePeriodOutput').innerText);
    localStorage.setItem('retirementIncomeGross', document.getElementById('retirementIncomeGross').value);
    localStorage.setItem('retirementIncomeTax', document.getElementById('retirementIncomeTax').value);
    localStorage.setItem('retirementIncomeNet', document.getElementById('retirementIncomeNet').value);
    localStorage.setItem('retirementExpensesPeriodOutput', document.getElementById('retirementExpensesPeriodOutput').innerText);
    localStorage.setItem('retirementExpenses', document.getElementById('retirementExpenses').value);
    localStorage.setItem('pensionGoalRisk', document.getElementById('pensionGoalRisk').value);
    localStorage.setItem('pensionTargetSum', document.getElementById('pensionTargetSum').value);
    localStorage.setItem('pensionTargetSumDate', document.getElementById('pensionTargetSumDate').value);
    localStorage.setItem('pensionMonthlyWithdrawalSum', document.getElementById('pensionMonthlyWithdrawalSum').value);
    localStorage.setItem('pensionMonthlyWithdrawalPeriodStart', document.getElementById('pensionMonthlyWithdrawalPeriodStart').value);
    localStorage.setItem('pensionMonthlyWithdrawalPeriodEnd', document.getElementById('pensionMonthlyWithdrawalPeriodEnd').value);
    localStorage.setItem('sippRegular', document.getElementById('sippRegular').value);
    localStorage.setItem('sippOneOff', document.getElementById('sippOneOff').value);
    localStorage.setItem('sippTransfer', document.getElementById('sippTransfer').value);
    localStorage.setItem('investmentGoalRisk', document.getElementById('investmentGoalRisk').value);
    localStorage.setItem('investmentTargetSum', document.getElementById('investmentTargetSum').value);
    localStorage.setItem('investmentTargetSumDate', document.getElementById('investmentTargetSumDate').value);
    localStorage.setItem('isaRegular', document.getElementById('isaRegular').value);
    localStorage.setItem('isaOneOff', document.getElementById('isaOneOff').value);
    localStorage.setItem('giaRegular', document.getElementById('giaRegular').value);
    localStorage.setItem('giaOneOff', document.getElementById('giaOneOff').value);
}

// Function to clear all data
function clearData() {
    localStorage.clear();
}

// Event listeners for buttons
document.getElementById('saveBtn').addEventListener('click', saveData);
document.getElementById('clearBtn').addEventListener('click', clearData);

// Load data when page loads
window.onload = function() {
    loadData();
    calculateAndUpdateChart();
};





// Function to calculate data for each year and update chart
function calculateAndUpdateChart() {
    // Get values from inputs
    const preRetirementExpenses = parseFloat(document.getElementById('preRetirementExpenses').value);
    const preRetirementIncomeNet = parseFloat(document.getElementById('preRetirementIncomeNet').value);
    const projectionStart = new Date(document.getElementById('projectionStart').value);
    const retirementStart = new Date(document.getElementById('retirementStart').value);

    const retirementExpenses = parseFloat(document.getElementById('retirementExpenses').value);
    const retirementIncomeNet = parseFloat(document.getElementById('retirementIncomeNet').value);
    const lifeExpectancy = new Date(document.getElementById('lifeExpectancy').value);


    //sipp projection
    const sippOneOff = parseFloat(document.getElementById('sippOneOff').value);
    const sippTransfer = parseFloat(document.getElementById('sippTransfer').value);
    const sippRegular = parseFloat(document.getElementById('sippRegular').value);
    const isaOneOff = parseFloat(document.getElementById('isaOneOff').value);
    const isaRegular = parseFloat(document.getElementById('isaRegular').value);
    const giaOneOff = parseFloat(document.getElementById('giaOneOff').value);
    const giaRegular = parseFloat(document.getElementById('giaRegular').value);
    const pensionGoalRisk = parseFloat(document.getElementById('pensionGoalRisk').value) / 100;
    const investmentGoalRisk = parseFloat(document.getElementById('investmentGoalRisk').value) / 100;
    const pensionTargetSum = parseFloat(document.getElementById('pensionTargetSum').value);
    const pensionMonthlyWithdrawalSum = parseFloat(document.getElementById('pensionMonthlyWithdrawalSum').value);
    const pensionTargetSumDate = new Date(document.getElementById('pensionTargetSumDate').value);
    const investmentTargetSumDate = new Date(document.getElementById('investmentTargetSumDate').value);
    const investmentTargetSum = new Date(document.getElementById('investmentTargetSum').value);
    


    // Calculate years
    const years = [];
    const expenses = [];
    const income = [];

    let sippBalance = sippOneOff + sippTransfer;
    const sippProjection = [];

    let isaBalance = isaOneOff;
    const isaProjection = [];

    let giaBalance = giaOneOff;
    const giaProjection = [];
    
    const startYear = projectionStart.getFullYear();
    const preEndYear = retirementStart.getFullYear();
    const postStartYear = retirementStart.getFullYear();
    const postEndYear = lifeExpectancy.getFullYear();
    const pensionTargetSumYear = pensionTargetSumDate.getFullYear();
    const investmentTargetSumYear = investmentTargetSumDate.getFullYear();

    // Fill years and expenses for pre-retirement period
    for (let year = startYear; year <= preEndYear; year++) {
        years.push(year);
        expenses.push(preRetirementExpenses);
        income.push(preRetirementIncomeNet);

        if (year === pensionTargetSumYear) {
            sippBalance -= pensionTargetSum; // одноразовое снятие
        }

        isaBalance += isaRegular * 12;
        isaBalance *= (1 + investmentGoalRisk);

        giaBalance += giaRegular * 12;
        giaBalance *= (1 + investmentGoalRisk);

        if (year >= investmentTargetSumYear) {
            isaBalance = 0;
            giaBalance = 0;
        }


        sippBalance += sippRegular * 12; // ежегодное пополнение
        sippBalance *= (1 + pensionGoalRisk); // рост на заданный процент
        sippProjection.push(sippBalance.toFixed(0));

        
        isaProjection.push(isaBalance.toFixed(0));
        giaProjection.push(giaBalance.toFixed(0));
    }

    // Fill years and expenses for post-retirement period
    for (let year = postStartYear; year <= postEndYear; year++) {
        years.push(year);
        expenses.push(retirementExpenses);
        income.push(retirementIncomeNet);

        if (year === pensionTargetSumYear) {
            sippBalance -= pensionTargetSum; // одноразовое снятие
        }

        isaBalance += isaRegular * 12;
        isaBalance *= (1 + investmentGoalRisk);
        giaBalance += giaRegular * 12;
        giaBalance *= (1 + investmentGoalRisk);

        if (year >=investmentTargetSumYear) {
            isaBalance = 0;
            giaBalance = 0;
        }

        sippBalance -= pensionMonthlyWithdrawalSum * 12; // ежегодное снятие
        sippBalance *= (1 + pensionGoalRisk); // рост на заданный процент
        sippProjection.push(sippBalance.toFixed(0));

        isaProjection.push(isaBalance.toFixed(0));
        giaProjection.push(giaBalance.toFixed(0));
    }
    
    const sippProjectionFormatted = sippProjection.map(value => parseFloat(value));
    const isaProjectionFormatted = isaProjection.map(value => parseFloat(value));
    const giaProjectionFormatted = giaProjection.map(value => parseFloat(value));

    // Update chart with new data
    chart.xAxis[0].setCategories(years);
    chart.series[0].setData(expenses);
    chart.series[1].setData(income);
    chart.series[2].setData(sippProjectionFormatted, true, true);
    chart.series[3].setData(isaProjectionFormatted, true, true);
    chart.series[4].setData(giaProjectionFormatted, true, true);
}

// Create Highcharts chart
const chart = Highcharts.chart('container2', {

    chart: {
        type: 'areaspline',
        height: 57 + '%',
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: [], // Years will be dynamically added
        crosshair: true,
        accessibility: {
            description: 'Y'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        shared: true,
        headerFormat: '<b>Cash Flow for {point.x}</b><br>'

    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [
        {
            name: 'Expenses',
            data: [] // Data will be dynamically added
        },
        {
            name: 'Income',
            data: [] // Data will be dynamically added
        }
        ,
        {
            type: 'line',
            name: 'SIPP Projection',
            data: [] // Data will be dynamically added
        },
        {
            type: 'line',
            name: 'ISA Projection',
            data: [] // Data will be dynamically added
        },
        {
            type: 'line',
            name: 'GIA Projection',
            data: [] // Data will be dynamically added
        }
    ]
});

// Run the calculateAndUpdateChart function on page load
document.addEventListener('DOMContentLoaded', function() {
    calculateAndUpdateChart();
});


// Event listener for the "update" button
// document.getElementById('updateChart').addEventListener('click', calculateAndUpdateChart);


function calculateIncomePreRetirement() {
    const salary = parseFloat(document.getElementById('preRetirementIncomeGross').value);
    const deduction = parseFloat(document.getElementById('preRetirementIncomeTax').value);
    const result = salary - (salary * deduction);
    document.getElementById('preRetirementIncomeNet').value = `${result.toFixed(0)}`;
}

function calculateIncomeRetirement() {
    const salary = parseFloat(document.getElementById('retirementIncomeGross').value);
    const deduction = parseFloat(document.getElementById('retirementIncomeTax').value);
    const result = salary - (salary * deduction);
    document.getElementById('retirementIncomeNet').value = `${result.toFixed(0)}`;
}

// Add event listeners to update the result automatically
document.getElementById('preRetirementIncomeGross').addEventListener('input', calculateIncomePreRetirement);
document.getElementById('preRetirementIncomeTax').addEventListener('change', calculateIncomePreRetirement);
document.getElementById('retirementIncomeGross').addEventListener('input', calculateIncomeRetirement);
document.getElementById('retirementIncomeTax').addEventListener('change', calculateIncomeRetirement);
document.getElementById('preRetirementIncomeGross').addEventListener('input', calculateAndUpdateChart);
document.getElementById('preRetirementIncomeTax').addEventListener('change', calculateAndUpdateChart);
document.getElementById('preRetirementExpenses').addEventListener('input', calculateAndUpdateChart);
document.getElementById('retirementIncomeGross').addEventListener('input', calculateAndUpdateChart);
document.getElementById('retirementIncomeTax').addEventListener('change', calculateAndUpdateChart);
document.getElementById('retirementExpenses').addEventListener('input', calculateAndUpdateChart);

document.getElementById('pensionGoalRisk').addEventListener('change', calculateAndUpdateChart);
document.getElementById('pensionTargetSum').addEventListener('input', calculateAndUpdateChart);
document.getElementById('pensionMonthlyWithdrawalSum').addEventListener('input', calculateAndUpdateChart);
document.getElementById('sippOneOff').addEventListener('input', calculateAndUpdateChart);
document.getElementById('sippRegular').addEventListener('input', calculateAndUpdateChart);
document.getElementById('sippTransfer').addEventListener('input', calculateAndUpdateChart);

document.getElementById('investmentGoalRisk').addEventListener('change', calculateAndUpdateChart);
document.getElementById('investmentTargetSum').addEventListener('input', calculateAndUpdateChart);
document.getElementById('isaOneOff').addEventListener('input', calculateAndUpdateChart);
document.getElementById('isaRegular').addEventListener('input', calculateAndUpdateChart);
document.getElementById('giaOneOff').addEventListener('input', calculateAndUpdateChart);
document.getElementById('giaRegular').addEventListener('input', calculateAndUpdateChart);

document.getElementById('pensionTargetSumDate').addEventListener('input', calculateAndUpdateChart);
document.getElementById('investmentTargetSumDate').addEventListener('input', calculateAndUpdateChart);

document.getElementById('pensionGoalRisk').addEventListener('change', function() {
    document.getElementById('pensionGoalRiskOutput').innerText = document.getElementById('pensionGoalRisk').value + '%'
})

document.getElementById('investmentGoalRisk').addEventListener('change', function() {
    document.getElementById('investmentGoalRiskOutput').innerText = document.getElementById('investmentGoalRisk').value + '%'
})

// Initial calculation on page load
document.addEventListener('DOMContentLoaded', calculateIncomePreRetirement);
document.addEventListener('DOMContentLoaded', calculateIncomeRetirement);


document.getElementById('hideIncomesContent').addEventListener('click', function() {
    const icon = this.querySelector('.material-symbols-outlined');
    var div = document.getElementById('incomesContent');
    div.classList.toggle('hidden');

    if (div.classList.contains('hidden')) {
        icon.textContent = 'keyboard_arrow_down';
    } else {
        icon.textContent = 'keyboard_arrow_up';
    }
});

document.getElementById('hideRetirementContent').addEventListener('click', function() {
    const icon = this.querySelector('.material-symbols-outlined');
    var div = document.getElementById('retirementContent');
    div.classList.toggle('hidden');

    if (div.classList.contains('hidden')) {
        icon.textContent = 'keyboard_arrow_down';
    } else {
        icon.textContent = 'keyboard_arrow_up';
    }
});

document.getElementById('hidePensionGoal').addEventListener('click', function() {
    const icon = this.querySelector('.material-symbols-outlined');
    var div = document.getElementById('pensionGoalContent');
    div.classList.toggle('hidden');

    if (div.classList.contains('hidden')) {
        icon.textContent = 'keyboard_arrow_down';
    } else {
        icon.textContent = 'keyboard_arrow_up';
    }
});

document.getElementById('hideInvestmentGoal').addEventListener('click', function() {
    const icon = this.querySelector('.material-symbols-outlined');
    var div = document.getElementById('investmentGoalContent');
    div.classList.toggle('hidden');

    if (div.classList.contains('hidden')) {
        icon.textContent = 'keyboard_arrow_down';
    } else {
        icon.textContent = 'keyboard_arrow_up';
    }
});