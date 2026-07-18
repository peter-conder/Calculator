//Basic math functions
function add(a,b) {return a + b;}
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}
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
        operation.push(number);
        let lastInt = operation[operation.length - 1];
        let pentultimateInt = operation[operation.length - 2];
        //console.log(lastInt);

        let digits = ["1","2","3","4","5","6","7","8","9","0"];
        if (digits.includes(lastInt) && digits.includes(pentultimateInt)) {
        let combinedInt = lastInt + '' + pentultimateInt;
        operation.splice(-2, 2);
        operation.push(combinedInt);
        //console.log(operation);
    } else return;
    });
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
            //.log(operation);
            return;
        }
        let divResult = (divide(number, number2));
        let roundResult = Math.round(divResult * 100) / 100;  
        return roundResult;
    }
}


const enter = document.querySelector("#enter");

enter.addEventListener("click", () => {
        let continueOperation = true;
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


