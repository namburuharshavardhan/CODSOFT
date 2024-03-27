let displayValue = '';

function appendNumber(num) {
    displayValue += num;
    updateDisplay();
}

function setOperator(operator) {
    displayValue += ` ${operator} `;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
