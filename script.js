let finalString = "";
let operator = "";
let result = 0;

// add two numbers together
function add(number1, number2) {
    return Number(number1) + Number(number2);
}

// subtract one number from the other
function subtract(number1, number2) {
    return Number(number1) - Number(number2);
}

// multiply two numbers together
function multiply(number1, number2) {
    return Number(number1) * Number(number2);
}

// divide one number through the other
function divide(number1, number2) {
    return Number(number1) / Number(number2);
}

function operate(number1, number2, operator) {
    let result = 0;
    switch(operator) {
        case "+":
            result = add(number1, number2);
            displayResultInCalculator(result);
            return result;
        case "-":
            result = subtract(number1, number2);
            displayResultInCalculator(result);
            return result;
        case "*":
            result = multiply(number1, number2);
            displayResultInCalculator(result);
            return result;
        case "/":
            result = divide(number1, number2);
            displayResultInCalculator(result);
            return result;
        default:
            console.log(`${operator} ist kein gültiger Operator`);
            break;
    }
    return result;
}

function splitFinalStringIntoPieces() {
    let allNumbers = findAllNumbers(finalString.split(""));
    let allOperators = findAllOperators(finalString.split(""));
    result = operate(allNumbers[0], allNumbers[1], allOperators[0]);

    for (let i = 2; i < finalString.length; i++) {
        result = operate(result, allNumbers[i], allOperators[i - 1]); // 6 + 6 + 6 = 12, 6, +
    }

            /**
         * "56+6+6" > ["5","6,"+","6","+","6", "9"]

            algo für eruierung aller zahlen erstellen > [56,6,6,9]
            algo für eruierung aller operatoren erstellen > [+,+,*]

            operator-call mit:
                zahlen[0], zahlen[1], operator[0] > 56 + 6 = 62
                62, 	   zahlen[2], operator[1] > 62 + 6 = 68
                68,	       zahlen[3], operator[2] > 68 + 9 = 77
         */

}

function clearDisplay() {
    const displayField = document.querySelector("#calculator-display");  
    displayField.value = "";
    result = null;
}

function displayResultInCalculator(result) {
    const displayField = document.querySelector("#calculator-display");  
    displayField.value = result;
    result = null;
}

// Schreibt in das Display Feld die geklickten Zahlen
function writeAtDisplay(value) {
    if(value !== "=") {
        const displayField = document.querySelector("#calculator-display");  
        if(displayField.value === "1 + 1 = 4") {
            displayField.value = ""; 
        }     
        displayField.value += value;
        finalString = displayField.value;
    } else {
        alert("yo")
    }
}
  
// algo für eruierung aller zahlen erstellen > [56,6,6,9]
function findAllNumbers(finalString) {
    
    let numbers = "";
    const finalNumbers = [];

    // console.log(finalString.length);

    for(let i = 0; i < finalString.length; i++) {
        // console.log(finalString[i]);
        if(Number(finalString[i]) >= 0 && Number(finalString[i]) <= 9) {
            numbers += finalString[i];
            if(i === finalString.length - 1 && numbers.length > 0) {
                finalNumbers.push(numbers);
            }
        } else {
            finalNumbers.push(numbers);
            numbers = "";
        }
    }
    return finalNumbers;
}

// algo für eruierung aller operatoren erstellen > [+,+,*]
function findAllOperators(finalString) {

    const finalOperators = [];

    for(let i = 0; i < finalString.length; i++) {
        if(!(Number(finalString[i]) >= 0 && Number(finalString[i]) <= 9)) {
            finalOperators.push(finalString[i]);
        } 
    }
    return finalOperators;
}

// setzte EventListener auf jeden Button und triggert function writeAtDisplay bei Klick
const allBtns = document.querySelectorAll("button");
allBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.innerText !== "clear" && btn.innerText !== "=") {
            writeAtDisplay(btn.innerText);
        } else {
            if(btn.innerText === "clear") {
                clearDisplay();
            } else if (btn.innerText === "=") {
                clearDisplay();
                splitFinalStringIntoPieces();
                // 
            }
        }
        
    });
});
