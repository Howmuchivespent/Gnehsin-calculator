// script.js
console.log("JavaScript loaded!");

function calculateSpending() {
    // Get the values from the input fields
    let numCharacters = parseFloat(document.getElementById('numCharacters').value) || 0;
    let minCost = parseFloat(document.getElementById('minCost').value) || 0;
    let maxCost = parseFloat(document.getElementById('maxCost').value) || 0;

    // Calculate the total spending range
    let minTotalSpending = numCharacters * minCost;
    let maxTotalSpending = numCharacters * maxCost;

    // Display the result
    let message = `Total spending on ${numCharacters} 5-star characters: \n`;
    message += `Minimum: $${minTotalSpending.toFixed(2)}\n`;
    message += `Maximum: $${maxTotalSpending.toFixed(2)}`;

    document.getElementById('result').innerText = message;
}

function calculateWeaponSpending() {
    // Get the values from the input fields
    let numWeapons = parseFloat(document.getElementById('numWeapons').value) || 0;
    let minWeaponCost = parseFloat(document.getElementById('minWeaponCost').value) || 0;
    let maxWeaponCost = parseFloat(document.getElementById('maxWeaponCost').value) || 0;

    // Calculate the total spending range
    let minTotalWeaponSpending = numWeapons * minWeaponCost;
    let maxTotalWeaponSpending = numWeapons * maxWeaponCost;

    // Display the result
    let message = `Total spending on ${numWeapons} 5-star weapons: \n`;
    message += `Minimum: $${minTotalWeaponSpending.toFixed(2)}\n`;
    message += `Maximum: $${maxTotalWeaponSpending.toFixed(2)}`;

    document.getElementById('weaponResult').innerText = message;
}