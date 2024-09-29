let displayValue = ''; 

function input(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}


function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}


function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString(); // Evaluate the expression
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error'; // Show error if invalid input
    }
}
