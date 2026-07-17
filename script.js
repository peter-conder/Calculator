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


function operate(number, number2, operator) {
    if (op === "+") {
    return add(number, number2);
    } else if (operator === "-") {
        return subtract(number, number2);
    } else if (operator === "*") {
        return multiply(number, number2);
    } else if (operator === "/") {
        return divide(number, number2);
    }
}

let display = document.querySelector(".display");
display.textContent = number;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        number = button.dataset.value;
        display.textContent = number;
        console.log(button.dataset.value);
    })
});

let operation = [];


//^^^ this makes it so when you press a button you get the button value and the display updates as well.

