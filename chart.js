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

    