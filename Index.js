let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
displayValue = '';
updateDisplay();
}

function appendToDisplay(value) {
  if (/^[0-9+\-*/().]+$/.test(value)) {
    displayValue += value;
    updateDisplay();
  }
}
