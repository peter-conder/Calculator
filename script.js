//Basic math functions
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

let number;
let operator;
let number2;
let result;

//create a new function that takes number, number2, the operator, and the 4 math functions above and uses them.

function operate(num, num2, op) {
    if (op === "+") {
    return add(num, num2);
    } else if (op === "-") {
        return subtract(num, num2);
    } else if (op === "*") {
        return multiply(num, num2);
    } else if (op === "/") {
        return divide(num, num2);
    }
}

console.log(operate(9, 9, "0"));