// Function to calculate data for each year and update chart
function calculateAndUpdateChart() {
    // Get values from inputs
    const preRetirementExpenses = parseFloat(document.getElementById('preRetirementExpenses').value);
    const projectionStart = new Date(document.getElementById('projectionStart').value);
    const retirementStart = new Date(document.getElementById('retirementStart').value);

    const retirementExpenses = parseFloat(document.getElementById('retirementExpenses').value);
    const lifeExpectancy = new Date(document.getElementById('lifeExpectancy').value);

    // Calculate years
    const years = [];
    const expenses = [];
    
    const startYear = projectionStart.getFullYear();
    const preEndYear = retirementStart.getFullYear();
    const postStartYear = retirementStart.getFullYear();
    const postEndYear = lifeExpectancy.getFullYear();

    // Fill years and expenses for pre-retirement period
    for (let year = startYear; year <= preEndYear; year++) {
        years.push(year);
        expenses.push(preRetirementExpenses);
    }

    // Fill years and expenses for post-retirement period
    for (let year = postStartYear; year <= postEndYear; year++) {
        years.push(year);
        expenses.push(retirementExpenses);
    }

    // Update chart with new data
    chart.xAxis[0].setCategories(years);
    chart.series[0].setData(expenses);
}

// Create Highcharts chart
const chart = Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cash Flow',
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
            text: 'Income'
        }
    },
    tooltip: {
        valueSuffix: ' £'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Expenses',
            data: [] // Data will be dynamically added
        }
    ]
});

// Event listener for the "update" button
document.getElementById('updateChart').addEventListener('click', calculateAndUpdateChart);