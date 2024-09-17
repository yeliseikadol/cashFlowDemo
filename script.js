
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
    document.getElementById