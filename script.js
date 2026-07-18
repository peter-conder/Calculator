function add(a,b) {return a + b;}       //basic math functions
function subtract(a,b) {return a - b;}
function multiply(a,b) {return a * b;}
function divide(a,b) {return a / b;}

let number;         //basic variables to be used in operation
let operator;
let number2;
let result;

let display = document.querySelector(".display");
const buttons = document.querySelectorAll(".notEnter");

let operation = [];     //array where variables are stored

let continueOperation = true;
let isResult = false;

let digits = [];
for (let j = 0; j < 100000; j++) {
    digits.push(j);
}

const digitString = digits.map(item => item.toString())

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if (isResult === true) {
            operation.length = 0;   //clears the display
            isResult = false;       //turns isResult to false
        }

        number = button.dataset.value;      //when a button is clicked its value is added to operation array
        operation.push(number);
        
        
            let lastInt = operation[operation.length - 1];
            let pentultimateInt = operation[operation.length - 2];
            //let digits = ["1","2","3","4","5","6","7","8","9","0"];     // combines consectutive digits into multi-digit numbers
            
            if (digitString.includes(lastInt) && digitString.includes(pentultimateInt)) {
            let combinedInt = pentultimateInt + '' + lastInt;
            operation.splice(-2, 2);
            operation.push(combinedInt);
    } else return;
    });
});


function operate(number, number2, operator) {       //operation function
    if (operator === "+") {
        let int1 = Number(number);
        let int2 = Number(number2);
    return (add(int1, int2)); 
    } else if (operator === "-") {
        return (subtract(number, number2));
    } else if (operator === "*") {
        return (multiply(number, number2));
    } else if (operator === "/") {
        continueDivision = true;

        if (number2 === "0") {
            alert("Hmmm. You tried to do something inappropriate.");        //returns a Stormlight Archive reference when you try to divide by zero (IYKYK)
            return "0";
        }
        if (continueDivision = true) {       //adds clean rounding
        let divResult = (divide(number, number2));
        let roundResult = Math.round(divResult * 100) / 100;  
        return roundResult; 
        }
    }
}


const enter = document.querySelector("#enter");

enter.addEventListener("click", () => {         //detects if multiple operators
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
        //This is the actual math function
        result = operate(operation.at(0), operation.at(2), operation.at(1));    
        operation.length = 0;
        isResult = true;
        if (result !=0) {
        operation.push(result);}
        display.textContent = result;
    } if (continueOperation === false) {return};
   
});

const clear = document.querySelector(".clear");     //clears the display
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

