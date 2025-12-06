// Get the display input element
const display = document.getElementById('display');

// Function to append characters to the display
function appendInput(value) {
    display.value += value;
}

// Function to clear the entire display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        // Use the built-in eval() function to calculate the result of the expression
        // NOTE: While simple, eval() should be avoided in production for security reasons.
        // For this simple practice project, it is sufficient.
        display.value = eval(display.value);
    } catch (error) {
        // Display 'Error' if the expression is invalid
        display.value = 'Error';
    }
}