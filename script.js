
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
    // Load inputs

    // projectionStart
    document.getElementById('projectionStart').value = localStorage.getItem('projectionStart') || '2024-10-01';

    // retirementStart
    document.getElementById('retirementStart').value = localStorage.getItem('retirementStart') || '2045-10-01';

    // lifeExpectancy
    document.getElementById('lifeExpectancy').value = localStorage.getItem('lifeExpectancy') || '2070-10-01';


    //preRetirement
    //preRetirementIncomePeriod
    document.getElementById('preRetirementIncomePeriodOutput').innerText = document.getElementById('projectionStart').value + ' - ' + document.getElementById('retirementStart').value;

    //preRetirementIncomeGross
    document.getElementById('preRetirementIncomeGross').value = localStorage.getItem('preRetirementIncomeGross') || 120000;

    // preRetirementIncomeTax
    document.getElementById('preRetirementIncomeTax').value = localStorage.getItem('preRetirementIncomeTax') || 0.4;

    //preRetirementIncomeNet
    document.getElementById('preRetirementIncomeNet').value = localStorage.getItem('preRetirementIncomeNet') || 72000;

    //preRetirementExpensesPeriod
    document.getElementById('preRetirementExpensesPeriodOutput').innerText = document.getElementById('projectionStart').value + ' - ' + document.getElementById('retirementStart').value;

    //preRetirementExpenses
    document.getElementById('preRetirementExpenses').value = localStorage.getItem('preRetirementExpenses') || 45000;

    //retirement
    //retirementIncomePeriod
    document.getElementById('retirementIncomePeriodOutput').innerText = document.getElementById('retirementStart').value + ' - ' + document.getElementById('lifeExpectancy').value;

    //retirementIncomeGross
    document.getElementById('retirementIncomeGross').value = localStorage.getItem('retirementIncomeGross') || 20000;

    //retirementIncomeTax
    document.getElementById('retirementIncomeTax').value = localStorage.getItem('retirementIncomeTax') || 0.2;

    //retirementIncomeNet
    document.getElementById('retirementIncomeNet').value = localStorage.getItem('retirementIncomeNet') || 16000;

    //retirementExpensesPeriod
    document.getElementById('retirementExpensesPeriodOutput').innerText = document.getElementById('retirementStart').value + ' - ' + document.getElementById('lifeExpectancy').value;

    //retirementExpenses
    document.getElementById('retirementExpenses').value = localStorage.getItem('retirementExpenses') || 25000;

    // pensionGoalRisk
    document.getElementById('pensionGoalRisk').value = localStorage.getItem('pensionGoalRisk') || 1.5;

    // pensionTargetSum
    document.getElementById('pensionTargetSum').value = localStorage.getItem('pensionTargetSum') || 100000;
    // pensionTargetSumDate
    document.getElementById('pensionTargetSumDate').value = localStorage.getItem('pensionTargetSumDate') || localStorage.getItem('retirementStart');
    // pensionMonthlyWithdrawalSum
    document.getElementById('pensionMonthlyWithdrawalSum').value = localStorage.getItem('pensionMonthlyWithdrawalSum') || 2000;
    // pensionMonthlyWithdrawalPeriodStart
    document.getElementById('pensionMonthlyWithdrawalPeriodStart').value = localStorage.getItem('pensionMonthlyWithdrawalPeriodStart') || localStorage.getItem('retirementStart');
    // pensionMonthlyWithdrawalPeriodEnd
    document.getElementById('pensionMonthlyWithdrawalPeriodEnd').value = localStorage.getItem('pensionMonthlyWithdrawalPeriodEnd') || localStorage.getItem('lifeExpectancy');
    // sippRegular
    document.getElementById('sippRegular').value = localStorage.getItem('sippRegular') || 500;
    // sippOneOff
    document.getElementById('sippOneOff').value = localStorage.getItem('sippOneOff') || 0;
    // sippTransfer
    document.getElementById('sippTransfer').value = localStorage.getItem('sippTransfer') || 0;


    // investmentGoalRisk
    document.getElementById('investmentGoalRisk').value = localStorage.getItem('investmentGoalRisk') || 2.5;
    // investmentTargetSum
    document.getElementById('investmentTargetSum').value = localStorage.getItem('investmentTargetSum') || 50000;
    // investmentTargetSumDate
    document.getElementById('investmentTargetSumDate').value = localStorage.getItem('investmentTargetSumDate') || localStorage.getItem('retirementStart');
    // isaRegular
    // isaOneOff
    // giaRegular
    // giaOneOff
    document.getElementById('isaRegular').value = localStorage.getItem('isaRegular') || 500;
    document.getElementById('isaOneOff').value = localStorage.getItem('isaOneOff') || 0;
    document.getElementById('giaRegular').value = localStorage.getItem('giaRegular') || 200;
    document.getElementById('giaOneOff').value = localStorage.getItem('giaOneOff') || 0;


}

// Function to save data to localStorage
function saveData() {
    // Save inputs

    // projectionStart
    localStorage.setItem('projectionStart', document.getElementById('projectionStart').value);
    // retirementStart
    localStorage.setItem('retirementStart', document.getElementById('retirementStart').value);
    // lifeExpectancy
    localStorage.setItem('lifeExpectancy', document.getElementById('lifeExpectancy').value);
    //preRetirementIncomeGross
    localStorage.setItem('preRetirementIncomeGross', document.getElementById('preRetirementIncomeGross').value);
    // Save dropdowns
    // preRetirementIncomeTax
    localStorage.setItem('preRetirementIncomeTax', document.getElementById('preRetirementIncomeTax').value);
    document.getElementById('output7').innerText = 'preRetirementIncomeTax: ' + document.getElementById('preRetirementIncomeTax').value;


}

// Function to clear all data
function clearData() {
    localStorage.clear();

    // Clear inputs
    // projectionStart
    document.getElementById('projectionStart').value = '2024-10-01';
    document.getElementById('output1').innerText = 'projectionStart: 2024-10-01';

    // retirementStart
    document.getElementById('retirementStart').value = '2045-10-01';
    document.getElementById('output2').innerText = 'retirementStart: 2045-10-01';

    // lifeExpectancy
    document.getElementById('lifeExpectancy').value = '2070-10-01';
    document.getElementById('output3').innerText = 'Input 3: 2070-10-01';

    document.getElementById('preRetirementIncomeGross').value = 120000;
    document.getElementById('output4').innerText = 'preRetirementIncomeGross: 120000';

    document.getElementById('input5').value = '';
    document.getElementById('output5').innerText = 'Input 5: ';

    document.getElementById('input6').value = '';
    document.getElementById('output6').innerText = 'Input 6: ';

    // Clear dropdowns
    document.getElementById('preRetirementIncomeTax').value = 0.4;
    document.getElementById('output7').innerText = 'preRetirementIncomeTax 1: 40%';

    document.getElementById('dropdown2').value = 'Option A';
    document.getElementById('output8').innerText = 'Dropdown 2: ';

    document.getElementById('dropdown3').value = 'Option X';
    document.getElementById('output9').innerText = 'Dropdown 3: ';

    document.getElementById('dropdown4').value = 'Choice 1';
    document.getElementById('output10').innerText = 'Dropdown 4: ';
}

// Event listeners for buttons
document.getElementById('saveBtn').addEventListener('click', saveData);
document.getElementById('clearBtn').addEventListener('click', clearData);

// Load data when page loads
window.onload = loadData;





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

    // Calculate years
    const years = [];
    const expenses = [];
    const income = [];
    
    const startYear = projectionStart.getFullYear();
    const preEndYear = retirementStart.getFullYear();
    const postStartYear = retirementStart.getFullYear();
    const postEndYear = lifeExpectancy.getFullYear();

    // Fill years and expenses for pre-retirement period
    for (let year = startYear; year <= preEndYear; year++) {
        years.push(year);
        expenses.push(preRetirementExpenses);
        income.push(preRetirementIncomeNet);
    }

    // Fill years and expenses for post-retirement period
    for (let year = postStartYear; year <= postEndYear; year++) {
        years.push(year);
        expenses.push(retirementExpenses);
        income.push(retirementIncomeNet);
    }

    // Update chart with new data
    chart.xAxis[0].setCategories(years);
    chart.series[0].setData(expenses);
    chart.series[1].setData(income);
}

// Create Highcharts chart
const chart = Highcharts.chart('container2', {

    chart: {
        type: 'areaspline',
        height: 500,
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
    ]
});

// Run the calculateAndUpdateChart function on page load
document.addEventListener('DOMContentLoaded', function() {
    calculateAndUpdateChart();
});

// Event listener for the "update" button
document.getElementById('updateChart').addEventListener('click', calculateAndUpdateChart);