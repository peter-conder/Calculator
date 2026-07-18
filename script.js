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
const buttons = document.querySelectorAll(".notEnter");
let operation = [];




buttons.forEach((button) => {
    button.addEventListener("click", () => {
        number = button.dataset.value;
        //display.textContent = number;
        operation.push(number);
    })
});

function operate(number, number2, operator) {
    if (operator === "+") {
        let int1 = Number(number);
        let int2 = Number(number2);
    return (add(int1, int2)); 
    } else if (operator === "-") {
        return (subtract(number, number2));
    } else if (operator === "*") {
        return (multiply(number, number2));
    } else if (operator === "/") {
        if (number2 === "0") {
            alert("Hmmm. You tried to do something inappropriate.");
            operation.length = 0;
            display.textContent = "";
            return;
        }
        let divResult = (divide(number, number2));
        let roundResult = Math.round(divResult * 100) / 100;  
        return roundResult;
    }
}

/**
 * If the equation ends in an operand, terminate the equality function.
 */

const enter = document.querySelector("#enter");

enter.addEventListener("click", () => {
        let continueOperation = true;
        //checks if there are multiple operators and removes the middle one 
        let remove = ["+", "-", "/", "*"];
        let operatorArray = [];
        operation.forEach(x => {
            if (remove.includes(x)) operatorArray.push(x);
        });
        if (operatorArray.length > 1) {
            operation.splice(1,1);
            alert("too many operators!");
            continueOperation = false;
        }
        if (continueOperation === true) {
        result = operate(operation.at(0), operation.at(2), operation.at(1));
        console.log(result);
        operation.length = 0;
        operation.push(result);
    display.textContent = result;
    } if (continueOperation === false) {return};
   
});

/*
    result = operate(operation.at(0), operation.at(2), operation.at(1));
    console.log(result);
    operation.length = 0;
    operation.push(result);
    display.textContent = result; }); */



const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    operation.length = 0;
    if (result) {
        result = 0;
        display.textContent = "0";
    } else if (result = NaN) {
        result = 0;
        display.textContent = "0"
    };
});

