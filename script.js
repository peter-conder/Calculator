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


let display = document.querySelector(".display");
//display.textContent = number;

const buttons = document.querySelectorAll(".notEnter");

let operation = [];




buttons.forEach((button) => {
    button.addEventListener("click", () => {
        number = button.dataset.value;
        //display.textContent = number;
        operation.push(number);
        let operationString = operation.toString();
    })
});

function operate(number, number2, operator) {
    let result;
    if (operator === "+") {
        let int1 = Number(number);
        let int2 = Number(number2);
    result = (add(int1, int2));
    return result;
    } else if (operator === "-") {
        result = (subtract(number, number2));
        return result;
    } else if (operator === "*") {
        result = (multiply(number, number2));
        return result;
    } else if (operator === "/") {
        result = (divide(number, number2));
        return result;
    }
}

const enter = document.querySelector("#enter");

enter.addEventListener("click", () => {
    result2 = operate(operation.at(0), operation.at(2), operation.at(1));
    console.log(result2);
    operation.length = 0;
    operation.push(result2);

})