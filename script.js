const display = document.getElementById("display");
let isDegreeMode = true;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value) {
        if (display.value.charAt(0) === "-") {
            display.value = display.value.slice(1);
        } else {
            display.value = "-" + display.value;
        }
    }
}

function toggleDegreeMode() {
    isDegreeMode = !isDegreeMode;
    document.getElementById("modeText").textContent = isDegreeMode ? "DEG" : "RAD";
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
}

function calculateSin() {
    try {
        let value = parseFloat(display.value);
        let angle = isDegreeMode ? toRadians(value) : value;
        display.value = Math.sin(angle).toFixed(10).replace(/\.?0+$/, "");
    } catch (error) {
        display.value = "Error";
    }
}

function calculateCos() {
    try {
        let value = parseFloat(display.value);
        let angle = isDegreeMode ? toRadians(value) : value;
        display.value = Math.cos(angle).toFixed(10).replace(/\.?0+$/, "");
    } catch (error) {
        display.value = "Error";
    }
}

function calculateTan() {
    try {
        let value = parseFloat(display.value);
        let angle = isDegreeMode ? toRadians(value) : value;
        display.value = Math.tan(angle).toFixed(10).replace(/\.?0+$/, "");
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSqrt() {
    try {
        let value = parseFloat(display.value);
        if (value < 0) {
            display.value = "Error";
        } else {
            display.value = Math.sqrt(value).toFixed(10).replace(/\.?0+$/, "");
        }
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        let value = parseFloat(display.value);
        display.value = (value * value).toFixed(10).replace(/\.?0+$/, "");
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePower() {
    try {
        display.value += "^";
    } catch (error) {
        display.value = "Error";
    }
}

function calculatePercent() {
    try {
        let value = parseFloat(display.value);
        display.value = (value / 100).toFixed(10).replace(/\.?0+$/, "");
    } catch (error) {
        display.value = "Error";
    }
}

function calculate() {
    try {
        let expression = display.value;
        // Replace ^ with ** for exponentiation
        expression = expression.replace(/\^/g, "**");
        // Replace π with Math.PI
        expression = expression.replace(/Math\.PI/g, Math.PI);
        
        let result = eval(expression);
        display.value = result.toFixed(10).replace(/\.?0+$/, "");
    } catch (error) {
        display.value = "Error";
    }
}