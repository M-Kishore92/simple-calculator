const display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === 'C') {
        clearDisplay();
        return;
    }
    
    // Handle initial '0' replacement for numbers
    if (display.value === '0' && !isNaN(parseInt(value)) && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        // Warning: 'eval' is used for simplicity but should be avoided in production code.
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function backspace() {
    // Remove the last character, and if the result is empty, set it back to '0'
    display.value = display.value.slice(0, -1) || '0';
}